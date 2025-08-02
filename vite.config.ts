import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Hotfix: Patch crypto for Node 20
if (!globalThis.crypto?.subtle) {
  const { webcrypto } = await import('node:crypto');
  (globalThis as any).crypto = webcrypto;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
