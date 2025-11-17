# 🌿 Grüne Hecke - Schnellstart Anleitung

## 📦 Installation in 3 Schritten

### 1. Dependencies installieren
```bash
cd gruene-hecke
npm install
```

### 2. Umgebungsvariablen konfigurieren
```bash
# .env Datei erstellen
cp .env.example .env

# .env bearbeiten und SMTP-Daten eintragen:
# SMTP_HOST=smtp.gmail.com
# SMTP_USER=deine-email@gmail.com
# SMTP_PASS=dein-app-passwort
```

### 3. Development Server starten
```bash
npm run dev
```

Website öffnet sich unter: **http://localhost:3000**

---

## 🎨 Was ist enthalten?

### ✅ Fertige Seiten
- **Homepage** (`/`) - Hero, About, Locations Preview, Instagram Feed
- **Standorte** (`/standorte`) - Alle Locations mit Öffnungszeiten
- **Jobs** (`/jobs`) - Karriereseite mit Stellenangeboten
- **Kontakt** (`/kontakt`) - Kontakt- und Reservierungsformular
- **Impressum** (`/impressum`)
- **Datenschutz** (`/datenschutz`)

### 🔧 Features
- ✅ **Nuxt 4 SSR** - Optimale Performance und SEO
- ✅ **TypeScript** - Type-safe Code
- ✅ **Pinia Store** - Zentrale Datenverwaltung
- ✅ **GSAP Animationen** - Smooth Scroll-Animationen
- ✅ **SMTP E-Mail** - Funktionierendes Kontaktformular
- ✅ **Responsive Design** - Mobile, Tablet, Desktop
- ✅ **Instagram Integration** - Vorbereitet für API
- ✅ **Google Fonts** - Jost & Inter

---

## 📝 Inhalte anpassen

### Standorte bearbeiten
Datei: `stores/main.ts`

```typescript
locations: [
  {
    id: '1',
    name: 'Grüne Hecke Zentrum',
    address: 'Deine Straße 123',
    city: 'Deine Stadt',
    // ... weitere Felder
  }
]
```

### Jobs hinzufügen
Datei: `stores/main.ts`

```typescript
jobPostings: [
  {
    id: '1',
    title: 'Stellentitel',
    location: 'Standort',
    type: 'Vollzeit',
    // ... weitere Felder
  }
]
```

### Texte & Einstellungen
Datei: `stores/main.ts` → `siteSettings`

```typescript
siteSettings: {
  heroTitle: 'Grüne Hecke',
  contactEmail: 'info@gruenehecke.de',
  // ... weitere Einstellungen
}
```

---

## 📧 E-Mail Setup (SMTP)

### Gmail verwenden
1. Google-Konto → Sicherheit
2. 2-Faktor-Authentifizierung aktivieren
3. App-Passwort erstellen
4. In `.env` eintragen:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=deine-email@gmail.com
SMTP_PASS=dein-app-passwort-hier
EMAIL_FROM=noreply@gruenehecke.de
EMAIL_TO=info@gruenehecke.de
```

### Andere E-Mail Provider
- **Outlook**: `smtp-mail.outlook.com`
- **Custom SMTP**: Eigene Server-Details

---

## 🖼️ Bilder hinzufügen

Bilder ablegen in: `public/images/`

### Location Bilder
- `location1.jpg`, `location2.jpg` etc.
- Empfohlen: 800x600px oder höher

### Instagram Posts
- `instagram1.jpg`, `instagram2.jpg`, `instagram3.jpg`
- Empfohlen: 1080x1080px (quadratisch)

---

## 🚀 Production Build

```bash
# Build erstellen
npm run build

# Build testen
npm run preview

# Build deployen (z.B. auf Vercel, Netlify)
# Die .output Datei enthält alles Notwendige
```

---

## 🎯 Nächste Schritte

1. ✅ Projekt installieren und starten
2. 📝 Inhalte in `stores/main.ts` anpassen
3. 📧 SMTP E-Mail konfigurieren
4. 🖼️ Bilder austauschen
5. 🎨 Farben anpassen (optional, in `assets/styles/main.scss`)
6. 🚀 Live deployen

---

## 🆘 Hilfe & Support

### Häufige Probleme

**Node Version zu alt?**
```bash
node --version  # Sollte >= 18 sein
```

**Module nicht gefunden?**
```bash
rm -rf node_modules
npm install
```

**Port 3000 belegt?**
```bash
# In package.json ändern:
"dev": "nuxt dev --port 3001"
```

### Kontakt
Bei Fragen: info@gruenehecke.de

---

## 📚 Dokumentation

- [Nuxt 4 Docs](https://nuxt.com)
- [Pinia Docs](https://pinia.vuejs.org)
- [GSAP Docs](https://greensock.com/docs)

---

**Viel Erfolg mit deiner Grüne Hecke Website! 🌿**
