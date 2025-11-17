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
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// GSAP Plugins registrieren
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)

  // Performance-Konfiguration
  ScrollTrigger.config({
    limitCallbacks: true,
    syncInterval: 150,
  })
}

// SEO Meta Tags
useHead({
  htmlAttrs: {
    lang: 'de'
  }
})

onMounted(() => {
  nextTick(() => {
    // Globale GSAP Animationen - nur wenn Elemente existieren
    const fadeElements = document.querySelectorAll('.fade-in-element')

    if (fadeElements.length > 0) {
      gsap.from(fadeElements, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        force3D: true,
        clearProps: 'all',
        scrollTrigger: {
          trigger: fadeElements[0],
          start: 'top 85%',
          once: true,
          fastScrollEnd: true,
        }
      })
    }

    // ScrollTrigger nach allen Animationen refreshen
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
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
