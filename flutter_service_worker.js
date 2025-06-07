'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "aae598ed0112cc646fe2be422d58ee65",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"version.json": "5e29459d0561414891009736ab3f293a",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/NOTICES": "e14f3d5eb959b2fb6492154544cb4509",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "99914b932bd37a50b983c5e7c90ae93b",
"README.md": "b93d221a09f70757977b5eff34869845",
"flutter_bootstrap.js": "f6d0877168568ddfc517dca41ce0274a",
".git/COMMIT_EDITMSG": "2dabdeebab5c69e3d686b34576e5b4eb",
".git/config": "049b9d4e3e4a39bde08c0530b31c68ed",
".git/refs/heads/main": "437ab87f275f6738c0e41d12562c8fd9",
".git/refs/remotes/origin/main": "437ab87f275f6738c0e41d12562c8fd9",
".git/ORIG_HEAD": "dcbf0590cda464481d77a94be878561c",
".git/index": "0503142eb659a02128930107cd31862a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/FETCH_HEAD": "84a1a1a783992b8507193e2eb9df251a",
".git/logs/refs/heads/main": "311a3d393eaaa9f995cf37a01ec9fc75",
".git/logs/refs/remotes/origin/main": "914372812f4b37af0a3a7aa2b06e11d2",
".git/logs/HEAD": "7bdce39da556ace9149ef03cc77127d2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/d9/60f6d55e2090dbce9711f451367a78c7224c3c": "632b5f027e77984c4fda17e9874b8c31",
".git/objects/6e/7dc4b9ab6124f89cebbd6d60b15a46f4aba873": "d389e2205baa78b2476e1a4035618168",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/5a/8594af11289b2a3cea001da5b1ccc0f9fdf392": "c9244c6bf3a04b0d82d5f898b800ce03",
".git/objects/9a/d07050f2104d8508c2870dddbe020cfc692056": "4e828b8698697872f0edf36b5aa61a70",
".git/objects/8e/0e784de679b25f04837947bea2b8951bf47c82": "5007caca4f6c60fd437c49316b31a906",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/9e/41027afa1999e4aaf880e3c6c8b88986c767be": "eb4efd18a8253252bbb21c7856bd79f5",
".git/objects/ea/d3527d44240d7fb24bb91813e76f050f3b2457": "235faa2f65fc2b73ee29287f04b6e1e3",
".git/objects/d2/1c615ef48dab0b80c807b54a8354cc5a40e401": "e26e2a07a2f6fa60f81350230eeaad28",
".git/objects/4c/b8fc77416d53a325faa2ffbfc8d6d404d41e41": "fb72283ba86a7d6dee9c2db84fbcab36",
".git/objects/55/1d412e75d91de8cf115675ef2233d8b9783493": "2ce74f81e2b6dbbacf76d20655a02686",
".git/objects/82/2e6671bae7973dfeb95f6178da3e6c0e424aee": "df43dd7e64e9a4293476b266e3e53398",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/59/bf79443a18717196a200f5c4a5beab801c7852": "b0de194046a6671f34038b1284ede10c",
".git/objects/a4/7cf8d1538ee5d94896616b15cf8e7de260022d": "547b026ddf3122b6748de1f3b4675068",
".git/objects/53/49fc86f8ab5b137529dfce0725a08251117680": "41c7a6b39243f8459e3ec26d3d176863",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ff/8ad2b08366a279ef7793b2345756fa427d676d": "f958ca2d610d8b5dcc7e0a7880c32388",
".git/objects/69/da66d9155bbdf71016afff9c99dca57af535f6": "0abcb0559f909b283c026da40675a282",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/89/a5bca9942f5ddcb5e8133bc81c7a7f325efa5e": "a1fe178be12f6f41fa745a18ceaf6a41",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/a7/c81fccb9c9fb0a20a77be085df8ecdd98974d5": "4d08375037e67d35ec669351f03b71da",
".git/objects/11/100f79dfd81eab28b8ced537647cff4dbf2a56": "cd7d6803cc41399a7d8409dfd969ea20",
".git/objects/77/42e3cb0c7f6e5161bc5f6f84be6a6e2db24de3": "204c779ca7d5724291c553e4a64f6a07",
".git/objects/b8/e2c0c0776861e8c1f433a75ad8fee3bd4f46c5": "546c389c5e1c5f8568ff8a4f6db466fa",
".git/objects/f5/40fa3d029fe8fc85eefcb78848af2e556b7da3": "7ab70b1ccc38b74826fa0e1e828c0c13",
".git/objects/bf/2883b5671007d2e4c8eb2f0dab2af9b7560fb0": "ca4766b7d5f1d799c5500083c245976d",
".git/objects/e7/f3db6ce30a5da08fabed38a43b3c1d93adab7c": "569090f93597ab0b3d032d78345ec529",
".git/objects/42/f21827ba0492695377c3aab27b9c5a5bc8b8ad": "d36ce2b6039371329b5016eeddcf3be7",
".git/objects/fb/5b53c137bcdf0ba0160c5b6122811a049a36e9": "6417ad0205315966ad3294231e562f9f",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/0a/1863585fdaeb905dd739a7b64aa2835dd34e4e": "1d3046c5d11726c0a7b2236ffb73e75e",
".git/objects/0a/e82c6aed0754d742e02650b9c52d5393bf9745": "aa7292561b8298c6d931c26441a23442",
".git/objects/1b/8b84a7a0da3032f3fc8679066dda87137d2a9e": "e604cf5d7c5dee3b90c51c6835a64abd",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/40/ea5029f23d029e07078e4898a3a508f6e70bb7": "d7419d22067c9c7ebb9916990fd0eb5f",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8f/dd109cdfdb14fff5077bf0d7fc998c19fae331": "7787b38b0c97c066fc05cea32ec7b435",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/83/78037b81f75735102d0be5fbe5bc220843ebdb": "77a3b171ac2453db0a1f8c85adca23f2",
".git/objects/83/13d3fa3947e0123133bd8adf4bbc8703e4747c": "a1a11bf3ee2a1a25bd5f7c63a1636538",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/91/97a30b430d3d6c594ce8e6fb5178e4883d44c5": "13acf1ac2b6bc1027333d72c7b7ad98b",
".git/objects/f1/d17ce4f07ecaef2d28d6c3ae25141317f73b81": "b92125beeccb50688c8d3b783fc21f14",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/97/b143875e19767b6041925d6e30e43b71974ead": "22aaad37fdb029d5a1e7f1899cc0d7a6",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/bd/24be4036ffd0cb51a54ac40a0cb6febff7f9ab": "d109f55927fbf931184eab54b22ad7dd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b94d5c1919b123b4b53af01f92e50a7f",
"index.html": "d473e8806b995a96722a5d5cc1bb8ed6",
"/": "d473e8806b995a96722a5d5cc1bb8ed6"};
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
