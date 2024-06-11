import{r as n,j as L,a7 as M,b as w,d as x,e,H as t,B as o,J as b,u as s,af as $,O as a}from"./@vue-BSHE2yuK.js";import{d,a as g,b as y,e as j,s as B,f as C}from"./index-WFkm80YQ.js";import{F as c}from"./vue-sonner-CQoE1elP.js";import{a as E}from"./vue-router-DSriTXAW.js";import"./radix-vue-DKHK6PbN.js";import"./@floating-ui-DSixA9Tq.js";import"./class-variance-authority-Bb4qSo10.js";import"./clsx-B-dksMZM.js";import"./tailwind-merge-3VKOpVsw.js";import"./firebase-DOHaTocT.js";import"./@firebase-62LYKmkb.js";import"./idb-BXWtuYvb.js";import"./tslib-BGVaTf34.js";import"./@heroicons-9uIU8O1S.js";import"./vuex-BZLwIvC_.js";import"./jspdf-CVWcoUId.js";import"./@babel-BsCcpEdk.js";import"./fflate-Cf-_J6lE.js";import"./embla-carousel-vue-DF501sC4.js";import"./embla-carousel-reactive-utils-DkegjUUZ.js";import"./embla-carousel-CvuiBM5S.js";import"./@vueuse-U_cBpZLs.js";import"./embla-carousel-autoplay-0OO14Ffu.js";import"./@radix-icons-Db0lORsH.js";import"./vuex-persistedstate-D4njCX8q.js";const N={class:"w-full lg:grid lg:min-h-screen lg:grid-cols-2 h-screen"},U={class:"flex flex-col items-center justify-center py-12 px-4 mx-auto"},D={class:"mx-auto grid w-[350px] gap-6"},F=e("div",{class:"grid gap-2 text-center"},[e("h1",{class:"text-3xl font-bold mb-6"},"Login"),e("p",{class:"text-balance text-muted-foreground"}," Enter your email below to login to your account ")],-1),G={class:"grid gap-2"},P={class:"grid gap-2"},R={class:"flex items-center"},q=e("a",{href:"/forgot-password",class:"ml-auto inline-block text-sm underline"}," Forgot your password? ",-1),z={class:"flex items-center -mt-2"},H=e("div",{class:"mt-4 text-center text-sm"},[a(" Don't have an account? "),e("a",{href:"/signup",class:"underline"}," Sign up ")],-1),S={class:"bg-gray-500 lg:block relative overflow-hidden"},T=["src"],J=["src"],ve={__name:"Login",setup(O){const _=E(),u=n("https://source.unsplash.com/random/1"),m=n("https://source.unsplash.com/random/2"),p=n(""),f=n(""),h=n(!1),V=()=>{m.value=`https://source.unsplash.com/random/${Date.now()}`;const l=u.value;u.value=m.value,m.value=l};L(()=>{setInterval(V,8e3)});const k=async()=>{try{await B(p.value,f.value),c.success("Login successful!"),_.push("/auth/home")}catch(l){c.error(l.message),l.code==="auth/user-not-found"&&c.error("User not found. Please sign up.")}},I=async()=>{try{await C(),c.success("Login successful!"),_.push("/auth/home")}catch(l){c.error(l.message)}};return(l,r)=>{const v=M("router-link");return w(),x("div",N,[e("div",U,[t(v,{to:"/"},{default:o(()=>[t(s(d),{href:"/",class:"absolute top-2 left-2 z-20"},{default:o(()=>[a("Return Home")]),_:1})]),_:1}),t(v,{to:"/"},{default:o(()=>[t(s(d),{href:"/",class:"absolute top-2 right-2 z-20"},{default:o(()=>[a("Dark Mode")]),_:1})]),_:1}),e("div",D,[F,e("form",{class:"grid gap-4",onSubmit:b(k,["prevent"])},[e("div",G,[t(s(g),{for:"email"},{default:o(()=>[a("Email")]),_:1}),t(s(y),{id:"email",type:"email",placeholder:"example@gmail.com",autocomplete:"email",required:"",modelValue:p.value,"onUpdate:modelValue":r[0]||(r[0]=i=>p.value=i)},null,8,["modelValue"])]),e("div",P,[e("div",R,[t(s(g),{for:"password"},{default:o(()=>[a("Password")]),_:1}),q]),t(s(y),{id:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:"",modelValue:f.value,"onUpdate:modelValue":r[1]||(r[1]=i=>f.value=i)},null,8,["modelValue"])]),e("div",z,[t(s(j),{modelValue:h.value,"onUpdate:modelValue":r[2]||(r[2]=i=>h.value=i)},null,8,["modelValue"]),t(s(g),{for:"rememberMe",class:"ml-2"},{default:o(()=>[a("Remember Me")]),_:1})]),t(s(d),{type:"submit",class:"w-full"},{default:o(()=>[a(" Login ")]),_:1}),t(s(d),{variant:"outline",class:"w-full",onClick:b(I,["prevent"])},{default:o(()=>[a(" Login with Google ")]),_:1})],32),H])]),e("div",S,[t($,{name:"fade",mode:"in-out","enter-active-class":"transition-opacity duration-1000","leave-active-class":"transition-opacity duration-1000","enter-from-class":"opacity-0","leave-to-class":"opacity-0"},{default:o(()=>[(w(),x("img",{key:u.value,src:u.value,alt:"Current Image",class:"object-cover w-full h-full absolute inset-0"},null,8,T))]),_:1}),e("img",{src:m.value,alt:"Next Image",class:"object-cover w-full h-full absolute inset-0 opacity-0"},null,8,J)])])}}};export{ve as default};