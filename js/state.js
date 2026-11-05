/**
 * State Management:
 * Handles localStorage persistence for user level, streak tracking, XP points,
 * achievements/badges, kanji mastery scores, high scores, and state export/import.
 */

window.NihongoState = (function() {
  const STORAGE_KEY = 'NIHONGO_MASTER_STATE_V1';

  const RANKS = [
    { name: '初心者', title: 'Novice', minXp: 0 },
    { name: '見習い', title: 'Apprentice', minXp: 200 },
    { name: '修行者', title: 'Practitioner', minXp: 600 },
    { name: '碩学', title: 'Scholar', minXp: 1500 },
    { name: '達人', title: 'Master', minXp: 3200 },
    { name: '名人', title: 'Grandmaster', minXp: 6000 }
  ];

  const BADGES_CONFIG = [
    { id: 'first_stroke', title: '筆始め (First Brushstroke)', desc: 'Trace your first Kana or Kanji on the interactive canvas.', icon: '🖌️' },
    { id: 'kana_cadet', title: '仮名見習い (Kana Cadet)', desc: 'Complete your first Kana matching session.', icon: '🎴' },
    { id: 'particle_sniper', title: '助詞スナイパー (Particle Sniper)', desc: 'Score 800+ points in the Particle Slinger game.', icon: '🎯' },
    { id: 'speed_demon', title: '疾風迅雷 (Speed Demon)', desc: 'Reach a 5x combo streak in Speed Vocabulary Blitz.', icon: '⚡' },
    { id: 'quiz_ace', title: '満点合格 (Quiz Ace)', desc: 'Score 100% on any curriculum module quiz.', icon: '💮' },
    { id: 'srs_disciple', title: '継続の達人 (SRS Disciple)', desc: 'Review 5 items in the Spaced Repetition queue.', icon: '🧠' },
    { id: 'kanji_scholar', title: '漢字博士 (Kanji Scholar)', desc: 'Master 5 different Kanji characters.', icon: '📜' },
    { id: 'streak_warrior', title: '日日是好日 (Streak Warrior)', desc: 'Maintain an active daily learning streak.', icon: '🔥' }
  ];

  const defaultState = {
    currentLevel: 'N5',
    furiganaMode: 'all', // 'all' | 'hover' | 'hide'
    theme: 'dark',       // 'dark' | 'light'
    xp: 0,
    koban: 150,          // 🪙 Gold Coins / Gems currency
    hearts: 5,           // ❤️ Lives
    maxHearts: 5,
    streakFreezes: 1,    // 🛡️ Streak protection amulets
    activeAvatar: 'mochi_novice',
    unlockedAvatars: ['mochi_novice'],
    dailyQuests: [
      { id: 'quest_xp', title: 'Earn 40 XP today', icon: '⚡', target: 40, current: 0, rewardKoban: 25, completed: false, claimed: false },
      { id: 'quest_nodes', title: 'Complete 2 Quest Lessons', icon: '⛩️', target: 2, current: 0, rewardKoban: 35, completed: false, claimed: false },
      { id: 'quest_audio', title: 'Listen to 5 Pronunciations', icon: '🔊', target: 5, current: 0, rewardKoban: 15, completed: false, claimed: false }
    ],
    questPathProgress: {
      'node_1': { completed: false, stars: 0, attempts: 0 }
    },
    streak: {
      count: 1,
      lastDate: new Date().toISOString().split('T')[0]
    },
    unlockedBadges: [],
    kanjiMastery: {}, // { '日': { accuracy: 95, status: 'mastered', times: 3 } }
    completedQuizzes: {}, // { 'N5': { score: 100, passedAt: '...' } }
    gameHighScores: {
      matcher: 0,
      particleSlinger: 0,
      speedBlitz: 0
    },
    completedLessons: {},
    onboardingCompleted: false
  };

  let state = loadState();

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const merged = Object.assign({}, defaultState, parsed);
        if (merged.hearts === undefined || merged.hearts === null) merged.hearts = 5;
        if (merged.koban === undefined || merged.koban === null) merged.koban = 150;
        if (!merged.questPathProgress) merged.questPathProgress = defaultState.questPathProgress;
        if (!merged.dailyQuests || merged.dailyQuests.length === 0) merged.dailyQuests = defaultState.dailyQuests;
        if (!merged.unlockedAvatars) merged.unlockedAvatars = ['mochi_novice'];
        if (!merged.activeAvatar) merged.activeAvatar = 'mochi_novice';
        return merged;
      }
    } catch (e) {
      console.error('Failed to load state from localStorage:', e);
    }
    return Object.assign({}, defaultState);
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      // Dispatch custom event for reactive UI updates
      window.dispatchEvent(new CustomEvent('nihongo-state-changed', { detail: state }));
    } catch (e) {
      console.error('Failed to save state to localStorage:', e);
    }
  }

  // Check and update streak on application load
  function updateStreak() {
    const today = new Date().toISOString().split('T')[0];
    const lastDate = state.streak.lastDate;

    if (!lastDate) {
      state.streak = { count: 1, lastDate: today };
      saveState();
      return;
    }

    if (lastDate === today) {
      // Already active today
      return;
    }

    const prevDate = new Date(lastDate);
    const currDate = new Date(today);
    const diffDays = Math.round((currDate - prevDate) / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      // Consecutive day!
      state.streak.count += 1;
      state.streak.lastDate = today;
      addXp(25, 'Daily Streak Bonus!');
      unlockBadge('streak_warrior');
    } else if (diffDays > 1) {
      // Streak broken, restart
      state.streak.count = 1;
      state.streak.lastDate = today;
    }
    saveState();
  }

  // Award XP and notify if rank up
  function addXp(amount, reason = '') {
    const oldRank = getRank();
    state.xp += amount;
    const newRank = getRank();

    // Advance daily quest
    incrementDailyQuest('quest_xp', amount);

    saveState();

    if (newRank.title !== oldRank.title) {
      if (window.NihongoAudio) window.NihongoAudio.playFanfare();
      notifyNotification(`Rank Up! You achieved ${newRank.name} (${newRank.title})!`, 'success');
    }

    return { totalXp: state.xp, added: amount, rank: newRank };
  }

  function getRank() {
    let currentRank = RANKS[0];
    for (const r of RANKS) {
      if (state.xp >= r.minXp) {
        currentRank = r;
      }
    }
    return currentRank;
  }

  function getNextRank() {
    for (const r of RANKS) {
      if (state.xp < r.minXp) {
        return r;
      }
    }
    return null; // Top rank achieved
  }

  // Badge System
  function unlockBadge(badgeId) {
    if (state.unlockedBadges.includes(badgeId)) return false;
    const badge = BADGES_CONFIG.find(b => b.id === badgeId);
    if (!badge) return false;

    state.unlockedBadges.push(badgeId);
    addXp(100, `Achievement Unlocked: ${badge.title}`);
    saveState();

    if (window.NihongoAudio) window.NihongoAudio.playSuccess();
    notifyNotification(`🏆 Achievement Unlocked: ${badge.title}! (+100 XP)`, 'badge');
    return true;
  }

  // Kanji Mastery Recording
  function recordKanjiPractice(char, accuracy) {
    const existing = state.kanjiMastery[char] || { accuracy: 0, times: 0, status: 'learning' };
    existing.times += 1;
    existing.accuracy = Math.round((existing.accuracy * (existing.times - 1) + accuracy) / existing.times);

    if (existing.accuracy >= 80 && existing.times >= 2) {
      existing.status = 'mastered';
    } else {
      existing.status = 'learning';
    }

    state.kanjiMastery[char] = existing;
    addXp(20, `Kanji Practice: ${char}`);

    // Check count of mastered kanji
    const masteredCount = Object.values(state.kanjiMastery).filter(k => k.status === 'mastered').length;
    if (masteredCount >= 5) {
      unlockBadge('kanji_scholar');
    }

    saveState();
    return existing;
  }

  // High Score updater
  function recordHighScore(gameKey, score) {
    const current = state.gameHighScores[gameKey] || 0;
    if (score > current) {
      state.gameHighScores[gameKey] = score;
      saveState();
      return true; // new high score
    }
    return false;
  }

  // In-app gentle toast notification
  function notifyNotification(msg, type = 'info') {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span>${msg}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fade-out');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }

  // --- Gamification & Economy (Duolingo-style fun loop) ---
  function addKoban(amount) {
    state.koban = (state.koban || 0) + amount;
    saveState();
    return state.koban;
  }

  function spendKoban(amount) {
    if ((state.koban || 0) < amount) return false;
    state.koban -= amount;
    saveState();
    return true;
  }

  function loseHeart() {
    state.hearts = Math.max(0, (state.hearts || 5) - 1);
    saveState();
    return state.hearts;
  }

  function refillHearts() {
    state.hearts = state.maxHearts || 5;
    saveState();
    return state.hearts;
  }

  function addStreakFreeze() {
    state.streakFreezes = (state.streakFreezes || 0) + 1;
    saveState();
  }

  function unlockAvatar(avatarId) {
    if (!state.unlockedAvatars) state.unlockedAvatars = ['mochi_novice'];
    if (!state.unlockedAvatars.includes(avatarId)) {
      state.unlockedAvatars.push(avatarId);
      saveState();
    }
  }

  function equipAvatar(avatarId) {
    state.activeAvatar = avatarId;
    saveState();
  }

  function completeQuestNode(nodeId, stars) {
    if (!state.questPathProgress) state.questPathProgress = {};
    const prev = state.questPathProgress[nodeId] || { completed: false, stars: 0, attempts: 0 };
    prev.completed = true;
    prev.stars = Math.max(prev.stars, stars);
    prev.attempts += 1;
    state.questPathProgress[nodeId] = prev;

    // Advance daily quest: complete nodes
    incrementDailyQuest('quest_nodes', 1);

    saveState();
  }

  function incrementDailyQuest(questId, amount = 1) {
    if (!state.dailyQuests) return;
    const q = state.dailyQuests.find(item => item.id === questId);
    if (q && !q.completed) {
      q.current = Math.min(q.target, q.current + amount);
      if (q.current >= q.target) {
        q.completed = true;
        notifyNotification(`📜 Daily Quest Completed: ${q.title}!`, 'success');
      }
      saveState();
    }
  }

  function claimDailyQuest(questId) {
    if (!state.dailyQuests) return;
    const q = state.dailyQuests.find(item => item.id === questId);
    if (q && q.completed && !q.claimed) {
      q.claimed = true;
      addKoban(q.rewardKoban);
      if (window.NihongoAudio) window.NihongoAudio.playSuccess();
      notifyNotification(`Claimed +${q.rewardKoban} Koban from ${q.title}! 🪙`, 'success');
      saveState();
    }
  }

  // Backup & Restore
  function exportData() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `nihongo_master_backup_${new Date().toISOString().split('T')[0]}.json`);
    dlAnchor.click();
    dlAnchor.remove();
  }

  function importData(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && typeof parsed === 'object') {
        state = Object.assign({}, defaultState, parsed);
        saveState();
        notifyNotification('Progress data successfully restored!', 'success');
        return true;
      }
    } catch (e) {
      notifyNotification('Failed to import backup file: Invalid JSON', 'error');
    }
    return false;
  }

  function resetProgress() {
    state = Object.assign({}, defaultState);
    saveState();
    notifyNotification('All progress has been reset to defaults.', 'info');
  }

  // Run streak check on initialization
  updateStreak();

  return {
    getState: () => state,
    setLevel: (lvl) => { state.currentLevel = lvl; saveState(); },
    setFuriganaMode: (mode) => { state.furiganaMode = mode; saveState(); },
    setTheme: (t) => { state.theme = t; saveState(); },
    setOnboardingDone: () => { state.onboardingCompleted = true; saveState(); },
    addXp,
    getRank,
    getNextRank,
    unlockBadge,
    getBadgesConfig: () => BADGES_CONFIG,
    recordKanjiPractice,
    recordHighScore,
    addKoban,
    spendKoban,
    loseHeart,
    refillHearts,
    addStreakFreeze,
    unlockAvatar,
    equipAvatar,
    completeQuestNode,
    incrementDailyQuest,
    claimDailyQuest,
    notifyNotification,
    exportData,
    importData,
    resetProgress,
    saveState
  };
})();
