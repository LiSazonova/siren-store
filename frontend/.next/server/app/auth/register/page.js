(()=>{var e={};e.id=454,e.ids=[454],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9743:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>c,routeModule:()=>h,tree:()=>u});var s=r(7096),a=r(6132),o=r(7284),n=r.n(o),i=r(2564),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let u=["",{children:["auth",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2396)),"/Users/macbook/Work/siren-store/frontend/src/app/auth/register/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,2215)),"/Users/macbook/Work/siren-store/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/macbook/Work/siren-store/frontend/src/app/auth/register/page.tsx"],d="/auth/register/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/auth/register/page",pathname:"/auth/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},1546:(e,t,r)=>{Promise.resolve().then(r.bind(r,366))},366:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>page});var s=r(784),a=r(9885),o=r(7114),n=r(1440),i=r.n(n),l=r(6918),u=r(327),c=r.n(u),d=r(8680),p=r.n(d),h=r(5306),m=r.n(h);let Modal_Modal=({isOpen:e,onRequestClose:t,contentLabel:r,children:a})=>(0,s.jsxs)(p(),{isOpen:e,onRequestClose:t,contentLabel:r,className:m().modal,overlayClassName:m().overlay,ariaHideApp:!1,children:[s.jsx("button",{onClick:t,className:m().closeButton,"aria-label":"Закрыть модальное окно",children:"\xd7"}),a]}),page=()=>{let{register:e}=(0,l.a)(),t=(0,o.useRouter)(),[r,n]=(0,a.useState)({username:"",email:"",password:""}),[u,d]=(0,a.useState)(null),[p,h]=(0,a.useState)(!1),handleChange=e=>n({...r,[e.target.name]:e.target.value}),handleSubmit=async s=>{s.preventDefault();let a=await e(r.username,r.email,r.password);a.success?t.push("/"):a.message.includes("email")?h(!0):d(a.message)};return(0,s.jsxs)("div",{className:c().authContainer,children:[s.jsx("h1",{children:"Регистрация"}),u&&s.jsx("p",{className:c().error,children:u}),(0,s.jsxs)("form",{onSubmit:handleSubmit,className:c().authForm,children:[s.jsx("label",{htmlFor:"username",children:"Имя пользователя:"}),s.jsx("input",{type:"text",name:"username",id:"username",value:r.username,onChange:handleChange,required:!0}),s.jsx("label",{htmlFor:"email",children:"Email:"}),s.jsx("input",{type:"email",name:"email",id:"email",value:r.email,onChange:handleChange,required:!0}),s.jsx("label",{htmlFor:"password",children:"Пароль:"}),s.jsx("input",{type:"password",name:"password",id:"password",value:r.password,onChange:handleChange,required:!0}),s.jsx("button",{type:"submit",className:c().submitButton,children:"Зарегистрироваться"})]}),(0,s.jsxs)("p",{children:["Уже есть аккаунт? ",s.jsx(i(),{href:"/auth/login",children:"Войти"})]}),(0,s.jsxs)(Modal_Modal,{isOpen:p,onRequestClose:()=>h(!1),contentLabel:"Ошибка Регистрации",children:[s.jsx("h2",{children:"Ошибка Регистрации"}),s.jsx("p",{children:"Эта почта уже зарегистрирована."}),s.jsx("button",{onClick:()=>h(!1),className:c().closeModalButton,children:"Закрыть"})]})]})}},327:e=>{e.exports={authWrapper:"Auth_authWrapper__egwk6",authContainer:"Auth_authContainer__2JK_F",authForm:"Auth_authForm__GIM0l",submitButton:"Auth_submitButton__v_aQ3",error:"Auth_error__lfKpi",closeModalButton:"Auth_closeModalButton__CkRcm",googleLogin:"Auth_googleLogin__T6BnZ"}},5306:e=>{e.exports={overlay:"Modal_overlay__2Sh3U",modal:"Modal_modal__JNobJ",closeButton:"Modal_closeButton__7VSKG"}},2396:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>o,default:()=>l});var s=r(5153);let a=(0,s.createProxy)(String.raw`/Users/macbook/Work/siren-store/frontend/src/app/auth/register/page.tsx`),{__esModule:o,$$typeof:n}=a,i=a.default,l=i}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[196,680,783],()=>__webpack_exec__(9743));module.exports=r})();