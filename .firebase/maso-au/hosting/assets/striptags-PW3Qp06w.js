import{c as N,g as q}from"./@excalidraw-_WJHnpoj.js";var A={exports:{}};(function(E){(function(b){if(typeof f!="function"){var f=function(e){return e};f.nonNative=!0}const c=f("plaintext"),g=f("html"),k=f("comment"),m=/<(\w*)>/g,L=/<\/?([^\s\/>]+)/;function _(e,t,n){e=e||"",t=t||[],n=n||"";let o=T(t,n);return d(e,o)}function l(e,t){e=e||[],t=t||"";let n=T(e,t);return function(s){return d(s||"",n)}}_.init_streaming_mode=l;function T(e,t){return e=v(e),{allowable_tags:e,tag_replacement:t,state:c,tag_buffer:"",depth:0,in_quote_char:""}}function d(e,t){if(typeof e!="string")throw new TypeError("'html' parameter must be a string");let n=t.allowable_tags,o=t.tag_replacement,s=t.state,r=t.tag_buffer,p=t.depth,a=t.in_quote_char,u="";for(let h=0,G=e.length;h<G;h++){let i=e[h];if(s===c)switch(i){case"<":s=g,r+=i;break;default:u+=i;break}else if(s===g)switch(i){case"<":if(a)break;p++;break;case">":if(a)break;if(p){p--;break}a="",s=c,r+=">",n.has(x(r))?u+=r:u+=o,r="";break;case'"':case"'":i===a?a="":a=a||i,r+=i;break;case"-":r==="<!-"&&(s=k),r+=i;break;case" ":case`
`:if(r==="<"){s=c,u+="< ",r="";break}r+=i;break;default:r+=i;break}else if(s===k)switch(i){case">":r.slice(-2)=="--"&&(s=c),r="";break;default:r+=i;break}}return t.state=s,t.tag_buffer=r,t.depth=p,t.in_quote_char=a,u}function v(e){let t=new Set;if(typeof e=="string"){let n;for(;n=m.exec(e);)t.add(n[1])}else!f.nonNative&&typeof e[f.iterator]=="function"?t=new Set(e):typeof e.forEach=="function"&&e.forEach(t.add,t);return t}function x(e){let t=L.exec(e);return t?t[1].toLowerCase():null}E.exports?E.exports=_:b.striptags=_})(N)})(A);var M=A.exports;const C=q(M);export{C as s};