"use strict";(()=>{var e={};e.id=553,e.ids=[553],e.modules={1287:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},640:(e,s,t)=>{t.r(s),t.d(s,{config:()=>c,default:()=>l,routeModule:()=>p});var a={};t.r(a),t.d(a,{default:()=>handler});var r=t(1802),i=t(7153),o=t(6249);let n=require("axios");var u=t.n(n);let d=u().create({baseURL:"http://localhost:1337"});d.interceptors.request.use(e=>e,e=>Promise.reject(e));let registerUser=(e,s,t)=>d.post("/api/auth/local/register",{username:e,email:s,password:t});async function handler(e,s){if("POST"===e.method)try{let{username:t,email:a,password:r}=e.body,i=await registerUser(t,a,r);i.data.success?s.status(200).json(i.data):s.status(400).json({message:i.data.message||"Ошибка регистрации"})}catch(e){e instanceof Error?s.status(500).json({message:e.message||"Ошибка при регистрации"}):s.status(500).json({message:"Неизвестная ошибка"})}else s.status(405).json({message:"Метод не поддерживается"})}let l=(0,o.l)(a,"default"),c=(0,o.l)(a,"config"),p=new r.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/register",pathname:"/api/register",bundlePath:"",filename:""},userland:a})}};var s=require("../../webpack-api-runtime.js");s.C(e);var __webpack_exec__=e=>s(s.s=e),t=s.X(0,[222],()=>__webpack_exec__(640));module.exports=t})();