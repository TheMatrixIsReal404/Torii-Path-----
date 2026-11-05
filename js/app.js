/**
 * Main Application Controller (NihongoApp):
 * Coordinates views, navigation, level hubs, Furigana display mode toggler,
 * SRS review decks, audio controls, and responsive UI onboarding.
 */

window.NihongoApp = (function() {
  let currentView = 'dashboard';
  let activeLevel = 'N5';
  let activeHubTab = 'overview';
  let searchKanjiFilter = '';
  let searchVocabFilter = '';

  function init() {
    setupTheme();
    setupFuriganaMode();
    setupRomajiMode();
    bindGlobalNav();
    bindAudioButtons();
    initTracerCanvas();
    initSrsView();

    // Listen for Escape key to close cheat drawer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && cheatSheetOpen) {
        toggleCheatSheet(false);
      }
    });

    // Check onboarding
    const state = window.NihongoState ? window.NihongoState.getState() : {};
    if (state.currentLevel) activeLevel = state.currentLevel;

    // Listen for state changes
    window.addEventListener('nihongo-state-changed', updateHeaderStats);
    window.addEventListener('nihongo-srs-updated', updateSrsBadges);

    // Initial render
    navigateTo('dashboard');
    updateHeaderStats();

    // Check if new user
    if (!state.onboardingCompleted) {
      setTimeout(showOnboardingModal, 600);
    }
  }

  // --- Theme & Furigana ---

  function setupTheme() {
    const state = window.NihongoState ? window.NihongoState.getState() : {};
    const theme = state.theme || 'dark';
    document.documentElement.setAttribute('data-theme', theme);

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      themeBtn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        themeBtn.innerHTML = next === 'dark' ? '☀️' : '🌙';
        if (window.NihongoState) window.NihongoState.setTheme(next);
      });
    }
  }

  function setupFuriganaMode() {
    const state = window.NihongoState ? window.NihongoState.getState() : {};
    const mode = state.furiganaMode || 'all';
    applyFuriganaMode(mode);

    const select = document.getElementById('furigana-mode-select');
    if (select) {
      select.value = mode;
      select.addEventListener('change', (e) => {
        const newMode = e.target.value;
        applyFuriganaMode(newMode);
        if (window.NihongoState) window.NihongoState.setFuriganaMode(newMode);
      });
    }
  }

  function applyFuriganaMode(mode) {
    document.body.classList.remove('furigana-all', 'furigana-hover', 'furigana-hide');
    document.body.classList.add(`furigana-${mode}`);
  }

  // --- Universal Romaji Subtitle Modes ---

  function setupRomajiMode() {
    let mode = 'all';
    try {
      mode = localStorage.getItem('nihongo_romaji_mode') || 'all';
    } catch (e) {}
    applyRomajiMode(mode);

    const select = document.getElementById('romaji-mode-select');
    if (select) {
      select.value = mode;
      select.addEventListener('change', (e) => {
        const newMode = e.target.value;
        applyRomajiMode(newMode);
        try {
          localStorage.setItem('nihongo_romaji_mode', newMode);
        } catch (err) {}
      });
    }
  }

  function applyRomajiMode(mode) {
    document.body.classList.remove('romaji-all', 'romaji-hover', 'romaji-hide');
    document.body.classList.add(`romaji-${mode}`);
  }

  // --- Easy English Phonetic Respelling Engine ("Sounds-Like") ---

  function toEnglishPhonetics(text) {
    if (!text) return '';
    const trimmed = text.trim();

    const phraseMap = {
      'おはようございます': 'oh-HAH-yoh goh-ZYE-mahs',
      'おはよう': 'oh-HAH-yoh',
      'ありがとうございます': 'ah-ree-GAH-toh goh-ZYE-mahs',
      'ありがとう': 'ah-ree-GAH-toh',
      'おねがいします': 'oh-neh-guy-shee-MAHS',
      'お願いします': 'oh-neh-guy-shee-MAHS',
      'すみません': 'soo-mee-mah-SEN',
      'ごめんなさい': 'goh-men-nah-SYE',
      'こんにちは': 'kohn-nee-chee-WAH',
      'こんばんは': 'kohn-bahn-WAH',
      'さようなら': 'sah-yoh-NAH-rah',
      'いただきます': 'ee-tah-dah-kee-MAHS',
      'ごちそうさまでした': 'goh-chee-soh-SAH-mah DESH-tah',
      'はじめまして': 'hah-jee-meh-MASH-teh',
      '初めまして': 'hah-jee-meh-MASH-teh',
      'よろしくおねがいします': 'yoh-ROH-shee-koo oh-neh-guy-shee-MAHS',
      'よろしくお願いします': 'yoh-ROH-shee-koo oh-neh-guy-shee-MAHS',
      'だいじょうぶです': 'dye-JOH-boo dess',
      '大丈夫です': 'dye-JOH-boo dess',
      'だいじょうぶ': 'dye-JOH-boo',
      '大丈夫': 'dye-JOH-boo',
      'おいしい': 'oy-SHEE',
      '美味しい': 'oy-SHEE',
      'みず': 'MEE-zoo',
      '水': 'MEE-zoo',
      'おちゃ': 'oh-CHAH',
      'お茶': 'oh-CHAH',
      'ごはん': 'goh-HAHN',
      'ご飯': 'goh-HAHN',
      'すし': 'SOO-shee',
      '寿司': 'SOO-shee',
      'えき': 'EH-kee',
      '駅': 'EH-kee',
      'わたし': 'wah-TAH-shee',
      '私': 'wah-TAH-shee',
      'ほん': 'hohn',
      '本': 'hohn',
      'にほんご': 'nee-HOHN-goh',
      '日本語': 'nee-HOHN-goh',
      'ください': 'koo-dah-SYE',
      'でした': 'desh-tah',
      'です': 'dess',
      'ました': 'mahsh-tah',
      'ません': 'mah-SEN',
      'ます': 'mahs'
    };

    if (phraseMap[trimmed]) return phraseMap[trimmed];

    const kanaMap = {
      'きゃ': 'kyah', 'きゅ': 'kyoo', 'きょ': 'kyoh',
      'しゃ': 'shah', 'しゅ': 'shoo', 'しょ': 'shoh',
      'ちゃ': 'chah', 'ちゅ': 'choo', 'ちょ': 'choh',
      'にゃ': 'nyah', 'にゅ': 'nyoo', 'にょ': 'nyoh',
      'ひゃ': 'hyah', 'ひゅ': 'hyoo', 'ひょ': 'hyoh',
      'みゃ': 'myah', 'みゅ': 'myoo', 'みょ': 'myoh',
      'りゃ': 'ryah', 'りゅ': 'ryoo', 'りょ': 'ryoh',
      'ぎゃ': 'gyah', 'ぎゅ': 'gyoo', 'ぎょ': 'gyoh',
      'じゃ': 'jah', 'じゅ': 'joo', 'じょ': 'joh',
      'びゃ': 'byah', 'びゅ': 'byoo', 'びょ': 'byoh',
      'ぴゃ': 'pyah', 'ぴゅ': 'pyoo', 'ぴょ': 'pyoh',
      'あ': 'ah', 'い': 'ee', 'う': 'oo', 'え': 'eh', 'お': 'oh',
      'か': 'kah', 'き': 'kee', 'く': 'koo', 'け': 'keh', 'こ': 'koh',
      'さ': 'sah', 'し': 'shee', 'す': 'soo', 'せ': 'seh', 'そ': 'soh',
      'た': 'tah', 'ち': 'chee', 'つ': 'tsoo', 'て': 'teh', 'と': 'toh',
      'な': 'nah', 'に': 'nee', 'ぬ': 'noo', 'ね': 'neh', 'の': 'noh',
      'は': 'hah', 'ひ': 'hee', 'ふ': 'foo', 'へ': 'heh', 'ほ': 'hoh',
      'ま': 'mah', 'み': 'mee', 'む': 'moo', 'め': 'meh', 'も': 'moh',
      'や': 'yah', 'ゆ': 'yoo', 'よ': 'yoh',
      'ら': 'rah', 'り': 'ree', 'る': 'roo', 'れ': 'reh', 'ろ': 'roh',
      'わ': 'wah', 'を': 'oh', 'ん': 'n',
      'が': 'gah', 'ぎ': 'gee', 'ぐ': 'goo', 'げ': 'geh', 'ご': 'goh',
      'ざ': 'zah', 'じ': 'jee', 'ず': 'zoo', 'ぜ': 'zeh', 'ぞ': 'zoh',
      'だ': 'dah', 'ぢ': 'jee', 'づ': 'zoo', 'で': 'deh', 'ど': 'doh',
      'ば': 'bah', 'び': 'bee', 'ぶ': 'boo', 'べ': 'beh', 'ぼ': 'boh',
      'ぱ': 'pah', 'ぴ': 'pee', 'ぷ': 'poo', 'ぺ': 'peh', 'ぽ': 'poh'
    };

    const kataMap = {
      'ア': 'あ', 'イ': 'い', 'ウ': 'う', 'エ': 'え', 'オ': 'お',
      'カ': 'か', 'キ': 'き', 'ク': 'く', 'ケ': 'け', 'コ': 'こ',
      'サ': 'さ', 'シ': 'し', 'ス': 'す', 'セ': 'せ', 'ソ': 'そ',
      'タ': 'た', 'チ': 'ち', 'ツ': 'つ', 'テ': 'て', 'ト': 'と',
      'ナ': 'な', 'ニ': 'に', 'ヌ': 'ぬ', 'ネ': 'ね', 'ノ': 'の',
      'ハ': 'は', 'ヒ': 'ひ', 'フ': 'ふ', 'ヘ': 'へ', 'ホ': 'ほ',
      'マ': 'ま', 'ミ': 'み', 'ム': 'む', 'メ': 'め', 'モ': 'も',
      'ヤ': 'や', 'ユ': 'ゆ', 'ヨ': 'よ',
      'ラ': 'ら', 'リ': 'り', 'ル': 'る', 'レ': 'れ', 'ロ': 'ろ',
      'ワ': 'わ', 'ヲ': 'を', 'ン': 'ん',
      'ガ': 'が', 'ギ': 'ぎ', 'グ': 'ぐ', 'ゲ': 'げ', 'ゴ': 'ご',
      'ザ': 'ざ', 'ジ': 'じ', 'ズ': 'ず', 'ゼ': 'ぜ', 'ゾ': 'ぞ',
      'ダ': 'だ', 'ヂ': 'ぢ', 'ヅ': 'づ', 'デ': 'で', 'ド': 'ど',
      'バ': 'ば', 'ビ': 'び', 'ブ': 'ぶ', 'ベ': 'べ', 'ボ': 'ぼ',
      'パ': 'ぱ', 'ピ': 'ぴ', 'プ': 'ぷ', 'ペ': 'ぺ', 'ポ': 'ぽ',
      'ャ': 'ゃ', 'ュ': 'ゅ', 'ョ': 'ょ', 'ッ': 'っ'
    };

    let hira = '';
    for (const ch of trimmed) {
      hira += kataMap[ch] || ch;
    }

    const syllables = [];
    let i = 0;
    while (i < hira.length) {
      const two = hira.slice(i, i + 2);
      if (kanaMap[two]) {
        syllables.push(kanaMap[two]);
        i += 2;
      } else if (hira[i] === 'っ') {
        const next = hira[i + 1];
        const nextPh = kanaMap[next] || '';
        syllables.push(nextPh ? nextPh[0] : 't');
        i += 1;
      } else if (kanaMap[hira[i]]) {
        syllables.push(kanaMap[hira[i]]);
        i += 1;
      } else {
        syllables.push(hira[i]);
        i += 1;
      }
    }

    return syllables.join('-').replace(/--+/g, '-');
  }

  // --- Quick Rescue Cheat Sheet Drawer ---
  let cheatSheetOpen = false;

  function toggleCheatSheet(forceState) {
    const drawer = document.getElementById('rescue-cheat-drawer');
    if (!drawer) return;
    if (typeof forceState === 'boolean') {
      cheatSheetOpen = forceState;
    } else {
      cheatSheetOpen = !cheatSheetOpen;
    }

    if (cheatSheetOpen) {
      drawer.classList.add('drawer-open');
      renderCheatSheet();
    } else {
      drawer.classList.remove('drawer-open');
    }
  }

  function renderCheatSheet() {
    const body = document.getElementById('cheat-drawer-body');
    if (!body) return;

    body.innerHTML = `
      <div class="cheat-section mb-4">
        <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--c-akane);">🎵 5 Foundation Vowels</h4>
        <div class="cheat-char-grid">
          <button class="cheat-char-btn" data-speak="あ" title="Listen to A">
            <span class="cheat-char-glyph">あ</span>
            <span class="cheat-char-romaji">a [Ah - father]</span>
          </button>
          <button class="cheat-char-btn" data-speak="い" title="Listen to I">
            <span class="cheat-char-glyph">い</span>
            <span class="cheat-char-romaji">i [Ee - see]</span>
          </button>
          <button class="cheat-char-btn" data-speak="う" title="Listen to U">
            <span class="cheat-char-glyph">う</span>
            <span class="cheat-char-romaji">u [Oo - moon]</span>
          </button>
          <button class="cheat-char-btn" data-speak="え" title="Listen to E">
            <span class="cheat-char-glyph">え</span>
            <span class="cheat-char-romaji">e [Eh - red]</span>
          </button>
          <button class="cheat-char-btn" data-speak="お" title="Listen to O">
            <span class="cheat-char-glyph">お</span>
            <span class="cheat-char-romaji">o [Oh - boat]</span>
          </button>
        </div>
      </div>

      <div class="cheat-section mb-4">
        <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--c-ruri);">🤝 5 Emergency Magic Words</h4>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <div class="cheat-phrase-card" style="background: var(--bg-surface-elevated); padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong style="font-size: 1.05rem;" data-speak="すみません">すみません</strong>
              <div style="font-size: 0.78rem; color: var(--c-take); font-weight: 700;">🗣️ [soo-mee-mah-SEN]</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Sumimasen • Excuse me / Sorry / Thanks</div>
            </div>
            <button class="btn btn-secondary btn-sm" data-speak="すみません">🔊</button>
          </div>
          <div class="cheat-phrase-card" style="background: var(--bg-surface-elevated); padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong style="font-size: 1.05rem;" data-speak="ありがとうございます">ありがとうございます</strong>
              <div style="font-size: 0.78rem; color: var(--c-take); font-weight: 700;">🗣️ [ah-ree-GAH-toh goh-ZYE-mahs]</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Arigatou gozaimasu • Thank you very much</div>
            </div>
            <button class="btn btn-secondary btn-sm" data-speak="ありがとうございます">🔊</button>
          </div>
          <div class="cheat-phrase-card" style="background: var(--bg-surface-elevated); padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong style="font-size: 1.05rem;" data-speak="お願いします">お願いします</strong>
              <div style="font-size: 0.78rem; color: var(--c-take); font-weight: 700;">🗣️ [oh-neh-guy-shee-MAHS]</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Onegaishimasu • Please / I request this</div>
            </div>
            <button class="btn btn-secondary btn-sm" data-speak="お願いします">🔊</button>
          </div>
          <div class="cheat-phrase-card" style="background: var(--bg-surface-elevated); padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong style="font-size: 1.05rem;" data-speak="大丈夫です">大丈夫です</strong>
              <div style="font-size: 0.78rem; color: var(--c-take); font-weight: 700;">🗣️ [dye-JOH-boo dess]</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Daijoubu desu • I am fine / No problem</div>
            </div>
            <button class="btn btn-secondary btn-sm" data-speak="大丈夫です">🔊</button>
          </div>
          <div class="cheat-phrase-card" style="background: var(--bg-surface-elevated); padding: 0.6rem 0.8rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center;">
            <div>
              <strong style="font-size: 1.05rem;" data-speak="ごめんなさい">ごめんなさい</strong>
              <div style="font-size: 0.78rem; color: var(--c-take); font-weight: 700;">🗣️ [goh-men-nah-SYE]</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">Gomen nasai • I am sorry (casual/personal)</div>
            </div>
            <button class="btn btn-secondary btn-sm" data-speak="ごめんなさい">🔊</button>
          </div>
        </div>
      </div>

      <div class="cheat-section mb-4">
        <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--c-take);">🧩 Essential Particles at a Glance</h4>
        <div style="display: flex; flex-direction: column; gap: 0.45rem; font-size: 0.85rem;">
          <div style="background: var(--bg-surface-elevated); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border-left: 3px solid var(--c-akane);">
            <strong>は (wa)</strong>: Topic marker — "Speaking of [X]..."
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border-left: 3px solid var(--c-ruri);">
            <strong>を (o)</strong>: Direct Object — "Does action to [X]"
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border-left: 3px solid var(--c-take);">
            <strong>で (de)</strong>: Location of action / tool — "At / By using"
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border-left: 3px solid #F59E0B;">
            <strong>に (ni)</strong>: Destination / exact time — "To / At (time)"
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.5rem 0.75rem; border-radius: var(--radius-sm); border-left: 3px solid #8B5CF6;">
            <strong>か (ka)</strong>: Question mark particle at end of sentence
          </div>
        </div>
      </div>

      <div class="cheat-section">
        <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem; color: var(--text-primary);">🔢 Numbers 1 to 10</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.4rem; font-size: 0.85rem;">
          <div style="background: var(--bg-surface-elevated); padding: 0.4rem 0.6rem; border-radius: var(--radius-sm); cursor: pointer;" data-speak="いち">
            <strong>1 一</strong> (ichi • "EE-chee")
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.4rem 0.6rem; border-radius: var(--radius-sm); cursor: pointer;" data-speak="に">
            <strong>2 二</strong> (ni • "nee")
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.4rem 0.6rem; border-radius: var(--radius-sm); cursor: pointer;" data-speak="さん">
            <strong>3 三</strong> (san • "sahn")
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.4rem 0.6rem; border-radius: var(--radius-sm); cursor: pointer;" data-speak="よん">
            <strong>4 四</strong> (yon • "yohn")
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.4rem 0.6rem; border-radius: var(--radius-sm); cursor: pointer;" data-speak="ご">
            <strong>5 五</strong> (go • "goh")
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.4rem 0.6rem; border-radius: var(--radius-sm); cursor: pointer;" data-speak="ろく">
            <strong>6 六</strong> (roku • "ROH-koo")
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.4rem 0.6rem; border-radius: var(--radius-sm); cursor: pointer;" data-speak="なな">
            <strong>7 七</strong> (nana • "NAH-nah")
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.4rem 0.6rem; border-radius: var(--radius-sm); cursor: pointer;" data-speak="はち">
            <strong>8 八</strong> (hachi • "HAH-chee")
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.4rem 0.6rem; border-radius: var(--radius-sm); cursor: pointer;" data-speak="きゅう">
            <strong>9 九</strong> (kyuu • "kyoo")
          </div>
          <div style="background: var(--bg-surface-elevated); padding: 0.4rem 0.6rem; border-radius: var(--radius-sm); cursor: pointer;" data-speak="じゅう">
            <strong>10 十</strong> (juu • "joo")
          </div>
        </div>
      </div>
    `;
    bindAudioButtons();
  }

  // --- Navigation & View Switching ---

  function bindGlobalNav() {
    const navLinks = document.querySelectorAll('[data-nav]');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetView = link.getAttribute('data-nav');
        const levelArg = link.getAttribute('data-level');
        if (levelArg) {
          activeLevel = levelArg;
          if (window.NihongoState) window.NihongoState.setLevel(levelArg);
        }
        navigateTo(targetView);
      });
    });

    // Audio Speed Toggle (Turtle 0.65x / Normal 0.85x)
    const speedBtn = document.getElementById('audio-speed-btn');
    if (speedBtn) {
      speedBtn.addEventListener('click', () => {
        if (window.NihongoAudio) {
          const isSlow = window.NihongoAudio.toggleSlowMode();
          speedBtn.innerHTML = isSlow ? '🐢 0.65x' : '🐰 0.85x';
          if (window.NihongoState) {
            window.NihongoState.notifyNotification(`Audio Speed: ${isSlow ? 'Slow Pace (0.65x) for Beginners' : 'Normal Pace (0.85x)'}`, 'info');
          }
        }
      });
    }

    // Mute button
    const muteBtn = document.getElementById('audio-mute-btn');
    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        if (window.NihongoAudio) {
          const isMuted = window.NihongoAudio.toggleMute();
          muteBtn.innerHTML = isMuted ? '🔇' : '🔊';
        }
      });
    }

    // Help / Tour button
    const tourBtn = document.getElementById('help-tour-btn');
    if (tourBtn) {
      tourBtn.addEventListener('click', showOnboardingModal);
    }

    // Export/Import modal trigger
    const backupBtn = document.getElementById('backup-data-btn');
    if (backupBtn) {
      backupBtn.addEventListener('click', showBackupModal);
    }

    // Preferences & Utilities Popover Toggle
    const moreBtn = document.getElementById('nav-more-btn');
    const moreMenu = document.getElementById('nav-more-menu');
    if (moreBtn && moreMenu) {
      moreBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = moreMenu.style.display !== 'none';
        moreMenu.style.display = isOpen ? 'none' : 'block';
        moreBtn.setAttribute('aria-expanded', !isOpen);
      });

      document.addEventListener('click', (e) => {
        if (!moreMenu.contains(e.target) && e.target !== moreBtn) {
          moreMenu.style.display = 'none';
          moreBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  function navigateTo(viewId) {
    currentView = viewId;

    // Update active nav links
    document.querySelectorAll('[data-nav]').forEach(el => {
      const v = el.getAttribute('data-nav');
      if (v === viewId) el.classList.add('nav-active');
      else el.classList.remove('nav-active');
    });

    // Hide all view containers
    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.style.display = 'none';
    });

    const activePanel = document.getElementById(`view-${viewId}`);
    if (activePanel) {
      activePanel.style.display = 'block';
    }

    // Render view-specific content
    if (viewId === 'dashboard') {
      renderDashboard();
    } else if (viewId === 'zero') {
      renderZeroBeginnerView();
    } else if (viewId === 'books') {
      renderBookCurriculumView();
    } else if (viewId === 'hub') {
      renderLevelHub(activeLevel);
    } else if (viewId === 'kana') {
      renderKanaCharts();
    } else if (viewId === 'tracer') {
      setupTracerView();
    } else if (viewId === 'games') {
      renderGamesHub();
    } else if (viewId === 'srs') {
      renderSrsQueue();
    } else if (viewId === 'achievements') {
      renderAchievementsView();
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    bindAudioButtons();
  }

  function bindAudioButtons() {
    setTimeout(() => {
      if (window.NihongoAudio) {
        window.NihongoAudio.bindSpeakButtons(document);
      }
    }, 100);
  }

  // --- Header Stats Update ---

  function updateHeaderStats() {
    if (!window.NihongoState) return;
    const state = window.NihongoState.getState();
    const rank = window.NihongoState.getRank();

    const streakEl = document.getElementById('header-streak-count');
    const xpEl = document.getElementById('header-xp-val');
    const rankEl = document.getElementById('header-rank-badge');

    if (streakEl) streakEl.textContent = `${state.streak.count}d`;
    if (xpEl) xpEl.textContent = `${state.xp} XP`;
    if (rankEl) { rankEl.textContent = rank.name; rankEl.title = `Mastery Rank: ${rank.name} (${rank.title})`; }

    updateSrsBadges();
  }

  function updateSrsBadges() {
    if (!window.NihongoSRS) return;
    const dueCount = window.NihongoSRS.getDueCount();
    const badgeEls = document.querySelectorAll('.srs-due-badge');
    badgeEls.forEach(el => {
      el.textContent = dueCount;
      el.style.display = dueCount > 0 ? 'inline-flex' : 'none';
    });
  }

  // --- Linguistic Focus & Cultural Insights ---

  function nextLinguisticInsight() {
    if (window.NihongoAudio) {
      window.NihongoAudio.playSuccess();
    }
    const quoteEl = document.getElementById('linguistic-quote');
    const descEl = document.getElementById('linguistic-explanation');
    if (quoteEl && descEl && window.NihongoMascot) {
      const tip = window.NihongoMascot.getRandomTip();
      quoteEl.textContent = tip.quote;
      descEl.textContent = tip.explanation;
    }
  }

  // --- Dashboard Rendering ---

  function renderDashboard() {
    const container = document.getElementById('dashboard-content');
    if (!container) return;

    const state = window.NihongoState ? window.NihongoState.getState() : {};
    const rank = window.NihongoState ? window.NihongoState.getRank() : { name: '初心者', title: 'Novice' };
    const nextRank = window.NihongoState ? window.NihongoState.getNextRank() : null;
    const dueSrs = window.NihongoSRS ? window.NihongoSRS.getDueCount() : 0;
    const questProgress = state.questPathProgress || {};

    // Calculate XP progress bar
    let xpPercent = 100;
    if (nextRank) {
      const prevMin = rank.minXp || 0;
      const span = nextRank.minXp - prevMin;
      const progress = Math.max(0, state.xp - prevMin);
      xpPercent = Math.min(100, Math.round((progress / span) * 100));
    }

    // Level roadmap definitions
    const levels = [
      { id: 'N5', title: 'JLPT N5', name: 'Beginner Foundations', kanji: '103', vocab: '800', badge: '🌱 Foundations', desc: 'Hiragana, Katakana, core particles, Masu/Te forms.' },
      { id: 'N4', title: 'JLPT N4', name: 'Upper Beginner', kanji: '300', vocab: '1,500', badge: '🌿 Daily Fluency', desc: 'Potential, passive, conditionals, giving/receiving.' },
      { id: 'N3', title: 'JLPT N3', name: 'Intermediate (The Bridge)', kanji: '650', vocab: '3,750', badge: '🎋 The Bridge', desc: 'Nuances (わけ/はず), transitive pairs, furigana reading.' },
      { id: 'N2', title: 'JLPT N2', name: 'Pre-Advanced', kanji: '1,000', vocab: '6,000', badge: '🌸 Professional', desc: 'Business Japanese, editorial connectors, timed reading.' },
      { id: 'N1', title: 'JLPT N1', name: 'Advanced Mastery', kanji: '2,000+', vocab: '10,000', badge: '🍁 Native-Adjacent', desc: 'Classical constructs, precision Keigo, four-kanji idioms.' }
    ];

    // Linguistic insight tip
    const tip = window.NihongoMascot ? window.NihongoMascot.getRandomTip() : {
      quote: '「継続は力なり」 (Continuity is strength)',
      explanation: 'Consistency beats intensity. 10 minutes of deliberate daily practice builds native intuition.'
    };

    const unitsData = window.QUEST_PATH_DATA || [];

    container.innerHTML = `
      <!-- Linguistic Spotlight & Daily Cultural Insight -->
      <section class="linguistic-spotlight-card card mb-4">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div style="flex: 1; min-width: 280px;">
            <span class="hero-tag" style="background: rgba(30, 92, 179, 0.12); color: var(--c-ruri); font-weight: 700;">
              🏛️ 本日の学び • LINGUISTIC FOCUS & CULTURAL NOTE
            </span>
            <h3 id="linguistic-quote" style="margin: 0.5rem 0 0.25rem 0; font-size: 1.25rem; font-weight: 800; color: var(--text-primary);">
              ${tip.quote}
            </h3>
            <p id="linguistic-explanation" style="font-size: 0.95rem; color: var(--text-secondary); margin: 0; line-height: 1.5;">
              ${tip.explanation}
            </p>
          </div>
          <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
            <button class="btn btn-secondary btn-sm" onclick="NihongoApp.nextLinguisticInsight()">
              Next Insight ✨
            </button>
            <button class="btn btn-secondary btn-sm" onclick="NihongoApp.navigateTo('tracer')">
              🖌️ Stroke Tracer
            </button>
            <button class="btn btn-secondary btn-sm" onclick="NihongoApp.navigateTo('srs')">
              🧠 SRS Review ${dueSrs > 0 ? `<span class="badge-count">${dueSrs}</span>` : ''}
            </button>
          </div>
        </div>
      </section>

      <!-- Interactive Practice Studio & Modular Roadmap -->
      <section class="practice-studio-section mb-5">
        <div style="margin-bottom: 1.25rem;">
          <span class="hero-tag" style="background: rgba(30, 92, 179, 0.12); color: var(--c-ruri); font-weight: 700;">
            実践演習 • INTERACTIVE PRACTICE STUDIO
          </span>
          <h2 style="font-size: clamp(1.4rem, 3vw, 1.85rem); margin: 0.35rem 0 0.2rem 0; font-weight: 900;">
            Modular Interactive Curriculum
          </h2>
          <p style="font-size: 0.92rem; color: var(--text-secondary); margin: 0; max-width: 650px;">
            Hands-on interactive practice modules: audio listening drills, tactile sentence building, pair matching, and milestone assessments.
          </p>
        </div>

        <div class="practice-units-container">
          ${unitsData.map(unit => {
            const completedCount = unit.nodes.filter(n => questProgress[n.id] && questProgress[n.id].completed).length;
            const pct = Math.round((completedCount / unit.nodes.length) * 100);

            return `
              <div class="practice-unit-card card mb-4">
                <!-- Unit Header Banner -->
                <div class="practice-unit-header">
                  <div>
                    <div class="unit-badge">UNIT ${unit.unitNumber}</div>
                    <h3 class="unit-title">${unit.title}</h3>
                    <p class="unit-sub">${unit.subtitle}</p>
                  </div>
                  <div class="unit-progress-box">
                    <div class="unit-progress-label">
                      <span>Curriculum Mastery</span>
                      <span><strong>${completedCount}</strong> / ${unit.nodes.length} Completed</span>
                    </div>
                    <div class="unit-progress-bar">
                      <div class="unit-progress-fill" style="width: ${pct}%;"></div>
                    </div>
                  </div>
                </div>

                <!-- Unit Modules Grid -->
                <div class="practice-modules-grid mt-3">
                  ${unit.nodes.map(node => {
                    const isCompleted = questProgress[node.id] && questProgress[node.id].completed;
                    const stars = (questProgress[node.id] && questProgress[node.id].stars) || 3;
                    const isCheckpoint = node.type === 'checkpoint';

                    return `
                      <div class="practice-module-card ${isCompleted ? 'module-completed' : ''} ${isCheckpoint ? 'module-checkpoint' : ''}">
                        <div class="module-card-top">
                          <span class="module-step-pill">${isCheckpoint ? '⛩️ MILESTONE' : `STEP 0${node.nodeNum}`}</span>
                          ${isCompleted 
                            ? `<span class="module-status-completed" title="Mastered (${stars} Stars)">⭐ Mastered</span>` 
                            : `<span class="module-status-ready">Ready to Practice</span>`}
                        </div>

                        <div class="module-card-body">
                          <div class="module-icon-title">
                            <span class="module-icon">${node.icon}</span>
                            <div>
                              <h4 class="module-title">${node.title}</h4>
                              <div class="module-jp-title">${node.japaneseTitle}</div>
                            </div>
                          </div>
                          <p class="module-summary">${node.summary || ''}</p>
                        </div>

                        <div class="module-card-footer">
                          <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'} btn-sm module-action-btn" onclick="NihongoQuestRunner.startSession('${node.id}')">
                            ${isCompleted ? '🔄 Review / Practice' : 'Start Interactive Practice ➔'}
                          </button>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- Hero Welcome Card -->
      <section class="dashboard-hero card">
        <div class="hero-text">
          <span class="hero-tag">日本語マスター • JLPT Learning Odyssey</span>
          <h1 class="hero-title">From First Stroke to Native Fluency.</h1>
          <p class="hero-desc">An all-in-one Japanese learning platform featuring vector stroke tracing, interactive gamified drills, spaced repetition, and deep JLPT curriculum breakdown.</p>
          <div class="hero-actions">
            <button class="btn btn-accent btn-lg" onclick="NihongoApp.navigateTo('zero')">
              🔰 Start Here (Absolute Beginner) ➔
            </button>
            <button class="btn btn-secondary btn-lg" onclick="NihongoApp.navigateTo('books')" style="background: rgba(30, 92, 179, 0.12); color: var(--c-ruri); border-color: var(--c-ruri);">
              📖 Book Lessons
            </button>
            <button class="btn btn-primary btn-lg" onclick="NihongoApp.openLevel('${activeLevel}')">
              Continue ${activeLevel} Curriculum
            </button>
            <button class="btn btn-secondary btn-lg" onclick="NihongoApp.navigateTo('tracer')">
              🖌️ Stroke Tracer
            </button>
            <button class="btn btn-secondary btn-lg" onclick="NihongoApp.navigateTo('srs')">
              🧠 SRS ${dueSrs > 0 ? `<span class="badge-count">${dueSrs}</span>` : ''}
            </button>
          </div>
        </div>
        <div class="hero-stats-card">
          <div class="hero-rank-row">
            <div>
              <span class="label">Current Mastery Rank</span>
              <div class="rank-name">${rank.name} <span class="rank-sub">(${rank.title})</span></div>
            </div>
            <div class="streak-flame">🔥 ${state.streak.count}d Streak</div>
          </div>
          <div class="xp-bar-container">
            <div class="xp-bar-fill" style="width: ${xpPercent}%"></div>
          </div>
          <div class="xp-sub-text">
            <span>${state.xp} Total XP</span>
            <span>${nextRank ? `Next Rank: ${nextRank.name} (${nextRank.minXp} XP)` : 'Maximum Rank Achieved!'}</span>
          </div>
          <div class="daily-quote mt-3">
            <span class="quote-jp">「継続は力なり」</span>
            <span class="quote-en">"Continuity is strength / Perseverance pays off."</span>
          </div>
        </div>
      </section>

      <!-- Absolute Beginner Featured Entry Card -->
      <section class="zero-beginner-banner card mt-4" onclick="NihongoApp.navigateTo('zero')" style="cursor: pointer; border-left: 5px solid var(--c-akane);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.25rem;">
          <div style="max-width: 800px;">
            <span class="hero-tag" style="background: rgba(16, 185, 129, 0.15); color: var(--c-take); font-weight: 700;">🐣 COMPLETE NOVICE? START HERE!</span>
            <h2 style="margin: 0.35rem 0; font-size: clamp(1.25rem, 2.5vw, 1.6rem);">Never Studied Japanese Before? Start from Absolute Zero</h2>
            <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
              Step-by-step interactive journey: Master the 3 writing systems, listen to crystal-clear audio pronunciation of every individual letter, explore 120+ first words with syllable-by-syllable breakdowns, and construct real sentences with SOV blueprints.
            </p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span class="stat-pill">🔤 46 Basic Kana + Dakuon</span>
              <span class="stat-pill">🗣️ Vowels & Pitch Accent Studio</span>
              <span class="stat-pill">💬 120+ Words (Syllable Audio)</span>
              <span class="stat-pill">🧩 5 Core Sentence Blueprints</span>
            </div>
          </div>
          <div>
            <button class="btn btn-primary btn-lg" style="white-space: nowrap;">Open Beginner Track ➔</button>
          </div>
        </div>
      </section>

      <!-- N5 Foundational Masterclass Entry Card -->
      <section class="zero-beginner-banner card mt-3" onclick="NihongoApp.navigateTo('books')" style="cursor: pointer; border-left: 5px solid var(--c-ruri);">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.25rem;">
          <div style="max-width: 820px;">
            <span class="hero-tag" style="background: rgba(30, 92, 179, 0.15); color: var(--c-ruri); font-weight: 700;">📖 EXTRACTED N5 TEXTBOOK MASTERCLASS</span>
            <h2 style="margin: 0.35rem 0; font-size: clamp(1.25rem, 2.5vw, 1.6rem);">N5 Foundational Masterclass: Kanji Origins, Stroke Rules & Grammar</h2>
            <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 0.75rem;">
              The foundational N5 curriculum with full interactivity: 89 Mnemonic Kanji cards with visual memory stories, the 4 pictorial origins of Kanji, the 8 universal stroke-order rules, 14 core grammar points, interactive あります vs います sorting, and 310+ authentic vocabulary compounds with native audio.
            </p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              <span class="stat-pill">🎨 89 Mnemonic Kanji</span>
              <span class="stat-pill">🏛️ 4 Origins & 8 Stroke Rules</span>
              <span class="stat-pill">💬 14 Core N5 Grammar Blueprints</span>
              <span class="stat-pill">📦 310+ Compound Words</span>
              <span class="stat-pill">✍️ 1-Click Canvas Tracing</span>
            </div>
          </div>
          <div>
            <button class="btn btn-primary btn-lg" style="white-space: nowrap; background: var(--c-ruri); border-color: var(--c-ruri);">Explore Book Lessons ➔</button>
          </div>
        </div>
      </section>

      <!-- JLPT Curriculum Roadmap -->
      <section class="roadmap-section mt-4">
        <div class="section-header">
          <div>
            <h2 class="section-title">JLPT Curriculum Roadmap</h2>
            <p class="section-sub">Choose your target level to access dedicated lessons, Kanji, vocabulary, and exams.</p>
          </div>
        </div>

        <div class="roadmap-grid">
          ${levels.map(lvl => `
            <div class="roadmap-card ${lvl.id === activeLevel ? 'card-active-level' : ''}" onclick="NihongoApp.openLevel('${lvl.id}')">
              <div class="roadmap-card-header">
                <span class="level-pill">${lvl.id}</span>
                <span class="status-badge">${lvl.badge}</span>
              </div>
              <h3 class="roadmap-level-name">${lvl.name}</h3>
              <p class="roadmap-desc">${lvl.desc}</p>
              <div class="roadmap-metrics">
                <span>📚 ~${lvl.kanji} Kanji</span>
                <span>💬 ~${lvl.vocab} Vocab</span>
              </div>
              <div class="roadmap-card-action">
                <span>Enter Hub ➔</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Quick Practice Launchers -->
      <section class="games-preview-section mt-4">
        <div class="section-header">
          <h2 class="section-title">Interactive Gamified Drills</h2>
          <p class="section-sub">Train your muscle memory, intuition, and reflexes with high-tempo games.</p>
        </div>

        <div class="game-cards-row">
          <div class="game-card card" onclick="NihongoApp.launchGame('slinger')">
            <div class="game-card-icon">🎯</div>
            <h3>Particle Slinger</h3>
            <p>Fast-paced sentence blank sniper. Slingshot particles (は, が, を, に, で) into blanks before time runs out!</p>
            <button class="btn btn-secondary btn-sm mt-2">Play Slinger</button>
          </div>

          <div class="game-card card" onclick="NihongoApp.launchGame('matcher')">
            <div class="game-card-icon">🎴</div>
            <h3>Kana & Kanji Matcher</h3>
            <p>Card pairing memory game matching characters to readings and English definitions with sound cues.</p>
            <button class="btn btn-secondary btn-sm mt-2">Play Matcher</button>
          </div>

          <div class="game-card card" onclick="NihongoApp.launchGame('blitz')">
            <div class="game-card-icon">⚡</div>
            <h3>Speed Vocabulary Blitz</h3>
            <p>60-second lightning drill with escalating pitch combos and instant SRS review integration.</p>
            <button class="btn btn-secondary btn-sm mt-2">Play Blitz</button>
          </div>
        </div>
      </section>
    `;
  }

  // --- Level Hub Rendering ---

  function openLevel(lvl) {
    activeLevel = lvl;
    if (window.NihongoState) window.NihongoState.setLevel(lvl);
    navigateTo('hub');
  }

  function renderLevelHub(lvl) {
    const container = document.getElementById('hub-content');
    if (!container) return;

    let data = window.N5_DATA;
    if (lvl === 'N4') data = window.N4_DATA;
    else if (lvl === 'N3') data = window.N3_DATA;
    else if (lvl === 'N2') data = window.N2_DATA;
    else if (lvl === 'N1') data = window.N1_DATA;

    if (!data) return;

    container.innerHTML = `
      <!-- Breadcrumb Navigation -->
      <nav class="hub-breadcrumbs" aria-label="Breadcrumb">
        <a href="#" onclick="NihongoApp.navigateTo('dashboard'); return false;">Home</a>
        <span class="crumb-separator">/</span>
        <span class="crumb-current">${data.title}</span>
      </nav>

      <!-- Hub Header Banner -->
      <div class="hub-header-banner card">
        <div class="hub-header-meta">
          <span class="hub-level-badge">${data.level}</span>
          <h1 class="hub-title">${data.title}</h1>
          <p class="hub-desc">${data.description}</p>
          <div class="hub-syllabus-stats">
            <span class="stat-tag">🎯 Kanji Target: ${data.stats.targetKanji}</span>
            <span class="stat-tag">📖 Core Vocab: ${data.stats.targetVocab}</span>
            <span class="stat-tag">🧩 Grammar Patterns: ${data.stats.targetGrammar}</span>
          </div>
        </div>
        <div class="hub-header-actions">
          <button class="btn btn-primary" onclick="NihongoApp.openQuiz('${lvl}')">
            📝 Take ${lvl} Assessment Quiz
          </button>
        </div>
      </div>

      <!-- Hub Tabs Navigation -->
      <div class="hub-tabs-bar">
        <button class="hub-tab-btn ${activeHubTab === 'overview' ? 'tab-active' : ''}" onclick="NihongoApp.switchHubTab('overview')">
          📋 Overview
        </button>
        <button class="hub-tab-btn ${activeHubTab === 'kanji' ? 'tab-active' : ''}" onclick="NihongoApp.switchHubTab('kanji')">
          🖌️ Kanji (${data.kanji ? data.kanji.length : 0})
        </button>
        <button class="hub-tab-btn ${activeHubTab === 'vocab' ? 'tab-active' : ''}" onclick="NihongoApp.switchHubTab('vocab')">
          📖 Vocabulary (${data.vocabulary ? data.vocabulary.length : 0})
        </button>
        <button class="hub-tab-btn ${activeHubTab === 'grammar' ? 'tab-active' : ''}" onclick="NihongoApp.switchHubTab('grammar')">
          🧩 Grammar & Nuances
        </button>
        <button class="hub-tab-btn ${activeHubTab === 'reading' ? 'tab-active' : ''}" onclick="NihongoApp.switchHubTab('reading')">
          📜 Reading & Listening
        </button>
        <button class="hub-tab-btn ${activeHubTab === 'quiz' ? 'tab-active' : ''}" onclick="NihongoApp.switchHubTab('quiz')">
          💮 Quiz & Drills
        </button>
      </div>

      <!-- Sub-Tab Content -->
      <div class="hub-subtab-container mt-3" id="hub-tab-body">
        <!-- Rendered by switchHubTab -->
      </div>
    `;

    renderHubTabBody(lvl, activeHubTab, data);
  }

  function switchHubTab(tabName) {
    activeHubTab = tabName;
    document.querySelectorAll('.hub-tab-btn').forEach(btn => {
      if (btn.textContent.toLowerCase().includes(tabName)) btn.classList.add('tab-active');
      else btn.classList.remove('tab-active');
    });

    let data = window.N5_DATA;
    if (activeLevel === 'N4') data = window.N4_DATA;
    else if (activeLevel === 'N3') data = window.N3_DATA;
    else if (activeLevel === 'N2') data = window.N2_DATA;
    else if (activeLevel === 'N1') data = window.N1_DATA;

    renderHubTabBody(activeLevel, tabName, data);
  }

  function renderHubTabBody(lvl, tabName, data) {
    const body = document.getElementById('hub-tab-body');
    if (!body) return;

    if (tabName === 'overview') {
      body.innerHTML = `
        <div class="overview-grid">
          <div class="card">
            <h3>Key Learning Objectives for ${lvl}</h3>
            <ul class="clean-list mt-2">
              ${lvl === 'N5' ? `
                <li>Master 46 Hiragana, 46 Katakana, and ~100 core Kanji characters.</li>
                <li>Grasp essential sentence particles (は, が, を, に, で, へ, と) without confusion.</li>
                <li>Understand basic verb conjugations: Polite Masu, Te form, and plain forms.</li>
                <li>Confidently use 10+ core survival dialogue phrases for daily travel in Japan.</li>
              ` : lvl === 'N4' ? `
                <li>Distinguish directional Giving & Receiving verbs (あげる, くれる, もらう).</li>
                <li>Conjugate verbs into Potential (〜れる/〜られる), Conditional (〜たら/〜ば), and Passive forms.</li>
                <li>Read everyday announcements and simple situational dialogues.</li>
                <li>Expand vocabulary to ~1,500 words and 300 foundational Kanji.</li>
              ` : lvl === 'N3' ? `
                <li>Bridge the textbook gap: Master epistemic nuances between わけ and はず.</li>
                <li>Distinguish intentional purpose (ために) vs state realization (ように).</li>
                <li>Differentiate paired Transitive (他動詞) and Intransitive (自動詞) verbs.</li>
                <li>Read natural passages with toggleable Furigana support.</li>
              ` : lvl === 'N2' ? `
                <li>Master high-level business etiquette and polite email phrasing.</li>
                <li>Utilize editorial connectors (〜に伴って, 〜に際して, 〜どころか, 〜一方).</li>
                <li>Speed-read media editorials within strict timed prompts (60-second drills).</li>
              ` : `
                <li>Master archaic literary constructs (〜であれ, 〜ごとき, 〜極まりない, 〜まじき).</li>
                <li>Navigate deep Keigo honorific matrices (Sonkeigo, Kenjougo I & II, Bikago).</li>
                <li>Analyze abstract philosophical, sociopolitical, and literary prose.</li>
                <li>Incorporate high-register four-kanji idioms (四字熟語).</li>
              `}
            </ul>
          </div>

          <div class="card">
            <h3>Recommended Study Flow</h3>
            <div class="study-flow-steps mt-2">
              <div class="flow-step">
                <span class="step-num">1</span>
                <div>
                  <strong>Kanji & Writing Practice</strong>
                  <p>Study the character radicals, mnemonics, and trace on the interactive canvas.</p>
                </div>
              </div>
              <div class="flow-step">
                <span class="step-num">2</span>
                <div>
                  <strong>Vocabulary & Audio</strong>
                  <p>Listen to authentic pronunciation and add difficult words to your SRS queue.</p>
                </div>
              </div>
              <div class="flow-step">
                <span class="step-num">3</span>
                <div>
                  <strong>Grammar Drills & Games</strong>
                  <p>Launch Particle Slinger or Matcher to automate your syntactic reflex.</p>
                </div>
              </div>
              <div class="flow-step">
                <span class="step-num">4</span>
                <div>
                  <strong>Comprehension Exam</strong>
                  <p>Test your listening, unscrambling, and reading comprehension under exam conditions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (tabName === 'kanji') {
      const kanjiList = data.kanji || [];
      body.innerHTML = `
        <div class="tab-toolbar">
          <input type="text" id="kanji-search-box" class="search-input" placeholder="Search Kanji by character, meaning, or reading..." value="${searchKanjiFilter}" />
          <span class="toolbar-count">${kanjiList.length} Entries</span>
        </div>
        <div class="kanji-cards-grid mt-3" id="kanji-cards-container">
          ${renderKanjiCardsHtml(kanjiList, searchKanjiFilter)}
        </div>
      `;

      document.getElementById('kanji-search-box').addEventListener('input', (e) => {
        searchKanjiFilter = e.target.value.toLowerCase();
        document.getElementById('kanji-cards-container').innerHTML = renderKanjiCardsHtml(kanjiList, searchKanjiFilter);
        bindAudioButtons();
      });
    } else if (tabName === 'vocab') {
      const vocabList = data.vocabulary || [];
      body.innerHTML = `
        <div class="tab-toolbar">
          <input type="text" id="vocab-search-box" class="search-input" placeholder="Search vocabulary word, meaning, or reading..." value="${searchVocabFilter}" />
          <span class="toolbar-count">${vocabList.length} Entries</span>
        </div>
        <div class="vocab-table-wrapper mt-3" id="vocab-table-container">
          ${renderVocabTableHtml(vocabList, searchVocabFilter)}
        </div>
      `;

      document.getElementById('vocab-search-box').addEventListener('input', (e) => {
        searchVocabFilter = e.target.value.toLowerCase();
        document.getElementById('vocab-table-container').innerHTML = renderVocabTableHtml(vocabList, searchVocabFilter);
        bindAudioButtons();
      });
    } else if (tabName === 'grammar') {
      renderGrammarContent(body, lvl, data);
    } else if (tabName === 'reading') {
      renderReadingContent(body, lvl, data);
    } else if (tabName === 'quiz') {
      body.innerHTML = `
        <div class="quiz-launcher-card card text-center">
          <h2>Ready for the ${lvl} Assessment Exam?</h2>
          <p class="mt-2">This assessment features multiple-choice grammar checks, listening comprehension, sentence unscrambler, and fill-in-the-blank questions.</p>
          <div class="mt-3">
            <button class="btn btn-primary btn-lg" onclick="NihongoQuiz.startQuiz('${lvl}')">
              🚀 Start ${lvl} Exam Now
            </button>
          </div>
        </div>
        <div id="quiz-inline-container" class="mt-3"></div>
      `;
      // Direct launcher into container
      window.NihongoQuiz.init(document.getElementById('quiz-inline-container'));
    }

    bindAudioButtons();
  }

  // Kanji Cards Helper
  function renderKanjiCardsHtml(kanjiList, filter) {
    const filtered = kanjiList.filter(k => {
      if (!filter) return true;
      return k.char.includes(filter) ||
             k.meaning.toLowerCase().includes(filter) ||
             (k.onyomi && k.onyomi.join(' ').toLowerCase().includes(filter)) ||
             (k.kunyomi && k.kunyomi.join(' ').toLowerCase().includes(filter));
    });

    if (filtered.length === 0) {
      return `<p class="p-4 text-center">No Kanji matched "${filter}".</p>`;
    }

    return filtered.map(k => {
      const state = window.NihongoState ? window.NihongoState.getState() : {};
      const mastery = (state.kanjiMastery && state.kanjiMastery[k.char]) ? state.kanjiMastery[k.char] : null;
      const statusBadge = mastery && mastery.status === 'mastered'
        ? `<span class="badge-mastered">💮 Mastered (${mastery.accuracy}%)</span>`
        : `<span class="badge-learning">Learning</span>`;

      return `
        <div class="kanji-card card">
          <div class="kanji-card-top">
            <span class="kanji-big-char" data-speak="${k.char}">${k.char}</span>
            <div class="kanji-readings">
              <div class="reading-row"><span class="reading-label">音:</span> ${k.onyomi ? k.onyomi.join(', ') : '-'}</div>
              <div class="reading-row"><span class="reading-label">訓:</span> ${k.kunyomi ? k.kunyomi.join(', ') : '-'}</div>
              <div class="kanji-strokes-count">${k.strokes} Strokes</div>
            </div>
          </div>
          <div class="kanji-meaning-row">
            <strong>${k.meaning}</strong>
          </div>
          ${k.mnemonic ? `<p class="kanji-mnemonic">💡 ${k.mnemonic}</p>` : ''}
          ${k.compounds && k.compounds.length > 0 ? `
            <div class="kanji-compounds-list">
              <span class="compounds-label">Compounds:</span>
              ${k.compounds.map(c => `
                <span class="compound-tag" data-speak="${c.word}">${c.word} (${c.reading} - ${c.meaning})</span>
              `).join('')}
            </div>
          ` : ''}
          <div class="kanji-card-footer">
            ${statusBadge}
            <button class="btn btn-primary btn-sm" onclick="NihongoApp.traceChar('${k.char}')">
              🖌️ Trace on Canvas
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Vocab Table Helper
  function renderVocabTableHtml(vocabList, filter) {
    const filtered = vocabList.filter(v => {
      if (!filter) return true;
      return v.word.includes(filter) ||
             v.reading.includes(filter) ||
             v.meaning.toLowerCase().includes(filter);
    });

    if (filtered.length === 0) {
      return `<p class="p-4 text-center">No vocabulary matched "${filter}".</p>`;
    }

    return `
      <table class="vocab-table">
        <thead>
          <tr>
            <th>Word</th>
            <th>Reading</th>
            <th>Pitch</th>
            <th>English Meaning</th>
            <th>Example Sentence</th>
            <th>Audio</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map(v => `
            <tr>
              <td><strong class="vocab-word">${v.word}</strong></td>
              <td><span class="vocab-reading">${v.reading}</span></td>
              <td><span class="pitch-tag">${v.pitch || 'Heiban'}</span></td>
              <td>${v.meaning}</td>
              <td class="vocab-example">${v.example || '-'}</td>
              <td>
                <button class="btn-icon-audio" data-speak="${v.audioKey || v.word}" title="Listen to pronunciation">🔊</button>
              </td>
              <td>
                <button class="btn btn-secondary btn-sm" onclick="NihongoApp.addWordToSrs('${v.word}', '${v.reading}', '${v.meaning.replace(/'/g, "\\'")}')">
                  📥 SRS
                </button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  // Grammar Content Helper
  function renderGrammarContent(container, lvl, data) {
    if (lvl === 'N5') {
      container.innerHTML = `
        <div class="grammar-modules">
          <!-- Essential Particles Matrix -->
          <div class="card mb-4">
            <h2>Essential Sentence Particles (は, が, を, に, で, へ)</h2>
            <p class="section-sub">Particles are the grammatical glue of Japanese sentences. Master their functional distinctions:</p>
            <div class="particle-cards-grid mt-3">
              ${(data.particles || []).map(p => `
                <div class="particle-box">
                  <div class="particle-box-header">
                    <span class="particle-char">${p.particle}</span>
                    <span class="particle-role">${p.role}</span>
                  </div>
                  <p class="particle-exp">${p.explanation}</p>
                  <div class="particle-formula"><code>${p.formula}</code></div>
                  <div class="particle-examples">
                    ${p.examples.map(ex => `
                      <div class="ex-row">
                        <span class="ex-jp" data-speak="${ex.jp}">${ex.jp}</span>
                        <span class="ex-en">${ex.en}</span>
                      </div>
                    `).join('')}
                  </div>
                  <div class="particle-tip">💡 ${p.tip}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Verb Conjugation Guide -->
          <div class="card mb-4">
            <h2>Verb Conjugation Foundations (動詞の活用)</h2>
            <p class="section-sub">Every Japanese verb falls into one of three distinct groups:</p>
            <div class="conjugation-groups mt-3">
              ${(data.verbConjugations || []).map(grp => `
                <div class="conj-group-card">
                  <h3>${grp.group}</h3>
                  <p class="conj-rule">${grp.rule}</p>
                  <div class="conj-samples-table-wrap">
                    <table class="conj-table">
                      <thead>
                        <tr>
                          <th>Dictionary Form</th>
                          <th>Polite (Masu)</th>
                          <th>Te-Form (Connective)</th>
                          <th>Nai-Form (Negative)</th>
                          <th>Meaning</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${grp.samples.map(s => `
                          <tr>
                            <td><strong data-speak="${s.dict}">${s.dict}</strong></td>
                            <td><span data-speak="${s.masu}">${s.masu}</span></td>
                            <td><span data-speak="${s.te}">${s.te}</span></td>
                            <td><span data-speak="${s.nai}">${s.nai}</span></td>
                            <td>${s.meaning}</td>
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Survival Phrases -->
          <div class="card">
            <h2>Core Survival & Travel Phrases</h2>
            <div class="survival-grid mt-3">
              ${(data.survivalPhrases || []).map(ph => `
                <div class="survival-card">
                  <div class="survival-jp" data-speak="${ph.jp}">${ph.jp}</div>
                  <div class="survival-romaji">${ph.romaji}</div>
                  <div class="survival-en"><strong>${ph.en}</strong></div>
                  <div class="survival-note">${ph.note}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (lvl === 'N4') {
      container.innerHTML = `
        <div class="grammar-modules">
          <div class="card mb-4">
            <h2>N4 Core Grammar Lessons</h2>
            ${(data.grammarLessons || []).map(g => `
              <div class="n4-lesson-box mb-4">
                <h3>${g.title}</h3>
                <p class="n4-lesson-meaning"><strong>Meaning:</strong> ${g.meaning}</p>
                <div class="n4-lesson-rule">${g.rule}</div>
                <div class="diagram-callout">${g.diagram}</div>
                <div class="mt-2">
                  ${g.examples.map(ex => `
                    <div class="ex-row">
                      <span class="ex-jp" data-speak="${ex.jp}">${ex.jp}</span>
                      <span class="ex-en">${ex.en}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (lvl === 'N3') {
      container.innerHTML = `
        <div class="grammar-modules">
          <div class="card mb-4">
            <h2>Intermediate Nuance Distinctions & Grammar Bridges</h2>
            ${(data.grammarNuances || []).map(gn => `
              <div class="n3-nuance-box mb-4">
                <h3>${gn.title}</h3>
                <p>${gn.explanation}</p>
                ${gn.subsections ? `
                  <div class="nuance-subsections mt-2">
                    ${gn.subsections.map(sub => `
                      <div class="nuance-sub-card">
                        <h4>${sub.name}</h4>
                        <p>${sub.details}</p>
                        <div class="nuance-ex" data-speak="${sub.example}">${sub.example}</div>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
                ${gn.pairs ? `
                  <div class="trans-pairs-table-wrap mt-2">
                    <table class="conj-table">
                      <thead>
                        <tr>
                          <th>Transitive (他動詞 - を)</th>
                          <th>Intransitive (自動詞 - が)</th>
                          <th>Memory Hook</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${gn.pairs.map(p => `
                          <tr>
                            <td><strong data-speak="${p.trans}">${p.trans}</strong></td>
                            <td><strong data-speak="${p.intrans}">${p.intrans}</strong></td>
                            <td>${p.memoryTip}</td>
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (lvl === 'N2') {
      container.innerHTML = `
        <div class="grammar-modules">
          <div class="card mb-4">
            <h2>Formal Discourse Connectors & Business Japanese</h2>
            <div class="connector-list mt-3">
              ${(data.discourseConnectors || []).map(dc => `
                <div class="connector-card">
                  <h3>${dc.pattern}</h3>
                  <div class="connector-meaning"><strong>Significance:</strong> ${dc.meaning}</div>
                  <div class="connector-nuance"><strong>Nuance:</strong> ${dc.nuance}</div>
                  <div class="ex-row mt-2">
                    <span class="ex-jp" data-speak="${dc.example}">${dc.example}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (lvl === 'N1') {
      container.innerHTML = `
        <div class="grammar-modules">
          <!-- Keigo Matrix -->
          <div class="card mb-4">
            <h2>Precision Keigo (Honorifics) Matrix</h2>
            <div class="keigo-table-wrap mt-3">
              <table class="conj-table">
                <thead>
                  <tr>
                    <th>Base Action</th>
                    <th>Sonkeigo (尊敬語 - Respectful)</th>
                    <th>Kenjougo I (謙譲語I - Humble Other)</th>
                    <th>Kenjougo II (謙譲語II - Humble Self)</th>
                    <th>Teineigo (丁寧語 - Polite)</th>
                  </tr>
                </thead>
                <tbody>
                  ${(data.keigoMatrix || []).map(km => `
                    <tr>
                      <td><strong>${km.action}</strong></td>
                      <td><span class="keigo-sonkei">${km.sonkeigo}</span></td>
                      <td><span class="keigo-kenjou">${km.kenjougo1}</span></td>
                      <td><span class="keigo-kenjou">${km.kenjougo2}</span></td>
                      <td>${km.teineigo}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Literary Constructs -->
          <div class="card mb-4">
            <h2>Archaic Particles & Literary Grammar</h2>
            <div class="connector-list mt-3">
              ${(data.literaryGrammar || []).map(lg => `
                <div class="connector-card">
                  <h3>${lg.construct}</h3>
                  <div class="connector-meaning"><strong>Construct:</strong> ${lg.meaning}</div>
                  <div class="connector-nuance"><strong>Nuance:</strong> ${lg.nuance}</div>
                  <div class="ex-row mt-2">
                    <span class="ex-jp" data-speak="${lg.example}">${lg.example}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Yojijukugo (四字熟語) -->
          <div class="card">
            <h2>Four-Character Idiomatic Phrases (四字熟語)</h2>
            <div class="yoji-grid mt-3">
              ${(data.yojijukugo || []).map(yj => `
                <div class="yoji-card">
                  <div class="yoji-char" data-speak="${yj.kanji}">${yj.kanji}</div>
                  <div class="yoji-reading">${yj.reading}</div>
                  <div class="yoji-meaning"><strong>${yj.meaning}</strong></div>
                  <div class="yoji-origin">📜 Origin: ${yj.origin}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }
  }

  // Reading & Listening Helper
  function renderReadingContent(container, lvl, data) {
    if (lvl === 'N4' && data.listeningExercise) {
      container.innerHTML = `
        <div class="reading-listening-layout">
          <!-- Listening Dialogue Exercise -->
          <div class="card mb-4">
            <div class="card-header-row">
              <h2>🎧 Conversational Listening Exercise</h2>
              <span class="status-badge">Audio Included</span>
            </div>
            <h3>${data.listeningExercise.title}</h3>
            <div class="listening-dialogue mt-3">
              ${data.listeningExercise.dialogue.map(d => `
                <div class="dialogue-line">
                  <div class="dialogue-speaker">${d.speaker}:</div>
                  <div class="dialogue-bubble">
                    <span class="dialogue-jp" data-speak="${d.jp}">${d.jp}</span>
                    <span class="dialogue-en">${d.en}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Reading Passage -->
          <div class="card">
            <h2>📜 Reading Comprehension with Toggleable Furigana</h2>
            <div class="furigana-hint-banner">
              Tip: Use the Furigana toggle in the header (Show All / Hover Only / Hide) to test your Kanji reading recall!
            </div>
            <div class="reading-passage-text mt-3">
              <h3>${data.readingPassage.title}</h3>
              ${data.readingPassage.textHtml}
            </div>
            <div class="reading-questions-section mt-4">
              <h3>Comprehension Checks:</h3>
              ${data.readingPassage.questions.map((q, idx) => `
                <div class="reading-q-box mt-3">
                  <div class="reading-q-text">Q${idx + 1}: ${q.question}</div>
                  <div class="reading-opts">
                    ${q.options.map((opt, oIdx) => `
                      <div class="reading-opt-item ${oIdx === q.correctIndex ? 'is-correct-preview' : ''}">
                        ${String.fromCharCode(65 + oIdx)}. ${opt}
                      </div>
                    `).join('')}
                  </div>
                  <div class="reading-exp-note">💡 Explanation: ${q.explanation}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (lvl === 'N2' && data.timedReadingChallenge) {
      const challenge = data.timedReadingChallenge;
      container.innerHTML = `
        <div class="reading-listening-layout">
          <div class="card mb-4">
            <div class="card-header-row">
              <h2>⏱️ 60-Second Timed Newspaper Reading Drill</h2>
              <span class="status-badge">Speed Test</span>
            </div>
            <h3>${challenge.title}</h3>
            <div class="reading-passage-text mt-3">
              ${challenge.textHtml}
            </div>
            <div class="reading-questions-section mt-4">
              <h3>Analytical Comprehension Questions:</h3>
              ${challenge.questions.map((q, idx) => `
                <div class="reading-q-box mt-3">
                  <div class="reading-q-text">Q${idx + 1}: ${q.question}</div>
                  <div class="reading-opts">
                    ${q.options.map((opt, oIdx) => `
                      <div class="reading-opt-item ${oIdx === q.correctIndex ? 'is-correct-preview' : ''}">
                        ${String.fromCharCode(65 + oIdx)}. ${opt}
                      </div>
                    `).join('')}
                  </div>
                  <div class="reading-exp-note">💡 Contextual Analysis: ${q.explanation}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (data.readingPassage) {
      container.innerHTML = `
        <div class="reading-listening-layout">
          <div class="card">
            <div class="card-header-row">
              <h2>📜 Reading Comprehension Passage</h2>
              <span class="status-badge">Toggleable Furigana</span>
            </div>
            <div class="furigana-hint-banner">
              Tip: Test yourself by setting Furigana mode to "Hover Only" or "Hide" in the top bar!
            </div>
            <div class="reading-passage-text mt-3">
              <h3>${data.readingPassage.title}</h3>
              ${data.readingPassage.textHtml}
            </div>
            <div class="reading-questions-section mt-4">
              <h3>Comprehension Questions:</h3>
              ${data.readingPassage.questions.map((q, idx) => `
                <div class="reading-q-box mt-3">
                  <div class="reading-q-text">Q${idx + 1}: ${q.question}</div>
                  <div class="reading-opts">
                    ${q.options.map((opt, oIdx) => `
                      <div class="reading-opt-item ${oIdx === q.correctIndex ? 'is-correct-preview' : ''}">
                        ${String.fromCharCode(65 + oIdx)}. ${opt}
                      </div>
                    `).join('')}
                  </div>
                  <div class="reading-exp-note">💡 Explanation: ${q.explanation}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }
  }

  // --- Absolute Beginner (Zero to Hero) View ---
  let activeZeroTab = 'systems';
  let activeZeroVocabCat = 'greetings';
  let drillScore = 0;
  let currentDrillTarget = null;

  // Beginner Interactive Workshop & Simulator State
  let builderSlotSelections = {
    subject: 0,
    place: 0,
    object: 0,
    verb: 0
  };
  let activeDialogueId = 'konbini';
  let dialogueStepIndex = 1;
  let dialogueHistory = [];

  function renderZeroBeginnerView() {
    const container = document.getElementById('zero-beginner-content');
    if (!container || !window.ZERO_BEGINNER_DATA) return;
    const data = window.ZERO_BEGINNER_DATA;

    container.innerHTML = `
      <!-- Breadcrumb -->
      <nav class="hub-breadcrumbs" aria-label="Breadcrumb">
        <a href="#" onclick="NihongoApp.navigateTo('dashboard'); return false;">Home</a>
        <span class="crumb-separator">/</span>
        <span class="crumb-current">🔰 Zero to Hero: Absolute Beginner Track</span>
      </nav>

      <!-- Beginner Header Banner -->
      <div class="hub-header-banner card">
        <div class="hub-header-meta">
          <span class="hub-level-badge" style="background: var(--c-take);">🐣 Level 0: Pure Novice</span>
          <h1 class="hub-title">${data.overview.title}</h1>
          <p class="hub-desc">${data.overview.subtitle}</p>
          <div class="hub-syllabus-stats">
            <span class="stat-tag">🔤 46 Basic Kana + Confusables</span>
            <span class="stat-tag">🗣️ Vowels & Pitch Studio</span>
            <span class="stat-tag">💬 120+ Core Words</span>
            <span class="stat-tag">🧩 Sentence Builder Studio</span>
            <span class="stat-tag">🎭 Real-Life Dialogues</span>
            <span class="stat-tag">🚨 Survival Kit Soundboard</span>
          </div>
        </div>
        <div class="hub-header-actions">
          <button class="btn btn-secondary" onclick="NihongoApp.navigateTo('tracer')">
            🖌️ Interactive Stroke Tracer
          </button>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="hub-tabs-bar">
        <button class="hub-tab-btn ${activeZeroTab === 'systems' ? 'tab-active' : ''}" onclick="NihongoApp.switchZeroTab('systems')">
          🔤 1. Alphabets & Confusables
        </button>
        <button class="hub-tab-btn ${activeZeroTab === 'phonetics' ? 'tab-active' : ''}" onclick="NihongoApp.switchZeroTab('phonetics')">
          🗣️ 2. Pronunciation & Pitch
        </button>
        <button class="hub-tab-btn ${activeZeroTab === 'words' ? 'tab-active' : ''}" onclick="NihongoApp.switchZeroTab('words')">
          💬 3. First 120+ Words
        </button>
        <button class="hub-tab-btn ${activeZeroTab === 'sentences' ? 'tab-active' : ''}" onclick="NihongoApp.switchZeroTab('sentences')">
          🧩 4. Sentence Workshop & SOV
        </button>
        <button class="hub-tab-btn ${activeZeroTab === 'dialogues' ? 'tab-active' : ''}" onclick="NihongoApp.switchZeroTab('dialogues')">
          🎭 5. Real-Life Dialogues
        </button>
        <button class="hub-tab-btn ${activeZeroTab === 'survival' ? 'tab-active' : ''}" onclick="NihongoApp.switchZeroTab('survival')">
          🚨 6. Survival Phrase Kit
        </button>
        <button class="hub-tab-btn ${activeZeroTab === 'drills' ? 'tab-active' : ''}" onclick="NihongoApp.switchZeroTab('drills')">
          🎯 7. Beginner Ear Drills
        </button>
      </div>

      <!-- Tab Content Area -->
      <div class="hub-subtab-container mt-3" id="zero-tab-body">
        <!-- Rendered by renderZeroTabBody -->
      </div>
    `;

    renderZeroTabBody(activeZeroTab);
  }

  function switchZeroTab(tabName) {
    activeZeroTab = tabName;
    document.querySelectorAll('.hub-tabs-bar .hub-tab-btn').forEach(btn => {
      const onclickAttr = btn.getAttribute('onclick') || '';
      if (onclickAttr.includes(`'${tabName}'`)) btn.classList.add('tab-active');
      else btn.classList.remove('tab-active');
    });
    renderZeroTabBody(tabName);
  }

  function renderZeroTabBody(tabName) {
    const body = document.getElementById('zero-tab-body');
    if (!body || !window.ZERO_BEGINNER_DATA) return;
    const data = window.ZERO_BEGINNER_DATA;

    if (tabName === 'systems') {
      body.innerHTML = `
        <div class="zero-systems-layout">
          <!-- 3 Writing Systems Comparison -->
          <div class="card mb-4">
            <h2>The 3 Japanese Writing Systems Explained</h2>
            <p class="section-sub">Why does Japanese have 3 scripts? Each serves a specialized, harmonious purpose:</p>
            <div class="writing-systems-grid mt-3">
              ${data.overview.writingSystemsOverview.map(sys => `
                <div class="system-card">
                  <div class="system-card-header">
                    <h3>${sys.name}</h3>
                    <span class="system-count-tag">${sys.count}</span>
                  </div>
                  <div class="system-role"><strong>Role:</strong> ${sys.role}</div>
                  <div class="system-style"><strong>Visual Style:</strong> ${sys.style}</div>
                  <div class="system-example">
                    <strong>Example:</strong> <span class="highlight-kana" data-speak="${sys.example.split(' ')[0]}">${sys.example}</span>
                  </div>
                  <div class="system-tip">💡 ${sys.tip}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Master Alphabet Soundboard -->
          <div class="card mb-4">
            <div class="card-header-row">
              <div>
                <h2>🔊 Interactive Alphabet Soundboard</h2>
                <p class="section-sub">Tap any tile to listen to authentic Japanese pronunciation. Click "Trace" to practice its stroke order.</p>
              </div>
            </div>

            <!-- Soundboard Matrix Filters -->
            <div class="soundboard-matrix mt-3">
              <h3>Basic 46 Sounds (Seion 清音)</h3>
              <div class="soundboard-rows-list mt-2">
                ${data.soundboard.seionRows.map(row => `
                  <div class="soundboard-row">
                    <span class="soundboard-row-label">${row.row}</span>
                    <div class="soundboard-tiles">
                      ${row.kana.map(k => `
                        <div class="soundboard-tile" data-speak="${k.hira}" title="Tap to listen to ${k.romaji}">
                          <span class="tile-hira">${k.hira}</span>
                          <span class="tile-kata">${k.kata}</span>
                          <span class="tile-romaji">${k.romaji}</span>
                          <span class="tile-phonetic">${k.phonetic || toEnglishPhonetics(k.hira)}</span>
                          <button class="tile-trace-btn" onclick="event.stopPropagation(); NihongoApp.traceChar('${k.hira}', true)">Trace</button>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>

              <!-- Dakuon & Handakuon -->
              <h3 class="mt-4">Voiced Sounds (が・ざ・だ・ば・ぱ - Dakuon & Handakuon)</h3>
              <p class="section-sub">Add two dots (゛ Dakuten) to turn K ➔ G, S ➔ Z, T ➔ D, H ➔ B. Add a circle (゜ Handakuten) for H ➔ P!</p>
              <div class="soundboard-rows-list mt-2">
                ${data.soundboard.dakuonRows.map(row => `
                  <div class="soundboard-row">
                    <span class="soundboard-row-label">${row.row}</span>
                    <div class="soundboard-tiles">
                      ${row.kana.map(k => `
                        <div class="soundboard-tile" data-speak="${k.hira}" title="Listen to ${k.romaji}">
                          <span class="tile-hira">${k.hira}</span>
                          <span class="tile-kata">${k.kata}</span>
                          <span class="tile-romaji">${k.romaji}</span>
                          <button class="tile-trace-btn" onclick="event.stopPropagation(); NihongoApp.traceChar('${k.hira}', true)">Trace</button>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>

              <!-- Youon Combinations -->
              <h3 class="mt-4">Contracted Combination Sounds (きゃ・しゃ・ちゃ - Youon)</h3>
              <p class="section-sub">Combine [Consonant + i] with a small や, ゆ, or よ to create single-syllable gliding sounds:</p>
              <div class="soundboard-rows-list mt-2">
                ${data.soundboard.youonCombinations.map(row => `
                  <div class="soundboard-row">
                    <span class="soundboard-row-label">${row.row}</span>
                    <div class="soundboard-tiles">
                      ${row.kana.map(k => `
                        <div class="soundboard-tile" data-speak="${k.hira}" title="Listen to ${k.romaji}">
                          <span class="tile-hira">${k.hira}</span>
                          <span class="tile-romaji">${k.romaji}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Confusable Twins Lab (The Lookalike Spotter) -->
          <div class="card mb-4">
            <div class="card-header-row">
              <div>
                <h2>👀 Confusable Twins Lab (The Lookalike Spotter)</h2>
                <p class="section-sub">Never confuse tricky lookalike Kana again! Inspect distinguishing stroke features, hear native audio, and test your recognition instantly.</p>
              </div>
            </div>
            <div class="confusable-grid mt-3">
              ${(data.confusableTwins || []).map(twin => `
                <div class="confusable-card">
                  <div class="card-header-row">
                    <h3 style="font-size: 1.15rem; margin: 0;">${twin.title}</h3>
                    <span class="hub-level-badge" style="background: var(--c-ruri);">${twin.script}</span>
                  </div>
                  <p class="text-secondary mt-1" style="font-size: 0.88rem;">${twin.overview}</p>
                  <div class="confusable-comparison-row">
                    ${twin.chars.map(c => `
                      <div class="confusable-char-box">
                        <span class="confusable-big-glyph" data-speak="${c.audio}">${c.char}</span>
                        <strong style="color: var(--c-ruri); font-size: 0.95rem;">${c.romaji}</strong>
                        <span class="badge" style="margin: 0.35rem 0; font-size: 0.75rem;">${c.strokes} strokes</span>
                        <div style="font-size: 0.82rem; font-weight: 700; color: var(--c-akane); margin-bottom: 0.25rem;">${c.feature}</div>
                        <div style="font-size: 0.78rem; color: var(--text-muted); line-height: 1.3;">${c.mnemonic}</div>
                        <div style="display: flex; gap: 0.35rem; margin-top: 0.65rem;">
                          <button class="btn btn-secondary btn-sm" data-speak="${c.audio}">🔊 Listen</button>
                          <button class="btn btn-secondary btn-sm" onclick="NihongoApp.traceChar('${c.char}', true)">🖌️ Trace</button>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                  <div class="confusable-diff-box">
                    <strong>💡 Key Difference:</strong> ${twin.keyDifference}
                  </div>
                  <div class="confusable-test-box" style="background: var(--bg-surface-elevated); padding: 0.85rem; border-radius: var(--radius-sm); border: 1px dashed var(--border-subtle); margin-top: 0.5rem;">
                    <div style="font-size: 0.85rem; font-weight: 700; margin-bottom: 0.45rem;">🎯 Spot the Difference Test: ${twin.testQuestion}</div>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                      ${twin.chars.map(c => `
                        <button class="btn btn-secondary btn-sm" onclick="NihongoApp.testConfusablePair('${twin.id}', '${c.char}')">
                          Choose <strong>${c.char} (${c.romaji})</strong>
                        </button>
                      `).join('')}
                    </div>
                    <div id="spotter-result-${twin.id}"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    } else if (tabName === 'phonetics') {
      const guide = data.phoneticsGuide;
      body.innerHTML = `
        <div class="zero-phonetics-layout">
          <!-- The 5 Pure Vowels -->
          <div class="card mb-4">
            <h2>The 5 Foundation Vowels (アイウエオ)</h2>
            <p class="section-sub">Every Japanese syllable is built around one of these 5 pure, crisp vowels. Master mouth shapes:</p>
            <div class="vowels-guide-grid mt-3">
              ${guide.vowels.map(v => `
                <div class="vowel-box">
                  <div class="vowel-header">
                    <span class="vowel-letter" data-speak="${v.letter.split('/')[0].trim()}">${v.letter}</span>
                    <span class="vowel-sound">${v.sound} (/ ${v.romaji} /)</span>
                  </div>
                  <div class="vowel-mouth"><strong>Mouth Position:</strong> ${v.mouth}</div>
                  <div class="vowel-ex">
                    <strong>Sample:</strong> <span class="vowel-sample-word" data-speak="${v.example.split(' ')[0]}">${v.example}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Pitch Accent Studio with Minimal Pairs & Tone Synth -->
          <div class="card mb-4">
            <div class="card-header-row">
              <div>
                <h2>🎵 Interactive Pitch Accent Studio</h2>
                <p class="section-sub">Japanese uses pitch tone (High vs. Low) to distinguish word meanings. Listen to the word AND hear the synthesized pitch contour:</p>
              </div>
            </div>

            <p class="pitch-intro-text">${guide.pitchAccentStudio.explanation}</p>

            <div class="pitch-pairs-grid mt-3">
              ${guide.pitchAccentStudio.pairs.map(pair => `
                <div class="pitch-pair-card">
                  <div class="pitch-side">
                    <div class="pitch-word" data-speak="${pair.audioA}">${pair.wordA}</div>
                    <div class="pitch-contour-badge contour-hl">${pair.pitchA}</div>
                    <div class="pitch-actions-row mt-2">
                      <button class="btn btn-secondary btn-sm" data-speak="${pair.audioA}">🔊 Hear Word</button>
                      <button class="btn btn-secondary btn-sm" onclick="NihongoAudio.playPitchContour('high-low')">🎵 Tone Melody</button>
                    </div>
                  </div>

                  <div class="pitch-divider">VS</div>

                  <div class="pitch-side">
                    <div class="pitch-word" data-speak="${pair.audioB}">${pair.wordB}</div>
                    <div class="pitch-contour-badge contour-lh">${pair.pitchB}</div>
                    <div class="pitch-actions-row mt-2">
                      <button class="btn btn-secondary btn-sm" data-speak="${pair.audioB}">🔊 Hear Word</button>
                      <button class="btn btn-secondary btn-sm" onclick="NihongoAudio.playPitchContour('low-high')">🎵 Tone Melody</button>
                    </div>
                  </div>

                  <div class="pitch-pair-tip mt-2">💡 ${pair.tip}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Special Sounds (Long Vowels, Small Tsu, Nasal N) -->
          <div class="card">
            <h2>Tricky Japanese Sounds: Long Vowels, Small っ, and ん</h2>
            ${guide.specialSounds.map(spec => `
              <div class="special-sound-box mb-4">
                <h3>${spec.title}</h3>
                <p class="section-sub">${spec.explanation}</p>
                ${spec.pairs ? `
                  <div class="special-pairs-table-wrap mt-2">
                    <table class="conj-table">
                      <thead>
                        <tr>
                          <th>Short Vowel (1 Beat)</th>
                          <th>Long Vowel (2 Beats - Held Double Length)</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${spec.pairs.map(p => `
                          <tr>
                            <td><strong data-speak="${p.shortW || p.wordA}">${p.shortW || p.wordA}</strong> (${p.shortR || p.meanA})</td>
                            <td><strong class="highlight-kana" data-speak="${p.longW || p.wordB}">${p.longW || p.wordB}</strong> (${p.longR || p.meanB})</td>
                          </tr>
                        `).join('')}
                      </tbody>
                    </table>
                  </div>
                ` : ''}
                ${spec.examples ? `
                  <div class="special-examples-list mt-2">
                    ${spec.examples.map(ex => `
                      <div class="special-ex-item" data-speak="${ex.word.split(' ')[0]}">
                        <strong class="ex-word">${ex.word}</strong>: <span>${ex.meaning}</span> <em class="ex-note">(${ex.note})</em>
                      </div>
                    `).join('')}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (tabName === 'words') {
      const categories = data.vocabularyCategories;
      const activeCategory = categories.find(c => c.categoryId === activeZeroVocabCat) || categories[0];

      body.innerHTML = `
        <div class="zero-words-layout">
          <!-- Category Selector Pills -->
          <div class="zero-cat-pills-bar">
            ${categories.map(c => `
              <button class="cat-pill-btn ${c.categoryId === activeZeroVocabCat ? 'pill-active' : ''}" onclick="NihongoApp.switchZeroVocabCategory('${c.categoryId}')">
                ${c.categoryName}
              </button>
            `).join('')}
          </div>

          <!-- Category Banner -->
          <div class="card mb-3 mt-3">
            <div class="card-header-row">
              <div>
                <h2>${activeCategory.categoryName}</h2>
                <p class="section-sub">${activeCategory.description}</p>
              </div>
              <span class="status-badge">${activeCategory.words.length} Vocabulary Words</span>
            </div>
            <div class="syllable-instruction-banner mt-2">
              👉 <strong>Interactive Syllables:</strong> Tap any individual syllable chip (e.g. <code>[お]</code> <code>[は]</code> <code>[よ]</code> <code>[う]</code>) to hear that exact sound in isolation!
            </div>
          </div>

          <!-- Words Grid -->
          <div class="zero-words-cards-grid">
            ${activeCategory.words.map(w => `
              <div class="zero-word-card card">
                <div class="word-card-top">
                  <div>
                    <h3 class="word-main-title" data-speak="${w.reading}">${w.word}</h3>
                    <div class="word-romaji romaji-sub">${w.romaji}</div>
                    <div class="word-phonetic-badge">
                      <span class="phonetic-label">🗣️ Sounds like:</span>
                      <span class="phonetic-val">${w.phonetic || toEnglishPhonetics(w.reading || w.word)}</span>
                    </div>
                  </div>
                  <button class="btn-icon-audio" data-speak="${w.reading}" title="Listen to whole word">🔊</button>
                </div>

                <!-- Syllable breakdown buttons -->
                <div class="word-syllables-box">
                  <span class="syllables-label">Syllables:</span>
                  <div class="syllables-chips-row">
                    ${w.syllables.map(s => `
                      <button class="mora-chip-btn" data-speak="${s}" title="Listen to letter ${s}">
                        ${s}
                      </button>
                    `).join('')}
                    <button class="mora-spell-btn" onclick="NihongoAudio.speakMoraArray(${JSON.stringify(w.syllables).replace(/"/g, '&quot;')})" title="Play letter-by-letter spelling">
                      🔤 Spell Out
                    </button>
                  </div>
                </div>

                <div class="word-meaning-box">
                  <span class="word-meaning"><strong>Meaning:</strong> ${w.meaning}</span>
                  <span class="word-pitch-tag">Pitch: ${w.pitch}</span>
                </div>

                ${w.tip ? `<div class="word-cultural-tip">💡 ${w.tip}</div>` : ''}

                <div class="word-card-footer">
                  <button class="btn btn-secondary btn-sm" onclick="NihongoApp.addWordToSrs('${w.word}', '${w.reading}', '${w.meaning.replace(/'/g, "\\'")}')">
                    📥 Add to SRS Review
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (tabName === 'sentences') {
      const arch = data.sentenceArchitecture;
      body.innerHTML = `
        <div class="zero-sentences-layout">
          <!-- Interactive Sentence Blueprint Workshop -->
          <div class="card mb-4" id="sentence-builder-card">
            <div class="card-header-row">
              <div>
                <h2>🧩 Interactive Sentence Blueprint Workshop</h2>
                <p class="section-sub">${(data.sentenceBuilderStudio && data.sentenceBuilderStudio.desc) || 'Tap slots to assemble authentic Japanese SOV sentences with instant audio!'}</p>
              </div>
            </div>

            <!-- Slots Grid -->
            <div class="builder-slots-grid mt-3">
              ${(data.sentenceBuilderStudio && data.sentenceBuilderStudio.slots ? data.sentenceBuilderStudio.slots : []).map(slot => `
                <div class="builder-slot-col" data-builder-col="${slot.id}">
                  <div class="builder-slot-header">
                    <span>${slot.name}</span>
                    ${slot.particle ? `<span class="builder-slot-particle">${slot.particle}</span>` : ''}
                  </div>
                  <div class="builder-tokens-list">
                    ${slot.options.map((opt, optIdx) => `
                      <button class="builder-token-btn ${builderSlotSelections[slot.id] === optIdx ? 'token-active' : ''}" onclick="NihongoApp.selectBuilderSlotToken('${slot.id}', ${optIdx})">
                        <div>
                          <strong style="font-family: var(--font-japanese); font-size: 1rem;">${opt.jp}</strong>
                          <span class="romaji-sub" style="font-size: 0.78rem; opacity: 0.85; margin-left: 0.35rem;">(${opt.romaji})</span>
                        </div>
                        <span style="font-size: 0.78rem; opacity: 0.75;">${opt.en}</span>
                      </button>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Assembled Sentence Preview Box -->
            <div class="builder-preview-box" id="builder-preview-container">
              <!-- Rendered by renderBuilderPreview() -->
            </div>
          </div>

          <!-- SOV Syntax Blueprint Card -->
          <div class="card mb-4">
            <div class="card-header-row">
              <div>
                <h2>How Japanese Sentences Work (SOV Architecture)</h2>
                <p class="section-sub">Never translate word-for-word from English! Learn the natural Japanese thought structure:</p>
              </div>
            </div>
            <div class="syntax-diagram-box mt-3">
              ${arch.syntaxExplanation}
            </div>
          </div>

          <!-- Core Beginner Sentence Patterns -->
          ${arch.coreFormulas.map(pat => `
            <div class="card mb-4">
              <div class="card-header-row">
                <div>
                  <span class="hub-level-badge" style="background: var(--c-ruri);">${pat.name}</span>
                  <div class="formula-rule-banner mt-2">
                    <code>${pat.formula}</code>
                    <span class="formula-romaji">(${pat.romajiFormula})</span>
                  </div>
                </div>
              </div>

              <p class="mt-2 text-secondary">${pat.explanation}</p>

              <!-- Interactive Sentences for this pattern -->
              <div class="pattern-sentences-list mt-3">
                ${pat.examples.map(ex => `
                  <div class="sentence-interactive-box">
                    <div class="sentence-audio-row">
                      <div class="sentence-jp-full" data-speak="${ex.jp}">${ex.jp}</div>
                      <button class="btn-icon-audio" data-speak="${ex.jp}" title="Listen to full sentence">🔊</button>
                    </div>

                    <div class="sentence-romaji-full">${ex.romaji}</div>
                    <div class="sentence-en-meaning"><strong>English:</strong> “${ex.en}”</div>
                    <div class="sentence-literal"><strong>Literal order:</strong> ${ex.literal}</div>

                    <!-- Word-by-word tokenized badges -->
                    <div class="sentence-tokens-row mt-2">
                      <span class="tokens-label">Word Breakdown:</span>
                      ${ex.tokens.map(tok => `
                        <div class="token-chip" data-speak="${tok.word}">
                          <span class="token-word">${tok.word}</span>
                          <span class="token-reading">${tok.reading}</span>
                          <span class="token-meaning">${tok.meaning}</span>
                        </div>
                      `).join('')}
                    </div>

                    ${ex.tip ? `<div class="sentence-tip mt-2">💡 ${ex.tip}</div>` : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
      renderBuilderPreview();
    } else if (tabName === 'dialogues') {
      body.innerHTML = `
        <div class="zero-dialogues-layout">
          <div class="card mb-3">
            <h2>🎭 Real-Life Dialogue Simulator (Roleplay)</h2>
            <p class="section-sub">Practice real-world conversational Japanese with interactive roleplay! Tap your responses and get instant polite/casual feedback.</p>
          </div>

          <!-- Scenario Pills -->
          <div class="zero-cat-pills-bar mb-3">
            ${(data.interactiveDialogues || []).map(d => `
              <button class="cat-pill-btn ${d.id === activeDialogueId ? 'pill-active' : ''}" onclick="NihongoApp.switchDialogueScenario('${d.id}')">
                ${d.avatar} ${d.title.split('(')[0].trim()}
              </button>
            `).join('')}
          </div>

          <!-- Dialogue Content Container -->
          <div id="dialogue-simulator-content">
            <!-- Rendered by renderDialogueSimulator() -->
          </div>
        </div>
      `;
      renderDialogueSimulator();
    } else if (tabName === 'survival') {
      body.innerHTML = `
        <div class="zero-survival-layout">
          <div class="card mb-4">
            <div class="card-header-row">
              <div>
                <h2>🚨 1-Click Survival Japanese Kit</h2>
                <p class="section-sub">High-frequency essential travel & daily phrases with normal native audio, turtle slow pronunciation, and cultural etiquette tips.</p>
              </div>
            </div>
          </div>

          ${(data.survivalKit || []).map(cat => `
            <div class="survival-category-card">
              <h3 style="font-size: 1.25rem; color: var(--c-ruri); margin-bottom: 0.25rem;">${cat.category}</h3>
              <p class="section-sub mb-3">${cat.desc}</p>

              <div class="survival-phrases-grid">
                ${cat.phrases.map(p => `
                  <div class="survival-phrase-card">
                    <div>
                      <div class="survival-jp-text" data-speak="${p.audio}">${p.jp}</div>
                      <div class="survival-romaji romaji-sub">${p.romaji}</div>
                      <div class="survival-phonetic-badge">
                        <span class="phonetic-label">🗣️ Sounds like:</span>
                        <span class="phonetic-val">“${p.phonetic || toEnglishPhonetics(p.audio || p.jp)}”</span>
                      </div>
                      <div class="survival-en" style="font-weight: 700; font-size: 0.95rem; margin-top: 0.35rem; color: var(--text-primary);">${p.en}</div>
                      <div class="survival-etiquette" style="font-size: 0.8rem; color: var(--text-muted); background: var(--bg-surface); padding: 0.5rem; border-radius: var(--radius-sm); border-left: 2px solid var(--c-take); margin: 0.65rem 0;">
                        💡 <strong>When to use:</strong> ${p.whenToUse}
                      </div>
                    </div>

                    <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 0.75rem;">
                      <button class="btn btn-secondary btn-sm" data-speak="${p.audio}" title="Normal Native Audio">
                        🔊 Normal
                      </button>
                      <button class="btn btn-secondary btn-sm" onclick="NihongoAudio.speak('${p.audio}', 0.65)" title="Slow Turtle Audio">
                        🐢 Turtle Slow
                      </button>
                      <button class="btn btn-secondary btn-sm" onclick="NihongoApp.addWordToSrs('${p.jp}', '${p.romaji}', '${p.en.replace(/'/g, "\\'")}')">
                        📥 Add to SRS
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
    } else if (tabName === 'drills') {
      body.innerHTML = `
        <div class="zero-drills-layout">
          <!-- Ear Training: Listen and Pick the Kana -->
          <div class="card mb-4" id="drill-ear-training-card">
            <div class="card-header-row">
              <div>
                <h2>🎧 Beginner Ear Training Drill: Listen & Identify Kana</h2>
                <p class="section-sub">Train your brain to recognize authentic Japanese sounds instantly.</p>
              </div>
              <span class="stat-pill">Score: <strong id="ear-drill-score">0</strong></span>
            </div>

            <div class="drill-arena mt-3 text-center">
              <button id="btn-play-drill-sound" class="btn btn-primary btn-lg">
                🔊 Play Secret Japanese Sound
              </button>
              <p class="mt-2 text-muted">Tap to listen, then select the matching Hiragana character below:</p>

              <div class="drill-options-grid mt-3" id="drill-options-container">
                <!-- Injected by setupDrillQuestion -->
              </div>

              <div id="drill-feedback-banner" class="mt-3 feedback-banner"></div>
            </div>
          </div>
        </div>
      `;

      setupEarDrillQuestion();
    }

    bindAudioButtons();
  }

  function switchZeroVocabCategory(catId) {
    activeZeroVocabCat = catId;
    renderZeroTabBody('words');
  }

  function setupEarDrillQuestion() {
    const soundList = window.KANA_DATA ? window.KANA_DATA.hiragana : [];
    if (soundList.length < 4) return;

    // Pick 1 target and 3 distractors
    const shuffled = [...soundList].sort(() => Math.random() - 0.5);
    const target = shuffled[0];
    const options = [target, shuffled[1], shuffled[2], shuffled[3]].sort(() => Math.random() - 0.5);

    currentDrillTarget = target;

    const playBtn = document.getElementById('btn-play-drill-sound');
    const optionsContainer = document.getElementById('drill-options-container');
    const feedbackBanner = document.getElementById('drill-feedback-banner');

    if (!playBtn || !optionsContainer) return;

    playBtn.onclick = () => {
      if (window.NihongoAudio) window.NihongoAudio.speak(target.kana, 0.75);
    };

    // Auto play gently once
    setTimeout(() => {
      if (window.NihongoAudio) window.NihongoAudio.speak(target.kana, 0.75);
    }, 300);

    optionsContainer.innerHTML = options.map(opt => `
      <button class="drill-opt-btn" data-kana="${opt.kana}">
        <span class="drill-kana-big">${opt.kana}</span>
        <span class="drill-romaji-sub">${opt.romaji}</span>
      </button>
    `).join('');

    const optButtons = optionsContainer.querySelectorAll('.drill-opt-btn');
    optButtons.forEach(btn => {
      btn.onclick = () => {
        const picked = btn.getAttribute('data-kana');
        optButtons.forEach(b => b.disabled = true);

        if (picked === target.kana) {
          drillScore++;
          btn.classList.add('opt-correct');
          if (window.NihongoAudio) window.NihongoAudio.playSuccess();
          feedbackBanner.className = 'mt-3 feedback-banner feedback-correct';
          feedbackBanner.textContent = `正解！ That was 「${target.kana}」 (${target.romaji})! +20 XP`;
          if (window.NihongoState) window.NihongoState.addXp(20, 'Ear Training Drill');

          document.getElementById('ear-drill-score').textContent = drillScore;
          setTimeout(setupEarDrillQuestion, 1400);
        } else {
          btn.classList.add('opt-wrong');
          if (window.NihongoAudio) window.NihongoAudio.playError();
          feedbackBanner.className = 'mt-3 feedback-banner feedback-wrong';
          feedbackBanner.textContent = `Incorrect! The correct sound was 「${target.kana}」 (${target.romaji}).`;
          setTimeout(setupEarDrillQuestion, 2000);
        }
      };
    });
  }

  // --- Sentence Blueprint Workshop Methods ---

  function selectBuilderSlotToken(slotKey, index) {
    if (builderSlotSelections.hasOwnProperty(slotKey)) {
      builderSlotSelections[slotKey] = index;
    }
    renderBuilderPreview();

    const col = document.querySelector(`[data-builder-col="${slotKey}"]`);
    if (col) {
      col.querySelectorAll('.builder-token-btn').forEach((btn, idx) => {
        if (idx === index) btn.classList.add('token-active');
        else btn.classList.remove('token-active');
      });
    }
  }

  function randomizeBuilderSentence() {
    const studio = window.ZERO_BEGINNER_DATA ? window.ZERO_BEGINNER_DATA.sentenceBuilderStudio : null;
    if (!studio) return;
    studio.slots.forEach(slot => {
      const randomIdx = Math.floor(Math.random() * slot.options.length);
      builderSlotSelections[slot.id] = randomIdx;
    });
    renderZeroTabBody('sentences');
    speakBuilderSentence();
  }

  function getAssembledSentence() {
    const studio = window.ZERO_BEGINNER_DATA ? window.ZERO_BEGINNER_DATA.sentenceBuilderStudio : null;
    if (!studio || !studio.slots) return null;
    const subjSlot = studio.slots.find(s => s.id === 'subject');
    const placeSlot = studio.slots.find(s => s.id === 'place');
    const objSlot = studio.slots.find(s => s.id === 'object');
    const verbSlot = studio.slots.find(s => s.id === 'verb');

    if (!subjSlot || !placeSlot || !objSlot || !verbSlot) return null;

    const subj = subjSlot.options[builderSlotSelections.subject || 0];
    const place = placeSlot.options[builderSlotSelections.place || 0];
    const obj = objSlot.options[builderSlotSelections.object || 0];
    const verb = verbSlot.options[builderSlotSelections.verb || 0];

    const jp = `${subj.jp}は、${place.jp}で、${obj.jp}を${verb.jp}。`;
    const speechText = `${subj.reading}は、${place.reading}で、${obj.reading}を${verb.reading}`;
    const romaji = `${subj.romaji} wa, ${place.romaji} de, ${obj.romaji} o ${verb.romaji}.`;
    const phonetic = `${subj.phonetic || toEnglishPhonetics(subj.reading)} wah, ${place.phonetic || toEnglishPhonetics(place.reading)} deh, ${obj.phonetic || toEnglishPhonetics(obj.reading)} oh ${verb.phonetic || toEnglishPhonetics(verb.reading)}.`;

    let verbEn = verb.en;
    if (subj.jp === '私') {
      if (verbEn === 'drinks') verbEn = 'drink';
      else if (verbEn === 'eats') verbEn = 'eat';
      else if (verbEn === 'reads') verbEn = 'read';
      else if (verbEn === 'studies') verbEn = 'study';
    }
    const en = `${subj.en} ${verbEn} ${obj.en} ${place.en}.`;
    const literal = `[Topic: ${subj.en} (は)] ➔ [Location: ${place.en} (で)] ➔ [Object: ${obj.en} (を)] ➔ [Verb: ${verb.en}]`;

    return { jp, speechText, romaji, phonetic, en, literal };
  }

  function speakBuilderSentence(slow = false) {
    const sent = getAssembledSentence();
    if (!sent) return;
    if (window.NihongoAudio) {
      window.NihongoAudio.speak(sent.speechText, slow ? 0.65 : 0.85);
    }
  }

  function saveBuilderSentenceToSrs() {
    const sent = getAssembledSentence();
    if (!sent) return;
    addWordToSrs(sent.jp, sent.romaji, sent.en);
  }

  function renderBuilderPreview() {
    const box = document.getElementById('builder-preview-container');
    if (!box) return;
    const sent = getAssembledSentence();
    if (!sent) return;

    box.innerHTML = `
      <div class="builder-preview-jp" data-speak="${sent.speechText}" title="Tap to listen">
        ${sent.jp}
      </div>
      <div class="builder-preview-romaji romaji-sub">
        ${sent.romaji}
      </div>
      <div class="builder-preview-phonetic">
        <span class="phonetic-label">🗣️ Sounds like:</span>
        <span class="phonetic-val">“${sent.phonetic}”</span>
      </div>
      <div class="builder-preview-en">
        “${sent.en}”
      </div>
      <div class="builder-preview-literal">
        <strong>Literal Japanese Thought Flow:</strong> ${sent.literal}
      </div>
      <div class="builder-actions-row">
        <button class="btn btn-primary" onclick="NihongoApp.speakBuilderSentence(false)">
          🔊 Hear Sentence
        </button>
        <button class="btn btn-secondary" onclick="NihongoApp.speakBuilderSentence(true)">
          🐢 Turtle Slow
        </button>
        <button class="btn btn-secondary" onclick="NihongoApp.randomizeBuilderSentence()">
          🎲 Surprise Me (Random Sentence)
        </button>
        <button class="btn btn-secondary" onclick="NihongoApp.saveBuilderSentenceToSrs()">
          📥 Save to SRS Review
        </button>
      </div>
    `;
    bindAudioButtons();
  }

  // --- Real-Life Dialogue Simulator Methods ---

  function switchDialogueScenario(scenarioId) {
    activeDialogueId = scenarioId;
    dialogueStepIndex = 1;
    dialogueHistory = [];
    renderZeroTabBody('dialogues');

    const scenario = getActiveScenario();
    if (scenario && scenario.steps && scenario.steps[0]) {
      setTimeout(() => {
        if (window.NihongoAudio) window.NihongoAudio.speak(scenario.steps[0].audio || scenario.steps[0].jp, 0.85);
      }, 400);
    }
  }

  function resetDialogue() {
    dialogueStepIndex = 1;
    dialogueHistory = [];
    renderDialogueSimulator();
    const scenario = getActiveScenario();
    if (scenario && scenario.steps && scenario.steps[0]) {
      setTimeout(() => {
        if (window.NihongoAudio) window.NihongoAudio.speak(scenario.steps[0].audio || scenario.steps[0].jp, 0.85);
      }, 300);
    }
  }

  function getActiveScenario() {
    const dialogues = (window.ZERO_BEGINNER_DATA && window.ZERO_BEGINNER_DATA.interactiveDialogues) || [];
    return dialogues.find(d => d.id === activeDialogueId) || dialogues[0];
  }

  function selectDialogueChoice(choiceIndex) {
    const scenario = getActiveScenario();
    if (!scenario) return;
    const currentStep = scenario.steps[dialogueStepIndex];
    if (!currentStep || !currentStep.choices) return;

    const choice = currentStep.choices[choiceIndex];
    if (!choice) return;

    // Play user audio
    if (window.NihongoAudio) {
      window.NihongoAudio.speak(choice.text, 0.85);
    }

    dialogueHistory.push({
      speaker: 'user',
      name: 'You (あなた)',
      avatar: '🙋',
      jp: choice.text,
      romaji: choice.romaji,
      phonetic: choice.phonetic || toEnglishPhonetics(choice.text),
      en: choice.en,
      feedback: choice.feedback,
      correct: choice.correct
    });

    const nextClerkIndex = dialogueStepIndex + 1;
    const nextClerkStep = scenario.steps[nextClerkIndex];

    if (nextClerkStep && nextClerkStep.speaker === 'clerk') {
      dialogueStepIndex = nextClerkIndex + 1;
      renderDialogueSimulator();
      setTimeout(() => {
        if (window.NihongoAudio) {
          window.NihongoAudio.speak(nextClerkStep.audio || nextClerkStep.jp, 0.85);
        }
      }, 650);
    } else {
      dialogueStepIndex = scenario.steps.length;
      renderDialogueSimulator();
    }
  }

  function renderDialogueSimulator() {
    const container = document.getElementById('dialogue-simulator-content');
    if (!container) return;
    const scenario = getActiveScenario();
    if (!scenario) return;

    const clerkInitial = scenario.steps[0];
    const isFinished = dialogueStepIndex >= scenario.steps.length;
    const currentPromptStep = !isFinished ? scenario.steps[dialogueStepIndex] : null;

    container.innerHTML = `
      <div class="card mb-3">
        <div class="card-header-row">
          <div>
            <h2>${scenario.title}</h2>
            <p class="section-sub">${scenario.desc}</p>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="NihongoApp.resetDialogue()">🔄 Restart Dialogue</button>
        </div>
      </div>

      <div class="dialogue-chat-arena card mb-4" style="background: var(--bg-surface-elevated); padding: 1.5rem; display: flex; flex-direction: column; gap: 1.25rem;">
        <!-- Clerk Initial Line -->
        <div class="dialogue-msg dialogue-msg-clerk" style="display: flex; gap: 0.75rem; align-items: flex-start;">
          <div class="dialogue-avatar">${clerkInitial.avatar || '🧑‍💼'}</div>
          <div class="dialogue-bubble">
            <div class="dialogue-speaker-name">${clerkInitial.name}</div>
            <div class="dialogue-jp-line" data-speak="${clerkInitial.audio || clerkInitial.jp}">${clerkInitial.jp}</div>
            <div class="dialogue-romaji-line romaji-sub">${clerkInitial.romaji}</div>
            <div class="dialogue-phonetic-line">🗣️ <em>“${clerkInitial.phonetic || toEnglishPhonetics(clerkInitial.audio || clerkInitial.jp)}”</em></div>
            <div class="dialogue-en-line">“${clerkInitial.en}”</div>
          </div>
          <button class="btn-icon-audio" data-speak="${clerkInitial.audio || clerkInitial.jp}" title="Hear Japanese">🔊</button>
        </div>

        <!-- History Items -->
        ${dialogueHistory.map((hist, idx) => {
          const clerkStep = scenario.steps[1 + (idx * 2) + 1];
          return `
            <div class="dialogue-msg dialogue-msg-user" style="display: flex; gap: 0.75rem; align-items: flex-start; justify-content: flex-end;">
              <button class="btn-icon-audio" data-speak="${hist.jp}" title="Hear Japanese">🔊</button>
              <div class="dialogue-bubble">
                <div class="dialogue-speaker-name" style="text-align: right;">${hist.name}</div>
                <div class="dialogue-jp-line">${hist.jp}</div>
                <div class="dialogue-romaji-line romaji-sub">${hist.romaji}</div>
                <div class="dialogue-phonetic-line">🗣️ <em>“${hist.phonetic || toEnglishPhonetics(hist.jp)}”</em></div>
                <div class="dialogue-en-line">“${hist.en}”</div>
                <div class="dialogue-feedback-bubble ${hist.correct ? 'dialogue-feedback-correct' : 'dialogue-feedback-warn'}">
                  ${hist.feedback}
                </div>
              </div>
              <div class="dialogue-avatar">${hist.avatar}</div>
            </div>

            ${clerkStep ? `
              <div class="dialogue-msg dialogue-msg-clerk" style="display: flex; gap: 0.75rem; align-items: flex-start;">
                <div class="dialogue-avatar">${clerkStep.avatar || '🧑‍💼'}</div>
                <div class="dialogue-bubble">
                  <div class="dialogue-speaker-name">${clerkStep.name}</div>
                  <div class="dialogue-jp-line" data-speak="${clerkStep.audio || clerkStep.jp}">${clerkStep.jp}</div>
                  <div class="dialogue-romaji-line romaji-sub">${clerkStep.romaji}</div>
                  <div class="dialogue-phonetic-line">🗣️ <em>“${clerkStep.phonetic || toEnglishPhonetics(clerkStep.audio || clerkStep.jp)}”</em></div>
                  <div class="dialogue-en-line">“${clerkStep.en}”</div>
                </div>
                <button class="btn-icon-audio" data-speak="${clerkStep.audio || clerkStep.jp}" title="Hear Japanese">🔊</button>
              </div>
            ` : ''}
          `;
        }).join('')}

        <!-- Scenario Complete Message -->
        ${isFinished ? `
          <div class="dialogue-completed-banner">
            <h3>🎉 Scenario Complete!</h3>
            <p class="section-sub mt-1">Outstanding job! You navigated this real-world Japanese interaction like a local.</p>
            <button class="btn btn-primary mt-3" onclick="NihongoApp.resetDialogue()">🔄 Practice Again</button>
          </div>
        ` : ''}
      </div>

      <!-- Choices Tray -->
      ${!isFinished && currentPromptStep ? `
        <div class="card mb-4" style="border: 2px solid var(--c-ruri);">
          <h3 style="font-size: 1.1rem; color: var(--c-ruri); margin-bottom: 0.5rem;">
            👉 Your Turn: ${currentPromptStep.prompt}
          </h3>
          <p class="section-sub mb-3">Choose the most natural, polite Japanese response:</p>
          <div class="dialogue-choices-tray">
            ${currentPromptStep.choices.map((choice, cIdx) => `
              <button class="dialogue-choice-btn" onclick="NihongoApp.selectDialogueChoice(${cIdx})">
                <div>
                  <strong style="font-size: 1.15rem; font-family: var(--font-japanese); display: block; color: var(--text-primary);">${choice.text}</strong>
                  <span class="romaji-sub" style="font-size: 0.88rem; color: var(--c-ruri); display: block;">${choice.romaji}</span>
                  <span class="choice-phonetic">🗣️ “${choice.phonetic || toEnglishPhonetics(choice.text)}”</span>
                  <span style="font-size: 0.85rem; color: var(--text-muted); display: block; margin-top: 0.15rem;">“${choice.en}”</span>
                </div>
                <span class="btn btn-secondary btn-sm">Select ➔</span>
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}
    `;

    bindAudioButtons();
  }

  // --- Confusable Twins Lab Method ---

  function testConfusablePair(twinId, selectedChar) {
    const data = window.ZERO_BEGINNER_DATA ? window.ZERO_BEGINNER_DATA.confusableTwins : [];
    const pair = data.find(p => p.id === twinId);
    const resultBox = document.getElementById(`spotter-result-${twinId}`);
    if (!pair || !resultBox) return;

    if (selectedChar === pair.correctChar) {
      resultBox.className = 'spotter-feedback-box spotter-feedback-correct';
      resultBox.innerHTML = `✨ Correct! "${pair.correctChar}" is the right one! ${pair.keyDifference}`;
      if (window.NihongoAudio) {
        window.NihongoAudio.speak(pair.correctChar, 0.85);
      }
    } else {
      resultBox.className = 'spotter-feedback-box spotter-feedback-wrong';
      resultBox.innerHTML = `⚠️ Look closely! You picked "${selectedChar}". Remember: ${pair.keyDifference}`;
      if (window.NihongoAudio) {
        window.NihongoAudio.speak(selectedChar, 0.85);
      }
    }
  }

  // --- N5 Foundational Masterclass View ---
  let activeBookTab = 'origins'; // 'origins', 'kanji', 'grammar', 'vocab'
  let activeBookLesson = 1; // 1 to 6, or 'all'
  let bookKanjiSearchQuery = '';
  let bookVocabSearchQuery = '';

  function renderBookCurriculumView() {
    const container = document.getElementById('book-curriculum-content');
    if (!container || !window.BOOK_CURRICULUM_DATA) return;
    const data = window.BOOK_CURRICULUM_DATA;

    container.innerHTML = `
      <!-- Breadcrumb Navigation -->
      <nav class="hub-breadcrumbs" aria-label="Breadcrumb">
        <a href="#" onclick="NihongoApp.navigateTo('dashboard'); return false;">Home</a>
        <span class="crumb-separator">/</span>
        <span class="crumb-current">📖 N5 Authoritative Book Curriculum</span>
      </nav>

      <!-- Book Curricula Header Hero Banner -->
      <div class="book-hero-banner mb-4">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="hub-level-badge" style="background: var(--c-ruri);">📖 Official Textbook Lessons</span>
            <h1 style="font-size: clamp(1.4rem, 2.8vw, 2.1rem); margin: 0.5rem 0; font-weight: 900;">
              N5 Foundational Masterclass: Kanji Origins, Stroke Rules & Grammar
            </h1>
            <p style="color: var(--text-secondary); max-width: 820px; font-size: 0.96rem; line-height: 1.55;">
              Designed for learners starting from absolute zero: Master 89 Kanji with visual mnemonic memory stories, understand the 4 structural origins of characters, follow the 8 universal stroke-order rules, and internalize 14 core conversational grammar patterns.
            </p>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.75rem;">
              <span class="stat-tag">🎨 89 Mnemonic Kanji Cards</span>
              <span class="stat-tag">🏛️ 4 Origins & 8 Stroke Rules</span>
              <span class="stat-tag">💬 14 Core Grammar Blueprints</span>
              <span class="stat-tag">📦 310+ Compound Words</span>
            </div>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button class="btn btn-secondary" onclick="NihongoApp.navigateTo('tracer')">
              🖌️ Stroke Tracer
            </button>
            <button class="btn btn-secondary" onclick="NihongoApp.navigateTo('zero')">
              🔰 Zero Beginner
            </button>
          </div>
        </div>
      </div>

      <!-- Book Navigation Tabs -->
      <div class="book-tabs-nav">
        <button class="book-tab-btn ${activeBookTab === 'origins' ? 'tab-active' : ''}" onclick="NihongoApp.switchBookTab('origins')">
          🏛️ 1. Origins & 8 Stroke Rules
        </button>
        <button class="book-tab-btn ${activeBookTab === 'kanji' ? 'tab-active' : ''}" onclick="NihongoApp.switchBookTab('kanji')">
          🎨 2. Mnemonic Kanji Gallery (89 Characters)
        </button>
        <button class="book-tab-btn ${activeBookTab === 'grammar' ? 'tab-active' : ''}" onclick="NihongoApp.switchBookTab('grammar')">
          💬 3. N5 Core Grammar Masterclass
        </button>
        <button class="book-tab-btn ${activeBookTab === 'vocab' ? 'tab-active' : ''}" onclick="NihongoApp.switchBookTab('vocab')">
          🗂️ 4. 310+ Book Vocab Vault
        </button>
      </div>

      <!-- Dynamic Tab Body Container -->
      <div id="book-tab-body" class="mt-4"></div>
    `;

    renderBookTabBody(activeBookTab);
  }

  function renderBookTabBody(tabName) {
    const body = document.getElementById('book-tab-body');
    if (!body || !window.BOOK_CURRICULUM_DATA) return;
    const data = window.BOOK_CURRICULUM_DATA;

    if (tabName === 'origins') {
      body.innerHTML = `
        <div class="book-origins-view">
          <!-- Introduction Card -->
          <div class="card mb-4" style="border-left: 5px solid var(--c-kin);">
            <h2>How Kanji Actually Works: The 4 Structural Origins</h2>
            <p class="section-sub mt-1">
              Kanji characters are NOT random scribbles. Over 95% of all Japanese Kanji are built like Lego blocks from simple drawings of nature (sun, moon, tree, river, person). Once you see how they evolved, memorizing them becomes natural!
            </p>
          </div>

          <!-- The 4 Origins of Kanji -->
          <div class="card mb-4">
            <div class="card-header-row">
              <div>
                <h2>1. The Four Origins of Kanji Characters (漢字の成り立ち)</h2>
                <p class="section-sub">Every single Japanese Kanji character belongs to one of these four structural origins:</p>
              </div>
            </div>

            ${data.kanjiOrigins.map(cat => `
              <div class="origin-category-card mt-4">
                <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
                  <h3 style="margin: 0;">${cat.title}</h3>
                  <span class="origin-badge">${cat.badge}</span>
                </div>
                <p class="mt-1" style="color: var(--text-secondary);">${cat.desc}</p>
                <div class="origin-tip-box">
                  💡 <strong>Beginner Insight:</strong> ${cat.tip}
                </div>

                <div class="origin-examples-grid">
                  ${cat.examples.map(ex => `
                    <div class="origin-card-item">
                      <div class="origin-char-row">
                        <span class="origin-char-symbol" data-speak="${ex.char}" title="Tap to listen to ${ex.char}">${ex.char}</span>
                        ${ex.ancient ? `<span class="origin-ancient-badge" title="Ancient Pictogram sketch">${ex.ancient}</span>` : ''}
                        ${ex.formula ? `<span class="stat-tag" style="font-size: 0.78rem;">${ex.formula}</span>` : ''}
                      </div>
                      <div class="origin-char-name">${ex.name}</div>
                      <div class="origin-char-reading">Reading: ${ex.reading}</div>
                      <div class="origin-char-desc">${ex.desc}</div>
                      <div style="display: flex; gap: 0.4rem; margin-top: auto;">
                        <button class="btn btn-secondary btn-sm" data-speak="${ex.char}">🔊 Hear Sound</button>
                        <button class="btn btn-secondary btn-sm" onclick="NihongoApp.traceChar('${ex.char}')">✍️ Trace in Canvas</button>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- The 8 Universal Stroke-Order Rules -->
          <div class="card mb-4">
            <div class="card-header-row">
              <div>
                <h2>2. The 8 Golden Rules of Stroke Order (筆順の原則)</h2>
                <p class="section-sub">Never guess how to write a character again! Follow these universal stroke order principles:</p>
              </div>
            </div>

            <div class="stroke-rules-grid mt-3">
              ${data.strokeRules.map(r => `
                <div class="stroke-rule-card">
                  <span class="rule-num-badge">${r.ruleNumber}</span>
                  <div class="rule-title">${r.name}</div>
                  <div class="rule-desc">${r.rule}</div>
                  <div class="rule-tip" style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">
                    <em>${r.explanation}</em>
                  </div>
                  <div class="rule-chars-row">
                    <span style="font-size: 0.82rem; font-weight: 700; color: var(--text-muted);">Try Tracing:</span>
                    ${r.chars.map(c => `
                      <button class="rule-char-chip" data-speak="${c}" onclick="NihongoApp.traceChar('${c}')" title="Trace ${c}">
                        ${c}
                      </button>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- On-yomi vs Kun-yomi Beginner Guide -->
          <div class="card">
            <h2>3. ${data.readingGuide.title}</h2>
            <p class="section-sub">${data.readingGuide.summary}</p>

            <div class="row mt-3" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
              <div class="card" style="border-top: 4px solid var(--c-akane); background: var(--bg-surface-elevated);">
                <h3>${data.readingGuide.kunyomi.title}</h3>
                <p class="mt-2" style="font-weight: 600; color: var(--c-akane);">${data.readingGuide.kunyomi.rule}</p>
                <p class="text-secondary mt-1" style="font-size: 0.88rem;">${data.readingGuide.kunyomi.meaning}</p>
                <div class="compounds-list mt-3">
                  ${data.readingGuide.kunyomi.examples.map(ex => `
                    <div class="mnemonic-compound-item" data-speak="${ex.reading}">
                      <span class="compound-word-jp">${ex.word} (${ex.reading})</span>
                      <span class="compound-meaning-en">${ex.meaning}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div class="card" style="border-top: 4px solid var(--c-ruri); background: var(--bg-surface-elevated);">
                <h3>${data.readingGuide.onyomi.title}</h3>
                <p class="mt-2" style="font-weight: 600; color: var(--c-ruri);">${data.readingGuide.onyomi.rule}</p>
                <p class="text-secondary mt-1" style="font-size: 0.88rem;">${data.readingGuide.onyomi.meaning}</p>
                <div class="compounds-list mt-3">
                  ${data.readingGuide.onyomi.examples.map(ex => `
                    <div class="mnemonic-compound-item" data-speak="${ex.reading}">
                      <span class="compound-word-jp">${ex.word} (${ex.reading})</span>
                      <span class="compound-meaning-en">${ex.meaning}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (tabName === 'kanji') {
      // Filter kanji lessons
      const lessons = data.kanjiLessons;
      let displayKanji = [];

      if (activeBookLesson === 'all') {
        lessons.forEach(l => displayKanji.push(...l.kanji));
      } else {
        const found = lessons.find(l => l.lesson === activeBookLesson);
        if (found) displayKanji = found.kanji;
      }

      // Filter by search query if any
      if (bookKanjiSearchQuery.trim()) {
        const q = bookKanjiSearchQuery.toLowerCase().trim();
        displayKanji = displayKanji.filter(k => 
          k.char.includes(q) ||
          k.meaning.toLowerCase().includes(q) ||
          (k.mnemonic && k.mnemonic.toLowerCase().includes(q)) ||
          k.onyomi.some(o => o.toLowerCase().includes(q)) ||
          k.kunyomi.some(u => u.toLowerCase().includes(q))
        );
      }

      body.innerHTML = `
        <div class="book-kanji-view">
          <!-- Lesson Selector Pills -->
          <div class="book-cat-pills-bar">
            ${lessons.map(l => `
              <button class="cat-pill-btn ${activeBookLesson === l.lesson ? 'pill-active' : ''}" onclick="NihongoApp.switchBookLesson(${l.lesson})">
                Lesson ${l.lesson} (${l.kanji.length})
              </button>
            `).join('')}
            <button class="cat-pill-btn ${activeBookLesson === 'all' ? 'pill-active' : ''}" onclick="NihongoApp.switchBookLesson('all')">
              All 89 Kanji
            </button>
          </div>

          <!-- Search & Filter Row -->
          <div class="book-search-row">
            <input type="text" class="book-search-input" placeholder="🔍 Search by Kanji, meaning (e.g. sun, rest), or reading..." value="${bookKanjiSearchQuery}" oninput="NihongoApp.filterBookKanji(this.value)">
            <span class="stat-pill">Showing <strong>${displayKanji.length}</strong> Characters</span>
          </div>

          <!-- Mnemonic Kanji Cards Grid -->
          <div class="mnemonic-kanji-grid mt-3">
            ${displayKanji.map(k => `
              <div class="mnemonic-kanji-card card">
                <div class="mnemonic-card-top">
                  <div>
                    <span class="mnemonic-char-big" data-speak="${k.char}" title="Tap to listen to ${k.char}">
                      ${k.char}
                    </span>
                  </div>
                  <div class="mnemonic-meta-col">
                    <span class="mnemonic-strokes-badge">${k.strokes} Strokes</span>
                    <div class="mnemonic-meaning-title">${k.meaning}</div>
                  </div>
                </div>

                <!-- Visual Mnemonic Story Box -->
                <div class="mnemonic-story-box">
                  💡 <strong>Mnemonic Story:</strong> ${k.mnemonic}
                </div>

                <!-- Readings Box -->
                <div class="mnemonic-readings-box">
                  <div class="reading-pill-row">
                    <span class="reading-label">Kun-yomi:</span>
                    <span>${k.kunyomi.length > 0 ? k.kunyomi.map(u => `<span class="tag-kun" data-speak="${u.replace(/[.-]/g, '')}">${u}</span>`).join(' ') : '—'}</span>
                  </div>
                  <div class="reading-pill-row">
                    <span class="reading-label">On-yomi:</span>
                    <span>${k.onyomi.length > 0 ? k.onyomi.map(o => `<span class="tag-on" data-speak="${o}">${o}</span>`).join(' ') : '—'}</span>
                  </div>
                </div>

                <!-- Core Compounds -->
                <div class="compounds-section-title">Core Vocabulary (${k.compounds.length}):</div>
                <div class="mnemonic-compounds-list">
                  ${k.compounds.slice(0, 4).map(c => `
                    <div class="mnemonic-compound-item" data-speak="${c.reading}" title="Tap to listen to ${c.word}">
                      <span class="compound-word-jp">${c.word} (${c.reading})</span>
                      <span class="compound-meaning-en">${c.meaning}</span>
                    </div>
                  `).join('')}
                </div>

                <!-- Card Actions -->
                <div class="mnemonic-card-actions">
                  <button class="btn btn-primary btn-sm" onclick="NihongoApp.traceChar('${k.char}')" style="flex: 1;">
                    ✍️ Trace in Canvas
                  </button>
                  <button class="btn btn-secondary btn-sm" onclick="NihongoApp.addKanjiToSrs('${k.char}', '${k.meaning.replace(/'/g, "\\'")}', '${(k.kunyomi[0] || k.onyomi[0] || '').replace(/'/g, "\\'")}')" title="Add to Spaced Repetition Review Deck">
                    📥 Add to SRS
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (tabName === 'grammar') {
      const gList = data.souMatomeGrammar;
      const exSand = data.existenceSandbox;

      body.innerHTML = `
        <div class="book-grammar-view">
          <!-- Interactive Existence Verbs Sandbox -->
          <div class="existence-sandbox-card">
            <h2>Interactive Grammar Sandbox: あります vs. います</h2>
            <p class="section-sub">${exSand.explanation} Click any item below to hear the sentence and test your understanding:</p>

            <div class="existence-columns">
              <div class="existence-column-box col-arimasu">
                <div class="existence-col-title">
                  <span>あります (Inanimate)</span>
                  <span style="font-size: 0.85rem; font-weight: 600;">Objects & Events</span>
                </div>
                <p style="font-size: 0.85rem; color: var(--text-secondary);">${exSand.arimasu.usage}</p>
                <div class="existence-items-grid">
                  ${exSand.arimasu.items.map(it => `
                    <button class="existence-chip" data-speak="${it.audio}" onclick="NihongoApp.testExistenceItem(this, false, '${it.audio}')" title="Tap to hear sentence">
                      <span>${it.icon}</span>
                      <span>${it.item}</span>
                    </button>
                  `).join('')}
                </div>
              </div>

              <div class="existence-column-box col-imasu">
                <div class="existence-col-title">
                  <span>います (Living Beings)</span>
                  <span style="font-size: 0.85rem; font-weight: 600;">People & Animals</span>
                </div>
                <p style="font-size: 0.85rem; color: var(--text-secondary);">${exSand.imasu.usage}</p>
                <div class="existence-items-grid">
                  ${exSand.imasu.items.map(it => `
                    <button class="existence-chip" data-speak="${it.audio}" onclick="NihongoApp.testExistenceItem(this, true, '${it.audio}')" title="Tap to hear sentence">
                      <span>${it.icon}</span>
                      <span>${it.item}</span>
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>
            <div id="existence-feedback" class="mt-3 text-center" style="font-weight: 700; min-height: 24px; color: var(--c-ruri);"></div>
          </div>

          <!-- All N5 Grammar Blueprints -->
          <div class="grammar-blueprints-list">
            ${gList.map(unit => `
              <div class="card mb-4">
                <div class="card-header-row">
                  <div>
                    <span class="hub-level-badge" style="background: var(--c-ruri);">Week ${unit.week} Day ${unit.day}</span>
                    <h2 class="mt-1">${unit.title}</h2>
                  </div>
                </div>

                ${unit.patterns.map(pat => `
                  <div class="grammar-pattern-block mt-3" style="background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem;">
                    <div class="formula-rule-banner" style="margin-bottom: 0.75rem;">
                      <code style="font-size: 1.05rem; font-weight: 700; color: var(--c-ruri);">${pat.formula}</code>
                    </div>
                    <p style="color: var(--text-secondary); line-height: 1.5; margin-bottom: 1rem;">
                      ${pat.explanation}
                    </p>

                    <div class="pattern-examples-box">
                      <strong style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted);">
                        Bilingual Textbook Examples:
                      </strong>
                      <div class="mt-2" style="display: flex; flex-direction: column; gap: 0.6rem;">
                        ${pat.examples.map(ex => `
                          <div class="sentence-interactive-box" style="padding: 0.75rem;">
                            <div class="sentence-audio-row">
                              <span class="sentence-jp-full" data-speak="${ex.jp}">${ex.jp}</span>
                              <button class="btn-icon-audio" data-speak="${ex.jp}" title="Listen to sentence">🔊</button>
                            </div>
                            <div class="sentence-en-meaning" style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.25rem;">
                              “${ex.en}”
                            </div>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (tabName === 'vocab') {
      const allVocab = data.vocabularyVault;
      let displayVocab = allVocab;

      if (bookVocabSearchQuery.trim()) {
        const q = bookVocabSearchQuery.toLowerCase().trim();
        displayVocab = displayVocab.filter(v =>
          v.word.includes(q) ||
          v.reading.includes(q) ||
          v.meaning.toLowerCase().includes(q) ||
          v.kanjiChar.includes(q)
        );
      }

      body.innerHTML = `
        <div class="book-vocab-view">
          <div class="card mb-3">
            <div class="card-header-row">
              <div>
                <h2>310+ Core N5 Vocabulary Compounds</h2>
                <p class="section-sub">High-frequency real-world words built from the 89 foundational N5 Kanji.</p>
              </div>
              <span class="status-badge">${displayVocab.length} Words Available</span>
            </div>

            <!-- Search input -->
            <div class="book-search-row mt-2">
              <input type="text" class="book-search-input" placeholder="🔍 Search vocabulary by word, reading, meaning (e.g. water, student)..." value="${bookVocabSearchQuery}" oninput="NihongoApp.filterBookVocab(this.value)">
            </div>
          </div>

          <!-- Vocabulary Cards Grid -->
          <div class="zero-words-cards-grid mt-3">
            ${displayVocab.map(w => `
              <div class="zero-word-card card">
                <div class="word-card-top">
                  <div>
                    <h3 class="word-main-title" data-speak="${w.reading}">${w.word}</h3>
                    <div class="word-romaji romaji-sub">${w.reading}</div>
                    <div class="word-phonetic-badge">
                      <span class="phonetic-label">🗣️ Sounds like:</span>
                      <span class="phonetic-val">${w.phonetic || toEnglishPhonetics(w.reading)}</span>
                    </div>
                  </div>
                  <button class="btn-icon-audio" data-speak="${w.reading}" title="Listen to word">🔊</button>
                </div>

                <div class="word-meaning-box">
                  <span class="word-meaning"><strong>Meaning:</strong> ${w.meaning}</span>
                  <span class="stat-tag" style="font-size: 0.78rem;">Kanji: ${w.kanjiChar}</span>
                </div>

                <div class="word-card-footer mt-3">
                  <button class="btn btn-secondary btn-sm" onclick="NihongoApp.addWordToSrs('${w.word}', '${w.reading}', '${w.meaning.replace(/'/g, "\\'")}')">
                    📥 Add to SRS Review
                  </button>
                  <button class="btn btn-secondary btn-sm" onclick="NihongoApp.traceChar('${w.kanjiChar}')" title="Trace root kanji">
                    ✍️ Trace '${w.kanjiChar}'
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    bindAudioButtons();
  }

  function switchBookTab(tabName) {
    activeBookTab = tabName;
    document.querySelectorAll('.book-tab-btn').forEach(btn => {
      btn.classList.toggle('tab-active', btn.getAttribute('onclick').includes(tabName));
    });
    renderBookTabBody(tabName);
  }

  function switchBookLesson(lessonId) {
    activeBookLesson = lessonId;
    renderBookTabBody('kanji');
  }

  function filterBookKanji(query) {
    bookKanjiSearchQuery = query;
    renderBookTabBody('kanji');
  }

  function filterBookVocab(query) {
    bookVocabSearchQuery = query;
    renderBookTabBody('vocab');
  }

  function testExistenceItem(chipEl, isLiving, audioText) {
    const feedback = document.getElementById('existence-feedback');
    if (window.NihongoAudio) {
      window.NihongoAudio.speak(audioText, 0.85);
      window.NihongoAudio.playSuccess();
    }
    if (window.NihongoState) {
      window.NihongoState.addXp(5, 'Existence Verb Practice');
    }
    if (feedback) {
      feedback.textContent = isLiving
        ? `正解！ Living being (can move independently) ➔ uses 「${audioText}」! +5 XP`
        : `正解！ Non-living object/plant ➔ uses 「${audioText}」! +5 XP`;
    }
  }


  // --- Kana Charts View ---

  function renderKanaCharts() {
    const container = document.getElementById('kana-content');
    if (!container) return;

    const hiragana = window.KANA_DATA ? window.KANA_DATA.hiragana : [];
    const katakana = window.KANA_DATA ? window.KANA_DATA.katakana : [];

    container.innerHTML = `
      <div class="kana-view-wrapper">
        <div class="section-header">
          <div>
            <h1 class="section-title">Japanese Writing Systems: Hiragana & Katakana</h1>
            <p class="section-sub">Tap any tile to listen to pronunciation, or click "Trace" to launch interactive stroke tracing.</p>
          </div>
          <div class="kana-switch-tabs">
            <button id="show-hira-tab" class="btn btn-primary btn-sm">Hiragana (平仮名)</button>
            <button id="show-kata-tab" class="btn btn-secondary btn-sm">Katakana (片仮名)</button>
          </div>
        </div>

        <div id="kana-table-holder" class="kana-table-holder mt-3">
          <!-- Filled by toggleKanaTable -->
        </div>
      </div>
    `;

    function renderKanaGrid(list, typeName) {
      const holder = document.getElementById('kana-table-holder');
      if (!holder) return;

      holder.innerHTML = `
        <div class="kana-grid-title">${typeName} Chart (46 Basic Syllables)</div>
        <div class="kana-tiles-grid">
          ${list.map(k => `
            <div class="kana-tile" data-speak="${k.kana}">
              <span class="kana-char">${k.kana}</span>
              <span class="kana-romaji">${k.romaji}</span>
              <div class="kana-tile-actions">
                <button class="btn-tile-trace" onclick="event.stopPropagation(); NihongoApp.traceChar('${k.kana}', true)">Trace</button>
              </div>
            </div>
          `).join('')}
        </div>
      `;
      bindAudioButtons();
    }

    renderKanaGrid(hiragana, 'Hiragana');

    document.getElementById('show-hira-tab').addEventListener('click', (e) => {
      e.target.className = 'btn btn-primary btn-sm';
      document.getElementById('show-kata-tab').className = 'btn btn-secondary btn-sm';
      renderKanaGrid(hiragana, 'Hiragana');
    });

    document.getElementById('show-kata-tab').addEventListener('click', (e) => {
      e.target.className = 'btn btn-primary btn-sm';
      document.getElementById('show-hira-tab').className = 'btn btn-secondary btn-sm';
      renderKanaGrid(katakana, 'Katakana');
    });
  }

  // --- Interactive Canvas Tracer View ---

  function initTracerCanvas() {
    const canvas = document.getElementById('stroke-canvas');
    if (canvas && window.NihongoCanvasTracer) {
      window.NihongoCanvasTracer.init(canvas);
    }
  }

  function setupTracerView(targetCharStr) {
    const canvas = document.getElementById('stroke-canvas');
    if (!canvas) return;

    if (!window.NihongoCanvasTracer) return;
    window.NihongoCanvasTracer.init(canvas);

    // Populate dropdown with all available characters
    const select = document.getElementById('tracer-char-select');
    if (select) {
      select.innerHTML = '';

      // Hiragana group
      const hiraGroup = document.createElement('optgroup');
      hiraGroup.label = 'Hiragana (あいうえお)';
      if (window.KANA_DATA) {
        window.KANA_DATA.hiragana.forEach(h => {
          const opt = document.createElement('option');
          opt.value = h.kana;
          opt.textContent = `${h.kana} (${h.romaji})`;
          hiraGroup.appendChild(opt);
        });
      }
      select.appendChild(hiraGroup);

      // Katakana group
      const kataGroup = document.createElement('optgroup');
      kataGroup.label = 'Katakana (アイウエオ)';
      if (window.KANA_DATA) {
        window.KANA_DATA.katakana.forEach(k => {
          const opt = document.createElement('option');
          opt.value = k.kana;
          opt.textContent = `${k.kana} (${k.romaji})`;
          kataGroup.appendChild(opt);
        });
      }
      select.appendChild(kataGroup);

      // Book Extracted N5 Kanji (89 Characters)
      if (window.BOOK_CURRICULUM_DATA) {
        const bookKanjiGroup = document.createElement('optgroup');
        bookKanjiGroup.label = '📖 Foundational N5 Kanji (89 Characters)';
        window.BOOK_CURRICULUM_DATA.kanjiLessons.forEach(l => {
          l.kanji.forEach(k => {
            const opt = document.createElement('option');
            opt.value = k.char;
            opt.textContent = `${k.char} - ${k.meaning} (${k.strokes}画)`;
            bookKanjiGroup.appendChild(opt);
          });
        });
        select.appendChild(bookKanjiGroup);
      }

      // Level Kanji group
      const kanjiGroup = document.createElement('optgroup');
      kanjiGroup.label = 'JLPT Core Kanji';
      const allKanji = [];
      if (window.N5_DATA) allKanji.push(...window.N5_DATA.kanji);
      if (window.N4_DATA) allKanji.push(...window.N4_DATA.kanji);
      if (window.N3_DATA) allKanji.push(...window.N3_DATA.kanji);
      if (window.N2_DATA) allKanji.push(...window.N2_DATA.kanji);
      if (window.N1_DATA) allKanji.push(...window.N1_DATA.kanji);

      allKanji.forEach(k => {
        const opt = document.createElement('option');
        opt.value = k.char;
        opt.textContent = `${k.char} - ${k.meaning.split(',')[0]}`;
        kanjiGroup.appendChild(opt);
      });
      select.appendChild(kanjiGroup);

      // Change listener
      select.onchange = (e) => {
        loadTracerCharacterByString(e.target.value);
      };

      // Select target or default
      const pickChar = targetCharStr || '日';
      select.value = pickChar;
      loadTracerCharacterByString(pickChar);
    }

    // Attach Tracer Action Buttons
    const demoBtn = document.getElementById('tracer-animate-btn');
    const clearBtn = document.getElementById('tracer-clear-btn');
    const undoBtn = document.getElementById('tracer-undo-btn');
    const gridBtn = document.getElementById('tracer-grid-btn');

    if (demoBtn) demoBtn.onclick = () => window.NihongoCanvasTracer.demonstrateStrokeOrder();
    if (clearBtn) clearBtn.onclick = () => window.NihongoCanvasTracer.clearCanvas();
    if (undoBtn) undoBtn.onclick = () => window.NihongoCanvasTracer.undoLastStroke();
    if (gridBtn) gridBtn.onclick = () => window.NihongoCanvasTracer.toggleGrid();
  }

  function loadTracerCharacterByString(charStr) {
    let charObj = null;

    // Search Kana
    if (window.KANA_DATA) {
      charObj = window.KANA_DATA.hiragana.find(h => h.kana === charStr) ||
                window.KANA_DATA.katakana.find(k => k.kana === charStr);
    }

    // Search Kanji across levels
    if (!charObj) {
      const allKanji = [];
      if (window.N5_DATA) allKanji.push(...window.N5_DATA.kanji);
      if (window.N4_DATA) allKanji.push(...window.N4_DATA.kanji);
      if (window.N3_DATA) allKanji.push(...window.N3_DATA.kanji);
      if (window.N2_DATA) allKanji.push(...window.N2_DATA.kanji);
      if (window.N1_DATA) allKanji.push(...window.N1_DATA.kanji);

      charObj = allKanji.find(k => k.char === charStr);
    }

    // Search Book Curricula Kanji (89 Characters)
    if (!charObj && window.BOOK_CURRICULUM_DATA) {
      for (const l of window.BOOK_CURRICULUM_DATA.kanjiLessons) {
        const found = l.kanji.find(k => k.char === charStr);
        if (found) {
          charObj = found;
          break;
        }
      }
    }

    if (charObj && window.NihongoCanvasTracer) {
      window.NihongoCanvasTracer.loadCharacter(charObj);
    }
  }

  function traceChar(charStr) {
    navigateTo('tracer');
    setupTracerView(charStr);
  }

  // --- Games Hub View ---

  function renderGamesHub() {
    // Initialized by launchGame
    launchGame('slinger');
  }

  function launchGame(gameKey) {
    navigateTo('games');
    const container = document.getElementById('game-stage-container');
    if (!container) return;

    document.querySelectorAll('.game-nav-btn').forEach(btn => {
      if (btn.getAttribute('data-game') === gameKey) btn.classList.add('btn-primary');
      else btn.className = 'btn btn-secondary btn-sm game-nav-btn';
    });

    if (gameKey === 'slinger') {
      window.NihongoParticleSlinger.init(container);
      window.NihongoParticleSlinger.startGame();
    } else if (gameKey === 'matcher') {
      window.NihongoMatcher.init(container);
      window.NihongoMatcher.startRound();
    } else if (gameKey === 'blitz') {
      window.NihongoSpeedBlitz.init(container);
      window.NihongoSpeedBlitz.startBlitz();
    }
  }

  // --- SRS Review Queue View ---

  function initSrsView() {
    // Listen for SRS item completions
  }

  function renderSrsQueue() {
    const container = document.getElementById('srs-content');
    if (!container || !window.NihongoSRS) return;

    const dueItems = window.NihongoSRS.getDueItems();
    const totalCount = window.NihongoSRS.getTotalCount();

    if (dueItems.length === 0) {
      container.innerHTML = `
        <div class="srs-empty-card card text-center">
          <div class="srs-zen-icon">🍵</div>
          <h2>All Caught Up!</h2>
          <p class="mt-2">There are currently no items due for review in your Spaced Repetition Queue.</p>
          <p class="text-muted">Total tracked deck items: <strong>${totalCount}</strong></p>
          <div class="mt-3">
            <button class="btn btn-secondary" onclick="NihongoApp.resetSrsDeck()">Reset Starter Deck (Test Reviews)</button>
            <button class="btn btn-primary" onclick="NihongoApp.navigateTo('hub')">Explore New Vocabulary ➔</button>
          </div>
        </div>
      `;
      return;
    }

    let currentIndex = 0;

    function renderActiveCard() {
      if (currentIndex >= dueItems.length) {
        renderSrsQueue();
        return;
      }

      const item = dueItems[currentIndex];
      container.innerHTML = `
        <div class="srs-review-wrapper">
          <div class="srs-review-header">
            <div class="srs-progress-pill">Reviewing: ${currentIndex + 1} of ${dueItems.length} Due</div>
            <div class="srs-box-badge">Leitner Box #${item.box}</div>
          </div>

          <div class="srs-flashcard card" id="srs-active-card">
            <div class="srs-card-tag">${item.type} (${item.level})</div>
            <div class="srs-card-front">
              <span class="srs-front-text" data-speak="${item.front}">${item.front}</span>
            </div>

            <div class="srs-reveal-prompt" id="srs-reveal-prompt">
              <button id="srs-flip-btn" class="btn btn-primary btn-lg">Show Answer ➔</button>
            </div>

            <div class="srs-card-back" id="srs-card-back" style="display: none;">
              <hr class="srs-divider" />
              <div class="srs-reading" data-speak="${item.backReading}">${item.backReading}</div>
              <div class="srs-meaning">${item.backMeaning}</div>
              ${item.example ? `<div class="srs-example">“${item.example}”</div>` : ''}

              <!-- Rating Buttons -->
              <div class="srs-rating-buttons mt-4">
                <button class="btn-srs-rate rate-again" data-rate="again">
                  <span>Again</span>
                  <small>&lt; 10m</small>
                </button>
                <button class="btn-srs-rate rate-hard" data-rate="hard">
                  <span>Hard</span>
                  <small>1d</small>
                </button>
                <button class="btn-srs-rate rate-good" data-rate="good">
                  <span>Good</span>
                  <small>3d</small>
                </button>
                <button class="btn-srs-rate rate-easy" data-rate="easy">
                  <span>Easy</span>
                  <small>7d+</small>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      bindAudioButtons();

      document.getElementById('srs-flip-btn').addEventListener('click', () => {
        document.getElementById('srs-reveal-prompt').style.display = 'none';
        document.getElementById('srs-card-back').style.display = 'block';
        if (window.NihongoAudio) window.NihongoAudio.playClick();
      });

      const rateBtns = container.querySelectorAll('.btn-srs-rate');
      rateBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const rating = btn.getAttribute('data-rate');
          window.NihongoSRS.rateItem(item.id, rating);
          currentIndex++;
          renderActiveCard();
        });
      });
    }

    renderActiveCard();
  }

  function addKanjiToSrs(char, meaning, reading) {
    if (window.NihongoSRS) {
      window.NihongoSRS.addItem({
        id: `kanji-${char}`,
        type: 'Kanji',
        level: 'N5',
        front: char,
        backReading: reading,
        backMeaning: meaning
      });
    }
  }

  function addWordToSrs(word, reading, meaning) {
    if (window.NihongoSRS) {
      window.NihongoSRS.addItem({
        id: `vocab-${word}`,
        type: 'Vocabulary',
        level: activeLevel,
        front: word,
        backReading: reading,
        backMeaning: meaning
      });
    }
  }

  function resetSrsDeck() {
    if (window.NihongoSRS) {
      window.NihongoSRS.resetDeck();
      renderSrsQueue();
    }
  }

  // --- Achievements / Badges View ---

  function renderAchievementsView() {
    const container = document.getElementById('achievements-content');
    if (!container || !window.NihongoState) return;

    const badges = window.NihongoState.getBadgesConfig();
    const state = window.NihongoState.getState();
    const unlocked = state.unlockedBadges || [];

    container.innerHTML = `
      <div class="achievements-wrapper">
        <div class="section-header">
          <div>
            <h1 class="section-title">Achievements & Milestones</h1>
            <p class="section-sub">Unlocked ${unlocked.length} of ${badges.length} Master Badges</p>
          </div>
        </div>

        <div class="badges-grid mt-3">
          ${badges.map(b => {
            const isUnlocked = unlocked.includes(b.id);
            return `
              <div class="badge-card card ${isUnlocked ? 'badge-unlocked' : 'badge-locked'}">
                <div class="badge-card-icon">${b.icon}</div>
                <h3 class="badge-card-title">${b.title}</h3>
                <p class="badge-card-desc">${b.desc}</p>
                <div class="badge-card-status">
                  ${isUnlocked ? '<span class="status-earned">✓ Earned (+100 XP)</span>' : '<span class="status-locked">🔒 In Progress</span>'}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // --- Modals & Onboarding Tour ---

  function showOnboardingModal() {
    const modal = document.createElement('div');
    modal.className = 'game-modal-backdrop';
    modal.innerHTML = `
      <div class="game-modal-dialog onboarding-dialog">
        <div class="victory-header">
          <span class="victory-icon">🎌</span>
          <h2>Welcome to 鳥居の道 (Torii Path)!</h2>
          <p>Your zero-dependency, interactive guide from JLPT N5 through N1.</p>
        </div>
        <div class="onboarding-steps-list">
          <div class="onboard-step">
            <span class="step-icon">🗺️</span>
            <div>
              <strong>Roadmap & Levels:</strong> Switch between JLPT N5, N4, N3, N2, and N1 anytime using the top roadmap cards.
            </div>
          </div>
          <div class="onboard-step">
            <span class="step-icon">👁️</span>
            <div>
              <strong>Furigana Mode Toggle:</strong> Use the dropdown in the header to switch between <em>Show All</em>, <em>Hover Only</em>, or <em>Hide</em> ruby annotations.
            </div>
          </div>
          <div class="onboard-step">
            <span class="step-icon">🖌️</span>
            <div>
              <strong>Interactive Stroke Canvas:</strong> Trace Kana and Kanji on screen with real-time vector accuracy feedback and animated guides.
            </div>
          </div>
          <div class="onboard-step">
            <span class="step-icon">🎯</span>
            <div>
              <strong>Gamified Lessons & SRS:</strong> Play Particle Slinger, Matcher, Speed Blitz, and build long-term memory with Spaced Repetition.
            </div>
          </div>
        </div>
        <div class="victory-actions">
          <button id="close-onboarding-btn" class="btn btn-primary btn-lg">Begin Learning ➔</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#close-onboarding-btn').addEventListener('click', () => {
      modal.remove();
      if (window.NihongoState) window.NihongoState.setOnboardingDone();
    });
  }

  function showBackupModal() {
    const state = window.NihongoState ? window.NihongoState.getState() : {};
    const modal = document.createElement('div');
    modal.className = 'game-modal-backdrop';
    modal.innerHTML = `
      <div class="game-modal-dialog">
        <div class="victory-header">
          <span class="victory-icon">💾</span>
          <h2>Backup & Data Management</h2>
          <p>Export your XP, streaks, badges, and SRS deck, or restore from a JSON file.</p>
        </div>
        <div class="backup-actions-grid mt-3">
          <button id="btn-export-json" class="btn btn-primary">📥 Export Progress Backup (.JSON)</button>
          <label class="btn btn-secondary file-upload-label">
            📤 Restore from File (.JSON)
            <input type="file" id="btn-import-file" accept=".json" style="display: none;" />
          </label>
          <button id="btn-reset-data" class="btn btn-danger">⚠️ Reset All Data to Default</button>
        </div>
        <div class="victory-actions mt-4">
          <button id="close-backup-modal-btn" class="btn btn-secondary">Close</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('#btn-export-json').onclick = () => {
      if (window.NihongoState) window.NihongoState.exportData();
    };

    modal.querySelector('#btn-import-file').onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        if (window.NihongoState) {
          const success = window.NihongoState.importData(evt.target.result);
          if (success) {
            modal.remove();
            renderDashboard();
            updateHeaderStats();
          }
        }
      };
      reader.readAsText(file);
    };

    modal.querySelector('#btn-reset-data').onclick = () => {
      if (confirm('Are you sure you want to reset all your progress, streaks, and SRS deck? This cannot be undone.')) {
        if (window.NihongoState) window.NihongoState.resetProgress();
        if (window.NihongoSRS) window.NihongoSRS.resetDeck();
        modal.remove();
        renderDashboard();
        updateHeaderStats();
      }
    };

    modal.querySelector('#close-backup-modal-btn').onclick = () => modal.remove();
  }

  function openQuiz(lvl) {
    navigateTo('hub');
    switchHubTab('quiz');
  }

  return {
    init,
    navigateTo,
    openLevel,
    switchHubTab,
    switchZeroTab,
    switchZeroVocabCategory,
    traceChar,
    launchGame,
    openQuiz,
    addWordToSrs,
    addKanjiToSrs,
    switchBookTab,
    switchBookLesson,
    filterBookKanji,
    filterBookVocab,
    testExistenceItem,
    resetSrsDeck,
    showOnboardingModal,
    showBackupModal,
    refreshRoadmap: () => { renderDashboard(); updateHeaderStats(); },
    nextLinguisticInsight,
    startPracticeSession: (nodeId) => NihongoQuestRunner.startSession(nodeId),
    setupRomajiMode,
    applyRomajiMode,
    toggleCheatSheet,
    renderCheatSheet,
    selectBuilderSlotToken,
    randomizeBuilderSentence,
    speakBuilderSentence,
    saveBuilderSentenceToSrs,
    renderBuilderPreview,
    switchDialogueScenario,
    selectDialogueChoice,
    resetDialogue,
    renderDialogueSimulator,
    testConfusablePair,
    toEnglishPhonetics
  };
})();

// Auto-boot on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.NihongoApp.init();
});
