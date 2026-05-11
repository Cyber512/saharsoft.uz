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
          <li v-for="link in navLinks" :key="link.key">
            <a
              :href="link.href"
              class="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
            >
              {{ t(`nav.${link.key}`) }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        </ul>

        <!-- Right side: Lang switcher + CTA -->
        <div class="hidden md:flex items-center gap-3">
          <!-- Language switcher -->
          <div class="relative" ref="langDropdownRef">
            <button
              class="flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 text-sm font-semibold text-gray-700"
              @click="langOpen = !langOpen"
            >
              <span class="text-base leading-none">{{ currentLang.flag }}</span>
              <span>{{ currentLang.code.toUpperCase() }}</span>
              <svg
                class="w-3.5 h-3.5 text-gray-400 transition-transform duration-200"
                :class="langOpen ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <!-- Dropdown -->
            <div
              v-show="langOpen"
              class="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 overflow-hidden"
            >
              <button
                v-for="lang in languages"
                :key="lang.code"
                class="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors duration-150 hover:bg-primary-50"
                :class="locale === lang.code ? 'text-primary-600 bg-primary-50' : 'text-gray-700'"
                @click="switchLang(lang.code)"
              >
                <span class="text-base">{{ lang.flag }}</span>
                <span>{{ lang.label }}</span>
                <svg v-if="locale === lang.code" class="w-4 h-4 ml-auto text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
          </div>

          <a href="#contact" class="btn-primary">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {{ t('nav.cta') }}
          </a>
        </div>

        <!-- Mobile: lang + hamburger -->
        <div class="md:hidden flex items-center gap-2">
          <!-- Mini lang switcher -->
          <div class="relative" ref="mobileLangRef">
            <button
              class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-gray-200 text-sm font-semibold text-gray-700"
              @click="mobileLangOpen = !mobileLangOpen"
            >
              <span>{{ currentLang.flag }}</span>
              <span>{{ currentLang.code.toUpperCase() }}</span>
            </button>
            <div
              v-show="mobileLangOpen"
              class="absolute right-0 mt-1 w-36 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5"
            >
              <button
                v-for="lang in languages"
                :key="lang.code"
                class="w-full flex items-center gap-2 px-3 py-2 text-sm font-medium hover:bg-primary-50 transition-colors"
                :class="locale === lang.code ? 'text-primary-600' : 'text-gray-700'"
                @click="switchLang(lang.code); mobileLangOpen = false"
              >
                <span>{{ lang.flag }}</span>
                <span>{{ lang.label }}</span>
              </button>
            </div>
          </div>

          <button
            class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            @click="mobileOpen = !mobileOpen"
            aria-label="Menu"
          >
            <div class="w-6 flex flex-col gap-1.5">
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
    </div>

    <!-- Mobile Menu -->
    <div
      class="md:hidden overflow-hidden transition-all duration-300"
      :class="mobileOpen ? 'max-h-96 bg-white border-t border-gray-100 shadow-lg' : 'max-h-0'"
    >
      <div class="container-max px-4 py-4 flex flex-col gap-2">
        <a
          v-for="link in navLinks"
          :key="link.key"
          :href="link.href"
          class="text-gray-700 hover:text-primary-600 font-medium py-3 px-4 rounded-xl hover:bg-primary-50 transition-colors duration-200"
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
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const scrolled = ref(false)
const mobileOpen = ref(false)
const langOpen = ref(false)
const mobileLangOpen = ref(false)
const langDropdownRef = ref(null)
const mobileLangRef = ref(null)

const languages = [
  { code: 'uz', label: "O'zbek", flag: '🇺🇿' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
]

const currentLang = computed(() => languages.find(l => l.code === locale.value) || languages[0])

const navLinks = [
  { key: 'services', href: '#services' },
  { key: 'about', href: '#about' },
  { key: 'portfolio', href: '#portfolio' },
  { key: 'team', href: '#team' },
  { key: 'contact', href: '#contact' },
]

function switchLang(code) {
  locale.value = code
  localStorage.setItem('locale', code)
  langOpen.value = false
}

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

function handleClickOutside(e) {
  if (langDropdownRef.value && !langDropdownRef.value.contains(e.target)) langOpen.value = false
  if (mobileLangRef.value && !mobileLangRef.value.contains(e.target)) mobileLangOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>
