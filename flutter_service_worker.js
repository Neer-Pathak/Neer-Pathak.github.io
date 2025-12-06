'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"main.dart.js": "c62c08724e9dcba089ee07bd46e7369d",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"CNAME": "bb35ea1a2736798b1831d2b0b409c536",
"version.json": "5e29459d0561414891009736ab3f293a",
"assets/FontManifest.json": "65f94acffb0ac2ee75d87cb32190e494",
"assets/AssetManifest.bin": "8e03b28c89aaceb9be7c7c74792335e4",
"assets/packages/lucide_icons/assets/lucide.ttf": "03f254a55085ec6fe9a7ae1861fda9fd",
"assets/fonts/MaterialIcons-Regular.otf": "8918d2b3d2a64cb73de95c642a707f97",
"assets/assets/ibmpro.png": "730cc5cc454607ee1d96f9b08550737e",
"assets/AssetManifest.bin.json": "6adc06e39fc6f93b669fd5ef40a12678",
"assets/NOTICES": "d2d5c95e8e60e4b2731df46c1b004df9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "50e5b612c40421ff7a5bc840ba9c5003",
"README.md": "5ef34ebc8921c0692ae42da63b1f3b89",
"flutter_bootstrap.js": "e32d99084c82d935330f7e71b25384c4",
".git/COMMIT_EDITMSG": "a7ba6eaa1354cfc3c4f03c7c112a1aac",
".git/config": "049b9d4e3e4a39bde08c0530b31c68ed",
".git/refs/stash": "af836a06dc8770daa5a33b1cf21e67fe",
".git/refs/heads/main": "ace54740863755ac14a43860fec3290e",
".git/refs/remotes/origin/main": "ace54740863755ac14a43860fec3290e",
".git/ORIG_HEAD": "ace54740863755ac14a43860fec3290e",
".git/index": "b7d36992d81648deabb10663fa92a413",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/FETCH_HEAD": "487e89f7c45ccaa63e0b0d4c5be2ea5e",
".git/logs/refs/stash": "eeb8125416b0e5e2783e0499ee28b516",
".git/logs/refs/heads/main": "b949b220a9696b2a67a47a7918d8f218",
".git/logs/refs/remotes/origin/main": "f5445d5746299e92b7c8539036106a00",
".git/logs/HEAD": "9f67975950496f21b0bda732e73d6b75",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/d9/60f6d55e2090dbce9711f451367a78c7224c3c": "632b5f027e77984c4fda17e9874b8c31",
".git/objects/6e/7dc4b9ab6124f89cebbd6d60b15a46f4aba873": "d389e2205baa78b2476e1a4035618168",
".git/objects/98/ff1ffec34492911d35a518e0514c9f8626ad4b": "1db1e3ab454c2c3bf17a3011274418e4",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/37141a32a0217addb88b32d1190ed1fbc6aa1f": "ac64d52caf1a8b13b721075c80f518a1",
".git/objects/67/ef6cd2e8230fc7d9d39ad43d6a12881d74162e": "ca234bf003a026041d4bf70185354ece",
".git/objects/67/2d05cb97010131adcc8c421070cd1b7a8f20b1": "722964c781d155b426a6194f62a93c66",
".git/objects/34/0024811a8523bccd33e60a6fe1948dee916246": "265ab071391377b881cbf3ac8c982a3f",
".git/objects/d3/fb5c3184f3f3aa1768bbf1b9789bd21cecab8a": "322fd91cb286828eb3e02c3d48ad1c6b",
".git/objects/44/1ffebc148f933366d8486f5f967d334f1c55af": "a33aff5f00f48ac11c25349edb1ec214",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/73/0a22b8db1e9d06b8d96d86f42de6dad3a490a9": "b7b6578f51c8e1f8580de25e1fc566b6",
".git/objects/5a/8594af11289b2a3cea001da5b1ccc0f9fdf392": "c9244c6bf3a04b0d82d5f898b800ce03",
".git/objects/5a/ada61d4f65c8eb6796729da14eef320d6a8328": "63219939f44832c0b6a80923c90bc380",
".git/objects/e0/2119a82f95f0a27859e50f42ff10364a359d05": "2c8550c45665fe3156d0a937970d87c7",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/7d/0e678127ee7b47f12175dfa1c6eac4e8a3db6a": "e0051d7930fa9b4196f4f1b6310ba73f",
".git/objects/08/3835ca033d27ed7efe3633b4119d4b3d9715b5": "b296425a62e306f29b8f517716c5f94d",
".git/objects/9a/a8cd7d7eb89f18e1ec54f53db92bb36b85323a": "a00b92d3899ba08e2425d3d076169848",
".git/objects/9a/d07050f2104d8508c2870dddbe020cfc692056": "4e828b8698697872f0edf36b5aa61a70",
".git/objects/ad/b2df56a8d4a0e0946d525d30ee160a2c7f080f": "04ceba1d2c7bd64bfa5e4440b7f84239",
".git/objects/bc/343211d32a54a9f20ca416e5133211a79df071": "a45a8194f3cf13f0a617bce69903a9b5",
".git/objects/c2/0df0b58e8eed200f3fae8780e2d343d2191520": "1bc14906b2b41462f9cf6cf5855c55bf",
".git/objects/c2/bd6ddb596e9c310acc8442e074b676d6414e69": "c27934780defd4d5bcd89088763f79a7",
".git/objects/8e/0e784de679b25f04837947bea2b8951bf47c82": "5007caca4f6c60fd437c49316b31a906",
".git/objects/d8/ef598b0533265d1e21df267e75d0b64260b259": "7f1fea5083e4260414879bb514cd2c50",
".git/objects/84/f3640a800972eb6bbe05a736fd834daae8c6b5": "bea22bd767c4af56b7d5f76e691e684d",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/9e/41027afa1999e4aaf880e3c6c8b88986c767be": "eb4efd18a8253252bbb21c7856bd79f5",
".git/objects/a2/83dc677779ff9fe0091f8673e87d307c5438d9": "602b3bc2504f0fb168edeada0b199dee",
".git/objects/15/3cefd9a8f64e395547fcc2438b7caf384bbafa": "ef6dda6a0381921d65fb920eaf4537ad",
".git/objects/ea/63e765bd35091745c0454a5c39a73ce1ef1a80": "c07319c1d19373bb42563dcaea201dc6",
".git/objects/ea/d3527d44240d7fb24bb91813e76f050f3b2457": "235faa2f65fc2b73ee29287f04b6e1e3",
".git/objects/b4/561c653808aed55b878f0186457bd0c99c564f": "413cc855dd065bc651d345460286c696",
".git/objects/95/fa9695b830c98a7aeb4f28e3b820e4c3e9eea1": "656190d5dba3e93cf4e2e2f15539758d",
".git/objects/d2/1c615ef48dab0b80c807b54a8354cc5a40e401": "e26e2a07a2f6fa60f81350230eeaad28",
".git/objects/4c/b8fc77416d53a325faa2ffbfc8d6d404d41e41": "fb72283ba86a7d6dee9c2db84fbcab36",
".git/objects/4c/d5f9aed5dfa2a211ce88235c22f282964cb628": "a392b4bf099c76a2c670788418b83398",
".git/objects/a0/4f91cb62d9d8ee26a70d27b9ffc36ff476f108": "379c5715129fb664f93544ae2b2d80eb",
".git/objects/a0/d743e97a718ed321ce1e9565b446bb09922f2c": "c7e5b457373282369c9b132cc29f642a",
".git/objects/75/9f0288333018da8115558dd1c18312a6e27c1f": "f1e4b5b6dd1473658b49f710807d75ae",
".git/objects/55/1d412e75d91de8cf115675ef2233d8b9783493": "2ce74f81e2b6dbbacf76d20655a02686",
".git/objects/82/2e6671bae7973dfeb95f6178da3e6c0e424aee": "df43dd7e64e9a4293476b266e3e53398",
".git/objects/ae/825cf6c2cfe640c07405fa9d79679d55e033b7": "56d6d96a00394f3897d9e9f44cdbec4c",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/a1/295e7492bef9f53ca940568f0b99776438b5e6": "6dd6e58836d2a0d7ce65f4cacd53eaf2",
".git/objects/a1/477c87b9c09a9ff657ab69a310f68e29389076": "7ceef50371b5c02ddcc20387005c9718",
".git/objects/27/cdfaa26ff539148b4d216e350bd7bd0e225b3d": "2c88f875d44692d926aabb89ebde34a9",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/5ed63b9ee59b43666052c04fb6307d3948374f": "a7aaca2b5b398ee7262fa063c2b18c5c",
".git/objects/f4/cbac252796e7ea646141a510477ab647d9c68e": "8716b573ecb2d0fd12cb4933db2c157c",
".git/objects/f4/97f79e5eac6d9ee201903c63c6bc040dbc1ca0": "a50834ff9290a10605592a48e0db0f0f",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/59/bf79443a18717196a200f5c4a5beab801c7852": "b0de194046a6671f34038b1284ede10c",
".git/objects/a4/7cf8d1538ee5d94896616b15cf8e7de260022d": "547b026ddf3122b6748de1f3b4675068",
".git/objects/35/66cb3ffde30fcec1fbc0bc65cd75665f7e8abb": "41bb48391b8e46282100b9c2542e25b4",
".git/objects/35/cc29c4efdbfd67faffd6dd0ae22831d70710e0": "e38b44b29148d2e16cb8170ef3d7e196",
".git/objects/85/df4277c8d87113bed01f28a240c262dcb1b6a0": "465eec7a5095e46f1c75fe1514856e9d",
".git/objects/2a/81a19a894fd041fa47d52b47db67008f0204ad": "9f34dfb86a4eaedb8a1e920c26e239cc",
".git/objects/06/47cc656f5397f03e003320b516b6dcc4204c42": "0730b62decd98fa06465ff068aaa3da4",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/3e/202a84b850f4b810be53bf5686243f3b7d3faa": "54583c4029e8da4b151b717c668f126c",
".git/objects/c1/2512594aef8b3956258436163e709e7e1ca636": "1a57fbb2302502c1e9a03d643d336267",
".git/objects/22/357a895bd1066cddcec1a64b640a4f4b7391c3": "6a063f6024806aa466c5e8c352c9ec88",
".git/objects/22/795411f67d01cd335fbb29d000d4b5d65a80e1": "a2854403f8a35cabacdbe763717846ea",
".git/objects/12/c929d7b99d8552cc44892e013316f8368f02c4": "a9edfb5674b37d0eafa0428296fa097d",
".git/objects/53/49fc86f8ab5b137529dfce0725a08251117680": "41c7a6b39243f8459e3ec26d3d176863",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/cc/09c7f5fcf313453eca24f8ceec4f8fbfc1d225": "9461d3028da79a0612a5279bb9791892",
".git/objects/d5/8353795b37e1daa1c148d5c7cba525c7150958": "6bc5c557e50c0fa62c365f84364e1238",
".git/objects/46/820026db0e75e746e31837ae018b472f59b73a": "5236873f406d1024388171137c082fb5",
".git/objects/ff/8ad2b08366a279ef7793b2345756fa427d676d": "f958ca2d610d8b5dcc7e0a7880c32388",
".git/objects/17/75e55eaf4fabb64113b5b7d278841143dd03ce": "40e9be17b365ebbb0e7b4f195b8c81a3",
".git/objects/69/da66d9155bbdf71016afff9c99dca57af535f6": "0abcb0559f909b283c026da40675a282",
".git/objects/c3/1fd0b25f5c8111443b008bdb344a4b8495b4f9": "6a5802fd93c23b446375be0361b55c08",
".git/objects/c3/0f0f18d4002eb46699f810207d760c8aa9b35f": "342979c3d36bef61edea51c6253e98dd",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/b7/49f6651ea96c2f4a27a24dc408af6afb51e7a1": "83e9bda15bd83c6260625013ba53af02",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/89/a5bca9942f5ddcb5e8133bc81c7a7f325efa5e": "a1fe178be12f6f41fa745a18ceaf6a41",
".git/objects/24/3e184d930b007f5ba531989bf510be0e6565e7": "9252583aae619d191456fab7acd7ffa6",
".git/objects/36/b3664b1a2967c9ff8641f34c1660b09ddc1504": "8e565a14ffd2afd25cb2528bb8ecd2ec",
".git/objects/2e/b483f546fd142d775f4a3df35ee99f5ab22555": "66c8772bb888e53179c6a20d888f9d54",
".git/objects/f2/7b1e2833f63a26b11bffa87d16e98292ad9db8": "178dcf50b9534c49a2ef31736e9296fb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c4/310dfa96d168419dff0b2e196b00081f6ad3f1": "15f30d5c5d7c730f9b8b31e849ff3dbf",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/ebad28239876de1b986a2427376b077c1a0220": "c7098e473a1fff4a06cf5b48046ed03b",
".git/objects/c4/51b7ff825582ee9ca32394627d81c06f8efba2": "bf6b7ac617c41f4a723b4220cacb9d5b",
".git/objects/a7/c81fccb9c9fb0a20a77be085df8ecdd98974d5": "4d08375037e67d35ec669351f03b71da",
".git/objects/a7/85a9e3ec0b893370917f0d83235b30a530705d": "ef5b2a1fccd48cc919b678dbef26c076",
".git/objects/11/100f79dfd81eab28b8ced537647cff4dbf2a56": "cd7d6803cc41399a7d8409dfd969ea20",
".git/objects/11/c85f7e3dda36b86b8f3f94867e7da44b61d47c": "666eb7d0a90f6d12e44661eb64c7a712",
".git/objects/a5/2ab3d6fb1297fd07c9a5bd62352a51f9a1530d": "92ce72a717946bd277c5f172bd3fa19c",
".git/objects/f6/e2942e72b42d6cc4edffce0cc5a200aef957b5": "cc2d953ece2f689cc12e26e402b2b46d",
".git/objects/77/42e3cb0c7f6e5161bc5f6f84be6a6e2db24de3": "204c779ca7d5724291c553e4a64f6a07",
".git/objects/0c/fdc7057bdebaedaad0305e46fd39e027ef4a48": "c94d2792ffabf61660157c24c5bbc545",
".git/objects/0c/ce2017e2e310c80b0c0da3ee1b1cdc59c1eea8": "ac2c59beab5e44cb8c51203233c6bb06",
".git/objects/b8/065c91f7b4493c9f2beeaa615624085a72aab1": "18ac3f45559d5a0e54cb2fb5015fb5bb",
".git/objects/b8/e2c0c0776861e8c1f433a75ad8fee3bd4f46c5": "546c389c5e1c5f8568ff8a4f6db466fa",
".git/objects/b2/7e82196b8b6cf1c3909e529cb1164c8d314e41": "56be0847b5cbd4b4f5bec8fea100112b",
".git/objects/6b/215a657f9fa159f1c6b29794ad3b74bab0d915": "7f3689322e39bddf8ecd996da380bc6b",
".git/objects/f5/40fa3d029fe8fc85eefcb78848af2e556b7da3": "7ab70b1ccc38b74826fa0e1e828c0c13",
".git/objects/f5/502c93b24856a0ddf1bc263de58476fa535572": "d376d7dec756b18ef94f748859ed3521",
".git/objects/bf/2883b5671007d2e4c8eb2f0dab2af9b7560fb0": "ca4766b7d5f1d799c5500083c245976d",
".git/objects/bf/93937911d5506c6bc011cbb6868b290e99c75e": "1448dfda11ab153db67b968737c11129",
".git/objects/e7/f3db6ce30a5da08fabed38a43b3c1d93adab7c": "569090f93597ab0b3d032d78345ec529",
".git/objects/e7/c02a1655c486bbfbf210141dea6ac94f262d28": "645bf370f8f28a5f1eb39bcd264f340b",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/de/8a014bb12fd3ade4b4280b2cb944453104aa5e": "03d14188ebe77b12b49279436ba92cdf",
".git/objects/e4/01f1cf1083c2d56d9a14963f89da05147f17c1": "d42017d392190ac9c22d7130c53175ef",
".git/objects/42/eb274f12943777dc401fafc8a453665d108fd4": "c8b46e1e60cb902667fe509243e6b049",
".git/objects/42/f21827ba0492695377c3aab27b9c5a5bc8b8ad": "d36ce2b6039371329b5016eeddcf3be7",
".git/objects/42/9a1a8856d7d323a0f8202c01e8ccac9e62adb8": "9bda8c510d8aa2c6bf71da36b4e7bbec",
".git/objects/fb/5b53c137bcdf0ba0160c5b6122811a049a36e9": "6417ad0205315966ad3294231e562f9f",
".git/objects/fb/5d43b29d56f1b23b6c662de3fa978daf276273": "b2b8d3ce88764081da9c1cd6eed1ec1d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/b3a7cb06c7d7ee0257aef817ad429484bf6e4a": "458c73d5cfd52a959f22b4a8735d5ec3",
".git/objects/14/91d8dff08f15b02f1608289d22cfee0ce88101": "c10f38a8edbc8c6cbdef4373adfcfe6f",
".git/objects/1c/dc599734ef049903243d2b041a8b83568f6d9d": "fda1b0bc44db78ae79efb77703c94870",
".git/objects/0a/1863585fdaeb905dd739a7b64aa2835dd34e4e": "1d3046c5d11726c0a7b2236ffb73e75e",
".git/objects/0a/e82c6aed0754d742e02650b9c52d5393bf9745": "aa7292561b8298c6d931c26441a23442",
".git/objects/1b/8b84a7a0da3032f3fc8679066dda87137d2a9e": "e604cf5d7c5dee3b90c51c6835a64abd",
".git/objects/1b/64efd9790e443c82b15bb78c1ab54f8796f989": "8de9170027b50eb7252d42999e17f32b",
".git/objects/1b/e2545962caee88ec3df897d2a8c29046163dba": "c7950326c4dcab870db94d83d76272ea",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/88/462f6a47d5c4ff10acc0c9c20601a11fedd218": "535bb6260ffb17765e2ccbb36edb91a6",
".git/objects/88/29c137db2647f123b04ef77a1cfa8e64847893": "6eb41223bed423240f6a1e5c6fab019c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/640d7b24c5f2ded95723be93e5c4232f8d9082": "3c2ce41de4b90aeeb937628748f427ba",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/7e/d85b1380c3b529cd8755da6ba734973e69ad2c": "0f399f74331c00153be9696b39e5e61f",
".git/objects/7e/d48ce063bc3f33d382844380b70c0be57e52e5": "feb460249b39645f356f227ce50eba2b",
".git/objects/ef/81b3ae2a1a38918e59925d94065afce05dead3": "7ee35e99f2f39fbc7d25e8b3be09f331",
".git/objects/ef/07cdf369c2fe0b5ae748ef3cb5883150823b3e": "579fb644c11a6b962d017a772a580f16",
".git/objects/56/21337faf6661d6a78cd9f11eb22503b6cf8d21": "3b0adb7f6492c042a16419e5a54404b5",
".git/objects/db/86631ee40e09674ccccfd884e7ab237b6b2bf2": "20a0a575b31a087dccfa95c33b3201b0",
".git/objects/72/db4137522c309b1ecf0105709e527f4194bff0": "73eb134b956ba0247dd8b6bd1b3eb0e7",
".git/objects/cd/c1a3dc25926e66c97fbc5c632f705f82b71172": "6edd48a9666369890c1bb6872d614b67",
".git/objects/cd/47abf1169d8dec9e7d4af8cda7e4b605984df8": "c1b5db7807a1014dca965ff0941aa174",
".git/objects/6a/256e6a14949d3720ee4cdc8ad9ccaa2a0e0268": "790139b3a19fac3e40606e1516cc30ca",
".git/objects/b1/17e82449d8634e35705bda0ea8f939e7c89c90": "f12cefa6d35315686f0b04e77f3a0405",
".git/objects/fc/6af50d0466753429c5cb893460bcb597a289e7": "4a1c7558d1f4497e94e2e8e551f2d673",
".git/objects/40/ea5029f23d029e07078e4898a3a508f6e70bb7": "d7419d22067c9c7ebb9916990fd0eb5f",
".git/objects/40/a67ee2f37d73d3407500907ba2353a3de5be50": "8e1a348b6bb075ad2a21490dcbcb9678",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8f/dd109cdfdb14fff5077bf0d7fc998c19fae331": "7787b38b0c97c066fc05cea32ec7b435",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/d4bee6ee84300353de0b09a3ea13be507e40bb": "69250a7789693d882f4b28572db0c4a9",
".git/objects/a3/34ecec285cf52876e490a1a62fbff2fca9b846": "16232e5d495080cbbdbbcf9ecc0c94ef",
".git/objects/21/7fd01dea4e555b14f1d77dd9bd070bab5bc2eb": "592522ba94015aa9f018dca5fdce2d95",
".git/objects/21/ffc33df013f75986e9d2f25cd877ff73f77740": "7a99c8521b487e1d95fb1b17ca040042",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/94/786e37122584ae3f558805c0dcc6ebfeef9759": "10e17f50fac85e51a15396a724498fa1",
".git/objects/37/0d3cdf6bfb0f3413a3c96464c93127eee42b89": "c449a4a79faa33357ca73e90d26495a8",
".git/objects/6f/ed4c121080c42fcf4834bdc8516658b13adcf3": "afd2165e7eb560bf9a7e257357f9ae1e",
".git/objects/bb/c63ce14f5d57fdb4d8a84d9455923f374f80b9": "0ba957a481fb00bb22d99fd314c92ced",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/137d8ebba1cf2a8f88d39e2c2a5f4d442814df": "995b810dea3e04952e91169d0dd6dfd9",
".git/objects/8a/3ef80bc81a84bda4c46ef46fda470239cf868d": "436610fc103ed45a7539c75854f80688",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/83/78037b81f75735102d0be5fbe5bc220843ebdb": "77a3b171ac2453db0a1f8c85adca23f2",
".git/objects/83/13d3fa3947e0123133bd8adf4bbc8703e4747c": "a1a11bf3ee2a1a25bd5f7c63a1636538",
".git/objects/83/581828e0ba0bbb6c3dc8cb87d8c01cd7a7e908": "61ec6dac82b02c9fc73e995dbfcc77f5",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/68/992bcc34bb8081d0f5732668361ab179bb6bc9": "c5cbc222a30414585fd4fe9b0eb7b731",
".git/objects/7c/aa6c10fcc80658a8c1fcc77405cc20430df37e": "a49ea34fe95069656eafd2be4061b3a3",
".git/objects/7c/b4e8020869d0177e7aa9464710caf5997d113b": "275fc125c7f018062bba511b588a51b1",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/26/eb879f6071031bcd575c4632ea0f3fa322f9c5": "195635d2b10cece56d50e0b65a1e7c0b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/86/ea47084c54135ed648d69666efa86a61becd28": "bee577ab4c4005fe94ea8f09f216e3a0",
".git/objects/86/e3680db63ff6f84fcd168c6c296388ad79c818": "e04f52a968973be7ebf9faa6347073f8",
".git/objects/91/97a30b430d3d6c594ce8e6fb5178e4883d44c5": "13acf1ac2b6bc1027333d72c7b7ad98b",
".git/objects/50/b5a7dac6a13ff1a698ac9f44d315eb921ed93f": "df30ce39e6c3dcc070f93f755ce5afea",
".git/objects/f1/d17ce4f07ecaef2d28d6c3ae25141317f73b81": "b92125beeccb50688c8d3b783fc21f14",
".git/objects/0b/86309df764397796252085eff330c9f8c2015d": "e3b01884e599144d4fa2b088485a27b4",
".git/objects/7a/95668bc47452c02f53c707a3ff7d43af713930": "13f46bffb80577dbed1cadeb66775425",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/97/c53ff41e1bd7c793033821a50faf1fa3bd7efb": "d29b58d74b2726087b1835b79d8bdc4a",
".git/objects/97/b143875e19767b6041925d6e30e43b71974ead": "22aaad37fdb029d5a1e7f1899cc0d7a6",
".git/objects/1f/afa26d6c76144d43083b522330edd9b9ebed57": "0d7a4a3fa9d5554ff81174c7167f36ba",
".git/objects/2b/15f17a437a24bc9fadbee3e57f821149c051cd": "26fb8028b962841d0e605bfdefa8d5fd",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/79/688951323e828035b30e134e036eab64133d8f": "0877d9344bc761bdb0293fb52013fdf3",
".git/objects/13/a641284fa65dccb0ac46df419133d3548d7506": "7bbd44d44826f0c51dd8d3f7140c6006",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/76/2e6eef7ff509d5ede02612f359706a922c90b7": "1bed532ce1e84aeb7ff2dc112aa6938d",
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
