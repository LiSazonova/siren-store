(()=>{var e={};e.id=47,e.ids=[47],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},6224:e=>{"use strict";e.exports=require("tty")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9647:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>d,originalPathname:()=>c,pages:()=>p,routeModule:()=>h,tree:()=>l});var s=r(7096),o=r(6132),a=r(7284),n=r.n(a),i=r(2564),u={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>i[e]);r.d(t,u);let l=["",{children:["auth",{children:["forgot-password",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6958)),"/Users/macbook/Work/siren-store/frontend/src/app/auth/forgot-password/page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,2215)),"/Users/macbook/Work/siren-store/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9291,23)),"next/dist/client/components/not-found-error"]}],p=["/Users/macbook/Work/siren-store/frontend/src/app/auth/forgot-password/page.tsx"],c="/auth/forgot-password/page",d={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/auth/forgot-password/page",pathname:"/auth/forgot-password",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},1929:(e,t,r)=>{Promise.resolve().then(r.bind(r,8705))},8705:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var s=r(784),o=r(9885),a=r(5035),n=r(7228),i=r(1440),u=r.n(i),l=r(327),p=r.n(l);let __WEBPACK_DEFAULT_EXPORT__=()=>{let[e,t]=(0,o.useState)(""),[r,i]=(0,o.useState)(!1),[l,c]=(0,o.useState)(null),handleSubmit=async t=>{t.preventDefault();try{await a.ZP.post("/api/auth/forgot-password",{email:e}),i(!0),n.toast.success("Проверьте свою почту для сброса пароля.")}catch(e){console.error("Ошибка при сбросе пароля:",e),c("Пользователь с такой почтой не найден.")}};return s.jsx("div",{className:p().authContainer,children:r?(0,s.jsxs)(s.Fragment,{children:[s.jsx("h1",{children:"Проверьте почту"}),s.jsx("p",{children:"Инструкции по сбросу пароля отправлены на ваш Email."}),s.jsx("p",{children:s.jsx(u(),{href:"/auth/login",children:"Вернуться на страницу входа"})})]}):(0,s.jsxs)(s.Fragment,{children:[s.jsx("h1",{children:"Забыли пароль?"}),l&&s.jsx("p",{className:p().error,children:l}),(0,s.jsxs)("form",{onSubmit:handleSubmit,className:p().authForm,children:[s.jsx("label",{htmlFor:"email",children:"Введите ваш Email:"}),s.jsx("input",{type:"email",name:"email",id:"email",value:e,onChange:e=>t(e.target.value),required:!0}),s.jsx("button",{type:"submit",className:p().submitButton,children:"Отправить"})]}),s.jsx("p",{children:s.jsx(u(),{href:"/auth/register",children:"У меня нет профиля"})})]})})}},327:e=>{e.exports={authWrapper:"Auth_authWrapper__egwk6",authContainer:"Auth_authContainer__2JK_F",authForm:"Auth_authForm__GIM0l",submitButton:"Auth_submitButton__v_aQ3",error:"Auth_error__lfKpi",closeModalButton:"Auth_closeModalButton__CkRcm",googleLogin:"Auth_googleLogin__T6BnZ"}},6958:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>a,default:()=>u});var s=r(5153);let o=(0,s.createProxy)(String.raw`/Users/macbook/Work/siren-store/frontend/src/app/auth/forgot-password/page.tsx`),{__esModule:a,$$typeof:n}=o,i=o.default,u=i}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[196,783],()=>__webpack_exec__(9647));module.exports=r})();