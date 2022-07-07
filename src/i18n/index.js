import { createI18n } from 'vue-i18n'
import en from './lang/en/'
import zh from './lang/zh/'
import ru from './lang/ru/'

const I18n = createI18n({
  locale: 'en',
  messages: {
    en,
    zh,
    ru
  }
})
export default I18n
