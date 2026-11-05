/**
 * JLPT N3 Curriculum Data: Intermediate (The Bridge)
 * Nuance distinctions (わけ vs はず, ように vs ために),
 * Transitive vs Intransitive pairs, Indirect & Polite expressions,
 * Kanji, Vocabulary, Reading Comprehension with toggleable Furigana, Quizzes.
 */

window.N3_DATA = {
  level: 'N3',
  title: 'JLPT N3: Intermediate (The Bridge)',
  description: 'Cross the bridge from textbook patterns to real Japanese: master nuanced reasoning (わけ vs はず), intent vs result (ように vs ために), and transitive/intransitive dynamic pairs.',
  stats: {
    targetKanji: 650,
    targetVocab: 3750,
    targetGrammar: 130
  },

  kanji: [
    {
      char: '政',
      meaning: 'Politics, Government',
      onyomi: ['セイ', 'ショウ'],
      kunyomi: ['まつりごと'],
      strokes: 9,
      mnemonic: 'Correct (正) actions enforced by the strike radical (攵): good governance.',
      guideStrokes: [
        [{x: 70, y: 80}, {x: 135, y: 80}],
        [{x: 100, y: 80}, {x: 100, y: 155}],
        [{x: 100, y: 120}, {x: 135, y: 120}],
        [{x: 75, y: 185}, {x: 75, y: 225}],
        [{x: 65, y: 225}, {x: 140, y: 225}],
        [{x: 175, y: 65}, {x: 155, y: 115}],
        [{x: 155, y: 115}, {x: 225, y: 105}],
        [{x: 195, y: 115}, {x: 155, y: 235}],
        [{x: 165, y: 155}, {x: 225, y: 235}]
      ],
      compounds: [
        { word: '政治', reading: 'せいじ', meaning: 'Politics' },
        { word: '政府', reading: 'せいふ', meaning: 'Government' },
        { word: '政策', reading: 'せいさく', meaning: 'Policy' }
      ]
    },
    {
      char: '治',
      meaning: 'Reign, Cure, Heal, Rule',
      onyomi: ['ジ', 'チ'],
      kunyomi: ['おさ・める', 'なお・る', 'なお・す'],
      strokes: 8,
      mnemonic: 'Water radical (氵) harmonized by speaking platforms (台): managing water cures flooding.',
      guideStrokes: [
        [{x: 80, y: 75}, {x: 105, y: 95}],
        [{x: 70, y: 125}, {x: 95, y: 145}],
        [{x: 65, y: 215}, {x: 105, y: 175}],
        [{x: 165, y: 65}, {x: 135, y: 115}],
        [{x: 135, y: 115}, {x: 215, y: 145}],
        [{x: 125, y: 175}, {x: 125, y: 235}],
        [{x: 125, y: 175}, {x: 215, y: 175}, {x: 215, y: 235}],
        [{x: 125, y: 235}, {x: 215, y: 235}]
      ],
      compounds: [
        { word: '政治家', reading: 'せいじか', meaning: 'Politician' },
        { word: '治療', reading: 'ちりょう', meaning: 'Medical treatment' },
        { word: '自治', reading: 'じち', meaning: 'Self-government' }
      ]
    },
    {
      char: '経',
      meaning: 'Pass through, Manage, Sutra',
      onyomi: ['ケイ', 'キョウ'],
      kunyomi: ['へ・る'],
      strokes: 11,
      mnemonic: 'Silk thread radical (糸) woven through an underground stream.',
      guideStrokes: [
        [{x: 85, y: 65}, {x: 65, y: 100}],
        [{x: 65, y: 100}, {x: 105, y: 95}, {x: 80, y: 135}],
        [{x: 80, y: 135}, {x: 110, y: 130}],
        [{x: 85, y: 145}, {x: 85, y: 235}],
        [{x: 85, y: 170}, {x: 65, y: 210}],
        [{x: 85, y: 175}, {x: 110, y: 210}],
        [{x: 135, y: 80}, {x: 215, y: 80}],
        [{x: 130, y: 125}, {x: 220, y: 125}],
        [{x: 175, y: 80}, {x: 175, y: 170}],
        [{x: 155, y: 170}, {x: 195, y: 170}],
        [{x: 125, y: 225}, {x: 225, y: 225}]
      ],
      compounds: [
        { word: '経済', reading: 'けいざい', meaning: 'Economy' },
        { word: '経験', reading: 'けいけん', meaning: 'Experience' },
        { word: '経営', reading: 'けいえい', meaning: 'Management' }
      ]
    },
    {
      char: '済',
      meaning: 'Settle, Relieve, Finish',
      onyomi: ['サイ', 'セイ'],
      kunyomi: ['す・む', 'す・ます'],
      strokes: 11,
      mnemonic: 'Water radical (氵) with neat alignment (斉): settling debt smoothly.',
      guideStrokes: [
        [{x: 75, y: 70}, {x: 100, y: 90}],
        [{x: 65, y: 125}, {x: 90, y: 145}],
        [{x: 60, y: 215}, {x: 100, y: 175}],
        [{x: 145, y: 65}, {x: 185, y: 65}],
        [{x: 165, y: 65}, {x: 165, y: 100}],
        [{x: 125, y: 105}, {x: 220, y: 105}],
        [{x: 145, y: 115}, {x: 130, y: 165}],
        [{x: 185, y: 115}, {x: 205, y: 165}],
        [{x: 120, y: 175}, {x: 225, y: 175}],
        [{x: 155, y: 175}, {x: 140, y: 235}],
        [{x: 180, y: 175}, {x: 215, y: 235}]
      ],
      compounds: [
        { word: '経済学', reading: 'けいざいがく', meaning: 'Economics' },
        { word: '返済', reading: 'へんさい', meaning: 'Repayment' },
        { word: '済む', reading: 'すむ', meaning: 'To finish/conclude' }
      ]
    },
    {
      char: '際',
      meaning: 'Occasion, Edge, Associate',
      onyomi: ['サイ'],
      kunyomi: ['きわ'],
      strokes: 14,
      mnemonic: 'Mound/wall radical (阝) bordering the festival altar (祭): an international edge.',
      guideStrokes: [
        [{x: 65, y: 70}, {x: 95, y: 70}, {x: 80, y: 115}],
        [{x: 80, y: 115}, {x: 105, y: 145}, {x: 75, y: 195}],
        [{x: 75, y: 70}, {x: 75, y: 235}],
        [{x: 135, y: 65}, {x: 120, y: 105}],
        [{x: 155, y: 65}, {x: 170, y: 105}],
        [{x: 125, y: 115}, {x: 185, y: 115}],
        [{x: 195, y: 80}, {x: 185, y: 135}],
        [{x: 140, y: 145}, {x: 195, y: 145}],
        [{x: 165, y: 145}, {x: 165, y: 235}],
        [{x: 125, y: 170}, {x: 150, y: 205}],
        [{x: 205, y: 170}, {x: 180, y: 205}],
        [{x: 120, y: 235}, {x: 215, y: 235}],
        [{x: 135, y: 195}, {x: 135, y: 225}],
        [{x: 195, y: 195}, {x: 195, y: 225}]
      ],
      compounds: [
        { word: '国際', reading: 'こくさい', meaning: 'International' },
        { word: '実際', reading: 'じっさい', meaning: 'Actual, real' },
        { word: '交際', reading: 'こうさい', meaning: 'Association, dating' }
      ]
    },
    {
      char: '念',
      meaning: 'Thought, Wish, Attention',
      onyomi: ['ネン'],
      kunyomi: [],
      strokes: 8,
      mnemonic: 'Now (今) inside the Heart (心): holding a cherished thought in mind.',
      guideStrokes: [
        [{x: 150, y: 60}, {x: 90, y: 115}],
        [{x: 150, y: 60}, {x: 215, y: 115}],
        [{x: 125, y: 115}, {x: 185, y: 115}],
        [{x: 150, y: 115}, {x: 150, y: 145}],
        [{x: 90, y: 175}, {x: 80, y: 210}],
        [{x: 115, y: 165}, {x: 130, y: 235}, {x: 180, y: 235}, {x: 195, y: 205}],
        [{x: 145, y: 180}, {x: 155, y: 205}],
        [{x: 185, y: 165}, {x: 205, y: 185}]
      ],
      compounds: [
        { word: '残念', reading: 'ざんねん', meaning: 'Regrettable, unfortunate' },
        { word: '記念', reading: 'きねん', meaning: 'Commemoration' },
        { word: '概念', reading: 'がいねん', meaning: 'Concept' }
      ]
    },
    {
      char: '結',
      meaning: 'Tie, Bind, Conclude',
      onyomi: ['ケツ', 'ケチ'],
      kunyomi: ['むす・ぶ', 'ゆ・う'],
      strokes: 12,
      mnemonic: 'Silk threads (糸) tied firmly with auspicious strength (吉).',
      guideStrokes: [
        [{x: 85, y: 65}, {x: 65, y: 100}],
        [{x: 65, y: 100}, {x: 105, y: 95}, {x: 80, y: 135}],
        [{x: 80, y: 135}, {x: 110, y: 130}],
        [{x: 85, y: 145}, {x: 85, y: 235}],
        [{x: 85, y: 175}, {x: 65, y: 210}],
        [{x: 85, y: 175}, {x: 105, y: 210}],
        [{x: 135, y: 85}, {x: 215, y: 85}],
        [{x: 175, y: 65}, {x: 175, y: 140}],
        [{x: 145, y: 125}, {x: 205, y: 125}],
        [{x: 145, y: 160}, {x: 145, y: 230}],
        [{x: 145, y: 160}, {x: 210, y: 160}, {x: 210, y: 230}],
        [{x: 145, y: 230}, {x: 210, y: 230}]
      ],
      compounds: [
        { word: '結婚', reading: 'けっこん', meaning: 'Marriage' },
        { word: '結果', reading: 'けっか', meaning: 'Result' },
        { word: '結論', reading: 'けつろん', meaning: 'Conclusion' }
      ]
    },
    {
      char: '婚',
      meaning: 'Marriage',
      onyomi: ['コン'],
      kunyomi: [],
      strokes: 11,
      mnemonic: 'Woman radical (女) at dusk (昏): traditional sunset marriage ceremony.',
      guideStrokes: [
        [{x: 85, y: 75}, {x: 65, y: 155}, {x: 110, y: 155}],
        [{x: 95, y: 105}, {x: 75, y: 235}],
        [{x: 55, y: 150}, {x: 120, y: 140}],
        [{x: 145, y: 75}, {x: 205, y: 75}],
        [{x: 175, y: 60}, {x: 175, y: 125}],
        [{x: 140, y: 125}, {x: 215, y: 125}],
        [{x: 145, y: 145}, {x: 145, y: 230}],
        [{x: 145, y: 145}, {x: 210, y: 145}, {x: 210, y: 230}],
        [{x: 145, y: 175}, {x: 210, y: 175}],
        [{x: 145, y: 205}, {x: 210, y: 205}],
        [{x: 145, y: 230}, {x: 210, y: 230}]
      ],
      compounds: [
        { word: '婚約', reading: 'こんやく', meaning: 'Engagement' },
        { word: '離婚', reading: 'りこん', meaning: 'Divorce' },
        { word: '新婚', reading: 'しんこん', meaning: 'Newlywed' }
      ]
    },
    {
      char: '連',
      meaning: 'Lead, Connect, Accompany',
      onyomi: ['レン'],
      kunyomi: ['つ・れる', 'つら・なる'],
      strokes: 10,
      mnemonic: 'A line of cars/vehicles (車) rolling down the road (⻌) connected together.',
      guideStrokes: [
        [{x: 125, y: 75}, {x: 205, y: 75}],
        [{x: 130, y: 100}, {x: 130, y: 145}],
        [{x: 130, y: 100}, {x: 200, y: 100}, {x: 200, y: 145}],
        [{x: 130, y: 120}, {x: 200, y: 120}],
        [{x: 130, y: 145}, {x: 200, y: 145}],
        [{x: 115, y: 165}, {x: 215, y: 165}],
        [{x: 165, y: 60}, {x: 165, y: 195}],
        [{x: 75, y: 85}, {x: 95, y: 105}],
        [{x: 70, y: 125}, {x: 95, y: 145}],
        [{x: 65, y: 180}, {x: 95, y: 180}, {x: 75, y: 235}, {x: 215, y: 235}]
      ],
      compounds: [
        { word: '連絡', reading: 'れんらく', meaning: 'Contact, communication' },
        { word: '連続', reading: 'れんぞく', meaning: 'Continuation, series' },
        { word: '関連', reading: 'かんれん', meaning: 'Relation, connection' }
      ]
    },
    {
      char: '絡',
      meaning: 'Entwine, Coil, Get entangled',
      onyomi: ['ラク'],
      kunyomi: ['から・む', 'から・まる'],
      strokes: 12,
      mnemonic: 'Silk threads (糸) entangled with each other (各).',
      guideStrokes: [
        [{x: 85, y: 65}, {x: 65, y: 100}],
        [{x: 65, y: 100}, {x: 105, y: 95}, {x: 80, y: 135}],
        [{x: 80, y: 135}, {x: 110, y: 130}],
        [{x: 85, y: 145}, {x: 85, y: 235}],
        [{x: 85, y: 175}, {x: 65, y: 210}],
        [{x: 85, y: 175}, {x: 105, y: 210}],
        [{x: 175, y: 65}, {x: 145, y: 105}],
        [{x: 135, y: 105}, {x: 215, y: 105}],
        [{x: 155, y: 110}, {x: 125, y: 165}],
        [{x: 140, y: 175}, {x: 140, y: 230}],
        [{x: 140, y: 175}, {x: 210, y: 175}, {x: 210, y: 230}],
        [{x: 140, y: 230}, {x: 210, y: 230}]
      ],
      compounds: [
        { word: '連絡先', reading: 'れんらくさき', meaning: 'Contact information' },
        { word: '短絡', reading: 'たんらく', meaning: 'Short circuit / rash jump' }
      ]
    }
  ],

  vocabulary: [
    { word: 'お互いに', reading: 'おたがいに', romaji: 'otagai ni', meaning: 'Mutually, to each other', pitch: 'Heiban', audioKey: 'おたがいに', example: 'お互いに助け合いましょう。(Let\'s help one another.)' },
    { word: '意識', reading: 'いしき', romaji: 'ishiki', meaning: 'Consciousness, awareness', pitch: 'Atamadaka', audioKey: 'いしき', example: '健康への意識が高まっています。(Awareness of health is rising.)' },
    { word: '傾向', reading: 'けいこう', romaji: 'keikou', meaning: 'Tendency, trend', pitch: 'Heiban', audioKey: 'けいこう', example: '若者の読書離れの傾向が見られる。(A tendency of young people reading less is observed.)' },
    { word: '満足', reading: 'まんぞく', romaji: 'manzoku', meaning: 'Satisfaction, contentment', pitch: 'Atamadaka', audioKey: 'まんぞく', example: '結果にとても満足しています。(I am very satisfied with the results.)' },
    { word: '偶然', reading: 'ぐうぜん', romaji: 'guuzen', meaning: 'Coincidence, by chance', pitch: 'Heiban', audioKey: 'ぐうぜん', example: '駅で偶然高校の友達に会った。(I ran into a high school friend by chance at the station.)' },
    { word: '影響', reading: 'えいきょう', romaji: 'eikyou', meaning: 'Influence, impact', pitch: 'Heiban', audioKey: 'えいきょう', example: 'SNSが社会に与える影響は大きい。(The influence of social media on society is profound.)' },
    { word: '解決', reading: 'かいけつ', romaji: 'kaiketsu', meaning: 'Settlement, solution, resolution', pitch: 'Heiban', audioKey: 'かいけつ', example: '問題を話し合って解決した。(We discussed the problem and resolved it.)' },
    { word: '確認', reading: 'かくにん', romaji: 'kakunin', meaning: 'Confirmation, verification', pitch: 'Heiban', audioKey: 'かくにん', example: '予約の確認メールが届きました。(The booking confirmation email arrived.)' },
    { word: '重視', reading: 'じゅうし', romaji: 'juushi', meaning: 'Attaching importance to, prioritizing', pitch: 'Atamadaka', audioKey: 'じゅうし', example: 'スピードよりも質を重視します。(We prioritize quality over speed.)' },
    { word: '納得', reading: 'なっとく', romaji: 'nattoku', meaning: 'Consent, agreement, understanding', pitch: 'Heiban', audioKey: 'なっとく', example: '説明を聞いて十分に納得した。(I listened to the explanation and was completely convinced.)' }
  ],

  grammarNuances: [
    {
      title: 'わけ (Wake) vs はず (Hazu)',
      explanation: 'Both relate to logical reasoning, but their epistemic grounds differ fundamentally:',
      subsections: [
        {
          name: '〜はずだ (Expectation / Strong Assumption)',
          details: 'Based on evidence or knowledge, something SHOULD naturally happen or BE true (speaker expectation). Can be broken by unforeseen circumstances.',
          example: '彼は十年間日本に住んでいたから、日本語がペラペラなはずだ。(He lived in Japan for 10 years, so he OUGHT to be fluent.)'
        },
        {
          name: '〜わけだ (Natural Reason / "No wonder!")',
          details: 'Explains the logical CAUSE behind an observed fact: "Ah! Now that I know X, that is why Y is so!". Also used for logical conclusion (〜わけではない: it doesn\'t mean that...).',
          example: '熱が39度もある。体がだるいわけだ。(I have a 39°C fever. No wonder my whole body feels sluggish!)'
        }
      ]
    },
    {
      title: 'ように (You ni) vs ために (Tame ni)',
      explanation: 'Both translate loosely to "in order to / so that", but follow strict grammatical agency constraints:',
      subsections: [
        {
          name: '〜ために (Direct Intent / Volitional Goal)',
          details: 'Preceded by VOLITIONAL verbs (where the subject controls the outcome). Same subject across clauses.',
          example: '家を買うために、毎月貯金しています。(In order to buy a house [volitional], I save money every month.)'
        },
        {
          name: '〜ように (State / Inability / Non-Volitional Condition)',
          details: 'Preceded by NON-VOLITIONAL verbs (potential form, 忘れない, 見える, 治る). Means "so that a state may come to be".',
          example: '風邪が早く治るように、温かいお茶を飲みます。(So that my cold heals quickly [non-volitional], I drink warm tea.)'
        }
      ]
    },
    {
      title: 'Transitive vs Intransitive Pairs (他動詞 vs 自動詞)',
      explanation: 'Transitive (他動詞) involves an active agent acting on an object (を). Intransitive (自動詞) describes a spontaneous state or occurrence (が):',
      pairs: [
        { trans: 'ドアを開ける (Open the door)', intrans: 'ドアが開く (The door opens)', memoryTip: '-keru is transitive, -ku is intransitive' },
        { trans: '電気をつける (Turn on light)', intrans: '電気がつく (Light comes on)', memoryTip: '-keru triggers action, -ku is the state' },
        { trans: '財布を落とす (Drop wallet)', intrans: '財布が落ちる (Wallet falls)', memoryTip: '-su is transitive agent, -ru is natural fall' },
        { trans: '壊す (Break something)', intrans: '壊れる (Something breaks)', memoryTip: '-su breaks object, -reru is broken condition' }
      ]
    }
  ],

  readingPassage: {
    title: '言葉のニュアンスと文化 (Nuances in Language and Culture)',
    textHtml: `
      <p>
        <ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>していて<ruby>最<rt>もっと</rt></ruby>も<ruby>面白<rt>おもしろ</rt></ruby>く、かつ<ruby>難<rt>むずか</rt></ruby>しいと<ruby>感<rt>かん</rt></ruby>じるのは、<ruby>状況<rt>じょうきょう</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じた「<ruby>言<rt>い</rt></ruby>い<ruby>回<rt>まわ</rt></ruby>し」の<ruby>選<rt>えら</rt></ruby>び<ruby>方<rt>かた</rt></ruby>です。
        <ruby>例<rt>たと</rt></ruby>えば、<ruby>何<rt>なに</rt></ruby>かを<ruby>断<rt>ことわ</rt></ruby>る<ruby>際<rt>さい</rt></ruby>に「できません」と<ruby>直接的<rt>ちょくせつてき</rt></ruby>に<ruby>伝<rt>つた</rt></ruby>えるのではなく、「ちょっと<ruby>都合<rt>つごう</rt></ruby>が<ruby>悪<rt>わる</rt></ruby>くて…」と<ruby>文末<rt>ぶんまつ</rt></ruby>を<ruby>濁<rt>にご</rt></ruby>すことで、<ruby>相手<rt>あいて</rt></ruby>への<ruby>配慮<rt>はいりょ</rt></ruby>を<ruby>示<rt>しめ</rt></ruby>します。
      </p>
      <p>
        これは、<ruby>人間関係<rt>にんげんかんけい</rt></ruby>の<ruby>調和<rt>ちょうわ</rt></ruby>を<ruby>大切<rt>たいせつ</rt></ruby>にする<ruby>日本<rt>にほん</rt></ruby>の<ruby>伝統的<rt>でんとうてき</rt></ruby>な<ruby>価値観<rt>かちかん</rt></ruby>から<ruby>生<rt>う</rt></ruby>まれたものです。<ruby>文法<rt>ぶんぽう</rt></ruby>のルールだけでなく、その<ruby>背景<rt>はいけい</rt></ruby>にある<ruby>文化<rt>ぶんか</rt></ruby>の<ruby>感覚<rt>かんかく</rt></ruby>を<ruby>理解<rt>りかい</rt></ruby>してこそ、<ruby>本当<rt>ほんとう</rt></ruby>の「<ruby>生<rt>い</rt></ruby>きた<ruby>日本語<rt>にほんご</rt></ruby>」を<ruby>使<rt>つか</rt></ruby>いこなせるようになるわけです。
      </p>
    `,
    questions: [
      {
        question: '日本人が何かを断る際に文末を濁すのはなぜですか。',
        options: ['嘘をつきたいから', '相手への配慮と人間関係の調和を大切にするから', '言葉を忘れてしまったから', '忙しすぎるから'],
        correctIndex: 1,
        explanation: 'The passage explicitly says: 相手への配慮を示します。これは人間関係の調和を大切にする日本の伝統的な価値観から生まれたものです。'
      },
      {
        question: '最後の文で「〜わけです」が使われている理由はどれですか。',
        options: ['ただの推測を述べている', '文化の背景を理解してこそ生きた日本語が話せるという当然の帰結・理由を解説している', '過去の出来事を回想している', '命令している'],
        correctIndex: 1,
        explanation: '〜わけです here expresses logical comprehension and natural conclusion: "That is precisely why / It logically follows that...".'
      }
    ]
  },

  quizQuestions: [
    {
      type: 'multiple-choice',
      prompt: 'Select the natural sentence: 忘れない ___ 、手帳にメモしておきました。',
      options: ['ために', 'ように', 'はずで', 'わけで'],
      correctIndex: 1,
      explanation: '「忘れない」(not forget) is a non-volitional state/negative verb, which requires 〜ように (so that).'
    },
    {
      type: 'multiple-choice',
      prompt: 'Which sentence correctly uses an intransitive verb (自動詞)?',
      options: ['私が窓を開けました。', '風で窓が開きました。', '窓を開けてください。', '窓を開けようと思います。'],
      correctIndex: 1,
      explanation: '「開く」(aku) is the intransitive partner of 開ける. The window opens spontaneously from the wind: 窓が開きました.'
    },
    {
      type: 'audio-prompt',
      audioText: '熱が39度もある。体がだるいわけだ。',
      prompt: 'Listen to the audio. What nuance does「〜わけだ」convey here?',
      options: ['The speaker expects to be sick next week', 'It explains the natural reason: "No wonder my body feels heavy!"', 'The speaker is asking for help', 'The speaker is denying they have a fever'],
      correctIndex: 1,
      explanation: '〜わけだ expresses logical revelation: "No wonder I feel so weary—I have a 39 degree fever!".'
    },
    {
      type: 'unscramble',
      prompt: 'Unscramble: "In order to buy a house, I am saving money every month."',
      tokens: ['家を', '買うために、', '毎月', '貯金しています。'],
      correctOrder: ['家を', '買うために、', '毎月', '貯金しています。'],
      explanation: '家を買う (volitional action) + ために (in order to) + 毎月貯金しています (saving money).'
    },
    {
      type: 'fill-in-blank',
      prompt: '彼は十年間日本に住んでいたから、日本語が上手に話せる ___ だ。',
      options: ['はず', 'わけ', 'ため', 'よう'],
      correctIndex: 0,
      explanation: 'Based on reasonable premises (lived 10 years in Japan), he OUGHT to speak well: 〜はずだ.'
    }
  ]
};
