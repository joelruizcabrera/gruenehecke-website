<template>
  <div class="location-card card">
    <div class="location-image" :style="{ backgroundImage: `url(${location.image})` }">
      <div class="location-badge">{{ location.city }}</div>
    </div>
    
    <div class="location-content">
      <h3 class="location-name">{{ location.name }}</h3>
      
      <div class="location-info">
        <div class="info-item">
          <span class="info-icon">📍</span>
          <span class="info-text">{{ location.address }}, {{ location.zipCode }} {{ location.city }}</span>
        </div>
        
        <div class="info-item" v-if="location.phone">
          <span class="info-icon">📞</span>
          <a :href="`tel:${location.phone.replace(/\s/g, '')}`" class="info-link">{{ location.phone }}</a>
        </div>
        
        <div class="info-item">
          <span class="info-icon">✉️</span>
          <a :href="`mailto:${location.email}`" class="info-link">{{ location.email }}</a>
        </div>
      </div>
      
      <div class="location-hours">
        <h4 class="hours-title">Öffnungszeiten</h4>
        <div class="hours-list">
          <div 
            v-for="(hours, day) in location.openingHours" 
            :key="day"
            class="hours-item"
            :class="{ 'current-day': isToday(day) }"
          >
            <span class="day">{{ day }}</span>
            <span class="hours">{{ hours }}</span>
          </div>
        </div>
      </div>
      
      <div class="location-features">
        <span 
          v-for="(feature, index) in location.features" 
          :key="index"
          class="feature-tag"
        >
          {{ feature }}
        </span>
      </div>
      
      <NuxtLink :to="`/standorte/${location.id}`" class="btn btn-primary btn-full">
        Mehr erfahren
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Location } from '~/stores/main'

interface Props {
  location: Location
}

defineProps<Props>()

const isToday = (day: string): boolean => {
  const days = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
  const today = days[new Date().getDay()]
  return day === today
}
</script>

<style scoped lang="scss">
.location-card {
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
}

.location-image {
  width: 100%;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-color: rgba(144, 238, 144, 0.2);
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 15px;
}

.location-badge {
  background: rgba(144, 238, 144, 0.95);
  color: #1a4d2e;
  padding: 8px 20px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
}

.location-content {
  padding: 30px;
}

.location-name {
  font-size: 1.75rem;
  color: #90EE90;
  margin-bottom: 25px;
  font-weight: 700;
}

.location-info {
  margin-bottom: 25px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.info-icon {
  font-size: 1.25rem;
  flex-shrink: 0;
}

.info-text {
  color: #f5f5f5;
  line-height: 1.6;
}

.info-link {
  color: #b8e6b8;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #90EE90;
  }
}

.location-hours {
  margin-bottom: 25px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.hours-title {
  font-size: 1.25rem;
  color: #90EE90;
  margin-bottom: 15px;
  font-weight: 700;
}

.hours-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.hours-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  &.current-day {
    background: rgba(144, 238, 144, 0.1);
    padding: 8px 10px;
    border-radius: 5px;
    font-weight: 700;
    color: #90EE90;
  }
}

.day {
  color: #b8e6b8;
}

.hours {
  color: #f5f5f5;
}

.location-features {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 25px;
}

.feature-tag {
  display: inline-block;
  padding: 6px 15px;
  background: rgba(144, 238, 144, 0.1);
  border: 1px solid rgba(144, 238, 144, 0.3);
  border-radius: 50px;
  font-size: 0.85rem;
  color: #b8e6b8;
  font-weight: 600;
}

.btn-full {
  width: 100%;
  text-align: center;
}
</style>
