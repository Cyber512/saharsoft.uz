<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-primary-50 to-blue-50">
    <!-- Background decorations -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-60"></div>
      <div class="absolute top-1/2 -left-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
      <div class="absolute inset-0 opacity-[0.03]"
        style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231d4ed8\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')">
      </div>
    </div>

    <div class="container-max section-padding relative z-10 w-full">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Text content -->
        <div class="text-left">
          <div class="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <span class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
            {{ t('hero.badge') }}
          </div>

          <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in-up">
            {{ t('hero.title1') }}
            <span class="gradient-text block">{{ t('hero.title2') }}</span>
            {{ t('hero.title3') }}
            <span class="text-primary-600"> {{ t('hero.title4') }}</span>
          </h1>

          <p
            class="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 animate-fade-in-up"
            style="animation-delay: 0.2s"
            v-html="t('hero.description')"
          ></p>

          <div class="flex flex-wrap gap-4 mb-12 animate-fade-in-up" style="animation-delay: 0.3s">
            <a href="#portfolio" class="btn-primary text-base px-8 py-4">
              {{ t('hero.cta_primary') }}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" class="btn-secondary text-base px-8 py-4">
              {{ t('hero.cta_secondary') }}
            </a>
          </div>

          <div class="flex flex-wrap gap-8 animate-fade-in-up" style="animation-delay: 0.4s">
            <div v-for="stat in heroStats" :key="stat.key" class="text-left">
              <div class="text-3xl font-extrabold text-gray-900">{{ stat.value }}</div>
              <div class="text-sm text-gray-500 font-medium">{{ t(`hero.${stat.key}`) }}</div>
            </div>
          </div>
        </div>

        <!-- Visual side -->
        <div class="hidden lg:flex items-center justify-center relative animate-fade-in" style="animation-delay: 0.3s">
          <div class="relative w-full max-w-md">
            <div class="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 animate-float">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
                <div class="flex-1 h-6 bg-gray-100 rounded-lg ml-2"></div>
              </div>
              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                    <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="flex-1">
                    <div class="h-3 bg-gray-200 rounded-full mb-1.5"></div>
                    <div class="h-2.5 bg-gray-100 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div class="h-px bg-gray-100"></div>
                <div class="grid grid-cols-3 gap-3">
                  <div v-for="i in 6" :key="i"
                    class="h-16 rounded-xl flex flex-col items-center justify-center gap-1"
                    :class="i === 1 ? 'bg-primary-600' : i === 4 ? 'bg-blue-500' : 'bg-gray-100'"
                  >
                    <div :class="[i === 1 || i === 4 ? 'bg-white/30' : 'bg-gray-200', 'w-6 h-1.5 rounded-full']"></div>
                    <div :class="[i === 1 || i === 4 ? 'bg-white/20' : 'bg-gray-100', 'w-4 h-1 rounded-full']"></div>
                  </div>
                </div>
                <div class="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-4 flex items-center gap-3">
                  <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-gray-800">{{ t('hero.card_projects') }}</div>
                    <div class="text-xs text-gray-500">{{ t('hero.card_projects_label') }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
              <div class="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div class="text-xs text-gray-500">{{ t('hero.card_projects_label') }}</div>
                <div class="text-sm font-bold text-gray-800">{{ t('hero.card_projects') }}</div>
              </div>
            </div>

            <div class="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
              <div class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <div>
                <div class="text-xs text-gray-500">{{ t('hero.card_satisfaction_label') }}</div>
                <div class="text-sm font-bold text-gray-800">{{ t('hero.card_satisfaction') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
      <span class="text-xs font-medium">{{ t('hero.scroll') }}</span>
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const heroStats = [
  { value: '5+',  key: 'stat_experience' },
  { value: '150+', key: 'stat_projects' },
  { value: '80+', key: 'stat_clients' },
  { value: '98%', key: 'stat_satisfaction' },
]
</script>
