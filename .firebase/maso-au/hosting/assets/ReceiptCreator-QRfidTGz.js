import{r as u,b as f,d as c,J as e,e as l,N as _,E as a,u as t,M as m}from"./@vue-DsGlF1-j.js";import{F as v}from"./vue-sonner-B2EpXGAv.js";import{_ as y}from"./AccountingSidebar-pKQpwrKS.js";import{a as p,b as d,c as V}from"./index-fh3STtDl.js";import{_ as b,a as h,b as g,c as s,d as N}from"./SelectScrollDownButton-BK2d6S2D.js";import{_ as x}from"./Textarea-DOtnrcQZ.js";import"./TooltipTrigger-Bqh97bnl.js";import"./radix-vue-6Z8x3TUN.js";import"./@internationalized-D5LszBdy.js";import"./@swc-BOtJyCjG.js";import"./@floating-ui-B6PpBHZy.js";import"./@heroicons-DH5_RU0z.js";import"./class-variance-authority-Bb4qSo10.js";import"./clsx-B-dksMZM.js";import"./tailwind-merge-3VKOpVsw.js";import"./vue-router-CrvMPvpV.js";import"./firebase-BQhzl84B.js";import"./@firebase-CBgXa-9_.js";import"./idb-BXWtuYvb.js";import"./tslib-BGVaTf34.js";import"./vuex--kc_uza-.js";import"./@unovis-B16_51NZ.js";import"./@emotion-Dz_S_Xyw.js";import"./stylis-YPZU7XtI.js";import"./d3-transition-fhQpLGwb.js";import"./d3-dispatch-kxCwF96_.js";import"./d3-timer-DdKHrDhs.js";import"./d3-interpolate-DY0Cqdkz.js";import"./d3-color-Ceo1QMNe.js";import"./d3-selection-DSeOx27A.js";import"./d3-ease-Ox4sgw_u.js";import"./d3-interpolate-path-CTc7ZuM7.js";import"./striptags-CDKagow6.js";import"./@vueup-qMjKR5Ws.js";import"./quill-delta-COPIFlMW.js";import"./fast-diff-DNDSwfiB.js";import"./lodash.clonedeep-CrPEM4m0.js";import"./lodash.isequal-CemT60YI.js";import"./to-px-DReLD3CO.js";import"./parse-unit-3UrBcP19.js";import"./d3-array-BJvpcdQ_.js";import"./@juggle-C8OzoCMD.js";import"./d3-axis-Cf4shvhW.js";import"./d3-scale-A6k9qkjg.js";import"./internmap-BkD7Hj8s.js";import"./d3-format-CzD4bSOQ.js";import"./d3-time-format-COsUQkot.js";import"./d3-time-B8hJ2rEE.js";import"./d3-shape-D7Hvm6M3.js";import"./d3-path-CimkQT29.js";import"./throttle-debounce-BnOnwhtV.js";import"./embla-carousel-vue-CXHqejTr.js";import"./embla-carousel-reactive-utils-DkegjUUZ.js";import"./embla-carousel-QtEXB4oT.js";import"./@vueuse-H75eWtDf.js";import"./embla-carousel-autoplay-0OO14Ffu.js";import"./@radix-icons-C7iqcNif.js";import"./vuex-persistedstate-D4njCX8q.js";import"./maska-Cp-LWreF.js";const $={class:"bg-gray-100 min-h-screen flex ml-16"},M={class:"flex-1 p-8"},w=l("h1",{class:"text-3xl font-bold mb-8"},"Create Receipt",-1),C={class:"grid grid-cols-2 gap-4"},R={class:"grid grid-cols-2 gap-4"},U={class:"flex justify-end"},Fe={__name:"ReceiptCreator",setup(k){const o=u({receiptNumber:"R-"+Date.now(),date:new Date().toISOString().split("T")[0],payer:"",description:"",amount:0,paymentMethod:"",notes:""}),n=()=>{console.log("Saving receipt:",o.value),v.success("Receipt saved successfully")};return(S,r)=>(f(),c("div",$,[e(y,{class:"shadow-2xl"}),l("div",M,[w,l("form",{onSubmit:_(n,["prevent"]),class:"space-y-6 bg-white shadow-md rounded-lg p-6"},[l("div",C,[l("div",null,[e(t(p),{for:"receiptNumber"},{default:a(()=>[m("Receipt Number")]),_:1}),e(t(d),{id:"receiptNumber",modelValue:o.value.receiptNumber,"onUpdate:modelValue":r[0]||(r[0]=i=>o.value.receiptNumber=i),readonly:""},null,8,["modelValue"])]),l("div",null,[e(t(p),{for:"date"},{default:a(()=>[m("Date")]),_:1}),e(t(d),{id:"date",type:"date",modelValue:o.value.date,"onUpdate:modelValue":r[1]||(r[1]=i=>o.value.date=i)},null,8,["modelValue"])])]),l("div",null,[e(t(p),{for:"payer"},{default:a(()=>[m("Payer")]),_:1}),e(t(d),{id:"payer",modelValue:o.value.payer,"onUpdate:modelValue":r[2]||(r[2]=i=>o.value.payer=i),placeholder:"Enter payer name or company"},null,8,["modelValue"])]),l("div",null,[e(t(p),{for:"description"},{default:a(()=>[m("Description")]),_:1}),e(t(d),{id:"description",modelValue:o.value.description,"onUpdate:modelValue":r[3]||(r[3]=i=>o.value.description=i),placeholder:"Enter payment description"},null,8,["modelValue"])]),l("div",R,[l("div",null,[e(t(p),{for:"amount"},{default:a(()=>[m("Amount")]),_:1}),e(t(d),{id:"amount",type:"number",modelValue:o.value.amount,"onUpdate:modelValue":r[4]||(r[4]=i=>o.value.amount=i),modelModifiers:{number:!0},step:"0.01"},null,8,["modelValue"])]),l("div",null,[e(t(p),{for:"paymentMethod"},{default:a(()=>[m("Payment Method")]),_:1}),e(t(N),{modelValue:o.value.paymentMethod,"onUpdate:modelValue":r[5]||(r[5]=i=>o.value.paymentMethod=i)},{default:a(()=>[e(t(b),{id:"paymentMethod"},{default:a(()=>[e(t(h),{placeholder:"Select payment method"})]),_:1}),e(t(g),null,{default:a(()=>[e(t(s),{value:"cash"},{default:a(()=>[m("Cash")]),_:1}),e(t(s),{value:"creditCard"},{default:a(()=>[m("Credit Card")]),_:1}),e(t(s),{value:"bankTransfer"},{default:a(()=>[m("Bank Transfer")]),_:1}),e(t(s),{value:"check"},{default:a(()=>[m("Check")]),_:1})]),_:1})]),_:1},8,["modelValue"])])]),l("div",null,[e(t(p),{for:"notes"},{default:a(()=>[m("Additional Notes")]),_:1}),e(t(x),{id:"notes",modelValue:o.value.notes,"onUpdate:modelValue":r[6]||(r[6]=i=>o.value.notes=i),rows:"3"},null,8,["modelValue"])]),l("div",U,[e(t(V),{type:"submit"},{default:a(()=>[m("Save Receipt")]),_:1})])],32)])]))}};export{Fe as default};