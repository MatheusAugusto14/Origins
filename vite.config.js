import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/Origins/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'icons/icon-192.png', 'icons/icon-512.png'],
      manifest: {
        name: 'Origins',
        short_name: 'Origins',
        description: 'Origins — Upgrades dos Cajados',
        theme_color: '#0b1020',
        background_color: '#0b1020',
        display: 'standalone',
        start_url: '.',
        icons: [
          {
            src: '/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/icons/maskable-icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico,json}'],
        runtimeCaching: [
          {
            urlPattern: /\/.*\.(js|css|html)/,
            handler: 'NetworkFirst',
            options: { cacheName: 'assets-cache' }
          },
          {
            urlPattern: /\/.*\.(png|jpg|jpeg|svg|gif)/,
            handler: 'CacheFirst',
            options: { cacheName: 'images-cache', expiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 } }
          }
        ]
      }
    })
  ]
})
