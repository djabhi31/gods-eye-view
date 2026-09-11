<div align="center">

# 🌐 God's Eye View
### Cloud-Native 3D Intelligence Console & Geospatial Observation Matrix

Photorealistic 3D globe with live aircraft transponders, global maritime shipping, orbital satellite tracking, seismic telemetry, public camera meshes, and hands-free voice control powered by a realtime AI agent.

*No place left behind.*

[![Live Custom Domain](https://img.shields.io/badge/Live_Deployment-godseyeview.earthsphere.in-00f6ff?style=for-the-badge&logo=azure&logoColor=white)](https://godseyeview.earthsphere.in)
[![Original Creator](https://img.shields.io/badge/Original_Creator-Bilawal_Sidhu-F0A63C?style=for-the-badge&logo=youtube&logoColor=white)](https://github.com/bilawalsidhu/gods-eye-view)
[![Enhanced & Maintained](https://img.shields.io/badge/Cloud_Edition-Abhilash_Ghosh-7928CA?style=for-the-badge&logo=github&logoColor=white)](https://github.com/djabhi31)

<br/>

[![Azure App Service](https://img.shields.io/badge/Azure_App_Service-Linux_Node.js_22-0078D4?style=flat-square&logo=microsoftazure&logoColor=white)](https://godseyeview-erdghedbhdhzabhd.centralindia-01.azurewebsites.net)
[![Ecosystem](https://img.shields.io/badge/Ecosystem-EarthSphere_Suite-00DF89?style=flat-square&logo=planetscale&logoColor=white)](https://www.earthsphere.in)
[![Automated Lifetime Sync](https://img.shields.io/badge/Lifetime_Sync-Active_&_Automated-brightgreen?style=flat-square&logo=githubactions&logoColor=white)](.github/workflows/sync-upstream.yml)
[![Security Audit](https://img.shields.io/badge/Security_Audit-0_Leaks_(Passed)-success?style=flat-square&logo=shield&logoColor=white)](SECURITY.md)
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
> ### 🌟 Upstream Origin & Attribution Notice
> **Original Concept & 3D Core**: God's Eye View was conceived, designed, and created by visionary technologist **[Bilawal Sidhu](https://github.com/bilawalsidhu)** and core maintainer **[Sameh Khamis](https://github.com/samehkhamis)** at **[Halfpixel](https://halfpixel.ai)**. All core GLSL shader pipelines, tactical HUD instruments, and live geospatial layer abstractions originate from their canonical repository: **[bilawalsidhu/gods-eye-view](https://github.com/bilawalsidhu/gods-eye-view)**.
> 
> **Cloud Edition Architecture & Engineering**: This repository is the **production-grade, cloud-native distribution** architected, modified, and maintained by **[Abhilash Ghosh (@djabhi31)](https://github.com/djabhi31)**. It transforms God's Eye View from a local-only desktop tool into a scalable, cloud-hosted web application deployed on **Microsoft Azure App Service**, fortified with browser-isolated Bring-Your-Own-Key (BYOK) token storage, an automated lifetime upstream synchronization engine, and deep integration as the 3D twin of the **[EarthSphere](https://github.com/djabhi31/EarthSphere)** intelligence network.

---

<div align="center">

**[⚡ Live Cloud App](https://godseyeview.earthsphere.in)** · **[🚀 Cloud Engineering](#-cloud-edition-engineering--architecture)** · **[🎛️ Tactical Capabilities](#️-what-this-thing-does)** · **[🛰️ Live Layers](#️-whats-on-the-globe)** · **[🌐 Deployment Guide (Free vs Paid)](#-comprehensive-deployment-guide-free-vs-paid)** · **[⚖️ Pros & Cons Comparison](#️-free-vs-paid-hosting-pros--cons)** · **[🔄 Lifetime Sync](#-lifetime-automated-upstream-sync)** · **[👥 Maintainers](#-maintainers--attributions)**

</div>

---

## 🚀 Cloud Edition Engineering & Architecture

While upstream God's Eye View was built as a local-first desktop application (`127.0.0.1:4173`) running through Vite or Pinokio, **[Abhilash Ghosh](https://github.com/djabhi31)** re-engineered the architecture for modern multi-tenant cloud hosting:

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                   CLIENT BROWSER                                        │
│  • Photorealistic 3D Cesium Engine (Google 3D Tiles)                                    │
│  • Browser-Isolated BYOK Storage (localStorage: Cesium, Google, OpenAI)                 │
│  • GLSL Post-Processing Pipeline (Night Vision / Ironbow FLIR / Thermal / CRT / Noir)   │
└────────────────────────────┬───────────────────────────────────────▲────────────────────┘
                             │ HTTPS                                 │ Static Assets &
                             │                                       │ Secure Proxies
┌────────────────────────────▼───────────────────────────────────────┴────────────────────┐
│                       CLOUD HOSTING TIER (PAID OR FREE)                                 │
│                                                                                         │
│  [ Production Server: server.mjs ]                                                      │
│  • High-throughput HTTP/2 asset streaming with MIME classification                     │
│  • Single Page Application (SPA) HTML5 history routing fallback                         │
│  • Health & readiness probe (/api/health) for continuous monitoring                     │
│  • Hardened API proxies with SSRF boundaries & rate-governing                           │
│  • Zero-secret server architecture (no client tokens saved to disk)                     │
└────────────────────────────┬────────────────────────────────────────────────────────────┘
                             │
     ┌───────────────────────┼───────────────────────┬────────────────────────┐
     ▼                       ▼                       ▼                        ▼
[OpenSky ADS-B]       [AISStream AIS]         [CelesTrak TLE]          [NASA FIRMS]
Live Aircraft         Maritime Vessels        Orbital Satellites       Thermal Anomaly
```

### Key Engineering Modifications in this Edition:

1. **☁️ Production Cloud Server (`server.mjs`)**:
   - Replaced Vite development server with a standalone, hardened Node.js HTTP/2 production server.
   - Built-in asset streaming with aggressive client caching, gzip/brotli support, and single-port deployment readiness.
   - Automated health probe endpoint (`GET /api/health`) returning HTTP 200 JSON telemetry for cloud load balancers.

2. **🔐 Client-Side BYOK (Bring Your Own Key) Engine**:
   - Upstream stored API keys in server-side `.env` or macOS Keychain, which fails in multi-user public cloud deployments.
   - Re-engineered key provisioning so visitors input their own keys (`Cesium Ion`, `Google Maps 3D`, `OpenAI Realtime`) directly into browser `localStorage`.
   - Keys are isolated per-visitor, never committed, never stored on the server disk, and never shared across users.

3. **🔄 Lifetime Automated Upstream Sync Engine**:
   - Designed `.github/workflows/sync-upstream.yml` and `scripts/sync-upstream.mjs`.
   - Runs on a daily automated cron schedule to pull new upstream features and bug fixes from Bilawal Sidhu's repo while **safeguarding all cloud files and customizations from being overwritten**.

4. **🛡️ Enterprise Security Hardening**:
   - 100% clean secret-scanning audit across all git branches and commits (zero leaked credentials).
   - Reinforced `.gitignore` strictly blocking `.env*`, `.env*.local`, `*.pem`, and `*.key` files.

5. **🌐 Unified EarthSphere Ecosystem Pairing**:
   - Directly linked as the high-fidelity 3D visualization engine for the [EarthSphere](https://www.earthsphere.in) open-source intelligence suite.

---

## 📊 Feature Matrix: Upstream vs. Abhilash's Cloud Edition

| Architectural Dimension | Upstream Original (Bilawal Sidhu) | Abhilash's Cloud Edition |
| :--- | :--- | :--- |
| **Originator & Visionary** | **Bilawal Sidhu** (@bilawalsidhu) | **Bilawal Sidhu** (Original Creator) |
| **Cloud Architecture & Enhancements** | — | **Abhilash Ghosh** (@djabhi31) |
| **Deployment Target** | Local desktop (`localhost:4173`) | **Cloud Web App (`godseyeview.earthsphere.in`)** |
| **Production Server** | Vite dev/preview server | **Production `server.mjs` with `/api/health`** |
| **Multi-User Key Security** | Plaintext `.env` / macOS Keychain | **Browser-Isolated BYOK (`localStorage`)** |
| **Hosting Compatibility** | Desktop / Pinokio only | **Azure, Render, Railway, Docker, Local** |
| **CI/CD Automation** | Manual git pulls | **GitHub Actions OIDC Workflow to Azure** |
| **Upstream Feature Ingestion** | Manual rebase / merge conflicts | **Automated Daily Lifetime Sync Workflow** |
| **Ecosystem Coupling** | Standalone tool | **Tactical 3D Twin to [EarthSphere](https://earthsphere.in)** |

---

## 🌐 Comprehensive Deployment Guide: Free vs Paid

God's Eye View (Cloud Edition) is engineered to run anywhere Node.js 22+ or Docker is supported. Below are complete, production-tested deployment guides for both **Free** and **Paid** hosting paths.

```
                    ┌────────────────────────────────────────────────────────┐
                    │               WHICH PATH SHOULD YOU CHOOSE?            │
                    └───────────────────┬────────────────┬───────────────────┘
                                        │                │
                        ┌───────────────▼─┐            ┌─▼───────────────┐
                        │    FREE PATH    │            │    PAID PATH    │
                        └───────┬─────────┘            └─┬───────────────┘
                                │                        │
               ┌────────────────┼────────────────┐       │
               ▼                ▼                ▼       ▼
        [ Render Free ]  [ Local / Pinokio ] [ Docker ] [ Azure App Service B1 ]
         Quick public      Zero-cost max GPU   Self-host  Always-On, 0 Cold Start
         hobby demo        desktop speed       homelab    Custom Domain + SLA
```

---

### 🟢 Free Deployment Procedures

Free tiers are ideal for students, open-source contributors, personal hobbyists, and quick demonstrations.

#### Option 1: Render.com (Free Web Service) — Best for Public Web Demo
Render offers a 100% free web service tier with automatic HTTPS and GitHub integration.

1. **Fork or Push**: Ensure this repository is in your GitHub account (`your-username/gods-eye-view`).
2. **Create Web Service**:
   - Go to [dashboard.render.com](https://dashboard.render.com/) and click **New +** ➔ **Web Service**.
   - Select your `gods-eye-view` GitHub repository.
3. **Configure Settings**:
   - **Name**: `gods-eye-view`
   - **Region**: Choose closest to your target audience (e.g., Singapore, Frankfurt, Oregon).
   - **Branch**: `main`
   - **Runtime**: `Node`
   - **Build Command**:
     ```bash
     npm install && npm run build
     ```
   - **Start Command**:
     ```bash
     node server.mjs
     ```
   - **Instance Type**: Select **Free** (512 MB RAM, 0.1 vCPU).
4. **Environment Variables**:
   Add the following under **Environment**:
   - `PORT`: `4173`
   - `NODE_ENV`: `production`
5. **Deploy**: Click **Create Web Service**. Within 3–4 minutes, your live URL will be active at `https://<your-app>.onrender.com`.

> [!TIP]
> **Defeating Free Cold Starts**: Free instances on Render spin down after 15 minutes of inactivity. You can set up a free monitor on [UptimeRobot](https://uptimerobot.com/) or [cron-job.org](https://cron-job.org/) to ping `https://<your-app>.onrender.com/api/health` every 10 minutes to keep the instance warm!

---

#### Option 2: Localhost & Pinokio Desktop — Best for Maximum 120 FPS GPU Speed
Running locally costs $0 and grants full access to your local dedicated GPU (Nvidia/AMD/Apple Silicon) without cloud bandwidth limits.

```bash
# 1. Clone the repository
git clone https://github.com/djabhi31/gods-eye-view.git
cd gods-eye-view

# 2. Install dependencies (Node.js 22 LTS or Node 24 recommended)
npm install

# 3. Start local development server
npm run dev

# Or run the production server locally
npm start
```
Open your browser at **`http://localhost:4173`**.

---

#### Option 3: Self-Hosted Docker Container (Homelab / Free VPS)
Run God's Eye View inside an isolated Docker container on your own server, Raspberry Pi 5, or free Oracle Cloud VM:

```bash
# Build the production container
docker build -t gods-eye-view:latest .

# Run with single-port binding
docker run -d \
  --name gods-eye-view \
  -p 4173:4173 \
  --restart unless-stopped \
  gods-eye-view:latest
```
Access at `http://<your-server-ip>:4173`.

---

### 🔵 Paid Cloud Deployment Procedures

Paid cloud tiers are designed for high-availability production, zero cold starts, enterprise SLAs, custom domain SSL certificates, and heavy geospatial traffic.

#### Option 1: Microsoft Azure App Service (Current Live Production Setup)
This is the **exact enterprise infrastructure** powering **[godseyeview.earthsphere.in](https://godseyeview.earthsphere.in)**:

```bash
# 1. Login to Azure CLI
az login

# 2. Create a dedicated Resource Group in your desired region
az group create --name RG-EarthSphere-Production --location centralindia

# 3. Create a Linux App Service Plan (B1 Basic Tier - ~₹1,100 / $13 per month)
az appservice plan create \
  --name Plan-GodsEyeView-B1 \
  --resource-group RG-EarthSphere-Production \
  --location centralindia \
  --is-linux \
  --sku B1

# 4. Create the Web App with Node.js 22 LTS
az webapp create \
  --name godseyeview \
  --resource-group RG-EarthSphere-Production \
  --plan Plan-GodsEyeView-B1 \
  --runtime "NODE:22-lts" \
  --startup-file "node server.mjs"

# 5. Enable Always-On and HTTP 2.0 (Eliminates cold starts completely)
az webapp config set \
  --name godseyeview \
  --resource-group RG-EarthSphere-Production \
  --always-on true \
  --http20-enabled true
```

#### Configuring Custom Domain & SSL on Azure:
1. **DNS CNAME Record**: In your DNS provider (Cloudflare, GoDaddy, Hostinger), add:
   - `CNAME` ➔ `godseyeview.earthsphere.in` ➔ `godseyeview-erdghedbhdhzabhd.centralindia-01.azurewebsites.net`
   - `TXT` ➔ `asuid.godseyeview.earthsphere.in` ➔ Verification ID from Azure Portal.
2. **Bind Domain in Azure**:
   - Azure Portal ➔ **App Service** ➔ **Custom domains** ➔ **Add custom domain**.
   - Enter `godseyeview.earthsphere.in` ➔ Click **Validate** ➔ **Add**.
3. **Automated Free Managed Certificate**:
   - In **Custom domains**, click **Add binding** ➔ Select **App Service Managed Certificate**.
   - Azure automatically provisions and auto-renews an SNI SSL certificate at zero additional cost!

#### Automated GitHub Actions CI/CD Deployment:
This repository includes a production workflow (`.github/workflows/main_godseyeview.yml`).
Add the following secrets to your GitHub repository under **Settings** ➔ **Secrets and variables** ➔ **Actions**:
- `AZUREAPPSERVICE_CLIENTID_*`
- `AZUREAPPSERVICE_TENANTID_*`
- `AZUREAPPSERVICE_SUBSCRIPTIONID_*`

Every push to `main` automatically builds and deploys to Azure with zero downtime!

---

#### Option 2: DigitalOcean App Platform / Droplet ($6–$12 / month)
- **App Platform**: Connect repo, set build command to `npm install && npm run build`, run command `node server.mjs`, select $5 Basic droplet.
- **Droplet**: Ubuntu 24.04 LTS, install Node.js 22, run `pm2 start server.mjs --name gev`, configure Nginx reverse proxy with Certbot SSL.

---

## ⚖️ Free vs Paid Hosting: Deep Comparison

| Feature / Dimension | 🟢 Free Tier (Render / Local) | 🔵 Paid Cloud (Azure B1 / DigitalOcean) |
| :--- | :--- | :--- |
| **Monthly Cost** | **$0.00 / month** | **~$7.00 to ~$13.00 / month** |
| **Cold Starts** | ⚠️ **Yes (50–60s delay)** after 15m idle on Render | ⚡ **Zero Cold Starts (Always-On active 24/7)** |
| **Memory Allocation (RAM)** | 512 MB (Strict limit, risk of OOM on heavy 3D tiles) | **1.75 GB – 2 GB dedicated RAM** |
| **CPU Performance** | Shared 0.1 vCPU (burstable) | **1.0 Dedicated vCPU (consistent rendering)** |
| **Uptime & Reliability** | ~99.0% (No SLA, subject to idle shutdown) | **99.95% Enterprise SLA** |
| **Custom Domain SSL** | Basic SSL; manual DNS setup | **Native SNI SSL with automated auto-renewal** |
| **AISStream WebSocket** | May drop connection when host sleeps | **Stable, persistent WebSocket connections** |
| **High Traffic Handling** | Rate-limited / throttled | **Smooth concurrency with HTTP/2 multiplexing** |
| **Health Monitoring** | Basic console logs | **Application Insights, CPU/RAM alerts & probes** |
| **Ideal For** | Personal portfolios, testing, hobby exploration | **Live public applications, client demos, 24/7 ops** |

---

### 📋 Detailed Pros & Cons Breakdown

#### 🟢 Free Hosting (Render / Railway / Free VPS)
* **Pros:**
  * ✅ **Zero Financial Commitment**: Perfect for students, open-source learners, or proof-of-concept tests.
  * ✅ **Automatic HTTPS**: Render and cloud free tiers provide instant SSL on subdomains.
  * ✅ **Easy Setup**: Minimal configuration required to see the globe online.
* **Cons:**
  * ❌ **Cold Starts**: When visitors click your link after 15 minutes of inactivity, they wait 50+ seconds for the server container to wake up.
  * ❌ **Memory Constraints**: CesiumJS photorealistic 3D tile proxying and spatial GeoJSON parsing (datacenters, dams, submarine cables) can approach 400MB+ RAM. On a 512MB free container, heavy queries risk Out-Of-Memory (OOM) crashes.
  * ❌ **WebSocket Disconnections**: Live AIS maritime ship streams require long-lived WebSockets; sleeping containers terminate live feeds.

---

#### 🔵 Paid Hosting (Microsoft Azure App Service B1)
* **Pros:**
  * 🚀 **Instant Load Speed**: Always-On daemon keeps Node.js warm 24/7/365. Zero startup lag.
  * 🛡️ **Ample Headroom (1.75 GB RAM)**: Effortlessly buffers Google Photorealistic 3D tiles, OpenSky radar matrices, and high-density Starlink satellite orbits without choking.
  * 🌐 **Branded Custom Domain**: Seamless CNAME mapping (`godseyeview.earthsphere.in`) with automated zero-touch SSL certificate renewals.
  * 🔄 **Enterprise CI/CD**: Native OpenID Connect (OIDC) authentication in GitHub Actions pushes updates securely without hardcoded credentials.
* **Cons:**
  * 💸 **Recurring Cost**: Requires ~$13 / month (or Microsoft Azure for Students / Azure Sponsorship credits).
  * ⚙️ **Initial Cloud Configuration**: Requires configuring Azure Resource Groups, App Service Plans, and DNS TXT verification records.

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

## 🔄 Lifetime Automated Upstream Sync

To ensure this repository remains permanently up to date with Bilawal Sidhu's canonical upstream repo without overwriting Abhilash's Cloud modifications, an automated synchronization architecture is integrated:

```
[ bilawalsidhu/gods-eye-view:main ]
              │
              │ (Daily GitHub Action: .github/workflows/sync-upstream.yml)
              ▼
┌────────────────────────────────────────────────────────────────────────┐
│                   UPSTREAM SYNC ENGINE (sync-upstream.mjs)             │
│                                                                        │
│  1. Fetches latest upstream commits & detects changes                  │
│  2. Backs up Cloud Edition artifacts (server.mjs, Azure configs, etc.) │
│  3. Merges upstream source code changes cleanly                        │
│  4. Restores Cloud Edition customizations & BYOK storage hooks         │
│  5. Executes "npm run build" to ensure 100% build integrity            │
│  6. Commits & pushes to origin/main ➔ Automatically triggers Azure CI  │
└────────────────────────────────────────────────────────────────────────┘
              │
              ▼
[ djabhi31/gods-eye-view:main ] ➔ Auto-Deployed to godseyeview.earthsphere.in
```

### Triggering Manual Sync
You can trigger the sync anytime:
- **From GitHub UI**: Go to **Actions** ➔ **Automated Upstream Sync** ➔ Click **Run workflow**.
- **From Terminal**:
  ```bash
  npm run sync:upstream
  ```

---

## 👥 Maintainers & Attributions

This project represents the convergence of open-source innovation and cloud architecture:

| Role | Person / Entity | Contribution |
| :--- | :--- | :--- |
| **Original Creator & Visionary** | **[Bilawal Sidhu](https://github.com/bilawalsidhu)** | Original concept, shaders, UI design, 3D engine, and viral series |
| **Core Maintainer (Upstream)** | **[Sameh Khamis](https://github.com/samehkhamis)** | Core stability, architecture, and optimizations at Halfpixel |
| **Cloud Edition Maintainer & Architect** | **[Abhilash Ghosh](https://github.com/djabhi31)** | Cloud architecture, Azure deployment, `server.mjs`, BYOK engine, lifetime sync engine, security audits, and EarthSphere integration |

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
