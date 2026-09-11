import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration: React plugin enables JSX/React fast refresh during development.
export default defineConfig({
  plugins: [react()],
});
