import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // هذا السطر يمنع الشاشة البيضاء في التطبيق
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});