import { DirectiveBinding } from 'vue'
// import { useUserStore } from '~/stores'

function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
  // const { value } = binding
  const actions = ['admin', 'user', 'logo']

  console.log('el id:', el.id)
  if (el.id == null || el.id == '') {
    throw new Error(`element not find id`)
  }

  const hasPermission = actions.includes(el.id)
  if (!hasPermission && el.parentNode) {
    el.parentNode.removeChild(el)
  }
}

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  }
}
