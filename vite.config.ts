import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8888,
    open: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), //路径别名
    },
  },
  // 强制预构建的依赖
  optimizeDeps: { include: ['axios'] },
  plugins: [vue()],
})
