<template>
  <section id="contact" class="section-padding bg-white dark:bg-gray-950">
    <div class="container-max">
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left: Info -->
        <div class="reveal-left">
          <span class="inline-block bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {{ t('contact.badge') }}
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            {{ t('contact.title1') }}
            <span class="gradient-text"> {{ t('contact.title2') }}</span>
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">{{ t('contact.subtitle') }}</p>

          <div class="space-y-4">
            <a
              v-for="(contact, i) in contactMeta"
              :key="i"
              :href="contact.href"
              class="flex items-center gap-5 p-5 bg-gray-50 dark:bg-gray-800/60 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-2xl border border-gray-100 dark:border-gray-700/60 hover:border-primary-200 dark:hover:border-primary-700 transition-all duration-200 group"
            >
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110" :class="contact.iconBg">
                <svg class="w-6 h-6" :class="contact.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" :d="contact.icon" />
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-0.5">{{ t(`contact.info[${i}].label`) }}</div>
                <div class="text-gray-900 dark:text-white font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{{ t(`contact.info[${i}].value`) }}</div>
              </div>
            </a>
          </div>

          <div class="mt-8 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-100 dark:border-primary-800/50">
            <div class="flex items-center gap-3 mb-3">
              <svg class="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="font-bold text-gray-900 dark:text-white">{{ t('contact.hours_title') }}</span>
            </div>
            <p class="text-gray-600 dark:text-gray-300">{{ t('contact.hours_weekdays') }} <strong class="text-gray-800 dark:text-white">9:00 – 18:00</strong></p>
            <p class="text-gray-600 dark:text-gray-300">{{ t('contact.hours_saturday') }} <strong class="text-gray-800 dark:text-white">10:00 – 15:00</strong></p>
            <p class="text-gray-500 dark:text-gray-400 text-sm mt-2">{{ t('contact.hours_telegram') }}</p>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="reveal-right">
          <div class="bg-white dark:bg-gray-800/80 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl p-8 lg:p-10">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">{{ t('contact.form_title') }}</h3>

            <form @submit.prevent="submitForm" class="space-y-5">
              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{{ t('contact.name') }} *</label>
                  <input v-model="form.name" type="text" required :placeholder="t('contact.name_placeholder')"
                    class="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/40 outline-none transition-all" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{{ t('contact.phone') }} *</label>
                  <input v-model="form.phone" type="tel" required :placeholder="t('contact.phone_placeholder')"
                    class="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/40 outline-none transition-all" />
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{{ t('contact.email') }}</label>
                <input v-model="form.email" type="email" :placeholder="t('contact.email_placeholder')"
                  class="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/40 outline-none transition-all" />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{{ t('contact.service') }}</label>
                <select v-model="form.service"
                  class="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/40 outline-none transition-all">
                  <option value="">{{ t('contact.service_placeholder') }}</option>
                  <option v-for="(_, i) in 7" :key="i" :value="t(`contact.service_options[${i}]`)">
                    {{ t(`contact.service_options[${i}]`) }}
                  </option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{{ t('contact.message') }} *</label>
                <textarea v-model="form.message" required rows="4" :placeholder="t('contact.message_placeholder')"
                  class="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-900/40 outline-none transition-all resize-none"></textarea>
              </div>

              <button type="submit" :disabled="submitted"
                class="w-full py-4 rounded-xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-3"
                :class="submitted ? 'bg-green-500 text-white cursor-default' : 'bg-gradient-to-r from-primary-600 to-blue-500 text-white hover:shadow-lg hover:shadow-primary-200 dark:hover:shadow-primary-900/40 active:scale-95'"
              >
                <template v-if="!submitted">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {{ t('contact.submit') }}
                </template>
                <template v-else>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {{ t('contact.submitted') }}
                </template>
              </button>

              <p class="text-center text-sm text-gray-500 dark:text-gray-400">
                {{ t('contact.telegram_hint') }}
                <a href="#" class="text-primary-600 dark:text-primary-400 font-semibold hover:underline ml-1">@saharsoft</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const submitted = ref(false)
const form = ref({ name: '', phone: '', email: '', service: '', message: '' })

const contactMeta = [
  { href: 'tel:+998901234567',       icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',                iconBg: 'bg-green-100 dark:bg-green-900/40',   iconColor: 'text-green-600 dark:text-green-400' },
  { href: 'mailto:info@saharsoft.uz', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',                                                                                                                    iconBg: 'bg-blue-100 dark:bg-blue-900/40',     iconColor: 'text-blue-600 dark:text-blue-400'   },
  { href: '#',                         icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',                                                                                                       iconBg: 'bg-purple-100 dark:bg-purple-900/40', iconColor: 'text-purple-600 dark:text-purple-400' },
]

function submitForm() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.value = { name: '', phone: '', email: '', service: '', message: '' }
  }, 4000)
}
</script>
