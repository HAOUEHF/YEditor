import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@p': path.resolve(__dirname, '../../packages'),
      '@': path.resolve(__dirname, './src'),
    }
  }
})
