import{_ as j}from"./@swc-BOtJyCjG.js";function H(e,t){return e-t*Math.floor(e/t)}const ee=1721426;function R(e,t,r,n){t=K(e,t);let a=t-1,o=-2;return r<=2?o=0:Y(t)&&(o=-1),ee-1+365*a+Math.floor(a/4)-Math.floor(a/100)+Math.floor(a/400)+Math.floor((367*r-362)/12+o+n)}function Y(e){return e%4===0&&(e%100!==0||e%400===0)}function K(e,t){return e==="BC"?1-t:t}function me(e){let t="AD";return e<=0&&(t="BC",e=1-e),[t,e]}const be={standard:[31,28,31,30,31,30,31,31,30,31,30,31],leapyear:[31,29,31,30,31,30,31,31,30,31,30,31]};class D{fromJulianDay(t){let r=t,n=r-ee,a=Math.floor(n/146097),o=H(n,146097),c=Math.floor(o/36524),i=H(o,36524),l=Math.floor(i/1461),d=H(i,1461),g=Math.floor(d/365),w=a*400+c*100+l*4+g+(c!==4&&g!==4?1:0),[v,M]=me(w),y=r-R(v,M,1,1),O=2;r<R(v,M,3,1)?O=0:Y(M)&&(O=1);let z=Math.floor(((y+O)*12+373)/367),ye=r-R(v,M,z,1)+1;return new x(v,M,z,ye)}toJulianDay(t){return R(t.era,t.year,t.month,t.day)}getDaysInMonth(t){return be[Y(t.year)?"leapyear":"standard"][t.month-1]}getMonthsInYear(t){return 12}getDaysInYear(t){return Y(t.year)?366:365}getYearsInEra(t){return 9999}getEras(){return["BC","AD"]}isInverseEra(t){return t.era==="BC"}balanceDate(t){t.year<=0&&(t.era=t.era==="BC"?"AD":"BC",t.year=1-t.year)}constructor(){this.identifier="gregory"}}const Me={"001":1,AD:1,AE:6,AF:6,AI:1,AL:1,AM:1,AN:1,AR:1,AT:1,AU:1,AX:1,AZ:1,BA:1,BE:1,BG:1,BH:6,BM:1,BN:1,BY:1,CH:1,CL:1,CM:1,CN:1,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DZ:6,EC:1,EE:1,EG:6,ES:1,FI:1,FJ:1,FO:1,FR:1,GB:1,GE:1,GF:1,GP:1,GR:1,HR:1,HU:1,IE:1,IQ:6,IR:6,IS:1,IT:1,JO:6,KG:1,KW:6,KZ:1,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MK:1,MN:1,MQ:1,MV:5,MY:1,NL:1,NO:1,NZ:1,OM:6,PL:1,QA:6,RE:1,RO:1,RS:1,RU:1,SD:6,SE:1,SI:1,SK:1,SM:1,SY:6,TJ:1,TM:1,TR:1,UA:1,UY:1,UZ:1,VA:1,VN:1,XK:1};function pe(e,t){return t=s(t,e.calendar),e.era===t.era&&e.year===t.year&&e.month===t.month&&e.day===t.day}function Qe(e,t){return t=s(t,e.calendar),e=T(e),t=T(t),e.era===t.era&&e.year===t.year&&e.month===t.month}function Xe(e,t){return e.calendar.identifier===t.calendar.identifier&&e.era===t.era&&e.year===t.year&&e.month===t.month&&e.day===t.day}function _e(e,t){return e=T(e),t=T(t),e.calendar.identifier===t.calendar.identifier&&e.era===t.era&&e.year===t.year&&e.month===t.month}function et(e,t){return pe(e,we(t))}function tt(e,t){let r=e.calendar.toJulianDay(e),n=Math.ceil(r+1-xe(t))%7;return n<0&&(n+=7),n}function ge(e){return u(Date.now(),e)}function we(e){return Ce(ge(e))}function te(e,t){return e.calendar.toJulianDay(e)-t.calendar.toJulianDay(t)}function ve(e,t){return Q(e)-Q(t)}function Q(e){return e.hour*36e5+e.minute*6e4+e.second*1e3+e.millisecond}let P=null;function re(){return P==null&&(P=new Intl.DateTimeFormat().resolvedOptions().timeZone),P}function T(e){return e.subtract({days:e.day-1})}function rt(e){return e.add({days:e.calendar.getDaysInMonth(e)-e.day})}const X=new Map;function De(e){if(Intl.Locale){let r=X.get(e);return r||(r=new Intl.Locale(e).maximize().region,r&&X.set(e,r)),r}let t=e.split("-")[1];return t==="u"?void 0:t}function xe(e){let t=De(e);return t&&Me[t]||0}function m(e){e=s(e,new D);let t=K(e.era,e.year);return ne(t,e.month,e.day,e.hour,e.minute,e.second,e.millisecond)}function ne(e,t,r,n,a,o,c){let i=new Date;return i.setUTCHours(n,a,o,c),i.setUTCFullYear(e,t-1,r),i.getTime()}function C(e,t){if(t==="UTC")return 0;if(e>0&&t===re())return new Date(e).getTimezoneOffset()*-6e4;let{year:r,month:n,day:a,hour:o,minute:c,second:i}=ae(e,t);return ne(r,n,a,o,c,i,0)-Math.floor(e/1e3)*1e3}const _=new Map;function ae(e,t){let r=_.get(t);r||(r=new Intl.DateTimeFormat("en-US",{timeZone:t,hour12:!1,era:"short",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),_.set(t,r));let n=r.formatToParts(new Date(e)),a={};for(let o of n)o.type!=="literal"&&(a[o.type]=o.value);return{year:a.era==="BC"||a.era==="B"?-a.year+1:+a.year,month:+a.month,day:+a.day,hour:a.hour==="24"?0:+a.hour,minute:+a.minute,second:+a.second}}const B=864e5;function Ie(e,t){let r=m(e),n=r-C(r-B,t),a=r-C(r+B,t);return oe(e,t,n,a)}function oe(e,t,r,n){return(r===n?[r]:[r,n]).filter(o=>Ee(e,t,o))}function Ee(e,t,r){let n=ae(r,t);return e.year===n.year&&e.month===n.month&&e.day===n.day&&e.hour===n.hour&&e.minute===n.minute&&e.second===n.second}function h(e,t,r="compatible"){let n=b(e);if(t==="UTC")return m(n);if(t===re()&&r==="compatible"){n=s(n,new D);let l=new Date,d=K(n.era,n.year);return l.setFullYear(d,n.month-1,n.day),l.setHours(n.hour,n.minute,n.second,n.millisecond),l.getTime()}let a=m(n),o=C(a-B,t),c=C(a+B,t),i=oe(n,t,a-o,a-c);if(i.length===1)return i[0];if(i.length>1)switch(r){case"compatible":case"earlier":return i[0];case"later":return i[i.length-1];case"reject":throw new RangeError("Multiple possible absolute times found")}switch(r){case"earlier":return Math.min(a-o,a-c);case"compatible":case"later":return Math.max(a-o,a-c);case"reject":throw new RangeError("No such absolute time found")}}function ce(e,t,r="compatible"){return new Date(h(e,t,r))}function u(e,t){let r=C(e,t),n=new Date(e+r),a=n.getUTCFullYear(),o=n.getUTCMonth()+1,c=n.getUTCDate(),i=n.getUTCHours(),l=n.getUTCMinutes(),d=n.getUTCSeconds(),g=n.getUTCMilliseconds();return new I(a,o,c,t,r,i,l,d,g)}function Ce(e){return new x(e.calendar,e.era,e.year,e.month,e.day)}function b(e,t){let r=0,n=0,a=0,o=0;if("timeZone"in e)({hour:r,minute:n,second:a,millisecond:o}=e);else if("hour"in e&&!t)return e;return t&&({hour:r,minute:n,second:a,millisecond:o}=t),new S(e.calendar,e.era,e.year,e.month,e.day,r,n,a,o)}function s(e,t){if(e.calendar.identifier===t.identifier)return e;let r=t.fromJulianDay(e.calendar.toJulianDay(e)),n=e.copy();return n.calendar=t,n.era=r.era,n.year=r.year,n.month=r.month,n.day=r.day,p(n),n}function Se(e,t,r){if(e instanceof I)return e.timeZone===t?e:Ae(e,t);let n=h(e,t,r);return u(n,t)}function Re(e){let t=m(e)-e.offset;return new Date(t)}function Ae(e,t){let r=m(e)-e.offset;return s(u(r,t),e.calendar)}const E=36e5;function Z(e,t){let r=e.copy(),n="hour"in r?Ue(r,t):0;N(r,t.years||0),r.calendar.balanceYearMonth&&r.calendar.balanceYearMonth(r,e),r.month+=t.months||0,J(r),ie(r),r.day+=(t.weeks||0)*7,r.day+=t.days||0,r.day+=n,Ye(r),r.calendar.balanceDate&&r.calendar.balanceDate(r),r.year<1&&(r.year=1,r.month=1,r.day=1);let a=r.calendar.getYearsInEra(r);if(r.year>a){var o,c;let l=(o=(c=r.calendar).isInverseEra)===null||o===void 0?void 0:o.call(c,r);r.year=a,r.month=l?1:r.calendar.getMonthsInYear(r),r.day=l?1:r.calendar.getDaysInMonth(r)}r.month<1&&(r.month=1,r.day=1);let i=r.calendar.getMonthsInYear(r);return r.month>i&&(r.month=i,r.day=r.calendar.getDaysInMonth(r)),r.day=Math.max(1,Math.min(r.calendar.getDaysInMonth(r),r.day)),r}function N(e,t){var r,n;!((r=(n=e.calendar).isInverseEra)===null||r===void 0)&&r.call(n,e)&&(t=-t),e.year+=t}function J(e){for(;e.month<1;)N(e,-1),e.month+=e.calendar.getMonthsInYear(e);let t=0;for(;e.month>(t=e.calendar.getMonthsInYear(e));)e.month-=t,N(e,1)}function Ye(e){for(;e.day<1;)e.month--,J(e),e.day+=e.calendar.getDaysInMonth(e);for(;e.day>e.calendar.getDaysInMonth(e);)e.day-=e.calendar.getDaysInMonth(e),e.month++,J(e)}function ie(e){e.month=Math.max(1,Math.min(e.calendar.getMonthsInYear(e),e.month)),e.day=Math.max(1,Math.min(e.calendar.getDaysInMonth(e),e.day))}function p(e){e.calendar.constrainDate&&e.calendar.constrainDate(e),e.year=Math.max(1,Math.min(e.calendar.getYearsInEra(e),e.year)),ie(e)}function le(e){let t={};for(let r in e)typeof e[r]=="number"&&(t[r]=-e[r]);return t}function fe(e,t){return Z(e,le(t))}function V(e,t){let r=e.copy();return t.era!=null&&(r.era=t.era),t.year!=null&&(r.year=t.year),t.month!=null&&(r.month=t.month),t.day!=null&&(r.day=t.day),p(r),r}function U(e,t){let r=e.copy();return t.hour!=null&&(r.hour=t.hour),t.minute!=null&&(r.minute=t.minute),t.second!=null&&(r.second=t.second),t.millisecond!=null&&(r.millisecond=t.millisecond),Be(r),r}function Te(e){e.second+=Math.floor(e.millisecond/1e3),e.millisecond=A(e.millisecond,1e3),e.minute+=Math.floor(e.second/60),e.second=A(e.second,60),e.hour+=Math.floor(e.minute/60),e.minute=A(e.minute,60);let t=Math.floor(e.hour/24);return e.hour=A(e.hour,24),t}function Be(e){e.millisecond=Math.max(0,Math.min(e.millisecond,1e3)),e.second=Math.max(0,Math.min(e.second,59)),e.minute=Math.max(0,Math.min(e.minute,59)),e.hour=Math.max(0,Math.min(e.hour,23))}function A(e,t){let r=e%t;return r<0&&(r+=t),r}function Ue(e,t){return e.hour+=t.hours||0,e.minute+=t.minutes||0,e.second+=t.seconds||0,e.millisecond+=t.milliseconds||0,Te(e)}function G(e,t,r,n){let a=e.copy();switch(t){case"era":{let i=e.calendar.getEras(),l=i.indexOf(e.era);if(l<0)throw new Error("Invalid era: "+e.era);l=$(l,r,0,i.length-1,n==null?void 0:n.round),a.era=i[l],p(a);break}case"year":var o,c;!((o=(c=a.calendar).isInverseEra)===null||o===void 0)&&o.call(c,a)&&(r=-r),a.year=$(e.year,r,-1/0,9999,n==null?void 0:n.round),a.year===-1/0&&(a.year=1),a.calendar.balanceYearMonth&&a.calendar.balanceYearMonth(a,e);break;case"month":a.month=$(e.month,r,1,e.calendar.getMonthsInYear(e),n==null?void 0:n.round);break;case"day":a.day=$(e.day,r,1,e.calendar.getDaysInMonth(e),n==null?void 0:n.round);break;default:throw new Error("Unsupported field "+t)}return e.calendar.balanceDate&&e.calendar.balanceDate(a),p(a),a}function se(e,t,r,n){let a=e.copy();switch(t){case"hour":{let o=e.hour,c=0,i=23;if((n==null?void 0:n.hourCycle)===12){let l=o>=12;c=l?12:0,i=l?23:11}a.hour=$(o,r,c,i,n==null?void 0:n.round);break}case"minute":a.minute=$(e.minute,r,0,59,n==null?void 0:n.round);break;case"second":a.second=$(e.second,r,0,59,n==null?void 0:n.round);break;case"millisecond":a.millisecond=$(e.millisecond,r,0,999,n==null?void 0:n.round);break;default:throw new Error("Unsupported field "+t)}return a}function $(e,t,r,n,a=!1){if(a){e+=Math.sign(t),e<r&&(e=n);let o=Math.abs(t);t>0?e=Math.ceil(e/o)*o:e=Math.floor(e/o)*o,e>n&&(e=r)}else e+=t,e<r?e=n-(r-e-1):e>n&&(e=r+(e-n-1));return e}function he(e,t){let r;if(t.years!=null&&t.years!==0||t.months!=null&&t.months!==0||t.weeks!=null&&t.weeks!==0||t.days!=null&&t.days!==0){let a=Z(b(e),{years:t.years,months:t.months,weeks:t.weeks,days:t.days});r=h(a,e.timeZone)}else r=m(e)-e.offset;r+=t.milliseconds||0,r+=(t.seconds||0)*1e3,r+=(t.minutes||0)*6e4,r+=(t.hours||0)*36e5;let n=u(r,e.timeZone);return s(n,e.calendar)}function Ze(e,t){return he(e,le(t))}function Oe(e,t,r,n){switch(t){case"hour":{let a=0,o=23;if((n==null?void 0:n.hourCycle)===12){let y=e.hour>=12;a=y?12:0,o=y?23:11}let c=b(e),i=s(U(c,{hour:a}),new D),l=[h(i,e.timeZone,"earlier"),h(i,e.timeZone,"later")].filter(y=>u(y,e.timeZone).day===i.day)[0],d=s(U(c,{hour:o}),new D),g=[h(d,e.timeZone,"earlier"),h(d,e.timeZone,"later")].filter(y=>u(y,e.timeZone).day===d.day).pop(),w=m(e)-e.offset,v=Math.floor(w/E),M=w%E;return w=$(v,r,Math.floor(l/E),Math.floor(g/E),n==null?void 0:n.round)*E+M,s(u(w,e.timeZone),e.calendar)}case"minute":case"second":case"millisecond":return se(e,t,r,n);case"era":case"year":case"month":case"day":{let a=G(b(e),t,r,n),o=h(a,e.timeZone);return s(u(o,e.timeZone),e.calendar)}default:throw new Error("Unsupported field "+t)}}function He(e,t,r){let n=b(e),a=U(V(n,t),t);if(a.compare(n)===0)return e;let o=h(a,e.timeZone,r);return s(u(o,e.timeZone),e.calendar)}const Pe=/^(\d{4})-(\d{2})-(\d{2})$/,ke=/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?$/,Fe=/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}))?(?::(\d{2}))?(?::(\d{2}))?(\.\d+)?(?:([+-]\d{2})(?::?(\d{2}))?)?\[(.*?)\]$/;function nt(e){let t=e.match(Pe);if(!t)throw new Error("Invalid ISO 8601 date string: "+e);let r=new x(f(t[1],0,9999),f(t[2],1,12),1);return r.day=f(t[3],0,r.calendar.getDaysInMonth(r)),r}function at(e){let t=e.match(ke);if(!t)throw new Error("Invalid ISO 8601 date time string: "+e);let r=new S(f(t[1],1,9999),f(t[2],1,12),1,t[4]?f(t[4],0,23):0,t[5]?f(t[5],0,59):0,t[6]?f(t[6],0,59):0,t[7]?f(t[7],0,1/0)*1e3:0);return r.day=f(t[3],0,r.calendar.getDaysInMonth(r)),r}function ot(e,t){let r=e.match(Fe);if(!r)throw new Error("Invalid ISO 8601 date time string: "+e);let n=new I(f(r[1],1,9999),f(r[2],1,12),1,r[10],0,r[4]?f(r[4],0,23):0,r[5]?f(r[5],0,59):0,r[6]?f(r[6],0,59):0,r[7]?f(r[7],0,1/0)*1e3:0);n.day=f(r[3],0,n.calendar.getDaysInMonth(n));let a=b(n),o;if(r[8]){var c;if(n.offset=f(r[8],-23,23)*36e5+f((c=r[9])!==null&&c!==void 0?c:"0",0,59)*6e4,o=m(n)-n.offset,!Ie(a,n.timeZone).includes(o))throw new Error(`Offset ${de(n.offset)} is invalid for ${W(n)} in ${n.timeZone}`)}else o=h(b(a),n.timeZone,t);return u(o,n.timeZone)}function f(e,t,r){let n=Number(e);if(n<t||n>r)throw new RangeError(`Value out of range: ${t} <= ${n} <= ${r}`);return n}function Le(e){return`${String(e.hour).padStart(2,"0")}:${String(e.minute).padStart(2,"0")}:${String(e.second).padStart(2,"0")}${e.millisecond?String(e.millisecond/1e3).slice(1):""}`}function ue(e){let t=s(e,new D);return`${String(t.year).padStart(4,"0")}-${String(t.month).padStart(2,"0")}-${String(t.day).padStart(2,"0")}`}function W(e){return`${ue(e)}T${Le(e)}`}function de(e){let t=Math.sign(e)<0?"-":"+";e=Math.abs(e);let r=Math.floor(e/36e5),n=e%36e5/6e4;return`${t}${String(r).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Ne(e){return`${W(e)}${de(e.offset)}[${e.timeZone}]`}function q(e){let t=typeof e[0]=="object"?e.shift():new D,r;if(typeof e[0]=="string")r=e.shift();else{let c=t.getEras();r=c[c.length-1]}let n=e.shift(),a=e.shift(),o=e.shift();return[t,r,n,a,o]}var Je=new WeakMap;class x{copy(){return this.era?new x(this.calendar,this.era,this.year,this.month,this.day):new x(this.calendar,this.year,this.month,this.day)}add(t){return Z(this,t)}subtract(t){return fe(this,t)}set(t){return V(this,t)}cycle(t,r,n){return G(this,t,r,n)}toDate(t){return ce(this,t)}toString(){return ue(this)}compare(t){return te(this,t)}constructor(...t){j(this,Je,{writable:!0,value:void 0});let[r,n,a,o,c]=q(t);this.calendar=r,this.era=n,this.year=a,this.month=o,this.day=c,p(this)}}var je=new WeakMap;class S{copy(){return this.era?new S(this.calendar,this.era,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond):new S(this.calendar,this.year,this.month,this.day,this.hour,this.minute,this.second,this.millisecond)}add(t){return Z(this,t)}subtract(t){return fe(this,t)}set(t){return V(U(this,t),t)}cycle(t,r,n){switch(t){case"era":case"year":case"month":case"day":return G(this,t,r,n);default:return se(this,t,r,n)}}toDate(t,r){return ce(this,t,r)}toString(){return W(this)}compare(t){let r=te(this,t);return r===0?ve(this,b(t)):r}constructor(...t){j(this,je,{writable:!0,value:void 0});let[r,n,a,o,c]=q(t);this.calendar=r,this.era=n,this.year=a,this.month=o,this.day=c,this.hour=t.shift()||0,this.minute=t.shift()||0,this.second=t.shift()||0,this.millisecond=t.shift()||0,p(this)}}var Ke=new WeakMap;class I{copy(){return this.era?new I(this.calendar,this.era,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond):new I(this.calendar,this.year,this.month,this.day,this.timeZone,this.offset,this.hour,this.minute,this.second,this.millisecond)}add(t){return he(this,t)}subtract(t){return Ze(this,t)}set(t,r){return He(this,t,r)}cycle(t,r,n){return Oe(this,t,r,n)}toDate(){return Re(this)}toString(){return Ne(this)}toAbsoluteString(){return this.toDate().toISOString()}compare(t){return this.toDate().getTime()-Se(t,this.timeZone).toDate().getTime()}constructor(...t){j(this,Ke,{writable:!0,value:void 0});let[r,n,a,o,c]=q(t),i=t.shift(),l=t.shift();this.calendar=r,this.era=n,this.year=a,this.month=o,this.day=c,this.timeZone=i,this.offset=l,this.hour=t.shift()||0,this.minute=t.shift()||0,this.second=t.shift()||0,this.millisecond=t.shift()||0,p(this)}}let k=new Map;class ct{format(t){return this.formatter.format(t)}formatToParts(t){return this.formatter.formatToParts(t)}formatRange(t,r){if(typeof this.formatter.formatRange=="function")return this.formatter.formatRange(t,r);if(r<t)throw new RangeError("End date must be >= start date");return`${this.formatter.format(t)} – ${this.formatter.format(r)}`}formatRangeToParts(t,r){if(typeof this.formatter.formatRangeToParts=="function")return this.formatter.formatRangeToParts(t,r);if(r<t)throw new RangeError("End date must be >= start date");let n=this.formatter.formatToParts(t),a=this.formatter.formatToParts(r);return[...n.map(o=>({...o,source:"startRange"})),{type:"literal",value:" – ",source:"shared"},...a.map(o=>({...o,source:"endRange"}))]}resolvedOptions(){let t=this.formatter.resolvedOptions();return We()&&(this.resolvedHourCycle||(this.resolvedHourCycle=qe(t.locale,this.options)),t.hourCycle=this.resolvedHourCycle,t.hour12=this.resolvedHourCycle==="h11"||this.resolvedHourCycle==="h12"),t.calendar==="ethiopic-amete-alem"&&(t.calendar="ethioaa"),t}constructor(t,r={}){this.formatter=$e(t,r),this.options=r}}const Ve={true:{ja:"h11"},false:{}};function $e(e,t={}){if(typeof t.hour12=="boolean"&&Ge()){t={...t};let a=Ve[String(t.hour12)][e.split("-")[0]],o=t.hour12?"h12":"h23";t.hourCycle=a??o,delete t.hour12}let r=e+(t?Object.entries(t).sort((a,o)=>a[0]<o[0]?-1:1).join():"");if(k.has(r))return k.get(r);let n=new Intl.DateTimeFormat(e,t);return k.set(r,n),n}let F=null;function Ge(){return F==null&&(F=new Intl.DateTimeFormat("en-US",{hour:"numeric",hour12:!1}).format(new Date(2020,2,3,0))==="24"),F}let L=null;function We(){return L==null&&(L=new Intl.DateTimeFormat("fr",{hour:"numeric",hour12:!1}).resolvedOptions().hourCycle==="h12"),L}function qe(e,t){if(!t.timeStyle&&!t.hour)return;e=e.replace(/(-u-)?-nu-[a-zA-Z0-9]+/,""),e+=(e.includes("-u-")?"":"-u")+"-nu-latn";let r=$e(e,{...t,timeZone:void 0}),n=parseInt(r.formatToParts(new Date(2020,2,3,0)).find(o=>o.type==="hour").value,10),a=parseInt(r.formatToParts(new Date(2020,2,3,23)).find(o=>o.type==="hour").value,10);if(n===0&&a===23)return"h23";if(n===24&&a===23)return"h24";if(n===0&&a===11)return"h11";if(n===12&&a===11)return"h12";throw new Error("Unexpected hour cycle result")}export{re as $,I as a,ot as b,at as c,nt as d,s as e,S as f,T as g,rt as h,tt as i,Xe as j,et as k,Qe as l,pe as m,x as n,_e as o,ct as p,we as q};
