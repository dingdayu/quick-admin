import { App } from 'vue'

const ens = Object.entries(
  import.meta.glob('./../directives/*.ts', {
    eager: true
  })
)

export default {
  install(Vue: App) {
    for (const [key, value] of ens) {
      Vue.directive(key.slice(14, -3), value.default)
    }
  }
}
