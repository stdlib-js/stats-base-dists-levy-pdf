// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(o):e(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===a.call(r.specifier)?a.call(e):o.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function f(r){return"string"==typeof r}var c=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,v=/^(\d+)e/,w=/\.0$/,h=/\.0*e/,b=/(\..*[^0])0*e/;function A(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=s.call(e,b,"$1e"),e=s.call(e,h,"e"),e=s.call(e,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=s.call(e,y,"e+0$1"),e=s.call(e,d,"e-0$1"),r.alternate&&(e=s.call(e,g,"$1."),e=s.call(e,v,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===p.call(r.specifier)?p.call(e):l.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function F(r,t,n){var e=t-r.length;return e<0?r:r=n?r+m(e):m(e)+r}var I=String.fromCharCode,N=isNaN,E=Array.isArray;function _(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function T(r){var t,n,e,o,a,c,l,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,p=0;p<r.length;p++)if(f(e=r[p]))c+=e;else{if(t=void 0!==e.precision,!(e=_(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+e+"`.");for(e.mapping&&(l=e.mapping),n=e.flags,s=0;s<n.length;s++)switch(o=n.charAt(s)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[l],10),l+=1,N(e.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[l],10),l+=1,N(e.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[l],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!N(e.arg)){if((a=parseInt(e.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=N(a)?String(e.arg):I(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=A(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=F(e.arg,e.width,e.padRight)),c+=e.arg||"",l+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,n,e,i;for(n=[],i=0,e=S.exec(r);e;)(t=r.slice(i,S.lastIndex-e[0].length)).length&&n.push(t),n.push(j(e)),i=S.lastIndex,e=S.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function O(r){return"string"==typeof r}function x(r){var t,n;if(!O(r))throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return T.apply(null,t)}var V=Object.prototype,k=V.toString,G=V.__defineGetter__,H=V.__defineSetter__,W=V.__lookupGetter__,L=V.__lookupSetter__,P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===k.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(W.call(r,t)||L.call(r,t)?(e=r.__proto__,r.__proto__=V,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(r,t,n.get),a&&H&&H.call(r,t,n.set),r};function $(r,t,n){P(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Y(r){return r!=r}var C=Math.sqrt,M=Math.floor,R=Math.ceil;function Z(r){return r<0?R(r):M(r)}var X=Number,q=X.NEGATIVE_INFINITY,z=Number.POSITIVE_INFINITY,B=Number.POSITIVE_INFINITY,D=X.NEGATIVE_INFINITY,J=1023,K=Number.POSITIVE_INFINITY,Q=X.NEGATIVE_INFINITY;function rr(r){return r===K||r===Q}var tr,nr="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),er=Object.prototype.toString,ir=Object.prototype.hasOwnProperty,or="function"==typeof Symbol?Symbol:void 0,ar="function"==typeof or?or.toStringTag:"",ur=nr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,i,o;if(null==r)return er.call(r);n=r[ar],o=ar,t=null!=(i=r)&&ir.call(i,o);try{r[ar]=void 0}catch(t){return er.call(r)}return e=er.call(r),t?r[ar]=n:delete r[ar],e}:function(r){return er.call(r)},fr="function"==typeof Uint32Array,cr="function"==typeof Uint32Array?Uint32Array:null,lr="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,t,n;if("function"!=typeof cr)return!1;try{t=new cr(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(fr&&n instanceof Uint32Array||"[object Uint32Array]"===ur(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr,sr=tr,yr="function"==typeof Float64Array,dr="function"==typeof Float64Array?Float64Array:null,gr="function"==typeof Float64Array?Float64Array:void 0;pr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr([1,3.14,-3.14,NaN]),n=t,r=(yr&&n instanceof Float64Array||"[object Float64Array]"===ur(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var vr,wr=pr,hr="function"==typeof Uint8Array,br="function"==typeof Uint8Array?Uint8Array:null,Ar="function"==typeof Uint8Array?Uint8Array:void 0;vr=function(){var r,t,n;if("function"!=typeof br)return!1;try{t=new br(t=[1,3.14,-3.14,256,257]),n=t,r=(hr&&n instanceof Uint8Array||"[object Uint8Array]"===ur(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var mr,Fr=vr,Ir="function"==typeof Uint16Array,Nr="function"==typeof Uint16Array?Uint16Array:null,Er="function"==typeof Uint16Array?Uint16Array:void 0;mr=function(){var r,t,n;if("function"!=typeof Nr)return!1;try{t=new Nr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Ir&&n instanceof Uint16Array||"[object Uint16Array]"===ur(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var _r,Tr={uint16:mr,uint8:Fr};(_r=new Tr.uint16(1))[0]=4660;var Sr,jr,Ur=52===new Tr.uint8(_r.buffer)[0];!0===Ur?(Sr=1,jr=0):(Sr=0,jr=1);var Or={HIGH:Sr,LOW:jr},xr=new wr(1),Vr=new sr(xr.buffer),kr=Or.HIGH,Gr=Or.LOW;function Hr(r,t,n,e){return xr[0]=r,t[e]=Vr[kr],t[e+n]=Vr[Gr],t}function Wr(r){return Hr(r,[0,0],1,0)}$(Wr,"assign",Hr);var Lr,Pr="function"==typeof Float64Array,$r="function"==typeof Float64Array?Float64Array:null,Yr="function"==typeof Float64Array?Float64Array:void 0;Lr=function(){var r,t,n;if("function"!=typeof $r)return!1;try{t=new $r([1,3.14,-3.14,NaN]),n=t,r=(Pr&&n instanceof Float64Array||"[object Float64Array]"===ur(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Yr:function(){throw new Error("not implemented")};var Cr=!0===Ur?1:0,Mr=new Lr(1),Rr=new sr(Mr.buffer);function Zr(r){return Mr[0]=r,Rr[Cr]}var Xr,qr,zr,Br="function"==typeof Float64Array,Dr="function"==typeof Float64Array?Float64Array:null,Jr="function"==typeof Float64Array?Float64Array:void 0;Xr=function(){var r,t,n;if("function"!=typeof Dr)return!1;try{t=new Dr([1,3.14,-3.14,NaN]),n=t,r=(Br&&n instanceof Float64Array||"[object Float64Array]"===ur(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Jr:function(){throw new Error("not implemented")},!0===Ur?(qr=1,zr=0):(qr=0,zr=1);var Kr={HIGH:qr,LOW:zr},Qr=new Xr(1),rt=new sr(Qr.buffer),tt=Kr.HIGH,nt=Kr.LOW;function et(r,t){return rt[tt]=r,rt[nt]=t,Qr[0]}var it=[0,0];function ot(r,t){var n,e;return Wr.assign(r,it,1,0),n=it[0],n&=2147483647,e=Zr(t),et(n|=e&=2147483648,it[1])}function at(r,t,n,e){return Y(r)||rr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}$((function(r){return at(r,[0,0],1,0)}),"assign",at);var ut,ft,ct,lt="function"==typeof Float64Array,pt="function"==typeof Float64Array?Float64Array:null,st="function"==typeof Float64Array?Float64Array:void 0;ut=function(){var r,t,n;if("function"!=typeof pt)return!1;try{t=new pt([1,3.14,-3.14,NaN]),n=t,r=(lt&&n instanceof Float64Array||"[object Float64Array]"===ur(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?st:function(){throw new Error("not implemented")},!0===Ur?(ft=1,ct=0):(ft=0,ct=1);var yt={HIGH:ft,LOW:ct},dt=new ut(1),gt=new sr(dt.buffer),vt=yt.HIGH,wt=yt.LOW;function ht(r,t,n,e){return dt[0]=r,t[e]=gt[vt],t[e+n]=gt[wt],t}function bt(r){return ht(r,[0,0],1,0)}$(bt,"assign",ht);var At=[0,0],mt=[0,0];function Ft(r,t){var n,e;return 0===t||0===r||Y(r)||rr(r)?r:(at(r,At,1,0),t+=At[1],t+=function(r){var t=Zr(r);return(t=(2146435072&t)>>>20)-J|0}(r=At[0]),t<-1074?ot(0,r):t>1023?r<0?D:B:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,bt.assign(r,mt,1,0),n=mt[0],n&=2148532223,e*et(n|=t+J<<20,mt[1])))}var It=1.4426950408889634,Nt=1/(1<<28);function Et(r){var t;return Y(r)||r===z?r:r===q?0:r>709.782712893384?z:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Nt?1+r:function(r,t,n){var e,i,o,a;return Ft(1-(t-(e=r-t)*(o=e-(i=e*e)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-o)-r),n)}(r-.6931471803691238*(t=Z(r<0?It*r-.5:It*r+.5)),1.9082149292705877e-10*t,t)}function _t(r){return M(r)===r}function Tt(r){return _t(r/2)}function St(r){return Tt(r>0?r-1:r+1)}function jt(r){return Math.abs(r)}var Ut,Ot,xt,Vt="function"==typeof Float64Array,kt="function"==typeof Float64Array?Float64Array:null,Gt="function"==typeof Float64Array?Float64Array:void 0;Ut=function(){var r,t,n;if("function"!=typeof kt)return!1;try{t=new kt([1,3.14,-3.14,NaN]),n=t,r=(Vt&&n instanceof Float64Array||"[object Float64Array]"===ur(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Gt:function(){throw new Error("not implemented")},!0===Ur?(Ot=1,xt=0):(Ot=0,xt=1);var Ht={HIGH:Ot,LOW:xt},Wt=new Ut(1),Lt=new sr(Wt.buffer),Pt=Ht.HIGH,$t=Ht.LOW;function Yt(r,t,n,e){return Wt[0]=r,t[e]=Lt[Pt],t[e+n]=Lt[$t],t}function Ct(r){return Yt(r,[0,0],1,0)}$(Ct,"assign",Yt);var Mt,Rt="function"==typeof Float64Array,Zt="function"==typeof Float64Array?Float64Array:null,Xt="function"==typeof Float64Array?Float64Array:void 0;Mt=function(){var r,t,n;if("function"!=typeof Zt)return!1;try{t=new Zt([1,3.14,-3.14,NaN]),n=t,r=(Rt&&n instanceof Float64Array||"[object Float64Array]"===ur(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Xt:function(){throw new Error("not implemented")};var qt=!0===Ur?0:1,zt=new Mt(1),Bt=new sr(zt.buffer);function Dt(r,t){return zt[0]=r,Bt[qt]=t>>>0,zt[0]}function Jt(r){return 0|r}var Kt,Qt=X.NEGATIVE_INFINITY,rn=Number.POSITIVE_INFINITY,tn=2147483647,nn="function"==typeof Float64Array,en="function"==typeof Float64Array?Float64Array:null,on="function"==typeof Float64Array?Float64Array:void 0;Kt=function(){var r,t,n;if("function"!=typeof en)return!1;try{t=new en([1,3.14,-3.14,NaN]),n=t,r=(nn&&n instanceof Float64Array||"[object Float64Array]"===ur(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?on:function(){throw new Error("not implemented")};var an=!0===Ur?1:0,un=new Kt(1),fn=new sr(un.buffer);function cn(r,t){return un[0]=r,fn[an]=t>>>0,un[0]}var ln=1048576,pn=[1,1.5],sn=[0,.5849624872207642],yn=[0,1.350039202129749e-8],dn=1048575,gn=1048576,vn=1083179008,wn=1e300,hn=1e-300,bn=[0,0],An=[0,0];function mn(r,t){var n,e,i,o,a,u,f,c,l,p,s,y,d,g;if(Y(r)||Y(t))return NaN;if(Ct.assign(t,bn,1,0),a=bn[0],0===bn[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return C(r);if(-.5===t)return 1/C(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(rr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:jt(r)<1==(t===rn)?0:rn}(r,t)}if(Ct.assign(r,bn,1,0),o=bn[0],0===bn[1]){if(0===o)return function(r,t){return t===Qt?rn:t===rn?0:t>0?St(t)?r:0:St(t)?ot(rn,r):rn}(r,t);if(1===r)return 1;if(-1===r&&St(t))return-1;if(rr(r))return r===Qt?mn(-0,-t):t<0?0:rn}if(r<0&&!1===_t(t))return(r-r)/(r-r);if(i=jt(r),n=o&tn|0,e=a&tn|0,f=a>>>31|0,u=(u=o>>>31|0)&&St(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(Zr(r)&tn)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?u*wn*wn:u*hn*hn;if(n>1072693248)return 0===f?u*wn*wn:u*hn*hn;s=function(r,t){var n,e,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=t-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=Dt(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=n,r}(An,i)}else s=function(r,t,n){var e,i,o,a,u,f,c,l,p,s,y,d,g,v,w,h,b,A,m,F,I;return A=0,n<ln&&(A-=53,n=Zr(t*=9007199254740992)),A+=(n>>20)-J|0,n=1072693248|(m=1048575&n|0),m<=235662?F=0:m<767610?F=1:(F=0,A+=1,n-=ln),a=Dt(i=(h=(t=cn(t,n))-(c=pn[F]))*(b=1/(t+c)),0),e=524288+(n>>1|536870912),f=cn(0,e+=F<<18),w=(o=i*i)*o*(0===(I=o)?.5999999999999946:.5999999999999946+I*(.4285714285785502+I*(.33333332981837743+I*(.272728123808534+I*(.23066074577556175+.20697501780033842*I))))),f=Dt(f=3+(o=a*a)+(w+=(u=b*(h-a*f-a*(t-(f-c))))*(a+i)),0),g=(y=-7.028461650952758e-9*(p=Dt(p=(h=a*f)+(b=u*f+(w-(f-3-o))*i),0))+.9617966939259756*(b-(p-h))+yn[F])-((d=Dt(d=(s=.9617967009544373*p)+y+(l=sn[F])+(v=A),0))-v-l-s),r[0]=d,r[1]=g,r}(An,i,n);if(y=(p=(t-(c=Dt(t,0)))*s[0]+t*s[1])+(l=c*s[0]),Ct.assign(y,bn,1,0),d=Jt(bn[0]),g=Jt(bn[1]),d>=vn){if(0!=(d-vn|g))return u*wn*wn;if(p+8008566259537294e-32>y-l)return u*wn*wn}else if((d&tn)>=1083231232){if(0!=(d-3230714880|g))return u*hn*hn;if(p<=y-l)return u*hn*hn}return y=function(r,t,n){var e,i,o,a,u,f,c,l,p,s;return p=((l=r&tn|0)>>20)-J|0,c=0,l>1071644672&&(i=cn(0,((c=r+(gn>>p+1)>>>0)&~(dn>>(p=((c&tn)>>20)-J|0)))>>>0),c=(c&dn|gn)>>20-p>>>0,r<0&&(c=-c),t-=i),r=Jt(r=Zr(f=1-((f=(o=.6931471824645996*(i=Dt(i=n+t,0)))+(a=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(s=i)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(f-o))+f*u)-f))),(r+=c<<20>>>0)>>20<=0?Ft(f,c):cn(f,r)}(d,l,p),u*y}var Fn=6.283185307179586;function In(r,t,n){return Y(r)||Y(t)||Y(n)||n<=0?NaN:r<=t?0:C(n/Fn)*Et(-n/(2*(r-t)))/mn(r-t,1.5)}return $(In,"factory",(function(r,t){return Y(r)||Y(t)||t<=0?(n=NaN,function(){return n}):function(n){return Y(n)?NaN:n<=r?0:C(t/Fn)*Et(-t/(2*(n-r)))/mn(n-r,1.5)};var n})),In},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).pdf=t();
//# sourceMappingURL=index.js.map
