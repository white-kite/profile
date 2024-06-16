// src/entry-server.js
// 서버 측 엔트리 파일을 생성하여 서버에서 Vue 애플리케이션을 렌더링
import { createApp } from './main';
import { renderToString } from '@vue/server-renderer';

export async function render(url, manifest) {
  const { app, router } = createApp();

  router.push(url);
  await router.isReady();

  const ctx = {};
  const html = await renderToString(app, ctx);

  return { html };
}
