import{q as k,r as u,j as z,k as H,b as r,d as a,e as S,L as B,M as L,K as _,H as M}from"./@vue-BSHE2yuK.js";const W={class:"bg-[--background-900] w-screen rounded-lg shadow-2xl m-4"},x=170,v=170,t=16,w=32,j={__name:"HomePanel",setup($){const e=k([]),c=u({}),g=u({}),s=u(null),h=()=>{if(s.value){const l=s.value.clientWidth-w,d=s.value.clientHeight-w,o=Math.floor((l+t)/(x+t)),n=Math.floor((d+t)/(v+t)),y=(l-(o-1)*t)/o,p=(d-(n-1)*t)/n;g.value={width:`${y}px`,height:`${p}px`},c.value={gridTemplateColumns:`repeat(auto-fit, minmax(${x}px, 1fr))`,gridAutoRows:`minmax(${v}px, ${p}px)`,gap:`${t}px`};const i=o*n;if(e.length<i){const b=i-e.length;for(let f=0;f<b;f++)e.push(`Item ${e.length+1}`)}else e.length>i&&e.splice(i)}},m=()=>{h()};return z(()=>{h(),window.addEventListener("resize",m)}),H(()=>{window.removeEventListener("resize",m)}),(l,d)=>(r(),a("div",W,[S("div",{ref_key:"gridContainer",ref:s,class:"grid gap-4 rounded-lg w-full h-full shadow-xl p-4",style:_(c.value)},[(r(!0),a(B,null,L(e,(o,n)=>(r(),a("div",{key:n,class:"bg-gray-800 rounded-lg flex items-center justify-center text-3xl cursor-pointer text-white",style:_(g.value)}," + ",4))),128))],4)]))}},C={class:"min-h-[--adjusted-height] pt-[--header-height] bg-[--background-700] flex-grow"},I={__name:"Dashboard",setup($){return(e,c)=>(r(),a("div",C,[M(j)]))}};export{I as default};
