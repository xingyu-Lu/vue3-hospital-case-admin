var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,p=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t;import{K as i,u as n,r as s,j as d,h as c,t as m,P as u,E as g,L as h,Q as b,R as _,S as y,O as f,T as w,F as x,w as P,o as k,d as j,b as O,U as v,c as C,n as V,e as z}from"./vendor.4a064ce5.js";/* empty css                        *//* empty css                *//* empty css                      *//* empty css                 *//* empty css                  *//* empty css                     *//* empty css                    */import"./index.0b8cfe15.js";const S={name:"admin-list",setup(){i(!0);const e=n(),g=s({name:"",id_card:"",hospital_number:"",loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10});d((()=>{h()}));const h=()=>{g.loading=!0,c.get("/api/back/WeightLosss",{params:{page:g.currentPage,page_size:g.pageSize,name:g.name,hospital_number:g.hospital_number,id_card:g.id_card}}).then((e=>{g.tableData=e.data,g.pageSize=e.pagination.perPage,g.total=e.pagination.total,g.currentPage=e.pagination.currentPage,g.loading=!1}))};return b=((e,a)=>{for(var l in a||(a={}))r.call(a,l)&&p(e,l,a[l]);if(t)for(var l of t(a))o.call(a,l)&&p(e,l,a[l]);return e})({},m(g)),a(b,l({changePage:e=>{g.currentPage=e,h()},handleAdd:()=>{e.push({path:"/weight-loss-add"})},handleEdit:a=>{e.push({path:"/weight-loss-add",query:{id:a}})},handleFollowUp:a=>{e.push({path:"/weight-loss-follow-up-index",query:{weight_loss_id:a}})},handleOption:()=>{g.currentPage=1,h()},Plus:u}));var b}},U=z("新增病例"),D=z("搜索"),E={key:0},q={key:1},A={key:0},F={key:1},L={key:0},I={key:1},K={key:0},Q={key:1},R=["onClick"];S.render=function(e,a,l,t,r,o){const p=g,i=h,n=b,s=_,d=y,c=f,m=w;return k(),x(c,{style:{"min-height":"100%"}},{header:P((()=>[j(p,{type:"primary",icon:t.Plus,onClick:t.handleAdd},{default:P((()=>[U])),_:1},8,["icon","onClick"]),O("div",null,[j(i,{style:{width:"200px","margin-top":"20px","margin-right":"10px","margin-left":"10px"},placeholder:"请输入病例名字",modelValue:e.name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.name=a),clearable:""},null,8,["modelValue"]),j(i,{style:{width:"200px","margin-top":"20px","margin-right":"10px","margin-left":"10px"},placeholder:"请输入病例住院号",modelValue:e.hospital_number,"onUpdate:modelValue":a[1]||(a[1]=a=>e.hospital_number=a),clearable:""},null,8,["modelValue"]),j(i,{style:{width:"200px","margin-top":"20px","margin-right":"10px","margin-left":"10px"},placeholder:"请输入病例身份证号",modelValue:e.id_card,"onUpdate:modelValue":a[2]||(a[2]=a=>e.id_card=a),clearable:""},null,8,["modelValue"]),j(p,{type:"primary",onClick:t.handleOption},{default:P((()=>[D])),_:1},8,["onClick"])])])),default:P((()=>[v(j(s,{data:e.tableData,stripe:"",style:{width:"100%"}},{default:P((()=>[j(n,{prop:"id",label:"id"}),j(n,{prop:"hospital_number",label:"住院号"}),j(n,{prop:"name",label:"姓名"}),j(n,{prop:"age",label:"年龄"}),j(n,{prop:"sex",label:"性别"},{default:P((e=>[1==e.row.sex?(k(),C("span",E,"男")):(k(),C("span",q,"女"))])),_:1}),j(n,{prop:"national",label:"民族"}),j(n,{prop:"id_card",label:"身份证号"}),j(n,{prop:"mobile",label:"患者联系电话"}),j(n,{prop:"total_money",label:"住院总费用"}),j(n,{prop:"family_contact",label:"家属联系方式"}),j(n,{prop:"admission_time",label:"入院日期"},{default:P((e=>["1970-01-01 08:00:00"==e.row.admission_time?(k(),C("span",A)):(k(),C("span",F,V(e.row.admission_time),1))])),_:1}),j(n,{prop:"operative_time",label:"手术日期"},{default:P((e=>["1970-01-01 08:00:00"==e.row.operative_time?(k(),C("span",L)):(k(),C("span",I,V(e.row.operative_time),1))])),_:1}),j(n,{prop:"discharge_time",label:"出院日期"},{default:P((e=>["1970-01-01 08:00:00"==e.row.discharge_time?(k(),C("span",K)):(k(),C("span",Q,V(e.row.discharge_time),1))])),_:1}),j(n,{prop:"total_hospital_days",label:"总住院天数"}),j(n,{prop:"postoperation_hospital_days",label:"术后住院天数"}),j(n,{prop:"created_at",label:"创建时间"}),j(n,{label:"操作",width:"100"},{default:P((e=>[O("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:a=>t.handleEdit(e.row.id)},"修改",8,R)])),_:1})])),_:1},8,["data"]),[[m,e.loading]]),j(d,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:t.changePage},null,8,["total","page-size","current-page","onCurrentChange"])])),_:1})};export{S as default};