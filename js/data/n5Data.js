/**
 * JLPT N5 Curriculum Data:
 * Kanji, Vocabulary, Particles, Verb Conjugation, Survival Phrases, Reading Passages, and Quizzes.
 */

window.N5_DATA = {
  level: 'N5',
  title: 'JLPT N5: Beginner Foundations',
  description: 'Master the fundamentals: Hiragana & Katakana, core sentence particles, basic verb conjugations, and essential survival conversation.',
  stats: {
    targetKanji: 103,
    targetVocab: 800,
    targetGrammar: 40
  },

  kanji: [
    {
      char: '日',
      meaning: 'Day, Sun, Japan',
      onyomi: ['ニチ', 'ジツ'],
      kunyomi: ['ひ', '-び', '-か'],
      strokes: 4,
      mnemonic: 'A window frame opening up to the radiant sun.',
      guideStrokes: [
        [{x: 95, y: 70}, {x: 95, y: 235}],
        [{x: 95, y: 70}, {x: 205, y: 70}, {x: 205, y: 235}],
        [{x: 95, y: 150}, {x: 205, y: 150}],
        [{x: 95, y: 235}, {x: 205, y: 235}]
      ],
      compounds: [
        { word: '日本', reading: 'にほん', meaning: 'Japan' },
        { word: '今日', reading: 'きょう', meaning: 'Today' },
        { word: '日曜日', reading: 'にちようび', meaning: 'Sunday' }
      ]
    },
    {
      char: '月',
      meaning: 'Moon, Month',
      onyomi: ['ゲツ', 'ガツ'],
      kunyomi: ['つき'],
      strokes: 4,
      mnemonic: 'A crescent moon peeking through the clouds with two evening stars.',
      guideStrokes: [
        [{x: 105, y: 65}, {x: 85, y: 235}],
        [{x: 105, y: 65}, {x: 195, y: 65}, {x: 195, y: 235}, {x: 165, y: 220}],
        [{x: 100, y: 125}, {x: 195, y: 125}],
        [{x: 95, y: 175}, {x: 195, y: 175}]
      ],
      compounds: [
        { word: '月曜日', reading: 'げつようび', meaning: 'Monday' },
        { word: '今月', reading: 'こんげつ', meaning: 'This month' },
        { word: '一月', reading: 'いちがつ', meaning: 'January' }
      ]
    },
    {
      char: '木',
      meaning: 'Tree, Wood',
      onyomi: ['ボク', 'モク'],
      kunyomi: ['き', 'こ-'],
      strokes: 4,
      mnemonic: 'A tall tree trunk with widespread branches and deep roots.',
      guideStrokes: [
        [{x: 75, y: 120}, {x: 225, y: 120}],
        [{x: 150, y: 60}, {x: 150, y: 235}],
        [{x: 150, y: 120}, {x: 85, y: 215}],
        [{x: 150, y: 120}, {x: 215, y: 215}]
      ],
      compounds: [
        { word: '木曜日', reading: 'もくようび', meaning: 'Thursday' },
        { word: '木', reading: 'き', meaning: 'Tree / Wood' }
      ]
    },
    {
      char: '山',
      meaning: 'Mountain',
      onyomi: ['サン', 'セン'],
      kunyomi: ['やま'],
      strokes: 3,
      mnemonic: 'Three distinct mountain peaks rising into the sky.',
      guideStrokes: [
        [{x: 150, y: 55}, {x: 150, y: 235}],
        [{x: 85, y: 115}, {x: 85, y: 235}, {x: 215, y: 235}],
        [{x: 215, y: 115}, {x: 215, y: 235}]
      ],
      compounds: [
        { word: '富士山', reading: 'ふじさん', meaning: 'Mount Fuji' },
        { word: '火山', reading: 'かざん', meaning: 'Volcano' },
        { word: '山道', reading: 'やまみち', meaning: 'Mountain path' }
      ]
    },
    {
      char: '川',
      meaning: 'River, Stream',
      onyomi: ['セン'],
      kunyomi: ['かわ'],
      strokes: 3,
      mnemonic: 'Three flowing streams of water coursing in parallel.',
      guideStrokes: [
        [{x: 85, y: 75}, {x: 75, y: 215}],
        [{x: 145, y: 95}, {x: 145, y: 195}],
        [{x: 205, y: 65}, {x: 205, y: 235}]
      ],
      compounds: [
        { word: '小川', reading: 'おがわ', meaning: 'Stream, brook' },
        { word: '川岸', reading: 'かわぎし', meaning: 'Riverbank' }
      ]
    },
    {
      char: '人',
      meaning: 'Person, Human',
      onyomi: ['ジン', 'ニン'],
      kunyomi: ['ひと'],
      strokes: 2,
      mnemonic: 'A human standing tall on two legs moving forward.',
      guideStrokes: [
        [{x: 155, y: 65}, {x: 85, y: 235}],
        [{x: 135, y: 135}, {x: 215, y: 235}]
      ],
      compounds: [
        { word: '日本人', reading: 'にほんじん', meaning: 'Japanese person' },
        { word: '外国人', reading: 'がいこくじん', meaning: 'Foreigner' },
        { word: '大人', reading: 'おとな', meaning: 'Adult' }
      ]
    },
    {
      char: '口',
      meaning: 'Mouth, Opening, Gate',
      onyomi: ['コウ', 'ク'],
      kunyomi: ['くち'],
      strokes: 3,
      mnemonic: 'An open mouth or entrance passage.',
      guideStrokes: [
        [{x: 90, y: 80}, {x: 90, y: 220}],
        [{x: 90, y: 80}, {x: 210, y: 80}, {x: 210, y: 220}],
        [{x: 90, y: 220}, {x: 215, y: 220}]
      ],
      compounds: [
        { word: '入口', reading: 'いりぐち', meaning: 'Entrance' },
        { word: '出口', reading: 'でぐち', meaning: 'Exit' },
        { word: '改札口', reading: 'かいさつぐち', meaning: 'Ticket barrier' }
      ]
    },
    {
      char: '車',
      meaning: 'Car, Vehicle, Wheel',
      onyomi: ['シャ'],
      kunyomi: ['くるま'],
      strokes: 7,
      mnemonic: 'A cart or carriage viewed from above with axle and wheels.',
      guideStrokes: [
        [{x: 85, y: 85}, {x: 215, y: 85}],
        [{x: 95, y: 120}, {x: 95, y: 175}],
        [{x: 95, y: 120}, {x: 205, y: 120}, {x: 205, y: 175}],
        [{x: 95, y: 150}, {x: 205, y: 150}],
        [{x: 95, y: 175}, {x: 205, y: 175}],
        [{x: 70, y: 205}, {x: 230, y: 205}],
        [{x: 150, y: 55}, {x: 150, y: 245}]
      ],
      compounds: [
        { word: '電車', reading: 'でんしゃ', meaning: 'Train' },
        { word: '自動車', reading: 'じどうしゃ', meaning: 'Automobile' },
        { word: '自転車', reading: 'じてんしゃ', meaning: 'Bicycle' }
      ]
    },
    {
      char: '学',
      meaning: 'Study, Learning, Science',
      onyomi: ['ガク'],
      kunyomi: ['まな・ぶ'],
      strokes: 8,
      mnemonic: 'A child (子) under a roof receiving knowledge spark droplets.',
      guideStrokes: [
        [{x: 105, y: 65}, {x: 115, y: 95}],
        [{x: 145, y: 60}, {x: 155, y: 90}],
        [{x: 195, y: 65}, {x: 175, y: 95}],
        [{x: 80, y: 110}, {x: 105, y: 135}],
        [{x: 105, y: 115}, {x: 205, y: 115}, {x: 190, y: 135}],
        [{x: 145, y: 140}, {x: 105, y: 175}, {x: 185, y: 175}],
        [{x: 145, y: 175}, {x: 145, y: 240}, {x: 115, y: 220}],
        [{x: 85, y: 200}, {x: 215, y: 200}]
      ],
      compounds: [
        { word: '学生', reading: 'がくせい', meaning: 'Student' },
        { word: '大学', reading: 'だいがく', meaning: 'University' },
        { word: '学校', reading: 'がっこう', meaning: 'School' }
      ]
    },
    {
      char: '校',
      meaning: 'School, Exam',
      onyomi: ['コウ'],
      kunyomi: [],
      strokes: 10,
      mnemonic: 'Wooden (木) school building where交 (exchange) of minds happens.',
      guideStrokes: [
        [{x: 65, y: 110}, {x: 125, y: 110}],
        [{x: 95, y: 65}, {x: 95, y: 235}],
        [{x: 95, y: 115}, {x: 65, y: 195}],
        [{x: 95, y: 135}, {x: 125, y: 185}],
        [{x: 170, y: 65}, {x: 170, y: 95}],
        [{x: 135, y: 105}, {x: 225, y: 100}],
        [{x: 175, y: 115}, {x: 145, y: 165}],
        [{x: 185, y: 115}, {x: 215, y: 165}],
        [{x: 180, y: 165}, {x: 140, y: 235}],
        [{x: 175, y: 170}, {x: 225, y: 235}]
      ],
      compounds: [
        { word: '学校', reading: 'がっこう', meaning: 'School' },
        { word: '高校', reading: 'こうこう', meaning: 'High school' },
        { word: '校長', reading: 'こうちょう', meaning: 'Principal' }
      ]
    }
  ],

  vocabulary: [
    { word: '私', reading: 'わたし', romaji: 'watashi', meaning: 'I, me', pitch: 'Heiban (Flat)', audioKey: 'わたし', example: '私は学生です。(I am a student.)' },
    { word: '先生', reading: 'せんせい', romaji: 'sensei', meaning: 'Teacher, professor, doctor', pitch: 'Atamadaka', audioKey: 'せんせい', example: '先生、質問があります。(Teacher, I have a question.)' },
    { word: '友達', reading: 'ともだち', romaji: 'tomodachi', meaning: 'Friend', pitch: 'Heiban', audioKey: 'ともだち', example: '友達と一緒に映画を見ました。(I watched a movie with my friend.)' },
    { word: '水', reading: 'みず', romaji: 'mizu', meaning: 'Cold water', pitch: 'Heiban', audioKey: 'みず', example: 'お水をください。(Please give me water.)' },
    { word: '食べる', reading: 'たべる', romaji: 'taberu', meaning: 'To eat', pitch: 'Nakadaka', audioKey: 'たべる', example: '朝ご飯を食べましたか。(Did you eat breakfast?)' },
    { word: '飲む', reading: 'のむ', romaji: 'nomu', meaning: 'To drink', pitch: 'Atamadaka', audioKey: 'のむ', example: '温かいお茶を飲みます。(I drink warm tea.)' },
    { word: '行く', reading: 'いく', romaji: 'iku', meaning: 'To go', pitch: 'Heiban', audioKey: 'いく', example: '明日、東京へ行きます。(I will go to Tokyo tomorrow.)' },
    { word: '来る', reading: 'くる', romaji: 'kuru', meaning: 'To come', pitch: 'Atamadaka', audioKey: 'くる', example: '友達が家に来ました。(My friend came to my house.)' },
    { word: '見る', reading: 'みる', romaji: 'miru', meaning: 'To see, to watch', pitch: 'Atamadaka', audioKey: 'みる', example: 'きれいな富士山を見ました。(I saw beautiful Mt. Fuji.)' },
    { word: '本', reading: 'ほん', romaji: 'hon', meaning: 'Book', pitch: 'Atamadaka', audioKey: 'ほん', example: '日本語の本を読みます。(I read a Japanese book.)' },
    { word: '時間', reading: 'じかん', romaji: 'jikan', meaning: 'Time, hours', pitch: 'Heiban', audioKey: 'じかん', example: '時間がありません。(I have no time.)' },
    { word: '大きい', reading: 'おおきい', romaji: 'ookii', meaning: 'Big, large', pitch: 'Nakadaka', audioKey: 'おおきい', example: '大きい犬がいます。(There is a big dog.)' },
    { word: '小さい', reading: 'ちいさい', romaji: 'chiisai', meaning: 'Small, little', pitch: 'Nakadaka', audioKey: 'ちいさい', example: '小さいカバンを買いました。(I bought a small bag.)' },
    { word: '美味しい', reading: 'おいしい', romaji: 'oishii', meaning: 'Delicious, tasty', pitch: 'Nakadaka', audioKey: 'おいしい', example: 'このラーメンはとても美味しいです。(This ramen is very delicious.)' },
    { word: '今日', reading: 'きょう', romaji: 'kyou', meaning: 'Today', pitch: 'Atamadaka', audioKey: 'きょう', example: '今日はいい天気ですね。(It is nice weather today.)' }
  ],

  particles: [
    {
      particle: 'は',
      romaji: 'wa (written ha)',
      role: 'Topic Marker',
      explanation: 'Introduces the topic or overarching theme of the sentence ("As for X..."). It can also mark contrast.',
      formula: '[Topic] は [Comment / Predicate]',
      examples: [
        { jp: '私<rt>わたし</rt>は<ruby>留学生<rt>りゅうがくせい</rt></ruby>です。', en: 'As for me, I am an international student.' },
        { jp: '肉<rt>にく</rt>は<ruby>食<rt>た</rt></ruby>べますが、<ruby>魚<rt>さかな</rt></ruby>は<ruby>食<rt>た</rt></ruby>べません。', en: 'I eat meat, but (in contrast) I do not eat fish.' }
      ],
      tip: 'Never confuse は with が. は sets the spotlight on what comes AFTER it; が highlights the subject itself.'
    },
    {
      particle: 'が',
      romaji: 'ga',
      role: 'Subject Marker / Identifier / But',
      explanation: 'Identifies the specific grammatical subject of an action or description, often answering "WHO" or "WHICH ONE". Also marks existence verbs (ある/いる) and adjectives.',
      formula: '[Subject] が [Verb / Adjective]',
      examples: [
        { jp: '誰<rt>だれ</rt>が<ruby>来<rt>き</rt></ruby>ましたか。田中<rt>たなか</rt>さんが<ruby>来<rt>き</rt></ruby>ました。', en: 'Who came? Tanaka-san came (Tanaka is the one who came).' },
        { jp: '猫<rt>ねこ</rt>が<ruby>好<rt>す</rt></ruby>きです。', en: 'I like cats (Cats are pleasing).' }
      ],
      tip: 'With words like 好き (like), 上手 (skilled), 分かる (understand), and 欲しい (want), Japanese uses が rather than を!'
    },
    {
      particle: 'を',
      romaji: 'o (written wo)',
      role: 'Direct Object Marker',
      explanation: 'Marks the recipient of a transitive action—what or whom is being acted upon.',
      formula: '[Object] を [Transitive Verb]',
      examples: [
        { jp: 'パンを<ruby>食<rt>た</rt></ruby>べました。', en: 'I ate bread.' },
        { jp: '日本語<rt>にほんご</rt>を<ruby>勉強<rt>べんきょう</rt></ruby>します。', en: 'I study Japanese.' }
      ],
      tip: 'を is also used for passing through or leaving spaces: 公園を散歩する (walk through the park).'
    },
    {
      particle: 'に',
      romaji: 'ni',
      role: 'Target, Specific Time, Destination',
      explanation: 'Pins down a precise point in time, a specific destination of movement, or the recipient of giving.',
      formula: '[Time / Location / Target] に [Verb]',
      examples: [
        { jp: '七時<rt>しちじ</rt>に<ruby>起<rt>お</rt></ruby>きます。', en: 'I wake up at 7 o\'clock.' },
        { jp: '東京<rt>とうきょう</rt>に<ruby>行<rt>い</rt></ruby>きます。', en: 'I am going to Tokyo.' },
        { jp: '友達<rt>ともだち</rt>にプレゼントをあげました。', en: 'I gave a present to my friend.' }
      ],
      tip: 'Only use に with specific calendar/clock times (7時に, 月曜日に). Do NOT use に with relative times like 今日 (today) or 明日 (tomorrow).'
    },
    {
      particle: 'で',
      romaji: 'de',
      role: 'Action Location, Means, Tool, Instrument',
      explanation: 'Specifies WHERE an active event occurs, or HOW (by what tool, vehicle, or language) something is done.',
      formula: '[Place / Tool / Means] で [Action Verb]',
      examples: [
        { jp: '図書館<rt>としょかん</rt>で<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>みます。', en: 'I read books at the library (active location).' },
        { jp: '箸<rt>はし</rt>でラーメンを<ruby>食<rt>た</rt></ruby>べます。', en: 'I eat ramen with chopsticks (instrument).' },
        { jp: '電車<rt>でんしゃ</rt>で<ruby>行<rt>い</rt></ruby>きました。', en: 'I went by train (means of transport).' }
      ],
      tip: 'Contrast: 東京に住んでいます (living in Tokyo = state = に) vs 東京で働いています (working in Tokyo = action = で).'
    },
    {
      particle: 'へ',
      romaji: 'e (written he)',
      role: 'Direction of Movement',
      explanation: 'Emphasizes the direction heading towards a destination ("toward"). Often interchangeable with に for motion verbs, but carries a poetic nuance of the voyage/journey.',
      formula: '[Direction] へ [Movement Verb]',
      examples: [
        { jp: '日本<rt>にほん</rt>へようこそ！', en: 'Welcome to Japan! (heading towards Japan)' },
        { jp: '家<rt>うち</rt>へ<ruby>帰<rt>かえ</rt></ruby>ります。', en: 'I am returning towards home.' }
      ],
      tip: 'Pronounced "e", written as the kana へ (he).'
    }
  ],

  verbConjugations: [
    {
      group: 'Group 1: Godan (Five-Row Verbs)',
      rule: 'Dictionary form ends in -u (-ku, -su, -tsu, -nu, -bu, -mu, -ru). To form polite Masu, change final -u to -i and add ます.',
      samples: [
        { dict: '書く (kaku)', masu: '書きます (kakimasu)', te: '書いて (kaite)', nai: '書かない (kakanai)', meaning: 'To write' },
        { dict: '話す (hanasu)', masu: '話します (hanashimasu)', te: '話して (hanashite)', nai: '話さない (hanasanai)', meaning: 'To speak' },
        { dict: '待つ (matsu)', masu: '待ちます (machimasu)', te: '待って (matte)', nai: '待たない (matanai)', meaning: 'To wait' },
        { dict: '飲む (nomu)', masu: '飲みます (nomimasu)', te: '飲んで (nonde)', nai: '飲まない (nomanai)', meaning: 'To drink' }
      ]
    },
    {
      group: 'Group 2: Ichidan (One-Row Verbs)',
      rule: 'Verbs ending in -iru or -eru preceded by an /i/ or /e/ sound. Drop -ru and attach ます or て directly.',
      samples: [
        { dict: '食べる (taberu)', masu: '食べます (tabemasu)', te: '食べて (tabete)', nai: '食べない (tabenai)', meaning: 'To eat' },
        { dict: '見る (miru)', masu: '見ます (mimasu)', te: '見て (mite)', nai: '見ない (minai)', meaning: 'To watch/see' },
        { dict: '起きる (okiru)', masu: '起きます (okimasu)', te: '起きて (okite)', nai: '起きない (okinai)', meaning: 'To wake up' },
        { dict: '教える (oshieru)', masu: '教えます (oshiemasu)', te: '教えて (oshiete)', nai: '教えない (oshienai)', meaning: 'To teach' }
      ]
    },
    {
      group: 'Group 3: Irregular Verbs (Only two!)',
      rule: 'The only two irregular Japanese verbs: する (to do) and 来る (to come). Memorize their unique transformations.',
      samples: [
        { dict: 'する (suru)', masu: 'します (shimasu)', te: 'して (shite)', nai: 'しない (shinai)', meaning: 'To do' },
        { dict: '来る (kuru)', masu: '来ます (kimasu)', te: '来て (kite)', nai: '来ない (konai)', meaning: 'To come' },
        { dict: '勉強する (benkyousuru)', masu: '勉強します', te: '勉強して', nai: '勉強しない', meaning: 'To study' }
      ]
    }
  ],

  survivalPhrases: [
    { jp: 'おはようございます', romaji: 'Ohayou gozaimasu', en: 'Good morning (Polite)', note: 'Used until ~10:30 AM.' },
    { jp: 'こんにちは', romaji: 'Konnichiwa', en: 'Hello / Good afternoon', note: 'Standard midday greeting with acquaintances.' },
    { jp: 'こんばんは', romaji: 'Konbanwa', en: 'Good evening', note: 'Used after nightfall.' },
    { jp: 'すみません', romaji: 'Sumimasen', en: 'Excuse me / Sorry / Thank you for kindness', note: 'The Swiss army knife of Japanese courtesy!' },
    { jp: 'ありがとうございます', romaji: 'Arigatou gozaimasu', en: 'Thank you very much (polite present)', note: 'For ongoing or future favors.' },
    { jp: 'いくらですか', romaji: 'Ikura desu ka', en: 'How much is it?', note: 'Point at an item in a shop: これ、いくらですか。' },
    { jp: 'これをください', romaji: 'Kore o kudasai', en: 'Please give me this one', note: 'Used when ordering food or purchasing goods.' },
    { jp: 'トイレはどこですか', romaji: 'Toire wa doko desu ka', en: 'Where is the restroom?', note: 'Lifesaver phrase in stations and restaurants.' },
    { jp: '日本語が少し話せます', romaji: 'Nihongo ga sukoshi hanasemasu', en: 'I can speak a little Japanese', note: 'Sets polite, friendly expectations.' },
    { jp: 'もう一度お願いします', romaji: 'Mou ichido onegaishimasu', en: 'Once more, please', note: 'Ask native speakers to repeat gently.' }
  ],

  readingPassage: {
    title: '田中さんの日曜日 (Tanaka-san\'s Sunday)',
    textHtml: `
      <p>
        <ruby>田中<rt>たなか</rt></ruby>さんは<ruby>学生<rt>がくせい</rt></ruby>です。
        <ruby>日曜日<rt>にちようび</rt></ruby>の<ruby>朝<rt>あさ</rt></ruby>、<ruby>八時<rt>はちじ</rt></ruby>に<ruby>起<rt>お</rt></ruby>きます。
        それから、<ruby>朝<rt>あさ</rt></ruby>ご飯にパンと<ruby>卵<rt>たまご</rt></ruby>を<ruby>食<rt>た</rt></ruby>べます。
        そして、<ruby>温<rt>あたた</rt></ruby>かいコーヒーを<ruby>飲<rt>の</rt></ruby>みます。
      </p>
      <p>
        <ruby>午後<rt>ごご</rt></ruby>、<ruby>友達<rt>ともだち</rt></ruby>と<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>図書館<rt>としょかん</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。
        <ruby>図書館<rt>としょかん</rt></ruby>で<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>します。
        <ruby>夕方<rt>ゆうがた</rt></ruby>、<ruby>電車<rt>でんしゃ</rt></ruby>で<ruby>家<rt>うち</rt></ruby>へ<ruby>帰<rt>かえ</rt></ruby>ります。
        とても<ruby>楽<rt>たの</rt></ruby>しい<ruby>一日<rt>いちにち</rt></ruby>でした。
      </p>
    `,
    questions: [
      {
        question: '田中さんは何時に起きますか。',
        options: ['七時', '八時', '九時', '十時'],
        correctIndex: 1,
        explanation: 'The text states: 八時に起きます (He wakes up at 8 o\'clock).'
      },
      {
        question: '田中さんは図書館で何をしますか。',
        options: ['コーヒーを飲みます', 'パンを食べます', '日本語を勉強します', '映画を見ます'],
        correctIndex: 2,
        explanation: 'The passage says: 図書館で日本語を勉強します (Studies Japanese at the library).'
      }
    ]
  },

  quizQuestions: [
    {
      type: 'multiple-choice',
      prompt: 'Select the correct particle for the blank: 私 ___ 日本語を勉強します。',
      options: ['は', 'を', 'に', 'で'],
      correctIndex: 0,
      explanation: '「は」 marks the topic ("As for me..."). The object is already marked by を.'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which verb conjugation is the correct Te-form of「飲む」(nomu - to drink)?',
      options: ['飲みて', '飲んで', '飲って', '飲して'],
      correctIndex: 1,
      explanation: 'Godan verbs ending in む (mu), ぶ (bu), or ぬ (nu) change to んで in Te-form: 飲む → 飲んで.'
    },
    {
      type: 'audio-prompt',
      audioText: 'すみません、トイレはどこですか。',
      prompt: 'Listen to the audio clip. What is the speaker asking for?',
      options: ['Where the train station is', 'Where the restroom is', 'What time it is', 'How much the bill is'],
      correctIndex: 1,
      explanation: 'The phrase トイレはどこですか translates directly to "Where is the restroom?".'
    },
    {
      type: 'unscramble',
      prompt: 'Reconstruct the sentence: "I went to Tokyo by train yesterday."',
      tokens: ['昨日、', '電車で', '東京へ', '行きました。'],
      correctOrder: ['昨日、', '電車で', '東京へ', '行きました。'],
      explanation: 'Standard Japanese SOV order: Time (昨日) + Means (電車で) + Direction (東京へ) + Verb (行きました).'
    },
    {
      type: 'fill-in-blank',
      prompt: '毎朝、七時 ___ 起きます。',
      options: ['で', 'に', 'を', 'は'],
      correctIndex: 1,
      explanation: 'Specific clock times require the particle に (七時に).'
    }
  ]
};
