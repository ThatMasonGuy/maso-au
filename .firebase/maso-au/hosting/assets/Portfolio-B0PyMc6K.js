import"./jspdf-De3EYt3J.js";import{u as O}from"./vuex--kc_uza-.js";import{h as S}from"./moment-C5S46NFB.js";import{x as V,I as W,T as H,_ as I,c as K,n as Y,t as G,Q,d as U,G as J,K as R,W as X,H as Z,U as j,j as ee}from"./radix-vue-6Z8x3TUN.js";import{b as r,D as x,E as s,q as _,H as A,I as L,u as e,d as p,a8 as N,c as g,G as $,J as l,e as o,r as te,m as se,aa as ae,L as i,M as P,K as D,P as v,T as w}from"./@vue-DsGlF1-j.js";import{h as y}from"./index-fh3STtDl.js";import{a as oe,b as le}from"./@radix-icons-C7iqcNif.js";import"./@unovis-B16_51NZ.js";import"./@emotion-Dz_S_Xyw.js";import"./stylis-YPZU7XtI.js";import"./d3-transition-fhQpLGwb.js";import"./d3-dispatch-kxCwF96_.js";import"./d3-timer-DdKHrDhs.js";import"./d3-interpolate-DY0Cqdkz.js";import"./d3-color-Ceo1QMNe.js";import"./d3-selection-DSeOx27A.js";import"./d3-ease-Ox4sgw_u.js";import"./d3-interpolate-path-CTc7ZuM7.js";import"./striptags-CDKagow6.js";import"./@vueup-qMjKR5Ws.js";import"./quill-delta-COPIFlMW.js";import"./fast-diff-DNDSwfiB.js";import"./lodash.clonedeep-CrPEM4m0.js";import"./lodash.isequal-CemT60YI.js";import"./to-px-DReLD3CO.js";import"./parse-unit-3UrBcP19.js";import"./d3-array-BJvpcdQ_.js";import"./@juggle-C8OzoCMD.js";import"./d3-axis-Cf4shvhW.js";import"./d3-scale-A6k9qkjg.js";import"./internmap-BkD7Hj8s.js";import"./d3-format-CzD4bSOQ.js";import"./d3-time-format-COsUQkot.js";import"./d3-time-B8hJ2rEE.js";import"./d3-shape-D7Hvm6M3.js";import"./d3-path-CimkQT29.js";import"./throttle-debounce-BnOnwhtV.js";import"./@babel-BsCcpEdk.js";import"./fflate-Cf-_J6lE.js";import"./@internationalized-D5LszBdy.js";import"./@swc-BOtJyCjG.js";import"./@floating-ui-B6PpBHZy.js";import"./class-variance-authority-Bb4qSo10.js";import"./clsx-B-dksMZM.js";import"./tailwind-merge-3VKOpVsw.js";import"./vue-sonner-B2EpXGAv.js";import"./vue-router-CrvMPvpV.js";import"./firebase-BQhzl84B.js";import"./@firebase-CBgXa-9_.js";import"./idb-BXWtuYvb.js";import"./tslib-BGVaTf34.js";import"./@heroicons-DH5_RU0z.js";import"./embla-carousel-vue-CXHqejTr.js";import"./embla-carousel-reactive-utils-DkegjUUZ.js";import"./embla-carousel-QtEXB4oT.js";import"./@vueuse-H75eWtDf.js";import"./embla-carousel-autoplay-0OO14Ffu.js";import"./vuex-persistedstate-D4njCX8q.js";import"./maska-Cp-LWreF.js";const re={__name:"Dialog",props:{open:{type:Boolean,required:!1},defaultOpen:{type:Boolean,required:!1},modal:{type:Boolean,required:!1}},emits:["update:open"],setup(m,{emit:n}){const u=V(m,n);return(f,b)=>(r(),x(e(W),A(L(e(u))),{default:s(()=>[_(f.$slots,"default")]),_:3},16))}},ne={__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(m){const n=m;return(a,d)=>(r(),x(e(H),A(L(n)),{default:s(()=>[_(a.$slots,"default")]),_:3},16))}},ie={__name:"DialogHeader",props:{class:{type:null,required:!1}},setup(m){const n=m;return(a,d)=>(r(),p("div",{class:N(e(y)("flex flex-col gap-y-1.5 text-center sm:text-left",n.class))},[_(a.$slots,"default")],2))}},de={__name:"DialogTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(m){const n=m,a=g(()=>{const{class:u,...f}=n;return f}),d=I(a);return(u,f)=>(r(),x(e(K),$(e(d),{class:e(y)("text-lg font-semibold leading-none tracking-tight",n.class)}),{default:s(()=>[_(u.$slots,"default")]),_:3},16,["class"]))}},ue={__name:"DialogDescription",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(m){const n=m,a=g(()=>{const{class:u,...f}=n;return f}),d=I(a);return(u,f)=>(r(),x(e(Y),$(e(d),{class:e(y)("text-sm text-muted-foreground",n.class)}),{default:s(()=>[_(u.$slots,"default")]),_:3},16,["class"]))}},ce=o("span",{class:"sr-only"},"Close",-1),me={__name:"DialogContent",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(m,{emit:n}){const a=m,d=n,u=g(()=>{const{class:b,...c}=a;return c}),f=V(u,d);return(b,c)=>(r(),x(e(J),null,{default:s(()=>[l(e(G),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),l(e(Q),$(e(f),{class:e(y)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a.class)}),{default:s(()=>[_(b.$slots,"default"),l(e(U),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},{default:s(()=>[l(e(oe),{class:"w-4 h-4"}),ce]),_:1})]),_:3},16,["class"])]),_:3}))}},pe={__name:"Accordion",props:{collapsible:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},dir:{type:String,required:!1},orientation:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},type:{type:null,required:!1},modelValue:{type:null,required:!1},defaultValue:{type:null,required:!1}},emits:["update:modelValue"],setup(m,{emit:n}){const u=V(m,n);return(f,b)=>(r(),x(e(R),A(L(e(u))),{default:s(()=>[_(f.$slots,"default")]),_:3},16))}},k={__name:"AccordionContent",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(m){const n=m,a=g(()=>{const{class:d,...u}=n;return u});return(d,u)=>(r(),x(e(X),$(a.value,{class:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"}),{default:s(()=>[o("div",{class:N(e(y)("pb-4 pt-0",n.class))},[_(d.$slots,"default")],2)]),_:3},16))}},q={__name:"AccordionItem",props:{disabled:{type:Boolean,required:!1},value:{type:String,required:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(m){const n=m,a=g(()=>{const{class:u,...f}=n;return f}),d=I(a);return(u,f)=>(r(),x(e(Z),$(e(d),{class:e(y)("border-b",n.class)}),{default:s(()=>[_(u.$slots,"default")]),_:3},16,["class"]))}},B={__name:"AccordionTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(m){const n=m,a=g(()=>{const{class:d,...u}=n;return u});return(d,u)=>(r(),x(e(ee),{class:"flex"},{default:s(()=>[l(e(j),$(a.value,{class:e(y)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",n.class)}),{default:s(()=>[_(d.$slots,"default"),_(d.$slots,"icon",{},()=>[l(e(le),{class:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})])]),_:3},16,["class"])]),_:3}))}},fe={class:"mx-auto pb-12 pt-[--header-height] w-full min-h-[--adjusted-height] bg-gradient-to-br from-background-950 from-20% via-background-800 to-background-600 lg:px-28 px-6"},xe={key:0,class:"lg:max-w-4xl mx-auto"},_e={class:"text-center mb-12 mt-5"},he={class:"text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-100"},ge={class:"text-2xl text-gray-200"},ye={class:"text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100"},be={class:"text-md md:text-lg text-gray-300 flex mb-4"},ve={class:"text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100"},we={class:"flexbox flex-wrap"},ke={class:"text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100"},qe={class:"w-full sm:w-1/2 sm:pr-8"},Be={class:"text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-200"},$e={class:"text-sm sm:text-md md:text-lg text-gray-300 mb-4"},Pe={class:"hidden sm:flex sm:space-x-4 justify-between sm:justify-start mb-1 sm:mb-0"},De=["href"],Ce={class:"w-full sm:w-1/2 mt-4 sm:mt-0 mb-4"},Ee=["src","alt"],Ve=["src"],Ie={class:"flex sm:hidden flex-row justify-between mt-2 w-full"},Ae=["href"],Le={class:"text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100"},Me={class:"text-lg sm:text-xl md:text-2xl font-bold mb-4 text-gray-200"},Te={class:"text-sm sm:text-md md:text-lg font-semibold text-gray-300 mb-2"},ze={class:"list-disc list-inside text-sm sm:text-md md:text-lg text-gray-300",style:{"list-style-position":"outside","padding-left":"1em"}},Fe={class:"text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100"},Ne={class:"text-lg sm:text-xl md:text-2xl font-bold mb-3 text-gray-200"},Oe={class:"text-sm sm:text-md md:text-lg font-semibold text-gray-300 mb-2"},Se={class:"text-sm sm:text-md md:text-lg text-gray-300"},We={class:"text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-100"},He=["href"],Ke=["src"],Ye={class:"text-sm sm:text-md md:text-lg font-semibold text-blue-700 hover:text-blue-500 hover:underline"},Ge={class:"text-center mt-8 font-bold text-gray-100 text-sm sm:text-md md:text-lg"},Qe=["href"],Ue={key:1,class:"text-center text-gray-100"},es={__name:"Portfolio",setup(m){const n=O();te(!1);const a=g(()=>n.state.portfolio);se(()=>{try{n.dispatch("fetchPortfolio")}catch(c){console.error(c)}});const d=c=>c&&c.seconds?S(c.seconds*1e3).format("MMMM YYYY"):"Present",u=c=>(c&&typeof c=="object"&&(c=Object.values(c)),Array.isArray(c)?(c.sort((C,h)=>{var M,T,z,F;const t=((T=(M=C.duration)==null?void 0:M.end)==null?void 0:T.seconds)||1/0;return(((F=(z=h.duration)==null?void 0:z.end)==null?void 0:F.seconds)||1/0)-t}),c):(console.error("Expected an array of items, but got:",c),[])),f=g(()=>{var h,t;const c=(t=(h=a.value)==null?void 0:h.workExperience)==null?void 0:t.options;return u(c)}),b=g(()=>{var h,t;const c=(t=(h=a.value)==null?void 0:h.education)==null?void 0:t.options;return u(c)});return(c,C)=>{const h=ae("router-link");return r(),p("div",fe,[a.value?(r(),p("div",xe,[o("div",null,[o("header",_e,[o("h1",he,i(a.value.details.name.firstName)+" "+i(a.value.details.name.lastName),1),o("p",ge,i(a.value.details.title),1)])]),l(e(pe),{type:"multiple",class:"w-full text-gray-100",collapsible:"","default-value":["about"]},{default:s(()=>[l(e(q),{value:"about"},{default:s(()=>[l(e(B),{class:"flex items-center"},{default:s(()=>[o("h2",ye,i(a.value.aboutMe.title),1)]),_:1}),l(e(k),null,{default:s(()=>[o("p",be,i(a.value.aboutMe.description),1)]),_:1})]),_:1}),l(e(q),{value:"skills"},{default:s(()=>[l(e(B),{class:"flex items-center"},{default:s(()=>[o("h2",ve,i(a.value.skills.title),1)]),_:1}),l(e(k),null,{default:s(()=>[o("div",we,[(r(!0),p(v,null,w(a.value.skills.options,t=>(r(),p("span",{key:t,class:"inline-block bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded-full text-sm sm:text-md md:text-lg mb-4 mr-4 transition duration-200 ease-in-out"},i(t),1))),128))])]),_:1})]),_:1}),l(e(q),{value:"projects"},{default:s(()=>[l(e(B),{class:"flex items-center"},{default:s(()=>[o("h2",ke,i(a.value.projects.title),1)]),_:1}),l(e(k),null,{default:s(()=>[(r(!0),p(v,null,w(a.value.projects.options,t=>(r(),p("div",{key:t.title,class:"mb-6 flex flex-col sm:flex-row items-center sm:justify-between"},[o("div",qe,[o("h3",Be,i(t.title),1),o("p",$e,i(t.description),1),o("div",Pe,[t.viewDemo?(r(),x(h,{key:0,to:t.viewDemo,class:"text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg transition duration-200 ease-in-out whitespace-nowrap"},{default:s(()=>[P("View Demo")]),_:2},1032,["to"])):D("v-if",!0),t.viewLive?(r(),p("a",{key:1,href:t.viewLive,class:"text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg transition duration-200 ease-in-out whitespace-nowrap"},"View Live",8,De)):D("v-if",!0)])]),o("div",Ce,[l(e(re),null,{default:s(()=>[l(e(ne),{"as-child":""},{default:s(()=>[o("img",{src:t.image,alt:t.name,class:"rounded-lg w-full sm:w-96 shadow-2xl hover:scale-105 transition duration-200 ease-in-out cursor-pointer"},null,8,Ee)]),_:2},1024),l(e(me),{class:"sm:max-w-5xl bg-gray-100"},{default:s(()=>[l(e(ie),null,{default:s(()=>[l(e(de),null,{default:s(()=>[P(i(t.title),1)]),_:2},1024),l(e(ue),null,{default:s(()=>[P(i(t.description),1)]),_:2},1024)]),_:2},1024),o("img",{src:t.image,alt:"Project Image",class:"w-full rounded-lg shadow-xl"},null,8,Ve)]),_:2},1024)]),_:2},1024)]),o("div",Ie,[t.viewDemo?(r(),x(h,{key:0,to:t.viewDemo,class:"text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg transition duration-200 ease-in-out whitespace-nowrap"},{default:s(()=>[P("View Demo")]),_:2},1032,["to"])):D("v-if",!0),t.viewLive?(r(),p("a",{key:1,href:t.viewLive,class:"text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg transition duration-200 ease-in-out whitespace-nowrap"},"View Live",8,Ae)):D("v-if",!0)])]))),128))]),_:1})]),_:1}),l(e(q),{value:"workExperience"},{default:s(()=>[l(e(B),{class:"flex items-center"},{default:s(()=>[o("h2",Le,i(a.value.workExperience.title),1)]),_:1}),l(e(k),null,{default:s(()=>[(r(!0),p(v,null,w(f.value,t=>(r(),p("div",{key:t.title,class:"mb-6"},[o("h3",Me,i(t.title),1),o("h4",Te,i(t.company)+" | "+i(d(t.duration.start))+" - "+i(t.duration.end?d(t.duration.end):"Present"),1),o("ul",ze,[(r(!0),p(v,null,w(t.description,E=>(r(),p("li",{key:E,class:"pb-1"},i(E),1))),128))])]))),128))]),_:1})]),_:1}),l(e(q),{value:"education"},{default:s(()=>[l(e(B),{class:"flex items-center"},{default:s(()=>[o("h2",Fe,i(a.value.education.title),1)]),_:1}),l(e(k),null,{default:s(()=>[(r(!0),p(v,null,w(b.value,t=>(r(),p("div",{key:t.title,class:"mb-6"},[o("h3",Ne,i(t.title),1),o("p",Oe,i(t.school)+" | "+i(d(t.duration.start))+" - "+i(t.duration.end?d(t.duration.end):"Present"),1),o("p",Se,i(t.description),1)]))),128))]),_:1})]),_:1}),l(e(q),{value:"contact"},{default:s(()=>[l(e(B),{class:"flex items-center"},{default:s(()=>[o("h2",We,i(a.value.contact.title),1)]),_:1}),l(e(k),null,{default:s(()=>[(r(!0),p(v,null,w(a.value.contact.options,t=>(r(),p("div",{key:t.title,class:"mb-6 flex items-center"},[o("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",class:"flex items-center text-center cursor-pointer"},[o("img",{src:t.icon,alt:"Icon",class:"w-8 h-8 mr-2"},null,8,Ke),o("h3",Ye,i(t.title),1)],8,He)]))),128))]),_:1})]),_:1})]),_:1}),o("div",Ge,[P(" Want to download the resume? "),o("a",{href:a.value.details.resume.link,download:"",class:"text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg whitespace-nowrap"},"Click here",8,Qe)]),D(` <div class="text-center mt-8 font-bold text-gray-100 text-sm sm:text-md md:text-lg">
        Want to generate a PDF of the resume? <button @click="generatePDF"
          class="text-blue-700 hover:text-blue-500 hover:underline text-sm sm:text-md md:text-lg whitespace-nowrap">Click
          here</button>
      </div> `)])):(r(),p("div",Ue,"Loading..."))])}}};export{es as default};
