/**
 * JLPT N1 Curriculum Data: Advanced / Native-Adjacent
 * Archaic particles, literary constructs (〜であれ, 〜ごとき, 〜極まりない, 〜まじき),
 * Keigo Matrix (Sonkeigo, Kenjougo I/II, Teineigo, Bikago),
 * Yojijukugo (四字熟語), Abstract philosophical texts, Quizzes.
 */

window.N1_DATA = {
  level: 'N1',
  title: 'JLPT N1: Advanced (Native-Adjacent)',
  description: 'Attain native-level depth: master archaic literary constructs, classical particles, precision Keigo honorific matrices, four-character idioms (四字熟語), and abstract philosophical criticism.',
  stats: {
    targetKanji: 2000,
    targetVocab: 10000,
    targetGrammar: 280
  },

  kanji: [
    {
      char: '憂',
      meaning: 'Grief, Melancholy, Anxiety',
      onyomi: ['ユウ'],
      kunyomi: ['うれ・える', 'うれ・い', 'う・い'],
      strokes: 15,
      mnemonic: 'A head bowed down (頁) over a troubled heart (心) walking slowly with a cane (夂).',
      guideStrokes: [
        [{x: 105, y: 65}, {x: 195, y: 65}],
        [{x: 90, y: 85}, {x: 210, y: 85}],
        [{x: 150, y: 65}, {x: 150, y: 110}],
        [{x: 115, y: 100}, {x: 135, y: 115}],
        [{x: 185, y: 100}, {x: 165, y: 115}],
        [{x: 100, y: 125}, {x: 200, y: 125}],
        [{x: 115, y: 135}, {x: 110, y: 175}],
        [{x: 115, y: 135}, {x: 185, y: 135}, {x: 185, y: 175}],
        [{x: 115, y: 155}, {x: 185, y: 155}],
        [{x: 115, y: 175}, {x: 185, y: 175}],
        [{x: 105, y: 190}, {x: 85, y: 235}],
        [{x: 135, y: 190}, {x: 180, y: 220}, {x: 145, y: 235}],
        [{x: 145, y: 200}, {x: 215, y: 235}],
        [{x: 145, y: 180}, {x: 155, y: 195}],
        [{x: 175, y: 180}, {x: 185, y: 195}]
      ],
      compounds: [
        { word: '憂鬱', reading: 'ゆううつ', meaning: 'Depression, melancholy' },
        { word: '懸念', reading: 'けねん', meaning: 'Deep worry / concern' },
        { word: '杞憂', reading: 'きゆう', meaning: 'Needless anxiety' }
      ]
    },
    {
      char: '鬱',
      meaning: 'Gloom, Depression, Lush foliage',
      onyomi: ['ウツ'],
      kunyomi: ['うっ・する', 'ふさ・ぐ'],
      strokes: 29,
      mnemonic: 'One of the most complex standard Kanji: two trees (木木) over a can of sacrificial herbs (鬯) and hair (彡).',
      guideStrokes: [
        [{x: 75, y: 65}, {x: 125, y: 65}],
        [{x: 100, y: 55}, {x: 100, y: 115}],
        [{x: 100, y: 65}, {x: 75, y: 105}],
        [{x: 100, y: 65}, {x: 125, y: 105}],
        [{x: 175, y: 65}, {x: 225, y: 65}],
        [{x: 200, y: 55}, {x: 200, y: 115}],
        [{x: 200, y: 65}, {x: 175, y: 105}],
        [{x: 200, y: 65}, {x: 225, y: 105}],
        [{x: 140, y: 60}, {x: 140, y: 110}],
        [{x: 160, y: 60}, {x: 160, y: 110}],
        [{x: 135, y: 110}, {x: 165, y: 110}],
        [{x: 80, y: 125}, {x: 220, y: 125}],
        [{x: 95, y: 135}, {x: 95, y: 175}],
        [{x: 95, y: 135}, {x: 205, y: 135}, {x: 205, y: 175}],
        [{x: 95, y: 155}, {x: 205, y: 155}],
        [{x: 95, y: 175}, {x: 205, y: 175}],
        [{x: 135, y: 140}, {x: 135, y: 170}],
        [{x: 165, y: 140}, {x: 165, y: 170}],
        [{x: 80, y: 190}, {x: 110, y: 185}],
        [{x: 80, y: 210}, {x: 110, y: 205}],
        [{x: 80, y: 235}, {x: 110, y: 230}],
        [{x: 135, y: 190}, {x: 135, y: 235}],
        [{x: 165, y: 190}, {x: 165, y: 235}],
        [{x: 135, y: 210}, {x: 165, y: 210}],
        [{x: 190, y: 190}, {x: 215, y: 200}],
        [{x: 185, y: 210}, {x: 215, y: 220}],
        [{x: 180, y: 230}, {x: 215, y: 240}],
        [{x: 120, y: 235}, {x: 180, y: 235}],
        [{x: 150, y: 180}, {x: 150, y: 235}]
      ],
      compounds: [
        { word: '憂鬱', reading: 'ゆううつ', meaning: 'Melancholy, gloom' },
        { word: '鬱病', reading: 'うつびょう', meaning: 'Clinical depression' },
        { word: '鬱蒼', reading: 'うっそう', meaning: 'Dense, lush, luxuriant' }
      ]
    },
    {
      char: '緻',
      meaning: 'Fine, Minute, Elaborate',
      onyomi: ['チ'],
      kunyomi: [],
      strokes: 16,
      mnemonic: 'Silk radical (糸) woven meticulously to the farthest extent (致).',
      guideStrokes: [
        [{x: 85, y: 65}, {x: 65, y: 100}],
        [{x: 65, y: 100}, {x: 105, y: 95}, {x: 80, y: 135}],
        [{x: 80, y: 135}, {x: 110, y: 130}],
        [{x: 85, y: 145}, {x: 85, y: 235}],
        [{x: 85, y: 175}, {x: 65, y: 210}],
        [{x: 85, y: 175}, {x: 105, y: 210}],
        [{x: 135, y: 75}, {x: 180, y: 75}],
        [{x: 155, y: 75}, {x: 135, y: 130}],
        [{x: 130, y: 130}, {x: 185, y: 125}],
        [{x: 155, y: 135}, {x: 130, y: 195}],
        [{x: 130, y: 195}, {x: 185, y: 195}],
        [{x: 175, y: 135}, {x: 175, y: 235}],
        [{x: 195, y: 75}, {x: 180, y: 115}],
        [{x: 180, y: 115}, {x: 225, y: 110}],
        [{x: 210, y: 115}, {x: 185, y: 235}],
        [{x: 195, y: 160}, {x: 230, y: 235}]
      ],
      compounds: [
        { word: '緻密', reading: 'ちみつ', meaning: 'Meticulous, minute, elaborate' },
        { word: '精緻', reading: 'せいち', meaning: 'Exquisite, delicate' }
      ]
    },
    {
      char: '密',
      meaning: 'Dense, Secret, Close',
      onyomi: ['ミツ'],
      kunyomi: ['ひそ・か'],
      strokes: 11,
      mnemonic: 'Roof (宀) over mountain (山) and fire altar (必): a tightly sealed secret sanctuary.',
      guideStrokes: [
        [{x: 150, y: 55}, {x: 150, y: 75}],
        [{x: 85, y: 80}, {x: 75, y: 105}],
        [{x: 85, y: 80}, {x: 215, y: 80}, {x: 205, y: 105}],
        [{x: 150, y: 95}, {x: 150, y: 145}],
        [{x: 110, y: 115}, {x: 110, y: 145}, {x: 190, y: 145}],
        [{x: 190, y: 115}, {x: 190, y: 145}],
        [{x: 120, y: 160}, {x: 105, y: 215}],
        [{x: 105, y: 185}, {x: 185, y: 185}, {x: 180, y: 235}],
        [{x: 150, y: 165}, {x: 140, y: 235}],
        [{x: 80, y: 185}, {x: 100, y: 205}],
        [{x: 195, y: 185}, {x: 215, y: 205}]
      ],
      compounds: [
        { word: '秘密', reading: 'ひみつ', meaning: 'Secret' },
        { word: '過密', reading: 'かみつ', meaning: 'Overcrowded' },
        { word: '親密', reading: 'しんみつ', meaning: 'Intimate, close' }
      ]
    },
    {
      char: '曖',
      meaning: 'Obscure, Vague, Shady',
      onyomi: ['アイ'],
      kunyomi: ['くら・い'],
      strokes: 17,
      mnemonic: 'Sun (日) shadowed by love/clouds (愛): sunlight clouded into vagueness.',
      guideStrokes: [
        [{x: 65, y: 85}, {x: 65, y: 215}],
        [{x: 65, y: 85}, {x: 105, y: 85}, {x: 105, y: 215}],
        [{x: 65, y: 135}, {x: 105, y: 135}],
        [{x: 65, y: 175}, {x: 105, y: 175}],
        [{x: 65, y: 215}, {x: 105, y: 215}],
        [{x: 145, y: 65}, {x: 125, y: 95}],
        [{x: 125, y: 95}, {x: 195, y: 95}],
        [{x: 155, y: 75}, {x: 145, y: 105}],
        [{x: 185, y: 75}, {x: 175, y: 105}],
        [{x: 120, y: 115}, {x: 215, y: 115}],
        [{x: 165, y: 115}, {x: 135, y: 155}],
        [{x: 145, y: 135}, {x: 175, y: 155}],
        [{x: 130, y: 165}, {x: 120, y: 205}],
        [{x: 125, y: 185}, {x: 195, y: 185}, {x: 190, y: 235}],
        [{x: 155, y: 175}, {x: 155, y: 220}],
        [{x: 135, y: 210}, {x: 145, y: 230}],
        [{x: 180, y: 210}, {x: 195, y: 230}]
      ],
      compounds: [
        { word: '曖昧', reading: 'あいまい', meaning: 'Ambiguous, vague' },
        { word: '曖昧模糊', reading: 'あいまいもこ', meaning: 'Obscure and indistinct' }
      ]
    },
    {
      char: '昧',
      meaning: 'Foolish, Dark, Obscure',
      onyomi: ['マイ', 'バイ'],
      kunyomi: ['くら・い'],
      strokes: 9,
      mnemonic: 'Sun (日) before budding leaves of a tree (未): predawn obscurity.',
      guideStrokes: [
        [{x: 70, y: 80}, {x: 70, y: 220}],
        [{x: 70, y: 80}, {x: 115, y: 80}, {x: 115, y: 220}],
        [{x: 70, y: 135}, {x: 115, y: 135}],
        [{x: 70, y: 175}, {x: 115, y: 175}],
        [{x: 70, y: 220}, {x: 115, y: 220}],
        [{x: 140, y: 100}, {x: 210, y: 100}],
        [{x: 125, y: 145}, {x: 225, y: 145}],
        [{x: 175, y: 65}, {x: 175, y: 235}],
        [{x: 175, y: 145}, {x: 135, y: 225}],
        [{x: 175, y: 145}, {x: 215, y: 225}]
      ],
      compounds: [
        { word: '曖昧', reading: 'あいまい', meaning: 'Ambiguous' },
        { word: '三昧', reading: 'ざんまい', meaning: 'Samadhi / indulgence in (読書三昧)' }
      ]
    },
    {
      char: '躊',
      meaning: 'Hesitate, Falter',
      onyomi: ['チュウ'],
      kunyomi: ['ためら・う'],
      strokes: 21,
      mnemonic: 'Foot radical (足) accompanied by longevity (壽): pacing back and forth in hesitation.',
      guideStrokes: [
        [{x: 65, y: 75}, {x: 65, y: 125}],
        [{x: 65, y: 75}, {x: 105, y: 75}, {x: 105, y: 125}],
        [{x: 65, y: 125}, {x: 105, y: 125}],
        [{x: 85, y: 125}, {x: 85, y: 185}],
        [{x: 85, y: 155}, {x: 115, y: 155}],
        [{x: 60, y: 185}, {x: 95, y: 185}],
        [{x: 65, y: 185}, {x: 105, y: 235}],
        [{x: 135, y: 75}, {x: 215, y: 75}],
        [{x: 175, y: 60}, {x: 175, y: 105}],
        [{x: 140, y: 105}, {x: 210, y: 105}],
        [{x: 140, y: 125}, {x: 210, y: 125}],
        [{x: 140, y: 145}, {x: 210, y: 145}],
        [{x: 150, y: 160}, {x: 150, y: 195}],
        [{x: 150, y: 160}, {x: 200, y: 160}, {x: 200, y: 195}],
        [{x: 150, y: 180}, {x: 200, y: 180}],
        [{x: 150, y: 195}, {x: 200, y: 195}],
        [{x: 130, y: 215}, {x: 220, y: 215}],
        [{x: 195, y: 200}, {x: 195, y: 240}, {x: 170, y: 225}],
        [{x: 160, y: 225}, {x: 165, y: 240}],
        [{x: 135, y: 225}, {x: 145, y: 240}],
        [{x: 210, y: 225}, {x: 225, y: 240}]
      ],
      compounds: [
        { word: '躊躇', reading: 'ちゅうちょ', meaning: 'Hesitation, indecision' },
        { word: '躊躇う', reading: 'ためらう', meaning: 'To hesitate (kunyomi)' }
      ]
    },
    {
      char: '躇',
      meaning: 'Hesitate',
      onyomi: ['チョ'],
      kunyomi: ['ためら・う'],
      strokes: 18,
      mnemonic: 'Foot radical (足) and author/person radical (著): feet frozen in place.',
      guideStrokes: [
        [{x: 65, y: 75}, {x: 65, y: 125}],
        [{x: 65, y: 75}, {x: 105, y: 75}, {x: 105, y: 125}],
        [{x: 65, y: 125}, {x: 105, y: 125}],
        [{x: 85, y: 125}, {x: 85, y: 185}],
        [{x: 85, y: 155}, {x: 115, y: 155}],
        [{x: 60, y: 185}, {x: 95, y: 185}],
        [{x: 65, y: 185}, {x: 105, y: 235}],
        [{x: 135, y: 75}, {x: 215, y: 75}],
        [{x: 155, y: 65}, {x: 155, y: 95}],
        [{x: 195, y: 65}, {x: 195, y: 95}],
        [{x: 135, y: 115}, {x: 215, y: 115}],
        [{x: 175, y: 100}, {x: 145, y: 155}],
        [{x: 145, y: 155}, {x: 205, y: 155}],
        [{x: 150, y: 175}, {x: 150, y: 235}],
        [{x: 150, y: 175}, {x: 205, y: 175}, {x: 205, y: 235}],
        [{x: 150, y: 195}, {x: 205, y: 195}],
        [{x: 150, y: 215}, {x: 205, y: 215}],
        [{x: 150, y: 235}, {x: 205, y: 235}]
      ],
      compounds: [
        { word: '躊躇', reading: 'ちゅうちょ', meaning: 'Hesitation' },
        { word: '躊躇なく', reading: 'ちゅうちょなく', meaning: 'Without hesitation' }
      ]
    },
    {
      char: '弊',
      meaning: 'Abuse, Evil, Vice, Humble prefix',
      onyomi: ['ヘイ'],
      kunyomi: [],
      strokes: 15,
      mnemonic: 'Torn rags (敝) over two hands offering tribute (廾): humility and inherent defects.',
      guideStrokes: [
        [{x: 85, y: 65}, {x: 135, y: 65}],
        [{x: 105, y: 65}, {x: 90, y: 115}],
        [{x: 75, y: 115}, {x: 145, y: 115}],
        [{x: 80, y: 140}, {x: 80, y: 195}],
        [{x: 80, y: 140}, {x: 140, y: 140}, {x: 140, y: 195}],
        [{x: 80, y: 170}, {x: 140, y: 170}],
        [{x: 165, y: 65}, {x: 150, y: 105}],
        [{x: 150, y: 105}, {x: 215, y: 95}],
        [{x: 195, y: 105}, {x: 165, y: 195}],
        [{x: 175, y: 140}, {x: 220, y: 195}],
        [{x: 70, y: 205}, {x: 230, y: 205}],
        [{x: 115, y: 195}, {x: 115, y: 240}],
        [{x: 185, y: 195}, {x: 185, y: 240}],
        [{x: 100, y: 240}, {x: 130, y: 240}],
        [{x: 170, y: 240}, {x: 200, y: 240}]
      ],
      compounds: [
        { word: '弊害', reading: 'へいがい', meaning: 'Harmful effect, evil practice' },
        { word: '弊社', reading: 'へいしゃ', meaning: 'Our company (humble)' },
        { word: '語弊', reading: 'ごへい', meaning: 'Misleading phrasing' }
      ]
    },
    {
      char: '害',
      meaning: 'Harm, Damage, Injury',
      onyomi: ['ガイ'],
      kunyomi: [],
      strokes: 10,
      mnemonic: 'Roof (宀) covering cutting words (丯) and open mouths (口): gossip inflicting injury.',
      guideStrokes: [
        [{x: 150, y: 60}, {x: 150, y: 80}],
        [{x: 85, y: 85}, {x: 75, y: 110}],
        [{x: 85, y: 85}, {x: 215, y: 85}, {x: 205, y: 110}],
        [{x: 95, y: 120}, {x: 205, y: 120}],
        [{x: 90, y: 145}, {x: 210, y: 145}],
        [{x: 80, y: 170}, {x: 220, y: 170}],
        [{x: 150, y: 115}, {x: 150, y: 175}],
        [{x: 105, y: 190}, {x: 105, y: 235}],
        [{x: 105, y: 190}, {x: 195, y: 190}, {x: 195, y: 235}],
        [{x: 105, y: 235}, {x: 195, y: 235}]
      ],
      compounds: [
        { word: '被害', reading: 'ひがい', meaning: 'Damage, suffering' },
        { word: '害悪', reading: 'がいあく', meaning: 'Harm, plague, nuisance' },
        { word: '障害', reading: 'しょうがい', meaning: 'Obstacle, disability' }
      ]
    }
  ],

  vocabulary: [
    { word: '杞憂', reading: 'きゆう', romaji: 'kiyou', meaning: 'Baseless anxiety, groundless fear', pitch: 'Heiban', audioKey: 'きゆう', example: '心配していたが、全くの杞憂に終わった。(I was worried, but it turned out to be completely groundless fear.)' },
    { word: '混沌', reading: 'こんとん', romaji: 'konton', meaning: 'Chaos, pandemonium', pitch: 'Heiban', audioKey: 'こんとん', example: '社会秩序は一時的な混沌に陥った。(Social order plunged into temporary chaos.)' },
    { word: '熾烈', reading: 'しれつ', romaji: 'shiretsu', meaning: 'Fierce, intense, desperate', pitch: 'Heiban', audioKey: 'しれつ', example: '市場において熾烈な競争が繰り広げられている。(Fierce competition is unfolding in the market.)' },
    { word: '如実', reading: 'にょじつ', romaji: 'nyojitsu', meaning: 'Vivid, true to life, realistic', pitch: 'Heiban', audioKey: 'にょじつ', example: '投票率は市民の政治不信を如実に物語っている。(The turnout vividly tells of citizens\' distrust in politics.)' },
    { word: '卓越', reading: 'たくえつ', romaji: 'takuetsu', meaning: 'Excellence, preeminence, superiority', pitch: 'Heiban', audioKey: 'たくえつ', example: '彼は卓越した洞察力を持っている。(He possesses preeminent insight.)' },
    { word: '看過', reading: 'かんか', romaji: 'kanka', meaning: 'Overlooking, turning a blind eye', pitch: 'Atamadaka', audioKey: 'かんか', example: 'この重大な規約違反は看過できない。(We cannot overlook this critical violation of terms.)' },
    { word: '乖離', reading: 'かいり', romaji: 'kairi', meaning: 'Estrangement, divergence, discrepancy', pitch: 'Heiban', audioKey: 'かいり', example: '理想と現実の乖離に苦悩する。(Suffering from the divergence between ideal and reality.)' },
    { word: '示唆', reading: 'しさ', romaji: 'shisa', meaning: 'Suggestion, hint, implication', pitch: 'Atamadaka', audioKey: 'しさ', example: '研究結果は興味深い仮説を示唆している。(The research findings suggest an intriguing hypothesis.)' },
    { word: '躊躇う', reading: 'ためらう', romaji: 'tamerau', meaning: 'To hesitate, to waver', pitch: 'Nakadaka', audioKey: 'ためらう', example: '決断を一瞬たりとも躊躇ってはならない。(One must not hesitate even for a split second in decision.)' },
    { word: '如く', reading: 'ごとく', romaji: 'gotoku', meaning: 'Like, as if, identical to (archaic)', pitch: 'Nakadaka', audioKey: 'ごとく', example: '光陰矢の如し。(Time flies like an arrow.)' }
  ],

  keigoMatrix: [
    {
      action: 'To do (する)',
      sonkeigo: 'なさる / される (Respectful of other)',
      kenjougo1: 'いたす (Humble humble I)',
      kenjougo2: 'いたす (Polite humble II)',
      teineigo: 'します (Standard polite)'
    },
    {
      action: 'To go / come (行く / 来る)',
      sonkeigo: 'いらっしゃる / おいでになる',
      kenjougo1: '伺う (ukagau - visit other)',
      kenjougo2: '参る (mairu - humble motion)',
      teineigo: '行きます / 来ます'
    },
    {
      action: 'To say / speak (言う)',
      sonkeigo: 'おっしゃる',
      kenjougo1: '申し上げる (moushiageru - to other)',
      kenjougo2: '申す (mousu - declare identity)',
      teineigo: '言います'
    },
    {
      action: 'To eat / drink (食べる / 飲む)',
      sonkeigo: '召し上がる (meshiaagaru)',
      kenjougo1: 'いただく (itadaku)',
      kenjougo2: 'いただく',
      teineigo: '食べます / 飲みます'
    },
    {
      action: 'To know (知っている)',
      sonkeigo: 'ご存じ (gozonji)',
      kenjougo1: '存じ上げる (zonjiageru)',
      kenjougo2: '存じております',
      teineigo: '知っています'
    }
  ],

  literaryGrammar: [
    {
      construct: '〜であれ (De are) / 〜であれ〜であれ',
      meaning: 'Whether it be X or Y / No matter what.',
      nuance: 'Classical assertion stating that circumstance does not alter the universal truth.',
      example: '理由が何であれ、暴力は決して許されるべきではない。(Whatever the reason may be, violence must never be tolerated.)'
    },
    {
      construct: '〜ごとき (Gotoki) / 〜ごとし',
      meaning: 'Like / As if / Such a petty thing as...',
      nuance: 'Archaic simile or self-deprecating/scornful nuance ("A novice like me...").',
      example: '私ごとき未熟者に、このような大役が務まるでしょうか。(Could an inexperienced person such as myself possibly fulfill such a monumental duty?)'
    },
    {
      construct: '〜極まりない (Kiwamarinai) / 〜の極み',
      meaning: 'Boundless, utter, extreme (negative or intense feeling).',
      nuance: 'Formal dramatic condemnation or superlative extremity.',
      example: '安全確認を怠るとは、危険極まりない行為だ。(Neglecting safety checks is an utterly dangerous act.)'
    },
    {
      construct: '〜まじき (Majiki)',
      meaning: 'Unpardonable for someone in such a position to do ("should never").',
      nuance: 'Ethical imperative attached only to role nouns: プロにあるまじき, 許すまじき.',
      example: '顧客の個人情報を流出させるなど、専門家にあるまじき失態である。(Leaking client data is an unpardonable blunder unfitting for a professional.)'
    },
    {
      construct: '〜を余儀なくされる (O yoginaku sareru)',
      meaning: 'To be relentlessly forced to do X contrary to one\'s wish.',
      nuance: 'High-level literary passive where external catastrophic forces coerce action.',
      example: '予期せぬ財政難により、事業の縮小を余儀なくされた。(Due to unanticipated financial distress, we were relentlessly forced to downscale operations.)'
    }
  ],

  yojijukugo: [
    { kanji: '一期一会', reading: 'いちごいちえ', meaning: 'Treasure every encounter, for it may never recur (Once in a lifetime).', origin: 'Sen no Rikyu\'s tea ceremony philosophy.' },
    { kanji: '以心伝心', reading: 'いしんでんしん', meaning: 'Heart-to-heart tacit understanding without need for words.', origin: 'Zen Buddhist transmission of insight.' },
    { kanji: '臥薪嘗胆', reading: 'がしんしょうたん', meaning: 'Enduring bitter hardships for future vengeance/triumph.', origin: 'War between Wu and Yue in ancient China.' },
    { kanji: '切磋琢磨', reading: 'せっさたくま', meaning: 'Cultivating character and skill through mutual friendly rivalry.', origin: 'Book of Odes (cutting and polishing gems).' },
    { kanji: '臨機応変', reading: 'りんきおうへん', meaning: 'Adapting flexibly to shifting circumstances as they arise.', origin: 'Classical military statecraft.' }
  ],

  readingPassage: {
    title: '文明の進歩と言語の深層 (Progress of Civilization and the Depths of Language)',
    textHtml: `
      <p>
        <ruby>近代合理主義<rt>きんだいごうりしゅぎ</rt></ruby>の<ruby>浸透<rt>しんとう</rt></ruby>は、<ruby>情報伝達<rt>じょうほうでんたつ</rt></ruby>の<ruby>効率性<rt>こうりつせい</rt></ruby>を<ruby>極限<rt>きょくげん</rt></ruby>まで<ruby>高<rt>たか</rt></ruby>めた<ruby>反面<rt>はんめん</rt></ruby>、<ruby>言語<rt>げんご</rt></ruby>が<ruby>本来<rt>ほんらい</rt></ruby><ruby>内包<rt>ないほう</rt></ruby>していた「<ruby>余白<rt>よはく</rt></ruby>」や「<ruby>多義性<rt>たぎせい</rt></ruby>」を<ruby>無駄<rt>むだ</rt></ruby>なものとして<ruby>削<rt>そ</rt></ruby>ぎ<ruby>落<rt>お</rt></ruby>とす<ruby>弊害<rt>へいがい</rt></ruby>をもたらした。
        <ruby>白黒<rt>しろくろ</rt></ruby>を<ruby>明確<rt>めいかく</rt></ruby>に<ruby>峻別<rt>しゅんべつ</rt></ruby>する<ruby>言説<rt>げんせつ</rt></ruby>が<ruby>持て囃<rt>もてはや</rt></ruby>される<ruby>現代<rt>げんだい</rt></ruby>において、<ruby>曖昧<rt>あいまい</rt></ruby>さの<ruby>中<rt>なか</rt></ruby>に<ruby>潜<rt>ひそ</rt></ruby>む<ruby>深遠<rt>しんえん</rt></ruby>な<ruby>陰影<rt>いんえい</rt></ruby>を<ruby>感得<rt>かんとく</rt></ruby>する<ruby>力<rt>ちから</rt></ruby>は、<ruby>衰退<rt>すいたい</rt></ruby>の<ruby>一途<rt>いっと</rt></ruby>をたどっている。
      </p>
      <p>
        しかし、<ruby>人間<rt>にんげん</rt></ruby>の<ruby>精神活動<rt>せいしんかつどう</rt></ruby>とは、<ruby>論理式<rt>ろんりしき</rt></ruby>の<ruby>如<rt>ごと</rt></ruby>く<ruby>単純<rt>たんじゅん</rt></ruby>に<ruby>還元<rt>かんげん</rt></ruby>できるものではあるまい。
        <ruby>言葉<rt>ことば</rt></ruby>にならない<ruby>感情<rt>かんじょう</rt></ruby>や、<ruby>矛盾<rt>むじゅん</rt></ruby>を<ruby>孕<rt>はら</rt></ruby>んだ<ruby>思索<rt>しさく</rt></ruby>の<ruby>揺<rt>ゆ</rt></ruby>らぎを<ruby>抱<rt>いだ</rt></ruby>き<ruby>続<rt>つづ</rt></ruby>けることこそが、<ruby>真<rt>しん</rt></ruby>の<ruby>知性<rt>ちせい</rt></ruby>の<ruby>証左<rt>しょうさ</rt></ruby>にほかならない。
        <ruby>効率化<rt>こうりつか</rt></ruby>の<ruby>波<rt>なみ</rt></ruby>に<ruby>抗<rt>あらが</rt></ruby>い、<ruby>豊穣<rt>ほうじょう</rt></ruby>なる<ruby>文脈<rt>ぶんみゃく</rt></ruby>の<ruby>海<rt>うみ</rt></ruby>へと<ruby>思索<rt>しさく</rt></ruby>を<ruby>潜入<rt>せんにゅう</rt></ruby>させる<ruby>営<rt>いとな</rt></ruby>みが、<ruby>今<rt>いま</rt></ruby>ほど<ruby>切実<rt>せつじつ</rt></ruby>に<ruby>求<rt>もと</rt></ruby>められている<ruby>時代<rt>じだい</rt></ruby>はないのである。
      </p>
    `,
    questions: [
      {
        question: '筆者は近代合理主義がもたらした弊害として何を指摘しているか。',
        options: [
          '文字が読めなくなること',
          '言語が本来持っていた余白や多義性が削ぎ落とされ、深遠な陰影を感じ取る力が衰退していること',
          '書籍の価格が高騰したこと',
          '世界中の言語が単一化されたこと'
        ],
        correctIndex: 1,
        explanation: 'The passage explicitly argues: 言語が本来内包していた「余白」や「多義性」を無駄なものとして削ぎ落とす弊害をもたらした。'
      },
      {
        question: '筆者が考える「真の知性の証左」とは何か。',
        options: [
          'いかなる議論にも即座に勝つこと',
          '論理式のように全てを記号化すること',
          '言葉にならない感情や矛盾を孕んだ思索の揺らぎを抱き続けること',
          '最新のAIツールを完璧に使いこなすこと'
        ],
        correctIndex: 2,
        explanation: 'Text: 言葉にならない感情や、矛盾を孕んだ思索の揺らぎを抱き続けることこそが、真の知性の証左にほかならない。'
      }
    ]
  },

  quizQuestions: [
    {
      type: 'multiple-choice',
      prompt: 'Select the correct literary grammar: 顧客の機密情報を漏洩させるなど、社会人にある ___ 失態である。',
      options: ['まじき', 'ごとき', '極まりない', 'であれ'],
      correctIndex: 0,
      explanation: '〜にあるまじき means "unforgivable/unbecoming for someone in such a position".'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which phrase is the Sonkeigo (respectful form) of「言う」(to say)?',
      options: ['申し上げる', '申す', 'おっしゃる', '伺う'],
      correctIndex: 2,
      explanation: 'おっしゃる is respectful (Sonkeigo) referring to the other person speaking. 申し上げる is humble (Kenjougo).'
    },
    {
      type: 'audio-prompt',
      audioText: '心配していたが、全くの杞憂に終わった。',
      prompt: 'Listen to the audio. What does the word「杞憂」(kiyou) signify?',
      options: ['A terrifying omen', 'Completely baseless or unnecessary worry', 'A wonderful coincidence', 'A severe financial debt'],
      correctIndex: 1,
      explanation: '杞憂 (kiyou) originates from the Chinese fable of a man from Qi who worried the sky would fall—it means groundless anxiety.'
    },
    {
      type: 'unscramble',
      prompt: 'Unscramble: "Whatever the reason may be, violence is never permitted."',
      tokens: ['理由が何であれ、', '暴力は', '決して', '許されるべきではない。'],
      correctOrder: ['理由が何であれ、', '暴力は', '決して', '許されるべきではない。'],
      explanation: '理由が何であれ、(whatever the reason may be,) + 暴力は決して許されるべきではない。(violence must never be permitted).'
    },
    {
      type: 'fill-in-blank',
      prompt: '非常識 ___ 振る舞いに、周囲の人々は言葉を失った。',
      options: ['極まりない', 'ごとき', 'まじき', 'であれ'],
      correctIndex: 0,
      explanation: '〜極まりない expresses extreme and egregious absurdity: 非常識極まりない (utterly lacking in common sense).'
    }
  ]
};
