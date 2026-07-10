// Service worker minimo: solo habilita la instalacion como PWA.
// No cachea nada (el control en vivo depende de MQTT/Firebase, que
// requieren conexion real de todos modos), por eso no hay estrategia
// de cache offline aqui.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Passthrough: siempre ir a la red, sin cache.
  event.respondWith(fetch(event.request));
});
