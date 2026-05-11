import { createI18n } from 'vue-i18n'
import uz from './uz.js'
import ru from './ru.js'
import en from './en.js'

const savedLocale = localStorage.getItem('locale') || 'uz'

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'uz',
  messages: { uz, ru, en },
})
