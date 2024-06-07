const __vite__fileDeps=["assets/About-DatYCxQd.js","assets/@vue-CggBly_Q.js","assets/radix-vue-BH5BXNPk.js","assets/@floating-ui-Bx-9wRsN.js","assets/class-variance-authority-Bb4qSo10.js","assets/clsx-B-dksMZM.js","assets/tailwind-merge-3VKOpVsw.js","assets/vaul-vue-H4ZVHYe6.js","assets/vue-sonner-ClEJ3d5N.js","assets/vue-router-DtMHBB6X.js","assets/@heroicons-DUWEU5Xr.js","assets/@firebase-DkCrMZ0w.js","assets/idb-BXWtuYvb.js","assets/tslib-BGVaTf34.js","assets/firebase-BfrZvKqU.js","assets/jspdf-CVWcoUId.js","assets/@babel-BsCcpEdk.js","assets/fflate-Cf-_J6lE.js","assets/@vueuse-Ce_WHB-y.js","assets/@radix-icons-BiHLxEe6.js","assets/vuex-8-XCUVMt.js","assets/vuex-persistedstate-D4njCX8q.js","assets/Contact-FVq_WdfO.js","assets/Websites-D_azL2zE.js","assets/Login-DW-dZGQW.js","assets/SignUp-na4dxgmS.js","assets/axios-B4uVmeYG.js","assets/Protected-DSJNUrCd.js","assets/Portfolio-BuGchKSW.js","assets/moment-C5S46NFB.js","assets/Demo_LCC_PowerApps-BavVQfKq.js","assets/Demo_LMS_PowerApps-2Dja-baT.js","assets/Demo_LMS_Webapp-vFSnti5S.js","assets/authHome-sBrUB6_C.js","assets/authHome-B_SY1GJM.css","assets/Page404-CW-wwQG4.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{b as i,q as x,v as l,x as C,a5 as h,u as g,A as B,B as ee,C as te,c as H,D as a,R as oe,a7 as se,d as b,V as ae,r as A,z as V,w as re,a8 as p,e as s,O as z,K as c,E as y,a9 as le,aa as ne,H as W,ab as T,F as ie,G as ce,I as U,ac as ue}from"./@vue-CggBly_Q.js";import{O as de,t as fe,a as pe,n as me,x as ge,l as _e,o as he,k as be}from"./radix-vue-BH5BXNPk.js";import{c as Y}from"./class-variance-authority-Bb4qSo10.js";import{c as xe}from"./clsx-B-dksMZM.js";import{t as ve}from"./tailwind-merge-3VKOpVsw.js";import"./vaul-vue-H4ZVHYe6.js";import{L as ye,F as O}from"./vue-sonner-ClEJ3d5N.js";import{u as K,a as E,c as we,b as ke}from"./vue-router-DtMHBB6X.js";import{r as Ae,a as qe,b as Pe}from"./@heroicons-DUWEU5Xr.js";import{i as Ce,s as Me,g as $e,a as Q,b as De,c as Se,d as Oe,e as Be,o as Le,f as Ie,h as S,j as I,u as He}from"./@firebase-DkCrMZ0w.js";import"./firebase-BfrZvKqU.js";import{_ as v}from"./jspdf-CVWcoUId.js";import{u as Ve}from"./@vueuse-Ce_WHB-y.js";import{r as Te}from"./@radix-icons-BiHLxEe6.js";import{c as Ee}from"./vuex-8-XCUVMt.js";import{a as Ne}from"./vuex-persistedstate-D4njCX8q.js";import"./@floating-ui-Bx-9wRsN.js";import"./idb-BXWtuYvb.js";import"./tslib-BGVaTf34.js";import"./@babel-BsCcpEdk.js";import"./fflate-Cf-_J6lE.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function r(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerPolicy&&(d.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?d.credentials="include":n.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(n){if(n.ep)return;n.ep=!0;const d=r(n);fetch(n.href,d)}})();function M(...o){return ve(xe(o))}const $={__name:"Button",props:{variant:{type:null,required:!1},size:{type:null,required:!1},class:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(o){const e=o;return(r,t)=>(i(),x(g(de),{as:o.as,"as-child":o.asChild,class:h(g(M)(g(Re)({variant:o.variant,size:o.size}),e.class))},{default:l(()=>[C(r.$slots,"default")]),_:3},8,["as","as-child","class"]))}},Re=Y("inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary-foreground underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",xs:"h-7 rounded px-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),N={__name:"Avatar",props:{class:{type:null,required:!1},size:{type:null,required:!1,default:"sm"},shape:{type:null,required:!1,default:"circle"}},setup(o){const e=o;return(r,t)=>(i(),x(g(fe),{class:h(g(M)(g(je)({size:o.size,shape:o.shape}),e.class))},{default:l(()=>[C(r.$slots,"default")]),_:3},8,["class"]))}},R={__name:"AvatarImage",props:{src:{type:String,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(o){const e=o;return(r,t)=>(i(),x(g(pe),B(e,{class:"h-full w-full object-cover"}),null,16))}},j={__name:"AvatarFallback",props:{delayMs:{type:Number,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(o){const e=o;return(r,t)=>(i(),x(g(me),ee(te(e)),{default:l(()=>[C(r.$slots,"default")]),_:3},16))}},je=Y("inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",{variants:{size:{sm:"h-10 w-10 text-xs",base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl"},shape:{circle:"rounded-full",square:"rounded-md"}}}),Ge={__name:"Checkbox",props:{defaultChecked:{type:Boolean,required:!1},checked:{type:[Boolean,String],required:!1},disabled:{type:Boolean,required:!1},required:{type:Boolean,required:!1},name:{type:String,required:!1},value:{type:String,required:!1},id:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["update:checked"],setup(o,{emit:e}){const r=o,t=e,n=H(()=>{const{class:u,...f}=r;return f}),d=ge(n,t);return(u,f)=>(i(),x(g(he),B(g(d),{class:g(M)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",r.class)}),{default:l(()=>[a(g(_e),{class:"flex h-full w-full items-center justify-center text-current"},{default:l(()=>[C(u.$slots,"default",{},()=>[a(g(Te),{class:"h-4 w-4"})])]),_:3})]),_:3},16,["class"]))}},G={__name:"Label",props:{for:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(o){const e=o,r=H(()=>{const{class:t,...n}=e;return n});return(t,n)=>(i(),x(g(be),B(r.value,{class:g(M)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",e.class)}),{default:l(()=>[C(t.$slots,"default")]),_:3},16,["class"]))}},Fe={__name:"Input",props:{defaultValue:{type:[String,Number],required:!1},modelValue:{type:[String,Number],required:!1},class:{type:null,required:!1}},emits:["update:modelValue"],setup(o,{emit:e}){const r=o,n=Ve(r,"modelValue",e,{passive:!0,defaultValue:r.defaultValue});return(d,u)=>oe((i(),b("input",{"onUpdate:modelValue":u[0]||(u[0]=f=>ae(n)?n.value=f:null),class:h(g(M)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",r.class))},null,2)),[[se,g(n)]])}},We={__name:"Sonner",props:{invert:{type:Boolean,required:!1},theme:{type:String,required:!1},position:{type:String,required:!1},hotkey:{type:Array,required:!1},richColors:{type:Boolean,required:!1},expand:{type:Boolean,required:!1},duration:{type:Number,required:!1},gap:{type:Number,required:!1},visibleToasts:{type:Number,required:!1},closeButton:{type:Boolean,required:!1},toastOptions:{type:Object,required:!1},class:{type:String,required:!1},style:{type:Object,required:!1},offset:{type:[String,Number],required:!1},dir:{type:String,required:!1},icons:{type:Object,required:!1},containerAriaLabel:{type:String,required:!1},pauseWhenPageIsHidden:{type:Boolean,required:!1},cn:{type:Function,required:!1}},setup(o){const e=o;return(r,t)=>(i(),x(g(ye),B({class:"toaster group"},e,{"toast-options":{classes:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}}}),null,16))}},Ue="/assets/favicon-B9NSDGv9.jpg",w=(o,e)=>{const r=o.__vccOpts||o;for(const[t,n]of e)r[t]=n;return r},ze={components:{Button:$,Avatar:N,AvatarFallback:j,AvatarImage:R,UserCircleIcon:Ae},setup(){const o=K(),e=A(!1),r=()=>{e.value=!e.value},t=H(()=>o.meta&&o.meta.title||"Default Title");return V(()=>{O.success(`Welcome to ${t.value}`)}),re(()=>o.path,n=>{O.success(`Transitioned to ${t.value}`)}),{currentPageTitle:t,isMenuOpen:e,toggleMenu:r}}},J=o=>(le("data-v-ab81a472"),o=o(),ne(),o),Ye={class:"fixed top-0 z-50 backdrop-blur-lg bg-white/10 text-black shadow-2xl flex items-center sm:py-3 px-4 h-20 sm:h-[--header-height] w-screen"},Ke={class:"w-full"},Qe={class:"flex items-center justify-between w-full"},Je={class:"flex items-center"},Xe={class:"sm:text-3xl text-2xl font-bold absolute sm:ml-16 ml-14 text-[--text-50] drop-shadow-[0_5px_30px_rgba(255,255,255,0.35)]"},Ze=J(()=>s("svg",{class:"w-8 h-8 text-[--text-50]",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1)),et=[Ze],tt={class:"hidden sm:flex text-md lg:text-xl items-center font-bold text-[--text-50]"},ot={class:"sm:mx-1 my-2 sm:my-0"},st={class:"sm:mx-1 my-2 sm:my-0"},at={class:"sm:mx-1 my-2 sm:my-0"},rt={class:"sm:mx-1 my-2 sm:my-0"},lt={class:"sm:mx-1 my-2 sm:my-0"},nt={class:"flex items-center justify-between p-6 bg-[--background-800] h-20"},it=J(()=>s("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)),ct=[it],ut={class:"flex flex-col text-2xl items-start font-bold text-[--text-50] space-y-8 mt-8 px-2"};function dt(o,e,r,t,n,d){const u=p("Button"),f=p("router-link"),m=p("UserCircleIcon"),_=p("AvatarFallback"),q=p("Avatar");return i(),b("header",Ye,[s("nav",Ke,[s("div",Qe,[s("div",Je,[s("img",{src:Ue,alt:"Logo image",class:"sm:h-12 h-10 sm:w-12 w-10 object-cover cursor-pointer rounded-full shadow-xl",onClick:e[0]||(e[0]=k=>o.$router.push("/"))}),s("span",Xe,z(t.currentPageTitle),1)]),s("button",{onClick:e[1]||(e[1]=(...k)=>t.toggleMenu&&t.toggleMenu(...k)),class:"sm:hidden focus:outline-none"},et),s("ul",tt,[s("li",ot,[a(f,{to:{path:"/home"}},{default:l(()=>[a(u,{variant:"link",class:h([{underline:t.currentPageTitle==="Home"},"px-1 lg:px-2"])},{default:l(()=>[c("Home")]),_:1},8,["class"])]),_:1})]),s("li",st,[a(f,{to:{path:"/contact"}},{default:l(()=>[a(u,{variant:"link",class:h([{underline:t.currentPageTitle==="Contact"},"px-1 lg:px-2"])},{default:l(()=>[c("Contact")]),_:1},8,["class"])]),_:1})]),s("li",at,[a(f,{to:{path:"/portfolio"}},{default:l(()=>[a(u,{variant:"link",class:h([{underline:t.currentPageTitle==="Portfolio"},"px-1 lg:px-2"])},{default:l(()=>[c("Portfolio")]),_:1},8,["class"])]),_:1})]),s("li",rt,[a(f,{to:{path:"/websites"}},{default:l(()=>[a(u,{variant:"link",class:h([{underline:t.currentPageTitle==="Websites"},"mr-4 px-1 lg:px-2"])},{default:l(()=>[c("Websites")]),_:1},8,["class"])]),_:1})]),s("li",lt,[a(f,{to:{path:"/login"}},{default:l(()=>[a(q,{class:"h-10 w-10"},{default:l(()=>[a(_,null,{default:l(()=>[a(m,{class:"h-8 w-8"})]),_:1})]),_:1})]),_:1})])])])]),t.isMenuOpen?(i(),b("div",{key:0,class:"fixed inset-0 bg-gray-700 bg-opacity-50 z-40 h-screen",onClick:e[2]||(e[2]=(...k)=>t.toggleMenu&&t.toggleMenu(...k))})):y("v-if",!0),t.isMenuOpen?(i(),b("div",{key:1,class:h(["fixed z-[9999] top-0 right-0 h-screen bg-[--background-700] shadow-lg transform transition-transform duration-300 ease-in-out w-4/5",{"translate-x-full":!t.isMenuOpen,"translate-x-0":t.isMenuOpen}])},[s("div",nt,[s("button",{onClick:e[3]||(e[3]=(...k)=>t.toggleMenu&&t.toggleMenu(...k)),class:"text-black focus:outline-none"},ct),a(f,{to:"/login",onClick:t.toggleMenu},{default:l(()=>[a(q,{class:"h-10 w-10"},{default:l(()=>[a(_,null,{default:l(()=>[a(m,{class:"h-8 w-8"})]),_:1})]),_:1})]),_:1},8,["onClick"])]),s("ul",ut,[s("li",null,[a(f,{to:"/home",onClick:t.toggleMenu},{default:l(()=>[a(u,{variant:"link",class:h({underline:t.currentPageTitle==="Home"})},{default:l(()=>[c("Home")]),_:1},8,["class"])]),_:1},8,["onClick"])]),s("li",null,[a(f,{to:"/contact",onClick:t.toggleMenu},{default:l(()=>[a(u,{variant:"link",class:h({underline:t.currentPageTitle==="Contact"})},{default:l(()=>[c("Contact")]),_:1},8,["class"])]),_:1},8,["onClick"])]),s("li",null,[a(f,{to:"/portfolio",onClick:t.toggleMenu},{default:l(()=>[a(u,{variant:"link",class:h({underline:t.currentPageTitle==="Portfolio"})},{default:l(()=>[c("Portfolio")]),_:1},8,["class"])]),_:1},8,["onClick"])]),s("li",null,[a(f,{to:"/websites",onClick:t.toggleMenu},{default:l(()=>[a(u,{variant:"link",class:h({underline:t.currentPageTitle==="Websites"})},{default:l(()=>[c("Websites")]),_:1},8,["class"])]),_:1},8,["onClick"])])])],2)):y("v-if",!0)])}const ft=w(ze,[["render",dt],["__scopeId","data-v-ab81a472"]]),pt={apiKey:"AIzaSyBOI-UrNeKCWryN01GflbncbJDVZl2hrEE",authDomain:"maso-au.firebaseapp.com",databaseURL:"https://maso-au-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"maso-au",storageBucket:"maso-au.appspot.com",messagingSenderId:"888141867225",appId:"1:888141867225:web:8b9e99ec26456f034af6c8",measurementId:"G-18X1GQKWHY"},D=Ce(pt);Me("warning");$e(D);const L=Q(D),mt=De(D),gt=Se(D);Oe(D);const _t={components:{Cog8ToothIcon:qe,QuestionMarkCircleIcon:Pe},setup(){const o=A(0),e=Be(gt,"websiteViews"),r=E();function t(){r.push("/settings")}return Le(e,n=>{const d=n.val();o.value=d||0}),V(()=>{Ie(e,d=>(d||0)+1).catch(d=>{console.error("Error updating view count:",d)})}),{viewCount:o,showSettings:t}}},ht={class:"bg-gray-800 text-gray-100 text-sm sm:text-md bottom-0 left-0 z-[999] flex justify-between items-center w-full p-4 drop-shadow-2xl h-[--footer-height]"},bt=s("p",{class:"pr-4"},"© 2024 Mason Bartholomai. All rights reserved.",-1),xt={class:"mr-2 flex items-center"},vt={class:"mr-4"};function yt(o,e,r,t,n,d){return i(),b("footer",ht,[bt,s("div",xt,[s("p",vt,"Website Views: "+z(t.viewCount),1),(i(),x(W("Cog8ToothIcon"),{class:"w-6 h-6 inline-block mr-2 cursor-pointer",onClick:t.showSettings},null,8,["onClick"])),(i(),x(W("QuestionMarkCircleIcon"),{class:"w-6 h-6 inline-block cursor-pointer"}))])])}const wt=w(_t,[["render",yt]]),kt={components:{Header:ft,Footer:wt,Toaster:We}},At={id:"app",class:"flex flex-col"},qt=s("div",{clas:"flex-grow"},null,-1);function Pt(o,e,r,t,n,d){const u=p("Toaster"),f=p("Header"),m=p("router-view"),_=p("Footer");return i(),b("div",At,[a(u,{position:"bottom-right",richColors:""}),o.$route.meta.requiresOverlay?(i(),x(f,{key:0})):y("v-if",!0),a(m,{class:h(["flex",{"pt-[--header-height]":o.$route.meta.requiresOverlay}])},null,8,["class"]),qt,o.$route.meta.requiresOverlay?(i(),x(_,{key:1})):y("v-if",!0)])}const Ct=w(kt,[["render",Pt]]),Mt={},$t={class:"flex-grow h-full ml-64 p-10"},Dt=T('<h2 class="text-2xl font-bold mb-6">About</h2><div class="space-y-4"><p>Welcome to our application! We are dedicated to providing the best user experience and innovative features to our users.</p><p>Our team consists of passionate developers, designers, and specialists who work tirelessly to deliver a high-quality product.</p><h3 class="text-xl font-bold">Our Mission</h3><p>Our mission is to empower users with the tools and resources they need to achieve their goals and streamline their workflows.</p><h3 class="text-xl font-bold">Contact Us</h3><ul class="list-disc pl-6 space-y-2"><li>Email: info@example.com</li><li>Phone: +1 (123) 456-7890</li><li>Address: 123 Main Street, City, Country</li></ul></div>',2),St=[Dt];function Ot(o,e){return i(),b("div",$t,St)}const Bt=w(Mt,[["render",Ot]]),Lt={components:{Avatar:N,AvatarFallback:j,AvatarImage:R,Label:G,Input:Fe,Button:$},setup(){return{}}},It={class:"flex-grow h-full ml-64 p-10"},Ht={class:"flex justify-center items-center flex-col"},Vt={class:"space-y-6 w-full max-w-lg mt-8"},Tt={class:"grid grid-cols-2 gap-6"};function Et(o,e,r,t,n,d){const u=p("AvatarFallback"),f=p("Avatar"),m=p("Label"),_=p("Input"),q=p("Button");return i(),b("div",It,[s("div",Ht,[a(f,{class:"avatar w-48 h-48 flex items-center justify-center overflow-hidden drop-shadow-lg"},{default:l(()=>[a(u,{class:"text-4xl"})]),_:1}),s("form",Vt,[s("div",Tt,[s("div",null,[a(m,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("First Name:")]),_:1}),a(_,{type:"text",class:"bg-gray-500 rounded p-2 w-full"})]),s("div",null,[a(m,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("Last Name:")]),_:1}),a(_,{type:"text",class:"bg-gray-500 rounded p-2 w-full"})])]),s("div",null,[a(m,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("Email Address:")]),_:1}),a(_,{type:"email",class:"bg-gray-500 rounded p-2 w-full"})]),s("div",null,[a(m,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("Phone Number:")]),_:1}),a(_,{type:"phone",class:"bg-gray-500 rounded p-2 w-full"})]),s("div",null,[a(m,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("Date of Birth:")]),_:1}),a(_,{type:"date",class:"bg-gray-500 rounded p-2 w-full"})]),s("div",null,[a(m,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("Old Password:")]),_:1}),a(_,{type:"password",class:"bg-gray-500 rounded p-2 w-full"})]),s("div",null,[a(m,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("New Password:")]),_:1}),a(_,{type:"password",class:"bg-gray-500 rounded p-2 w-full"})]),s("div",null,[a(m,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("Confirm New Password:")]),_:1}),a(_,{type:"password",class:"bg-gray-500 rounded p-2 w-full"})]),a(q,{type:"submit",class:"bg-yellow-500 text-black p-3 rounded w-full"},{default:l(()=>[c("Update Profile")]),_:1})])])])}const Nt=w(Lt,[["render",Et]]),Rt={components:{Label:G,Button:$,Checkbox:Ge},setup(){const o=A(!0),e=A(!0);return{pushNotifications:o,emailNotifications:e}}},jt={class:"flex-grow h-full ml-64 p-10"},Gt=s("h2",{class:"text-2xl font-bold mb-6"},"Settings",-1),Ft={class:"space-y-6"},Wt=s("select",{class:"bg-gray-500 rounded p-2 w-full"},[s("option",{value:"en"},"English"),s("option",{value:"es"},"Spanish"),s("option",{value:"fr"},"French")],-1),Ut=T('<div class="flex items-center space-x-4"><label class="inline-flex items-center"><input type="radio" name="theme" value="light" class="form-radio bg-gray-500"><span class="ml-2">Light</span></label><label class="inline-flex items-center"><input type="radio" name="theme" value="dark" class="form-radio bg-gray-500"><span class="ml-2">Dark</span></label></div>',1),zt={class:"flex items-center space-x-2 mt-3"},Yt=s("label",{for:"emailNotifications",class:"mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"}," Email Notifications ",-1),Kt=s("label",{for:"pushNotifications",class:"mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"}," Push Notifications ",-1);function Qt(o,e,r,t,n,d){const u=p("Label"),f=p("Checkbox"),m=p("Button");return i(),b("div",jt,[Gt,s("div",Ft,[s("div",null,[a(u,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("Language:")]),_:1}),Wt]),s("div",null,[a(u,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("Theme:")]),_:1}),Ut]),s("div",null,[a(u,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("Notifications:")]),_:1}),s("div",zt,[a(f,{modelValue:t.emailNotifications,"onUpdate:modelValue":e[0]||(e[0]=_=>t.emailNotifications=_),id:"emailNotifications",class:"mb-2 ml-1 text-gray-100"},null,8,["modelValue"]),Yt,a(f,{modelValue:t.pushNotifications,"onUpdate:modelValue":e[1]||(e[1]=_=>t.pushNotifications=_),id:"pushNotifications",class:"mb-2 ml-1 text-gray-100"},null,8,["modelValue"]),Kt])]),a(m,{type:"submit",class:"bg-yellow-500 text-black p-3 rounded w-full"},{default:l(()=>[c("Save Settings")]),_:1})])])}const Jt=w(Rt,[["render",Qt]]),Xt={components:{Avatar:N,AvatarFallback:j,AvatarImage:R,Label:G},setup(){return{}}},Zt={class:"flex-grow h-full ml-64 p-10"},eo=s("h2",{class:"text-2xl font-bold mb-6"},"Profile",-1),to={class:"flex items-center mb-8"},oo=s("div",{class:"ml-6"},[s("h3",{class:"text-xl font-bold"}),s("p",{class:"text-gray-100"})],-1),so={class:"grid grid-cols-2 gap-6"},ao=s("p",{class:"text-gray-100"},null,-1),ro=s("p",{class:"text-gray-100"},null,-1),lo=s("p",{class:"text-gray-100"},null,-1),no=s("p",{class:"text-gray-100"},null,-1),io=s("p",{class:"text-gray-100"},null,-1),co=s("p",{class:"text-gray-100"},null,-1);function uo(o,e,r,t,n,d){const u=p("AvatarFallback"),f=p("Avatar"),m=p("Label");return i(),b("div",Zt,[eo,s("div",to,[a(f,{class:"avatar w-32 h-32 flex items-center justify-center overflow-hidden bg-gray-800 drop-shadow-lg"},{default:l(()=>[a(u,{class:"text-4xl"},{default:l(()=>[c("MB")]),_:1})]),_:1}),oo]),s("div",so,[s("div",null,[a(m,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("First Name:")]),_:1}),ao]),s("div",null,[a(m,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("Last Name:")]),_:1}),ro]),s("div",null,[a(m,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("Email Address:")]),_:1}),lo]),s("div",null,[a(m,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("Phone Number:")]),_:1}),no]),s("div",null,[a(m,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("Date of Birth:")]),_:1}),io]),s("div",null,[a(m,{class:"block text-sm font-medium mb-1"},{default:l(()=>[c("User is Admin:")]),_:1}),co])])])}const fo=w(Xt,[["render",uo]]),po={},mo={class:"flex-grow h-full ml-64 p-10"},go=T('<h2 class="text-2xl font-bold mb-6">Support</h2><div class="space-y-4"><h3 class="text-xl font-bold">FAQ</h3><ul class="list-disc pl-6 space-y-2"><li>How do I reset my password?</li><li>How can I update my profile information?</li><li>What payment methods do you accept?</li><li>How do I cancel my subscription?</li></ul><h3 class="text-xl font-bold">Contact Support</h3><p>If you have any questions or need assistance, please contact our support team:</p><ul class="list-disc pl-6 space-y-2"><li>Email: support@example.com</li><li>Phone: +1 (123) 456-7890</li><li>Live Chat: Available Monday to Friday, 9:00 AM - 5:00 PM EST</li></ul></div>',2),_o=[go];function ho(o,e){return i(),b("div",mo,_o)}const bo=w(po,[["render",ho]]),xo={class:"flex flex-col min-h-[--adjusted-height] pt-[--header-height] bg-gradient-to-br from-background-950 from-20% via-background-800 to-background-600"},vo=s("h1",{class:"mt-12 text-center text-3xl font-bold text-gray-200"},[c("In progress"),s("span",{class:"typing-dots"})],-1),yo=s("p",{class:"text-center text-gray-400 mt-4"},"Opps! This page isn't quite finished yet, but we're working on it.",-1),wo={class:"flex items-center justify-center"},ko={__name:"InProgress",setup(o){return(e,r)=>(i(),b("div",xo,[vo,yo,s("div",wo,[a(g(Ao),{class:"m-12 px-6"})])]))}},Ao={__name:"BackButton",setup(o){const e=E(),r=()=>{e.go(-1)};return(t,n)=>(i(),x(g($),{onClick:r,class:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"},{default:l(()=>[c(" Go Back ")]),_:1}))}},qo={class:"min-h-screen pt-12 bg-gradient-to-br from-background-950 from-20% via-background-800 to-background-600"},Po={class:"container mx-auto px-4 py-12"},Co=s("h1",{class:"text-4xl font-bold mb-8 text-center text-[var(--text-50)]"}," Mason Bartholomai ",-1),Mo={class:"max-w-7xl mx-3"},$o={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},Do=["src","alt"],So={__name:"Home",setup(o){const e=A([{src:"https://images.unsplash.com/photo-1687938641915-4338bf1ba124?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 1"},{src:"https://images.unsplash.com/photo-1687938310683-b6824667ab73?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 2"},{src:"https://images.unsplash.com/photo-1687938214619-a96bd6391809?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 3"},{src:"https://images.unsplash.com/photo-1687938133945-477129b34b42?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 4"},{src:"https://images.unsplash.com/photo-1687856265836-60f5bc77d736?q=80&w=2733&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 5"},{src:"https://images.unsplash.com/photo-1687855480803-afb87cc0b760?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 6"},{src:"https://images.unsplash.com/photo-1687854763118-93fbaa46f068?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 7"},{src:"https://images.unsplash.com/photo-1665199439045-b301573908c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 8"},{src:"https://images.unsplash.com/photo-1665199368875-17a658b47668?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 9"},{src:"https://images.unsplash.com/photo-1665197501864-8300c5cfcabe?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 10"}]);return(r,t)=>(i(),b("div",qo,[s("div",Po,[Co,s("div",Mo,[s("div",$o,[(i(!0),b(ie,null,ce(e.value,(n,d)=>(i(),b("div",{key:d,class:"relative w-full h-48 sm:h-64 lg:h-80 rounded-lg hover:scale-[1.01] transition-transform duration-300"},[s("img",{src:n.src,alt:n.alt,class:"w-full h-full object-cover rounded-lg"},null,8,Do)]))),128))])])])]))}},Oo={components:{Button:$,ProfileSection:fo,AccountSection:Nt,SupportSection:bo,AboutSection:Bt,GeneralSection:Jt},setup(){const o=A("profile"),e=A({});function r(){e.value.logout=!0}function t(){e.value.logout=!1}return{activePage:o,openLogoutModal:r,closeLogoutModal:t,modalsOpen:e}}},Bo={class:"flex min-h-[--adjusted-height] bg-gray-700 text-gray-50"},Lo={class:"fixed left-0 h-full flex flex-col w-64 p-5 bg-gray-600"},Io={class:"space-y-4"},Ho={class:"modal-box p-4"},Vo=s("h3",{class:"font-bold text-lg text-gray-50"},"Confirm Logout",-1),To=s("p",{class:"py-4 text-gray-50 mb-10"},"Are you sure you want to log out?",-1),Eo={class:"modal-action flex gap-2"};function No(o,e,r,t,n,d){const u=p("Button"),f=p("ProfileSection"),m=p("AccountSection"),_=p("SupportSection"),q=p("AboutSection"),k=p("GeneralSection");return i(),b("div",Bo,[s("div",Lo,[s("div",Io,[s("a",{onClick:e[0]||(e[0]=P=>t.activePage="profile"),class:h(["block p-3 hover:bg-gray-700 rounded",{"bg-gray-700":t.activePage==="profile"}])},"Profile",2),s("a",{onClick:e[1]||(e[1]=P=>t.activePage="account"),class:h(["block p-3 hover:bg-gray-700 rounded",{"bg-gray-700":t.activePage==="account"}])},"Account",2),s("a",{onClick:e[2]||(e[2]=P=>t.activePage="support"),class:h(["block p-3 hover:bg-gray-700 rounded",{"bg-gray-700":t.activePage==="support"}])},"Support",2),s("a",{onClick:e[3]||(e[3]=P=>t.activePage="about"),class:h(["block p-3 hover:bg-gray-700 rounded",{"bg-gray-700":t.activePage==="about"}])},"About",2),s("a",{onClick:e[4]||(e[4]=P=>t.activePage="general"),class:h(["block p-3 hover:bg-gray-700 rounded",{"bg-gray-700":t.activePage==="general"}])},"General",2),a(u,{onClick:t.openLogoutModal,class:"fixed bottom-[calc(var(--footer-height)_+_20px)] m-2 bg-yellow-500 text-black rounded"},{default:l(()=>[c("Logout")]),_:1},8,["onClick"])])]),y(" Modal for Logout Confirmation "),t.modalsOpen.logout?(i(),b("div",{key:0,class:"modal-overlay",onClick:e[7]||(e[7]=U((...P)=>t.closeLogoutModal&&t.closeLogoutModal(...P),["self"]))},[s("div",{class:"modal transition bg-gray-800 rounded-lg w-96",onClick:e[6]||(e[6]=U(()=>{},["stop"]))},[s("div",Ho,[Vo,To,s("div",Eo,[a(u,{onClick:e[5]||(e[5]=()=>{}),class:"bg-destructive hover:bg-destructive rounded-md text-gray-50 p-2"},{default:l(()=>[c("Logout")]),_:1}),a(u,{onClick:t.closeLogoutModal,class:"bg-hover-2 rounded-md text-gray-50 p-2"},{default:l(()=>[c("Cancel")]),_:1},8,["onClick"])])])])])):y("v-if",!0),t.activePage==="profile"?(i(),x(f,{key:1})):y("v-if",!0),t.activePage==="account"?(i(),x(m,{key:2})):y("v-if",!0),t.activePage==="support"?(i(),x(_,{key:3})):y("v-if",!0),t.activePage==="about"?(i(),x(q,{key:4})):y("v-if",!0),t.activePage==="general"?(i(),x(k,{key:5})):y("v-if",!0)])}const Ro=w(Oo,[["render",No]]),jo=Q(),Go=async o=>{const e=S(jo,"shortenedUrls",o),r=await I(e);return r.exists()?r.data().originalUrl:null},Fo={class:"redirecting"},Wo={__name:"RedirectHandler",setup(o){const e=K(),r=E();return V(async()=>{const{id:t}=e.params;try{const n=await Go(t);n?window.location.href=n:(O.error("Invalid URL"),r.push({name:"Home"}))}catch{O.error("An error occurred"),r.push({name:"Home"})}}),(t,n)=>(i(),b("div",Fo,"Redirecting..."))}},Uo=w(Wo,[["__scopeId","data-v-d7a21f8c"]]),X=Ee({state:{portfolio:null,authToken:null,user:null},mutations:{setPortfolio(o,e){o.portfolio=e},updatePortfolio(o,e){o.portfolio={...o.portfolio,...e}},setAuthToken(o,e){o.authToken=e},clearAuthToken(o){o.authToken=null},setUser(o,e){o.user=e},clearUser(o){o.user=null}},actions:{async fetchPortfolio({commit:o,state:e}){if(!e.portfolio)try{const r=S(L,"websiteData","portfolio"),t=await I(r);if(t.exists()){const n=t.data();o("setPortfolio",n)}else console.log("No portfolio document found in Firestore!")}catch(r){console.error("Error fetching portfolio document: ",r)}},async updatePortfolio({commit:o},e){try{const r=S(L,"websiteData","portfolio");await He(r,e),o("updatePortfolio",e)}catch(r){console.error("Error updating portfolio document: ",r)}},async fetchUser({commit:o,state:e}){if(!e.user)try{mt.onAuthStateChanged(async r=>{if(r){const t=S(L,"users",r.uid),n=await I(t);n.exists()&&o("setUser",n.data())}else o("clearUser")})}catch(r){console.error("Error fetching user: ",r)}}},getters:{portfolio:o=>o.portfolio,user:o=>o.user,authToken:o=>o.authToken},plugins:[Ne({paths:["authToken","user"],storage:localStorage.getItem("user")?localStorage:sessionStorage})]}),zo=[{path:"/",alias:["/","/index","","/home","/Home"],name:"Home",component:So,meta:{requiresAuth:!1,title:"Home",requiresOverlay:!0,requiresAuthOverlay:!1,inProgress:!1}},{path:"/about",alias:"/about-us",name:"About",component:()=>v(()=>import("./About-DatYCxQd.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])),meta:{requiresAuth:!1,title:"About",requiresOverlay:!0,requiresAuthOverlay:!1,inProgress:!1}},{path:"/contact",alias:"/contact-us",name:"Contact",component:()=>v(()=>import("./Contact-FVq_WdfO.js"),__vite__mapDeps([22,1,7,18,8,2,3,4,5,6,9,10,11,12,13,14,15,16,17,19,20,21])),meta:{requiresAuth:!1,title:"Contact",requiresOverlay:!0,requiresAuthOverlay:!1,inProgress:!1}},{path:"/websites",alias:"/websites",name:"Websites",component:()=>v(()=>import("./Websites-D_azL2zE.js"),__vite__mapDeps([23,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])),meta:{requiresAuth:!1,title:"Websites",requiresOverlay:!0,requiresAuthOverlay:!1,inProgress:!1}},{path:"/login",alias:"/signin",name:"Login",component:()=>v(()=>import("./Login-DW-dZGQW.js"),__vite__mapDeps([24,1,11,12,13,8,2,3,4,5,6,7,9,10,14,15,16,17,18,19,20,21])),meta:{requiresAuth:!1,title:"Login",requiresOverlay:!1,requiresAuthOverlay:!1,inProgress:!1}},{path:"/signup",alias:["/create-account","/sign-up"],name:"Sign Up",component:()=>v(()=>import("./SignUp-na4dxgmS.js"),__vite__mapDeps([25,1,8,26,2,3,19,4,5,6,7,9,10,11,12,13,14,15,16,17,18,20,21])),meta:{requiresAuth:!1,title:"Sign Up",requiresOverlay:!1,requiresAuthOverlay:!1,inProgress:!1}},{path:"/protected",alias:"/protected",name:"Protected",component:()=>v(()=>import("./Protected-DSJNUrCd.js"),__vite__mapDeps([27,1])),meta:{requiresAuth:!0,title:"Protected",requiresOverlay:!0,requiresAuthOverlay:!0,inProgress:!1}},{path:"/portfolio",alias:"/portfolio",name:"Portfolio",component:()=>v(()=>import("./Portfolio-BuGchKSW.js"),__vite__mapDeps([28,15,16,17,20,1,29,2,3,19,4,5,6,7,8,9,10,11,12,13,14,18,21])),meta:{requiresAuth:!1,title:"Portfolio",requiresOverlay:!0,requiresAuthOverlay:!0,inProgress:!1}},{path:"/demo/lcc-powerapps",name:"Logan City Council PowerApps",component:()=>v(()=>import("./Demo_LCC_PowerApps-BavVQfKq.js"),__vite__mapDeps([30,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])),meta:{requiresAuth:!1,title:"Logan City Council PowerApps",requiresOverlay:!0,requiresAuthOverlay:!0,inProgress:!0}},{path:"/demo/lms-powerapps",name:"Lifestyle Mentor Services PowerApps",component:()=>v(()=>import("./Demo_LMS_PowerApps-2Dja-baT.js"),__vite__mapDeps([31,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])),meta:{requiresAuth:!1,title:"Lifestyle Mentor Services PowerApps",requiresOverlay:!0,requiresAuthOverlay:!0,inProgress:!0}},{path:"/demo/lms-webapp",name:"Lifestyle Mentor Services Webapp",component:()=>v(()=>import("./Demo_LMS_Webapp-vFSnti5S.js"),__vite__mapDeps([32,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])),meta:{requiresAuth:!1,title:"Lifestyle Mentor Services Webapp",requiresOverlay:!0,requiresAuthOverlay:!0,inProgress:!0}},{path:"/settings",alias:"/settings",name:"Settings",component:Ro,meta:{requiresAuth:!1,title:"Settings",requiresOverlay:!0,requiresAuthOverlay:!0,inProgress:!1}},{path:"/auth-home",alias:"/auth/home",name:"Auth Home",component:()=>v(()=>import("./authHome-sBrUB6_C.js"),__vite__mapDeps([33,1,8,11,12,13,20,2,3,4,5,6,7,9,10,14,15,16,17,18,19,21,34])),meta:{requiresAuth:!0,title:"Auth Home",requiresOverlay:!0,requiresAuthOverlay:!0,inProgress:!1}},{path:"/:pathMatch(.*)*",name:"404",component:()=>v(()=>import("./Page404-CW-wwQG4.js"),__vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])),meta:{requiresAuth:!1,title:"404",requiresOverlay:!1,requiresAuthOverlay:!1,inProgress:!1}},{path:"/r/:id",name:"RedirectHandler",component:Uo}],Z=we({history:ke(),routes:zo});Z.beforeEach((o,e,r)=>{o.meta.inProgress&&o.matched.forEach(t=>{t.components.default=ko}),o.meta.requiresAuth&&!X.getters.user?r("/login"):r()});const F=ue(Ct);F.use(Z);F.use(X);F.mount("#app");export{w as _,G as a,Fe as b,M as c,$ as d,mt as e,L as f,Z as r,X as s};
