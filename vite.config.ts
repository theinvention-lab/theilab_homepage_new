import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' — HashRouter와 함께 사용하여 어떤 경로(GitHub Pages, S3 등)에 배포해도 동작합니다.
export default defineConfig({
  base: './',
  plugins: [react()],
})
