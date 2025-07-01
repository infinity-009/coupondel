import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteRestart from 'vite-plugin-restart'
// import dns from 'dns'
// vite.config.js
import { splitVendorChunkPlugin } from 'vite'


// dns.setDefaultResultOrder('verbatim')


export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/coupondel/' : '/',
  plugins: [
    react(),

    ViteRestart.default({
      restart: [
        'my.config.[jt]s',
      ]
    }),

  splitVendorChunkPlugin()
  
  ],
  server: {
    port: 8000
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  }
})
