import { defineConfig } from 'vite'
import { rollupPluginHTML } from '@web/rollup-plugin-html'
import resolve from '@rollup/plugin-node-resolve'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
      build: {
        lib: {
          entry: 'src/my-element.ts',
          formats: ['es']
        },
        rollupOptions: {
          external: mode === 'production' ? '' : /^lit/,
          input: 'index.html',
          plugins: [
              rollupPluginHTML({
                  injectServiceWorker: true,
                  serviceWorkerPath: 'sw.js',
                  transformHtml: html => {
                      return html
                          .replace('index.scss', 'style.css')
                          .replace('</head>' , `
                          <link rel="manifest" href="manifest.webmanifest">
                          </head>
                          `)
                          .replace('public/', '')
                  },
                  minify: true
              }),
              resolve()
          ]
      },
      minify: 'esbuild',
      cssCodeSplit: false,
      },
    }
})
