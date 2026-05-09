<template>
  <div>
    <TheNavbar />
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <TeamSection />
      <ContactSection />
    </main>
    <TheFooter />

    <!-- Scroll to top button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-40 w-12 h-12 bg-primary-600 text-white rounded-xl shadow-lg hover:bg-primary-700 transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95"
      aria-label="Yuqoriga"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import TheNavbar from './components/TheNavbar.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import AboutSection from './components/AboutSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import TeamSection from './components/TeamSection.vue'
import ContactSection from './components/ContactSection.vue'
import TheFooter from './components/TheFooter.vue'

const showScrollTop = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
    observer.observe(el)
  })
}

function handleScroll() {
  showScrollTop.value = window.scrollY > 500
}

onMounted(() => {
  setupReveal()
  window.addEventListener('scroll', handleScroll)

  // Re-run reveal after DOM updates for dynamic content
  setTimeout(setupReveal, 300)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
