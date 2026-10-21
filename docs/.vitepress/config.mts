import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ChatConnect',
  description: 'Offizielle Dokumentation & Benutzeranleitung für die ChatConnect WebApp & App',
  lang: 'de-CH',
  base: '/chatconnect-docs/',

  themeConfig: {
    siteTitle: '🌐 ChatConnect',
    
    nav: [
      { text: 'Startseite', link: '/' },
      { text: 'Anleitung', link: '/guide/getting-started' },
      { text: 'Funktionen', link: '/features/messaging' },
      { text: '📡 Offline-Modus', link: '/guide/offline-modus' },
      { text: 'FAQ', link: '/help/faq' },
      { text: '🚀 WebApp öffnen', link: 'https://rhz.internet-box.ch:8443' }
    ],

    sidebar: [
      {
        text: '📖 Erste Schritte',
        collapsed: false,
        items: [
          { text: 'Zugriff & Anmeldung (PWA)', link: '/guide/getting-started' },
          { text: 'Aufbau & Navigation', link: '/guide/layout-und-navigation' },
          { text: 'Profil & Sicherheit', link: '/guide/profil' },
          { text: 'Design & Schriftgröße', link: '/guide/anpassung' }
        ]
      },
      {
        text: '⚡ Kern- & Spezialfunktionen',
        collapsed: false,
        items: [
          { text: '💬 Chat & Dateiversand (50 MB)', link: '/features/messaging' },
          { text: '📡 Offline-Modus & Warteschlange', link: '/guide/offline-modus' },
          { text: '🎨 KI-Bildgenerator & Studio', link: '/features/ki-bildstudio' },
          { text: '🧊 3D-STL/CTL Browser', link: '/features/3d-stl-browser' },
          { text: '✨ 3D-STL Generator', link: '/features/3d-generator' },
          { text: '📖 Markdown-Viewer (.md)', link: '/features/markdown-viewer' },
          { text: '📞 Sprach- & Videoanrufe', link: '/features/calls' },
          { text: '⭕ 24h-Status / Storys', link: '/features/status-stories' }
        ]
      },
      {
        text: '❓ Hilfe & Support',
        collapsed: false,
        items: [
          { text: 'Häufige Fragen (FAQ)', link: '/help/faq' }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Suchen',
            buttonAriaLabel: 'Dokumentation durchsuchen'
          },
          modal: {
            noResultsText: 'Keine passenden Ergebnisse gefunden',
            resetButtonTitle: 'Suche zurücksetzen',
            footer: {
              selectText: 'Auswählen',
              navigateText: 'Navigieren',
              closeText: 'Schliessen'
            }
          }
        }
      }
    },

    docFooter: {
      prev: 'Vorherige Seite',
      next: 'Nächste Seite'
    },

    outline: {
      level: [2, 3],
      label: 'Auf dieser Seite'
    },

    returnToTopLabel: 'Nach oben',
    darkModeSwitchLabel: 'Design',
    lightModeSwitchTitle: 'Heller Modus',
    darkModeSwitchTitle: 'Dunkler Modus',

    footer: {
      message: 'ChatConnect – Moderne Echtzeit-Kommunikation für Web, Mobile & Desktop',
      copyright: 'rhz.internet-box.ch:8443'
    }
  }
})
