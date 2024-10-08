import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG'], // Include PNG assets
  server: {
    proxy: {
      '/api': { // Proxy the API requests through '/api'
        target: 'https://jambvision.onrender.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '') // Remove '/api' prefix when forwarding the request
      },
    },
  },
});
