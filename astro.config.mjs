// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import svgLoader from 'vite-svg-loader';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://ludicarte.com',
  vite: {
    plugins: [tailwindcss(), svgLoader()],
    resolve: {
      alias: [
        { find: '@/', replacement: resolve(dirname(fileURLToPath(import.meta.url)), 'src/') },
        { find: '@/components', replacement: resolve(dirname(fileURLToPath(import.meta.url)), 'src/components') },
        { find: '@/assets', replacement: resolve(dirname(fileURLToPath(import.meta.url)), 'src/assets') },
        { find: '@/layouts', replacement: resolve(dirname(fileURLToPath(import.meta.url)), 'src/layouts') },
        { find: '@/src', replacement: resolve(dirname(fileURLToPath(import.meta.url)), 'src') },
        { find: '@/public', replacement: resolve(dirname(fileURLToPath(import.meta.url)), 'public') }
      ]
    }
  },

  integrations: [
    vue({
      template: {
        compilerOptions: {
          // Los elementos <Tres*> y <primitive> los resuelve el renderer de TresJS, no Vue
          isCustomElement: (tag) =>
            (/^Tres[A-Z]/.test(tag) && !['TresCanvas', 'TresCanvasContext', 'TresPortal'].includes(tag)) ||
            tag === 'primitive',
        },
      },
    }),
  ],
});