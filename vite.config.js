import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    assetsInlineLimit: 0 // Prevent encoding images as base64
  }
});
