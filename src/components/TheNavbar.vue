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
          <span class="text-xl font-bold text-gray-900 dark:text-white">Sahar<span class="gradient-text">Soft</span></span>
        </a>

        <!-- Desktop Nav -->
        <ul class="hidden md:flex items-center gap-8">
          <li v-for="link in navLinks" :key="link.key">
            <a
              :href="link.href"
              class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors duration-200 relative group"
            >
              {{ t(`nav.${link.key}`) }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        <!-- Right controls -->
        <div class="hidden md:flex items-center gap-2">

          <!-- Language flag pills -->
          <div class="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
            <button
              v-for="lang in languages"
              :key="lang.code"
              class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200"
              :class="locale === lang.code
                ? 'bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'"
              :title="lang.label"
              @click="switchLang(lang.code)"
            >
              <!-- SVG Flag -->
              <span class="flex-shrink-0" v-html="lang.flag"></span>
              <span class="hidden lg:inline text-xs">{{ lang.code.toUpperCase() }}</span>
            </button>
          </div>

          <!-- Dark mode toggle -->
          <button
            class="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 text-gray-600 dark:text-gray-300"
            :title="isDark ? 'Light mode' : 'Dark mode'"
            @click="toggle"
          >
            <!-- Sun -->
            <svg v-if="isDark" class="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
            <!-- Moon -->
            <svg v-else class="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <a href="#contact" class="btn-primary">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {{ t('nav.cta') }}
          </a>
        </div>

        <!-- Mobile controls -->
        <div class="md:hidden flex items-center gap-1.5">
          <!-- Mobile flag pills (compact) -->
          <div class="flex items-center gap-0.5 bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
            <button
              v-for="lang in languages"
              :key="lang.code"
              class="w-8 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
              :class="locale === lang.code
                ? 'bg-white dark:bg-gray-700 shadow'
                : 'hover:bg-white/50 dark:hover:bg-gray-700/50'"
              :title="lang.label"
              @click="switchLang(lang.code)"
            >
              <span v-html="lang.flag" class="scale-90"></span>
            </button>
          </div>

          <!-- Mobile dark toggle -->
          <button
            class="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-800 transition-colors"
            @click="toggle"
          >
            <svg v-if="isDark" class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
            <svg v-else class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- Hamburger -->
          <button
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            @click="mobileOpen = !mobileOpen"
            aria-label="Menu"
          >
            <div class="w-6 flex flex-col gap-1.5">
              <span class="h-0.5 bg-gray-700 dark:bg-gray-200 rounded transition-all duration-300"
                :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"></span>
              <span class="h-0.5 bg-gray-700 dark:bg-gray-200 rounded transition-all duration-300"
                :class="mobileOpen ? 'opacity-0' : ''"></span>
              <span class="h-0.5 bg-gray-700 dark:bg-gray-200 rounded transition-all duration-300"
                :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"></span>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      class="md:hidden overflow-hidden transition-all duration-300"
      :class="mobileOpen ? 'max-h-96 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-lg' : 'max-h-0'"
    >
      <div class="container-max px-4 py-4 flex flex-col gap-2">
        <a
          v-for="link in navLinks"
          :key="link.key"
          :href="link.href"
          class="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium py-3 px-4 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors duration-200"
          @click="mobileOpen = false"
        >
          {{ t(`nav.${link.key}`) }}
        </a>
        <a href="#contact" class="btn-primary mt-2 justify-center" @click="mobileOpen = false">
          {{ t('nav.cta') }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDarkMode } from '../composables/useDarkMode.js'

const { t, locale } = useI18n()
const { isDark, toggle } = useDarkMode()

const scrolled = ref(false)
const mobileOpen = ref(false)

const languages = [
  {
    code: 'uz',
    label: "O'zbek",
    flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" width="20" height="15" style="border-radius:2px">
      <rect width="20" height="5" fill="#1EB53A"/>
      <rect y="5" width="20" height="5" fill="#fff"/>
      <rect y="10" width="20" height="5" fill="#0099B5"/>
      <rect y="4.5" width="20" height="1" fill="#fff"/>
      <rect y="9.5" width="20" height="1" fill="#fff"/>
    </svg>`,
  },
  {
    code: 'ru',
    label: 'Русский',
    flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" width="20" height="15" style="border-radius:2px">
      <rect width="20" height="5" fill="#fff"/>
      <rect y="5" width="20" height="5" fill="#0039A6"/>
      <rect y="10" width="20" height="5" fill="#D52B1E"/>
    </svg>`,
  },
  {
    code: 'en',
    label: 'English',
    flag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 15" width="20" height="15" style="border-radius:2px">
      <rect width="20" height="15" fill="#012169"/>
      <path d="M0,0 L20,15 M20,0 L0,15" stroke="#fff" stroke-width="3"/>
      <path d="M0,0 L20,15 M20,0 L0,15" stroke="#C8102E" stroke-width="1.5"/>
      <path d="M10,0 V15 M0,7.5 H20" stroke="#fff" stroke-width="5"/>
      <path d="M10,0 V15 M0,7.5 H20" stroke="#C8102E" stroke-width="3"/>
    </svg>`,
  },
]

const navLinks = [
  { key: 'services', href: '#services' },
  { key: 'about',    href: '#about'    },
  { key: 'portfolio',href: '#portfolio'},
  { key: 'team',     href: '#team'     },
  { key: 'contact',  href: '#contact'  },
]

function switchLang(code) {
  locale.value = code
  localStorage.setItem('locale', code)
}

function handleScroll() { scrolled.value = window.scrollY > 50 }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>
