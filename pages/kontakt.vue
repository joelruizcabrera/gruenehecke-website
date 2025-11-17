<template>
  <div class="contact-page">
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title inter-italic">Kontakt</h1>
        <p class="page-description">
          Hast du Fragen oder möchtest eine Reservierung vornehmen? Wir freuen uns auf deine Nachricht!
        </p>
      </div>
    </section>

    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Information -->
          <div class="contact-info">
            <div class="info-card card">
              <h2 class="info-title">Kontaktinformationen</h2>
              
              <div class="contact-item">
                <div class="contact-icon">📧</div>
                <div>
                  <h3 class="contact-label">E-Mail</h3>
                  <a :href="`mailto:${store.siteSettings.contactEmail}`" class="contact-link">
                    {{ store.siteSettings.contactEmail }}
                  </a>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div>
                  <h3 class="contact-label">Telefon</h3>
                  <a :href="`tel:${store.siteSettings.contactPhone.replace(/\s/g, '')}`" class="contact-link">
                    {{ store.siteSettings.contactPhone }}
                  </a>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">🕐</div>
                <div>
                  <h3 class="contact-label">Erreichbarkeit</h3>
                  <p class="contact-text">Mo-Fr: 10:00 - 18:00 Uhr</p>
                </div>
              </div>

              <div class="social-section">
                <h3 class="contact-label">Folge uns</h3>
                <div class="social-links">
                  <a 
                    v-if="store.siteSettings.socialMedia.instagram"
                    :href="store.siteSettings.socialMedia.instagram" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="social-link"
                    aria-label="Instagram"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    v-if="store.siteSettings.socialMedia.facebook"
                    :href="store.siteSettings.socialMedia.facebook" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="social-link"
                    aria-label="Facebook"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <div class="form-tabs">
              <button 
                @click="formType = 'contact'"
                :class="{ active: formType === 'contact' }"
                class="tab-button"
              >
                Kontaktanfrage
              </button>
              <button 
                @click="formType = 'reservation'"
                :class="{ active: formType === 'reservation' }"
                class="tab-button"
              >
                Reservierung
              </button>
            </div>

            <form @submit.prevent="handleSubmit" class="contact-form card">
              <h2 class="form-title">
                {{ formType === 'reservation' ? 'Reservierung anfragen' : 'Kontakt aufnehmen' }}
              </h2>

              <div class="form-group">
                <label for="name">Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  required
                  placeholder="Dein Name"
                />
              </div>

              <div class="form-group">
                <label for="email">E-Mail *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  required
                  placeholder="deine@email.de"
                />
              </div>

              <div class="form-group">
                <label for="phone">Telefon</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="formData.phone"
                  placeholder="+49 123 456789"
                />
              </div>

              <!-- Reservation specific fields -->
              <template v-if="formType === 'reservation'">
                <div class="form-group">
                  <label for="location">Standort *</label>
                  <select id="location" v-model="formData.location" required>
                    <option value="">Bitte wählen</option>
                    <option v-for="location in store.locations" :key="location.id" :value="location.name">
                      {{ location.name }}
                    </option>
                  </select>
                </div>

                <div class="form-row">
                  <div class="form-group">
                    <label for="date">Datum *</label>
                    <input 
                      type="date" 
                      id="date" 
                      v-model="formData.date" 
                      required
                      :min="today"
                    />
                  </div>

                  <div class="form-group">
                    <label for="time">Uhrzeit *</label>
                    <input 
                      type="time" 
                      id="time" 
                      v-model="formData.time" 
                      required
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="guests">Anzahl Personen *</label>
                  <input 
                    type="number" 
                    id="guests" 
                    v-model.number="formData.guests" 
                    required
                    min="1"
                    max="20"
                    placeholder="Anzahl Personen"
                  />
                </div>
              </template>

              <div class="form-group">
                <label for="message">Nachricht *</label>
                <textarea 
                  id="message" 
                  v-model="formData.message" 
                  required
                  :placeholder="formType === 'reservation' ? 'Besondere Wünsche oder Anmerkungen' : 'Deine Nachricht an uns'"
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                {{ isSubmitting ? 'Wird gesendet...' : 'Absenden' }}
              </button>

              <div v-if="submitMessage" class="submit-message" :class="{ 'success': submitSuccess, 'error': !submitSuccess }">
                {{ submitMessage }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useMainStore } from '~/stores/main'
import { useRoute } from 'vue-router'

const store = useMainStore()
const route = useRoute()

// SEO
useHead({
  title: 'Kontakt & Reservierung - Grüne Hecke',
  meta: [
    { name: 'description', content: 'Kontaktiere die Grüne Hecke oder reserviere deinen Platz. Wir freuen uns auf deine Nachricht!' }
  ]
})

const formType = ref<'contact' | 'reservation'>('contact')
const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const formData = ref({
  name: '',
  email: '',
  phone: '',
  location: '',
  date: '',
  time: '',
  guests: 1,
  message: ''
})

const today = computed(() => {
  const date = new Date()
  return date.toISOString().split('T')[0]
})

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        ...formData.value,
        type: formType.value
      }
    })

    submitSuccess.value = true
    submitMessage.value = 'Vielen Dank! Deine Nachricht wurde erfolgreich versendet. Wir melden uns bald bei dir.'
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      phone: '',
      location: '',
      date: '',
      time: '',
      guests: 1,
      message: ''
    }

  } catch (error: any) {
    submitSuccess.value = false
    submitMessage.value = error.data?.message || 'Es gab ein Problem beim Versenden. Bitte versuche es später erneut.'
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
    
    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  }
}

onMounted(() => {
  // Check if there's a type query parameter
  const type = route.query.type
  if (type === 'job' || type === 'reservation') {
    formType.value = 'contact'
  }
})
</script>

<style scoped lang="scss">
.contact-page {
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

.contact-section {
  padding: 80px 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
}

.info-card {
  padding: 40px;
}

.info-title {
  font-size: 2rem;
  color: #90EE90;
  margin-bottom: 30px;
  font-weight: 700;
}

.contact-item {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  align-items: flex-start;
}

.contact-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.contact-label {
  font-size: 1.125rem;
  color: #90EE90;
  margin-bottom: 5px;
  font-weight: 600;
}

.contact-link {
  color: #b8e6b8;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #90EE90;
  }
}

.contact-text {
  color: #f5f5f5;
}

.social-section {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px solid rgba(144, 238, 144, 0.2);
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.social-link {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(144, 238, 144, 0.1);
  border-radius: 50%;
  color: #90EE90;
  transition: all 0.3s ease;
  
  &:hover {
    background: #90EE90;
    color: #1a4d2e;
    transform: translateY(-3px);
  }
}

.form-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.tab-button {
  flex: 1;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(144, 238, 144, 0.3);
  border-radius: 10px 10px 0 0;
  color: #b8e6b8;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #90EE90;
  }
  
  &.active {
    background: rgba(144, 238, 144, 0.1);
    border-color: #90EE90;
    color: #90EE90;
  }
}

.contact-form {
  padding: 40px;
}

.form-title {
  font-size: 1.75rem;
  color: #90EE90;
  margin-bottom: 30px;
  font-weight: 700;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.submit-message {
  margin-top: 20px;
  padding: 15px 20px;
  border-radius: 10px;
  font-weight: 600;
  text-align: center;
  
  &.success {
    background: rgba(144, 238, 144, 0.2);
    color: #90EE90;
    border: 2px solid rgba(144, 238, 144, 0.5);
  }
  
  &.error {
    background: rgba(255, 100, 100, 0.2);
    color: #ff6b6b;
    border: 2px solid rgba(255, 100, 100, 0.5);
  }
}

@media (max-width: 768px) {
  .contact-section {
    padding: 40px 0;
  }
  
  .info-card,
  .contact-form {
    padding: 30px 20px;
  }
}
</style>
