const s=location.pathname.split("/").slice(0,-1).join("/"),m=[s+"/_app/immutable/entry/app.BvA9UvDa.js",s+"/_app/immutable/nodes/0.B8JoQU80.js",s+"/_app/immutable/assets/0.Dm68LTQ6.css",s+"/_app/immutable/nodes/1.D0tFzjFf.js",s+"/_app/immutable/nodes/2.CUt8kbr-.js",s+"/_app/immutable/nodes/3.Dnd7xXT0.js",s+"/_app/immutable/assets/3.gPmmZy0Y.css",s+"/_app/immutable/chunks/client.DiI3CjiW.js",s+"/_app/immutable/chunks/disclose-version.CzeNfMnM.js",s+"/_app/immutable/chunks/entry.CvVIR9im.js",s+"/_app/immutable/chunks/index-client.D35hvsnh.js",s+"/_app/immutable/chunks/index.CM6H0YNl.js",s+"/_app/immutable/chunks/index.Vgzn_2SJ.js",s+"/_app/immutable/chunks/legacy.Bw_bC4Fo.js",s+"/_app/immutable/chunks/props.B_on3Og2.js",s+"/_app/immutable/chunks/render.C8ANRFab.js",s+"/_app/immutable/chunks/runtime.DMDBuxFo.js",s+"/_app/immutable/chunks/snippet.-4iy4Y5E.js",s+"/_app/immutable/chunks/this.6uPUaqMN.js",s+"/_app/immutable/entry/start.DAEZIFkM.js"],l=[s+"/.well-known/assetlinks.json",s+"/apple-icon-180.png",s+"/favicon.ico",s+"/manifest-icon-192.maskable.png",s+"/manifest-icon-512.maskable.png",s+"/manifest.json",s+"/_redirects"],u="1739781909894",c=`cache-${u}`,o=[...m,...l];self.addEventListener("install",e=>{async function n(){await(await caches.open(c)).addAll(o)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const t=new URL(e.request.url),i=await caches.open(c);if(o.includes(t.pathname)){const a=await i.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return(t.protocol==="http:"||t.protocol==="https:")&&a.status===200&&i.put(e.request,a.clone()),a}catch(a){const p=await i.match(e.request);if(p)return p;throw a}}e.respondWith(n())});
