var a=Object.defineProperty,e=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(e,l,o)=>l in e?a(e,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[l]=o;import{K as p,u as i,r as s,j as d,h as m,ad as u,ae as c,t as _,R as g,E as y,L as b,S as f,T as h,U as w,Q as k,V as x,o as C,F as j,w as P,b as v,n as O,d as V,W as S,c as z,e as F}from"./vendor.0476fa1a.js";/* empty css                        *//* empty css                *//* empty css                      *//* empty css                 *//* empty css                  *//* empty css                     *//* empty css                    *//* empty css                        */import"./index.9aaa5adc.js";const U={name:"admin-list",setup(){p(!0);const a=i(),y=s({follow_day_num:0,name:"",id_card:"",hospital_number:"",loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10});d((()=>{b(),f()}));const b=()=>{m.get("/api/back/StromalTumors/followDayNum").then((a=>{y.follow_day_num=a.data.follow_day_num,u({title:"间质瘤",message:c("i",{style:"color: #F56C6C"},"今日待随访人数"+y.follow_day_num+"人"),type:"warning"})}))},f=()=>{y.loading=!0,m.get("/api/back/StromalTumors",{params:{page:y.currentPage,page_size:y.pageSize,name:y.name,hospital_number:y.hospital_number,id_card:y.id_card}}).then((a=>{y.tableData=a.data,y.pageSize=a.pagination.perPage,y.total=a.pagination.total,y.currentPage=a.pagination.currentPage,y.loading=!1}))};return h=((a,e)=>{for(var l in e||(e={}))t.call(e,l)&&n(a,l,e[l]);if(o)for(var l of o(e))r.call(e,l)&&n(a,l,e[l]);return a})({},_(y)),e(h,l({changePage:a=>{y.currentPage=a,f()},handleAdd:()=>{a.push({path:"/stromal-tumor-add"})},handleEdit:e=>{a.push({path:"/stromal-tumor-add",query:{id:e}})},handleFollowUp:e=>{a.push({path:"/stromal-tumor-follow-up-index",query:{stromal_tumor_id:e}})},handleOption:()=>{y.currentPage=1,f()},Plus:g}));var h}},D={style:{color:"#F56C6C"}},E=F("新增病例"),T=F("搜索"),q={key:0},A={key:1},I={key:0},K={key:1},L={key:0},N={key:1},Q={key:0},R={key:1},W={key:0},B={key:1},G={key:0,style:{color:"#F56C6C"}},H={key:1},J={key:0},M={key:1},X={key:2},Y={key:0},Z={key:1},$=["onClick"],aa=["onClick"];U.render=function(a,e,l,o,t,r){const n=y,p=b,i=f,s=h,d=w,m=k,u=x;return C(),j(m,{style:{"min-height":"100%"}},{header:P((()=>[v("h1",D,"今日待随访人数"+O(a.follow_day_num)+"人",1),V(n,{type:"primary",icon:o.Plus,onClick:o.handleAdd},{default:P((()=>[E])),_:1},8,["icon","onClick"]),v("div",null,[V(p,{style:{width:"200px","margin-top":"20px","margin-right":"10px","margin-left":"10px"},placeholder:"请输入病例名字",modelValue:a.name,"onUpdate:modelValue":e[0]||(e[0]=e=>a.name=e),clearable:""},null,8,["modelValue"]),V(p,{style:{width:"200px","margin-top":"20px","margin-right":"10px","margin-left":"10px"},placeholder:"请输入病例住院号",modelValue:a.hospital_number,"onUpdate:modelValue":e[1]||(e[1]=e=>a.hospital_number=e),clearable:""},null,8,["modelValue"]),V(p,{style:{width:"200px","margin-top":"20px","margin-right":"10px","margin-left":"10px"},placeholder:"请输入病例身份证号",modelValue:a.id_card,"onUpdate:modelValue":e[2]||(e[2]=e=>a.id_card=e),clearable:""},null,8,["modelValue"]),V(n,{type:"primary",onClick:o.handleOption},{default:P((()=>[T])),_:1},8,["onClick"])])])),default:P((()=>[S(V(s,{data:a.tableData,stripe:"",style:{width:"100%"}},{default:P((()=>[V(i,{prop:"id",label:"id"}),V(i,{prop:"hospital_number",label:"住院号"}),V(i,{prop:"name",label:"姓名"}),V(i,{prop:"age",label:"年龄"}),V(i,{prop:"sex",label:"性别"},{default:P((a=>[1==a.row.sex?(C(),z("span",q,"男")):(C(),z("span",A,"女"))])),_:1}),V(i,{prop:"national",label:"民族"}),V(i,{prop:"id_card",label:"身份证号"}),V(i,{prop:"mobile",label:"患者联系电话"}),V(i,{prop:"total_money",label:"住院总费用"}),V(i,{prop:"family_contact",label:"家属联系方式"}),V(i,{prop:"admission_time",label:"入院日期"},{default:P((a=>["1970-01-01 08:00:00"==a.row.admission_time?(C(),z("span",I)):(C(),z("span",K,O(a.row.admission_time),1))])),_:1}),V(i,{prop:"operative_time",label:"手术日期"},{default:P((a=>["1970-01-01 08:00:00"==a.row.operative_time?(C(),z("span",L)):(C(),z("span",N,O(a.row.operative_time),1))])),_:1}),V(i,{prop:"discharge_time",label:"出院日期"},{default:P((a=>["1970-01-01 08:00:00"==a.row.discharge_time?(C(),z("span",Q)):(C(),z("span",R,O(a.row.discharge_time),1))])),_:1}),V(i,{prop:"total_hospital_days",label:"总住院天数"}),V(i,{prop:"postoperation_hospital_days",label:"术后住院天数"}),V(i,{prop:"is_follow",label:"是否随访"},{default:P((a=>[0==a.row.is_follow?(C(),z("span",W,"否")):(C(),z("span",B,"是"))])),_:1}),V(i,{prop:"follow_day_num",label:"距离随访天数"},{default:P((a=>[a.row.follow_day_num<=3?(C(),z("span",G,O(a.row.follow_day_num),1)):(C(),z("span",H,O(a.row.follow_day_num),1))])),_:1}),V(i,{prop:"follow_time",label:"随访时间"},{default:P((a=>["1970-01-01 08:00:00"==a.row.follow_time?(C(),z("span",J)):1==a.row.is_follow?(C(),z("span",M,O(a.row.follow_time),1)):(C(),z("span",X))])),_:1}),V(i,{prop:"follow_content",label:"随访内容"},{default:P((a=>[1==a.row.is_follow?(C(),z("span",Y,O(a.row.follow_content),1)):(C(),z("span",Z))])),_:1}),V(i,{prop:"created_at",label:"创建时间"}),V(i,{label:"操作",width:"100"},{default:P((a=>[v("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:e=>o.handleFollowUp(a.row.id)},"随访",8,$),v("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:e=>o.handleEdit(a.row.id)},"修改",8,aa)])),_:1})])),_:1},8,["data"]),[[u,a.loading]]),V(d,{background:"",layout:"prev, pager, next",total:a.total,"page-size":a.pageSize,"current-page":a.currentPage,onCurrentChange:o.changePage},null,8,["total","page-size","current-page","onCurrentChange"])])),_:1})};export{U as default};