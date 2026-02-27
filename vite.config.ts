import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    server: {
      port: parseInt(env.VITE_DEV_PORT || '5173'),
      proxy: {
        '/mgt': {
          target: env.VITE_APP_API_URL,
          changeOrigin: true,
          secure: false,
        },
        '/dev': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          secure: false,
          rewrite: (path: string) => path.replace(/^\/dev/, ''),
        },
        '/test': {
          target: 'http://test-server:3000',
          changeOrigin: true,
          secure: false,
          rewrite: (path: string) => path.replace(/^\/test/, ''),
        },
        '/prod': {
          target: 'http://prod-server:3000',
          changeOrigin: true,
          secure: false,
          rewrite: (path: string) => path.replace(/^\/prod/, ''),
        },
      },
    },
    build: {
      outDir: resolve(__dirname, env.VITE_BUILD_DIR || 'dist'),
    },
    base: env.VITE_PUBLIC_PATH || '/',
  }
})
