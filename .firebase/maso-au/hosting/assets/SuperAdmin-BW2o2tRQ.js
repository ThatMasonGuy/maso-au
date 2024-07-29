import{_ as Ee,a as Ne}from"./AdminSidebar-Dkji6bOi.js";import{_ as G,a as K,b as le,c as se}from"./CardContent-cdWgGs_w.js";import{_ as be,c as T,i as P,a as J,l as ne,b as M,h as Fe}from"./index-B_BK-3TZ.js";import{m as de}from"./@excalidraw-_WJHnpoj.js";import{r as fe}from"./react-D1sI5Brr.js";import{c as Ue}from"./react-dom-9hUPJye5.js";import{B as ye,j as X,n as Ae,k as je,C as Z,D as ee,a as Ve,E as Oe,p as re,q as Te,t as Be,v as we,F as me,H as Ie,I as Pe,J as xe,K as ze,u as Me}from"./@firebase-7dTA5crF.js";import{u as Le}from"./vuex-F4EPD-zj.js";import{F as V}from"./vue-sonner-tOpOM8Nc.js";import{d as Se}from"./lodash-DFCdr8CA.js";import{_ as _e}from"./DropdownButton-CF0ptW4t.js";import{i as qe,j as Re}from"./@heroicons-D7NO6Ex3.js";import{c as pe,r as x,m as ie,n as Je,w as Ge,x as Ke,b as v,d as U,D as A,E as t,J as a,u as e,e as f,M as l,K as ae,P as L,T as te,L as F,z as I,ac as He,ad as We,q as Qe,G as Ye}from"./@vue-Cc5W6W03.js";import{d as $e,_ as Ce,a as ke,b as De,c as R}from"./SelectScrollDownButton-DKQIfbde.js";import{_ as ve,a as ge,b as z,c as j,d as he,e as E}from"./TableRow-CZeARrAJ.js";import Xe from"./html2canvas-CBrSDip1.js";import{a as Ze,b as ea,c as aa,_ as ta}from"./DialogContent-BZj_CcQm.js";import{N as la,c as sa,d as oa,L as na}from"./radix-vue-g1r_MIx6.js";import{b as ra}from"./@radix-icons-Ce5A0lVI.js";import{_ as ca,a as ia,b as ua,c as da}from"./PaginationPrev-8PhIFb8g.js";import{_ as fa,a as Q,b as Y,c as ma}from"./TabsContent-Ca-0wMpq.js";import"./class-variance-authority-Bb4qSo10.js";import"./clsx-B-dksMZM.js";import"./tailwind-merge-3VKOpVsw.js";import"./vue-router-Yx5yAxkf.js";import"./firebase-wUg9X9TS.js";import"./@unovis-B91CR5fh.js";import"./@emotion-Dz_S_Xyw.js";import"./stylis-YPZU7XtI.js";import"./d3-transition-fhQpLGwb.js";import"./d3-dispatch-kxCwF96_.js";import"./d3-timer-DdKHrDhs.js";import"./d3-interpolate-DY0Cqdkz.js";import"./d3-color-Ceo1QMNe.js";import"./d3-selection-DSeOx27A.js";import"./d3-ease-Ox4sgw_u.js";import"./d3-interpolate-path-CTc7ZuM7.js";import"./striptags-PW3Qp06w.js";import"./to-px-DReLD3CO.js";import"./parse-unit-3UrBcP19.js";import"./d3-array-BJvpcdQ_.js";import"./@juggle-C8OzoCMD.js";import"./d3-axis-Cf4shvhW.js";import"./d3-scale-A6k9qkjg.js";import"./internmap-BkD7Hj8s.js";import"./d3-format-CzD4bSOQ.js";import"./d3-time-format-COsUQkot.js";import"./d3-time-B8hJ2rEE.js";import"./d3-shape-D7Hvm6M3.js";import"./d3-path-CimkQT29.js";import"./throttle-debounce-BnOnwhtV.js";import"./embla-carousel-vue-Dcvag-wm.js";import"./embla-carousel-reactive-utils-DkegjUUZ.js";import"./embla-carousel-QtEXB4oT.js";import"./@vueuse-CclTXppY.js";import"./embla-carousel-autoplay-0OO14Ffu.js";import"./vuex-persistedstate-D4njCX8q.js";import"./maska-Cp-LWreF.js";import"./@internationalized-D5LszBdy.js";import"./@swc-BOtJyCjG.js";import"./@floating-ui-rhRhKn_Q.js";import"./idb-BXWtuYvb.js";import"./tslib-BGVaTf34.js";import"./scheduler-CzFDRTuY.js";const _a={class:"relative"},pa={class:"flex justify-between items-center"},va={class:"flex items-center space-x-2"},ga={key:1,class:"fixed inset-0 z-50 bg-white dark:bg-gray-900"},ha={class:"flex flex-col h-full"},wa={class:"flex justify-between items-center"},xa={class:"flex items-center space-x-2"},ba={class:"flex-grow relative"},ya={__name:"AdminExcalidraw",setup(O){const b=Le(),_=pe(()=>b.getters.user),d=x(null),h=x(null),$=x(!1),C=x(!1);let S=null,r=null,w=null;const g=x(null),k=(s,u,D)=>{console.log("Saving to localStorage:",{elements:s,appState:u,files:D});const B=de.serializeAsJSON(s,u,D,"local");localStorage.setItem("excalidrawData",B)},p=[{label:"Save to Firestore",value:"save"},{label:"Clear Excalidraw",value:"clear"}],N=s=>{s.value==="save"?m():s.value==="clear"&&q()},q=async()=>{try{localStorage.removeItem("excalidrawData");const s=_.value.uid;await ye(X(P,`users/${s}/excalidraw/excalidraw`)),w&&w.resetScene(),V.success("Excalidraw cleared successfully"),console.log("Excalidraw cleared"),o($.value?h.value:d.value,$.value)}catch(s){console.error("Error clearing Excalidraw:",s),V.error("Failed to clear Excalidraw")}},H=Se(k,5e3),i=()=>{console.log("Loading from localStorage");const s=localStorage.getItem("excalidrawData");return s?(console.log("Data found in localStorage"),JSON.parse(s)):(console.log("No data found in localStorage"),null)},m=async()=>{if(!w){console.log("excalidrawAPI is null, cannot save");return}const s=w.getSceneElements(),u=w.getAppState(),D=w.getFiles();console.log("Saving to Firestore:",{elements:s,appState:u,files:D});const B=de.serializeAsJSON(s,u,D,"database");try{await Ae(X(P,`users/${_.value.uid}/excalidraw/excalidraw`),{data:B}),console.log("Drawing saved to Firestore"),V.success("Drawing saved successfully to Firestore")}catch(W){console.error("Error saving drawing:",W),V.error("Failed to save drawing to Firestore")}},n=async()=>{console.log("Loading from Firestore");try{const s=X(P,`users/${_.value.uid}/excalidraw/excalidraw`),u=await je(s);if(u.exists()){const D=u.data().data;return console.log("Drawing loaded from Firestore"),V.success("Drawing loaded from Firestore"),JSON.parse(D)}}catch(s){console.error("Error loading drawing:",s),V.error("Failed to load drawing from Firestore")}return console.log("No data found in Firestore"),null},c=fe.memo(s=>fe.createElement(de.Excalidraw,{initialData:s.initialData,onChange:(u,D,B)=>{console.log("onChange triggered"),H(u,D,B)},onCollabButtonClick:()=>{window.alert("You clicked on collab button"),s.setIsCollaborating(!0)},theme:"dark",...s})),o=async(s,u=!1)=>{if(s){console.log(`Mounting Excalidraw in ${u?"fullscreen":"normal"} mode`);const D=u?r:S;D&&D.unmount();let B=n();B||(B=await i()),g.value=B||{elements:[],appState:{theme:"dark"},scrollToContent:!0};const W=Ue(s);W.render(fe.createElement(c,{initialData:g.value,excalidrawAPI:oe=>{w=oe},isCollaborating:C.value,setIsCollaborating:oe=>{if(C.value=oe,oe&&w){const ue=new Map;ue.set("id1",{username:"User 1",avatarUrl:"https://example.com/avatar1.png"}),ue.set("id2",{username:"User 2",avatarUrl:"https://example.com/avatar2.png"}),w.updateScene({collaborators:ue})}else w&&w.updateScene({collaborators:new Map})}})),u?r=W:S=W}};ie(async()=>{console.log("Component mounted"),await o(d.value)}),Je(()=>{console.log("Component unmounting"),S&&S.unmount(),r&&r.unmount(),m()});const y=()=>{$.value=!$.value};return Ge($,s=>{console.log("Fullscreen changed:",s),Ke(()=>{s?o(h.value,!0):o(d.value)})}),(s,u)=>(v(),U("div",_a,[$.value?ae("v-if",!0):(v(),A(e(se),{key:0,class:"w-full"},{default:t(()=>[a(e(G),null,{default:t(()=>[f("div",pa,[a(e(K),{class:"text-xl"},{default:t(()=>[l("Excalidraw")]),_:1}),f("div",va,[a(_e,{buttonText:"Save",dropdownOptions:p,onOptionSelected:N,onButtonClick:m}),a(e(T),{class:"px-2",onClick:y},{default:t(()=>[a(e(qe),{class:"w-5 h-5"})]),_:1})])])]),_:1}),a(e(le),null,{default:t(()=>[f("div",{ref_key:"excalidrawContainer",ref:d,class:"excalidraw-container"},null,512)]),_:1})]),_:1})),$.value?(v(),U("div",ga,[f("div",ha,[a(e(G),{class:"border-b border-gray-300 dark:border-gray-700"},{default:t(()=>[f("div",wa,[a(e(K),{class:"text-xl"},{default:t(()=>[l("Excalidraw (Fullscreen)")]),_:1}),f("div",xa,[a(_e,{buttonText:"Save",dropdownOptions:p,onOptionSelected:N,onButtonClick:m}),a(e(T),{class:"px-2",onClick:y},{default:t(()=>[a(e(Re),{class:"w-5 h-5"})]),_:1})])])]),_:1}),f("div",ba,[f("div",{ref_key:"excalidrawFullscreenContainer",ref:h,class:"excalidraw-container-fullscreen h-full"},null,512)])])])):ae("v-if",!0)]))}},Sa=be(ya,[["__scopeId","data-v-fe3afbd8"]]),$a={class:"mb-4"},Ca={__name:"AdminFirestoreExplorer",setup(O){const b=x(["users","shortenedUrls","joinUrls","websiteData","learningManagementSystem","mailing"]),_=x(""),d=x([]),h=async()=>{if(!_.value)return;const C=await Z(ee(P,_.value));d.value=C.docs.map(S=>({id:S.id,data:S.data()}))},$={name:"Tree",props:["data"],template:`
      <ul v-if="isObject(data)" class="pl-4">
        <li v-for="(value, key) in data" :key="key">
          <strong>{{ key }}:</strong>
          <Tree v-if="isObject(value)" :data="value" />
          <span v-else>{{ value }}</span>
        </li>
      </ul>
      <span v-else>{{ data }}</span>
    `,methods:{isObject(C){return typeof C=="object"&&C!==null}}};return(C,S)=>(v(),A(e(se),null,{default:t(()=>[a(e(G),null,{default:t(()=>[a(e(K),{class:"text-xl"},{default:t(()=>[l("Firestore Explorer")]),_:1})]),_:1}),a(e(le),null,{default:t(()=>[f("div",$a,[a(e(J),{class:"ml-1 mb-1",for:"collection-select"},{default:t(()=>[l("Select Collection")]),_:1}),a(e($e),{modelValue:_.value,"onUpdate:modelValue":[S[0]||(S[0]=r=>_.value=r),h]},{default:t(()=>[a(e(Ce),{id:"collection-select"},{default:t(()=>[a(e(ke),{placeholder:"Select a collection"})]),_:1}),a(e(De),null,{default:t(()=>[(v(!0),U(L,null,te(b.value,r=>(v(),A(e(R),{key:r,value:r},{default:t(()=>[l(F(r),1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"])]),f("div",null,[a(e(ve),null,{default:t(()=>[a(e(ge),null,{default:t(()=>[a(e(z),null,{default:t(()=>[a(e(j),null,{default:t(()=>[l("Document ID")]),_:1}),a(e(j),null,{default:t(()=>[l("Data")]),_:1})]),_:1})]),_:1}),a(e(he),null,{default:t(()=>[d.value.length===0?(v(),A(e(z),{key:0},{default:t(()=>[a(e(E),{colspan:"2"},{default:t(()=>[l("No documents found.")]),_:1})]),_:1})):ae("v-if",!0),(v(!0),U(L,null,te(d.value,r=>(v(),A(e(z),{class:"table-row",key:r.id},{default:t(()=>[a(e(E),null,{default:t(()=>[l(F(r.id),1)]),_:2},1024),a(e(E),null,{default:t(()=>[a($,{data:r.data},null,8,["data"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])]),_:1})]),_:1}))}},ka=O=>(He("data-v-7e2e7830"),O=O(),We(),O),Da={class:"flex justify-between items-center"},Ea={class:"border rounded-lg shadow-md bg-white text-gray-600 p-4 h-full"},Na={key:0,class:"flex justify-center items-center h-32"},Fa=ka(()=>f("div",{class:"animate-spin rounded-full h-8 w-8 border-b-2 border-gray-700"},null,-1)),Ua=[Fa],Aa={key:1,class:"text-red-500"},ja={key:2,class:"overflow-auto h-full"},Va={class:"inline-block min-w-full database-structure"},Oa={__name:"AdminDatabaseStructure",setup(O){const b=Ve(),_=x({}),d=x(!0),h=x(null),$=["users","shortenedUrls","joinUrls","websiteData","learningManagementSystem","mailing"],C=[{label:"Download as JSON",value:"json"},{label:"Download as PNG",value:"png"}],S=i=>{i.value==="json"?q():i.value==="png"&&H()},r=async()=>{try{const i={};for(const m of $)i[m]=await w(ee(b,m),m);_.value=i}catch(i){console.error("Error fetching database structure:",i),h.value="Failed to fetch database structure. Please try again."}finally{d.value=!1}},w=async(i,m)=>{const n={},c=await Z(i);if(c.docs.length>0){const o=c.docs[0].data();for(const[y,s]of Object.entries(o))n[y]=g(s);for(const y of c.docs){const s=await p(y.ref,m);Object.assign(n,s)}}return n},g=i=>i instanceof Oe?"reference":i instanceof Date?"date":Array.isArray(i)?"array":typeof i=="object"&&i!==null?k(i):typeof i,k=(i,m)=>{const n={};for(const[c,o]of Object.entries(i))n[c]=g(o);return n},p=async(i,m)=>{const c={users:["accounting"],accounting:["contacts","invoices","quotes","receipts"],websiteData:["demos"],learningManagementSystem:["courses","users"],courses:["sessions"]}[m]||[],o={};for(const y of c){const s=ee(i,y);(await Z(s)).empty||(o[y]=await w(s,y))}return o};ie(async()=>{await r()});const N={props:["data"],setup(i){const m=(o,y=0)=>I("ul",{class:"pl-4"},Object.entries(o).map(([s,u])=>I("li",{key:s},[I("div",{class:"flex items-center"},[u&&typeof u=="object"&&Object.keys(u).length?I("span",{class:"cursor-pointer mr-2",onClick:D=>c(D.target)},"▶"):I("span",{class:"mr-2"}),I("span",{class:y===0?"font-bold":""},s),I("span",{class:n(u)},typeof u=="string"?`: ${u}`:typeof u=="object"&&!Array.isArray(u)?": object":"")]),u&&typeof u=="object"&&Object.keys(u).length?I("div",{class:"hidden"},m(u,y+1)):null]))),n=o=>{switch(o){case"string":return"text-green-600";case"number":return"text-yellow-600";case"boolean":return"text-purple-600";case"array":return"text-blue-600";case"date":return"text-pink-600";case"object":return"text-orange-600";case"reference":return"text-red-600";default:return"text-gray-500"}},c=o=>{const y=o.parentElement.nextElementSibling;y&&(y.classList.toggle("hidden"),o.textContent=y.classList.contains("hidden")?"▶":"▼")};return()=>I("div",{class:"font-mono text-sm"},m(i.data))}},q=()=>{const i="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(_.value,null,2)),m=document.createElement("a");m.setAttribute("href",i),m.setAttribute("download","database_structure.json"),document.body.appendChild(m),m.click(),m.remove()},H=()=>{const i=document.querySelector(".database-structure");Xe(i).then(m=>{const n=document.createElement("a");n.download="database_structure.png",n.href=m.toDataURL(),n.click()})};return(i,m)=>(v(),A(e(se),null,{default:t(()=>[a(e(G),null,{default:t(()=>[f("div",Da,[a(e(K),{class:"text-xl"},{default:t(()=>[l("Database Structure")]),_:1}),a(_e,{buttonText:"Download",dropdownOptions:C,onOptionSelected:S,onButtonClick:q})])]),_:1}),a(e(le),null,{default:t(()=>[f("div",Ea,[d.value?(v(),U("div",Na,Ua)):h.value?(v(),U("div",Aa,F(h.value),1)):(v(),U("div",ja,[f("div",Va,[a(N,{data:_.value},null,8,["data"])])]))])]),_:1})]),_:1}))}},Ta=be(Oa,[["__scopeId","data-v-7e2e7830"]]),Ba={class:"mb-4"},Ia={class:"flex space-x-2"},Pa={class:"mb-4"},za={__name:"AdminCloudStorage",setup(O){const b=x(""),_=x([]),d=x(null);ie(()=>{h()});const h=async()=>{const g=re(ne,b.value),k=await Te(g);_.value=await Promise.all(k.items.map(async p=>{const N=await p.getMetadata();return{name:p.name,size:N.size,fullPath:p.fullPath}}))},$=g=>{d.value=g.target.files[0]},C=async()=>{if(!d.value)return;const g=re(ne,`${b.value}/${d.value.name}`);await Be(g,d.value),await h()},S=async g=>{const k=await we(re(ne,g.fullPath)),p=document.createElement("a");p.href=k,p.download=g.name,document.body.appendChild(p),p.click(),document.body.removeChild(p)},r=async g=>{const k=await we(re(ne,g.fullPath));window.open(k,"_blank")},w=g=>{if(g===0)return"0 Bytes";const k=1024,p=["Bytes","KB","MB","GB","TB"],N=Math.floor(Math.log(g)/Math.log(k));return parseFloat((g/Math.pow(k,N)).toFixed(2))+" "+p[N]};return(g,k)=>(v(),A(e(se),null,{default:t(()=>[a(e(G),null,{default:t(()=>[a(e(K),{class:"text-xl"},{default:t(()=>[l("Storage Explorer")]),_:1})]),_:1}),a(e(le),null,{default:t(()=>[f("div",Ba,[a(e(J),{for:"storage-path"},{default:t(()=>[l("Storage Path")]),_:1}),f("div",Ia,[a(e(M),{modelValue:b.value,"onUpdate:modelValue":k[0]||(k[0]=p=>b.value=p),placeholder:"Enter storage path"},null,8,["modelValue"]),a(e(T),{onClick:h},{default:t(()=>[l("Go")]),_:1})])]),f("div",Pa,[a(e(M),{type:"file",onChange:$}),a(e(T),{class:"mt-2",onClick:C,disabled:!d.value},{default:t(()=>[l("Upload")]),_:1},8,["disabled"])]),a(e(ve),null,{default:t(()=>[a(e(ge),null,{default:t(()=>[a(e(z),null,{default:t(()=>[a(e(j),null,{default:t(()=>[l("Name")]),_:1}),a(e(j),null,{default:t(()=>[l("Size")]),_:1}),a(e(j),null,{default:t(()=>[l("Actions")]),_:1})]),_:1})]),_:1}),a(e(he),null,{default:t(()=>[_.value.length?ae("v-if",!0):(v(),A(e(z),{key:0},{default:t(()=>[a(e(E),{colspan:"3"},{default:t(()=>[l("No files found.")]),_:1})]),_:1})),(v(!0),U(L,null,te(_.value,p=>(v(),A(e(z),{class:"cursor-pointer",key:p.name},{default:t(()=>[a(e(E),null,{default:t(()=>[l(F(p.name),1)]),_:2},1024),a(e(E),null,{default:t(()=>[l(F(w(p.size)),1)]),_:2},1024),a(e(E),null,{default:t(()=>[a(e(T),{onClick:N=>S(p),variant:"outline",size:"sm",class:"mr-2"},{default:t(()=>[l("Download")]),_:2},1032,["onClick"]),a(e(T),{onClick:N=>r(p),variant:"outline",size:"sm"},{default:t(()=>[l("Open")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}))}},Ma={__name:"PaginationEllipsis",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(O){const b=O,_=pe(()=>{const{class:d,...h}=b;return h});return(d,h)=>(v(),A(e(la),Ye(_.value,{class:e(Fe)("w-9 h-9 flex items-center justify-center",b.class)}),{default:t(()=>[Qe(d.$slots,"default",{},()=>[a(e(ra))])]),_:3},16,["class"]))}},La={class:"flex justify-between items-center"},qa={class:"mt-4 flex justify-between items-center"},Ra={class:"text-sm text-gray-600"},Ja={class:"grid gap-4 py-4"},Ga={class:"grid grid-cols-4 items-center gap-4"},Ka={class:"grid grid-cols-4 items-center gap-4"},Ha={class:"grid grid-cols-4 items-center gap-4"},Wa={class:"grid grid-cols-4 items-center gap-4"},ce=20,Qa={__name:"AdminSettings",setup(O){const b=x([]),_=x(1),d=x(0),h=x(0),$=x(null),C=x(""),S=x(!1),r=x({});ie(()=>{w(),g()});const w=async()=>{try{let n=me(ee(P,"users"),Ie("userName"),Pe(ce));C.value&&(n=me(n,xe("userName",">=",C.value),xe("userName","<=",C.value+""))),$.value&&_.value>1&&(n=me(n,ze($.value)));const c=await Z(n);b.value=c.docs.map(o=>({uid:o.id,...o.data()})),$.value=c.docs[c.docs.length-1]}catch(n){console.error("Error fetching users:",n),V.error("Failed to fetch users")}},g=async()=>{try{const n=await Z(ee(P,"users"));d.value=n.size,h.value=Math.ceil(d.value/ce)}catch(n){console.error("Error fetching total users:",n),V.error("Failed to fetch total user count")}},k=n=>{_.value=n,w()},p=Se(()=>{_.value=1,$.value=null,w()},300),N=n=>{r.value={...n},S.value=!0},q=async()=>{try{const n=X(P,"users",r.value.uid);await Me(n,{userName:r.value.userName,emailAddress:r.value.emailAddress,firstName:r.value.firstName,lastName:r.value.lastName}),V.success("User updated successfully"),S.value=!1,w()}catch(n){console.error("Error updating user:",n),V.error("Failed to update user")}},H=async n=>{if(confirm(`Are you sure you want to delete the user ${n.userName}?`))try{await ye(X(P,"users",n.uid)),V.success("User deleted successfully"),w(),g()}catch(c){console.error("Error deleting user:",c),V.error("Failed to delete user")}},i=pe(()=>{const n=(_.value-1)*ce+1,c=Math.min(_.value*ce,d.value);return`${n} to ${c} of ${d.value}`}),m=n=>n?n.toDate().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"";return(n,c)=>(v(),U(L,null,[a(e(se),null,{default:t(()=>[a(e(G),null,{default:t(()=>[a(e(K),{class:"text-xl mb-5"},{default:t(()=>[l("User Settings")]),_:1}),f("div",La,[a(e(M),{modelValue:C.value,"onUpdate:modelValue":c[0]||(c[0]=o=>C.value=o),placeholder:"Search users...",class:"max-w-xs",onInput:e(p)},null,8,["modelValue","onInput"]),a(e(T),{onClick:w},{default:t(()=>[l("Refresh")]),_:1})])]),_:1}),a(e(le),null,{default:t(()=>[a(e(ve),{class:"mt-4"},{default:t(()=>[a(e(ge),null,{default:t(()=>[a(e(z),null,{default:t(()=>[a(e(j),null,{default:t(()=>[l("Username")]),_:1}),a(e(j),null,{default:t(()=>[l("User ID")]),_:1}),a(e(j),null,{default:t(()=>[l("Email")]),_:1}),a(e(j),null,{default:t(()=>[l("First Name")]),_:1}),a(e(j),null,{default:t(()=>[l("Last Name")]),_:1}),a(e(j),null,{default:t(()=>[l("Created At")]),_:1}),a(e(j),{class:"text-right"},{default:t(()=>[l("Actions")]),_:1})]),_:1})]),_:1}),a(e(he),null,{default:t(()=>[(v(!0),U(L,null,te(b.value,o=>(v(),A(e(z),{key:o.uid},{default:t(()=>[a(e(E),null,{default:t(()=>[l(F(o.userName),1)]),_:2},1024),a(e(E),null,{default:t(()=>[l(F(o.uid),1)]),_:2},1024),a(e(E),null,{default:t(()=>[l(F(o.emailAddress),1)]),_:2},1024),a(e(E),null,{default:t(()=>[l(F(o.firstName),1)]),_:2},1024),a(e(E),null,{default:t(()=>[l(F(o.lastName),1)]),_:2},1024),a(e(E),null,{default:t(()=>[l(F(m(o.createdAt)),1)]),_:2},1024),a(e(E),{class:"text-right"},{default:t(()=>[a(e(T),{variant:"outline",size:"sm",class:"mr-2",onClick:y=>N(o)},{default:t(()=>[l("Edit")]),_:2},1032,["onClick"]),a(e(T),{variant:"destructive",size:"sm",onClick:y=>H(o)},{default:t(()=>[l("Delete")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1}),f("div",qa,[f("div",Ra,F(i.value),1),a(e(na),{total:h.value,"sibling-count":1,"show-edges":"","default-page":_.value,"onUpdate:page":k},{default:t(({page:o})=>[a(e(sa),{class:"flex items-center gap-1"},{default:t(({items:y})=>[a(e(ca)),a(e(ia)),(v(!0),U(L,null,te(y,(s,u)=>(v(),U(L,null,[s.type==="page"?(v(),A(e(oa),{key:u,value:s.value,"as-child":""},{default:t(()=>[a(e(T),{class:"w-10 h-10 p-0",variant:s.value===o?"default":"outline"},{default:t(()=>[l(F(s.value),1)]),_:2},1032,["variant"])]),_:2},1032,["value"])):(v(),A(e(Ma),{key:s.type,index:u},null,8,["index"]))],64))),256)),a(e(ua)),a(e(da))]),_:2},1024)]),_:1},8,["total","default-page"])]),ae(" Edit User Modal "),a(e(ta),{open:S.value,"onUpdate:open":c[5]||(c[5]=o=>S.value=o)},{default:t(()=>[a(e(Ze),null,{default:t(()=>[a(e(ea),null,{default:t(()=>[a(e(aa),null,{default:t(()=>[l("Edit User")]),_:1})]),_:1}),f("div",Ja,[f("div",Ga,[a(e(J),{for:"username",class:"text-right"},{default:t(()=>[l("Username")]),_:1}),a(e(M),{id:"username",modelValue:r.value.userName,"onUpdate:modelValue":c[1]||(c[1]=o=>r.value.userName=o),class:"col-span-3"},null,8,["modelValue"])]),f("div",Ka,[a(e(J),{for:"email",class:"text-right"},{default:t(()=>[l("Email")]),_:1}),a(e(M),{id:"email",modelValue:r.value.emailAddress,"onUpdate:modelValue":c[2]||(c[2]=o=>r.value.emailAddress=o),class:"col-span-3"},null,8,["modelValue"])]),f("div",Ha,[a(e(J),{for:"firstName",class:"text-right"},{default:t(()=>[l("First Name")]),_:1}),a(e(M),{id:"firstName",modelValue:r.value.firstName,"onUpdate:modelValue":c[3]||(c[3]=o=>r.value.firstName=o),class:"col-span-3"},null,8,["modelValue"])]),f("div",Wa,[a(e(J),{for:"lastName",class:"text-right"},{default:t(()=>[l("Last Name")]),_:1}),a(e(M),{id:"lastName",modelValue:r.value.lastName,"onUpdate:modelValue":c[4]||(c[4]=o=>r.value.lastName=o),class:"col-span-3"},null,8,["modelValue"])])]),a(e(Ee),null,{default:t(()=>[a(e(T),{onClick:q},{default:t(()=>[l("Save changes")]),_:1})]),_:1})]),_:1})]),_:1},8,["open"])],64))}},Ya={class:"flex bg-gray-100 min-h-screen"},Xa={class:"flex-1 p-4 md:p-8 ml-16 transition-all duration-500 ease-in-out"},Za=f("h1",{class:"text-3xl font-bold mb-8"},"Super Admin Dashboard",-1),et={class:"md:hidden"},dl={__name:"SuperAdmin",setup(O){const b=x("excalidraw");return(_,d)=>(v(),U("div",Ya,[a(Ne),f("div",Xa,[Za,a(e(ma),{modelValue:b.value,"onUpdate:modelValue":d[1]||(d[1]=h=>b.value=h),class:"w-full"},{default:t(()=>[f("div",et,[a(e($e),{modelValue:b.value,"onUpdate:modelValue":d[0]||(d[0]=h=>b.value=h)},{default:t(()=>[a(e(Ce),{class:"w-full font-semibold bg-white shadow-lg"},{default:t(()=>[a(e(ke),{placeholder:"Select a tab"})]),_:1}),a(e(De),null,{default:t(()=>[a(e(R),{value:"excalidraw"},{default:t(()=>[l("Excalidraw")]),_:1}),a(e(R),{value:"firestore"},{default:t(()=>[l("Firestore Explorer")]),_:1}),a(e(R),{value:"dbstructure"},{default:t(()=>[l("Database Structure")]),_:1}),a(e(R),{value:"storage"},{default:t(()=>[l("Storage Explorer")]),_:1}),a(e(R),{value:"settings"},{default:t(()=>[l("User Settings")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),a(e(fa),{class:"hidden justify-start md:flex bg-white shadow-lg"},{default:t(()=>[a(e(Q),{class:"hover:shadow-md transition-all duration-300 ease-in-out",value:"excalidraw"},{default:t(()=>[l("Excalidraw")]),_:1}),a(e(Q),{class:"hover:shadow-md transition-all duration-300 ease-in-out",value:"firestore"},{default:t(()=>[l("Firestore Explorer")]),_:1}),a(e(Q),{class:"hover:shadow-md transition-all duration-300 ease-in-out",value:"dbstructure"},{default:t(()=>[l("Database Structure")]),_:1}),a(e(Q),{class:"hover:shadow-md transition-all duration-300 ease-in-out",value:"storage"},{default:t(()=>[l("Storage Explorer")]),_:1}),a(e(Q),{class:"hover:shadow-md transition-all duration-300 ease-in-out",value:"settings"},{default:t(()=>[l("User Settings")]),_:1})]),_:1}),a(e(Y),{value:"excalidraw"},{default:t(()=>[a(Sa)]),_:1}),a(e(Y),{value:"firestore"},{default:t(()=>[a(Ca)]),_:1}),a(e(Y),{value:"dbstructure"},{default:t(()=>[a(Ta)]),_:1}),a(e(Y),{value:"storage"},{default:t(()=>[a(za)]),_:1}),a(e(Y),{value:"settings"},{default:t(()=>[a(Qa)]),_:1})]),_:1},8,["modelValue"])])]))}};export{dl as default};