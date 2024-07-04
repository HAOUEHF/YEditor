import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig({
  plugins: [react(), svgr() as PluginOption],
  resolve: {
    alias: {
      '@p': path.resolve(__dirname, '../../packages'),
      '@': path.resolve(__dirname, './src'),
    }
  },
  build: {
    outDir: 'lib',
    minify: 'esbuild',
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'), //指定组件编译入口文件
      name: 'packages-react',
      fileName: 'packages-react'
    }, //库编译模式配置
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react'],
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
