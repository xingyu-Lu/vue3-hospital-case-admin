var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,o=(a,l,r)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[l]=r;import{K as n,V as m,u as s,r as d,j as i,h as p,t as b,i as c,_ as f,$ as g,M as _,L as F,Y as h,Z as j,E as V,N as y,O as v,F as O,w as k,o as w,d as q,c as P,G as U,H as x,e as E,n as S}from"./vendor.1bbe3e54.js";/* empty css                *//* empty css                     *//* empty css                 *//* empty css                 *//* empty css                  *//* empty css                     */import"./wangEditor.56977956.js";import{a as $,b as A}from"./index.eb8c7836.js";const R={name:"menu_add",setup(){const e=n(null),f=m(),g=s(),{id:_}=f.query,F=d({token:"Bearer "+$("token")||"",id:_,menuForm:{pid:"0",list:[],name:"",url:"",sort:"0",is_enabled:"1"},rules:{pid:[{required:"true",message:"上级菜单必须",trigger:["change"]}],name:[{required:"true",message:"账号名称必须",trigger:["change"]}],url:[{required:!1,message:"路由必须",trigger:["change"]}],sort:[{required:"true",message:"排序必须",trigger:["change"]}],is_enabled:[{required:"true",message:"账号状态必须",trigger:["change"]}]}});i((()=>{h(),_&&p.get(`/api/back/menus/${_}`).then((e=>{F.menuForm={pid:e.data.pid,name:e.data.name,url:e.data.url,sort:e.data.sort,is_enabled:String(e.data.is_enabled)}}))}));const h=async()=>{const e=await p.get("/api/back/menus");F.menuForm.list=e.data};return j=((e,a)=>{for(var l in a||(a={}))t.call(a,l)&&o(e,l,a[l]);if(r)for(var l of r(a))u.call(a,l)&&o(e,l,a[l]);return e})({},b(F)),a(j,l({menuRef:e,submitAdd:()=>{e.value.validate((e=>{if(e){let e=p.post,a={pid:F.menuForm.pid,name:F.menuForm.name,url:F.menuForm.url,sort:F.menuForm.sort,is_enabled:F.menuForm.is_enabled};if(a.name.length>30)return void c.error("账号名称不能超过30个字符");if(a.url.length>30)return void c.error("路由不能超过30个字符");let l="/api/back/menus";_&&(e=p.put,l=`/api/back/menus/${_}`),e(l,a).then((()=>{c.success(_?"修改成功":"添加成功"),A("menu_list"),g.push({path:"/menu"})}))}}))}}));var j}},B=E("开启"),C=E("禁用");R.render=function(e,a,l,r,t,u){const o=f,n=g,m=_,s=F,d=h,i=j,p=V,b=y,c=v;return w(),O(c,{style:{"min-height":"100%"}},{default:k((()=>[q(b,{model:e.menuForm,rules:e.rules,ref:"menuRef","label-width":"100px"},{default:k((()=>[q(m,{label:"上级菜单",prop:"pid"},{default:k((()=>[q(n,{modelValue:e.menuForm.pid,"onUpdate:modelValue":a[0]||(a[0]=a=>e.menuForm.pid=a),placeholder:"Select"},{default:k((()=>[q(o,{label:"无",value:"0"}),(w(!0),P(x,null,U(e.menuForm.list,(e=>(w(),O(o,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1}),q(m,{label:"名称",prop:"name"},{default:k((()=>[q(s,{modelValue:e.menuForm.name,"onUpdate:modelValue":a[1]||(a[1]=a=>e.menuForm.name=a),placeholder:"请输入菜单名称"},null,8,["modelValue"])])),_:1}),q(m,{label:"路由",prop:"url"},{default:k((()=>[q(s,{modelValue:e.menuForm.url,"onUpdate:modelValue":a[2]||(a[2]=a=>e.menuForm.url=a),placeholder:"请输入路由"},null,8,["modelValue"])])),_:1}),q(m,{label:"排序",prop:"sort"},{default:k((()=>[q(s,{modelValue:e.menuForm.sort,"onUpdate:modelValue":a[3]||(a[3]=a=>e.menuForm.sort=a),placeholder:"请输入排序",type:"number",min:"0"},null,8,["modelValue"])])),_:1}),q(m,{label:"上架状态",prop:"is_enabled"},{default:k((()=>[q(i,{modelValue:e.menuForm.is_enabled,"onUpdate:modelValue":a[4]||(a[4]=a=>e.menuForm.is_enabled=a)},{default:k((()=>[q(d,{label:"1"},{default:k((()=>[B])),_:1}),q(d,{label:"0"},{default:k((()=>[C])),_:1})])),_:1},8,["modelValue"])])),_:1}),q(m,null,{default:k((()=>[q(p,{type:"primary",onClick:a[5]||(a[5]=e=>r.submitAdd())},{default:k((()=>[E(S(e.id?"立即修改":"立即创建"),1)])),_:1})])),_:1})])),_:1},8,["model","rules"])])),_:1})};export{R as default};
