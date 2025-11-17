import { defineStore } from 'pinia'

export interface Location {
  id: string
  name: string
  address: string
  city: string
  zipCode: string
  phone: string
  email: string
  coordinates: {
    lat: number
    lng: number
  }
  openingHours: {
    [key: string]: string
  }
  features: string[]
  image: string
}

export interface JobPosting {
  id: string
  title: string
  location: string
  type: 'Vollzeit' | 'Teilzeit' | 'Minijob' | 'Aushilfe'
  description: string
  requirements: string[]
  benefits: string[]
  postedDate: string
}

export interface InstagramPost {
  id: string
  imageUrl: string
  caption: string
  timestamp: string
  permalink: string
}

export const useMainStore = defineStore('main', {
  state: () => ({
    locations: [
      {
        id: '1',
        name: 'Grüne Hecke Zentrum',
        address: 'Musterstraße 123',
        city: 'Berlin',
        zipCode: '10115',
        phone: '+49 30 12345678',
        email: 'zentrum@gruenehecke.de',
        coordinates: {
          lat: 52.520008,
          lng: 13.404954
        },
        openingHours: {
          'Montag': '12:00 - 22:00',
          'Dienstag': '12:00 - 22:00',
          'Mittwoch': '12:00 - 22:00',
          'Donnerstag': '12:00 - 23:00',
          'Freitag': '12:00 - 00:00',
          'Samstag': '14:00 - 00:00',
          'Sonntag': '14:00 - 22:00'
        },
        features: ['Lounge-Bereich', 'Außenterrasse', 'WLAN', 'Getränke & Snacks'],
        image: '/images/location1.jpg'
      },
      {
        id: '2',
        name: 'Grüne Hecke Nord',
        address: 'Nordweg 45',
        city: 'Hamburg',
        zipCode: '20095',
        phone: '+49 40 98765432',
        email: 'nord@gruenehecke.de',
        coordinates: {
          lat: 53.551086,
          lng: 9.993682
        },
        openingHours: {
          'Montag': '13:00 - 21:00',
          'Dienstag': '13:00 - 21:00',
          'Mittwoch': '13:00 - 21:00',
          'Donnerstag': '13:00 - 22:00',
          'Freitag': '13:00 - 23:00',
          'Samstag': '15:00 - 23:00',
          'Sonntag': 'Geschlossen'
        },
        features: ['Gemütliche Atmosphäre', 'Events', 'WLAN', 'Getränke & Snacks'],
        image: '/images/location2.jpg'
      }
    ] as Location[],
    
    jobPostings: [
      {
        id: '1',
        title: 'Barista / Servicekraft (m/w/d)',
        location: 'Berlin Zentrum',
        type: 'Teilzeit' as const,
        description: 'Wir suchen eine freundliche und zuverlässige Servicekraft für unser Cannabis Café. Du solltest Spaß am Umgang mit Menschen haben und offen gegenüber unserer Cannabis-Kultur sein.',
        requirements: [
          'Mindestalter 21 Jahre',
          'Freundliches und professionelles Auftreten',
          'Erfahrung in der Gastronomie von Vorteil',
          'Teamfähigkeit und Flexibilität',
          'Kenntnisse über Cannabis-Kultur wünschenswert'
        ],
        benefits: [
          'Faire Bezahlung',
          'Flexible Arbeitszeiten',
          'Familiäres Team',
          'Mitarbeiterrabatte',
          'Weiterbildungsmöglichkeiten'
        ],
        postedDate: '2024-11-01'
      },
      {
        id: '2',
        title: 'Schichtleiter (m/w/d)',
        location: 'Hamburg Nord',
        type: 'Vollzeit' as const,
        description: 'Für unseren Standort in Hamburg suchen wir einen erfahrenen Schichtleiter, der Verantwortung übernehmen möchte und unser Team professionell führt.',
        requirements: [
          'Mindestalter 25 Jahre',
          'Mehrjährige Erfahrung in der Gastronomie',
          'Führungserfahrung erforderlich',
          'Organisationstalent',
          'Kenntnisse über Cannabis-Kultur und rechtliche Rahmenbedingungen'
        ],
        benefits: [
          'Attraktives Gehalt',
          'Verantwortungsvolle Position',
          'Gestaltungsspielraum',
          'Weiterbildungsbudget',
          'Betriebliche Altersvorsorge'
        ],
        postedDate: '2024-10-28'
      }
    ] as JobPosting[],
    
    instagramPosts: [
      {
        id: '1',
        imageUrl: '/images/instagram1.jpg',
        caption: 'Willkommen in der Grünen Hecke! 🌿 #cannabiscafe #gruenehecke',
        timestamp: '2024-11-15T10:00:00Z',
        permalink: 'https://instagram.com/p/example1'
      },
      {
        id: '2',
        imageUrl: '/images/instagram2.jpg',
        caption: 'Entspannte Atmosphäre für entspannte Momente 💚',
        timestamp: '2024-11-14T15:30:00Z',
        permalink: 'https://instagram.com/p/example2'
      },
      {
        id: '3',
        imageUrl: '/images/instagram3.jpg',
        caption: 'Unsere neue Lounge ist eröffnet! 🎉',
        timestamp: '2024-11-13T12:00:00Z',
        permalink: 'https://instagram.com/p/example3'
      }
    ] as InstagramPost[],
    
    siteSettings: {
      heroTitle: 'Grüne Hecke',
      heroSubtitle: 'Cannabis Café & Lounge',
      heroDescription: 'Die Grüne Hecke ist ein Cannabis Café ohne Verkauf und Handel mit Cannabis. Genieße unsere entspannte Atmosphäre in unseren modernen Räumlichkeiten.',
      aboutText: 'Willkommen bei der Grünen Hecke – deinem Ort für Entspannung und Genuss. Wir bieten dir eine gemütliche Atmosphäre, in der du dich zurücklehnen und den Moment genießen kannst. Wichtig: Wir verkaufen oder handeln nicht mit Cannabis. Die Grüne Hecke ist reine Gastronomie mit einer besonderen Atmosphäre.',
      contactEmail: 'info@gruenehecke.de',
      contactPhone: '+49 30 12345678',
      socialMedia: {
        instagram: 'https://instagram.com/gruenehecke',
        facebook: 'https://facebook.com/gruenehecke',
        twitter: 'https://twitter.com/gruenehecke'
      }
    }
  }),

  getters: {
    getLocationById: (state) => {
      return (id: string) => state.locations.find(loc => loc.id === id)
    },
    
    getJobById: (state) => {
      return (id: string) => state.jobPostings.find(job => job.id === id)
    },
    
    activeLocations: (state) => {
      return state.locations.filter(loc => loc !== null)
    },
    
    activeJobs: (state) => {
      return state.jobPostings.filter(job => job !== null)
    }
  },

  actions: {
    addLocation(location: Location) {
      this.locations.push(location)
    },
    
    updateLocation(id: string, updates: Partial<Location>) {
      const index = this.locations.findIndex(loc => loc.id === id)
      if (index !== -1) {
        this.locations[index] = { ...this.locations[index], ...updates }
      }
    },
    
    removeLocation(id: string) {
      const index = this.locations.findIndex(loc => loc.id === id)
      if (index !== -1) {
        this.locations.splice(index, 1)
      }
    },
    
    addJobPosting(job: JobPosting) {
      this.jobPostings.push(job)
    },
    
    updateJobPosting(id: string, updates: Partial<JobPosting>) {
      const index = this.jobPostings.findIndex(job => job.id === id)
      if (index !== -1) {
        this.jobPostings[index] = { ...this.jobPostings[index], ...updates }
      }
    },
    
    removeJobPosting(id: string) {
      const index = this.jobPostings.findIndex(job => job.id === id)
      if (index !== -1) {
        this.jobPostings.splice(index, 1)
      }
    },
    
    updateSiteSettings(updates: Partial<typeof this.siteSettings>) {
      this.siteSettings = { ...this.siteSettings, ...updates }
    },
    
    async fetchInstagramPosts() {
      // Hier könnte eine API-Anfrage an Instagram erfolgen
      // Für die Demo verwenden wir die vordefinierten Posts
      console.log('Instagram posts loaded')
    }
  }
})
