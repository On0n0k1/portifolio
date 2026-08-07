import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: served from /impeccable-practice/
export default defineConfig({
  base: '/impeccable-practice/',
  plugins: [react()],
})
