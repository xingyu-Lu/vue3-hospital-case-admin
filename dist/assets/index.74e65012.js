var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(a,t,r)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;import{V as n,u as s,r as i,j as _,h as d,t as c,P as m,E as h,Q as u,R as g,S as y,O as b,T as f,F as w,w as k,o as P,b as j,n as v,d as C,U as O,c as z,e as S}from"./vendor.134d4092.js";/* empty css                        *//* empty css                *//* empty css                      *//* empty css                 *//* empty css                  *//* empty css                     *//* empty css                    */import"./index.3e67c511.js";const x={name:"admin-list",setup(){const e=n(),h=s(),{stomach_ca_id:u}=e.query,g=i({stomachCa:"",loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10});_((()=>{y(),b()}));const y=()=>{d.get(`/api/back/stomachCas/${u}`).then((e=>{g.stomachCa=e.data}))},b=()=>{g.loading=!0,d.get("/api/back/stomachFollowUps",{params:{page:g.currentPage,page_size:g.pageSize,stomach_ca_id:u}}).then((e=>{g.tableData=e.data,g.pageSize=e.pagination.perPage,g.total=e.pagination.total,g.currentPage=e.pagination.currentPage,g.loading=!1}))};return f=((e,a)=>{for(var t in a||(a={}))o.call(a,t)&&p(e,t,a[t]);if(r)for(var t of r(a))l.call(a,t)&&p(e,t,a[t]);return e})({},c(g)),a(f,t({changePage:e=>{g.currentPage=e,b()},handleAdd:()=>{h.push({path:"/stomachca-follow-up-add",query:{stomach_ca_id:u}})},handleEdit:e=>{h.push({path:"/stomachca-follow-up-add",query:{stomach_ca_id:u,id:e}})},Plus:m}));var f}},D={style:{"text-align":"center"}},E=S("新增随访"),q={key:0},A={key:1},F={key:0},U={key:1},I={key:0},Q={key:1},R={key:2},T={key:0},V={key:1},$={key:0},B={key:1},G={key:2},H={key:0},J={key:1},K={key:0},L={key:1},M={key:0},N={key:1},W={key:2},X={key:0},Y={key:1},Z={key:2},ee=["onClick"];x.render=function(e,a,t,r,o,l){const p=h,n=u,s=g,i=y,_=b,d=f;return P(),w(_,{style:{"min-height":"100%"}},{header:k((()=>[j("h3",D,v(e.stomachCa.name),1),C(p,{type:"primary",icon:r.Plus,onClick:r.handleAdd},{default:k((()=>[E])),_:1},8,["icon","onClick"])])),default:k((()=>[O(C(s,{data:e.tableData,stripe:"",style:{width:"100%"}},{default:k((()=>[C(n,{prop:"id",label:"id"}),C(n,{prop:"stomach_ca_id",label:"胃ca id"}),C(n,{prop:"dead_time",label:"死亡日期时间"},{default:k((e=>["1970-01-01 08:00:00"==e.row.dead_time?(P(),z("span",q)):(P(),z("span",A,v(e.row.dead_time),1))])),_:1}),C(n,{prop:"survival_month",label:"生存月份"}),C(n,{prop:"followed_up_after_operation_date_time",label:"术后随访日期时间"},{default:k((e=>["1970-01-01 08:00:00"==e.row.followed_up_after_operation_date_time?(P(),z("span",F)):(P(),z("span",U,v(e.row.followed_up_after_operation_date_time),1))])),_:1}),C(n,{prop:"results_were_followed_up_after_operation",label:"术后随访结果"}),C(n,{prop:"long_term_complications_and_management_methods",label:"远期并发症及处理方式"}),C(n,{prop:"whether_new_hair_gallbladder_stone",label:"是否新发胆囊结石"},{default:k((e=>[0==e.row.whether_new_hair_gallbladder_stone?(P(),z("span",I,"否")):1==e.row.whether_new_hair_gallbladder_stone?(P(),z("span",Q,"是")):(P(),z("span",R,"既往合并胆囊结石"))])),_:1}),C(n,{prop:"gallstone_discovery_time",label:"胆囊结石发现时间"},{default:k((e=>["1970-01-01 08:00:00"==e.row.gallstone_discovery_time?(P(),z("span",T)):(P(),z("span",V,v(e.row.gallstone_discovery_time),1))])),_:1}),C(n,{prop:"treatment_of_gallstones",label:"胆囊结石处理方式"},{default:k((e=>[0==e.row.treatment_of_gallstones?(P(),z("span",$,"无")):1==e.row.treatment_of_gallstones?(P(),z("span",B,"保守")):(P(),z("span",G,"手术"))])),_:1}),C(n,{prop:"local_recurrence_time",label:"局部复发时间"},{default:k((e=>["1970-01-01 08:00:00"==e.row.local_recurrence_time?(P(),z("span",H)):(P(),z("span",J,v(e.row.local_recurrence_time),1))])),_:1}),C(n,{prop:"distant_transfer_time",label:"远处转移时间"},{default:k((e=>["1970-01-01 08:00:00"==e.row.distant_transfer_time?(P(),z("span",K)):(P(),z("span",L,v(e.row.distant_transfer_time),1))])),_:1}),C(n,{prop:"distant_metastatic_site",label:"远处转移部位（非肿瘤死亡原因）"}),C(n,{prop:"whether_chemotherapy",label:"是否化疗"},{default:k((e=>[0==e.row.whether_chemotherapy?(P(),z("span",M,"无")):1==e.row.whether_chemotherapy?(P(),z("span",N,"有")):(P(),z("span",W,"新辅助"))])),_:1}),C(n,{prop:"chemotherapy_way",label:"化疗途径"},{default:k((e=>[0==e.row.chemotherapy_way?(P(),z("span",X,"无")):1==e.row.chemotherapy_way?(P(),z("span",Y,"口服")):(P(),z("span",Z,"静脉"))])),_:1}),C(n,{prop:"chemotherapy_regimens",label:"化疗方案"}),C(n,{prop:"chemotherapy_regimen_rate",label:"化疗疗程/次"}),C(n,{prop:"chemotherapy_month",label:"化疗时间"}),C(n,{prop:"special_information_record",label:"特殊信息记录"}),C(n,{prop:"follow_up_principal",label:"随访负责人"}),C(n,{prop:"follow_up_note",label:"随访备注"}),C(n,{prop:"follow_up_information_record",label:"随访信息记录"}),C(n,{prop:"created_at",label:"创建时间"}),C(n,{label:"操作",width:"100"},{default:k((e=>[j("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:a=>r.handleEdit(e.row.id)},"修改",8,ee)])),_:1})])),_:1},8,["data"]),[[d,e.loading]]),C(i,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:r.changePage},null,8,["total","page-size","current-page","onCurrentChange"])])),_:1})};export{x as default};