if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const o=e=>n(e,r),u={module:{uri:r},exports:l,require:o};s[r]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(t(...e),l)))}}define(["./workbox-b22defcb"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"befd4fe82129bcaaf9aa71d8018bd581"},{url:"assets/About.76bbc376.js",revision:null},{url:"assets/Home.17417008.js",revision:null},{url:"assets/index.5acdd457.js",revision:null},{url:"assets/index.c6eb7852.css",revision:null},{url:"assets/Projects.27103f92.js",revision:null},{url:"assets/Typing.5a118055.js",revision:null},{url:"index.html",revision:"89feb26f3a1ce0fc9ce18200bc4c5c47"},{url:"manifest.webmanifest",revision:"953fb841999e663d7da33133e64d4ed9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({url:e})=>["https://spy-family.net","https://cdn.jsdelivr.net"].includes(e.origin)),new e.StaleWhileRevalidate({cacheName:"external-sources",plugins:[new e.ExpirationPlugin({maxAgeSeconds:604800})]}),"GET")}));
