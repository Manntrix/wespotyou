if ('function' === typeof importScripts) {
    importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
  
      /* injection point for manifest files.  */

      workbox.core.setCacheNameDetails({
        prefix: 'controlsoftOffline'
    });
    
      workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "7d746d4ab6e031b594102fe1b22fbd39"
  },
  {
    "url": "precache-manifest.86a32d55fb6c1740235cfdd81c7e3b75.js",
    "revision": "86a32d55fb6c1740235cfdd81c7e3b75"
  },
  {
    "url": "service-worker.js",
    "revision": "17868e74f49fc86611402352524bcfa0"
  },
  {
    "url": "static/css/2.73176426.chunk.css",
    "revision": "76996930d7a015552c3b151b883d297b"
  },
  {
    "url": "static/css/main.5ac80320.chunk.css",
    "revision": "60b68a26c0fcecfddfeb70e0f92f8e49"
  },
  {
    "url": "static/js/2.27bebe5f.chunk.js",
    "revision": "0e482604a5a4f0fe92b0e7b1f51d8919"
  },
  {
    "url": "static/js/main.2a207d5b.chunk.js",
    "revision": "7e010a8f33ece27100186ce378b6e08d"
  },
  {
    "url": "static/js/runtime~main.23998c19.js",
    "revision": "e3b922a2d8523d813caf0139310c62d7"
  }
]);

      workbox.routing.registerRoute(
        new RegExp('https://backend.wespotyou.com/wp-json/acf/v3/pages/37'),
        workbox.strategies.cacheFirst()
      );
      workbox.routing.registerRoute(
        new RegExp('https://backend.wespotyou.com/wp-json/acf/v3/categories'),
        workbox.strategies.cacheFirst()
      );
      workbox.routing.registerRoute(
        new RegExp('https://backend.wespotyou.com/wp-json/home/post'),
        workbox.strategies.cacheFirst()
      );
      workbox.routing.registerRoute(
        new RegExp('https://backend.wespotyou.com/wp-json/home/entertainment'),
        workbox.strategies.cacheFirst()
      );
      workbox.routing.registerRoute(
        new RegExp('https://backend.wespotyou.com/wp-json/home/beauty'),
        workbox.strategies.cacheFirst()
      );
      workbox.routing.registerRoute(
        new RegExp('https://backend.wespotyou.com/wp-json/home/fashion'),
        workbox.strategies.cacheFirst()
      );
      workbox.routing.registerRoute(
        new RegExp('https://backend.wespotyou.com/wp-json/home/food'),
        workbox.strategies.cacheFirst()
      );
      workbox.routing.registerRoute(
        new RegExp('https://backend.wespotyou.com/wp-json/home/movies'),
        workbox.strategies.cacheFirst()
      );
      workbox.routing.registerRoute(
        new RegExp('https://backend.wespotyou.com/wp-json/home/parents'),
        workbox.strategies.cacheFirst()
      );
      workbox.routing.registerRoute(
        new RegExp('https://backend.wespotyou.com/wp-json/home/talent'),
        workbox.strategies.cacheFirst()
      );
      workbox.routing.registerRoute(
        new RegExp('https://backend.wespotyou.com/wp-json/home/travel'),
        workbox.strategies.cacheFirst()
      );
      workbox.routing.registerRoute(
        new RegExp('https://backend.wespotyou.com/wp-json/menu/primary'),
        workbox.strategies.cacheFirst()
      );
  
  /* custom cache rules*/
  workbox.routing.registerNavigationRoute('/index.html');


  
  workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg)$/,
        workbox.strategies.cacheFirst({
          cacheName: 'images',
          plugins: [
            new workbox.expiration.Plugin({
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
          ],
        })
      );
  
  } else {
      console.log('Workbox could not be loaded. No Offline support');
    }
  }