<template>
  <section id="portfolio" class="section-padding bg-white">
    <div class="container-max">
      <!-- Header -->
      <div class="text-center mb-12 reveal">
        <span class="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Portfolio
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Bizning <span class="gradient-text">ishlarimiz</span>
        </h2>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">
          So'nggi loyihalarimizdan namunalar — har biri o'ziga xos yondashuv va kreativ yechim
        </p>
      </div>

      <!-- Filter tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12 reveal">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200"
          :class="activeTab === tab
            ? 'bg-primary-600 text-white shadow-lg shadow-primary-200'
            : 'bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600'"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <!-- Projects grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          class="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm card-hover reveal"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          <!-- Project visual -->
          <div
            class="h-56 relative overflow-hidden"
            :class="project.bgGradient"
          >
            <!-- Decorative elements -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <div class="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto mb-3 flex items-center justify-center">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="project.icon" />
                  </svg>
                </div>
                <span class="text-white/80 text-sm font-medium">{{ project.category }}</span>
              </div>
            </div>

            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
              <button class="w-11 h-11 bg-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
              <button class="w-11 h-11 bg-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>

            <!-- Category badge -->
            <div class="absolute top-4 left-4">
              <span class="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                {{ project.category }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-4">{{ project.description }}</p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.techs"
                :key="tech"
                class="text-xs font-medium px-2.5 py-1 rounded-lg bg-primary-50 text-primary-600"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-12 reveal">
        <a href="#contact" class="btn-secondary text-base px-8 py-4">
          Barcha loyihalarni ko'rish
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('Barchasi')

const tabs = ['Barchasi', 'Web', 'Mobil', 'CRM/ERP']

const projects = [
  {
    title: 'MegaMart E-commerce Platform',
    description: 'O\'zbekistonning yirik online do\'konlaridan biri. Mahsulot katalogi, to\'lov tizimi va admin panel.',
    category: 'Web',
    bgGradient: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    techs: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    title: 'HealthCare Mobile App',
    description: 'Tibbiy konsultatsiya va onlayn shifokor ko\'rigi uchun mobil ilova. 50,000+ aktiv foydalanuvchi.',
    category: 'Mobil',
    bgGradient: 'bg-gradient-to-br from-green-500 to-teal-600',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    techs: ['Flutter', 'Firebase', 'Node.js'],
  },
  {
    title: 'LogiTrack CRM Tizim',
    description: 'Logistika kompaniyasi uchun to\'liq CRM tizim. Yuk kuzatuvi, mijozlar bazasi va hisobotlar.',
    category: 'CRM/ERP',
    bgGradient: 'bg-gradient-to-br from-orange-500 to-red-500',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    techs: ['React', 'Django', 'PostgreSQL'],
  },
  {
    title: 'EduPlatform LMS',
    description: 'Online ta\'lim platformasi. Video darslar, testlar, sertifikatlar va o\'qituvchi paneli.',
    category: 'Web',
    bgGradient: 'bg-gradient-to-br from-purple-500 to-pink-600',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    techs: ['Next.js', 'Prisma', 'MySQL', 'AWS S3'],
  },
  {
    title: 'FinTrack Mobile Banking',
    description: 'Raqamli bank ilovasi. P2P to\'lovlar, kredit kalkulyatori va hisobotlar moduli.',
    category: 'Mobil',
    bgGradient: 'bg-gradient-to-br from-cyan-500 to-blue-600',
    icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
    techs: ['React Native', 'Node.js', 'MongoDB'],
  },
  {
    title: 'FactoryPro ERP',
    description: 'Ishlab chiqarish korxonasi uchun ERP tizim. Ombor, ishlab chiqarish, moliya va HR modullari.',
    category: 'CRM/ERP',
    bgGradient: 'bg-gradient-to-br from-slate-600 to-gray-700',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    techs: ['Vue.js', 'Laravel', 'PostgreSQL'],
  },
]

const filteredProjects = computed(() => {
  if (activeTab.value === 'Barchasi') return projects
  return projects.filter(p => p.category === activeTab.value)
})
</script>
