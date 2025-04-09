import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/app/styles/_variables.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './src'),
    },
  },
})
