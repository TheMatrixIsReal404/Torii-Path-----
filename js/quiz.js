/**
 * Comprehensive Quiz Engine:
 * Dynamic quizzes for every level with varied question types:
 * - Multiple choice (Grammar & Nuance)
 * - Audio-prompt listening comprehension (TTS audio playback)
 * - Sentence unscrambling (interactive token ordering)
 * - Fill-in-the-blank grammar checks
 * Instant pedagogical explanations for correct and incorrect answers.
 */

window.NihongoQuiz = (function() {
  let containerEl = null;
  let currentQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let userAnswers = []; // [ { question, selected, isCorrect } ]
  let activeLevel = 'N5';
  let unscrambleSelected = []; // for unscramble type questions

  function init(container) {
    containerEl = container;
  }

  function startQuiz(levelKey = 'N5') {
    activeLevel = levelKey;
    let questions = [];

    if (levelKey === 'N5' && window.N5_DATA) questions = window.N5_DATA.quizQuestions;
    else if (levelKey === 'N4' && window.N4_DATA) questions = window.N4_DATA.quizQuestions;
    else if (levelKey === 'N3' && window.N3_DATA) questions = window.N3_DATA.quizQuestions;
    else if (levelKey === 'N2' && window.N2_DATA) questions = window.N2_DATA.quizQuestions;
    else if (levelKey === 'N1' && window.N1_DATA) questions = window.N1_DATA.quizQuestions;

    if (!questions || questions.length === 0) {
      if (containerEl) {
        containerEl.innerHTML = `<p class="p-4 text-center">No questions found for ${levelKey}.</p>`;
      }
      return;
    }

    currentQuestions = [...questions];
    currentIndex = 0;
    score = 0;
    userAnswers = [];
    unscrambleSelected = [];

    renderQuestion();
  }

  function renderQuestion() {
    if (!containerEl) return;
    if (currentIndex >= currentQuestions.length) {
      renderSummary();
      return;
    }

    const q = currentQuestions[currentIndex];
    const progressPct = ((currentIndex) / currentQuestions.length) * 100;

    let questionContentHtml = '';

    if (q.type === 'multiple-choice' || q.type === 'fill-in-blank') {
      questionContentHtml = `
        <div class="quiz-prompt-box">
          <span class="quiz-badge">${q.type === 'fill-in-blank' ? 'Fill in the Blank' : 'Multiple Choice'}</span>
          <h3 class="quiz-prompt">${q.prompt}</h3>
        </div>
        <div class="quiz-options-list" id="quiz-options">
          ${q.options.map((opt, i) => `
            <button class="quiz-option-btn" data-index="${i}">
              <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
              <span class="opt-text">${opt}</span>
            </button>
          `).join('')}
        </div>
      `;
    } else if (q.type === 'audio-prompt') {
      questionContentHtml = `
        <div class="quiz-prompt-box">
          <span class="quiz-badge badge-audio">🎧 Listening Comprehension</span>
          <div class="quiz-audio-player">
            <button id="quiz-audio-play-btn" class="btn btn-audio-play">
              <span class="icon">🔊</span>
              <span>Play Audio Clip</span>
            </button>
            <p class="quiz-audio-sub">Tap button to listen to the Japanese speaker</p>
          </div>
          <h3 class="quiz-prompt mt-3">${q.prompt}</h3>
        </div>
        <div class="quiz-options-list" id="quiz-options">
          ${q.options.map((opt, i) => `
            <button class="quiz-option-btn" data-index="${i}">
              <span class="opt-letter">${String.fromCharCode(65 + i)}</span>
              <span class="opt-text">${opt}</span>
            </button>
          `).join('')}
        </div>
      `;
    } else if (q.type === 'unscramble') {
      unscrambleSelected = [];
      const shuffledTokens = [...q.tokens].sort(() => Math.random() - 0.5);

      questionContentHtml = `
        <div class="quiz-prompt-box">
          <span class="quiz-badge badge-unscramble">🧩 Sentence Unscrambler</span>
          <h3 class="quiz-prompt">${q.prompt}</h3>
        </div>

        <!-- Drop target line -->
        <div class="unscramble-tray" id="unscramble-result">
          <span class="unscramble-placeholder">Tap word chips below to arrange the sentence in correct order...</span>
        </div>

        <!-- Available Chips -->
        <div class="unscramble-chips-pool" id="unscramble-pool">
          ${shuffledTokens.map((tok, idx) => `
            <button class="unscramble-chip" data-token="${tok}" data-chip-id="${idx}">${tok}</button>
          `).join('')}
        </div>

        <div class="unscramble-actions">
          <button id="unscramble-reset-btn" class="btn btn-secondary btn-sm">Reset Arrangement</button>
          <button id="unscramble-check-btn" class="btn btn-primary btn-sm" disabled>Submit Sentence</button>
        </div>
      `;
    }

    containerEl.innerHTML = `
      <div class="quiz-wrapper">
        <div class="quiz-header">
          <div class="quiz-meta-row">
            <span class="quiz-level-indicator">${activeLevel} Proficiency Exam</span>
            <span class="quiz-counter">Question ${currentIndex + 1} of ${currentQuestions.length}</span>
          </div>
          <div class="quiz-progress-track">
            <div class="quiz-progress-fill" style="width: ${progressPct}%"></div>
          </div>
        </div>

        <div class="quiz-body" id="quiz-body-inner">
          ${questionContentHtml}
        </div>

        <div class="quiz-explanation-card" id="quiz-explanation-card" style="display: none;">
          <div class="explanation-title" id="explanation-title"></div>
          <p class="explanation-text" id="explanation-text"></p>
          <button id="quiz-next-btn" class="btn btn-primary mt-3">Next Question ➔</button>
        </div>
      </div>
    `;

    attachQuestionHandlers(q);
  }

  function attachQuestionHandlers(q) {
    // Audio trigger
    const audioBtn = document.getElementById('quiz-audio-play-btn');
    if (audioBtn) {
      audioBtn.addEventListener('click', () => {
        if (window.NihongoAudio) {
          window.NihongoAudio.speak(q.audioText);
        }
      });
      // Auto play once gently
      setTimeout(() => {
        if (window.NihongoAudio) window.NihongoAudio.speak(q.audioText);
      }, 300);
    }

    // Standard options
    if (q.type === 'multiple-choice' || q.type === 'fill-in-blank' || q.type === 'audio-prompt') {
      const optionButtons = containerEl.querySelectorAll('.quiz-option-btn');
      optionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const selectedIdx = parseInt(btn.getAttribute('data-index'), 10);
          handleStandardAnswer(selectedIdx, btn, q);
        });
      });
    }

    // Unscramble logic
    if (q.type === 'unscramble') {
      const poolEl = document.getElementById('unscramble-pool');
      const resultEl = document.getElementById('unscramble-result');
      const checkBtn = document.getElementById('unscramble-check-btn');
      const resetBtn = document.getElementById('unscramble-reset-btn');

      const chips = poolEl.querySelectorAll('.unscramble-chip');
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          if (chip.classList.contains('chip-used')) return;
          chip.classList.add('chip-used');
          const token = chip.getAttribute('data-token');
          unscrambleSelected.push({ token, chip });
          renderUnscrambleTokens(resultEl, checkBtn, q.tokens.length);
        });
      });

      resetBtn.addEventListener('click', () => {
        unscrambleSelected = [];
        chips.forEach(c => c.classList.remove('chip-used'));
        renderUnscrambleTokens(resultEl, checkBtn, q.tokens.length);
      });

      checkBtn.addEventListener('click', () => {
        handleUnscrambleAnswer(q);
      });
    }
  }

  function renderUnscrambleTokens(resultEl, checkBtn, requiredCount) {
    if (unscrambleSelected.length === 0) {
      resultEl.innerHTML = '<span class="unscramble-placeholder">Tap word chips below to arrange the sentence in correct order...</span>';
      checkBtn.disabled = true;
      return;
    }

    resultEl.innerHTML = unscrambleSelected.map((item, idx) => `
      <span class="assembled-chip" data-idx="${idx}">${item.token}</span>
    `).join(' ');

    checkBtn.disabled = (unscrambleSelected.length !== requiredCount);
  }

  function handleStandardAnswer(selectedIndex, clickedBtn, q) {
    const isCorrect = (selectedIndex === q.correctIndex);
    const optionButtons = containerEl.querySelectorAll('.quiz-option-btn');
    optionButtons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
      score++;
      clickedBtn.classList.add('opt-correct');
      if (window.NihongoAudio) window.NihongoAudio.playSuccess();
    } else {
      clickedBtn.classList.add('opt-wrong');
      optionButtons[q.correctIndex].classList.add('opt-correct');
      if (window.NihongoAudio) window.NihongoAudio.playError();
    }

    userAnswers.push({
      prompt: q.prompt,
      selected: q.options[selectedIndex],
      correct: q.options[q.correctIndex],
      isCorrect,
      explanation: q.explanation
    });

    showExplanation(isCorrect, q.explanation);
  }

  function handleUnscrambleAnswer(q) {
    const userString = unscrambleSelected.map(i => i.token).join('');
    const correctString = q.correctOrder.join('');
    const isCorrect = (userString === correctString);

    if (isCorrect) {
      score++;
      if (window.NihongoAudio) window.NihongoAudio.playSuccess();
    } else {
      if (window.NihongoAudio) window.NihongoAudio.playError();
    }

    userAnswers.push({
      prompt: q.prompt,
      selected: unscrambleSelected.map(i => i.token).join(' '),
      correct: q.correctOrder.join(' '),
      isCorrect,
      explanation: q.explanation
    });

    showExplanation(isCorrect, q.explanation);
  }

  function showExplanation(isCorrect, explanationText) {
    const expCard = document.getElementById('quiz-explanation-card');
    const titleEl = document.getElementById('explanation-title');
    const textEl = document.getElementById('explanation-text');
    const nextBtn = document.getElementById('quiz-next-btn');

    if (!expCard) return;

    expCard.style.display = 'block';
    if (isCorrect) {
      expCard.className = 'quiz-explanation-card exp-card-correct';
      titleEl.innerHTML = '✅ <strong>正解！ (Correct!)</strong>';
    } else {
      expCard.className = 'quiz-explanation-card exp-card-wrong';
      titleEl.innerHTML = '❌ <strong>不正解 (Incorrect)</strong>';
    }

    textEl.innerHTML = `<strong>Grammar Context:</strong> ${explanationText}`;

    nextBtn.onclick = () => {
      currentIndex++;
      renderQuestion();
    };
  }

  function renderSummary() {
    const total = currentQuestions.length;
    const percentage = Math.round((score / total) * 100);
    const isPass = percentage >= 70;

    if (window.NihongoAudio) {
      if (isPass) window.NihongoAudio.playFanfare();
      else window.NihongoAudio.playError();
    }

    if (window.NihongoState) {
      const xp = score * 20;
      window.NihongoState.addXp(xp, `Completed ${activeLevel} Quiz`);
      if (percentage === 100) {
        window.NihongoState.unlockBadge('quiz_ace');
      }
    }

    let summaryHtml = `
      <div class="quiz-summary-card">
        <div class="summary-header">
          <span class="summary-icon">${isPass ? '💮' : '📖'}</span>
          <h2>${isPass ? '合格！ (Exam Passed!)' : '復習しましょう (Keep Practicing!)'}</h2>
          <p class="summary-subtitle">${activeLevel} Proficiency Assessment Result</p>
        </div>

        <div class="score-circle-container">
          <div class="score-circle ${isPass ? 'circle-pass' : 'circle-retry'}">
            <span class="score-pct">${percentage}%</span>
            <span class="score-fraction">${score} / ${total} Correct</span>
          </div>
        </div>

        <div class="summary-breakdown">
          <h3>Question Review</h3>
          <div class="review-list">
            ${userAnswers.map((ans, i) => `
              <div class="review-item ${ans.isCorrect ? 'review-correct' : 'review-wrong'}">
                <div class="review-q-num">${ans.isCorrect ? '✓' : '✗'} Q${i + 1}: ${ans.prompt}</div>
                <div class="review-details">
                  <div><strong>Your Answer:</strong> ${ans.selected}</div>
                  ${!ans.isCorrect ? `<div><strong>Correct:</strong> ${ans.correct}</div>` : ''}
                  <div class="review-exp">${ans.explanation}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="summary-actions">
          <button id="quiz-retake-btn" class="btn btn-primary">Retake ${activeLevel} Quiz</button>
          <button id="quiz-return-hub-btn" class="btn btn-secondary">Return to Curriculum Hub</button>
        </div>
      </div>
    `;

    containerEl.innerHTML = summaryHtml;

    document.getElementById('quiz-retake-btn').addEventListener('click', () => {
      startQuiz(activeLevel);
    });

    document.getElementById('quiz-return-hub-btn').addEventListener('click', () => {
      if (window.NihongoApp) {
        window.NihongoApp.navigateTo('hub');
      }
    });
  }

  return {
    init,
    startQuiz
  };
})();
