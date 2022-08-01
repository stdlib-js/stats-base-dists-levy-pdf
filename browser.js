// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(r){"use strict";var t,n="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;t=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(a.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),p&&f&&f.call(r,t,n.set),r};var l=t;function y(r){return r!=r}var p=Math.sqrt,v=Math.floor,b=Math.ceil;function d(r){return r<0?b(r):v(r)}var w=Number.NEGATIVE_INFINITY,s=Number.POSITIVE_INFINITY,_=1023;function A(r){return r===s||r===w}var m,h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),U=Object.prototype.toString,j=Object.prototype.hasOwnProperty,g="function"==typeof Symbol?Symbol.toStringTag:"";m=h&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,e,o,u;if(null==r)return U.call(r);n=r[g],u=g,t=null!=(o=r)&&j.call(o,u);try{r[g]=void 0}catch(t){return U.call(r)}return e=U.call(r),t?r[g]=n:delete r[g],e}:function(r){return U.call(r)};var N,I=m,O="function"==typeof Uint32Array,S="function"==typeof Uint32Array?Uint32Array:null,E="function"==typeof Uint32Array?Uint32Array:void 0;N=function(){var r,t,n;if("function"!=typeof S)return!1;try{t=new S(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(O&&n instanceof Uint32Array||"[object Uint32Array]"===I(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=N,H="function"==typeof Float64Array,G="function"==typeof Float64Array?Float64Array:null,P="function"==typeof Float64Array?Float64Array:void 0;F=function(){var r,t,n;if("function"!=typeof G)return!1;try{t=new G([1,3.14,-3.14,NaN]),n=t,r=(H&&n instanceof Float64Array||"[object Float64Array]"===I(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?P:function(){throw new Error("not implemented")};var M,x=F,L="function"==typeof Uint8Array,V="function"==typeof Uint8Array?Uint8Array:null,W="function"==typeof Uint8Array?Uint8Array:void 0;M=function(){var r,t,n;if("function"!=typeof V)return!1;try{t=new V(t=[1,3.14,-3.14,256,257]),n=t,r=(L&&n instanceof Uint8Array||"[object Uint8Array]"===I(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var k,Y=M,q="function"==typeof Uint16Array,C="function"==typeof Uint16Array?Uint16Array:null,z="function"==typeof Uint16Array?Uint16Array:void 0;k=function(){var r,t,n;if("function"!=typeof C)return!1;try{t=new C(t=[1,3.14,-3.14,65536,65537]),n=t,r=(q&&n instanceof Uint16Array||"[object Uint16Array]"===I(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?z:function(){throw new Error("not implemented")};var B,D={uint16:k,uint8:Y};(B=new D.uint16(1))[0]=4660;var J,K,Q=52===new D.uint8(B.buffer)[0];!0===Q?(J=1,K=0):(J=0,K=1);var R={HIGH:J,LOW:K},X=new x(1),Z=new T(X.buffer),$=R.HIGH,rr=R.LOW;function tr(r,t){return X[0]=t,r[0]=Z[$],r[1]=Z[rr],r}function nr(r,t){return 1===arguments.length?tr([0,0],r):tr(r,t)}var er,or,ur=!0===Q?1:0,ir=new x(1),fr=new T(ir.buffer);function ar(r){return ir[0]=r,fr[ur]}!0===Q?(er=1,or=0):(er=0,or=1);var cr={HIGH:er,LOW:or},lr=new x(1),yr=new T(lr.buffer),pr=cr.HIGH,vr=cr.LOW;function br(r,t){return yr[pr]=r,yr[vr]=t,lr[0]}var dr=[0,0];function wr(r,t){var n,e;return nr(dr,r),n=dr[0],n&=2147483647,e=ar(t),br(n|=e&=2147483648,dr[1])}function sr(r){return Math.abs(r)}function _r(r,t){return y(t)||A(t)?(r[0]=t,r[1]=0,r):0!==t&&sr(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var Ar=[0,0],mr=[0,0];function hr(r,t){var n,e;return 0===t||0===r||y(r)||A(r)?r:(function(r,t){1===arguments.length?_r([0,0],r):_r(r,t)}(Ar,r),t+=Ar[1],t+=function(r){var t=ar(r);return(t=(2146435072&t)>>>20)-_|0}(r=Ar[0]),t<-1074?wr(0,r):t>1023?r<0?w:s:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,nr(mr,r),n=mr[0],n&=2148532223,e*br(n|=t+_<<20,mr[1])))}var Ur=1.4426950408889634,jr=1/(1<<28);function gr(r){var t;return y(r)||r===s?r:r===w?0:r>709.782712893384?s:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<jr?1+r:function(r,t,n){var e,o,u,i;return hr(1-(t-(e=r-t)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),n)}(r-.6931471803691238*(t=d(r<0?Ur*r-.5:Ur*r+.5)),1.9082149292705877e-10*t,t)}function Nr(r){return v(r)===r}function Ir(r){return Nr(r/2)}function Or(r){return Ir(r>0?r-1:r+1)}var Sr=!0===Q?0:1,Er=new x(1),Fr=new T(Er.buffer);function Tr(r,t){return Er[0]=r,Fr[Sr]=t>>>0,Er[0]}function Hr(r){return 0|r}var Gr=!0===Q?1:0,Pr=new x(1),Mr=new T(Pr.buffer);function xr(r,t){return Pr[0]=r,Mr[Gr]=t>>>0,Pr[0]}var Lr=1048576,Vr=[1,1.5],Wr=[0,.5849624872207642],kr=[0,1.350039202129749e-8],Yr=2147483647,qr=1048575,Cr=1048576,zr=2147483647,Br=1083179008,Dr=1e300,Jr=1e-300,Kr=[0,0],Qr=[0,0];function Rr(r,t){var n,e,o,u,i,f,a,c,l,v,b,d,m,h;if(y(r)||y(t))return NaN;if(nr(Kr,t),i=Kr[0],0===Kr[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return p(r);if(-.5===t)return 1/p(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(A(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:sr(r)<1==(t===s)?0:s}(r,t)}if(nr(Kr,r),u=Kr[0],0===Kr[1]){if(0===u)return function(r,t){return t===w?s:t===s?0:t>0?Or(t)?r:0:Or(t)?wr(s,r):s}(r,t);if(1===r)return 1;if(-1===r&&Or(t))return-1;if(A(r))return r===w?Rr(-0,-t):t<0?0:s}if(r<0&&!1===Nr(t))return(r-r)/(r-r);if(o=sr(r),n=u&zr|0,e=i&zr|0,a=i>>>31|0,f=(f=u>>>31|0)&&Or(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&ar(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===a?f*Dr*Dr:f*Jr*Jr;if(n>1072693248)return 0===a?f*Dr*Dr:f*Jr*Jr;b=function(r,t){var n,e,o,u,i,f;return n=(i=1.9259629911266175e-8*(o=t-1)-o*o*(0===(f=o)?.5:.5+f*(.25*f-.3333333333333333))*1.4426950408889634)-((e=Tr(e=(u=1.4426950216293335*o)+i,0))-u),r[0]=e,r[1]=n,r}(Qr,o)}else b=function(r,t,n){var e,o,u,i,f,a,c,l,y,p,v,b,d,w,s,A,m,h,U,j,g;return h=0,n<Lr&&(h-=53,n=ar(t*=9007199254740992)),h+=(n>>20)-_|0,n=1072693248|(U=1048575&n|0),U<=235662?j=0:U<767610?j=1:(j=0,h+=1,n-=Lr),i=Tr(o=(A=(t=xr(t,n))-(c=Vr[j]))*(m=1/(t+c)),0),e=524288+(n>>1|536870912),a=xr(0,e+=j<<18),s=(u=o*o)*u*(0===(g=u)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=Tr(a=3+(u=i*i)+(s+=(f=m*(A-i*a-i*(t-(a-c))))*(i+o)),0),d=(v=-7.028461650952758e-9*(y=Tr(y=(A=i*a)+(m=f*a+(s-(a-3-u))*o),0))+.9617966939259756*(m-(y-A))+kr[j])-((b=Tr(b=(p=.9617967009544373*y)+v+(l=Wr[j])+(w=h),0))-w-l-p),r[0]=b,r[1]=d,r}(Qr,o,n);if(v=(t-(c=Tr(t,0)))*b[0]+t*b[1],l=c*b[0],nr(Kr,d=v+l),m=Hr(Kr[0]),h=Hr(Kr[1]),m>=Br){if(0!=(m-Br|h))return f*Dr*Dr;if(v+8008566259537294e-32>d-l)return f*Dr*Dr}else if((m&zr)>=1083231232){if(0!=(m-3230714880|h))return f*Jr*Jr;if(v<=d-l)return f*Jr*Jr}return d=function(r,t,n){var e,o,u,i,f,a,c,l,y,p;return y=((l=r&Yr|0)>>20)-_|0,c=0,l>1071644672&&(o=xr(0,((c=r+(Cr>>y+1)>>>0)&~(qr>>(y=((c&Yr)>>20)-_|0)))>>>0),c=(c&qr|Cr)>>20-y>>>0,r<0&&(c=-c),t-=o),r=Hr(r=ar(a=1-((a=(u=.6931471824645996*(o=Tr(o=n+t,0)))+(i=.6931471805599453*(n-(o-t))+-1.904654299957768e-9*o))*(e=a-(o=a*a)*(0===(p=o)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((f=i-(a-u))+a*f)-a))),(r+=c<<20>>>0)>>20<=0?hr(a,c):xr(a,r)}(m,l,v),f*d}var Xr=6.283185307179586;function Zr(r,t,n){return y(r)||y(t)||y(n)||n<=0?NaN:r<=t?0:p(n/Xr)*gr(-n/(2*(r-t)))/Rr(r-t,1.5)}function $r(r,t){return y(r)||y(t)||t<=0?(n=NaN,function(){return n}):function(n){return y(n)?NaN:n<=r?0:p(t/Xr)*gr(-t/(2*(n-r)))/Rr(n-r,1.5)};var n}l(Zr,"factory",{configurable:!1,enumerable:!1,writable:!1,value:$r}),r.default=Zr,r.factory=$r,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).pdf={});
//# sourceMappingURL=browser.js.map
