/**
 * Absolute Beginner (Zero to Hero) Curriculum Data:
 * For learners with ZERO prior Japanese knowledge.
 * 
 * 1. The 3 Writing Systems Explained
 * 2. 46 Basic Kana + Dakuon + Handakuon + Youon + Special Sounds (Long vowels, Sokuon, Hatsun)
 * 3. Phonetics & Pitch Accent Studio with audio comparison pairs
 * 4. 120+ Curated First Words across 8 real-life categories with syllable-by-syllable audio
 * 5. Sentence Building Blueprint: How Japanese syntax works (SOV vs SVO, Particles, Copula です)
 * 6. 35+ Real-world beginner sentences with word-by-word audio breakdown
 */

window.ZERO_BEGINNER_DATA = {
  overview: {
    title: 'ゼロから始める日本語 • Absolute Beginner Blueprint',
    subtitle: 'From your first sound to full natural sentences: A complete zero-prior-knowledge guide with crystal-clear audio pronunciation.',
    writingSystemsOverview: [
      {
        name: 'Hiragana (ひらがな)',
        role: 'Native Japanese words & grammar particles',
        count: '46 basic characters',
        style: 'Soft, rounded, flowing strokes',
        example: 'ありがとう (arigatou - thank you)',
        tip: 'This is the #1 foundational alphabet. Every sound in the Japanese language can be written in Hiragana.'
      },
      {
        name: 'Katakana (カタカナ)',
        role: 'Foreign loanwords, foreign names, onomatopoeia, emphasis',
        count: '46 basic characters',
        style: 'Sharp, angular, geometric strokes',
        example: 'コーヒー (koohii - coffee), アメリカ (Amerika)',
        tip: 'Represents the exact same 46 phonetic sounds as Hiragana, but used specifically for loanwords!'
      },
      {
        name: 'Kanji (漢字)',
        role: 'Ideograms / Characters representing meaning and concepts',
        count: 'Over 2,000 in daily use',
        style: 'Intricate pictographs borrowed historically from China',
        example: '日本 (Japan), 水 (Water), 食べる (To eat)',
        tip: 'Don\'t panic! You don\'t need them on day 1. Learn Hiragana first, then step into basic Kanji with Furigana aids.'
      }
    ]
  },

  // 1. Phonetics and Letter Soundboard
  phoneticsGuide: {
    vowels: [
      { letter: 'あ / ア', romaji: 'a', sound: 'Ah', mouth: 'Open mouth relaxed, like "a" in "father". Never like "cat".', example: 'あさ (asa - morning)' },
      { letter: 'い / イ', romaji: 'i', sound: 'Ee', mouth: 'Lips pulled wide like a slight smile, like "ee" in "feet".', example: 'いぬ (inu - dog)' },
      { letter: 'う / ウ', romaji: 'u', sound: 'Oo', mouth: 'Lips slightly rounded without protruding, like "oo" in "boot" but softer.', example: 'うみ (umi - sea)' },
      { letter: 'え / エ', romaji: 'e', sound: 'Eh', mouth: 'Mid-open mouth, like "e" in "bed" or "pet".', example: 'えき (eki - station)' },
      { letter: 'お / オ', romaji: 'o', sound: 'Oh', mouth: 'Round lips, pure single vowel like "o" in "origami" (not a diphthong).', example: 'おちゃ (ocha - tea)' }
    ],

    specialSounds: [
      {
        title: 'Long Vowels (長音 - Chōon)',
        explanation: 'In Japanese, holding a vowel for two beats (moras) completely changes the meaning of a word!',
        pairs: [
          { shortW: 'おばさん', shortR: 'obasan', shortM: 'Aunt', longW: 'おばあさん', longR: 'obaasan', longM: 'Grandmother' },
          { shortW: 'おじさん', shortR: 'ojisan', shortM: 'Uncle', longW: 'おじいさん', longR: 'ojiisan', longM: 'Grandfather' },
          { shortW: 'ここ', shortR: 'koko', shortM: 'Here', longW: 'こうこう', longR: 'koukou', longM: 'High school' },
          { shortW: 'ゆき', shortR: 'yuki', shortM: 'Snow', longW: 'ゆうき', longR: 'yuuki', longM: 'Courage' }
        ]
      },
      {
        title: 'The Small "Tsu" Pause (促音 - Sokuon っ / ッ)',
        explanation: 'A tiny "っ" creates a sharp one-beat silent glottal stop / pause before the next consonant. Think of the sudden stop in "uh-oh!".',
        pairs: [
          { wordA: '来て (きて - kite)', meanA: 'Come please (no pause)', wordB: '切手 (きって - kitte)', meanB: 'Postage stamp (sharp pause: kit-te)' },
          { wordA: '坂 (さか - saka)', meanA: 'Hill / Slope', wordB: '作家 (さっか - sakka)', meanB: 'Author / Novelist (sak-ka)' },
          { wordA: '待って (まって - matte)', meanA: 'Wait! (mat-te)', wordB: 'まて (mate)', meanB: 'Wait (plain command)' }
        ]
      },
      {
        title: 'The Nasal "N" (撥音 - Hatsun ん / ン)',
        explanation: 'The only Japanese consonant that can end a syllable without an attached vowel. Its sound morphs naturally between "n", "m", and "ng" depending on what follows.',
        examples: [
          { word: 'ほん (hon)', meaning: 'Book', note: 'Pure "n" at the end of word' },
          { word: 'さんぽ (sanpo)', meaning: 'A walk', note: 'Sounds like "m" before "p" or "b"' },
          { word: 'まんが (manga)', meaning: 'Manga / Comic', note: 'Nasal "ng" before "g" or "k"' }
        ]
      }
    ],

    pitchAccentStudio: {
      explanation: 'Unlike English (which uses volume/stress accent), Japanese uses Pitch Accent (Musical High vs. Low tones). Here are famous word pairs where pitch distinguishes completely different meanings:',
      pairs: [
        {
          wordA: '雨 (あめ)', pitchA: 'High ➔ Low (🌧️ Rain)', audioA: 'あめ',
          wordB: '飴 (あめ)', pitchB: 'Low ➔ High (🍬 Candy)', audioB: 'あめ',
          tip: 'A-me drops down for rain falling from the sky; a-ME rises up like sweet candy!'
        },
        {
          wordA: '箸 (はし)', pitchA: 'High ➔ Low (🥢 Chopsticks)', audioA: 'はし',
          wordB: '橋 (はし)', pitchB: 'Low ➔ High (🌉 Bridge)', audioB: 'はし',
          tip: 'Ha-shi starts high for picking chopsticks; ha-SHI rises up over the river bridge!'
        },
        {
          wordA: '柿 (かき)', pitchA: 'Low ➔ High (Persimmon 🍊)', audioA: 'かき',
          wordB: '牡蠣 (かき)', pitchB: 'High ➔ Low (Oyster 🦪)', audioB: 'かき',
          tip: 'Notice how tone clarifies context even when spelling is identical!'
        }
      ]
    }
  },

  // 2. Soundboard Matrix (Seion, Dakuon, Handakuon, Youon)
  soundboard: {
    seionRows: [
      { row: 'Vowels (あ行)', kana: [
        { hira: 'あ', kata: 'ア', romaji: 'a' },
        { hira: 'い', kata: 'イ', romaji: 'i' },
        { hira: 'う', kata: 'ウ', romaji: 'u' },
        { hira: 'え', kata: 'エ', romaji: 'e' },
        { hira: 'お', kata: 'オ', romaji: 'o' }
      ]},
      { row: 'K-Row (か行)', kana: [
        { hira: 'か', kata: 'カ', romaji: 'ka' },
        { hira: 'き', kata: 'キ', romaji: 'ki' },
        { hira: 'く', kata: 'ク', romaji: 'ku' },
        { hira: 'け', kata: 'ケ', romaji: 'ke' },
        { hira: 'こ', kata: 'コ', romaji: 'ko' }
      ]},
      { row: 'S-Row (さ行)', kana: [
        { hira: 'さ', kata: 'サ', romaji: 'sa' },
        { hira: 'し', kata: 'シ', romaji: 'shi' },
        { hira: 'す', kata: 'ス', romaji: 'su' },
        { hira: 'せ', kata: 'セ', romaji: 'se' },
        { hira: 'そ', kata: 'ソ', romaji: 'so' }
      ]},
      { row: 'T-Row (た行)', kana: [
        { hira: 'た', kata: 'タ', romaji: 'ta' },
        { hira: 'ち', kata: 'チ', romaji: 'chi' },
        { hira: 'つ', kata: 'ツ', romaji: 'tsu' },
        { hira: 'て', kata: 'テ', romaji: 'te' },
        { hira: 'と', kata: 'ト', romaji: 'to' }
      ]},
      { row: 'N-Row (な行)', kana: [
        { hira: 'な', kata: 'ナ', romaji: 'na' },
        { hira: 'に', kata: 'ニ', romaji: 'ni' },
        { hira: 'ぬ', kata: 'ヌ', romaji: 'nu' },
        { hira: 'ね', kata: 'ネ', romaji: 'ne' },
        { hira: 'の', kata: 'ノ', romaji: 'no' }
      ]},
      { row: 'H-Row (は行)', kana: [
        { hira: 'は', kata: 'ハ', romaji: 'ha' },
        { hira: 'ひ', kata: 'ヒ', romaji: 'hi' },
        { hira: 'ふ', kata: 'フ', romaji: 'fu' },
        { hira: 'へ', kata: 'ヘ', romaji: 'he' },
        { hira: 'ほ', kata: 'ホ', romaji: 'ho' }
      ]},
      { row: 'M-Row (ま行)', kana: [
        { hira: 'ま', kata: 'マ', romaji: 'ma' },
        { hira: 'み', kata: 'ミ', romaji: 'mi' },
        { hira: 'む', kata: 'ム', romaji: 'mu' },
        { hira: 'め', kata: 'メ', romaji: 'me' },
        { hira: 'も', kata: 'モ', romaji: 'mo' }
      ]},
      { row: 'Y-Row (や行)', kana: [
        { hira: 'や', kata: 'ヤ', romaji: 'ya' },
        { hira: 'ゆ', kata: 'ユ', romaji: 'yu' },
        { hira: 'よ', kata: 'ヨ', romaji: 'yo' }
      ]},
      { row: 'R-Row (ら行)', kana: [
        { hira: 'ら', kata: 'ラ', romaji: 'ra' },
        { hira: 'り', kata: 'リ', romaji: 'ri' },
        { hira: 'る', kata: 'ル', romaji: 'ru' },
        { hira: 'れ', kata: 'レ', romaji: 're' },
        { hira: 'ろ', kata: 'ロ', romaji: 'ro' }
      ]},
      { row: 'W-Row & N (わ・を・ん)', kana: [
        { hira: 'わ', kata: 'ワ', romaji: 'wa' },
        { hira: 'を', kata: 'ヲ', romaji: 'wo (o)' },
        { hira: 'ん', kata: 'ン', romaji: 'n' }
      ]}
    ],

    dakuonRows: [
      { row: 'G-Row (が行 - Voiced K)', kana: [
        { hira: 'が', kata: 'ガ', romaji: 'ga' },
        { hira: 'ぎ', kata: 'ギ', romaji: 'gi' },
        { hira: 'ぐ', kata: 'グ', romaji: 'gu' },
        { hira: 'げ', kata: 'ゲ', romaji: 'ge' },
        { hira: 'ご', kata: 'ゴ', romaji: 'go' }
      ]},
      { row: 'Z-Row (ざ行 - Voiced S)', kana: [
        { hira: 'ざ', kata: 'ザ', romaji: 'za' },
        { hira: 'じ', kata: 'ジ', romaji: 'ji' },
        { hira: 'ず', kata: 'ズ', romaji: 'zu' },
        { hira: 'ぜ', kata: 'ゼ', romaji: 'ze' },
        { hira: 'ぞ', kata: 'ゾ', romaji: 'zo' }
      ]},
      { row: 'D-Row (だ行 - Voiced T)', kana: [
        { hira: 'だ', kata: 'ダ', romaji: 'da' },
        { hira: 'ぢ', kata: 'ヂ', romaji: 'ji (dji)' },
        { hira: 'づ', kata: 'ヅ', romaji: 'zu (dzu)' },
        { hira: 'で', kata: 'デ', romaji: 'de' },
        { hira: 'ど', kata: 'ド', romaji: 'do' }
      ]},
      { row: 'B-Row (ば行 - Voiced H)', kana: [
        { hira: 'ば', kata: 'バ', romaji: 'ba' },
        { hira: 'び', kata: 'ビ', romaji: 'bi' },
        { hira: 'ぶ', kata: 'ブ', romaji: 'bu' },
        { hira: 'べ', kata: 'ベ', romaji: 'be' },
        { hira: 'ぼ', kata: 'ボ', romaji: 'bo' }
      ]},
      { row: 'P-Row (ぱ行 - Semi-Voiced Handakuon)', kana: [
        { hira: 'ぱ', kata: 'パ', romaji: 'pa' },
        { hira: 'ぴ', kata: 'ピ', romaji: 'pi' },
        { hira: 'ぷ', kata: 'プ', romaji: 'pu' },
        { hira: 'ぺ', kata: 'ペ', romaji: 'pe' },
        { hira: 'ぽ', kata: 'ポ', romaji: 'po' }
      ]}
    ],

    youonCombinations: [
      { row: 'KYA / SHA / CHA', kana: [
        { hira: 'きゃ', romaji: 'kya' }, { hira: 'きゅ', romaji: 'kyu' }, { hira: 'きょ', romaji: 'kyo' },
        { hira: 'しゃ', romaji: 'sha' }, { hira: 'しゅ', romaji: 'shu' }, { hira: 'しょ', romaji: 'sho' },
        { hira: 'ちゃ', romaji: 'cha' }, { hira: 'ちゅ', romaji: 'chu' }, { hira: 'ちょ', romaji: 'cho' }
      ]},
      { row: 'NYA / HYA / MYA / RYA', kana: [
        { hira: 'にゃ', romaji: 'nya' }, { hira: 'にゅ', romaji: 'nyu' }, { hira: 'にょ', romaji: 'nyo' },
        { hira: 'ひゃ', romaji: 'hya' }, { hira: 'ひゅ', romaji: 'hyu' }, { hira: 'ひょ', romaji: 'hyo' },
        { hira: 'みゃ', romaji: 'mya' }, { hira: 'みゅ', romaji: 'myu' }, { hira: 'みょ', romaji: 'myo' },
        { hira: 'りゃ', romaji: 'rya' }, { hira: 'りゅ', romaji: 'ryu' }, { hira: 'りょ', romaji: 'ryo' }
      ]},
      { row: 'GYA / JA / BYA / PYA', kana: [
        { hira: 'ぎゃ', romaji: 'gya' }, { hira: 'ぎゅ', romaji: 'gyu' }, { hira: 'ぎょ', romaji: 'gyo' },
        { hira: 'じゃ', romaji: 'ja' },  { hira: 'じゅ', romaji: 'ju' },  { hira: 'じょ', romaji: 'jo' },
        { hira: 'びゃ', romaji: 'bya' }, { hira: 'びゅ', romaji: 'byu' }, { hira: 'びょ', romaji: 'byo' },
        { hira: 'ぴゃ', romaji: 'pya' }, { hira: 'ぴゅ', romaji: 'pyu' }, { hira: 'ぴょ', romaji: 'pyo' }
      ]}
    ]
  },

  // 3. Step-by-Step Foundation Vocabulary (120+ words with syllable breakdowns)
  vocabularyCategories: [
    {
      categoryId: 'greetings',
      categoryName: '1. Essential Daily Greetings & Manners',
      description: 'The golden keys to Japanese courtesy. Use these every day!',
      words: [
        { word: 'おはよう', reading: 'おはよう', romaji: 'ohayou', phonetic: 'oh-HAH-yoh', syllables: ['お', 'は', 'よ', 'う'], meaning: 'Good morning (casual)', pitch: 'Low ➔ High', tip: 'Use with close friends and family.' },
        { word: 'おはようございます', reading: 'おはようございます', romaji: 'ohayou gozaimasu', phonetic: 'oh-HAH-yoh goh-ZYE-mahs', syllables: ['お', 'は', 'よ', 'う', 'ご', 'ざ', 'い', 'ま', 'す'], meaning: 'Good morning (polite)', pitch: 'Polite cadence', tip: 'Used with teachers, coworkers, strangers.' },
        { word: 'こんにちは', reading: 'こんにちは', romaji: 'konnichiwa', phonetic: 'kohn-nee-chee-WAH', syllables: ['こ', 'ん', 'に', 'ち', 'は'], meaning: 'Hello / Good afternoon', pitch: 'Mid ➔ High ➔ Mid', tip: 'Note: ends with は, but pronounced "wa"!' },
        { word: 'こんばんは', reading: 'こんばんは', romaji: 'konbanwa', phonetic: 'kohn-bahn-WAH', syllables: ['こ', 'ん', 'ば', 'ん', 'は'], meaning: 'Good evening', pitch: 'Mid ➔ High ➔ Mid', tip: 'Used after dark.' },
        { word: 'さようなら', reading: 'さようなら', romaji: 'sayounara', phonetic: 'sah-yoh-NAH-rah', syllables: ['さ', 'よ', 'う', 'な', 'ら'], meaning: 'Goodbye (formal / long farewell)', pitch: 'Mid ➔ High', tip: 'For daily farewell, people often say またね (mata ne - see you).' },
        { word: 'ありがとう', reading: 'ありがとう', romaji: 'arigatou', phonetic: 'ah-ree-GAH-toh', syllables: ['あ', 'り', 'が', 'と', 'う'], meaning: 'Thank you (casual)', pitch: 'Low ➔ High', tip: 'Friendly thank you.' },
        { word: 'ありがとうございます', reading: 'ありがとうございます', romaji: 'arigatou gozaimasu', phonetic: 'ah-ree-GAH-toh goh-ZYE-mahs', syllables: ['あ', 'り', 'が', 'と', 'う', 'ご', 'ざ', 'い', 'ま', 'す'], meaning: 'Thank you very much (polite)', pitch: 'Polite cadence', tip: 'The standard polite way to express gratitude.' },
        { word: 'すみません', reading: 'すみません', romaji: 'sumimasen', phonetic: 'soo-mee-mah-SEN', syllables: ['す', 'み', 'ま', 'せ', 'ん'], meaning: 'Excuse me / I am sorry / Thank you', pitch: 'Mid ➔ High ➔ Mid', tip: 'Japan\'s #1 most useful survival phrase!' },
        { word: 'ごめんなさい', reading: 'ごめんなさい', romaji: 'gomennasai', phonetic: 'goh-men-nah-SYE', syllables: ['ご', 'め', 'ん', 'な', 'さ', 'い'], meaning: 'I am sorry (apology)', pitch: 'Low ➔ High', tip: 'Used for a sincere personal apology.' },
        { word: 'はい', reading: 'はい', romaji: 'hai', phonetic: 'hye (like "high")', syllables: ['は', 'い'], meaning: 'Yes / Understood / Here', pitch: 'High ➔ Low', tip: 'Also used to acknowledge you are listening.' },
        { word: 'いいえ', reading: 'いいえ', romaji: 'iie', phonetic: 'EE-eh', syllables: ['い', 'い', 'え'], meaning: 'No / You\'re welcome / Not at all', pitch: 'Mid ➔ High ➔ Low', tip: 'Can also politely decline praise.' },
        { word: 'いただきます', reading: 'いただきます', romaji: 'itadakimasu', phonetic: 'ee-tah-dah-kee-MAHS', syllables: ['い', 'た', 'だ', 'き', 'ま', 'す'], meaning: 'Let\'s eat / I humbly receive', pitch: 'Polite chant', tip: 'Said with hands together before meals.' },
        { word: 'ごちそうさまでした', reading: 'ごちそうさまでした', romaji: 'gochisousama deshita', phonetic: 'goh-chee-soh-SAH-mah DESH-tah', syllables: ['ご', 'ち', 'そ', 'う', 'さ', 'ま', 'で', 'し', 'た'], meaning: 'Thank you for the delicious meal', pitch: 'Polite chant', tip: 'Said after finishing eating.' },
        { word: 'はじめまして', reading: 'はじめまして', romaji: 'hajimemashite', phonetic: 'hah-jee-meh-MASH-teh', syllables: ['は', 'じ', 'め', 'ま', 'し', 'て'], meaning: 'Nice to meet you (first time)', pitch: 'Low ➔ High ➔ Mid', tip: 'Literally: "We are beginning our acquaintance."' },
        { word: 'よろしくお願いします', reading: 'よろしくおねがいします', romaji: 'yoroshiku onegaishimasu', phonetic: 'yoh-ROH-shee-koo oh-neh-guy-shee-MAHS', syllables: ['よ', 'ろ', 'し', 'く', 'お', 'ね', 'が', 'い', 'し', 'ま', 'す'], meaning: 'Please treat me favorably / Looking forward to working with you', pitch: 'Cadence', tip: 'Universal closing phrase in introductions.' }
      ]
    },

    {
      categoryId: 'numbers',
      categoryName: '2. Numbers & Counting (1 to 100)',
      description: 'Japanese numbers are beautifully logical! Once you master 1 to 10, counting to 99 is simple multiplication and addition.',
      words: [
        { word: '一 (いち)', reading: 'いち', romaji: 'ichi', phonetic: 'EE-chee', syllables: ['い', 'ち'], meaning: '1 (One)', pitch: 'High ➔ Low', tip: 'Base numeral 1' },
        { word: '二 (に)', reading: 'に', romaji: 'ni', phonetic: 'nee (like "knee")', syllables: ['に'], meaning: '2 (Two)', pitch: 'High', tip: 'Base numeral 2' },
        { word: '三 (さん)', reading: 'さん', romaji: 'san', phonetic: 'sahn', syllables: ['さ', 'ん'], meaning: '3 (Three)', pitch: 'High', tip: 'Base numeral 3' },
        { word: '四 (よん / し)', reading: 'よん', romaji: 'yon', phonetic: 'yohn', syllables: ['よ', 'ん'], meaning: '4 (Four)', pitch: 'High ➔ Low', tip: 'よん is preferred; し sounds like 死 (death).' },
        { word: '五 (ご)', reading: 'ご', romaji: 'go', phonetic: 'goh (like "go")', syllables: ['ご'], meaning: '5 (Five)', pitch: 'High', tip: 'Base numeral 5' },
        { word: '六 (ろく)', reading: 'ろく', romaji: 'roku', phonetic: 'ROH-koo', syllables: ['ろ', 'く'], meaning: '6 (Six)', pitch: 'Low ➔ High', tip: 'Base numeral 6' },
        { word: '七 (なな / しち)', reading: 'なな', romaji: 'nana', phonetic: 'NAH-nah', syllables: ['な', 'な'], meaning: '7 (Seven)', pitch: 'High ➔ Low', tip: 'なな is most common in daily life.' },
        { word: '八 (はち)', reading: 'はち', romaji: 'hachi', phonetic: 'HAH-chee', syllables: ['は', 'ち'], meaning: '8 (Eight)', pitch: 'Low ➔ High', tip: 'Base numeral 8' },
        { word: '九 (きゅう / く)', reading: 'きゅう', romaji: 'kyuu', phonetic: 'kyoo (like "cue")', syllables: ['き', 'ゅ', 'う'], meaning: '9 (Nine)', pitch: 'High ➔ Low', tip: 'Base numeral 9' },
        { word: '十 (じゅう)', reading: 'じゅう', romaji: 'juu', phonetic: 'joo (like "jewel")', syllables: ['じ', 'ゅ', 'う'], meaning: '10 (Ten)', pitch: 'High ➔ Low', tip: 'Building block: 11 is 十一 (juu-ichi), 20 is 二十 (ni-juu)!' },
        { word: '百 (ひゃく)', reading: 'ひゃく', romaji: 'hyaku', phonetic: 'HYAH-koo', syllables: ['ひ', 'ゃ', 'く'], meaning: '100 (Hundred)', pitch: 'Low ➔ High', tip: '100' },
        { word: '千 (せん)', reading: 'せん', romaji: 'sen', phonetic: 'sehn', syllables: ['せ', 'ん'], meaning: '1,000 (Thousand)', pitch: 'Low ➔ High', tip: '1,000' },
        { word: '万 (まん)', reading: 'まん', romaji: 'man', phonetic: 'mahn', syllables: ['ま', 'ん'], meaning: '10,000 (Ten thousand)', pitch: 'High ➔ Low', tip: 'Japanese counts in blocks of 10,000!' },
        { word: '円 (えん)', reading: 'えん', romaji: 'en', phonetic: 'ehn (like "yen")', syllables: ['え', 'ん'], meaning: 'Yen (currency)', pitch: 'High', tip: 'Pronounced "en" (not "yen" in Japanese).' }
      ]
    },

    {
      categoryId: 'food',
      categoryName: '3. Food & Beverages (食べ物と飲み物)',
      description: 'Order food with confidence in restaurants, convenience stores, and izakayas.',
      words: [
        { word: '水 (みず)', reading: 'みず', romaji: 'mizu', phonetic: 'MEE-zoo', syllables: ['み', 'ず'], meaning: 'Cold water', pitch: 'Low ➔ High', tip: 'Often called お水 (omizu) politely.' },
        { word: 'お茶 (おちゃ)', reading: 'おちゃ', romaji: 'ocha', phonetic: 'oh-CHAH', syllables: ['お', 'ち', 'ゃ'], meaning: 'Green tea / Tea', pitch: 'Low ➔ High', tip: 'Traditional Japanese tea.' },
        { word: 'ご飯 (ごはん)', reading: 'ごはん', romaji: 'gohan', phonetic: 'goh-HAHN', syllables: ['ご', 'は', 'ん'], meaning: 'Cooked rice / Meal', pitch: 'High ➔ Low', tip: '朝ご飯 (breakfast), 昼ご飯 (lunch), 晩ご飯 (dinner).' },
        { word: 'パン', reading: 'パン', romaji: 'pan', phonetic: 'pahn', syllables: ['パ', 'ン'], meaning: 'Bread', pitch: 'High', tip: 'Loanword from Portuguese pão.' },
        { word: '魚 (さかな)', reading: 'さかな', romaji: 'sakana', phonetic: 'sah-KAH-nah', syllables: ['さ', 'か', 'な'], meaning: 'Fish', pitch: 'Low ➔ High', tip: 'Staple of Japanese cuisine.' },
        { word: '肉 (にく)', reading: 'にく', romaji: 'niku', phonetic: 'NEE-koo', syllables: ['に', 'く'], meaning: 'Meat', pitch: 'Low ➔ High', tip: '牛肉 (beef), 豚肉 (pork), 鶏肉 (chicken).' },
        { word: '卵 (たまご)', reading: 'たまご', romaji: 'tamago', phonetic: 'tah-MAH-goh', syllables: ['た', 'ま', 'ご'], meaning: 'Egg', pitch: 'Low ➔ High', tip: 'Delicious over hot rice!' },
        { word: 'ラーメン', reading: 'ラーメン', romaji: 'raamen', phonetic: 'RAH-men', syllables: ['ラ', 'ー', 'メ', 'ン'], meaning: 'Ramen noodles', pitch: 'High ➔ Low', tip: 'Popular noodle soup.' },
        { word: '寿司 (すし)', reading: 'すし', romaji: 'sushi', phonetic: 'SOO-shee', syllables: ['す', 'し'], meaning: 'Sushi', pitch: 'High ➔ Low', tip: 'Vinegared rice with fresh fish.' },
        { word: 'コーヒー', reading: 'コーヒー', romaji: 'koohii', phonetic: 'KOH-hee', syllables: ['コ', 'ー', 'ヒ', 'ー'], meaning: 'Coffee', pitch: 'High ➔ Mid', tip: 'Both vowels are long: kō-hī.' },
        { word: '牛乳 (ぎゅうにゅう)', reading: 'ぎゅうにゅう', romaji: 'gyuunyuu', phonetic: 'gyoo-NYOO', syllables: ['ぎ', 'ゅ', 'う', 'に', 'ゅ', 'う'], meaning: 'Cow\'s milk', pitch: 'Low ➔ High', tip: 'Literally "cow milk".' },
        { word: 'りんご', reading: 'りんご', romaji: 'ringo', phonetic: 'REEN-goh', syllables: ['り', 'ん', 'ご'], meaning: 'Apple', pitch: 'High ➔ Low', tip: 'Common fruit in Japan.' }
      ]
    },

    {
      categoryId: 'people',
      categoryName: '4. People & Everyday Family (人と家族)',
      description: 'Talk about yourself, friends, and family with accurate respect levels.',
      words: [
        { word: '私 (わたし)', reading: 'わたし', romaji: 'watashi', phonetic: 'wah-TAH-shee', syllables: ['わ', 'た', 'し'], meaning: 'I / Me', pitch: 'Low ➔ High', tip: 'Standard polite pronoun for everyone.' },
        { word: 'あなた', reading: 'あなた', romaji: 'anata', phonetic: 'ah-NAH-tah', syllables: ['あ', 'な', 'た'], meaning: 'You', pitch: 'Low ➔ High', tip: 'In Japanese, prefer using person\'s name + さん instead of "anata"!' },
        { word: '友達 (ともだち)', reading: 'ともだち', romaji: 'tomodachi', phonetic: 'toh-moh-DAH-chee', syllables: ['と', 'も', 'だ', 'ち'], meaning: 'Friend', pitch: 'Low ➔ High', tip: 'Companion / friend.' },
        { word: '先生 (せんせい)', reading: 'せんせい', romaji: 'sensei', phonetic: 'sen-SAY', syllables: ['せ', 'ん', 'せ', 'い'], meaning: 'Teacher / Doctor / Professor', pitch: 'High ➔ Low', tip: 'Honorific title for masters and teachers.' },
        { word: '学生 (がくせい)', reading: 'がくせい', romaji: 'gakusei', phonetic: 'gahk-SAY', syllables: ['が', 'く', 'せ', 'い'], meaning: 'Student', pitch: 'Low ➔ High', tip: 'Learner / student.' },
        { word: '人 (ひと)', reading: 'ひと', romaji: 'hito', phonetic: 'HEE-toh', syllables: ['ひ', 'と'], meaning: 'Person / Human', pitch: 'Low ➔ High', tip: 'Generic person.' },
        { word: '父 (ちち)', reading: 'ちち', romaji: 'chichi', phonetic: 'CHEE-chee', syllables: ['ち', 'ち'], meaning: 'My father (humble)', pitch: 'High ➔ Low', tip: 'Use when speaking about YOUR father to others.' },
        { word: 'お父さん (おとうさん)', reading: 'おとうさん', romaji: 'otousan', phonetic: 'oh-TOH-sahn', syllables: ['お', 'と', 'う', 'さ', 'ん'], meaning: 'Someone else\'s father / Dad', pitch: 'Low ➔ High', tip: 'Polite honorific for fathers.' },
        { word: '母 (はは)', reading: 'はは', romaji: 'haha', phonetic: 'HAH-hah', syllables: ['は', 'は'], meaning: 'My mother (humble)', pitch: 'High ➔ Low', tip: 'Use when speaking about YOUR mother to others.' },
        { word: 'お母さん (おかあさん)', reading: 'おかあさん', romaji: 'okaasan', phonetic: 'oh-KAH-sahn', syllables: ['お', 'か', 'あ', 'さ', 'ん'], meaning: 'Someone else\'s mother / Mom', pitch: 'Low ➔ High', tip: 'Polite honorific for mothers.' },
        { word: '子供 (こども)', reading: 'こども', romaji: 'kodomo', phonetic: 'koh-DOH-moh', syllables: ['こ', 'ど', 'も'], meaning: 'Child / Children', pitch: 'Low ➔ High', tip: 'Child.' }
      ]
    },

    {
      categoryId: 'objects',
      categoryName: '5. Everyday Objects & Places (物と場所)',
      description: 'Objects around your desk, house, and neighborhood.',
      words: [
        { word: '本 (ほん)', reading: 'ほん', romaji: 'hon', phonetic: 'hohn', syllables: ['ほ', 'ん'], meaning: 'Book', pitch: 'High ➔ Low', tip: 'Book or booklet.' },
        { word: '車 (くるま)', reading: 'くるま', romaji: 'kuruma', phonetic: 'koo-ROO-mah', syllables: ['く', 'る', 'ま'], meaning: 'Car / Vehicle', pitch: 'Low ➔ High', tip: 'Automobile.' },
        { word: '電車 (でんしゃ)', reading: 'でんしゃ', romaji: 'densha', phonetic: 'DEN-shah', syllables: ['で', 'ん', 'し', 'ゃ'], meaning: 'Train', pitch: 'High ➔ Low', tip: 'Electric train.' },
        { word: '駅 (えき)', reading: 'えき', romaji: 'eki', phonetic: 'EH-kee', syllables: ['え', 'き'], meaning: 'Train station', pitch: 'High ➔ Low', tip: 'Key transportation hub.' },
        { word: '家 (いえ / うち)', reading: 'いえ', romaji: 'ie', phonetic: 'EE-eh', syllables: ['い', 'え'], meaning: 'House / Home', pitch: 'Low ➔ High', tip: 'Home sweet home.' },
        { word: '学校 (がっこう)', reading: 'がっこう', romaji: 'gakkou', phonetic: 'gahk-KOH', syllables: ['が', 'っ', 'こ', 'う'], meaning: 'School', pitch: 'Low ➔ High', tip: 'Notice small っ double consonant!' },
        { word: 'トイレ', reading: 'トイレ', romaji: 'toire', phonetic: 'TOY-reh', syllables: ['ト', 'イ', 'レ'], meaning: 'Restroom / Toilet', pitch: 'High ➔ Low', tip: 'Essential for survival.' },
        { word: '店 (みせ)', reading: 'みせ', romaji: 'mise', phonetic: 'MEE-seh', syllables: ['み', 'せ'], meaning: 'Shop / Store', pitch: 'Low ➔ High', tip: 'Shop or restaurant.' },
        { word: '部屋 (へや)', reading: 'へや', romaji: 'heya', phonetic: 'HEH-yah', syllables: ['へ', 'や'], meaning: 'Room', pitch: 'Low ➔ High', tip: 'Room.' },
        { word: '時計 (とけい)', reading: 'とけい', romaji: 'tokei', phonetic: 'toh-KAY', syllables: ['と', 'け', 'い'], meaning: 'Clock / Watch', pitch: 'Low ➔ High', tip: 'Timepiece.' },
        { word: 'お金 (おかね)', reading: 'おかね', romaji: 'okane', phonetic: 'oh-KAH-neh', syllables: ['お', 'か', 'ね'], meaning: 'Money', pitch: 'Low ➔ High', tip: 'Polite お + 金.' },
        { word: '携帯 (けいたい)', reading: 'けいたい', romaji: 'keitai', phonetic: 'kay-TYE', syllables: ['け', 'い', 'た', 'い'], meaning: 'Cell phone / Mobile', pitch: 'Low ➔ High', tip: 'Smartphone.' }
      ]
    },

    {
      categoryId: 'adjectives',
      categoryName: '6. Essential Adjectives (形容詞)',
      description: 'Describe flavors, sizes, feelings, and the weather.',
      words: [
        { word: '美味しい (おいしい)', reading: 'おいしい', romaji: 'oishii', phonetic: 'oy-SHEE', syllables: ['お', 'い', 'し', 'い'], meaning: 'Delicious / Tasty', pitch: 'Low ➔ High ➔ Mid', tip: 'Say this whenever tasting food in Japan!' },
        { word: '大きい (おおきい)', reading: 'おおきい', romaji: 'ookii', phonetic: 'oh-KEE', syllables: ['お', 'お', 'き', 'い'], meaning: 'Big / Large', pitch: 'Low ➔ High ➔ Mid', tip: 'Opposite of 小さい.' },
        { word: '小さい (ちいさい)', reading: 'ちいさい', romaji: 'chiisai', phonetic: 'chee-SYE', syllables: ['ち', 'い', 'さ', 'い'], meaning: 'Small / Tiny', pitch: 'Low ➔ High ➔ Mid', tip: 'Opposite of 大きい.' },
        { word: '高い (たかい)', reading: 'たかい', romaji: 'takai', phonetic: 'tah-KYE', syllables: ['た', 'か', 'い'], meaning: 'High / Tall / Expensive', pitch: 'Low ➔ High ➔ Mid', tip: 'Means both tall height and high price!' },
        { word: '安い (やすい)', reading: 'やすい', romaji: 'yasui', phonetic: 'yah-SOO-ee', syllables: ['や', 'す', 'い'], meaning: 'Cheap / Inexpensive', pitch: 'Low ➔ High', tip: 'Opposite of 高い (price).' },
        { word: '新しい (あたらしい)', reading: 'あたらしい', romaji: 'atarashii', phonetic: 'ah-tah-rah-SHEE', syllables: ['あ', 'た', 'ら', 'し', 'い'], meaning: 'New / Fresh', pitch: 'Low ➔ High ➔ Mid', tip: 'Opposite of 古い (old).' },
        { word: '楽しい (たのしい)', reading: 'たのしい', romaji: 'tanoshii', phonetic: 'tah-noh-SHEE', syllables: ['た', 'の', 'し', 'い'], meaning: 'Fun / Enjoyable', pitch: 'Low ➔ High ➔ Mid', tip: 'Expressing pleasure.' },
        { word: 'いい / よい', reading: 'いい', romaji: 'ii', phonetic: 'EE (like "see")', syllables: ['い', 'い'], meaning: 'Good / Fine', pitch: 'High ➔ Low', tip: 'Universal word for "good".' },
        { word: '暑い (あつい)', reading: 'あつい', romaji: 'atsui', phonetic: 'ah-TSOO-ee', syllables: ['あ', 'つ', 'い'], meaning: 'Hot (weather)', pitch: 'Low ➔ High', tip: 'Used for summer climate.' },
        { word: '寒い (さむい)', reading: 'さむい', romaji: 'samui', phonetic: 'sah-MOO-ee', syllables: ['さ', 'む', 'い'], meaning: 'Cold (weather)', pitch: 'Low ➔ High', tip: 'Used for winter climate.' }
      ]
    },

    {
      categoryId: 'verbs',
      categoryName: '7. Core Action Verbs (動詞)',
      description: 'The heartbeat of sentences. Here are the 10 most used verbs in polite -Masu form.',
      words: [
        { word: '食べます (たべます)', reading: 'たべます', romaji: 'tabemasu', phonetic: 'tah-beh-MAHS', syllables: ['た', 'べ', 'ま', 'す'], meaning: 'To eat', pitch: 'Low ➔ High ➔ Mid', tip: 'From dictionary 食べる.' },
        { word: '飲みます (のみます)', reading: 'のみます', romaji: 'nomimasu', phonetic: 'noh-mee-MAHS', syllables: ['の', 'み', 'ま', 'す'], meaning: 'To drink', pitch: 'Low ➔ High ➔ Mid', tip: 'From dictionary 飲む.' },
        { word: '行きます (いきます)', reading: 'いきます', romaji: 'ikimasu', phonetic: 'ee-kee-MAHS', syllables: ['い', 'き', 'ま', 'す'], meaning: 'To go', pitch: 'Low ➔ High ➔ Mid', tip: 'From dictionary 行く.' },
        { word: '来ます (きます)', reading: 'きます', romaji: 'kimasu', phonetic: 'kee-MAHS', syllables: ['き', 'ま', 'す'], meaning: 'To come', pitch: 'High ➔ Low', tip: 'From irregular 来る.' },
        { word: '見ます (みます)', reading: 'みます', romaji: 'mimasu', phonetic: 'mee-MAHS', syllables: ['み', 'ま', 'す'], meaning: 'To see / watch', pitch: 'High ➔ Low', tip: 'From dictionary 見る.' },
        { word: '聞きます (ききます)', reading: 'ききます', romaji: 'kikimasu', phonetic: 'kee-kee-MAHS', syllables: ['き', 'き', 'ま', 'す'], meaning: 'To hear / listen / ask', pitch: 'Low ➔ High ➔ Mid', tip: 'From dictionary 聞く.' },
        { word: '話します (はなします)', reading: 'はなします', romaji: 'hanashimasu', phonetic: 'hah-nah-shee-MAHS', syllables: ['は', 'な', 'し', 'ま', 'す'], meaning: 'To speak / talk', pitch: 'Low ➔ High ➔ Mid', tip: 'From dictionary 話す.' },
        { word: '買います (かいます)', reading: 'かいます', romaji: 'kaimasu', phonetic: 'kye-MAHS', syllables: ['か', 'い', 'ま', 'す'], meaning: 'To buy', pitch: 'Low ➔ High ➔ Mid', tip: 'From dictionary 買う.' },
        { word: '寝ます (ねます)', reading: 'ねます', romaji: 'nemasu', phonetic: 'neh-MAHS', syllables: ['ね', 'ま', 'す'], meaning: 'To sleep / go to bed', pitch: 'High ➔ Low', tip: 'From dictionary 寝る.' },
        { word: '起きます (おきます)', reading: 'おきます', romaji: 'okimasu', phonetic: 'oh-kee-MAHS', syllables: ['お', 'き', 'ま', 'す'], meaning: 'To wake up / get up', pitch: 'Low ➔ High ➔ Mid', tip: 'From dictionary 起きる.' }
      ]
    }
  ],

  // 4. Building Your Very First Sentences (SOV Architecture & Core Formulas)
  sentenceArchitecture: {
    syntaxExplanation: `
      In English, sentences follow <strong>SVO (Subject - Verb - Object)</strong>:
      <br><code>"I [Subject] + eat [Verb] + ramen [Object]"</code>
      <br><br>
      In Japanese, sentences strictly follow <strong>SOV (Subject - Object - VERB AT THE VERY END)</strong>:
      <br><code>"私 [I] + は [as for] + ラーメン [ramen] + を [object] + 食べます [eat]."</code>
      <br><br>
      The Japanese verb ALWAYS stands at the very end of the clause.
    `,

    coreFormulas: [
      {
        patternId: 'copula-identity',
        name: 'Pattern 1: "A is B" (Identity & Equivalence)',
        formula: '[Topic A] は [Noun B] です。',
        romajiFormula: '[A] wa [B] desu.',
        explanation: 'The most foundational pattern in the language. Particle 「は」(pronounced "wa") introduces the topic, and 「です」(desu) means "is / am / are".',
        examples: [
          {
            jp: '私は学生です。',
            romaji: 'Watashi wa gakusei desu.',
            en: 'I am a student.',
            literal: 'I [topic] student [am].',
            tokens: [
              { word: '私', reading: 'わたし', romaji: 'watashi', meaning: 'I' },
              { word: 'は', reading: 'wa', romaji: 'wa', meaning: 'as for (topic)' },
              { word: '学生', reading: 'がくせい', romaji: 'gakusei', meaning: 'student' },
              { word: 'です', reading: 'desu', romaji: 'desu', meaning: 'am / is' }
            ],
            tip: 'The final "u" in です is very quiet (pronounced almost like "des").'
          },
          {
            jp: 'これは本です。',
            romaji: 'Kore wa hon desu.',
            en: 'This is a book.',
            literal: 'This [topic] book [is].',
            tokens: [
              { word: 'これ', reading: 'これ', romaji: 'kore', meaning: 'this' },
              { word: 'は', reading: 'wa', romaji: 'wa', meaning: 'topic' },
              { word: '本', reading: 'ほん', romaji: 'hon', meaning: 'book' },
              { word: 'です', reading: 'desu', romaji: 'desu', meaning: 'is' }
            ]
          },
          {
            jp: '日本語は楽しいです。',
            romaji: 'Nihongo wa tanoshii desu.',
            en: 'Japanese is fun.',
            literal: 'Japanese [topic] fun [is].',
            tokens: [
              { word: '日本語', reading: 'にほんご', romaji: 'nihongo', meaning: 'Japanese language' },
              { word: 'は', reading: 'wa', romaji: 'wa', meaning: 'topic' },
              { word: '楽しい', reading: 'たのしい', romaji: 'tanoshii', meaning: 'fun' },
              { word: 'です', reading: 'desu', romaji: 'desu', meaning: 'is' }
            ]
          }
        ]
      },

      {
        patternId: 'question-ka',
        name: 'Pattern 2: Asking Questions with 「か」',
        formula: '[Statement] + か？',
        romajiFormula: '[Statement] + ka?',
        explanation: 'To turn any Japanese sentence into a polite question, simply append the particle 「か」(ka) to the end. No changing word order, no auxiliary verbs ("do/does")!',
        examples: [
          {
            jp: '学生ですか。',
            romaji: 'Gakusei desu ka.',
            en: 'Are you a student?',
            literal: 'Student [is] [?]',
            tokens: [
              { word: '学生', reading: 'がくせい', romaji: 'gakusei', meaning: 'student' },
              { word: 'です', reading: 'desu', romaji: 'desu', meaning: 'is/are' },
              { word: 'か', reading: 'ka', romaji: 'ka', meaning: '?' }
            ]
          },
          {
            jp: 'これは何ですか。',
            romaji: 'Kore wa nan desu ka.',
            en: 'What is this?',
            literal: 'This [topic] what [is] [?]',
            tokens: [
              { word: 'これ', reading: 'これ', romaji: 'kore', meaning: 'this' },
              { word: 'は', reading: 'wa', romaji: 'wa', meaning: 'topic' },
              { word: '何', reading: 'なん', romaji: 'nan', meaning: 'what' },
              { word: 'ですか', reading: 'desuka', romaji: 'desu ka', meaning: 'is it?' }
            ],
            tip: 'Number one question phrase when traveling in Japan!'
          },
          {
            jp: '元気ですか。',
            romaji: 'Genki desu ka.',
            en: 'How are you? / Are you energetic?',
            literal: 'Energetic / healthy [are you?]',
            tokens: [
              { word: '元気', reading: 'げんき', romaji: 'genki', meaning: 'healthy/energetic' },
              { word: 'ですか', reading: 'desuka', romaji: 'desu ka', meaning: 'are you?' }
            ]
          }
        ]
      },

      {
        patternId: 'negation',
        name: 'Pattern 3: "A is NOT B" (Negation)',
        formula: '[A] は [B] ではありません / じゃありません。',
        romajiFormula: '[A] wa [B] dewa arimasen / ja arimasen.',
        explanation: 'To say "is not", replace です with ではありません (formal) or じゃありません (conversational polite).',
        examples: [
          {
            jp: '私は先生じゃありません。',
            romaji: 'Watashi wa sensei ja arimasen.',
            en: 'I am not a teacher.',
            literal: 'I [topic] teacher [am not].',
            tokens: [
              { word: '私', reading: 'わたし', romaji: 'watashi', meaning: 'I' },
              { word: 'は', reading: 'wa', romaji: 'wa', meaning: 'topic' },
              { word: '先生', reading: 'せんせい', romaji: 'sensei', meaning: 'teacher' },
              { word: 'じゃありません', reading: 'ja arimasen', romaji: 'ja arimasen', meaning: 'is not' }
            ]
          },
          {
            jp: 'これは私の本ではありません。',
            romaji: 'Kore wa watashi no hon dewa arimasen.',
            en: 'This is not my book.',
            literal: 'This [topic] my book [is not].',
            tokens: [
              { word: 'これ', reading: 'これ', romaji: 'kore', meaning: 'this' },
              { word: 'は', reading: 'wa', romaji: 'wa', meaning: 'topic' },
              { word: '私の', reading: 'わたしの', romaji: 'watashi no', meaning: 'my' },
              { word: '本', reading: 'ほん', romaji: 'hon', meaning: 'book' },
              { word: 'ではありません', reading: 'dewa arimasen', romaji: 'dewa arimasen', meaning: 'is not' }
            ]
          }
        ]
      },

      {
        patternId: 'transitive-object',
        name: 'Pattern 4: Doing Actions on Objects with 「を」',
        formula: '[Object] を [Action Verb]。',
        romajiFormula: '[Object] o [Verb].',
        explanation: 'Particle 「を」(written "wo", pronounced "o") marks what or whom is receiving the action.',
        examples: [
          {
            jp: 'ご飯を食べます。',
            romaji: 'Gohan o tabemasu.',
            en: 'I eat rice / a meal.',
            literal: 'Rice [object] eat.',
            tokens: [
              { word: 'ご飯', reading: 'ごはん', romaji: 'gohan', meaning: 'meal/rice' },
              { word: 'を', reading: 'o', romaji: 'o', meaning: 'object marker' },
              { word: '食べます', reading: 'たべます', romaji: 'tabemasu', meaning: 'eat' }
            ]
          },
          {
            jp: 'お水を飲みます。',
            romaji: 'Omizu o nomimasu.',
            en: 'I drink water.',
            literal: 'Water [object] drink.',
            tokens: [
              { word: 'お水', reading: 'おみず', romaji: 'omizu', meaning: 'water' },
              { word: 'を', reading: 'o', romaji: 'o', meaning: 'object marker' },
              { word: '飲みます', reading: 'のみます', romaji: 'nomimasu', meaning: 'drink' }
            ]
          },
          {
            jp: '本を読みます。',
            romaji: 'Hon o yomimasu.',
            en: 'I read books.',
            literal: 'Book [object] read.',
            tokens: [
              { word: '本', reading: 'ほん', romaji: 'hon', meaning: 'book' },
              { word: 'を', reading: 'o', romaji: 'o', meaning: 'object marker' },
              { word: '読みます', reading: 'よみます', romaji: 'yomimasu', meaning: 'read' }
            ]
          }
        ]
      },

      {
        patternId: 'request-kudasai',
        name: 'Pattern 5: Polite Requests with 「ください」',
        formula: '[Item] を ください。',
        romajiFormula: '[Item] o kudasai.',
        explanation: 'The essential ordering phrase in restaurants and shops: "Please give me [X]".',
        examples: [
          {
            jp: 'お水をください。',
            romaji: 'Omizu o kudasai.',
            en: 'Water, please.',
            literal: 'Water [object] give me please.',
            tokens: [
              { word: 'お水', reading: 'おみず', romaji: 'omizu', meaning: 'water' },
              { word: 'を', reading: 'o', romaji: 'o', meaning: 'object' },
              { word: 'ください', reading: 'ください', romaji: 'kudasai', meaning: 'please give me' }
            ]
          },
          {
            jp: 'これをください。',
            romaji: 'Kore o kudasai.',
            en: 'Please give me this one (pointing at menu).',
            literal: 'This [object] please give me.',
            tokens: [
              { word: 'これ', reading: 'これ', romaji: 'kore', meaning: 'this' },
              { word: 'を', reading: 'o', romaji: 'o', meaning: 'object' },
              { word: 'ください', reading: 'ください', romaji: 'kudasai', meaning: 'please give me' }
            ]
          },
          {
            jp: 'お会計をお願いします。',
            romaji: 'Okaikei o onegaishimasu.',
            en: 'Check / Bill, please!',
            literal: 'The bill [object] I request.',
            tokens: [
              { word: 'お会計', reading: 'おかいけい', romaji: 'okaikei', meaning: 'the bill / check' },
              { word: 'を', reading: 'o', romaji: 'o', meaning: 'object' },
              { word: 'お願いします', reading: 'おねがいします', romaji: 'onegaishimasu', meaning: 'please' }
            ]
          }
        ]
      }
    ]
  },
  // =========================================================================
  // 6. Confusable Kana Twins Lab (The Most Commonly Confused Pairs)
  // =========================================================================
  confusableTwins: [
    {
      id: 'sa-ki',
      title: 'さ (sa) vs き (ki)',
      script: 'Hiragana',
      overview: 'One of the most notorious traps for beginners! Look closely at the horizontal bars across the main stem.',
      chars: [
        {
          char: 'さ',
          romaji: 'sa',
          strokes: 2,
          feature: 'ONLY ONE horizontal stroke',
          mnemonic: 'Think of "SA" as a "Single sword stroke" across the line.',
          audio: 'さ'
        },
        {
          char: 'き',
          romaji: 'ki',
          strokes: 3,
          feature: 'TWO horizontal strokes',
          mnemonic: 'Think of "KI" as a "Key" with TWO teeth across the stem!',
          audio: 'き'
        }
      ],
      keyDifference: 'き has TWO horizontal bars across the stem; さ has only ONE horizontal bar.',
      testQuestion: 'Which character has 2 horizontal bars and sounds like "Key"?',
      correctChar: 'き'
    },
    {
      id: 'wa-re-ne',
      title: 'わ (wa) vs れ (re) vs ね (ne)',
      script: 'Hiragana',
      overview: 'All three share the exact same left vertical line with a zig-zag. The right-hand side is where they diverge!',
      chars: [
        {
          char: 'わ',
          romaji: 'wa',
          strokes: 2,
          feature: 'Smooth round belly with NO tail',
          mnemonic: 'A white swan with a smooth round belly floating on Water.',
          audio: 'わ'
        },
        {
          char: 'れ',
          romaji: 're',
          strokes: 2,
          feature: 'Kicked-out flick tail at bottom right',
          mnemonic: 'A Runner (re) with their foot kicked back in a sprint!',
          audio: 'れ'
        },
        {
          char: 'ね',
          romaji: 'ne',
          strokes: 2,
          feature: 'Curled loop knot at the tail',
          mnemonic: 'A cat (neko) with its tail curled into a pretzel loop!',
          audio: 'ね'
        }
      ],
      keyDifference: 'わ is round and open. れ flicks outward like a foot. ね has a closed loop/knot at the end.',
      testQuestion: 'Which character ends in a curled loop like a cat\'s tail?',
      correctChar: 'ね'
    },
    {
      id: 'ha-ho',
      title: 'は (ha) vs ほ (ho)',
      script: 'Hiragana',
      overview: 'Almost identical shapes, but look at whether the vertical line breaks through the top bar.',
      chars: [
        {
          char: 'は',
          romaji: 'ha',
          strokes: 3,
          feature: 'Top is OPEN (line does NOT stick through)',
          mnemonic: 'Ha! The head is open to the sky like a person laughing "Ha-ha!".',
          audio: 'は'
        },
        {
          char: 'ほ',
          romaji: 'ho',
          strokes: 4,
          feature: 'Top has a ROOF / HAT capping the vertical line',
          mnemonic: 'Ho! A person wearing a warm winter Hat on their head.',
          audio: 'ほ'
        }
      ],
      keyDifference: 'ほ has an extra top roof stroke that covers the vertical line. は has an open top.',
      testQuestion: 'Which character wears a "hat" (horizontal cap) on top?',
      correctChar: 'ほ'
    },
    {
      id: 'ru-ro',
      title: 'る (ru) vs ろ (ro)',
      script: 'Hiragana',
      overview: 'Both look like the numeral 3, but one has a hidden treasure at the finish.',
      chars: [
        {
          char: 'る',
          romaji: 'ru',
          strokes: 1,
          feature: 'Bottom curls into a closed circle/loop',
          mnemonic: 'There is a precious Ruby (ru) inside the curled loop!',
          audio: 'る'
        },
        {
          char: 'ろ',
          romaji: 'ro',
          strokes: 1,
          feature: 'Bottom stays completely open (no loop)',
          mnemonic: 'Robbed! Someone stole the ruby, so the loop is gone (ro).',
          audio: 'ろ'
        }
      ],
      keyDifference: 'る ends with a small closed loop curl; ろ is completely open like a numeral 3.',
      testQuestion: 'Which character has the loop curled at the bottom?',
      correctChar: 'る'
    },
    {
      id: 'shi-tsu',
      title: 'シ (shi) vs ツ (tsu)',
      script: 'Katakana',
      overview: 'The famous Katakana optical illusion! The secret is the angle of strokes and the direction of the final sweep.',
      chars: [
        {
          char: 'シ',
          romaji: 'shi',
          strokes: 3,
          feature: 'Horizontal alignment; sweeps UPWARD from bottom',
          mnemonic: 'She (shi) looks UPWARD with a smiling face! Notice dots are aligned vertically.',
          audio: 'シ'
        },
        {
          char: 'ツ',
          romaji: 'tsu',
          strokes: 3,
          feature: 'Vertical alignment; sweeps DOWNWARD from top-right',
          mnemonic: 'A Tsunami (tsu) wave crashing DOWNWARD onto the shore! Dots are aligned horizontally.',
          audio: 'ツ'
        }
      ],
      keyDifference: 'シ strokes sweep upward (bottom-left to top-right); ツ strokes plunge downward (top-right to bottom-left).',
      testQuestion: 'Which Katakana character sweeps UPWARD from bottom-left to top-right?',
      correctChar: 'シ'
    },
    {
      id: 'so-n',
      title: 'ソ (so) vs ン (n)',
      script: 'Katakana',
      overview: 'Another pair of single-dot swoops. Look at the starting angle and sweep direction.',
      chars: [
        {
          char: 'ソ',
          romaji: 'so',
          strokes: 2,
          feature: 'Steep vertical slant; sweeps down from the top',
          mnemonic: 'Sewing needle (so) poking straight down into the fabric.',
          audio: 'ソ'
        },
        {
          char: 'ン',
          romaji: 'n',
          strokes: 2,
          feature: 'Gentle horizontal slant; sweeps UP from bottom-left',
          mnemonic: 'A person saying "Nnn..." looking up with a sly smirk.',
          audio: 'ン'
        }
      ],
      keyDifference: 'ソ starts from top and points steeply downward; ン starts from bottom-left and swoops upward.',
      testQuestion: 'Which Katakana is "n" with an upward swoop?',
      correctChar: 'ン'
    }
  ],

  // =========================================================================
  // 7. Survival Japanese Soundboard (20+ Instant 1-Click Essential Phrases)
  // =========================================================================
  survivalKit: [
    {
      category: '🤝 Essential Magic Words',
      desc: 'Master these 5 phrases and you can navigate 90% of daily interactions with polite grace.',
      phrases: [
        {
          jp: 'すみません',
          romaji: 'Sumimasen', phonetic: 'soo-mee-mah-SEN',
          en: 'Excuse me / I am sorry / Thank you',
          whenToUse: 'The ultimate Japanese magic word. Say it to call a waiter in a restaurant, apologize for bumping into someone, or thank someone who holds a door.',
          audio: 'すみません',
          slowAudio: 'す・み・ま・せ・ん'
        },
        {
          jp: 'ありがとうございます',
          romaji: 'Arigatou gozaimasu', phonetic: 'ah-ree-GAH-toh goh-ZYE-mahs',
          en: 'Thank you very much (polite)',
          whenToUse: 'Standard polite gratitude to shop staff, hotel clerks, colleagues, and strangers.',
          audio: 'ありがとうございます',
          slowAudio: 'あ・り・が・と・う・ご・ざ・い・ま・す'
        },
        {
          jp: 'お願いします',
          romaji: 'Onegaishimasu', phonetic: 'oh-neh-guy-shee-MAHS',
          en: 'Please (when asking for an item or service)',
          whenToUse: 'Attach to anything you want: "これ、お願いします" (This, please) or "お水、お願いします" (Water, please).',
          audio: 'おねがいします',
          slowAudio: 'お・ね・が・い・し・ま・す'
        },
        {
          jp: 'どういたしまして',
          romaji: 'Douitashimashite', phonetic: 'doh ee-tah-shee-MASH-teh',
          en: 'You are welcome',
          whenToUse: 'Polite standard reply when someone thanks you.',
          audio: 'どういたしまして',
          slowAudio: 'ど・う・い・た・し・ま・し・て'
        },
        {
          jp: '大丈夫です',
          romaji: 'Daijoubu desu', phonetic: 'dye-JOH-boo dess',
          en: 'I am okay / No thank you (polite decline)',
          whenToUse: 'The gentle, polite way to refuse a plastic bag, extra receipt, or refill without saying a harsh "No".',
          audio: 'だいじょうぶです',
          slowAudio: 'だ・い・じょ・う・ぶ・で・す'
        }
      ]
    },
    {
      category: '🍜 Food, Ordering & Cafe',
      desc: 'Never struggle in a Tokyo ramen bar, sushi counter, or cozy cafe.',
      phrases: [
        {
          jp: 'これをお願いします',
          romaji: 'Kore o onegaishimasu', phonetic: 'KOH-reh oh oh-neh-guy-shee-MAHS',
          en: 'This one, please (pointing at menu item)',
          whenToUse: 'You don\'t need to read Kanji! Just point at any picture on a menu and say this.',
          audio: 'これをおねがいします',
          slowAudio: 'こ・れ・を・お・ね・が・い・し・ま・す'
        },
        {
          jp: 'お水をください',
          romaji: 'Omizu o kudasai', phonetic: 'oh-MEE-zoo oh koo-dah-SYE',
          en: 'Water, please (free cold water in Japan)',
          whenToUse: 'Japanese restaurants provide free cold water (お冷 / ohiya). Ask for a refill with this phrase.',
          audio: 'おみずをください',
          slowAudio: 'お・み・ず・を・く・だ・さ・い'
        },
        {
          jp: 'お会計をお願いします',
          romaji: 'Okaikei o onegaishimasu', phonetic: 'oh-KYE-kay oh oh-neh-guy-shee-MAHS',
          en: 'Check / Bill, please',
          whenToUse: 'Say this to your server or at the register when you are ready to pay.',
          audio: 'おかいけいをおねがいします',
          slowAudio: 'お・か・い・け・い・を・お・ね・が・い・し・ま・す'
        },
        {
          jp: 'いただきます',
          romaji: 'Itadakimasu', phonetic: 'ee-tah-dah-kee-MAHS',
          en: 'Said right before dining ("I gratefully receive")',
          whenToUse: 'Clap hands together gently before your first bite to show gratitude for the food.',
          audio: 'いただきます',
          slowAudio: 'い・た・だ・き・ま・す'
        },
        {
          jp: 'ごちそうさまでした',
          romaji: 'Gochisousama deshita', phonetic: 'goh-chee-soh-SAH-mah DESH-tah',
          en: 'Thank you for the meal (said when finishing/leaving)',
          whenToUse: 'Say this to the chef or staff as you leave the restaurant to compliment the meal.',
          audio: 'ごちそうさまでした',
          slowAudio: 'ご・ち・そ・う・さ・ま・で・し・た'
        },
        {
          jp: 'おすすめは何ですか？',
          romaji: 'Osusume wa nan desu ka?', phonetic: 'oh-soo-soo-meh wah NAHN dess kah?',
          en: 'What is your recommendation?',
          whenToUse: 'Great way to discover the chef\'s best seasonal specialty.',
          audio: 'おすすめはなんですか',
          slowAudio: 'お・す・す・め・は・な・ん・で・す・か'
        }
      ]
    },
    {
      category: '🧭 Directions & Getting Help',
      desc: 'Ask for directions and find what you need with confidence.',
      phrases: [
        {
          jp: '英語が話せますか？',
          romaji: 'Eigo ga hanasemasu ka?', phonetic: 'AY-goh gah hah-nah-SEH-mahs kah?',
          en: 'Do you speak English?',
          whenToUse: 'Polite inquiry before switching to English.',
          audio: 'えいごがはなせますか',
          slowAudio: 'え・い・ご・が・は・な・せ・ま・す・か'
        },
        {
          jp: '日本語がわかりません',
          romaji: 'Nihongo ga wakarimasen', phonetic: 'nee-HOHN-goh gah wah-kah-ree-mah-SEN',
          en: 'I do not understand Japanese',
          whenToUse: 'When someone speaks too fast and you need to clarify your beginner status.',
          audio: 'にほんごがわかりません',
          slowAudio: 'に・ほ・ん・ご・が・わ・か・り・ま・せ・ん'
        },
        {
          jp: '駅はどこですか？',
          romaji: 'Eki wa doko desu ka?', phonetic: 'EH-kee wah DOH-koh dess kah?',
          en: 'Where is the train station?',
          whenToUse: 'Replace "駅 (eki)" with any landmark: "ホテル (hoteru)", "コンビニ (konbini)".',
          audio: 'えきはどこですか',
          slowAudio: 'え・き・は・ど・こ・で・す・か'
        },
        {
          jp: 'トイレはどこですか？',
          romaji: 'Toire wa doko desu ka?', phonetic: 'TOY-reh wah DOH-koh dess kah?',
          en: 'Where is the restroom?',
          whenToUse: 'Essential in train stations, department stores, and restaurants.',
          audio: 'トイレはどこですか',
          slowAudio: 'ト・イ・レ・は・ど・こ・で・す・か'
        },
        {
          jp: 'ゆっくり話してください',
          romaji: 'Yukkuri hanashite kudasai', phonetic: 'yook-KOO-ree hah-nahsh-teh koo-dah-SYE',
          en: 'Please speak slowly',
          whenToUse: 'Gentle request that immediately encourages native speakers to speak in easy, deliberate mora.',
          audio: 'ゆっくりはなしてください',
          slowAudio: 'ゆっ・く・り・は・な・し・て・く・だ・さ・い'
        },
        {
          jp: '助けてください',
          romaji: 'Tasukete kudasai', phonetic: 'tah-soo-KEH-teh koo-dah-SYE',
          en: 'Please help me! (Emergency)',
          whenToUse: 'Use during medical emergencies or urgent distress.',
          audio: 'たすけてください',
          slowAudio: 'た・す・け・て・く・だ・さ・い'
        }
      ]
    },
    {
      category: '💴 Shopping & Payment',
      desc: 'Smooth transactions in stores, tax-free shops, and registers.',
      phrases: [
        {
          jp: 'いくらですか？',
          romaji: 'Ikura desu ka?', phonetic: 'ee-KOO-rah dess kah?',
          en: 'How much is this?',
          whenToUse: 'Ask prices for unlabelled items or souvenirs in markets.',
          audio: 'いくらですか',
          slowAudio: 'い・く・ら・で・す・か'
        },
        {
          jp: 'カードは使えますか？',
          romaji: 'Kaado wa tsukaemasu ka?', phonetic: 'KAH-doh wah tsoo-kye-MAHS kah?',
          en: 'Can I use a credit card?',
          whenToUse: 'Check whether a shop accepts card vs cash.',
          audio: 'カードはつかえますか',
          slowAudio: 'カ・ー・ド・は・つ・か・え・ま・す・か'
        },
        {
          jp: '袋は要りません',
          romaji: 'Fukuro wa irimasen', phonetic: 'foo-koo-ROH wah ee-ree-mah-SEN',
          en: 'I do not need a bag (eco-friendly)',
          whenToUse: 'Say when the cashier asks if you want a shopping bag.',
          audio: 'ふくろはいりません',
          slowAudio: 'ふ・く・ろ・は・い・り・ま・せ・ん'
        },
        {
          jp: '免税できますか？',
          romaji: 'Menzei dekimasu ka?', phonetic: 'MEN-zay deh-kee-MAHS kah?',
          en: 'Is tax-free available?',
          whenToUse: 'For purchases over 5,000 yen in department stores and electronics shops.',
          audio: 'めんぜいできますか',
          slowAudio: 'め・ん・ぜ・い・で・き・ま・す・か'
        }
      ]
    }
  ],

  // =========================================================================
  // 8. Real-Life Interactive Dialogue Simulator (Roleplay Scenarios)
  // =========================================================================
  interactiveDialogues: [
    {
      id: 'konbini',
      title: '🏪 7-Eleven / Konbini (コンビニでお買い物)',
      desc: 'You grab an onigiri (rice ball) and a cold green tea. Practice the real cashier exchange!',
      avatar: '🏪',
      steps: [
        {
          speaker: 'clerk',
          name: '店員 (Cashier)',
          avatar: '🧑‍💼',
          jp: 'いらっしゃいませ！お弁当、温めますか？',
          romaji: 'Irasshaimase! Obentou, atatamemasu ka?', phonetic: 'ee-rahsh-shye-MAH-seh! oh-BEN-toh, ah-tah-tah-meh-MAHS kah?',
          en: 'Welcome! Would you like your meal heated up?',
          audio: 'いらっしゃいませ、おべんとうあたためますか'
        },
        {
          speaker: 'user',
          prompt: 'What should you say to heat it up?',
          choices: [
            { text: 'はい、お願いします。', romaji: 'Hai, onegaishimasu.', phonetic: 'hye, oh-neh-guy-shee-MAHS', en: 'Yes, please.', correct: true, feedback: '✨ Perfect polite response! The clerk will put it in the microwave.' },
            { text: '大丈夫です。', romaji: 'Daijoubu desu.', phonetic: 'dye-JOH-boo dess', en: 'I am okay (no thanks).', correct: true, feedback: '✨ Great! This politely declines heating.' },
            { text: 'いいえ、嫌いです。', romaji: 'Iie, kirai desu.', phonetic: 'EE-eh, kee-RYE dess', en: 'No, I hate it.', correct: false, feedback: '⚠️ Too aggressive! Just say "大丈夫です" (I am fine) instead.' }
          ]
        },
        {
          speaker: 'clerk',
          name: '店員 (Cashier)',
          avatar: '🧑‍💼',
          jp: '袋はご利用ですか？',
          romaji: 'Fukuro wa goriyou desu ka?', phonetic: 'foo-koo-ROH wah goh-ree-yoh DESH kah?',
          en: 'Would you like a shopping bag? (Usually 3–5 yen)',
          audio: 'ふくろはごりようですか'
        },
        {
          speaker: 'user',
          prompt: 'You have your own backpack and don\'t need a bag. How to reply?',
          choices: [
            { text: 'このままで大丈夫です。', romaji: 'Kono mama de daijoubu desu.', phonetic: 'KOH-noh MAH-mah deh dye-JOH-boo dess', en: 'Just like this is fine (no bag needed).', correct: true, feedback: '🌟 Extremely natural native expression! Staff love hearing this.' },
            { text: '袋をください。', romaji: 'Fukuro o kudasai.', phonetic: 'foo-koo-ROH oh koo-dah-SYE', en: 'Please give me a bag.', correct: true, feedback: 'Good request if you do need a bag.' },
            { text: '袋はどこですか。', romaji: 'Fukuro wa doko desu ka.', phonetic: 'foo-koo-ROH wah DOH-koh dess kah', en: 'Where is the bag?', correct: false, feedback: 'The clerk is asking if you want one, so answer yes or no!' }
          ]
        },
        {
          speaker: 'clerk',
          name: '店員 (Cashier)',
          avatar: '🧑‍💼',
          jp: 'かしこまりました。480円になります。',
          romaji: 'Kashikomarimashita. Yonhyaku hachijuu-en ni narimasu.', phonetic: 'kah-shee-koh-mah-ree-MASH-tah. YOHN-hyah-koo HAH-chee-joo ehn nee nah-ree-MAHS.',
          en: 'Understood. That will be 480 yen.',
          audio: 'かしこまりました、よんひゃくはちじゅうえんになります'
        }
      ]
    },
    {
      id: 'ramen',
      title: '🍜 Ordering at a Ramen Shop (ラーメン屋で注文)',
      desc: 'Step into a steaming noodle shop. Greet the chef and order your favorite bowl!',
      avatar: '🍜',
      steps: [
        {
          speaker: 'clerk',
          name: '店主 (Chef)',
          avatar: '👨‍🍳',
          jp: 'いらっしゃい！何名様ですか？',
          romaji: 'Irasshai! Nan-mei-sama desu ka?', phonetic: 'ee-RAHSH-shye! NAHN-may-sah-mah dess kah?',
          en: 'Welcome! How many people in your party?',
          audio: 'いらっしゃい、なんめいさまですか'
        },
        {
          speaker: 'user',
          prompt: 'You are dining alone. How do you say "One person"?',
          choices: [
            { text: '一人です。', romaji: 'Hitori desu.', phonetic: 'hee-TOH-ree dess', en: 'One person.', correct: true, feedback: '🎯 Correct! "Hitori" is the counter for one person.' },
            { text: '一匹です。', romaji: 'Ippiki desu.', phonetic: 'eep-PEE-kee dess', en: 'One animal.', correct: false, feedback: '⚠️ "Piki" is for small animals (cats, dogs), not humans!' },
            { text: '一つです。', romaji: 'Hitotsu desu.', phonetic: 'hee-TOH-tsoo dess', en: 'One object.', correct: false, feedback: '⚠️ "Hitotsu" is for inanimate things. For people, use "一人 (Hitori)".' }
          ]
        },
        {
          speaker: 'clerk',
          name: '店主 (Chef)',
          avatar: '👨‍🍳',
          jp: 'カウンターへどうぞ！ご注文はお決まりですか？',
          romaji: 'Kauntaa e douzo! Gochuumon wa okimari desu ka?', phonetic: 'kown-TAH eh DOH-zoh! goh-CHOO-mohn wah oh-kee-mah-ree DESS kah?',
          en: 'Please have a seat at the counter! Are you ready to order?',
          audio: 'カウンターへどうぞ、ごちゅうもんはおきまりですか'
        },
        {
          speaker: 'user',
          prompt: 'You want to order Tonkotsu Ramen. What is the polite sentence?',
          choices: [
            { text: '豚骨ラーメンを一つ、お願いします。', romaji: 'Tonkotsu raamen o hitotsu, onegaishimasu.', phonetic: 'tohn-KOH-tsoo RAH-men oh hee-TOH-tsoo, oh-neh-guy-shee-MAHS', en: 'One Tonkotsu ramen, please.', correct: true, feedback: '🍜 Flawless ordering blueprint! [Item] を [Count], お願いします.' },
            { text: '豚骨ラーメンを食べたいです！', romaji: 'Tonkotsu raamen o tabetai desu!', phonetic: 'tohn-KOH-tsoo RAH-men oh tah-beh-TYE dess!', en: 'I want to eat Tonkotsu ramen!', correct: true, feedback: 'Expresses your desire, but "お願いします" is much more common when ordering.' },
            { text: 'ラーメンは誰ですか？', romaji: 'Raamen wa dare desu ka?', en: 'Who is the ramen?', correct: false, feedback: '⚠️ That means "Who is the ramen?". Use [Item] を お願いします instead.' }
          ]
        }
      ]
    },
    {
      id: 'directions',
      title: '🧭 Asking for Directions (道を聞く)',
      desc: 'Lost near the bustling Shibuya crossing? Ask a friendly local for the train station.',
      avatar: '🧭',
      steps: [
        {
          speaker: 'user',
          prompt: 'How do you politely catch someone\'s attention on the street?',
          choices: [
            { text: 'すみません、駅はどこですか？', romaji: 'Sumimasen, eki wa doko desu ka?', phonetic: 'soo-mee-mah-SEN, EH-kee wah DOH-koh dess kah?', en: 'Excuse me, where is the station?', correct: true, feedback: '✨ Ideal opener! Starts with "すみません" and asks location with "〜はどこですか".' },
            { text: 'おい！駅に行け！', romaji: 'Oi! Eki ni ike!', phonetic: 'oy! EH-kee nee EE-keh!', en: 'Hey! Go to the station!', correct: false, feedback: '⚠️ Extremely rude command. Always start with "すみません"!' },
            { text: '駅がありますか？', romaji: 'Eki ga arimasu ka?', phonetic: 'EH-kee gah ah-ree-MAHS kah?', en: 'Does a station exist?', correct: false, feedback: 'Grammatically okay, but asking "どこですか" (where is it) gets you actual directions.' }
          ]
        },
        {
          speaker: 'clerk',
          name: '通行人 (Pedestrian)',
          avatar: '🚶',
          jp: 'あそこです。この道をまっすぐ行って、右に曲がってください。',
          romaji: 'Asoko desu. Kono michi o massugu itte, migi ni magatte kudasai.', phonetic: 'ah-SOH-koh dess. KOH-noh MEE-chee oh mahs-SOO-goo EET-teh, MEE-gee nee mah-GAHT-teh koo-dah-SYE.',
          en: 'It is over there. Go straight along this street, then turn right.',
          audio: 'あそこです、このみちをまっすぐいって、みぎにまがってください'
        },
        {
          speaker: 'user',
          prompt: 'How do you thank them sincerely?',
          choices: [
            { text: 'ありがとうございます！助かりました。', romaji: 'Arigatou gozaimasu! Taskarimashita.', phonetic: 'ah-ree-GAH-toh goh-ZYE-mahs! tah-skah-ree-MASH-tah.', en: 'Thank you very much! You saved me.', correct: true, feedback: '🌸 Warm, polite and heartwarming native gratitude.' },
            { text: 'どういたしまして。', romaji: 'Douitashimashite.', phonetic: 'doh ee-tah-shee-MASH-teh.', en: 'You are welcome.', correct: false, feedback: '⚠️ They helped you, so you shouldn\'t say "you\'re welcome"!' }
          ]
        }
      ]
    },
    {
      id: 'intro',
      title: '🤝 First Self-Introduction (初めての自己紹介)',
      desc: 'Meeting a Japanese language exchange partner or classmate for the first time.',
      avatar: '🤝',
      steps: [
        {
          speaker: 'clerk',
          name: '佐藤さん (Sato-san)',
          avatar: '👩',
          jp: '初めまして！佐藤です。どうぞよろしくお願いします。',
          romaji: 'Hajimemashite! Sato desu. Douzo yoroshiku onegaishimasu.', phonetic: 'hah-jee-meh-MASH-teh! SAH-toh dess. DOH-zoh yoh-ROH-shee-koo oh-neh-guy-shee-MAHS.',
          en: 'Nice to meet you! I am Sato. Pleased to make your acquaintance.',
          audio: 'はじめまして、さとうです、どうぞよろしくおねがいします'
        },
        {
          speaker: 'user',
          prompt: 'How do you introduce yourself in return?',
          choices: [
            { text: '初めまして！[名前] です。こちらこそ、よろしくお願いします！', romaji: 'Hajimemashite! [Name] desu. Kochira koso, yoroshiku onegaishimasu!', phonetic: 'hah-jee-meh-MASH-teh! [NAH-mah-eh] dess. koh-CHEE-rah KOH-soh, yoh-ROH-shee-koo oh-neh-guy-shee-MAHS!', en: 'Nice to meet you! I am [Name]. Likewise, a pleasure!', correct: true, feedback: '🎉 Textbook perfection! "Kochira koso" politely returns the sentiment.' },
            { text: '私の名前は秘密です。', romaji: 'Watashi no namae wa himitsu desu.', phonetic: 'wah-TAH-shee noh NAH-mah-eh wah hee-MEE-tsoo dess.', en: 'My name is a secret.', correct: false, feedback: 'A bit mysterious for a self-introduction!' }
          ]
        }
      ]
    }
  ],

  // =========================================================================
  // 9. Interactive Sentence Builder Workshop (Slot Machine Blueprint)
  // =========================================================================
  sentenceBuilderStudio: {
    title: 'Interactive Sentence Blueprint Workshop',
    desc: 'Assemble real Japanese SOV sentences by tapping subjects, locations, objects, and verbs. Watch the sentence synthesize in real-time with instant audio!',
    slots: [
      {
        id: 'subject',
        name: '誰が (Who)',
        particle: 'は',
        particleMeaning: 'topic marker',
        options: [
          { jp: '私', reading: 'わたし', romaji: 'Watashi', phonetic: 'wah-TAH-shee', en: 'I', audio: 'わたし' },
          { jp: '田中さん', reading: 'たなかさん', romaji: 'Tanaka-san', phonetic: 'tah-NAH-kah-sahn', en: 'Mr. Tanaka', audio: 'たなかさん' },
          { jp: '友だち', reading: 'ともだち', romaji: 'Tomodachi', phonetic: 'toh-moh-DAH-chee', en: 'My friend', audio: 'ともだち' },
          { jp: '猫', reading: 'ねこ', romaji: 'Neko', phonetic: 'NEH-koh', en: 'The cat', audio: 'ねこ' }
        ]
      },
      {
        id: 'place',
        name: 'どこで (Where)',
        particle: 'で',
        particleMeaning: 'location of action',
        options: [
          { jp: 'カフェ', reading: 'カフェ', romaji: 'kafe', phonetic: 'KAH-feh', en: 'at the cafe', audio: 'カフェ' },
          { jp: '家', reading: 'いえ', romaji: 'ie', phonetic: 'EE-eh', en: 'at home', audio: 'いえ' },
          { jp: '学校', reading: 'がっこう', romaji: 'gakkou', phonetic: 'gahk-KOH', en: 'at school', audio: 'がっこう' },
          { jp: '公園', reading: 'こうえん', romaji: 'kouen', phonetic: 'KOH-ehn', en: 'at the park', audio: 'こうえん' }
        ]
      },
      {
        id: 'object',
        name: '何を (What)',
        particle: 'を',
        particleMeaning: 'direct object marker',
        options: [
          { jp: 'コーヒー', reading: 'コーヒー', romaji: 'koohii', phonetic: 'KOH-hee', en: 'coffee', audio: 'コーヒー' },
          { jp: '寿司', reading: 'すし', romaji: 'sushi', phonetic: 'SOO-shee', en: 'sushi', audio: 'すし' },
          { jp: '本', reading: 'ほん', romaji: 'hon', phonetic: 'hohn', en: 'a book', audio: 'ほん' },
          { jp: '日本語', reading: 'にほんご', romaji: 'nihongo', phonetic: 'nee-HOHN-goh', en: 'Japanese', audio: 'にほんご' }
        ]
      },
      {
        id: 'verb',
        name: 'どうする (Action Verb)',
        particle: '',
        particleMeaning: 'main action at the end',
        options: [
          { jp: '飲みます', reading: 'のみます', romaji: 'nomimasu', phonetic: 'noh-mee-MAHS', en: 'drinks', audio: 'のみます' },
          { jp: '食べます', reading: 'たべます', romaji: 'tabemasu', phonetic: 'tah-beh-MAHS', en: 'eats', audio: 'たべます' },
          { jp: '読みます', reading: 'よみます', romaji: 'yomimasu', phonetic: 'yoh-mee-MAHS', en: 'reads', audio: 'よみます' },
          { jp: '勉強します', reading: 'べんきょうします', romaji: 'benkyou shimasu', phonetic: 'ben-KYOH shee-MAHS', en: 'studies', audio: 'べんきょうします' }
        ]
      }
    ]
  }

};
