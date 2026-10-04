---
title: "Staff notes"
description: "Steve's notes for Module 3, week 2: run sheet, dialogue questions for Devis, and loose ends. Not linked from anywhere."
course: "Experiential AI & Ecology 2026 · Module 3: multimodal ecosystem sensing"
partnerLogo:
  src: "/teaching/imageomics2026/imageomics-abc-logo.png"
  alt: "Imageomics Institute and ABC Global Center"
noindex: true
---

:::caution[Unlisted, not private]
This page isn't linked from anywhere, is left out of the sitemap and asks
search engines not to index it, but anyone with the URL can read it. Keep
anything confidential out.
:::

## The session

| | |
|---|---|
| **When** | Tuesday 13 October 2026, 2pm ET (7pm BST), Zoom, one hour |
| **Course page** | [Module 3, week 2](https://imageomics-abc-edu.github.io/AI-Ecology-2026/part-i/module-3/#week-2-multimodal-ecosystem-sensing). Still a skeleton: Summary, Objectives, Watch/Read/Complete all TBA |
| **Instructors** | Justin Kitzes (Pitt), Devis Tuia (EPFL), Steve Bullock (Bristol) |
| **Pre-watch** | Devis, [Crash course on remote sensing](https://www.youtube.com/watch?v=3jlSPXSEdww), 38 min, uploaded 2 October |
| **Student page** | [/teaching/imageomics2026/](/teaching/imageomics2026/) and the [reading](/teaching/imageomics2026/reading/) |
| **LOs** | 1 Diverse data collection and processing technologies · 2 How automated approaches support ecology · **3 Safe, ethical, legal, under appropriate frameworks (mine)** |

## The hour

From the course lesson plan (Justin's Google Doc). No timings given there; I've
assumed thirds.

| Min | Part | Lead | Pre-work it builds on |
|:-:|---|---|---|
| 0–20 | **Acoustics:** open discussion from students' submitted questions | Justin Kitzes | Justin's talk on automated acoustic surveys; Kitzes et al. 2025 ([MEE](https://doi.org/10.1111/2041-210x.70133)); Stowell 2022 ([PeerJ](https://doi.org/10.7717/peerj.13152), optional); three bioacoustics questions; the thrush/sparrow song exercise ([Peterson guide](https://academy.allaboutbirds.org/peterson-field-guide-to-bird-sounds/)) |
| 20–40 | **Remote sensing:** dialogue and open discussion | Devis Tuia | [Crash course](https://www.youtube.com/watch?v=3jlSPXSEdww); Tuia et al. 2022 ([Nat Commun](https://doi.org/10.1038/s41467-022-27980-y)); Zbinden et al. 2025, MaskSDM ([MEE](https://doi.org/10.1111/2041-210x.70200)) |
| 40–60 | **Safe, ethical, legal:** red team the canvas; Q&A on permissions and safety | Steve, with Devis | The reading and canvas here |

Post-lecture journal prompt: "what sensing and processing technologies might
you employ in the field? What technological and wider frameworks might you
employ?" The canvas feeds straight into it; say so at the close.

## Run sheet: my 20 minutes

| Min | What | Notes |
|:-:|---|---|
| 0–8 | **Dialogue with Devis** | Two or three of the questions below. Let him talk; follow up on one concrete case |
| 8–9 | Set up the red team | Pairs in breakout rooms. Each shares their canvas (screen or the uploaded file); the reviewer adds the worst plausible misuse to part 6, the owner writes "what I'd change" |
| 9–14 | **Red team** | Five minutes, timer on screen. Nudge: be specific, and look at the data and the model as well as the hardware |
| 14–19 | **Dialogue the other way** | Devis asks me, or students ask either of us, from part 5 of their canvas. Collect one sharp dilemma from a pair first if chat is quiet |
| 19–20 | Close | Point to the journal prompt (canvas is its first draft), the reading's "Going further", Module 7 on field safety, and Part 107 for US fliers |

On Zoom the canvas swap is the fiddly part. Fall-back: owner screen-shares,
reviewer talks, owner types into part 6. Anyone without a canvas pairs with
someone who has one.

## Questions for Devis

Each starts from something he says in the pre-watch, with timestamps from the
auto-captions (the transcript is in the project folder, not on the site).
The talk itself doesn't touch on ethics, law or safety: it's a sensor and
resolution tour. The bridge is in the questions. ★ = strongest.

1. ★ **Safer for whom? [01:02–02:02]** You present drone and aircraft censuses
   as replacing manual surveys that were "very dangerous and costly". Whose
   risk goes down, and what new risks come in? Think of flying
   beyond visual line of sight, wildlife disturbance, airspace. In your
   group, who owns that responsibility: the pilot, the PI, the
   institution?
2. ★ **Finding individuals, and where they are [35:10, 01:02]** With
   very-high-resolution imagery and deep learning you can pick out single
   animals and map colonies. When a model can find individuals of a
   threatened species, should the coordinates be published? Who decides,
   and has this come up in your own work?
3. ★ **People in the picture [18:07, 32:10, 35:10]** The resolution that
   resolves a buffalo also resolves people, vehicles and homes; you even
   show time series of the EPFL campus. How should ecology projects handle
   people caught incidentally in drone or satellite imagery? And in
   Switzerland and the EU, does GDPR change what you do?
4. **Who can afford to look [09:04–10:04, 31:09, 35:10]** Landsat and
   Sentinel are free; commercial imagery is $10–20/km², and tasking comes
   "with a very high price". Is that an equity problem between well-funded
   labs and researchers in the places being monitored? And what do commercial
   licences stop you sharing: data, or models trained on it?
5. **The big-animal bias [35:10–36:11]** "most of the time people go for the
   very big stuff": whales, elephants. Does building benchmarks around what
   satellites can see shape which species get monitored, and protected?
6. **Who is accountable for the map? [02:02, 04:03–05:03, 36:11]** Expert
   photo-interpretation improves counts, and species distribution models map
   presence everywhere by extrapolation. When those outputs drive
   conservation or land-use decisions, who answers for the errors, and how
   should uncertainty be shown?

Reserve: SAR sees "through clouds" and "at night" [14:05], a way into dual use
if the conversation goes there. Data volume [34:10–35:10] opens compute and
carbon cost.

### The talk in brief

Why remote sensing for biodiversity, across scales: drone and fixed-wing
censuses [01:02], tree species from NEON imagery [02:02], about 1,000 Earth
observation satellites with free products and revisits [03:02], satellite
data feeding species distribution models [04:03]. Then sensors: passive and
active [06:04]; drone RGB versus costly multispectral [08:04]; free missions
versus Planet, Maxar and Airbus [09:04]; SAR [10:04–15:06]; lidar and canopy
structure [15:06]. Then the resolution trade-offs: spatial ("if you want to
track single animals please don't use" Landsat) [18:07], spectral, up to
hyperspectral EnMAP [21:07], and temporal, with clouds and the cost of
tasking [30:09]. To close: higher resolution costs more; use proxies such as
penguin guano in Sentinel-2 [34:10]; WorldView-3 at $10–20/km² lets deep
learning find individual animals [35:10]; remote sensing as covariates in
SDMs, GeoLifeCLEF [36:11]; choosing a sensor is a "dance" between factors
[37:11].

## If Devis turns it round

Prompts he might use, or I can seed in chat, for the dialogue the other way:

- What's the most common way you see students get drone law wrong?
- Isn't capability caution just slowing science down?
- If the rules in the host country are looser than at home, which do you
  follow? (The WildDrone Kenya example.)
- Who should check an AI model before its output is used in the field?

## Before tomorrow evening

- [ ] **Upload link** for canvases: the student page has a placeholder. Course
      Drive or Canvas, or ask the organisers
- [ ] Send the student page link to the course team for the Module 3 page's
      Watch/Read/Complete, with the LOs
- [ ] Check the student page and reading against the latest UK CAA rules
      (changed 1 January 2026)
- [ ] US research flying: Embry-Riddle's TRUST course says "if it isn't for
      fun", Part 107. The statute says otherwise for universities:
      [49 USC 44809, statutory note](https://www.law.cornell.edu/uscode/text/49/44809)
      (P.L. 116-283 §10002: "recreational purpose" includes UAS "operated by an
      institution of higher education for educational or research purposes"),
      and the FAA's [Educational Users](https://www.faa.gov/uas/educational_users)
      page. The student page says Part 107 is the usual route; ask your institution
- [ ] Lesson plan says "Complete sections 1-n" of the canvas: change to
      **1–5** (6 is the in-session red team). Office hours: I'm down as
      tentative, no date yet
- [ ] Justin's talk is on Pitt SharePoint, marked internal: I've not linked
      it from these pages; students get it from the course page
- [ ] Decide on a pre-watch video; if so, add it to the student page under
      "Before the session"
- [ ] Agree the run sheet with Devis and Justin, and send Devis the questions
- [ ] Confirm whether breakout rooms are available for the red team

## Sources and files

- Reading draws on [Kjeld Jensen](https://portal.findresearcher.sdu.dk/en/persons/kjen/), *Flying drones safely and compliantly*, and
  [Tom Richardson](https://www.bristol.ac.uk/people/person/Tom-Richardson-63e47259-1d08-4e30-9353-9b1b22e0f749/), *Drone operations in complex environments* (WildBotics S1,
  Trento, September 2026), and my T2 deck *Ethics in science and the
  capability caution principle*.
- Canvas: built from `~/Documents/GitHub/imageomics-safeethicallegal/canvas/`
  (`node build-canvas.mjs && ./to-pdf.sh`), then copied to
  `public/teaching/imageomics2026/`. Adapted from WildBotics `office/build-canvas.mjs`:
  red team moved to the end, triggers widened to multimodal sensing, and
  Imageomics colours (#245963 teal, #7eac55 lime) and logo.
- Transcript: `~/Documents/GitHub/imageomics-safeethicallegal/transcript/`.
  Auto-captions, lightly cleaned.
- Logo: `Imageomics_ABC.png` from the course site. The repo copies are CC0;
  used here as attribution only.
