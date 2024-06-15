import{x as y,P as B,D as b,b as q,y as D,B as w,C as P,E as $,G as C,H as k}from"./radix-vue-B3IMiYbL.js";import{b as d,A as i,B as n,C as c,F as h,G as x,u as e,d as z,a5 as v,c as m,E as _,H as u,e as O}from"./@vue-ByUPl4n3.js";import{c as p}from"./index-sf8yXSmJ.js";import{d as E}from"./@radix-icons-Zs8Jklf2.js";const T={__name:"Dialog",props:{open:{type:Boolean,required:!1},defaultOpen:{type:Boolean,required:!1},modal:{type:Boolean,required:!1}},emits:["update:open"],setup(t,{emit:s}){const o=y(t,s);return(r,f)=>(d(),i(e(B),h(x(e(o))),{default:n(()=>[c(r.$slots,"default")]),_:3},16))}},V={__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const s=t;return(a,l)=>(d(),i(e(b),h(x(s)),{default:n(()=>[c(a.$slots,"default")]),_:3},16))}},J={__name:"DialogHeader",props:{class:{type:null,required:!1}},setup(t){const s=t;return(a,l)=>(d(),z("div",{class:v(e(p)("flex flex-col gap-y-1.5 text-center sm:text-left",s.class))},[c(a.$slots,"default")],2))}},K={__name:"DialogTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const s=t,a=m(()=>{const{class:o,...r}=s;return r}),l=q(a);return(o,r)=>(d(),i(e(D),_(e(l),{class:e(p)("text-lg font-semibold leading-none tracking-tight",s.class)}),{default:n(()=>[c(o.$slots,"default")]),_:3},16,["class"]))}},M={__name:"DialogDescription",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(t){const s=t,a=m(()=>{const{class:o,...r}=s;return r}),l=q(a);return(o,r)=>(d(),i(e(w),_(e(l),{class:e(p)("text-sm text-muted-foreground",s.class)}),{default:n(()=>[c(o.$slots,"default")]),_:3},16,["class"]))}},F=O("span",{class:"sr-only"},"Close",-1),Q={__name:"DialogContent",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(t,{emit:s}){const a=t,l=s,o=m(()=>{const{class:f,...g}=a;return g}),r=y(o,l);return(f,g)=>(d(),i(e(k),null,{default:n(()=>[u(e(P),{class:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"}),u(e($),_(e(r),{class:e(p)("fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a.class)}),{default:n(()=>[c(f.$slots,"default"),u(e(C),{class:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"},{default:n(()=>[u(e(E),{class:"w-4 h-4"}),F]),_:1})]),_:3},16,["class"])]),_:3}))}};export{T as _,V as a,Q as b,J as c,K as d,M as e};
