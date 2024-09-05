import{c as U}from"./cleanClassName-cdc1ff81.js";import{r as d}from"./index-61bf1805.js";import{j as V}from"./jsx-runtime-4ca860c5.js";const X=(async function(){}).constructor,N=e=>e instanceof X,$={"font-size-large4x":"_font-size-large4x_1a3oy_461","font-size-large3x":"_font-size-large3x_1a3oy_465","font-size-large2x":"_font-size-large2x_1a3oy_469","font-size-large":"_font-size-large_1a3oy_461","font-size-medium":"_font-size-medium_1a3oy_477","font-size-normal":"_font-size-normal_1a3oy_481","font-size-small":"_font-size-small_1a3oy_485","font-size-small2x":"_font-size-small2x_1a3oy_489","font-size-small3x":"_font-size-small3x_1a3oy_493","font-size-small4x":"_font-size-small4x_1a3oy_497","font-weight-700":"_font-weight-700_1a3oy_501","font-weight-600":"_font-weight-600_1a3oy_505","font-weight-500":"_font-weight-500_1a3oy_509","font-weight-400":"_font-weight-400_1a3oy_513","fade-in":"_fade-in_1a3oy_1","fade-out":"_fade-out_1a3oy_1","shake-horizontal":"_shake-horizontal_1a3oy_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1a3oy_1","slide-in-fwd-center":"_slide-in-fwd-center_1a3oy_1","scale-in-center":"_scale-in-center_1a3oy_1","slide-in-right":"_slide-in-right_1a3oy_1","slide-in-left":"_slide-in-left_1a3oy_1","slide-out-right":"_slide-out-right_1a3oy_1","slide-out-left":"_slide-out-left_1a3oy_1","scale-in-top":"_scale-in-top_1a3oy_1","scale-out-top":"_scale-out-top_1a3oy_1","swing-in-top-fwd":"_swing-in-top-fwd_1a3oy_1","fade-in-top":"_fade-in-top_1a3oy_1","fade-out-top":"_fade-out-top_1a3oy_1","fade-in-bottom":"_fade-in-bottom_1a3oy_1","fade-out-bottom":"_fade-out-bottom_1a3oy_1","scale-out-horizontal":"_scale-out-horizontal_1a3oy_1"},C=({fontSize:e,fontWeight:t})=>({typographyClassName:U(`${$[`font-size-${e}`]} ${$[`font-weight-${t}`]}`)});try{C.displayName="useTypographyClassName",C.__docgenInfo={description:"",displayName:"useTypographyClassName",props:{fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small3x"'},{value:'"small2x"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"large4x"'},{value:'"large3x"'},{value:'"large2x"'},{value:'"normal"'},{value:'"small4x"'}]}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:"700"},{value:"600"},{value:"500"},{value:"400"}]}}}}}catch{}const T=e=>e.replace(/[^0-9]/g,""),I=e=>d.useMemo(()=>{switch(e){case"number":case"large-number":return t=>T(t);case"phone-number":return t=>{let n=T(t);return n.length>11&&(n=n.slice(0,11)),t?n:""};case"business-number":return t=>{let n=T(t);return n.length>10&&(n=n.slice(0,10)),t?n:""};default:return t=>t}},[e]);try{I.displayName="useConvertChangeHandlerParam",I.__docgenInfo={description:"",displayName:"useConvertChangeHandlerParam",props:{}}}catch{}const M=({type:e,value:t,placeholder:n})=>{const[r,u]=d.useState(!0);return{formatedValue:(()=>{if(!t){if(e==="button")return n;if(t!==0)return""}const a=String(t);if(!r)return a;switch(e){case"number":return a;case"large-number":return Number(a).toLocaleString();case"phone-number":return a.length===10?a.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3"):a.replace(/(\d{3})(\d{4})(\d{4})/,"$1-$2-$3");case"business-number":return a.replace(/(\d{3})(\d{2})(\d{5})/,"$1-$2-$3");default:return a}})(),setIsDisplayFormatedValue:u}};try{M.displayName="useFormatedValue",M.__docgenInfo={description:"",displayName:"useFormatedValue",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"T"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"button"'},{value:'"text"'},{value:'"large-number"'},{value:'"phone-number"'},{value:'"business-number"'},{value:'"password"'}]}}}}}catch{}const E=e=>{var a;const t=d.useRef(null),n=(a=t.current)==null?void 0:a.offsetHeight,[r,u]=d.useState();return d.useEffect(()=>{u(e?{height:n}:void 0)},[n,e]),{messageRef:t,wrapHeightStyle:r}};try{E.displayName="useValidationMessageDynamicHeight",E.__docgenInfo={description:"",displayName:"useValidationMessageDynamicHeight",props:{}}}catch{}var J=typeof global=="object"&&global&&global.Object===Object&&global;const K=J;var Q=typeof self=="object"&&self&&self.Object===Object&&self,Y=K||Q||Function("return this")();const W=Y;var Z=W.Symbol;const b=Z;var k=Object.prototype,ee=k.hasOwnProperty,te=k.toString,y=b?b.toStringTag:void 0;function ne(e){var t=ee.call(e,y),n=e[y];try{e[y]=void 0;var r=!0}catch{}var u=te.call(e);return r&&(t?e[y]=n:delete e[y]),u}var ae=Object.prototype,re=ae.toString;function ie(e){return re.call(e)}var oe="[object Null]",se="[object Undefined]",q=b?b.toStringTag:void 0;function le(e){return e==null?e===void 0?se:oe:q&&q in Object(e)?ne(e):ie(e)}function ue(e){return e!=null&&typeof e=="object"}var ce="[object Symbol]";function de(e){return typeof e=="symbol"||ue(e)&&le(e)==ce}var fe=/\s/;function _e(e){for(var t=e.length;t--&&fe.test(e.charAt(t)););return t}var me=/^\s+/;function ge(e){return e&&e.slice(0,_e(e)+1).replace(me,"")}function w(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var B=0/0,pe=/^[-+]0x[0-9a-f]+$/i,ye=/^0b[01]+$/i,he=/^0o[0-7]+$/i,be=parseInt;function F(e){if(typeof e=="number")return e;if(de(e))return B;if(w(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=w(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=ge(e);var n=ye.test(e);return n||he.test(e)?be(e.slice(2),n?2:8):pe.test(e)?B:+e}var ve=function(){return W.Date.now()};const S=ve;var xe="Expected a function",Te=Math.max,Se=Math.min;function we(e,t,n){var r,u,a,_,l,s,f=0,v=!1,o=!1,c=!0;if(typeof e!="function")throw new TypeError(xe);t=F(t)||0,w(n)&&(v=!!n.leading,o="maxWait"in n,a=o?Te(F(n.maxWait)||0,t):a,c="trailing"in n?!!n.trailing:c);function g(i){var m=r,p=u;return r=u=void 0,f=i,_=e.apply(p,m),_}function D(i){return f=i,l=setTimeout(h,t),v?g(i):_}function L(i){var m=i-s,p=i-f,j=t-m;return o?Se(j,a-p):j}function O(i){var m=i-s,p=i-f;return s===void 0||m>=t||m<0||o&&p>=a}function h(){var i=S();if(O(i))return z(i);l=setTimeout(h,L(i))}function z(i){return l=void 0,c&&r?g(i):(r=u=void 0,_)}function H(){l!==void 0&&clearTimeout(l),f=0,r=s=u=l=void 0}function G(){return l===void 0?_:z(S())}function x(){var i=S(),m=O(i);if(r=arguments,u=this,s=i,m){if(l===void 0)return D(s);if(o)return clearTimeout(l),l=setTimeout(h,t),g(s)}return l===void 0&&(l=setTimeout(h,t)),_}return x.cancel=H,x.flush=G,x}const A=d.createContext(null),P=({key:e,value:t,validateHandler:n,requireMessage:r,validationTrigger:u="onBlur"})=>{const a=d.useContext(A),[_,l]=d.useState(),s=d.useMemo(()=>{if(!r&&!n)return;const o=c=>(Array.isArray(c)&&!c.length||!c)&&r;return n&&N(n)?async c=>o(c)?r:await n(c):c=>o(c)?r:n==null?void 0:n(c)},[r,n]);d.useEffect(()=>{if(a&&e&&s)return a.set(e,N(s)?async()=>{const o=await s(t);return l(o),o}:()=>{const o=s(t);return l(o),o}),()=>{a.delete(e)}},[s,e,a,t]);const f=d.useMemo(()=>we(async o=>l(await(s==null?void 0:s(o))),300),[s]);return{...{onChange:{validateOnChange:o=>f(o)},onBlur:{validateOnBlur:()=>f(t)}}[u],validationMessage:_,validateOnChangeOption:u==="onBlur"?f:void 0,isRequried:!!r}};try{P.displayName="useValidationMessage",P.__docgenInfo={description:"",displayName:"useValidationMessage",props:{validationTrigger:{defaultValue:{value:"onBlur"},description:"",name:"validationTrigger",required:!1,type:{name:"enum",value:[{value:'"onChange"'},{value:'"onBlur"'}]}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"TValue"}},requireMessage:{defaultValue:null,description:"",name:"requireMessage",required:!1,type:{name:"string"}},validateHandler:{defaultValue:null,description:"",name:"validateHandler",required:!0,type:{name:"ValidateHandler<TValue>"}}}}}catch{}const R=e=>{const t=new Map;return n=>V.jsx(A.Provider,{value:t,children:V.jsx(e,{...n})})};try{R.displayName="validationObserver",R.__docgenInfo={description:"",displayName:"validationObserver",props:{}}}catch{}export{b as S,C as a,E as b,M as c,I as d,we as e,ue as f,de as g,le as h,w as i,K as j,W as r,P as u};
//# sourceMappingURL=useValidate-6435b2ea.js.map
