/**
 * Mascot Module: Mochi the Tanuki (タヌキのモチ)
 * An adorable, authentic Japanese Tanuki mascot that reacts dynamically
 * to learning events (jumping for joy, cheering, encouraging on mistakes, thinking).
 * Pure SVG vector graphics with zero third-party dependencies!
 */

window.NihongoMascot = (function() {

  // Outfit visual elements (headbands, hats, accessories)
  function getOutfitSvg(outfit) {
    switch (outfit) {
      case 'mochi_ninja':
        return `
          <!-- Ninja Forehead Protector & Mask -->
          <path d="M 32 44 Q 50 40 68 44 Q 68 52 50 54 Q 32 52 32 44 Z" fill="#1E293B" stroke="#0F172A" stroke-width="1.5"/>
          <rect x="44" y="44" width="12" height="7" rx="1.5" fill="#94A3B8" stroke="#475569" stroke-width="0.8"/>
          <circle cx="50" cy="47.5" r="1.5" fill="#E2E8F0"/>
          <!-- Red Ninja Scarf -->
          <path d="M 36 68 Q 50 72 64 68 Q 66 75 50 77 Q 34 75 36 68 Z" fill="#DC2626"/>
          <path d="M 62 70 Q 75 75 78 85 Q 72 87 64 74 Z" fill="#EF4444"/>
        `;
      case 'mochi_samurai':
        return `
          <!-- Samurai Crest Kabuto Headband -->
          <path d="M 30 42 Q 50 36 70 42 Q 68 50 50 52 Q 32 50 30 42 Z" fill="#B91C1C" stroke="#7F1D1D" stroke-width="1.5"/>
          <!-- Gold Crescent Horns (Maedate) -->
          <path d="M 50 42 Q 40 22 30 20 Q 34 26 46 36 Q 50 40 50 42 Z" fill="#F59E0B" stroke="#B45309" stroke-width="0.8"/>
          <path d="M 50 42 Q 60 22 70 20 Q 66 26 54 36 Q 50 40 50 42 Z" fill="#F59E0B" stroke="#B45309" stroke-width="0.8"/>
          <circle cx="50" cy="43" r="3" fill="#FBBF24" stroke="#92400E" stroke-width="0.8"/>
        `;
      case 'mochi_sensei':
        return `
          <!-- Scholar Round Glasses -->
          <circle cx="43" cy="53" r="6" fill="none" stroke="#D97706" stroke-width="1.5"/>
          <circle cx="57" cy="53" r="6" fill="none" stroke="#D97706" stroke-width="1.5"/>
          <line x1="49" y1="53" x2="51" y2="53" stroke="#D97706" stroke-width="1.5"/>
          <!-- Little Scholar Mustache -->
          <path d="M 46 63 Q 48 64 50 63 Q 52 64 54 63" fill="none" stroke="#475569" stroke-width="1" stroke-linecap="round"/>
        `;
      case 'mochi_kimono':
        return `
          <!-- Cherry Blossom Sakura Hairpin -->
          <g transform="translate(62, 36) scale(0.7)">
            <circle cx="0" cy="-5" r="3.5" fill="#F472B6"/>
            <circle cx="4.8" cy="-1.5" r="3.5" fill="#F472B6"/>
            <circle cx="3" cy="4" r="3.5" fill="#F472B6"/>
            <circle cx="-3" cy="4" r="3.5" fill="#F472B6"/>
            <circle cx="-4.8" cy="-1.5" r="3.5" fill="#F472B6"/>
            <circle cx="0" cy="0" r="2" fill="#FDE047"/>
          </g>
          <!-- Pink Kimono Collar -->
          <path d="M 38 68 L 50 78 L 62 68" fill="none" stroke="#EC4899" stroke-width="2.5" stroke-linecap="round"/>
        `;
      case 'mochi_novice':
      default:
        return `
          <!-- Novice Blue Student Headband (Hachimaki) -->
          <path d="M 30 44 Q 50 38 70 44 Q 68 50 50 51 Q 32 50 30 44 Z" fill="#2563EB" stroke="#1D4ED8" stroke-width="1"/>
          <!-- Red Sun Symbol in Center -->
          <circle cx="50" cy="44.5" r="2.5" fill="#DC2626"/>
        `;
    }
  }

  // Generate responsive SVG for Mochi
  function renderSvg(mood = 'happy', outfit = 'mochi_novice', size = 120) {
    let eyesSvg = '';
    let mouthSvg = '';
    let pawsSvg = '';
    let extraEffectSvg = '';

    switch (mood) {
      case 'cheering':
        // Big happy closed curved eyes ^ ^, open mouth, jumping paws up
        eyesSvg = `
          <path d="M 40 51 Q 44 47 48 51" fill="none" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
          <path d="M 52 51 Q 56 47 60 51" fill="none" stroke="#1E293B" stroke-width="2.5" stroke-linecap="round"/>
        `;
        mouthSvg = `
          <path d="M 46 60 Q 50 67 54 60 Z" fill="#E11D48"/>
          <!-- Cute tongue -->
          <path d="M 48 62 Q 50 65 52 62" fill="#FDA4AF"/>
        `;
        pawsSvg = `
          <!-- Paws held high in celebration -->
          <ellipse cx="28" cy="46" rx="5" ry="6" fill="#78350F" transform="rotate(-25 28 46)"/>
          <ellipse cx="72" cy="46" rx="5" ry="6" fill="#78350F" transform="rotate(25 72 46)"/>
        `;
        extraEffectSvg = `
          <!-- Sparkles & Confetti around Mochi -->
          <text x="18" y="32" font-size="12">✨</text>
          <text x="74" y="30" font-size="12">🌸</text>
          <text x="82" y="55" font-size="10">⭐</text>
        `;
        break;

      case 'encouraging':
        // Friendly smile, tiny sweatdrop, one paw waving
        eyesSvg = `
          <circle cx="44" cy="51" r="3.5" fill="#1E293B"/>
          <circle cx="56" cy="51" r="3.5" fill="#1E293B"/>
          <circle cx="45" cy="49.5" r="1.2" fill="#FFFFFF"/>
          <circle cx="57" cy="49.5" r="1.2" fill="#FFFFFF"/>
        `;
        mouthSvg = `
          <path d="M 47 60 Q 50 64 53 60" fill="none" stroke="#1E293B" stroke-width="2" stroke-linecap="round"/>
        `;
        pawsSvg = `
          <!-- One paw waving reassuringly -->
          <ellipse cx="32" cy="65" rx="5" ry="5.5" fill="#78350F"/>
          <ellipse cx="68" cy="56" rx="5" ry="5.5" fill="#78350F" transform="rotate(20 68 56)"/>
        `;
        extraEffectSvg = `
          <!-- Blue cartoon sweatdrop of effort -->
          <path d="M 68 40 C 68 37, 72 34, 72 34 C 72 34, 76 37, 76 40 C 76 42.5, 74 44, 72 44 C 70 44, 68 42.5, 68 40 Z" fill="#38BDF8"/>
        `;
        break;

      case 'thinking':
        // Curious eyes looking up, paw to chin
        eyesSvg = `
          <circle cx="44" cy="48.5" r="3.5" fill="#1E293B"/>
          <circle cx="56" cy="48.5" r="3.5" fill="#1E293B"/>
          <circle cx="44.5" cy="47" r="1.2" fill="#FFFFFF"/>
          <circle cx="56.5" cy="47" r="1.2" fill="#FFFFFF"/>
        `;
        mouthSvg = `
          <ellipse cx="50" cy="60.5" rx="2" ry="2.5" fill="#1E293B"/>
        `;
        pawsSvg = `
          <ellipse cx="34" cy="65" rx="5" ry="5.5" fill="#78350F"/>
          <ellipse cx="53" cy="63" rx="4.5" ry="5" fill="#78350F"/>
        `;
        extraEffectSvg = `
          <text x="68" y="32" font-size="14" font-weight="bold" fill="#3B82F6">?</text>
        `;
        break;

      case 'happy':
      default:
        // Cheerful sparkly eyes, happy smile, cute paws resting on belly
        eyesSvg = `
          <circle cx="44" cy="51" r="3.8" fill="#1E293B"/>
          <circle cx="56" cy="51" r="3.8" fill="#1E293B"/>
          <circle cx="45" cy="49.5" r="1.4" fill="#FFFFFF"/>
          <circle cx="57" cy="49.5" r="1.4" fill="#FFFFFF"/>
          <circle cx="43" cy="52" r="0.8" fill="#FFFFFF"/>
          <circle cx="55" cy="52" r="0.8" fill="#FFFFFF"/>
        `;
        mouthSvg = `
          <path d="M 46.5 59 Q 50 63.5 53.5 59" fill="none" stroke="#1E293B" stroke-width="2" stroke-linecap="round"/>
        `;
        pawsSvg = `
          <ellipse cx="35" cy="65" rx="5" ry="5.5" fill="#78350F"/>
          <ellipse cx="65" cy="65" rx="5" ry="5.5" fill="#78350F"/>
        `;
        break;
    }

    return `
      <svg class="mochi-mascot-svg mochi-mood-${mood}" viewBox="0 0 100 100" width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="mochi-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="2" flood-opacity="0.15"/>
          </filter>
        </defs>

        <!-- Shadow under Mochi -->
        <ellipse cx="50" cy="91" rx="28" ry="5" fill="rgba(0,0,0,0.12)"/>

        <!-- Tanuki Fluffy Tail (curled in back) -->
        <path d="M 68 76 Q 88 74 88 62 Q 88 50 78 54 Q 72 64 68 76 Z" fill="#92400E" stroke="#78350F" stroke-width="1.2"/>
        <path d="M 82 56 Q 86 52 87 60" fill="none" stroke="#B45309" stroke-width="2"/>
        <path d="M 76 66 Q 84 64 85 70" fill="none" stroke="#B45309" stroke-width="2"/>

        <!-- Ears -->
        <!-- Left Ear -->
        <ellipse cx="32" cy="35" rx="8" ry="10" fill="#92400E" stroke="#78350F" stroke-width="1.2" transform="rotate(-20 32 35)"/>
        <ellipse cx="33" cy="35" rx="4.5" ry="6" fill="#FBCFE8" transform="rotate(-20 33 35)"/>
        <!-- Right Ear -->
        <ellipse cx="68" cy="35" rx="8" ry="10" fill="#92400E" stroke="#78350F" stroke-width="1.2" transform="rotate(20 68 35)"/>
        <ellipse cx="67" cy="35" rx="4.5" ry="6" fill="#FBCFE8" transform="rotate(20 67 35)"/>

        <!-- Tanuki Body (Plump round pear shape) -->
        <ellipse cx="50" cy="65" rx="26" ry="24" fill="#B45309" stroke="#78350F" stroke-width="1.5" filter="url(#mochi-shadow)"/>

        <!-- Cream Belly -->
        <ellipse cx="50" cy="68" rx="18" ry="17" fill="#FEF3C7"/>

        <!-- Tanuki Head -->
        <ellipse cx="50" cy="52" rx="23" ry="19" fill="#B45309" stroke="#78350F" stroke-width="1.5"/>

        <!-- Tanuki Mask Patches (Dark markings around eyes) -->
        <ellipse cx="43" cy="51" rx="8" ry="6.5" fill="#78350F" transform="rotate(-8 43 51)"/>
        <ellipse cx="57" cy="51" rx="8" ry="6.5" fill="#78350F" transform="rotate(8 57 51)"/>

        <!-- White Muzzle -->
        <ellipse cx="50" cy="57" rx="8.5" ry="6" fill="#FEF3C7"/>

        <!-- Little Nose -->
        <polygon points="50,54 48,52 52,52" fill="#1E293B"/>

        <!-- Eyes -->
        ${eyesSvg}

        <!-- Mouth -->
        ${mouthSvg}

        <!-- Rosy Cheeks -->
        <circle cx="35" cy="56" r="3" fill="#FDA4AF" opacity="0.6"/>
        <circle cx="65" cy="56" r="3" fill="#FDA4AF" opacity="0.6"/>

        <!-- Tanuki Magical Leaf on Head (Happa) -->
        <g id="mochi-magical-leaf">
          <path d="M 50 34 C 44 26, 46 19, 50 17 C 54 19, 56 26, 50 34 Z" fill="#22C55E" stroke="#15803D" stroke-width="0.8"/>
          <line x1="50" y1="20" x2="50" y2="33" stroke="#15803D" stroke-width="0.7"/>
          <line x1="50" y1="24" x2="48" y2="22" stroke="#15803D" stroke-width="0.5"/>
          <line x1="50" y1="27" x2="52" y2="25" stroke="#15803D" stroke-width="0.5"/>
        </g>

        <!-- Outfit Accessories (Headband, armor, glasses, etc.) -->
        ${getOutfitSvg(outfit)}

        <!-- Paws / Hands -->
        ${pawsSvg}

        <!-- Feet -->
        <ellipse cx="40" cy="87" rx="6" ry="4.5" fill="#78350F"/>
        <ellipse cx="60" cy="87" rx="6" ry="4.5" fill="#78350F"/>

        <!-- Extra Mood Effects -->
        ${extraEffectSvg}
      </svg>
    `;
  }

  // Witty, pedagogical tips from Mochi
  const MOCHI_TIPS = [
    {
      quote: "「継続は力なり」 (Continuity is strength)",
      explanation: "A few minutes of focused daily practice yields permanent native intuition."
    },
    {
      quote: "Tanuki Grammar Secret: Verbs at the End!",
      explanation: "In Japanese, the main action verb ALWAYS anchors the very end of the sentence."
    },
    {
      quote: "Stroke Order Golden Rule: Top-to-Bottom",
      explanation: "Always draw top-to-bottom and left-to-right — this covers over 90% of all Kanji!"
    },
    {
      quote: "Vowel Purity Principle: A, I, U, E, O",
      explanation: "Every Japanese syllable ends in one of the 5 pure vowels (except the nasal ん)."
    },
    {
      quote: "Existence Secrets: あります vs います",
      explanation: "あります is for inanimate objects (books, tea), います is for living beings (people, cats)."
    },
    {
      quote: "Mnemonic Magic: 休 (Rest)",
      explanation: "A person (亻) leaning against a peaceful shade tree (木) to take a break!"
    },
    {
      quote: "Instant Question Trick: Just add 『か』",
      explanation: "To turn any polite statement into a question, simply affix 『か』 to the end!"
    },
    {
      quote: "Cultural Politeness: 『いただきます』",
      explanation: "Clap your hands and say it before dining to express gratitude for life and food."
    }
  ];

  function getRandomTip() {
    return MOCHI_TIPS[Math.floor(Math.random() * MOCHI_TIPS.length)];
  }

  return {
    renderSvg,
    getRandomTip
  };
})();
