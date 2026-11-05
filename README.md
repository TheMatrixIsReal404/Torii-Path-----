# 鳥居の道 • Torii Path (JLPT N5 – N1)

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![JLPT](https://img.shields.io/badge/JLPT-N5_to_N1-blueviolet?style=for-the-badge)
![Dependencies](https://img.shields.io/badge/Dependencies-0_Zero_Runtime-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

<p align="center">
  An interactive, highly engaging, responsive Japanese language learning web application designed to guide learners from absolute beginner (<strong>JLPT N5</strong>) through native-adjacent fluency (<strong>JLPT N1</strong>). Built with pure semantic HTML5, modern CSS3 custom properties, and vanilla modern ES6+ JavaScript with <strong>zero third-party runtime dependencies</strong>.
</p>

</div>

---

## 📑 Table of Contents

- [🌟 Core Architectural Philosophy](#-core-architectural-philosophy)
- [📁 Project Architecture & Clean Directory Structure](#-project-architecture--clean-directory-structure)
- [🔰 Absolute Beginner (Zero to Hero) Track](#-absolute-beginner-zero-to-hero-track)
- [🗣️ Easy English "Sounds-Like" Pronunciation Guide](#️-easy-english-sounds-like-pronunciation-guide)
- [📖 Foundational JLPT N5 Masterclass](#-foundational-jlpt-n5-masterclass)
- [🏛️ Complete JLPT Curriculum Hubs (N5 – N1)](#️-complete-jlpt-curriculum-hubs-n5--n1)
- [🖌️ Interactive Stroke-Order Canvas Tracer](#️-interactive-stroke-order-canvas-tracer)
- [🎮 Gamified Practice Studio & Arcade Suites](#-gamified-practice-studio--arcade-suites)
- [🧠 Spaced Repetition System (SRS) & Persistence Engine](#-spaced-repetition-system-srs--persistence-engine)
- [🚀 Quick Start & Deployment Guide](#-quick-start--deployment-guide)
- [📄 License](#-license)

---

## 🌟 Core Architectural Philosophy

1. **Zero Third-Party Dependencies:**
   * Standalone execution in any modern web browser without requiring `npm install`, Node runtimes, bundlers (Vite/Webpack), or external CDNs.
   * Runs directly from the local file system (`file:///`) or static hosting (GitHub Pages, Netlify, Vercel).
2. **Tactile & Non-Punitive Learning:**
   * **No Hearts or Lives Lockouts:** Unlike gamified apps that penalize mistakes with heart countdowns and lockout timers, this platform treats errors as essential learning milestones.
   * **Intelligent Error Re-Queuing:** Missed questions are cycled back into the practice queue until genuine conceptual mastery is achieved.
3. **Beginner-Friendly Scaffolding:**
   * Scaffolding for novices: Universal Romaji subtitles toggle, Furigana controller, emergency rescue cheat sheets, confusable lookalike spotters, turtle slow audio (0.65x), and English sounds-like phonetic guides.
4. **Dual Web Audio & Speech Engine:**
   * Native Japanese speech synthesis via the Web Speech API (`window.speechSynthesis`).
   * Web Audio API tone synthesis (`AudioContext`) rendering musical pitch accent contours (High-Low and Low-High melodies).

---

## 📁 Project Architecture & Clean Directory Structure

```
Japanese_Learning/
├── index.html                     # Main application entry point (single-page dashboard)
├── package.json                   # Project metadata, CLI scripts, and repository manifest
├── LICENSE                        # Open-source MIT license
├── README.md                      # Master architectural and curriculum documentation
├── .gitignore                     # Git exclusions for binary files, caches, and OS metadata
│
├── css/                           # Modular CSS Architecture
│   ├── styles.css                 # Design tokens, color palettes, dark/light themes, typography
│   ├── components.css             # Navigation, hubs, cards, soundboard, cheat drawer, dialogue UI
│   └── games.css                  # Stroke canvas tracer, word tiles, matcher, particle slinger
│
└── js/                            # Core Application Modules (ES6+ Vanilla)
    ├── app.js                     # Main controller: routing, views, phonetic engine, event bus
    ├── audio.js                   # Speech synthesis hooks, turtle slow speed (0.65x), pitch contour synth
    ├── canvas-tracer.js           # Vector stroke tracer, Bezier ink smoothing, Genkouyoushi grid
    ├── quest-runner.js            # Hands-on practice runner: 3D word tiles, sliding drawer, re-queuing
    ├── quiz.js                    # Multi-modal quiz engine (multiple-choice, audio, sentence unscramble)
    ├── srs.js                     # 5-box Leitner Spaced Repetition System algorithm and queue manager
    ├── state.js                   # State serialization: XP, streaks, levels, and localStorage backup
    ├── mascot.js                  # SVG mascot rendering (Mochi) and linguistic insights
    ├── shop.js                    # Mastery badge showroom
    │
    ├── data/                      # Self-Contained Curricula & Linguistic Datasets
    │   ├── zeroBeginnerData.js    # Kana, vowels, pitch accent, 84 words, 21 survival phrases, dialogues
    │   ├── bookCurriculumData.js  # Foundational data: 4 origins, 8 stroke rules, 89 kanji, 310 compounds
    │   ├── kanaData.js            # Complete Hiragana & Katakana stroke vectors and mnemonics
    │   ├── n5Data.js              # JLPT N5 vocabulary, Kanji, grammar formulas, and reading passages
    │   ├── n4Data.js              # JLPT N4 intermediate grammar (tara/ba, ageru/kureru) and vocabulary
    │   ├── n3Data.js              # JLPT N3 bridge nuances (wake, youni, tame ni) and reading texts
    │   ├── n2Data.js              # JLPT N2 business idioms, pre-advanced connectors, and reading drills
    │   ├── n1Data.js              # JLPT N1 native-adjacent Keigo, classical grammar, and philosophy
    │   ├── questPathData.js       # Structured learning units, Torii checkpoints, question banks
    │   ├── n5VisualData.js        # Calligraphic stroke coordinates and guide vector paths
    │   └── n5_visual_data.json    # JSON representation of visual stroke datasets
    │
    └── games/                     # Interactive Arcade Engines
        ├── matcher.js             # 3D flip card memory matching game
        ├── particle-slinger.js    # Fast-paced particle blank target game with streak combos
        └── speed-blitz.js         # 60-second rapid-fire vocabulary blitz
```

---

## 🔰 Absolute Beginner (Zero to Hero) Track

Specifically tailored for newcomers with zero prior knowledge of Japanese:

1. **The 3 Scripts Demystified:** Visual explanations of Hiragana, Katakana, and Kanji (when, why, and how each is used).
2. **Master Alphabet Soundboard:**
   * 46 Seion (Basic Hiragana & Katakana).
   * 20 Dakuon (`が`, `ざ`, `だ`, `ば`) & 5 Handakuon (`ぱ`, `ぴ`, `ぷ`, `ぺ`, `ぽ`).
   * 36 Youon combinations (`きゃ`, `しゃ`, `ちゃ`, `にゃ`, `ひゃ`, `みゃ`, `りゃ`, `ぎゃ`, `じゃ`, `びゃ`, `ぴゃ`).
   * Direct **"Trace"** buttons launching any character into the Stroke-Order Canvas Tracer.
3. **Interactive Pitch Accent Studio:**
   * Minimal pair auditory comparisons (e.g., 雨 [rain] vs 飴 [candy], 箸 [chopsticks] vs 橋 [bridge]).
   * Web Audio tone synthesis playing High-Low and Low-High pitch contour melodies.
4. **84+ Foundation Vocabulary Words:** Categorized into Greetings, Numbers 1–100, Food & Dining, People & Family, Everyday Objects, Places, Adjectives, and Verbs.
   * **Clickable Mora Syllable Chips:** Tap `[お]` `[は]` `[よ]` `[う]` to hear isolated letter pronunciations.
   * **"Spell Out" Button:** Audibly spells out words character-by-character.
5. **Universal Romaji Subtitles Toggle (`Romaji: Always Show / Hover Only / Hide`):**
   * *Always Show:* Subtitles appear under every word and sentence.
   * *Hover Only:* Subtitles reveal only on hover or tap (ideal for testing recall).
   * *Hide (Kana Only):* Full immersion for confident learners.
6. **🆘 Emergency Quick Rescue Cheat Sheet Slide-Over Drawer:**
   * Floating button accessible across all views.
   * Contains the 5 Foundation Vowels, 5 Emergency Magic Words, Essential Particles at a Glance (`は`, `を`, `で`, `に`, `か`), and Numbers 1 to 10 with clickable audio.
7. **👀 Confusable Twins Lab (The Lookalike Spotter):**
   * Dismantles tricky traps: `さ vs き`, `わ vs れ vs ね`, `は vs ほ`, `る vs ろ`, `シ vs ツ`, `ソ vs ン`.
   * Features stroke counts, visual features, mnemonics, audio, and an interactive **Spot the Difference Test**.
8. **🧩 Interactive Sentence Blueprint Workshop ("Slot Machine Architecture"):**
   * 4-column tactile sentence assembler: Who (`誰が`) + Where (`どこで`) + What (`何を`) + Action (`どうする`).
   * Real-time sentence synthesis in Japanese, Romaji, English, and literal syntax breakdown.
   * Instant Normal and Turtle 0.65x slow audio playback, plus a randomizer (`🎲 Surprise Me`).
9. **🎭 Real-Life Dialogue Simulator ("Roleplay Cafe / Konbini"):**
   * 4 Branching Scenarios: Convenience Store (7-Eleven / Konbini), Ramen Shop Ordering, Street Directions, and Natural Self-Introductions.
   * Instant feedback distinguishing polite, natural responses from overly casual or inappropriate ones.
10. **🚨 1-Click Survival Japanese Kit Soundboard:**
    * 21+ Essential categorized phrases for dining, travel, shopping, and emergencies with native and turtle audio playback.

---

## 🗣️ Easy English "Sounds-Like" Pronunciation Guide

To ensure zero intimidation, every word, phrase, and dialogue across the platform includes an intuitive **English Sounds-Like Guide**:

| Word / Phrase | Hepburn Romaji | 🗣️ Easy English Sounds-Like | English Meaning |
| :--- | :--- | :--- | :--- |
| **おはようございます** | `ohayou gozaimasu` | **`oh-HAH-yoh goh-ZYE-mahs`** | Good morning (polite) |
| **こんにちは** | `konnichiwa` | **`kohn-nee-chee-WAH`** | Hello / Good afternoon |
| **ありがとうございます** | `arigatou gozaimasu` | **`ah-ree-GAH-toh goh-ZYE-mahs`** | Thank you very much |
| **すみません** | `sumimasen` | **`soo-mee-mah-SEN`** | Excuse me / Sorry / Thanks |
| **お願いします** | `onegaishimasu` | **`oh-neh-guy-shee-MAHS`** | Please (when requesting) |
| **大丈夫です** | `daijoubu desu` | **`dye-JOH-boo dess`** | I am fine / No thank you |
| **いただきます** | `itadakimasu` | **`ee-tah-dah-kee-MAHS`** | Said before dining |
| **ごちそうさまでした** | `gochisousama deshita` | **`goh-chee-soh-SAH-mah DESH-tah`** | Said after dining |
| **水** | `mizu` | **`MEE-zoo`** | Water |
| **駅はどこですか？** | `eki wa doko desu ka?` | **`EH-kee wah DOH-koh dess kah?`** | Where is the station? |
| **お会計をお願いします** | `okaikei o onegaishimasu`| **`oh-KYE-kay oh oh-neh-guy-shee-MAHS`** | Check / Bill, please |

* **Built-in Phonetic Engine (`NihongoApp.toEnglishPhonetics`):** Automatically converts arbitrary Kana, Katakana, or particle combinations into natural English phonetic sounds.

---

## 📖 Foundational JLPT N5 Masterclass

A foundational N5 curriculum built for complete beginners:

* **🏛️ 4 Structural Origins of Kanji:**
  * **Pictograms (象形文字):** Visual evolution of natural drawings into modern characters (日, 月, 木, 山, 川, 火, 雨).
  * **Simple Ideograms (指事文字):** Abstract concepts over reference horizon lines (一, 二, 三, 上, 下, 中).
  * **Compound Ideograms (会意文字):** Combining pictures to tell a story (休 = Person resting at a Tree; 明 = Sun + Moon).
  * **Semantic-Phonetic (形声文字):** Radical meaning + sound element (70% of all Kanji).
* **✍️ 8 Golden Universal Rules of Stroke Order:**
  * Top-to-Bottom, Left-to-Right, Horizontal before Vertical, Center before Outside, Outer Box First, Close Box Last, Piercing Line Last, Minor Dot Last.
* **🎨 89 Mnemonic Kanji Gallery:**
  * Spans 6 beginner lessons: Numbers, Calendar, People, Actions, Directions, Adjectives.
  * Includes illustrated mnemonic story boxes, On/Kun readings, high-frequency compounds, and direct Canvas Tracer links.
* **💬 Core N5 Grammar Masterclass:**
  * 14 Essential Grammar Blueprints (Adjective conjugations, あります vs います, Desires 〜たい, Polite requests 〜てください, Comparisons).
  * **Interactive Existence Sandbox (`あります` vs `います`):** Practice sorting living beings vs non-living objects with immediate feedback.
* **🗂️ 310+ Foundational Vocabulary Vault:** Searchable vocabulary directory with flashcards, native audio, and English phonetic respelling.

---

## 🏛️ Complete JLPT Curriculum Hubs (N5 – N1)

Dedicated hubs with filterable Kanji vaults, vocabulary directories, grammar formulas, and bilingual reading passages:

* **JLPT N5 (Beginner):** 100 essential Kanji, 800 core vocabulary words, particles (`は`, `が`, `を`, `に`, `で`), Polite *Masu* form, *Te* form intro.
* **JLPT N4 (Upper Beginner):** 300 Kanji, 1,500 vocabulary words, Potential, Conditional (*-tara*, *-ba*), Passive forms, Giving/Receiving verbs (*ageru*, *kureru*, *morau*).
* **JLPT N3 (Intermediate - The Bridge):** 650 Kanji, 3,750 vocabulary words, Nuance distinctions (わけ, ように, ために, はず), Transitive vs. Intransitive verb pairs, indirect expressions.
* **JLPT N2 (Pre-Advanced):** 1,000 Kanji, 6,000 vocabulary words, Business idioms, formal discourse connectors, timed reading comprehension passages.
* **JLPT N1 (Advanced / Native-Adjacent):** 2,000+ Kanji, 10,000 vocabulary words, Classical Japanese particles, nuanced Keigo (*Sonkeigo*, *Kenjougo*, *Teineigo*), abstract literary texts.

---

## 🖌️ Interactive Stroke-Order Canvas Tracer

* **Vector Path Tracing:** Trace Hiragana, Katakana, and JLPT Kanji with mouse, stylus, or touch.
* **Genkouyoushi Calligraphy Grid:** Authentic Japanese manuscript grid (田-style dashed crosshairs and outer border).
* **Animated Stroke Guidance:** Real-time calligraphy ink animation demonstrating exact stroke sequence and brush directions.
* **Algorithmic Accuracy Feedback:** Evaluates stroke proximity (start/end tolerances), directional cosine similarity, and stroke sequence.
* **Calligraphic Ink Smoothing:** Quadratic Bezier curve interpolation with variable ink width.

---

## 🎮 Gamified Practice Studio & Arcade Suites

* **🌸 Hands-on Practice Session Runner:**
  * **Tactile 3D Word-Bubble Assembling:** Drag-free, mobile-friendly tap-to-assemble sentence tiles.
  * **Interactive Pair Matching Cards:** Rapid-fire kana-to-romaji or kanji-to-meaning pairing.
  * **Particle Blank Completion:** Fill-in blanks for essential sentence particles.
  * **Sliding Bottom Feedback Drawer:** Clear linguistic breakdowns explaining nuance.
  * **Intelligent Error Re-queuing:** Missed questions return to the session queue for 100% genuine mastery.
* **🎯 Particle Slinger:** Launch particle projectiles (`は`, `が`, `を`, `に`, `で`, `へ`, `と`, `も`, `から`, `より`) into blanks before time expires.
* **🎴 Kana & Kanji Matcher:** Memory pairing card game with 3D flip animation.
* **⚡ Speed Vocabulary Blitz:** 60-second rapid-fire vocabulary drill with combo multipliers.

---

## 🧠 Spaced Repetition System (SRS) & Persistence Engine

* **5-Box Leitner Algorithm (`srs.js`):**
  * Box 1: Daily reviews
  * Box 2: Every 2 days
  * Box 3: Every 4 days
  * Box 4: Every 7 days
  * Box 5: Mastered (Every 14 days)
* **Local State Serialization (`state.js`):**
  * Automatic synchronization with browser `localStorage`.
  * Preserves user level, active module progress, daily streaks, unlocked badges, and Kanji mastery percentages.
  * **Data Backup & Restore Modal:** 1-click JSON state export and import to migrate study data between devices.

---

## 🚀 Quick Start & Deployment Guide

Since this application has **zero third-party dependencies**, getting started takes seconds:

### Local Execution
1. Clone or download the repository:
   ```bash
   git clone https://github.com/example/nihongo-master.git
   cd nihongo-master
   ```
2. Open `index.html` directly in your browser:
   * Double-click `index.html` in File Explorer, or
   * Run a simple local web server:
     ```bash
     python -m http.server 8080
     ```
   * Navigate to `http://localhost:8080`.

### Production Deployment
Deploy `index.html`, `css/`, and `js/` to any static web host:
* **GitHub Pages:** Push to `main` and enable Pages in repository settings.
* **Netlify / Vercel:** Drag-and-drop the project folder or link your repository. No build command required; publish directory is root (`./`).

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free for personal, educational, and commercial use.
