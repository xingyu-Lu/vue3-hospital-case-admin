var a=Object.defineProperty,e=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,p=(e,l,t)=>l in e?a(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t;import{K as i,u as n,r as s,j as d,h as c,t as m,P as u,E as g,L as h,Q as b,R as _,S as y,O as f,T as w,F as x,w as k,o as P,d as j,b as C,U as O,c as v,n as V,e as z}from"./vendor.4a064ce5.js";/* empty css                        *//* empty css                *//* empty css                      *//* empty css                 *//* empty css                  *//* empty css                     *//* empty css                    */import"./index.1783ca5e.js";const S={name:"admin-list",setup(){i(!0);const a=n(),g=s({name:"",id_card:"",hospital_number:"",loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10});d((()=>{h()}));const h=()=>{g.loading=!0,c.get("/api/back/stomachCas",{params:{page:g.currentPage,page_size:g.pageSize,name:g.name,id_card:g.id_card,hospital_number:g.hospital_number}}).then((a=>{g.tableData=a.data,g.pageSize=a.pagination.perPage,g.total=a.pagination.total,g.currentPage=a.pagination.currentPage,g.loading=!1}))};return b=((a,e)=>{for(var l in e||(e={}))r.call(e,l)&&p(a,l,e[l]);if(t)for(var l of t(e))o.call(e,l)&&p(a,l,e[l]);return a})({},m(g)),e(b,l({changePage:a=>{g.currentPage=a,h()},handleAdd:()=>{a.push({path:"/stomachca-add"})},handleEdit:e=>{a.push({path:"/stomachca-add",query:{id:e}})},handleFollowUp:e=>{a.push({path:"/stomachca-follow-up-index",query:{stomach_ca_id:e}})},handleOption:()=>{g.currentPage=1,h()},Plus:u}));var b}},U=z("新增病例"),D=z("搜索"),E={key:0},F={key:1},q={key:0},A={key:1},I={key:0},K={key:1},L={key:0},Q={key:1},R=["onClick"],T=["onClick"];S.render=function(a,e,l,t,r,o){const p=g,i=h,n=b,s=_,d=y,c=f,m=w;return P(),x(c,{style:{"min-height":"100%"}},{header:k((()=>[j(p,{type:"primary",icon:t.Plus,onClick:t.handleAdd},{default:k((()=>[U])),_:1},8,["icon","onClick"]),C("div",null,[j(i,{style:{width:"200px","margin-top":"20px","margin-right":"10px","margin-left":"10px"},placeholder:"请输入病例名字",modelValue:a.name,"onUpdate:modelValue":e[0]||(e[0]=e=>a.name=e),clearable:""},null,8,["modelValue"]),j(i,{style:{width:"200px","margin-top":"20px","margin-right":"10px","margin-left":"10px"},placeholder:"请输入病例住院号",modelValue:a.hospital_number,"onUpdate:modelValue":e[1]||(e[1]=e=>a.hospital_number=e),clearable:""},null,8,["modelValue"]),j(i,{style:{width:"200px","margin-top":"20px","margin-right":"10px","margin-left":"10px"},placeholder:"请输入病例身份证号",modelValue:a.id_card,"onUpdate:modelValue":e[2]||(e[2]=e=>a.id_card=e),clearable:""},null,8,["modelValue"]),j(p,{type:"primary",onClick:t.handleOption},{default:k((()=>[D])),_:1},8,["onClick"])])])),default:k((()=>[O(j(s,{data:a.tableData,stripe:"",style:{width:"100%"}},{default:k((()=>[j(n,{prop:"id",label:"id"}),j(n,{prop:"hospital_number",label:"住院号"}),j(n,{prop:"name",label:"姓名"}),j(n,{prop:"age",label:"年龄"}),j(n,{prop:"sex",label:"性别"},{default:k((a=>[1==a.row.sex?(P(),v("span",E,"男")):(P(),v("span",F,"女"))])),_:1}),j(n,{prop:"national",label:"民族"}),j(n,{prop:"id_card",label:"身份证号"}),j(n,{prop:"mobile",label:"患者联系电话"}),j(n,{prop:"total_money",label:"住院总费用"}),j(n,{prop:"family_contact",label:"家属联系方式"}),j(n,{prop:"admission_time",label:"入院日期"},{default:k((a=>["1970-01-01 08:00:00"==a.row.admission_time?(P(),v("span",q)):(P(),v("span",A,V(a.row.admission_time),1))])),_:1}),j(n,{prop:"operative_time",label:"手术日期"},{default:k((a=>["1970-01-01 08:00:00"==a.row.operative_time?(P(),v("span",I)):(P(),v("span",K,V(a.row.operative_time),1))])),_:1}),j(n,{prop:"discharge_time",label:"出院日期"},{default:k((a=>["1970-01-01 08:00:00"==a.row.discharge_time?(P(),v("span",L)):(P(),v("span",Q,V(a.row.discharge_time),1))])),_:1}),j(n,{prop:"total_hospital_days",label:"总住院天数"}),j(n,{prop:"postoperation_hospital_days",label:"术后住院天数"}),j(n,{prop:"created_at",label:"创建时间"}),j(n,{label:"操作",width:"100"},{default:k((a=>[C("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:e=>t.handleFollowUp(a.row.id)},"随访",8,R),C("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:e=>t.handleEdit(a.row.id)},"修改",8,T)])),_:1})])),_:1},8,["data"]),[[m,a.loading]]),j(d,{background:"",layout:"prev, pager, next",total:a.total,"page-size":a.pageSize,"current-page":a.currentPage,onCurrentChange:t.changePage},null,8,["total","page-size","current-page","onCurrentChange"])])),_:1})};export{S as default};