// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,o=e.__defineGetter__,i=e.__defineSetter__,a=e.__lookupGetter__,f=e.__lookupSetter__;var c=t,l=function(r,n,t){var c,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),v="get"in t,y="set"in t,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&o&&o.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r},v=n()?c:l;var y=function(r,n,t){v(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},b=Math.sqrt,w=Math.floor,A=Math.ceil,_=w,m=A;var d=function(r){return r<0?m(r):_(r)},s=Number.NEGATIVE_INFINITY,h=Number.POSITIVE_INFINITY,U=h,N=s;var j=function(r){return r===U||r===N};var g=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var I=function(){return g&&"symbol"==typeof Symbol.toStringTag},O=Object.prototype.toString,S=O;var E=function(r){return S.call(r)},F=Object.prototype.hasOwnProperty;var H=function(r,n){return null!=r&&F.call(r,n)},T="function"==typeof Symbol?Symbol.toStringTag:"",G=H,P=T,L=O;var M=E,V=function(r){var n,t,e;if(null==r)return L.call(r);t=r[P],n=G(r,P);try{r[P]=void 0}catch(n){return L.call(r)}return e=L.call(r),n?r[P]=t:delete r[P],e},W=I()?V:M,k=W,x="function"==typeof Uint32Array;var Y="function"==typeof Uint32Array?Uint32Array:null,q=function(r){return x&&r instanceof Uint32Array||"[object Uint32Array]"===k(r)},C=Y;var z=function(){var r,n;if("function"!=typeof C)return!1;try{n=new C(n=[1,3.14,-3.14,4294967296,4294967297]),r=q(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var B="function"==typeof Uint32Array?Uint32Array:void 0,D=function(){throw new Error("not implemented")},J=z()?B:D,K=W,Q="function"==typeof Float64Array;var R="function"==typeof Float64Array?Float64Array:null,X=function(r){return Q&&r instanceof Float64Array||"[object Float64Array]"===K(r)},Z=R;var $=function(){var r,n;if("function"!=typeof Z)return!1;try{n=new Z([1,3.14,-3.14,NaN]),r=X(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var rr="function"==typeof Float64Array?Float64Array:void 0,nr=function(){throw new Error("not implemented")},tr=$()?rr:nr,er=W,ur="function"==typeof Uint8Array;var or="function"==typeof Uint8Array?Uint8Array:null,ir=function(r){return ur&&r instanceof Uint8Array||"[object Uint8Array]"===er(r)},ar=or;var fr=function(){var r,n;if("function"!=typeof ar)return!1;try{n=new ar(n=[1,3.14,-3.14,256,257]),r=ir(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var cr="function"==typeof Uint8Array?Uint8Array:void 0,lr=function(){throw new Error("not implemented")},vr=fr()?cr:lr,yr=W,pr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null,wr=function(r){return pr&&r instanceof Uint16Array||"[object Uint16Array]"===yr(r)},Ar=br;var _r=function(){var r,n;if("function"!=typeof Ar)return!1;try{n=new Ar(n=[1,3.14,-3.14,65536,65537]),r=wr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var mr,dr="function"==typeof Uint16Array?Uint16Array:void 0,sr=function(){throw new Error("not implemented")},hr={uint16:_r()?dr:sr,uint8:vr};(mr=new hr.uint16(1))[0]=4660;var Ur,Nr,jr=52===new hr.uint8(mr.buffer)[0];!0===jr?(Ur=1,Nr=0):(Ur=0,Nr=1);var gr=J,Ir={HIGH:Ur,LOW:Nr},Or=new tr(1),Sr=new gr(Or.buffer),Er=Ir.HIGH,Fr=Ir.LOW;var Hr=function(r,n){return Or[0]=n,r[0]=Sr[Er],r[1]=Sr[Fr],r};var Tr=function(r,n){return 1===arguments.length?Hr([0,0],r):Hr(r,n)},Gr=J,Pr=!0===jr?1:0,Lr=new tr(1),Mr=new Gr(Lr.buffer);var Vr,Wr,kr=function(r){return Lr[0]=r,Mr[Pr]};!0===jr?(Vr=1,Wr=0):(Vr=0,Wr=1);var xr=J,Yr={HIGH:Vr,LOW:Wr},qr=new tr(1),Cr=new xr(qr.buffer),zr=Yr.HIGH,Br=Yr.LOW;var Dr=function(r,n){return Cr[zr]=r,Cr[Br]=n,qr[0]},Jr=Tr,Kr=kr,Qr=Dr,Rr=[0,0];var Xr=function(r,n){var t,e;return Jr(Rr,r),t=Rr[0],t&=2147483647,e=Kr(n),Qr(t|=e&=2147483648,Rr[1])};var Zr=function(r){return Math.abs(r)},$r=j,rn=p,nn=Zr;var tn=function(r,n){return rn(n)||$r(n)?(r[0]=n,r[1]=0,r):0!==n&&nn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var en=kr;var un=function(r){var n=en(r);return(n=(2146435072&n)>>>20)-1023|0},on=h,an=s,fn=p,cn=j,ln=Xr,vn=function(r,n){return 1===arguments.length?tn([0,0],r):tn(r,n)},yn=un,pn=Tr,bn=Dr,wn=[0,0],An=[0,0];var _n=function(r,n){var t,e;return 0===n||0===r||fn(r)||cn(r)?r:(vn(wn,r),n+=wn[1],(n+=yn(r=wn[0]))<-1074?ln(0,r):n>1023?r<0?an:on:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,pn(An,r),t=An[0],t&=2148532223,e*bn(t|=n+1023<<20,An[1])))},mn=_n;var dn=mn,sn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var hn=p,Un=d,Nn=s,jn=h,gn=function(r,n,t){var e,u,o;return o=(e=r-n)-(u=e*e)*sn(u),dn(1-(n-e*o/(2-o)-r),t)};var In=function(r){var n;return hn(r)||r===jn?r:r===Nn?0:r>709.782712893384?jn:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=Un(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),gn(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},On=w;var Sn=function(r){return On(r)===r},En=Sn;var Fn=function(r){return En(r/2)};var Hn=function(r){return Fn(r>0?r-1:r+1)},Tn=J,Gn=!0===jr?0:1,Pn=new tr(1),Ln=new Tn(Pn.buffer);var Mn=function(r,n){return Pn[0]=r,Ln[Gn]=n>>>0,Pn[0]},Vn=Mn;var Wn=function(r){return 0|r},kn=Hn,xn=Xr,Yn=s,qn=h;var Cn=function(r,n){return n===Yn?qn:n===qn?0:n>0?kn(n)?r:0:kn(n)?xn(qn,r):qn},zn=kr;var Bn=function(r,n){return(2147483647&zn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},Dn=Zr,Jn=h;var Kn=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Dn(r)<1==(n===Jn)?0:Jn},Qn=J,Rn=!0===jr?1:0,Xn=new tr(1),Zn=new Qn(Xn.buffer);var $n=function(r,n){return Xn[0]=r,Zn[Rn]=n>>>0,Xn[0]};var rt=kr,nt=Vn,tt=$n,et=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},ut=[1,1.5],ot=[0,.5849624872207642],it=[0,1.350039202129749e-8];var at=Vn,ft=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var ct=kr,lt=$n,vt=Vn,yt=Wn,pt=mn,bt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var wt=p,At=Hn,_t=j,mt=Sn,dt=b,st=Zr,ht=Tr,Ut=Vn,Nt=Wn,jt=s,gt=h,It=Cn,Ot=Bn,St=Kn,Et=function(r,n,t){var e,u,o,i,a,f,c,l,v,y,p,b,w,A,_,m,d,s,h,U;return s=0,t<1048576&&(s-=53,t=rt(n*=9007199254740992)),s+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,s+=1,t-=1048576),e=524288+(t>>1|536870912),a=(d=1/((n=tt(n,t))+(c=ut[U])))*((m=n-c)-(i=nt(u=m*d,0))*(f=tt(0,e+=U<<18))-i*(n-(f-c))),_=(o=u*u)*o*et(o),f=nt(f=3+(o=i*i)+(_+=a*(i+u)),0),w=(p=-7.028461650952758e-9*(v=nt(v=(m=i*f)+(d=a*f+(_-(f-3-o))*u),0))+.9617966939259756*(d-(v-m))+it[U])-((b=nt(b=(y=.9617967009544373*v)+p+(l=ot[U])+(A=s),0))-A-l-y),r[0]=b,r[1]=w,r},Ft=function(r,n){var t,e,u,o,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*ft(u)))-((e=at(e=(o=1.4426950216293335*u)+i,0))-o),r[0]=e,r[1]=t,r},Ht=function(r,n,t){var e,u,o,i,a,f,c,l,v,y;return y=((v=2147483647&r|0)>>20)-1023|0,l=0,v>1071644672&&(e=((l=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&l)>>20)-1023|0)))>>>0,l=(1048575&l|1048576)>>20-y>>>0,r<0&&(l=-l),n-=o=lt(0,e)),f=(a=.6931471805599453*(t-((o=vt(o=t+n,0))-n))+-1.904654299957768e-9*o)-((c=(i=.6931471824645996*o)+a)-i),u=c-(o=c*c)*bt(o),r=ct(c=1-(c*u/(u-2)-(f+c*f)-c)),r=yt(r),c=(r+=l<<20>>>0)>>20<=0?pt(c,l):lt(c,r)},Tt=1e300,Gt=1e-300,Pt=[0,0],Lt=[0,0];var Mt=function r(n,t){var e,u,o,i,a,f,c,l,v,y,p,b,w,A;if(wt(n)||wt(t))return NaN;if(ht(Pt,t),a=Pt[0],0===Pt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return dt(n);if(-.5===t)return 1/dt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(_t(t))return St(n,t)}if(ht(Pt,n),i=Pt[0],0===Pt[1]){if(0===i)return It(n,t);if(1===n)return 1;if(-1===n&&At(t))return-1;if(_t(n))return n===jt?r(-0,-t):t<0?0:gt}if(n<0&&!1===mt(t))return(n-n)/(n-n);if(o=st(n),e=2147483647&i|0,u=2147483647&a|0,c=a>>>31|0,f=(f=i>>>31|0)&&At(t)?-1:1,u>1105199104){if(u>1139802112)return Ot(n,t);if(e<1072693247)return 1===c?f*Tt*Tt:f*Gt*Gt;if(e>1072693248)return 0===c?f*Tt*Tt:f*Gt*Gt;p=Ft(Lt,o)}else p=Et(Lt,o,e);if(y=(t-(l=Ut(t,0)))*p[0]+t*p[1],v=l*p[0],ht(Pt,b=y+v),w=Nt(Pt[0]),A=Nt(Pt[1]),w>=1083179008){if(0!=(w-1083179008|A))return f*Tt*Tt;if(y+8008566259537294e-32>b-v)return f*Tt*Tt}else if((2147483647&w)>=1083231232){if(0!=(w-3230714880|A))return f*Gt*Gt;if(y<=b-v)return f*Gt*Gt}return f*(b=Ht(w,v,y))},Vt=Mt;function Wt(r,n,t){return p(r)||p(n)||p(t)||t<=0?NaN:r<=n?0:b(t/6.283185307179586)*In(-t/(2*(r-n)))/Vt(r-n,1.5)}var kt=function(r){return function(){return r}};function xt(r,n){return p(r)||p(n)||n<=0?kt(NaN):function(t){if(p(t))return NaN;if(t<=r)return 0;return b(n/6.283185307179586)*In(-n/(2*(t-r)))/Vt(t-r,1.5)}}y(Wt,"factory",xt);export{Wt as default,xt as factory};
//# sourceMappingURL=mod.js.map
