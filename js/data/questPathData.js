/**
 * Quest Path & Stepping Stones Data: "Nihongo Odyssey / 道"
 * Interactive winding learning trail with bite-sized gamified lessons,
 * check-points, crowns, treasure chests, and varied rapid-fire question mechanics.
 */

window.QUEST_PATH_DATA = [
  {
    unitId: 'unit_1',
    unitNumber: 1,
    title: '🌸 Unit 1: The Awakening',
    subtitle: 'Master the 5 pure vowels, first greetings, the K/S lines, and your first Kanji.',
    color: '#10B981', // Emerald
    nodes: [
      {
        id: 'node_1',
        nodeNum: 1,
        title: 'The 5 Foundation Vowels',
        japaneseTitle: '母音 (あいうえお)',
        icon: '🐣',
        type: 'lesson',
        xpReward: 30,
        kobanReward: 15,
        summary: 'Every Japanese word is built from these 5 crisp, pure vowels: A, I, U, E, O.',
        questions: [
          {
            type: 'audio_choice',
            prompt: 'Listen and select the matching vowel sound:',
            audio: 'あ',
            options: [
              { text: 'あ', romaji: 'a', correct: true },
              { text: 'い', romaji: 'i', correct: false },
              { text: 'う', romaji: 'u', correct: false },
              { text: 'お', romaji: 'o', correct: false }
            ],
            explanation: '「あ」 represents the open "ah" sound like in "father".'
          },
          {
            type: 'pair_match',
            prompt: 'Tap the matching vowel pairs:',
            pairs: [
              { left: 'あ', right: 'a (ah)' },
              { left: 'い', right: 'i (ee)' },
              { left: 'う', right: 'u (oo)' },
              { left: 'え', right: 'e (eh)' }
            ]
          },
          {
            type: 'mnemonic_spotter',
            prompt: 'Which vowel looks like a big capital "T" with a ribbon on an apple?',
            options: [
              { text: 'あ', meaning: 'Apple "a"', correct: true },
              { text: 'お', meaning: 'Original "o"', correct: false },
              { text: 'う', meaning: 'Uh-oh "u"', correct: false }
            ],
            explanation: '「あ」 looks like a person with an apple in a ribbon! Remember: Apple = "a"!'
          },
          {
            type: 'audio_choice',
            prompt: 'Listen to the audio and pick the sound:',
            audio: 'え',
            options: [
              { text: 'え', romaji: 'e', correct: true },
              { text: 'い', romaji: 'i', correct: false },
              { text: 'お', romaji: 'o', correct: false },
              { text: 'あ', romaji: 'a', correct: false }
            ],
            explanation: '「え」 represents the crisp "eh" sound like in "egg".'
          },
          {
            type: 'word_unscramble',
            prompt: 'Tap the syllables to spell "Love" (Ai):',
            english: 'Love',
            correctTokens: ['あ', 'い'],
            distractors: ['う', 'え']
          }
        ]
      },
      {
        id: 'node_2',
        nodeNum: 2,
        title: 'Essential Survival Greetings',
        japaneseTitle: '毎日の挨拶',
        icon: '🗣️',
        type: 'lesson',
        xpReward: 35,
        kobanReward: 15,
        summary: 'Say hello, thank you, and excuse me with natural Japanese etiquette.',
        questions: [
          {
            type: 'audio_choice',
            prompt: 'Listen and select what this greeting means:',
            audio: 'こんにちは',
            options: [
              { text: 'Hello / Good afternoon', romaji: 'Konnichiwa', correct: true },
              { text: 'Good morning', romaji: 'Ohayou', correct: false },
              { text: 'Good night', romaji: 'Oyasumi', correct: false }
            ],
            explanation: '「こんにちは」 is used from mid-morning until sunset as a daytime greeting.'
          },
          {
            type: 'word_unscramble',
            prompt: 'Assemble: "Thank you very much" (Polite):',
            english: 'Thank you very much',
            correctTokens: ['ありがとう', 'ございます'],
            distractors: ['すみません', 'はい']
          },
          {
            type: 'pair_match',
            prompt: 'Tap the matching greetings:',
            pairs: [
              { left: 'はい', right: 'Yes' },
              { left: 'いいえ', right: 'No' },
              { left: 'すみません', right: 'Excuse me / Sorry' },
              { left: 'さようなら', right: 'Goodbye' }
            ]
          },
          {
            type: 'particle_fill',
            prompt: 'When getting a waiter\'s attention in a restaurant, you say:',
            sentence: '_____！ お水をお願いします。',
            correct: 'すみません',
            options: ['すみません', 'さようなら', 'いいえ'],
            explanation: '「すみません」 (Sumimasen) is used to call waitstaff, apologize, or say excuse me.'
          },
          {
            type: 'audio_choice',
            prompt: 'Listen to the audio and choose the correct phrase:',
            audio: 'ありがとう',
            options: [
              { text: 'ありがとう', romaji: 'Arigatou (Thanks)', correct: true },
              { text: 'こんにちは', romaji: 'Konnichiwa', correct: false },
              { text: 'さようなら', romaji: 'Sayounara', correct: false }
            ],
            explanation: '「ありがとう」 means "Thank you".'
          }
        ]
      },
      {
        id: 'node_3',
        nodeNum: 3,
        title: 'The K & S Lines (Ka & Sa)',
        japaneseTitle: 'か行・さ行',
        icon: '🔤',
        type: 'lesson',
        xpReward: 35,
        kobanReward: 20,
        summary: 'Combine consonants with the 5 vowels to unlock Ka-Ki-Ku-Ke-Ko and Sa-Shi-Su-Se-So.',
        questions: [
          {
            type: 'audio_choice',
            prompt: 'Listen and select the matching syllable:',
            audio: 'か',
            options: [
              { text: 'か', romaji: 'ka', correct: true },
              { text: 'さ', romaji: 'sa', correct: false },
              { text: 'た', romaji: 'ta', correct: false },
              { text: 'な', romaji: 'na', correct: false }
            ],
            explanation: '「か」 (ka) is written with a sword blade stroke and a droplet dot.'
          },
          {
            type: 'word_unscramble',
            prompt: 'Assemble the word "Sushi" using Kana:',
            english: 'Sushi',
            correctTokens: ['す', 'し'],
            distractors: ['さ', 'せ', 'き']
          },
          {
            type: 'pair_match',
            prompt: 'Tap matching syllable pairs:',
            pairs: [
              { left: 'か', right: 'ka' },
              { left: 'き', right: 'ki' },
              { left: 'す', right: 'su' },
              { left: 'せ', right: 'se' }
            ]
          },
          {
            type: 'audio_choice',
            prompt: 'Listen and pick the word:',
            audio: 'すし',
            options: [
              { text: 'すし (Sushi)', romaji: 'sushi', correct: true },
              { text: 'さけ (Sake)', romaji: 'sake', correct: false },
              { text: 'かさ (Umbrella)', romaji: 'kasa', correct: false }
            ],
            explanation: '「すし」 = Sushi!'
          },
          {
            type: 'word_unscramble',
            prompt: 'Assemble the word for "Umbrella" (Kasa):',
            english: 'Umbrella',
            correctTokens: ['か', 'さ'],
            distractors: ['き', 'す']
          }
        ]
      },
      {
        id: 'node_4',
        nodeNum: 4,
        title: 'Kanji Origins: Sun & Moon',
        japaneseTitle: '日と月 (漢字の起源)',
        icon: '☀️',
        type: 'lesson',
        xpReward: 40,
        kobanReward: 20,
        summary: 'Discover how ancient sketches of the sun and crescent moon became Kanji 日 and 月.',
        questions: [
          {
            type: 'mnemonic_spotter',
            prompt: 'Which Kanji character originated from a circular drawing of the radiant SUN with sunspots?',
            options: [
              { text: '日', meaning: 'Sun / Day', correct: true },
              { text: '月', meaning: 'Moon / Month', correct: false },
              { text: '木', meaning: 'Tree', correct: false }
            ],
            explanation: '「日」 was originally a circle with a dot, representing the sun!'
          },
          {
            type: 'mnemonic_spotter',
            prompt: 'Which Kanji represents a crescent moon peeking through drifting clouds?',
            options: [
              { text: '月', meaning: 'Moon / Month', correct: true },
              { text: '日', meaning: 'Sun', correct: false },
              { text: '山', meaning: 'Mountain', correct: false }
            ],
            explanation: '「月」 depicts a crescent moon in the evening sky.'
          },
          {
            type: 'pair_match',
            prompt: 'Tap the matching words:',
            pairs: [
              { left: '日本', right: 'Japan (にほん)' },
              { left: '今日', right: 'Today (きょう)' },
              { left: '日曜日', right: 'Sunday (にちようび)' },
              { left: '月曜日', right: 'Monday (げつようび)' }
            ]
          },
          {
            type: 'audio_choice',
            prompt: 'Listen to the audio and select the meaning:',
            audio: 'にほん',
            options: [
              { text: '日本 (Japan)', romaji: 'Nihon', correct: true },
              { text: '今日 (Today)', romaji: 'Kyou', correct: false },
              { text: '月曜日 (Monday)', romaji: 'Getsuyoubi', correct: false }
            ],
            explanation: '「日本」 (Nihon / Nippon) literally means "Origin of the Sun".'
          },
          {
            type: 'word_unscramble',
            prompt: 'Assemble "Sunday" using Kanji:',
            english: 'Sunday (Nichi-you-bi)',
            correctTokens: ['日', '曜', '日'],
            distractors: ['月', '本']
          }
        ]
      },
      {
        id: 'node_5',
        nodeNum: 5,
        title: 'Identity: [A] は [B] です',
        japaneseTitle: '基本文型: A は B です',
        icon: '🥢',
        type: 'lesson',
        xpReward: 40,
        kobanReward: 25,
        summary: 'Introduce yourself and state facts: "I am a student", "This is a pen".',
        questions: [
          {
            type: 'word_unscramble',
            prompt: 'Translate: "I am a student."',
            english: 'I am a student.',
            correctTokens: ['私', 'は', '学生', 'です'],
            distractors: ['ペン', 'これ', '水']
          },
          {
            type: 'particle_fill',
            prompt: 'Choose the topic particle for: "As for Tanaka, he is Japanese."',
            sentence: '田中さん ___ 日本人です。',
            correct: 'は',
            options: ['は', 'を', 'に', 'で'],
            explanation: 'The topic particle 「は」 (pronounced "wa") marks the topic of the sentence.'
          },
          {
            type: 'word_unscramble',
            prompt: 'Translate: "This is a pen."',
            english: 'This is a pen.',
            correctTokens: ['これ', 'は', 'ペン', 'です'],
            distractors: ['私', '学生', '本']
          },
          {
            type: 'pair_match',
            prompt: 'Match vocabulary terms:',
            pairs: [
              { left: '私 (わたし)', right: 'I / Me' },
              { left: 'これ', right: 'This (near me)' },
              { left: '学生 (がくせい)', right: 'Student' },
              { left: 'です', right: 'Is / Am / Are (polite)' }
            ]
          },
          {
            type: 'audio_choice',
            prompt: 'Listen and choose what was said:',
            audio: 'わたしはがくせいです',
            options: [
              { text: '私は学生です (I am a student)', romaji: 'Watashi wa gakusei desu', correct: true },
              { text: 'これはペンです (This is a pen)', romaji: 'Kore wa pen desu', correct: false },
              { text: '田中さんです (It is Tanaka)', romaji: 'Tanaka-san desu', correct: false }
            ],
            explanation: '「私は学生です」 states your identity cleanly and politely!'
          }
        ]
      },
      {
        id: 'node_6',
        nodeNum: 6,
        title: 'Shrine of Beginnings',
        japaneseTitle: '始まりの神社 (関所 1)',
        icon: '⛩️',
        type: 'checkpoint',
        xpReward: 60,
        kobanReward: 50,
        summary: 'Unit 1 Checkpoint! Prove your mastery of vowels, greetings, Sun/Moon Kanji, and identity sentences to claim your golden crown!',
        questions: [
          {
            type: 'audio_choice',
            prompt: 'Listen to the audio challenge:',
            audio: 'ありがとう',
            options: [
              { text: 'Thank you', romaji: 'Arigatou', correct: true },
              { text: 'Good morning', romaji: 'Ohayou', correct: false },
              { text: 'Goodbye', romaji: 'Sayounara', correct: false }
            ]
          },
          {
            type: 'word_unscramble',
            prompt: 'Assemble: "I am Japanese."',
            english: 'I am Japanese.',
            correctTokens: ['私', 'は', '日本人', 'です'],
            distractors: ['学生', 'ペン']
          },
          {
            type: 'mnemonic_spotter',
            prompt: 'Sun (日) + Moon (月) combined together creates which character meaning "Bright"?',
            options: [
              { text: '明', meaning: 'Bright (Sun + Moon)', correct: true },
              { text: '休', meaning: 'Rest (Person + Tree)', correct: false },
              { text: '男', meaning: 'Man (Field + Power)', correct: false }
            ],
            explanation: '「明」 (Bright) combines the two brightest celestial bodies: Sun and Moon!'
          },
          {
            type: 'pair_match',
            prompt: 'Check your mastery of Unit 1:',
            pairs: [
              { left: '日曜日', right: 'Sunday' },
              { left: '月曜日', right: 'Monday' },
              { left: 'こんにちは', right: 'Hello' },
              { left: '学生', right: 'Student' }
            ]
          },
          {
            type: 'word_unscramble',
            prompt: 'Assemble: "Excuse me, thank you."',
            english: 'Excuse me, thank you.',
            correctTokens: ['すみません', 'ありがとう'],
            distractors: ['いいえ', 'はい']
          }
        ]
      }
    ]
  },
  {
    unitId: 'unit_2',
    unitNumber: 2,
    title: '⛩️ Unit 2: Nature & Everyday Encounters',
    subtitle: 'Nature Kanji, Food & Drink, existence with あります/います, and questions.',
    color: '#3B82F6', // Cobalt Blue
    nodes: [
      {
        id: 'node_7',
        nodeNum: 7,
        title: 'Nature: Tree, Mountain & River',
        japaneseTitle: '自然の漢字 (木・山・川)',
        icon: '🌲',
        type: 'lesson',
        xpReward: 40,
        kobanReward: 20,
        summary: 'Learn pictograms for the natural elements of ancient Japan.',
        questions: [
          {
            type: 'mnemonic_spotter',
            prompt: 'A Person (人) resting in the shade of a Tree (木) makes which Kanji?',
            options: [
              { text: '休', meaning: 'Rest / Holiday (やすむ)', correct: true },
              { text: '林', meaning: 'Grove', correct: false },
              { text: '本', meaning: 'Book', correct: false }
            ],
            explanation: '「休」 depicts a tired traveler relaxing against a tree trunk!'
          },
          {
            type: 'pair_match',
            prompt: 'Match natural Kanji elements:',
            pairs: [
              { left: '木 (き)', right: 'Tree / Wood' },
              { left: '山 (やま)', right: 'Mountain' },
              { left: '川 (かわ)', right: 'River' },
              { left: '火 (ひ)', right: 'Fire' }
            ]
          },
          {
            type: 'word_unscramble',
            prompt: 'Assemble the word "Volcano" (Fire + Mountain):',
            english: 'Volcano (Kazan)',
            correctTokens: ['火', '山'],
            distractors: ['水', '木']
          },
          {
            type: 'audio_choice',
            prompt: 'Listen and choose what was said:',
            audio: 'かわ',
            options: [
              { text: '川 (River)', romaji: 'kawa', correct: true },
              { text: 'やま (Mountain)', romaji: 'yama', correct: false },
              { text: 'き (Tree)', romaji: 'ki', correct: false }
            ],
            explanation: '「川」 = River!'
          },
          {
            type: 'word_unscramble',
            prompt: 'Assemble "Two trees = Grove (Hayashi)":',
            english: 'Grove / Woods',
            correctTokens: ['木', '木'],
            distractors: ['山', '川']
          }
        ]
      },
      {
        id: 'node_8',
        nodeNum: 8,
        title: 'Food & Drink: Ordering Meals',
        japaneseTitle: '食事と飲み物',
        icon: '🍵',
        type: 'lesson',
        xpReward: 40,
        kobanReward: 20,
        summary: 'Order delicious sushi, cold water, and green tea in Japanese restaurants.',
        questions: [
          {
            type: 'pair_match',
            prompt: 'Tap matching foods & drinks:',
            pairs: [
              { left: 'お水 (おみず)', right: 'Cold Water' },
              { left: 'お茶 (おちゃ)', right: 'Green Tea' },
              { left: 'ご飯 (ごはん)', right: 'Cooked Rice / Meal' },
              { left: '魚 (さかな)', right: 'Fish' }
            ]
          },
          {
            type: 'word_unscramble',
            prompt: 'Translate: "Water, please."',
            english: 'Water, please.',
            correctTokens: ['お水', 'を', 'ください'],
            distractors: ['お茶', 'は', 'です']
          },
          {
            type: 'particle_fill',
            prompt: 'Select the direct object particle for: "Green tea, please."',
            sentence: 'お茶 ___ ください。',
            correct: 'を',
            options: ['を', 'は', 'に', 'が'],
            explanation: 'The particle 「を」 (pronounced "o") marks the item you are ordering or acting upon.'
          },
          {
            type: 'audio_choice',
            prompt: 'Listen to what the customer wants:',
            audio: 'おちゃをください',
            options: [
              { text: 'Green tea, please', romaji: 'Ocha o kudasai', correct: true },
              { text: 'Water, please', romaji: 'Omizu o kudasai', correct: false },
              { text: 'Rice, please', romaji: 'Gohan o kudasai', correct: false }
            ]
          },
          {
            type: 'word_unscramble',
            prompt: 'Translate: "Rice, please."',
            english: 'Rice, please.',
            correctTokens: ['ご飯', 'を', 'お願いします'],
            distractors: ['お水', 'これ']
          }
        ]
      },
      {
        id: 'node_9',
        nodeNum: 9,
        title: 'Existence: あります vs. います',
        japaneseTitle: '存在表現 (あります・います)',
        icon: '🐾',
        type: 'lesson',
        xpReward: 45,
        kobanReward: 25,
        summary: 'Master the core distinction: あります for objects, います for living beings!',
        questions: [
          {
            type: 'particle_fill',
            prompt: 'For a dog (犬 - living animal), which existence verb do you use?',
            sentence: '庭に犬が _____。',
            correct: 'います',
            options: ['います', 'あります'],
            explanation: 'Use 「います」 for living creatures capable of voluntary movement (humans, dogs, cats).'
          },
          {
            type: 'particle_fill',
            prompt: 'For a book (本 - inanimate object), which existence verb do you use?',
            sentence: '机の上に本が _____。',
            correct: 'あります',
            options: ['あります', 'います'],
            explanation: 'Use 「あります」 for non-living objects, furniture, events, and plants.'
          },
          {
            type: 'pair_match',
            prompt: 'Pair each noun with its correct existence verb:',
            pairs: [
              { left: '猫 (Cat)', right: 'います (Living)' },
              { left: '車 (Car)', right: 'あります (Object)' },
              { left: '先生 (Teacher)', right: 'います (Human)' },
              { left: 'お金 (Money)', right: 'あります (Object)' }
            ]
          },
          {
            type: 'word_unscramble',
            prompt: 'Assemble: "There is a book on the desk."',
            english: 'There is a book on the desk.',
            correctTokens: ['机の上', 'に', '本', 'が', 'あります'],
            distractors: ['います', '犬']
          },
          {
            type: 'audio_choice',
            prompt: 'Listen to the sentence and determine who/what is there:',
            audio: 'いぬがいます',
            options: [
              { text: 'There is a dog (living)', romaji: 'Inu ga imasu', correct: true },
              { text: 'There is a book', romaji: 'Hon ga arimasu', correct: false },
              { text: 'There is a car', romaji: 'Kuruma ga arimasu', correct: false }
            ]
          }
        ]
      },
      {
        id: 'node_10',
        nodeNum: 10,
        title: 'Asking Questions (〜ですか)',
        japaneseTitle: '疑問文 (〜ですか)',
        icon: '❓',
        type: 'lesson',
        xpReward: 40,
        kobanReward: 25,
        summary: 'Add "ka" to make questions! Learn what, where, who, and when.',
        questions: [
          {
            type: 'word_unscramble',
            prompt: 'Translate: "What is this?"',
            english: 'What is this?',
            correctTokens: ['これ', 'は', '何', 'ですか'],
            distractors: ['誰', 'どこ', '私']
          },
          {
            type: 'pair_match',
            prompt: 'Match Japanese question words:',
            pairs: [
              { left: '何 (なに / なん)', right: 'What' },
              { left: 'どこ', right: 'Where' },
              { left: 'だれ', right: 'Who' },
              { left: 'いつ', right: 'When' }
            ]
          },
          {
            type: 'word_unscramble',
            prompt: 'Translate: "Are you a student?"',
            english: 'Are you a student?',
            correctTokens: ['学生', 'ですか'],
            distractors: ['です', '何']
          },
          {
            type: 'particle_fill',
            prompt: 'How do you ask: "Where is the station?"',
            sentence: '駅は _____ ですか。',
            correct: 'どこ',
            options: ['どこ', 'だれ', 'いつ', '何'],
            explanation: '「どこ」 means "where".'
          },
          {
            type: 'audio_choice',
            prompt: 'Listen and select the question being asked:',
            audio: 'これはなんですか',
            options: [
              { text: 'What is this?', romaji: 'Kore wa nan desu ka?', correct: true },
              { text: 'Where is this?', romaji: 'Kore wa doko desu ka?', correct: false },
              { text: 'Who is this?', romaji: 'Kore wa dare desu ka?', correct: false }
            ]
          }
        ]
      },
      {
        id: 'node_11',
        nodeNum: 11,
        title: 'The 8 Golden Stroke Rules',
        japaneseTitle: '筆順の8大原則',
        icon: '✍️',
        type: 'lesson',
        xpReward: 45,
        kobanReward: 25,
        summary: 'Master writing calligraphy properly with universal stroke order rules.',
        questions: [
          {
            type: 'mnemonic_spotter',
            prompt: 'Rule 1: Always draw horizontal strokes and components starting from where?',
            options: [
              { text: 'Top to bottom', meaning: '上から下へ (三, 言)', correct: true },
              { text: 'Bottom to top', meaning: 'Incorrect', correct: false }
            ],
            explanation: 'In Japanese calligraphy, pen strokes flow downwards from top to bottom.'
          },
          {
            type: 'mnemonic_spotter',
            prompt: 'Rule 3: When two strokes cross in a plus sign (+), which stroke is drawn FIRST?',
            options: [
              { text: 'Horizontal first (横が先)', meaning: '十, 土, 木', correct: true },
              { text: 'Vertical first (縦が先)', meaning: 'Incorrect', correct: false }
            ],
            explanation: 'Always lay down the horizontal beam first, then cut straight down with the vertical pillar!'
          },
          {
            type: 'mnemonic_spotter',
            prompt: 'Rule 6: When drawing an enclosed box (like 四 or 田), when do you close the bottom?',
            options: [
              { text: 'Close bottom LAST (枠の底は最後)', meaning: 'After all interior is filled', correct: true },
              { text: 'Close bottom first', meaning: 'Incorrect', correct: false }
            ],
            explanation: 'You build the outer frame, put everything inside, and seal the floor LAST!'
          },
          {
            type: 'pair_match',
            prompt: 'Match stroke order rules to their prime example character:',
            pairs: [
              { left: 'Top to bottom', right: '三 (Three)' },
              { left: 'Left to right', right: '川 (River)' },
              { left: 'Horizontal first', right: '十 (Ten)' },
              { left: 'Center first (symmetrical)', right: '小 (Small)' }
            ]
          },
          {
            type: 'mnemonic_spotter',
            prompt: 'In 中 (inside/middle), when do you draw the vertical line that pierces the whole box?',
            options: [
              { text: 'Piercing stroke is drawn LAST', meaning: '貫く線は最後', correct: true },
              { text: 'Drawn first', meaning: 'Incorrect', correct: false }
            ],
            explanation: 'A stroke skewering completely through a character is always written last!'
          }
        ]
      },
      {
        id: 'node_12',
        nodeNum: 12,
        title: 'Torii Gate Grand Trial',
        japaneseTitle: '鳥居の大試練 (関所 2)',
        icon: '🏆',
        type: 'checkpoint',
        xpReward: 80,
        kobanReward: 60,
        summary: 'Pass the Torii Gate Checkpoint to unlock Unit 3 and open the Golden Treasure Chest!',
        questions: [
          {
            type: 'audio_choice',
            prompt: 'Listen to the audio challenge:',
            audio: 'おちゃをください',
            options: [
              { text: 'Green tea, please', romaji: 'Ocha o kudasai', correct: true },
              { text: 'Water, please', romaji: 'Omizu o kudasai', correct: false },
              { text: 'Rice, please', romaji: 'Gohan o kudasai', correct: false }
            ]
          },
          {
            type: 'particle_fill',
            prompt: 'For a friend (友達 - living person), select existence verb:',
            sentence: '教室に友達が _____。',
            correct: 'います',
            options: ['います', 'あります']
          },
          {
            type: 'word_unscramble',
            prompt: 'Assemble: "What is that over there?"',
            english: 'What is that?',
            correctTokens: ['あれ', 'は', '何', 'ですか'],
            distractors: ['これ', '私']
          },
          {
            type: 'pair_match',
            prompt: 'Final Review Pair Match:',
            pairs: [
              { left: '火山 (かざん)', right: 'Volcano' },
              { left: 'お水 (おみず)', right: 'Water' },
              { left: '机の上', right: 'On the desk' },
              { left: 'どこ', right: 'Where' }
            ]
          },
          {
            type: 'mnemonic_spotter',
            prompt: 'What character represents two trees standing together side-by-side?',
            options: [
              { text: '林', meaning: 'Grove (2 Trees)', correct: true },
              { text: '森', meaning: 'Forest (3 Trees)', correct: false },
              { text: '木', meaning: 'Tree (1 Tree)', correct: false }
            ]
          }
        ]
      }
    ]
  }
];
