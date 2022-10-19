import { createI18n } from 'vue-i18n'
// 載入語言
import CN from '@/i18n/langs/zh-CN.json'
import TW from '@/i18n/langs/zh-TW.json'
import US from '@/i18n/langs/en-US.json'
import JP from '@/i18n/langs/ja-JP.json'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale') ?? 'zh-TW',
  fallbackLocale: 'zh-TW',
  messages: {
    'zh-CN': CN,
    'zh-TW': TW,
    'en-US': US,
    'ja-JP': JP
  }
})
export default i18n
