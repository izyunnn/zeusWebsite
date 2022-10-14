import { createI18n } from 'vue-i18n'

/**
 * Load locale messages
 */

function loadLocaleMessages () {
  const locales = import.meta.globEager('./langs/*.json')
  const messages = {}
  Object.keys(locales).forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales[key].default
    }
  })
  return messages
}

export default createI18n({
  locale: import.meta.env.VITE_I18N_LOCALE || 'zh-CN',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'zh-CN',
  globalInjection: true,
  messages: loadLocaleMessages()
})
