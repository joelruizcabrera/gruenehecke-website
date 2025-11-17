<template>
  <div class="instagram-feed">
    <div class="instagram-grid">
      <a 
        v-for="post in store.instagramPosts" 
        :key="post.id"
        :href="post.permalink"
        target="_blank"
        rel="noopener noreferrer"
        class="instagram-post"
      >
        <div class="post-image" :style="{ backgroundImage: `url(${post.imageUrl})` }">
          <div class="post-overlay">
            <div class="post-caption">{{ truncateCaption(post.caption, 100) }}</div>
            <div class="post-date">{{ formatDate(post.timestamp) }}</div>
          </div>
        </div>
      </a>
    </div>
    
    <div class="instagram-cta">
      <a 
        :href="store.siteSettings.socialMedia.instagram" 
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-outline"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 10px;">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
        Folge uns auf Instagram
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from '~/stores/main'

const store = useMainStore()

const truncateCaption = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp)
  return date.toLocaleDateString('de-DE', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric' 
  })
}

onMounted(() => {
  // Instagram posts könnten hier von einer API geladen werden
  store.fetchInstagramPosts()
})
</script>

<style scoped lang="scss">
.instagram-feed {
  width: 100%;
}

.instagram-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.instagram-post {
  position: relative;
  display: block;
  aspect-ratio: 1;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(144, 238, 144, 0.3);
    
    .post-overlay {
      opacity: 1;
    }
  }
}

.post-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-color: rgba(144, 238, 144, 0.2);
}

.post-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(26, 77, 46, 0.95) 0%, rgba(26, 77, 46, 0.7) 50%, transparent 100%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.post-caption {
  color: #fff;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 10px;
}

.post-date {
  color: #b8e6b8;
  font-size: 0.85rem;
  font-weight: 600;
}

.instagram-cta {
  text-align: center;
}

@media (max-width: 768px) {
  .instagram-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}
</style>
