# 🌿 Grüne Hecke - Projekt Übersicht

## 📋 Projektbeschreibung

Die Grüne Hecke ist ein **Cannabis Café ohne Verkauf und Handel mit Cannabis**. Diese Website dient als digitale Präsenz mit folgenden Hauptfunktionen:

- **Standortinformationen** mit Öffnungszeiten
- **Online-Reservierungen** über Kontaktformular
- **Karriereportal** für Stellenangebote
- **Social Media Integration** (Instagram)
- **SEO-optimiert** für beste Auffindbarkeit

---

## 🏗️ Technologie-Stack

### Frontend
- **Nuxt 4** - Vue.js Framework mit SSR
- **TypeScript** - Type Safety
- **SCSS** - Styling
- **GSAP** - Animationen

### State Management
- **Pinia** - Zentrale Datenverwaltung

### Backend (Server API)
- **Nuxt Server Routes** - API Endpoints
- **Nodemailer** - SMTP E-Mail Versand

### Schriftarten
- **Jost** (ExtraBold, SemiBold, Bold, Regular)
- **Inter** (Black Italic)

---

## 📁 Projektstruktur

```
gruene-hecke/
│
├── 📄 nuxt.config.ts          # Nuxt Konfiguration
├── 📄 package.json            # Dependencies
├── 📄 tsconfig.json           # TypeScript Config
├── 📄 .env.example            # Umgebungsvariablen Beispiel
├── 📄 README.md               # Hauptdokumentation
├── 📄 SETUP.md                # Schnellstart Anleitung
│
├── 📁 assets/
│   └── styles/
│       └── main.scss          # Globale Styles, Variablen, Mixins
│
├── 📁 components/
│   ├── AppHeader.vue          # Navigation & Mobile Menu
│   ├── AppFooter.vue          # Footer mit Social Links
│   ├── LocationCard.vue       # Standort Karten Component
│   └── InstagramFeed.vue      # Instagram Posts Grid
│
├── 📁 composables/
│   └── useGsap.ts             # GSAP Helper Functions
│
├── 📁 layouts/
│   └── default.vue            # Standard Layout mit Header/Footer
│
├── 📁 pages/
│   ├── index.vue              # 🏠 Homepage
│   ├── standorte/
│   │   └── index.vue          # 📍 Standorte Übersicht
│   ├── jobs.vue               # 💼 Karriere
│   ├── kontakt.vue            # 📧 Kontakt & Reservierung
│   ├── impressum.vue          # ⚖️ Impressum
│   └── datenschutz.vue        # 🔒 Datenschutz
│
├── 📁 server/
│   └── api/
│       └── contact.post.ts    # 📨 E-Mail API Endpoint
│
├── 📁 stores/
│   └── main.ts                # 🗄️ Pinia Store (Locations, Jobs, Settings)
│
└── 📁 public/
    ├── favicon.svg            # Favicon
    └── images/                # Bilder (Locations, Instagram)
```

---

## 🎨 Design System

### Farbpalette
```scss
$primary-green: #2d5f3f      // Haupt-Grün
$light-green: #90EE90         // Hell-Grün (Akzente)
$dark-green: #1a4d2e          // Dunkel-Grün (Hintergrund)
$accent-green: #b8e6b8        // Akzent-Grün
$text-white: #ffffff          // Text Weiß
$text-light: #f5f5f5          // Text Hell
$bg-dark: #0a1f14             // Hintergrund Dunkel
```

### Breakpoints
```scss
$mobile: 768px
$tablet: 1024px
$desktop: 1440px
```

### Schriftarten
- **Überschriften**: Jost (ExtraBold, Bold)
- **Text**: Jost (Regular, SemiBold)
- **Spezielle Akzente**: Inter (Black Italic)

---

## 📄 Seiten im Detail

### 1. Homepage (`/`)
**Komponenten:**
- Hero Section mit Titel & CTA
- About Section mit Feature Cards
- Locations Preview
- Instagram Feed
- CTA Section

**Animationen:**
- Hero: Fade in mit Stagger
- Features: Scale in beim Scrollen
- Location Cards: Slide in

### 2. Standorte (`/standorte`)
**Funktionen:**
- Liste aller Locations
- Öffnungszeiten (aktueller Tag hervorgehoben)
- Kontaktdaten
- Map Platzhalter (für Google Maps Integration)

**Datenquelle:** `stores/main.ts` → `locations`

### 3. Jobs (`/jobs`)
**Funktionen:**
- Liste aller offenen Stellen
- Anforderungen & Benefits
- "Warum Grüne Hecke?" Section
- Direkt zu Bewerbung Button

**Datenquelle:** `stores/main.ts` → `jobPostings`

### 4. Kontakt (`/kontakt`)
**Funktionen:**
- Kontaktformular
- Reservierungsformular (mit Tab-Switch)
- E-Mail Versand via SMTP
- Bestätigungs-E-Mail an Absender
- Validierung

**API:** `server/api/contact.post.ts`

---

## 🔌 API Endpoints

### POST `/api/contact`
**Funktion:** E-Mail Versand für Kontakt und Reservierungen

**Request Body:**
```typescript
{
  name: string
  email: string
  phone?: string
  message: string
  type: 'contact' | 'reservation'
  location?: string      // nur bei reservation
  date?: string         // nur bei reservation
  time?: string         // nur bei reservation
  guests?: number       // nur bei reservation
}
```

**Response:**
```typescript
{
  success: boolean
  message: string
}
```

---

## 🗄️ Pinia Store Struktur

### State
```typescript
{
  locations: Location[]          // Alle Standorte
  jobPostings: JobPosting[]      // Alle Jobs
  instagramPosts: InstagramPost[] // Instagram Feed
  siteSettings: {                // Globale Einstellungen
    heroTitle: string
    contactEmail: string
    // ...
  }
}
```

### Actions
- `addLocation()` - Standort hinzufügen
- `updateLocation()` - Standort bearbeiten
- `removeLocation()` - Standort löschen
- `addJobPosting()` - Job hinzufügen
- `updateJobPosting()` - Job bearbeiten
- `removeJobPosting()` - Job löschen
- `updateSiteSettings()` - Settings ändern
- `fetchInstagramPosts()` - Instagram laden

---

## 🎬 GSAP Animationen

### Verfügbare Helper (useGsap Composable)

```typescript
const { fadeIn, slideInLeft, slideInRight, scaleIn, staggerList, countUp } = useGsap()

// Beispiele:
fadeIn('.element', { duration: 0.8, y: 30 })
slideInLeft('.card', { x: -50 })
scaleIn('.feature', { scale: 0.8, stagger: 0.1 })
staggerList('.list-item', { stagger: 0.15 })
countUp('.counter', 1000, { duration: 2, suffix: '+' })
```

---

## 📧 E-Mail Konfiguration

### Unterstützte Provider
- Gmail
- Outlook/Hotmail
- Custom SMTP Server

### Setup in `.env`
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=noreply@gruenehecke.de
EMAIL_TO=info@gruenehecke.de
```

### E-Mail Templates
- Reservierungsanfrage (HTML formatiert)
- Kontaktanfrage (HTML formatiert)
- Bestätigungs-E-Mail an Absender

---

## 🔍 SEO Optimierung

### Implementiert
✅ Server-Side Rendering (SSR)
✅ Meta Tags pro Seite
✅ Semantic HTML
✅ Image Alt Tags
✅ Structured Data (vorbereitet)
✅ Mobile-First Design
✅ Fast Loading Times
✅ Clean URLs

### Empfohlene Erweiterungen
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] OpenGraph Images
- [ ] Schema.org Markup
- [ ] Google Analytics / Matomo

---

## 📱 Responsive Design

### Breakpoints
- **Mobile First**: Basis-Design für < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Getestete Geräte
- iPhone 12/13/14 Pro
- iPad
- Desktop 1920x1080
- Desktop 2560x1440

---

## 🚀 Deployment

### Empfohlene Plattformen
1. **Vercel** (Empfohlen für Nuxt)
2. **Netlify**
3. **Eigener VPS/Server**

### Build Commands
```bash
npm run build        # Production Build
npm run preview      # Build testen
```

### Umgebungsvariablen
Alle `.env` Variablen müssen auf dem Server gesetzt werden!

---

## 🔄 Updates & Wartung

### Inhalte aktualisieren
1. `stores/main.ts` bearbeiten
2. Build neu erstellen
3. Deployen

### Dependencies aktualisieren
```bash
npm update
npm audit fix
```

---

## 📞 Support & Kontakt

**Technische Fragen:**
- GitHub Issues (falls Repository vorhanden)
- E-Mail: dev@gruenehecke.de

**Inhaltliche Fragen:**
- E-Mail: info@gruenehecke.de

---

## 📝 Changelog

### Version 1.0.0 (November 2024)
- ✅ Initial Release
- ✅ Alle Kernfeatures implementiert
- ✅ Responsive Design
- ✅ E-Mail Funktionalität
- ✅ GSAP Animationen
- ✅ SEO Optimierung

---

## 🎯 Roadmap (Zukünftige Features)

### Phase 2
- [ ] Instagram API Live-Integration
- [ ] Interaktive Karte (Google Maps)
- [ ] Online Tisch-Reservierung mit Kalender
- [ ] Newsletter Anmeldung
- [ ] Blog/News Section

### Phase 3
- [ ] Multi-Language Support (EN, DE)
- [ ] Member Login Bereich
- [ ] Events Kalender
- [ ] Online Shop Integration
- [ ] App Integration

---

**Projekt erstellt mit 💚 für die Grüne Hecke Community**

Stand: November 2024
