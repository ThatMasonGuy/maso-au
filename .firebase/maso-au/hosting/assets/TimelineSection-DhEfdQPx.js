import{b as e,d as s,e as t,L as c,M as l,S as o}from"./@vue-BSHE2yuK.js";const i={id:"timeline",class:"bg-[#956CC6] text-gray-200 -mt-8 py-2 px-4 sm:px-6"},m=t("h2",{class:"text-2xl sm:text-3xl font-bold text-center mb-4"},"My Photography Through the Years",-1),x={class:"max-w-2xl mx-auto"},d={class:"text-sm sm:text-base"},_={class:"text-sm sm:text-base"},b={__name:"TimelineSection",props:{data:{type:Object,required:!0}},setup(r){return(p,h)=>(e(),s("section",i,[m,t("ul",x,[(e(!0),s(c,null,l(r.data,(a,n)=>(e(),s("li",{key:n,class:"mb-4"},[t("strong",d,o(a.date)+":",1),t("span",_,o(a.description),1)]))),128))])]))}};export{b as default};
