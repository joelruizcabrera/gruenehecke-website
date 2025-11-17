# Grüne Hecke - Cannabis Café Website

Eine moderne, SEO-optimierte Website für die Grüne Hecke Cannabis Cafés, gebaut mit Nuxt 4.

## 🌿 Features

- ✅ **Nuxt 4 SSR** - Server-Side Rendering für beste SEO
- ✅ **TypeScript** - Typsichere Entwicklung
- ✅ **Pinia Store** - State Management für dynamische Daten
- ✅ **GSAP Animationen** - Flüssige, moderne Animationen
- ✅ **SMTP E-Mail** - Server-API für Kontaktformulare und Reservierungen
- ✅ **Responsive Design** - Optimiert für Mobile, Tablet und Desktop
- ✅ **Instagram Feed** - Integration für Social Media Posts
- ✅ **Standortverwaltung** - Mehrere Locations mit Öffnungszeiten
- ✅ **Jobs Seite** - Stellenangebote und Karriereportal
- ✅ **Kontaktformular** - Mit Reservierungsfunktion
- ✅ **Google Fonts** - Jost & Inter Schriftarten

## 📋 Voraussetzungen

- Node.js 18+ 
- npm oder yarn oder pnpm

## 🚀 Installation

1. **Dependencies installieren:**
```bash
npm install
# oder
yarn install
# oder
pnpm install
```

2. **Umgebungsvariablen konfigurieren:**
```bash
cp .env.example .env
```

Bearbeite die `.env` Datei und füge deine SMTP-Daten ein:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=noreply@gruenehecke.de
EMAIL_TO=info@gruenehecke.de
SITE_URL=https://gruenehecke.de
```

**Hinweis für Gmail:**
- Verwende ein App-Passwort statt deines normalen Passworts
- Aktiviere "Weniger sichere Apps" in den Google-Einstellungen oder nutze OAuth2

3. **Development Server starten:**
```bash
npm run dev
```

Die Website ist dann verfügbar unter: `http://localhost:3000`

## 🏗️ Production Build

```bash
# Build erstellen
npm run build

# Production Preview
npm run preview
```

## 📁 Projektstruktur

```
gruene-hecke/
├── assets/
│   └── styles/
│       └── main.scss          # Globale Styles und Variablen
├── components/
│   ├── AppHeader.vue          # Navigation Header
│   ├── AppFooter.vue          # Footer mit Links
│   ├── LocationCard.vue       # Standort Karte Component
│   └── InstagramFeed.vue      # Instagram Posts Grid
├── layouts/
│   └── default.vue            # Default Layout
├── pages/
│   ├── index.vue              # Homepage
│   ├── standorte/
│   │   └── index.vue          # Standorte Übersicht
│   ├── jobs.vue               # Karriere Seite
│   └── kontakt.vue            # Kontakt & Reservierung
├── server/
│   └── api/
│       └── contact.post.ts    # SMTP E-Mail API
├── stores/
│   └── main.ts                # Pinia Store (Locations, Jobs, etc.)
├── nuxt.config.ts             # Nuxt Konfiguration
├── package.json
└── README.md
```

## 🎨 Verwendete Technologien

- **Framework:** Nuxt 4
- **UI:** Vue 3 Composition API
- **Styling:** SCSS
- **Animationen:** GSAP + ScrollTrigger
- **State Management:** Pinia
- **E-Mail:** Nodemailer (SMTP)
- **Schriften:** Google Fonts (Jost, Inter)
- **TypeScript:** Full Type Safety

## 📝 Inhalte verwalten

### Standorte hinzufügen/bearbeiten

Bearbeite `stores/main.ts` und füge neue Locations zum `locations` Array hinzu:

```typescript
{
  id: '3',
  name: 'Grüne Hecke West',
  address: 'Weststraße 789',
  city: 'München',
  zipCode: '80331',
  phone: '+49 89 12345678',
  email: 'west@gruenehecke.de',
  coordinates: {
    lat: 48.137154,
    lng: 11.576124
  },
  openingHours: {
    'Montag': '12:00 - 22:00',
    'Dienstag': '12:00 - 22:00',
    // ...
  },
  features: ['Lounge', 'Terrasse', 'WLAN'],
  image: '/images/location3.jpg'
}
```

### Jobs hinzufügen/bearbeiten

Bearbeite `stores/main.ts` und füge neue Jobs zum `jobPostings` Array hinzu.

### Site Settings anpassen

Alle globalen Einstellungen findest du in `stores/main.ts` unter `siteSettings`.

## 🔧 Konfiguration

### SMTP E-Mail Setup

Die E-Mail Konfiguration erfolgt über die `.env` Datei. Unterstützte Provider:
- Gmail
- Outlook
- Custom SMTP Server

### Google Fonts

Schriftarten können in `nuxt.config.ts` angepasst werden:

```typescript
googleFonts: {
  families: {
    Jost: [400, 600, 700, 800],
    Inter: {
      wght: [900],
      ital: [900]
    }
  }
}
```

### SEO

Jede Seite hat individuelle Meta-Tags. Globale SEO-Einstellungen in `nuxt.config.ts`.

## 🎭 GSAP Animationen

Animationen werden mit GSAP + ScrollTrigger realisiert. Beispiele in:
- `pages/index.vue`
- `pages/jobs.vue`
- `layouts/default.vue`

## 📱 Instagram Integration

Aktuell mit Demo-Daten. Für Live-Integration:

1. Instagram Basic Display API oder Graph API einrichten
2. Access Token in `.env` hinzufügen
3. `stores/main.ts` → `fetchInstagramPosts()` implementieren

## 🚢 Deployment

### Vercel / Netlify
```bash
npm run build
```

### Node Server
```bash
npm run build
node .output/server/index.mjs
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
```

## 📄 Lizenz

Proprietary - Grüne Hecke GmbH

## 🤝 Support

Bei Fragen: info@gruenehecke.de

---

**Entwickelt mit 💚 für die Grüne Hecke Community**
