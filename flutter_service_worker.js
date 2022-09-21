'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "60823d21ef6a6d063e9100b4a6b4f22c",
"assets/assets/bg1.png": "620b3a77abc50b53c9469db6d15085d9",
"assets/assets/bg2.png": "cb961d3cc6804bb5b1507ba07cdbab18",
"assets/assets/dp_yash.png": "08c0c57642317a5e467a16a463753487",
"assets/assets/dp_yrm.png": "d6d69a74de59e6b14197d191df537597",
"assets/assets/logos/lang/c++.png": "d25d9ebdec96e07643d0c54df2a8c903",
"assets/assets/logos/lang/c.png": "f92fb3d35cc9dd7a7ada985566992c6f",
"assets/assets/logos/lang/dart.png": "dd9947f238ae73ec84986496c1939ef6",
"assets/assets/logos/lang/java.png": "a719be1ce1c3654679f27a51db511700",
"assets/assets/logos/lang/kotlin.png": "3b0e12c43954c3e19bc00cd13a43abb4",
"assets/assets/logos/lang/python.png": "6606c48fbf49fc629449aa11170b8c1c",
"assets/assets/logos/skills/app.png": "94b2cf557c20277f968e0d93a8c586c3",
"assets/assets/logos/skills/content.jpg": "59122bb409cb597ee3c21ec38f27ed45",
"assets/assets/logos/skills/cybersecurity.jpg": "f3a3ddf6d4255f4c0c2660b776bb0586",
"assets/assets/logos/skills/dsa.png": "345257fad95d4b97da4a5c770f5c1ec0",
"assets/assets/logos/skills/oops.jpg": "88fa327204b02cae83b676e059a7eeb5",
"assets/assets/logos/tools/android.png": "a803e97a7dc10b7037ed2fff7253a9e1",
"assets/assets/logos/tools/azure.png": "5e7b90aa9a30845784880ae64254ab35",
"assets/assets/logos/tools/firebase.png": "9ad79828751ede5dbe9f92f97237bdf2",
"assets/assets/logos/tools/git.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/assets/logos/tools/kali.png": "95f11c8c01c7e140e41476a22bc9edef",
"assets/assets/logos/tools/vscode.png": "a78dfa30bc7f1e6e652284bdd386d0d6",
"assets/assets/Nunito-Medium.ttf": "ddb1437a881ef46b277159f303de7797",
"assets/assets/projects/logo_daily.png": "8c23a4a3a244c7913d630a5bb0d33f5c",
"assets/assets/projects/logo_editly.png": "d4d7cfba624231b37a87fd77f6428d07",
"assets/assets/projects/logo_scrolly.png": "d2a9b6ff804424479c4316e09c3f5aa6",
"assets/assets/projects/logo_trinetra.png": "28e4f7acdbc563181f6aa519eaf8d80f",
"assets/assets/wave.gif": "30169e4a670daf12443df7d2dd140176",
"assets/FontManifest.json": "cff3b495274e4fc34927858cc872597c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "1151dd519e09ac097e2e9acbaad08d2a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "6563d8018a5c7032993db9d73d7d66c2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "104fc58f99ebe5e27e60567541c92f8c",
"icons/Icon-512.png": "039853097773290ad0766b45142a5a79",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "16036bbe0e979c05886ad1fb5bf77084",
"/": "16036bbe0e979c05886ad1fb5bf77084",
"main.dart.js": "a6e1dbcfa0941ace3fd01406a4b5494b",
"manifest.json": "f30b878212d8f529468e4b3268b5d774",
"version.json": "558243983db5cd73b66d7d3393c38f01"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
