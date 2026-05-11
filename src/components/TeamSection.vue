<template>
  <section id="team" class="section-padding bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-900 dark:to-gray-950">
    <div class="container-max">
      <div class="text-center mb-16 reveal">
        <span class="inline-block bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          {{ t('team.badge') }}
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          {{ t('team.title1') }}
          <span class="gradient-text"> {{ t('team.title2') }}</span>
        </h2>
        <p class="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">{{ t('team.subtitle') }}</p>
      </div>

      <!-- Team grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(member, index) in members"
          :key="index"
          class="group reveal"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          <div class="bg-white dark:bg-gray-800/60 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700/60 card-hover text-center">
            <div class="relative mx-auto mb-5 w-20 h-20">
              <div class="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg" :class="member.gradient">
                {{ member.initials }}
              </div>
              <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white dark:border-gray-800"></div>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {{ t(`team.members[${index}].name`) }}
            </h3>
            <p class="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-3">{{ t(`team.members[${index}].role`) }}</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{{ t(`team.members[${index}].bio`) }}</p>
            <div class="flex flex-wrap justify-center gap-1.5 mb-5">
              <span v-for="skill in member.skills" :key="skill"
                class="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                {{ skill }}
              </span>
            </div>
            <div class="flex justify-center gap-3">
              <a v-for="social in member.socials" :key="social.name" href="#"
                class="w-9 h-9 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900/40 flex items-center justify-center transition-colors duration-200"
                :title="social.name"
              >
                <svg class="w-4 h-4 text-gray-600 dark:text-gray-400 hover:text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                  <path :d="social.icon" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Reviews -->
      <div class="mt-20">
        <div class="text-center mb-12 reveal">
          <h3 class="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
            {{ t('team.reviews_title1') }} <span class="gradient-text">{{ t('team.reviews_title2') }}</span>
          </h3>
          <p class="text-gray-500 dark:text-gray-400">{{ t('team.reviews_subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(review, index) in reviews"
            :key="index"
            class="bg-white dark:bg-gray-800/60 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700/60 reveal card-hover"
            :style="`animation-delay: ${index * 0.15}s`"
          >
            <div class="flex gap-1 mb-4">
              <svg v-for="i in 5" :key="i" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <blockquote class="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 italic">
              "{{ t(`team.reviews[${index}].text`) }}"
            </blockquote>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-sm" :class="review.gradient">
                {{ review.initials }}
              </div>
              <div>
                <div class="font-bold text-gray-900 dark:text-white">{{ t(`team.reviews[${index}].author`) }}</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">{{ t(`team.reviews[${index}].company`) }}</div>
              </div>
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

const linkedinIcon = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
const githubIcon   = 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
const telegramIcon = 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'

const members = [
  { initials: 'AT', gradient: 'bg-gradient-to-br from-primary-500 to-blue-600',  skills: ['Node.js', 'Python', 'AWS', 'System Design'], socials: [{ name: 'LinkedIn', icon: linkedinIcon }, { name: 'GitHub', icon: githubIcon }] },
  { initials: 'DY', gradient: 'bg-gradient-to-br from-pink-500 to-purple-600',   skills: ['Figma', 'User Research', 'Prototyping'],       socials: [{ name: 'LinkedIn', icon: linkedinIcon }, { name: 'Telegram', icon: telegramIcon }] },
  { initials: 'JR', gradient: 'bg-gradient-to-br from-green-500 to-teal-600',    skills: ['Vue.js', 'React', 'PostgreSQL', 'TypeScript'],  socials: [{ name: 'GitHub', icon: githubIcon }, { name: 'LinkedIn', icon: linkedinIcon }] },
  { initials: 'SN', gradient: 'bg-gradient-to-br from-orange-500 to-red-500',    skills: ['Flutter', 'React Native', 'iOS', 'Firebase'],   socials: [{ name: 'LinkedIn', icon: linkedinIcon }, { name: 'GitHub', icon: githubIcon }] },
]

const reviews = [
  { initials: 'BK', gradient: 'bg-gradient-to-br from-blue-500 to-indigo-600' },
  { initials: 'MU', gradient: 'bg-gradient-to-br from-green-500 to-teal-600' },
  { initials: 'SA', gradient: 'bg-gradient-to-br from-purple-500 to-pink-600' },
]
</script>
