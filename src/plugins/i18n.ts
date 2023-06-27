import { createI18n } from 'vue-i18n'

const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob('../../src/locales/*.y(a)?ml', {
      eager: true
    })
  ).map(([key, value]) => {
    const yaml = key.endsWith('.yaml')
    // @ts-ignore
    return [key.slice(11, yaml ? -5 : -4), value.default]
  })
)

// 定义一个 MAP 用于存储语言和对应的语言包
const defaultLanguages: { [key: string]: string } = {
  'en-US': 'English',
  'zh-CN': '简体中文',
  'fr-FR': 'Français'
}

export const i18n = createI18n({
  legacy: false,
  locale:
    localStorage.getItem('language') ||
    defaultLanguages[navigator.language] ||
    '简体中文', // 默认语言, // 默认语言
  messages
})

export default i18n
