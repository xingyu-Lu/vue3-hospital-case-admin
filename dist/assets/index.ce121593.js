var e=Object.defineProperty,a=Object.defineProperties,r=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,n=(a,r,t)=>r in a?e(a,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[r]=t;import{V as p,u as c,r as i,j as s,h as _,t as d,P as u,E as m,Q as h,R as g,S as y,O as f,T as b,F as w,w as k,o as P,b as j,n as C,d as v,U as O,c as z,e as S}from"./vendor.4a064ce5.js";/* empty css                        *//* empty css                *//* empty css                      *//* empty css                 *//* empty css                  *//* empty css                     *//* empty css                    */import"./index.d29fec98.js";const x={name:"admin-list",setup(){const e=p(),m=c(),{colorectal_cancer_id:h}=e.query,g=i({colorectalCancer:"",loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10});s((()=>{y(),f()}));const y=()=>{_.get(`/api/back/ColorectalCancers/${h}`).then((e=>{g.colorectalCancer=e.data}))},f=()=>{g.loading=!0,_.get("/api/back/ColorectalCancerFollowUps",{params:{page:g.currentPage,page_size:g.pageSize,colorectal_cancer_id:h}}).then((e=>{g.tableData=e.data,g.pageSize=e.pagination.perPage,g.total=e.pagination.total,g.currentPage=e.pagination.currentPage,g.loading=!1}))};return b=((e,a)=>{for(var r in a||(a={}))o.call(a,r)&&n(e,r,a[r]);if(t)for(var r of t(a))l.call(a,r)&&n(e,r,a[r]);return e})({},d(g)),a(b,r({changePage:e=>{g.currentPage=e,f()},handleAdd:()=>{m.push({path:"/colorectal-cancer-follow-up-add",query:{colorectal_cancer_id:h}})},handleEdit:e=>{m.push({path:"/colorectal-cancer-follow-up-add",query:{colorectal_cancer_id:h,id:e}})},Plus:u}));var b}},D={style:{"text-align":"center"}},E=S("新增随访"),q={key:0},A={key:1},F={key:0},U={key:1},I={key:0},Q={key:1},R={key:2},T={key:0},V={key:1},$={key:0},B={key:1},G={key:2},H={key:0},J={key:1},K={key:0},L={key:1},M={key:0},N={key:1},W={key:2},X={key:0},Y={key:1},Z={key:2},ee=["onClick"];x.render=function(e,a,r,t,o,l){const n=m,p=h,c=g,i=y,s=f,_=b;return P(),w(s,{style:{"min-height":"100%"}},{header:k((()=>[j("h3",D,C(e.colorectalCancer.name),1),v(n,{type:"primary",icon:t.Plus,onClick:t.handleAdd},{default:k((()=>[E])),_:1},8,["icon","onClick"])])),default:k((()=>[O(v(c,{data:e.tableData,stripe:"",style:{width:"100%"}},{default:k((()=>[v(p,{prop:"id",label:"id"}),v(p,{prop:"colorectal_cancer_id",label:"间质瘤 id"}),v(p,{prop:"dead_time",label:"死亡日期时间"},{default:k((e=>["1970-01-01 08:00:00"==e.row.dead_time?(P(),z("span",q)):(P(),z("span",A,C(e.row.dead_time),1))])),_:1}),v(p,{prop:"survival_month",label:"生存月份"}),v(p,{prop:"followed_up_after_operation_date_time",label:"术后随访日期时间"},{default:k((e=>["1970-01-01 08:00:00"==e.row.followed_up_after_operation_date_time?(P(),z("span",F)):(P(),z("span",U,C(e.row.followed_up_after_operation_date_time),1))])),_:1}),v(p,{prop:"results_were_followed_up_after_operation",label:"术后随访结果"}),v(p,{prop:"long_term_complications_and_management_methods",label:"远期并发症及处理方式"}),v(p,{prop:"whether_new_hair_gallbladder_stone",label:"是否新发胆囊结石"},{default:k((e=>[0==e.row.whether_new_hair_gallbladder_stone?(P(),z("span",I,"否")):1==e.row.whether_new_hair_gallbladder_stone?(P(),z("span",Q,"是")):(P(),z("span",R,"既往合并胆囊结石"))])),_:1}),v(p,{prop:"gallstone_discovery_time",label:"胆囊结石发现时间"},{default:k((e=>["1970-01-01 08:00:00"==e.row.gallstone_discovery_time?(P(),z("span",T)):(P(),z("span",V,C(e.row.gallstone_discovery_time),1))])),_:1}),v(p,{prop:"treatment_of_gallstones",label:"胆囊结石处理方式"},{default:k((e=>[0==e.row.treatment_of_gallstones?(P(),z("span",$,"无")):1==e.row.treatment_of_gallstones?(P(),z("span",B,"保守")):(P(),z("span",G,"手术"))])),_:1}),v(p,{prop:"local_recurrence_time",label:"局部复发时间"},{default:k((e=>["1970-01-01 08:00:00"==e.row.local_recurrence_time?(P(),z("span",H)):(P(),z("span",J,C(e.row.local_recurrence_time),1))])),_:1}),v(p,{prop:"distant_transfer_time",label:"远处转移时间"},{default:k((e=>["1970-01-01 08:00:00"==e.row.distant_transfer_time?(P(),z("span",K)):(P(),z("span",L,C(e.row.distant_transfer_time),1))])),_:1}),v(p,{prop:"distant_metastatic_site",label:"远处转移部位（非肿瘤死亡原因）"}),v(p,{prop:"whether_chemotherapy",label:"是否化疗"},{default:k((e=>[0==e.row.whether_chemotherapy?(P(),z("span",M,"无")):1==e.row.whether_chemotherapy?(P(),z("span",N,"有")):(P(),z("span",W,"新辅助"))])),_:1}),v(p,{prop:"chemotherapy_way",label:"化疗途径"},{default:k((e=>[0==e.row.chemotherapy_way?(P(),z("span",X,"无")):1==e.row.chemotherapy_way?(P(),z("span",Y,"口服")):(P(),z("span",Z,"静脉"))])),_:1}),v(p,{prop:"chemotherapy_regimens",label:"化疗方案"}),v(p,{prop:"chemotherapy_regimen_rate",label:"化疗疗程/次"}),v(p,{prop:"chemotherapy_month",label:"化疗时间"}),v(p,{prop:"special_information_record",label:"特殊信息记录"}),v(p,{prop:"follow_up_principal",label:"随访负责人"}),v(p,{prop:"follow_up_note",label:"随访备注"}),v(p,{prop:"follow_up_information_record",label:"随访信息记录"}),v(p,{prop:"created_at",label:"创建时间"}),v(p,{label:"操作",width:"100"},{default:k((e=>[j("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:a=>t.handleEdit(e.row.id)},"修改",8,ee)])),_:1})])),_:1},8,["data"]),[[_,e.loading]]),v(i,{background:"",layout:"prev, pager, next",total:e.total,"page-size":e.pageSize,"current-page":e.currentPage,onCurrentChange:t.changePage},null,8,["total","page-size","current-page","onCurrentChange"])])),_:1})};export{x as default};
