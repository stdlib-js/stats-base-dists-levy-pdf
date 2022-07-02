// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,r;n=this,r=function(){"use strict";var n,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return r({},"x",{}),!0}catch(n){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,a=o.__lookupSetter__,l=e,y=function(n,r,t){var e,l,y,p;if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(c.call(n,r)||a.call(n,r)?(e=n.__proto__,n.__proto__=o,delete n[r],n[r]=t.value,n.__proto__=e):n[r]=t.value),y="get"in t,p="set"in t,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(n,r,t.get),p&&f&&f.call(n,r,t.set),n},p=t()?l:y,b=function(n,r,t){p(n,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},v=function(n){return n!=n},d=Math.sqrt,w=Math.floor,A=Math.ceil,s=w,_=A,m=function(n){return n<0?_(n):s(n)},h=Number.NEGATIVE_INFINITY,U=Number.POSITIVE_INFINITY,g=U,j=h,N=function(n){return n===g||n===j},I="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),O=Object.prototype.toString,S=O,E=function(n){return S.call(n)},F=Object.prototype.hasOwnProperty,T=function(n,r){return null!=n&&F.call(n,r)},H="function"==typeof Symbol?Symbol.toStringTag:"",G=T,P=H,L=O,M=E,V=function(n){var r,t,e;if(null==n)return L.call(n);t=n[P],r=G(n,P);try{n[P]=void 0}catch(r){return L.call(n)}return e=L.call(n),r?n[P]=t:delete n[P],e},W=I&&"symbol"==typeof Symbol.toStringTag?V:M,x=W,k="function"==typeof Uint32Array,Y="function"==typeof Uint32Array?Uint32Array:null,q=function(n){return k&&n instanceof Uint32Array||"[object Uint32Array]"===x(n)},C=Y,z=function(){var n,r;if("function"!=typeof C)return!1;try{r=new C(r=[1,3.14,-3.14,4294967296,4294967297]),n=q(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},B="function"==typeof Uint32Array?Uint32Array:void 0,D=function(){throw new Error("not implemented")},J=z()?B:D,K=W,Q="function"==typeof Float64Array,R="function"==typeof Float64Array?Float64Array:null,X=function(n){return Q&&n instanceof Float64Array||"[object Float64Array]"===K(n)},Z=R,$=function(){var n,r;if("function"!=typeof Z)return!1;try{r=new Z([1,3.14,-3.14,NaN]),n=X(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n},nn="function"==typeof Float64Array?Float64Array:void 0,rn=function(){throw new Error("not implemented")},tn=$()?nn:rn,en=W,on="function"==typeof Uint8Array,un="function"==typeof Uint8Array?Uint8Array:null,fn=function(n){return on&&n instanceof Uint8Array||"[object Uint8Array]"===en(n)},cn=un,an=function(){var n,r;if("function"!=typeof cn)return!1;try{r=new cn(r=[1,3.14,-3.14,256,257]),n=fn(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},ln="function"==typeof Uint8Array?Uint8Array:void 0,yn=function(){throw new Error("not implemented")},pn=an()?ln:yn,bn=W,vn="function"==typeof Uint16Array,dn="function"==typeof Uint16Array?Uint16Array:null,wn=function(n){return vn&&n instanceof Uint16Array||"[object Uint16Array]"===bn(n)},An=dn,sn=function(){var n,r;if("function"!=typeof An)return!1;try{r=new An(r=[1,3.14,-3.14,65536,65537]),n=wn(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n},_n="function"==typeof Uint16Array?Uint16Array:void 0,mn=function(){throw new Error("not implemented")},hn={uint16:sn()?_n:mn,uint8:pn};(n=new hn.uint16(1))[0]=4660;var Un,gn,jn=52===new hn.uint8(n.buffer)[0];!0===jn?(Un=1,gn=0):(Un=0,gn=1);var Nn,In,On=J,Sn={HIGH:Un,LOW:gn},En=new tn(1),Fn=new On(En.buffer),Tn=Sn.HIGH,Hn=Sn.LOW,Gn=function(n,r){return En[0]=r,n[0]=Fn[Tn],n[1]=Fn[Hn],n},Pn=function(n,r){return 1===arguments.length?Gn([0,0],n):Gn(n,r)},Ln=Pn,Mn=J,Vn=!0===jn?1:0,Wn=new tn(1),xn=new Mn(Wn.buffer),kn=function(n){return Wn[0]=n,xn[Vn]};!0===jn?(Nn=1,In=0):(Nn=0,In=1);var Yn=J,qn={HIGH:Nn,LOW:In},Cn=new tn(1),zn=new Yn(Cn.buffer),Bn=qn.HIGH,Dn=qn.LOW,Jn=function(n,r){return zn[Bn]=n,zn[Dn]=r,Cn[0]},Kn=Ln,Qn=kn,Rn=Jn,Xn=[0,0],Zn=function(n,r){var t,e;return Kn(Xn,n),t=Xn[0],t&=2147483647,e=Qn(r),Rn(t|=e&=2147483648,Xn[1])},$n=function(n){return Math.abs(n)},nr=N,rr=v,tr=$n,er=function(n,r){return rr(r)||nr(r)?(n[0]=r,n[1]=0,n):0!==r&&tr(r)<22250738585072014e-324?(n[0]=4503599627370496*r,n[1]=-52,n):(n[0]=r,n[1]=0,n)},or=function(n,r){return 1===arguments.length?er([0,0],n):er(n,r)},ur=kn,ir=function(n){var r=ur(n);return(r=(2146435072&r)>>>20)-1023|0},fr=U,cr=h,ar=v,lr=N,yr=Zn,pr=or,br=ir,vr=Ln,dr=Jn,wr=[0,0],Ar=[0,0],sr=function(n,r){var t,e;return 0===r||0===n||ar(n)||lr(n)?n:(pr(wr,n),r+=wr[1],(r+=br(n=wr[0]))<-1074?yr(0,n):r>1023?n<0?cr:fr:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,vr(Ar,n),t=Ar[0],t&=2148532223,e*dr(t|=r+1023<<20,Ar[1])))},_r=sr,mr=_r,hr=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},Ur=v,gr=m,jr=h,Nr=U,Ir=function(n,r,t){var e,o,u;return u=(e=n-r)-(o=e*e)*hr(o),mr(1-(r-e*u/(2-u)-n),t)},Or=1.4426950408889634,Sr=1/(1<<28),Er=function(n){var r;return Ur(n)||n===Nr?n:n===jr?0:n>709.782712893384?Nr:n<-745.1332191019411?0:n>-3.725290298461914e-9&&n<Sr?1+n:(r=gr(n<0?Or*n-.5:Or*n+.5),Ir(n-.6931471803691238*r,1.9082149292705877e-10*r,r))},Fr=w,Tr=function(n){return Fr(n)===n},Hr=Tr,Gr=function(n){return Hr(n/2)},Pr=function(n){return Gr(n>0?n-1:n+1)},Lr=J,Mr=!0===jn?0:1,Vr=new tn(1),Wr=new Lr(Vr.buffer),xr=function(n,r){return Vr[0]=n,Wr[Mr]=r>>>0,Vr[0]},kr=xr,Yr=function(n){return 0|n},qr=Pr,Cr=Zn,zr=h,Br=U,Dr=function(n,r){return r===zr?Br:r===Br?0:r>0?qr(r)?n:0:qr(r)?Cr(Br,n):Br},Jr=kn,Kr=function(n,r){return(2147483647&Jr(n))<=1072693247?r<0?1/0:0:r>0?1/0:0},Qr=$n,Rr=U,Xr=function(n,r){return-1===n?(n-n)/(n-n):1===n?1:Qr(n)<1==(r===Rr)?0:Rr},Zr=J,$r=!0===jn?1:0,nt=new tn(1),rt=new Zr(nt.buffer),tt=function(n,r){return nt[0]=n,rt[$r]=r>>>0,nt[0]},et=kn,ot=kr,ut=tt,it=function(n){return 0===n?.5999999999999946:.5999999999999946+n*(.4285714285785502+n*(.33333332981837743+n*(.272728123808534+n*(.23066074577556175+.20697501780033842*n))))},ft=1048576,ct=[1,1.5],at=[0,.5849624872207642],lt=[0,1.350039202129749e-8],yt=kr,pt=function(n){return 0===n?.5:.5+n*(.25*n-.3333333333333333)},bt=kn,vt=tt,dt=kr,wt=Yr,At=_r,st=function(n){return 0===n?.16666666666666602:.16666666666666602+n*(n*(6613756321437934e-20+n*(4.1381367970572385e-8*n-16533902205465252e-22))-.0027777777777015593)},_t=2147483647,mt=1048575,ht=1048576,Ut=v,gt=Pr,jt=N,Nt=Tr,It=d,Ot=$n,St=Ln,Et=kr,Ft=Yr,Tt=h,Ht=U,Gt=Dr,Pt=Kr,Lt=Xr,Mt=function(n,r,t){var e,o,u,i,f,c,a,l,y,p,b,v,d,w,A,s,_,m,h,U;return m=0,t<ft&&(m-=53,t=et(r*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?U=0:h<767610?U=1:(U=0,m+=1,t-=ft),e=524288+(t>>1|536870912),f=(_=1/((r=ut(r,t))+(a=ct[U])))*((s=r-a)-(i=ot(o=s*_,0))*(c=ut(0,e+=U<<18))-i*(r-(c-a))),A=(u=o*o)*u*it(u),c=ot(c=3+(u=i*i)+(A+=f*(i+o)),0),d=(b=-7.028461650952758e-9*(y=ot(y=(s=i*c)+(_=f*c+(A-(c-3-u))*o),0))+.9617966939259756*(_-(y-s))+lt[U])-((v=ot(v=(p=.9617967009544373*y)+b+(l=at[U])+(w=m),0))-w-l-p),n[0]=v,n[1]=d,n},Vt=function(n,r){var t,e,o,u,i;return t=(i=1.9259629911266175e-8*(o=r-1)-o*o*pt(o)*1.4426950408889634)-((e=yt(e=(u=1.4426950216293335*o)+i,0))-u),n[0]=e,n[1]=t,n},Wt=function(n,r,t){var e,o,u,i,f,c,a,l,y;return y=((l=n&_t|0)>>20)-1023|0,a=0,l>1071644672&&(o=vt(0,((a=n+(ht>>y+1)>>>0)&~(mt>>(y=((a&_t)>>20)-1023|0)))>>>0),a=(a&mt|ht)>>20-y>>>0,n<0&&(a=-a),r-=o),f=(i=.6931471805599453*(t-((o=dt(o=t+r,0))-r))+-1.904654299957768e-9*o)-((c=(u=.6931471824645996*o)+i)-u),e=c-(o=c*c)*st(o),n=bt(c=1-(c*e/(e-2)-(f+c*f)-c)),n=wt(n),c=(n+=a<<20>>>0)>>20<=0?At(c,a):vt(c,n)},xt=2147483647,kt=1083179008,Yt=1e300,qt=1e-300,Ct=[0,0],zt=[0,0],Bt=function n(r,t){var e,o,u,i,f,c,a,l,y,p,b,v,d,w;if(Ut(r)||Ut(t))return NaN;if(St(Ct,t),f=Ct[0],0===Ct[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return It(r);if(-.5===t)return 1/It(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(jt(t))return Lt(r,t)}if(St(Ct,r),i=Ct[0],0===Ct[1]){if(0===i)return Gt(r,t);if(1===r)return 1;if(-1===r&&gt(t))return-1;if(jt(r))return r===Tt?n(-0,-t):t<0?0:Ht}if(r<0&&!1===Nt(t))return(r-r)/(r-r);if(u=Ot(r),e=i&xt|0,o=f&xt|0,a=f>>>31|0,c=(c=i>>>31|0)&&gt(t)?-1:1,o>1105199104){if(o>1139802112)return Pt(r,t);if(e<1072693247)return 1===a?c*Yt*Yt:c*qt*qt;if(e>1072693248)return 0===a?c*Yt*Yt:c*qt*qt;b=Vt(zt,u)}else b=Mt(zt,u,e);if(p=(t-(l=Et(t,0)))*b[0]+t*b[1],y=l*b[0],St(Ct,v=p+y),d=Ft(Ct[0]),w=Ft(Ct[1]),d>=kt){if(0!=(d-kt|w))return c*Yt*Yt;if(p+8008566259537294e-32>v-y)return c*Yt*Yt}else if((d&xt)>=1083231232){if(0!=(d-3230714880|w))return c*qt*qt;if(p<=v-y)return c*qt*qt}return c*(v=Wt(d,y,p))},Dt=Bt,Jt=6.283185307179586;function Kt(n,r,t){return v(n)||v(r)||v(t)||t<=0?NaN:n<=r?0:d(t/Jt)*Er(-t/(2*(n-r)))/Dt(n-r,1.5)}var Qt=function(n){return function(){return n}};return b(Kt,"factory",(function(n,r){return v(n)||v(r)||r<=0?Qt(NaN):function(t){return v(t)?NaN:t<=n?0:d(r/Jt)*Er(-r/(2*(t-n)))/Dt(t-n,1.5)}})),Kt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).pdf=r();
//# sourceMappingURL=browser.js.map
