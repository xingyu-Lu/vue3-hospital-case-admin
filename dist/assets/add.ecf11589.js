var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(a,r,t)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t;import{R as n,a7 as p,K as m,X as d,u as i,r as u,j as c,h as f,a8 as b,t as y,i as j,L as h,M as g,E as O,N as v,Q as w,o as F,F as k,w as P,d as _,e as x,n as R}from"./vendor.0476fa1a.js";/* empty css                *//* empty css                     *//* empty css                 */import{a as T}from"./index.9aaa5adc.js";const V={name:"news_add",components:{Plus:n,Delete:p},setup(){const e=m(null),n=d(),p=i(),{id:h}=n.query,g=u({token:"Bearer "+T("token")||"",id:h,Form:{name:""},rules:{name:[{required:!0,message:"病例类型名必须",trigger:["change"]}]}});c((()=>{h&&f.get(`/api/back/caseTypes/${h}`).then((e=>{g.Form={name:e.data.name}}))})),b((()=>{}));return O=((e,a)=>{for(var r in a||(a={}))s.call(a,r)&&l(e,r,a[r]);if(t)for(var r of t(a))o.call(a,r)&&l(e,r,a[r]);return e})({},y(g)),a(O,r({Ref:e,submitAdd:()=>{e.value.validate((e=>{if(e){let e=f.post,a={name:g.Form.name},r="/api/back/caseTypes";h&&(e=f.put,r=`/api/back/caseTypes/${h}`),e(r,a).then((()=>{h?j.success("修改成功"):j.success("添加成功"),p.push({path:"/case-type-index"})}))}}))}}));var O}};V.render=function(e,a,r,t,s,o){const l=h,n=g,p=O,m=v,d=w;return F(),k(d,{style:{"min-height":"100%"}},{default:P((()=>[_(m,{model:e.Form,rules:e.rules,ref:"Ref","label-width":"100px"},{default:P((()=>[_(n,{label:"类型名",prop:"name"},{default:P((()=>[_(l,{modelValue:e.Form.name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.Form.name=a),placeholder:"请输入病例类型名",type:"text"},null,8,["modelValue"])])),_:1}),_(n,null,{default:P((()=>[_(p,{type:"primary",onClick:a[1]||(a[1]=e=>t.submitAdd())},{default:P((()=>[x(R(e.id?"立即修改":"立即创建"),1)])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1})};export{V as default};
