(()=>{var e={};e.id=772,e.ids=[772],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},5661:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>a.a,__next_app__:()=>p,originalPathname:()=>l,pages:()=>d,routeModule:()=>_,tree:()=>u});var s=r(7096),i=r(6132),o=r(7284),a=r.n(o),n=r(2564),c={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>n[e]);r.d(t,c);let u=["",{children:["products",{children:["[slug]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9111)),"/Users/macbook/Work/siren-store/frontend/src/app/products/[slug]/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,2215)),"/Users/macbook/Work/siren-store/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],d=["/Users/macbook/Work/siren-store/frontend/src/app/products/[slug]/page.tsx"],l="/products/[slug]/page",p={require:r,loadChunk:()=>Promise.resolve()},_=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/products/[slug]/page",pathname:"/products/[slug]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},3396:(e,t,r)=>{Promise.resolve().then(r.bind(r,9820))},9820:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(784),i=r(9885),o=r(7114),a=r(2451),n=r.n(a),c=r(2344),u=r.n(c),d=r(306),l=r(7228);async function fetchProduct(e){let t=await fetch(`https://siren-store.onrender.com/api/products?filters[slug][$eq]=${e}&populate=*`);if(!t.ok)throw Error("Failed to fetch product");let r=await t.json(),s=r.data[0];return{id:s.id,name:s.name,description:s.description,price:Number(s.price),sizes:s.sizes,slug:s.slug}}let __WEBPACK_DEFAULT_EXPORT__=({params:e})=>{let[t,r]=(0,i.useState)(null),[a,c]=(0,i.useState)(null),{cartItems:p,addToCart:_}=(0,d.useCart)(),g=(0,o.useRouter)();if((0,i.useEffect)(()=>{console.log("Current cart items:",p)},[p]),(0,i.useEffect)(()=>{fetchProduct(e.slug).then(e=>r(e)).catch(e=>console.error("Error fetching product:",e))},[e.slug]),!t)return s.jsx("p",{children:"Loading..."});let m=`/images/products/${t.slug}/${t.slug}.jpg`,handleSizeSelect=e=>{c(e)};return s.jsx("main",{className:u().productPage,children:(0,s.jsxs)("div",{className:u().container,children:[s.jsx("h1",{className:u().title,children:t.name}),s.jsx("div",{className:u().imageWrapper,children:s.jsx(n(),{src:m,alt:t.name,width:600,height:800,className:u().productImage})}),(0,s.jsxs)("div",{className:u().infoWrapper,children:[(0,s.jsxs)("p",{className:u().price,children:[t.price," грн"]}),s.jsx("p",{className:u().description,children:t.description}),(0,s.jsxs)("div",{className:u().sizes,children:[s.jsx("h3",{className:u().sizesTitle,children:"Sizes"}),s.jsx("div",{className:u().sizeOptions,children:t.sizes.map(e=>s.jsx("button",{className:`${u().sizeButton} ${a===e?u().selectedSize:""}`,onClick:()=>handleSizeSelect(e),children:e},e))})]}),(0,s.jsxs)("div",{className:u().btns,children:[s.jsx("button",{className:u().buyButton,onClick:()=>{if(!a){l.toast.error("Помилка: будь ласка, виберіть розмір перед покупкою!");return}console.log("Adding item to cart and redirecting to /cart"),_({id:t.id,name:t.name,price:t.price,size:a,quantity:1,slug:t.slug}),g.push("/cart")},children:"КУПИТИ ЗАРАЗ"}),s.jsx("button",{className:u().addToCartButton,onClick:()=>{if(!a){l.toast.error("Помилка: виберіть розмір перед додаванням у корзину!");return}console.log("Adding item to cart:",{id:t.id,name:t.name,price:t.price,size:a,quantity:1,slug:t.slug}),_({id:t.id,name:t.name,price:t.price,size:a,quantity:1,slug:t.slug}),l.toast.success(`${t.name} додано у корзину!`)},children:"В КОРЗИНУ"})]})]})]})})}},2344:e=>{e.exports={productPage:"ProductPage_productPage__3B_oC",container:"ProductPage_container__MxCxy",imageWrapper:"ProductPage_imageWrapper__GjVN6",productImage:"ProductPage_productImage__wWrL8",infoWrapper:"ProductPage_infoWrapper__TpqEl",title:"ProductPage_title__wURVf",price:"ProductPage_price__CWV2Z",description:"ProductPage_description__X05JU",sizes:"ProductPage_sizes__47gkT",sizesTitle:"ProductPage_sizesTitle__aabS6",sizeOptions:"ProductPage_sizeOptions__MXkUa",sizeButton:"ProductPage_sizeButton__a4pP4",selectedSize:"ProductPage_selectedSize__dNgrg",btns:"ProductPage_btns__8yTd7",buyButton:"ProductPage_buyButton__ain_T",addToCartButton:"ProductPage_addToCartButton__ZLcMQ"}},9111:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>a,__esModule:()=>o,default:()=>c});var s=r(5153);let i=(0,s.createProxy)(String.raw`/Users/macbook/Work/siren-store/frontend/src/app/products/[slug]/page.tsx`),{__esModule:o,$$typeof:a}=i,n=i.default,c=n}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[196,783],()=>__webpack_exec__(5661));module.exports=r})();