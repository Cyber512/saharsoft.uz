<template>
  <footer class="bg-gray-900 dark:bg-gray-950 text-gray-400 border-t border-gray-800 dark:border-gray-800">
    <div class="container-max px-4 md:px-8 lg:px-16 py-16">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <a href="#" class="flex items-center gap-2 mb-5">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-500 rounded-xl flex items-center justify-center">
              <span class="text-white font-bold text-lg">S</span>
            </div>
            <span class="text-xl font-bold text-white">Sahar<span class="text-primary-400">Soft</span></span>
          </a>
          <p class="text-sm leading-relaxed mb-6">{{ t('footer.description') }}</p>
          <div class="flex gap-3">
            <a v-for="social in socials" :key="social.name" href="#"
              class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-colors duration-200"
              :title="social.name">
              <svg class="w-4 h-4 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path :d="social.icon" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-white font-bold mb-5 text-sm uppercase tracking-wider">{{ t('footer.services_title') }}</h4>
          <ul class="space-y-3">
            <li v-for="(_, i) in 5" :key="i">
              <a href="#services" class="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                {{ t(`footer.services_links[${i}]`) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h4 class="text-white font-bold mb-5 text-sm uppercase tracking-wider">{{ t('footer.company_title') }}</h4>
          <ul class="space-y-3">
            <li v-for="(link, i) in companyLinks" :key="i">
              <a :href="link.href" class="text-sm hover:text-white hover:translate-x-1 inline-block transition-all duration-200">
                {{ t(`footer.company_links[${i}].label`) }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-bold mb-5 text-sm uppercase tracking-wider">{{ t('nav.contact') }}</h4>
          <ul class="space-y-3 text-sm">
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+998901234567" class="hover:text-white transition-colors">+998 90 123 45 67</a>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@saharsoft.uz" class="hover:text-white transition-colors">info@saharsoft.uz</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-800">
      <div class="container-max px-4 md:px-8 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p class="text-sm">© {{ new Date().getFullYear() }} SaharSoft. {{ t('footer.rights') }}</p>
        <div class="flex items-center gap-6 text-sm">
          <a href="#" class="hover:text-white transition-colors">{{ t('footer.privacy') }}</a>
          <a href="#" class="hover:text-white transition-colors">{{ t('footer.terms') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const telegramIcon  = 'M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'
const linkedinIcon  = 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
const instagramIcon = 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'
const githubIcon    = 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'

const socials = [
  { name: 'Telegram',  icon: telegramIcon },
  { name: 'Instagram', icon: instagramIcon },
  { name: 'LinkedIn',  icon: linkedinIcon },
  { name: 'GitHub',    icon: githubIcon },
]

const companyLinks = [
  { href: '#about' }, { href: '#portfolio' }, { href: '#team' }, { href: '#contact' }, { href: '#' },
]
</script>
