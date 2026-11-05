/**
 * Spaced Repetition System (SRS):
 * Leitner 5-box spaced repetition algorithm with interval scheduling,
 * review queue generation, card flipping, and performance rating.
 */

window.NihongoSRS = (function() {
  const STORAGE_KEY = 'NIHONGO_SRS_DECK_V1';

  // Leitner Interval Schedule (in milliseconds)
  const INTERVALS = {
    1: 4 * 60 * 60 * 1000,         // Box 1: 4 hours
    2: 24 * 60 * 60 * 1000,        // Box 2: 1 day
    3: 3 * 24 * 60 * 60 * 1000,    // Box 3: 3 days
    4: 7 * 24 * 60 * 60 * 1000,    // Box 4: 1 week
    5: 30 * 24 * 60 * 60 * 1000    // Box 5: 1 month (Mastered)
  };

  const defaultStarterDeck = [
    {
      id: 'kanji-n5-nichi',
      type: 'Kanji',
      level: 'N5',
      front: '日',
      backReading: 'ニチ, ジツ / ひ, -び, -か',
      backMeaning: 'Day, Sun, Japan',
      example: '日本 (にほん - Japan)',
      box: 1,
      nextReview: Date.now() - 10000, // Due immediately
      lastReviewed: null,
      consecutiveCorrect: 0
    },
    {
      id: 'vocab-n5-taberu',
      type: 'Vocabulary',
      level: 'N5',
      front: '食べる',
      backReading: 'たべる (taberu)',
      backMeaning: 'To eat',
      example: '朝ご飯を食べます。(I eat breakfast.)',
      box: 1,
      nextReview: Date.now() - 5000, // Due immediately
      lastReviewed: null,
      consecutiveCorrect: 0
    },
    {
      id: 'grammar-n5-particle-wa',
      type: 'Grammar',
      level: 'N5',
      front: '私 [ ? ] 学生です。',
      backReading: 'Particle: は (wa)',
      backMeaning: 'Topic marker: "As for me, I am a student."',
      example: 'Sets the overarching topic of the conversation.',
      box: 1,
      nextReview: Date.now() - 1000, // Due immediately
      lastReviewed: null,
      consecutiveCorrect: 0
    },
    {
      id: 'vocab-n4-yakusoku',
      type: 'Vocabulary',
      level: 'N4',
      front: '約束',
      backReading: 'やくそく (yakusoku)',
      backMeaning: 'Promise, appointment, plans',
      example: '友達と遊ぶ約束をしました。',
      box: 1,
      nextReview: Date.now() - 100, // Due immediately
      lastReviewed: null,
      consecutiveCorrect: 0
    },
    {
      id: 'grammar-n3-wake-vs-hazu',
      type: 'Grammar',
      level: 'N3',
      front: '〜わけだ vs 〜はずだ',
      backReading: 'Nuance Distinction',
      backMeaning: 'わけだ = Natural reason / conclusion ("No wonder!"). はずだ = Expectation / should be.',
      example: '熱がある。だるいわけだ。(Fever -> no wonder weary)',
      box: 1,
      nextReview: Date.now() - 50, // Due immediately
      lastReviewed: null,
      consecutiveCorrect: 0
    }
  ];

  let deck = loadDeck();

  function loadDeck() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load SRS deck:', e);
    }
    return [...defaultStarterDeck];
  }

  function saveDeck() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(deck));
      // Notify listeners (UI badge counters)
      window.dispatchEvent(new CustomEvent('nihongo-srs-updated', { detail: { dueCount: getDueCount() } }));
    } catch (e) {
      console.error('Failed to save SRS deck:', e);
    }
  }

  function getDueItems() {
    const now = Date.now();
    return deck.filter(item => !item.nextReview || item.nextReview <= now);
  }

  function getDueCount() {
    return getDueItems().length;
  }

  function getTotalCount() {
    return deck.length;
  }

  function addItem(item) {
    const existingIndex = deck.findIndex(i => i.id === item.id);
    const srsItem = Object.assign({
      box: 1,
      nextReview: Date.now(), // Due immediately
      lastReviewed: null,
      consecutiveCorrect: 0
    }, item);

    if (existingIndex >= 0) {
      // Re-queue item at Box 1
      deck[existingIndex].box = 1;
      deck[existingIndex].nextReview = Date.now();
    } else {
      deck.push(srsItem);
    }

    saveDeck();
    if (window.NihongoState) {
      window.NihongoState.notifyNotification(`Added "${srsItem.front}" to SRS Review Queue!`, 'info');
    }
    return srsItem;
  }

  // Record user answer rating: 'again', 'hard', 'good', 'easy'
  function rateItem(itemId, rating) {
    const item = deck.find(i => i.id === itemId);
    if (!item) return null;

    const now = Date.now();
    item.lastReviewed = now;

    switch (rating) {
      case 'again':
        // Reset to Box 1
        item.box = 1;
        item.consecutiveCorrect = 0;
        item.nextReview = now + (10 * 60 * 1000); // 10 minutes later in current session
        break;

      case 'hard':
        // Keep in current box or reduce by 1
        item.box = Math.max(1, item.box - 1);
        item.nextReview = now + (INTERVALS[item.box] * 0.7);
        break;

      case 'good':
        // Promote to next box
        item.box = Math.min(5, item.box + 1);
        item.consecutiveCorrect += 1;
        item.nextReview = now + INTERVALS[item.box];
        break;

      case 'easy':
        // Skip ahead
        item.box = Math.min(5, item.box + 2);
        item.consecutiveCorrect += 2;
        item.nextReview = now + (INTERVALS[item.box] * 1.5);
        break;
    }

    saveDeck();

    if (window.NihongoState) {
      window.NihongoState.addXp(15, 'SRS Review Completed');
      const reviewsDone = deck.filter(i => i.lastReviewed).length;
      if (reviewsDone >= 5) {
        window.NihongoState.unlockBadge('srs_disciple');
      }
    }

    return item;
  }

  return {
    getDeck: () => deck,
    getDueItems,
    getDueCount,
    getTotalCount,
    addItem,
    rateItem,
    resetDeck: () => {
      deck = [...defaultStarterDeck];
      saveDeck();
    }
  };
})();
