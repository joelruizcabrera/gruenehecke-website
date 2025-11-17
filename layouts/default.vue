<template>
  <div class="app-wrapper">
    <AppHeader />
    
    <main class="main-content">
      <slot />
    </main>
    
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP Plugins registrieren
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

// SEO Meta Tags
useHead({
  htmlAttrs: {
    lang: 'de'
  }
})

onMounted(() => {
  // Globale GSAP Animationen
  gsap.from('.fade-in-element', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.fade-in-element',
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    }
  })
})
</script>

<style scoped lang="scss">
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 80px; // Platz für fixed Header
  
  @media (min-width: 1024px) {
    padding-top: 100px;
  }
}
</style>
