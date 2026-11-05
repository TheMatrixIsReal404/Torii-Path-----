/**
 * JLPT N4 Curriculum Data: Upper Beginner
 * Potential, Conditional, Passive, Giving/Receiving (Ageru, Kureru, Morau),
 * Kanji, Vocabulary, Conversational Listening, Reading Passage, Quizzes.
 */

window.N4_DATA = {
  level: 'N4',
  title: 'JLPT N4: Upper Beginner',
  description: 'Bridge everyday expression: Master potential, conditional, and passive forms alongside the nuanced directional giving/receiving verbs (あげる, くれる, もらう).',
  stats: {
    targetKanji: 300,
    targetVocab: 1500,
    targetGrammar: 80
  },

  kanji: [
    {
      char: '毎',
      meaning: 'Every',
      onyomi: ['マイ'],
      kunyomi: ['ごと'],
      strokes: 6,
      mnemonic: 'A mother (母) carrying a baby every single day.',
      guideStrokes: [
        [{x: 135, y: 65}, {x: 105, y: 105}],
        [{x: 105, y: 105}, {x: 195, y: 105}],
        [{x: 100, y: 135}, {x: 95, y: 235}],
        [{x: 95, y: 140}, {x: 205, y: 140}, {x: 200, y: 225}, {x: 175, y: 215}],
        [{x: 145, y: 140}, {x: 145, y: 220}],
        [{x: 80, y: 180}, {x: 220, y: 180}]
      ],
      compounds: [
        { word: '毎日', reading: 'まいにち', meaning: 'Every day' },
        { word: '毎週', reading: 'まいしゅう', meaning: 'Every week' },
        { word: '毎月', reading: 'まいつき', meaning: 'Every month' }
      ]
    },
    {
      char: '友',
      meaning: 'Friend, Companion',
      onyomi: ['ユウ'],
      kunyomi: ['とも'],
      strokes: 4,
      mnemonic: 'Two right hands clasped in handshake of friendship.',
      guideStrokes: [
        [{x: 85, y: 100}, {x: 215, y: 95}],
        [{x: 165, y: 65}, {x: 85, y: 225}],
        [{x: 105, y: 145}, {x: 195, y: 145}, {x: 125, y: 225}],
        [{x: 110, y: 165}, {x: 215, y: 235}]
      ],
      compounds: [
        { word: '友達', reading: 'ともだち', meaning: 'Friend' },
        { word: '友人', reading: 'ゆうじん', meaning: 'Friend (more formal)' },
        { word: '親友', reading: 'しんゆう', meaning: 'Best friend' }
      ]
    },
    {
      char: '新',
      meaning: 'New, Fresh',
      onyomi: ['シン'],
      kunyomi: ['あたら・しい', 'あら・た'],
      strokes: 13,
      mnemonic: 'Cutting a standing tree (木) with an axe (斤) to build something new.',
      guideStrokes: [
        [{x: 105, y: 65}, {x: 105, y: 95}],
        [{x: 75, y: 105}, {x: 140, y: 100}],
        [{x: 85, y: 130}, {x: 130, y: 130}],
        [{x: 80, y: 155}, {x: 135, y: 155}],
        [{x: 105, y: 105}, {x: 105, y: 235}],
        [{x: 105, y: 165}, {x: 70, y: 225}],
        [{x: 105, y: 175}, {x: 140, y: 225}],
        [{x: 185, y: 65}, {x: 155, y: 105}],
        [{x: 155, y: 110}, {x: 215, y: 105}],
        [{x: 165, y: 115}, {x: 165, y: 235}],
        [{x: 205, y: 115}, {x: 205, y: 235}],
        [{x: 165, y: 170}, {x: 205, y: 170}],
        [{x: 165, y: 235}, {x: 205, y: 235}]
      ],
      compounds: [
        { word: '新しい', reading: 'あたらしい', meaning: 'New' },
        { word: '新聞', reading: 'しんぶん', meaning: 'Newspaper' },
        { word: '新年', reading: 'しんねん', meaning: 'New Year' }
      ]
    },
    {
      char: '聞',
      meaning: 'Hear, Listen, Ask',
      onyomi: ['ブン', 'モン'],
      kunyomi: ['き・く', 'き・こえる'],
      strokes: 14,
      mnemonic: 'An ear (耳) pressed against the gate (門) to listen.',
      guideStrokes: [
        [{x: 75, y: 75}, {x: 75, y: 230}],
        [{x: 75, y: 75}, {x: 115, y: 75}, {x: 115, y: 125}],
        [{x: 75, y: 100}, {x: 115, y: 100}],
        [{x: 75, y: 125}, {x: 115, y: 125}],
        [{x: 185, y: 70}, {x: 185, y: 120}],
        [{x: 185, y: 70}, {x: 225, y: 70}, {x: 225, y: 230}, {x: 205, y: 215}],
        [{x: 185, y: 95}, {x: 225, y: 95}],
        [{x: 185, y: 120}, {x: 225, y: 120}],
        [{x: 115, y: 140}, {x: 185, y: 140}],
        [{x: 135, y: 140}, {x: 135, y: 230}],
        [{x: 165, y: 140}, {x: 165, y: 230}],
        [{x: 135, y: 170}, {x: 165, y: 170}],
        [{x: 135, y: 195}, {x: 165, y: 195}],
        [{x: 115, y: 230}, {x: 185, y: 230}]
      ],
      compounds: [
        { word: '新聞', reading: 'しんぶん', meaning: 'Newspaper' },
        { word: '聞こえる', reading: 'きこえる', meaning: 'Can be heard' },
        { word: '聞き手', reading: 'ききて', meaning: 'Listener' }
      ]
    },
    {
      char: '週',
      meaning: 'Week',
      onyomi: ['シュウ'],
      kunyomi: [],
      strokes: 11,
      mnemonic: 'A journey (road radical ⻌) that takes a complete revolution of 7 days.',
      guideStrokes: [
        [{x: 130, y: 65}, {x: 185, y: 65}],
        [{x: 135, y: 65}, {x: 135, y: 180}],
        [{x: 185, y: 65}, {x: 185, y: 180}],
        [{x: 135, y: 100}, {x: 185, y: 100}],
        [{x: 145, y: 115}, {x: 145, y: 155}],
        [{x: 145, y: 115}, {x: 175, y: 115}, {x: 175, y: 155}],
        [{x: 145, y: 155}, {x: 175, y: 155}],
        [{x: 80, y: 85}, {x: 100, y: 105}],
        [{x: 75, y: 125}, {x: 95, y: 145}],
        [{x: 75, y: 165}, {x: 100, y: 165}, {x: 80, y: 215}],
        [{x: 80, y: 215}, {x: 215, y: 215}]
      ],
      compounds: [
        { word: '先週', reading: 'せんしゅう', meaning: 'Last week' },
        { word: '今週', reading: 'こんしゅう', meaning: 'This week' },
        { word: '来週', reading: 'らいしゅう', meaning: 'Next week' }
      ]
    },
    {
      char: '飲',
      meaning: 'Drink',
      onyomi: ['イン'],
      kunyomi: ['の・む'],
      strokes: 12,
      mnemonic: 'Food radical (飠) combined with yawning/open mouth (欠): drinking liquid down.',
      guideStrokes: [
        [{x: 90, y: 65}, {x: 110, y: 85}],
        [{x: 80, y: 100}, {x: 125, y: 100}],
        [{x: 100, y: 100}, {x: 75, y: 155}],
        [{x: 75, y: 155}, {x: 125, y: 155}],
        [{x: 75, y: 180}, {x: 125, y: 180}],
        [{x: 80, y: 160}, {x: 80, y: 235}],
        [{x: 120, y: 160}, {x: 120, y: 235}],
        [{x: 175, y: 65}, {x: 150, y: 115}],
        [{x: 150, y: 115}, {x: 215, y: 115}],
        [{x: 165, y: 120}, {x: 145, y: 235}],
        [{x: 175, y: 145}, {x: 220, y: 235}],
        [{x: 140, y: 235}, {x: 215, y: 235}]
      ],
      compounds: [
        { word: '飲み物', reading: 'のみもの', meaning: 'Beverage' },
        { word: '飲食店', reading: 'いんしょくてん', meaning: 'Restaurant / Eatery' }
      ]
    },
    {
      char: '買',
      meaning: 'Buy, Purchase',
      onyomi: ['バイ'],
      kunyomi: ['か・う'],
      strokes: 12,
      mnemonic: 'Shellfish radical (貝, ancient currency) under a market net.',
      guideStrokes: [
        [{x: 80, y: 80}, {x: 80, y: 115}],
        [{x: 80, y: 80}, {x: 220, y: 80}, {x: 220, y: 115}],
        [{x: 115, y: 80}, {x: 115, y: 115}],
        [{x: 150, y: 80}, {x: 150, y: 115}],
        [{x: 185, y: 80}, {x: 185, y: 115}],
        [{x: 95, y: 130}, {x: 95, y: 205}],
        [{x: 95, y: 130}, {x: 205, y: 130}, {x: 205, y: 205}],
        [{x: 95, y: 155}, {x: 205, y: 155}],
        [{x: 95, y: 180}, {x: 205, y: 180}],
        [{x: 95, y: 205}, {x: 205, y: 205}],
        [{x: 120, y: 215}, {x: 95, y: 245}],
        [{x: 180, y: 215}, {x: 205, y: 245}]
      ],
      compounds: [
        { word: '買い物', reading: 'かいもの', meaning: 'Shopping' },
        { word: '買い手', reading: 'かいて', meaning: 'Buyer' }
      ]
    },
    {
      char: '帰',
      meaning: 'Return, Go home',
      onyomi: ['キ'],
      kunyomi: ['かえ・る', 'かえ・す'],
      strokes: 10,
      mnemonic: 'Carrying a broom home after a long journey to clean house.',
      guideStrokes: [
        [{x: 95, y: 65}, {x: 75, y: 105}],
        [{x: 75, y: 105}, {x: 115, y: 105}, {x: 105, y: 145}],
        [{x: 90, y: 145}, {x: 90, y: 235}],
        [{x: 150, y: 65}, {x: 195, y: 65}],
        [{x: 135, y: 95}, {x: 215, y: 95}],
        [{x: 135, y: 125}, {x: 215, y: 125}],
        [{x: 135, y: 155}, {x: 215, y: 155}],
        [{x: 135, y: 185}, {x: 215, y: 185}],
        [{x: 140, y: 95}, {x: 140, y: 215}],
        [{x: 210, y: 95}, {x: 210, y: 215}]
      ],
      compounds: [
        { word: '帰国', reading: 'きこく', meaning: 'Return to one\'s country' },
        { word: '帰り道', reading: 'かえりみち', meaning: 'Way back home' }
      ]
    },
    {
      char: '待',
      meaning: 'Wait, Depend on',
      onyomi: ['タイ'],
      kunyomi: ['ま・つ'],
      strokes: 9,
      mnemonic: 'Standing on the road (彳) waiting at the Buddhist temple (寺).',
      guideStrokes: [
        [{x: 85, y: 65}, {x: 65, y: 105}],
        [{x: 85, y: 115}, {x: 65, y: 165}],
        [{x: 75, y: 155}, {x: 75, y: 235}],
        [{x: 115, y: 95}, {x: 215, y: 95}],
        [{x: 165, y: 65}, {x: 165, y: 135}],
        [{x: 105, y: 135}, {x: 225, y: 135}],
        [{x: 145, y: 155}, {x: 185, y: 155}],
        [{x: 165, y: 135}, {x: 165, y: 235}, {x: 135, y: 215}],
        [{x: 195, y: 175}, {x: 215, y: 195}]
      ],
      compounds: [
        { word: '待合室', reading: 'まちあいしつ', meaning: 'Waiting room' },
        { word: '期待', reading: 'きたい', meaning: 'Expectation' }
      ]
    },
    {
      char: '話',
      meaning: 'Talk, Story, Conversation',
      onyomi: ['ワ'],
      kunyomi: ['はな・す', 'はなし'],
      strokes: 13,
      mnemonic: 'Words (言) shaped by the tongue (舌) into speech.',
      guideStrokes: [
        [{x: 80, y: 65}, {x: 100, y: 85}],
        [{x: 65, y: 95}, {x: 115, y: 95}],
        [{x: 70, y: 120}, {x: 110, y: 120}],
        [{x: 70, y: 145}, {x: 110, y: 145}],
        [{x: 65, y: 175}, {x: 65, y: 225}],
        [{x: 65, y: 175}, {x: 115, y: 175}, {x: 115, y: 225}],
        [{x: 65, y: 225}, {x: 115, y: 225}],
        [{x: 175, y: 65}, {x: 145, y: 105}],
        [{x: 135, y: 115}, {x: 225, y: 115}],
        [{x: 175, y: 115}, {x: 175, y: 165}],
        [{x: 145, y: 170}, {x: 145, y: 230}],
        [{x: 145, y: 170}, {x: 215, y: 170}, {x: 215, y: 230}],
        [{x: 145, y: 230}, {x: 215, y: 230}]
      ],
      compounds: [
        { word: '電話', reading: 'でんわ', meaning: 'Telephone' },
        { word: '会話', reading: 'かいわ', meaning: 'Conversation' },
        { word: '世話', reading: 'せわ', meaning: 'Care, looking after' }
      ]
    }
  ],

  vocabulary: [
    { word: '約束', reading: 'やくそく', romaji: 'yakusoku', meaning: 'Promise, appointment', pitch: 'Heiban', audioKey: 'やくそく', example: '友達と遊ぶ約束をしました。(I made plans to hang out with a friend.)' },
    { word: '案内する', reading: 'あんないする', romaji: 'annai suru', meaning: 'To guide, to show around', pitch: 'Nakadaka', audioKey: 'あんないする', example: '京都の町を案内してくれました。(He kindly guided me around Kyoto.)' },
    { word: '遠慮する', reading: 'えんりょする', romaji: 'enryo suru', meaning: 'To hesitate, to hold back', pitch: 'Nakadaka', audioKey: 'えんりょする', example: 'どうぞ遠慮しないでください。(Please do not hold back.)' },
    { word: '故障', reading: 'こしょう', romaji: 'koshou', meaning: 'Breakdown, out of order', pitch: 'Heiban', audioKey: 'こしょう', example: 'エレベーターが故障しています。(The elevator is out of order.)' },
    { word: '都合', reading: 'つごう', romaji: 'tsugou', meaning: 'Convenience, schedule circumstances', pitch: 'Heiban', audioKey: 'つごう', example: '明日の午後、ご都合はいかがですか。(How is your availability tomorrow afternoon?)' },
    { word: '準備', reading: 'じゅんび', romaji: 'junbi', meaning: 'Preparation', pitch: 'Atamadaka', audioKey: 'じゅんび', example: '旅行の準備ができました。(The travel preparations are done.)' },
    { word: '届ける', reading: 'とどける', romaji: 'todokeru', meaning: 'To deliver, to notify', pitch: 'Nakadaka', audioKey: 'とどける', example: '荷物を部屋まで届けました。(I delivered the package to the room.)' },
    { word: '急ぐ', reading: 'いそぐ', romaji: 'isogu', meaning: 'To hurry, rush', pitch: 'Nakadaka', audioKey: 'いそぐ', example: '電車に遅れるので急ぎましょう。(Let\'s hurry because we\'ll be late for the train.)' },
    { word: '拾う', reading: 'ひろう', romaji: 'hirou', meaning: 'To pick up, to find', pitch: 'Heiban', audioKey: 'ひろう', example: '道で財布を拾いました。(I picked up a wallet on the street.)' },
    { word: '迎える', reading: 'むかえる', romaji: 'mukaeru', meaning: 'To welcome, greet, pick up', pitch: 'Heiban', audioKey: 'むかえる', example: '駅まで友達を迎えに行きます。(I am going to the station to pick up my friend.)' }
  ],

  grammarLessons: [
    {
      title: 'Potential Form (可能形 〜れる / 〜られる)',
      meaning: 'Expresses ability ("can do", "able to do").',
      rule: 'Group 1: change -u to -e + る (書く → 書ける). Group 2: replace -ru with -られる (食べる → 食べられる). Irregulars: する → できる, くる → こられる.',
      diagram: 'Action: 本を読む (Read book) ➔ Ability: 本が読める (Can read book). Note that を usually becomes が!',
      examples: [
        { jp: '日本語<rt>にほんご</rt>の<ruby>新聞<rt>しんぶん</rt></ruby>が<ruby>読<rt>よ</rt></ruby>めます。', en: 'I can read Japanese newspapers.' },
        { jp: '辛<rt>から</rt>い<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>が<ruby>食<rt>た</rt></ruby>べられません。', en: 'I cannot eat spicy food.' }
      ]
    },
    {
      title: 'Giving & Receiving Verbs (授受表現: あげる, くれる, もらう)',
      meaning: 'Directional verbs showing who bestows a benefit upon whom.',
      rule: `
        • あげる: I/In-group give to someone else (私 ➔ 他人).
        • くれる: Someone gives to ME or my in-group (他人 ➔ 私).
        • もらう: I receive from someone (私 receives from 他人).
      `,
      diagram: 'Speaker (私) ──[あげる]──> Friend (友達) | Friend (友達) ──[くれる]──> Speaker (私) | Speaker (私) <──[もらう]── Friend (友達)',
      examples: [
        { jp: '友達<rt>ともだち</rt>にプレゼントをあげました。', en: 'I gave a present to my friend.' },
        { jp: '田中<rt>たなか</rt>さんが私にプレゼントをくれました。', en: 'Tanaka-san gave ME a present.' },
        { jp: '先生<rt>せんせい</rt>に<ruby>本<rt>ほん</rt></ruby>を<ruby>貸<rt>か</rt></ruby>してもらいました。', en: 'I received the favor of my teacher lending me a book.' }
      ]
    },
    {
      title: 'Conditionals (条件形: 〜たら, 〜ば, 〜なら)',
      meaning: 'Expresses "if", "when", or "in the case that".',
      rule: '〜たら: Past plain + ら (most natural in speech, triggers sequential event). 〜ば: hypothetical condition. 〜なら: contextual topic condition ("If it\'s X you are talking about").',
      diagram: '雨が降ったら (If/when it rains) ➔ 出かけません (I won\'t go out)',
      examples: [
        { jp: '安<rt>やす</rt>かったら、これを<ruby>買<rt>か</rt></ruby>いたいです。', en: 'If it is cheap, I want to buy this.' },
        { jp: '薬<rt>くすり</rt>を<ruby>飲<rt>の</rt></ruby>めば、すぐ<ruby>治<rt>なお</rt></ruby>りますよ。', en: 'If you take medicine, you will get better soon.' },
        { jp: '京都<rt>きょうと</rt>へ<ruby>行<rt>い</rt></ruby>くなら、<ruby>新幹線<rt>しんかんせん</rt></ruby>が<ruby>便利<rt>べんり</rt></ruby>です。', en: 'If you are going to Kyoto, the Shinkansen is convenient.' }
      ]
    },
    {
      title: 'Passive Form (受身形 〜れる / 〜られる)',
      meaning: 'Subject is affected by someone else\'s action ("is done by"). Often expresses suffering/nuisance in Japanese ("adversative passive").',
      rule: 'Group 1: -u becomes -a + れる (踏む → 踏まれる). Group 2: -ru becomes -られる (褒める → 褒められる). Irregulars: する → される, くる → こられる.',
      diagram: '電車で足を踏まれました (My foot was stepped on on the train = nuance of displeasure).',
      examples: [
        { jp: '先生<rt>せんせい</rt>に<ruby>褒<rt>ほ</rt></ruby>められました。', en: 'I was praised by my teacher.' },
        { jp: '雨<rt>あめ</rt>に<ruby>降<rt>ふ</rt></ruby>られて、<ruby>濡<rt>ぬ</rt></ruby>れてしまいました。', en: 'I was rained on (adversative) and got soaked.' }
      ]
    }
  ],

  listeningExercise: {
    title: '駅での待ち合わせ (Meeting at the Station)',
    dialogue: [
      { speaker: '田中', jp: 'もしもし、スミスさん？ 今どこですか。', en: 'Hello, Smith-san? Where are you right now?' },
      { speaker: 'スミス', jp: 'すみません！ 電車が遅れてしまって、あと十分ほどで着きます。', en: 'I\'m sorry! The train was delayed, so I will arrive in about 10 minutes.' },
      { speaker: '田中', jp: 'わかりました。寒いので、駅前のカフェで待っていますね。', en: 'Understood. It\'s cold, so I\'ll wait in the cafe in front of the station.' },
      { speaker: 'スミス', jp: 'ありがとうございます！ 急いで向かいます。', en: 'Thank you! I will hurry there.' }
    ],
    audioPrompts: [
      'もしもし、スミスさん？ 今どこですか。',
      'すみません！ 電車が遅れてしまって、あと十分ほどで着きます。',
      'わかりました。寒いので、駅前のカフェで待っていますね。'
    ]
  },

  readingPassage: {
    title: '初めての京都旅行 (First Trip to Kyoto)',
    textHtml: `
      <p>
        <ruby>先週<rt>せんしゅう</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>は<ruby>友達<rt>ともだち</rt></ruby>の<ruby>山田<rt>やまだ</rt></ruby>さんと<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>京都<rt>きょうと</rt></ruby>へ<ruby>行<rt>い</rt></ruby>ってきました。
        <ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>京都<rt>きょうと</rt></ruby>の<ruby>大学<rt>だいがく</rt></ruby>に<ruby>通<rt>かよ</rt></ruby>っていたので、<ruby>色々<rt>いろいろ</rt></ruby>な<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>場所<rt>ばしょ</rt></ruby>を<ruby>案内<rt>あんない</rt></ruby>してくれました。
      </p>
      <p>
        <ruby>金閣寺<rt>きんかくじ</rt></ruby>の<ruby>美<rt>うつく</rt></ruby>しさに<ruby>感動<rt>かんどう</rt></ruby>しました。<ruby>写真<rt>しゃしん</rt></ruby>で<ruby>見<rt>み</rt></ruby>たことはありましたが、<ruby>実際<rt>じっさい</rt></ruby>に<ruby>見<rt>み</rt></ruby>ると、<ruby>光<rt>ひかり</rt></ruby>が<ruby>池<rt>いけ</rt></ruby>に<ruby>映<rt>うつ</rt></ruby>って<ruby>本当<rt>ほんとう</rt></ruby>にきれいで、<ruby>忘<rt>わす</rt></ruby>れられない<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>で</rt></ruby>になりました。
        <ruby>時間<rt>じかん</rt></ruby>があれば、また<ruby>秋<rt>あき</rt></ruby>の<ruby>紅葉<rt>こうよう</rt></ruby>の<ruby>季節<rt>きせつ</rt></ruby>に<ruby>訪<rt>おとず</rt></ruby>れたいです。
      </p>
    `,
    questions: [
      {
        question: '山田さんはなぜ京都を案内してくれましたか。',
        options: ['京都のガイドだから', '京都の大学に通っていたから', '初めて京都に行ったから', '親戚が住んでいるから'],
        correctIndex: 1,
        explanation: 'The passage says: 山田さんは京都の大学に通っていたので、案内してくれました。'
      },
      {
        question: '筆者（私）は金閣寺についてどう述べましたか。',
        options: ['写真よりも小さかった', '池の光に映って本当にきれいだった', '雨が降って見えなかった', '人が多すぎて入れなかった'],
        correctIndex: 1,
        explanation: 'The text highlights: 実際に光が池に映って本当にきれいで、忘れられない思い出になりました。'
      }
    ]
  },

  quizQuestions: [
    {
      type: 'multiple-choice',
      prompt: 'Fill in the blank: 友達が私に本を ___。',
      options: ['あげました', 'くれました', 'もらいました', 'やりました'],
      correctIndex: 1,
      explanation: 'When someone else gives something to ME, the correct verb is くれました.'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which is the potential form ("can speak") of 話す (hanasu)?',
      options: ['話される', '話させる', '話せる', '話すことができる'],
      correctIndex: 2,
      explanation: 'Godan verb 話す changes its -u to -e + る: 話す ➔ 話せる.'
    },
    {
      type: 'audio-prompt',
      audioText: '電車が遅れてしまって、あと十分ほどで着きます。',
      prompt: 'Listen to the audio. Why will the speaker be delayed?',
      options: ['They missed the bus', 'The train was delayed', 'They lost their wallet', 'The weather was bad'],
      correctIndex: 1,
      explanation: '電車が遅れてしまって literally means "The train was delayed".'
    },
    {
      type: 'unscramble',
      prompt: 'Unscramble: "If you take medicine, you will get well soon."',
      tokens: ['薬を', '飲めば、', 'すぐに', '治ります。'],
      correctOrder: ['薬を', '飲めば、', 'すぐに', '治ります。'],
      explanation: '薬を飲めば (if you drink medicine) + すぐに (soon) + 治ります (will heal).'
    },
    {
      type: 'fill-in-blank',
      prompt: '雨に ___ 、服がびしょ濡れになった。',
      options: ['降って', '降られて', '降りて', '降らせて'],
      correctIndex: 1,
      explanation: 'Adversative passive: 雨に降られて (being adversely rained on).'
    }
  ]
};
