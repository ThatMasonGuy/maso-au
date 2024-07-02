import{_ as B,b as u,a as p,c as V}from"./index-fh3STtDl.js";import{_ as D}from"./Textarea-DOtnrcQZ.js";import{_ as E,a as T,b as N,c,d as j,e as b}from"./TableRow-yn4ap3en.js";import{_ as C,a as S,b as q,c as O}from"./CardContent-tDbV450H.js";import{E as P}from"./jspdf-De3EYt3J.js";import G from"./html2canvas-CBrSDip1.js";import{r as L,c as x,b as g,d as U,J as l,E as n,u as e,M as s,e as r,P as M,T as R,D as J,L as v,ad as Q,ae as W}from"./@vue-DsGlF1-j.js";import"./radix-vue-6Z8x3TUN.js";import"./@internationalized-D5LszBdy.js";import"./@swc-BOtJyCjG.js";import"./@floating-ui-B6PpBHZy.js";import"./class-variance-authority-Bb4qSo10.js";import"./clsx-B-dksMZM.js";import"./tailwind-merge-3VKOpVsw.js";import"./vue-sonner-B2EpXGAv.js";import"./vue-router-CrvMPvpV.js";import"./firebase-BQhzl84B.js";import"./@firebase-CBgXa-9_.js";import"./idb-BXWtuYvb.js";import"./tslib-BGVaTf34.js";import"./@heroicons-DH5_RU0z.js";import"./vuex--kc_uza-.js";import"./@unovis-B16_51NZ.js";import"./@emotion-Dz_S_Xyw.js";import"./stylis-YPZU7XtI.js";import"./d3-transition-fhQpLGwb.js";import"./d3-dispatch-kxCwF96_.js";import"./d3-timer-DdKHrDhs.js";import"./d3-interpolate-DY0Cqdkz.js";import"./d3-color-Ceo1QMNe.js";import"./d3-selection-DSeOx27A.js";import"./d3-ease-Ox4sgw_u.js";import"./d3-interpolate-path-CTc7ZuM7.js";import"./striptags-CDKagow6.js";import"./@vueup-qMjKR5Ws.js";import"./quill-delta-COPIFlMW.js";import"./fast-diff-DNDSwfiB.js";import"./lodash.clonedeep-CrPEM4m0.js";import"./lodash.isequal-CemT60YI.js";import"./to-px-DReLD3CO.js";import"./parse-unit-3UrBcP19.js";import"./d3-array-BJvpcdQ_.js";import"./@juggle-C8OzoCMD.js";import"./d3-axis-Cf4shvhW.js";import"./d3-scale-A6k9qkjg.js";import"./internmap-BkD7Hj8s.js";import"./d3-format-CzD4bSOQ.js";import"./d3-time-format-COsUQkot.js";import"./d3-time-B8hJ2rEE.js";import"./d3-shape-D7Hvm6M3.js";import"./d3-path-CimkQT29.js";import"./throttle-debounce-BnOnwhtV.js";import"./embla-carousel-vue-CXHqejTr.js";import"./embla-carousel-reactive-utils-DkegjUUZ.js";import"./embla-carousel-QtEXB4oT.js";import"./@vueuse-H75eWtDf.js";import"./embla-carousel-autoplay-0OO14Ffu.js";import"./@radix-icons-C7iqcNif.js";import"./vuex-persistedstate-D4njCX8q.js";import"./maska-Cp-LWreF.js";import"./@babel-BsCcpEdk.js";import"./fflate-Cf-_J6lE.js";const f=_=>(Q("data-v-74705bc4"),_=_(),W(),_),Y={class:"bg-gray-300 justify-center w-full min-h-[--adjusted-height] pt-[--header-height]"},z=f(()=>r("div",{class:"absolute top-8 left-8"},[r("div",{class:"w-32 h-32 bg-gray-400 flex items-center justify-center rounded"},[r("span",{class:"text-white text-2xl"},"+")])],-1)),H={class:"flex justify-end mb-6"},K={class:"flex flex-col"},X={class:"flex justify-between mb-6"},Z={class:"flex flex-col w-1/2 pr-6"},ee={class:"flex flex-col w-1/2 pl-6 text-right"},le={class:"mb-6"},oe={class:"mt-6 grid grid-cols-2 gap-6"},ae={class:"text-right"},te={class:"flex justify-between"},ne=f(()=>r("span",null,"Subtotal:",-1)),re={class:"flex justify-between"},se=f(()=>r("span",null,"Tax (10%):",-1)),ue={class:"flex justify-between font-bold"},de=f(()=>r("span",null,"Total:",-1)),ie={class:"mt-6"},me={class:"flex justify-between"},pe={class:"flex flex-col"},ce={class:"flex flex-col text-right"},be=f(()=>r("div",{class:"text-center mt-4 text-green-500 text-2xl font-bold"}," Thank You! ",-1)),ve={class:"mt-6 flex gap-4"},fe={__name:"InvoiceGenerator",setup(_){const t=L({email:"",phone:"",abn:"",clientCompany:"",clientAddress1:"",clientAddress2:"",invoiceNumber:"",invoiceDate:"",workOrder:"",taxEnabled:!0,items:[{description:"",qty:1,rate:0,amount:0}],notes:"",bankName:"",accountNumber:"",bsbNumber:"",accountName:""}),w=d=>{const a=t.value.items[d];a.amount=parseFloat((a.qty*a.rate).toFixed(2))},I=d=>parseFloat((t.value.taxEnabled?d*.1:0).toFixed(2)),k=()=>{t.value.items.push({description:"",qty:1,rate:0,amount:0})},$=()=>{},A=()=>{const d=document.querySelector(".container");G(d).then(a=>{const o=a.toDataURL("image/png"),m=new P;m.addImage(o,"PNG",0,0),m.save("invoice.pdf")})},h=x(()=>t.value.items.reduce((d,a)=>d+a.amount,0)),y=x(()=>parseFloat((t.value.taxEnabled?h.value*.1:0).toFixed(2))),F=x(()=>parseFloat((h.value+y.value).toFixed(2)));return(d,a)=>(g(),U("div",Y,[l(e(O),{class:"relative shadow-lg max-w-4xl h-[1050px] p-6 my-6"},{default:n(()=>[l(e(C),null,{default:n(()=>[l(e(S),{class:"text-2xl w-full text-right font-bold mb-4"},{default:n(()=>[s("INVOICE")]),_:1})]),_:1}),l(e(q),null,{default:n(()=>[z,r("div",H,[r("div",K,[l(e(u),{modelValue:t.value.email,"onUpdate:modelValue":a[0]||(a[0]=o=>t.value.email=o),placeholder:"Email",class:"mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out"},null,8,["modelValue"]),l(e(u),{modelValue:t.value.phone,"onUpdate:modelValue":a[1]||(a[1]=o=>t.value.phone=o),placeholder:"Phone",class:"mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out"},null,8,["modelValue"]),l(e(u),{modelValue:t.value.abn,"onUpdate:modelValue":a[2]||(a[2]=o=>t.value.abn=o),placeholder:"ABN",class:"border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out"},null,8,["modelValue"])])]),r("div",X,[r("div",Z,[l(e(p),null,{default:n(()=>[s("Bill to:")]),_:1}),l(e(u),{modelValue:t.value.clientCompany,"onUpdate:modelValue":a[3]||(a[3]=o=>t.value.clientCompany=o),placeholder:"Company name",class:"mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out"},null,8,["modelValue"]),l(e(u),{modelValue:t.value.clientAddress1,"onUpdate:modelValue":a[4]||(a[4]=o=>t.value.clientAddress1=o),placeholder:"Address line 1",class:"mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out"},null,8,["modelValue"]),l(e(u),{modelValue:t.value.clientAddress2,"onUpdate:modelValue":a[5]||(a[5]=o=>t.value.clientAddress2=o),placeholder:"Address line 2",class:"border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out"},null,8,["modelValue"])]),r("div",ee,[l(e(u),{modelValue:t.value.invoiceNumber,"onUpdate:modelValue":a[6]||(a[6]=o=>t.value.invoiceNumber=o),placeholder:"Invoice #",class:"mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out"},null,8,["modelValue"]),l(e(u),{modelValue:t.value.invoiceDate,"onUpdate:modelValue":a[7]||(a[7]=o=>t.value.invoiceDate=o),placeholder:"Invoice Date",class:"mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out"},null,8,["modelValue"]),l(e(u),{modelValue:t.value.workOrder,"onUpdate:modelValue":a[8]||(a[8]=o=>t.value.workOrder=o),placeholder:"Work Order",class:"border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out"},null,8,["modelValue"])])]),r("div",le,[l(e(E),{class:"w-full"},{default:n(()=>[l(e(T),null,{default:n(()=>[l(e(N),null,{default:n(()=>[l(e(c),null,{default:n(()=>[s("Item Description")]),_:1}),l(e(c),null,{default:n(()=>[s("Qty.")]),_:1}),l(e(c),null,{default:n(()=>[s("Rate")]),_:1}),l(e(c),null,{default:n(()=>[s("Tax")]),_:1}),l(e(c),null,{default:n(()=>[s("Total")]),_:1})]),_:1})]),_:1}),l(e(j),null,{default:n(()=>[(g(!0),U(M,null,R(t.value.items,(o,m)=>(g(),J(e(N),{key:m},{default:n(()=>[l(e(b),null,{default:n(()=>[l(e(u),{modelValue:o.description,"onUpdate:modelValue":i=>o.description=i,placeholder:"Enter item name/description",class:"border-gray-300 focus:ring-2 focus:ring-blue-500"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),l(e(b),null,{default:n(()=>[l(e(u),{type:"number",modelValue:o.qty,"onUpdate:modelValue":i=>o.qty=i,modelModifiers:{number:!0},onInput:i=>w(m),placeholder:"0",class:"border-gray-300 focus:ring-2 focus:ring-blue-500"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:2},1024),l(e(b),null,{default:n(()=>[l(e(u),{type:"number",modelValue:o.rate,"onUpdate:modelValue":i=>o.rate=i,modelModifiers:{number:!0},onInput:i=>w(m),placeholder:"0.00",class:"border-gray-300 focus:ring-2 focus:ring-blue-500"},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:2},1024),l(e(b),null,{default:n(()=>[s(v(t.value.taxEnabled?I(o.amount):0),1)]),_:2},1024),l(e(b),null,{default:n(()=>[s(v(o.amount.toFixed(2)),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),l(e(V),{onClick:k,class:"mt-4 bg-blue-500 text-white hover:bg-blue-600"},{default:n(()=>[s("New line")]),_:1})]),r("div",oe,[r("div",null,[l(e(p),null,{default:n(()=>[s("Notes:")]),_:1}),l(e(D),{modelValue:t.value.notes,"onUpdate:modelValue":a[9]||(a[9]=o=>t.value.notes=o),placeholder:"It was great doing business with you.",class:"border-gray-300 focus:ring-2 focus:ring-blue-500"},null,8,["modelValue"])]),r("div",ae,[r("div",te,[ne,r("span",null,v(h.value.toFixed(2)),1)]),r("div",re,[se,r("span",null,v(y.value.toFixed(2)),1)]),r("div",ue,[de,r("span",null,v(F.value.toFixed(2)),1)])])]),r("div",ie,[r("div",me,[r("div",pe,[l(e(p),null,{default:n(()=>[s("Bank name:")]),_:1}),l(e(u),{modelValue:t.value.bankName,"onUpdate:modelValue":a[10]||(a[10]=o=>t.value.bankName=o),placeholder:"Bank name",class:"mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out"},null,8,["modelValue"]),l(e(p),null,{default:n(()=>[s("Account number:")]),_:1}),l(e(u),{modelValue:t.value.accountNumber,"onUpdate:modelValue":a[11]||(a[11]=o=>t.value.accountNumber=o),placeholder:"Account number",class:"mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out"},null,8,["modelValue"])]),r("div",ce,[l(e(p),null,{default:n(()=>[s("BSB number:")]),_:1}),l(e(u),{modelValue:t.value.bsbNumber,"onUpdate:modelValue":a[12]||(a[12]=o=>t.value.bsbNumber=o),placeholder:"BSB number",class:"mb-2 border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out"},null,8,["modelValue"]),l(e(p),null,{default:n(()=>[s("Account name:")]),_:1}),l(e(u),{modelValue:t.value.accountName,"onUpdate:modelValue":a[13]||(a[13]=o=>t.value.accountName=o),placeholder:"Account name",class:"border-transparent shadow-none hover:border-blue-400 transition-all duration-300 ease-in-out"},null,8,["modelValue"])])]),be]),r("div",ve,[l(e(V),{onClick:$,class:"bg-green-500 text-white hover:bg-green-600"},{default:n(()=>[s("Save online")]),_:1}),l(e(V),{onClick:A,class:"bg-blue-500 text-white hover:bg-blue-600"},{default:n(()=>[s("Download/Print")]),_:1})])]),_:1})]),_:1})]))}},Ul=B(fe,[["__scopeId","data-v-74705bc4"]]);export{Ul as default};
