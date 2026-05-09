<template>
  <section id="services" class="section-padding bg-white">
    <div class="container-max">
      <!-- Section header -->
      <div class="text-center mb-16 reveal">
        <span class="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          Bizning Xizmatlar
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Nima <span class="gradient-text">qila olamiz?</span>
        </h2>
        <p class="text-xl text-gray-500 max-w-2xl mx-auto">
          Biznesingizning raqamli muvaffaqiyati uchun kompleks IT yechimlar taqdim etamiz
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="group bg-white border border-gray-100 rounded-2xl p-8 card-hover reveal shadow-sm"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          <!-- Icon -->
          <div
            class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
            :class="service.iconBg"
          >
            <component :is="'svg'" class="w-8 h-8" :class="service.iconColor" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" :d="service.icon" />
            </component>
          </div>

          <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
            {{ service.title }}
          </h3>
          <p class="text-gray-500 leading-relaxed mb-6">{{ service.description }}</p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in service.tags"
              :key="tag"
              class="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-600"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Arrow -->
          <div class="mt-6 flex items-center gap-2 text-primary-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
            Batafsil
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
const services = [
  {
    title: 'Web Dasturlash',
    description: 'Zamonaviy, tezkor va SEO-optimizatsiya qilingan web saytlar va veb-ilovalar yaratamiz. React, Vue, Next.js texnologiyalarida.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    tags: ['React', 'Vue.js', 'Next.js', 'TypeScript'],
  },
  {
    title: 'Mobil Ilovalar',
    description: 'iOS va Android uchun native va cross-platform mobil ilovalar. Flutter va React Native bilan tez va sifatli yechimlar.',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    tags: ['Flutter', 'React Native', 'iOS', 'Android'],
  },
  {
    title: 'CRM & ERP Tizimlar',
    description: 'Biznesingiz uchun maxsus CRM va ERP tizimlar. Savdo, ombor, moliya va HR jarayonlarini avtomatlashtiramiz.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    tags: ['CRM', 'ERP', 'Avtomatlashtirish', 'API'],
  },
  {
    title: 'UI/UX Dizayn',
    description: 'Foydalanuvchiga qulay va estetik interfeys dizayni. Figma prototiplari, design system va brand identity yaratamiz.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    tags: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Cloud infratuzilma qurish, CI/CD pipeline sozlash, Docker va Kubernetes yordamida loyihalarni deploy qilish.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
    tags: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
  },
  {
    title: 'IT Maslahat',
    description: 'Raqamli transformatsiya strategiyasi, texnologiya tanlash va loyiha menejment bo\'yicha professional maslahat.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    tags: ['Strategiya', 'Audit', 'Konsulting', 'Trening'],
  },
]
</script>
