<template>
  <section id="portfolio" class="section-padding bg-white dark:bg-gray-950">
    <div class="container-max">
      <div class="text-center mb-12 reveal">
        <span class="inline-block bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          {{ t('portfolio.badge') }}
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          {{ t('portfolio.title1') }} <span class="gradient-text">{{ t('portfolio.title2') }}</span>
        </h2>
        <p class="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{{ t('portfolio.subtitle') }}</p>
      </div>

      <!-- Filter tabs -->
      <div class="flex flex-wrap justify-center gap-3 mb-12 reveal">
        <button
          v-for="(tab, i) in tabKeys"
          :key="tab"
          class="px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200"
          :class="activeTabIndex === i
            ? 'bg-primary-600 text-white shadow-lg shadow-primary-200 dark:shadow-primary-900/40'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400'"
          @click="activeTabIndex = i"
        >
          {{ t(`portfolio.tabs[${i}]`) }}
        </button>
      </div>

      <!-- Projects grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.index"
          class="group bg-white dark:bg-gray-800/60 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700/60 shadow-sm card-hover reveal"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          <div class="h-56 relative overflow-hidden" :class="project.bgGradient">
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
            <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
              <button class="w-11 h-11 bg-white rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                <svg class="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
            <div class="absolute top-4 left-4">
              <span class="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                {{ project.category }}
              </span>
            </div>
          </div>

          <div class="p-6">
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {{ t(`portfolio.projects[${project.index}].title`) }}
            </h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {{ t(`portfolio.projects[${project.index}].description`) }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.techs" :key="tech"
                class="text-xs font-medium px-2.5 py-1 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-12 reveal">
        <a href="#contact" class="btn-secondary dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-900/30 text-base px-8 py-4">
          {{ t('portfolio.cta') }}
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
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const activeTabIndex = ref(0)
const tabKeys = ['all', 'Web', 'Mobile', 'CRM/ERP']

const projects = [
  { index: 0, category: 'Web',     bgGradient: 'bg-gradient-to-br from-blue-500 to-indigo-600',  icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z', techs: ['Vue.js', 'Node.js', 'PostgreSQL', 'Stripe'] },
  { index: 1, category: 'Mobile',  bgGradient: 'bg-gradient-to-br from-green-500 to-teal-600',   icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', techs: ['Flutter', 'Firebase', 'Node.js'] },
  { index: 2, category: 'CRM/ERP', bgGradient: 'bg-gradient-to-br from-orange-500 to-red-500',   icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7', techs: ['React', 'Django', 'PostgreSQL'] },
  { index: 3, category: 'Web',     bgGradient: 'bg-gradient-to-br from-purple-500 to-pink-600',  icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', techs: ['Next.js', 'Prisma', 'MySQL', 'AWS S3'] },
  { index: 4, category: 'Mobile',  bgGradient: 'bg-gradient-to-br from-cyan-500 to-blue-600',   icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', techs: ['React Native', 'Node.js', 'MongoDB'] },
  { index: 5, category: 'CRM/ERP', bgGradient: 'bg-gradient-to-br from-slate-600 to-gray-700',  icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', techs: ['Vue.js', 'Laravel', 'PostgreSQL'] },
]

const categoryMap = { 1: 'Web', 2: 'Mobile', 3: 'CRM/ERP' }

const filteredProjects = computed(() => {
  if (activeTabIndex.value === 0) return projects
  const cat = categoryMap[activeTabIndex.value]
  return projects.filter(p => p.category === cat)
})
</script>
