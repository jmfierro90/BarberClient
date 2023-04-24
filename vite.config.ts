import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

const cssPlugin = (): Plugin => {
  return {
    name: 'css-transform',
    transform(src, id) {
      if (/\.(scss)$/.test(id)) {
        return src.replace(/%(.*?)%/g, (match, p1) => process.env[p1] || '');
      }
    }
  };
};

export default defineConfig({
  plugins: [react(), cssPlugin()],
});
