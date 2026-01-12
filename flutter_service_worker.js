'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a0fbeba5ce3d90ed367e2306ea630db4",
"assets/AssetManifest.bin.json": "a07b8396a3222df3b39cc3bbdce750d6",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/icon/content_writing.svg": "3b34a380ec94fecc9b5c188a57cbbd3c",
"assets/assets/icon/facebook.svg": "19a47ccbd8ff74d0ce580579a90bc585",
"assets/assets/icon/insta.svg": "8282cf288436bab0a89cf4ef85f4dd92",
"assets/assets/icon/linkedin.svg": "608d18f0208070932ea03f1b8bdafce8",
"assets/assets/icon/pay_per_click.svg": "f5f0591c5d6ce803bf877e811505b58a",
"assets/assets/icon/search.svg": "736b7711a747b0173593640f5af958f9",
"assets/assets/icon/sochial_media_marketing.svg": "9af33f7dbca0c54216fbbbe7d2a08a41",
"assets/assets/icon/video.svg": "7aa2ef5f6198517a91694f650f6fe105",
"assets/assets/icon/website.svg": "1b6d9a9f9830cf654234a3f46e2516cb",
"assets/assets/icon/whatsapp.svg": "2d9412540f059e8ca2f96acda7c56ca4",
"assets/assets/images/background/background_appbar.png": "a890f1c0f9accda60388a3956a7dd8b7",
"assets/assets/images/background/background_expertise.png": "efb7a23538984c962e0c114c8ac6c094",
"assets/assets/images/customers/1.svg": "5930a71d37577a44e3102f8c64fe5b81",
"assets/assets/images/customers/10.svg": "7fe870b1fc2635a8e05c44da9e04b749",
"assets/assets/images/customers/12.svg": "6cb2450081ff1b78220f3613cd6f351d",
"assets/assets/images/customers/13.svg": "1976936939d9328ed71a5f114cf5b39f",
"assets/assets/images/customers/14.svg": "c8c9f3df84a9924bc8cad4d81c847706",
"assets/assets/images/customers/15.svg": "f9f64af15f0885204e74af372b9c5823",
"assets/assets/images/customers/16.svg": "99c8d8d7220170683744046a501f4d75",
"assets/assets/images/customers/17.svg": "543c5f0fa27706e1c268b4110a875426",
"assets/assets/images/customers/2.svg": "0d33ef3ef51693b9907ddb76d689b140",
"assets/assets/images/customers/3.svg": "373c40b3f0d7ba8263f23dba836ecb91",
"assets/assets/images/customers/4.svg": "5aebc78fbfb27e86b5494357d229573a",
"assets/assets/images/customers/5.svg": "768afe7caa769867d0d45171fe009e16",
"assets/assets/images/customers/6.svg": "b28af18f00a144946a1e610004172f68",
"assets/assets/images/customers/7.svg": "c539d14caf6cfa3340cb584bb4621627",
"assets/assets/images/customers/8.svg": "6565a863fa2fa86bbb531297df48e475",
"assets/assets/images/customers/9.svg": "4f591b961b68182487f9fb1df6db682b",
"assets/assets/images/logo/wasel_circle.svg": "9acb9eaad1d4865dad52d6d7c77af747",
"assets/assets/images/logo/wasel_klam.svg": "b35d2ded8db1f979e552600b40e109a0",
"assets/assets/images/logo/wasel_logo.png": "d2ca8cf28a0a713ab3d902bc6d025d5a",
"assets/assets/images/logo/wasel_logo.svg": "b99ec1e06e6e1120ff492c45b6d1698e",
"assets/assets/images/our_latest_work/1.png": "a7760cf115b92cc09bae3ff52ef13ffc",
"assets/assets/images/our_latest_work/2.jpg": "bd4222b09205acee3bd48fab00ee696b",
"assets/assets/images/our_latest_work/3.png": "7e4b7af34285881f1b47bae5b00e944a",
"assets/assets/images/partners/1.svg": "8f9563de98066395d2166bd49f81b44a",
"assets/assets/images/partners/2.svg": "aee2e23b6a5735b9355ea99e1fffa89f",
"assets/assets/images/partners/3.svg": "88e48fdf7f55850a48a59473ce5118d0",
"assets/assets/images/partners/4.svg": "1d5251972367ac8dc6a3af407b6b9409",
"assets/assets/images/partners/5.svg": "768afe7caa769867d0d45171fe009e16",
"assets/assets/images/partners/6.svg": "ead88cdc2685112cd8bb2fed7af9b094",
"assets/assets/images/reviews/1.jpg": "633a9fc1d6e5f8d6e081e5edd75bae09",
"assets/assets/images/reviews/2.jpg": "3140798657c75eb9dad8847ec6ae5001",
"assets/assets/images/reviews/3.png": "814a779fd02618fcfd9d5325f8974fe7",
"assets/assets/translations/ar.json": "e8071d63749846cd25c361f4f2344283",
"assets/assets/translations/en.json": "acad0d5eac293ca37c33eb3f1671db17",
"assets/FontManifest.json": "3c235b9fea8597fa5387cac9a18a3dd0",
"assets/fonts/MaterialIcons-Regular.otf": "bf3677b58f140cd71b84e0b9d13a3b86",
"assets/NOTICES": "03e017a9b1a9eb61fbc87d15fa51a7a1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "14cd783a0b46af7806ccf4b5f38eefd2",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "1fcba7a59e49001aa1b4409a25d425b0",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "f40058139d9ce6e8703a9f6911726f57",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0a4b830f42666e6b58be01d92c108f43",
"/": "0a4b830f42666e6b58be01d92c108f43",
"main.dart.js": "48cb45eaf4073b75da119298ae108fa3",
"manifest.json": "43dbe45b36f3a58ddf35497c0e3dde0a",
"version.json": "14c26f0ab3a45e36d4438f6b9590b9d8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
