<div align="center">

# 🌐 God's Eye View
### Cloud-Native 3D Intelligence Console & Spy-Satellite Simulator

Photorealistic 3D globe with live aircraft, maritime vessels, orbital satellites, seismic activity, public CCTV meshes, and hands-free voice control powered by a realtime AI agent.

*No place left behind.*

[![Live Cloud Instance](https://img.shields.io/badge/Live_Deployment-godseyeview.earthsphere.in-00f6ff?style=for-the-badge&logo=azure&logoColor=white)](https://godseyeview.earthsphere.in)
[![Original Creator](https://img.shields.io/badge/Original_Creator-Bilawal_Sidhu-F0A63C?style=for-the-badge&logo=youtube&logoColor=white)](https://github.com/bilawalsidhu/gods-eye-view)
[![Enhanced & Maintained](https://img.shields.io/badge/Enhanced_&_Maintained-Abhilash_Ghosh-7928CA?style=for-the-badge&logo=github&logoColor=white)](https://github.com/djabhi31)

<br/>

[![Azure App Service](https://img.shields.io/badge/Azure_App_Service-Linux_Node.js_22-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)](https://godseyeview-erdghedbhdhzabhd.centralindia-01.azurewebsites.net)
[![Ecosystem](https://img.shields.io/badge/Ecosystem-EarthSphere_Suite-00DF89?style=flat-square&logo=planetscale&logoColor=white)](https://www.earthsphere.in)
[![Security Audit](https://img.shields.io/badge/Security_Audit-Passed_(0_Leaks)-brightgreen?style=flat-square&logo=shield&logoColor=white)](SECURITY.md)
[![Upstream Trending](https://img.shields.io/badge/%231_GitHub_Trending-August_2026-F0A63C?style=flat-square&logo=github)](https://github.com/bilawalsidhu/gods-eye-view)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

<br/>

![Orbital HUD, a tracked live globe, FLIR terrain — then OPEN SOURCED](docs/media/hero-open-source-reveal.gif)

<a href="https://www.youtube.com/@bilawalsidhu">
  <img src="docs/media/youtube-popular-videos.png" alt="The God's Eye View video series on YouTube" width="100%">
</a>

▶️ **From the project behind the viral God's Eye View series** *(formerly WorldView)* — [5M+ on YouTube](https://youtube.com/playlist?list=PL6qSg2I-7_koPbDnSMo0QeeHX_RknA2uv&si=nBGYMoHWQw41v93Q) · [25M+ across socials](https://www.google.com/search?q=god%27s+eye+view) · [#8 Product of the Day on Product Hunt](https://www.producthunt.com/products/god-s-eye-view)

*“pretty cool”* — [Brendan Eich](https://x.com/BrendanEich/status/2094592096401490266), creator of JavaScript and co-founder of Mozilla & Brave

</div>

---

> [!IMPORTANT]
> ### 🌟 Upstream Origin & Attribution
> **Original Concept & Architecture**: God's Eye View was conceived and authored by visionary technologist **[Bilawal Sidhu](https://github.com/bilawalsidhu)** and maintainer **[Sameh Khamis](https://github.com/samehkhamis)** at **[Halfpixel](https://halfpixel.ai)**. All core shader mechanics, tactical HUD models, and data layer abstractions remain under the stewardship of the original project. Upstream repository: **[bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view)**.
> 
> **Enhanced Cloud Edition & Engineering**: This repository is the **production-grade, cloud-hosted edition** architected, modified, and maintained by **[Abhilash Ghosh (@djabhi31)](https://github.com/djabhi31)**. It introduces an enterprise Node.js runtime server (`server.mjs`), Microsoft Azure App Service deployment, client-side BYOK (Bring Your Own Key) credential isolation, custom domain SSL integration (`godseyeview.earthsphere.in`), automated CI/CD workflows, and seamless pairing with the **[EarthSphere](https://github.com/djabhi31/EarthSphere)** geospatial platform.

---

<div align="center">

**[⚡ Live Cloud App](https://godseyeview.earthsphere.in)** · **[🚀 Abhilash's Cloud Enhancements](#-abhilashs-enhanced-cloud-edition)** · **[🎛️ Tactical Capabilities](#️-what-this-thing-does)** · **[🛰️ Live Layers](#️-whats-on-the-globe)** · **[🎙️ Voice Agent](#️-talk-to-it)** · **[🔑 BYOK & Keys](#-api-keys--byok-model)** · **[👥 Maintainers & Credits](#-maintainers--attributions)**

</div>

---

## 🚀 Abhilash's Enhanced Cloud Edition

The upstream release of God's Eye View was designed as a local-first desktop application bound to `localhost:4173` via Vite or the Pinokio desktop launcher.

To make God's Eye View instantly accessible worldwide without requiring users to download gigabytes of dependencies or launch terminal commands, **[Abhilash Ghosh](https://github.com/djabhi31)** re-engineered the application for cloud-native deployment:

```
                  ┌─────────────────────────────────────────────────────────────┐
                  │                 USER BROWSER / CLIENT                      │
                  │   • Photorealistic 3D Cesium Engine (Google Tiles)          │
                  │   • Client-Isolated BYOK (localStorage Token Storage)       │
                  │   • WebGL Shaders (NVG / FLIR / CRT / Thermal)              │
                  └──────────────┬───────────────────────────────▲──────────────┘
                                 │ HTTPS                         │ Static Assets
                                 │                               │ & API Proxies
                  ┌──────────────▼───────────────────────────────┴──────────────┐
                  │          MICROSOFT AZURE APP SERVICE (B1 Linux)             │
                  │              godseyeview.earthsphere.in                     │
                  │                                                             │
                  │  ┌───────────────────────────────────────────────────────┐  │
                  │  │           Production Server (server.mjs)              │  │
                  │  │  • HTTP/1.1 & HTTP/2 Asset Streaming                  │  │
                  │  │  • Liveness / Readiness Probes (/api/health)          │  │
                  │  │  • Hardened API Proxy Routing & SSRF Boundaries       │  │
                  │  │  • Graceful Shutdown & Process Isolation              │  │
                  │  └───────────────────────────────────────────────────────┘  │
                  └──────────────────────────────┬──────────────────────────────┘
                                                 │
                   ┌─────────────────────────────┼────────────────────────────┐
                   ▼                             ▼                            ▼
            [OpenSky ADS-B]               [AISStream AIS]              [NASA FIRMS]
            Live Aircraft                  Live Ships                   Active Fires
```

### Key Enhancements Introduced in this Fork:

1. **☁️ Microsoft Azure Cloud Deployment**:
   - Deployed on **Azure App Service (Linux Node.js 22 LTS)** located in the Central India region (`godseyeview-erdghedbhdhzabhd.centralindia-01.azurewebsites.net`).
   - Configured custom DNS routing and automated SSL binding for **[godseyeview.earthsphere.in](https://godseyeview.earthsphere.in)**.
   - Always-On daemon configuration ensuring zero cold-start latency for web visitors.

2. **🔐 Client-Side BYOK (Bring Your Own Key) Security Architecture**:
   - Replaced server-bound `.env` key storage with browser-level `localStorage` isolation (`gev_google_maps_key`, `gev_cesium_token`, `gev_openai_key`).
   - Solved the public cloud multi-user problem: visitors can input their own API keys directly in the browser to unlock Google 3D photorealistic tiles or OpenAI Realtime voice without their keys ever reaching server storage or leaking across users.

3. **🖥️ Production Cloud Server (`server.mjs`)**:
   - Created a dedicated, standalone Node.js production server with MIME-type asset streaming, Single Page Application (SPA) fallback, and API gateway routing.
   - Implemented an automated health check endpoint (`GET /api/health`) for Azure liveness and readiness monitoring.
   - Built robust signal handling (`SIGTERM`, `SIGINT`) and crash guards.

4. **🔄 Continuous Delivery (CI/CD)**:
   - Configured a production GitHub Actions workflow (`.github/workflows/main_godseyeview.yml`) utilizing Azure OpenID Connect (OIDC) federated credentials.
   - Enables zero-downtime automated builds and deployments on every push to `main`.

5. **🛡️ Comprehensive Security Hardening & Zero-Leak Audit**:
   - Performed complete regex pattern audits for Google, OpenAI, AWS, and GitHub tokens across all tracked files and historical commits (0 leaks detected).
   - Hardened `.gitignore` to strictly ignore all `.env*`, `.env*.local`, `*.pem`, and `*.key` files.

6. **🌐 Dual-Suite EarthSphere Ecosystem Integration**:
   - Coupled God's Eye View as the 3D tactical simulator alongside **[EarthSphere](https://www.earthsphere.in)** (the 2D global intelligence and NASA EONET platform), enabling dual-screen operations.

---

## 📊 Comparison Matrix: Upstream vs. Abhilash's Cloud Edition

| Feature / Dimension | Original God's Eye View (Upstream) | Abhilash's Enhanced Cloud Edition |
| :--- | :--- | :--- |
| **Originator & Creator** | **Bilawal Sidhu** (@bilawalsidhu) | **Bilawal Sidhu** (Original Creator) |
| **Cloud Engineering & Modifications** | — | **Abhilash Ghosh** (@djabhi31) |
| **Runtime Architecture** | Localhost desktop app (`127.0.0.1:4173`) | **Cloud-hosted Web Application** |
| **Cloud Infrastructure** | None (Local Vite dev server / Pinokio) | **Microsoft Azure App Service** (Linux B1) |
| **Custom Domain & SSL** | None | **`https://godseyeview.earthsphere.in`** |
| **Key Provisioning** | Local `.env` / macOS Keychain | **Browser-Isolated BYOK (localStorage)** |
| **Production Server** | Vite preview / Dev server | **Production `server.mjs` with Health Probes** |
| **CI/CD Automation** | Manual git pulls | **GitHub Actions OIDC Workflow to Azure** |
| **Ecosystem Coupling** | Standalone tool | **Tactical 3D Twin to [EarthSphere](https://earthsphere.in)** |
| **Security Audit** | Standard | **Audited 0-Leak & Hardened `.gitignore`** |

---

## 🎛️ What This Thing Does

- **🛩️ Cockpit View:** Ride inside a tracked flight — the camera holds the terrain under you all the way down.
- **📡 Contacts:** A 250 km roster of everything near your target — step through live aircraft and drop into any cockpit.
- **🎯 Click-to-Track Anything:** Camera locks on, draws a fading trail, surfaces full metadata — and a tracked fire or vessel hands you off to the nearest live camera in one click.
- **🖊️ Spoken Whiteboard:** Speak annotations onto the world — real boundary polygons, tactical marks, and flyable routes.
- **🛫 3D Hangar:** High-detail 3D models for aircraft classes — Boeing 787, ATR-72, Cessna Citation, Bell 206, MQ-9 Reaper.
- **🎨 GLSL Sensor Optics:** Real-time post-processing shaders over the globe — CRT, NVG (Night Vision), FLIR / Ironbow Thermal, Noir, Anime, and Snow.
- **🟩 Detection Overlay:** Screen-space bounding boxes and tactical identifiers on targets in view.
- **🎖️ Military HUD:** Tactical heads-up display with intelligence-style telemetry, pitch/roll indicators, and compass tapes.
- **🎥 Scene Director:** Capture cinematic camera tours and orbits for briefings and recordings.
- **🔗 Share Links:** Camera coordinates, visual style, active layers, and tracked targets serialize into a single URL.

---

## 🛰️ What's on the Globe

Thirteen real-time intelligence feeds and map sources running concurrently:

| Layer | Intelligence Telemetry | Source | Key Requirement |
|---|---|---|---|
| 🗺️ **Map Stack** | Photorealistic 3D Tiles, Esri Satellite, OSM, Cesium World Terrain | Google / Esri / Cesium | 🟢 Esri & OSM Keyless · 🟡 Free Ion Token · 🔴 Direct Google |
| ✈️ **Live Flights** | 11,000+ live commercial aircraft with route traces | OpenSky + adsb.lol | 🟢 Keyless (🟡 optional OpenSky account) |
| 🎖️ **Military Flights** | ADS-B military airframes highlighted in amber | adsb.lol | 🟢 Keyless |
| 🚢 **Live Vessels** | Real-time global maritime shipping & AIS transponders | AISStream.io | 🟡 Free AISStream key |
| 🛰️ **Satellites** | 800+ orbital objects & Starlink constellation via SGP4 | CelesTrak | 🟢 Keyless |
| 🌍 **Earthquakes** | Global seismic occurrences within the trailing 24 hours | USGS | 🟢 Keyless |
| 🚗 **Traffic** | Simulated urban flow with live TomTom congestion speeds | TomTom + OSM | 🟢 Keyless simulation (🟡 optional TomTom key) |
| 📹 **CCTV Mesh** | ~800 public DOT cameras projected directly into 3D cityscapes | NYC / Austin / Caltrans | 🟢 Keyless |
| 📻 **Radio** | Geolocated world broadcasts with interactive analog tuner | Radio Browser | 🟢 Keyless |
| 🚲 **Bikeshare** | Live urban micro-mobility station capacities | GBFS | 🟢 Keyless |
| 🔥 **Active Fires** | Thermal anomalies and active wildfires | NASA FIRMS | 🟡 Free NASA key |
| 🚀 **Space Missions** | Orbital launches with trajectory replay and staging | Launch Library 2 | 🟢 Keyless |
| 🏛️ **Infrastructure** | 4,351 datacenters, 704 dams, and 712 submarine cables | Curated Datasets | 🟢 Built-in |

---

## 🎙️ Talk to It

> Voice control requires an **OpenAI API Key**. Without one, the entire globe and all 13 layers operate with full manual interaction.

Click **GEV MIC** in the bottom dock, grant microphone permissions, and converse naturally:

- **Scene Awareness:** The AI agent analyzes your live viewport coordinates, camera elevation, and active layers. Ask *"What city am I looking at?"* or *"What airport is below me?"*
- **Target Interrogation:** Click any plane or ship and ask *"What is this flight's destination?"* or *"How fast is this ship cruising?"*
- **Cinematic Commands:** *"Orbit around the Colosseum slowly"* or *"Take me to Tokyo in night vision."*
- **Vector Annotation:** *"Outline the state of California"* or *"Draw a route from Times Square to Central Park and fly it."*

---

## ⚡ Quick Start & Deployment

### Option 1: Instant Cloud Web App (No Setup Required)
Open **[godseyeview.earthsphere.in](https://godseyeview.earthsphere.in)** in any modern web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Run Locally (Node.js)
```bash
# Clone Abhilash's repository
git clone https://github.com/djabhi31/gods-eye-view.git
cd gods-eye-view

# Install dependencies
npm install

# Start development server
npm run dev

# Or start the production cloud server
npm start
```
Open **`http://localhost:4173`** in your browser.

### Option 3: Deploy to Azure App Service
1. Create a Linux Web App on Microsoft Azure (Node.js 22 LTS).
2. Set up GitHub deployment credentials in Azure (User-assigned managed identity or OIDC).
3. Add the following repository secrets to your GitHub repo:
   - `AZUREAPPSERVICE_CLIENTID_*`
   - `AZUREAPPSERVICE_TENANTID_*`
   - `AZUREAPPSERVICE_SUBSCRIPTIONID_*`
4. Set App Service startup command to: `node server.mjs`.
5. Push to `main` — GitHub Actions handles the rest!

---

## 🔑 API Keys & BYOK Model

All basic layers function **100% free and without keys**. Upgrades can be added anytime:

| Key | Purpose | Cost | Where to Get |
|---|---|---|---|
| **Cesium Ion Token** | Photorealistic 3D Google tiles & world terrain | 🟡 Free tier | [cesium.com/ion](https://cesium.com/ion) |
| **Google Maps Key** | Direct Photorealistic 3D Tiles & Place Search | 🔴 Metered | [Google Cloud Console](https://console.cloud.google.com/) |
| **OpenAI API Key** | Hands-free Realtime Voice Control & HUD readout | 🔴 Metered | [platform.openai.com](https://platform.openai.com/) |
| **AISStream Key** | Global live ship tracking | 🟡 Free tier | [aisstream.io](https://aisstream.io/) |
| **NASA FIRMS Key** | Global active fire satellite alerts | 🟡 Free tier | [firms.modaps.eosdis.nasa.gov](https://firms.modaps.eosdis.nasa.gov/api/map_key/) |
| **TomTom Key** | Real-time traffic congestion speeds | 🟡 Free tier | [developer.tomtom.com](https://developer.tomtom.com/) |

### Browser-Level BYOK
When using the live deployment at `godseyeview.earthsphere.in`, click the **POWER UP** chip in the lower-right corner. Keys entered here are saved exclusively into your browser's private `localStorage` and sent only to the respective provider's endpoints. Keys are never saved to server disk or exposed to other visitors.

---

## 👥 Maintainers & Attributions

This project represents the convergence of open-source innovation and cloud architecture:

| Role | Person / Entity | Contribution |
| :--- | :--- | :--- |
| **Original Creator & Visionary** | **[Bilawal Sidhu](https://github.com/bilawalsidhu)** | Original concept, shaders, UI design, 3D engine, and viral series |
| **Core Maintainer (Upstream)** | **[Sameh Khamis](https://github.com/samehkhamis)** | Core stability, architecture, and optimizations at Halfpixel |
| **Cloud Edition Maintainer & Architect** | **[Abhilash Ghosh](https://github.com/djabhi31)** | Cloud architecture, Azure deployment, `server.mjs`, BYOK engine, security audits, and EarthSphere integration |

---

## 📋 Ethical Charter & Responsible OSINT

God's Eye View is designed strictly for **situational awareness, environmental monitoring, educational exploration, and open-source intelligence (OSINT)**.

- **Infrastructure & Systems Only:** This platform models publicly broadcast telemetry (transponders, orbital elements, seismographs, public cameras).
- **Zero Individual Tracking:** This repository contains no features for named-person search, face recognition, or personal surveillance.
- **Safety Disclaimer:** Data displayed may be modeled or delayed. Do not use for commercial flight navigation, maritime steering, or emergency operational decisions.

---

<div align="center">

**🌐 God's Eye View · Cloud Edition**  
*Original Project by Bilawal Sidhu & Halfpixel · Modified, Enhanced & Deployed by Abhilash Ghosh*

**Part of the [EarthSphere](https://github.com/djabhi31/EarthSphere) Geospatial Intelligence Network**

</div>
