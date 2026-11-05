/**
 * Japanese N5 Curriculum: Visual Diagrams & Guide Strokes
 * Visual stroke order diagrams and foundational N5 character data.
 */

window.N5_VISUAL_DATA = {
  "version": "1.0",
  "metadata": {
    "title": "Japanese N5 Curriculum: OCR Extracted Data with Visual Diagrams",
    "sources": [
      "Visual N5 Kanji Mnemonic Illustrations",
      "Universal Stroke Order & Radical Principles",
      "Core N5 Grammar Patterns & Sentence Structures"
    ],
    "generated_at": "2026-11-05",
    "counts": {
      "kanji": 28,
      "grammar": 5,
      "rules": 2
    }
  },
  "kanji": [
    {
      "char": "一",
      "meaning": "One",
      "strokes": 1,
      "onyomi": [
        "イチ",
        "イツ"
      ],
      "kunyomi": [
        "ひと-",
        "ひと.つ"
      ],
      "radical": {
        "char": "一",
        "name": "いち",
        "meaning": "one"
      },
      "mnemonic": "One is represented by one horizontal finger held up.",
      "guideStrokes": [
        [
          {
            "x": 60,
            "y": 150
          },
          {
            "x": 240,
            "y": 150
          }
        ]
      ],
      "compounds": [
        {
          "word": "一つ",
          "reading": "ひとつ",
          "meaning": "one thing"
        },
        {
          "word": "一日",
          "reading": "ついたち",
          "meaning": "the 1st day of the month"
        },
        {
          "word": "一日",
          "reading": "いちにち",
          "meaning": "one day"
        },
        {
          "word": "一時",
          "reading": "いちじ",
          "meaning": "one o'clock"
        },
        {
          "word": "一人",
          "reading": "ひとり",
          "meaning": "one person, alone"
        },
        {
          "word": "一番",
          "reading": "いちばん",
          "meaning": "number one, best"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">一</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 60 150 L 240 150\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(60,150)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【一】 One (1画) - One is represented by one horizontal finger h...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 一 (One)\"]\n  root --> strokes[\"Strokes: 1画\"]\n  root --> mnem[\"Mnemonic: One is represented by one hori...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_一つ[\"一つ (ひとつ)<br/>one thing\"]\n  compounds --> c_一日[\"一日 (ついたち)<br/>the 1st day of the month\"]\n  compounds --> c_一日[\"一日 (いちにち)<br/>one day\"]"
    },
    {
      "char": "二",
      "meaning": "Two",
      "strokes": 2,
      "onyomi": [
        "ニ"
      ],
      "kunyomi": [
        "ふた-",
        "ふた.つ"
      ],
      "radical": {
        "char": "二",
        "name": "に",
        "meaning": "two"
      },
      "mnemonic": "Two is represented by two horizontal fingers; shorter top stroke, longer base.",
      "guideStrokes": [
        [
          {
            "x": 90,
            "y": 105
          },
          {
            "x": 210,
            "y": 105
          }
        ],
        [
          {
            "x": 60,
            "y": 195
          },
          {
            "x": 240,
            "y": 195
          }
        ]
      ],
      "compounds": [
        {
          "word": "二つ",
          "reading": "ふたつ",
          "meaning": "two things"
        },
        {
          "word": "二日",
          "reading": "ふつか",
          "meaning": "the 2nd day, two days"
        },
        {
          "word": "二時",
          "reading": "にじ",
          "meaning": "two o'clock"
        },
        {
          "word": "二人",
          "reading": "ふたり",
          "meaning": "two people, pair"
        },
        {
          "word": "二月",
          "reading": "にがつ",
          "meaning": "February"
        },
        {
          "word": "二十日",
          "reading": "はつか",
          "meaning": "the 20th day"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">二</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 90 105 L 210 105\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 60 195 L 240 195\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(90,105)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(60,195)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【二】 Two (2画) - Two is represented by two horizontal fingers;...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 二 (Two)\"]\n  root --> strokes[\"Strokes: 2画\"]\n  root --> mnem[\"Mnemonic: Two is represented by two hori...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_二つ[\"二つ (ふたつ)<br/>two things\"]\n  compounds --> c_二日[\"二日 (ふつか)<br/>the 2nd day, two days\"]\n  compounds --> c_二時[\"二時 (にじ)<br/>two o'clock\"]"
    },
    {
      "char": "三",
      "meaning": "Three",
      "strokes": 3,
      "onyomi": [
        "サン"
      ],
      "kunyomi": [
        "み-",
        "み.つ",
        "みっ.つ"
      ],
      "radical": {
        "char": "一",
        "name": "いち",
        "meaning": "one"
      },
      "mnemonic": "Three is represented by three fingers held horizontally.",
      "guideStrokes": [
        [
          {
            "x": 80,
            "y": 90
          },
          {
            "x": 220,
            "y": 90
          }
        ],
        [
          {
            "x": 95,
            "y": 150
          },
          {
            "x": 205,
            "y": 150
          }
        ],
        [
          {
            "x": 55,
            "y": 210
          },
          {
            "x": 245,
            "y": 210
          }
        ]
      ],
      "compounds": [
        {
          "word": "三つ",
          "reading": "みっつ",
          "meaning": "three things"
        },
        {
          "word": "三日",
          "reading": "みっか",
          "meaning": "the 3rd day, three days"
        },
        {
          "word": "三時",
          "reading": "さんじ",
          "meaning": "three o'clock"
        },
        {
          "word": "三人",
          "reading": "さんにん",
          "meaning": "three people"
        },
        {
          "word": "三月",
          "reading": "さんがつ",
          "meaning": "March"
        },
        {
          "word": "三年生",
          "reading": "さんねんせい",
          "meaning": "third-year student"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">三</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 80 90 L 220 90\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 150 L 205 150\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 55 210 L 245 210\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(80,90)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(95,150)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(55,210)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【三】 Three (3画) - Three is represented by three fingers held ho...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 三 (Three)\"]\n  root --> strokes[\"Strokes: 3画\"]\n  root --> mnem[\"Mnemonic: Three is represented by three ...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_三つ[\"三つ (みっつ)<br/>three things\"]\n  compounds --> c_三日[\"三日 (みっか)<br/>the 3rd day, three days\"]\n  compounds --> c_三時[\"三時 (さんじ)<br/>three o'clock\"]"
    },
    {
      "char": "四",
      "meaning": "Four",
      "strokes": 5,
      "onyomi": [
        "シ"
      ],
      "kunyomi": [
        "よ-",
        "よ.つ",
        "よっ.つ",
        "よん"
      ],
      "radical": {
        "char": "囗",
        "name": "くにがまえ",
        "meaning": "enclosure"
      },
      "mnemonic": "A rectangle (box) has four corners with window curtains opened inside.",
      "guideStrokes": [
        [
          {
            "x": 75,
            "y": 75
          },
          {
            "x": 75,
            "y": 235
          }
        ],
        [
          {
            "x": 75,
            "y": 75
          },
          {
            "x": 225,
            "y": 75
          },
          {
            "x": 225,
            "y": 235
          }
        ],
        [
          {
            "x": 115,
            "y": 115
          },
          {
            "x": 105,
            "y": 195
          }
        ],
        [
          {
            "x": 165,
            "y": 115
          },
          {
            "x": 195,
            "y": 165
          },
          {
            "x": 195,
            "y": 195
          }
        ],
        [
          {
            "x": 70,
            "y": 235
          },
          {
            "x": 230,
            "y": 235
          }
        ]
      ],
      "compounds": [
        {
          "word": "四つ",
          "reading": "よっつ",
          "meaning": "four things"
        },
        {
          "word": "四日",
          "reading": "よっか",
          "meaning": "the 4th day, four days"
        },
        {
          "word": "四時",
          "reading": "よじ",
          "meaning": "four o'clock"
        },
        {
          "word": "四人",
          "reading": "よにん",
          "meaning": "four people"
        },
        {
          "word": "四月",
          "reading": "しがつ",
          "meaning": "April"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">四</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 75 75 L 75 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 75 75 L 225 75 L 225 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 115 115 L 105 195\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 165 115 L 195 165 L 195 195\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 70 235 L 230 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(75,75)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(75,75)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(115,115)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <g transform=\"translate(165,115)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">4</text></g>\n  <g transform=\"translate(70,235)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">5</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【四】 Four (5画) - A rectangle (box) has four corners with windo...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 四 (Four)\"]\n  root --> strokes[\"Strokes: 5画\"]\n  root --> mnem[\"Mnemonic: A rectangle (box) has four cor...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_四つ[\"四つ (よっつ)<br/>four things\"]\n  compounds --> c_四日[\"四日 (よっか)<br/>the 4th day, four days\"]\n  compounds --> c_四時[\"四時 (よじ)<br/>four o'clock\"]"
    },
    {
      "char": "五",
      "meaning": "Five",
      "strokes": 4,
      "onyomi": [
        "ゴ"
      ],
      "kunyomi": [
        "いつ-",
        "いつ.つ"
      ],
      "radical": {
        "char": "二",
        "name": "に",
        "meaning": "two"
      },
      "mnemonic": "Can you make the kanji 五 with five wooden matchsticks?",
      "guideStrokes": [
        [
          {
            "x": 75,
            "y": 80
          },
          {
            "x": 225,
            "y": 80
          }
        ],
        [
          {
            "x": 145,
            "y": 85
          },
          {
            "x": 125,
            "y": 225
          }
        ],
        [
          {
            "x": 125,
            "y": 150
          },
          {
            "x": 200,
            "y": 150
          },
          {
            "x": 185,
            "y": 225
          }
        ],
        [
          {
            "x": 65,
            "y": 225
          },
          {
            "x": 235,
            "y": 225
          }
        ]
      ],
      "compounds": [
        {
          "word": "五つ",
          "reading": "いつつ",
          "meaning": "five things"
        },
        {
          "word": "五日",
          "reading": "いつか",
          "meaning": "the 5th day, five days"
        },
        {
          "word": "五時",
          "reading": "ごじ",
          "meaning": "five o'clock"
        },
        {
          "word": "五人",
          "reading": "ごにん",
          "meaning": "five people"
        },
        {
          "word": "五月",
          "reading": "ごがつ",
          "meaning": "May"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">五</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 75 80 L 225 80\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 145 85 L 125 225\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 125 150 L 200 150 L 185 225\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 65 225 L 235 225\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(75,80)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(145,85)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(125,150)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <g transform=\"translate(65,225)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">4</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【五】 Five (4画) - Can you make the kanji 五 with five wooden mat...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 五 (Five)\"]\n  root --> strokes[\"Strokes: 4画\"]\n  root --> mnem[\"Mnemonic: Can you make the kanji 五 with ...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_五つ[\"五つ (いつつ)<br/>five things\"]\n  compounds --> c_五日[\"五日 (いつか)<br/>the 5th day, five days\"]\n  compounds --> c_五時[\"五時 (ごじ)<br/>five o'clock\"]"
    },
    {
      "char": "六",
      "meaning": "Six",
      "strokes": 4,
      "onyomi": [
        "ロク"
      ],
      "kunyomi": [
        "む-",
        "む.つ",
        "むっ.つ"
      ],
      "radical": {
        "char": "八",
        "name": "はち",
        "meaning": "eight"
      },
      "mnemonic": "A person extending arms and legs, gesturing the number six.",
      "guideStrokes": [
        [
          {
            "x": 150,
            "y": 60
          },
          {
            "x": 150,
            "y": 95
          }
        ],
        [
          {
            "x": 65,
            "y": 115
          },
          {
            "x": 235,
            "y": 115
          }
        ],
        [
          {
            "x": 125,
            "y": 145
          },
          {
            "x": 85,
            "y": 225
          }
        ],
        [
          {
            "x": 175,
            "y": 145
          },
          {
            "x": 215,
            "y": 225
          }
        ]
      ],
      "compounds": [
        {
          "word": "六つ",
          "reading": "むっつ",
          "meaning": "six things"
        },
        {
          "word": "六日",
          "reading": "むいか",
          "meaning": "the 6th day, six days"
        },
        {
          "word": "六時",
          "reading": "ろくじ",
          "meaning": "six o'clock"
        },
        {
          "word": "六百",
          "reading": "ろっぴゃく",
          "meaning": "six hundred"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">六</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 150 60 L 150 95\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 65 115 L 235 115\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 125 145 L 85 225\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 175 145 L 215 225\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(150,60)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(65,115)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(125,145)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <g transform=\"translate(175,145)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">4</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【六】 Six (4画) - A person extending arms and legs, gesturing t...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 六 (Six)\"]\n  root --> strokes[\"Strokes: 4画\"]\n  root --> mnem[\"Mnemonic: A person extending arms and le...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_六つ[\"六つ (むっつ)<br/>six things\"]\n  compounds --> c_六日[\"六日 (むいか)<br/>the 6th day, six days\"]\n  compounds --> c_六時[\"六時 (ろくじ)<br/>six o'clock\"]"
    },
    {
      "char": "七",
      "meaning": "Seven",
      "strokes": 2,
      "onyomi": [
        "シチ"
      ],
      "kunyomi": [
        "なな-",
        "なな.つ",
        "なの"
      ],
      "radical": {
        "char": "一",
        "name": "いち",
        "meaning": "one"
      },
      "mnemonic": "Two plus five equals seven; looks like an upside down 7 with a cut through it.",
      "guideStrokes": [
        [
          {
            "x": 75,
            "y": 145
          },
          {
            "x": 225,
            "y": 125
          }
        ],
        [
          {
            "x": 145,
            "y": 70
          },
          {
            "x": 145,
            "y": 185
          },
          {
            "x": 175,
            "y": 225
          },
          {
            "x": 215,
            "y": 205
          }
        ]
      ],
      "compounds": [
        {
          "word": "七つ",
          "reading": "ななつ",
          "meaning": "seven things"
        },
        {
          "word": "七日",
          "reading": "なのか",
          "meaning": "the 7th day, seven days"
        },
        {
          "word": "七時",
          "reading": "しちじ",
          "meaning": "seven o'clock"
        },
        {
          "word": "七夕",
          "reading": "たなばた",
          "meaning": "Star Festival (Tanabata)"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">七</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 75 145 L 225 125\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 145 70 L 145 185 L 175 225 L 215 205\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(75,145)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(145,70)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【七】 Seven (2画) - Two plus five equals seven; looks like an ups...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 七 (Seven)\"]\n  root --> strokes[\"Strokes: 2画\"]\n  root --> mnem[\"Mnemonic: Two plus five equals seven; lo...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_七つ[\"七つ (ななつ)<br/>seven things\"]\n  compounds --> c_七日[\"七日 (なのか)<br/>the 7th day, seven days\"]\n  compounds --> c_七時[\"七時 (しちじ)<br/>seven o'clock\"]"
    },
    {
      "char": "八",
      "meaning": "Eight",
      "strokes": 2,
      "onyomi": [
        "ハチ"
      ],
      "kunyomi": [
        "や-",
        "や.つ",
        "やっ.つ"
      ],
      "radical": {
        "char": "八",
        "name": "はち",
        "meaning": "eight"
      },
      "mnemonic": "Spreading wider and wider at the base, like Mt. Fuji or katakana ハ.",
      "guideStrokes": [
        [
          {
            "x": 125,
            "y": 85
          },
          {
            "x": 80,
            "y": 225
          }
        ],
        [
          {
            "x": 165,
            "y": 65
          },
          {
            "x": 225,
            "y": 225
          }
        ]
      ],
      "compounds": [
        {
          "word": "八つ",
          "reading": "やっつ",
          "meaning": "eight things"
        },
        {
          "word": "八日",
          "reading": "ようか",
          "meaning": "the 8th day, eight days"
        },
        {
          "word": "八時",
          "reading": "はちじ",
          "meaning": "eight o'clock"
        },
        {
          "word": "八百屋",
          "reading": "やおや",
          "meaning": "vegetable shop"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">八</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 125 85 L 80 225\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 165 65 L 225 225\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(125,85)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(165,65)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【八】 Eight (2画) - Spreading wider and wider at the base, like M...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 八 (Eight)\"]\n  root --> strokes[\"Strokes: 2画\"]\n  root --> mnem[\"Mnemonic: Spreading wider and wider at t...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_八つ[\"八つ (やっつ)<br/>eight things\"]\n  compounds --> c_八日[\"八日 (ようか)<br/>the 8th day, eight days\"]\n  compounds --> c_八時[\"八時 (はちじ)<br/>eight o'clock\"]"
    },
    {
      "char": "九",
      "meaning": "Nine",
      "strokes": 2,
      "onyomi": [
        "キュウ",
        "ク"
      ],
      "kunyomi": [
        "ここの-",
        "ここの.つ"
      ],
      "radical": {
        "char": "乙",
        "name": "おつ",
        "meaning": "second"
      },
      "mnemonic": "'Can you do ten pushups?' 'Seven, eight, nine... No!' An arm straining upward.",
      "guideStrokes": [
        [
          {
            "x": 135,
            "y": 65
          },
          {
            "x": 105,
            "y": 235
          }
        ],
        [
          {
            "x": 95,
            "y": 115
          },
          {
            "x": 205,
            "y": 115
          },
          {
            "x": 175,
            "y": 175
          },
          {
            "x": 195,
            "y": 225
          },
          {
            "x": 235,
            "y": 195
          }
        ]
      ],
      "compounds": [
        {
          "word": "九つ",
          "reading": "ここのつ",
          "meaning": "nine things"
        },
        {
          "word": "九日",
          "reading": "ここのか",
          "meaning": "the 9th day, nine days"
        },
        {
          "word": "九時",
          "reading": "くじ",
          "meaning": "nine o'clock"
        },
        {
          "word": "九月",
          "reading": "くがつ",
          "meaning": "September"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">九</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 135 65 L 105 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 115 L 205 115 L 175 175 L 195 225 L 235 195\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(135,65)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(95,115)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【九】 Nine (2画) - 'Can you do ten pushups?' 'Seven, eight, nine...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 九 (Nine)\"]\n  root --> strokes[\"Strokes: 2画\"]\n  root --> mnem[\"Mnemonic: 'Can you do ten pushups?' 'Sev...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_九つ[\"九つ (ここのつ)<br/>nine things\"]\n  compounds --> c_九日[\"九日 (ここのか)<br/>the 9th day, nine days\"]\n  compounds --> c_九時[\"九時 (くじ)<br/>nine o'clock\"]"
    },
    {
      "char": "十",
      "meaning": "Ten",
      "strokes": 2,
      "onyomi": [
        "ジュウ",
        "ジッ"
      ],
      "kunyomi": [
        "とお",
        "と"
      ],
      "radical": {
        "char": "十",
        "name": "じゅう",
        "meaning": "ten"
      },
      "mnemonic": "Crossing both index fingers to make a plus (+) mark of ten.",
      "guideStrokes": [
        [
          {
            "x": 65,
            "y": 145
          },
          {
            "x": 235,
            "y": 145
          }
        ],
        [
          {
            "x": 150,
            "y": 65
          },
          {
            "x": 150,
            "y": 235
          }
        ]
      ],
      "compounds": [
        {
          "word": "十",
          "reading": "とお",
          "meaning": "ten things"
        },
        {
          "word": "十日",
          "reading": "とおか",
          "meaning": "the 10th day, ten days"
        },
        {
          "word": "十時",
          "reading": "じゅうじ",
          "meaning": "ten o'clock"
        },
        {
          "word": "十分",
          "reading": "じゅっぷん",
          "meaning": "ten minutes"
        },
        {
          "word": "十分",
          "reading": "じゅうぶん",
          "meaning": "enough, plenty"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">十</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 65 145 L 235 145\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 150 65 L 150 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(65,145)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(150,65)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【十】 Ten (2画) - Crossing both index fingers to make a plus (+...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 十 (Ten)\"]\n  root --> strokes[\"Strokes: 2画\"]\n  root --> mnem[\"Mnemonic: Crossing both index fingers to...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_十[\"十 (とお)<br/>ten things\"]\n  compounds --> c_十日[\"十日 (とおか)<br/>the 10th day, ten days\"]\n  compounds --> c_十時[\"十時 (じゅうじ)<br/>ten o'clock\"]"
    },
    {
      "char": "百",
      "meaning": "Hundred",
      "strokes": 6,
      "onyomi": [
        "ヒャク",
        "ビャク",
        "ピャク"
      ],
      "kunyomi": [
        "もも"
      ],
      "radical": {
        "char": "白",
        "name": "しろ",
        "meaning": "white"
      },
      "mnemonic": "Turn the number 100 90 degrees to the right and it looks like 百.",
      "guideStrokes": [
        [
          {
            "x": 75,
            "y": 75
          },
          {
            "x": 225,
            "y": 75
          }
        ],
        [
          {
            "x": 145,
            "y": 80
          },
          {
            "x": 135,
            "y": 125
          }
        ],
        [
          {
            "x": 95,
            "y": 125
          },
          {
            "x": 95,
            "y": 235
          }
        ],
        [
          {
            "x": 95,
            "y": 125
          },
          {
            "x": 205,
            "y": 125
          },
          {
            "x": 205,
            "y": 235
          }
        ],
        [
          {
            "x": 95,
            "y": 180
          },
          {
            "x": 205,
            "y": 180
          }
        ],
        [
          {
            "x": 95,
            "y": 235
          },
          {
            "x": 205,
            "y": 235
          }
        ]
      ],
      "compounds": [
        {
          "word": "百",
          "reading": "ひゃく",
          "meaning": "one hundred"
        },
        {
          "word": "三百",
          "reading": "さんびゃく",
          "meaning": "three hundred"
        },
        {
          "word": "六百",
          "reading": "ろっぴゃく",
          "meaning": "six hundred"
        },
        {
          "word": "八百",
          "reading": "はっぴゃく",
          "meaning": "eight hundred"
        },
        {
          "word": "百貨店",
          "reading": "ひゃっかてん",
          "meaning": "department store"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">百</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 75 75 L 225 75\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 145 80 L 135 125\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 125 L 95 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 125 L 205 125 L 205 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 180 L 205 180\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 235 L 205 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(75,75)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(145,80)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(95,125)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <g transform=\"translate(95,125)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">4</text></g>\n  <g transform=\"translate(95,180)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">5</text></g>\n  <g transform=\"translate(95,235)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">6</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【百】 Hundred (6画) - Turn the number 100 90 degrees to the right a...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 百 (Hundred)\"]\n  root --> strokes[\"Strokes: 6画\"]\n  root --> mnem[\"Mnemonic: Turn the number 100 90 degrees...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_百[\"百 (ひゃく)<br/>one hundred\"]\n  compounds --> c_三百[\"三百 (さんびゃく)<br/>three hundred\"]\n  compounds --> c_六百[\"六百 (ろっぴゃく)<br/>six hundred\"]"
    },
    {
      "char": "千",
      "meaning": "Thousand",
      "strokes": 3,
      "onyomi": [
        "セン",
        "ゼン"
      ],
      "kunyomi": [
        "ち"
      ],
      "radical": {
        "char": "十",
        "name": "じゅう",
        "meaning": "ten"
      },
      "mnemonic": "Adding a slanted line to 10 (+) makes a thousand (千), a much greater number.",
      "guideStrokes": [
        [
          {
            "x": 185,
            "y": 75
          },
          {
            "x": 105,
            "y": 105
          }
        ],
        [
          {
            "x": 65,
            "y": 145
          },
          {
            "x": 235,
            "y": 145
          }
        ],
        [
          {
            "x": 150,
            "y": 105
          },
          {
            "x": 150,
            "y": 245
          }
        ]
      ],
      "compounds": [
        {
          "word": "千",
          "reading": "せん",
          "meaning": "one thousand"
        },
        {
          "word": "三千",
          "reading": "さんぜん",
          "meaning": "three thousand"
        },
        {
          "word": "八千",
          "reading": "はっせん",
          "meaning": "eight thousand"
        },
        {
          "word": "千円",
          "reading": "せんえん",
          "meaning": "one thousand yen"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">千</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 185 75 L 105 105\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 65 145 L 235 145\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 150 105 L 150 245\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(185,75)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(65,145)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(150,105)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【千】 Thousand (3画) - Adding a slanted line to 10 (+) makes a thous...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 千 (Thousand)\"]\n  root --> strokes[\"Strokes: 3画\"]\n  root --> mnem[\"Mnemonic: Adding a slanted line to 10 (+...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_千[\"千 (せん)<br/>one thousand\"]\n  compounds --> c_三千[\"三千 (さんぜん)<br/>three thousand\"]\n  compounds --> c_八千[\"八千 (はっせん)<br/>eight thousand\"]"
    },
    {
      "char": "万",
      "meaning": "Ten Thousand",
      "strokes": 3,
      "onyomi": [
        "マン",
        "バン"
      ],
      "kunyomi": [
        "よろず"
      ],
      "radical": {
        "char": "一",
        "name": "いち",
        "meaning": "one"
      },
      "mnemonic": "10,000 (ten thousand) is a five-digit number; a large chest holding treasure.",
      "guideStrokes": [
        [
          {
            "x": 75,
            "y": 85
          },
          {
            "x": 225,
            "y": 85
          }
        ],
        [
          {
            "x": 145,
            "y": 88
          },
          {
            "x": 135,
            "y": 145
          },
          {
            "x": 195,
            "y": 145
          },
          {
            "x": 195,
            "y": 225
          },
          {
            "x": 165,
            "y": 215
          }
        ],
        [
          {
            "x": 150,
            "y": 145
          },
          {
            "x": 95,
            "y": 235
          }
        ]
      ],
      "compounds": [
        {
          "word": "一万",
          "reading": "いちまん",
          "meaning": "ten thousand (10,000)"
        },
        {
          "word": "十万",
          "reading": "じゅうまん",
          "meaning": "one hundred thousand"
        },
        {
          "word": "百万",
          "reading": "ひゃくまん",
          "meaning": "one million"
        },
        {
          "word": "万歳",
          "reading": "ばんざい",
          "meaning": "banzai / hurrah"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">万</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 75 85 L 225 85\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 145 88 L 135 145 L 195 145 L 195 225 L 165 215\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 150 145 L 95 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(75,85)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(145,88)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(150,145)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【万】 Ten Thousand (3画) - 10,000 (ten thousand) is a five-digit number;...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 万 (Ten Thousand)\"]\n  root --> strokes[\"Strokes: 3画\"]\n  root --> mnem[\"Mnemonic: 10,000 (ten thousand) is a fiv...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_一万[\"一万 (いちまん)<br/>ten thousand (10,000)\"]\n  compounds --> c_十万[\"十万 (じゅうまん)<br/>one hundred thousand\"]\n  compounds --> c_百万[\"百万 (ひゃくまん)<br/>one million\"]"
    },
    {
      "char": "円",
      "meaning": "Yen, Circle, Round",
      "strokes": 4,
      "onyomi": [
        "エン"
      ],
      "kunyomi": [
        "まる.い"
      ],
      "radical": {
        "char": "冂",
        "name": "けいがまえ",
        "meaning": "inverted box"
      },
      "mnemonic": "A round coin held securely within an exchange counter box.",
      "guideStrokes": [
        [
          {
            "x": 95,
            "y": 75
          },
          {
            "x": 95,
            "y": 235
          }
        ],
        [
          {
            "x": 95,
            "y": 75
          },
          {
            "x": 215,
            "y": 75
          },
          {
            "x": 215,
            "y": 235
          }
        ],
        [
          {
            "x": 145,
            "y": 78
          },
          {
            "x": 145,
            "y": 230
          }
        ],
        [
          {
            "x": 95,
            "y": 155
          },
          {
            "x": 215,
            "y": 155
          }
        ]
      ],
      "compounds": [
        {
          "word": "百円",
          "reading": "ひゃくえん",
          "meaning": "one hundred yen"
        },
        {
          "word": "千円",
          "reading": "せんえん",
          "meaning": "one thousand yen"
        },
        {
          "word": "円高",
          "reading": "えんだか",
          "meaning": "strong yen"
        },
        {
          "word": "円安",
          "reading": "えんやす",
          "meaning": "weak yen"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">円</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 95 75 L 95 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 75 L 215 75 L 215 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 145 78 L 145 230\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 155 L 215 155\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(95,75)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(95,75)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(145,78)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <g transform=\"translate(95,155)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">4</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【円】 Yen, Circle, Round (4画) - A round coin held securely within an exchange...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 円 (Yen, Circle, Round)\"]\n  root --> strokes[\"Strokes: 4画\"]\n  root --> mnem[\"Mnemonic: A round coin held securely wit...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_百円[\"百円 (ひゃくえん)<br/>one hundred yen\"]\n  compounds --> c_千円[\"千円 (せんえん)<br/>one thousand yen\"]\n  compounds --> c_円高[\"円高 (えんだか)<br/>strong yen\"]"
    },
    {
      "char": "日",
      "meaning": "Sun, Day, Japan",
      "strokes": 4,
      "onyomi": [
        "ニチ",
        "ジツ"
      ],
      "kunyomi": [
        "ひ",
        "-び",
        "-か"
      ],
      "radical": {
        "char": "日",
        "name": "ひ",
        "meaning": "sun"
      },
      "mnemonic": "A window frame opening up to the radiant sun in the morning sky.",
      "guideStrokes": [
        [
          {
            "x": 95,
            "y": 70
          },
          {
            "x": 95,
            "y": 235
          }
        ],
        [
          {
            "x": 95,
            "y": 70
          },
          {
            "x": 205,
            "y": 70
          },
          {
            "x": 205,
            "y": 235
          }
        ],
        [
          {
            "x": 95,
            "y": 150
          },
          {
            "x": 205,
            "y": 150
          }
        ],
        [
          {
            "x": 95,
            "y": 235
          },
          {
            "x": 205,
            "y": 235
          }
        ]
      ],
      "compounds": [
        {
          "word": "日本",
          "reading": "にほん",
          "meaning": "Japan"
        },
        {
          "word": "日曜日",
          "reading": "にちようび",
          "meaning": "Sunday"
        },
        {
          "word": "今日",
          "reading": "きょう",
          "meaning": "today"
        },
        {
          "word": "毎日",
          "reading": "まいにち",
          "meaning": "every day"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">日</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 95 70 L 95 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 70 L 205 70 L 205 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 150 L 205 150\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 235 L 205 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(95,70)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(95,70)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(95,150)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <g transform=\"translate(95,235)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">4</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【日】 Sun, Day, Japan (4画) - A window frame opening up to the radiant sun ...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 日 (Sun, Day, Japan)\"]\n  root --> strokes[\"Strokes: 4画\"]\n  root --> mnem[\"Mnemonic: A window frame opening up to t...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_日本[\"日本 (にほん)<br/>Japan\"]\n  compounds --> c_日曜日[\"日曜日 (にちようび)<br/>Sunday\"]\n  compounds --> c_今日[\"今日 (きょう)<br/>today\"]"
    },
    {
      "char": "月",
      "meaning": "Moon, Month",
      "strokes": 4,
      "onyomi": [
        "ゲツ",
        "ガツ"
      ],
      "kunyomi": [
        "つき"
      ],
      "radical": {
        "char": "月",
        "name": "つき",
        "meaning": "moon"
      },
      "mnemonic": "A crescent moon peeking through the clouds with two evening stars.",
      "guideStrokes": [
        [
          {
            "x": 105,
            "y": 65
          },
          {
            "x": 85,
            "y": 235
          }
        ],
        [
          {
            "x": 105,
            "y": 65
          },
          {
            "x": 195,
            "y": 65
          },
          {
            "x": 195,
            "y": 235
          },
          {
            "x": 165,
            "y": 220
          }
        ],
        [
          {
            "x": 100,
            "y": 125
          },
          {
            "x": 195,
            "y": 125
          }
        ],
        [
          {
            "x": 95,
            "y": 175
          },
          {
            "x": 195,
            "y": 175
          }
        ]
      ],
      "compounds": [
        {
          "word": "月曜日",
          "reading": "げつようび",
          "meaning": "Monday"
        },
        {
          "word": "今月",
          "reading": "こんげつ",
          "meaning": "this month"
        },
        {
          "word": "一月",
          "reading": "いちがつ",
          "meaning": "January"
        },
        {
          "word": "来月",
          "reading": "らいげつ",
          "meaning": "next month"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">月</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 105 65 L 85 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 105 65 L 195 65 L 195 235 L 165 220\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 100 125 L 195 125\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 175 L 195 175\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(105,65)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(105,65)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(100,125)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <g transform=\"translate(95,175)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">4</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【月】 Moon, Month (4画) - A crescent moon peeking through the clouds wi...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 月 (Moon, Month)\"]\n  root --> strokes[\"Strokes: 4画\"]\n  root --> mnem[\"Mnemonic: A crescent moon peeking throug...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_月曜日[\"月曜日 (げつようび)<br/>Monday\"]\n  compounds --> c_今月[\"今月 (こんげつ)<br/>this month\"]\n  compounds --> c_一月[\"一月 (いちがつ)<br/>January\"]"
    },
    {
      "char": "火",
      "meaning": "Fire",
      "strokes": 4,
      "onyomi": [
        "カ"
      ],
      "kunyomi": [
        "ひ",
        "-び",
        "ほ-"
      ],
      "radical": {
        "char": "火",
        "name": "ひ",
        "meaning": "fire"
      },
      "mnemonic": "Leaping flames of a bonfire shooting sparks into the evening air.",
      "guideStrokes": [
        [
          {
            "x": 95,
            "y": 125
          },
          {
            "x": 75,
            "y": 155
          }
        ],
        [
          {
            "x": 205,
            "y": 115
          },
          {
            "x": 225,
            "y": 150
          }
        ],
        [
          {
            "x": 150,
            "y": 65
          },
          {
            "x": 120,
            "y": 235
          }
        ],
        [
          {
            "x": 140,
            "y": 140
          },
          {
            "x": 215,
            "y": 235
          }
        ]
      ],
      "compounds": [
        {
          "word": "火曜日",
          "reading": "かようび",
          "meaning": "Tuesday"
        },
        {
          "word": "火山",
          "reading": "かざん",
          "meaning": "volcano"
        },
        {
          "word": "火事",
          "reading": "かじ",
          "meaning": "fire (disaster)"
        },
        {
          "word": "花火",
          "reading": "はなび",
          "meaning": "fireworks"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">火</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 95 125 L 75 155\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 205 115 L 225 150\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 150 65 L 120 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 140 140 L 215 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(95,125)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(205,115)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(150,65)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <g transform=\"translate(140,140)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">4</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【火】 Fire (4画) - Leaping flames of a bonfire shooting sparks i...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 火 (Fire)\"]\n  root --> strokes[\"Strokes: 4画\"]\n  root --> mnem[\"Mnemonic: Leaping flames of a bonfire sh...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_火曜日[\"火曜日 (かようび)<br/>Tuesday\"]\n  compounds --> c_火山[\"火山 (かざん)<br/>volcano\"]\n  compounds --> c_火事[\"火事 (かじ)<br/>fire (disaster)\"]"
    },
    {
      "char": "水",
      "meaning": "Water",
      "strokes": 4,
      "onyomi": [
        "スイ"
      ],
      "kunyomi": [
        "みず"
      ],
      "radical": {
        "char": "水",
        "name": "みず",
        "meaning": "water"
      },
      "mnemonic": "A stream of flowing water splashing ripples on both river banks.",
      "guideStrokes": [
        [
          {
            "x": 150,
            "y": 55
          },
          {
            "x": 150,
            "y": 235
          },
          {
            "x": 125,
            "y": 215
          }
        ],
        [
          {
            "x": 105,
            "y": 115
          },
          {
            "x": 75,
            "y": 155
          }
        ],
        [
          {
            "x": 205,
            "y": 95
          },
          {
            "x": 155,
            "y": 145
          }
        ],
        [
          {
            "x": 155,
            "y": 145
          },
          {
            "x": 225,
            "y": 230
          }
        ]
      ],
      "compounds": [
        {
          "word": "水曜日",
          "reading": "すいようび",
          "meaning": "Wednesday"
        },
        {
          "word": "水",
          "reading": "みず",
          "meaning": "cold water"
        },
        {
          "word": "水泳",
          "reading": "すいえい",
          "meaning": "swimming"
        },
        {
          "word": "水道",
          "reading": "すいどう",
          "meaning": "water supply / tap water"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">水</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 150 55 L 150 235 L 125 215\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 105 115 L 75 155\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 205 95 L 155 145\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 155 145 L 225 230\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(150,55)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(105,115)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(205,95)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <g transform=\"translate(155,145)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">4</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【水】 Water (4画) - A stream of flowing water splashing ripples o...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 水 (Water)\"]\n  root --> strokes[\"Strokes: 4画\"]\n  root --> mnem[\"Mnemonic: A stream of flowing water spla...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_水曜日[\"水曜日 (すいようび)<br/>Wednesday\"]\n  compounds --> c_水[\"水 (みず)<br/>cold water\"]\n  compounds --> c_水泳[\"水泳 (すいえい)<br/>swimming\"]"
    },
    {
      "char": "木",
      "meaning": "Tree, Wood",
      "strokes": 4,
      "onyomi": [
        "モク",
        "ボク"
      ],
      "kunyomi": [
        "き",
        "こ-"
      ],
      "radical": {
        "char": "木",
        "name": "き",
        "meaning": "tree"
      },
      "mnemonic": "A tall tree trunk with widespread branches and deep roots.",
      "guideStrokes": [
        [
          {
            "x": 75,
            "y": 120
          },
          {
            "x": 225,
            "y": 120
          }
        ],
        [
          {
            "x": 150,
            "y": 60
          },
          {
            "x": 150,
            "y": 235
          }
        ],
        [
          {
            "x": 150,
            "y": 120
          },
          {
            "x": 85,
            "y": 215
          }
        ],
        [
          {
            "x": 150,
            "y": 120
          },
          {
            "x": 215,
            "y": 215
          }
        ]
      ],
      "compounds": [
        {
          "word": "木曜日",
          "reading": "もくようび",
          "meaning": "Thursday"
        },
        {
          "word": "木",
          "reading": "き",
          "meaning": "tree, wood"
        },
        {
          "word": "木綿",
          "reading": "もめん",
          "meaning": "cotton"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">木</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 75 120 L 225 120\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 150 60 L 150 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 150 120 L 85 215\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 150 120 L 215 215\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(75,120)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(150,60)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(150,120)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <g transform=\"translate(150,120)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">4</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【木】 Tree, Wood (4画) - A tall tree trunk with widespread branches an...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 木 (Tree, Wood)\"]\n  root --> strokes[\"Strokes: 4画\"]\n  root --> mnem[\"Mnemonic: A tall tree trunk with widespr...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_木曜日[\"木曜日 (もくようび)<br/>Thursday\"]\n  compounds --> c_木[\"木 (き)<br/>tree, wood\"]\n  compounds --> c_木綿[\"木綿 (もめん)<br/>cotton\"]"
    },
    {
      "char": "金",
      "meaning": "Gold, Money",
      "strokes": 8,
      "onyomi": [
        "キン",
        "コン"
      ],
      "kunyomi": [
        "かね",
        "かな-"
      ],
      "radical": {
        "char": "金",
        "name": "かね",
        "meaning": "metal, gold"
      },
      "mnemonic": "Gold nuggets buried deep inside the mountain under the earth roof.",
      "guideStrokes": [
        [
          {
            "x": 150,
            "y": 55
          },
          {
            "x": 85,
            "y": 115
          }
        ],
        [
          {
            "x": 150,
            "y": 55
          },
          {
            "x": 215,
            "y": 115
          }
        ],
        [
          {
            "x": 95,
            "y": 135
          },
          {
            "x": 205,
            "y": 135
          }
        ],
        [
          {
            "x": 80,
            "y": 175
          },
          {
            "x": 220,
            "y": 175
          }
        ],
        [
          {
            "x": 150,
            "y": 135
          },
          {
            "x": 150,
            "y": 235
          }
        ],
        [
          {
            "x": 115,
            "y": 195
          },
          {
            "x": 100,
            "y": 215
          }
        ],
        [
          {
            "x": 185,
            "y": 195
          },
          {
            "x": 200,
            "y": 215
          }
        ],
        [
          {
            "x": 65,
            "y": 235
          },
          {
            "x": 235,
            "y": 235
          }
        ]
      ],
      "compounds": [
        {
          "word": "金曜日",
          "reading": "きんようび",
          "meaning": "Friday"
        },
        {
          "word": "お金",
          "reading": "おかね",
          "meaning": "money"
        },
        {
          "word": "料金",
          "reading": "りょうきん",
          "meaning": "charge, fee"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">金</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 150 55 L 85 115\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 150 55 L 215 115\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 135 L 205 135\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 80 175 L 220 175\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 150 135 L 150 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 115 195 L 100 215\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 185 195 L 200 215\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 65 235 L 235 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(150,55)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(150,55)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(95,135)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <g transform=\"translate(80,175)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">4</text></g>\n  <g transform=\"translate(150,135)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">5</text></g>\n  <g transform=\"translate(115,195)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">6</text></g>\n  <g transform=\"translate(185,195)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">7</text></g>\n  <g transform=\"translate(65,235)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">8</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【金】 Gold, Money (8画) - Gold nuggets buried deep inside the mountain ...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 金 (Gold, Money)\"]\n  root --> strokes[\"Strokes: 8画\"]\n  root --> mnem[\"Mnemonic: Gold nuggets buried deep insid...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_金曜日[\"金曜日 (きんようび)<br/>Friday\"]\n  compounds --> c_お金[\"お金 (おかね)<br/>money\"]\n  compounds --> c_料金[\"料金 (りょうきん)<br/>charge, fee\"]"
    },
    {
      "char": "土",
      "meaning": "Soil, Earth",
      "strokes": 3,
      "onyomi": [
        "ド",
        "ト"
      ],
      "kunyomi": [
        "つち"
      ],
      "radical": {
        "char": "土",
        "name": "つち",
        "meaning": "earth, soil"
      },
      "mnemonic": "A young sprout emerging from the rich mound of fertile soil.",
      "guideStrokes": [
        [
          {
            "x": 85,
            "y": 140
          },
          {
            "x": 215,
            "y": 140
          }
        ],
        [
          {
            "x": 150,
            "y": 65
          },
          {
            "x": 150,
            "y": 235
          }
        ],
        [
          {
            "x": 65,
            "y": 235
          },
          {
            "x": 235,
            "y": 235
          }
        ]
      ],
      "compounds": [
        {
          "word": "土曜日",
          "reading": "どようび",
          "meaning": "Saturday"
        },
        {
          "word": "土地",
          "reading": "とち",
          "meaning": "land, real estate"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">土</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 85 140 L 215 140\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 150 65 L 150 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 65 235 L 235 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(85,140)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(150,65)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(65,235)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【土】 Soil, Earth (3画) - A young sprout emerging from the rich mound o...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 土 (Soil, Earth)\"]\n  root --> strokes[\"Strokes: 3画\"]\n  root --> mnem[\"Mnemonic: A young sprout emerging from t...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_土曜日[\"土曜日 (どようび)<br/>Saturday\"]\n  compounds --> c_土地[\"土地 (とち)<br/>land, real estate\"]"
    },
    {
      "char": "山",
      "meaning": "Mountain",
      "strokes": 3,
      "onyomi": [
        "サン",
        "セン"
      ],
      "kunyomi": [
        "やま"
      ],
      "radical": {
        "char": "山",
        "name": "やま",
        "meaning": "mountain"
      },
      "mnemonic": "Three mountain peaks towering side by side into the sky.",
      "guideStrokes": [
        [
          {
            "x": 150,
            "y": 55
          },
          {
            "x": 150,
            "y": 235
          }
        ],
        [
          {
            "x": 85,
            "y": 115
          },
          {
            "x": 85,
            "y": 235
          },
          {
            "x": 215,
            "y": 235
          }
        ],
        [
          {
            "x": 215,
            "y": 115
          },
          {
            "x": 215,
            "y": 235
          }
        ]
      ],
      "compounds": [
        {
          "word": "富士山",
          "reading": "ふじさん",
          "meaning": "Mount Fuji"
        },
        {
          "word": "火山",
          "reading": "かざん",
          "meaning": "volcano"
        },
        {
          "word": "山道",
          "reading": "やまみち",
          "meaning": "mountain trail"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">山</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 150 55 L 150 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 85 115 L 85 235 L 215 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 215 115 L 215 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(150,55)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(85,115)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(215,115)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【山】 Mountain (3画) - Three mountain peaks towering side by side in...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 山 (Mountain)\"]\n  root --> strokes[\"Strokes: 3画\"]\n  root --> mnem[\"Mnemonic: Three mountain peaks towering ...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_富士山[\"富士山 (ふじさん)<br/>Mount Fuji\"]\n  compounds --> c_火山[\"火山 (かざん)<br/>volcano\"]\n  compounds --> c_山道[\"山道 (やまみち)<br/>mountain trail\"]"
    },
    {
      "char": "川",
      "meaning": "River",
      "strokes": 3,
      "onyomi": [
        "セン"
      ],
      "kunyomi": [
        "かわ",
        "がわ"
      ],
      "radical": {
        "char": "川",
        "name": "かわ",
        "meaning": "river"
      },
      "mnemonic": "Three currents of water flowing downstream together in a riverbed.",
      "guideStrokes": [
        [
          {
            "x": 85,
            "y": 75
          },
          {
            "x": 75,
            "y": 215
          }
        ],
        [
          {
            "x": 145,
            "y": 95
          },
          {
            "x": 145,
            "y": 195
          }
        ],
        [
          {
            "x": 205,
            "y": 65
          },
          {
            "x": 205,
            "y": 235
          }
        ]
      ],
      "compounds": [
        {
          "word": "川",
          "reading": "かわ",
          "meaning": "river"
        },
        {
          "word": "小川",
          "reading": "おがわ",
          "meaning": "brook, stream"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">川</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 85 75 L 75 215\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 145 95 L 145 195\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 205 65 L 205 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(85,75)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(145,95)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(205,65)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【川】 River (3画) - Three currents of water flowing downstream to...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 川 (River)\"]\n  root --> strokes[\"Strokes: 3画\"]\n  root --> mnem[\"Mnemonic: Three currents of water flowin...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_川[\"川 (かわ)<br/>river\"]\n  compounds --> c_小川[\"小川 (おがわ)<br/>brook, stream\"]"
    },
    {
      "char": "人",
      "meaning": "Person, Human",
      "strokes": 2,
      "onyomi": [
        "ジン",
        "ニン"
      ],
      "kunyomi": [
        "ひと"
      ],
      "radical": {
        "char": "人",
        "name": "ひと",
        "meaning": "person"
      },
      "mnemonic": "A human standing tall on two legs moving forward.",
      "guideStrokes": [
        [
          {
            "x": 155,
            "y": 65
          },
          {
            "x": 85,
            "y": 235
          }
        ],
        [
          {
            "x": 135,
            "y": 135
          },
          {
            "x": 215,
            "y": 235
          }
        ]
      ],
      "compounds": [
        {
          "word": "日本人",
          "reading": "にほんじん",
          "meaning": "Japanese person"
        },
        {
          "word": "外国人",
          "reading": "がいこくじん",
          "meaning": "foreigner"
        },
        {
          "word": "大人",
          "reading": "おとな",
          "meaning": "adult"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">人</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 155 65 L 85 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 135 135 L 215 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(155,65)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(135,135)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【人】 Person, Human (2画) - A human standing tall on two legs moving forw...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 人 (Person, Human)\"]\n  root --> strokes[\"Strokes: 2画\"]\n  root --> mnem[\"Mnemonic: A human standing tall on two l...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_日本人[\"日本人 (にほんじん)<br/>Japanese person\"]\n  compounds --> c_外国人[\"外国人 (がいこくじん)<br/>foreigner\"]\n  compounds --> c_大人[\"大人 (おとな)<br/>adult\"]"
    },
    {
      "char": "口",
      "meaning": "Mouth, Opening",
      "strokes": 3,
      "onyomi": [
        "コウ",
        "ク"
      ],
      "kunyomi": [
        "くち",
        "ぐち"
      ],
      "radical": {
        "char": "口",
        "name": "くち",
        "meaning": "mouth"
      },
      "mnemonic": "An open mouth or entrance passage.",
      "guideStrokes": [
        [
          {
            "x": 90,
            "y": 80
          },
          {
            "x": 90,
            "y": 220
          }
        ],
        [
          {
            "x": 90,
            "y": 80
          },
          {
            "x": 210,
            "y": 80
          },
          {
            "x": 210,
            "y": 220
          }
        ],
        [
          {
            "x": 90,
            "y": 220
          },
          {
            "x": 215,
            "y": 220
          }
        ]
      ],
      "compounds": [
        {
          "word": "入口",
          "reading": "いりぐち",
          "meaning": "entrance"
        },
        {
          "word": "出口",
          "reading": "でぐち",
          "meaning": "exit"
        },
        {
          "word": "改札口",
          "reading": "かいさつぐち",
          "meaning": "ticket barrier"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">口</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 90 80 L 90 220\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 90 80 L 210 80 L 210 220\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 90 220 L 215 220\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(90,80)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(90,80)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(90,220)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【口】 Mouth, Opening (3画) - An open mouth or entrance passage.</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 口 (Mouth, Opening)\"]\n  root --> strokes[\"Strokes: 3画\"]\n  root --> mnem[\"Mnemonic: An open mouth or entrance pass...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_入口[\"入口 (いりぐち)<br/>entrance\"]\n  compounds --> c_出口[\"出口 (でぐち)<br/>exit\"]\n  compounds --> c_改札口[\"改札口 (かいさつぐち)<br/>ticket barrier\"]"
    },
    {
      "char": "車",
      "meaning": "Car, Vehicle",
      "strokes": 7,
      "onyomi": [
        "シャ"
      ],
      "kunyomi": [
        "くるま"
      ],
      "radical": {
        "char": "車",
        "name": "くるま",
        "meaning": "cart, car"
      },
      "mnemonic": "A cart or carriage viewed from above with axle and wheels.",
      "guideStrokes": [
        [
          {
            "x": 85,
            "y": 85
          },
          {
            "x": 215,
            "y": 85
          }
        ],
        [
          {
            "x": 95,
            "y": 120
          },
          {
            "x": 95,
            "y": 175
          }
        ],
        [
          {
            "x": 95,
            "y": 120
          },
          {
            "x": 205,
            "y": 120
          },
          {
            "x": 205,
            "y": 175
          }
        ],
        [
          {
            "x": 95,
            "y": 150
          },
          {
            "x": 205,
            "y": 150
          }
        ],
        [
          {
            "x": 95,
            "y": 175
          },
          {
            "x": 205,
            "y": 175
          }
        ],
        [
          {
            "x": 70,
            "y": 205
          },
          {
            "x": 230,
            "y": 205
          }
        ],
        [
          {
            "x": 150,
            "y": 55
          },
          {
            "x": 150,
            "y": 245
          }
        ]
      ],
      "compounds": [
        {
          "word": "電車",
          "reading": "でんしゃ",
          "meaning": "train"
        },
        {
          "word": "自動車",
          "reading": "じどうしゃ",
          "meaning": "automobile"
        },
        {
          "word": "自転車",
          "reading": "じてんしゃ",
          "meaning": "bicycle"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">車</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 85 85 L 215 85\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 120 L 95 175\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 120 L 205 120 L 205 175\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 150 L 205 150\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 175 L 205 175\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 70 205 L 230 205\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 150 55 L 150 245\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(85,85)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(95,120)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(95,120)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <g transform=\"translate(95,150)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">4</text></g>\n  <g transform=\"translate(95,175)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">5</text></g>\n  <g transform=\"translate(70,205)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">6</text></g>\n  <g transform=\"translate(150,55)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">7</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【車】 Car, Vehicle (7画) - A cart or carriage viewed from above with axl...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 車 (Car, Vehicle)\"]\n  root --> strokes[\"Strokes: 7画\"]\n  root --> mnem[\"Mnemonic: A cart or carriage viewed from...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_電車[\"電車 (でんしゃ)<br/>train\"]\n  compounds --> c_自動車[\"自動車 (じどうしゃ)<br/>automobile\"]\n  compounds --> c_自転車[\"自転車 (じてんしゃ)<br/>bicycle\"]"
    },
    {
      "char": "学",
      "meaning": "Study, Learning",
      "strokes": 8,
      "onyomi": [
        "ガク"
      ],
      "kunyomi": [
        "まな・ぶ"
      ],
      "radical": {
        "char": "子",
        "name": "こ",
        "meaning": "child"
      },
      "mnemonic": "A child (子) under a roof receiving knowledge spark droplets.",
      "guideStrokes": [
        [
          {
            "x": 105,
            "y": 65
          },
          {
            "x": 115,
            "y": 95
          }
        ],
        [
          {
            "x": 145,
            "y": 60
          },
          {
            "x": 155,
            "y": 90
          }
        ],
        [
          {
            "x": 195,
            "y": 65
          },
          {
            "x": 175,
            "y": 95
          }
        ],
        [
          {
            "x": 80,
            "y": 110
          },
          {
            "x": 105,
            "y": 135
          }
        ],
        [
          {
            "x": 105,
            "y": 115
          },
          {
            "x": 205,
            "y": 115
          },
          {
            "x": 190,
            "y": 135
          }
        ],
        [
          {
            "x": 145,
            "y": 140
          },
          {
            "x": 105,
            "y": 175
          },
          {
            "x": 185,
            "y": 175
          }
        ],
        [
          {
            "x": 145,
            "y": 175
          },
          {
            "x": 145,
            "y": 240
          },
          {
            "x": 115,
            "y": 220
          }
        ],
        [
          {
            "x": 85,
            "y": 200
          },
          {
            "x": 215,
            "y": 200
          }
        ]
      ],
      "compounds": [
        {
          "word": "学生",
          "reading": "がくせい",
          "meaning": "student"
        },
        {
          "word": "大学",
          "reading": "だいがく",
          "meaning": "university"
        },
        {
          "word": "学校",
          "reading": "がっこう",
          "meaning": "school"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">学</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 105 65 L 115 95\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 145 60 L 155 90\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 195 65 L 175 95\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 80 110 L 105 135\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 105 115 L 205 115 L 190 135\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 145 140 L 105 175 L 185 175\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 145 175 L 145 240 L 115 220\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 85 200 L 215 200\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(105,65)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(145,60)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(195,65)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <g transform=\"translate(80,110)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">4</text></g>\n  <g transform=\"translate(105,115)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">5</text></g>\n  <g transform=\"translate(145,140)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">6</text></g>\n  <g transform=\"translate(145,175)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">7</text></g>\n  <g transform=\"translate(85,200)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">8</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【学】 Study, Learning (8画) - A child (子) under a roof receiving knowledge ...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 学 (Study, Learning)\"]\n  root --> strokes[\"Strokes: 8画\"]\n  root --> mnem[\"Mnemonic: A child (子) under a roof recei...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_学生[\"学生 (がくせい)<br/>student\"]\n  compounds --> c_大学[\"大学 (だいがく)<br/>university\"]\n  compounds --> c_学校[\"学校 (がっこう)<br/>school\"]"
    },
    {
      "char": "校",
      "meaning": "School, Exam",
      "strokes": 10,
      "onyomi": [
        "コウ"
      ],
      "kunyomi": [],
      "radical": {
        "char": "木",
        "name": "き",
        "meaning": "tree"
      },
      "mnemonic": "Wooden (木) school building where exchange (交) of minds happens.",
      "guideStrokes": [
        [
          {
            "x": 65,
            "y": 110
          },
          {
            "x": 125,
            "y": 110
          }
        ],
        [
          {
            "x": 95,
            "y": 65
          },
          {
            "x": 95,
            "y": 235
          }
        ],
        [
          {
            "x": 95,
            "y": 115
          },
          {
            "x": 65,
            "y": 195
          }
        ],
        [
          {
            "x": 95,
            "y": 135
          },
          {
            "x": 125,
            "y": 185
          }
        ],
        [
          {
            "x": 170,
            "y": 65
          },
          {
            "x": 170,
            "y": 95
          }
        ],
        [
          {
            "x": 135,
            "y": 105
          },
          {
            "x": 225,
            "y": 100
          }
        ],
        [
          {
            "x": 175,
            "y": 115
          },
          {
            "x": 145,
            "y": 165
          }
        ],
        [
          {
            "x": 185,
            "y": 115
          },
          {
            "x": 215,
            "y": 165
          }
        ],
        [
          {
            "x": 180,
            "y": 165
          },
          {
            "x": 140,
            "y": 235
          }
        ],
        [
          {
            "x": 175,
            "y": 170
          },
          {
            "x": 225,
            "y": 235
          }
        ]
      ],
      "compounds": [
        {
          "word": "学校",
          "reading": "がっこう",
          "meaning": "school"
        },
        {
          "word": "高校",
          "reading": "こうこう",
          "meaning": "high school"
        },
        {
          "word": "校長",
          "reading": "こうちょう",
          "meaning": "principal"
        }
      ],
      "svgDiagram": "<svg viewBox=\"0 0 300 300\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <!-- Grid -->\n  <rect width=\"300\" height=\"300\" fill=\"#FAF5EF\" rx=\"12\" stroke=\"#E2D9CE\" stroke-width=\"2\"/>\n  <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#E8DFD5\" stroke-width=\"1.5\" stroke-dasharray=\"6,4\"/>\n  <circle cx=\"150\" cy=\"150\" r=\"125\" fill=\"none\" stroke=\"#EFE7DD\" stroke-width=\"1.2\" stroke-dasharray=\"4,4\"/>\n  <!-- Background Watermark -->\n  <text x=\"150\" y=\"215\" font-family=\"'Noto Sans JP', 'Hiragino Mincho Pro', serif\" font-size=\"165\" text-anchor=\"middle\" fill=\"#EDE4D8\" font-weight=\"900\">校</text>\n  <!-- Drawn Stroke Paths -->\n  <path d=\"M 65 110 L 125 110\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 65 L 95 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 115 L 65 195\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 95 135 L 125 185\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 170 65 L 170 95\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 135 105 L 225 100\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 175 115 L 145 165\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 185 115 L 215 165\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 180 165 L 140 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <path d=\"M 175 170 L 225 235\" fill=\"none\" stroke=\"#2D3748\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n  <!-- Numbered Stroke Badges -->\n  <g transform=\"translate(65,110)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">1</text></g>\n  <g transform=\"translate(95,65)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">2</text></g>\n  <g transform=\"translate(95,115)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">3</text></g>\n  <g transform=\"translate(95,135)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">4</text></g>\n  <g transform=\"translate(170,65)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">5</text></g>\n  <g transform=\"translate(135,105)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">6</text></g>\n  <g transform=\"translate(175,115)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">7</text></g>\n  <g transform=\"translate(185,115)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">8</text></g>\n  <g transform=\"translate(180,165)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">9</text></g>\n  <g transform=\"translate(175,170)\"><circle cx=\"0\" cy=\"0\" r=\"11\" fill=\"#E53E3E\" stroke=\"#FFF\" stroke-width=\"1.5\"/><text x=\"0\" y=\"4\" font-family=\"system-ui, sans-serif\" font-size=\"11\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#FFFFFF\">10</text></g>\n  <!-- Footer Label -->\n  <rect x=\"12\" y=\"260\" width=\"276\" height=\"30\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#DCCEC0\" opacity=\"0.95\"/>\n  <text x=\"150\" y=\"280\" font-family=\"system-ui, sans-serif\" font-size=\"11.5\" font-weight=\"600\" text-anchor=\"middle\" fill=\"#4A5568\">【校】 School, Exam (10画) - Wooden (木) school building where exchange (交)...</text>\n</svg>",
      "mermaidDiagram": "graph TD\n  root[\"Kanji: 校 (School, Exam)\"]\n  root --> strokes[\"Strokes: 10画\"]\n  root --> mnem[\"Mnemonic: Wooden (木) school building whe...\"]\n  root --> compounds[\"Key Compounds\"]\n  compounds --> c_学校[\"学校 (がっこう)<br/>school\"]\n  compounds --> c_高校[\"高校 (こうこう)<br/>high school\"]\n  compounds --> c_校長[\"校長 (こうちょう)<br/>principal\"]"
    }
  ],
  "grammar": [
    {
      "id": "g_adj_i",
      "title": "i-Adjective Conjugation",
      "formula": "[Stem] + い / くない / かった / くなかった",
      "explanation": "Drop the final い and append the appropriate tense/negative ending. Irregular: いい ➔ よくありません / よかった / よくなかった.",
      "blocks": [
        {
          "role": "Topic",
          "text": "映画は",
          "color": "#3182CE"
        },
        {
          "role": "Adjective (Past)",
          "text": "面白かった",
          "color": "#DD6B20"
        },
        {
          "role": "Polite",
          "text": "です",
          "color": "#38A169"
        }
      ],
      "example_jp": "映画はおもしろかったです。",
      "example_en": "The movie was interesting.",
      "mermaidDiagram": "flowchart LR\n  Adj[高い takai] -->|Present Neg| Neg[高くない takakunai]\n  Adj -->|Past Aff| Past[高かった takakatta]\n  Adj -->|Past Neg| PastNeg[高くなかった takakunakatta]",
      "svgDiagram": "<svg viewBox=\"0 0 500 220\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#A0AEC0\"/>\n    </marker>\n  </defs>\n  <rect width=\"500\" height=\"220\" rx=\"12\" fill=\"#F7FAFC\" stroke=\"#E2E8F0\" stroke-width=\"2\"/>\n  <!-- Header -->\n  <rect x=\"0\" y=\"0\" width=\"500\" height=\"42\" rx=\"12\" fill=\"#EDF2F7\"/>\n  <text x=\"20\" y=\"26\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#2B6CB0\">📐 i-Adjective Conjugation</text>\n  <text x=\"480\" y=\"26\" font-family=\"sans-serif\" font-size=\"11\" text-anchor=\"end\" fill=\"#718096\">[Stem] + い / くない / かった / くなかった</text>\n  <!-- Flow Blocks -->\n  <g transform=\"translate(20, 75)\">\n    <rect width=\"80\" height=\"60\" rx=\"8\" fill=\"#3182CE\" opacity=\"0.15\" stroke=\"#3182CE\" stroke-width=\"2\"/>\n    <text x=\"40.0\" y=\"24\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#3182CE\">Topic</text>\n    <text x=\"40.0\" y=\"48\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2D3748\">映画は</text>\n  </g>\n  <path d=\"M 102 105 L 112 105\" stroke=\"#CBD5E0\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n  <g transform=\"translate(115, 75)\">\n    <rect width=\"80\" height=\"60\" rx=\"8\" fill=\"#DD6B20\" opacity=\"0.15\" stroke=\"#DD6B20\" stroke-width=\"2\"/>\n    <text x=\"40.0\" y=\"24\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#DD6B20\">Adjective (Past)</text>\n    <text x=\"40.0\" y=\"48\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2D3748\">面白かった</text>\n  </g>\n  <path d=\"M 197 105 L 207 105\" stroke=\"#CBD5E0\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n  <g transform=\"translate(210, 75)\">\n    <rect width=\"80\" height=\"60\" rx=\"8\" fill=\"#38A169\" opacity=\"0.15\" stroke=\"#38A169\" stroke-width=\"2\"/>\n    <text x=\"40.0\" y=\"24\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#38A169\">Polite</text>\n    <text x=\"40.0\" y=\"48\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2D3748\">です</text>\n  </g>\n  <!-- Example Sentence Box -->\n  <rect x=\"20\" y=\"155\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#FFFFFF\" stroke=\"#E2E8F0\"/>\n  <text x=\"35\" y=\"176\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#2D3748\">例: 映画はおもしろかったです。</text>\n  <text x=\"35\" y=\"194\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#718096\">(The movie was interesting.)</text>\n</svg>"
    },
    {
      "id": "g_adj_na",
      "title": "na-Adjective Conjugation",
      "formula": "[Noun/Na-Adj] + じゃない / でした / じゃありませんでした",
      "explanation": "Na-adjectives conjugate like nouns. Attach な only when placed directly before a modified noun.",
      "blocks": [
        {
          "role": "Topic",
          "text": "私の部屋は",
          "color": "#3182CE"
        },
        {
          "role": "Na-Adj",
          "text": "きれい",
          "color": "#DD6B20"
        },
        {
          "role": "Negative",
          "text": "じゃありません",
          "color": "#E53E3E"
        }
      ],
      "example_jp": "私の部屋はあまりきれいじゃありません。",
      "example_en": "My room is not very clean.",
      "mermaidDiagram": "flowchart LR\n  NaAdj[静か shizuka] -->|Predicate| Pred[静かです]\n  NaAdj -->|Negative| Neg[静かじゃありません]\n  NaAdj -->|Past| Past[静かでした]\n  NaAdj -->|Modifying Noun| Mod[静かな町 shizuka na machi]",
      "svgDiagram": "<svg viewBox=\"0 0 500 220\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#A0AEC0\"/>\n    </marker>\n  </defs>\n  <rect width=\"500\" height=\"220\" rx=\"12\" fill=\"#F7FAFC\" stroke=\"#E2E8F0\" stroke-width=\"2\"/>\n  <!-- Header -->\n  <rect x=\"0\" y=\"0\" width=\"500\" height=\"42\" rx=\"12\" fill=\"#EDF2F7\"/>\n  <text x=\"20\" y=\"26\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#2B6CB0\">📐 na-Adjective Conjugation</text>\n  <text x=\"480\" y=\"26\" font-family=\"sans-serif\" font-size=\"11\" text-anchor=\"end\" fill=\"#718096\">[Noun/Na-Adj] + じゃない / でした / じゃありませんでした</text>\n  <!-- Flow Blocks -->\n  <g transform=\"translate(20, 75)\">\n    <rect width=\"80\" height=\"60\" rx=\"8\" fill=\"#3182CE\" opacity=\"0.15\" stroke=\"#3182CE\" stroke-width=\"2\"/>\n    <text x=\"40.0\" y=\"24\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#3182CE\">Topic</text>\n    <text x=\"40.0\" y=\"48\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2D3748\">私の部屋は</text>\n  </g>\n  <path d=\"M 102 105 L 112 105\" stroke=\"#CBD5E0\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n  <g transform=\"translate(115, 75)\">\n    <rect width=\"80\" height=\"60\" rx=\"8\" fill=\"#DD6B20\" opacity=\"0.15\" stroke=\"#DD6B20\" stroke-width=\"2\"/>\n    <text x=\"40.0\" y=\"24\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#DD6B20\">Na-Adj</text>\n    <text x=\"40.0\" y=\"48\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2D3748\">きれい</text>\n  </g>\n  <path d=\"M 197 105 L 207 105\" stroke=\"#CBD5E0\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n  <g transform=\"translate(210, 75)\">\n    <rect width=\"80\" height=\"60\" rx=\"8\" fill=\"#E53E3E\" opacity=\"0.15\" stroke=\"#E53E3E\" stroke-width=\"2\"/>\n    <text x=\"40.0\" y=\"24\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#E53E3E\">Negative</text>\n    <text x=\"40.0\" y=\"48\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2D3748\">じゃありません</text>\n  </g>\n  <!-- Example Sentence Box -->\n  <rect x=\"20\" y=\"155\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#FFFFFF\" stroke=\"#E2E8F0\"/>\n  <text x=\"35\" y=\"176\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#2D3748\">例: 私の部屋はあまりきれいじゃありません。</text>\n  <text x=\"35\" y=\"194\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#718096\">(My room is not very clean.)</text>\n</svg>"
    },
    {
      "id": "g_exist",
      "title": "Existence: あります vs. います",
      "formula": "[Location] に [Subject] が あります (Inanimate) / います (Living)",
      "explanation": "あります is strictly for non-living objects and plants. います is for humans and living creatures that move autonomously.",
      "blocks": [
        {
          "role": "Location [に]",
          "text": "庭に",
          "color": "#805AD5"
        },
        {
          "role": "Living Subject [が]",
          "text": "猫が",
          "color": "#3182CE"
        },
        {
          "role": "Existence Verb",
          "text": "います",
          "color": "#38A169"
        }
      ],
      "example_jp": "庭に猫が三匹います。",
      "example_en": "There are three cats in the garden.",
      "mermaidDiagram": "flowchart TD\n  Subj[Subject ที่มี] --> Cond{Living or Inanimate?}\n  Cond -->|Living: Human / Animal| Imasu[います imasu]\n  Cond -->|Inanimate: Plant / Object| Arimasu[あります arimasu]",
      "svgDiagram": "<svg viewBox=\"0 0 500 220\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#A0AEC0\"/>\n    </marker>\n  </defs>\n  <rect width=\"500\" height=\"220\" rx=\"12\" fill=\"#F7FAFC\" stroke=\"#E2E8F0\" stroke-width=\"2\"/>\n  <!-- Header -->\n  <rect x=\"0\" y=\"0\" width=\"500\" height=\"42\" rx=\"12\" fill=\"#EDF2F7\"/>\n  <text x=\"20\" y=\"26\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#2B6CB0\">📐 Existence: あります vs. います</text>\n  <text x=\"480\" y=\"26\" font-family=\"sans-serif\" font-size=\"11\" text-anchor=\"end\" fill=\"#718096\">[Location] に [Subject] が あります (Inanimate) / います (Living)</text>\n  <!-- Flow Blocks -->\n  <g transform=\"translate(20, 75)\">\n    <rect width=\"80\" height=\"60\" rx=\"8\" fill=\"#805AD5\" opacity=\"0.15\" stroke=\"#805AD5\" stroke-width=\"2\"/>\n    <text x=\"40.0\" y=\"24\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#805AD5\">Location [に]</text>\n    <text x=\"40.0\" y=\"48\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2D3748\">庭に</text>\n  </g>\n  <path d=\"M 102 105 L 112 105\" stroke=\"#CBD5E0\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n  <g transform=\"translate(115, 75)\">\n    <rect width=\"80\" height=\"60\" rx=\"8\" fill=\"#3182CE\" opacity=\"0.15\" stroke=\"#3182CE\" stroke-width=\"2\"/>\n    <text x=\"40.0\" y=\"24\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#3182CE\">Living Subject [が]</text>\n    <text x=\"40.0\" y=\"48\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2D3748\">猫が</text>\n  </g>\n  <path d=\"M 197 105 L 207 105\" stroke=\"#CBD5E0\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n  <g transform=\"translate(210, 75)\">\n    <rect width=\"80\" height=\"60\" rx=\"8\" fill=\"#38A169\" opacity=\"0.15\" stroke=\"#38A169\" stroke-width=\"2\"/>\n    <text x=\"40.0\" y=\"24\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#38A169\">Existence Verb</text>\n    <text x=\"40.0\" y=\"48\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2D3748\">います</text>\n  </g>\n  <!-- Example Sentence Box -->\n  <rect x=\"20\" y=\"155\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#FFFFFF\" stroke=\"#E2E8F0\"/>\n  <text x=\"35\" y=\"176\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#2D3748\">例: 庭に猫が三匹います。</text>\n  <text x=\"35\" y=\"194\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#718096\">(There are three cats in the garden.)</text>\n</svg>"
    },
    {
      "id": "g_te_form",
      "title": "Te-Form: Sequential Actions & Polite Requests",
      "formula": "Verb-て + ください (Please) / Verb1-て + Verb2 (Sequence)",
      "explanation": "The te-form connects verbs in sequence or softens instructions into polite requests.",
      "blocks": [
        {
          "role": "Location [で]",
          "text": "ここで",
          "color": "#805AD5"
        },
        {
          "role": "Object [を]",
          "text": "名前を",
          "color": "#3182CE"
        },
        {
          "role": "Polite Request",
          "text": "書いてください",
          "color": "#D69E2E"
        }
      ],
      "example_jp": "ここに名前と住所を書いてください。",
      "example_en": "Please write your name and address here.",
      "mermaidDiagram": "flowchart LR\n  Action1[朝起きて Woke up] --> Action2[シャワーを浴びて Showered] --> Action3[ご飯を食べた Ate breakfast]",
      "svgDiagram": "<svg viewBox=\"0 0 500 220\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#A0AEC0\"/>\n    </marker>\n  </defs>\n  <rect width=\"500\" height=\"220\" rx=\"12\" fill=\"#F7FAFC\" stroke=\"#E2E8F0\" stroke-width=\"2\"/>\n  <!-- Header -->\n  <rect x=\"0\" y=\"0\" width=\"500\" height=\"42\" rx=\"12\" fill=\"#EDF2F7\"/>\n  <text x=\"20\" y=\"26\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#2B6CB0\">📐 Te-Form: Sequential Actions & Polite Requests</text>\n  <text x=\"480\" y=\"26\" font-family=\"sans-serif\" font-size=\"11\" text-anchor=\"end\" fill=\"#718096\">Verb-て + ください (Please) / Verb1-て + Verb2 (Sequence)</text>\n  <!-- Flow Blocks -->\n  <g transform=\"translate(20, 75)\">\n    <rect width=\"80\" height=\"60\" rx=\"8\" fill=\"#805AD5\" opacity=\"0.15\" stroke=\"#805AD5\" stroke-width=\"2\"/>\n    <text x=\"40.0\" y=\"24\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#805AD5\">Location [で]</text>\n    <text x=\"40.0\" y=\"48\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2D3748\">ここで</text>\n  </g>\n  <path d=\"M 102 105 L 112 105\" stroke=\"#CBD5E0\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n  <g transform=\"translate(115, 75)\">\n    <rect width=\"80\" height=\"60\" rx=\"8\" fill=\"#3182CE\" opacity=\"0.15\" stroke=\"#3182CE\" stroke-width=\"2\"/>\n    <text x=\"40.0\" y=\"24\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#3182CE\">Object [を]</text>\n    <text x=\"40.0\" y=\"48\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2D3748\">名前を</text>\n  </g>\n  <path d=\"M 197 105 L 207 105\" stroke=\"#CBD5E0\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n  <g transform=\"translate(210, 75)\">\n    <rect width=\"80\" height=\"60\" rx=\"8\" fill=\"#D69E2E\" opacity=\"0.15\" stroke=\"#D69E2E\" stroke-width=\"2\"/>\n    <text x=\"40.0\" y=\"24\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#D69E2E\">Polite Request</text>\n    <text x=\"40.0\" y=\"48\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2D3748\">書いてください</text>\n  </g>\n  <!-- Example Sentence Box -->\n  <rect x=\"20\" y=\"155\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#FFFFFF\" stroke=\"#E2E8F0\"/>\n  <text x=\"35\" y=\"176\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#2D3748\">例: ここに名前と住所を書いてください。</text>\n  <text x=\"35\" y=\"194\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#718096\">(Please write your name and address here.)</text>\n</svg>"
    },
    {
      "id": "g_compare",
      "title": "Comparisons: 〜より & 〜のほうが",
      "formula": "[Noun A] は [Noun B] より [Adjective] です",
      "explanation": "Expresses that A has a higher degree of an adjective than B ('A is more [Adj] than B').",
      "blocks": [
        {
          "role": "Topic [A]",
          "text": "飛行機は",
          "color": "#3182CE"
        },
        {
          "role": "Comparison [Bより]",
          "text": "新幹線より",
          "color": "#DD6B20"
        },
        {
          "role": "Adjective",
          "text": "速いです",
          "color": "#38A169"
        }
      ],
      "example_jp": "飛行機は新幹線より速いです。",
      "example_en": "Airplanes are faster than bullet trains.",
      "mermaidDiagram": "flowchart LR\n  A[飛行機 Airplane] -->|は| Comp[新幹線より than bullet train] --> Result[速いです faster!]",
      "svgDiagram": "<svg viewBox=\"0 0 500 220\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1 L 10 5 L 0 9 z\" fill=\"#A0AEC0\"/>\n    </marker>\n  </defs>\n  <rect width=\"500\" height=\"220\" rx=\"12\" fill=\"#F7FAFC\" stroke=\"#E2E8F0\" stroke-width=\"2\"/>\n  <!-- Header -->\n  <rect x=\"0\" y=\"0\" width=\"500\" height=\"42\" rx=\"12\" fill=\"#EDF2F7\"/>\n  <text x=\"20\" y=\"26\" font-family=\"system-ui, sans-serif\" font-size=\"14\" font-weight=\"bold\" fill=\"#2B6CB0\">📐 Comparisons: 〜より & 〜のほうが</text>\n  <text x=\"480\" y=\"26\" font-family=\"sans-serif\" font-size=\"11\" text-anchor=\"end\" fill=\"#718096\">[Noun A] は [Noun B] より [Adjective] です</text>\n  <!-- Flow Blocks -->\n  <g transform=\"translate(20, 75)\">\n    <rect width=\"80\" height=\"60\" rx=\"8\" fill=\"#3182CE\" opacity=\"0.15\" stroke=\"#3182CE\" stroke-width=\"2\"/>\n    <text x=\"40.0\" y=\"24\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#3182CE\">Topic [A]</text>\n    <text x=\"40.0\" y=\"48\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2D3748\">飛行機は</text>\n  </g>\n  <path d=\"M 102 105 L 112 105\" stroke=\"#CBD5E0\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n  <g transform=\"translate(115, 75)\">\n    <rect width=\"80\" height=\"60\" rx=\"8\" fill=\"#DD6B20\" opacity=\"0.15\" stroke=\"#DD6B20\" stroke-width=\"2\"/>\n    <text x=\"40.0\" y=\"24\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#DD6B20\">Comparison [Bより]</text>\n    <text x=\"40.0\" y=\"48\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2D3748\">新幹線より</text>\n  </g>\n  <path d=\"M 197 105 L 207 105\" stroke=\"#CBD5E0\" stroke-width=\"2.5\" marker-end=\"url(#arrow)\"/>\n  <g transform=\"translate(210, 75)\">\n    <rect width=\"80\" height=\"60\" rx=\"8\" fill=\"#38A169\" opacity=\"0.15\" stroke=\"#38A169\" stroke-width=\"2\"/>\n    <text x=\"40.0\" y=\"24\" font-family=\"sans-serif\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#38A169\">Adjective</text>\n    <text x=\"40.0\" y=\"48\" font-family=\"sans-serif\" font-size=\"14\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#2D3748\">速いです</text>\n  </g>\n  <!-- Example Sentence Box -->\n  <rect x=\"20\" y=\"155\" width=\"460\" height=\"50\" rx=\"8\" fill=\"#FFFFFF\" stroke=\"#E2E8F0\"/>\n  <text x=\"35\" y=\"176\" font-family=\"sans-serif\" font-size=\"13\" font-weight=\"bold\" fill=\"#2D3748\">例: 飛行機は新幹線より速いです。</text>\n  <text x=\"35\" y=\"194\" font-family=\"sans-serif\" font-size=\"11\" fill=\"#718096\">(Airplanes are faster than bullet trains.)</text>\n</svg>"
    }
  ],
  "rules": [
    {
      "id": "rule_pictogram",
      "title": "Pictographic Origins (象形文字)",
      "explanation": "Kanji derived directly from primitive sketches of visible real-world objects.",
      "examples": [
        {
          "char": "日",
          "origin": "Sun with sunspot",
          "meaning": "Sun / Day"
        },
        {
          "char": "月",
          "origin": "Crescent moon",
          "meaning": "Moon / Month"
        },
        {
          "char": "木",
          "origin": "Tree trunk with roots and branches",
          "meaning": "Tree / Wood"
        },
        {
          "char": "山",
          "origin": "Three jagged mountain peaks",
          "meaning": "Mountain"
        },
        {
          "char": "川",
          "origin": "Three streams of water coursing in parallel",
          "meaning": "River"
        }
      ],
      "mermaidDiagram": "graph LR\n  Nature[Concrete Object in Nature] --> Sketch[Primitive Line Sketch] --> Modern[Modern Kanji Character]"
    },
    {
      "id": "rule_stroke_principles",
      "title": "Universal Stroke Order Principles (筆順の基本規則)",
      "explanation": "8 standard rules governing how Kanji are naturally stroked with balance and efficiency.",
      "rules": [
        {
          "name": "Top to Bottom",
          "desc": "Strokes flow downwards.",
          "examples": "三, 言, 京"
        },
        {
          "name": "Left to Right",
          "desc": "Left radical is written before right component.",
          "examples": "川, 行, 休, 語"
        },
        {
          "name": "Horizontal Before Vertical",
          "desc": "Crossed strokes: draw horizontal bar first.",
          "examples": "十, 土, 木"
        },
        {
          "name": "Center Before Symmetrical Sides",
          "desc": "In balanced kanji, anchor center vertical first.",
          "examples": "小, 水, 山"
        },
        {
          "name": "Enclosure Outside First",
          "desc": "Draw outer bounding walls before interior contents.",
          "examples": "国, 四, 回"
        },
        {
          "name": "Close Enclosure Last",
          "desc": "Bottom sealing line is written only after all inner strokes are done.",
          "examples": "日, 田, 目, 国"
        },
        {
          "name": "Piercing Strokes Last",
          "desc": "A vertical stroke that skewered completely through is drawn last.",
          "examples": "中, 車, 半"
        },
        {
          "name": "Minor Dot Accents Last",
          "desc": "Tiny dots or accent marks finish the character.",
          "examples": "犬, 玉, 太"
        }
      ],
      "mermaidDiagram": "flowchart TD\n  Start[Kanji Character] --> Check{Has Enclosure?}\n  Check -->|Yes| Enc[Outer Box ➔ Inside Strokes ➔ Bottom Closing Line]\n  Check -->|No| Flow[Top to Bottom ➔ Left to Right ➔ Center First if Symmetrical]"
    }
  ]
};
