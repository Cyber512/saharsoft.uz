<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'nav-scrolled' : 'bg-transparent'"
  >
    <div class="container-max px-4 md:px-8 lg:px-16">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2 group">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
            <span class="text-white font-bold text-lg">S</span>
          </div>
          <span class="text-xl font-bold text-gray-900">Sahar<span class="gradient-text">Soft</span></span>
        </a>

        <!-- Desktop Nav -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              {{ link.label }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        <!-- CTA Button -->
        <div class="hidden md:flex items-center gap-4">
          <a href="#contact" class="btn-primary">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Bog'lanish
          </a>
        </div>

        <!-- Mobile Hamburger -->
        <button
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          @click="mobileOpen = !mobileOpen"
          aria-label="Menu"
        >
          <div class="w-6 flex flex-col gap-1.5 transition-all">
            <span
              class="h-0.5 bg-gray-700 rounded transition-all duration-300"
              :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"
            ></span>
            <span
              class="h-0.5 bg-gray-700 rounded transition-all duration-300"
              :class="mobileOpen ? 'opacity-0' : ''"
            ></span>
            <span
              class="h-0.5 bg-gray-700 rounded transition-all duration-300"
              :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      class="md:hidden overflow-hidden transition-all duration-300"
      :class="mobileOpen ? 'max-h-96 bg-white border-t border-gray-100 shadow-lg' : 'max-h-0'"
    >
      <div class="container-max px-4 py-4 flex flex-col gap-2">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="text-gray-700 hover:text-primary-600 font-medium py-3 px-4 rounded-xl hover:bg-primary-50 transition-colors duration-200"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <a href="#contact" class="btn-primary mt-2 justify-center" @click="mobileOpen = false">
          Bog'lanish
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { href: '#services', label: 'Xizmatlar' },
  { href: '#about', label: 'Haqimizda' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#team', label: 'Jamoa' },
  { href: '#contact', label: 'Aloqa' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
