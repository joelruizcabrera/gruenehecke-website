<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content" ref="heroRef">
          <h1 class="hero-title">
            <span class="inter-italic">{{ store.siteSettings.heroTitle }}</span>
          </h1>
          <p class="hero-subtitle">{{ store.siteSettings.heroSubtitle }}</p>
          <p class="hero-description">{{ store.siteSettings.heroDescription }}</p>
          <div class="hero-cta">
            <NuxtLink to="/standorte" class="btn btn-primary">Unsere Standorte</NuxtLink>
            <NuxtLink to="/kontakt" class="btn btn-outline">Reservierung anfragen</NuxtLink>
          </div>
        </div>
      </div>
      <div class="hero-decoration"></div>
    </section>

    <!-- About Section -->
    <section class="about-section">
      <div class="container">
        <div class="about-content fade-in-element" ref="aboutRef">
          <h2 class="section-title">Willkommen bei der Grünen Hecke</h2>
          <div class="about-text">
            <p>{{ store.siteSettings.aboutText }}</p>
          </div>
          <div class="about-features">
            <div class="feature-card" v-for="(feature, index) in features" :key="index">
              <div class="feature-icon">{{ feature.icon }}</div>
              <h3 class="feature-title">{{ feature.title }}</h3>
              <p class="feature-description">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Locations Preview -->
    <section class="locations-preview">
      <div class="container">
        <h2 class="section-title text-center mb-4">Unsere Standorte</h2>
        <div class="locations-grid">
          <LocationCard 
            v-for="location in store.locations" 
            :key="location.id" 
            :location="location"
            class="fade-in-element"
          />
        </div>
        <div class="text-center mt-4">
          <NuxtLink to="/standorte" class="btn btn-primary">Alle Standorte ansehen</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Instagram Feed -->
    <section class="instagram-section">
      <div class="container">
        <h2 class="section-title text-center mb-4">Folge uns auf Instagram</h2>
        <InstagramFeed class="fade-in-element" />
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Bereit für einen Besuch?</h2>
          <p class="cta-description">Reserviere jetzt deinen Platz oder komm einfach vorbei!</p>
          <div class="cta-buttons">
            <NuxtLink to="/kontakt" class="btn btn-primary">Jetzt reservieren</NuxtLink>
            <NuxtLink to="/jobs" class="btn btn-outline">Wir stellen ein!</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMainStore } from '~/stores/main'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const store = useMainStore()

// SEO
useHead({
  title: 'Grüne Hecke - Cannabis Café & Lounge',
  meta: [
    { name: 'description', content: 'Die Grüne Hecke ist ein Cannabis Café ohne Verkauf und Handel mit Cannabis. Genieße unsere Atmosphäre in unseren Standorten.' }
  ]
})

const heroRef = ref<HTMLElement | null>(null)
const aboutRef = ref<HTMLElement | null>(null)

const features = [
  {
    icon: '🌿',
    title: 'Entspannte Atmosphäre',
    description: 'Genieße eine einzigartige und entspannte Umgebung in unseren modernen Räumlichkeiten.'
  },
  {
    icon: '☕',
    title: 'Getränke & Snacks',
    description: 'Wir bieten eine vielfältige Auswahl an Getränken und leckeren Snacks für jeden Geschmack.'
  },
  {
    icon: '🎵',
    title: 'Events & Musik',
    description: 'Regelmäßige Events und Live-Musik sorgen für beste Unterhaltung.'
  },
  {
    icon: '👥',
    title: 'Community',
    description: 'Triff Gleichgesinnte und werde Teil unserer wachsenden Community.'
  }
]

onMounted(() => {
  // Hero Animation
  if (heroRef.value) {
    gsap.from(heroRef.value.children, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    })
  }

  // About Section Animation
  if (aboutRef.value) {
    gsap.from(aboutRef.value, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: aboutRef.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  }

  // Feature Cards Animation
  gsap.from('.feature-card', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
      trigger: '.about-features',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })

  // Instagram posts animation
  gsap.from('.instagram-post', {
    opacity: 0,
    scale: 0.9,
    duration: 0.5,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.instagram-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })
})
</script>

<style scoped lang="scss">
.home-page {
  position: relative;
}

// Hero Section
.hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 100px 0 50px;
  overflow: hidden;
}

.hero-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  z-index: 2;
  position: relative;
}

.hero-title {
  font-size: clamp(3rem, 8vw, 6rem);
  color: #90EE90;
  margin-bottom: 20px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4);
  line-height: 1.1;
}

.hero-subtitle {
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  color: #b8e6b8;
  margin-bottom: 30px;
  font-weight: 700;
}

.hero-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #f5f5f5;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.8;
}

.hero-cta {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-decoration {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(144, 238, 144, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.3;
  }
}

// About Section
.about-section {
  padding: 100px 0;
}

.about-content {
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  color: #90EE90;
  margin-bottom: 40px;
  font-size: clamp(2rem, 4vw, 3rem);
}

.about-text {
  text-align: center;
  margin-bottom: 60px;
  
  p {
    font-size: 1.25rem;
    line-height: 1.8;
    color: #f5f5f5;
  }
}

.about-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.feature-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  border: 2px solid rgba(144, 238, 144, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(144, 238, 144, 0.5);
    box-shadow: 0 15px 40px rgba(144, 238, 144, 0.2);
  }
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.feature-title {
  color: #90EE90;
  margin-bottom: 15px;
  font-size: 1.5rem;
  font-weight: 700;
}

.feature-description {
  color: #b8e6b8;
  line-height: 1.6;
}

// Locations Preview
.locations-preview {
  padding: 100px 0;
  background: rgba(0, 0, 0, 0.2);
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

// Instagram Section
.instagram-section {
  padding: 100px 0;
}

// CTA Section
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, rgba(26, 77, 46, 0.8) 0%, rgba(45, 95, 63, 0.8) 100%);
  border-top: 2px solid rgba(144, 238, 144, 0.3);
  border-bottom: 2px solid rgba(144, 238, 144, 0.3);
}

.cta-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #90EE90;
  margin-bottom: 20px;
  font-weight: 800;
}

.cta-description {
  font-size: 1.25rem;
  color: #f5f5f5;
  margin-bottom: 40px;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero {
    min-height: 80vh;
    padding: 80px 0 40px;
  }
  
  .about-section,
  .locations-preview,
  .instagram-section,
  .cta-section {
    padding: 60px 0;
  }
  
  .locations-grid {
    grid-template-columns: 1fr;
  }
}
</style>
