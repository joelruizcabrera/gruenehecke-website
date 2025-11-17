<template>
  <div class="locations-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title inter-italic">Unsere Standorte</h1>
        <p class="page-description">
          Besuche uns an einem unserer Standorte und genieße die entspannte Atmosphäre der Grünen Hecke.
        </p>
      </div>
    </section>

    <section class="locations-section">
      <div class="container">
        <div class="locations-grid">
          <LocationCard 
            v-for="location in store.locations" 
            :key="location.id" 
            :location="location"
            class="fade-in-element"
          />
        </div>
        
        <div v-if="store.locations.length === 0" class="no-locations">
          <p>Aktuell sind keine Standorte verfügbar. Schau bald wieder vorbei!</p>
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="container">
        <h2 class="section-title text-center mb-4">Finde uns</h2>
        <div class="map-placeholder">
          <p>🗺️ Interaktive Karte wird hier angezeigt</p>
          <p class="map-note">
            (Integration mit Google Maps oder einer anderen Mapping-API möglich)
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMainStore } from '~/stores/main'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const store = useMainStore()

// SEO
useHead({
  title: 'Standorte - Grüne Hecke',
  meta: [
    { name: 'description', content: 'Besuche die Grüne Hecke an einem unserer Standorte. Hier findest du alle Adressen, Öffnungszeiten und Kontaktdaten.' }
  ]
})

onMounted(() => {
  // Animate location cards
  gsap.from('.fade-in-element', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.locations-grid',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })
})
</script>

<style scoped lang="scss">
.locations-page {
  min-height: 100vh;
}

.page-hero {
  padding: 60px 0 40px;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid rgba(144, 238, 144, 0.3);
}

.page-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: #90EE90;
  margin-bottom: 20px;
}

.page-description {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #f5f5f5;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

.locations-section {
  padding: 80px 0;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
}

.no-locations {
  text-align: center;
  padding: 60px 20px;
  
  p {
    font-size: 1.25rem;
    color: #b8e6b8;
  }
}

.map-section {
  padding: 80px 0;
  background: rgba(0, 0, 0, 0.2);
}

.map-placeholder {
  background: rgba(255, 255, 255, 0.05);
  border: 2px dashed rgba(144, 238, 144, 0.3);
  border-radius: 20px;
  padding: 80px 40px;
  text-align: center;
  
  p {
    font-size: 1.5rem;
    color: #b8e6b8;
    margin-bottom: 10px;
  }
  
  .map-note {
    font-size: 1rem;
    color: rgba(184, 230, 184, 0.7);
    font-style: italic;
  }
}

@media (max-width: 768px) {
  .locations-grid {
    grid-template-columns: 1fr;
  }
  
  .page-hero,
  .locations-section,
  .map-section {
    padding: 40px 0;
  }
}
</style>
