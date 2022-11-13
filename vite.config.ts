import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

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
                                .replace('</head>' , `
                                  <link rel="manifest" href="manifest.webmanifest">
                                </head>
                                `)
                                .replace('public/', '')
                        },
                        minify: true
                    }),
                    resolve(),
                ]
            },
            minify: 'esbuild',
            cssCodeSplit: false,
        },
        plugins: [
            VitePWA({
                manifest: {
                    name:'Contador de truco',
                    short_name: 'Truco',
                    description: 'Contador de truco.',
                    start_url: '/',
                    theme_color: '#000000',
                    icons: [
                        {
                            src: 'maskable_icon_x512.png',
                            sizes: '512x512',
                            type: 'image/png',
                            purpose: 'any maskable'
                        }
                    ]
                },
                strategies: 'injectManifest'
            })
        ],
        define: {
            'process.env': { NODE_ENV: mode }
        }
    }
})
