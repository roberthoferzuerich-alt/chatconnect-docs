# 🌐 ChatConnect Docs & Showcase

Dieses Repository enthält die offizielle Dokumentations- und Showcase-Webseite für die **ChatConnect WebApp & App** (`https://rhz.internet-box.ch:8443`), erstellt mit [VitePress](https://vitepress.dev).

---

## 🚀 Lokale Vorschau starten

Um die Dokumentation lokal im Browser zu testen und live zu bearbeiten:

```bash
# 1. In dieses Verzeichnis wechseln
cd chatconnect-docs

# 2. Entwicklungsserver starten
npm run docs:dev
```

Öffne anschließend die im Terminal angezeigte Adresse (z. B. `http://localhost:5173/chatconnect-docs/`).

---

## 📦 Als separates GitHub-Repository veröffentlichen

So veröffentlichst du dieses Verzeichnis als eigenes Repository auf GitHub:

### 1. Neues Repository auf GitHub erstellen
1. Gehe auf [GitHub](https://github.com/new).
2. Vergib den Namen: **`chatconnect-docs`**.
3. Wähle **Public** (damit GitHub Pages kostenlos funktioniert) und erstelle das leere Repository (ohne README / ohne Lizenz anhaken).

### 2. Dieses Verzeichnis hochladen (Git-Befehle)
Öffne ein Terminal in diesem Ordner (`chatconnect-docs`) und führe folgende Befehle aus:

```bash
git init -b main
git add .
git commit -m "feat: initial commit of ChatConnect documentation website"
git remote add origin https://github.com/<DEIN-GITHUB-BENUTZERNAME>/chatconnect-docs.git
git push -u origin main
```

### 3. GitHub Pages aktivieren
1. Gehe in deinem neuen GitHub-Repository auf **Settings** ➔ **Pages**.
2. Wähle unter **Build and deployment** bei **Source** die Option: **GitHub Actions**.
3. Durch die bereits enthaltene Datei `.github/workflows/deploy.yml` wird deine Dokumentation ab sofort bei jedem `git push` vollautomatisch gebaut und unter:
   ```
   https://<DEIN-GITHUB-BENUTZERNAME>.github.io/chatconnect-docs/
   ```
   veröffentlicht!

---

## 📁 Ordnerstruktur

```text
chatconnect-docs/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Vollautomatische GitHub Pages Bereitstellung
├── docs/
│   ├── .vitepress/
│   │   └── config.mts          # Navigation, Sidebar, Suche & Branding
│   ├── index.md                # Startseite mit Hero-Banner & Feature-Karten
│   ├── guide/                  # Schritt-für-Schritt-Anleitungen
│   │   ├── getting-started.md  # Zugriff, Anmeldung & PWA-Installation
│   │   ├── layout-und-navigation.md
│   │   ├── offline-modus.md    # Offline-Warteschlange & Schulweg-Setup
│   │   ├── profil.md
│   │   └── anpassung.md        # Schriftgröße, Designs & Menü
│   ├── features/               # Funktions-Details
│   │   ├── messaging.md        # Chats, Emojis, 50MB-Dateien & Audio
│   │   ├── ki-bildstudio.md    # KI-Bildgenerator & Web-Skalierer
│   │   ├── 3d-stl-browser.md   # Interaktiver 3D-Viewer
│   │   ├── 3d-generator.md     # Parametrischer 3D-Generator
│   │   ├── markdown-viewer.md  # Integrierter .md Reader
│   │   ├── calls.md            # Sprach- & Videoanrufe
│   │   └── status-stories.md   # 24h Storys
│   └── help/
│       └── faq.md              # Häufige Fragen & Antworten
├── package.json
└── README.md
```
