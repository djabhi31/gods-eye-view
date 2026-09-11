#!/usr/bin/env node
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const port = parseInt(process.env.PORT, 10) || 4173;
const host = process.env.HOST || '0.0.0.0';

process.env.HOST = host;
process.env.PORT = String(port);

async function start() {
  console.log(`[God's Eye View] Starting server on ${host}:${port}...`);
  const server = await createServer({
    root: ROOT,
    server: {
      host,
      port,
      strictPort: false,
      allowedHosts: true,
    },
  });

  await server.listen();
  console.log(`[God's Eye View] Live and listening at http://${host}:${port}`);
  server.printUrls();

  for (const signal of ['SIGINT', 'SIGTERM']) {
    process.once(signal, async () => {
      console.log(`[God's Eye View] Received ${signal}, gracefully shutting down...`);
      await server.close();
      process.exit(0);
    });
  }
}

start().catch((err) => {
  console.error("[God's Eye View] Fatal startup error:", err);
  process.exit(1);
});
