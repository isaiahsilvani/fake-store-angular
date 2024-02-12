var ne=Object.defineProperty,se=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var q=(r,e,t)=>e in r?ne(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ve=(r,e)=>{for(var t in e||={})ie.call(e,t)&&q(r,t,e[t]);if(I)for(var t of I(e))ae.call(e,t)&&q(r,t,e[t]);return r},Pe=(r,e)=>se(r,oe(e));var d=(r,e,t)=>new Promise((i,s)=>{var o=c=>{try{n(t.next(c))}catch(l){s(l)}},a=c=>{try{n(t.throw(c))}catch(l){s(l)}},n=c=>c.done?i(c.value):Promise.resolve(c.value).then(o,a);n((t=t.apply(r,e)).next())});var le=r=>{let e=new Map;e.set("web",{name:"web"});let t=r.CapacitorPlatforms||{currentPlatform:{name:"web"},platforms:e},i=(o,a)=>{t.platforms.set(o,a)},s=o=>{t.platforms.has(o)&&(t.currentPlatform=t.platforms.get(o))};return t.addPlatform=i,t.setPlatform=s,t},ce=r=>r.CapacitorPlatforms=le(r),G=ce(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),pe=G.addPlatform,ye=G.setPlatform;var $=function(r){return r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",r}($||{}),k=class extends Error{constructor(e,t,i){super(e),this.message=e,this.code=t,this.data=i}},de=r=>{var e,t;return r?.androidBridge?"android":!((t=(e=r?.webkit)===null||e===void 0?void 0:e.messageHandlers)===null||t===void 0)&&t.bridge?"ios":"web"},ue=r=>{var e,t,i,s,o;let a=r.CapacitorCustomPlatform||null,n=r.Capacitor||{},c=n.Plugins=n.Plugins||{},l=r.CapacitorPlatforms,E=()=>a!==null?a.name:de(r),y=((e=l?.currentPlatform)===null||e===void 0?void 0:e.getPlatform)||E,A=()=>y()!=="web",V=((t=l?.currentPlatform)===null||t===void 0?void 0:t.isNativePlatform)||A,z=u=>{let f=_.get(u);return!!(f?.platforms.has(y())||M(u))},J=((i=l?.currentPlatform)===null||i===void 0?void 0:i.isPluginAvailable)||z,Q=u=>{var f;return(f=n.PluginHeaders)===null||f===void 0?void 0:f.find(L=>L.name===u)},M=((s=l?.currentPlatform)===null||s===void 0?void 0:s.getPluginHeader)||Q,X=u=>r.console.error(u),Y=(u,f,L)=>Promise.reject(`${L} does not have an implementation of "${f}".`),_=new Map,Z=(u,f={})=>{let L=_.get(u);if(L)return console.warn(`Capacitor plugin "${u}" already registered. Cannot register plugins twice.`),L.proxy;let p=y(),C=M(u),v,ee=()=>d(void 0,null,function*(){return!v&&p in f?v=typeof f[p]=="function"?v=yield f[p]():v=f[p]:a!==null&&!v&&"web"in f&&(v=typeof f.web=="function"?v=yield f.web():v=f.web),v}),te=(g,m)=>{var w,P;if(C){let b=C?.methods.find(h=>m===h.name);if(b)return b.rtype==="promise"?h=>n.nativePromise(u,m.toString(),h):(h,O)=>n.nativeCallback(u,m.toString(),h,O);if(g)return(w=g[m])===null||w===void 0?void 0:w.bind(g)}else{if(g)return(P=g[m])===null||P===void 0?void 0:P.bind(g);throw new k(`"${u}" plugin is not implemented on ${p}`,$.Unimplemented)}},S=g=>{let m,w=(...P)=>{let b=ee().then(h=>{let O=te(h,g);if(O){let j=O(...P);return m=j?.remove,j}else throw new k(`"${u}.${g}()" is not implemented on ${p}`,$.Unimplemented)});return g==="addListener"&&(b.remove=()=>d(void 0,null,function*(){return m()})),b};return w.toString=()=>`${g.toString()}() { [capacitor code] }`,Object.defineProperty(w,"name",{value:g,writable:!1,configurable:!1}),w},R=S("addListener"),D=S("removeListener"),re=(g,m)=>{let w=R({eventName:g},m),P=()=>d(void 0,null,function*(){let h=yield w;D({eventName:g,callbackId:h},m)}),b=new Promise(h=>w.then(()=>h({remove:P})));return b.remove=()=>d(void 0,null,function*(){console.warn("Using addListener() without 'await' is deprecated."),yield P()}),b},T=new Proxy({},{get(g,m){switch(m){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return C?re:R;case"removeListener":return D;default:return S(m)}}});return c[u]=T,_.set(u,{name:u,proxy:T,platforms:new Set([...Object.keys(f),...C?[p]:[]])}),T},N=((o=l?.currentPlatform)===null||o===void 0?void 0:o.registerPlugin)||Z;return n.convertFileSrc||(n.convertFileSrc=u=>u),n.getPlatform=y,n.handleError=X,n.isNativePlatform=V,n.isPluginAvailable=J,n.pluginMethodNoop=Y,n.registerPlugin=N,n.Exception=k,n.DEBUG=!!n.DEBUG,n.isLoggingEnabled=!!n.isLoggingEnabled,n.platform=n.getPlatform(),n.isNative=n.isNativePlatform(),n},fe=r=>r.Capacitor=ue(r),U=fe(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),K=U.registerPlugin,Le=U.Plugins;var x=class{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);let s=this.windowListeners[e];s&&!s.registered&&this.addWindowListener(s);let o=()=>d(this,null,function*(){return this.removeListener(e,t)}),a=Promise.resolve({remove:o});return Object.defineProperty(a,"remove",{value:()=>d(this,null,function*(){console.warn("Using addListener() without 'await' is deprecated."),yield o()})}),a}removeAllListeners(){return d(this,null,function*(){this.listeners={};for(let e in this.windowListeners)this.removeWindowListener(this.windowListeners[e]);this.windowListeners={}})}notifyListeners(e,t){let i=this.listeners[e];i&&i.forEach(s=>s(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:i=>{this.notifyListeners(t,i)}}}unimplemented(e="not implemented"){return new U.Exception(e,$.Unimplemented)}unavailable(e="not available"){return new U.Exception(e,$.Unavailable)}removeListener(e,t){return d(this,null,function*(){let i=this.listeners[e];if(!i)return;let s=i.indexOf(t);this.listeners[e].splice(s,1),this.listeners[e].length||this.removeWindowListener(this.windowListeners[e])})}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}};var B=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),F=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent),H=class extends x{getCookies(){return d(this,null,function*(){let e=document.cookie,t={};return e.split(";").forEach(i=>{if(i.length<=0)return;let[s,o]=i.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=F(s).trim(),o=F(o).trim(),t[s]=o}),t})}setCookie(e){return d(this,null,function*(){try{let t=B(e.key),i=B(e.value),s=`; expires=${(e.expires||"").replace("expires=","")}`,o=(e.path||"/").replace("path=",""),a=e.url!=null&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${i||""}${s}; path=${o}; ${a};`}catch(t){return Promise.reject(t)}})}deleteCookie(e){return d(this,null,function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})}clearCookies(){return d(this,null,function*(){try{let e=document.cookie.split(";")||[];for(let t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})}clearAllCookies(){return d(this,null,function*(){try{yield this.clearCookies()}catch(e){return Promise.reject(e)}})}},Ce=K("CapacitorCookies",{web:()=>new H}),ge=r=>d(void 0,null,function*(){return new Promise((e,t)=>{let i=new FileReader;i.onload=()=>{let s=i.result;e(s.indexOf(",")>=0?s.split(",")[1]:s)},i.onerror=s=>t(s),i.readAsDataURL(r)})}),me=(r={})=>{let e=Object.keys(r);return Object.keys(r).map(s=>s.toLocaleLowerCase()).reduce((s,o,a)=>(s[o]=r[e[a]],s),{})},he=(r,e=!0)=>r?Object.entries(r).reduce((i,s)=>{let[o,a]=s,n,c;return Array.isArray(a)?(c="",a.forEach(l=>{n=e?encodeURIComponent(l):l,c+=`${o}=${n}&`}),c.slice(0,-1)):(n=e?encodeURIComponent(a):a,c=`${o}=${n}`),`${i}&${c}`},"").substr(1):null,we=(r,e={})=>{let t=Object.assign({method:r.method||"GET",headers:r.headers},e),s=me(r.headers)["content-type"]||"";if(typeof r.data=="string")t.body=r.data;else if(s.includes("application/x-www-form-urlencoded")){let o=new URLSearchParams;for(let[a,n]of Object.entries(r.data||{}))o.set(a,n);t.body=o.toString()}else if(s.includes("multipart/form-data")||r.data instanceof FormData){let o=new FormData;if(r.data instanceof FormData)r.data.forEach((n,c)=>{o.append(c,n)});else for(let n of Object.keys(r.data))o.append(n,r.data[n]);t.body=o;let a=new Headers(t.headers);a.delete("content-type"),t.headers=a}else(s.includes("application/json")||typeof r.data=="object")&&(t.body=JSON.stringify(r.data));return t},W=class extends x{request(e){return d(this,null,function*(){let t=we(e,e.webFetchExtra),i=he(e.params,e.shouldEncodeUrlParams),s=i?`${e.url}?${i}`:e.url,o=yield fetch(s,t),a=o.headers.get("content-type")||"",{responseType:n="text"}=o.ok?e:{};a.includes("application/json")&&(n="json");let c,l;switch(n){case"arraybuffer":case"blob":l=yield o.blob(),c=yield ge(l);break;case"json":c=yield o.json();break;case"document":case"text":default:c=yield o.text()}let E={};return o.headers.forEach((y,A)=>{E[A]=y}),{data:c,headers:E,status:o.status,url:o.url}})}get(e){return d(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"GET"}))})}post(e){return d(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"POST"}))})}put(e){return d(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"PUT"}))})}patch(e){return d(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})}delete(e){return d(this,null,function*(){return this.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})}},ke=K("CapacitorHttp",{web:()=>new W});export{ve as a,Pe as b,d as c,K as d,x as e};
