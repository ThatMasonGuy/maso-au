const __vite__fileDeps=["assets/About-BzH48_3b.js","assets/@vue-DNxJ2jdc.js","assets/radix-vue-DVlULM6g.js","assets/class-variance-authority-Bb4qSo10.js","assets/clsx-B-dksMZM.js","assets/tailwind-merge-3VKOpVsw.js","assets/vaul-vue-H4ZVHYe6.js","assets/vue-sonner-BDXvBKK_.js","assets/vue-router-CLJA7m1H.js","assets/@heroicons-xhqW3rZQ.js","assets/@firebase-CGeUmrcE.js","assets/idb-BXWtuYvb.js","assets/tslib-BGVaTf34.js","assets/firebase-DyMhS5Ok.js","assets/@vueuse-Cf0PSykD.js","assets/@radix-icons-jUtBwP4f.js","assets/vuex-CmTvJbgX.js","assets/Contact-CZ63juWq.js","assets/Websites-thGMiBdY.js","assets/Login-BYRbmo2y.js","assets/auth-BXTCHGFT.js","assets/SignUp-Dn91YVQD.js","assets/SignUp-B_SY1GJM.css","assets/Protected-BnqmrgcU.js","assets/Portfolio-DIzwaA0-.js","assets/moment-C5S46NFB.js","assets/Demo_LCC_PowerApps-PgLYeVtR.js","assets/Demo_LMS_PowerApps-CSVYSY1Q.js","assets/Demo_LMS_Webapp-C48It0aG.js","assets/Page404-BpTiKiez.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{o as d,l as b,m as r,p as C,U as h,u as _,v as B,x as J,y as ee,b as D,z as a,D as te,Z as oe,c as v,_ as se,r as P,s as F,w as ae,$ as m,a as t,X as U,W as f,A as w,a0 as z,a1 as Y,V as N,a2 as O,H as re,S as le,F as T,a3 as ne}from"./@vue-DNxJ2jdc.js";import{O as ie,t as ce,a as ue,n as de,x as fe,l as pe,o as me,k as ge}from"./radix-vue-DVlULM6g.js";import{c as K}from"./class-variance-authority-Bb4qSo10.js";import{c as _e}from"./clsx-B-dksMZM.js";import{t as he}from"./tailwind-merge-3VKOpVsw.js";import"./vaul-vue-H4ZVHYe6.js";import{L as be,F as j}from"./vue-sonner-BDXvBKK_.js";import{u as ve,a as Q,c as xe,b as ye}from"./vue-router-CLJA7m1H.js";import{r as we,a as ke,b as Ae}from"./@heroicons-xhqW3rZQ.js";import{i as qe,s as Pe,g as Ce,a as $e,b as Me,c as Se,d as Be,e as De,o as Oe,f as Le,h as R,j as Ie,u as He}from"./@firebase-CGeUmrcE.js";import"./firebase-DyMhS5Ok.js";import{u as Ve}from"./@vueuse-Cf0PSykD.js";import{r as Ee}from"./@radix-icons-jUtBwP4f.js";import{c as Ne}from"./vuex-CmTvJbgX.js";import"./idb-BXWtuYvb.js";import"./tslib-BGVaTf34.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=l(n);fetch(n.href,i)}})();function $(...s){return he(_e(s))}const M={__name:"Button",props:{variant:{type:null,required:!1},size:{type:null,required:!1},class:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(s){const e=s;return(l,o)=>(d(),b(_(ie),{as:s.as,"as-child":s.asChild,class:h(_($)(_(Te)({variant:s.variant,size:s.size}),e.class))},{default:r(()=>[C(l.$slots,"default")]),_:3},8,["as","as-child","class"]))}},Te=K("inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary-foreground underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",xs:"h-7 rounded px-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),L={__name:"Avatar",props:{class:{type:null,required:!1},size:{type:null,required:!1,default:"sm"},shape:{type:null,required:!1,default:"circle"}},setup(s){const e=s;return(l,o)=>(d(),b(_(ce),{class:h(_($)(_(je)({size:s.size,shape:s.shape}),e.class))},{default:r(()=>[C(l.$slots,"default")]),_:3},8,["class"]))}},I={__name:"AvatarImage",props:{src:{type:String,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(s){const e=s;return(l,o)=>(d(),b(_(ue),B(e,{class:"h-full w-full object-cover"}),null,16))}},H={__name:"AvatarFallback",props:{delayMs:{type:Number,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(s){const e=s;return(l,o)=>(d(),b(_(de),J(ee(e)),{default:r(()=>[C(l.$slots,"default")]),_:3},16))}},je=K("inline-flex items-center justify-center font-normal text-foreground select-none shrink-0 bg-secondary overflow-hidden",{variants:{size:{sm:"h-10 w-10 text-xs",base:"h-16 w-16 text-2xl",lg:"h-32 w-32 text-5xl"},shape:{circle:"rounded-full",square:"rounded-md"}}}),Re={__name:"Checkbox",props:{defaultChecked:{type:Boolean,required:!1},checked:{type:[Boolean,String],required:!1},disabled:{type:Boolean,required:!1},required:{type:Boolean,required:!1},name:{type:String,required:!1},value:{type:String,required:!1},id:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["update:checked"],setup(s,{emit:e}){const l=s,o=e,n=D(()=>{const{class:c,...u}=l;return u}),i=fe(n,o);return(c,u)=>(d(),b(_(me),B(_(i),{class:_($)("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",l.class)}),{default:r(()=>[a(_(pe),{class:"flex h-full w-full items-center justify-center text-current"},{default:r(()=>[C(c.$slots,"default",{},()=>[a(_(Ee),{class:"h-4 w-4"})])]),_:3})]),_:3},16,["class"]))}},V={__name:"Label",props:{for:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(s){const e=s,l=D(()=>{const{class:o,...n}=e;return n});return(o,n)=>(d(),b(_(ge),B(l.value,{class:_($)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",e.class)}),{default:r(()=>[C(o.$slots,"default")]),_:3},16,["class"]))}},Ge={__name:"Input",props:{defaultValue:{type:[String,Number],required:!1},modelValue:{type:[String,Number],required:!1},class:{type:null,required:!1}},emits:["update:modelValue"],setup(s,{emit:e}){const l=s,n=Ve(l,"modelValue",e,{passive:!0,defaultValue:l.defaultValue});return(i,c)=>te((d(),v("input",{"onUpdate:modelValue":c[0]||(c[0]=u=>se(n)?n.value=u:null),class:h(_($)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",l.class))},null,2)),[[oe,_(n)]])}},We={__name:"Sonner",props:{invert:{type:Boolean,required:!1},theme:{type:String,required:!1},position:{type:String,required:!1},hotkey:{type:Array,required:!1},richColors:{type:Boolean,required:!1},expand:{type:Boolean,required:!1},duration:{type:Number,required:!1},gap:{type:Number,required:!1},visibleToasts:{type:Number,required:!1},closeButton:{type:Boolean,required:!1},toastOptions:{type:Object,required:!1},class:{type:String,required:!1},style:{type:Object,required:!1},offset:{type:[String,Number],required:!1},dir:{type:String,required:!1},icons:{type:Object,required:!1},containerAriaLabel:{type:String,required:!1},pauseWhenPageIsHidden:{type:Boolean,required:!1},cn:{type:Function,required:!1}},setup(s){const e=s;return(l,o)=>(d(),b(_(be),B({class:"toaster group"},e,{"toast-options":{classes:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}}}),null,16))}},Fe="/assets/favicon-B9NSDGv9.jpg",A=(s,e)=>{const l=s.__vccOpts||s;for(const[o,n]of e)l[o]=n;return l},Ue={components:{Button:M,Avatar:L,AvatarFallback:H,AvatarImage:I,UserCircleIcon:we},setup(){const s=ve(),e=P(!1),l=()=>{e.value=!e.value},o=D(()=>s.meta&&s.meta.title||"Default Title");return F(()=>{j.success(`Welcome to ${o.value}`)}),ae(()=>s.path,n=>{j.success(`Transitioned to ${o.value}`)}),{currentPageTitle:o,isMenuOpen:e,toggleMenu:l}}},X=s=>(z("data-v-ab81a472"),s=s(),Y(),s),ze={class:"fixed top-0 z-50 backdrop-blur-lg bg-white/10 text-black shadow-2xl flex items-center sm:py-3 px-4 h-20 sm:h-[--header-height] w-screen"},Ye={class:"w-full"},Ke={class:"flex items-center justify-between w-full"},Qe={class:"flex items-center"},Xe={class:"sm:text-3xl text-2xl font-bold absolute sm:ml-16 ml-14 text-[--text-50] drop-shadow-[0_5px_30px_rgba(255,255,255,0.35)]"},Ze=X(()=>t("svg",{class:"w-8 h-8 text-[--text-50]",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16m-7 6h7"})],-1)),Je=[Ze],et={class:"hidden sm:flex text-md lg:text-xl items-center font-bold text-[--text-50]"},tt={class:"sm:mx-1 my-2 sm:my-0"},ot={class:"sm:mx-1 my-2 sm:my-0"},st={class:"sm:mx-1 my-2 sm:my-0"},at={class:"sm:mx-1 my-2 sm:my-0"},rt={class:"sm:mx-1 my-2 sm:my-0"},lt={class:"flex items-center justify-between p-6 bg-[--background-800] h-20"},nt=X(()=>t("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)),it=[nt],ct={class:"flex flex-col text-2xl items-start font-bold text-[--text-50] space-y-8 mt-8 px-2"};function ut(s,e,l,o,n,i){const c=m("Button"),u=m("router-link"),p=m("UserCircleIcon"),g=m("AvatarFallback"),x=m("Avatar");return d(),v("header",ze,[t("nav",Ye,[t("div",Ke,[t("div",Qe,[t("img",{src:Fe,alt:"Logo image",class:"sm:h-12 h-10 sm:w-12 w-10 object-cover cursor-pointer rounded-full shadow-xl",onClick:e[0]||(e[0]=k=>s.$router.push("/"))}),t("span",Xe,U(o.currentPageTitle),1)]),t("button",{onClick:e[1]||(e[1]=(...k)=>o.toggleMenu&&o.toggleMenu(...k)),class:"sm:hidden focus:outline-none"},Je),t("ul",et,[t("li",tt,[a(u,{to:{path:"/home"}},{default:r(()=>[a(c,{variant:"link",class:h([{underline:o.currentPageTitle==="Home"},"px-1 lg:px-2"])},{default:r(()=>[f("Home")]),_:1},8,["class"])]),_:1})]),t("li",ot,[a(u,{to:{path:"/contact"}},{default:r(()=>[a(c,{variant:"link",class:h([{underline:o.currentPageTitle==="Contact"},"px-1 lg:px-2"])},{default:r(()=>[f("Contact")]),_:1},8,["class"])]),_:1})]),t("li",st,[a(u,{to:{path:"/portfolio"}},{default:r(()=>[a(c,{variant:"link",class:h([{underline:o.currentPageTitle==="Portfolio"},"px-1 lg:px-2"])},{default:r(()=>[f("Portfolio")]),_:1},8,["class"])]),_:1})]),t("li",at,[a(u,{to:{path:"/websites"}},{default:r(()=>[a(c,{variant:"link",class:h([{underline:o.currentPageTitle==="Websites"},"mr-4 px-1 lg:px-2"])},{default:r(()=>[f("Websites")]),_:1},8,["class"])]),_:1})]),t("li",rt,[a(u,{to:{path:"/login"}},{default:r(()=>[a(x,{class:"h-10 w-10"},{default:r(()=>[a(g,null,{default:r(()=>[a(p,{class:"h-8 w-8"})]),_:1})]),_:1})]),_:1})])])])]),o.isMenuOpen?(d(),v("div",{key:0,class:"fixed inset-0 bg-gray-700 bg-opacity-50 z-40 h-screen",onClick:e[2]||(e[2]=(...k)=>o.toggleMenu&&o.toggleMenu(...k))})):w("v-if",!0),o.isMenuOpen?(d(),v("div",{key:1,class:h(["fixed z-[9999] top-0 right-0 h-screen bg-[--background-700] shadow-lg transform transition-transform duration-300 ease-in-out w-4/5",{"translate-x-full":!o.isMenuOpen,"translate-x-0":o.isMenuOpen}])},[t("div",lt,[t("button",{onClick:e[3]||(e[3]=(...k)=>o.toggleMenu&&o.toggleMenu(...k)),class:"text-black focus:outline-none"},it),a(u,{to:"/login",onClick:o.toggleMenu},{default:r(()=>[a(x,{class:"h-10 w-10"},{default:r(()=>[a(g,null,{default:r(()=>[a(p,{class:"h-8 w-8"})]),_:1})]),_:1})]),_:1},8,["onClick"])]),t("ul",ct,[t("li",null,[a(u,{to:"/home",onClick:o.toggleMenu},{default:r(()=>[a(c,{variant:"link",class:h({underline:o.currentPageTitle==="Home"})},{default:r(()=>[f("Home")]),_:1},8,["class"])]),_:1},8,["onClick"])]),t("li",null,[a(u,{to:"/contact",onClick:o.toggleMenu},{default:r(()=>[a(c,{variant:"link",class:h({underline:o.currentPageTitle==="Contact"})},{default:r(()=>[f("Contact")]),_:1},8,["class"])]),_:1},8,["onClick"])]),t("li",null,[a(u,{to:"/portfolio",onClick:o.toggleMenu},{default:r(()=>[a(c,{variant:"link",class:h({underline:o.currentPageTitle==="Portfolio"})},{default:r(()=>[f("Portfolio")]),_:1},8,["class"])]),_:1},8,["onClick"])]),t("li",null,[a(u,{to:"/websites",onClick:o.toggleMenu},{default:r(()=>[a(c,{variant:"link",class:h({underline:o.currentPageTitle==="Websites"})},{default:r(()=>[f("Websites")]),_:1},8,["class"])]),_:1},8,["onClick"])])])],2)):w("v-if",!0)])}const dt=A(Ue,[["render",ut],["__scopeId","data-v-ab81a472"]]),ft={apiKey:"AIzaSyBOI-UrNeKCWryN01GflbncbJDVZl2hrEE",authDomain:"maso-au.firebaseapp.com",databaseURL:"https://maso-au-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"maso-au",storageBucket:"maso-au.appspot.com",messagingSenderId:"888141867225",appId:"1:888141867225:web:8b9e99ec26456f034af6c8",measurementId:"G-18X1GQKWHY"},S=qe(ft);Pe("warning");Ce(S);const G=$e(S),cs=Me(S),pt=Se(S);Be(S);const mt={components:{Cog8ToothIcon:ke,QuestionMarkCircleIcon:Ae},setup(){const s=P(0),e=De(pt,"websiteViews"),l=Q();function o(){l.push("/settings")}return Oe(e,n=>{const i=n.val();s.value=i||0}),F(()=>{Le(e,i=>(i||0)+1).catch(i=>{console.error("Error updating view count:",i)})}),{viewCount:s,showSettings:o}}},gt={class:"bg-gray-800 text-gray-100 text-sm sm:text-md bottom-0 left-0 z-[999] flex justify-between items-center w-full p-4 drop-shadow-2xl h-[--footer-height]"},_t=t("p",{class:"pr-4"},"© 2024 Mason Bartholomai. All rights reserved.",-1),ht={class:"mr-2 flex items-center"},bt={class:"mr-4"};function vt(s,e,l,o,n,i){return d(),v("footer",gt,[_t,t("div",ht,[t("p",bt,"Website Views: "+U(o.viewCount),1),(d(),b(N("Cog8ToothIcon"),{class:"w-6 h-6 inline-block mr-2 cursor-pointer",onClick:o.showSettings},null,8,["onClick"])),(d(),b(N("QuestionMarkCircleIcon"),{class:"w-6 h-6 inline-block cursor-pointer"}))])])}const xt=A(mt,[["render",vt]]),yt={components:{Header:dt,Footer:xt,Toaster:We}},wt={id:"app",class:"flex flex-col"},kt=t("div",{clas:"flex-grow"},null,-1);function At(s,e,l,o,n,i){const c=m("Toaster"),u=m("Header"),p=m("router-view"),g=m("Footer");return d(),v("div",wt,[a(c,{position:"bottom-right",richColors:""}),s.$route.meta.requiresOverlay?(d(),b(u,{key:0})):w("v-if",!0),a(p,{class:h(["flex",{"pt-[--header-height]":s.$route.meta.requiresOverlay}])},null,8,["class"]),kt,s.$route.meta.requiresOverlay?(d(),b(g,{key:1})):w("v-if",!0)])}const qt=A(yt,[["render",At]]),Pt="modulepreload",Ct=function(s){return"/"+s},W={},y=function(e,l,o){let n=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),c=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.all(l.map(u=>{if(u=Ct(u),u in W)return;W[u]=!0;const p=u.endsWith(".css"),g=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${g}`))return;const x=document.createElement("link");if(x.rel=p?"stylesheet":Pt,p||(x.as="script",x.crossOrigin=""),x.href=u,c&&x.setAttribute("nonce",c),document.head.appendChild(x),p)return new Promise((k,q)=>{x.addEventListener("load",k),x.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${u}`)))})}))}return n.then(()=>e()).catch(i=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i})},$t={},Mt={class:"flex-grow h-full ml-64 p-10"},St=O('<h2 class="text-2xl font-bold mb-6">About</h2><div class="space-y-4"><p>Welcome to our application! We are dedicated to providing the best user experience and innovative features to our users.</p><p>Our team consists of passionate developers, designers, and specialists who work tirelessly to deliver a high-quality product.</p><h3 class="text-xl font-bold">Our Mission</h3><p>Our mission is to empower users with the tools and resources they need to achieve their goals and streamline their workflows.</p><h3 class="text-xl font-bold">Contact Us</h3><ul class="list-disc pl-6 space-y-2"><li>Email: info@example.com</li><li>Phone: +1 (123) 456-7890</li><li>Address: 123 Main Street, City, Country</li></ul></div>',2),Bt=[St];function Dt(s,e){return d(),v("div",Mt,Bt)}const Ot=A($t,[["render",Dt]]),Lt={components:{Avatar:L,AvatarFallback:H,AvatarImage:I,Label:V,Input:Ge,Button:M},setup(){return{}}},It={class:"flex-grow h-full ml-64 p-10"},Ht={class:"flex justify-center items-center flex-col"},Vt={class:"space-y-6 w-full max-w-lg mt-8"},Et={class:"grid grid-cols-2 gap-6"};function Nt(s,e,l,o,n,i){const c=m("AvatarFallback"),u=m("Avatar"),p=m("Label"),g=m("Input"),x=m("Button");return d(),v("div",It,[t("div",Ht,[a(u,{class:"avatar w-48 h-48 flex items-center justify-center overflow-hidden drop-shadow-lg"},{default:r(()=>[a(c,{class:"text-4xl"})]),_:1}),t("form",Vt,[t("div",Et,[t("div",null,[a(p,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("First Name:")]),_:1}),a(g,{type:"text",class:"bg-gray-500 rounded p-2 w-full"})]),t("div",null,[a(p,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("Last Name:")]),_:1}),a(g,{type:"text",class:"bg-gray-500 rounded p-2 w-full"})])]),t("div",null,[a(p,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("Email Address:")]),_:1}),a(g,{type:"email",class:"bg-gray-500 rounded p-2 w-full"})]),t("div",null,[a(p,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("Phone Number:")]),_:1}),a(g,{type:"phone",class:"bg-gray-500 rounded p-2 w-full"})]),t("div",null,[a(p,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("Date of Birth:")]),_:1}),a(g,{type:"date",class:"bg-gray-500 rounded p-2 w-full"})]),t("div",null,[a(p,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("Old Password:")]),_:1}),a(g,{type:"password",class:"bg-gray-500 rounded p-2 w-full"})]),t("div",null,[a(p,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("New Password:")]),_:1}),a(g,{type:"password",class:"bg-gray-500 rounded p-2 w-full"})]),t("div",null,[a(p,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("Confirm New Password:")]),_:1}),a(g,{type:"password",class:"bg-gray-500 rounded p-2 w-full"})]),a(x,{type:"submit",class:"bg-yellow-500 text-black p-3 rounded w-full"},{default:r(()=>[f("Update Profile")]),_:1})])])])}const Tt=A(Lt,[["render",Nt]]),jt={components:{Label:V,Button:M,Checkbox:Re},setup(){const s=P(!0),e=P(!0);return{pushNotifications:s,emailNotifications:e}}},Rt={class:"flex-grow h-full ml-64 p-10"},Gt=t("h2",{class:"text-2xl font-bold mb-6"},"Settings",-1),Wt={class:"space-y-6"},Ft=t("select",{class:"bg-gray-500 rounded p-2 w-full"},[t("option",{value:"en"},"English"),t("option",{value:"es"},"Spanish"),t("option",{value:"fr"},"French")],-1),Ut=O('<div class="flex items-center space-x-4"><label class="inline-flex items-center"><input type="radio" name="theme" value="light" class="form-radio bg-gray-500"><span class="ml-2">Light</span></label><label class="inline-flex items-center"><input type="radio" name="theme" value="dark" class="form-radio bg-gray-500"><span class="ml-2">Dark</span></label></div>',1),zt={class:"flex items-center space-x-2 mt-3"},Yt=t("label",{for:"emailNotifications",class:"mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"}," Email Notifications ",-1),Kt=t("label",{for:"pushNotifications",class:"mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"}," Push Notifications ",-1);function Qt(s,e,l,o,n,i){const c=m("Label"),u=m("Checkbox"),p=m("Button");return d(),v("div",Rt,[Gt,t("div",Wt,[t("div",null,[a(c,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("Language:")]),_:1}),Ft]),t("div",null,[a(c,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("Theme:")]),_:1}),Ut]),t("div",null,[a(c,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("Notifications:")]),_:1}),t("div",zt,[a(u,{modelValue:o.emailNotifications,"onUpdate:modelValue":e[0]||(e[0]=g=>o.emailNotifications=g),id:"emailNotifications",class:"mb-2 ml-1 text-gray-100"},null,8,["modelValue"]),Yt,a(u,{modelValue:o.pushNotifications,"onUpdate:modelValue":e[1]||(e[1]=g=>o.pushNotifications=g),id:"pushNotifications",class:"mb-2 ml-1 text-gray-100"},null,8,["modelValue"]),Kt])]),a(p,{type:"submit",class:"bg-yellow-500 text-black p-3 rounded w-full"},{default:r(()=>[f("Save Settings")]),_:1})])])}const Xt=A(jt,[["render",Qt]]),Zt={components:{Avatar:L,AvatarFallback:H,AvatarImage:I,Label:V},setup(){return{}}},Jt={class:"flex-grow h-full ml-64 p-10"},eo=t("h2",{class:"text-2xl font-bold mb-6"},"Profile",-1),to={class:"flex items-center mb-8"},oo=t("div",{class:"ml-6"},[t("h3",{class:"text-xl font-bold"}),t("p",{class:"text-gray-100"})],-1),so={class:"grid grid-cols-2 gap-6"},ao=t("p",{class:"text-gray-100"},null,-1),ro=t("p",{class:"text-gray-100"},null,-1),lo=t("p",{class:"text-gray-100"},null,-1),no=t("p",{class:"text-gray-100"},null,-1),io=t("p",{class:"text-gray-100"},null,-1),co=t("p",{class:"text-gray-100"},null,-1);function uo(s,e,l,o,n,i){const c=m("AvatarFallback"),u=m("Avatar"),p=m("Label");return d(),v("div",Jt,[eo,t("div",to,[a(u,{class:"avatar w-32 h-32 flex items-center justify-center overflow-hidden bg-gray-800 drop-shadow-lg"},{default:r(()=>[a(c,{class:"text-4xl"},{default:r(()=>[f("MB")]),_:1})]),_:1}),oo]),t("div",so,[t("div",null,[a(p,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("First Name:")]),_:1}),ao]),t("div",null,[a(p,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("Last Name:")]),_:1}),ro]),t("div",null,[a(p,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("Email Address:")]),_:1}),lo]),t("div",null,[a(p,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("Phone Number:")]),_:1}),no]),t("div",null,[a(p,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("Date of Birth:")]),_:1}),io]),t("div",null,[a(p,{class:"block text-sm font-medium mb-1"},{default:r(()=>[f("User is Admin:")]),_:1}),co])])])}const fo=A(Zt,[["render",uo]]),po={},mo={class:"flex-grow h-full ml-64 p-10"},go=O('<h2 class="text-2xl font-bold mb-6">Support</h2><div class="space-y-4"><h3 class="text-xl font-bold">FAQ</h3><ul class="list-disc pl-6 space-y-2"><li>How do I reset my password?</li><li>How can I update my profile information?</li><li>What payment methods do you accept?</li><li>How do I cancel my subscription?</li></ul><h3 class="text-xl font-bold">Contact Support</h3><p>If you have any questions or need assistance, please contact our support team:</p><ul class="list-disc pl-6 space-y-2"><li>Email: support@example.com</li><li>Phone: +1 (123) 456-7890</li><li>Live Chat: Available Monday to Friday, 9:00 AM - 5:00 PM EST</li></ul></div>',2),_o=[go];function ho(s,e){return d(),v("div",mo,_o)}const bo=A(po,[["render",ho]]),vo={class:"flex flex-col min-h-[--adjusted-height] pt-[--header-height] bg-gradient-to-br from-background-950 from-20% via-background-800 to-background-600"},xo=t("h1",{class:"mt-12 text-center text-3xl font-bold text-gray-200"},[f("In progress"),t("span",{class:"typing-dots"})],-1),yo=t("p",{class:"text-center text-gray-400 mt-4"},"Opps! This page isn't quite finished yet, but we're working on it.",-1),wo={class:"flex items-center justify-center"},ko={__name:"InProgress",setup(s){return(e,l)=>(d(),v("div",vo,[xo,yo,t("div",wo,[a(_(Ao),{class:"m-12 px-6"})])]))}},Ao={__name:"BackButton",setup(s){const e=Q(),l=()=>{e.go(-1)};return(o,n)=>(d(),b(_(M),{onClick:l,class:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"},{default:r(()=>[f(" Go Back ")]),_:1}))}},qo=s=>(z("data-v-de58c3a5"),s=s(),Y(),s),Po={class:"min-h-screen pt-12 bg-gradient-to-br from-background-950 from-20% via-background-800 to-background-600"},Co={class:"container mx-auto px-4 py-12"},$o=qo(()=>t("h1",{class:"text-4xl font-bold mb-8 text-center text-[var(--text-50)]"}," Mason Bartholomai ",-1)),Mo={class:"max-w-7xl mx-auto"},So={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"},Bo=["src","alt"],Do=["src"],Oo={__name:"Home",setup(s){const e=P([{src:"https://images.unsplash.com/photo-1687938641915-4338bf1ba124?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 1"},{src:"https://images.unsplash.com/photo-1687938310683-b6824667ab73?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 2"},{src:"https://images.unsplash.com/photo-1687938214619-a96bd6391809?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 3"},{src:"https://images.unsplash.com/photo-1687938133945-477129b34b42?q=80&w=2573&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 4"},{src:"https://images.unsplash.com/photo-1687856265836-60f5bc77d736?q=80&w=2733&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 5"},{src:"https://images.unsplash.com/photo-1687855480803-afb87cc0b760?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 6"},{src:"https://images.unsplash.com/photo-1687854763118-93fbaa46f068?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 7"},{src:"https://images.unsplash.com/photo-1665199439045-b301573908c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 8"},{src:"https://images.unsplash.com/photo-1665199368875-17a658b47668?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 9"},{src:"https://images.unsplash.com/photo-1665197501864-8300c5cfcabe?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",alt:"Random Image 10"}]);return(l,o)=>(d(),v("div",Po,[t("div",Co,[$o,t("div",Mo,[t("div",So,[(d(!0),v(re,null,le(e.value,(n,i)=>(d(),v("div",{key:i,class:"relative w-full h-48 sm:h-64 lg:h-80 rounded-lg hover:scale-[1.01] transition-transform duration-300"},[t("img",{src:n.src,alt:n.alt,class:"w-full h-full object-cover rounded-lg clear-blur"},null,8,Bo),t("img",{src:n.src,class:"w-full h-full object-cover absolute inset-0 rounded-lg opacity-0 hover:opacity-50 transition-opacity duration-300 blurred-image"},null,8,Do)]))),128))])])])]))}},Lo=A(Oo,[["__scopeId","data-v-de58c3a5"]]),Io={components:{Button:M,ProfileSection:fo,AccountSection:Tt,SupportSection:bo,AboutSection:Ot,GeneralSection:Xt},setup(){const s=P("profile"),e=P({});function l(){e.value.logout=!0}function o(){e.value.logout=!1}return{activePage:s,openLogoutModal:l,closeLogoutModal:o,modalsOpen:e}}},Ho={class:"flex min-h-[--adjusted-height] bg-gray-700 text-gray-50"},Vo={class:"fixed left-0 h-full flex flex-col w-64 p-5 bg-gray-600"},Eo={class:"space-y-4"},No={class:"modal-box p-4"},To=t("h3",{class:"font-bold text-lg text-gray-50"},"Confirm Logout",-1),jo=t("p",{class:"py-4 text-gray-50 mb-10"},"Are you sure you want to log out?",-1),Ro={class:"modal-action flex gap-2"};function Go(s,e,l,o,n,i){const c=m("Button"),u=m("ProfileSection"),p=m("AccountSection"),g=m("SupportSection"),x=m("AboutSection"),k=m("GeneralSection");return d(),v("div",Ho,[t("div",Vo,[t("div",Eo,[t("a",{onClick:e[0]||(e[0]=q=>o.activePage="profile"),class:h(["block p-3 hover:bg-gray-700 rounded",{"bg-gray-700":o.activePage==="profile"}])},"Profile",2),t("a",{onClick:e[1]||(e[1]=q=>o.activePage="account"),class:h(["block p-3 hover:bg-gray-700 rounded",{"bg-gray-700":o.activePage==="account"}])},"Account",2),t("a",{onClick:e[2]||(e[2]=q=>o.activePage="support"),class:h(["block p-3 hover:bg-gray-700 rounded",{"bg-gray-700":o.activePage==="support"}])},"Support",2),t("a",{onClick:e[3]||(e[3]=q=>o.activePage="about"),class:h(["block p-3 hover:bg-gray-700 rounded",{"bg-gray-700":o.activePage==="about"}])},"About",2),t("a",{onClick:e[4]||(e[4]=q=>o.activePage="general"),class:h(["block p-3 hover:bg-gray-700 rounded",{"bg-gray-700":o.activePage==="general"}])},"General",2),a(c,{onClick:o.openLogoutModal,class:"fixed bottom-[calc(var(--footer-height)_+_20px)] m-2 bg-yellow-500 text-black rounded"},{default:r(()=>[f("Logout")]),_:1},8,["onClick"])])]),w(" Modal for Logout Confirmation "),o.modalsOpen.logout?(d(),v("div",{key:0,class:"modal-overlay",onClick:e[7]||(e[7]=T((...q)=>o.closeLogoutModal&&o.closeLogoutModal(...q),["self"]))},[t("div",{class:"modal transition bg-gray-800 rounded-lg w-96",onClick:e[6]||(e[6]=T(()=>{},["stop"]))},[t("div",No,[To,jo,t("div",Ro,[a(c,{onClick:e[5]||(e[5]=()=>{}),class:"bg-destructive hover:bg-destructive rounded-md text-gray-50 p-2"},{default:r(()=>[f("Logout")]),_:1}),a(c,{onClick:o.closeLogoutModal,class:"bg-hover-2 rounded-md text-gray-50 p-2"},{default:r(()=>[f("Cancel")]),_:1},8,["onClick"])])])])])):w("v-if",!0),o.activePage==="profile"?(d(),b(u,{key:1})):w("v-if",!0),o.activePage==="account"?(d(),b(p,{key:2})):w("v-if",!0),o.activePage==="support"?(d(),b(g,{key:3})):w("v-if",!0),o.activePage==="about"?(d(),b(x,{key:4})):w("v-if",!0),o.activePage==="general"?(d(),b(k,{key:5})):w("v-if",!0)])}const Wo=A(Io,[["render",Go]]),Fo=[{path:"/",alias:["/","/index","","/home","/Home"],name:"Home",component:Lo,meta:{requiresAuth:!1,title:"Home",requiresOverlay:!0,requiresAuthOverlay:!1,inProgress:!1}},{path:"/about",alias:"/about-us",name:"About",component:()=>y(()=>import("./About-BzH48_3b.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])),meta:{requiresAuth:!1,title:"About",requiresOverlay:!0,requiresAuthOverlay:!1,inProgress:!1}},{path:"/contact",alias:"/contact-us",name:"Contact",component:()=>y(()=>import("./Contact-CZ63juWq.js"),__vite__mapDeps([17,1,6,14,7,2,3,4,5,8,9,10,11,12,13,15,16])),meta:{requiresAuth:!1,title:"Contact",requiresOverlay:!0,requiresAuthOverlay:!1,inProgress:!1}},{path:"/websites",alias:"/websites",name:"Websites",component:()=>y(()=>import("./Websites-thGMiBdY.js"),__vite__mapDeps([18,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])),meta:{requiresAuth:!1,title:"Websites",requiresOverlay:!0,requiresAuthOverlay:!1,inProgress:!1}},{path:"/login",alias:"/signin",name:"Login",component:()=>y(()=>import("./Login-BYRbmo2y.js"),__vite__mapDeps([19,1,20,10,11,12,7,2,3,4,5,6,8,9,13,14,15,16])),meta:{requiresAuth:!1,title:"Login",requiresOverlay:!1,requiresAuthOverlay:!1,inProgress:!1}},{path:"/signup",alias:["/create-account","/sign-up"],name:"Sign Up",component:()=>y(()=>import("./SignUp-Dn91YVQD.js"),__vite__mapDeps([21,1,20,10,11,12,7,2,3,4,5,6,8,9,13,14,15,16,22])),meta:{requiresAuth:!1,title:"Sign Up",requiresOverlay:!1,requiresAuthOverlay:!1,inProgress:!1}},{path:"/protected",alias:"/protected",name:"Protected",component:()=>y(()=>import("./Protected-BnqmrgcU.js"),__vite__mapDeps([23,1])),meta:{requiresAuth:!0,title:"Protected",requiresOverlay:!0,requiresAuthOverlay:!0,inProgress:!1}},{path:"/portfolio",alias:"/portfolio",name:"Portfolio",component:()=>y(()=>import("./Portfolio-DIzwaA0-.js"),__vite__mapDeps([24,16,1,25,2,15,3,4,5,6,7,8,9,10,11,12,13,14])),meta:{requiresAuth:!1,title:"Portfolio",requiresOverlay:!0,requiresAuthOverlay:!0,inProgress:!1}},{path:"/demo/lcc-powerapps",name:"Logan City Council PowerApps",component:()=>y(()=>import("./Demo_LCC_PowerApps-PgLYeVtR.js"),__vite__mapDeps([26,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])),meta:{requiresAuth:!1,title:"Logan City Council PowerApps",requiresOverlay:!0,requiresAuthOverlay:!0,inProgress:!0}},{path:"/demo/lms-powerapps",name:"Lifestyle Mentor Services PowerApps",component:()=>y(()=>import("./Demo_LMS_PowerApps-CSVYSY1Q.js"),__vite__mapDeps([27,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])),meta:{requiresAuth:!1,title:"Lifestyle Mentor Services PowerApps",requiresOverlay:!0,requiresAuthOverlay:!0,inProgress:!0}},{path:"/demo/lms-webapp",name:"Lifestyle Mentor Services Webapp",component:()=>y(()=>import("./Demo_LMS_Webapp-C48It0aG.js"),__vite__mapDeps([28,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])),meta:{requiresAuth:!1,title:"Lifestyle Mentor Services Webapp",requiresOverlay:!0,requiresAuthOverlay:!0,inProgress:!0}},{path:"/settings",alias:"/settings",name:"Settings",component:Wo,meta:{requiresAuth:!1,title:"Settings",requiresOverlay:!0,requiresAuthOverlay:!0,inProgress:!1}},{path:"/:pathMatch(.*)*",name:"404",component:()=>y(()=>import("./Page404-BpTiKiez.js"),__vite__mapDeps([29,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])),meta:{requiresAuth:!1,title:"404",requiresOverlay:!1,requiresAuthOverlay:!1,inProgress:!1}}],Z=xe({history:ye(),routes:Fo});Z.beforeEach((s,e,l)=>{s.meta.inProgress&&s.matched.forEach(o=>{o.components.default=ko}),l()});const Uo=Ne({state:{portfolio:null},mutations:{setPortfolio(s,e){s.portfolio=e},updatePortfolio(s,e){s.portfolio={...s.portfolio,...e}}},actions:{async fetchPortfolio({commit:s}){try{const e=R(G,"websiteData","portfolio"),l=await Ie(e);if(l.exists()){const o=l.data();s("setPortfolio",o)}else console.log("No portfolio document found in Firestore!")}catch(e){console.error("Error fetching portfolio document: ",e)}},async updatePortfolio({commit:s},e){try{const l=R(G,"websiteData","portfolio");await He(l,e),s("updatePortfolio",e)}catch(l){console.error("Error updating portfolio document: ",l)}}},getters:{portfolio:s=>s.portfolio}}),E=ne(qt);E.use(Z);E.use(Uo);E.mount("#app");export{A as _,V as a,Ge as b,$ as c,M as d,cs as e,G as f,Z as r};
