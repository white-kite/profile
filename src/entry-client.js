// src/entry-client.js
// 클라이언트 측 엔트리 파일을 생성하여 클라이언트 측 애플리케이션을 초기화
import { createApp } from './main';

//const { app, router, store } = createApp();
const { app, router } = createApp();

router.isReady().then(() => {
    app.mount('#app');
});
