const CACHE_NAME = 'my-pwa-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/app.js',
  '/img/icons/icon-192x192.png',
  '/img/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});