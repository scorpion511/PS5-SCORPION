/* PS5-Relapse Service Worker — full offline cache */

const CACHE_NAME = 'ps5-relapse-v4';

const ASSETS_TO_CACHE = [
  './',
  './index.php',
  './index.html',
  './pic/pic.png',

  /* core src */
  './src/firmware.js',
  './src/site.js',
  './src/main.js',
  './src/rop.js',
  './src/webkit.js',
  './src/kexp.js',
  './src/relapse_exploit.js',

  /* utils */
  './src/utils/int64.js',
  './src/utils/mem.js',
  './src/utils/rop_slave.js',
  './src/utils/syscalls.js',

  /* offsets */
  './offsets/7.00.js',
  './offsets/7.01.js',
  './offsets/7.20.js',
  './offsets/7.40.js',
  './offsets/7.60.js',
  './offsets/7.61.js',
  './offsets/8.00.js',
  './offsets/8.20.js',
  './offsets/8.40.js',
  './offsets/8.60.js',
  './offsets/9.00.js',
  './offsets/9.20.js',
  './offsets/9.40.js',
  './offsets/9.60.js',
  './offsets/10.00.js',
  './offsets/10.01.js',
  './offsets/10.20.js',
  './offsets/10.40.js',
  './offsets/10.60.js',
  './offsets/11.00.js',
  './offsets/11.20.js',
  './offsets/11.60.js',
  './offsets/12.00.js',
  './offsets/12.02.js',
  './offsets/12.20.js',
  './offsets/12.40.js',
  './offsets/12.60.js',
  './offsets/12.70.js',
  './offsets/13.00.js',
  './offsets/13.20.js',
  './offsets/13.40.js',
  './offsets/13.42.js',
  './offsets/13.60.js',

  /* payloads */
  './payloads/elfldr-ps5-1360.elf',
  './payloads/etaHEN.elf',
  './payloads/kexp_2026_05_25.bin',
  './payloads/kstuff.elf',
  './payloads/shadowmountplus.elf',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        ASSETS_TO_CACHE.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[SW] skip cache:', url, err.message);
          })
        )
      ).then(() => self.skipWaiting())
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          if (
            response &&
            response.status === 200 &&
            (response.type === 'basic' || response.type === 'cors')
          ) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
            });
          }
          return response;
        })
        .catch(() => {
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return new Response('', { status: 503, statusText: 'Offline' });
        });
    })
  );
});