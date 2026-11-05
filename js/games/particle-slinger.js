/**
 * Particle Slinger Game:
 * A fast-paced sentence completion arcade game where users launch the
 * correct grammar particle into missing blanks before time expires.
 */

window.NihongoParticleSlinger = (function() {
  let containerEl = null;
  let timerInterval = null;
  let timeRemaining = 40;
  let score = 0;
  let streak = 0;
  let currentRoundIndex = 0;
  let isRoundActive = false;

  const PARTICLES_TRAY = ['は', 'が', 'を', 'に', 'で', 'へ', 'と', 'も', 'より', 'から'];

  const SENTENCE_BANK = [
    {
      before: '私',
      after: '学生です。',
      correct: 'は',
      meaning: 'I am a student.',
      rule: 'Topic marker 「は」 defines the overarching subject of statement.'
    },
    {
      before: '図書館',
      after: '本を読みます。',
      correct: 'で',
      meaning: 'I read books at the library.',
      rule: 'Action location requires 「で」 (active event taking place).'
    },
    {
      before: '朝ご飯',
      after: '食べました。',
      correct: 'を',
      meaning: 'I ate breakfast.',
      rule: 'Direct object of transitive verb 食べる requires 「を」.'
    },
    {
      before: '明日、東京',
      after: '行きます。',
      correct: 'へ',
      meaning: 'I will go towards Tokyo tomorrow.',
      rule: 'Direction of movement toward a destination uses 「へ」 or 「に」.'
    },
    {
      before: '七時',
      after: '起きます。',
      correct: 'に',
      meaning: 'I wake up at 7:00.',
      rule: 'Specific clock time requires temporal target particle 「に」.'
    },
    {
      before: '猫',
      after: '好きです。',
      correct: 'が',
      meaning: 'I like cats.',
      rule: 'Words of affection/skill (好き, 上手) take 「が」 to mark the target.'
    },
    {
      before: '友達',
      after: '一緒に映画を見ました。',
      correct: 'と',
      meaning: 'I watched a movie together with my friend.',
      rule: 'Accompaniment ("with") uses particle 「と」.'
    },
    {
      before: '電車',
      after: '学校へ通っています。',
      correct: 'で',
      meaning: 'I commute to school by train.',
      rule: 'Means of transportation or instrument uses 「で」.'
    },
    {
      before: '田中さん',
      after: 'プレゼントをもらいました。',
      correct: 'から',
      meaning: 'I received a present from Tanaka-san.',
      rule: 'Source of receiving ("from") is marked by 「から」.'
    },
    {
      before: '富士山は高尾山',
      after: 'ずっと高いです。',
      correct: 'より',
      meaning: 'Mt. Fuji is much higher than Mt. Takao.',
      rule: 'Comparative standard ("than X") uses 「より」.'
    },
    {
      before: '私もリンゴ',
      after: '食べたいです。',
      correct: 'も',
      meaning: 'I also want to eat apples.',
      rule: 'Inclusion ("also / too") uses particle 「も」.'
    },
    {
      before: 'ドア',
      after: '開きました。',
      correct: 'が',
      meaning: 'The door opened.',
      rule: 'Intransitive verb (開く) marks its spontaneous subject with 「が」.'
    }
  ];

  let currentQuestion = null;

  function init(container) {
    containerEl = container;
  }

  function startGame() {
    if (timerInterval) clearInterval(timerInterval);
    timeRemaining = 40;
    score = 0;
    streak = 0;
    isRoundActive = true;
    currentRoundIndex = 0;

    renderGameUi();
    nextQuestion();
    startTimer();
  }

  function startTimer() {
    timerInterval = setInterval(() => {
      timeRemaining--;
      updateHud();
      if (timeRemaining <= 0) {
        endGame();
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
  }

  function renderGameUi() {
    if (!containerEl) return;
    containerEl.innerHTML = `
      <div class="slinger-container">
        <!-- HUD -->
        <div class="slinger-hud">
          <div class="hud-item">
            <span class="hud-label">Score</span>
            <span id="slinger-score" class="hud-value">0</span>
          </div>
          <div class="hud-item">
            <span class="hud-label">Time</span>
            <span id="slinger-time" class="hud-value hud-timer">40s</span>
          </div>
          <div class="hud-item">
            <span class="hud-label">Combo</span>
            <span id="slinger-combo" class="hud-value hud-combo">x1</span>
          </div>
        </div>

        <!-- Stage Arena -->
        <div class="slinger-stage">
          <div class="slinger-target-slot" id="slinger-slot">
            <span class="target-sentence-part" id="sent-before"></span>
            <div class="target-blank-drop" id="target-blank">
              <span class="blank-indicator">?</span>
            </div>
            <span class="target-sentence-part" id="sent-after"></span>
          </div>
          <div class="slinger-meaning-hint" id="sent-meaning"></div>
          <div class="slinger-feedback-banner" id="slinger-feedback"></div>
        </div>

        <!-- Launch Tray -->
        <div class="slinger-tray-container">
          <div class="tray-title">Choose and Launch the Missing Particle:</div>
          <div class="particle-cannon-tray" id="particle-cannon-tray">
            ${PARTICLES_TRAY.map(p => `
              <button class="btn-particle-ammo" data-particle="${p}">${p}</button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Attach listeners
    const buttons = containerEl.querySelectorAll('.btn-particle-ammo');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (!isRoundActive) return;
        launchParticle(btn.getAttribute('data-particle'), btn);
      });
    });
  }

  function nextQuestion() {
    const q = SENTENCE_BANK[Math.floor(Math.random() * SENTENCE_BANK.length)];
    currentQuestion = q;

    const beforeEl = document.getElementById('sent-before');
    const afterEl = document.getElementById('sent-after');
    const meaningEl = document.getElementById('sent-meaning');
    const blankEl = document.getElementById('target-blank');
    const feedbackEl = document.getElementById('slinger-feedback');

    if (beforeEl) beforeEl.textContent = q.before;
    if (afterEl) afterEl.textContent = q.after;
    if (meaningEl) meaningEl.textContent = `“${q.meaning}”`;
    if (blankEl) {
      blankEl.className = 'target-blank-drop';
      blankEl.innerHTML = '<span class="blank-indicator">?</span>';
    }
    if (feedbackEl) feedbackEl.textContent = '';
  }

  function launchParticle(particle, sourceButton) {
    if (!currentQuestion) return;

    if (window.NihongoAudio) {
      window.NihongoAudio.playWhoosh();
    }

    const blankEl = document.getElementById('target-blank');
    const feedbackEl = document.getElementById('slinger-feedback');

    // Create flying projectile badge
    createProjectileAnimation(sourceButton, blankEl, particle, () => {
      const isCorrect = (particle === currentQuestion.correct);

      if (isCorrect) {
        streak++;
        const multiplier = Math.min(streak, 5);
        const pointsAdded = 100 * multiplier;
        score += pointsAdded;
        timeRemaining = Math.min(60, timeRemaining + 2); // +2s bonus

        blankEl.classList.add('blank-hit-correct');
        blankEl.innerHTML = `<span class="locked-particle">${particle}</span>`;

        if (window.NihongoAudio) {
          window.NihongoAudio.playHit();
          window.NihongoAudio.playCombo(multiplier);
        }

        if (feedbackEl) {
          feedbackEl.className = 'slinger-feedback-banner feedback-correct';
          feedbackEl.textContent = `+${pointsAdded} pts! ${currentQuestion.rule}`;
        }

        updateHud();
        setTimeout(nextQuestion, 1100);
      } else {
        streak = 0;
        blankEl.classList.add('blank-hit-error');

        if (window.NihongoAudio) {
          window.NihongoAudio.playError();
        }

        if (feedbackEl) {
          feedbackEl.className = 'slinger-feedback-banner feedback-wrong';
          feedbackEl.textContent = `Incorrect! Correct was 「${currentQuestion.correct}」. ${currentQuestion.rule}`;
        }

        updateHud();
        setTimeout(nextQuestion, 1600);
      }
    });
  }

  function createProjectileAnimation(sourceEl, targetEl, particle, onImpact) {
    const srcRect = sourceEl.getBoundingClientRect();
    const tgtRect = targetEl.getBoundingClientRect();

    const projectile = document.createElement('div');
    projectile.className = 'particle-projectile';
    projectile.textContent = particle;
    document.body.appendChild(projectile);

    projectile.style.left = `${srcRect.left + srcRect.width / 2 - 20}px`;
    projectile.style.top = `${srcRect.top}px`;

    // Trigger transition
    requestAnimationFrame(() => {
      projectile.style.transform = `translate(${tgtRect.left - srcRect.left}px, ${tgtRect.top - srcRect.top}px) scale(1.3)`;
      projectile.style.opacity = '1';
    });

    setTimeout(() => {
      projectile.remove();
      if (onImpact) onImpact();
    }, 280);
  }

  function updateHud() {
    const scoreEl = document.getElementById('slinger-score');
    const timeEl = document.getElementById('slinger-time');
    const comboEl = document.getElementById('slinger-combo');

    if (scoreEl) scoreEl.textContent = score;
    if (timeEl) {
      timeEl.textContent = `${timeRemaining}s`;
      if (timeRemaining <= 10) {
        timeEl.classList.add('time-warning');
      } else {
        timeEl.classList.remove('time-warning');
      }
    }
    if (comboEl) {
      const mult = Math.min(streak, 5);
      comboEl.textContent = `x${mult || 1}`;
      if (mult >= 3) comboEl.classList.add('combo-blazing');
      else comboEl.classList.remove('combo-blazing');
    }
  }

  function endGame() {
    stopTimer();
    isRoundActive = false;

    if (window.NihongoAudio) window.NihongoAudio.playFanfare();

    if (window.NihongoState) {
      window.NihongoState.addXp(Math.round(score / 15), 'Particle Slinger Game');
      window.NihongoState.recordHighScore('particleSlinger', score);
      if (score >= 800) {
        window.NihongoState.unlockBadge('particle_sniper');
      }
    }

    showGameOverModal();
  }

  function showGameOverModal() {
    const modal = document.createElement('div');
    modal.className = 'game-modal-backdrop';
    modal.innerHTML = `
      <div class="game-modal-dialog">
        <div class="victory-header">
          <span class="victory-icon">🎯</span>
          <h2>タイムアップ！ (Time's Up!)</h2>
          <p>You defended Japanese grammar like a true master!</p>
        </div>
        <div class="victory-stats">
          <div class="victory-stat-item">
            <span class="label">Final Score</span>
            <span class="value highlight">${score}</span>
          </div>
          <div class="victory-stat-item">
            <span class="label">Max Streak</span>
            <span class="value">${streak}</span>
          </div>
          <div class="victory-stat-item">
            <span class="label">XP Earned</span>
            <span class="value highlight">+${Math.round(score / 15)} XP</span>
          </div>
        </div>
        <div class="victory-actions">
          <button id="slinger-retry-btn" class="btn btn-primary">Play Again</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#slinger-retry-btn').addEventListener('click', () => {
      modal.remove();
      startGame();
    });
  }

  return {
    init,
    startGame
  };
})();
