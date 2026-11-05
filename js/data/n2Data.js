/**
 * JLPT N2 Curriculum Data: Pre-Advanced
 * Business idioms & formal spoken Japanese, newspaper discourse connectors
 * (〜に伴って, 〜に際して, 〜どころか, 〜一方, 〜を契機に),
 * Kanji, Vocabulary, Rapid Timed Reading Test (60s challenge), Quizzes.
 */

window.N2_DATA = {
  level: 'N2',
  title: 'JLPT N2: Pre-Advanced',
  description: 'Navigate professional and media discourse: master formal business communication, editorial connectors (〜に伴って, 〜に際して), and timed newspaper comprehension drills.',
  stats: {
    targetKanji: 1000,
    targetVocab: 6000,
    targetGrammar: 200
  },

  kanji: [
    {
      char: '構',
      meaning: 'Structure, Posture, Care about',
      onyomi: ['コウ'],
      kunyomi: ['かま・える', 'かま・う'],
      strokes: 14,
      mnemonic: 'Wood radical (木) framed together with interlocked beams (冓) to build a structure.',
      guideStrokes: [
        [{x: 65, y: 110}, {x: 125, y: 110}],
        [{x: 95, y: 65}, {x: 95, y: 235}],
        [{x: 95, y: 115}, {x: 65, y: 195}],
        [{x: 95, y: 135}, {x: 125, y: 185}],
        [{x: 135, y: 75}, {x: 215, y: 75}],
        [{x: 175, y: 60}, {x: 175, y: 115}],
        [{x: 135, y: 115}, {x: 215, y: 115}],
        [{x: 145, y: 125}, {x: 145, y: 230}],
        [{x: 145, y: 125}, {x: 210, y: 125}, {x: 210, y: 230}],
        [{x: 145, y: 155}, {x: 210, y: 155}],
        [{x: 145, y: 185}, {x: 210, y: 185}],
        [{x: 165, y: 125}, {x: 165, y: 230}],
        [{x: 190, y: 125}, {x: 190, y: 230}],
        [{x: 125, y: 235}, {x: 225, y: 235}]
      ],
      compounds: [
        { word: '構成', reading: 'こうせい', meaning: 'Composition, structure' },
        { word: '結構', reading: 'けっこう', meaning: 'Splendid / Fine / No thank you' },
        { word: '構想', reading: 'こうそう', meaning: 'Concept, vision' }
      ]
    },
    {
      char: '企',
      meaning: 'Plan, Undertake, Scheme',
      onyomi: ['キ'],
      kunyomi: ['くわだ・てる'],
      strokes: 6,
      mnemonic: 'A person standing on tiptoe under a roof (人) peering forward to plan a future project.',
      guideStrokes: [
        [{x: 150, y: 65}, {x: 85, y: 125}],
        [{x: 150, y: 65}, {x: 215, y: 125}],
        [{x: 110, y: 145}, {x: 190, y: 145}],
        [{x: 150, y: 145}, {x: 150, y: 190}],
        [{x: 125, y: 190}, {x: 180, y: 190}],
        [{x: 125, y: 190}, {x: 125, y: 235}, {x: 205, y: 235}]
      ],
      compounds: [
        { word: '企業', reading: 'きぎょう', meaning: 'Enterprise, corporation' },
        { word: '企画', reading: 'きかく', meaning: 'Project planning' },
        { word: '企図', reading: 'きと', meaning: 'Attempt, plan' }
      ]
    },
    {
      char: '業',
      meaning: 'Business, Karma, Undertaking',
      onyomi: ['ギョウ', 'ゴウ'],
      kunyomi: ['わざ'],
      strokes: 13,
      mnemonic: 'An intricate musical instrument board with notches: monumental career accomplishment.',
      guideStrokes: [
        [{x: 115, y: 65}, {x: 135, y: 95}],
        [{x: 185, y: 65}, {x: 165, y: 95}],
        [{x: 80, y: 105}, {x: 220, y: 105}],
        [{x: 105, y: 105}, {x: 105, y: 165}],
        [{x: 140, y: 105}, {x: 140, y: 165}],
        [{x: 175, y: 105}, {x: 175, y: 165}],
        [{x: 200, y: 105}, {x: 200, y: 165}],
        [{x: 85, y: 135}, {x: 215, y: 135}],
        [{x: 75, y: 165}, {x: 225, y: 165}],
        [{x: 150, y: 165}, {x: 150, y: 235}],
        [{x: 150, y: 185}, {x: 105, y: 225}],
        [{x: 150, y: 185}, {x: 195, y: 225}],
        [{x: 70, y: 235}, {x: 230, y: 235}]
      ],
      compounds: [
        { word: '産業', reading: 'さんぎょう', meaning: 'Industry' },
        { word: '事業', reading: 'じぎょう', meaning: 'Enterprise, business' },
        { word: '残業', reading: 'ざんぎょう', meaning: 'Overtime work' }
      ]
    },
    {
      char: '導',
      meaning: 'Guide, Lead, Conduct',
      onyomi: ['ドウ'],
      kunyomi: ['みちび・く'],
      strokes: 15,
      mnemonic: 'Road radical (道) placed above inch/hand measurement radical (寸): hands guiding on the road.',
      guideStrokes: [
        [{x: 110, y: 65}, {x: 125, y: 85}],
        [{x: 145, y: 65}, {x: 165, y: 85}],
        [{x: 105, y: 95}, {x: 175, y: 95}],
        [{x: 115, y: 110}, {x: 115, y: 160}],
        [{x: 115, y: 110}, {x: 170, y: 110}, {x: 170, y: 160}],
        [{x: 115, y: 135}, {x: 170, y: 135}],
        [{x: 115, y: 160}, {x: 170, y: 160}],
        [{x: 75, y: 80}, {x: 95, y: 100}],
        [{x: 70, y: 120}, {x: 95, y: 140}],
        [{x: 65, y: 160}, {x: 95, y: 160}, {x: 75, y: 185}, {x: 215, y: 185}],
        [{x: 105, y: 200}, {x: 205, y: 200}],
        [{x: 175, y: 185}, {x: 175, y: 240}, {x: 155, y: 225}],
        [{x: 135, y: 215}, {x: 145, y: 235}],
        [{x: 95, y: 220}, {x: 110, y: 235}],
        [{x: 185, y: 215}, {x: 205, y: 235}]
      ],
      compounds: [
        { word: '導入', reading: 'どうにゅう', meaning: 'Introduction, implementation' },
        { word: '指導', reading: 'しどう', meaning: 'Guidance, coaching' },
        { word: '指導者', reading: 'しどうしゃ', meaning: 'Leader, coach' }
      ]
    },
    {
      char: '策',
      meaning: 'Scheme, Plan, Policy, Measures',
      onyomi: ['サク'],
      kunyomi: [],
      strokes: 12,
      mnemonic: 'Bamboo strips (竹) tied together as an ancient scroll of battle tactics.',
      guideStrokes: [
        [{x: 95, y: 65}, {x: 75, y: 95}],
        [{x: 75, y: 95}, {x: 120, y: 95}],
        [{x: 110, y: 80}, {x: 95, y: 115}],
        [{x: 165, y: 60}, {x: 150, y: 90}],
        [{x: 150, y: 90}, {x: 205, y: 90}],
        [{x: 195, y: 75}, {x: 180, y: 115}],
        [{x: 85, y: 130}, {x: 215, y: 130}],
        [{x: 105, y: 130}, {x: 105, y: 180}],
        [{x: 105, y: 155}, {x: 195, y: 155}],
        [{x: 195, y: 130}, {x: 195, y: 180}],
        [{x: 85, y: 180}, {x: 215, y: 180}],
        [{x: 150, y: 130}, {x: 150, y: 235}]
      ],
      compounds: [
        { word: '対策', reading: 'たいさく', meaning: 'Countermeasure' },
        { word: '解決策', reading: 'かいけつさく', meaning: 'Solution' },
        { word: '政策', reading: 'せいさく', meaning: 'Political policy' }
      ]
    },
    {
      char: '職',
      meaning: 'Employment, Job, Post',
      onyomi: ['ショク'],
      kunyomi: [],
      strokes: 18,
      mnemonic: 'Ear radical (耳) listening diligently to orders at the palace sounding post (音+戈).',
      guideStrokes: [
        [{x: 65, y: 75}, {x: 125, y: 75}],
        [{x: 85, y: 75}, {x: 85, y: 225}],
        [{x: 115, y: 75}, {x: 115, y: 200}],
        [{x: 85, y: 120}, {x: 115, y: 120}],
        [{x: 85, y: 155}, {x: 115, y: 155}],
        [{x: 65, y: 220}, {x: 125, y: 200}],
        [{x: 165, y: 65}, {x: 165, y: 85}],
        [{x: 145, y: 85}, {x: 185, y: 85}],
        [{x: 150, y: 95}, {x: 140, y: 130}],
        [{x: 180, y: 95}, {x: 190, y: 130}],
        [{x: 140, y: 130}, {x: 190, y: 130}],
        [{x: 145, y: 145}, {x: 185, y: 145}],
        [{x: 145, y: 170}, {x: 185, y: 170}],
        [{x: 145, y: 195}, {x: 185, y: 195}],
        [{x: 165, y: 145}, {x: 165, y: 230}],
        [{x: 135, y: 230}, {x: 195, y: 230}],
        [{x: 205, y: 85}, {x: 225, y: 235}],
        [{x: 215, y: 115}, {x: 185, y: 145}]
      ],
      compounds: [
        { word: '職業', reading: 'しょくぎょう', meaning: 'Occupation, vocation' },
        { word: '転職', reading: 'てんしょく', meaning: 'Job change' },
        { word: '職場', reading: 'しょくば', meaning: 'Workplace' }
      ]
    },
    {
      char: '割',
      meaning: 'Divide, Cut, Proportion, Ten percent',
      onyomi: ['カツ'],
      kunyomi: ['わ・る', 'わり', 'さ・く'],
      strokes: 12,
      mnemonic: 'Harmonizing damage radical (害) divided precisely with a sharp knife (刂).',
      guideStrokes: [
        [{x: 95, y: 65}, {x: 135, y: 65}],
        [{x: 115, y: 65}, {x: 115, y: 90}],
        [{x: 75, y: 95}, {x: 155, y: 95}],
        [{x: 90, y: 115}, {x: 140, y: 115}],
        [{x: 90, y: 135}, {x: 140, y: 135}],
        [{x: 115, y: 95}, {x: 115, y: 165}],
        [{x: 80, y: 170}, {x: 150, y: 170}],
        [{x: 90, y: 180}, {x: 90, y: 235}],
        [{x: 90, y: 180}, {x: 145, y: 180}, {x: 145, y: 235}],
        [{x: 90, y: 235}, {x: 145, y: 235}],
        [{x: 175, y: 85}, {x: 175, y: 170}],
        [{x: 205, y: 65}, {x: 205, y: 235}, {x: 175, y: 215}]
      ],
      compounds: [
        { word: '割引', reading: 'わりびき', meaning: 'Discount' },
        { word: '割合', reading: 'わりあい', meaning: 'Ratio, proportion' },
        { word: '分割', reading: 'ぶんかつ', meaning: 'Partition, installment' }
      ]
    },
    {
      char: '務',
      meaning: 'Duty, Task, Serve',
      onyomi: ['ム'],
      kunyomi: ['つと・める'],
      strokes: 11,
      mnemonic: 'Halberd / spear radical with power (力): serving an assigned duty under pressure.',
      guideStrokes: [
        [{x: 85, y: 70}, {x: 110, y: 95}],
        [{x: 65, y: 105}, {x: 125, y: 105}],
        [{x: 95, y: 105}, {x: 75, y: 165}],
        [{x: 90, y: 135}, {x: 125, y: 165}],
        [{x: 145, y: 65}, {x: 195, y: 65}],
        [{x: 165, y: 65}, {x: 140, y: 130}],
        [{x: 140, y: 130}, {x: 210, y: 120}],
        [{x: 155, y: 130}, {x: 195, y: 165}],
        [{x: 115, y: 180}, {x: 195, y: 180}],
        [{x: 195, y: 180}, {x: 195, y: 220}, {x: 165, y: 235}],
        [{x: 145, y: 180}, {x: 115, y: 235}]
      ],
      compounds: [
        { word: '事務所', reading: 'じむしょ', meaning: 'Office' },
        { word: '義務', reading: 'ぎむ', meaning: 'Obligation, duty' },
        { word: '公務員', reading: 'こうむいん', meaning: 'Civil servant' }
      ]
    },
    {
      char: '象',
      meaning: 'Elephant, Phenomenon, Image',
      onyomi: ['ショウ', 'ゾウ'],
      kunyomi: [],
      strokes: 12,
      mnemonic: 'Trunk, large tusks, wide ears and back legs of an elephant.',
      guideStrokes: [
        [{x: 125, y: 65}, {x: 175, y: 65}],
        [{x: 150, y: 65}, {x: 150, y: 95}],
        [{x: 95, y: 95}, {x: 205, y: 95}],
        [{x: 115, y: 110}, {x: 105, y: 140}],
        [{x: 140, y: 110}, {x: 140, y: 140}],
        [{x: 165, y: 110}, {x: 165, y: 140}],
        [{x: 190, y: 110}, {x: 180, y: 140}],
        [{x: 90, y: 145}, {x: 210, y: 145}],
        [{x: 125, y: 155}, {x: 95, y: 215}],
        [{x: 150, y: 155}, {x: 145, y: 235}],
        [{x: 165, y: 155}, {x: 195, y: 215}],
        [{x: 180, y: 175}, {x: 215, y: 225}]
      ],
      compounds: [
        { word: '印象', reading: 'いんしょう', meaning: 'Impression' },
        { word: '対象', reading: 'たいしょう', meaning: 'Target, object' },
        { word: '現象', reading: 'げんしょう', meaning: 'Phenomenon' }
      ]
    },
    {
      char: '照',
      meaning: 'Illuminate, Shine, Compare, Refer to',
      onyomi: ['ショウ'],
      kunyomi: ['て・る', 'て・らす', 'て・れる'],
      strokes: 13,
      mnemonic: 'Sun (日) above blade/mouth (昭) illuminated by four cooking fire droplets (灬).',
      guideStrokes: [
        [{x: 90, y: 65}, {x: 90, y: 115}],
        [{x: 90, y: 65}, {x: 145, y: 65}, {x: 145, y: 115}],
        [{x: 90, y: 90}, {x: 145, y: 90}],
        [{x: 90, y: 115}, {x: 145, y: 115}],
        [{x: 175, y: 65}, {x: 155, y: 90}],
        [{x: 155, y: 90}, {x: 210, y: 90}, {x: 185, y: 125}],
        [{x: 175, y: 95}, {x: 160, y: 135}],
        [{x: 160, y: 135}, {x: 195, y: 135}],
        [{x: 160, y: 160}, {x: 195, y: 160}],
        [{x: 80, y: 200}, {x: 95, y: 225}],
        [{x: 115, y: 200}, {x: 125, y: 225}],
        [{x: 155, y: 200}, {x: 165, y: 225}],
        [{x: 195, y: 200}, {x: 215, y: 225}]
      ],
      compounds: [
        { word: '対照的', reading: 'たいしょうてき', meaning: 'Contrastive' },
        { word: '参照', reading: 'さんしょう', meaning: 'Reference' },
        { word: '照明', reading: 'しょうめい', meaning: 'Illumination, lighting' }
      ]
    }
  ],

  vocabulary: [
    { word: 'お世話になっております', reading: 'おせわになっております', romaji: 'osewa ni natte orimasu', meaning: 'Thank you for your ongoing partnership (Standard business opening)', pitch: 'Business set-phrase', audioKey: 'おせわになっております', example: '平素は大変お世話になっております。(We are deeply grateful for your continued support.)' },
    { word: 'ご査収ください', reading: 'ごさしゅうください', romaji: 'gosashuu kudasai', meaning: 'Please inspect / confirm the enclosed documents', pitch: 'Business set-phrase', audioKey: 'ごさしゅうください', example: '企画書のファイルを添付いたしましたので、ご査収ください。(I have attached the proposal file; please review it.)' },
    { word: '恐縮ですが', reading: 'きょうしゅくですが', romaji: 'kyoushuku desu ga', meaning: 'I am extremely sorry to trouble you, but... (Cushion phrase)', pitch: 'Business set-phrase', audioKey: 'きょうしゅくですが', example: '恐縮ですが、明日までにご返信いただけますでしょうか。(I apologize for the burden, but could you reply by tomorrow?)' },
    { word: '柔軟', reading: 'じゅうなん', romaji: 'juunan', meaning: 'Flexible, adaptable', pitch: 'Heiban', audioKey: 'じゅうなん', example: '変化に対して柔軟に対応する。(To respond flexibly to change.)' },
    { word: '把握', reading: 'はあく', romaji: 'haaku', meaning: 'Grasp, understand, master', pitch: 'Heiban', audioKey: 'はあく', example: '現場の状況を正確に把握する。(Accurately grasp the frontline situation.)' },
    { word: '検討', reading: 'けんとう', romaji: 'kentou', meaning: 'Consideration, scrutiny, examination', pitch: 'Heiban', audioKey: 'けんとう', example: '前向きに検討させていただきます。(We will take it under positive consideration.)' },
    { word: '著しい', reading: 'いちじるしい', romaji: 'ichijirushii', meaning: 'Remarkable, conspicuous, striking', pitch: 'Nakadaka', audioKey: 'いちじるしい', example: '技術の著しい進歩が見られる。(Remarkable technological advancement is seen.)' },
    { word: '余儀なくされる', reading: 'よぎなくされる', romaji: 'yoginaku sareru', meaning: 'To be forced to, to have no choice but to', pitch: 'Idiomatic', audioKey: 'よぎなくされる', example: '台風のため計画の変更を余儀なくされた。(We were forced to change plans due to the typhoon.)' },
    { word: '効率', reading: 'こうりつ', romaji: 'kouritsu', meaning: 'Efficiency, performance', pitch: 'Heiban', audioKey: 'こうりつ', example: '業務の効率を高める。(Improve operational efficiency.)' },
    { word: '推進', reading: 'すいしん', romaji: 'suishin', meaning: 'Promotion, drive forward, propulsion', pitch: 'Heiban', audioKey: 'すいしん', example: 'ペーパーレス化を推進しています。(We are driving forward paperless operations.)' }
  ],

  discourseConnectors: [
    {
      pattern: '〜に伴って (Ni tomonatte) / 〜に伴い',
      meaning: 'In accordance with / As X changes, Y also changes concurrently.',
      nuance: 'Formal causal evolution. Indicates macroeconomic or societal trends.',
      example: '人口の減少に伴って、地方の公共交通機関の維持が困難になっている。(In line with population decline, maintaining regional public transit has become difficult.)'
    },
    {
      pattern: '〜に際して (Ni saishite) / 〜に際し',
      meaning: 'On the occasion of / Prior to embarking upon X.',
      nuance: 'Formal business or ceremonial announcement (contracts, openings, milestones).',
      example: '新工場の建設に際して、周辺住民への丁寧な説明が行われた。(Prior to the construction of the new factory, detailed briefings were given to local residents.)'
    },
    {
      pattern: '〜どころか (Dokoro ka)',
      meaning: 'Far from X, on the contrary Y! / Not only not X, but rather much worse.',
      nuance: 'Strong contrast that shatters baseline expectations.',
      example: '回復するどころか、病状は悪化の一途をたどっている。(Far from recovering, the patient\'s condition is doing nothing but deteriorating.)'
    },
    {
      pattern: '〜一方 (で) (Ippou de)',
      meaning: 'On one hand... while on the other hand...',
      nuance: 'Juxtaposing two contrasting aspects of the same phenomenon.',
      example: 'AI技術は生活を豊かにする一方で、雇用の喪失という深刻な懸念も抱えている。(While AI enriches life, on the other hand it harbors grave concerns over job losses.)'
    },
    {
      pattern: '〜を契機に (O keiki ni) / 〜を契機として',
      meaning: 'Taking X as the turning point / catalyst for decisive change.',
      nuance: 'Marks a pivotal historical or organizational trigger.',
      example: '海外留学を契機に、彼女は国際開発の仕事を目指すようになった。(Taking her overseas study as the turning point, she set her sights on a career in international development.)'
    }
  ],

  timedReadingChallenge: {
    title: 'タイムアタック読解：デジタル社会における「働き方改革」',
    timeLimitSeconds: 60,
    textHtml: `
      <p>
        <ruby>近年<rt>きんねん</rt></ruby>、リモートワークの<ruby>普及<rt>ふきゅう</rt></ruby>に<ruby>伴<rt>ともな</rt></ruby>って、<ruby>企業<rt>きぎょう</rt></ruby>における「<ruby>働<rt>はたら</rt></ruby>き<ruby>方<rt>かた</rt></ruby>」の<ruby>概念<rt>がいねん</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きく<ruby>変貌<rt>へんぼう</rt></ruby>を<ruby>遂<rt>と</rt></ruby>げつつある。
        <ruby>通勤時間<rt>つうきんじかん</rt></ruby>の<ruby>削減<rt>さくげん</rt></ruby>や<ruby>柔軟<rt>じゅうなん</rt></ruby>な<ruby>時間配分<rt>じかんはいぶん</rt></ruby>が<ruby>生産性<rt>せいさんせい</rt></ruby>の<ruby>向上<rt>こうじょう</rt></ruby>をもたらす<ruby>一方<rt>いっぽう</rt></ruby>で、<ruby>社員間<rt>しゃいんかん</rt></ruby>の「<ruby>偶発的<rt>ぐうはつてき</rt></ruby>なコミュニケーション」の<ruby>激減<rt>げきげん</rt></ruby>を<ruby>懸念<rt>けねん</rt></ruby>する<ruby>声<rt>こえ</rt></ruby>も<ruby>少<rt>すく</rt></ruby>なくない。
      </p>
      <p>
        <ruby>単<rt>たん</rt></ruby>にデジタルツールを<ruby>導入<rt>どうにゅう</rt></ruby>するにとどまらず、<ruby>孤独感<rt>こどくかん</rt></ruby>の<ruby>解消<rt>かいしょう</rt></ruby>やチームの<ruby>連帯感<rt>れんたいかん</rt></ruby>をいかに<ruby>醸成<rt>じょうせい</rt></ruby>するかが、これからのマネジメントに<ruby>課<rt>か</rt></ruby>せられた<ruby>最重要<rt>さいじゅうよう</rt></ruby>な<ruby>課題<rt>かだい</rt></ruby>である。
        <ruby>制度<rt>せいど</rt></ruby>の<ruby>形式化<rt>けいしきか</rt></ruby>に<ruby>陥<rt>おちい</rt></ruby>ることなく、<ruby>社員<rt>しゃいん</rt></ruby>のウェルビーイングを<ruby>真<rt>しん</rt></ruby>に<ruby>重視<rt>じゅうし</rt></ruby>した<ruby>組織設計<rt>そしきせっけい</rt></ruby>こそが、<ruby>持続可能<rt>じぞくかのう</rt></ruby>な<ruby>成長<rt>せいちょう</rt></ruby>の<ruby>鍵<rt>かぎ</rt></ruby>を<ruby>握<rt>にぎ</rt></ruby>っているといえよう。
      </p>
    `,
    questions: [
      {
        question: '筆者がリモートワークの課題として指摘している最大の懸念点は何か。',
        options: [
          '通勤手当の廃止',
          '社員間の偶発的なコミュニケーションの激減や孤独感の発生',
          'パソコンやソフトウェアの購入費用の増大',
          '労働時間の短縮による給与の減少'
        ],
        correctIndex: 1,
        explanation: 'The text highlights: 社員間の「偶発的なコミュニケーション」の激減を懸念する声も少なくない。孤独感の解消やチームの連帯感をいかに醸成するかが最重要な課題。'
      },
      {
        question: '筆者が持続可能な成長のために最も不可欠だと主張している要素はどれか。',
        options: [
          '出社日数を毎日厳格に管理すること',
          '制度の形式化を避け、社員のウェルビーイングを真に重視した組織設計を行うこと',
          'デジタルツールの使用を直ちに禁止すること',
          '役職者の給与を倍増させること'
        ],
        correctIndex: 1,
        explanation: 'Final sentence: 制度の形式化に陥ることなく、社員のウェルビーイングを真に重視した組織設計こそが、持続可能な成長の鍵を握っているといえよう。'
      }
    ]
  },

  quizQuestions: [
    {
      type: 'multiple-choice',
      prompt: 'Select the appropriate business opening: 平素は大変 ___。',
      options: ['お世話になっております', 'お世話にさせていただきます', 'お世話になられます', 'お世話にしております'],
      correctIndex: 0,
      explanation: '「大変お世話になっております」 is the gold standard polite business greeting acknowledging continuing relations.'
    },
    {
      type: 'multiple-choice',
      prompt: 'Fill in the connector: 人口の高齢化が ___ 、社会保障費の増大が懸念されている。',
      options: ['進むに伴って', '進むどころか', '進むに際して', '進む一方で'],
      correctIndex: 0,
      explanation: '〜に伴って denotes simultaneous systemic change: "In tandem with the advancing aging of the population...".'
    },
    {
      type: 'audio-prompt',
      audioText: '企画書のファイルを添付いたしましたので、ご査収ください。',
      prompt: 'Listen to the audio. What is the speaker requesting the recipient do?',
      options: ['Delete the attached file', 'Inspect and review the attached file', 'Forward the proposal to competitors', 'Print out 100 hard copies'],
      correctIndex: 1,
      explanation: 'ご査収ください (gosashuu kudasai) is formal business Japanese for "please review / confirm the enclosed documents".'
    },
    {
      type: 'unscramble',
      prompt: 'Unscramble: "While technology advances, on the other hand ethics are tested."',
      tokens: ['技術が進歩する', '一方で、', '倫理的な課題も', '問われている。'],
      correctOrder: ['技術が進歩する', '一方で、', '倫理的な課題も', '問われている。'],
      explanation: '技術が進歩する (technology progresses) + 一方で、(on the other hand,) + 倫理的な課題も問われている (ethical challenges are also examined).'
    },
    {
      type: 'fill-in-blank',
      prompt: '病気は治る ___ 、日に日に悪化していった。',
      options: ['どころか', 'に伴って', 'に際して', 'を契機に'],
      correctIndex: 0,
      explanation: '〜どころか expresses strong contrariety: "Far from healing, it got worse by the day."'
    }
  ]
};
