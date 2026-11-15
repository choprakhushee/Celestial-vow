/* ==========================================================================
   THE CELESTIAL VOW — A Wedding Quest
   A reusable invitation template by Aamantran Atelier.
   Everything a new couple needs is in CONFIG below; the page is built from it.
   ========================================================================== */

const CONFIG = {
  brand: { name: "Aamantran Atelier", url: "" },
  game: {
    title: ["THE CELESTIAL", "VOW"],
    subtitle: "A Wedding Quest",
    hashtag: "#TheCelestialVow",
    storageKey: "celestial-vow:kavya-siddharth:v1",
  },
  couple: {
    bride: { first: "Kavya", full: "Kavya Hegde", house: "Hegde", parents: "Mrs. Shobha & Mr. Ramesh Hegde", city: "Mangaluru" },
    groom: { first: "Siddharth", full: "Siddharth Kulkarni", house: "Kulkarni", parents: "Mrs. Anuradha & Mr. Prakash Kulkarni", city: "Pune" },
    initials: ["K", "S"],
  },
  blessing: { line: "॥ श्री गणेशाय नमः ॥", sub: "With the blessings of the Almighty and our elders" },
  invitation:
    "By the grace of the heavens and the blessings of our elders, the houses of Hegde and Kulkarni joyfully invite you to witness the sacred union of Kavya and Siddharth, as two stars that wandered for ages finally meet.",
  weddingDateLabel: "Friday · 21 January 2028 · 6:30 PM",
  countdownTarget: "2028-01-21T18:30:00+05:30",
  constellationDate: "21 · 01 · 2028",
  venueRegion: "Hampi, Karnataka",
  rsvp: {
    by: "21 December 2027",
    whatsapp: "919999999999",
    message: "Kavya & Siddharth, {guest} accepts the quest! Joining as: {class}. Quests accepted: {quests}. Relics found: {relics}/7 ⚔️🪔",
  },
  contacts: [
    { name: "Rohan Hegde", role: "the bride's brother", phone: "+91 99999 71717" },
    { name: "Nisha Kulkarni", role: "the groom's sister", phone: "+91 99999 17171" },
  ],

  lore: [
    "Long ago, in a kingdom of stone and river, <em>two stars</em> were born on opposite sides of the sky.",
    "One shone over the western sea; the other rose above the hills of the Deccan.",
    "For years they wandered: through exams and offices, train journeys and family dinners.",
    "Then, at a friend's wedding in 2022, a single plate of the last remaining jalebi brought them face to face.",
    "The heavens took note.",
    "After three years of quests, small and grand, the two stars have chosen to unite.",
    "And every legend needs its witnesses.",
    "That, dear {guest}, is you.",
  ],
  loreStarsLine: 0, // which leaf lights the two stars

  tips: [
    "The Sangeet grants +50 Joy. Comfortable footwear is strongly advised.",
    "Elders bestow blessings. Touch their feet to receive bonus luck.",
    "The Sadya restores all health. Second helpings are allowed.",
    "Relics are hidden across this realm. Keen eyes are rewarded.",
    "The bride's mother has been preparing for this quest since 1998.",
    "The Sanctum Gate rewards patience. Or the Skip button. Nobody is judging.",
    "Every uncle carries a tale of 'the old days'. Each one lasts forty minutes. Plan accordingly.",
    "Haldi stains are permanent. So are the memories. Dress accordingly.",
    "Filter coffee is served at dawn. Kavya will already be on her second cup.",
    "Photos with the couple are a limited-time event. Queue with grace.",
    "Saving a seat for a friend counts as a legendary act of loyalty.",
  ],

  heroes: [
    {
      id: "kavya", name: "KAVYA", title: "Keeper of Stories", house: "House Hegde", cls: "Lorekeeper", scene: "hero-bride",
      stats: [["Wisdom", 96], ["Patience", 88], ["Dance Moves", 99], ["Filter-Coffee Dependency", 100]],
      ability: "Remembers every birthday in the family tree.",
      equipment: [
        ["Emerald Kanjeevaram", "Woven in Kanchipuram; grants +30 Grace and immunity to wrinkles."],
        ["Grandmother's Temple Necklace", "Heirloom gold. Three generations of blessings, still shining."],
      ],
    },
    {
      id: "siddharth", name: "SIDDHARTH", title: "Wanderer of the Western Ghats", house: "House Kulkarni", cls: "Pathfinder", scene: "hero-groom",
      stats: [["Courage", 94], ["Punctuality", 41], ["Cooking", 87], ["Bad Jokes", 100]],
      ability: "Can find parking anywhere.",
      equipment: [
        ["Ivory Angavastram", "Handwoven silk with a gold border. Worn with quiet confidence."],
        ["Ceremonial Blade", "Purely ceremonial. Has only ever cut a wedding cake (in rehearsal)."],
      ],
    },
  ],

  quests: [
    { id: "mehendi", num: "Quest I", name: "The Garden of Henna", alias: "Mehendi", start: "2028-01-19T16:00:00+05:30", hours: 4,
      date: "Wednesday, 19 January 2028", time: "4:00 PM", venue: "The Lotus Pavilion", attire: "Garden silks, pastels",
      reward: "+10 Joy, intricate patterns", scene: "quest-mehendi", map: [31, 69] },
    { id: "haldi", num: "Quest II", name: "The Golden Stepwell", alias: "Haldi", start: "2028-01-20T10:00:00+05:30", hours: 3,
      date: "Thursday, 20 January 2028", time: "10:00 AM", venue: "The Stepwell Courtyard", attire: "Yellow; clothes you don't mind ruining",
      reward: "+20 Glow", scene: "quest-haldi", map: [55, 51] },
    { id: "sangeet", num: "Quest III", name: "The Night of a Thousand Lamps", alias: "Sangeet", start: "2028-01-20T20:00:00+05:30", hours: 4,
      date: "Thursday, 20 January 2028", time: "8:00 PM", venue: "The Royal Courtyard", attire: "Festive finery, dancing shoes",
      reward: "+50 Joy, lost voice", scene: "quest-sangeet", map: [66, 38] },
    { id: "wedding", num: "The Final Chapter", name: "The Sacred Union", alias: "Wedding", start: "2028-01-21T18:30:00+05:30", hours: 4,
      date: "Friday, 21 January 2028", time: "6:30 PM", venue: "The Riverside Mandapa", attire: "Traditional South Indian finery",
      reward: null, sacred: true, scene: "quest-wedding", map: [24, 34],
      verse: "Beside the river, before the sacred fire, two families become one. We would be honoured by your presence and your blessings." },
    { id: "reception", num: "Epilogue", name: "The Feast of Stars", alias: "Reception", start: "2028-01-22T19:30:00+05:30", hours: 4,
      date: "Saturday, 22 January 2028", time: "7:30 PM", venue: "The Palace Terrace", attire: "Royal evening wear",
      reward: "Legendary Feast", scene: "quest-reception", map: [47, 27] },
  ],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hampi+Karnataka",

  guestClasses: [
    { id: "dancer", name: "The Dancer", emblem: "emblem-drum", line: "Arrives for the Sangeet; leaves when the venue switches off the lights." },
    { id: "feaster", name: "The Feaster", emblem: "emblem-sweets", line: "Has already located the dessert counter. Twice." },
    { id: "blessing", name: "The Blessing-Giver", emblem: "emblem-hands", line: "Showers blessings, akshata and advice in equal measure." },
    { id: "chronicler", name: "The Chronicler", emblem: "emblem-eye", line: "Sees every moment through a lens. Will send 1,200 photos by Tuesday." },
    { id: "lorekeeper", name: "The Lorekeeper", emblem: "emblem-scroll", line: "Knows every embarrassing childhood tale, and is ready to share." },
    { id: "devotee", name: "The Devotee", emblem: "emblem-lotus", line: "Here for the rituals, the mantras and the glow of the sacred fire." },
  ],

  // x / y are percentages of the scene image; size in px
  relics: [
    { id: "conch", name: "The Conch of Beginnings", img: "relic-conch", scene: "title", x: 15, y: 70, size: 40, rot: -18,
      lore: "Its first note opened every celebration in the old kingdom." },
    { id: "diya", name: "The Undying Lamp", img: "relic-diya", scene: "prologue", x: 88, y: 88, size: 42, rot: 0,
      lore: "Lit by the bride's grandmother. It has outlasted three power cuts and one monsoon." },
    { id: "feather", name: "The Feather of Grace", img: "relic-feather", scene: "heroes", x: 80, y: 24, size: 48, rot: 24,
      lore: "Dropped by a peacock who watched Kavya rehearse for the Sangeet, and quietly retired." },
    { id: "ring", name: "The Emerald Promise", img: "relic-ring", scene: "gate", x: 16, y: 86, size: 36, rot: 10,
      lore: "Made for one finger only. Siddharth checked the size eleven times." },
    { id: "lotus", name: "The Lotus of Patience", img: "relic-lotus", scene: "quest:mehendi", x: 26, y: 47, size: 42, rot: 0,
      lore: "It blooms only in still water, and at the Mehendi, while the henna dries." },
    { id: "coin", name: "The Coin of Fortune", img: "relic-coin", scene: "stars", x: 12, y: 93, size: 34, rot: 0,
      lore: "Minted the night the two stars met. Its lotus faces both ways, like a good marriage." },
    { id: "key", name: "The Key to the Feast", img: "relic-key", scene: "rsvp", x: 86, y: 8, size: 44, rot: -32,
      lore: "Opens the kitchens of the Legendary Sadya. Guard it from the cousins." },
  ],
  legendary: {
    title: "Legendary: Keeper of All Relics",
    message: [
      "Dear {guest},",
      "You found every relic, which means you looked at our story as closely as we hoped someone would.",
      "Thank you for being part of this legend long before the first lamp is lit.",
      "With love, Kavya & Siddharth",
    ],
    surprise: "Your reward: at the Sangeet, whisper the words <b>“the last plate of jalebi”</b> to Rohan or Nisha. A secret song request on the dance floor, and the first jalebi of the night, are yours.",
  },

  finale: { vow: ["Two stars.", "One sky.", "Forever."] },
  credits: [
    { k: "Starring", v: "Kavya Hegde & Siddharth Kulkarni", big: true },
    { k: "Produced by", v: "The Houses of Hegde & Kulkarni", p: "Mrs. Shobha & Mr. Ramesh Hegde · Mrs. Anuradha & Mr. Prakash Kulkarni" },
    { k: "Special appearance", v: "Every Aunty with Advice" },
    { k: "Catering", v: "The Legendary Sadya" },
    { k: "Choreography", v: "The cousins, rehearsing since Diwali" },
    { k: "Continuity & logistics", v: "Rohan Hegde & Nisha Kulkarni" },
    { k: "Filmed on location", v: "Hampi, Karnataka" },
    { k: "And with special thanks to", v: "{guest}" },
    { k: "", v: "#TheCelestialVow" },
    { k: "Crafted with love by", v: "Aamantran Atelier" },
  ],
  postCredits: {
    lead: "Somewhere beyond the Western Ghats, two suitcases are being packed. One of them is mostly snacks.",
    title: "THE CELESTIAL VOW II: The Honeymoon Chronicles",
    tag: "Coming soon. No guests permitted. Not even Aunty.",
  },

  colors: { gold: "#C9A24A", maroon: "#6E1E2A", emerald: "#1F4B3F", indigo: "#1A2140", parchment: "#EADBBE" },

  assets: {
    scene: (k) => `assets/scenes/${k}`, // + .webp / .jpg
    cut: (k) => `assets/cutouts/${k}.webp`,
    // Optional video loops. Add a path (mp4) and it will be used instead of the still.
    videos: { "title-city": null, "sanctum-door": null, "star-sky": null },
    music: "assets/music.mp3",
    fallbacks: {
      "title-city": ["#3b4a6b", "#c99a63", "#1d1712"], "loading-bg": ["#140d08", "#3a2412", "#080504"],
      "prologue-library": ["#120e0a", "#3a2a1a", "#0a0806"], "hero-bride": ["#2f3c40", "#b9844a", "#140f0b"],
      "hero-groom": ["#3a3a46", "#c08a4e", "#140f0b"], "sanctum-door": ["#100c0a", "#3b2c1e", "#060504"],
      "quest-mehendi": ["#5b7a5a", "#d8b78a", "#1f2a1c"], "quest-haldi": ["#c08a2e", "#e9c46a", "#3a2a12"],
      "quest-sangeet": ["#1a1530", "#7a3a1a", "#0a0806"], "quest-wedding": ["#3a2a4a", "#e08a4a", "#1a1010"],
      "quest-reception": ["#0e1430", "#3a3a6a", "#05060c"], "star-sky": ["#05081a", "#1a2140", "#020308"],
    },
  },
};

/* ==========================================================================
   Utilities & state
   ========================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
function h(tag, attrs = {}, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k === "class") el.className = v;
    else if (k === "html") el.innerHTML = v;
    else if (k === "style" && typeof v === "object") Object.assign(el.style, v);
    else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (const kid of kids.flat()) if (kid != null && kid !== false) el.append(kid.nodeType ? kid : document.createTextNode(kid));
  return el;
}
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const rand = (a, b) => a + Math.random() * (b - a);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const params = new URLSearchParams(location.search);
const GUEST = (params.get("guest") || "").trim().slice(0, 60);
const DEBUG_RELICS = params.get("relics") === "debug";
const guestOr = (fallback) => GUEST || fallback;
const fill = (s, fb = "traveller") => s.replace(/\{guest\}/g, esc(guestOr(fb)));

const store = {
  data: { relics: [], quests: [], guestClass: null, lastScene: null, ach: [], gateOpen: false, settings: {} },
  load() { try { const d = JSON.parse(localStorage.getItem(CONFIG.game.storageKey) || "null"); if (d) Object.assign(this.data, d); } catch (e) {} return this.data; },
  save() { try { localStorage.setItem(CONFIG.game.storageKey, JSON.stringify(this.data)); } catch (e) {} },
};
store.load();
const S = store.data;
const sysRM = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
const settings = Object.assign({ music: true, sfx: true, reduced: sysRM }, S.settings);
const RM = !!settings.reduced;
if (RM) document.documentElement.classList.add("rm");
const HAS_GSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
const MOTION = HAS_GSAP && !RM;

/* ---------- Media helpers with graceful fallback ---------- */
function sceneMedia(key, { eager = false } = {}) {
  const kb = h("div", { class: "kb" });
  const wrap = h("div", { class: "tilt" }, kb);
  const fb = CONFIG.assets.fallbacks[key] || ["#1a2140", "#6e6a64", "#0b0b0e"];
  const markFallback = () => { wrap.classList.add("fallback"); wrap.style.setProperty("--fb1", fb[0]); wrap.style.setProperty("--fb2", fb[1]); wrap.style.setProperty("--fb3", fb[2]); };
  const base = CONFIG.assets.scene(key);
  const vid = CONFIG.assets.videos[key];
  const pic = h("picture", {}, h("source", { srcset: base + ".webp", type: "image/webp" }));
  const img = h("img", { src: base + ".jpg", alt: "", decoding: "async", loading: eager ? "eager" : "lazy", draggable: "false" });
  img.addEventListener("error", () => { pic.remove(); markFallback(); }, { once: true });
  pic.append(img);
  kb.append(pic);
  if (vid && !RM) {
    const v = h("video", { muted: true, playsinline: true, loop: true, preload: "none", poster: base + ".jpg", "aria-hidden": "true" });
    v.muted = true;
    v.addEventListener("canplay", () => { pic.style.opacity = 0; }, { once: true });
    v.addEventListener("error", () => v.remove(), { once: true });
    v.append(h("source", { src: vid, type: "video/mp4" }));
    kb.append(v);
    wrap._video = v;
  }
  wrap._img = img;
  return wrap;
}
function cutout(key, cls = "", alt = "") {
  const img = h("img", { src: CONFIG.assets.cut(key), alt, class: cls, decoding: "async", draggable: "false" });
  img.addEventListener("error", () => { const d = h("div", { class: cls + " cut-fb", "data-cut": key }); img.replaceWith(d); }, { once: true });
  return img;
}
function corners() { return h("div", { class: "corners", "aria-hidden": "true" }, h("i"), h("i"), h("i"), h("i")); }

/* Fit an element to "cover" its parent at the scene aspect ratio, so overlays can be anchored in % of the image. */
const AR = 1080 / 1920;
function coverBox(el, parent) {
  const W = parent.clientWidth, H = parent.clientHeight;
  const w = Math.max(W, H * AR), hh = Math.max(H, W / AR);
  el.style.width = w + "px"; el.style.height = hh + "px";
}

/* ==========================================================================
   Audio: original generative score + UI sounds (Web Audio, no samples)
   ========================================================================== */
const Audio = (() => {
  let ctx, master, musicBus, sfxBus, verb, started = false, mood = "calm", file = null, timers = [];
  const scale = [146.83, 164.81, 185.0, 220.0, 246.94, 293.66, 329.63, 369.99, 440.0]; // D major pentatonic-ish (Mohanam colour)
  const chords = [[73.42, 110, 146.83, 220, 277.18], [61.74, 92.5, 123.47, 185, 246.94], [49, 98, 146.83, 196, 246.94], [55, 82.41, 110, 164.81, 220]];
  function impulse(sec = 3.2, decay = 2.6) {
    const len = ctx.sampleRate * sec, buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) { const d = buf.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay); }
    return buf;
  }
  function init() {
    if (ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -18; comp.ratio.value = 3;
    master.connect(comp).connect(ctx.destination);
    verb = ctx.createConvolver(); verb.buffer = impulse();
    const verbGain = ctx.createGain(); verbGain.gain.value = 0.55; verb.connect(verbGain).connect(master);
    musicBus = ctx.createGain(); musicBus.gain.value = settings.music ? 1 : 0; musicBus.connect(master); musicBus.connect(verb);
    sfxBus = ctx.createGain(); sfxBus.gain.value = settings.sfx ? 1 : 0; sfxBus.connect(master); sfxBus.connect(verb);
  }
  function env(g, t, a, peak, d) { g.gain.cancelScheduledValues(t); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + a); g.gain.exponentialRampToValueAtTime(0.0001, t + a + d); }
  function noiseBuf(sec = 1) { const b = ctx.createBuffer(1, ctx.sampleRate * sec, ctx.sampleRate); const d = b.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; return b; }
  let NB;
  function noise(dest, t, dur, type, f, q, peak, a = 0.01) {
    const s = ctx.createBufferSource(); s.buffer = NB || (NB = noiseBuf(2)); s.loop = true;
    const fl = ctx.createBiquadFilter(); fl.type = type; fl.frequency.value = f; fl.Q.value = q;
    const g = ctx.createGain(); env(g, t, a, peak, dur);
    s.connect(fl).connect(g).connect(dest); s.start(t); s.stop(t + a + dur + 0.1);
    return fl;
  }
  /* --- score layers --- */
  let drone, padVoices = [], choir, chordIdx = 0, beat = 0;
  function startDrone() {
    const g = ctx.createGain(); g.gain.value = 0.0001; g.gain.exponentialRampToValueAtTime(0.11, ctx.currentTime + 4);
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 260; lp.Q.value = 0.7;
    const lfo = ctx.createOscillator(); lfo.frequency.value = 0.05; const lg = ctx.createGain(); lg.gain.value = 90; lfo.connect(lg).connect(lp.frequency); lfo.start();
    [73.42, 73.42 * 1.003, 110, 36.71].forEach((f, i) => { const o = ctx.createOscillator(); o.type = i === 3 ? "sine" : "sawtooth"; o.frequency.value = f; const og = ctx.createGain(); og.gain.value = i === 3 ? 0.6 : 0.22; o.connect(og).connect(lp); o.start(); });
    lp.connect(g).connect(musicBus);
    drone = { g, lp };
  }
  function playChord() {
    const t = ctx.currentTime, ch = chords[chordIdx++ % chords.length];
    const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = mood === "epic" ? 1500 : mood === "sacred" ? 700 : 1000; lp.Q.value = 0.4;
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(mood === "epic" ? 0.07 : 0.05, t + 4); g.gain.exponentialRampToValueAtTime(0.0001, t + 12);
    lp.connect(g).connect(musicBus);
    ch.forEach((f) => [0.996, 1.004].forEach((dt) => { const o = ctx.createOscillator(); o.type = "sawtooth"; o.frequency.value = f * dt; const og = ctx.createGain(); og.gain.value = 0.18; o.connect(og).connect(lp); o.start(t); o.stop(t + 12.5); }));
  }
  function choirNote() {
    const t = ctx.currentTime, f = scale[Math.floor(rand(0, 6))];
    const o = ctx.createOscillator(); o.type = "sawtooth"; o.frequency.value = f;
    const vib = ctx.createOscillator(); vib.frequency.value = 5.2; const vg = ctx.createGain(); vg.gain.value = f * 0.006; vib.connect(vg).connect(o.frequency); vib.start(t); vib.stop(t + 7);
    const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.05, t + 2.4); g.gain.exponentialRampToValueAtTime(0.0001, t + 6.5);
    [[700, 8, 1], [1150, 10, 0.5], [2600, 12, 0.18]].forEach(([ff, q, a]) => { const bp = ctx.createBiquadFilter(); bp.type = "bandpass"; bp.frequency.value = ff; bp.Q.value = q; const bg = ctx.createGain(); bg.gain.value = a; o.connect(bp).connect(bg).connect(g); });
    g.connect(musicBus); o.start(t); o.stop(t + 7);
  }
  function bell(f, peak = 0.06, when = 0) {
    if (!ctx) return; const t = ctx.currentTime + when;
    [[1, 1], [2.76, 0.45], [5.4, 0.22], [8.93, 0.1]].forEach(([r, a]) => { const o = ctx.createOscillator(); o.type = "sine"; o.frequency.value = f * r; const g = ctx.createGain(); env(g, t, 0.004, peak * a, 3.5 / r + 0.6); o.connect(g).connect(musicBus); o.start(t); o.stop(t + 5); });
  }
  function membrane(t, f0 = 170, peak = 0.12, dur = 0.35) {
    const o = ctx.createOscillator(); o.type = "sine"; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f0 * 0.55, t + dur);
    const g = ctx.createGain(); env(g, t, 0.003, peak, dur); o.connect(g).connect(musicBus); o.start(t); o.stop(t + dur + 0.1);
    noise(musicBus, t, 0.05, "bandpass", 2400, 1.5, peak * 0.25, 0.001);
  }
  function pulseTick() {
    if (mood !== "rhythm") return;
    const t = ctx.currentTime + 0.05, step = beat++ % 8, spb = 60 / 84 / 2;
    const pat = [[1, 170, 0.11], 0, [1, 260, 0.05], [1, 230, 0.04], [1, 120, 0.09], 0, [1, 260, 0.05], 0];
    const p = pat[step]; if (p) membrane(t, p[1], p[2]);
    timers.push(setTimeout(pulseTick, spb * 1000));
  }
  function startScore() {
    startDrone(); playChord(); timers.push(setInterval(playChord, 9000));
    const ch = () => { if (mood !== "rhythm" || Math.random() < 0.4) choirNote(); timers.push(setTimeout(ch, rand(7000, 13000))); }; timers.push(setTimeout(ch, 3000));
    const bl = () => { bell(scale[Math.floor(rand(3, 9))] * 2, 0.035); timers.push(setTimeout(bl, rand(6000, 12000))); }; timers.push(setTimeout(bl, 5000));
  }
  async function tryFile() {
    try {
      const r = await fetch(CONFIG.assets.music, { method: "HEAD" });
      if (!r.ok) return false;
      file = new window.Audio(CONFIG.assets.music); file.loop = true; file.crossOrigin = "anonymous";
      const src = ctx.createMediaElementSource(file); src.connect(musicBus); await file.play(); return true;
    } catch (e) { file = null; return false; }
  }
  async function start() {
    init(); if (!ctx || started) return; started = true;
    try { await ctx.resume(); } catch (e) {}
    const t = ctx.currentTime; master.gain.setValueAtTime(0.0001, t); master.gain.exponentialRampToValueAtTime(0.25, t + 3);
    if (!(await tryFile())) startScore();
  }
  function setMood(m) {
    if (!ctx || mood === m) return; const prev = mood; mood = m;
    if (drone) { const t = ctx.currentTime; drone.lp.frequency.setTargetAtTime(m === "epic" ? 520 : m === "sacred" ? 180 : 260, t, 1.5); drone.g.gain.setTargetAtTime(m === "sacred" ? 0.07 : m === "epic" ? 0.15 : 0.11, t, 1.5); }
    if (m === "rhythm" && prev !== "rhythm" && !file) pulseTick();
    if (master) master.gain.setTargetAtTime(m === "epic" ? 0.3 : m === "sacred" ? 0.2 : 0.25, ctx.currentTime, 1.2);
  }
  /* --- UI sounds --- */
  const sfx = {
    tap() { if (!ctx) return; const t = ctx.currentTime; const o = ctx.createOscillator(); o.type = "sine"; o.frequency.value = 1320; const g = ctx.createGain(); env(g, t, 0.002, 0.03, 0.25); o.connect(g).connect(sfxBus); o.start(t); o.stop(t + 0.4); },
    chime() { if (!ctx) return; [0, 0.09, 0.18].forEach((d, i) => { const t = ctx.currentTime + d; const f = [880, 1108.73, 1318.51][i]; [[1, 1], [2.76, 0.3]].forEach(([r, a]) => { const o = ctx.createOscillator(); o.frequency.value = f * r; const g = ctx.createGain(); env(g, t, 0.003, 0.05 * a, 1.6); o.connect(g).connect(sfxBus); o.start(t); o.stop(t + 2); }); }); },
    click() { if (!ctx) return; const t = ctx.currentTime; noise(sfxBus, t, 0.08, "bandpass", 900, 2, 0.25, 0.002); const o = ctx.createOscillator(); o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(60, t + 0.12); const g = ctx.createGain(); env(g, t, 0.002, 0.2, 0.14); o.connect(g).connect(sfxBus); o.start(t); o.stop(t + 0.2); },
    grind() { if (!ctx) return; const t = ctx.currentTime; noise(sfxBus, t, 0.22, "lowpass", 420, 1, 0.12, 0.03); },
    door() { if (!ctx) return; const t = ctx.currentTime; const f = noise(sfxBus, t, 3.2, "lowpass", 180, 2, 0.45, 0.4); f.frequency.setValueAtTime(120, t); f.frequency.linearRampToValueAtTime(320, t + 2.5);
      const o = ctx.createOscillator(); o.type = "sawtooth"; o.frequency.setValueAtTime(42, t); o.frequency.linearRampToValueAtTime(55, t + 3); const lp = ctx.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 140; const g = ctx.createGain(); env(g, t, 0.5, 0.18, 2.8); o.connect(lp).connect(g).connect(sfxBus); o.start(t); o.stop(t + 3.6); },
    rustle() { if (!ctx) return; const t = ctx.currentTime; for (let i = 0; i < 4; i++) noise(sfxBus, t + i * 0.05 + rand(0, 0.03), 0.07, "highpass", 2600, 0.8, 0.05, 0.004); },
    stamp() { if (!ctx) return; const t = ctx.currentTime; membrane(t, 120, 0.25, 0.25); [1700, 2390].forEach((f) => { const o = ctx.createOscillator(); o.frequency.value = f; const g = ctx.createGain(); env(g, t + 0.01, 0.002, 0.03, 0.6); o.connect(g).connect(sfxBus); o.start(t); o.stop(t + 0.8); }); },
    whoosh() { if (!ctx) return; const t = ctx.currentTime; const f = noise(sfxBus, t, 1.2, "bandpass", 400, 0.8, 0.2, 0.35); f.frequency.setValueAtTime(300, t); f.frequency.exponentialRampToValueAtTime(2800, t + 1.2); },
    bell(f = 587.33) { bell(f, 0.07); },
  };
  return {
    start, setMood, sfx: new Proxy(sfx, { get: (o, k) => (...a) => { try { if (settings.sfx) o[k](...a); } catch (e) {} } }),
    setMusic(on) { if (musicBus) musicBus.gain.setTargetAtTime(on ? 1 : 0, ctx.currentTime, 0.4); if (file) on ? file.play().catch(() => {}) : file.pause(); },
    setSfx(on) { if (sfxBus) sfxBus.gain.setTargetAtTime(on ? 1 : 0, ctx.currentTime, 0.1); },
    suspend() { if (ctx && ctx.state === "running") ctx.suspend(); if (file) file.pause(); },
    resume() { if (ctx && started) ctx.resume(); if (file && settings.music) file.play().catch(() => {}); },
  };
})();

/* ==========================================================================
   Particles: embers, dust, fireflies, petals, lanterns, sparks (one canvas)
   ========================================================================== */
const Particles = (() => {
  let cv, cx, W = 0, H = 0, dpr = 1, mode = null, list = [], bursts = [], raf = 0, running = false, lanternImg = null;
  const sprites = {};
  function sprite(key, r, stops) {
    const c = document.createElement("canvas"); c.width = c.height = r * 2; const g = c.getContext("2d");
    const gr = g.createRadialGradient(r, r, 0, r, r, r); stops.forEach(([o, col]) => gr.addColorStop(o, col)); g.fillStyle = gr; g.fillRect(0, 0, r * 2, r * 2); sprites[key] = c;
  }
  function init(canvas) {
    cv = canvas; cx = cv.getContext("2d");
    sprite("ember", 32, [[0, "rgba(255,240,200,1)"], [0.15, "rgba(255,180,80,.9)"], [0.45, "rgba(229,110,30,.25)"], [1, "rgba(229,110,30,0)"]]);
    sprite("emberSoft", 32, [[0, "rgba(255,200,120,.55)"], [0.5, "rgba(229,120,40,.15)"], [1, "rgba(229,110,30,0)"]]);
    sprite("dust", 32, [[0, "rgba(255,246,220,.9)"], [0.3, "rgba(255,240,210,.35)"], [1, "rgba(255,240,210,0)"]]);
    sprite("fly", 32, [[0, "rgba(255,255,220,1)"], [0.12, "rgba(230,255,150,.9)"], [0.4, "rgba(200,240,120,.22)"], [1, "rgba(200,240,120,0)"]]);
    sprite("glow", 64, [[0, "rgba(255,226,160,.8)"], [0.35, "rgba(255,170,70,.25)"], [1, "rgba(255,150,50,0)"]]);
    sprite("spark", 16, [[0, "rgba(255,255,240,1)"], [0.3, "rgba(255,210,120,.9)"], [1, "rgba(255,150,40,0)"]]);
    lanternImg = new Image(); lanternImg.src = CONFIG.assets.cut("lantern");
    resize(); addEventListener("resize", resize);
  }
  function resize() { if (!cv) return; dpr = Math.min(2, devicePixelRatio || 1); W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0); }
  const small = () => W < 520;
  function make(m) {
    const z = Math.random(); // depth: 0 far, 1 near
    const p = { z, x: rand(0, W), y: rand(0, H), t: rand(0, 100) };
    if (m === "embers") Object.assign(p, { vx: rand(-8, 8), vy: -rand(14, 40) * (0.5 + z), s: (3 + z * 9), a: rand(0.4, 1) });
    if (m === "dust") Object.assign(p, { vx: rand(-4, 4), vy: rand(-3, 3), s: 2 + z * 6, a: rand(0.15, 0.55) });
    if (m === "fireflies") Object.assign(p, { vx: rand(-10, 10), vy: rand(-8, 8), s: 4 + z * 8, a: 0, ph: rand(0, 6) });
    if (m === "petals") Object.assign(p, { y: rand(-H, 0), vx: rand(-10, 10), vy: rand(18, 40) * (0.5 + z), s: 5 + z * 9, rot: rand(0, 6), vr: rand(-2, 2), a: 0.9 });
    if (m === "lanterns") Object.assign(p, { y: H + rand(0, H * 1.2), vx: rand(-4, 4), vy: -rand(10, 22) * (0.4 + z), s: 8 + z * 26, a: 0.9 });
    return p;
  }
  const counts = { embers: 26, dust: 26, fireflies: 16, petals: 14, lanterns: 44 };
  function setMode(m) {
    if (RM) return; if (m === mode) return; mode = m;
    const n = m ? Math.round(counts[m] * (small() ? 0.75 : 1)) : 0;
    list = Array.from({ length: n }, () => make(m)); kick();
  }
  function burst(x, y, n = 24, spread = 1) {
    if (RM || !cv) return; const r = cv.getBoundingClientRect(); x -= r.left; y -= r.top;
    for (let i = 0; i < n; i++) { const a = rand(0, Math.PI * 2), sp = rand(40, 220) * spread; bursts.push({ x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 60, life: 1, d: rand(0.6, 1.4), s: rand(2, 5) }); }
    kick();
  }
  function kick() { if (!running && !document.hidden) { running = true; last = performance.now(); raf = requestAnimationFrame(loop); } }
  let last = 0;
  function loop(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    cx.clearRect(0, 0, W, H);
    for (const p of list) {
      p.t += dt; p.x += p.vx * dt; p.y += p.vy * dt;
      const depthA = 0.35 + p.z * 0.65;
      if (mode === "embers") { p.vx += Math.sin(p.t * 2 + p.z * 9) * 6 * dt; if (p.y < -20) Object.assign(p, make("embers"), { y: H + 10 });
        const fl = 0.6 + 0.4 * Math.sin(p.t * 9 + p.z * 20); cx.globalAlpha = p.a * fl * depthA; const spr = p.z < 0.35 ? sprites.emberSoft : sprites.ember; cx.drawImage(spr, p.x - p.s, p.y - p.s, p.s * 2, p.s * 2); }
      else if (mode === "dust") { p.vx += Math.sin(p.t * 0.5 + p.z * 7) * 1.5 * dt; if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10; if (p.y < -10) p.y = H + 10; if (p.y > H + 10) p.y = -10;
        cx.globalAlpha = p.a * depthA * (0.6 + 0.4 * Math.sin(p.t * 0.8)); cx.drawImage(sprites.dust, p.x - p.s, p.y - p.s, p.s * 2, p.s * 2); }
      else if (mode === "fireflies") { p.vx += Math.sin(p.t * 0.9 + p.ph) * 8 * dt; p.vy += Math.cos(p.t * 0.7 + p.ph) * 8 * dt; p.vx *= 0.99; p.vy *= 0.99;
        if (p.x < -20 || p.x > W + 20 || p.y < -20 || p.y > H + 20) Object.assign(p, make("fireflies"));
        cx.globalAlpha = Math.max(0, Math.sin(p.t * 1.3 + p.ph)) * depthA; cx.drawImage(sprites.fly, p.x - p.s, p.y - p.s, p.s * 2, p.s * 2); }
      else if (mode === "petals") { p.rot += p.vr * dt; p.vx += Math.sin(p.t + p.z * 5) * 10 * dt; if (p.y > H + 20) Object.assign(p, make("petals"), { y: -20 });
        cx.save(); cx.globalAlpha = p.a * depthA; cx.translate(p.x, p.y); cx.rotate(p.rot); cx.scale(1, 0.55 + 0.45 * Math.sin(p.t * 3));
        cx.fillStyle = p.z > 0.5 ? "#f0a02a" : "#d9822a"; cx.beginPath(); cx.ellipse(0, 0, p.s, p.s * 0.6, 0, 0, Math.PI * 2); cx.fill(); cx.restore(); }
      else if (mode === "lanterns") { p.vx += Math.sin(p.t * 0.4 + p.z * 8) * 1.2 * dt; if (p.y < -60) Object.assign(p, make("lanterns"), { y: H + 40 });
        const sz = p.s, fl = 0.85 + 0.15 * Math.sin(p.t * 6 + p.z * 30);
        cx.globalAlpha = 0.5 * depthA * fl; cx.drawImage(sprites.glow, p.x - sz * 1.6, p.y - sz * 1.4, sz * 3.2, sz * 3.2);
        cx.globalAlpha = depthA;
        if (lanternImg.complete && lanternImg.naturalWidth) { const w = sz, hh = sz * (lanternImg.naturalHeight / lanternImg.naturalWidth); cx.drawImage(lanternImg, p.x - w / 2, p.y - hh / 2, w, hh); }
        else { cx.fillStyle = "rgba(255,190,100,.9)"; cx.fillRect(p.x - sz * 0.3, p.y - sz * 0.4, sz * 0.6, sz * 0.8); } }
    }
    for (let i = bursts.length - 1; i >= 0; i--) {
      const b = bursts[i]; b.life -= dt / b.d; if (b.life <= 0) { bursts.splice(i, 1); continue; }
      b.vy += 160 * dt; b.x += b.vx * dt; b.y += b.vy * dt; b.vx *= 0.98;
      cx.globalAlpha = b.life; cx.drawImage(sprites.spark, b.x - b.s * 2, b.y - b.s * 2, b.s * 4, b.s * 4);
    }
    cx.globalAlpha = 1;
    if ((list.length || bursts.length) && !document.hidden) raf = requestAnimationFrame(loop); else { running = false; cx.clearRect(0, 0, W, H); }
  }
  document.addEventListener("visibilitychange", () => { if (!document.hidden) kick(); });
  return { init, setMode, burst, resize };
})();

/* ==========================================================================
   Toasts & achievements
   ========================================================================== */
const ACH = {
  gate: { t: "The Gate Has Opened", p: "The sanctum yields to the worthy (and the persistent)." },
  party: { t: "Party Assembled", p: "Two heroes. One quest. Zero chance of a quiet wedding." },
  devoted: { t: "Devoted Guest", p: "Every quest accepted. The elders approve." },
  stars: { t: "Reader of Stars", p: "You traced the heavens. The date is written in light." },
  forged: { t: "Guild Card Forged", p: "Your name is now part of the legend." },
  legend: { t: "Legendary: Keeper of All Relics", p: "All seven relics recovered. A sealed message awaits." },
};
const Toasts = (() => {
  const q = []; let busy = false, root;
  function show({ small = "Achievement", title, line, icon }) { q.push({ small, title, line, icon }); if (!busy) next(); }
  async function next() {
    const it = q.shift(); if (!it) { busy = false; return; } busy = true;
    const medal = h("div", { class: "medal" });
    if (it.icon) medal.append(cutout(it.icon, "", "")); else medal.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 2l2.6 6.1 6.6.6-5 4.4 1.5 6.5L12 16.2 6.3 19.6l1.5-6.5-5-4.4 6.6-.6z"/></svg>';
    const el = h("div", { class: "toast", role: "status" }, medal, h("div", {}, h("small", {}, it.small), h("b", {}, it.title), it.line ? h("p", {}, it.line) : null));
    root.append(el); Audio.sfx.chime();
    if (MOTION) { gsap.fromTo(el, { x: -40, opacity: 0, scale: 0.96 }, { x: 0, opacity: 1, scale: 1, duration: 0.7, ease: "expo.out" }); }
    await wait(3800);
    if (MOTION) await gsap.to(el, { x: 30, opacity: 0, duration: 0.5, ease: "power2.in" });
    el.remove(); next();
  }
  return { init(r) { root = r; }, show };
})();
function achieve(id) {
  if (S.ach.includes(id)) return; S.ach.push(id); store.save();
  Toasts.show({ title: ACH[id].t, line: ACH[id].p });
}

/* ==========================================================================
   Build the page from CONFIG
   ========================================================================== */
const app = $("#app");
const world = $("#world");
const SCENES = {}; // id -> section element

function scene(id, opts = {}) {
  const sec = h("section", { class: "scene", id: "s-" + id, "data-scene": id, "data-veil": opts.veil || "mist", "aria-label": opts.label || id });
  if (opts.bg) {
    const bg = h("div", { class: "bg" }, sceneMedia(opts.bg, { eager: opts.eager }));
    bg.firstChild.style.setProperty("--d", (opts.depth || 10) + "px");
    sec.append(bg, h("div", { class: "shade" }));
    sec._bgKey = opts.bg;
  }
  SCENES[id] = sec; world.append(sec); return sec;
}

/* ---------- Relic layer (positions in % of the scene image) ---------- */
const relicEls = {};
function relicLayer(sceneId, host) {
  const items = CONFIG.relics.filter((r) => r.scene === sceneId);
  if (!items.length) return;
  const layer = h("div", { class: "rl", style: { position: "absolute", inset: "0", zIndex: 4, pointerEvents: "none" } });
  const box = h("div", { class: "stage", style: { pointerEvents: "none" } });
  layer.append(box); host.append(layer);
  items.forEach((r, i) => {
    const b = h("button", { class: "relic", "aria-label": "A glinting relic: " + r.name, style: { left: r.x + "%", top: r.y + "%", "--s": r.size + "px", "--r": (r.rot || 0) + "deg", "--dl": (i * 1.3) + "s", pointerEvents: "auto" } },
      cutout(r.img, "", r.name), h("span", { class: "glint" }));
    if (S.relics.includes(r.id)) b.classList.add("found");
    b.addEventListener("click", (e) => { e.stopPropagation(); collectRelic(r, b); });
    box.append(b); relicEls[r.id] = b;
  });
  const fit = () => coverBox(box, layer);
  requestAnimationFrame(fit); addEventListener("resize", fit);
}

function buildAll() {
  /* ----- Loading ----- */
  const L = $("#loading");
  L.prepend(h("div", { class: "bg" }, sceneMedia("loading-bg", { eager: true })), h("div", { class: "lamp" }));
  $(".prep", L).textContent = GUEST ? `Preparing the realm for ${GUEST}…` : "Preparing the realm…";
  $(".presents", L).innerHTML = `<b>${esc(CONFIG.brand.name)}</b>presents`;

  /* ----- Title ----- */
  const T = scene("title", { bg: "title-city", eager: true, label: "Title screen", depth: 14 });
  const tbg = $(".tilt", T);
  const tstage = h("div", { class: "stage" });
  tstage.append(h("div", { class: "rays" }));
  // waterfalls under the floating island (positions in % of the image)
  [[40, 23, 10], [41.4, 23.5, 13], [57.5, 23, 11], [60, 23.5, 14], [64, 23, 9]].forEach(([x, y, hgt]) => tstage.append(h("i", { class: "falls", style: { left: x + "%", top: y + "%", height: hgt + "%" } })));
  tstage.append(h("div", { class: "mist", style: { top: "46%" } }), h("div", { class: "mist", style: { top: "60%", animationDuration: "40s", opacity: ".4" } }));
  for (let i = 0; i < 4; i++) tstage.append(h("div", { class: "bird", html: '<svg viewBox="0 0 16 8"><path d="M0 4c3-3 5-3 8 0 3-3 5-3 8 0" fill="none" stroke="#1d1a1a" stroke-width="1.1"/></svg>' }));
  $(".kb", tbg).append(tstage);
  const fitT = () => coverBox(tstage, tbg); requestAnimationFrame(fitT); addEventListener("resize", fitT);
  const logo = h("h1", { class: "logo", "aria-label": CONFIG.game.title.join(" ") },
    h("span", { class: "l1 gold-text", "aria-hidden": "true" }, CONFIG.game.title[0]),
    h("span", { class: "metal", "aria-hidden": "true" }, CONFIG.game.title[1]),
    h("span", { class: "molten", "aria-hidden": "true" }, CONFIG.game.title[1]));
  T.append(h("div", { class: "title-wrap content" }, logo));
  const menu = h("nav", { class: "menu", "aria-label": "Main menu" },
    h("p", { class: "subtitle" }, CONFIG.game.subtitle, h("em", {}, `${CONFIG.couple.bride.first} & ${CONFIG.couple.groom.first}`)),
    h("button", { class: "btn primary", id: "mBegin" }, "Begin Quest"),
    S.lastScene && S.lastScene !== "title" ? h("button", { class: "btn", id: "mContinue" }, "Continue") : null,
    h("button", { class: "btn", id: "mSettings" }, "Settings"),
    h("button", { class: "btn", id: "mCredits" }, "Credits"));
  T.append(menu);
  relicLayer("title", T);

  /* ----- Prologue ----- */
  const P = scene("prologue", { bg: "prologue-library", label: "Prologue: the palm-leaf chronicle", veil: "dark" });
  P.append(h("div", { class: "chapter content" }, h("span", { class: "label" }, "Prologue"), h("h2", { class: "gold-text" }, "The Palm-Leaf Chronicle")));
  P.append(h("div", { class: "star-pair", "aria-hidden": "true" }, h("i"), h("i")));
  const leaves = h("div", { class: "leaves content" });
  CONFIG.lore.forEach((line, i) => leaves.append(h("div", { class: "leaf" }, h("div", { class: "lbg", "data-i": i }), h("p", { html: fill(line) }))));
  P.append(leaves);
  // palm-leaf texture (falls back to a coded leaf)
  const leafImg = new Image();
  leafImg.onload = () => $$(".lbg", leaves).forEach((d) => (d.style.backgroundImage = `url(${leafImg.src})`));
  leafImg.onerror = () => $$(".lbg", leaves).forEach((d) => d.classList.add("cut-fb"));
  leafImg.src = CONFIG.assets.cut("palm-leaf-scroll");
  relicLayer("prologue", P);

  /* ----- Heroes ----- */
  const HS = scene("heroes", { label: "Choose your heroes", veil: "light" });
  const tabs = h("div", { class: "hero-tabs", role: "tablist", "aria-label": "Heroes" });
  CONFIG.heroes.forEach((hero, i) => {
    const panel = h("div", { class: "hero" + (i === 0 ? " active" : ""), id: "hero-" + hero.id, role: "tabpanel", "aria-label": hero.name });
    const bg = h("div", { class: "bg" }, sceneMedia(hero.scene, {}));
    panel.append(bg, h("div", { class: "dapple" }), h("div", { class: "shade" }));
    const stats = h("div", { class: "stats" }, hero.stats.map(([n, v]) => h("div", { class: "stat" }, h("span", {}, n), h("output", { "data-v": v }, "0"), h("div", { class: "meter", role: "meter", "aria-valuenow": v, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": n }, h("i", { style: { "--v": v } })))));
    const tip = h("p", { class: "equip-tip", "aria-live": "polite" });
    const eq = h("div", { class: "equip" }, hero.equipment.map(([n, d]) => h("button", { onclick: () => { tip.textContent = d; Audio.sfx.tap(); } }, h("small", {}, "Equipment"), n)));
    panel.append(h("div", { class: "hero-info content" },
      h("span", { class: "label" }, hero.house),
      h("h3", { class: "hero-name gold-text" }, hero.name),
      h("p", { class: "hero-title" }, hero.title),
      h("span", { class: "hero-class" }, "Class · " + hero.cls),
      stats, h("p", { class: "ability" }, h("b", {}, "Special ability"), hero.ability), eq, tip));
    HS.append(panel);
    tabs.append(h("button", { role: "tab", "aria-selected": i === 0 ? "true" : "false", "aria-controls": "hero-" + hero.id, onclick: () => showHero(i) }, hero.name));
  });
  const split = h("div", { class: "hero-split", "aria-hidden": "true" }, h("div", {}, h("img", { src: CONFIG.assets.scene(CONFIG.heroes[0].scene) + ".jpg", alt: "" })), h("div", {}, h("img", { src: CONFIG.assets.scene(CONFIG.heroes[1].scene) + ".jpg", alt: "" })));
  HS.append(tabs, split, h("div", { class: "hero-nav" },
    h("button", { class: "btn ghost", id: "heroSwap", "aria-label": "Show the other hero" }, "⟷ Swipe"),
    h("button", { class: "btn primary pulse", id: "heroGo" }, "Both heroes chosen")));
  relicLayer("heroes", HS);

  /* ----- Gate ----- */
  const G = scene("gate", { label: "The Sanctum Gate", veil: "dark" });
  const gv = h("div", { class: "gate-view" });
  const gbg = h("div", { class: "bg" }, sceneMedia("sanctum-door", {}));
  gv.append(gbg, h("div", { class: "shade" }));
  G.append(gv);
  buildLock(gv, gbg);
  relicLayer("gate", gv);
  const pv = h("div", { class: "plate-view", id: "plate" }, h("div", { class: "bg" }));
  const plate = h("div", { class: "plate", role: "article", "aria-label": "The invitation" }, cutout("copper-plate", "", ""),
    h("p", { class: "eng deva", lang: "sa" }, CONFIG.blessing.line),
    h("p", { class: "eng bless-sub" }, CONFIG.blessing.sub),
    h("p", { class: "eng inv" }, CONFIG.invitation),
    h("p", { class: "eng names" }, `${CONFIG.couple.bride.first} & ${CONFIG.couple.groom.first}`),
    h("p", { class: "eng parents" }, `Daughter of ${CONFIG.couple.bride.parents}, ${CONFIG.couple.bride.city}`),
    h("p", { class: "eng parents" }, `Son of ${CONFIG.couple.groom.parents}, ${CONFIG.couple.groom.city}`),
    h("p", { class: "eng pdate" }, CONFIG.weddingDateLabel),
    h("p", { class: "eng parents" }, CONFIG.venueRegion));
  pv.append(plate, h("i", { class: "spark" }));
  G.append(pv);

  /* ----- Map ----- */
  const M = scene("map", { label: "The world map of quests", veil: "light" });
  buildMap(M);

  /* ----- Stars / countdown ----- */
  const ST = scene("stars", { bg: "star-sky", label: "When the stars align", veil: "dark" });
  ST.append(h("div", { class: "chapter content" }, h("span", { class: "label" }, "Chapter V"), h("h2", { class: "gold-text" }, "When the Stars Align")));
  const astro = h("div", { class: "astro", "aria-hidden": "true" },
    cutout("astrolabe-ring", "a-ring", ""), cutout("astrolabe", "a-base", ""), cutout("astrolabe-ring", "a-ring2", ""),
    h("div", { class: "shine" }));
  astro.append(ticksSVG());
  ST.append(astro);
  const count = h("div", { class: "count stone inlay", role: "timer", "aria-live": "off" }, corners(),
    ...["Days", "Hours", "Minutes", "Seconds"].map((u) => h("div", {}, h("b", { class: "gold-text", "data-u": u }, "00"), h("span", {}, u))));
  ST.append(count, h("p", { class: "until" }, "Until the stars align"));
  ST.append(buildConstellation());
  relicLayer("stars", ST);

  /* ----- RSVP ----- */
  const R = scene("rsvp", { bg: "quest-sangeet", label: "Join the party: RSVP", veil: "mist" });
  R.append(h("div", { class: "banner l" }, cutout("banner-cloth", "", "")), h("div", { class: "banner r" }, cutout("banner-cloth", "", "")));
  R.append(h("div", { class: "chapter content" }, h("span", { class: "label" }, "Chapter VI"), h("h2", { class: "gold-text" }, "Join the Party")));
  R.append(buildRSVP());
  relicLayer("rsvp", R);

  /* ----- Finale ----- */
  const F = scene("finale", { bg: "quest-wedding", label: "The Sacred Union", veil: "dark" });
  F.append(h("div", { class: "f-stars", "aria-hidden": "true" }, h("i", { style: { left: "14%" } }), h("i", { style: { left: "86%" } }), h("i", { class: "bloom" })));
  F.append(h("div", { class: "f-text content" },
    h("p", { class: "vow" }, CONFIG.finale.vow.map((v) => h("span", {}, v))),
    h("p", { class: "fnames gold-text" }, `${CONFIG.couple.bride.first} & ${CONFIG.couple.groom.first}`),
    h("p", { class: "fdate" }, CONFIG.weddingDateLabel)));

  /* ----- Credits ----- */
  const C = scene("credits", { label: "Credits", veil: "dark" });
  C.append(h("div", { class: "roll" }, CONFIG.credits.map((c) => h("div", { class: "cr" + (c.big ? " big" : "") },
    c.k ? h("small", {}, c.k) : null, h("b", { class: c.big ? "gold-text" : "", html: fill(c.v, "You, dear traveller") }), c.p ? h("p", {}, c.p) : null))));
  const post = h("section", { id: "s-post", "aria-label": "Post-credits" },
    h("div", { class: "teaser" }, h("small", {}, "Post-credits"), h("p", {}, CONFIG.postCredits.lead), h("h3", { class: "gold-text" }, CONFIG.postCredits.title), h("p", {}, CONFIG.postCredits.tag)),
    h("p", { class: "atelier" }, "Crafted with love by ", CONFIG.brand.url ? h("a", { href: CONFIG.brand.url }, CONFIG.brand.name) : CONFIG.brand.name));
  world.append(post);

  buildHUD(); buildPanels(); buildQuestOverlay(); buildLegend();
  if (DEBUG_RELICS) document.body.classList.add("debug-relics");
}

/* ---------- Seconds ring for the astrolabe ---------- */
function ticksSVG() {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg"); svg.setAttribute("viewBox", "-100 -100 200 200"); svg.setAttribute("class", "ticks");
  const g = document.createElementNS(ns, "g"); g.setAttribute("id", "secRing");
  for (let i = 0; i < 60; i++) {
    const l = document.createElementNS(ns, "line"); const a = (i / 60) * Math.PI * 2; const r1 = i % 5 ? 95 : 91;
    l.setAttribute("x1", Math.sin(a) * r1); l.setAttribute("y1", -Math.cos(a) * r1); l.setAttribute("x2", Math.sin(a) * 99); l.setAttribute("y2", -Math.cos(a) * 99);
    l.setAttribute("stroke", i === 0 ? "#fff3cc" : "rgba(242,220,154,.6)"); l.setAttribute("stroke-width", i === 0 ? 2 : i % 5 ? 0.6 : 1.2); g.append(l);
  }
  svg.append(g); return svg;
}

/* ==========================================================================
   The Sanctum Gate: three-ring stone lock
   ========================================================================== */
const GLYPHS = {
  lotus: '<path class="glyph" d="M0-7c2.6 2.4 3 5.4 0 8.4-3-3-2.6-6 0-8.4zM-1 1.6C-4.4.6-7-1.6-7.6-4.6c3 .1 5.3 1.6 6.6 4.6zM1 1.6c3.4-1 6-3.2 6.6-6.2-3 .1-5.3 1.6-6.6 4.6zM-7 3.4h14c-1.6 2.6-4.4 3.8-7 3.8s-5.4-1.2-7-3.8z"/>',
  conch: '<path class="glyph-stroke" d="M-5 6c-3-3-2-9 3-11 4-1.6 8 1 7.6 5-.4 3.4-4 4.6-6 3-1.6-1.4-.8-4 1.2-4"/><path class="glyph-stroke" d="M-5 6l9 0"/>',
  sun: '<circle class="glyph" r="3.4"/><g class="glyph-stroke"><path d="M0-8v2.4M0 5.6V8M-8 0h2.4M5.6 0H8M-5.7-5.7l1.7 1.7M4 4l1.7 1.7M-5.7 5.7l1.7-1.7M4-4l1.7-1.7"/></g>',
  moon: '<path class="glyph" d="M2.6-7.4A7.6 7.6 0 1 0 6.8 4 6 6 0 1 1 2.6-7.4z"/>',
  star: '<path class="glyph" d="M0-8l1.8 6.2L8 0 1.8 1.8 0 8-1.8 1.8-8 0-1.8-1.8z"/>',
  lamp: '<path class="glyph" d="M0-8c1.8 2.4 2.2 4.4 0 6.4-2.2-2-1.8-4 0-6.4zM-8 1h16c-1 3.6-4.4 5.6-8 5.6S-7 4.6-8 1z"/>',
  K: '<text class="glyph" text-anchor="middle" dominant-baseline="central" font-family="Cinzel, serif" font-weight="700" font-size="15">K</text>',
  S: '<text class="glyph" text-anchor="middle" dominant-baseline="central" font-family="Cinzel, serif" font-weight="700" font-size="15">S</text>',
};
const LOCK = {
  rings: [
    { r0: 72, r1: 98, glyphs: ["K", "sun", "conch", "moon", "lamp", "star", "lotus", "S"], target: "K" },
    { r0: 46, r1: 72, glyphs: ["moon", "star", "lamp", "conch", "sun", "lotus", "K", "S"], target: "star" },
    { r0: 22, r1: 46, glyphs: ["lamp", "conch", "S", "sun", "moon", "K", "star", "lotus"], target: "S" },
  ],
  steps: [] , // current rotation step (0..7) per ring
  solved: false,
};
function annulus(r0, r1) { return `M0 ${-r1}A${r1} ${r1} 0 1 1 0 ${r1}A${r1} ${r1} 0 1 1 0 ${-r1}ZM0 ${-r0}A${r0} ${r0} 0 1 0 0 ${r0}A${r0} ${r0} 0 1 0 0 ${-r0}Z`; }
function buildLock(gv, gbg) {
  const wrap = h("div", { class: "lock-wrap", id: "lockWrap" });
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "-110 -110 220 220"); svg.setAttribute("class", "lock"); svg.setAttribute("role", "group"); svg.setAttribute("aria-label", "Stone lock with three rotating rings");
  let inner = `<defs>
    <radialGradient id="stoneGrad" cx="0" cy="0" r="110" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6d675e"/><stop offset=".7" stop-color="#4a4640"/><stop offset="1" stop-color="#2f2c28"/></radialGradient>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="carve"><feOffset dy=".8"/><feGaussianBlur stdDeviation=".5"/><feComposite operator="out" in="SourceGraphic"/><feComponentTransfer><feFuncA type="linear" slope=".9"/></feComponentTransfer><feFlood flood-color="#000"/><feComposite operator="in" in2="SourceGraphic"/><feComposite operator="over" in2="SourceGraphic"/></filter>
  </defs>`;
  LOCK.rings.forEach((ring, ri) => {
    let g = `<g class="ring" data-ring="${ri}"><path class="band" fill-rule="evenodd" d="${annulus(ring.r0, ring.r1)}" opacity=".93"/>`;
    g += `<circle r="${ring.r1 - 0.8}" fill="none" stroke="rgba(255,255,255,.08)"/><circle r="${ring.r0 + 0.8}" fill="none" stroke="rgba(0,0,0,.5)"/>`;
    ring.glyphs.forEach((gl, i) => { const a = i * 45, rm = (ring.r0 + ring.r1) / 2; g += `<g transform="rotate(${a}) translate(0 ${-rm})" filter="url(#carve)">${GLYPHS[gl]}</g>`; });
    for (let i = 0; i < 8; i++) g += `<line transform="rotate(${i * 45 + 22.5})" y1="${-ring.r1 + 2}" y2="${-ring.r0 - 2}" stroke="rgba(0,0,0,.35)" stroke-width=".8"/>`;
    g += `</g>`; inner += g;
  });
  inner += `<circle r="22" fill="url(#stoneGrad)" stroke="rgba(242,220,154,.5)"/><g transform="scale(1.35)" filter="url(#carve)">${GLYPHS.lotus.replace('class="glyph"', 'class="glyph" fill="#e8cf93"')}</g>`;
  inner += `<path d="M0 -106 l-6 -9 h12z" fill="#e8cf93" stroke="#5a4520"/>`; // notch marker at the top
  svg.innerHTML = inner;
  wrap.append(cutout("stone-disc", "disc", ""), svg);
  // initial scrambled rotations (never already solved)
  LOCK.steps = [3, 5, 2];
  const ringEls = $$(".ring", svg);
  ringEls.forEach((el, ri) => { el.style.transformOrigin = "0 0"; el.style.transformBox = "view-box"; setRing(ri, LOCK.steps[ri], false, ringEls); });
  gv.append(wrap);
  gv.append(h("div", { class: "lock-hint content" }, h("span", { class: "label" }, "Chapter III · The Sanctum Gate"),
    h("p", {}, "Turn the rings so K, ✦ and S rest beneath the golden notch, with the lotus at the heart.")));
  const ctrls = h("div", { class: "lock-ctrls", "aria-label": "Ring controls" });
  ["Outer", "Middle", "Inner"].forEach((n, ri) => ctrls.append(h("div", { class: "grp" }, h("span", {}, n), h("div", {},
    h("button", { "aria-label": `Turn ${n.toLowerCase()} ring left`, onclick: () => turn(ri, -1) }, "⟲"),
    h("button", { "aria-label": `Turn ${n.toLowerCase()} ring right`, onclick: () => turn(ri, 1) }, "⟳")))));
  gv.append(ctrls, h("button", { class: "btn ghost skip", id: "gateSkip" }, "Skip ›"));
  // lamp flames over the two lamps in the image
  const st = h("div", { class: "stage", style: { pointerEvents: "none" } }, h("i", { class: "flame", style: { left: "14%", top: "56%" } }), h("i", { class: "flame", style: { left: "85.5%", top: "56%", animationDelay: "-1.3s" } }));
  $(".kb", gbg).append(st);
  const fit = () => coverBox(st, $(".tilt", gbg)); requestAnimationFrame(fit); addEventListener("resize", fit);

  function turn(ri, dir) { if (LOCK.solved) return; LOCK.steps[ri] = (LOCK.steps[ri] + dir + 8) % 8; setRing(ri, LOCK.steps[ri], true, ringEls); Audio.sfx.grind(); setTimeout(() => Audio.sfx.click(), 180); check(ringEls); }
  // Drag to rotate (GSAP Draggable), snapping heavily to the 8 notches
  if (HAS_GSAP && window.Draggable) {
    ringEls.forEach((el, ri) => {
      Draggable.create(el, { type: "rotation", allowContextMenu: true,
        onPress() { gsap.killTweensOf(el); },
        onDrag() { if (Math.abs(this.rotation - (this._lastR || 0)) > 20) { Audio.sfx.grind(); this._lastR = this.rotation; } },
        onRelease() {
          const step = ((Math.round(-this.rotation / 45) % 8) + 8) % 8; // ring step = which glyph is at top
          LOCK.steps[ri] = step; setRing(ri, step, true, ringEls, this.rotation); Audio.sfx.click(); check(ringEls);
        } });
    });
  }
  $("#gateSkip", gv).addEventListener("click", () => { Audio.sfx.tap(); solveGate(ringEls, true); });
}
function setRing(ri, step, animate, ringEls, from) {
  const el = ringEls[ri];
  // nearest equivalent angle to current, so it never spins the long way round
  const cur = from != null ? from : (gsap && gsap.getProperty ? gsap.getProperty(el, "rotation") : 0) || 0;
  let target = -step * 45; while (target - cur > 180) target -= 360; while (target - cur < -180) target += 360;
  if (HAS_GSAP) gsap.to(el, { rotation: target, duration: animate && MOTION ? 0.9 : 0, ease: "power3.inOut", svgOrigin: "0 0" });
  else el.setAttribute("transform", `rotate(${target})`);
  const ok = LOCK.rings[ri].glyphs[step] === LOCK.rings[ri].target;
  el.classList.toggle("ok", ok);
}
function check(ringEls) {
  if (LOCK.solved) return;
  const all = LOCK.rings.every((r, i) => r.glyphs[LOCK.steps[i]] === r.target);
  if (all) setTimeout(() => solveGate(ringEls, false), 700);
}
async function solveGate(ringEls, skipped) {
  if (LOCK.solved) return; LOCK.solved = true;
  ringEls = ringEls || $$("#lockWrap .ring");
  LOCK.rings.forEach((r, i) => { LOCK.steps[i] = r.glyphs.indexOf(r.target); setRing(i, LOCK.steps[i], true, ringEls); });
  await openGate(ringEls, skipped);
}
async function openGate(ringEls, quick) {
  const gv = $("#s-gate .gate-view"); const wrap = $("#lockWrap");
  hud(false); Audio.setMood("epic");
  if (!MOTION) { ringEls.forEach((r) => r.classList.add("lit")); wrap.style.opacity = 0.2; gv.classList.add("opened"); finishGate(); return; }
  for (const r of ringEls) { r.classList.add("lit"); Audio.sfx.bell(659.25 + ringEls.indexOf(r) * 120); await wait(quick ? 160 : 380); }
  const rect = wrap.getBoundingClientRect(); Particles.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 40, 1.2);
  Audio.sfx.door();
  // split the door image into two leaves that swing inward, with light pouring out
  const tilt = $(".tilt", gv); const box = tilt.getBoundingClientRect(); const gvR = gv.getBoundingClientRect();
  const door = { x0: 0.255, x1: 0.765, y0: 0.29, y1: 0.8 }; // door area in % of image
  const imgBox = coverRect(box);
  const dx0 = imgBox.left + imgBox.w * door.x0 - gvR.left, dx1 = imgBox.left + imgBox.w * door.x1 - gvR.left;
  const dy0 = imgBox.top + imgBox.h * door.y0 - gvR.top, dy1 = imgBox.top + imgBox.h * door.y1 - gvR.top;
  const mid = (dx0 + dx1) / 2;
  const light = h("div", { class: "door-light", style: { left: dx0 + "px", top: dy0 + "px", width: dx1 - dx0 + "px", height: dy1 - dy0 + "px" } });
  const src = $(".tilt img", gv)?.currentSrc || CONFIG.assets.scene("sanctum-door") + ".jpg";
  const mkLeaf = (left, width, originX) => {
    const leaf = h("div", { class: "door-leaf", style: { left: left + "px", top: dy0 + "px", width: width + "px", height: dy1 - dy0 + "px", transformOrigin: originX } });
    const im = h("img", { src, alt: "", style: { left: imgBox.left - gvR.left - left + "px", top: imgBox.top - gvR.top - dy0 + "px", width: imgBox.w + "px", height: imgBox.h + "px" } });
    leaf.append(im); return leaf;
  };
  const L = mkLeaf(dx0, mid - dx0, "0% 50%"), R = mkLeaf(mid, dx1 - mid, "100% 50%");
  const persp = h("div", { style: { position: "absolute", inset: 0, zIndex: 3, perspective: "900px", pointerEvents: "none" } }, light, L, R);
  gv.append(persp);
  gsap.to(wrap, { opacity: 0, scale: 0.9, duration: 1.2, ease: "power2.in" });
  gsap.to(light, { opacity: 1, duration: 1.5, ease: "power2.out" });
  gsap.to(L, { rotationY: 78, duration: 3.2, ease: "power3.inOut" });
  gsap.to(R, { rotationY: -78, duration: 3.2, ease: "power3.inOut" });
  shake(gv, 2.6);
  Particles.setMode("dust");
  await wait(2600);
  // push the camera through the light
  const flash = $("#flash");
  gsap.to(gv.querySelector(".bg"), { scale: 2.2, duration: 1.6, ease: "power3.in", transformOrigin: `${(mid / gvR.width) * 100}% ${((dy0 + dy1) / 2 / gvR.height) * 100}%` });
  gsap.to(persp, { scale: 2.2, duration: 1.6, ease: "power3.in", transformOrigin: `${(mid / gvR.width) * 100}% ${((dy0 + dy1) / 2 / gvR.height) * 100}%` });
  await gsap.to(flash, { opacity: 1, duration: 1.4, ease: "power2.in" });
  gv.classList.add("opened");
  scrollToEl($("#plate"), true);
  await wait(250);
  gsap.to(flash, { opacity: 0, duration: 1.6, ease: "power2.out" });
  Audio.setMood("calm");
  finishGate();
}
function finishGate() {
  if (!S.gateOpen) { S.gateOpen = true; store.save(); }
  achieve("gate"); hud(true); engravePlate();
}
function coverRect(box) { const w = Math.max(box.width, box.height * AR), hh = Math.max(box.height, box.width / AR); return { left: box.left + (box.width - w) / 2, top: box.top + (box.height - hh) / 2, w, h: hh }; }
function shake(el, dur = 1) { if (!MOTION) return; gsap.fromTo(el, { x: 0 }, { x: "random(-3,3)", y: "random(-2,2)", duration: 0.06, repeat: Math.round(dur / 0.06), yoyo: true, ease: "none", onComplete: () => gsap.set(el, { x: 0, y: 0 }) }); }

let plateDone = false;
async function engravePlate() {
  if (plateDone) return; plateDone = true;
  const lines = $$("#plate .eng"); const spark = $("#plate .spark"); const pv = $("#plate");
  if (!MOTION) { lines.forEach((l) => l.classList.add("done")); return; }
  for (const l of lines) {
    const r = l.getBoundingClientRect(), pr = pv.getBoundingClientRect();
    const dur = Math.min(2.2, 0.5 + l.textContent.length / 90);
    gsap.set(spark, { opacity: 1, x: r.left - pr.left, y: r.top - pr.top + r.height / 2 });
    gsap.to(spark, { x: r.right - pr.left, duration: dur, ease: "none" });
    Audio.sfx.grind();
    await gsap.fromTo(l, { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: dur, ease: "none" });
    l.classList.add("done");
  }
  gsap.to(spark, { opacity: 0, duration: 0.4 });
  Audio.sfx.chime();
}

/* ==========================================================================
   World map
   ========================================================================== */
const MapState = { scale: 1, minScale: 1, maxScale: 2.6, drag: null };
function buildMap(M) {
  const view = h("div", { class: "map-view", id: "mapView" });
  const canvas = h("div", { class: "map-canvas", id: "mapCanvas" });
  const base = CONFIG.assets.scene("world-map");
  const pic = h("picture", {}, h("source", { srcset: base + ".webp", type: "image/webp" }));
  const img = h("img", { src: base + ".jpg", alt: "An aged parchment map of the realm", loading: "lazy", draggable: "false" });
  img.addEventListener("error", () => { pic.remove(); canvas.classList.add("fallback-map"); }, { once: true });
  pic.append(img); canvas.append(pic);
  // trail through the quest locations
  const pts = CONFIG.quests.map((q) => q.map);
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length; i++) { const [x0, y0] = pts[i - 1], [x1, y1] = pts[i]; const cx = (x0 + x1) / 2 + (i % 2 ? 10 : -10); d += ` Q${cx} ${(y0 + y1) / 2} ${x1} ${y1}`; }
  canvas.insertAdjacentHTML("beforeend", `<svg class="map-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
    <defs><mask id="trailMask"><path id="trailReveal" d="${d}" fill="none" stroke="#fff" stroke-width="6" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1"/></mask></defs>
    <path class="trail" d="${d}" mask="url(#trailMask)" vector-effect="non-scaling-stroke"/></svg>`);
  CONFIG.quests.forEach((q) => {
    const pin = h("button", { class: "pin" + (q.sacred ? " sacred" : "") + (S.quests.includes(q.id) ? " done" : ""), style: { left: q.map[0] + "%", top: q.map[1] + "%" }, "aria-label": `${q.num}: ${q.name}, ${q.date}`, "data-q": q.id }, h("i"));
    pin.addEventListener("click", (e) => { if (MapState.moved) return; openQuest(q, pin); });
    canvas.append(pin, h("span", { class: "pin-label", style: { left: q.map[0] + "%", top: `calc(${q.map[1]}% + 20px)` } }, h("small", {}, q.num), q.name));
  });
  view.append(canvas); M.append(view);
  M.append(h("div", { class: "chapter content" }, h("span", { class: "label" }, "Chapter IV"), h("h2", { class: "gold-text" }, "The Realm of Quests")));
  M.append(h("p", { class: "map-hint" }, "Drag to explore. Tap a brass pin to travel."));
  M.append(h("div", { class: "map-ctrls" },
    h("button", { class: "hbtn", "aria-label": "Zoom in", onclick: () => zoomMap(1.35) }, h("span", { html: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>' })),
    h("button", { class: "hbtn", "aria-label": "Zoom out", onclick: () => zoomMap(1 / 1.35) }, h("span", { html: '<svg viewBox="0 0 24 24"><path d="M5 12h14"/></svg>' }))));
  relicLayer("map", M);
}
function layoutMap() {
  const view = $("#mapView"), canvas = $("#mapCanvas"); if (!view) return;
  const W = view.clientWidth, H = view.clientHeight;
  const ch = H, cw = Math.max(W * 1.25, ch * AR); // a little wider than the screen so it pans
  canvas.style.width = cw + "px"; canvas.style.height = ch + "px";
  MapState.base = { cw, ch, W, H };
  applyMap(MapState.x ?? -(cw - W) / 2, MapState.y ?? 0, MapState.scale);
}
function mapBounds(s) { const { cw, ch, W, H } = MapState.base; return { minX: Math.min(0, W - cw * s), maxX: 0, minY: Math.min(0, H - ch * s), maxY: 0 }; }
function applyMap(x, y, s) {
  const b = mapBounds(s); MapState.x = clamp(x, b.minX, b.maxX); MapState.y = clamp(y, b.minY, b.maxY); MapState.scale = s;
  const c = $("#mapCanvas");
  if (HAS_GSAP) gsap.set(c, { x: MapState.x, y: MapState.y, scale: s, transformOrigin: "0 0" }); else c.style.transform = `translate(${MapState.x}px,${MapState.y}px) scale(${s})`;
  $("#mapView").classList.toggle("zoomed", s > 1.05);
  if (MapState.drag) { MapState.drag.vars.type = s > 1.05 ? "x,y" : "x"; MapState.drag.applyBounds(dragBounds()); }
  $$(".pin, .pin-label", c).forEach((p) => (p.style.scale = String(1 / Math.sqrt(s))));
}
function dragBounds() { const b = mapBounds(MapState.scale); return { minX: b.minX, maxX: b.maxX, minY: b.minY, maxY: b.maxY }; }
function zoomMap(f, cxp, cyp) {
  const { W, H } = MapState.base; const s0 = MapState.scale, s1 = clamp(s0 * f, MapState.minScale, MapState.maxScale);
  const px = cxp ?? W / 2, py = cyp ?? H / 2;
  const x = px - ((px - MapState.x) * s1) / s0, y = py - ((py - MapState.y) * s1) / s0;
  if (MapState.drag) MapState.drag.kill(), (MapState.drag = null);
  applyMap(x, y, s1); initMapDrag();
  Audio.sfx.rustle();
}
function initMapDrag() {
  const c = $("#mapCanvas"); if (!HAS_GSAP || !window.Draggable || !c) return;
  if (MapState.drag) return;
  const zoomed = MapState.scale > 1.05;
  MapState.drag = Draggable.create(c, { type: zoomed ? "x,y" : "x", bounds: dragBounds(), allowNativeTouchScrolling: !zoomed, edgeResistance: 0.85, dragClickables: true, minimumMovement: 6,
    onPress() { MapState.moved = false; }, onDrag() { MapState.moved = true; MapState.x = this.x; MapState.y = this.y; },
    onRelease() { setTimeout(() => (MapState.moved = false), 50); } })[0];
  // two-finger pinch zoom
  const view = $("#mapView"); let pinch = null;
  if (view._pinch) return; view._pinch = true;
  view.addEventListener("touchstart", (e) => { if (e.touches.length === 2) { const [a, b] = e.touches; pinch = { d: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY), s: MapState.scale }; MapState.drag && MapState.drag.disable(); } }, { passive: true });
  view.addEventListener("touchmove", (e) => { if (pinch && e.touches.length === 2) { e.preventDefault(); const [a, b] = e.touches; const d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY); const r = view.getBoundingClientRect(); const cxp = (a.clientX + b.clientX) / 2 - r.left, cyp = (a.clientY + b.clientY) / 2 - r.top; const target = clamp(pinch.s * (d / pinch.d), MapState.minScale, MapState.maxScale); const s0 = MapState.scale; applyMap(cxp - ((cxp - MapState.x) * target) / s0, cyp - ((cyp - MapState.y) * target) / s0, target); } }, { passive: false });
  view.addEventListener("touchend", (e) => { if (pinch && e.touches.length < 2) { pinch = null; if (MapState.drag) { MapState.drag.kill(); MapState.drag = null; } initMapDrag(); } });
}

/* ---------- Quest overlay: fly into a location ---------- */
function buildQuestOverlay() {
  const ov = h("div", { class: "ff", id: "quest", role: "dialog", "aria-modal": "true", "aria-labelledby": "qTitle" });
  ov.append(h("div", { class: "qbg" }), h("div", { class: "shade" }), h("button", { class: "btn ghost qback", id: "qBack" }, "‹ Back to map"));
  ov.append(h("div", { class: "qcard stone inlay", id: "qCard" }));
  app.append(ov);
  $("#qBack").addEventListener("click", closeQuest);
}
let currentQuest = null;
async function openQuest(q, pin) {
  currentQuest = q; Audio.sfx.whoosh(); hud(false);
  const ov = $("#quest"), qbg = $(".qbg", ov), card = $("#qCard");
  qbg.innerHTML = ""; const media = sceneMedia(q.scene, { eager: true }); qbg.append(media);
  if (media._video) media._video.play().catch(() => {});
  // relics hidden inside quest scenes
  $$(".rl", ov).forEach((x) => x.remove()); relicLayer("quest:" + q.id, ov);
  card.className = "qcard stone inlay" + (q.sacred ? " sacred" : "");
  const accepted = S.quests.includes(q.id);
  card.innerHTML = "";
  card.append(...[corners(), h("span", { class: "label" }, q.num), h("h3", { id: "qTitle", class: "gold-text" }, q.name), h("p", { class: "alias" }, q.alias),
    q.sacred ? h("p", { class: "verse" }, q.verse) : null,
    h("dl", { class: "qmeta" }, h("dt", {}, "Date"), h("dd", {}, q.date), h("dt", {}, "Time"), h("dd", {}, q.time + " IST"), h("dt", {}, "Venue"), h("dd", {}, `${q.venue}, ${CONFIG.venueRegion}`), h("dt", {}, "Attire"), h("dd", {}, q.attire),
      q.reward ? [h("dt", {}, "Reward"), h("dd", {}, q.reward)] : null),
    h("div", { class: "qacts" },
      h("a", { class: "btn small", href: CONFIG.mapsUrl, target: "_blank", rel: "noopener" }, "View location"),
      h("button", { class: "btn small", onclick: () => downloadICS(q) }, "Add to calendar"),
      h("button", { class: "btn primary", id: "qAccept", disabled: accepted, onclick: () => acceptQuest(q) }, accepted ? (q.sacred ? "We will see you there" : "Quest accepted") : (q.sacred ? "I will be there" : "Accept Quest"))),
    h("div", { class: "stamp", html: stampSVG(q.sacred) })].filter(Boolean));
  ov.classList.add("open");
  if (q.sacred) Audio.setMood("sacred");
  Particles.setMode(q.id === "haldi" ? "petals" : q.id === "sangeet" ? "embers" : q.id === "wedding" ? "dust" : q.id === "reception" ? "fireflies" : "dust");
  if (MOTION) {
    const r = pin ? pin.getBoundingClientRect() : null, o = ov.getBoundingClientRect();
    const ox = r ? ((r.left + r.width / 2 - o.left) / o.width) * 100 : 50, oy = r ? ((r.top + r.height / 2 - o.top) / o.height) * 100 : 50;
    gsap.fromTo(ov, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    gsap.fromTo(qbg, { scale: 0.18, opacity: 0, filter: "blur(10px) brightness(1.8)", transformOrigin: `${ox}% ${oy}%` }, { scale: 1, opacity: 1, filter: "blur(0px) brightness(1)", duration: 1.5, ease: "expo.inOut" });
    gsap.fromTo(card, { y: 120, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, delay: 0.9, ease: "expo.out" });
  }
  lenis && lenis.stop();
  $("#qBack").focus({ preventScroll: true });
}
async function closeQuest() {
  const ov = $("#quest"); Audio.sfx.whoosh();
  if (MOTION) { gsap.to($("#qCard"), { y: 120, opacity: 0, duration: 0.5, ease: "power2.in" }); await gsap.to($(".qbg", ov), { scale: 0.3, opacity: 0, filter: "blur(10px)", duration: 0.9, ease: "expo.in" }); }
  ov.classList.remove("open"); $(".qbg", ov).innerHTML = "";
  lenis && lenis.start(); hud(true); Audio.setMood("rhythm"); Particles.setMode(null);
  const pin = currentQuest && $(`.pin[data-q="${currentQuest.id}"]`); pin && pin.focus({ preventScroll: true });
}
function stampSVG(sacred) {
  return `<svg viewBox="0 0 100 100"><defs><radialGradient id="wax" cx=".4" cy=".35"><stop offset="0" stop-color="${sacred ? "#f6dd99" : "#a8323f"}"/><stop offset="1" stop-color="${sacred ? "#8e6a22" : "#4d0f18"}"/></radialGradient></defs>
  <path fill="url(#wax)" d="M50 4c8 0 10 6 17 8s14-1 18 6 0 12 4 19 9 9 6 17-9 8-11 16 3 14-4 18-12-1-19 3-9 9-17 9-10-6-17-8-14 1-18-6 0-12-4-19-9-9-6-17 9-8 11-16-3-14 4-18 12 1 19-3 9-9 17-9z"/>
  <circle cx="50" cy="50" r="30" fill="none" stroke="${sacred ? "#fff3cc" : "#e6b7a0"}" stroke-opacity=".5"/>
  <g fill="${sacred ? "#fff7de" : "#f3d2c4"}" fill-opacity=".85" transform="translate(50 50) scale(2.4)">${GLYPHS.lotus.replace('class="glyph"', "")}</g></svg>`;
}
function acceptQuest(q) {
  if (S.quests.includes(q.id)) return;
  S.quests.push(q.id); store.save();
  const st = $("#qCard .stamp"), btn = $("#qAccept");
  btn.disabled = true; btn.textContent = q.sacred ? "We will see you there" : "Quest accepted";
  if (MOTION) { gsap.fromTo(st, { opacity: 0, scale: 2.4, rotation: -30 }, { opacity: 1, scale: 1, rotation: -14, duration: 0.45, ease: "power4.in", onComplete: () => { shake($("#qCard"), 0.25); const r = st.getBoundingClientRect(); Particles.burst(r.left + r.width / 2, r.top + r.height / 2, 16, 0.6); } }); }
  else st.style.opacity = 1;
  q.sacred ? Audio.sfx.bell(587.33) : Audio.sfx.stamp();
  $(`.pin[data-q="${q.id}"]`)?.classList.add("done");
  updateQuestLog(); syncRSVPQuests();
  if (!q.sacred) Toasts.show({ small: "Quest accepted", title: q.name, line: `${q.date} · ${q.time}` });
  if (CONFIG.quests.every((x) => S.quests.includes(x.id))) achieve("devoted");
}
function icsDate(iso, addH = 0) { const d = new Date(new Date(iso).getTime() + addH * 3600e3); return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, ""); }
function icsEsc(s) { return String(s).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n"); }
function downloadICS(q) {
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Aamantran Atelier//The Celestial Vow//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH", "BEGIN:VEVENT",
    `UID:${q.id}-${icsDate(q.start)}@celestial-vow`, `DTSTAMP:${icsDate(new Date().toISOString())}`, `DTSTART:${icsDate(q.start)}`, `DTEND:${icsDate(q.start, q.hours || 3)}`,
    `SUMMARY:${icsEsc(`${q.name} (${q.alias}) · ${CONFIG.couple.bride.first} & ${CONFIG.couple.groom.first}`)}`,
    `LOCATION:${icsEsc(`${q.venue}, ${CONFIG.venueRegion}`)}`,
    `DESCRIPTION:${icsEsc(`Attire: ${q.attire}. ${CONFIG.game.hashtag}. Map: ${CONFIG.mapsUrl}`)}`,
    "BEGIN:VALARM", "TRIGGER:-PT3H", "ACTION:DISPLAY", `DESCRIPTION:${icsEsc(q.name)}`, "END:VALARM",
    "END:VEVENT", "END:VCALENDAR"];
  const blob = new Blob([lines.join("\r\n") + "\r\n"], { type: "text/calendar;charset=utf-8" });
  const a = h("a", { href: URL.createObjectURL(blob), download: `${q.id}-${CONFIG.couple.bride.first}-${CONFIG.couple.groom.first}.ics`.toLowerCase() });
  document.body.append(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
  Audio.sfx.tap();
}

/* ==========================================================================
   Constellation tracing: K + S
   ========================================================================== */
const CONST = {
  // coordinates in a 340 x 200 box
  strokes: [
    [[40, 30], [40, 100], [40, 170]],
    [[100, 34], [40, 100], [102, 168]],
    [[170, 62], [170, 138]],
    [[132, 100], [208, 100]],
    [[300, 40], [262, 34], [244, 70], [298, 128], [282, 166], [240, 160]],
  ],
};
function buildConstellation() {
  const wrap = h("div", { class: "constell", id: "constell" });
  const pad = h("div", { class: "pad stone", style: { background: "rgba(4,6,14,.35)", boxShadow: "inset 0 0 0 1px rgba(201,162,74,.3)" }, role: "img", "aria-label": "Trace the stars to draw K plus S" });
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg"); svg.setAttribute("viewBox", "0 0 340 200");
  svg.innerHTML = `<defs><filter id="cglow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><g id="segs"></g><line class="live" id="live" x1="0" y1="0" x2="0" y2="0" opacity="0"/><g id="starsG"></g>`;
  pad.append(svg);
  const seq = []; CONST.strokes.forEach((s, si) => s.forEach((p, pi) => seq.push({ p, si, pi })));
  const starsG = svg.querySelector("#starsG");
  // background faint stars
  for (let i = 0; i < 26; i++) { const c = document.createElementNS(ns, "circle"); c.setAttribute("cx", rand(4, 336)); c.setAttribute("cy", rand(4, 196)); c.setAttribute("r", rand(0.4, 1.1)); c.setAttribute("fill", "#cfd8ff"); c.setAttribute("opacity", rand(0.15, 0.4)); starsG.append(c); }
  const uniq = new Map();
  seq.forEach((s) => { const k = s.p.join(","); if (!uniq.has(k)) { const c = document.createElementNS(ns, "circle"); c.setAttribute("cx", s.p[0]); c.setAttribute("cy", s.p[1]); c.setAttribute("r", 4.2); c.setAttribute("class", "st"); starsG.append(c); uniq.set(k, c); } });
  let idx = 0, tracing = false;
  const segs = svg.querySelector("#segs"), live = svg.querySelector("#live");
  const starAt = (i) => uniq.get(seq[i].p.join(","));
  const mark = () => { uniq.forEach((c) => c.classList.remove("next")); if (idx < seq.length) starAt(idx).classList.add("next"); };
  const toLocal = (e) => { const r = svg.getBoundingClientRect(); return [((e.clientX - r.left) / r.width) * 340, ((e.clientY - r.top) / r.height) * 200]; };
  function advance() {
    const cur = seq[idx]; starAt(idx).classList.add("on"); Audio.sfx.bell(880 + idx * 30);
    if (idx > 0 && seq[idx - 1].si === cur.si) { const a = seq[idx - 1].p, b = cur.p; const l = document.createElementNS(ns, "line"); l.setAttribute("x1", a[0]); l.setAttribute("y1", a[1]); l.setAttribute("x2", b[0]); l.setAttribute("y2", b[1]); l.setAttribute("class", "seg"); segs.append(l);
      if (MOTION) { const len = Math.hypot(b[0] - a[0], b[1] - a[1]); gsap.fromTo(l, { attr: { "stroke-dasharray": len, "stroke-dashoffset": len } }, { attr: { "stroke-dashoffset": 0 }, duration: 0.25 }); } }
    idx++;
    // the next stroke starts where the guest lifts off: we light its first star automatically
    if (idx < seq.length && seq[idx].pi === 0) { starAt(idx).classList.add("on"); idx++; }
    mark();
    if (idx >= seq.length) done(false);
  }
  const near = (pt, i) => { const p = seq[i].p; return Math.hypot(pt[0] - p[0], pt[1] - p[1]) < 20; };
  pad.addEventListener("pointerdown", (e) => { if (idx >= seq.length) return; tracing = true; pad.setPointerCapture(e.pointerId); move(e); });
  pad.addEventListener("pointermove", (e) => { if (tracing) move(e); });
  const up = () => { tracing = false; live.setAttribute("opacity", 0); };
  pad.addEventListener("pointerup", up); pad.addEventListener("pointercancel", up);
  function move(e) {
    const pt = toLocal(e);
    if (idx < seq.length && near(pt, idx)) advance();
    if (idx > 0 && idx < seq.length) { const from = seq[idx - 1].p; live.setAttribute("x1", from[0]); live.setAttribute("y1", from[1]); live.setAttribute("x2", pt[0]); live.setAttribute("y2", pt[1]); live.setAttribute("opacity", 1); }
  }
  // the first star of the first stroke is lit for free
  starAt(0).classList.add("on"); idx = 1; mark();
  const skip = h("button", { class: "btn ghost small", onclick: () => done(true) }, "Skip ›");
  const tapNext = h("button", { class: "btn ghost small", "aria-label": "Connect the next star", onclick: () => { if (idx < seq.length) advance(); } }, "Next star");
  wrap.append(h("p", { class: "label", style: { textAlign: "center", marginBottom: "8px" } }, "Mini-game · Trace the constellation"), pad,
    h("div", { class: "cbar" }, h("p", {}, "Draw K + S, star to star."), h("div", { style: { display: "flex", gap: "6px" } }, tapNext, skip)),
    h("p", { class: "reveal-date gold-text", id: "revealDate" }, CONFIG.constellationDate),
    h("p", { class: "aligned", id: "aligned" }, "The stars have aligned. Thank you for witnessing."));
  function done(skipped) {
    while (idx < seq.length) advance();
    if (wrap.classList.contains("blaze")) return;
    wrap.classList.add("blaze"); live.setAttribute("opacity", 0);
    if (MOTION) { gsap.to("#revealDate", { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" }); gsap.to("#aligned", { opacity: 1, duration: 1.2, delay: 0.8 }); const r = pad.getBoundingClientRect(); Particles.burst(r.left + r.width / 2, r.top + r.height / 2, 30, 0.8); }
    else { $("#revealDate").style.opacity = 1; $("#aligned").style.opacity = 1; }
    Audio.sfx.chime(); if (!skipped) achieve("stars");
  }
  return wrap;
}
function startCountdown() {
  const target = new Date(CONFIG.countdownTarget).getTime();
  const els = Object.fromEntries($$(".count b").map((b) => [b.dataset.u, b]));
  const ring = $("#secRing"); let lastS = -1;
  function tick() {
    const diff = Math.max(0, target - Date.now());
    const d = Math.floor(diff / 864e5), hh = Math.floor((diff / 36e5) % 24), m = Math.floor((diff / 6e4) % 60), s = Math.floor((diff / 1e3) % 60);
    els.Days.textContent = String(d).padStart(2, "0"); els.Hours.textContent = String(hh).padStart(2, "0"); els.Minutes.textContent = String(m).padStart(2, "0"); els.Seconds.textContent = String(s).padStart(2, "0");
    if (s !== lastS && ring) { lastS = s; const ang = -(60 - s) * 6; if (MOTION) gsap.to(ring, { rotation: ang, svgOrigin: "0 0", duration: 0.35, ease: "back.out(3)" }); else ring.setAttribute("transform", `rotate(${ang})`); }
    if (diff <= 0) { $(".until").textContent = "The stars have aligned. Thank you for witnessing."; return; }
  }
  tick(); setInterval(() => { if (!document.hidden) tick(); }, 1000);
}

/* ==========================================================================
   RSVP: guild card forge
   ========================================================================== */
function buildRSVP() {
  const panel = h("div", { class: "rsvp-panel stone inlay" }, corners());
  const name = h("input", { id: "gName", type: "text", autocomplete: "name", maxlength: "48", placeholder: "Your name or family name", value: GUEST });
  const desc = h("p", { class: "cls-desc", "aria-live": "polite" }, "Choose the class that suits you best.");
  const grid = h("div", { class: "classes", role: "radiogroup", "aria-label": "Guest class" });
  CONFIG.guestClasses.forEach((c) => {
    const b = h("button", { class: "cls", role: "radio", "aria-checked": S.guestClass === c.id ? "true" : "false", "data-c": c.id, type: "button" });
    const im = cutout(c.emblem, "", ""); if (im.tagName !== "IMG") im.textContent = c.name.split(" ").pop()[0];
    im.addEventListener && im.addEventListener("error", () => {}, { once: true });
    b.append(im, h("b", {}, c.name));
    b.addEventListener("click", () => { $$(".cls", grid).forEach((x) => x.setAttribute("aria-checked", "false")); b.setAttribute("aria-checked", "true"); S.guestClass = c.id; store.save(); desc.textContent = c.line; Audio.sfx.click(); });
    grid.append(b);
  });
  if (S.guestClass) { const c = CONFIG.guestClasses.find((x) => x.id === S.guestClass); if (c) desc.textContent = c.line; }
  const checks = h("div", { class: "qchecks", id: "qChecks" }, CONFIG.quests.map((q) => h("label", {}, h("input", { type: "checkbox", value: q.id, checked: S.quests.includes(q.id) }), q.alias, h("small", {}, q.date.split(",")[1]?.trim().replace(" 2028", "") || ""))));
  const out = h("div", { class: "forge-out", id: "forgeOut" }, h("img", { alt: "Your guild card" }), h("div", { class: "heat" }));
  panel.append(
    h("p", { class: "label", style: { textAlign: "center" } }, "Enter your name in the guild ledger"),
    h("label", { class: "field" }, h("span", { class: "label" }, "Name"), name),
    h("div", { class: "field" }, h("span", { class: "label" }, "Guest class"), grid, desc),
    h("div", { class: "field" }, h("span", { class: "label" }, "Quests you will attend"), checks),
    h("div", { class: "rsvp-acts" }, h("button", { class: "btn primary", id: "forgeBtn" }, "Forge my Guild Card")),
    out,
    h("div", { class: "rsvp-acts" },
      h("button", { class: "btn", id: "dlCard", hidden: true }, "Download card"),
      h("a", { class: "btn primary", id: "waBtn", href: "#", target: "_blank", rel: "noopener" }, "Accept the Quest · WhatsApp")),
    h("p", { class: "rsvp-by" }, `Kindly respond by ${CONFIG.rsvp.by}`),
    h("div", { class: "contacts" }, CONFIG.contacts.map((c) => h("a", { href: "tel:" + c.phone.replace(/\s/g, "") }, `${c.name} · ${c.phone}`, h("small", {}, c.role)))));
  $("#forgeBtn", panel).addEventListener("click", forgeCard);
  $("#dlCard", panel).addEventListener("click", downloadCard);
  $("#waBtn", panel).addEventListener("click", (e) => { e.currentTarget.href = waLink(); Audio.sfx.chime(); });
  name.addEventListener("input", () => ($("#waBtn").href = waLink()));
  checks.addEventListener("change", () => ($("#waBtn").href = waLink()));
  setTimeout(() => ($("#waBtn").href = waLink()), 0);
  return panel;
}
function syncRSVPQuests() { $$("#qChecks input").forEach((i) => { if (S.quests.includes(i.value)) i.checked = true; }); }
function rsvpState() {
  const name = ($("#gName").value || "").trim() || GUEST || "A traveller";
  const cls = CONFIG.guestClasses.find((c) => c.id === S.guestClass);
  const qs = $$("#qChecks input:checked").map((i) => CONFIG.quests.find((q) => q.id === i.value));
  return { name, cls, qs };
}
function waLink() {
  const { name, cls, qs } = rsvpState();
  const msg = CONFIG.rsvp.message.replace("{guest}", name).replace("{class}", cls ? cls.name : "Honoured Guest").replace("{quests}", qs.length ? qs.map((q) => q.alias).join(", ") : "to be decided").replace("{relics}", S.relics.length);
  return `https://wa.me/${CONFIG.rsvp.whatsapp}?text=${encodeURIComponent(msg)}`;
}
const loadImg = (src) => new Promise((res) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => res(null); i.src = src; });
let cardBlob = null;
async function renderCard() {
  const { name, cls, qs } = rsvpState();
  const W = 1080, H = 1920, c = document.createElement("canvas"); c.width = W; c.height = H; const g = c.getContext("2d");
  try { await Promise.all(["700 60px 'Cinzel Decorative'", "600 40px Cinzel", "italic 40px 'Cormorant Garamond'", "40px 'Marcellus SC'"].map((f) => document.fonts.load(f))); } catch (e) {}
  const bg = await loadImg(CONFIG.assets.scene("title-city") + ".jpg");
  if (bg) { g.drawImage(bg, 0, 0, W, H); g.fillStyle = "rgba(6,6,10,.62)"; g.fillRect(0, 0, W, H); }
  else { const gr = g.createLinearGradient(0, 0, 0, H); gr.addColorStop(0, "#1a2140"); gr.addColorStop(1, "#0b0b0e"); g.fillStyle = gr; g.fillRect(0, 0, W, H); }
  const vg = g.createRadialGradient(W / 2, H * 0.45, 200, W / 2, H * 0.45, 1100); vg.addColorStop(0, "rgba(0,0,0,0)"); vg.addColorStop(1, "rgba(0,0,0,.7)"); g.fillStyle = vg; g.fillRect(0, 0, W, H);
  const gold = (y0, y1) => { const gr = g.createLinearGradient(0, y0, 0, y1); gr.addColorStop(0, "#fff6d2"); gr.addColorStop(0.3, "#f2dc9a"); gr.addColorStop(0.55, "#c9a24a"); gr.addColorStop(0.7, "#8e6a22"); gr.addColorStop(1, "#e7c873"); return gr; };
  // frame
  g.strokeStyle = gold(0, H); g.lineWidth = 6; g.strokeRect(60, 60, W - 120, H - 120); g.lineWidth = 2; g.strokeRect(84, 84, W - 168, H - 168);
  [[60, 60, 1, 1], [W - 60, 60, -1, 1], [60, H - 60, 1, -1], [W - 60, H - 60, -1, -1]].forEach(([x, y, sx, sy]) => { g.save(); g.translate(x, y); g.scale(sx, sy); g.fillStyle = "#e7c873"; g.beginPath(); g.arc(34, 34, 12, 0, 7); g.fill(); g.beginPath(); g.moveTo(34, 34); g.quadraticCurveTo(80, 20, 90, 0); g.quadraticCurveTo(60, 40, 34, 34); g.fill(); g.beginPath(); g.moveTo(34, 34); g.quadraticCurveTo(20, 80, 0, 90); g.quadraticCurveTo(40, 60, 34, 34); g.fill(); g.restore(); });
  g.textAlign = "center"; g.textBaseline = "alphabetic";
  const text = (t, y, font, fill, shadow = true) => { g.font = font; if (shadow) { g.shadowColor = "rgba(0,0,0,.8)"; g.shadowBlur = 14; g.shadowOffsetY = 3; } g.fillStyle = fill; g.fillText(t, W / 2, y); g.shadowColor = "transparent"; g.shadowBlur = 0; g.shadowOffsetY = 0; };
  const fit = (t, max, size, fam) => { let s = size; g.font = `${fam.replace("{s}", s)}`; while (g.measureText(t).width > max && s > 30) { s -= 4; g.font = fam.replace("{s}", s); } return fam.replace("{s}", s); };
  text("GUILD OF THE", 230, "500 40px 'Marcellus SC', serif", "#e2c47c");
  text("CELESTIAL VOW", 300, "700 64px 'Cinzel Decorative', serif", gold(250, 310));
  // emblem
  const em = cls ? await loadImg(CONFIG.assets.cut(cls.emblem)) : null;
  g.save(); g.shadowColor = "rgba(255,200,110,.6)"; g.shadowBlur = 60;
  if (em) { const s = 360; g.drawImage(em, W / 2 - s / 2, 380, s, s); } else { g.fillStyle = gold(380, 740); g.beginPath(); g.arc(W / 2, 560, 170, 0, 7); g.fill(); g.fillStyle = "#3a2408"; g.font = "700 150px Cinzel"; g.fillText(cls ? cls.name.split(" ").pop()[0] : "✦", W / 2, 615); }
  g.restore();
  text(name, 900, fit(name, W - 260, 92, "700 {s}px 'Cinzel Decorative', serif"), gold(820, 910));
  text(cls ? cls.name : "Honoured Guest", 990, "italic 600 56px 'Cormorant Garamond', serif", "#f3e5c4");
  if (cls) { g.font = "italic 38px 'Cormorant Garamond', serif"; g.fillStyle = "rgba(234,219,190,.85)"; wrapText(g, cls.line, W / 2, 1060, W - 300, 46); }
  // divider
  g.strokeStyle = "#c9a24a"; g.lineWidth = 2; g.beginPath(); g.moveTo(240, 1180); g.lineTo(480, 1180); g.moveTo(600, 1180); g.lineTo(840, 1180); g.stroke(); g.fillStyle = "#f2dc9a"; g.beginPath(); g.arc(540, 1180, 8, 0, 7); g.fill();
  text("QUESTS ACCEPTED", 1260, "40px 'Marcellus SC', serif", "#c9a24a");
  const ql = qs.length ? qs : [{ alias: "To be revealed" }];
  ql.forEach((q, i) => text(q.name ? `${q.alias} · ${q.date.split(",")[1].trim().replace(" 2028", "")}` : q.alias, 1330 + i * 62, "600 46px Cinzel, serif", "#f3e5c4"));
  const yR = 1330 + ql.length * 62 + 50;
  text(`RELICS FOUND  ${S.relics.length} / 7`, yR, "40px 'Marcellus SC', serif", "#e2c47c");
  text("Honoured Guest of the Celestial Vow", H - 250, "italic 600 48px 'Cormorant Garamond', serif", "#fff3d6");
  text(`${CONFIG.couple.bride.first} & ${CONFIG.couple.groom.first} · 21.01.2028 · ${CONFIG.game.hashtag}`, H - 180, "34px 'Marcellus SC', serif", "#c9a24a");
  text(CONFIG.brand.name.toUpperCase(), H - 110, "24px 'Marcellus SC', serif", "rgba(201,162,74,.6)", false);
  return new Promise((res) => c.toBlob((b) => res(b), "image/png"));
}
function wrapText(g, t, x, y, max, lh) { const words = t.split(" "); let line = ""; for (const w of words) { const test = line ? line + " " + w : w; if (g.measureText(test).width > max && line) { g.fillText(line, x, y); line = w; y += lh; } else line = test; } if (line) g.fillText(line, x, y); }
async function forgeCard() {
  const btn = $("#forgeBtn"); btn.disabled = true; btn.textContent = "Forging…";
  Audio.sfx.whoosh(); const r = btn.getBoundingClientRect(); Particles.burst(r.left + r.width / 2, r.top, 30, 0.9);
  cardBlob = await renderCard();
  const out = $("#forgeOut"), img = $("img", out), heat = $(".heat", out);
  if (img.src) URL.revokeObjectURL(img.src);
  img.src = URL.createObjectURL(cardBlob); out.style.display = "block"; $("#dlCard").hidden = false;
  await new Promise((res) => (img.decode ? img.decode().then(res, res) : setTimeout(res, 100)));
  scrollToEl(out, false, -80);
  if (MOTION) {
    gsap.set(img, { maskPosition: "0 100%", webkitMaskPosition: "0 100%" }); gsap.set(heat, { opacity: 1, backgroundPosition: "0 100%" });
    gsap.to(img, { maskPosition: "0 0%", webkitMaskPosition: "0 0%", duration: 2.4, ease: "power2.inOut" });
    await gsap.to(heat, { backgroundPosition: "0 0%", duration: 2.4, ease: "power2.inOut" });
    gsap.to(heat, { opacity: 0, duration: 0.6 });
    const rr = out.getBoundingClientRect(); Particles.burst(rr.left + rr.width / 2, rr.top + rr.height / 2, 34, 1);
  } else { img.style.webkitMaskImage = "none"; img.style.maskImage = "none"; }
  Audio.sfx.chime(); btn.disabled = false; btn.textContent = "Re-forge my Guild Card"; achieve("forged");
}
function downloadCard() {
  if (!cardBlob) return; const { name } = rsvpState();
  const a = h("a", { href: URL.createObjectURL(cardBlob), download: `guild-card-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.png` });
  document.body.append(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
}

/* ==========================================================================
   Relic hunt
   ========================================================================== */
async function collectRelic(r, btn) {
  if (S.relics.includes(r.id)) return;
  S.relics.push(r.id); store.save();
  const from = btn.getBoundingClientRect(); btn.classList.add("found");
  const slot = $(`#inv .slot[data-r="${r.id}"]`);
  Audio.sfx.chime();
  if (MOTION) {
    hud(true);
    const fl = h("div", { class: "flyer", style: { left: from.left + "px", top: from.top + "px", width: from.width + "px", height: from.height + "px" } }, cutout(r.img, "", ""));
    document.body.append(fl);
    const cx = innerWidth / 2 - from.left - from.width / 2, cy = innerHeight * 0.42 - from.top - from.height / 2;
    Particles.burst(from.left + from.width / 2, from.top + from.height / 2, 18, 0.6);
    const tl = gsap.timeline();
    tl.to(fl, { x: cx, y: cy, scale: 3.2, duration: 0.9, ease: "expo.out" })
      .to(fl, { rotationY: 360, duration: 1.1, ease: "power2.inOut" }, "<0.1")
      .to($("#flash"), { opacity: 0.35, duration: 0.15, yoyo: true, repeat: 1 }, "<0.5");
    await tl;
    const to = slot.getBoundingClientRect();
    await gsap.to(fl, { x: to.left - from.left + to.width / 2 - from.width / 2, y: to.top - from.top + to.height / 2 - from.height / 2, scale: to.width / from.width, duration: 0.8, ease: "power3.in" });
    fl.remove();
  }
  fillSlot(slot, r);
  Toasts.show({ small: `Relic found · ${S.relics.length}/7`, title: r.name, line: r.lore, icon: r.img });
  if (S.relics.length === CONFIG.relics.length) setTimeout(legendary, 4600);
}
function fillSlot(slot, r) { if (!slot || slot.classList.contains("got")) return; slot.classList.add("got"); slot.append(cutout(r.img, "", r.name)); slot.setAttribute("aria-label", r.name); if (MOTION) gsap.fromTo(slot, { scale: 1.6 }, { scale: 1, duration: 0.6, ease: "back.out(3)" }); }
function buildLegend() {
  const ov = h("div", { class: "ff overlay", id: "legend", role: "dialog", "aria-modal": "true", "aria-label": "Legendary achievement" },
    h("svg", { class: "seal", viewBox: "0 0 100 100", html: stampSVG(true) }),
    h("p", { class: "label" }, "Legendary achievement"),
    h("h2", { class: "gold-text", style: { fontFamily: "var(--f-title)", fontSize: "24px", margin: "6px 0 16px" } }, CONFIG.legendary.title),
    h("div", { class: "msg" }, CONFIG.legendary.message.map((m) => h("p", { html: fill(m, "traveller") })), h("p", { class: "surprise", html: CONFIG.legendary.surprise })),
    h("button", { class: "btn primary", style: { marginTop: "22px" }, onclick: () => { $("#legend").classList.remove("open"); Particles.setMode(null); } }, "Return to the realm"));
  app.append(ov);
}
function legendary() {
  achieve("legend"); const ov = $("#legend"); ov.classList.add("open"); Audio.setMood("epic"); Audio.sfx.bell(440); Audio.sfx.bell(659.25);
  Particles.setMode("lanterns");
  if (MOTION) { gsap.fromTo(".seal", { scale: 0.2, rotation: -40, opacity: 0 }, { scale: 1, rotation: 0, opacity: 1, duration: 1.4, ease: "expo.out" }); gsap.fromTo("#legend .msg p", { opacity: 0, y: 10 }, { opacity: 1, y: 0, stagger: 0.4, delay: 0.8, duration: 1 }); }
}

/* ==========================================================================
   HUD, panels, settings, event details
   ========================================================================== */
function buildHUD() {
  const hudEl = h("div", { class: "ff hidden", id: "hud" },
    h("div", { class: "bar", role: "progressbar", "aria-label": "Journey", "aria-valuemin": 0, "aria-valuemax": 100 }, h("i")),
    h("span", { class: "pct" }, "JOURNEY 0%"),
    h("div", { id: "inv", role: "list", "aria-label": "Relic inventory" }, CONFIG.relics.map((r) => h("span", { class: "slot", role: "listitem", "data-r": r.id, "aria-label": "Empty relic slot" }))),
    h("div", { id: "hudBtns" },
      h("button", { class: "hbtn", id: "btnLog", "aria-label": "Quest log", html: '<svg viewBox="0 0 24 24"><path d="M6 3h10a3 3 0 0 1 3 3v13a2 2 0 0 1-2 2H7a3 3 0 0 1-3-3V5a2 2 0 0 1 2-2z"/><path d="M8 8h7M8 12h7M8 16h4"/></svg><span class="count"></span>' }),
      h("button", { class: "hbtn", id: "btnSet", "aria-label": "Settings", html: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"/></svg>' })));
  app.append(hudEl, h("div", { class: "ff", id: "toasts", "aria-live": "polite" }));
  Toasts.init($("#toasts"));
  CONFIG.relics.forEach((r) => { if (S.relics.includes(r.id)) fillSlot($(`#inv .slot[data-r="${r.id}"]`), r); });
}
function hud(on) { $("#hud").classList.toggle("hidden", !on); }
function buildPanels() {
  const log = h("div", { class: "ff overlay", id: "logPanel", role: "dialog", "aria-modal": "true", "aria-labelledby": "logT" },
    h("div", { class: "panel leafpanel" }, h("button", { class: "close", "aria-label": "Close", onclick: () => closePanel("logPanel") }, "×"),
      h("h2", { id: "logT" }, "Quest Log"), h("ul", { class: "qlist", id: "qlist" }),
      h("div", { class: "setlinks" }, h("button", { class: "btn small", onclick: () => { closePanel("logPanel"); scrollToEl(SCENES.map); } }, "Open the world map"))));
  const tg = (id, label, on) => h("div", { class: "setrow" }, h("span", { id: id + "L" }, label), h("button", { class: "toggle", id, role: "switch", "aria-checked": on ? "true" : "false", "aria-labelledby": id + "L" }));
  const set = h("div", { class: "ff overlay", id: "setPanel", role: "dialog", "aria-modal": "true", "aria-labelledby": "setT" },
    h("div", { class: "panel stone inlay" }, corners(), h("button", { class: "close", "aria-label": "Close", onclick: () => closePanel("setPanel") }, "×"),
      h("h2", { id: "setT", class: "gold-text" }, "Settings"),
      tg("tMusic", "Music", settings.music), tg("tSfx", "Sound effects", settings.sfx), tg("tRm", "Reduced motion", settings.reduced),
      h("div", { class: "setlinks" },
        h("button", { class: "btn primary", onclick: () => { closePanel("setPanel"); openPanel("details"); } }, "Event details (plain view)"),
        h("button", { class: "btn small", onclick: () => { closePanel("setPanel"); scrollToEl(SCENES.rsvp); } }, "Go to RSVP"),
        h("button", { class: "btn small", onclick: () => { if (confirm("Reset your saved progress (relics, quests, class)?")) { try { localStorage.removeItem(CONFIG.game.storageKey); } catch (e) {} location.reload(); } } }, "Reset progress"))));
  const det = h("div", { class: "ff overlay", id: "details", role: "dialog", "aria-modal": "true", "aria-labelledby": "detT" },
    h("div", { class: "panel stone inlay" }, corners(), h("button", { class: "close", "aria-label": "Close", onclick: () => closePanel("details") }, "×"),
      h("h2", { id: "detT", class: "gold-text" }, "Event Details"),
      h("p", { style: { textAlign: "center", marginTop: "8px", fontSize: "17px" } }, `${CONFIG.couple.bride.full} & ${CONFIG.couple.groom.full}`, h("br"), CONFIG.venueRegion),
      h("div", { class: "dlist" }, CONFIG.quests.map((q) => h("article", {}, h("h3", {}, `${q.alias}`), h("p", {}, `${q.date} · ${q.time}`), h("p", {}, `${q.venue} · Attire: ${q.attire}`),
        h("div", { class: "links" }, h("a", { class: "btn small", href: CONFIG.mapsUrl, target: "_blank", rel: "noopener" }, "Map"), h("button", { class: "btn small", onclick: () => downloadICS(q) }, "Calendar"))))),
      h("p", { style: { marginTop: "16px", textAlign: "center" } }, `Kindly RSVP by ${CONFIG.rsvp.by}`),
      h("div", { class: "setlinks" }, h("a", { class: "btn primary", href: "#", onclick: (e) => (e.currentTarget.href = waLink()), target: "_blank", rel: "noopener" }, "RSVP on WhatsApp"),
        CONFIG.contacts.map((c) => h("a", { class: "btn small", href: "tel:" + c.phone.replace(/\s/g, "") }, `Call ${c.name}`)))));
  app.append(log, set, det);
  $("#btnLog").addEventListener("click", () => openPanel("logPanel"));
  $("#btnSet").addEventListener("click", () => openPanel("setPanel"));
  const flip = (id, key, fn) => $("#" + id).addEventListener("click", (e) => { settings[key] = !settings[key]; e.currentTarget.setAttribute("aria-checked", settings[key]); S.settings = settings; store.save(); fn && fn(settings[key]); Audio.sfx.click(); });
  flip("tMusic", "music", (on) => Audio.setMusic(on)); flip("tSfx", "sfx", (on) => Audio.setSfx(on));
  flip("tRm", "reduced", () => { S.lastScene = currentScene; store.save(); setTimeout(() => location.reload(), 300); });
  [log, set, det].forEach((o) => o.addEventListener("click", (e) => { if (e.target === o) closePanel(o.id); }));
  addEventListener("keydown", (e) => { if (e.key === "Escape") { ["logPanel", "setPanel", "details", "legend"].forEach((id) => $("#" + id)?.classList.contains("open") && closePanel(id)); if ($("#quest").classList.contains("open")) closeQuest(); } });
  updateQuestLog();
}
let lastFocus = null;
function openPanel(id) { lastFocus = document.activeElement; $("#" + id).classList.add("open"); Audio.sfx.rustle(); lenis && lenis.stop(); setTimeout(() => $("#" + id + " .close")?.focus(), 50); }
function closePanel(id) { $("#" + id).classList.remove("open"); if (!titleLocked) lenis && lenis.start(); lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true }); }
function updateQuestLog() {
  const ul = $("#qlist"); if (!ul) return; ul.innerHTML = "";
  const qs = CONFIG.quests.filter((q) => S.quests.includes(q.id));
  if (!qs.length) ul.append(h("li", { class: "empty" }, "No quests accepted yet. Visit the world map to begin."));
  qs.forEach((q) => ul.append(h("li", {}, h("b", {}, q.sacred ? q.name : `${q.name}`), h("span", {}, `${q.date.split(",")[1].trim().replace(" 2028", "")} · ${q.time}`))));
  const c = $("#btnLog .count"); if (c) c.textContent = qs.length || "";
}

/* ==========================================================================
   Scroll, camera & scene orchestration
   ========================================================================== */
let lenis = null, currentScene = "title", titleLocked = true;
function scrollToEl(el, instant = false, offset = 0) {
  if (!el) return;
  const target = el.closest(".pin-spacer") || el;
  const y = target.getBoundingClientRect().top + scrollY + offset;
  if (lenis && !instant) lenis.scrollTo(y, { duration: 1.8, easing: (t) => 1 - Math.pow(1 - t, 4) });
  else { lenis ? lenis.scrollTo(y, { immediate: true }) : scrollTo(0, y); }
}
const SCENE_FX = {
  title: { particles: "dust", mood: "calm", hud: false },
  prologue: { particles: "dust", mood: "calm", hud: true },
  heroes: { particles: "dust", mood: "calm", hud: true },
  gate: { particles: "embers", mood: "calm", hud: true },
  map: { particles: null, mood: "rhythm", hud: true },
  stars: { particles: "fireflies", mood: "calm", hud: true },
  rsvp: { particles: "embers", mood: "rhythm", hud: true },
  finale: { particles: "lanterns", mood: "sacred", hud: false },
  credits: { particles: null, mood: "sacred", hud: false },
};
function setScene(id) {
  if (id === currentScene) return; currentScene = id;
  const fx = SCENE_FX[id] || {};
  if (!$("#quest").classList.contains("open")) { Particles.setMode(fx.particles || null); Audio.setMood(fx.mood || "calm"); }
  if (!titleLocked) hud(!!fx.hud);
  const sec = SCENES[id]; const key = sec && (sec._bgKey || { heroes: "hero-bride", gate: "sanctum-door", map: "world-map" }[id]);
  if (key) setSideBg(key);
  if (id !== "title") { S.lastScene = id; store.save(); }
}
function setSideBg(key) {
  const sb = $("#sideBg"); if (!sb || innerWidth < 560) return;
  const url = `url("${CONFIG.assets.scene(key)}.jpg")`;
  const cur = $("i.on", sb); if (cur && cur.dataset.k === key) return;
  const nx = h("i", { "data-k": key, style: { backgroundImage: url } }); sb.append(nx);
  requestAnimationFrame(() => { nx.classList.add("on"); cur && cur.classList.remove("on"); setTimeout(() => cur && cur.remove(), 1500); });
}

function initScroll() {
  if (!HAS_GSAP) return;
  gsap.registerPlugin(ScrollTrigger); if (window.Draggable) gsap.registerPlugin(Draggable);
  if (window.Lenis && !RM) {
    lenis = new Lenis({ duration: 1.25, smoothWheel: true, touchMultiplier: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((t) => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
    window.__lenisTo = (y) => lenis.scrollTo(y, { immediate: true, force: true });
  }
  // active scene tracking
  Object.entries(SCENES).forEach(([id, sec]) => ScrollTrigger.create({ trigger: sec, start: "top 55%", end: "bottom 45%", onToggle: (self) => self.isActive && setScene(id) }));
  // pause CSS animations for scenes off-screen
  const io = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle("paused", !e.isIntersecting)), { rootMargin: "20% 0px" });
  Object.values(SCENES).forEach((s) => io.observe(s));
  if (!MOTION) { simpleReveals(); return; }

  /* camera: every background pushes in as it arrives and drifts on as it leaves */
  ["heroes", "stars", "rsvp"].forEach((id) => {
    $$(".bg", SCENES[id]).forEach((bg) => gsap.fromTo(bg, { scale: 1.2, yPercent: -4 }, { scale: 1, yPercent: 5, ease: "none", scrollTrigger: { trigger: SCENES[id], start: "top bottom", end: "bottom top", scrub: true } }));
  });
  gsap.to($("#s-title .bg"), { scale: 1.25, yPercent: 8, ease: "none", scrollTrigger: { trigger: SCENES.title, start: "top top", end: "bottom top", scrub: true } });
  gsap.to($("#s-title .title-wrap"), { yPercent: -60, opacity: 0, ease: "none", scrollTrigger: { trigger: SCENES.title, start: "top top", end: "60% top", scrub: true } });
  gsap.fromTo($("#s-gate .gate-view .bg"), { scale: 1.3 }, { scale: 1, ease: "none", scrollTrigger: { trigger: SCENES.gate, start: "top bottom", end: "top top", scrub: true } });
  gsap.fromTo("#lockWrap", { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, ease: "power2.out", scrollTrigger: { trigger: SCENES.gate, start: "top 70%", end: "top 10%", scrub: true } });

  /* Prologue: pinned, the palm leaves fan out and the lore burns in line by line */
  const P = SCENES.prologue, leaves = $$(".leaf", P), n = leaves.length;
  const leafPos = () => { const box = $(".leaves", P).getBoundingClientRect(); const lh = leaves[0].offsetHeight; const gap = Math.max(4, (box.height - lh * n) / (n - 1)); return leaves.map((_, i) => -box.height / 2 + lh / 2 + i * (lh + gap) - lh / 2); };
  const jit = leaves.map(() => ({ y: rand(-6, 6), x: rand(-6, 6), r: rand(-4, 4) }));
  const ptl = gsap.timeline({ defaults: { ease: "power2.inOut" }, scrollTrigger: { trigger: P, start: "top top", end: `+=${n * 70}%`, pin: true, scrub: 0.8, anticipatePin: 1, invalidateOnRefresh: true } });
  ptl.fromTo(".leaves", { x: 0, y: 0, xPercent: -50, yPercent: -50, scale: 0.85, rotation: -6, opacity: 0 }, { x: 0, y: 0, xPercent: -50, yPercent: -50, scale: 1, rotation: 0, opacity: 1, duration: 1 });
  ptl.fromTo("#s-prologue .chapter", { opacity: 1, y: 0 }, { opacity: 0, y: -30, duration: 0.8, immediateRender: false }, "<0.3");
  let pos = leafPos();
  leaves.forEach((l, i) => {
    ptl.fromTo(l, { y: jit[i].y, yPercent: -50, x: jit[i].x, rotation: jit[i].r, opacity: i < 3 ? 1 : 0 },
      { y: () => (pos = leafPos())[i], yPercent: 0, x: 0, rotation: i % 2 ? 0.6 : -0.6, opacity: 1, duration: 1, ease: "power3.inOut", immediateRender: i === 0 || true }, i === 0 ? ">" : "<0.35");
    ptl.call(() => Audio.sfx.rustle(), null, "<");
    ptl.fromTo(l, { "--p": "-8%" }, { "--p": "112%", duration: 1.2, ease: "none", immediateRender: false }, "<0.55");
    if (i === CONFIG.loreStarsLine) ptl.fromTo(".star-pair i", { opacity: 0 }, { opacity: 1, duration: 0.6, stagger: 0.2, immediateRender: false }, "<0.4").fromTo(".star-pair i:first-child", { left: "14%" }, { left: "34%", duration: n, ease: "none", immediateRender: false }, "<").fromTo(".star-pair i:last-child", { left: "86%" }, { left: "66%", duration: n, ease: "none", immediateRender: false }, "<");
  });
  ptl.to({}, { duration: 0.6 });

  /* Map trail draws itself as you arrive */
  gsap.to("#trailReveal", { attr: { "stroke-dashoffset": 0 }, ease: "none", scrollTrigger: { trigger: SCENES.map, start: "top 80%", end: "top 10%", scrub: true } });
  gsap.from(".pin", { scale: 0, opacity: 0, stagger: 0.12, duration: 0.6, ease: "back.out(3)", scrollTrigger: { trigger: SCENES.map, start: "top 30%" } });

  /* Astrolabe: rings at different speeds, light sweeping across the brass */
  gsap.to(".astro .a-base", { rotation: 360, duration: 120, repeat: -1, ease: "none" });
  gsap.to(".astro .a-ring", { rotation: -360, duration: 80, repeat: -1, ease: "none" });
  gsap.to(".astro .a-ring2", { rotation: 360, duration: 50, repeat: -1, ease: "none" });
  gsap.to(".astro .shine", { rotation: 360, duration: 14, repeat: -1, ease: "none" });
  gsap.from(".astro", { scale: 0.6, opacity: 0, rotation: -40, ease: "power3.out", scrollTrigger: { trigger: SCENES.stars, start: "top 70%", end: "top 10%", scrub: true } });

  /* Finale: the two stars meet, bloom, and the lanterns rise */
  const F = SCENES.finale;
  const ftl = gsap.timeline({ scrollTrigger: { trigger: F, start: "top top", end: "+=260%", pin: true, scrub: 1, anticipatePin: 1 } });
  ftl.fromTo($(".bg", F), { scale: 1.25 }, { scale: 1.02, duration: 4, ease: "none" }, 0)
    .to(".f-stars i:nth-child(1)", { left: "50%", duration: 2, ease: "power1.inOut" }, 0)
    .to(".f-stars i:nth-child(2)", { left: "50%", duration: 2, ease: "power1.inOut" }, 0)
    .to(".f-stars .bloom", { opacity: 1, scale: 1.4, duration: 0.8, ease: "power2.out" }, 1.85)
    .to(".f-stars i:not(.bloom)", { opacity: 0, duration: 0.3 }, 2.1)
    .to(".f-stars .bloom", { scale: 0.7, opacity: 0.85, duration: 1 }, 2.7)
    .call(() => Audio.sfx.bell(440), null, 1.9)
    .to(".f-text .vow span", { opacity: 1, y: 0, stagger: 0.45, duration: 0.6 }, 2.2)
    .to(".f-text .fnames", { opacity: 1, duration: 0.8 }, 3.6)
    .to(".f-text .fdate", { opacity: 1, duration: 0.8 }, 4)
    .to({}, { duration: 1 });

  /* Credits roll */
  const C = SCENES.credits, roll = $(".roll", C);
  gsap.to(roll, { y: () => -(roll.offsetHeight + innerHeight), ease: "none", scrollTrigger: { trigger: C, start: "top top", end: () => "+=" + (roll.offsetHeight + innerHeight) * 0.9, pin: true, scrub: 0.6, invalidateOnRefresh: true } });

  /* Veil: dissolve through mist / light / shadow at every scene boundary */
  initVeil();
  simpleReveals();
}
function simpleReveals() {
  const els = $$(".chapter, .count, .until, .constell, .rsvp-panel, .plate, .hero-info");
  els.forEach((e) => e.classList.add("rv"));
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); if (e.target.classList.contains("plate") && (S.gateOpen || LOCK.solved)) engravePlate(); } }), { threshold: 0.15 });
  els.forEach((e) => io.observe(e));
  // If someone scrolls past the gate without solving it, the plate still reveals itself (details are never locked)
  const pio = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting && !LOCK.solved) { LOCK.solved = true; $("#lockWrap").style.opacity = 0.35; engravePlate(); } }), { threshold: 0.35 });
  pio.observe($("#plate"));
}
let bounds = [];
function initVeil() {
  const veil = $("#veil");
  const measure = () => { bounds = Object.values(SCENES).slice(1).map((s) => { const t = s.closest(".pin-spacer") || s; return { y: t.getBoundingClientRect().top + scrollY, type: s.dataset.veil }; }); };
  ScrollTrigger.addEventListener("refresh", measure); measure();
  let lastO = -1;
  const upd = () => {
    const mid = scrollY + innerHeight / 2; let best = null, bd = Infinity;
    for (const b of bounds) { const d = Math.abs(mid - b.y); if (d < bd) { bd = d; best = b; } }
    const o = best ? Math.pow(clamp(1 - bd / (innerHeight * 0.42)), 1.6) * 0.82 : 0;
    if (Math.abs(o - lastO) > 0.01) { veil.style.opacity = o.toFixed(3); lastO = o; }
    if (best) veil.className = best.type === "dark" ? "dark" : "";
    const p = clamp(scrollY / (document.documentElement.scrollHeight - innerHeight));
    $("#hud .bar i").style.transform = `scaleX(${p})`; $("#hud .pct").textContent = `JOURNEY ${Math.round(p * 100)}%`; $("#hud .bar").setAttribute("aria-valuenow", Math.round(p * 100));
  };
  if (lenis) lenis.on("scroll", upd); else addEventListener("scroll", upd, { passive: true });
  upd();
}
function progressOnly() { const upd = () => { const p = clamp(scrollY / (document.documentElement.scrollHeight - innerHeight)); $("#hud .bar i").style.transform = `scaleX(${p})`; $("#hud .pct").textContent = `JOURNEY ${Math.round(p * 100)}%`; }; addEventListener("scroll", upd, { passive: true }); upd(); }

/* ---------- Heroes behaviour ---------- */
let heroIdx = 0;
function showHero(i, dir = 1) {
  if (i === heroIdx && $(".hero.active")) { animateStats($$(".hero")[i]); return; }
  const heroes = $$(".hero"), prev = heroes[heroIdx], next = heroes[i]; heroIdx = i;
  $$(".hero-tabs button").forEach((b, k) => b.setAttribute("aria-selected", k === i ? "true" : "false"));
  Audio.sfx.whoosh();
  if (MOTION) {
    gsap.set(next, { visibility: "visible" }); next.classList.add("active");
    gsap.fromTo(next, { opacity: 0 }, { opacity: 1, duration: 1.1, ease: "power2.inOut" });
    gsap.fromTo($(".bg", next), { scale: 1.18, xPercent: 6 * dir }, { scale: 1.04, xPercent: 0, duration: 1.8, ease: "expo.out" });
    gsap.fromTo($(".hero-info", next), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "expo.out" });
    gsap.to($(".bg", prev), { scale: 1.1, xPercent: -6 * dir, duration: 1.1, ease: "power2.in" });
    gsap.to(prev, { opacity: 0, duration: 0.9, onComplete: () => { prev.classList.remove("active"); gsap.set(prev, { visibility: "hidden" }); } });
  } else { prev.classList.remove("active"); next.classList.add("active"); }
  animateStats(next);
}
function animateStats(panel) {
  $$(".stat", panel).forEach((s, k) => {
    const out = $("output", s), bar = $(".meter i", s), v = +out.dataset.v;
    if (!MOTION) { out.textContent = v; bar.style.transform = `scaleX(${v / 100})`; return; }
    const o = { n: 0 };
    gsap.fromTo(bar, { scaleX: 0 }, { scaleX: v / 100, duration: 1.4, delay: 0.4 + k * 0.12, ease: "expo.out" });
    gsap.to(o, { n: v, duration: 1.4, delay: 0.4 + k * 0.12, ease: "expo.out", onUpdate: () => (out.textContent = Math.round(o.n)) });
  });
}
function initHeroes() {
  const HS = SCENES.heroes; let sx = null, sy = null;
  HS.addEventListener("pointerdown", (e) => { if (e.target.closest("button")) return; sx = e.clientX; sy = e.clientY; });
  HS.addEventListener("pointerup", (e) => { if (sx == null) return; const dx = e.clientX - sx, dy = e.clientY - sy; sx = null; if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.4) showHero(heroIdx ? 0 : 1, dx < 0 ? 1 : -1); });
  $("#heroSwap").addEventListener("click", () => showHero(heroIdx ? 0 : 1));
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { animateStats($$(".hero")[heroIdx]); io.disconnect(); } }), { threshold: 0.45 });
  io.observe(HS);
  $("#heroGo").addEventListener("click", async () => {
    Audio.sfx.whoosh(); const split = $(".hero-split", HS);
    if (MOTION) {
      split.style.display = "block"; const [a, b] = split.children;
      gsap.fromTo(a, { xPercent: -100 }, { xPercent: 0, duration: 1, ease: "expo.out" });
      await gsap.fromTo(b, { xPercent: 100 }, { xPercent: 0, duration: 1, ease: "expo.out" });
      const r = HS.getBoundingClientRect(); Particles.burst(r.left + r.width / 2, r.top + r.height * 0.4, 36, 1.1); Audio.sfx.bell(587.33);
      await gsap.to("#flash", { opacity: 1, duration: 0.45, ease: "power2.in" });
      scrollToEl(SCENES.gate, true);
      gsap.to("#flash", { opacity: 0, duration: 1.4, ease: "power2.out" }); split.style.display = "none";
    } else scrollToEl(SCENES.gate);
    achieve("party");
  });
}

/* ---------- Gyroscope / pointer tilt ---------- */
const Tilt = (() => {
  let tx = 0, ty = 0, cx = 0, cy = 0, base = null, on = false, raf;
  function loop() { cx += (tx - cx) * 0.08; cy += (ty - cy) * 0.08; document.documentElement.style.setProperty("--gx", cx.toFixed(3)); document.documentElement.style.setProperty("--gy", cy.toFixed(3)); raf = requestAnimationFrame(loop); }
  function start() { if (on || RM) return; on = true; loop(); document.addEventListener("visibilitychange", () => { if (document.hidden) cancelAnimationFrame(raf); else loop(); }); }
  function orient(e) { if (e.gamma == null) return; if (!base) base = { b: e.beta, g: e.gamma }; tx = clamp((e.gamma - base.g) / 22, -1, 1); ty = clamp((e.beta - base.b) / 22, -1, 1); }
  async function request() {
    if (RM) return;
    try { if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === "function") { const r = await DeviceOrientationEvent.requestPermission(); if (r !== "granted") return; } addEventListener("deviceorientation", orient); start(); } catch (e) {}
  }
  function pointer() { if (RM || !matchMedia("(hover: hover)").matches) return; addEventListener("pointermove", (e) => { tx = (e.clientX / innerWidth - 0.5) * 2; ty = (e.clientY / innerHeight - 0.5) * 2; }); start(); }
  return { request, pointer };
})();

/* ==========================================================================
   Loading → title → begin
   ========================================================================== */
async function loading() {
  const L = $("#loading"), bar = $(".loadbar i", L), pct = $(".loadpct", L), tip = $(".tip span", L), begin = $("#begin");
  const tips = [...CONFIG.tips].sort(() => Math.random() - 0.5); let ti = 0;
  const showTip = () => { const t = tips[ti++ % tips.length]; if (MOTION) gsap.fromTo(tip, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.6 }); tip.textContent = t; };
  showTip(); const tipTimer = setInterval(showTip, 3800);
  if (MOTION) gsap.to(".presents", { opacity: 1, duration: 1.6, delay: 0.3 }); else $(".presents").style.opacity = 1;
  // real preload of the first scenes, fonts and key cutouts
  const crit = [CONFIG.assets.scene("title-city") + ".jpg", CONFIG.assets.scene("loading-bg") + ".jpg", CONFIG.assets.scene("prologue-library") + ".jpg", CONFIG.assets.cut("palm-leaf-scroll"), CONFIG.assets.cut("relic-conch")];
  const webp = document.createElement("canvas").toDataURL("image/webp").startsWith("data:image/webp");
  const list = crit.map((s) => (webp && s.endsWith(".jpg") ? s.replace(".jpg", ".webp") : s));
  let done = 0; const step = () => { done++; const p = Math.round((done / (list.length + 1)) * 100); bar.style.width = p + "%"; pct.textContent = p + "%"; };
  const t0 = performance.now();
  await Promise.all([...list.map((s) => loadImg(s).then(step)), (document.fonts ? document.fonts.ready : Promise.resolve()).then(step)]);
  const minT = RM ? 800 : 2600; const el = performance.now() - t0; if (el < minT) await wait(minT - el);
  bar.style.width = "100%"; pct.textContent = "100%";
  begin.classList.add("ready", "pulse"); begin.focus({ preventScroll: true });
  await new Promise((res) => begin.addEventListener("click", res, { once: true }));
  clearInterval(tipTimer);
  Audio.start(); if (!settings.music) Audio.setMusic(false); Audio.sfx.chime();
  Tilt.request(); Tilt.pointer();
  if (MOTION) { await gsap.to(L, { opacity: 0, scale: 1.06, filter: "brightness(2)", duration: 1.2, ease: "power2.in" }); }
  L.remove();
  titleIntro();
}
async function titleIntro() {
  setSideBg("title-city"); Particles.setMode("dust");
  const logo = $(".logo"), metal = $(".metal", logo), molten = $(".molten", logo);
  const sub = $(".subtitle"), btns = $$(".menu .btn");
  if (!MOTION) { logo.classList.add("forged"); sub.style.opacity = 1; btns.forEach((b) => (b.style.opacity = 1)); bindMenu(); return; }
  // birds crossing
  $$(".bird").forEach((b, i) => gsap.fromTo(b, { left: "-6%", top: 18 + i * 4 + "%" }, { left: "106%", top: 12 + i * 5 + "%", duration: 22 + i * 3, delay: i * 1.7, repeat: -1, repeatDelay: 8 + i * 2, ease: "none" }));
  gsap.fromTo(".l1", { opacity: 0, letterSpacing: "0.8em" }, { opacity: 1, letterSpacing: "0.4em", duration: 2, ease: "expo.out" });
  gsap.set(molten, { opacity: 1 });
  const st = { p: 100 };
  const lr = metal.getBoundingClientRect();
  Audio.sfx.whoosh();
  await gsap.to(st, { p: 0, duration: 2.6, delay: 0.5, ease: "power2.inOut", onUpdate: () => {
    const v = st.p + "% 0"; metal.style.maskPosition = v; metal.style.webkitMaskPosition = v; molten.style.maskPosition = v; molten.style.webkitMaskPosition = v;
    if (Math.random() < 0.5) { const x = lr.left + lr.width * (1 - st.p / 100); Particles.burst(x, lr.top + lr.height * rand(0.2, 0.8), 2, 0.5); }
  } });
  gsap.to(molten, { opacity: 0, duration: 1.2 }); logo.classList.add("forged"); Audio.sfx.bell(587.33);
  gsap.fromTo(sub, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" });
  gsap.fromTo(btns, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 1, stagger: 0.12, delay: 0.4, ease: "expo.out" });
  bindMenu();
}
function unlockScroll() { if (!titleLocked) return; titleLocked = false; document.body.classList.remove("locked"); lenis && lenis.start(); ScrollTrigger && ScrollTrigger.refresh(); }
function bindMenu() {
  const go = (el, fx) => { Audio.sfx.tap(); unlockScroll(); setTimeout(() => scrollToEl(el), 60); };
  $("#mBegin").addEventListener("click", () => go(SCENES.prologue));
  $("#mContinue")?.addEventListener("click", () => go(SCENES[S.lastScene] || SCENES.prologue));
  $("#mSettings").addEventListener("click", () => openPanel("setPanel"));
  $("#mCredits").addEventListener("click", () => go(SCENES.credits));
}

/* ---------- Tap feedback ---------- */
function tapFeedback() {
  document.addEventListener("pointerdown", (e) => {
    if (!e.target.closest("button, a, .relic, .pin")) return;
    if (!RM) { const g = h("span", { class: "tapglow", style: { left: e.clientX + "px", top: e.clientY + "px" } }); document.body.append(g); if (HAS_GSAP) gsap.fromTo(g, { scale: 0.3, opacity: 1 }, { scale: 1.4, opacity: 0, duration: 0.6, ease: "expo.out", onComplete: () => g.remove() }); else setTimeout(() => g.remove(), 300); }
  }, { passive: true });
}

/* ==========================================================================
   Boot
   ========================================================================== */
function boot() {
  document.title = `The Celestial Vow | ${CONFIG.couple.bride.first} & ${CONFIG.couple.groom.first}`;
  document.body.classList.add("locked");
  buildAll();
  Particles.init($("#particles"));
  initHeroes(); startCountdown(); tapFeedback();
  requestAnimationFrame(() => { layoutMap(); initMapDrag(); });
  addEventListener("resize", () => { layoutMap(); Particles.resize(); });
  initScroll();
  if (!MOTION) progressOnly();
  if (lenis) lenis.stop();
  // credits: post-credits teaser appears after a short pause, like real games
  const post = $("#s-post"); const pio = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { setTimeout(() => post.classList.add("show"), RM ? 0 : 1600); pio.disconnect(); } }), { threshold: 0.4 });
  pio.observe(post);
  document.addEventListener("visibilitychange", () => { document.hidden ? Audio.suspend() : Audio.resume(); document.documentElement.classList.toggle("paused-all", document.hidden); });
  if (S.gateOpen) { LOCK.solved = true; $("#lockWrap").style.opacity = 0.35; }
  loading();
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", boot) : boot();
