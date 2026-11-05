/**
 * Japanese Kana Data: Complete Hiragana & Katakana charts,
 * stroke vector guides for canvas tracing, mnemonics, and romaji readings.
 */

window.KANA_DATA = {
  hiragana: [
    // Vowels
    { kana: 'あ', romaji: 'a', type: 'basic', mnemonic: 'Looks like an Apple with a stem and curved body.', strokes: 3,
      guideStrokes: [
        [{x: 70, y: 100}, {x: 230, y: 95}],
        [{x: 155, y: 55}, {x: 145, y: 240}],
        [{x: 195, y: 130}, {x: 110, y: 190}, {x: 100, y: 220}, {x: 160, y: 245}, {x: 225, y: 205}, {x: 220, y: 150}, {x: 170, y: 140}]
      ]
    },
    { kana: 'い', romaji: 'i', type: 'basic', mnemonic: 'Two needles hanging side by side: "I" for needles.', strokes: 2,
      guideStrokes: [
        [{x: 95, y: 80}, {x: 90, y: 200}, {x: 115, y: 185}],
        [{x: 200, y: 100}, {x: 205, y: 190}]
      ]
    },
    { kana: 'う', romaji: 'u', type: 'basic', mnemonic: 'Looks like someone carrying a heavy load saying "Oof!".', strokes: 2,
      guideStrokes: [
        [{x: 130, y: 70}, {x: 170, y: 85}],
        [{x: 110, y: 125}, {x: 185, y: 125}, {x: 200, y: 180}, {x: 160, y: 235}, {x: 115, y: 240}]
      ]
    },
    { kana: 'え', romaji: 'e', type: 'basic', mnemonic: 'An energetic ninja running an exotic race.', strokes: 2,
      guideStrokes: [
        [{x: 130, y: 65}, {x: 170, y: 80}],
        [{x: 95, y: 120}, {x: 205, y: 115}, {x: 120, y: 230}, {x: 215, y: 225}]
      ]
    },
    { kana: 'お', romaji: 'o', type: 'basic', mnemonic: 'A golfer swinging a club onto the green with an "o" ball flying.', strokes: 3,
      guideStrokes: [
        [{x: 75, y: 110}, {x: 190, y: 105}],
        [{x: 135, y: 60}, {x: 135, y: 200}, {x: 100, y: 235}, {x: 160, y: 245}, {x: 210, y: 200}],
        [{x: 205, y: 95}, {x: 235, y: 125}]
      ]
    },

    // K-row
    { kana: 'か', romaji: 'ka', type: 'basic', mnemonic: 'A blade cutting through a card (sharp stroke + dot).', strokes: 3,
      guideStrokes: [
        [{x: 90, y: 110}, {x: 160, y: 105}, {x: 170, y: 140}, {x: 140, y: 235}],
        [{x: 110, y: 75}, {x: 80, y: 230}],
        [{x: 195, y: 80}, {x: 220, y: 115}]
      ]
    },
    { kana: 'き', romaji: 'ki', type: 'basic', mnemonic: 'Looks like an old-fashioned Key.', strokes: 4,
      guideStrokes: [
        [{x: 95, y: 105}, {x: 205, y: 95}],
        [{x: 85, y: 145}, {x: 215, y: 135}],
        [{x: 175, y: 65}, {x: 130, y: 200}],
        [{x: 115, y: 220}, {x: 165, y: 235}, {x: 195, y: 210}]
      ]
    },
    { kana: 'く', romaji: 'ku', type: 'basic', mnemonic: 'The beak of a cuckoo bird singing "ku-ku!".', strokes: 1,
      guideStrokes: [
        [{x: 200, y: 75}, {x: 95, y: 155}, {x: 205, y: 235}]
      ]
    },
    { kana: 'け', romaji: 'ke', type: 'basic', mnemonic: 'A wooden Keg of beverage.', strokes: 3,
      guideStrokes: [
        [{x: 95, y: 70}, {x: 90, y: 240}],
        [{x: 140, y: 115}, {x: 220, y: 110}],
        [{x: 185, y: 75}, {x: 185, y: 235}]
      ]
    },
    { kana: 'こ', romaji: 'ko', type: 'basic', mnemonic: 'Two gentle worms facing each other co-habitating.', strokes: 2,
      guideStrokes: [
        [{x: 100, y: 100}, {x: 200, y: 100}],
        [{x: 95, y: 200}, {x: 205, y: 200}]
      ]
    },

    // S-row
    { kana: 'さ', romaji: 'sa', type: 'basic', mnemonic: 'A smiling face drinking Sake.', strokes: 3,
      guideStrokes: [
        [{x: 90, y: 110}, {x: 210, y: 95}],
        [{x: 175, y: 65}, {x: 130, y: 195}],
        [{x: 115, y: 220}, {x: 170, y: 235}, {x: 200, y: 205}]
      ]
    },
    { kana: 'し', romaji: 'shi', type: 'basic', mnemonic: 'A fishing hook dipped deep in the sea ("she" fishes).', strokes: 1,
      guideStrokes: [
        [{x: 120, y: 65}, {x: 120, y: 200}, {x: 170, y: 240}, {x: 210, y: 195}]
      ]
    },
    { kana: 'す', romaji: 'su', type: 'basic', mnemonic: 'A swirling spiral straw sipping Soup.', strokes: 2,
      guideStrokes: [
        [{x: 80, y: 105}, {x: 220, y: 100}],
        [{x: 165, y: 60}, {x: 165, y: 140}, {x: 130, y: 160}, {x: 135, y: 190}, {x: 170, y: 180}, {x: 170, y: 245}]
      ]
    },
    { kana: 'せ', romaji: 'se', type: 'basic', mnemonic: 'Someone saying "Set the table please!".', strokes: 3,
      guideStrokes: [
        [{x: 75, y: 120}, {x: 220, y: 110}],
        [{x: 180, y: 70}, {x: 180, y: 210}, {x: 140, y: 210}],
        [{x: 115, y: 90}, {x: 115, y: 235}, {x: 215, y: 235}]
      ]
    },
    { kana: 'そ', romaji: 'so', type: 'basic', mnemonic: 'A zig-zag seam: "Sewing" thread.', strokes: 1,
      guideStrokes: [
        [{x: 95, y: 80}, {x: 200, y: 80}, {x: 95, y: 160}, {x: 200, y: 160}, {x: 160, y: 235}, {x: 100, y: 230}]
      ]
    },

    // T-row
    { kana: 'た', romaji: 'ta', type: 'basic', mnemonic: 'Spells "ta" with the English letters T and a.', strokes: 4,
      guideStrokes: [
        [{x: 80, y: 110}, {x: 160, y: 100}],
        [{x: 120, y: 70}, {x: 105, y: 220}],
        [{x: 155, y: 130}, {x: 215, y: 125}],
        [{x: 150, y: 185}, {x: 205, y: 195}]
      ]
    },
    { kana: 'ち', romaji: 'chi', type: 'basic', mnemonic: 'Looks like a smiling Cheerleader cheering.', strokes: 2,
      guideStrokes: [
        [{x: 85, y: 95}, {x: 205, y: 85}],
        [{x: 160, y: 55}, {x: 105, y: 170}, {x: 170, y: 170}, {x: 195, y: 220}, {x: 140, y: 245}, {x: 95, y: 225}]
      ]
    },
    { kana: 'つ', romaji: 'tsu', type: 'basic', mnemonic: 'A giant Tsunami wave curving over.', strokes: 1,
      guideStrokes: [
        [{x: 85, y: 100}, {x: 205, y: 95}, {x: 210, y: 170}, {x: 150, y: 230}, {x: 90, y: 235}]
      ]
    },
    { kana: 'て', romaji: 'te', type: 'basic', mnemonic: 'The letter T bent into an open hand (Te = Hand).', strokes: 1,
      guideStrokes: [
        [{x: 85, y: 90}, {x: 210, y: 90}, {x: 110, y: 175}, {x: 140, y: 235}, {x: 205, y: 225}]
      ]
    },
    { kana: 'と', romaji: 'to', type: 'basic', mnemonic: 'A splinter in a big Toe.', strokes: 2,
      guideStrokes: [
        [{x: 115, y: 75}, {x: 155, y: 145}],
        [{x: 195, y: 115}, {x: 130, y: 180}, {x: 145, y: 235}, {x: 205, y: 225}]
      ]
    },

    // N-row
    { kana: 'な', romaji: 'na', type: 'basic', mnemonic: 'A nun praying before a cross: "Na" for nun.', strokes: 4,
      guideStrokes: [
        [{x: 75, y: 115}, {x: 145, y: 105}],
        [{x: 115, y: 70}, {x: 100, y: 225}],
        [{x: 175, y: 90}, {x: 195, y: 115}],
        [{x: 175, y: 145}, {x: 150, y: 200}, {x: 185, y: 225}, {x: 200, y: 185}]
      ]
    },
    { kana: 'に', romaji: 'ni', type: 'basic', mnemonic: 'A needle and two threads: "Knee".', strokes: 3,
      guideStrokes: [
        [{x: 95, y: 75}, {x: 90, y: 225}],
        [{x: 140, y: 115}, {x: 215, y: 115}],
        [{x: 135, y: 195}, {x: 215, y: 200}]
      ]
    },
    { kana: 'ぬ', romaji: 'nu', type: 'basic', mnemonic: 'Noodles looped with chopsticks.', strokes: 2,
      guideStrokes: [
        [{x: 105, y: 85}, {x: 170, y: 225}],
        [{x: 150, y: 75}, {x: 95, y: 175}, {x: 170, y: 225}, {x: 215, y: 180}, {x: 205, y: 225}]
      ]
    },
    { kana: 'ね', romaji: 'ne', type: 'basic', mnemonic: 'A cat (Neko) with a curly tail watching a bird in a Nest.', strokes: 2,
      guideStrokes: [
        [{x: 100, y: 70}, {x: 100, y: 235}],
        [{x: 75, y: 115}, {x: 190, y: 115}, {x: 115, y: 210}, {x: 175, y: 150}, {x: 195, y: 205}, {x: 170, y: 225}]
      ]
    },
    { kana: 'の', romaji: 'no', type: 'basic', mnemonic: 'A "No entry" round sign or a pig nose.', strokes: 1,
      guideStrokes: [
        [{x: 175, y: 80}, {x: 115, y: 190}, {x: 145, y: 235}, {x: 215, y: 175}, {x: 170, y: 105}, {x: 100, y: 155}]
      ]
    },

    // H-row
    { kana: 'は', romaji: 'ha', type: 'basic', mnemonic: 'The letter "H" and "a" standing side by side.', strokes: 3,
      guideStrokes: [
        [{x: 90, y: 70}, {x: 85, y: 235}],
        [{x: 135, y: 110}, {x: 215, y: 105}],
        [{x: 175, y: 70}, {x: 175, y: 190}, {x: 145, y: 225}, {x: 195, y: 225}]
      ]
    },
    { kana: 'ひ', romaji: 'hi', type: 'basic', mnemonic: 'He is laughing: "He-he-he" with a big smile.', strokes: 1,
      guideStrokes: [
        [{x: 80, y: 100}, {x: 125, y: 85}, {x: 110, y: 215}, {x: 190, y: 215}, {x: 215, y: 95}]
      ]
    },
    { kana: 'ふ', romaji: 'fu', type: 'basic', mnemonic: 'Mount Fuji with a small cloud puff on top.', strokes: 4,
      guideStrokes: [
        [{x: 145, y: 65}, {x: 165, y: 85}],
        [{x: 145, y: 120}, {x: 155, y: 180}, {x: 125, y: 235}],
        [{x: 90, y: 150}, {x: 105, y: 185}],
        [{x: 205, y: 150}, {x: 220, y: 185}]
      ]
    },
    { kana: 'へ', romaji: 'he', type: 'basic', mnemonic: 'The slope of Mount Saint Helens: "He" climbs.', strokes: 1,
      guideStrokes: [
        [{x: 75, y: 175}, {x: 145, y: 95}, {x: 225, y: 185}]
      ]
    },
    { kana: 'ほ', romaji: 'ho', type: 'basic', mnemonic: 'A Santa saying "Ho Ho Ho" wearing a hat.', strokes: 4,
      guideStrokes: [
        [{x: 85, y: 70}, {x: 80, y: 235}],
        [{x: 130, y: 95}, {x: 210, y: 90}],
        [{x: 130, y: 145}, {x: 210, y: 140}],
        [{x: 170, y: 60}, {x: 170, y: 190}, {x: 140, y: 225}, {x: 190, y: 220}]
      ]
    },

    // M-row
    { kana: 'ま', romaji: 'ma', type: 'basic', mnemonic: 'A cartoon mask with two straps.', strokes: 3,
      guideStrokes: [
        [{x: 95, y: 95}, {x: 205, y: 90}],
        [{x: 90, y: 145}, {x: 210, y: 140}],
        [{x: 155, y: 60}, {x: 155, y: 195}, {x: 125, y: 225}, {x: 175, y: 220}]
      ]
    },
    { kana: 'み', romaji: 'mi', type: 'basic', mnemonic: 'Lucky number 21 (looks like "2" and "1"): Me!', strokes: 2,
      guideStrokes: [
        [{x: 90, y: 90}, {x: 170, y: 85}, {x: 105, y: 180}, {x: 125, y: 210}, {x: 220, y: 190}],
        [{x: 190, y: 110}, {x: 155, y: 235}]
      ]
    },
    { kana: 'む', romaji: 'mu', type: 'basic', mnemonic: 'A cow face with horns saying "Moo!".', strokes: 3,
      guideStrokes: [
        [{x: 80, y: 110}, {x: 175, y: 100}],
        [{x: 125, y: 70}, {x: 125, y: 200}, {x: 160, y: 215}, {x: 215, y: 170}],
        [{x: 205, y: 90}, {x: 225, y: 115}]
      ]
    },
    { kana: 'め', romaji: 'me', type: 'basic', mnemonic: 'An eye (Me in Japanese) with an eyelash cross.', strokes: 2,
      guideStrokes: [
        [{x: 125, y: 85}, {x: 175, y: 225}],
        [{x: 155, y: 75}, {x: 95, y: 165}, {x: 175, y: 225}, {x: 215, y: 170}]
      ]
    },
    { kana: 'も', romaji: 'mo', type: 'basic', mnemonic: 'More worms caught on a fishhook ("Mo" worms).', strokes: 3,
      guideStrokes: [
        [{x: 150, y: 65}, {x: 150, y: 200}, {x: 180, y: 235}, {x: 210, y: 200}],
        [{x: 95, y: 115}, {x: 205, y: 110}],
        [{x: 95, y: 160}, {x: 205, y: 155}]
      ]
    },

    // Y-row
    { kana: 'や', romaji: 'ya', type: 'basic', mnemonic: 'A yak horns and snout.', strokes: 3,
      guideStrokes: [
        [{x: 90, y: 120}, {x: 190, y: 105}, {x: 175, y: 165}, {x: 125, y: 235}],
        [{x: 135, y: 75}, {x: 155, y: 105}],
        [{x: 185, y: 70}, {x: 185, y: 145}]
      ]
    },
    { kana: 'ゆ', romaji: 'yu', type: 'basic', mnemonic: 'A fish swimming: "You" caught a fish!', strokes: 2,
      guideStrokes: [
        [{x: 100, y: 90}, {x: 100, y: 205}, {x: 170, y: 225}, {x: 170, y: 145}, {x: 80, y: 155}],
        [{x: 175, y: 65}, {x: 175, y: 235}]
      ]
    },
    { kana: 'よ', romaji: 'yo', type: 'basic', mnemonic: 'A toy Yo-yo on a finger hook.', strokes: 2,
      guideStrokes: [
        [{x: 100, y: 105}, {x: 170, y: 100}],
        [{x: 175, y: 65}, {x: 175, y: 180}, {x: 135, y: 215}, {x: 195, y: 210}]
      ]
    },

    // R-row
    { kana: 'ら', romaji: 'ra', type: 'basic', mnemonic: 'A rabbit on its hind legs.', strokes: 2,
      guideStrokes: [
        [{x: 135, y: 70}, {x: 165, y: 85}],
        [{x: 115, y: 120}, {x: 175, y: 120}, {x: 185, y: 180}, {x: 140, y: 235}, {x: 95, y: 225}]
      ]
    },
    { kana: 'り', romaji: 'ri', type: 'basic', mnemonic: 'Two reeds swaying in a gentle River.', strokes: 2,
      guideStrokes: [
        [{x: 105, y: 80}, {x: 105, y: 185}],
        [{x: 190, y: 65}, {x: 190, y: 215}, {x: 165, y: 245}]
      ]
    },
    { kana: 'る', romaji: 'ru', type: 'basic', mnemonic: 'Number three with a loop: looks like a Road route.', strokes: 1,
      guideStrokes: [
        [{x: 100, y: 80}, {x: 195, y: 80}, {x: 110, y: 155}, {x: 190, y: 165}, {x: 185, y: 215}, {x: 150, y: 235}, {x: 145, y: 205}, {x: 175, y: 210}]
      ]
    },
    { kana: 'れ', romaji: 're', type: 'basic', mnemonic: 'A person kneeling down to Rest.', strokes: 2,
      guideStrokes: [
        [{x: 100, y: 70}, {x: 100, y: 235}],
        [{x: 75, y: 115}, {x: 185, y: 115}, {x: 120, y: 210}, {x: 175, y: 165}, {x: 215, y: 220}]
      ]
    },
    { kana: 'ろ', romaji: 'ro', type: 'basic', mnemonic: 'Road without a loop (compare to る).', strokes: 1,
      guideStrokes: [
        [{x: 100, y: 80}, {x: 195, y: 80}, {x: 110, y: 155}, {x: 195, y: 165}, {x: 180, y: 225}, {x: 105, y: 230}]
      ]
    },

    // W-row & N
    { kana: 'わ', romaji: 'wa', type: 'basic', mnemonic: 'A wasp with big wings buzzing: "Wa!".', strokes: 2,
      guideStrokes: [
        [{x: 100, y: 70}, {x: 100, y: 235}],
        [{x: 75, y: 115}, {x: 190, y: 115}, {x: 115, y: 210}, {x: 180, y: 160}, {x: 195, y: 225}, {x: 140, y: 235}]
      ]
    },
    { kana: 'を', romaji: 'wo', type: 'basic', mnemonic: 'A cheerleader leaping: "Whoa!" (used as grammatical particle "o").', strokes: 3,
      guideStrokes: [
        [{x: 80, y: 95}, {x: 210, y: 90}],
        [{x: 135, y: 65}, {x: 105, y: 160}, {x: 200, y: 150}],
        [{x: 135, y: 175}, {x: 185, y: 225}, {x: 120, y: 235}]
      ]
    },
    { kana: 'ん', romaji: 'n', type: 'basic', mnemonic: 'Looks like a lowercase cursive letter "n".', strokes: 1,
      guideStrokes: [
        [{x: 95, y: 100}, {x: 135, y: 225}, {x: 165, y: 150}, {x: 215, y: 165}]
      ]
    }
  ],

  katakana: [
    { kana: 'ア', romaji: 'a', type: 'basic', mnemonic: 'An Axe blade chopping down.', strokes: 2,
      guideStrokes: [
        [{x: 90, y: 90}, {x: 195, y: 90}, {x: 160, y: 145}],
        [{x: 145, y: 120}, {x: 95, y: 235}]
      ]
    },
    { kana: 'イ', romaji: 'i', type: 'basic', mnemonic: 'An Easel standing tall.', strokes: 2,
      guideStrokes: [
        [{x: 165, y: 65}, {x: 95, y: 150}],
        [{x: 145, y: 110}, {x: 145, y: 235}]
      ]
    },
    { kana: 'ウ', romaji: 'u', type: 'basic', mnemonic: 'An astronaut helmet: "Oooh, space!".', strokes: 3,
      guideStrokes: [
        [{x: 150, y: 60}, {x: 150, y: 95}],
        [{x: 95, y: 120}, {x: 95, y: 150}],
        [{x: 95, y: 125}, {x: 205, y: 125}, {x: 160, y: 235}]
      ]
    },
    { kana: 'エ', romaji: 'e', type: 'basic', mnemonic: 'An Elevator girder or I-beam.', strokes: 3,
      guideStrokes: [
        [{x: 90, y: 80}, {x: 210, y: 80}],
        [{x: 150, y: 80}, {x: 150, y: 215}],
        [{x: 75, y: 215}, {x: 225, y: 215}]
      ]
    },
    { kana: 'オ', romaji: 'o', type: 'basic', mnemonic: 'An Opera singer with arm outstretched singing "Oh!".', strokes: 3,
      guideStrokes: [
        [{x: 80, y: 95}, {x: 215, y: 95}],
        [{x: 165, y: 65}, {x: 165, y: 235}],
        [{x: 165, y: 115}, {x: 85, y: 220}]
      ]
    },
    { kana: 'カ', romaji: 'ka', type: 'basic', mnemonic: 'Card edge, like Hiragana か without the dot.', strokes: 2,
      guideStrokes: [
        [{x: 90, y: 95}, {x: 195, y: 95}, {x: 165, y: 230}],
        [{x: 115, y: 70}, {x: 85, y: 220}]
      ]
    },
    { kana: 'キ', romaji: 'ki', type: 'basic', mnemonic: 'Key teeth and crossbars.', strokes: 3,
      guideStrokes: [
        [{x: 90, y: 95}, {x: 210, y: 85}],
        [{x: 85, y: 145}, {x: 215, y: 135}],
        [{x: 175, y: 65}, {x: 125, y: 235}]
      ]
    },
    { kana: 'ク', romaji: 'ku', type: 'basic', mnemonic: 'A Cook hat or a chef preparing dinner.', strokes: 2,
      guideStrokes: [
        [{x: 150, y: 65}, {x: 100, y: 135}],
        [{x: 105, y: 130}, {x: 205, y: 130}, {x: 145, y: 235}]
      ]
    },
    { kana: 'ケ', romaji: 'ke', type: 'basic', mnemonic: 'A Kettle spout and handle.', strokes: 3,
      guideStrokes: [
        [{x: 145, y: 65}, {x: 95, y: 140}],
        [{x: 90, y: 135}, {x: 215, y: 125}],
        [{x: 165, y: 130}, {x: 135, y: 235}]
      ]
    },
    { kana: 'コ', romaji: 'ko', type: 'basic', mnemonic: 'Corner of a box.', strokes: 2,
      guideStrokes: [
        [{x: 95, y: 85}, {x: 205, y: 85}, {x: 205, y: 215}],
        [{x: 95, y: 215}, {x: 210, y: 215}]
      ]
    },
    { kana: 'サ', romaji: 'sa', type: 'basic', mnemonic: 'Three Sardines stacked together.', strokes: 3,
      guideStrokes: [
        [{x: 80, y: 105}, {x: 220, y: 95}],
        [{x: 125, y: 70}, {x: 120, y: 195}],
        [{x: 175, y: 70}, {x: 165, y: 235}]
      ]
    },
    { kana: 'シ', romaji: 'shi', type: 'basic', mnemonic: 'She is looking up with smiling eyes (bottom stroke goes UP).', strokes: 3,
      guideStrokes: [
        [{x: 100, y: 90}, {x: 130, y: 105}],
        [{x: 90, y: 145}, {x: 120, y: 160}],
        [{x: 95, y: 225}, {x: 205, y: 95}]
      ]
    },
    { kana: 'ス', romaji: 'su', type: 'basic', mnemonic: 'A Suit hanger hanging up.', strokes: 2,
      guideStrokes: [
        [{x: 95, y: 90}, {x: 195, y: 90}, {x: 135, y: 235}],
        [{x: 155, y: 135}, {x: 215, y: 225}]
      ]
    },
    { kana: 'セ', romaji: 'se', type: 'basic', mnemonic: 'Setting up dominoes.', strokes: 2,
      guideStrokes: [
        [{x: 80, y: 110}, {x: 215, y: 100}, {x: 200, y: 210}],
        [{x: 145, y: 70}, {x: 145, y: 210}, {x: 210, y: 210}]
      ]
    },
    { kana: 'ソ', romaji: 'so', type: 'basic', mnemonic: 'A needle and thread sewing DOWN (stroke goes down, compare with シ).', strokes: 2,
      guideStrokes: [
        [{x: 110, y: 85}, {x: 140, y: 115}],
        [{x: 190, y: 85}, {x: 105, y: 225}]
      ]
    },
    { kana: 'タ', romaji: 'ta', type: 'basic', mnemonic: 'A kite with a Tail.', strokes: 3,
      guideStrokes: [
        [{x: 140, y: 65}, {x: 90, y: 135}],
        [{x: 90, y: 130}, {x: 205, y: 125}, {x: 135, y: 235}],
        [{x: 120, y: 175}, {x: 185, y: 185}]
      ]
    },
    { kana: 'チ', romaji: 'chi', type: 'basic', mnemonic: 'A Cheerleader doing a high jump.', strokes: 3,
      guideStrokes: [
        [{x: 190, y: 65}, {x: 95, y: 100}],
        [{x: 85, y: 145}, {x: 215, y: 135}],
        [{x: 150, y: 100}, {x: 115, y: 235}]
      ]
    },
    { kana: 'ツ', romaji: 'tsu', type: 'basic', mnemonic: 'Two drops splashed from a Tsunami (strokes fall DOWN).', strokes: 3,
      guideStrokes: [
        [{x: 100, y: 80}, {x: 125, y: 105}],
        [{x: 145, y: 90}, {x: 165, y: 120}],
        [{x: 195, y: 85}, {x: 115, y: 225}]
      ]
    },
    { kana: 'テ', romaji: 'te', type: 'basic', mnemonic: 'A Telephone pole with two crossbars.', strokes: 3,
      guideStrokes: [
        [{x: 95, y: 85}, {x: 195, y: 85}],
        [{x: 80, y: 135}, {x: 215, y: 130}],
        [{x: 145, y: 135}, {x: 115, y: 235}]
      ]
    },
    { kana: 'ト', romaji: 'to', type: 'basic', mnemonic: 'A Totem pole with a branch sticking out.', strokes: 2,
      guideStrokes: [
        [{x: 125, y: 60}, {x: 125, y: 235}],
        [{x: 125, y: 135}, {x: 200, y: 160}]
      ]
    },
    { kana: 'ナ', romaji: 'na', type: 'basic', mnemonic: 'A sword cutting through: "Naginata".', strokes: 2,
      guideStrokes: [
        [{x: 80, y: 105}, {x: 220, y: 100}],
        [{x: 160, y: 65}, {x: 105, y: 235}]
      ]
    },
    { kana: 'ニ', romaji: 'ni', type: 'basic', mnemonic: 'Two needles: "Ni" is 2 in Japanese (二).', strokes: 2,
      guideStrokes: [
        [{x: 95, y: 100}, {x: 205, y: 100}],
        [{x: 80, y: 190}, {x: 220, y: 190}]
      ]
    },
    { kana: 'ヌ', romaji: 'nu', type: 'basic', mnemonic: 'Chopsticks grabbing Noodles.', strokes: 2,
      guideStrokes: [
        [{x: 95, y: 100}, {x: 205, y: 95}, {x: 115, y: 235}],
        [{x: 120, y: 155}, {x: 205, y: 225}]
      ]
    },
    { kana: 'ネ', romaji: 'ne', type: 'basic', mnemonic: 'A Necktie on a neat shirt.', strokes: 4,
      guideStrokes: [
        [{x: 130, y: 65}, {x: 155, y: 85}],
        [{x: 105, y: 115}, {x: 165, y: 110}, {x: 115, y: 230}],
        [{x: 145, y: 135}, {x: 145, y: 230}],
        [{x: 170, y: 165}, {x: 205, y: 215}]
      ]
    },
    { kana: 'ノ', romaji: 'no', type: 'basic', mnemonic: 'A single stroke: "No" other strokes!', strokes: 1,
      guideStrokes: [
        [{x: 185, y: 65}, {x: 95, y: 235}]
      ]
    },
    { kana: 'ハ', romaji: 'ha', type: 'basic', mnemonic: 'Hut roof beams leaning together.', strokes: 2,
      guideStrokes: [
        [{x: 115, y: 85}, {x: 85, y: 225}],
        [{x: 175, y: 85}, {x: 215, y: 225}]
      ]
    },
    { kana: 'ヒ', romaji: 'hi', type: 'basic', mnemonic: 'He has one Heel raised up.', strokes: 2,
      guideStrokes: [
        [{x: 95, y: 85}, {x: 185, y: 85}],
        [{x: 115, y: 140}, {x: 195, y: 140}, {x: 195, y: 225}]
      ]
    },
    { kana: 'フ', romaji: 'fu', type: 'basic', mnemonic: 'An owl with a sharp beak: "Fuu!".', strokes: 1,
      guideStrokes: [
        [{x: 90, y: 90}, {x: 205, y: 90}, {x: 130, y: 225}]
      ]
    },
    { kana: 'ヘ', romaji: 'he', type: 'basic', mnemonic: 'Identical to Hiragana へ: a mountain peak.', strokes: 1,
      guideStrokes: [
        [{x: 75, y: 175}, {x: 145, y: 95}, {x: 225, y: 185}]
      ]
    },
    { kana: 'ホ', romaji: 'ho', type: 'basic', mnemonic: 'A Holy cross with two side candles.', strokes: 4,
      guideStrokes: [
        [{x: 80, y: 90}, {x: 220, y: 90}],
        [{x: 150, y: 60}, {x: 150, y: 235}],
        [{x: 115, y: 135}, {x: 95, y: 185}],
        [{x: 185, y: 135}, {x: 205, y: 185}]
      ]
    },
    { kana: 'マ', romaji: 'ma', type: 'basic', mnemonic: 'A Martini glass angle.', strokes: 2,
      guideStrokes: [
        [{x: 95, y: 90}, {x: 205, y: 90}, {x: 125, y: 170}],
        [{x: 135, y: 160}, {x: 195, y: 220}]
      ]
    },
    { kana: 'ミ', romaji: 'mi', type: 'basic', mnemonic: 'Three missiles soaring together ("Mi").', strokes: 3,
      guideStrokes: [
        [{x: 95, y: 90}, {x: 185, y: 105}],
        [{x: 105, y: 145}, {x: 195, y: 160}],
        [{x: 115, y: 200}, {x: 205, y: 215}]
      ]
    },
    { kana: 'ム', romaji: 'mu', type: 'basic', mnemonic: 'A pyramid/triangle like a Moose nose.', strokes: 2,
      guideStrokes: [
        [{x: 145, y: 70}, {x: 95, y: 165}, {x: 205, y: 165}],
        [{x: 175, y: 130}, {x: 195, y: 185}]
      ]
    },
    { kana: 'メ', romaji: 'me', type: 'basic', mnemonic: 'Metal swords crossed in duel.', strokes: 2,
      guideStrokes: [
        [{x: 185, y: 75}, {x: 95, y: 225}],
        [{x: 105, y: 105}, {x: 205, y: 215}]
      ]
    },
    { kana: 'モ', romaji: 'mo', type: 'basic', mnemonic: 'More monitor antenna lines (like Hiragana も).', strokes: 3,
      guideStrokes: [
        [{x: 90, y: 95}, {x: 205, y: 95}],
        [{x: 85, y: 145}, {x: 215, y: 145}],
        [{x: 145, y: 65}, {x: 145, y: 215}, {x: 210, y: 215}]
      ]
    },
    { kana: 'ヤ', romaji: 'ya', type: 'basic', mnemonic: 'A Yak horn or Yacht sail.', strokes: 2,
      guideStrokes: [
        [{x: 90, y: 115}, {x: 200, y: 95}, {x: 160, y: 170}],
        [{x: 160, y: 70}, {x: 130, y: 235}]
      ]
    },
    { kana: 'ユ', romaji: 'yu', type: 'basic', mnemonic: 'Looks like the number 1 hooked: "You are #1!".', strokes: 2,
      guideStrokes: [
        [{x: 105, y: 80}, {x: 105, y: 195}, {x: 205, y: 195}],
        [{x: 185, y: 135}, {x: 185, y: 235}]
      ]
    },
    { kana: 'ヨ', romaji: 'yo', type: 'basic', mnemonic: 'A toy robot arm playing with a Yo-yo.', strokes: 3,
      guideStrokes: [
        [{x: 95, y: 80}, {x: 205, y: 80}, {x: 205, y: 220}, {x: 95, y: 220}],
        [{x: 95, y: 150}, {x: 195, y: 150}],
        [{x: 95, y: 220}, {x: 205, y: 220}]
      ]
    },
    { kana: 'ラ', romaji: 'ra', type: 'basic', mnemonic: 'A Ramen bowl covered with a lid.', strokes: 2,
      guideStrokes: [
        [{x: 95, y: 85}, {x: 195, y: 85}],
        [{x: 150, y: 85}, {x: 115, y: 145}, {x: 185, y: 145}, {x: 170, y: 225}]
      ]
    },
    { kana: 'リ', romaji: 'ri', type: 'basic', mnemonic: 'Ribbons fluttering in wind.', strokes: 2,
      guideStrokes: [
        [{x: 105, y: 85}, {x: 105, y: 175}],
        [{x: 190, y: 70}, {x: 190, y: 230}]
      ]
    },
    { kana: 'ル', romaji: 'ru', type: 'basic', mnemonic: 'Two roots running deep into the ground.', strokes: 2,
      guideStrokes: [
        [{x: 120, y: 75}, {x: 95, y: 215}],
        [{x: 165, y: 75}, {x: 175, y: 195}, {x: 215, y: 220}]
      ]
    },
    { kana: 'レ', romaji: 're', type: 'basic', mnemonic: 'A checkmark ready for the Record.', strokes: 1,
      guideStrokes: [
        [{x: 115, y: 75}, {x: 115, y: 225}, {x: 205, y: 200}]
      ]
    },
    { kana: 'ロ', romaji: 'ro', type: 'basic', mnemonic: 'A square Robot mouth.', strokes: 3,
      guideStrokes: [
        [{x: 100, y: 80}, {x: 100, y: 220}],
        [{x: 100, y: 80}, {x: 205, y: 80}, {x: 205, y: 220}],
        [{x: 100, y: 220}, {x: 205, y: 220}]
      ]
    },
    { kana: 'ワ', romaji: 'wa', type: 'basic', mnemonic: 'A glass of Wine tipped over: "Watch out!".', strokes: 2,
      guideStrokes: [
        [{x: 105, y: 90}, {x: 105, y: 175}],
        [{x: 105, y: 90}, {x: 205, y: 90}, {x: 145, y: 225}]
      ]
    },
    { kana: 'ヲ', romaji: 'wo', type: 'basic', mnemonic: 'Like フ with an extra crossbar.', strokes: 2,
      guideStrokes: [
        [{x: 90, y: 95}, {x: 205, y: 95}, {x: 130, y: 225}],
        [{x: 80, y: 140}, {x: 185, y: 140}]
      ]
    },
    { kana: 'ン', romaji: 'n', type: 'basic', mnemonic: 'One eye winking upwards (compare to ソ).', strokes: 2,
      guideStrokes: [
        [{x: 105, y: 110}, {x: 135, y: 135}],
        [{x: 95, y: 215}, {x: 205, y: 85}]
      ]
    }
  ]
};
