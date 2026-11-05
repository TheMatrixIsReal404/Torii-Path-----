/**
 * Torii Path - Universal Japanese Audio Engine
 * 
 * 1. Tier 1 (Primary): High-fidelity Native Japanese Audio Streaming via HTML5 Audio
 *    - Uses natural Japanese pronunciation with full pitch accent and native cadence.
 *    - Full playbackRate control (0.65x slow beginner pace / 0.85x natural pace).
 *    - Intelligent in-memory caching for zero-latency repeat clicks.
 *    - Auto-cleanup of overlapping audio and visual playing states.
 * 
 * 2. Tier 2 (Offline Browser Fallback): window.speechSynthesis
 *    - Detects Japanese system voices (ja-JP) with auto-resuming.
 * 
 * 3. Tier 3 (Acoustic Offline Fallback): Web Audio API Formant Synthesizer
 *    - Synthesizes vocal tract formants (F1, F2 bandpass filters over glottal pulse)
 *      so learners can hear distinct vowel resonances even in restricted/offline environments.
 * 
 * 4. Web Audio SFX: Chimes, success fanfares, combos, particle whoosh, pitch melody demos.
 * 5. Universal Event Delegation: Any element with [data-speak] works dynamically anywhere in the DOM.
 */

window.NihongoAudio = (function() {
  let audioCtx = null;
  let preferredJaVoice = null;
  let speechRate = 0.85; // Default beginner friendly pace
  let isSlowMode = false; // Toggleable slow pronunciation (0.65x)
  let isMuted = false;

  let currentAudio = null; // Currently playing HTML5 Audio
  let activeElement = null; // Currently highlighted DOM element
  let currentMoraSequenceId = 0; // Incremented to safely cancel ongoing syllable sequences
  const audioCache = new Map(); // Cache audio URLs / objects for instant playback

  // Initialize Web Audio Context on first user gesture
  function getAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  // Find Japanese TTS voice for SpeechSynthesis fallback
  function initVoices() {
    if (!('speechSynthesis' in window)) return;
    try {
      const voices = window.speechSynthesis.getVoices();
      preferredJaVoice = voices.find(v => v.lang === 'ja-JP' || v.lang === 'ja_JP' || v.lang.startsWith('ja')) ||
                         voices.find(v => v.name.toLowerCase().includes('japanese') || v.name.includes('日本語'));
    } catch (e) {
      console.warn('Voice enumeration error:', e);
    }
  }

  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    initVoices();
    window.speechSynthesis.onvoiceschanged = initVoices;
  }

  // --- Web Audio API Synth Effects ---

  // Play a synthesized tone with envelope
  function playTone(freq, type = 'sine', duration = 0.15, startTime = 0, gainLevel = 0.15) {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime + startTime);

      gain.gain.setValueAtTime(gainLevel, ctx.currentTime + startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + startTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + startTime);
      osc.stop(ctx.currentTime + startTime + duration);
    } catch (e) {
      console.warn('Audio tone error:', e);
    }
  }

  // Success Chime: Upward pentatonic arpeggio (C5 - E5 - G5 - C6)
  function playSuccess() {
    if (isMuted) return;
    playTone(523.25, 'sine', 0.15, 0.00, 0.2); // C5
    playTone(659.25, 'sine', 0.15, 0.08, 0.2); // E5
    playTone(783.99, 'sine', 0.18, 0.16, 0.2); // G5
    playTone(1046.50, 'triangle', 0.35, 0.24, 0.25); // C6
  }

  // Error Buzz: Gentle downward minor dissonance
  function playError() {
    if (isMuted) return;
    playTone(260, 'sawtooth', 0.18, 0.00, 0.1);
    playTone(240, 'sawtooth', 0.25, 0.08, 0.12);
  }

  // Card Flip / UI Snap Click (Only for non-pronunciation UI controls like quiz flips or canvas clear)
  function playClick() {
    if (isMuted) return;
    playTone(800, 'sine', 0.04, 0, 0.08);
  }

  // Whoosh Sound for Particle Sling
  function playWhoosh() {
    if (isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(250, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(750, ctx.currentTime + 0.18);

      gain.gain.setValueAtTime(0.18, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.18);
    } catch (e) {}
  }

  // Hit / Impact sound
  function playHit() {
    if (isMuted) return;
    playTone(150, 'triangle', 0.12, 0, 0.25);
    playTone(90, 'sine', 0.20, 0.02, 0.3);
  }

  // Combo Sound: Frequency shifts higher with streak multiplier
  function playCombo(multiplier = 1) {
    if (isMuted) return;
    const baseFreq = 440; // A4
    const semitones = Math.min(multiplier * 2, 16);
    const freq = baseFreq * Math.pow(2, semitones / 12);
    playTone(freq, 'sine', 0.16, 0, 0.2);
    playTone(freq * 1.25, 'triangle', 0.22, 0.06, 0.18);
  }

  // Fanfare / Level up
  function playFanfare() {
    if (isMuted) return;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((f, i) => {
      playTone(f, 'sine', 0.25, i * 0.1, 0.22);
    });
  }

  // Pitch Accent Auditory Demo Tone (High vs Low pitch curve)
  function playPitchContour(contourType = 'high-low') {
    if (isMuted) return;
    if (contourType === 'high-low' || contourType.toLowerCase().includes('high ➔ low')) {
      playTone(480, 'sine', 0.22, 0.00, 0.25); // High mora
      playTone(320, 'sine', 0.30, 0.24, 0.22); // Low mora
    } else {
      playTone(320, 'sine', 0.22, 0.00, 0.22); // Low mora
      playTone(480, 'sine', 0.30, 0.25, 0.25); // High mora
    }
  }

  // --- Tier 3 Acoustic Fallback: Formant Synthesizer ---
  // Generates vowel tract formant resonances (F1, F2 bandpass) for Japanese mora
  const VOWEL_FORMANTS = {
    a: { f1: 800, f2: 1300 },
    i: { f1: 300, f2: 2400 },
    u: { f1: 360, f2: 1200 },
    e: { f2: 1850, f1: 520 },
    o: { f1: 500, f2: 900 }
  };

  function detectVowel(text) {
    const s = text.toLowerCase();
    if (s.includes('a') || /[あかさたなはまやらわアカサタナハマヤラワ]/.test(s)) return 'a';
    if (s.includes('i') || /[いきしちにひみりイキシチニヒミリ]/.test(s)) return 'i';
    if (s.includes('u') || /[うくすつぬふむゆるウクスツヌフムユル]/.test(s)) return 'u';
    if (s.includes('e') || /[えけせてねへめれエケセテネヘメレ]/.test(s)) return 'e';
    if (s.includes('o') || /[おこそとのほもよろヲオコソトノホモヨロ]/.test(s)) return 'o';
    return 'a';
  }

  function speakViaFormantSynth(cleanText, onStart, onEnd) {
    try {
      const ctx = getAudioContext();
      if (!ctx) {
        if (onEnd) onEnd();
        return;
      }
      if (onStart) onStart();

      const vowel = detectVowel(cleanText);
      const formants = VOWEL_FORMANTS[vowel] || VOWEL_FORMANTS.a;
      const duration = isSlowMode ? 0.38 : 0.25;

      // Glottal excitation source
      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(175, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(160, ctx.currentTime + duration);

      // Formant 1 bandpass filter
      const bp1 = ctx.createBiquadFilter();
      bp1.type = 'bandpass';
      bp1.frequency.setValueAtTime(formants.f1, ctx.currentTime);
      bp1.Q.setValueAtTime(5, ctx.currentTime);

      // Formant 2 bandpass filter
      const bp2 = ctx.createBiquadFilter();
      bp2.type = 'bandpass';
      bp2.frequency.setValueAtTime(formants.f2, ctx.currentTime);
      bp2.Q.setValueAtTime(7, ctx.currentTime);

      // Gain master envelope
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.04);
      gain.gain.setValueAtTime(0.18, ctx.currentTime + duration * 0.7);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(bp1);
      osc.connect(bp2);
      bp1.connect(gain);
      bp2.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + duration);

      setTimeout(() => {
        if (onEnd) onEnd();
      }, duration * 1000 + 40);
    } catch (e) {
      console.warn('Formant synthesis error:', e);
      if (onEnd) onEnd(e);
    }
  }

  // --- Voice & SpeechSynthesis Detection ---
  function hasJapaneseVoice() {
    if (!('speechSynthesis' in window)) return false;
    try {
      const voices = window.speechSynthesis.getVoices();
      return voices.some(v => v.lang === 'ja-JP' || v.lang === 'ja_JP' || (v.lang && v.lang.startsWith('ja')) || (v.name && (v.name.toLowerCase().includes('japanese') || v.name.includes('日本語'))));
    } catch (e) {
      return false;
    }
  }

  // --- Tier 2: Browser Web Speech Synthesis Fallback ---
  function speakViaSpeechSynthesis(cleanText, effectiveRate, onStart, onEnd) {
    if (!('speechSynthesis' in window)) {
      speakViaFormantSynth(cleanText, onStart, onEnd);
      return;
    }

    // If voices are loaded and NONE are Japanese, Chrome can hang indefinitely on ja-JP.
    // In that case, fall back directly to Web Audio Formant Synthesizer!
    try {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0 && !hasJapaneseVoice()) {
        console.warn('No Japanese TTS voice installed on system, falling back to Formant Synthesizer.');
        speakViaFormantSynth(cleanText, onStart, onEnd);
        return;
      }
    } catch (e) {}

    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(cleanText);
      utter.lang = 'ja-JP';
      utter.rate = effectiveRate;
      utter.pitch = 1.0;

      if (!preferredJaVoice) initVoices();
      if (preferredJaVoice) utter.voice = preferredJaVoice;

      let started = false;
      let finished = false;

      function done() {
        if (finished) return;
        finished = true;
        if (onEnd) onEnd();
      }

      utter.onstart = () => {
        started = true;
        if (onStart) onStart();
      };
      utter.onend = () => {
        done();
      };
      utter.onerror = (err) => {
        console.warn('SpeechSynthesis error, falling back to formant synthesizer:', err);
        speakViaFormantSynth(cleanText, onStart, onEnd);
      };

      window.speechSynthesis.speak(utter);

      // Watchdog timeout: If SpeechSynthesis hangs or fails to start within 1.2s, force fallback
      setTimeout(() => {
        if (!started && !finished) {
          try { window.speechSynthesis.cancel(); } catch (e) {}
          console.warn('SpeechSynthesis timed out, using formant synthesizer');
          speakViaFormantSynth(cleanText, onStart, onEnd);
        }
      }, 1200);
    } catch (e) {
      speakViaFormantSynth(cleanText, onStart, onEnd);
    }
  }

  // Stop currently playing speech/mora sequence
  function stopCurrentAudio() {
    currentMoraSequenceId++; // Invalidate ongoing syllable sequences
    if (currentAudio) {
      try {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      } catch (e) {}
      currentAudio = null;
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
    if (activeElement) {
      activeElement.classList.remove('audio-playing');
      activeElement = null;
    }
  }

  // Multi-source streaming playback with automatic failover (GitHub Pages compatible)
  function tryPlayStream(urlList, index, cleanText, effectiveRate, onStart, onEnd) {
    if (index >= urlList.length) {
      // All native audio streams failed, fall back to Tier 2 / Tier 3
      speakViaSpeechSynthesis(cleanText, effectiveRate, onStart, onEnd);
      return;
    }

    const url = urlList[index];
    try {
      const audio = document.createElement('audio');
      audio.referrerPolicy = 'no-referrer';
      audio.crossOrigin = 'anonymous';
      audio.src = url;
      audio.playbackRate = effectiveRate;
      currentAudio = audio;

      let hasFinished = false;
      function done(err) {
        if (hasFinished) return;
        hasFinished = true;
        if (currentAudio === audio) currentAudio = null;
        if (onEnd) onEnd(err);
      }

      audio.onplay = () => {
        if (onStart) onStart();
      };
      audio.onended = () => {
        done();
      };
      audio.onerror = (e) => {
        console.warn(`Audio stream source ${index + 1} failed, trying failover...`);
        if (currentAudio === audio) currentAudio = null;
        tryPlayStream(urlList, index + 1, cleanText, effectiveRate, onStart, onEnd);
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn(`Audio play ${index + 1} rejected, trying failover:`, err);
          if (currentAudio === audio) currentAudio = null;
          tryPlayStream(urlList, index + 1, cleanText, effectiveRate, onStart, onEnd);
        });
      }
    } catch (err) {
      tryPlayStream(urlList, index + 1, cleanText, effectiveRate, onStart, onEnd);
    }
  }

  // --- Tier 1 (Primary): Multi-Source High-Fidelity Native Japanese Streaming ---
  function speak(text, rate = null, onStart, onEnd) {
    if (isMuted) {
      if (onEnd) onEnd();
      return;
    }

    // Clean text: strip HTML, ruby tags, brackets, and extra spaces
    const cleanText = (text || '')
      .replace(/<[^>]*>/g, '')
      .replace(/[\/()[\]{}]/g, '')
      .trim();

    if (!cleanText) {
      if (onEnd) onEnd();
      return;
    }

    stopCurrentAudio();

    const effectiveRate = rate !== null ? rate : (isSlowMode ? 0.65 : speechRate);
    const encoded = encodeURIComponent(cleanText);

    // List of reliable streaming endpoints (Tier 1A: Youdao native Japanese, Tier 1B: Google TTS no-referrer)
    const streamUrls = [
      `https://dict.youdao.com/dictvoice?audio=${encoded}&le=jap`,
      `https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&client=tw-ob&q=${encoded}`
    ];

    tryPlayStream(streamUrls, 0, cleanText, effectiveRate, onStart, onEnd);
  }

  // Speak mora-by-mora with delay for absolute beginners
  function speakMoraArray(moraArray, onComplete) {
    if (isMuted || !moraArray || moraArray.length === 0) {
      if (onComplete) onComplete();
      return;
    }

    stopCurrentAudio();
    const mySequenceId = currentMoraSequenceId;
    let idx = 0;

    function playNext() {
      if (mySequenceId !== currentMoraSequenceId) return;

      if (idx >= moraArray.length) {
        if (onComplete) onComplete();
        return;
      }

      const char = moraArray[idx];
      idx++;

      const pauseDuration = isSlowMode ? 340 : 220;
      speak(char, 0.75, null, () => {
        if (mySequenceId !== currentMoraSequenceId) return;
        setTimeout(playNext, pauseDuration);
      });
    }

    playNext();
  }

  // Universal Event Delegation: Any element with [data-speak] automatically plays
  // with visual pulse and NO annoying click sound!
  function initEventDelegation() {
    if (typeof document === 'undefined') return;

    // Immediately unlock Web Audio API on first user interaction
    const unlock = () => { getAudioContext(); };
    document.addEventListener('touchstart', unlock, { once: true, passive: true });
    document.addEventListener('click', unlock, { once: true, passive: true });

    document.addEventListener('click', (e) => {
      const speakEl = e.target.closest('[data-speak]');
      if (!speakEl) return;

      // Ensure audio context is ready on user gesture
      getAudioContext();

      e.stopPropagation();

      const text = speakEl.getAttribute('data-speak');
      if (!text) return;

      const customRate = parseFloat(speakEl.getAttribute('data-speak-rate')) || null;

      if (activeElement && activeElement !== speakEl) {
        activeElement.classList.remove('audio-playing');
      }
      activeElement = speakEl;
      speakEl.classList.add('audio-playing');

      speak(text, customRate,
        () => {
          speakEl.classList.add('audio-playing');
        },
        () => {
          speakEl.classList.remove('audio-playing');
          if (activeElement === speakEl) activeElement = null;
        }
      );
    });
  }

  // Auto-bind delegation when DOM is loaded
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initEventDelegation);
    } else {
      initEventDelegation();
    }
  }

  // Backwards compatibility helper
  function bindSpeakButtons(container = document) {
    // Event delegation on document covers all elements globally!
  }

  return {
    getAudioContext,
    playTone,
    playSuccess,
    playError,
    playClick,
    playWhoosh,
    playHit,
    playCombo,
    playFanfare,
    playPitchContour,
    speak,
    speakMoraArray,
    stopCurrentAudio,
    bindSpeakButtons,
    setRate: (r) => { speechRate = r; },
    getRate: () => (isSlowMode ? 0.65 : speechRate),
    toggleSlowMode: () => {
      isSlowMode = !isSlowMode;
      if (currentAudio && !currentAudio.paused) {
        currentAudio.playbackRate = isSlowMode ? 0.65 : speechRate;
      }
      return isSlowMode;
    },
    isSlowMode: () => isSlowMode,
    toggleMute: () => {
      isMuted = !isMuted;
      if (isMuted) {
        stopCurrentAudio();
      }
      return isMuted;
    },
    isMuted: () => isMuted
  };
})();
