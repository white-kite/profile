import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import path from 'path';
import ssr from 'vite-plugin-ssr/plugin' // 추가

// const path = require('path')

// POSIX 스타일 경로로 변환하는 함수
function toPosixPath(p) {
  return p.split(path.sep).join(path.posix.sep);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: 'expose', //Vuetify 스타일을 노출
      //styles: { configFile: 'src/styles/settings.scss' }, // 추가: 스타일 설정 파일 경로
    }),
    ssr({
      pageFiles: ['src/pages/**/*.page.js', 'src/pages/**/*.page.vue']
    }),
    //ssr({ prerender: true }), // ssr 설정을 추가합니다.
    // ssr({
    //   pageFiles: 'assets/pageFiles'  // 추가: pageFiles 설정
    // }),
  ],
  // SSR을 위해 build 추가
  build: {
    rollupOptions: {
      input: {
        client: toPosixPath(path.resolve(__dirname, 'src/entry-client.js')),
        server: toPosixPath(path.resolve(__dirname, 'src/entry-server.js')),
      },
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
      },
    },
  },
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '~': toPosixPath(path.resolve(__dirname, 'src')),
      '@': toPosixPath(path.resolve(__dirname, 'src')),
    },
  },
  ssr: {
    noExternal: ['vuetify', 'vue'], // vue와 Vuetify를 noExternal로 설정하여 번들링
  },
  /* remove the need to specify .vue files https://vitejs.dev/config/#resolve-extensions
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ]
  },
  */
})
