<template>
  <div class="jobs-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title inter-italic">Karriere</h1>
        <p class="page-description">
          Werde Teil der Grünen Hecke Familie! Wir suchen motivierte und freundliche Menschen, die unsere Vision teilen.
        </p>
      </div>
    </section>

    <section class="jobs-section">
      <div class="container">
        <div v-if="store.jobPostings.length > 0" class="jobs-list">
          <div 
            v-for="job in store.jobPostings" 
            :key="job.id"
            class="job-card card fade-in-element"
          >
            <div class="job-header">
              <div>
                <h2 class="job-title">{{ job.title }}</h2>
                <div class="job-meta">
                  <span class="job-location">📍 {{ job.location }}</span>
                  <span class="job-type">⏰ {{ job.type }}</span>
                </div>
              </div>
              <span class="job-badge">{{ job.type }}</span>
            </div>

            <div class="job-description">
              <p>{{ job.description }}</p>
            </div>

            <div class="job-section">
              <h3 class="job-section-title">Das bringst du mit:</h3>
              <ul class="job-list">
                <li v-for="(req, index) in job.requirements" :key="index">{{ req }}</li>
              </ul>
            </div>

            <div class="job-section">
              <h3 class="job-section-title">Das bieten wir:</h3>
              <ul class="job-list">
                <li v-for="(benefit, index) in job.benefits" :key="index">{{ benefit }}</li>
              </ul>
            </div>

            <div class="job-footer">
              <span class="job-date">Veröffentlicht: {{ formatDate(job.postedDate) }}</span>
              <NuxtLink to="/kontakt?type=job" class="btn btn-primary">Jetzt bewerben</NuxtLink>
            </div>
          </div>
        </div>
        
        <div v-else class="no-jobs">
          <p>📢 Aktuell sind keine offenen Stellen verfügbar.</p>
          <p>Schau bald wieder vorbei oder sende uns eine Initiativbewerbung!</p>
          <NuxtLink to="/kontakt" class="btn btn-outline mt-3">Initiativbewerbung</NuxtLink>
        </div>
      </div>
    </section>

    <section class="why-us-section">
      <div class="container">
        <h2 class="section-title text-center mb-5">Warum Grüne Hecke?</h2>
        <div class="benefits-grid">
          <div class="benefit-card" v-for="(benefit, index) in benefits" :key="index">
            <div class="benefit-icon">{{ benefit.icon }}</div>
            <h3 class="benefit-title">{{ benefit.title }}</h3>
            <p class="benefit-description">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMainStore } from '~/stores/main'

if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}

const store = useMainStore()

// SEO
useHead({
  title: 'Jobs & Karriere - Grüne Hecke',
  meta: [
    { name: 'description', content: 'Arbeite bei der Grünen Hecke! Entdecke unsere aktuellen Stellenangebote und werde Teil unseres Teams.' }
  ]
})

const benefits = [
  {
    icon: '💰',
    title: 'Faire Bezahlung',
    description: 'Wir zahlen faire Löhne und bieten attraktive Zusatzleistungen.'
  },
  {
    icon: '🕐',
    title: 'Flexible Zeiten',
    description: 'Flexible Arbeitszeiten, die sich an dein Leben anpassen.'
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Tolles Team',
    description: 'Arbeite in einem jungen, dynamischen und familiären Team.'
  },
  {
    icon: '📚',
    title: 'Weiterbildung',
    description: 'Wir fördern deine persönliche und berufliche Entwicklung.'
  },
  {
    icon: '🌱',
    title: 'Wachstum',
    description: 'Wachse mit uns und übernimm Verantwortung in einem wachsenden Unternehmen.'
  },
  {
    icon: '🎉',
    title: 'Events & Kultur',
    description: 'Regelmäßige Team-Events und eine offene, wertschätzende Unternehmenskultur.'
  }
]

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

onMounted(() => {
  nextTick(() => {
    // Animate job cards
    const fadeElements = document.querySelectorAll('.fade-in-element')
    if (fadeElements.length > 0) {
      gsap.from(fadeElements, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        force3D: true,
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.jobs-list',
          start: 'top 85%',
          once: true,
          fastScrollEnd: true,
        }
      })
    }

    // Animate benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card')
    if (benefitCards.length > 0) {
      gsap.from(benefitCards, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        force3D: true,
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.benefits-grid',
          start: 'top 85%',
          once: true,
          fastScrollEnd: true,
        }
      })
    }

    // Refresh ScrollTrigger
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
  })
})
</script>

<style scoped lang="scss">
.jobs-page {
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

.jobs-section {
  padding: 80px 0;
}

.jobs-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.job-card {
  padding: 40px;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;
  gap: 20px;
  flex-wrap: wrap;
}

.job-title {
  font-size: 2rem;
  color: #90EE90;
  margin-bottom: 10px;
  font-weight: 700;
}

.job-meta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  
  span {
    color: #b8e6b8;
    font-size: 1rem;
  }
}

.job-badge {
  background: rgba(144, 238, 144, 0.2);
  color: #90EE90;
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
  border: 2px solid rgba(144, 238, 144, 0.3);
}

.job-description {
  margin-bottom: 30px;
  
  p {
    font-size: 1.125rem;
    line-height: 1.8;
    color: #f5f5f5;
  }
}

.job-section {
  margin-bottom: 30px;
}

.job-section-title {
  font-size: 1.5rem;
  color: #90EE90;
  margin-bottom: 15px;
  font-weight: 700;
}

.job-list {
  list-style: none;
  padding: 0;
  
  li {
    padding: 10px 0 10px 30px;
    position: relative;
    color: #f5f5f5;
    line-height: 1.6;
    
    &::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #90EE90;
      font-weight: bold;
      font-size: 1.25rem;
    }
  }
}

.job-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 25px;
  border-top: 2px solid rgba(144, 238, 144, 0.2);
  flex-wrap: wrap;
  gap: 20px;
}

.job-date {
  color: #b8e6b8;
  font-size: 0.95rem;
}

.no-jobs {
  text-align: center;
  padding: 80px 20px;
  
  p {
    font-size: 1.25rem;
    color: #b8e6b8;
    margin-bottom: 15px;
  }
}

.why-us-section {
  padding: 80px 0;
  background: rgba(0, 0, 0, 0.2);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.benefit-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
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

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.benefit-title {
  font-size: 1.5rem;
  color: #90EE90;
  margin-bottom: 15px;
  font-weight: 700;
}

.benefit-description {
  color: #b8e6b8;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .job-card {
    padding: 30px 20px;
  }
  
  .job-header {
    flex-direction: column;
  }
  
  .job-footer {
    flex-direction: column;
    text-align: center;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .page-hero,
  .jobs-section,
  .why-us-section {
    padding: 40px 0;
  }
}
</style>
