import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base: the built site is copied into an unpredictable subpath
// (currently sites/ in a different repo's Pages deploy), so asset URLs
// must resolve relative to wherever index.html itself is served from.
export default defineConfig({
  base: './',
  plugins: [react()],
})
