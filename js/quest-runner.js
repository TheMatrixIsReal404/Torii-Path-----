/**
 * Quest Runner Module: Interactive Duolingo-style Bite-Sized Learning Sessions
 * Handles fullscreen/focused lesson sessions, tactile 3D word-bubble assembling,
 * audio listening drills, pair matching, instant sliding feedback drawers,
 * hearts loss, confetti celebrations, and star rewards!
 */

window.NihongoQuestRunner = (function() {
  let activeSession = null;
  let selectedOption = null;
  let assembledTokens = [];
  let matchedPairCount = 0;
  let selectedPairCard = null;

  // Confetti Particle System
  function launchConfetti(canvas) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#10B981', '#3B82F6', '#F59E0B', '#EC4899', '#8B5CF6', '#EF4444', '#FCD34D'];
    const particles = [];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.8) * 18,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 12,
        gravity: 0.35,
        opacity: 1
      });
    }

    let animationId = null;
    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.vr;
        p.opacity -= 0.009;

        if (p.opacity > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = p.opacity;
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
          ctx.restore();
        }
      });

      if (alive) {
        animationId = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(animationId);
      }
    }

    render();
  }

  // Start a lesson session for a specific quest node
  function startSession(nodeId) {
    // Find node in QUEST_PATH_DATA
    let targetNode = null;
    if (window.QUEST_PATH_DATA) {
      for (const unit of window.QUEST_PATH_DATA) {
        const found = unit.nodes.find(n => n.id === nodeId);
        if (found) {
          targetNode = found;
          break;
        }
      }
    }

    if (!targetNode) {
      console.error('Node not found:', nodeId);
      return;
    }

    activeSession = {
      node: targetNode,
      questions: JSON.parse(JSON.stringify(targetNode.questions)),
      totalInitial: targetNode.questions.length,
      completedCount: 0,
      errorsCount: 0,
      comboCount: 0,
      isAnswerChecked: false
    };

    // Ensure session modal container exists
    let modal = document.getElementById('quest-session-overlay');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'quest-session-overlay';
      modal.className = 'quest-session-overlay';
      document.body.appendChild(modal);
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    renderCurrentQuestion();
  }

  function closeSession(confirmFirst = true) {
    if (confirmFirst && activeSession && activeSession.completedCount < activeSession.totalInitial) {
      if (!confirm('Are you sure you want to quit? You will lose your current session progress.')) {
        return;
      }
    }

    const modal = document.getElementById('quest-session-overlay');
    if (modal) {
      modal.style.display = 'none';
      modal.innerHTML = '';
    }
    document.body.style.overflow = '';
    activeSession = null;

    // Refresh dashboard / quest path UI
    if (window.NihongoApp) {
      window.NihongoApp.refreshRoadmap();
    }
  }

  // Render question UI
  function renderCurrentQuestion() {
    const modal = document.getElementById('quest-session-overlay');
    if (!modal || !activeSession) return;

    if (activeSession.questions.length === 0) {
      renderSessionVictory();
      return;
    }

    const q = activeSession.questions[0];
    const progressPercent = Math.min(100, Math.round((activeSession.completedCount / activeSession.totalInitial) * 100));

    activeSession.isAnswerChecked = false;
    selectedOption = null;
    assembledTokens = [];
    matchedPairCount = 0;
    selectedPairCard = null;

    let questionContentHtml = '';

    if (q.type === 'word_unscramble') {
      const allTokens = [...q.correctTokens, ...(q.distractors || [])].sort(() => Math.random() - 0.5);
      questionContentHtml = `
        <div class="unscramble-session-box">
          <div class="session-english-prompt">“${q.english}”</div>

          <!-- Answer Assembled Tray -->
          <div class="session-answer-tray" id="session-answer-tray">
            <span class="session-tray-hint">Tap words below to assemble Japanese sentence</span>
          </div>

          <!-- Tokens Bank -->
          <div class="session-tokens-bank" id="session-tokens-bank">
            ${allTokens.map((tok, i) => `
              <button class="session-word-tile btn-3d" data-token="${tok}" data-token-id="tok_${i}" onclick="NihongoQuestRunner.handleTokenClick(this)">
                ${tok}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else if (q.type === 'audio_choice') {
      questionContentHtml = `
        <div class="audio-session-box text-center">
          <div class="session-big-speaker-btn-wrap">
            <button class="session-big-speaker-btn" data-speak="${q.audio}" title="Play pronunciation">
              🔊
            </button>
          </div>
          <p class="session-prompt-hint">Tap speaker to re-listen, then choose the correct match:</p>

          <div class="session-options-grid mt-4">
            ${q.options.map((opt, i) => `
              <button class="session-choice-card btn-3d" data-opt-idx="${i}" onclick="NihongoQuestRunner.handleChoiceSelect(this, ${i})">
                <span class="choice-card-text">${opt.text}</span>
                ${opt.romaji ? `<span class="choice-card-romaji">${opt.romaji}</span>` : ''}
              </button>
            `).join('')}
          </div>
        </div>
      `;

      // Auto-play audio gently once after opening
      setTimeout(() => {
        if (window.NihongoAudio) window.NihongoAudio.speak(q.audio, 0.85);
      }, 350);

    } else if (q.type === 'pair_match') {
      const items = [];
      q.pairs.forEach((p, idx) => {
        items.push({ id: `p_${idx}`, text: p.left, pairId: idx, side: 'left' });
        items.push({ id: `p_${idx}_r`, text: p.right, pairId: idx, side: 'right' });
      });
      items.sort(() => Math.random() - 0.5);

      questionContentHtml = `
        <div class="pair-match-session-box">
          <p class="session-prompt-hint text-center mb-3">Tap matching pairs (Japanese & English):</p>
          <div class="session-pair-grid">
            ${items.map(it => `
              <button class="session-pair-card btn-3d" data-pair-id="${it.pairId}" data-card-id="${it.id}" onclick="NihongoQuestRunner.handlePairCardClick(this)">
                ${it.text}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else if (q.type === 'mnemonic_spotter') {
      questionContentHtml = `
        <div class="mnemonic-session-box text-center">
          <p class="session-prompt-hint">${q.prompt}</p>
          <div class="session-options-grid mt-4">
            ${q.options.map((opt, i) => `
              <button class="session-choice-card btn-3d" data-opt-idx="${i}" onclick="NihongoQuestRunner.handleChoiceSelect(this, ${i})">
                <span class="choice-card-kanji-big">${opt.text}</span>
                <span class="choice-card-meaning">${opt.meaning}</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else if (q.type === 'particle_fill') {
      const sentenceParts = q.sentence.split('_____');
      questionContentHtml = `
        <div class="particle-session-box text-center">
          <div class="session-fill-sentence">
            <span>${sentenceParts[0]}</span>
            <span class="session-fill-blank" id="session-fill-blank">___</span>
            <span>${sentenceParts[1] || ''}</span>
          </div>

          <div class="session-particles-row mt-4">
            ${q.options.map((opt, i) => `
              <button class="session-particle-pill btn-3d" data-particle="${opt}" data-opt-idx="${i}" onclick="NihongoQuestRunner.handleParticleSelect(this, '${opt}', ${i})">
                ${opt}
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }

    modal.innerHTML = `
      <div class="session-container">
        <!-- Top Session Header: Close, Progress Bar, Streak -->
        <header class="session-header">
          <button class="session-close-btn" onclick="NihongoQuestRunner.closeSession(true)" title="Exit session">✕</button>
          <div class="session-progress-track">
            <div class="session-progress-fill" style="width: ${progressPercent}%;"></div>
          </div>
          <div class="session-streak-badge" title="Current session streak">
            <span>🔥</span>
            <span id="session-streak-count">${activeSession.comboCount}</span>
          </div>
        </header>

        <!-- Main Question Stage -->
        <main class="session-body">
          <div class="session-prompt-header">
            <div class="prompt-category-tag">${activeSession.node.title} • STEP ${activeSession.node.nodeNum}</div>
            <h2 class="session-prompt-title">${q.prompt}</h2>
          </div>

          <div class="session-question-arena mt-3">
            ${questionContentHtml}
          </div>
        </main>

        <!-- Sliding Bottom Feedback Drawer -->
        <footer class="session-bottom-drawer" id="session-bottom-drawer">
          <div class="drawer-feedback-content" id="drawer-feedback-content"></div>
          <div class="drawer-action-btn-wrap">
            <button id="session-action-btn" class="session-main-btn btn-disabled" onclick="NihongoQuestRunner.handleActionClick()">
              CHECK
            </button>
          </div>
        </footer>
      </div>
    `;

    // Universal audio button binding
    if (window.NihongoAudio) {
      window.NihongoAudio.bindSpeakButtons(modal);
    }
  }

  // --- Question Interaction Handlers ---

  function handleChoiceSelect(buttonEl, index) {
    if (activeSession.isAnswerChecked) return;
    document.querySelectorAll('.session-choice-card').forEach(b => b.classList.remove('selected'));
    buttonEl.classList.add('selected');
    selectedOption = index;

    enableCheckButton(true);
    if (window.NihongoAudio) window.NihongoAudio.playClick();
  }

  function handleParticleSelect(buttonEl, particle, index) {
    if (activeSession.isAnswerChecked) return;
    document.querySelectorAll('.session-particle-pill').forEach(b => b.classList.remove('selected'));
    buttonEl.classList.add('selected');
    selectedOption = particle;

    const blank = document.getElementById('session-fill-blank');
    if (blank) {
      blank.textContent = particle;
      blank.classList.add('filled');
    }

    enableCheckButton(true);
    if (window.NihongoAudio) window.NihongoAudio.playClick();
  }

  function handleTokenClick(tileEl) {
    if (activeSession.isAnswerChecked) return;
    const tray = document.getElementById('session-answer-tray');
    const token = tileEl.getAttribute('data-token');
    const tokenId = tileEl.getAttribute('data-token-id');

    // Move to tray
    assembledTokens.push({ text: token, id: tokenId });
    tileEl.style.visibility = 'hidden';

    renderAnswerTray();
    enableCheckButton(assembledTokens.length > 0);
    if (window.NihongoAudio) window.NihongoAudio.playClick();
  }

  function handleTrayTokenRemove(tokenId) {
    if (activeSession.isAnswerChecked) return;
    assembledTokens = assembledTokens.filter(t => t.id !== tokenId);

    // Unhide in bank
    const bankTile = document.querySelector(`.session-word-tile[data-token-id="${tokenId}"]`);
    if (bankTile) bankTile.style.visibility = 'visible';

    renderAnswerTray();
    enableCheckButton(assembledTokens.length > 0);
    if (window.NihongoAudio) window.NihongoAudio.playClick();
  }

  function renderAnswerTray() {
    const tray = document.getElementById('session-answer-tray');
    if (!tray) return;

    if (assembledTokens.length === 0) {
      tray.innerHTML = '<span class="session-tray-hint">Tap words below to assemble Japanese sentence</span>';
      return;
    }

    tray.innerHTML = assembledTokens.map(tok => `
      <button class="session-tray-tile btn-3d" onclick="NihongoQuestRunner.handleTrayTokenRemove('${tok.id}')">
        ${tok.text}
      </button>
    `).join('');
  }

  function handlePairCardClick(cardEl) {
    if (activeSession.isAnswerChecked || cardEl.classList.contains('matched')) return;

    if (!selectedPairCard) {
      // First card tapped
      selectedPairCard = cardEl;
      cardEl.classList.add('pair-selected');
      if (window.NihongoAudio) window.NihongoAudio.playClick();
      return;
    }

    if (selectedPairCard === cardEl) {
      // Tapped same card, unselect
      cardEl.classList.remove('pair-selected');
      selectedPairCard = null;
      return;
    }

    // Second card tapped - compare
    const firstPairId = selectedPairCard.getAttribute('data-pair-id');
    const secondPairId = cardEl.getAttribute('data-pair-id');

    if (firstPairId === secondPairId) {
      // Match!
      selectedPairCard.classList.remove('pair-selected');
      selectedPairCard.classList.add('matched');
      cardEl.classList.add('matched');
      selectedPairCard = null;
      matchedPairCount++;

      if (window.NihongoAudio) window.NihongoAudio.playSuccess();

      const q = activeSession.questions[0];
      if (matchedPairCount >= q.pairs.length) {
        // All pairs matched! Automatically trigger check
        setTimeout(() => {
          triggerCorrectAnswer("Subarashii! All pairs successfully matched!");
        }, 300);
      }
    } else {
      // Mismatch!
      const first = selectedPairCard;
      first.classList.add('mismatch-shake');
      cardEl.classList.add('mismatch-shake');

      if (window.NihongoAudio) window.NihongoAudio.playError();

      setTimeout(() => {
        first.classList.remove('pair-selected', 'mismatch-shake');
        cardEl.classList.remove('pair-selected', 'mismatch-shake');
      }, 600);
      selectedPairCard = null;
    }
  }

  function enableCheckButton(enabled) {
    const btn = document.getElementById('session-action-btn');
    if (!btn) return;
    if (enabled) {
      btn.className = 'session-main-btn btn-ready';
      btn.disabled = false;
    } else {
      btn.className = 'session-main-btn btn-disabled';
      btn.disabled = true;
    }
  }

  // Handle Bottom Drawer Button (CHECK vs CONTINUE)
  function handleActionClick() {
    if (!activeSession) return;

    if (!activeSession.isAnswerChecked) {
      checkCurrentAnswer();
    } else {
      advanceToNextQuestion();
    }
  }

  // Check answer correctness
  function checkCurrentAnswer() {
    const q = activeSession.questions[0];
    let isCorrect = false;
    let correctAnswerText = '';
    let explanationText = q.explanation || '';

    if (q.type === 'audio_choice' || q.type === 'mnemonic_spotter') {
      if (selectedOption !== null && q.options[selectedOption]) {
        isCorrect = !!q.options[selectedOption].correct;
      }
      const correctOpt = q.options.find(o => o.correct);
      correctAnswerText = correctOpt ? correctOpt.text : '';
    } else if (q.type === 'particle_fill') {
      isCorrect = selectedOption === q.correct;
      correctAnswerText = q.correct;
    } else if (q.type === 'word_unscramble') {
      const userString = assembledTokens.map(t => t.text).join('');
      const expectedString = q.correctTokens.join('');
      isCorrect = userString === expectedString;
      correctAnswerText = q.correctTokens.join(' ');
    } else if (q.type === 'pair_match') {
      isCorrect = true; // Auto-checked on complete
    }

    if (isCorrect) {
      triggerCorrectAnswer(explanationText);
    } else {
      triggerIncorrectAnswer(correctAnswerText, explanationText);
    }
  }

  function triggerCorrectAnswer(explanation) {
    activeSession.isAnswerChecked = true;
    activeSession.completedCount++;
    activeSession.comboCount++;

    if (window.NihongoAudio) {
      window.NihongoAudio.playSuccess();
      if (activeSession.comboCount >= 3) {
        window.NihongoAudio.playCombo(activeSession.comboCount);
      }
    }

    // Award immediate question XP
    if (window.NihongoState) {
      window.NihongoState.addXp(10, 'Quest Question Correct');
    }

    // Mascot cheers
    const mascotWrap = document.getElementById('session-mascot-wrapper');
    const state = window.NihongoState ? window.NihongoState.getState() : { activeAvatar: 'mochi_novice' };
    if (mascotWrap && window.NihongoMascot) {
      mascotWrap.innerHTML = window.NihongoMascot.renderSvg('cheering', state.activeAvatar || 'mochi_novice', 75);
    }

    // Bottom drawer turns emerald green
    const drawer = document.getElementById('session-bottom-drawer');
    const content = document.getElementById('drawer-feedback-content');
    const btn = document.getElementById('session-action-btn');

    if (drawer && content && btn) {
      drawer.className = 'session-bottom-drawer drawer-correct';
      content.innerHTML = `
        <div class="feedback-title-row">
          <span class="feedback-icon">✔</span>
          <strong>素晴らしい！ (Splendid!)</strong>
          ${activeSession.comboCount >= 3 ? `<span class="combo-pill">🔥 ${activeSession.comboCount} Streak!</span>` : ''}
        </div>
        ${explanation ? `<div class="feedback-explanation">${explanation}</div>` : ''}
      `;
      btn.className = 'session-main-btn btn-continue';
      btn.textContent = 'CONTINUE ➔';
      btn.focus();
    }
  }

  function triggerIncorrectAnswer(correctAnswer, explanation) {
    activeSession.isAnswerChecked = true;
    activeSession.errorsCount++;
    activeSession.comboCount = 0;

    if (window.NihongoAudio) {
      window.NihongoAudio.playError();
    }

    // Re-queue the missed question at the end of the session for mastery!
    const missedQ = activeSession.questions[0];
    activeSession.questions.push(missedQ);

    // Bottom drawer turns coral red with clear feedback & explanation
    const drawer = document.getElementById('session-bottom-drawer');
    const content = document.getElementById('drawer-feedback-content');
    const btn = document.getElementById('session-action-btn');

    if (drawer && content && btn) {
      drawer.className = 'session-bottom-drawer drawer-wrong';
      content.innerHTML = `
        <div class="feedback-title-row">
          <span class="feedback-icon">✖</span>
          <strong>Correct solution:</strong>
        </div>
        <div class="feedback-correct-answer">${correctAnswer}</div>
        ${explanation ? `<div class="feedback-explanation">${explanation}</div>` : ''}
      `;
      btn.className = 'session-main-btn btn-wrong';
      btn.textContent = 'GOT IT ➔';
      btn.focus();
    }
  }

  function advanceToNextQuestion() {
    activeSession.questions.shift();
    renderCurrentQuestion();
  }

  // Victory screen on session completion
  function renderSessionVictory() {
    const modal = document.getElementById('quest-session-overlay');
    if (!modal || !activeSession) return;

    const node = activeSession.node;
    const errors = activeSession.errorsCount;
    const stars = errors === 0 ? 3 : (errors <= 2 ? 2 : 1);

    // Play fanfare
    if (window.NihongoAudio) {
      window.NihongoAudio.playFanfare();
    }

    // Award Rewards
    if (window.NihongoState) {
      window.NihongoState.addXp(node.xpReward, `Completed ${node.title}`);
      if (typeof window.NihongoState.completeQuestNode === 'function') {
        window.NihongoState.completeQuestNode(node.id, stars);
      }
    }

    modal.innerHTML = `
      <canvas id="victory-confetti-canvas" class="victory-confetti-canvas"></canvas>
      <div class="victory-modal-card card text-center">
        <div class="victory-icon-emblem mb-2" style="font-size: 3rem;">💮</div>

        <h1 class="victory-title">演習完了 • Session Complete</h1>
        <h2 class="victory-sub">${node.title} (${node.japaneseTitle})</h2>

        <div class="victory-stars-row my-3">
          <span class="star-badge ${stars >= 1 ? 'star-lit' : ''}">⭐</span>
          <span class="star-badge ${stars >= 2 ? 'star-lit' : ''}">⭐</span>
          <span class="star-badge ${stars >= 3 ? 'star-lit' : ''}">⭐</span>
        </div>

        <div class="victory-rewards-grid my-3">
          <div class="reward-box">
            <span class="reward-icon">⚡</span>
            <span class="reward-val">+${node.xpReward} XP</span>
            <span class="reward-label">Mastery XP</span>
          </div>
          <div class="reward-box">
            <span class="reward-icon">🎯</span>
            <span class="reward-val">${errors === 0 ? '100% Perfect' : (errors <= 2 ? 'Great Accuracy' : 'Mastered')}</span>
            <span class="reward-label">Performance</span>
          </div>
          <div class="reward-box">
            <span class="reward-icon">📚</span>
            <span class="reward-val">${node.questions.length} Items</span>
            <span class="reward-label">Practiced</span>
          </div>
        </div>

        <button class="btn btn-primary btn-lg mt-3" style="width: 100%; font-size: 1.15rem;" onclick="NihongoQuestRunner.closeSession(false)">
          CONTINUE TO ROADMAP ➔
        </button>
      </div>
    `;

    // Launch celebratory confetti particles!
    const canvas = document.getElementById('victory-confetti-canvas');
    if (canvas) {
      launchConfetti(canvas);
    }
  }

  // Keyboard shortcut: Pressing 'Enter' triggers the action button!
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && activeSession) {
      const btn = document.getElementById('session-action-btn');
      if (btn && !btn.disabled) {
        btn.click();
      }
    }
  });

  return {
    startSession,
    closeSession,
    handleChoiceSelect,
    handleParticleSelect,
    handleTokenClick,
    handleTrayTokenRemove,
    handlePairCardClick,
    handleActionClick
  };
})();
