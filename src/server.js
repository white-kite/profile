// src/server.js
// Express 서버 파일을 생성하여 서버에서 렌더링된 HTML을 클라이언트에 전달
import express from 'express';
import fs from 'fs';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { fileURLToPath } from 'url';
import { renderToString } from '@vue/server-renderer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 3000;

async function createServer() {
  const app = express();

  let vite;
  if (!isProd) {
    vite = await createViteServer({
      server: { middlewareMode: true }, // 'ssr' 대신 true로 설정
      appType: 'custom',
    });
    app.use(vite.middlewares);
  } else {
    app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
  }

  app.get('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      let template;
      let render;

      if (!isProd) {
        template = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.js')).render;
      } else {
        template = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
        render = (await import('../dist/server/entry-server.js')).render;
      }

      const { html } = await render(url);

      const responseHtml = template.replace(`<!--ssr-outlet-->`, html);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(responseHtml);
    } catch (e) {
      if (!isProd && vite) {
        vite.ssrFixStacktrace(e);
      }
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

createServer();
