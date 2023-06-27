import Tov from './presets'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [Tov()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            'src/assets/style/screen.less'
          )}";`
        },
        javascriptEnabled: true
      }
    }
  }
})
