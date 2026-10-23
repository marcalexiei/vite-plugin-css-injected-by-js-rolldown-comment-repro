import { defineConfig } from 'vite';
import cssInjectedByJs from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  build: { minify: false },
  plugins: [cssInjectedByJs()],
});
