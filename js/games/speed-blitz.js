/**
 * Speed Vocabulary Blitz:
 * A 60-second lightning-round vocabulary drill with combo multipliers,
 * escalating pitch cues, fire streak effects, and instant SRS review integration.
 */

window.NihongoSpeedBlitz = (function() {
  let containerEl = null;
  let timerInterval = null;
  let timeRemaining = 60;
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let correctCount = 0;
  let totalCount = 0;
  let isRoundActive = false;
  let missedWords = [];
  let currentQuestion = null;

  function init(container) {
    containerEl = container;
  }

  function getAllVocab() {
    const list = [];
    if (window.N5_DATA && window.N5_DATA.vocabulary) list.push(...window.N5_DATA.vocabulary);
    if (window.N4_DATA && window.N4_DATA.vocabulary) list.push(...window.N4_DATA.vocabulary);
    if (window.N3_DATA && window.N3_DATA.vocabulary) list.push(...window.N3_DATA.vocabulary);
    if (window.N2_DATA && window.N2_DATA.vocabulary) list.push(...window.N2_DATA.vocabulary);
    if (window.N1_DATA && window.N1_DATA.vocabulary) list.push(...window.N1_DATA.vocabulary);
    return list;
  }

  function startBlitz() {
    if (timerInterval) clearInterval(timerInterval);
    timeRemaining = 60;
    score = 0;
    combo = 0;
    maxCombo = 0;
    correctCount = 0;
    totalCount = 0;
    missedWords = [];
    isRoundActive = true;

    renderBlitzUi();
    nextQuestion();
    startTimer();
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timeRemaining--;
      updateHud();
      if (timeRemaining <= 0) {
        endBlitz();
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
  }

  function renderBlitzUi() {
    if (!containerEl) return;
    containerEl.innerHTML = `
      <div class="blitz-container">
        <!-- Blitz HUD -->
        <div class="blitz-hud">
          <div class="hud-item">
            <span class="hud-label">Score</span>
            <span id="blitz-score" class="hud-value">0</span>
          </div>
          <div class="hud-item">
            <span class="hud-label">Timer</span>
            <span id="blitz-timer" class="hud-value hud-timer">60s</span>
          </div>
          <div class="hud-item">
            <span class="hud-label">Streak</span>
            <span id="blitz-streak" class="hud-value hud-combo">0</span>
          </div>
        </div>

        <!-- Timer progress bar -->
        <div class="blitz-time-bar">
          <div id="blitz-progress-fill" class="blitz-time-fill" style="width: 100%;"></div>
        </div>

        <!-- Question Arena -->
        <div class="blitz-card" id="blitz-card">
          <div class="blitz-word-row">
            <h2 id="blitz-target-word" class="blitz-target-word">--</h2>
            <button id="blitz-audio-btn" class="btn-icon-audio" title="Pronounce word">🔊</button>
          </div>
          <p id="blitz-reading-hint" class="blitz-reading-hint">--</p>
        </div>

        <!-- 4 Option Choices -->
        <div class="blitz-options-grid" id="blitz-options">
          <button class="blitz-opt-btn" data-index="0">Option 1</button>
          <button class="blitz-opt-btn" data-index="1">Option 2</button>
          <button class="blitz-opt-btn" data-index="2">Option 3</button>
          <button class="blitz-opt-btn" data-index="3">Option 4</button>
        </div>
      </div>
    `;

    document.getElementById('blitz-audio-btn').addEventListener('click', () => {
      if (currentQuestion && window.NihongoAudio) {
        window.NihongoAudio.speak(currentQuestion.target.audioKey || currentQuestion.target.word);
      }
    });

    const optButtons = containerEl.querySelectorAll('.blitz-opt-btn');
    optButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (!isRoundActive) return;
        const selectedIndex = parseInt(btn.getAttribute('data-index'), 10);
        handleAnswer(selectedIndex, btn);
      });
    });
  }

  function nextQuestion() {
    const vocabList = getAllVocab();
    if (vocabList.length < 4) return;

    // Pick 1 target and 3 distractors
    const shuffled = [...vocabList].sort(() => Math.random() - 0.5);
    const target = shuffled[0];
    const distractors = shuffled.slice(1, 4);

    const options = [target.meaning, ...distractors.map(d => d.meaning)];
    // Shuffle options
    const targetMeaning = target.meaning;
    options.sort(() => Math.random() - 0.5);
    const correctIndex = options.indexOf(targetMeaning);

    currentQuestion = {
      target,
      options,
      correctIndex
    };

    const wordEl = document.getElementById('blitz-target-word');
    const readingEl = document.getElementById('blitz-reading-hint');
    const optButtons = containerEl.querySelectorAll('.blitz-opt-btn');

    if (wordEl) wordEl.textContent = target.word;
    if (readingEl) readingEl.textContent = `${target.reading} (${target.romaji || ''})`;

    // Automatically pronounce word
    if (window.NihongoAudio) {
      window.NihongoAudio.speak(target.audioKey || target.word);
    }

    optButtons.forEach((btn, idx) => {
      btn.className = 'blitz-opt-btn';
      btn.textContent = options[idx];
      btn.disabled = false;
    });
  }

  function handleAnswer(selectedIndex, clickedBtn) {
    totalCount++;
    const isCorrect = (selectedIndex === currentQuestion.correctIndex);
    const optButtons = containerEl.querySelectorAll('.blitz-opt-btn');
    optButtons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
      correctCount++;
      combo++;
      if (combo > maxCombo) maxCombo = combo;

      const multiplier = Math.min(Math.floor(combo / 2) + 1, 5);
      const points = 50 * multiplier;
      score += points;

      clickedBtn.classList.add('opt-correct');

      if (window.NihongoAudio) {
        window.NihongoAudio.playCombo(multiplier);
      }

      if (multiplier >= 5 && window.NihongoState) {
        window.NihongoState.unlockBadge('speed_demon');
      }

      updateHud();
      setTimeout(nextQuestion, 400); // Quick transition
    } else {
      combo = 0;
      clickedBtn.classList.add('opt-wrong');
      // Highlight correct button
      optButtons[currentQuestion.correctIndex].classList.add('opt-correct');

      missedWords.push(currentQuestion.target);

      if (window.NihongoAudio) {
        window.NihongoAudio.playError();
      }

      updateHud();
      setTimeout(nextQuestion, 900);
    }
  }

  function updateHud() {
    const scoreEl = document.getElementById('blitz-score');
    const timeEl = document.getElementById('blitz-timer');
    const streakEl = document.getElementById('blitz-streak');
    const fillEl = document.getElementById('blitz-progress-fill');

    if (scoreEl) scoreEl.textContent = score;
    if (timeEl) {
      timeEl.textContent = `${timeRemaining}s`;
      if (timeRemaining <= 10) timeEl.classList.add('time-warning');
    }
    if (streakEl) {
      streakEl.textContent = combo;
      if (combo >= 4) streakEl.classList.add('streak-fire');
      else streakEl.classList.remove('streak-fire');
    }
    if (fillEl) {
      fillEl.style.width = `${(timeRemaining / 60) * 100}%`;
    }
  }

  function endBlitz() {
    stopTimer();
    isRoundActive = false;

    if (window.NihongoAudio) window.NihongoAudio.playFanfare();

    const xpEarned = Math.round(score / 10);
    if (window.NihongoState) {
      window.NihongoState.addXp(xpEarned, 'Speed Vocabulary Blitz');
      window.NihongoState.recordHighScore('speedBlitz', score);
    }

    showSummaryModal(xpEarned);
  }

  function showSummaryModal(xpEarned) {
    const accuracy = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    const modal = document.createElement('div');
    modal.className = 'game-modal-backdrop';
    modal.innerHTML = `
      <div class="game-modal-dialog">
        <div class="victory-header">
          <span class="victory-icon">⚡</span>
          <h2>Blitz Round Complete!</h2>
          <p>Your reflexes and vocabulary recall were tested!</p>
        </div>
        <div class="victory-stats">
          <div class="victory-stat-item">
            <span class="label">Total Score</span>
            <span class="value highlight">${score}</span>
          </div>
          <div class="victory-stat-item">
            <span class="label">Accuracy</span>
            <span class="value">${accuracy}% (${correctCount}/${totalCount})</span>
          </div>
          <div class="victory-stat-item">
            <span class="label">Max Streak</span>
            <span class="value">${maxCombo}</span>
          </div>
          <div class="victory-stat-item">
            <span class="label">XP Earned</span>
            <span class="value highlight">+${xpEarned} XP</span>
          </div>
        </div>

        ${missedWords.length > 0 ? `
          <div class="missed-words-section">
            <div class="missed-words-title">Missed Words (${missedWords.length}):</div>
            <div class="missed-words-chips">
              ${missedWords.slice(0, 5).map(w => `<span class="word-chip">${w.word} (${w.meaning.split(',')[0]})</span>`).join('')}
            </div>
            <button id="add-missed-srs-btn" class="btn btn-secondary btn-sm mt-2">📥 Add Missed Words to SRS Review Queue</button>
          </div>
        ` : ''}

        <div class="victory-actions">
          <button id="blitz-retry-btn" class="btn btn-primary">Play Another Round</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const srsBtn = modal.querySelector('#add-missed-srs-btn');
    if (srsBtn) {
      srsBtn.addEventListener('click', () => {
        if (window.NihongoSRS) {
          missedWords.forEach(w => {
            window.NihongoSRS.addItem({
              id: `vocab-blitz-${w.word}`,
              type: 'Vocabulary',
              level: 'Mixed',
              front: w.word,
              backReading: `${w.reading} (${w.romaji || ''})`,
              backMeaning: w.meaning,
              example: w.example || ''
            });
          });
          srsBtn.textContent = '✅ Added to SRS!';
          srsBtn.disabled = true;
        }
      });
    }

    modal.querySelector('#blitz-retry-btn').addEventListener('click', () => {
      modal.remove();
      startBlitz();
    });
  }

  return {
    init,
    startBlitz
  };
})();
