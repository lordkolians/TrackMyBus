# TrackMyBus

Real-time urban bus tracking web application for Ceadir-Lunga, Republic of Moldova.

Built for INFOMATRIX 2026 by Stoianov Gheorghi & Bejenari Daniil, Grade X — Theoretical Lyceum Orizont.

---

## What it does

TrackMyBus shows passengers where every bus is right now, when it will arrive at each stop, and whether there are any delays or unusual situations. Currently runs in **SIM mode** (schedule-based simulation). The architecture is GPS-ready — connecting real trackers requires only a data-source swap with no UI changes.

**4 routes · 7 buses · 3 languages (RU / RO / EN) · PWA · works offline**

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
npm run build   # production build → dist/
npm run preview # preview the production build
```

Requires Node.js 18+.

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Map | Leaflet + React-Leaflet + OpenStreetMap |
| Routing geometry | OSRM (public API, results cached in IndexedDB) |
| State | Zustand |
| Styling | Tailwind CSS |
| Data format | GTFS-compatible stops & schedules |
| PWA | Service Worker + offline caching |

---

## Project structure

```
src/
├── engine/          # Core simulation logic (no React)
│   ├── movement.ts  # Bus position advancement & anomaly injection
│   ├── eta.ts       # Arrival time calculation with traffic modelling
│   ├── geo.ts       # Coordinate interpolation along road geometry
│   └── anomaly.ts   # Real-time anomaly detection & alert classification
│
├── services/        # External integrations & persistence
│   ├── osrm.ts      # Fetches real road geometry from OSRM API
│   ├── geoCache.ts  # IndexedDB cache for OSRM responses
│   └── persistence.ts # Saves bus state to localStorage
│
├── stores/          # Zustand global state
│   ├── busStore.ts
│   ├── routeStore.ts
│   └── uiStore.ts
│
├── hooks/
│   ├── useSimulation.ts  # RAF-based simulation loop (60 fps)
│   └── useRouteGeo.ts    # Fetches & caches OSRM geometry per route
│
├── components/      # React UI components
├── data/            # Static route, stop, bus & i18n data
└── types/           # Shared TypeScript interfaces
```

---

## How the simulation works

Each bus has a progress value `p ∈ [0, 1]` representing its position along its route. Every animation frame (`requestAnimationFrame`), `advanceBus()` increments `p` by the bus's speed. When `p` reaches 1 or 0 the direction reverses (out-and-back route).

ETA is calculated from the remaining progress distance, adjusted for:
- **Rush-hour traffic** — speed reduced to 72% during 07:00–09:00 and 17:00–19:00
- **Random delay events** — occasional slowdowns lasting ~55 seconds
- **Dwell time** — 18 seconds added per intermediate stop

The anomaly detector runs on each bus every 2 seconds and raises alerts when a bus stops unexpectedly, moves slower than normal, or makes no forward progress.

---

## Responsible AI use

AI assistants (Claude by Anthropic, ChatGPT) were used to help structure code snippets and brainstorm UI layout ideas. Every suggestion was reviewed, tested, and verified by the team. All route data, stop coordinates, and research (47 resident interviews) were collected independently in Ceadir-Lunga.

---

## Roadmap

| Phase | Description |
|---|---|
| ✅ Now | SIM mode — web app live, 4 routes, PWA, 3 languages |
| Phase 2 | GPS integration — real trackers on buses, live data API |
| Phase 3 | Mobile app (iOS & Android), push notifications, ML-based ETA |
