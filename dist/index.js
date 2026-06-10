"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(R,q){
var a=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-sqrt/dist'),N=require('@stdlib/math-base-special-exp/dist'),c=require('@stdlib/math-base-special-pow/dist'),y=require('@stdlib/constants-float64-two-pi/dist');function d(e,r,i){return a(e)||a(r)||a(i)||i<=0?NaN:e<=r?0:p(i/y)*N(-i/(2*(e-r)))/c(e-r,1.5)}q.exports=d
});var f=u(function(b,v){
var O=require('@stdlib/utils-constant-function/dist'),n=require('@stdlib/math-base-assert-is-nan/dist'),w=require('@stdlib/math-base-special-sqrt/dist'),I=require('@stdlib/math-base-special-exp/dist'),P=require('@stdlib/math-base-special-pow/dist'),T=require('@stdlib/constants-float64-two-pi/dist');function W(e,r){if(n(e)||n(r)||r<=0)return O(NaN);return i;function i(t){return n(t)?NaN:t<=e?0:w(r/T)*I(-r/(2*(t-e)))/P(t-e,1.5)}}v.exports=W
});var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=s(),l=f();_(o,"factory",l);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
