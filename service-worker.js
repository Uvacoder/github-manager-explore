if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return r[e]||(a=new Promise(async a=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=a}else importScripts(e),a()})),a.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},a=(a,r)=>{Promise.all(a.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(a)};self.define=(a,i,o)=>{r[a]||(r[a]=Promise.resolve().then(()=>{let r={};const n={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return r;case"module":return n;default:return e(a)}})).then(e=>{const a=o(...e);return r.default||(r.default=a),r})}))}}define("./service-worker.js",["./workbox-69b5a3b7"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/github-manager-explore/css/chunk-vendors.32038295.css",revision:"8beb4c27e1bcb1c6d7e8bd1296476e99"},{url:"/github-manager-explore/favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"/github-manager-explore/fonts/fa-brands-400.085b1dd8.ttf",revision:"085b1dd8427dbeff10bd55410915a3f6"},{url:"/github-manager-explore/fonts/fa-brands-400.0fabb660.eot",revision:"0fabb6606be4c45acfeedd115d0caca4"},{url:"/github-manager-explore/fonts/fa-brands-400.cac68c83.woff2",revision:"cac68c831145804808381a7032fdc7c2"},{url:"/github-manager-explore/fonts/fa-brands-400.dc0bd022.woff",revision:"dc0bd022735ed218df547742a1b2f172"},{url:"/github-manager-explore/fonts/fa-regular-400.05b53beb.woff",revision:"05b53beb21e3ef13d28244545977152d"},{url:"/github-manager-explore/fonts/fa-regular-400.1a78af41.ttf",revision:"1a78af4105d4d56e6c34f76dc70bf1bc"},{url:"/github-manager-explore/fonts/fa-regular-400.3a3398a6.woff2",revision:"3a3398a6ef60fc64eacf45665958342e"},{url:"/github-manager-explore/fonts/fa-regular-400.ad3a7c0d.eot",revision:"ad3a7c0d77e09602f4ab73db3660ffd8"},{url:"/github-manager-explore/fonts/fa-solid-900.781e85bb.ttf",revision:"781e85bb50c8e8301c30de56b31b1f04"},{url:"/github-manager-explore/fonts/fa-solid-900.89bd2e38.eot",revision:"89bd2e38475e441a5cd70f663f921d61"},{url:"/github-manager-explore/fonts/fa-solid-900.c500da19.woff2",revision:"c500da19d776384ba69573ae6fe274e7"},{url:"/github-manager-explore/fonts/fa-solid-900.ee09ad75.woff",revision:"ee09ad7553b8ad3d81150d609d5341a0"},{url:"/github-manager-explore/fonts/materialdesignicons-webfont.31d47085.woff",revision:"31d47085569e772c0f57aa8ec8381a5c"},{url:"/github-manager-explore/fonts/materialdesignicons-webfont.4a837d05.eot",revision:"4a837d054b5f2a37170df8a275a13816"},{url:"/github-manager-explore/fonts/materialdesignicons-webfont.b0fd91bb.ttf",revision:"b0fd91bb29dcb296a9a37f8bda0a2d85"},{url:"/github-manager-explore/fonts/materialdesignicons-webfont.f1997a8a.woff2",revision:"f1997a8aba8a498fe4032e3b56e871ca"},{url:"/github-manager-explore/img/fa-brands-400.ccfdb9dc.svg",revision:"ccfdb9dc442be0c629d331e94497428b"},{url:"/github-manager-explore/img/fa-regular-400.e75dfd90.svg",revision:"e75dfd904d366a2560c63c23cfc98ef8"},{url:"/github-manager-explore/img/fa-solid-900.03ba7cb7.svg",revision:"03ba7cb710104df27f1c9c46d64bee4e"},{url:"/github-manager-explore/img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"/github-manager-explore/img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"/github-manager-explore/img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"/github-manager-explore/img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"/github-manager-explore/img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"/github-manager-explore/img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"/github-manager-explore/img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"/github-manager-explore/img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"/github-manager-explore/img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"/github-manager-explore/img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"/github-manager-explore/img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"/github-manager-explore/img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"/github-manager-explore/img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"/github-manager-explore/img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"/github-manager-explore/img/icons/safari-pinned-tab.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"/github-manager-explore/index.html",revision:"e20cfd66e53609ace6abdcae87f4d506"},{url:"/github-manager-explore/js/app.e0bcf1d6.js",revision:"f3cc116d82f138935b7e8af786f88931"},{url:"/github-manager-explore/js/chunk-vendors.1b8cddc0.js",revision:"b53d283a4cebf1f626a0051bbe6d7a28"},{url:"/github-manager-explore/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));