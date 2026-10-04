---
title: "Safe, ethical, legal"
description: "A ten-minute read on operating drones, camera traps, acoustic recorders and the AI behind them safely, ethically and legally, under the right frameworks."
course: "Experiential AI & Ecology 2026 · Module 3: multimodal ecosystem sensing"
partnerLogo:
  src: "/teaching/imageomics2026/imageomics-abc-logo.png"
  alt: "Imageomics Institute and ABC Global Center"
toc: true
---

Devis Tuia's crash course takes you from satellites a few hundred kilometres up
to a drone a few tens of metres above a herd. Add camera traps, acoustic
recorders and eDNA, and the AI that turns their data into counts and maps, and
you have an extraordinary toolkit for ecology. Every capability in it is also a
responsibility. This reading covers three overlapping ones:

- **Safe:** nobody, human or animal, gets hurt.
- **Ethical:** you do what you *should* do, not only what you *can*.
- **Legal:** you follow the rules that apply where and how you work.

They overlap, but they are not the same. As [Kjeld Jensen](https://portal.findresearcher.sdu.dk/en/persons/kjen/) of the [SDU Drone Centre](https://www.sdu.dk/en/forskning/sduuascenter)
puts it to new drone researchers, you can be compliant but still unsafe, if the
rules are incomplete or applied mechanically; and you can be safe but not
compliant, if you break a formal requirement even when the real risk is low.
Aim for all three. Drones get most of the detail here, because they bring
aviation law with them; the principles apply to every sensor you deploy.

## Safe

### Assess the risk before you go

Every university and most field organisations have a **fieldwork risk
assessment** process. Use it: it is there to make you think, not to collect
signatures. The pattern is the same everywhere:

1. **Hazards:** what could cause harm? Think people, animals, equipment and
   environment.
2. **Who could be harmed, and how badly?** Rate likelihood and severity.
3. **Controls:** what reduces the risk? Work down the
   hierarchy of controls: remove the hazard, substitute, engineer it out,
   change procedures, and only then rely on personal protective equipment.
   The UK HSE's [guide to risk assessment](https://www.hse.gov.uk/simple-health-safety/risk/index.htm)
   is a short introduction.
4. **What happens when it goes wrong?** Emergency plans, communications,
   nearest hospital, who knows where you are.
5. **Review** it on site, and after anything that nearly went wrong.

The course has its own field safety plan and checklist (under Course
policies on the [course site](https://imageomics-abc-edu.github.io/AI-Ecology-2026/)),
and Module 7 covers safe and inclusive fieldwork (see the [syllabus](https://imageomics-abc-edu.github.io/AI-Ecology-2026/syllabus/syllabus/)). For a general model, the UK
universities' [guidance on health and safety in fieldwork](https://www.usha.org.uk/wp-content/uploads/2023/03/MASTERUSHA_Safety-in-Fieldwork-Guide.pdf)
(USHA/UCEA) is thorough.

For drones, aviation adds its own structure. In the UK and EU, anything beyond
the low-risk *Open* category needs an operational risk assessment, usually
built on [SORA](https://www.easa.europa.eu/en/domains/drones-air-mobility/operating-drone/specific-category-civil-drones),
the Specific Operations Risk Assessment. SORA separates **ground risk** (who
and what is underneath you) from **air risk** (what else is in the sky), then
asks what mitigations bring each down. Even if you never write one, that split
is a useful way to think about any flight.

### Use procedures, every time

Kjeld's two safety rules, "based on years of experience trying (not) to injure
students":

1. **Develop and use procedures and checklists.** If you don't, at some point
   you will forget something critical.
2. **Never have the propellers fitted and the battery connected at the same
   time**, unless you are about to take off.

[Tom Richardson](https://www.bristol.ac.uk/people/person/Tom-Richardson-63e47259-1d08-4e30-9353-9b1b22e0f749/) of [Bristol Flight Lab](https://flightlab.bristol.ac.uk/) has flown drones beyond visual line of
sight in Guatemala, Papua New Guinea, Montserrat, Kenya and elsewhere. His
lessons from those deployments are as true of a camera-trap grid or an
acoustic array as of a drone:

- **Do your homework,** and work closely with local people and institutions.
- **Do the paperwork before you go.** Permits take months.
- **Recce** the site first if you can.
- **Have a clear test plan, and be ready to be flexible.** Beware scope creep.
- **Pack carefully and lightly, with checklists.**
- **Plan rest days, and be realistic.** Tired teams make mistakes.
- **Don't count on one deployment.** The best results come from several visits.
- **Keep structured records,** with photos and video.

### Remember who else is at risk

Your risk assessment should include the animals. Drones can disturb wildlife
in ways a person on the ground would not, and the response depends on species,
altitude, approach and noise: see
[Hodgson & Koh (2016)](https://doi.org/10.1016/j.cub.2016.04.001) for best
practice and [Mulero-Pázmány et al. (2017)](https://doi.org/10.1371/journal.pone.0178448)
for a review of the evidence. Camera traps and recorders disturb less, but you
still visit them: think about scent, trampling and the trails you create.

It should also include the people near your site, and anyone downstream of
your outputs. If an automated detector misses a poacher, or overcounts a
population, someone may act on a wrong answer. Who checks the model?

## Ethical

### Technology is not ethically neutral

The design choices you make decide what your system can do, and to whom:
which sensors, how much autonomy, what data you keep, what you release. In
multimodal sensing, for example:

- A **thermal drone** that finds animals at night also finds people.
- **Camera traps** photograph hunters, herders, villagers and researchers.
  [Sharma et al. (2020)](https://doi.org/10.1002/2688-8319.12033) propose an
  ethical code of conduct for the people your traps capture, and platforms
  such as [Wildlife Insights](https://www.wildlifeinsights.org/faq) remove
  human images and hide exact locations from public data.
- **Acoustic recorders** pick up speech as well as birdsong; voice detection
  can strip it out before analysis ([Cretois et al., 2022](https://doi.org/10.1111/2041-210X.14005)).
- **Precise locations** of rare species are valuable to poachers and
  collectors: [Lindenmayer & Scheele (2017)](https://doi.org/10.1126/science.aan1362)
  argue some should not be published at all.
- **Very-high-resolution satellite imagery** that resolves a single animal also
  resolves homes and vehicles.
- An **open-source model** for tracking animals can track people.

Conservation technology has been used against the communities who live where
it is deployed, and drone surveillance can reshape who holds power in a
landscape ([Sandbrook, 2015](https://doi.org/10.1007/s13280-015-0714-0);
[Millner, 2020](https://doi.org/10.1016/j.polgeo.2020.102163)).
[Sandbrook et al. (2021)](https://doi.org/10.1111/csp2.374) set out principles
for the socially responsible use of conservation monitoring technology and
data. They are the best single place to start.

### Design values in from the start

**Value-sensitive design** ([Friedman & Hendry, 2019](https://mitpress.mit.edu/9780262039536/value-sensitive-design/))
treats ethics as part of design, not a form at the end. Ask: who are the
stakeholders, direct and indirect, human and non-human? Which values are at
stake, and where do they conflict? Then turn each value into something you can
build or test. For example:

| | Privacy | Animal welfare |
|---|---|---|
| **Value** | Privacy of people living near the study site | Wildlife isn't harmed or disturbed by the research |
| **Norm** | People captured by accident aren't identifiable | Approaches stay below a disturbance threshold |
| **Design requirement** | Detect and blur people on the device, before storage; geofence villages | Minimum altitude and approach rules; abort on a behavioural response |

**Capability caution** ([Cawthorne & Devos, 2020](https://doi.org/10.1109/ICUAS48674.2020.9214008))
is the design habit that goes with it: set "good enough" for the mission, then
stop. Ask of each capability whether you need it, and how it could be misused.
Their five principles make a good checklist:

1. **Context of use:** where, by whom, under whose rules?
2. **Privacy:** what does it record that it doesn't need?
3. **Jobs and human skills:** whose work does it change or replace?
4. **Safety, security and misuse:** who could use it, or its data, for harm?
5. **The future:** what will it make possible in ten years, in other hands?

This is what the [capability audit canvas](/teaching/imageomics2026/#3-start-your-capability-audit-canvas)
asks you to do for your own work.

### Share data fairly

Open data makes science better, but open is not always fair or safe. The
[FAIR principles](https://www.go-fair.org/fair-principles/) (findable,
accessible, interoperable, reusable) are about data; the
[CARE principles](https://www.gida-global.org/careprinciples) for Indigenous data
governance (collective benefit, authority to control, responsibility, ethics)
are about people. Ask who benefits from your data and models, whether the
communities where you collect them gain anything, and whether locations of
sensitive species need generalising before release: GBIF's
[best practice for sensitive species data](https://doi.org/10.15468/doc-5jp4-5g10)
explains how.

### Your institution's ethics process

Most institutions require ethics review if your work involves any of:
animals, including disturbance; human participants or personal data,
including people captured by accident; fieldwork abroad; genetic resources
or eDNA; Indigenous lands or data; security-sensitive data; or
export-controlled technology. Find the committee, its template and its lead
times early. Approval can take months.

## Legal

:::important[You are responsible for your tech]
This is my reading of the rules as they stand in October 2026, not legal
advice. Drone rules change often and differ between countries. It is up to
you to operate within the requirements of the place you fly and of your own
institution, which may be stricter than the law.
:::

This section concentrates on drones, because flying puts you under aviation
law wherever you are. Always check the current position with the national
authority where you will fly.

### UK and EU: risk-based, not purpose-based

The UK and EU regulate drones by **risk**, not by why you fly. There is no
distinction between recreational and commercial flying: a hobby flight and a
research survey with the same drone in the same place follow the same rules.
Flights fall into three categories:

- **Open:** low risk, with limits on mass, height (120 m), distance from
  people and visual line of sight. No authorisation needed, but you need the
  right registration and online test.
- **Specific:** anything beyond Open, such as flying closer to people, beyond
  visual line of sight, or with heavier drones. Needs an operational
  authorisation from the national authority, based on a risk assessment.
- **Certified:** the highest risk, regulated like crewed aviation.

**In the UK,** the [Civil Aviation Authority](https://www.caa.co.uk/drones/open-category/drone-code/)
(CAA) runs two registrations: a free **Flyer ID** for the pilot (pass the
online theory test) and an **Operator ID** for the person or organisation
responsible for the drone. The rules changed on 1 January 2026: a Flyer ID is
now needed from 100 g, and new drones carry UK class marks. The CAA's
[Drone Code updates](https://www.caa.co.uk/drones/open-category/drone-code/updates/)
log what has changed. Research beyond the Open category needs an
[operational authorisation](https://www.caa.co.uk/drones/specific-category/)
in the Specific category.

**In the EU,** [EASA](https://www.easa.europa.eu/en/domains/drones-air-mobility/operating-drone)
sets the rules and each country's aviation authority runs them. Register as an
operator, and pass the free **A1/A3 online training and exam**, in the country
where you live. EASA keeps a list of the
[national aviation authorities](https://www.easa.europa.eu/en/domains/civil-drones/naa),
and its [operating a drone](https://www.easa.europa.eu/en/domains/drones-air-mobility/operating-drone)
pages explain the categories.

### US: recreational or Part 107

The [FAA](https://www.faa.gov/uas) does distinguish by purpose. There are
two routes:

- **[Part 107](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-107)** (14 CFR Part 107), the general rule for flying for
  any purpose, including work and research. You need a
  [Remote Pilot Certificate](https://www.faa.gov/uas/commercial_operators/become_a_drone_pilot),
  from an in-person knowledge test, and your drone registered on
  [FAADroneZone](https://faadronezone-access.faa.gov/).
- **The recreational exception, [49 U.S.C. § 44809](https://www.law.cornell.edu/uscode/text/49/44809).** You can fly
  without Part 107 only if you keep to *all* of its limits: flown strictly for
  recreational purposes, following a community-based organisation's safety
  guidelines, within visual line of sight, below 400 ft in uncontrolled
  airspace, with authorisation in controlled airspace, giving way to crewed
  aircraft, registered, and having passed
  [TRUST](https://www.faa.gov/uas/recreational_flyers/knowledge_test_updates).

So training courses, Embry-Riddle's TRUST included, say that if you're not
flying for fun you need Part 107. **The exception is universities.** Since
2021, a note to § 44809 (section 10002 of
[Public Law 116-283](https://www.govinfo.gov/content/pkg/PLAW-116publ283/pdf/PLAW-116publ283.pdf), amending section 350 of the FAA Reauthorization
Act of 2018) says that a "recreational purpose" includes a drone "operated by
an institution of higher education for educational or research purposes".
The FAA's [Educational Users](https://www.faa.gov/uas/educational_users) page explains it.

My interpretation: this lets a university's research flights use the
recreational route, but only within every limit above, and it is the
institution's flying, not yours as an individual. It does not cover research
for a company, a government agency or an NGO. Many universities require
Part 107 for any research flight anyway, so check your institution's drone
policy before you rely on the exception. TRUST is a good foundation either
way.

### Everywhere: check before you fly

Many countries restrict drones heavily, require permits to import one, or ban
them in protected areas; some require a local pilot. Check with the national
aviation authority, the protected-area authority and your local partners, well
before you travel. Use an airspace app to check restrictions on the day: see
the [before-the-session page](/teaching/imageomics2026/#1-get-your-drone-basics)
for the main ones. In the UK, check the MoD's new
[prohibited places](https://www.legislation.gov.uk/uksi/2026/64/contents/made)
too.

### Beyond aviation

Drones are where the law is most visible, but other rules apply to all
sensing:

- **Privacy and data protection.** Images, video and audio of identifiable
  people are personal data. In the UK and EU, the GDPR applies, even when you
  captured someone by accident. See the UK ICO's
  [guidance on drones](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/cctv-and-video-surveillance/guidance-on-video-surveillance-including-cctv/additional-considerations-for-technologies-other-than-cctv/unmanned-aerial-systems-uas-drones/),
  EASA's [drones and privacy](https://www.easa.europa.eu/en/domains/civil-drones/privacy)
  page, and the CAA's [privacy rules](https://www.caa.co.uk/drones/open-category/moving-on-to-more-advanced-flying/privacy-rules-when-flying-drones/).
  In the US, privacy law varies by state.
- **Wildlife and protected areas.** Disturbing protected species can be an
  offence, and most protected areas need a research permit. Some species have
  minimum approach distances that apply to drones too.
- **Genetic resources.** eDNA and other samples may fall under the
  [Nagoya Protocol](https://www.cbd.int/abs/) on access and benefit sharing.
- **Export controls.** Thermal cameras, some drones and some software are
  dual-use items, controlled under the EU's
  [Regulation 2021/821](https://eur-lex.europa.eu/eli/reg/2021/821/oj) and its
  UK and US equivalents. Taking them abroad can need a licence.
- **Data licences.** Commercial satellite imagery comes with terms that may
  stop you sharing it, or models trained on it.

## Next

Bring your capability audit canvas to the session. We'll swap canvases and
red-team each other's: find the worst plausible misuse of someone else's
system, and decide what you'd change in your own.

*Thanks to [Kjeld Jensen](https://portal.findresearcher.sdu.dk/en/persons/kjen/) ([SDU Drone Centre](https://www.sdu.dk/en/forskning/sduuascenter)) and [Tom Richardson](https://www.bristol.ac.uk/people/person/Tom-Richardson-63e47259-1d08-4e30-9353-9b1b22e0f749/)
([Bristol Flight Lab](https://flightlab.bristol.ac.uk/)), whose WildBotics talks this draws on.*
