import{r as m,m as L,aa as M,b as w,d as x,e,J as t,E as o,N as b,u as s,ab as E,M as a}from"./@vue-Cc5W6W03.js";import{c as p,a as g,b as y,d as N,s as $,e as C}from"./index-B_BK-3TZ.js";import{F as n}from"./vue-sonner-tOpOM8Nc.js";import{a as U}from"./vue-router-Yx5yAxkf.js";import"./radix-vue-g1r_MIx6.js";import"./@internationalized-D5LszBdy.js";import"./@swc-BOtJyCjG.js";import"./@floating-ui-rhRhKn_Q.js";import"./class-variance-authority-Bb4qSo10.js";import"./clsx-B-dksMZM.js";import"./tailwind-merge-3VKOpVsw.js";import"./firebase-wUg9X9TS.js";import"./@firebase-7dTA5crF.js";import"./idb-BXWtuYvb.js";import"./tslib-BGVaTf34.js";import"./@heroicons-D7NO6Ex3.js";import"./vuex-F4EPD-zj.js";import"./@unovis-B91CR5fh.js";import"./@emotion-Dz_S_Xyw.js";import"./stylis-YPZU7XtI.js";import"./d3-transition-fhQpLGwb.js";import"./d3-dispatch-kxCwF96_.js";import"./d3-timer-DdKHrDhs.js";import"./d3-interpolate-DY0Cqdkz.js";import"./d3-color-Ceo1QMNe.js";import"./d3-selection-DSeOx27A.js";import"./d3-ease-Ox4sgw_u.js";import"./d3-interpolate-path-CTc7ZuM7.js";import"./striptags-PW3Qp06w.js";import"./@excalidraw-_WJHnpoj.js";import"./react-D1sI5Brr.js";import"./react-dom-9hUPJye5.js";import"./scheduler-CzFDRTuY.js";import"./to-px-DReLD3CO.js";import"./parse-unit-3UrBcP19.js";import"./d3-array-BJvpcdQ_.js";import"./@juggle-C8OzoCMD.js";import"./d3-axis-Cf4shvhW.js";import"./d3-scale-A6k9qkjg.js";import"./internmap-BkD7Hj8s.js";import"./d3-format-CzD4bSOQ.js";import"./d3-time-format-COsUQkot.js";import"./d3-time-B8hJ2rEE.js";import"./d3-shape-D7Hvm6M3.js";import"./d3-path-CimkQT29.js";import"./throttle-debounce-BnOnwhtV.js";import"./embla-carousel-vue-Dcvag-wm.js";import"./embla-carousel-reactive-utils-DkegjUUZ.js";import"./embla-carousel-QtEXB4oT.js";import"./@vueuse-CclTXppY.js";import"./embla-carousel-autoplay-0OO14Ffu.js";import"./@radix-icons-Ce5A0lVI.js";import"./vuex-persistedstate-D4njCX8q.js";import"./maska-Cp-LWreF.js";const j={class:"w-full lg:grid lg:min-h-screen lg:grid-cols-2 h-screen"},B={class:"flex flex-col items-center justify-center py-12 px-4 mx-auto"},D={class:"mx-auto grid w-[350px] gap-6"},F=e("div",{class:"grid gap-2 text-center"},[e("h1",{class:"text-3xl font-bold mb-6"},"Login"),e("p",{class:"text-balance text-muted-foreground"}," Enter your email below to login to your account ")],-1),G={class:"grid gap-2"},P={class:"grid gap-2"},R={class:"flex items-center"},q=e("a",{href:"/forgot-password",class:"ml-auto inline-block text-sm underline"}," Forgot your password? ",-1),z={class:"flex items-center -mt-2"},S=e("div",{class:"mt-4 text-center text-sm"},[a(" Don't have an account? "),e("a",{href:"/signup",class:"underline"}," Sign up ")],-1),T={class:"bg-gray-500 lg:block relative overflow-hidden"},H=["src"],J=["src"],Ae={__name:"Login",setup(W){const _=U(),c=m("https://source.unsplash.com/random/1"),u=m("https://source.unsplash.com/random/2"),d=m(""),f=m(""),h=m(!1),V=()=>{u.value=`https://source.unsplash.com/random/${Date.now()}`;const r=c.value;c.value=u.value,u.value=r};L(()=>{setInterval(V,8e3)});const k=async()=>{try{await $(d.value,f.value),n.success("Login successful!"),_.push("/auth/home")}catch(r){n.error(r.message),r.code==="auth/user-not-found"&&n.error("User not found. Please sign up.")}},I=async()=>{try{await C(),n.success("Login successful!"),_.push("/auth/home")}catch(r){n.error(r.message)}};return(r,i)=>{const v=M("router-link");return w(),x("div",j,[e("div",B,[t(v,{to:"/"},{default:o(()=>[t(s(p),{href:"/",class:"absolute top-2 left-2 z-20"},{default:o(()=>[a("Return Home")]),_:1})]),_:1}),t(v,{to:"/"},{default:o(()=>[t(s(p),{href:"/",class:"absolute top-2 right-2 z-20"},{default:o(()=>[a("Dark Mode")]),_:1})]),_:1}),e("div",D,[F,e("form",{class:"grid gap-4",onSubmit:b(k,["prevent"])},[e("div",G,[t(s(g),{for:"email"},{default:o(()=>[a("Email")]),_:1}),t(s(y),{id:"email",type:"email",placeholder:"example@gmail.com",autocomplete:"email",required:"",modelValue:d.value,"onUpdate:modelValue":i[0]||(i[0]=l=>d.value=l)},null,8,["modelValue"])]),e("div",P,[e("div",R,[t(s(g),{for:"password"},{default:o(()=>[a("Password")]),_:1}),q]),t(s(y),{id:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:"",modelValue:f.value,"onUpdate:modelValue":i[1]||(i[1]=l=>f.value=l)},null,8,["modelValue"])]),e("div",z,[t(s(N),{id:"rememberMe",modelValue:h.value,"onUpdate:modelValue":i[2]||(i[2]=l=>h.value=l)},null,8,["modelValue"]),t(s(g),{for:"rememberMe",class:"ml-2"},{default:o(()=>[a("Remember Me")]),_:1})]),t(s(p),{type:"submit",class:"w-full"},{default:o(()=>[a(" Login ")]),_:1}),t(s(p),{variant:"outline",class:"w-full",onClick:b(I,["prevent"])},{default:o(()=>[a(" Login with Google ")]),_:1})],32),S])]),e("div",T,[t(E,{name:"fade",mode:"in-out","enter-active-class":"transition-opacity duration-1000","leave-active-class":"transition-opacity duration-1000","enter-from-class":"opacity-0","leave-to-class":"opacity-0"},{default:o(()=>[(w(),x("img",{key:c.value,src:c.value,alt:"Current Image",class:"object-cover w-full h-full absolute inset-0"},null,8,H))]),_:1}),e("img",{src:u.value,alt:"Next Image",class:"object-cover w-full h-full absolute inset-0 opacity-0"},null,8,J)])])}}};export{Ae as default};
