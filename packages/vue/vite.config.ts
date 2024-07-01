import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      '@p': path.resolve(__dirname, '../../packages'),
      '@': path.resolve(__dirname, 'src')
    }
  }
})
