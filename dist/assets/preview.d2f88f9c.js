var a=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,d=(e,t,l)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;import{V as n,u as i,r as o,j as u,h as c,t as p,p as b,a as f,E as _,a9 as g,a4 as m,aa as y,O as h,F as v,w as j,o as O,d as w,e as k,n as x,c as P,G as B,H as C,b as E}from"./vendor.5ff20593.js";/* empty css                *//* empty css                        */import"./index.b74cb30e.js";const I={name:"preview_news",setup(){const a=n(),b=i(),{id:f}=a.query,_=o({data:{name:"",age:"",sex:"",abstract:"",type:"",part:"",diagnosis:"",diagnosis_result:"",general_seen:"",img_url:"",video:[],attachment:[]}});u((()=>{f&&c.get(`/api/back/cases/${f}`).then((a=>{_.data={name:a.data.name,age:a.data.age,sex:a.data.sex,abstract:a.data.abstract,diagnosis:a.data.diagnosis,diagnosis_result:a.data.diagnosis_result,general_seen:a.data.general_seen,type:a.data.type,part:a.data.part,img_url:a.data.img_url,video:a.data.video,attachment:a.data.attachment}}))}));return g=((a,e)=>{for(var t in e||(e={}))s.call(e,t)&&d(a,t,e[t]);if(l)for(var t of l(e))r.call(e,t)&&d(a,t,e[t]);return a})({},p(_)),e(g,t({handleBack:()=>{b.push({path:"/case-index"})}}));var g}};b("data-v-79dbcf28");const q=k("返回"),z={key:1},D=["href"],F={width:"1000",controls:""},G=["src"];f(),I.render=function(a,e,t,l,s,r){const d=_,n=g,i=m,o=y,u=h;return O(),v(u,{style:{"min-height":"100%"}},{header:j((()=>[w(d,{type:"primary",onClick:l.handleBack},{default:j((()=>[q])),_:1},8,["onClick"])])),default:j((()=>[w(o,{class:"margin-top",title:a.data.type,column:1,border:!0},{default:j((()=>[w(n,{label:"姓名"},{default:j((()=>[k(x(a.data.name),1)])),_:1}),w(n,{label:"年龄"},{default:j((()=>[k(x(a.data.age),1)])),_:1}),w(n,{label:"性别"},{default:j((()=>[k(x(0==a.data.sex?"男":"女"),1)])),_:1}),w(n,{label:"部位"},{default:j((()=>[k(x(a.data.part),1)])),_:1}),w(n,{label:"摘要"},{default:j((()=>[k(x(a.data.abstract),1)])),_:1}),w(n,{label:"临床诊断"},{default:j((()=>[k(x(a.data.diagnosis),1)])),_:1}),w(n,{label:"诊断结果"},{default:j((()=>[k(x(a.data.diagnosis_result),1)])),_:1}),w(n,{label:"大体所见"},{default:j((()=>[k(x(a.data.general_seen),1)])),_:1}),w(n,{label:"图片"},{default:j((()=>[a.data.img_url?(O(),v(i,{key:0,src:a.data.img_url,lazy:!0,"initial-index":1},null,8,["src"])):(O(),P("span",z,"无"))])),_:1}),w(n,{label:"附件"},{default:j((()=>[(O(!0),P(C,null,B(a.data.attachment,((a,e)=>(O(),P("span",null,[E("a",{href:a.url,target:"_blank"},x(a.url),9,D)])))),256))])),_:1}),w(n,{label:"视频"},{default:j((()=>[(O(!0),P(C,null,B(a.data.video,((a,e)=>(O(),P("span",null,[E("video",F,[E("source",{src:a.url},null,8,G)])])))),256))])),_:1})])),_:1},8,["title"])])),_:1})},I.__scopeId="data-v-79dbcf28";export{I as default};
