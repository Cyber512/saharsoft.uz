<template>
  <section id="about" class="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
    <div class="container-max">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Text -->
        <div class="reveal-left">
          <span class="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {{ t('about.badge') }}
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {{ t('about.title1') }}
            <span class="gradient-text"> {{ t('about.title2') }}</span>
            {{ t('about.title3') }}
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-6">{{ t('about.p1') }}</p>
          <p class="text-lg text-gray-600 leading-relaxed mb-8">{{ t('about.p2') }}</p>

          <ul class="space-y-3 mb-10">
            <li v-for="(item, i) in 4" :key="i" class="flex items-center gap-3">
              <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-3.5 h-3.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span class="text-gray-700 font-medium">{{ t(`about.advantages[${i}]`) }}</span>
            </li>
          </ul>

          <a href="#contact" class="btn-primary text-base px-8 py-4">
            {{ t('about.cta') }}
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <!-- Right: Stats -->
        <div class="reveal-right">
          <div class="grid grid-cols-2 gap-6">
            <div
              v-for="(stat, i) in stats"
              :key="i"
              class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 card-hover text-center"
              :class="i === 0 ? 'col-span-2 bg-gradient-to-br from-primary-600 to-blue-500 text-white' : ''"
            >
              <div class="text-5xl font-extrabold mb-2" :class="i === 0 ? 'text-white' : 'gradient-text'">
                {{ stat.value }}
              </div>
              <div class="font-semibold text-lg mb-1" :class="i === 0 ? 'text-white/90' : 'text-gray-800'">
                {{ t(`about.stats[${i}].label`) }}
              </div>
              <div class="text-sm" :class="i === 0 ? 'text-white/70' : 'text-gray-500'">
                {{ t(`about.stats[${i}].sublabel`) }}
              </div>
            </div>
          </div>

          <div class="mt-6 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div class="text-sm font-semibold text-gray-500 text-center mb-4">{{ t('about.tech_title') }}</div>
            <div class="flex flex-wrap justify-center gap-3">
              <span
                v-for="tech in techs"
                :key="tech"
                class="px-3 py-1.5 bg-gray-100 hover:bg-primary-100 hover:text-primary-700 text-gray-600 rounded-lg text-sm font-medium transition-colors duration-200"
              >{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const stats = [
  { value: '5+' },
  { value: '150+' },
  { value: '80+' },
  { value: '25+' },
]

const techs = [
  'Vue.js', 'React', 'Next.js', 'Node.js', 'Python',
  'PostgreSQL', 'MongoDB', 'Flutter', 'Docker', 'AWS',
  'Figma', 'TypeScript',
]
</script>
