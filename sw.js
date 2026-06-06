const CACHE_VERSION='manaba-pos-pwa-v1.0.0';
const APP_SHELL=['./','./index.html','./app-config.js','./manifest.webmanifest','./offline.html','./icons/icon-192.png','./icons/icon-512.png','./icons/maskable-192.png','./icons/maskable-512.png'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE_VERSION).then(cache=>cache.addAll(APP_SHELL)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE_VERSION).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});

self.addEventListener('message',event=>{
  if(event.data&&event.data.type==='SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch',event=>{
  const request=event.request;
  const url=new URL(request.url);

  // Request lintas domain termasuk Google Apps Script tidak dicache oleh wrapper.
  if(url.origin!==self.location.origin) return;

  if(request.mode==='navigate'){
    event.respondWith(networkFirst(request));
    return;
  }

  event.respondWith(cacheFirst(request));
});

async function networkFirst(request){
  try{
    const fresh=await fetch(request);
    const cache=await caches.open(CACHE_VERSION);
    cache.put(request,fresh.clone());
    return fresh;
  }catch(e){
    return (await caches.match(request)) || caches.match('./offline.html');
  }
}

async function cacheFirst(request){
  const cached=await caches.match(request);
  if(cached) return cached;
  const fresh=await fetch(request);
  const cache=await caches.open(CACHE_VERSION);
  cache.put(request,fresh.clone());
  return fresh;
}
