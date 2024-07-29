import{r as v,m as G,c as A,w as J,b as u,d as m,J as t,e as i,K as p,E as o,u as s,P as D,T as $,ab as K,M as r,D as L,L as d,N as O,ac as Q,ad as R}from"./@vue-Cc5W6W03.js";import{D as F,C as W,O as X,j as Y,B as Z}from"./@firebase-7dTA5crF.js";import{_ as ee,i as V,b as x,c as b,a as k}from"./index-B_BK-3TZ.js";import{_ as te,a as se,b as I,c as g,d as ae,e as h}from"./TableRow-CZeARrAJ.js";import{_ as oe,a as le,b as ie,c as N,d as ne}from"./SelectScrollDownButton-DKQIfbde.js";import{_ as re}from"./Sidebar-DvRdP4Bc.js";import{F as w}from"./vue-sonner-tOpOM8Nc.js";import"./idb-BXWtuYvb.js";import"./tslib-BGVaTf34.js";import"./radix-vue-g1r_MIx6.js";import"./@internationalized-D5LszBdy.js";import"./@swc-BOtJyCjG.js";import"./@floating-ui-rhRhKn_Q.js";import"./class-variance-authority-Bb4qSo10.js";import"./clsx-B-dksMZM.js";import"./tailwind-merge-3VKOpVsw.js";import"./vue-router-Yx5yAxkf.js";import"./firebase-wUg9X9TS.js";import"./@heroicons-D7NO6Ex3.js";import"./vuex-F4EPD-zj.js";import"./@unovis-B91CR5fh.js";import"./@emotion-Dz_S_Xyw.js";import"./stylis-YPZU7XtI.js";import"./d3-transition-fhQpLGwb.js";import"./d3-dispatch-kxCwF96_.js";import"./d3-timer-DdKHrDhs.js";import"./d3-interpolate-DY0Cqdkz.js";import"./d3-color-Ceo1QMNe.js";import"./d3-selection-DSeOx27A.js";import"./d3-ease-Ox4sgw_u.js";import"./d3-interpolate-path-CTc7ZuM7.js";import"./striptags-PW3Qp06w.js";import"./@excalidraw-_WJHnpoj.js";import"./react-D1sI5Brr.js";import"./react-dom-9hUPJye5.js";import"./scheduler-CzFDRTuY.js";import"./to-px-DReLD3CO.js";import"./parse-unit-3UrBcP19.js";import"./d3-array-BJvpcdQ_.js";import"./@juggle-C8OzoCMD.js";import"./d3-axis-Cf4shvhW.js";import"./d3-scale-A6k9qkjg.js";import"./internmap-BkD7Hj8s.js";import"./d3-format-CzD4bSOQ.js";import"./d3-time-format-COsUQkot.js";import"./d3-time-B8hJ2rEE.js";import"./d3-shape-D7Hvm6M3.js";import"./d3-path-CimkQT29.js";import"./throttle-debounce-BnOnwhtV.js";import"./embla-carousel-vue-Dcvag-wm.js";import"./embla-carousel-reactive-utils-DkegjUUZ.js";import"./embla-carousel-QtEXB4oT.js";import"./@vueuse-CclTXppY.js";import"./embla-carousel-autoplay-0OO14Ffu.js";import"./@radix-icons-Ce5A0lVI.js";import"./vuex-persistedstate-D4njCX8q.js";import"./maska-Cp-LWreF.js";const S=y=>(Q("data-v-951265ff"),y=y(),R(),y),de={class:"bg-gray-100 min-h-screen flex ml-16"},ue={class:"flex flex-col flex-1 px-4 py-6"},ce=S(()=>i("h1",{class:"text-3xl font-semibold text-gray-700 mb-6"},"Course Management",-1)),me={class:"flex justify-between items-center mb-6"},pe={class:"flex space-x-4"},_e={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8 min-h-[300px]"},fe=["onClick"],ve={class:"relative h-48"},ge=["src","alt"],he=S(()=>i("div",{class:"absolute inset-x-0 bottom-0 h-[70%] group-hover:h-[90%] bg-gradient-to-b from-transparent via-transparent to-90% to-white transition-all ease-in-out duration-300"},null,-1)),ye={class:"p-4 relative z-10 -mt-8 group-hover:-mt-12 transition-all duration-300"},xe={class:"text-lg font-semibold mb-2"},be=["innerHTML"],we={class:"absolute bottom-4 inset-x-4 flex justify-between items-center text-sm text-gray-500"},Se={class:"truncate ml-2 text-right"},Ce={key:0,class:"bg-white rounded-lg shadow-md p-6"},De={class:"text-2xl font-semibold mb-4"},$e={key:0,class:"mb-6"},Ve=S(()=>i("h3",{class:"text-xl font-semibold mb-2"},"Existing Sessions",-1)),ke=S(()=>i("h3",{class:"text-xl font-semibold mb-2"},"Add New Session",-1)),Ee={class:"grid grid-cols-2 gap-4"},Me={__name:"AddSession",setup(y){const C=v([]),n=v(null),c=v({startDate:"",endDate:"",capacity:1,enrolled:0}),_=v("all"),f=v(""),U=F(V,"learningManagementSystem/tempestStudios/courses"),j=l=>l.map(a=>a.charAt(0).toUpperCase()+a.slice(1)).join(", ");G(async()=>{const l=await W(U);C.value=l.docs.map(a=>({...a.data(),id:a.id}))});const z=A(()=>{const l=new Set;return C.value.forEach(a=>{a.courseCategory.forEach(e=>l.add(e))}),Array.from(l)}),B=A(()=>C.value.filter(l=>{const a=_.value==="all"||l.courseCategory.includes(_.value),e=l.title.toLowerCase().includes(f.value.toLowerCase())||l.description.toLowerCase().includes(f.value.toLowerCase());return a&&e})),T=l=>{n.value&&n.value.id===l.id?n.value=null:n.value=l};J([_,f],()=>{n.value=null});const E=l=>new Date(l).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),q=async()=>{if(!n.value)return;const l={...c.value,courseId:n.value.courseId};try{const a=F(V,`learningManagementSystem/tempestStudios/courses/${n.value.id}/sessions`);await X(a,l),n.value.sessions||(n.value.sessions=[]),n.value.sessions.push(l),c.value={startDate:"",endDate:"",capacity:1,enrolled:0},w.success("Session added successfully!")}catch(a){console.error("Error adding session: ",a),w.error("Failed to add session. Please try again.")}},P=l=>{console.log("Edit session:",l)},H=async l=>{if(n.value)try{const a=Y(V,`learningManagementSystem/tempestStudios/courses/${n.value.id}/sessions/${l.id}`);await Z(a),n.value.sessions=n.value.sessions.filter(e=>e.id!==l.id),w.success("Session deleted successfully!")}catch(a){console.error("Error deleting session: ",a),w.error("Failed to delete session. Please try again.")}};return(l,a)=>(u(),m("div",de,[t(re,{class:"shadow-2xl"}),i("div",ue,[ce,p(" Filters and Search "),i("div",me,[i("div",pe,[t(s(ne),{modelValue:_.value,"onUpdate:modelValue":a[0]||(a[0]=e=>_.value=e)},{default:o(()=>[t(s(oe),{class:"w-[180px]"},{default:o(()=>[t(s(le),{placeholder:"Filter by category"})]),_:1}),t(s(ie),null,{default:o(()=>[t(s(N),{value:"all"},{default:o(()=>[r("All Categories")]),_:1}),(u(!0),m(D,null,$(z.value,e=>(u(),L(s(N),{key:e,value:e},{default:o(()=>[r(d(e),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"]),t(s(x),{modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=e=>f.value=e),placeholder:"Search courses...",class:"w-[300px]"},null,8,["modelValue"])])]),p(" Course Grid "),i("div",_e,[(u(!0),m(D,null,$(B.value,e=>(u(),m("div",{key:e.courseId,onClick:M=>T(e),class:"bg-white max-w-72 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer relative group overflow-hidden"},[i("div",ve,[i("img",{src:e.image,alt:e.title,class:"min-w-full h-full object-fill object-center overflow-hidden"},null,8,ge),he]),i("div",ye,[i("h3",xe,d(e.title),1),i("div",{class:"text-sm text-gray-600 mb-2 line-clamp-2 group-hover:line-clamp-3 transition-all duration-300",innerHTML:e.description},null,8,be)]),i("div",we,[i("span",null,d(e.length.value)+" "+d(e.length.value===1?e.length.unit.slice(0,-1):e.length.unit),1),i("span",Se,d(j(e.courseCategory)),1)]),t(s(b),{class:"absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",variant:"secondary",size:"sm"},{default:o(()=>[r(" View live ")]),_:1})],8,fe))),128))]),p(" Selected Course Details and Session Management "),t(K,{name:"slide-fade"},{default:o(()=>[n.value?(u(),m("div",Ce,[i("h2",De,d(n.value.title),1),p(" Existing Sessions "),n.value.sessions&&n.value.sessions.length>0?(u(),m("div",$e,[Ve,t(s(te),null,{default:o(()=>[t(s(se),null,{default:o(()=>[t(s(I),null,{default:o(()=>[t(s(g),null,{default:o(()=>[r("Start Date")]),_:1}),t(s(g),null,{default:o(()=>[r("End Date")]),_:1}),t(s(g),null,{default:o(()=>[r("Capacity")]),_:1}),t(s(g),null,{default:o(()=>[r("Enrolled")]),_:1}),t(s(g),null,{default:o(()=>[r("Actions")]),_:1})]),_:1})]),_:1}),t(s(ae),null,{default:o(()=>[(u(!0),m(D,null,$(n.value.sessions,e=>(u(),L(s(I),{key:e.id},{default:o(()=>[t(s(h),null,{default:o(()=>[r(d(E(e.startDate)),1)]),_:2},1024),t(s(h),null,{default:o(()=>[r(d(E(e.endDate)),1)]),_:2},1024),t(s(h),null,{default:o(()=>[r(d(e.capacity),1)]),_:2},1024),t(s(h),null,{default:o(()=>[r(d(e.enrolled),1)]),_:2},1024),t(s(h),null,{default:o(()=>[t(s(b),{variant:"outline",size:"sm",onClick:M=>P(e)},{default:o(()=>[r("Edit")]),_:2},1032,["onClick"]),t(s(b),{variant:"destructive",size:"sm",class:"ml-2",onClick:M=>H(e)},{default:o(()=>[r("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])):p("v-if",!0),p(" Add New Session Form "),i("div",null,[ke,i("form",{onSubmit:O(q,["prevent"]),class:"space-y-4"},[i("div",Ee,[i("div",null,[t(s(k),{for:"startDate"},{default:o(()=>[r("Start Date")]),_:1}),t(s(x),{id:"startDate",modelValue:c.value.startDate,"onUpdate:modelValue":a[2]||(a[2]=e=>c.value.startDate=e),type:"date",required:""},null,8,["modelValue"])]),i("div",null,[t(s(k),{for:"endDate"},{default:o(()=>[r("End Date")]),_:1}),t(s(x),{id:"endDate",modelValue:c.value.endDate,"onUpdate:modelValue":a[3]||(a[3]=e=>c.value.endDate=e),type:"date",required:""},null,8,["modelValue"])])]),i("div",null,[t(s(k),{for:"capacity"},{default:o(()=>[r("Capacity")]),_:1}),t(s(x),{id:"capacity",modelValue:c.value.capacity,"onUpdate:modelValue":a[4]||(a[4]=e=>c.value.capacity=e),type:"number",min:"1",required:""},null,8,["modelValue"])]),t(s(b),{type:"submit"},{default:o(()=>[r("Add Session")]),_:1})],32)])])):p("v-if",!0)]),_:1})])]))}},It=ee(Me,[["__scopeId","data-v-951265ff"]]);export{It as default};