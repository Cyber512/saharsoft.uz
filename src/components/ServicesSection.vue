<template>
  <section id="services" class="section-padding bg-white dark:bg-gray-950">
    <div class="container-max">
      <div class="text-center mb-16 reveal">
        <span class="inline-block bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          {{ t('services.badge') }}
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          {{ t('services.title1') }}
          <span class="gradient-text"> {{ t('services.title2') }}</span>
        </h2>
        <p class="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{{ t('services.subtitle') }}</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="group bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700/60 rounded-2xl p-8 card-hover reveal shadow-sm"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          <div
            class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
            :class="service.iconBg"
          >
            <svg class="w-8 h-8" :class="service.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" :d="service.icon" />
            </svg>
          </div>

          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {{ t(`services.items[${index}].title`) }}
          </h3>
          <p class="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            {{ t(`services.items[${index}].description`) }}
          </p>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in service.tags"
              :key="tag"
              class="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
            >{{ tag }}</span>
          </div>

          <div class="mt-6 flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
            <span>{{ t('nav.services') }}</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const services = [
  { icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', iconBg: 'bg-blue-100 dark:bg-blue-900/40',   iconColor: 'text-blue-600 dark:text-blue-400',   tags: ['React', 'Vue.js', 'Next.js', 'TypeScript'] },
  { icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',                              iconBg: 'bg-purple-100 dark:bg-purple-900/40', iconColor: 'text-purple-600 dark:text-purple-400', tags: ['Flutter', 'React Native', 'iOS', 'Android'] },
  { icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', iconBg: 'bg-green-100 dark:bg-green-900/40',   iconColor: 'text-green-600 dark:text-green-400',   tags: ['CRM', 'ERP', 'API'] },
  { icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01', iconBg: 'bg-pink-100 dark:bg-pink-900/40', iconColor: 'text-pink-600 dark:text-pink-400', tags: ['Figma', 'UI Design', 'Prototyping'] },
  { icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',                  iconBg: 'bg-sky-100 dark:bg-sky-900/40',       iconColor: 'text-sky-600 dark:text-sky-400',       tags: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'] },
  { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', iconBg: 'bg-orange-100 dark:bg-orange-900/40', iconColor: 'text-orange-600 dark:text-orange-400', tags: ['Strategiya', 'Audit', 'Consulting'] },
]
</script>
