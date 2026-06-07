# Dennis Mehlich – Webdesign Website

## Projektstruktur

```
dennis-website/
│
├── index.html              ← Hauptseite (nur Markup, keine Texte hardcoded)
│
├── css/
│   └── style.css           ← Alle Styles (Farben als CSS-Variablen)
│
├── js/
│   └── main.js             ← Interaktionen, Animationen, n8n Chat
│
├── content/
│   └── content.js          ← ✏️  ALLE TEXTE HIER BEARBEITEN
│
├── images/
│   └── logo.png            ← Logo hier ablegen
│
├── docker-compose.yml      ← Docker Setup
└── nginx.conf              ← Nginx Konfiguration
```

---

## Texte bearbeiten

Alle Texte, Links und Inhalte sind in **`content/content.js`** zentral gespeichert.

```js
// Beispiel: Hero-Headline ändern
hero: {
  headline: "Professionelle Websites, die <em>wirklich</em> überzeugen",
  // ↑ Hier ändern
}
```

---

## Mit Docker starten

```bash
# 1. In den Projektordner wechseln
cd dennis-website

# 2. Docker starten
docker-compose up -d

# 3. Im Browser öffnen
http://localhost:8080
```

### Docker stoppen
```bash
docker-compose down
```

---

## Ohne Docker (direkt im Browser)

Einfach `index.html` in einem Browser öffnen.  
Für volle Funktionalität (Module, API-Calls) einen lokalen Server starten:

```bash
# Mit Python
python3 -m http.server 8080

# Mit Node.js (npx)
npx serve .
```

---

## Logo austauschen

Datei `images/logo.png` ersetzen.  
Unterstützte Formate: PNG, SVG, WebP

---

## Was wurde in dieser Version geändert?

### Section "Mein Ansatz" (ehem. "Warum WordPress"):
- ❌ Entfernt: "HTML/KI vs. Baukastensysteme" → "Wix / WordPress"
- ✅ Neu: "Warum kein CMS? Das ist der Unterschied."
- ✅ Neu: Spalten heißen jetzt "Mein Ansatz" vs. "CMS-Lösungen"
- ✅ Neu: Alle 6 Vorteile-Texte überarbeitet und präzisiert
- ✅ Neu: Einleitungstext ohne Markennamen

---

## Integrationen

| Integration | Wo konfigurieren |
|---|---|
| HubSpot Formular | `content/content.js` → `hubspot.formId` |
| n8n Chatbot | `content/content.js` → `n8n.webhookUrl` |
| Google Analytics | `<head>` in `index.html` eintragen |

---

## Farben anpassen

In `css/style.css` ganz oben:

```css
:root {
  --navy:    #0f1631;   /* Hauptfarbe dunkel */
  --blue:    #1e3a8a;   /* Blau mittel */
  --accent:  #3b82f6;   /* Akzentfarbe */
  --light:   #f0f4ff;   /* Hellblau Hintergrund */
}
```
