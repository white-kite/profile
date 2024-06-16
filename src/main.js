// src/main.js
import { createSSRApp } from 'vue';
import App from './App.vue';
import createRouterInstance from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import 'vuetify/styles'; // Vuetify 스타일 추가
import '@mdi/font/css/materialdesignicons.css'; // Vuetify 아이콘 스타일 추가

export function createApp() {
  const app = createSSRApp(App);
  const router = createRouterInstance();
  loadFonts();

  app.use(router);
  app.use(vuetify);

  return { app, router };
}
