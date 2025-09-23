self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("dusky-cache").then((cache) => {
      return cache.addAll([
        "./index.html",
        "./login.html",
        "./register.html",
        "./game.html",
        "./audio/首页.mp3",
        "./audio/ding.mp3",
        "./images/首页.jpg",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
