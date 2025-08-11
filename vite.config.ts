import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change this to match your repository name exactly
const repoName = 'my-react-app'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? `/${repoName}/` : '/',
}))

