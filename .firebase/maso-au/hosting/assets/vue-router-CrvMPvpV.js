import{s as nt,u as W,a6 as rt,v as z,x as ot,i as ze,j as st,c as N,z as qe,p as le,r as ct,w as it}from"./@vue-DsGlF1-j.js";/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const G=typeof document<"u";function at(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const P=Object.assign;function ue(e,t){const n={};for(const r in t){const o=t[r];n[r]=L(o)?o.map(e):e(o)}return n}const F=()=>{},L=Array.isArray,Ge=/#/g,lt=/&/g,ut=/\//g,ft=/=/g,ht=/\?/g,Ke=/\+/g,pt=/%5B/g,dt=/%5D/g,Ve=/%5E/g,mt=/%60/g,Ue=/%7B/g,gt=/%7C/g,De=/%7D/g,vt=/%20/g;function ge(e){return encodeURI(""+e).replace(gt,"|").replace(pt,"[").replace(dt,"]")}function yt(e){return ge(e).replace(Ue,"{").replace(De,"}").replace(Ve,"^")}function pe(e){return ge(e).replace(Ke,"%2B").replace(vt,"+").replace(Ge,"%23").replace(lt,"%26").replace(mt,"`").replace(Ue,"{").replace(De,"}").replace(Ve,"^")}function Rt(e){return pe(e).replace(ft,"%3D")}function Et(e){return ge(e).replace(Ge,"%23").replace(ht,"%3F")}function wt(e){return e==null?"":Et(e).replace(ut,"%2F")}function X(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const Pt=/\/$/,St=e=>e.replace(Pt,"");function fe(e,t,n="/"){let r,o={},a="",d="";const g=t.indexOf("#");let c=t.indexOf("?");return g<c&&g>=0&&(c=-1),c>-1&&(r=t.slice(0,c),a=t.slice(c+1,g>-1?g:t.length),o=e(a)),g>-1&&(r=r||t.slice(0,g),d=t.slice(g,t.length)),r=At(r??t,n),{fullPath:r+(a&&"?")+a+d,path:r,query:o,hash:X(d)}}function bt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function be(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function kt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&K(t.matched[r],n.matched[o])&&Qe(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function K(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Qe(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Ct(e[n],t[n]))return!1;return!0}function Ct(e,t){return L(e)?ke(e,t):L(t)?ke(t,e):e===t}function ke(e,t){return L(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function At(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];(o===".."||o===".")&&r.push("");let a=n.length-1,d,g;for(d=0;d<r.length;d++)if(g=r[d],g!==".")if(g==="..")a>1&&a--;else break;return n.slice(0,a).join("/")+"/"+r.slice(d).join("/")}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Z;(function(e){e.pop="pop",e.push="push"})(Z||(Z={}));var Y;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Y||(Y={}));function _t(e){if(!e)if(G){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),St(e)}const Ot=/^[^#]+#/;function xt(e,t){return e.replace(Ot,"#")+t}function Mt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const te=()=>({left:window.scrollX,top:window.scrollY});function It(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Mt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ce(e,t){return(history.state?history.state.position-t:-1)+e}const de=new Map;function Lt(e,t){de.set(e,t)}function Nt(e){const t=de.get(e);return de.delete(e),t}let jt=()=>location.protocol+"//"+location.host;function We(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let g=o.includes(e.slice(a))?e.slice(a).length:1,c=o.slice(g);return c[0]!=="/"&&(c="/"+c),be(c,"")}return be(n,e)+r+o}function Tt(e,t,n,r){let o=[],a=[],d=null;const g=({state:l})=>{const u=We(e,location),w=n.value,S=t.value;let C=0;if(l){if(n.value=u,t.value=l,d&&d===w){d=null;return}C=S?l.position-S.position:0}else r(u);o.forEach(A=>{A(n.value,w,{delta:C,type:Z.pop,direction:C?C>0?Y.forward:Y.back:Y.unknown})})};function c(){d=n.value}function f(l){o.push(l);const u=()=>{const w=o.indexOf(l);w>-1&&o.splice(w,1)};return a.push(u),u}function h(){const{history:l}=window;l.state&&l.replaceState(P({},l.state,{scroll:te()}),"")}function i(){for(const l of a)l();a=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:f,destroy:i}}function Ae(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?te():null}}function $t(e){const{history:t,location:n}=window,r={value:We(e,n)},o={value:t.state};o.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(c,f,h){const i=e.indexOf("#"),l=i>-1?(n.host&&document.querySelector("base")?e:e.slice(i))+c:jt()+e+c;try{t[h?"replaceState":"pushState"](f,"",l),o.value=f}catch(u){console.error(u),n[h?"replace":"assign"](l)}}function d(c,f){const h=P({},t.state,Ae(o.value.back,c,o.value.forward,!0),f,{position:o.value.position});a(c,h,!0),r.value=c}function g(c,f){const h=P({},o.value,t.state,{forward:c,scroll:te()});a(h.current,h,!0);const i=P({},Ae(r.value,c,null),{position:h.position+1},f);a(c,i,!1),r.value=c}return{location:r,state:o,push:g,replace:d}}function hn(e){e=_t(e);const t=$t(e),n=Tt(e,t.state,t.location,t.replace);function r(a,d=!0){d||n.pauseListeners(),history.go(a)}const o=P({location:"",base:e,go:r,createHref:xt.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Bt(e){return typeof e=="string"||e&&typeof e=="object"}function Fe(e){return typeof e=="string"||typeof e=="symbol"}const Ye=Symbol("");var _e;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(_e||(_e={}));function V(e,t){return P(new Error,{type:e,[Ye]:!0},t)}function j(e,t){return e instanceof Error&&Ye in e&&(t==null||!!(e.type&t))}const Oe="[^/]+?",Ht={sensitive:!1,strict:!1,start:!0,end:!0},zt=/[.+*?^${}()[\]/\\]/g;function qt(e,t){const n=P({},Ht,t),r=[];let o=n.start?"^":"";const a=[];for(const f of e){const h=f.length?[]:[90];n.strict&&!f.length&&(o+="/");for(let i=0;i<f.length;i++){const l=f[i];let u=40+(n.sensitive?.25:0);if(l.type===0)i||(o+="/"),o+=l.value.replace(zt,"\\$&"),u+=40;else if(l.type===1){const{value:w,repeatable:S,optional:C,regexp:A}=l;a.push({name:w,repeatable:S,optional:C});const E=A||Oe;if(E!==Oe){u+=10;try{new RegExp(`(${E})`)}catch(I){throw new Error(`Invalid custom RegExp for param "${w}" (${E}): `+I.message)}}let b=S?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;i||(b=C&&f.length<2?`(?:/${b})`:"/"+b),C&&(b+="?"),o+=b,u+=20,C&&(u+=-8),S&&(u+=-20),E===".*"&&(u+=-50)}h.push(u)}r.push(h)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const d=new RegExp(o,n.sensitive?"":"i");function g(f){const h=f.match(d),i={};if(!h)return null;for(let l=1;l<h.length;l++){const u=h[l]||"",w=a[l-1];i[w.name]=u&&w.repeatable?u.split("/"):u}return i}function c(f){let h="",i=!1;for(const l of e){(!i||!h.endsWith("/"))&&(h+="/"),i=!1;for(const u of l)if(u.type===0)h+=u.value;else if(u.type===1){const{value:w,repeatable:S,optional:C}=u,A=w in f?f[w]:"";if(L(A)&&!S)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const E=L(A)?A.join("/"):A;if(!E)if(C)l.length<2&&(h.endsWith("/")?h=h.slice(0,-1):i=!0);else throw new Error(`Missing required param "${w}"`);h+=E}}return h||"/"}return{re:d,score:r,keys:a,parse:g,stringify:c}}function Gt(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function Xe(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const a=Gt(r[n],o[n]);if(a)return a;n++}if(Math.abs(o.length-r.length)===1){if(xe(r))return 1;if(xe(o))return-1}return o.length-r.length}function xe(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Kt={type:0,value:""},Vt=/[a-zA-Z0-9_]/;function Ut(e){if(!e)return[[]];if(e==="/")return[[Kt]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(u){throw new Error(`ERR (${n})/"${f}": ${u}`)}let n=0,r=n;const o=[];let a;function d(){a&&o.push(a),a=[]}let g=0,c,f="",h="";function i(){f&&(n===0?a.push({type:0,value:f}):n===1||n===2||n===3?(a.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:f,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),f="")}function l(){f+=c}for(;g<e.length;){if(c=e[g++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(f&&i(),d()):c===":"?(i(),n=1):l();break;case 4:l(),n=r;break;case 1:c==="("?n=2:Vt.test(c)?l():(i(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&g--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:i(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&g--,h="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),i(),d(),o}function Dt(e,t,n){const r=qt(Ut(e.path),n),o=P(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function Qt(e,t){const n=[],r=new Map;t=Le({strict:!1,end:!0,sensitive:!1},t);function o(i){return r.get(i)}function a(i,l,u){const w=!u,S=Wt(i);S.aliasOf=u&&u.record;const C=Le(t,i),A=[S];if("alias"in i){const I=typeof i.alias=="string"?[i.alias]:i.alias;for(const H of I)A.push(P({},S,{components:u?u.record.components:S.components,path:H,aliasOf:u?u.record:S}))}let E,b;for(const I of A){const{path:H}=I;if(l&&H[0]!=="/"){const T=l.record.path,M=T[T.length-1]==="/"?"":"/";I.path=l.record.path+(H&&M+H)}if(E=Dt(I,l,C),u?u.alias.push(E):(b=b||E,b!==E&&b.alias.push(E),w&&i.name&&!Ie(E)&&d(i.name)),Ze(E)&&c(E),S.children){const T=S.children;for(let M=0;M<T.length;M++)a(T[M],E,u&&u.children[M])}u=u||E}return b?()=>{d(b)}:F}function d(i){if(Fe(i)){const l=r.get(i);l&&(r.delete(i),n.splice(n.indexOf(l),1),l.children.forEach(d),l.alias.forEach(d))}else{const l=n.indexOf(i);l>-1&&(n.splice(l,1),i.record.name&&r.delete(i.record.name),i.children.forEach(d),i.alias.forEach(d))}}function g(){return n}function c(i){const l=Xt(i,n);n.splice(l,0,i),i.record.name&&!Ie(i)&&r.set(i.record.name,i)}function f(i,l){let u,w={},S,C;if("name"in i&&i.name){if(u=r.get(i.name),!u)throw V(1,{location:i});C=u.record.name,w=P(Me(l.params,u.keys.filter(b=>!b.optional).concat(u.parent?u.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),i.params&&Me(i.params,u.keys.map(b=>b.name))),S=u.stringify(w)}else if(i.path!=null)S=i.path,u=n.find(b=>b.re.test(S)),u&&(w=u.parse(S),C=u.record.name);else{if(u=l.name?r.get(l.name):n.find(b=>b.re.test(l.path)),!u)throw V(1,{location:i,currentLocation:l});C=u.record.name,w=P({},l.params,i.params),S=u.stringify(w)}const A=[];let E=u;for(;E;)A.unshift(E.record),E=E.parent;return{name:C,path:S,params:w,matched:A,meta:Yt(A)}}e.forEach(i=>a(i));function h(){n.length=0,r.clear()}return{addRoute:a,resolve:f,removeRoute:d,clearRoutes:h,getRoutes:g,getRecordMatcher:o}}function Me(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Wt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ft(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ft(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Ie(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Yt(e){return e.reduce((t,n)=>P(t,n.meta),{})}function Le(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Xt(e,t){let n=0,r=t.length;for(;n!==r;){const a=n+r>>1;Xe(e,t[a])<0?r=a:n=a+1}const o=Zt(e);return o&&(r=t.lastIndexOf(o,r-1)),r}function Zt(e){let t=e;for(;t=t.parent;)if(Ze(t)&&Xe(e,t)===0)return t}function Ze({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Jt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const a=r[o].replace(Ke," "),d=a.indexOf("="),g=X(d<0?a:a.slice(0,d)),c=d<0?null:X(a.slice(d+1));if(g in t){let f=t[g];L(f)||(f=t[g]=[f]),f.push(c)}else t[g]=c}return t}function Ne(e){let t="";for(let n in e){const r=e[n];if(n=Rt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(L(r)?r.map(a=>a&&pe(a)):[r&&pe(r)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+n,a!=null&&(t+="="+a))})}return t}function en(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=L(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const tn=Symbol(""),je=Symbol(""),ne=Symbol(""),ve=Symbol(""),me=Symbol("");function Q(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function B(e,t,n,r,o,a=d=>d()){const d=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((g,c)=>{const f=l=>{l===!1?c(V(4,{from:n,to:t})):l instanceof Error?c(l):Bt(l)?c(V(2,{from:t,to:l})):(d&&r.enterCallbacks[o]===d&&typeof l=="function"&&d.push(l),g())},h=a(()=>e.call(r&&r.instances[o],t,n,f));let i=Promise.resolve(h);e.length<3&&(i=i.then(f)),i.catch(l=>c(l))})}function he(e,t,n,r,o=a=>a()){const a=[];for(const d of e)for(const g in d.components){let c=d.components[g];if(!(t!=="beforeRouteEnter"&&!d.instances[g]))if(nn(c)){const h=(c.__vccOpts||c)[t];h&&a.push(B(h,n,r,d,g,o))}else{let f=c();a.push(()=>f.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${g}" at "${d.path}"`));const i=at(h)?h.default:h;d.components[g]=i;const u=(i.__vccOpts||i)[t];return u&&B(u,n,r,d,g,o)()}))}}return a}function nn(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Te(e){const t=z(ne),n=z(ve),r=N(()=>{const c=W(e.to);return t.resolve(c)}),o=N(()=>{const{matched:c}=r.value,{length:f}=c,h=c[f-1],i=n.matched;if(!h||!i.length)return-1;const l=i.findIndex(K.bind(null,h));if(l>-1)return l;const u=$e(c[f-2]);return f>1&&$e(h)===u&&i[i.length-1].path!==u?i.findIndex(K.bind(null,c[f-2])):l}),a=N(()=>o.value>-1&&cn(n.params,r.value.params)),d=N(()=>o.value>-1&&o.value===n.matched.length-1&&Qe(n.params,r.value.params));function g(c={}){return sn(c)?t[W(e.replace)?"replace":"push"](W(e.to)).catch(F):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:a,isExactActive:d,navigate:g}}const rn=ze({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Te,setup(e,{slots:t}){const n=st(Te(e)),{options:r}=z(ne),o=N(()=>({[Be(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Be(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const a=t.default&&t.default(n);return e.custom?a:qe("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},a)}}}),on=rn;function sn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function cn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!L(o)||o.length!==r.length||r.some((a,d)=>a!==o[d]))return!1}return!0}function $e(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Be=(e,t,n)=>e??t??n,an=ze({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=z(me),o=N(()=>e.route||r.value),a=z(je,0),d=N(()=>{let f=W(a);const{matched:h}=o.value;let i;for(;(i=h[f])&&!i.components;)f++;return f}),g=N(()=>o.value.matched[d.value]);le(je,N(()=>d.value+1)),le(tn,g),le(me,o);const c=ct();return it(()=>[c.value,g.value,e.name],([f,h,i],[l,u,w])=>{h&&(h.instances[i]=f,u&&u!==h&&f&&f===l&&(h.leaveGuards.size||(h.leaveGuards=u.leaveGuards),h.updateGuards.size||(h.updateGuards=u.updateGuards))),f&&h&&(!u||!K(h,u)||!l)&&(h.enterCallbacks[i]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=o.value,h=e.name,i=g.value,l=i&&i.components[h];if(!l)return He(n.default,{Component:l,route:f});const u=i.props[h],w=u?u===!0?f.params:typeof u=="function"?u(f):u:null,C=qe(l,P({},w,t,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(i.instances[h]=null)},ref:c}));return He(n.default,{Component:C,route:f})||C}}});function He(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ln=an;function pn(e){const t=Qt(e.routes,e),n=e.parseQuery||Jt,r=e.stringifyQuery||Ne,o=e.history,a=Q(),d=Q(),g=Q(),c=nt($);let f=$;G&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=ue.bind(null,s=>""+s),i=ue.bind(null,wt),l=ue.bind(null,X);function u(s,m){let p,v;return Fe(s)?(p=t.getRecordMatcher(s),v=m):v=s,t.addRoute(v,p)}function w(s){const m=t.getRecordMatcher(s);m&&t.removeRoute(m)}function S(){return t.getRoutes().map(s=>s.record)}function C(s){return!!t.getRecordMatcher(s)}function A(s,m){if(m=P({},m||c.value),typeof s=="string"){const y=fe(n,s,m.path),O=t.resolve({path:y.path},m),D=o.createHref(y.fullPath);return P(y,O,{params:l(O.params),hash:X(y.hash),redirectedFrom:void 0,href:D})}let p;if(s.path!=null)p=P({},s,{path:fe(n,s.path,m.path).path});else{const y=P({},s.params);for(const O in y)y[O]==null&&delete y[O];p=P({},s,{params:i(y)}),m.params=i(m.params)}const v=t.resolve(p,m),k=s.hash||"";v.params=h(l(v.params));const _=bt(r,P({},s,{hash:yt(k),path:v.path})),R=o.createHref(_);return P({fullPath:_,hash:k,query:r===Ne?en(s.query):s.query||{}},v,{redirectedFrom:void 0,href:R})}function E(s){return typeof s=="string"?fe(n,s,c.value.path):P({},s)}function b(s,m){if(f!==s)return V(8,{from:m,to:s})}function I(s){return M(s)}function H(s){return I(P(E(s),{replace:!0}))}function T(s){const m=s.matched[s.matched.length-1];if(m&&m.redirect){const{redirect:p}=m;let v=typeof p=="function"?p(s):p;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=E(v):{path:v},v.params={}),P({query:s.query,hash:s.hash,params:v.path!=null?{}:s.params},v)}}function M(s,m){const p=f=A(s),v=c.value,k=s.state,_=s.force,R=s.replace===!0,y=T(p);if(y)return M(P(E(y),{state:typeof y=="object"?P({},k,y.state):k,force:_,replace:R}),m||p);const O=p;O.redirectedFrom=m;let D;return!_&&kt(r,v,p)&&(D=V(16,{to:O,from:v}),Pe(v,v,!0,!1)),(D?Promise.resolve(D):ye(O,v)).catch(x=>j(x)?j(x,2)?x:ce(x):se(x,O,v)).then(x=>{if(x){if(j(x,2))return M(P({replace:R},E(x.to),{state:typeof x.to=="object"?P({},k,x.to.state):k,force:_}),m||O)}else x=Ee(O,v,!0,R,k);return Re(O,v,x),x})}function Je(s,m){const p=b(s,m);return p?Promise.reject(p):Promise.resolve()}function re(s){const m=ee.values().next().value;return m&&typeof m.runWithContext=="function"?m.runWithContext(s):s()}function ye(s,m){let p;const[v,k,_]=un(s,m);p=he(v.reverse(),"beforeRouteLeave",s,m);for(const y of v)y.leaveGuards.forEach(O=>{p.push(B(O,s,m))});const R=Je.bind(null,s,m);return p.push(R),q(p).then(()=>{p=[];for(const y of a.list())p.push(B(y,s,m));return p.push(R),q(p)}).then(()=>{p=he(k,"beforeRouteUpdate",s,m);for(const y of k)y.updateGuards.forEach(O=>{p.push(B(O,s,m))});return p.push(R),q(p)}).then(()=>{p=[];for(const y of _)if(y.beforeEnter)if(L(y.beforeEnter))for(const O of y.beforeEnter)p.push(B(O,s,m));else p.push(B(y.beforeEnter,s,m));return p.push(R),q(p)}).then(()=>(s.matched.forEach(y=>y.enterCallbacks={}),p=he(_,"beforeRouteEnter",s,m,re),p.push(R),q(p))).then(()=>{p=[];for(const y of d.list())p.push(B(y,s,m));return p.push(R),q(p)}).catch(y=>j(y,8)?y:Promise.reject(y))}function Re(s,m,p){g.list().forEach(v=>re(()=>v(s,m,p)))}function Ee(s,m,p,v,k){const _=b(s,m);if(_)return _;const R=m===$,y=G?history.state:{};p&&(v||R?o.replace(s.fullPath,P({scroll:R&&y&&y.scroll},k)):o.push(s.fullPath,k)),c.value=s,Pe(s,m,p,R),ce()}let U;function et(){U||(U=o.listen((s,m,p)=>{if(!Se.listening)return;const v=A(s),k=T(v);if(k){M(P(k,{replace:!0}),v).catch(F);return}f=v;const _=c.value;G&&Lt(Ce(_.fullPath,p.delta),te()),ye(v,_).catch(R=>j(R,12)?R:j(R,2)?(M(R.to,v).then(y=>{j(y,20)&&!p.delta&&p.type===Z.pop&&o.go(-1,!1)}).catch(F),Promise.reject()):(p.delta&&o.go(-p.delta,!1),se(R,v,_))).then(R=>{R=R||Ee(v,_,!1),R&&(p.delta&&!j(R,8)?o.go(-p.delta,!1):p.type===Z.pop&&j(R,20)&&o.go(-1,!1)),Re(v,_,R)}).catch(F)}))}let oe=Q(),we=Q(),J;function se(s,m,p){ce(s);const v=we.list();return v.length?v.forEach(k=>k(s,m,p)):console.error(s),Promise.reject(s)}function tt(){return J&&c.value!==$?Promise.resolve():new Promise((s,m)=>{oe.add([s,m])})}function ce(s){return J||(J=!s,et(),oe.list().forEach(([m,p])=>s?p(s):m()),oe.reset()),s}function Pe(s,m,p,v){const{scrollBehavior:k}=e;if(!G||!k)return Promise.resolve();const _=!p&&Nt(Ce(s.fullPath,0))||(v||!p)&&history.state&&history.state.scroll||null;return ot().then(()=>k(s,m,_)).then(R=>R&&It(R)).catch(R=>se(R,s,m))}const ie=s=>o.go(s);let ae;const ee=new Set,Se={currentRoute:c,listening:!0,addRoute:u,removeRoute:w,clearRoutes:t.clearRoutes,hasRoute:C,getRoutes:S,resolve:A,options:e,push:I,replace:H,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:a.add,beforeResolve:d.add,afterEach:g.add,onError:we.add,isReady:tt,install(s){const m=this;s.component("RouterLink",on),s.component("RouterView",ln),s.config.globalProperties.$router=m,Object.defineProperty(s.config.globalProperties,"$route",{enumerable:!0,get:()=>W(c)}),G&&!ae&&c.value===$&&(ae=!0,I(o.location).catch(k=>{}));const p={};for(const k in $)Object.defineProperty(p,k,{get:()=>c.value[k],enumerable:!0});s.provide(ne,m),s.provide(ve,rt(p)),s.provide(me,c);const v=s.unmount;ee.add(s),s.unmount=function(){ee.delete(s),ee.size<1&&(f=$,U&&U(),U=null,c.value=$,ae=!1,J=!1),v()}}};function q(s){return s.reduce((m,p)=>m.then(()=>re(p)),Promise.resolve())}return Se}function un(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let d=0;d<a;d++){const g=t.matched[d];g&&(e.matched.find(f=>K(f,g))?r.push(g):n.push(g));const c=e.matched[d];c&&(t.matched.find(f=>K(f,c))||o.push(c))}return[n,r,o]}function dn(){return z(ne)}function mn(e){return z(ve)}export{dn as a,hn as b,pn as c,mn as u};
