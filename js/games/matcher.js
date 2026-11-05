/**
 * Kana & Kanji Matcher:
 * A gamified memory and association pairing card game.
 * Supports:
 * - Hiragana to Katakana pairing
 * - Kanji to Onyomi/Kunyomi reading pairing
 * - Kanji to English meaning pairing
 */

window.NihongoMatcher = (function() {
  let containerEl = null;
  let activeCards = [];
  let flippedCards = [];
  let matchedPairsCount = 0;
  let totalPairs = 6;
  let moves = 0;
  let timerInterval = null;
  let secondsElapsed = 0;
  let isLocked = false;
  let currentMode = 'kanji-meaning'; // 'kana-pair' | 'kanji-reading' | 'kanji-meaning'

  function init(container) {
    containerEl = container;
  }

  function startRound(mode = currentMode) {
    currentMode = mode;
    if (timerInterval) clearInterval(timerInterval);

    moves = 0;
    secondsElapsed = 0;
    matchedPairsCount = 0;
    flippedCards = [];
    isLocked = false;

    updateStatsDisplay();
    startTimer();
    renderBoard();
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      secondsElapsed++;
      updateStatsDisplay();
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
  }

  function getPairsForMode(mode) {
    let rawPairs = [];

    if (mode === 'kana-pair') {
      const hira = window.KANA_DATA ? window.KANA_DATA.hiragana.slice(0, 15) : [];
      const kata = window.KANA_DATA ? window.KANA_DATA.katakana.slice(0, 15) : [];
      rawPairs = hira.slice(0, 8).map(h => {
        const matchingK = kata.find(k => k.romaji === h.romaji) || { kana: '?' };
        return {
          id: `kana-${h.romaji}`,
          itemA: { text: h.kana, sub: h.romaji, speakText: h.kana },
          itemB: { text: matchingK.kana, sub: h.romaji, speakText: matchingK.kana }
        };
      });
    } else if (mode === 'kanji-reading') {
      const kanjiList = (window.N5_DATA ? window.N5_DATA.kanji : []).slice(0, 10);
      rawPairs = kanjiList.slice(0, 6).map(k => {
        const reading = k.kunyomi[0] || k.onyomi[0] || '';
        return {
          id: `kanji-${k.char}`,
          itemA: { text: k.char, sub: 'Kanji', speakText: k.char },
          itemB: { text: reading, sub: 'Reading', speakText: reading }
        };
      });
    } else {
      // kanji-meaning
      const kanjiList = (window.N5_DATA ? window.N5_DATA.kanji : []).concat(window.N4_DATA ? window.N4_DATA.kanji : []);
      rawPairs = kanjiList.slice(0, 8).map(k => {
        return {
          id: `meaning-${k.char}`,
          itemA: { text: k.char, sub: 'Kanji', speakText: k.char },
          itemB: { text: k.meaning.split(',')[0], sub: 'Meaning', speakText: k.char }
        };
      });
    }

    // Shuffle and pick 6 pairs
    shuffle(rawPairs);
    return rawPairs.slice(0, totalPairs);
  }

  function renderBoard() {
    if (!containerEl) return;
    const selectedPairs = getPairsForMode(currentMode);
    totalPairs = selectedPairs.length;

    // Flatten into card deck
    const deck = [];
    selectedPairs.forEach(pair => {
      deck.push({
        pairId: pair.id,
        text: pair.itemA.text,
        sub: pair.itemA.sub,
        speakText: pair.itemA.speakText,
        cardId: `${pair.id}-A`
      });
      deck.push({
        pairId: pair.id,
        text: pair.itemB.text,
        sub: pair.itemB.sub,
        speakText: pair.itemB.speakText,
        cardId: `${pair.id}-B`
      });
    });

    shuffle(deck);
    activeCards = deck;

    let html = `
      <div class="matcher-header">
        <div class="matcher-controls">
          <label>Mode:</label>
          <select id="matcher-mode-select" class="game-select">
            <option value="kanji-meaning" ${currentMode === 'kanji-meaning' ? 'selected' : ''}>Kanji ➔ English Meaning</option>
            <option value="kanji-reading" ${currentMode === 'kanji-reading' ? 'selected' : ''}>Kanji ➔ Reading (Kana)</option>
            <option value="kana-pair" ${currentMode === 'kana-pair' ? 'selected' : ''}>Hiragana ➔ Katakana</option>
          </select>
          <button id="matcher-restart-btn" class="btn btn-secondary btn-sm">🔄 Restart</button>
        </div>
        <div class="matcher-stats">
          <span class="stat-pill">Moves: <strong id="matcher-moves-val">0</strong></span>
          <span class="stat-pill">Time: <strong id="matcher-timer-val">00:00</strong></span>
          <span class="stat-pill">Matched: <strong id="matcher-pairs-val">0 / ${totalPairs}</strong></span>
        </div>
      </div>
      <div class="matcher-grid" id="matcher-cards-container">
    `;

    deck.forEach(card => {
      html += `
        <div class="memory-card" data-pair-id="${card.pairId}" data-card-id="${card.cardId}" data-speak="${card.speakText || ''}">
          <div class="card-inner">
            <div class="card-front">
              <span class="card-icon">🎴</span>
            </div>
            <div class="card-back">
              <span class="card-main-text">${card.text}</span>
              <span class="card-sub-text">${card.sub}</span>
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    containerEl.innerHTML = html;

    // Attach listeners
    document.getElementById('matcher-mode-select').addEventListener('change', (e) => {
      startRound(e.target.value);
    });

    document.getElementById('matcher-restart-btn').addEventListener('click', () => {
      startRound(currentMode);
    });

    const cardEls = containerEl.querySelectorAll('.memory-card');
    cardEls.forEach(el => {
      el.addEventListener('click', () => handleCardClick(el));
    });
  }

  function handleCardClick(cardEl) {
    if (isLocked) return;
    if (cardEl.classList.contains('is-flipped') || cardEl.classList.contains('is-matched')) return;

    // Flip card
    cardEl.classList.add('is-flipped');
    if (window.NihongoAudio) window.NihongoAudio.playClick();

    // Pronounce if audio available
    const speakText = cardEl.getAttribute('data-speak');
    if (speakText && window.NihongoAudio) {
      window.NihongoAudio.speak(speakText);
    }

    flippedCards.push(cardEl);

    if (flippedCards.length === 2) {
      moves++;
      updateStatsDisplay();
      checkMatch();
    }
  }

  function checkMatch() {
    isLocked = true;
    const [card1, card2] = flippedCards;
    const pairId1 = card1.getAttribute('data-pair-id');
    const pairId2 = card2.getAttribute('data-pair-id');

    if (pairId1 === pairId2) {
      // Match found!
      setTimeout(() => {
        card1.classList.add('is-matched');
        card2.classList.add('is-matched');
        flippedCards = [];
        matchedPairsCount++;
        isLocked = false;
        updateStatsDisplay();

        if (window.NihongoAudio) window.NihongoAudio.playSuccess();

        if (matchedPairsCount >= totalPairs) {
          onGameWon();
        }
      }, 500);
    } else {
      // Mismatch
      setTimeout(() => {
        if (window.NihongoAudio) window.NihongoAudio.playError();
        card1.classList.remove('is-flipped');
        card2.classList.remove('is-flipped');
        flippedCards = [];
        isLocked = false;
      }, 900);
    }
  }

  function onGameWon() {
    stopTimer();
    const score = Math.max(100, 1000 - moves * 25 - secondsElapsed * 10);

    if (window.NihongoAudio) window.NihongoAudio.playFanfare();

    if (window.NihongoState) {
      window.NihongoState.addXp(60, 'Completed Matcher Game');
      window.NihongoState.unlockBadge('kana_cadet');
      window.NihongoState.recordHighScore('matcher', score);
    }

    // Victory modal
    showVictoryModal(score);
  }

  function showVictoryModal(score) {
    const modal = document.createElement('div');
    modal.className = 'game-modal-backdrop';
    modal.innerHTML = `
      <div class="game-modal-dialog">
        <div class="victory-header">
          <span class="victory-icon">🎉</span>
          <h2>素晴らしい！ (Splendid!)</h2>
          <p>You matched all pairs with laser precision!</p>
        </div>
        <div class="victory-stats">
          <div class="victory-stat-item">
            <span class="label">Time</span>
            <span class="value">${formatTime(secondsElapsed)}</span>
          </div>
          <div class="victory-stat-item">
            <span class="label">Moves</span>
            <span class="value">${moves}</span>
          </div>
          <div class="victory-stat-item">
            <span class="label">Score</span>
            <span class="value">${score} pts</span>
          </div>
          <div class="victory-stat-item">
            <span class="label">XP Earned</span>
            <span class="value highlight">+60 XP</span>
          </div>
        </div>
        <div class="victory-actions">
          <button id="modal-play-again-btn" class="btn btn-primary">Play Again</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#modal-play-again-btn').addEventListener('click', () => {
      modal.remove();
      startRound(currentMode);
    });
  }

  function updateStatsDisplay() {
    const movesEl = document.getElementById('matcher-moves-val');
    const timerEl = document.getElementById('matcher-timer-val');
    const pairsEl = document.getElementById('matcher-pairs-val');

    if (movesEl) movesEl.textContent = moves;
    if (timerEl) timerEl.textContent = formatTime(secondsElapsed);
    if (pairsEl) pairsEl.textContent = `${matchedPairsCount} / ${totalPairs}`;
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  return {
    init,
    startRound
  };
})();
