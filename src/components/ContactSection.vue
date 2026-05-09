<template>
  <section id="contact" class="section-padding bg-white">
    <div class="container-max">
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left: Info -->
        <div class="reveal-left">
          <span class="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Aloqa
          </span>
          <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Loyihangiz haqida
            <span class="gradient-text">gaplashaylik</span>
          </h2>
          <p class="text-lg text-gray-600 leading-relaxed mb-10">
            Yangi loyiha boshlashni xohlaysizmi yoki mavjud tizimni yaxshilash kerakmi?
            Biz bilan bog'laning — bepul maslahat va yechim taklif qilamiz.
          </p>

          <!-- Contact cards -->
          <div class="space-y-4">
            <a
              v-for="contact in contacts"
              :key="contact.label"
              :href="contact.href"
              class="flex items-center gap-5 p-5 bg-gray-50 hover:bg-primary-50 rounded-2xl border border-gray-100 hover:border-primary-200 transition-all duration-200 group"
            >
              <div
                class="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                :class="contact.iconBg"
              >
                <svg class="w-6 h-6" :class="contact.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" :d="contact.icon" />
                </svg>
              </div>
              <div>
                <div class="text-sm font-semibold text-gray-500 mb-0.5">{{ contact.label }}</div>
                <div class="text-gray-900 font-bold group-hover:text-primary-600 transition-colors">{{ contact.value }}</div>
              </div>
            </a>
          </div>

          <!-- Working hours -->
          <div class="mt-8 p-6 bg-primary-50 rounded-2xl border border-primary-100">
            <div class="flex items-center gap-3 mb-3">
              <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="font-bold text-gray-900">Ish vaqti</span>
            </div>
            <p class="text-gray-600">Dushanba – Juma: <strong class="text-gray-800">9:00 – 18:00</strong></p>
            <p class="text-gray-600">Shanba: <strong class="text-gray-800">10:00 – 15:00</strong></p>
            <p class="text-gray-500 text-sm mt-2">Telegram orqali 24/7 yozishingiz mumkin</p>
          </div>
        </div>

        <!-- Right: Form -->
        <div class="reveal-right">
          <div class="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 lg:p-10">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">Xabar yuborish</h3>

            <form @submit.prevent="submitForm" class="space-y-5">
              <div class="grid sm:grid-cols-2 gap-5">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Ismingiz *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Abdulloh"
                    class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Telefon *</label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    required
                    placeholder="+998 90 123 45 67"
                    class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="email@company.uz"
                  class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-gray-800 placeholder-gray-400"
                />
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Xizmat turi</label>
                <select
                  v-model="form.service"
                  class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-gray-800 bg-white"
                >
                  <option value="">Tanlang...</option>
                  <option v-for="opt in serviceOptions" :key="opt" :value="opt">{{ opt }}</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-semibold text-gray-700 mb-2">Xabar *</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="4"
                  placeholder="Loyiha haqida qisqacha ma'lumot bering..."
                  class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-gray-800 placeholder-gray-400 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="submitted"
                class="w-full py-4 rounded-xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-3"
                :class="submitted
                  ? 'bg-green-500 text-white cursor-default'
                  : 'bg-gradient-to-r from-primary-600 to-blue-500 text-white hover:shadow-lg hover:shadow-primary-200 active:scale-95'"
              >
                <template v-if="!submitted">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Xabar yuborish
                </template>
                <template v-else>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Xabar yuborildi!
                </template>
              </button>

              <p class="text-center text-sm text-gray-500">
                Yoki to'g'ridan-to'g'ri Telegram orqali:
                <a href="#" class="text-primary-600 font-semibold hover:underline ml-1">@saharsoft</a>
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

const submitted = ref(false)

const form = ref({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
})

const serviceOptions = [
  'Web Dasturlash',
  'Mobil Ilova',
  'CRM / ERP Tizim',
  'UI/UX Dizayn',
  'Cloud & DevOps',
  'IT Maslahat',
  'Boshqa',
]

const contacts = [
  {
    label: 'Telefon',
    value: '+998 90 123 45 67',
    href: 'tel:+998901234567',
    icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    label: 'Email',
    value: 'info@saharsoft.uz',
    href: 'mailto:info@saharsoft.uz',
    icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    label: 'Manzil',
    value: 'Toshkent, Chilonzor tumani',
    href: '#',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
]

function submitForm() {
  submitted.value = true
  setTimeout(() => {
    submitted.value = false
    form.value = { name: '', phone: '', email: '', service: '', message: '' }
  }, 4000)
}
</script>
