export interface SiteConfig {
  language: string;
  brandName: string;
  copyright: string;
}

export interface NavigationConfig {
  infoLinkLabel: string;
}

export interface ContactEntry {
  label: string;
  value: string;
  href?: string;
}

export interface InfoPageConfig {
  backLinkLabel: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  contactLabel: string;
  contactEntries: ContactEntry[];
}

export interface OverlayConfig {
  frameDetailLabel: string;
  fileLabel: string;
  seriesLabel: string;
  closeLabel: string;
}

export interface ImageItem {
  src: string;
  category: string;
  title: string;
  description: string;
}

export interface GalleryConfig {
  images: ImageItem[];
}

export const siteConfig: SiteConfig = {
  language: "en",
  brandName: "AGENT FACTORY",
  copyright: "© 2026 Agent Factory — Unit Catalog",
};

export const navigationConfig: NavigationConfig = {
  infoLinkLabel: "Info",
};

export const infoPageConfig: InfoPageConfig = {
  backLinkLabel: "Back",
  eyebrow: "About — Plug-and-Play Agent Manufacturing",
  title: "Every unit ships with skill packets and its own template.",
  paragraphs: [
    "The Agent Factory builds autonomous units the way a good workshop builds machines: standard chassis, swappable parts, and a manual that fits in one pocket. Each unit on the vortex wall is a finished product — roll it off the line, plug it into your workflow, and it starts working the same day. No rewiring, no bespoke assembly, no six-week integration project.",
    "A unit is defined by two things. Its skill packets are the loadout: sealed, versioned bundles of capability — search, vision, spreadsheets, slides, video, scheduling — that slot into the chassis like drill bits into a chuck. Its template is the shape of the work it produces: a report, a deck, a model, a poster, a deployment. Packets decide what the unit can do; the template decides what a finished job looks like.",
    "The catalog is organized into six bays — Research, Build, Data, Design, Media, and Ops. Units within a bay share mounting points, so a packet certified on one unit fits its siblings. Scroll the wall to spin the line, click any unit to read its plate: role, installed packets, and the template it was tuned on.",
    "We keep the line small on purpose. Twenty-four units, each one maintained, tested, and documented. When a packet improves, every unit carrying it improves overnight. That is the whole idea of the factory: you never buy a robot, you subscribe to an assembly line that keeps getting better.",
  ],
  contactLabel: "Requisition",
  contactEntries: [
    {
      label: "Sales Desk",
      value: "orders@agentfactory.io",
      href: "mailto:orders@agentfactory.io",
    },
    {
      label: "Integration",
      value: "wire@agentfactory.io",
      href: "mailto:wire@agentfactory.io",
    },
    {
      label: "Plant Floor",
      value: "Bay 7, Assembly District\nBuilding 24, Keilestraat, Rotterdam",
    },
    {
      label: "Hours",
      value: "Line runs 24/7\nDesk staffed 09:00–18:00 CET",
    },
  ],
};

export const overlayConfig: OverlayConfig = {
  frameDetailLabel: "Unit Plate",
  fileLabel: "Unit",
  seriesLabel: "Bay",
  closeLabel: "Close",
};

export const galleryConfig: GalleryConfig = {
  images: [
    {
      src: "/images/agent_01.jpg",
      category: "Research Bay",
      title: "SCOUT-01 — Deep Recon Unit",
      description:
        "Long-range reconnaissance unit for open-web and academic terrain. Skill packets: web-search, scholar, citation-kit, source-triage. Ships with its own Evidence Report template — every claim lands with a numbered source plate, so downstream units can audit the trail without re-walking it.",
    },
    {
      src: "/images/agent_02.jpg",
      category: "Build Bay",
      title: "FORGE-02 — Full-Stack Assembler",
      description:
        "Heavy assembly unit that raises whole applications from a work order. Skill packets: webapp-building, backend-building, drizzle-orm, auth-kit. Tuned on the React + tRPC Scaffold template: frontend, API, and cloud database welded into one frame, delivered as a previewable build.",
    },
    {
      src: "/images/agent_03.jpg",
      category: "Media Bay",
      title: "PIXEL-03 — Image Synthesis Unit",
      description:
        "Studio unit that renders stills from written briefs. Skill packets: text-to-image, style-lock, reference-blend, transparent-cutout. Ships with the 4:5 Catalog Plate template used across this very wall — consistent light, consistent grain, any subject you hand it.",
    },
    {
      src: "/images/agent_04.jpg",
      category: "Design Bay",
      title: "ORBIT-04 — Spatial Gallery Curator",
      description:
        "Curator unit that hangs collections in walkable 3D space. Skill packets: webgl-vortex, lenis-motion, instanced-rendering, overlay-choreo. Tuned on the Vortex Wall template: six hundred frames on a scroll-spun cylinder, fullscreen viewing on click, ESC to step back.",
    },
    {
      src: "/images/agent_05.jpg",
      category: "Data Bay",
      title: "LEDGER-05 — Spreadsheet Analyst",
      description:
        "Counting-house unit for workbooks that have to balance. Skill packets: kimi-excel, formula-engine, three-statement-model, dcf-valuation, comps. Ships with the Linked Financial Model template — assumptions on one sheet, statements wired through, charts that redraw themselves.",
    },
    {
      src: "/images/agent_06.jpg",
      category: "Media Bay",
      title: "SCRIBE-06 — Document Writer",
      description:
        "Drafting unit for documents with a paper trail. Skill packets: kimi-word, tracked-changes, comments, markdown-bridge, docx-repair. Tuned on the Executive Briefing template: cover block, numbered sections, revision marks preserved so your reviewers see every weld.",
    },
    {
      src: "/images/agent_07.jpg",
      category: "Media Bay",
      title: "THESIS-07 — PDF Typesetter",
      description:
        "Press unit for documents that must survive peer review. Skill packets: kimi-pdf, latex-compose, equation-set, table-extract, merge-split. Ships with the Academic Paper template — title block, abstract, numbered equations, references hung in order, camera-ready at the end of the line.",
    },
    {
      src: "/images/agent_08.jpg",
      category: "Media Bay",
      title: "SLATE-08 — Slide Composer",
      description:
        "Projection unit that turns a brief into a deck. Skill packets: kimi-slides, pptd-format, layout-grid, chart-embed, speaker-notes. Tuned on the Pitch Deck template: twelve-slide arc from problem to ask, master slides locked, every chart redrawn natively instead of pasted.",
    },
    {
      src: "/images/agent_09.jpg",
      category: "Design Bay",
      title: "CANVAS-09 — Poster Designer",
      description:
        "Print-shop unit for one-sheet visual arguments. Skill packets: kimi-design, dsl-layout, type-pairing, chart-draw, palette-lock. Ships with the Infographic One-Sheet template — headline band, three evidence blocks, source line — exported as image or editable slides.",
    },
    {
      src: "/images/agent_10.jpg",
      category: "Media Bay",
      title: "SONIC-10 — Audio Producer",
      description:
        "Sound-stage unit for voice and atmosphere. Skill packets: tts-voices, sfx-synth, mix-balance, loudness-target. Tuned on the Podcast Intro template: eight-second bed, voice slate, sting out — rendered straight to mp3 and queued for the edit bay.",
    },
    {
      src: "/images/agent_11.jpg",
      category: "Media Bay",
      title: "REEL-11 — Motion Picture Unit",
      description:
        "Camera unit that shoots twelve seconds at a time. Skill packets: text-to-video, reference-frame, ratio-cut, 720p-render. Ships with the Cinematic Clip template — establishing shot, subject move, closing beat — storyboarded from your brief, delivered as mp4.",
    },
    {
      src: "/images/agent_12.jpg",
      category: "Ops Bay",
      title: "RELAY-12 — Dispatch Scheduler",
      description:
        "Clockwork unit that never forgets a route. Skill packets: cron-jobs, reminder-queue, recurrence-rules, timezone-shift. Tuned on the Daily Digest template: one timed brief per morning, sources pulled overnight, paused or re-routed with a single command.",
    },
    {
      src: "/images/agent_13.jpg",
      category: "Ops Bay",
      title: "VAULT-13 — Data Steward",
      description:
        "Custodian unit for anything worth keeping. Skill packets: object-storage, drizzle-orm, signed-url, migration-kit. Ships with the Cloud Archive template — uploads land in storage, keys indexed in the database, short-lived links issued at the door. Nothing lives in a browser tab.",
    },
    {
      src: "/images/agent_14.jpg",
      category: "Ops Bay",
      title: "GATE-14 — Access Controller",
      description:
        "Doorman unit that checks every credential twice. Skill packets: kimi-oauth, session-kit, role-gates, rate-limit. Tuned on the Login Wall template: sign-in with Kimi at the front, protected routes behind, graceful sign-out — no visitor touches the floor without a badge.",
    },
    {
      src: "/images/agent_15.jpg",
      category: "Research Bay",
      title: "LENS-15 — Vision Analyst",
      description:
        "Inspection unit with an eye for every detail. Skill packets: image-read, ocr-pass, chart-decode, table-sight. Ships with the Annotation Sheet template — regions marked, text lifted, figures transcribed — so a scanned page arrives back as structured, quotable data.",
    },
    {
      src: "/images/agent_16.jpg",
      category: "Data Bay",
      title: "MARKET-16 — Equity Researcher",
      description:
        "Ticker unit wired into the filing cabinets. Skill packets: sec-edgar, xbrl-facts, yahoo-finance, insider-watch. Tuned on the Comps Sheet template: peer table, margin ladder, filing chronology — every figure stamped with the filing it was pulled from.",
    },
    {
      src: "/images/agent_17.jpg",
      category: "Data Bay",
      title: "MACRO-17 — Economics Unit",
      description:
        "Gauging unit for the weather of whole economies. Skill packets: imf-weo, world-bank, fred-series, cross-country-diff. Ships with the Indicator Dashboard template — growth, inflation, debt, and reserves on one panel, historical and forecast lanes side by side.",
    },
    {
      src: "/images/agent_18.jpg",
      category: "Data Bay",
      title: "MEDIC-18 — Health Statistics Unit",
      description:
        "Field unit for public-health terrain. Skill packets: who-stats, unicef-data, indicator-search, time-series-kit. Tuned on the Health Brief template: burden summary, trend chart, regional comparison — written so a minister and a clinician both finish it.",
    },
    {
      src: "/images/agent_19.jpg",
      category: "Ops Bay",
      title: "NOMAD-19 — Route Planner",
      description:
        "Travel unit that packs light and plans heavy. Skill packets: route-draft, day-blocks, budget-ledger, season-check. Ships with the Day-by-Day Itinerary template — mornings, afternoons, evenings in fixed slots, costs running in the margin, rest days respected.",
    },
    {
      src: "/images/agent_20.jpg",
      category: "Design Bay",
      title: "MUSE-20 — Design Researcher",
      description:
        "Curator unit that refuses the average. Skill packets: precedent-recall, dimension-fetch, palette-borrow, anti-default. Tuned on the Moodboard Plate template: a handful of strong references pinned per axis, so every surface in the factory starts from evidence, not habit.",
    },
    {
      src: "/images/agent_21.jpg",
      category: "Build Bay",
      title: "KERNEL-21 — Skill Smith",
      description:
        "The unit that builds the other units' parts. Skill packets: skill-creator, packet-lint, template-audit, version-pin. Ships with the SKILL.md Packet template — trigger conditions, workflow steps, boundary rules — so a new capability arrives sealed, documented, and mountable.",
    },
    {
      src: "/images/agent_22.jpg",
      category: "Ops Bay",
      title: "CLOUD-22 — Edge Operator",
      description:
        "Tower unit stationed at the network's edge. Skill packets: cloudflare-api, workers-deploy, dns-control, cache-rules, graphql-analytics. Tuned on the Edge Deployment template: worker script, route map, KV namespace, and a rollback lever within arm's reach.",
    },
    {
      src: "/images/agent_23.jpg",
      category: "Build Bay",
      title: "QUORUM-23 — Swarm Conductor",
      description:
        "Foreman unit that runs several units at once. Skill packets: orchestration, sub-agent-spawn, parallel-fanout, result-merge. Ships with the Swarm Plan template — work split at the seams, agents dispatched in parallel, plates collected and reconciled into one deliverable.",
    },
    {
      src: "/images/agent_24.jpg",
      category: "Media Bay",
      title: "ECHO-24 — Voice Interface",
      description:
        "Front-desk unit that talks and listens in real time. Skill packets: streaming-tts, speech-catch, turn-taking, voice-clone-guard. Tuned on the Conversation Loop template: greet, clarify, act, confirm — every exchange logged for the floor supervisor.",
    },
  ],
};
