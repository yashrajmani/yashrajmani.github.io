'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "40bd137d39ba125cb1e6622518493f78",
"assets/assets/avatars/call.png": "83156c596d2ef30f20ad02e5d055508a",
"assets/assets/avatars/hello.png": "c1fc42c628acc4e4709a516264f1574f",
"assets/assets/avatars/hi.png": "348444251ecf80477d48642811d221ad",
"assets/assets/avatars/laptop.png": "60824607fadd239e7dec20512ee9ca89",
"assets/assets/avatars/onehand.png": "0352f701fbb752d3a1fa3a78ac737f6d",
"assets/assets/avatars/twohands.png": "2cec583a25867b8e4059ba08a78d8802",
"assets/assets/bg2.png": "cb961d3cc6804bb5b1507ba07cdbab18",
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
"assets/assets/Sweet.otf": "ed2506379536c7419e3275f07f83bb72",
"assets/assets/wave.gif": "30169e4a670daf12443df7d2dd140176",
"assets/FontManifest.json": "8082d98e995b8351d8691799e5548bee",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "911e9628eeeb69d7302bf152a2217247",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/shaders/ink_sparkle.frag": "5adeb057ab45d3ac6cc7c0d39af0fc09",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "6563d8018a5c7032993db9d73d7d66c2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "104fc58f99ebe5e27e60567541c92f8c",
"icons/Icon-512.png": "039853097773290ad0766b45142a5a79",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d9dc04dd4a6183ac0e04fa6c63af031b",
"/": "d9dc04dd4a6183ac0e04fa6c63af031b",
"main.dart.js": "74a705c80d12e65ee506298d0592e53a",
"manifest.json": "f30b878212d8f529468e4b3268b5d774",
"version.json": "558243983db5cd73b66d7d3393c38f01"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
