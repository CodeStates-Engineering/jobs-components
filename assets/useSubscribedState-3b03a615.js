import{r as F}from"./index-29a85313.js";import{u as q}from"./index-20667a64.js";import{M as m,e as K,U as M,g as x,i as D,a as I,b as $,S as R,c as J}from"./_Uint8Array-ad07ee63.js";import{S as G,b}from"./isObject-9c705d90.js";var Q="__lodash_hash_undefined__";function X(n){return this.__data__.set(n,Q),this}function Y(n){return this.__data__.has(n)}function L(n){var e=-1,f=n==null?0:n.length;for(this.__data__=new m;++e<f;)this.add(n[e])}L.prototype.add=L.prototype.push=X;L.prototype.has=Y;function Z(n,e){for(var f=-1,a=n==null?0:n.length;++f<a;)if(e(n[f],f,n))return!0;return!1}function W(n,e){return n.has(e)}var h=1,z=2;function U(n,e,f,a,s,r){var i=f&h,l=n.length,t=e.length;if(l!=t&&!(i&&t>l))return!1;var g=r.get(n),A=r.get(e);if(g&&A)return g==e&&A==n;var _=-1,u=!0,v=f&z?new L:void 0;for(r.set(n,e),r.set(e,n);++_<l;){var d=n[_],p=e[_];if(a)var T=i?a(p,d,_,e,n,r):a(d,p,_,n,e,r);if(T!==void 0){if(T)continue;u=!1;break}if(v){if(!Z(e,function(y,O){if(!W(v,O)&&(d===y||s(d,y,f,a,r)))return v.push(O)})){u=!1;break}}else if(!(d===p||s(d,p,f,a,r))){u=!1;break}}return r.delete(n),r.delete(e),u}function V(n){var e=-1,f=Array(n.size);return n.forEach(function(a,s){f[++e]=[s,a]}),f}function j(n){var e=-1,f=Array(n.size);return n.forEach(function(a){f[++e]=a}),f}var k=1,nn=2,en="[object Boolean]",rn="[object Date]",an="[object Error]",fn="[object Map]",sn="[object Number]",un="[object RegExp]",tn="[object Set]",ln="[object String]",gn="[object Symbol]",_n="[object ArrayBuffer]",dn="[object DataView]",o=G?G.prototype:void 0,S=o?o.valueOf:void 0;function pn(n,e,f,a,s,r,i){switch(f){case dn:if(n.byteLength!=e.byteLength||n.byteOffset!=e.byteOffset)return!1;n=n.buffer,e=e.buffer;case _n:return!(n.byteLength!=e.byteLength||!r(new M(n),new M(e)));case en:case rn:case sn:return K(+n,+e);case an:return n.name==e.name&&n.message==e.message;case un:case ln:return n==e+"";case fn:var l=V;case tn:var t=a&k;if(l||(l=j),n.size!=e.size&&!t)return!1;var g=i.get(n);if(g)return g==e;a|=nn,i.set(n,e);var A=U(l(n),l(e),a,s,r,i);return i.delete(n),A;case gn:if(S)return S.call(n)==S.call(e)}return!1}var An=1,vn=Object.prototype,Tn=vn.hasOwnProperty;function yn(n,e,f,a,s,r){var i=f&An,l=x(n),t=l.length,g=x(e),A=g.length;if(t!=A&&!i)return!1;for(var _=t;_--;){var u=l[_];if(!(i?u in e:Tn.call(e,u)))return!1}var v=r.get(n),d=r.get(e);if(v&&d)return v==e&&d==n;var p=!0;r.set(n,e),r.set(e,n);for(var T=i;++_<t;){u=l[_];var y=n[u],O=e[u];if(a)var c=i?a(O,y,u,e,n,r):a(y,O,u,n,e,r);if(!(c===void 0?y===O||s(y,O,f,a,r):c)){p=!1;break}T||(T=u=="constructor")}if(p&&!T){var w=n.constructor,E=e.constructor;w!=E&&"constructor"in n&&"constructor"in e&&!(typeof w=="function"&&w instanceof w&&typeof E=="function"&&E instanceof E)&&(p=!1)}return r.delete(n),r.delete(e),p}var On=1,B="[object Arguments]",C="[object Array]",P="[object Object]",wn=Object.prototype,N=wn.hasOwnProperty;function En(n,e,f,a,s,r){var i=D(n),l=D(e),t=i?C:I(n),g=l?C:I(e);t=t==B?P:t,g=g==B?P:g;var A=t==P,_=g==P,u=t==g;if(u&&$(n)){if(!$(e))return!1;i=!0,A=!1}if(u&&!A)return r||(r=new R),i||J(n)?U(n,e,f,a,s,r):pn(n,e,t,f,a,s,r);if(!(f&On)){var v=A&&N.call(n,"__wrapped__"),d=_&&N.call(e,"__wrapped__");if(v||d){var p=v?n.value():n,T=d?e.value():e;return r||(r=new R),s(p,T,f,a,r)}}return u?(r||(r=new R),yn(n,e,f,a,s,r)):!1}function H(n,e,f,a,s){return n===e?!0:n==null||e==null||!b(n)&&!b(e)?n!==n&&e!==e:En(n,e,f,a,H,s)}function Pn(n,e){return H(n,e)}function Mn(n,e){const f=F.useState(n),a=n instanceof Function?n():n;return q(()=>{const s=typeof a,[r,i]=f;switch(s){case"object":case"function":Pn(r,a)||i(a);break;default:i(a)}},e||[a]),f}export{Mn as u};
