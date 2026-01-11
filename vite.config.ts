import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // ensure build output goes to 'dist' for Cloudflare Pages
  },
  resolve: {
    alias: {
      // Optional: aliases if needed
      '@': '/src',
    },
  },
});
