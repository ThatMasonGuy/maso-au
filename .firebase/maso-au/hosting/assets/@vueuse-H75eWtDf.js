import{u as W,g as C,o as N,h as b,p as T,v as $,r as x,w as O,m as D,x as F,c as J}from"./@vue-DsGlF1-j.js";function G(e){return C()?(N(e),!0):!1}const v=new WeakMap,q=(e,n)=>{var r;const t=(r=b())==null?void 0:r.proxy;if(t==null)throw new Error("provideLocal must be called in setup");v.has(t)||v.set(t,Object.create(null));const a=v.get(t);a[e]=n,T(e,n)},B=(...e)=>{var n;const r=e[0],t=(n=b())==null?void 0:n.proxy;if(t==null)throw new Error("injectLocal must be called in setup");return v.has(t)&&r in v.get(t)?v.get(t)[r]:$(...e)};function Y(e,n){const r=Symbol(e.name||"InjectionState"),t=void 0;return[(...f)=>{const c=e(...f);return q(r,c),c},()=>B(r,t)]}function M(e){return typeof e=="function"?e():W(e)}const k=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const R=e=>typeof e<"u",U=Object.prototype.toString,z=e=>U.call(e)==="[object Object]",E=()=>{},H=K();function K(){var e,n;return k&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((n=window==null?void 0:window.navigator)==null?void 0:n.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function g(e){var n;const r=M(e);return(n=r==null?void 0:r.$el)!=null?n:r}const V=k?window:void 0;function j(...e){let n,r,t,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([r,t,a]=e,n=V):[n,r,t,a]=e,!n)return E;Array.isArray(r)||(r=[r]),Array.isArray(t)||(t=[t]);const d=[],f=()=>{d.forEach(u=>u()),d.length=0},c=(u,p,i,o)=>(u.addEventListener(p,i,o),()=>u.removeEventListener(p,i,o)),m=O(()=>[g(n),M(a)],([u,p])=>{if(f(),!u)return;const i=z(p)?{...p}:p;d.push(...r.flatMap(o=>t.map(s=>c(u,o,s,i))))},{immediate:!0,flush:"post"}),w=()=>{m(),f()};return G(w),w}let L=!1;function Z(e,n,r={}){const{window:t=V,ignore:a=[],capture:d=!0,detectIframe:f=!1}=r;if(!t)return E;H&&!L&&(L=!0,Array.from(t.document.body.children).forEach(i=>i.addEventListener("click",E)),t.document.documentElement.addEventListener("click",E));let c=!0;const m=i=>a.some(o=>{if(typeof o=="string")return Array.from(t.document.querySelectorAll(o)).some(s=>s===i.target||i.composedPath().includes(s));{const s=g(o);return s&&(i.target===s||i.composedPath().includes(s))}}),u=[j(t,"click",i=>{const o=g(e);if(!(!o||o===i.target||i.composedPath().includes(o))){if(i.detail===0&&(c=!m(i)),!c){c=!0;return}n(i)}},{passive:!0,capture:d}),j(t,"pointerdown",i=>{const o=g(e);c=!m(i)&&!!(o&&!i.composedPath().includes(o))},{passive:!0}),f&&j(t,"blur",i=>{setTimeout(()=>{var o;const s=g(e);((o=t.document.activeElement)==null?void 0:o.tagName)==="IFRAME"&&!(s!=null&&s.contains(t.document.activeElement))&&n(i)},0)})].filter(Boolean);return()=>u.forEach(i=>i())}function ee(){const e=x(!1),n=b();return n&&D(()=>{e.value=!0},n),e}function Q(e){return JSON.parse(JSON.stringify(e))}function te(e,n,r,t={}){var a,d,f;const{clone:c=!1,passive:m=!1,eventName:w,deep:u=!1,defaultValue:p,shouldEmit:i}=t,o=b(),s=r||(o==null?void 0:o.emit)||((a=o==null?void 0:o.$emit)==null?void 0:a.bind(o))||((f=(d=o==null?void 0:o.proxy)==null?void 0:d.$emit)==null?void 0:f.bind(o==null?void 0:o.proxy));let h=w;h=h||`update:${n.toString()}`;const I=l=>c?typeof c=="function"?c(l):Q(l):l,P=()=>R(e[n])?I(e[n]):p,_=l=>{i?i(l)&&s(h,l):s(h,l)};if(m){const l=P(),A=x(l);let y=!1;return O(()=>e[n],S=>{y||(y=!0,A.value=I(S),F(()=>y=!1))}),O(A,S=>{!y&&(S!==e[n]||u)&&_(S)},{deep:u}),A}else return J({get(){return P()},set(l){_(l)}})}export{ee as a,Y as c,Z as o,te as u};
