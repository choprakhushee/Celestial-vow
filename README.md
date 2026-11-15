# The Celestial Vow: A Wedding Quest

An immersive wedding invitation built like the opening of a story-driven game.
A portfolio demo by **Aamantran Atelier** for the fictional couple Kavya Hegde & Siddharth Kulkarni.

Live site (after enabling GitHub Pages): `https://choprakhushee.github.io/Celestial-vow/`

```
kavya-weds-siddharth/
  index.html        page shell (scenes are generated from CONFIG)
  style.css         materials: stone, brass, palm leaf, gold inlay; layout; reduced motion
  main.js           CONFIG at the top, then audio, particles, scenes, puzzles, relics, RSVP
  assets/
    scenes/         graded 1080x1920 backgrounds (.webp + .jpg fallback)
    cutouts/        transparent WebP objects (relics, emblems, plate, leaf, astrolabe…)
    raw/            original Canva exports before grading
    manifest.json   every asset: purpose, exact prompt, Canva link
    og-image.jpg    1200x630 social preview
    favicon.svg
tools/
  grade.py          one cinematic grade + web export for every image
  split_sheet.py    splits a transparent sheet of objects into separate cutouts
  manifest.py       rebuilds assets/manifest.json
```

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/kavya-weds-siddharth/

## Publish on GitHub Pages (free)

1. On GitHub, open the repository → **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
3. After a minute the site is live at `https://choprakhushee.github.io/Celestial-vow/` (the root redirects to the invite).

## Personalised links

- `…/kavya-weds-siddharth/?guest=Sharma%20Family`
- `…/kavya-weds-siddharth/?guest=Meera%20%26%20Arjun`
- `?relics=debug` outlines every hidden relic for testing.

## Reusing for a new client

1. Copy `kavya-weds-siddharth/` to a new folder (for example `aisha-weds-rahul/`).
2. Edit only the `CONFIG` object at the top of `main.js`:
   - `couple`, `blessing`, `invitation`, `weddingDateLabel`, `countdownTarget`, `constellationDate`, `venueRegion`
   - `rsvp` (WhatsApp number, deadline, message template) and `contacts`
   - `lore` (the prologue, one sentence per palm leaf) and `tips` (loading screen)
   - `heroes` (names, titles, class, stats, ability, equipment)
   - `quests` (name, date, time, venue, attire, reward, scene, `map` pin position in % of the map)
   - `guestClasses`, `relics` (scene + x/y % + lore), `legendary`, `credits`, `postCredits`
   - `game.storageKey` (so saved progress doesn't mix between couples)
3. Replace assets using `assets/manifest.json` as the checklist. Each entry has the prompt that made it.
   - Swap `hero-bride` / `hero-groom` for the couple's real portraits (portrait 9:16, subject to one side, text-safe lower 45%).
   - Run every new image through `python3 tools/grade.py scene <raw.jpg> <name>` (or `cut <raw.png> <name>`) so the colour matches.
4. Optional: add `assets/music.mp3` (a licensed track); otherwise the original generative score plays.
5. Optional video loops: set paths in `CONFIG.assets.videos`.
