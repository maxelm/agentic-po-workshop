import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative assets and hash routes work on both repository and domain-root Pages sites.
  base: './',
})
