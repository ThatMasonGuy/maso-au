var q={exports:{}},r={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=Symbol.for("react.element"),J=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),W=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),O=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,L={};function y(e,t,n){this.props=e,this.context=t,this.refs=L,this.updater=n||T}y.prototype.isReactComponent={};y.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function U(){}U.prototype=y.prototype;function x(e,t,n){this.props=e,this.context=t,this.refs=L,this.updater=n||T}var w=x.prototype=new U;w.constructor=x;D(w,y.prototype);w.isPureReactComponent=!0;var j=Array.isArray,A=Object.prototype.hasOwnProperty,$={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var i,u={},s=null,f=null;if(t!=null)for(i in t.ref!==void 0&&(f=t.ref),t.key!==void 0&&(s=""+t.key),t)A.call(t,i)&&!F.hasOwnProperty(i)&&(u[i]=t[i]);var c=arguments.length-2;if(c===1)u.children=n;else if(1<c){for(var o=Array(c),a=0;a<c;a++)o[a]=arguments[a+2];u.children=o}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)u[i]===void 0&&(u[i]=c[i]);return{$$typeof:_,type:e,key:s,ref:f,props:u,_owner:$.current}}function Z(e,t){return{$$typeof:_,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function b(e){return typeof e=="object"&&e!==null&&e.$$typeof===_}function ee(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var P=/\/+/g;function E(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ee(""+e.key):t.toString(36)}function h(e,t,n,i,u){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var f=!1;if(e===null)f=!0;else switch(s){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case _:case J:f=!0}}if(f)return f=e,u=u(f),e=i===""?"."+E(f,0):i,j(u)?(n="",e!=null&&(n=e.replace(P,"$&/")+"/"),h(u,t,n,"",function(a){return a})):u!=null&&(b(u)&&(u=Z(u,n+(!u.key||f&&f.key===u.key?"":(""+u.key).replace(P,"$&/")+"/")+e)),t.push(u)),1;if(f=0,i=i===""?".":i+":",j(e))for(var c=0;c<e.length;c++){s=e[c];var o=i+E(s,c);f+=h(s,t,n,o,u)}else if(o=X(e),typeof o=="function")for(e=o.call(e),c=0;!(s=e.next()).done;)s=s.value,o=i+E(s,c++),f+=h(s,t,n,o,u);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return f}function v(e,t,n){if(e==null)return e;var i=[],u=0;return h(e,i,"","",function(s){return t.call(n,s,u++)}),i}function te(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},S={transition:null},re={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:S,ReactCurrentOwner:$};function V(){throw Error("act(...) is not supported in production builds of React.")}r.Children={map:v,forEach:function(e,t,n){v(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return v(e,function(){t++}),t},toArray:function(e){return v(e,function(t){return t})||[]},only:function(e){if(!b(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};r.Component=y;r.Fragment=M;r.Profiler=z;r.PureComponent=x;r.StrictMode=B;r.Suspense=G;r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re;r.act=V;r.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=D({},e.props),u=e.key,s=e.ref,f=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,f=$.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(o in t)A.call(t,o)&&!F.hasOwnProperty(o)&&(i[o]=t[o]===void 0&&c!==void 0?c[o]:t[o])}var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){c=Array(o);for(var a=0;a<o;a++)c[a]=arguments[a+2];i.children=c}return{$$typeof:_,type:e.type,key:u,ref:s,props:i,_owner:f}};r.createContext=function(e){return e={$$typeof:W,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:H,_context:e},e.Consumer=e};r.createElement=N;r.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t};r.createRef=function(){return{current:null}};r.forwardRef=function(e){return{$$typeof:Y,render:e}};r.isValidElement=b;r.lazy=function(e){return{$$typeof:Q,_payload:{_status:-1,_result:e},_init:te}};r.memo=function(e,t){return{$$typeof:K,type:e,compare:t===void 0?null:t}};r.startTransition=function(e){var t=S.transition;S.transition={};try{e()}finally{S.transition=t}};r.unstable_act=V;r.useCallback=function(e,t){return l.current.useCallback(e,t)};r.useContext=function(e){return l.current.useContext(e)};r.useDebugValue=function(){};r.useDeferredValue=function(e){return l.current.useDeferredValue(e)};r.useEffect=function(e,t){return l.current.useEffect(e,t)};r.useId=function(){return l.current.useId()};r.useImperativeHandle=function(e,t,n){return l.current.useImperativeHandle(e,t,n)};r.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};r.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};r.useMemo=function(e,t){return l.current.useMemo(e,t)};r.useReducer=function(e,t,n){return l.current.useReducer(e,t,n)};r.useRef=function(e){return l.current.useRef(e)};r.useState=function(e){return l.current.useState(e)};r.useSyncExternalStore=function(e,t,n){return l.current.useSyncExternalStore(e,t,n)};r.useTransition=function(){return l.current.useTransition()};r.version="18.3.1";q.exports=r;var ne=q.exports,k={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g;function oe(){if(g)return d;g=1;var e=ne,t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,u=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function f(c,o,a){var p,m={},R=null,C=null;a!==void 0&&(R=""+a),o.key!==void 0&&(R=""+o.key),o.ref!==void 0&&(C=o.ref);for(p in o)i.call(o,p)&&!s.hasOwnProperty(p)&&(m[p]=o[p]);if(c&&c.defaultProps)for(p in o=c.defaultProps,o)m[p]===void 0&&(m[p]=o[p]);return{$$typeof:t,type:c,key:R,ref:C,props:m,_owner:u.current}}return d.Fragment=n,d.jsx=f,d.jsxs=f,d}var I;function ue(){return I||(I=1,k.exports=oe()),k.exports}export{ue as a,ne as r};