import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import svgLoader from 'vite-svg-loader'
import dts from 'vite-plugin-dts'
export default defineConfig({
  plugins: [vue(), svgLoader(), dts()],
  resolve: {
    alias: {
      '@p': path.resolve(__dirname, '../../packages'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    outDir: 'lib',
    minify: 'esbuild',
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'), //指定组件编译入口文件
      name: 'packages-vue',
      fileName: 'packages-vue'
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        exports: 'named',
        inlineDynamicImports: true,
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    },
    cssCodeSplit: true
  }
})
