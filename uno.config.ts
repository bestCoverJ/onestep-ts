// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetAttributify({
      /* preset options */
    }),
    presetUno(),
    // ...custom presets
  ],
  theme: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
  },
})
