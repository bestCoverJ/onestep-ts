import { defineConfig } from 'vite'
import basicSSL from "@vitejs/plugin-basic-ssl";
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    basicSSL(),
    UnoCSS(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
    AutoImport({
      imports: [
        'vue',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
          ],
        },
      ],
    }),
    Components({
      resolvers: [NaiveUiResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },

  server: {
    host: true,
    open: true,
    https: true,
    proxy: {
      // api是自行设置的请求前缀，任何请求路径以/api开头的请求将被代理到对应的target目标
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
