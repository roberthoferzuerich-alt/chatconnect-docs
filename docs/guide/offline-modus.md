# 📡 Offline-Modus & Automatische Warteschlange

ChatConnect verfügt über ein intelligentes **Offline- & Outbox-System** (`ChatConnectOfflineDB`), das auf moderner Browser-Speichertechnologie (*IndexedDB*) basiert. Es wurde speziell für Situationen entwickelt, in denen Nutzer unterwegs **kein mobiles Internet oder keine SIM-Karte** haben.

---

## 1. Wie funktioniert der Offline-Modus?

1. **Kein Internet nötig beim Verfassen:** Wenn du die WebApp oder das Homescreen-Icon öffnest und gerade weder WLAN noch mobile Daten verfügbar sind, kannst du Chats ganz gewohnt öffnen und Nachrichten tippen, Fotos anhängen oder Sprachnachrichten aufnehmen.
2. **Lokale Speicherung in der Outbox:** Anstatt mit einem Fehler abzubrechen, speichert ChatConnect jede Nachricht blitzschnell und verlustfrei direkt im sicheren Browser-Speicher deines Geräts (`IndexedDB`).
3. **Sofortige Anzeige im Chat:** Deine geschriebene Nachricht erscheint sofort in der Unterhaltung (mit dezent reduzierter Transparenz), sodass du immer genau siehst, was du bereits gesagt hast.
4. **Vollautomatischer Hintergrund-Versand (Auto-Sync):** Sobald dein Gerät wieder mit einem WLAN verbunden ist (z. B. zuhause, in der Schule oder über einen mobilen Hotspot), erkennt ChatConnect das Netz **vollautomatisch im Hintergrund** und sendet alle wartenden Nachrichten der Reihe nach ab!

---

## 2. Was kann alles offline genutzt werden?

| Funktion | Offline möglich? | Verhalten & Details |
| :--- | :---: | :--- |
| 💬 **Textnachrichten** | ✅ **Ja** | Tippe deinen Text wie gewohnt und klicke auf Senden. Die Nachricht wandert direkt in die Warteschlange. |
| 📷 **Bilder & Fotos** | ✅ **Ja** | Foto auswählen oder mit der Kamera aufnehmen, zuschneiden und auf Senden tippen. Das Bild wird lokal gesichert und bei WLAN hochgeladen. |
| 🎤 **Sprachnachrichten** | ✅ **Ja** | Mikrofon antippen, Audionachricht einsprechen und senden. Die Aufnahme (`.m4a` / AAC) wird in voller Qualität lokal gesichert. |
| 📖 **Bestehende Chats lesen** | ✅ **Ja** | Bereits geladene Unterhaltungen bleiben sichtbar und können in aller Ruhe gelesen werden. |
| 📞 **Anrufe & Live-Video** | ❌ *Nein* | Für Echtzeit-Telefonie ist zwingend eine aktive Internetverbindung nötig. |

---

## 3. Die Status-Anzeigen im Überblick

### 1. Gelbes Offline-Banner (oben im Chat)
Sobald dein Gerät die Verbindung zum Internet verliert, blendet ChatConnect oben ein bernsteingelbes Banner ein:

> 📡 **Offline-Modus aktiv – Nachrichten werden gesendet, sobald WLAN da ist** `[ 2 in Warteschlange ]`

* Ein animierter pulsierender Punkt signalisiert, dass der Offline-Schutz aktiv ist.
* Eine Plakette zeigt stets die exakte Anzahl der noch unversendeten Nachrichten an.

### 2. Uhren-Symbol an der Nachricht
* Wartende Nachrichten tragen das Statussymbol **`⏳ Wartet auf WLAN`**.
* Du weißt somit immer ganz genau, welche Nachrichten bereits beim Empfänger angekommen sind und welche noch auf WLAN warten.

### 3. Wartende Nachricht vor dem Senden löschen
* Hast du dich offline vertippt oder möchtest eine Nachricht doch nicht abschicken?
* Klicke einfach auf das kleine Papierkorb-Symbol (`🗑️`) an der wartenden Nachricht.
* Nach Bestätigung wird sie sofort rückstandsfrei aus der lokalen Warteschlange entfernt.

### 4. Grünes Sync-Banner bei Wiederverbindung
Sobald dein Smartphone wieder ein bekanntes WLAN findet:
* Das Banner wechselt sofort auf Smaragdgrün:
  > 🟢 **Wieder im WLAN verbunden – Synchronisiere...**
* Alle Nachrichten werden blitzschnell übertragen.
* Das Uhren-Symbol springt auf die gewohnten Häkchen (`✓✓`).
* Ein Bestätigungston informiert dich akustisch über den erfolgreichen Abschluss.

---

## 4. 💡 Praxis-Tipp: Perfekt für Kinder & Enkel ohne SIM-Karte

Viele Kinder und Jugendliche nutzen ein ausgemustertes Smartphone (z. B. ein iPhone oder Android-Gerät) ohne teuren Mobilfunkvertrag und ohne SIM-Karte:

1. **Einmalig zuhause im WLAN einrichten:**
   * Öffne Safari auf dem iPhone und rufe `https://rhz.internet-box.ch:8443` auf.
   * Logge das Enkelkind ein und setze das Häkchen bei *„Angemeldet bleiben“*.
   * Lege die Seite über **Teilen (`⬆️`) ➔ „Zum Home-Bildschirm“** als App ab.
2. **Unterwegs auf dem Schulweg oder im Bus:**
   * Das Kind öffnet die ChatConnect-App auf dem Homescreen.
   * Es kann eine Sprachnachricht einsprechen (*„Ich habe heute eine 1 in Mathe geschrieben!“*) oder ein Foto zeigen.
   * Die Nachricht wartet mit `⏳` in der Warteschlange.
3. **Ankunft in der Schule oder zuhause:**
   * Sobald sich das Handy mit dem Schul- oder Heim-WLAN verbindet, flitzt die Nachricht sofort ab – komplett ohne SMS oder Telefonnummer!
