import{I as $}from"./internmap-BkD7Hj8s.js";import{r as rn,d as q,t as en,f as D,g as un,h as an,q as on}from"./d3-array-BJvpcdQ_.js";import{f as B,p as cn,a as ln,b as sn,c as fn,d as W}from"./d3-format-CzD4bSOQ.js";import{t as gn,u as mn}from"./d3-time-format-COsUQkot.js";import{s as G,t as hn,a as pn,b as dn,c as Mn,d as yn,e as vn,f as kn,g as wn,u as Nn,h as bn,i as An,j as In,k as qn,l as Sn,m as Dn,n as Fn}from"./d3-time-B8hJ2rEE.js";import{a as Rn,i as O,b as E,p as On}from"./d3-interpolate-DY0Cqdkz.js";function w(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}function J(n,t){switch(arguments.length){case 0:break;case 1:{typeof n=="function"?this.interpolator(n):this.range(n);break}default:{this.domain(n),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}const Y=Symbol("implicit");function K(){var n=new $,t=[],u=[],r=Y;function i(e){let a=n.get(e);if(a===void 0){if(r!==Y)return r;n.set(e,a=t.push(e)-1)}return u[a%u.length]}return i.domain=function(e){if(!arguments.length)return t.slice();t=[],n=new $;for(const a of e)n.has(a)||n.set(a,t.push(a)-1);return i},i.range=function(e){return arguments.length?(u=Array.from(e),i):u.slice()},i.unknown=function(e){return arguments.length?(r=e,i):r},i.copy=function(){return K(t,u).unknown(r)},w.apply(i,arguments),i}function Q(){var n=K().unknown(void 0),t=n.domain,u=n.range,r=0,i=1,e,a,l=!1,s=0,o=0,g=.5;delete n.unknown;function f(){var c=t().length,h=i<r,d=h?i:r,m=h?r:i;e=(m-d)/Math.max(1,c-s+o*2),l&&(e=Math.floor(e)),d+=(m-d-e*(c-s))*g,a=e*(1-s),l&&(d=Math.round(d),a=Math.round(a));var v=rn(c).map(function(M){return d+e*M});return u(h?v.reverse():v)}return n.domain=function(c){return arguments.length?(t(c),f()):t()},n.range=function(c){return arguments.length?([r,i]=c,r=+r,i=+i,f()):[r,i]},n.rangeRound=function(c){return[r,i]=c,r=+r,i=+i,l=!0,f()},n.bandwidth=function(){return a},n.step=function(){return e},n.round=function(c){return arguments.length?(l=!!c,f()):l},n.padding=function(c){return arguments.length?(s=Math.min(1,o=+c),f()):s},n.paddingInner=function(c){return arguments.length?(s=Math.min(1,c),f()):s},n.paddingOuter=function(c){return arguments.length?(o=+c,f()):o},n.align=function(c){return arguments.length?(g=Math.max(0,Math.min(1,c)),f()):g},n.copy=function(){return Q(t(),[r,i]).round(l).paddingInner(s).paddingOuter(o).align(g)},w.apply(f(),arguments)}function V(n){var t=n.copy;return n.padding=n.paddingOuter,delete n.paddingInner,delete n.paddingOuter,n.copy=function(){return V(t())},n}function gt(){return V(Q.apply(null,arguments).paddingInner(1))}function En(n){return function(){return n}}function F(n){return+n}var j=[0,1];function y(n){return n}function R(n,t){return(t-=n=+n)?function(u){return(u-n)/t}:En(isNaN(t)?NaN:.5)}function Tn(n,t){var u;return n>t&&(u=n,n=t,t=u),function(r){return Math.max(n,Math.min(t,r))}}function $n(n,t,u){var r=n[0],i=n[1],e=t[0],a=t[1];return i<r?(r=R(i,r),e=u(a,e)):(r=R(r,i),e=u(e,a)),function(l){return e(r(l))}}function Yn(n,t,u){var r=Math.min(n.length,t.length)-1,i=new Array(r),e=new Array(r),a=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++a<r;)i[a]=R(n[a],n[a+1]),e[a]=u(t[a],t[a+1]);return function(l){var s=q(n,l,1,r)-1;return e[s](i[s](l))}}function b(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function S(){var n=j,t=j,u=O,r,i,e,a=y,l,s,o;function g(){var c=Math.min(n.length,t.length);return a!==y&&(a=Tn(n[0],n[c-1])),l=c>2?Yn:$n,s=o=null,f}function f(c){return c==null||isNaN(c=+c)?e:(s||(s=l(n.map(r),t,u)))(r(a(c)))}return f.invert=function(c){return a(i((o||(o=l(t,n.map(r),Rn)))(c)))},f.domain=function(c){return arguments.length?(n=Array.from(c,F),g()):n.slice()},f.range=function(c){return arguments.length?(t=Array.from(c),g()):t.slice()},f.rangeRound=function(c){return t=Array.from(c),u=E,g()},f.clamp=function(c){return arguments.length?(a=c?!0:y,g()):a!==y},f.interpolate=function(c){return arguments.length?(u=c,g()):u},f.unknown=function(c){return arguments.length?(e=c,f):e},function(c,h){return r=c,i=h,g()}}function X(){return S()(y,y)}function jn(n,t,u,r){var i=en(n,t,u),e;switch(r=B(r??",f"),r.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(t));return r.precision==null&&!isNaN(e=sn(i,a))&&(r.precision=e),fn(r,a)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(e=ln(i,Math.max(Math.abs(n),Math.abs(t))))&&(r.precision=e-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(e=cn(i))&&(r.precision=e-(r.type==="%")*2);break}}return W(r)}function N(n){var t=n.domain;return n.ticks=function(u){var r=t();return D(r[0],r[r.length-1],u??10)},n.tickFormat=function(u,r){var i=t();return jn(i[0],i[i.length-1],u??10,r)},n.nice=function(u){u==null&&(u=10);var r=t(),i=0,e=r.length-1,a=r[i],l=r[e],s,o,g=10;for(l<a&&(o=a,a=l,l=o,o=i,i=e,e=o);g-- >0;){if(o=un(a,l,u),o===s)return r[i]=a,r[e]=l,t(r);if(o>0)a=Math.floor(a/o)*o,l=Math.ceil(l/o)*o;else if(o<0)a=Math.ceil(a*o)/o,l=Math.floor(l*o)/o;else break;s=o}return n},n}function zn(){var n=X();return n.copy=function(){return b(n,zn())},w.apply(n,arguments),N(n)}function Hn(n){var t;function u(r){return r==null||isNaN(r=+r)?t:r}return u.invert=u,u.domain=u.range=function(r){return arguments.length?(n=Array.from(r,F),u):n.slice()},u.unknown=function(r){return arguments.length?(t=r,u):t},u.copy=function(){return Hn(n).unknown(t)},n=arguments.length?Array.from(n,F):[0,1],N(u)}function Z(n,t){n=n.slice();var u=0,r=n.length-1,i=n[u],e=n[r],a;return e<i&&(a=u,u=r,r=a,a=i,i=e,e=a),n[u]=t.floor(i),n[r]=t.ceil(e),n}function z(n){return Math.log(n)}function H(n){return Math.exp(n)}function Ln(n){return-Math.log(-n)}function Pn(n){return-Math.exp(-n)}function Cn(n){return isFinite(n)?+("1e"+n):n<0?0:n}function Un(n){return n===10?Cn:n===Math.E?Math.exp:t=>Math.pow(n,t)}function Bn(n){return n===Math.E?Math.log:n===10&&Math.log10||n===2&&Math.log2||(n=Math.log(n),t=>Math.log(t)/n)}function L(n){return(t,u)=>-n(-t,u)}function Wn(n){const t=n(z,H),u=t.domain;let r=10,i,e;function a(){return i=Bn(r),e=Un(r),u()[0]<0?(i=L(i),e=L(e),n(Ln,Pn)):n(z,H),t}return t.base=function(l){return arguments.length?(r=+l,a()):r},t.domain=function(l){return arguments.length?(u(l),a()):u()},t.ticks=l=>{const s=u();let o=s[0],g=s[s.length-1];const f=g<o;f&&([o,g]=[g,o]);let c=i(o),h=i(g),d,m;const v=l==null?10:+l;let M=[];if(!(r%1)&&h-c<v){if(c=Math.floor(c),h=Math.ceil(h),o>0){for(;c<=h;++c)for(d=1;d<r;++d)if(m=c<0?d/e(-c):d*e(c),!(m<o)){if(m>g)break;M.push(m)}}else for(;c<=h;++c)for(d=r-1;d>=1;--d)if(m=c>0?d/e(-c):d*e(c),!(m<o)){if(m>g)break;M.push(m)}M.length*2<v&&(M=D(o,g,v))}else M=D(c,h,Math.min(h-c,v)).map(e);return f?M.reverse():M},t.tickFormat=(l,s)=>{if(l==null&&(l=10),s==null&&(s=r===10?"s":","),typeof s!="function"&&(!(r%1)&&(s=B(s)).precision==null&&(s.trim=!0),s=W(s)),l===1/0)return s;const o=Math.max(1,r*l/t.ticks().length);return g=>{let f=g/e(Math.round(i(g)));return f*r<r-.5&&(f*=r),f<=o?s(g):""}},t.nice=()=>u(Z(u(),{floor:l=>e(Math.floor(i(l))),ceil:l=>e(Math.ceil(i(l)))})),t}function Gn(){const n=Wn(S()).domain([1,10]);return n.copy=()=>b(n,Gn()).base(n.base()),w.apply(n,arguments),n}function P(n){return function(t){return Math.sign(t)*Math.log1p(Math.abs(t/n))}}function C(n){return function(t){return Math.sign(t)*Math.expm1(Math.abs(t))*n}}function Jn(n){var t=1,u=n(P(t),C(t));return u.constant=function(r){return arguments.length?n(P(t=+r),C(t)):t},N(u)}function Kn(){var n=Jn(S());return n.copy=function(){return b(n,Kn()).constant(n.constant())},w.apply(n,arguments)}function U(n){return function(t){return t<0?-Math.pow(-t,n):Math.pow(t,n)}}function Qn(n){return n<0?-Math.sqrt(-n):Math.sqrt(n)}function Vn(n){return n<0?-n*n:n*n}function Xn(n){var t=n(y,y),u=1;function r(){return u===1?n(y,y):u===.5?n(Qn,Vn):n(U(u),U(1/u))}return t.exponent=function(i){return arguments.length?(u=+i,r()):u},N(t)}function _(){var n=Xn(S());return n.copy=function(){return b(n,_()).exponent(n.exponent())},w.apply(n,arguments),n}function mt(){return _.apply(null,arguments).exponent(.5)}function Zn(){var n=[],t=[],u=[],r;function i(){var a=0,l=Math.max(1,t.length);for(u=new Array(l-1);++a<l;)u[a-1]=on(n,a/l);return e}function e(a){return a==null||isNaN(a=+a)?r:t[q(u,a)]}return e.invertExtent=function(a){var l=t.indexOf(a);return l<0?[NaN,NaN]:[l>0?u[l-1]:n[0],l<u.length?u[l]:n[n.length-1]]},e.domain=function(a){if(!arguments.length)return n.slice();n=[];for(let l of a)l!=null&&!isNaN(l=+l)&&n.push(l);return n.sort(an),i()},e.range=function(a){return arguments.length?(t=Array.from(a),i()):t.slice()},e.unknown=function(a){return arguments.length?(r=a,e):r},e.quantiles=function(){return u.slice()},e.copy=function(){return Zn().domain(n).range(t).unknown(r)},w.apply(e,arguments)}function _n(){var n=0,t=1,u=1,r=[.5],i=[0,1],e;function a(s){return s!=null&&s<=s?i[q(r,s,0,u)]:e}function l(){var s=-1;for(r=new Array(u);++s<u;)r[s]=((s+1)*t-(s-u)*n)/(u+1);return a}return a.domain=function(s){return arguments.length?([n,t]=s,n=+n,t=+t,l()):[n,t]},a.range=function(s){return arguments.length?(u=(i=Array.from(s)).length-1,l()):i.slice()},a.invertExtent=function(s){var o=i.indexOf(s);return o<0?[NaN,NaN]:o<1?[n,r[0]]:o>=u?[r[u-1],t]:[r[o-1],r[o]]},a.unknown=function(s){return arguments.length&&(e=s),a},a.thresholds=function(){return r.slice()},a.copy=function(){return _n().domain([n,t]).range(i).unknown(e)},w.apply(N(a),arguments)}function xn(){var n=[.5],t=[0,1],u,r=1;function i(e){return e!=null&&e<=e?t[q(n,e,0,r)]:u}return i.domain=function(e){return arguments.length?(n=Array.from(e),r=Math.min(n.length,t.length-1),i):n.slice()},i.range=function(e){return arguments.length?(t=Array.from(e),r=Math.min(n.length,t.length-1),i):t.slice()},i.invertExtent=function(e){var a=t.indexOf(e);return[n[a-1],n[a]]},i.unknown=function(e){return arguments.length?(u=e,i):u},i.copy=function(){return xn().domain(n).range(t).unknown(u)},w.apply(i,arguments)}function nt(n){return new Date(n)}function tt(n){return n instanceof Date?+n:+new Date(+n)}function T(n,t,u,r,i,e,a,l,s,o){var g=X(),f=g.invert,c=g.domain,h=o(".%L"),d=o(":%S"),m=o("%I:%M"),v=o("%I %p"),M=o("%a %d"),A=o("%b %d"),I=o("%B"),nn=o("%Y");function tn(p){return(s(p)<p?h:l(p)<p?d:a(p)<p?m:e(p)<p?v:r(p)<p?i(p)<p?M:A:u(p)<p?I:nn)(p)}return g.invert=function(p){return new Date(f(p))},g.domain=function(p){return arguments.length?c(Array.from(p,tt)):c().map(nt)},g.ticks=function(p){var k=c();return n(k[0],k[k.length-1],p??10)},g.tickFormat=function(p,k){return k==null?tn:o(k)},g.nice=function(p){var k=c();return(!p||typeof p.range!="function")&&(p=t(k[0],k[k.length-1],p??10)),p?c(Z(k,p)):g},g.copy=function(){return b(g,T(n,t,u,r,i,e,a,l,s,o))},g}function ht(){return w.apply(T(wn,kn,vn,yn,Mn,dn,pn,hn,G,gn).domain([new Date(2e3,0,1),new Date(2e3,0,2)]),arguments)}function pt(){return w.apply(T(Fn,Dn,Sn,qn,In,An,bn,Nn,G,mn).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)]),arguments)}function rt(){var n=0,t=1,u,r,i,e,a=y,l=!1,s;function o(f){return f==null||isNaN(f=+f)?s:a(i===0?.5:(f=(e(f)-u)*i,l?Math.max(0,Math.min(1,f)):f))}o.domain=function(f){return arguments.length?([n,t]=f,u=e(n=+n),r=e(t=+t),i=u===r?0:1/(r-u),o):[n,t]},o.clamp=function(f){return arguments.length?(l=!!f,o):l},o.interpolator=function(f){return arguments.length?(a=f,o):a};function g(f){return function(c){var h,d;return arguments.length?([h,d]=c,a=f(h,d),o):[a(0),a(1)]}}return o.range=g(O),o.rangeRound=g(E),o.unknown=function(f){return arguments.length?(s=f,o):s},function(f){return e=f,u=f(n),r=f(t),i=u===r?0:1/(r-u),o}}function x(n,t){return t.domain(n.domain()).interpolator(n.interpolator()).clamp(n.clamp()).unknown(n.unknown())}function et(){var n=N(rt()(y));return n.copy=function(){return x(n,et())},J.apply(n,arguments)}function ut(){var n=0,t=.5,u=1,r=1,i,e,a,l,s,o=y,g,f=!1,c;function h(m){return isNaN(m=+m)?c:(m=.5+((m=+g(m))-e)*(r*m<r*e?l:s),o(f?Math.max(0,Math.min(1,m)):m))}h.domain=function(m){return arguments.length?([n,t,u]=m,i=g(n=+n),e=g(t=+t),a=g(u=+u),l=i===e?0:.5/(e-i),s=e===a?0:.5/(a-e),r=e<i?-1:1,h):[n,t,u]},h.clamp=function(m){return arguments.length?(f=!!m,h):f},h.interpolator=function(m){return arguments.length?(o=m,h):o};function d(m){return function(v){var M,A,I;return arguments.length?([M,A,I]=v,o=On(m,[M,A,I]),h):[o(0),o(.5),o(1)]}}return h.range=d(O),h.rangeRound=d(E),h.unknown=function(m){return arguments.length?(c=m,h):c},function(m){return g=m,i=m(n),e=m(t),a=m(u),l=i===e?0:.5/(e-i),s=e===a?0:.5/(a-e),r=e<i?-1:1,h}}function at(){var n=N(ut()(y));return n.copy=function(){return x(n,at())},J.apply(n,arguments)}export{Gn as a,Kn as b,et as c,at as d,Zn as e,xn as f,Q as g,gt as h,Hn as i,zn as l,K as o,_ as p,_n as q,mt as s,ht as t,pt as u};