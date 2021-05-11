self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open('c-store').then((cache) => cache.addAll([
        '/',
        'index.html',
        'index.js',
        'index.css',
        'icons-192.png',
        'icons-512.png',
        'assets/images/covid_resources.png',
        'assets/images/search_hospitals.png',
        'assets/images/DoctorsBag.svg',
        'assets/TwitterHelp.html',
        'assets/images/twitterpic.svg',
        'assets/SelfCare.html',
        'assets/images/shield.svg',
        ])),
    );
});
  
self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
}); 