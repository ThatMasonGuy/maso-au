import{x as m,a9 as g,_,aa as y,ab as b,ac as q}from"./radix-vue-6Z8x3TUN.js";import{b as n,D as i,E as u,q as d,H as v,I as h,u as a,c,G as p}from"./@vue-DsGlF1-j.js";import{h as f}from"./index-fh3STtDl.js";const w={__name:"Tabs",props:{defaultValue:{type:null,required:!1},orientation:{type:String,required:!1},dir:{type:String,required:!1},activationMode:{type:String,required:!1},modelValue:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(r,{emit:e}){const s=m(r,e);return(o,x)=>(n(),i(a(g),v(h(a(s))),{default:u(()=>[d(o.$slots,"default")]),_:3},16))}},C={__name:"TabsTrigger",props:{value:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(r){const e=r,l=c(()=>{const{class:s,...o}=e;return o}),t=_(l);return(s,o)=>(n(),i(a(y),p(a(t),{class:a(f)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",e.class)}),{default:u(()=>[d(s.$slots,"default")]),_:3},16,["class"]))}},S={__name:"TabsList",props:{loop:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(r){const e=r,l=c(()=>{const{class:t,...s}=e;return s});return(t,s)=>(n(),i(a(b),p(l.value,{class:a(f)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",e.class)}),{default:u(()=>[d(t.$slots,"default")]),_:3},16,["class"]))}},T={__name:"TabsContent",props:{value:{type:[String,Number],required:!0},forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},class:{type:null,required:!1}},setup(r){const e=r,l=c(()=>{const{class:t,...s}=e;return s});return(t,s)=>(n(),i(a(q),p({class:a(f)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e.class)},l.value),{default:u(()=>[d(t.$slots,"default")]),_:3},16,["class"]))}};export{S as _,C as a,T as b,w as c};
