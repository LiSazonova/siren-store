(()=>{var e={};e.id=244,e.ids=[244],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4348:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>_,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>l});var s=r(7096),n=r(6132),o=r(7284),i=r.n(o),a=r(2564),c={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>a[e]);r.d(t,c);let l=["",{children:["collections",{children:["[collectionId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3516)),"/Users/macbook/Work/siren-store/frontend/src/app/collections/[collectionId]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,6988)),"/Users/macbook/Work/siren-store/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/macbook/Work/siren-store/frontend/src/app/collections/[collectionId]/page.tsx"],p="/collections/[collectionId]/page",_={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/collections/[collectionId]/page",pathname:"/collections/[collectionId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},3042:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6686,23)),Promise.resolve().then(r.t.bind(r,6800,23))},6235:e=>{e.exports={main:"CollectionPage_main__vyyEb",title:"CollectionPage_title__onFMS",image:"CollectionPage_image__4wYOi",description:"CollectionPage_description__HFDmF"}},3516:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__,generateStaticParams:()=>generateStaticParams});var s=r(4656);r(3542);var n=r(8639),o=r.n(n),i=r(4047),a=r(6235),c=r.n(a);let l=[{id:"moon_crystal",title:"MOON CRYSTAL",description:"Описание коллекции MOON CRYSTAL.",image:"/images/products/moon_crystal.jpg"},{id:"christmas_song",title:"CHRISTMAS SONG",description:"Описание коллекции CHRISTMAS SONG.",image:"/images/products/christmas_song.jpg"}];async function generateStaticParams(){return l.map(e=>({collectionId:e.id}))}let __WEBPACK_DEFAULT_EXPORT__=({params:e})=>{let{collectionId:t}=e,r=l.find(e=>e.id===t);return r||(0,i.notFound)(),(0,s.jsxs)("main",{className:c().main,children:[s.jsx("h1",{className:c().title,children:r.title}),s.jsx(o(),{src:r.image,alt:r.title,width:292,height:500,className:c().image}),s.jsx("p",{className:c().description,children:r.description})]})}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[71,639,412,388],()=>__webpack_exec__(4348));module.exports=r})();