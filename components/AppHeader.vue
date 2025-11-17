<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <NuxtLink to="/" class="logo">
          <NuxtImg src="/images/logo.svg" width="100"></NuxtImg>
        </NuxtLink>
        
        <nav class="nav-desktop" :class="{ 'active': mobileMenuOpen }">
          <NuxtLink to="/" class="nav-link" @click="closeMobileMenu">Home</NuxtLink>
          <NuxtLink to="/standorte" class="nav-link" @click="closeMobileMenu">Standorte</NuxtLink>
          <NuxtLink to="/jobs" class="nav-link" @click="closeMobileMenu">Jobs</NuxtLink>
          <NuxtLink to="/kontakt" class="nav-link" @click="closeMobileMenu">Kontakt</NuxtLink>
        </nav>
        
        <button 
          class="mobile-menu-btn" 
          @click="toggleMobileMenu"
          :aria-label="mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'"
        >
          <span class="hamburger" :class="{ 'active': mobileMenuOpen }"></span>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div v-if="mobileMenuOpen" class="mobile-menu-overlay" @click="closeMobileMenu">
        <nav class="nav-mobile" @click.stop>
          <NuxtLink to="/" class="nav-link-mobile" @click="closeMobileMenu">Home</NuxtLink>
          <NuxtLink to="/standorte" class="nav-link-mobile" @click="closeMobileMenu">Standorte</NuxtLink>
          <NuxtLink to="/jobs" class="nav-link-mobile" @click="closeMobileMenu">Jobs</NuxtLink>
          <NuxtLink to="/kontakt" class="nav-link-mobile" @click="closeMobileMenu">Kontakt</NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(26, 77, 46, 0.95);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  padding: 20px 0;
  
  &.scrolled {
    padding: 15px 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    background: rgba(26, 77, 46, 0.98);
  }
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  
  .logo-text {
    font-size: clamp(1.5rem, 3vw, 2rem);
    color: #90EE90;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    
    &:hover {
      color: #b8e6b8;
      transform: scale(1.05);
    }
  }
}

.nav-desktop {
  display: none;
  gap: 30px;
  
  @media (min-width: 768px) {
    display: flex;
  }
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.125rem;
  position: relative;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #90EE90;
    transition: width 0.3s ease;
  }
  
  &:hover,
  &.router-link-active {
    color: #90EE90;
    
    &::after {
      width: 100%;
    }
  }
}

.mobile-menu-btn {
  display: block;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
  
  @media (min-width: 768px) {
    display: none;
  }
}

.hamburger {
  display: block;
  width: 30px;
  height: 2px;
  background: #90EE90;
  position: relative;
  transition: all 0.3s ease;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background: #90EE90;
    transition: all 0.3s ease;
  }
  
  &::before {
    top: -8px;
  }
  
  &::after {
    bottom: -8px;
  }
  
  &.active {
    background: transparent;
    
    &::before {
      top: 0;
      transform: rotate(45deg);
    }
    
    &::after {
      bottom: 0;
      transform: rotate(-45deg);
    }
  }
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 31, 20, 0.98);
  backdrop-filter: blur(10px);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    display: none;
  }
}

.nav-mobile {
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
}

.nav-link-mobile {
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 2rem;
  transition: all 0.3s ease;
  
  &:hover,
  &.router-link-active {
    color: #90EE90;
    transform: scale(1.1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
