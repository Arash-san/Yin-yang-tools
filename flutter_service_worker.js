'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4c38801d440c016ddc015849a4fb2496",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/loading.svg": "e7e85b90cbe4848aa2add6308f374fe2",
"assets/NOTICES": "edce7ef0224fd9b84b77e21f217aa58f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/solutions/3x10%2520Solutions.csv": "00bb38b747b018a7a0e4b005d0b5581f",
"assets/solutions/3x11%2520Solutions.csv": "11db3ff294185053e9441e25b12edcb4",
"assets/solutions/3x12%2520Solutions.csv": "04ae0c77e612543e5187a0e2b5fd3f6b",
"assets/solutions/3x13%2520Solutions.csv": "6e49524fa4ca98da8f02b3b17663c724",
"assets/solutions/3x14%2520Solutions.csv": "4fffe04d83574d95fcd2de23ebc00192",
"assets/solutions/3x15%2520Solutions.csv": "935b6d8a3e28d2cb8661c24cea7ee220",
"assets/solutions/3x16%2520Solutions.csv": "3b9dc003934acb23ff82e06862912eab",
"assets/solutions/3x17%2520Solutions.csv": "426376441059bbdf81e2d1f3007de92a",
"assets/solutions/3x18%2520Solutions.csv": "1cadefe49a4670433bdf797b593ae246",
"assets/solutions/3x19%2520Solutions.csv": "f8635b3d628705c2799dd809907d504e",
"assets/solutions/3x20%2520Solutions.csv": "45aeff0acfb3789a5bb7ed49a9627407",
"assets/solutions/3x21%2520Solutions.csv": "9810a73af40e5080a2c424ed8167d57b",
"assets/solutions/3x3%2520Solutions.csv": "ea5b42f1c31c93a7774cba1ffcef1af5",
"assets/solutions/3x4%2520Solutions.csv": "bedd0d5b592ec978c66564bf3b0cb2ea",
"assets/solutions/3x5%2520Solutions.csv": "467d35912cf432af72d5e1497fde9f07",
"assets/solutions/3x6%2520Solutions.csv": "419f749adecdd8f9b7d670a944edcd43",
"assets/solutions/3x7%2520Solutions.csv": "0869b5ca2729b656cf969ba04b2350c5",
"assets/solutions/3x8%2520Solutions.csv": "996e9c1709d3ab752f64ce2339c4b6c6",
"assets/solutions/3x9%2520Solutions.csv": "6d493bc11c16e84b60d752e9e771b0ae",
"assets/solutions/4x10%2520Solutions.csv": "a51716b15d114d847cabce95422b1ad3",
"assets/solutions/4x11%2520Solutions.csv": "466c63f3fe6356498563651ae4f684f2",
"assets/solutions/4x12%2520Solutions.csv": "d46ffa2c081b96077845c03805eae819",
"assets/solutions/4x13%2520Solutions.csv": "2d6c7d3cd6976fe437bf1b0d6fb0e7c6",
"assets/solutions/4x14%2520Solutions.csv": "33117fc95e3fdceabab3c0d15996458d",
"assets/solutions/4x15%2520Solutions.ccsv": "56c306a4879dfd2ad4a9ceb2e85acfa9",
"assets/solutions/4x16%2520Solutions.ccsv": "3e1993c35962548667548363c44a90f3",
"assets/solutions/4x4%2520Solutions.csv": "a703ce50ab36fbe11b2614b034dfedee",
"assets/solutions/4x5%2520Solutions.csv": "70ac220d63e3a918600f4938d4b5619b",
"assets/solutions/4x6%2520Solutions.csv": "9cd19b8fc84f4abe66430a64af01ba99",
"assets/solutions/4x7%2520Solutions.csv": "576b6a4beababeeb9f0d2ce355bae7c3",
"assets/solutions/4x8%2520Solutions.csv": "65ee3f4ea7698e46282b1707f148b5b3",
"assets/solutions/4x9%2520Solutions.csv": "c7f4bceda065c341b7deb1ad2b26a306",
"assets/solutions/5x10%2520Solutions.csv": "33e76a9ab2f6fd4c3280c8487fb021ef",
"assets/solutions/5x11%2520Solutions.ccsv": "96ab1ea5d716c57aebb87eebe9031c90",
"assets/solutions/5x12%2520Solutions.ccsv": "160821530860ecc15fc346019eb0d702",
"assets/solutions/5x5%2520Solutions.csv": "dcb113ac80fbf97bad21159a90d25f62",
"assets/solutions/5x6%2520Solutions.csv": "0c661e4e547b51074cde863ba25d48e8",
"assets/solutions/5x7%2520Solutions.csv": "055ee1accc4718d3cabd1e636dff98dc",
"assets/solutions/5x8%2520Solutions.csv": "1355d61250a36ee599454dc07712df70",
"assets/solutions/5x9%2520Solutions.csv": "07393b41e450e4b5f06dd78fa9a3f95d",
"assets/solutions/6x10%2520Solutions.ccsv": "ee17a2f408b5c6e719cb8a7b54d44ce0",
"assets/solutions/6x6%2520Solutions.csv": "4e19db1e8739830296cb7dcd311dc918",
"assets/solutions/6x7%2520Solutions.csv": "038affda79237ed426843d8df320fa49",
"assets/solutions/6x8%2520Solutions.csv": "2b08aafb8c5565762fa66937a0cce7c5",
"assets/solutions/6x9%2520Solutions.ccsv": "56823ae8bc9796479e58a941d43d61f8",
"assets/solutions/7x7%2520Solutions.csv": "89b10b824b8b4efed8a70b91fcd757d3",
"assets/solutions/7x8%2520Solutions.ccsv": "904293235bca9887411d9ac2d6574681",
"assets/solutions/7x9%2520Solutions.ccsv": "5efab6f33556f762e76118facd55c842",
"assets/solutions/8x8%2520Solutions.ccsv": "d584142c0fa6c33e043eb77b4c5bf4ed",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3bbdd75729f54f9f36f54af819fd4317",
"/": "3bbdd75729f54f9f36f54af819fd4317",
"main.dart.js": "e442ab6f48872025d6a9d569aa55b89f",
"manifest.json": "723f9f3b70cfe1f10e8c2a9e3e5ce333",
"version.json": "f785abcc60c7ecfa727be9f2ac44abed"
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
