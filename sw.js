const CACHE_NAME = 'kids-activity-finder-v1';
const urlsToCache = [
    '/kids-activity-finder/',
    '/kids-activity-finder/index.html',
    '/kids-activity-finder/manifest.json',
    '/kids-activity-finder/assets/favicon-192.png',
    '/kids-activity-finder/assets/favicon-512.png',
    '/kids-activity-finder/assets/og-image.jpg'
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