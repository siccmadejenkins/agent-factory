# AGENT FACTORY — Autonomous Agent Chassis & Skill Packet Manufacturing

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React 19](https://img.shields.io/badge/React-19.2-61dafb.svg)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black.svg)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3-646cff.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178c6.svg)](https://www.typescriptlang.org/)

> **"Every unit ships with skill packets and its own template."**  
> The Agent Factory builds autonomous agent units the way an industrial workshop builds precision machinery: standardized chassis, swappable capability packets, and deterministic output templates.

---

## 🌪️ Overview

**Agent Factory** is a 3D WebGL showroom and catalog for modular, plug-and-play autonomous agents. Built on **React 19**, **Three.js**, **GSAP**, and **Lenis smooth scrolling**, the interface presents an instanced cylindrical vortex wall of 24 specialized agent units that rotate dynamically with mouse wheel or touch velocity.

Clicking any unit in the 3D space smoothly projects it into a fullscreen **Unit Plate** inspection modal, displaying its installed skill packets, operational bay, role description, and execution templates.

---

## 🏛️ The 24 Autonomous Units Across 6 Specialized Bays

The factory floor is organized into six operational bays with standardized mounting points:

| Bay | Unit ID | Designation | Key Skill Packets & Loadout | Output Template |
| :--- | :--- | :--- | :--- | :--- |
| **Research** | `SCOUT-01` | Deep Recon Unit | `web-search`, `scholar`, `citation-kit`, `source-triage` | Evidence Report (numbered source plates) |
| **Build** | `FORGE-02` | Full-Stack Assembler | `webapp-building`, `backend-building`, `drizzle-orm`, `auth-kit` | React + tRPC Full-Stack Scaffold |
| **Media** | `PIXEL-03` | Image Synthesis | `text-to-image`, `style-lock`, `reference-blend`, `cutout` | 4:5 Catalog Plate (consistent grain & lighting) |
| **Design** | `ORBIT-04` | Spatial Curator | `webgl-vortex`, `lenis-motion`, `instanced-rendering` | 3D Vortex Wall Gallery |
| **Data** | `LEDGER-05` | Spreadsheet Analyst | `kimi-excel`, `formula-engine`, `three-statement-model`, `dcf` | Linked Financial Model (auto-redrawing charts) |
| **Media** | `SCRIBE-06` | Document Writer | `kimi-word`, `tracked-changes`, `comments`, `markdown-bridge` | Executive Briefing (preserved revision marks) |
| **Media** | `THESIS-07` | PDF Typesetter | `kimi-pdf`, `latex-compose`, `equation-set`, `table-extract` | Academic Paper (numbered equations & references) |
| **Media** | `SLATE-08` | Slide Composer | `kimi-slides`, `pptd-format`, `layout-grid`, `chart-embed` | Pitch Deck (native redrawn charts) |
| **Design** | `CANVAS-09` | Poster Designer | `kimi-design`, `dsl-layout`, `type-pairing`, `palette-lock` | Infographic One-Sheet (3 evidence blocks) |
| **Media** | `SONIC-10` | Audio Producer | `tts-voices`, `sfx-synth`, `mix-balance`, `loudness-target` | Podcast Intro (voice slate + bed) |
| **Media** | `REEL-11` | Motion Picture Unit | `text-to-video`, `reference-frame`, `ratio-cut`, `720p-render` | Cinematic Clip (12-second storyboard) |
| **Ops** | `RELAY-12` | Dispatch Scheduler | `cron-jobs`, `reminder-queue`, `recurrence-rules`, `tz-shift` | Daily Timed Digest (overnight ingestion) |
| **Ops** | `VAULT-13` | Data Steward | `object-storage`, `drizzle-orm`, `signed-url`, `migration-kit` | Cloud Archive (short-lived door links) |
| **Ops** | `GATE-14` | Access Controller | `kimi-oauth`, `session-kit`, `role-gates`, `rate-limit` | Protected Login Wall (badge authentication) |
| **Research** | `LENS-15` | Vision Analyst | `image-read`, `ocr-pass`, `chart-decode`, `table-sight` | Annotation Sheet (structured quotable figures) |
| **Data** | `MARKET-16` | Equity Researcher | `sec-edgar`, `xbrl-facts`, `yahoo-finance`, `insider-watch` | Comps Sheet (peer margin ladder) |
| **Data** | `MACRO-17` | Economics Unit | `imf-weo`, `world-bank`, `fred-series`, `cross-country-diff` | Macro Indicator Dashboard |
| **Data** | `MEDIC-18` | Health Statistics | `who-stats`, `unicef-data`, `indicator-search`, `time-series` | Public Health Brief |
| **Ops** | `NOMAD-19` | Route Planner | `route-draft`, `day-blocks`, `budget-ledger`, `season-check` | Day-by-Day Itinerary |
| **Design** | `MUSE-20` | Design Researcher | `precedent-recall`, `dimension-fetch`, `palette-borrow` | Moodboard Plate (evidence-based design) |
| **Build** | `KERNEL-21` | Skill Smith | `skill-creator`, `packet-lint`, `template-audit`, `version-pin` | Sealed `SKILL.md` Capability Packet |
| **Ops** | `CLOUD-22` | Edge Operator | `cloudflare-api`, `workers-deploy`, `dns-control`, `cache-rules` | Edge Cloudflare Worker Deployment |
| **Build** | `QUORUM-23` | Swarm Conductor | `orchestration`, `sub-agent-spawn`, `parallel-fanout`, `merge` | Swarm Plan (parallel dispatch & plate reconcile) |
| **Media** | `ECHO-24` | Voice Interface | `streaming-tts`, `speech-catch`, `turn-taking`, `clone-guard` | Real-time Conversation Loop |

---

## ⚡ Tech Stack & Architecture

* **Frontend Framework:** React 19 + TypeScript + Vite v7
* **3D Graphics & Shaders:** Three.js with custom GLSL instanced vertex and fragment shaders:
  * `instancedVertexShader`: Quaternion axis-angle rotations, dynamic cylindrical Z-flow, and aspect-ratio scaling.
  * `instancedFragmentShader`: Instanced UV atlas packing for sub-millisecond 60 FPS texture rendering.
* **Physics & Kinematics:** Lenis smooth scrolling + GSAP interpolation.
* **Styling & Components:** Tailwind CSS v3 + Radix UI / shadcn primitive suite.
* **Routing:** `react-router` v7 (`/` for 3D Vortex Wall, `/info` for Factory Workshop Requisition).

---

## 🚀 Quick Start

### 1. Installation
```bash
git clone https://github.com/siccmadejenkins/agent-factory.git
cd agent-factory
npm install
```

### 2. Development Server
```bash
npm run dev
```

### 3. Production Build & Preview
```bash
npm run build
npm run preview
```

---

## ⚙️ Configuration

The entire factory catalog, branding, unit plates, and copy are 100% config-driven via [`src/config.ts`](src/config.ts):

* **`siteConfig`**: Brand name, language code, copyright footer.
* **`navigationConfig`**: Header links and routing controls.
* **`infoPageConfig`**: Factory bio, requisition contact list, and plant floor hours.
* **`galleryConfig`**: The array of 24 units, their high-resolution plate images, skill packet descriptions, and bay classifications.

---

## 📜 License

MIT License © 2026 `siccmadejenkins` / Athena-Hermes Sovereign Syndicate.
