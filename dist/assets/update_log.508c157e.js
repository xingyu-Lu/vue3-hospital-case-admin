var a=Object.defineProperty,t=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,e,s)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;import{r,j as u,h as o,t as l,a3 as i,a4 as p,a5 as c,o as d,c as m,b as h,d as b,w as g,H as y,e as f,G as _,F as v,n as j}from"./vendor.0476fa1a.js";import"./index.9aaa5adc.js";const x={name:"Introduce",setup(){const a=r({update_log:[]});u((()=>{i()}));const i=async()=>{const t=await o.get("/api/back/updatelogs/index");a.update_log=t.data};return((a,r)=>{for(var u in r||(r={}))e.call(r,u)&&n(a,u,r[u]);if(t)for(var u of t(r))s.call(r,u)&&n(a,u,r[u]);return a})({},l(a))}},O=f("后台代码仓库："),k=f("https://github.com/xingyu-Lu/vue3-hospital-case-admin"),w=f("api代码仓库："),L=f("https://github.com/xingyu-Lu/hos-case-api"),P=h("h3",null,"更新记录",-1),I={class:"block"};x.render=function(a,t,e,s,n,r){const u=i,o=p,l=c;return d(),m(y,null,[h("h3",null,[O,b(u,{type:"primary",underline:!1,target:"_blank",href:"https://github.com/xingyu-Lu/vue3-hospital-case-admin"},{default:g((()=>[k])),_:1})]),h("h3",null,[w,b(u,{type:"primary",underline:!1,target:"_blank",href:"https://github.com/xingyu-Lu/hos-case-api"},{default:g((()=>[L])),_:1})]),P,h("div",I,[b(l,null,{default:g((()=>[(d(!0),m(y,null,_(a.update_log,((a,t)=>(d(),v(o,{key:t,timestamp:a.timestamp},{default:g((()=>[f(j(a.content),1)])),_:2},1032,["timestamp"])))),128))])),_:1})])],64)};export{x as default};