var a=Object.defineProperty,e=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;import{K as o,u as i,r as p,j as d,h as c,t as u,R as g,i as b,E as m,S as h,T as y,U as f,Q as j,V as k,o as P,F as C,w,d as S,W as O,c as _,G as v,H as x,b as z,e as E,n as A}from"./vendor.0476fa1a.js";/* empty css                        *//* empty css                *//* empty css                      *//* empty css                 *//* empty css                  *//* empty css                     *//* empty css                    */import"./index.9aaa5adc.js";const D={name:"admin-list",setup(){o(!0);const a=o(null),m=i(),h=p({loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10});d((()=>{y()}));const y=()=>{h.loading=!0,c.get("/api/back/admins",{params:{page:h.currentPage,page_size:h.pageSize}}).then((a=>{h.tableData=a.data,h.pageSize=a.pagination.perPage,h.total=a.pagination.total,h.currentPage=a.pagination.currentPage,h.loading=!1}))};return f=((a,e)=>{for(var t in e||(e={}))l.call(e,t)&&s(a,t,e[t]);if(r)for(var t of r(e))n.call(e,t)&&s(a,t,e[t]);return a})({},u(h)),e(f,t({multipleTable:a,changePage:a=>{h.currentPage=a,y()},handleAdd:()=>{m.push({path:"/admin-add"})},handleEdit:a=>{m.push({path:"/admin-add",query:{id:a}})},handleStatus:(a,e)=>{c.put("/api/back/admins/status",{id:a,status:e}).then((()=>{b.success("修改成功"),y()}))},Plus:g}));var f}},T=E("新增管理员"),q={key:0,style:{color:"#67C23A"}},F={key:1,style:{color:"#E6A23C"}},G=["onClick"],H=["onClick"],I=["onClick"];D.render=function(a,e,t,r,l,n){const s=m,o=h,i=y,p=f,d=j,c=k;return P(),C(d,{style:{"min-height":"100%"}},{header:w((()=>[S(s,{type:"primary",icon:r.Plus,onClick:r.handleAdd},{default:w((()=>[T])),_:1},8,["icon","onClick"])])),default:w((()=>[O(S(i,{data:a.tableData,stripe:"",style:{width:"100%"}},{default:w((()=>[S(o,{prop:"id",label:"id"}),S(o,{prop:"name",label:"账号"}),S(o,{prop:"role",label:"角色"},{default:w((a=>[(P(!0),_(x,null,v(a.row.roles,((a,e)=>(P(),_("span",null,A(a.name),1)))),256))])),_:1}),S(o,{prop:"status",label:"状态"},{default:w((a=>[1==a.row.status?(P(),_("span",q,"启用中")):(P(),_("span",F,"禁用"))])),_:1}),S(o,{prop:"created_at",label:"创建时间"}),S(o,{label:"操作",width:"100"},{default:w((a=>[z("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:e=>r.handleEdit(a.row.id)},"修改",8,G),1==a.row.status?(P(),_("a",{key:0,style:{cursor:"pointer","margin-right":"10px"},onClick:e=>r.handleStatus(a.row.id,0)},"禁用",8,H)):(P(),_("a",{key:1,style:{cursor:"pointer","margin-right":"10px"},onClick:e=>r.handleStatus(a.row.id,1)},"启用",8,I))])),_:1})])),_:1},8,["data"]),[[c,a.loading]]),S(p,{background:"",layout:"prev, pager, next",total:a.total,"page-size":a.pageSize,"current-page":a.currentPage,onCurrentChange:r.changePage},null,8,["total","page-size","current-page","onCurrentChange"])])),_:1})};export{D as default};
