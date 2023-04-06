import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'




export default defineConfig({
  server: {
    proxy: {
      // string shorthand for simple case
      '/foo': 'http://localhost:4534',
      // with options if you need to use change origin
      '/api': {
        target: 'https://api.edamam.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // with RegEx for path matching
      '^/fallback/.*': {
        target: 'https://api.edamam.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fallback/, '')
      },
      // Using the proxy instance
      '/api': {
        target: 'https://api.edamam.com/',
        changeOrigin: true,
        configure: (proxy, options) => {
          // proxy will be an instance of 'http-proxy' so you can do whatever you want here
        }
      },
      // Proxying websockets or socket.io 
      '/socket.io': {
        target: 'ws://localhost:5174',
        ws: true
      }
    }
  },
  plugins: [
    vue(),
  ]
})
