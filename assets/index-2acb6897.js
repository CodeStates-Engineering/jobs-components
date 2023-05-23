import{j as u}from"./jsx-runtime-94f6e698.js";import{r as b,R as y}from"./index-8db94870.js";import{u as M}from"./useComponentSelfState-dbdc13dc.js";import"./index-e3b5ba34.js";import{u as Z}from"./useValidation-c7011735.js";import{c as W}from"./index-64131664.js";import{O as D}from"./index-175a3036.js";import{P as c}from"./index-1fc0ca9a.js";import{F as H}from"./index-2cc1c834.js";import{L as U}from"./index-bee25875.js";import{I as z}from"./index-e06e8374.js";import{I as G}from"./index-d7ffa274.js";function h(){return h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},h.apply(this,arguments)}function J(e,n){if(e==null)return{};var r=K(e,n),a,t;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function K(e,n){if(e==null)return{};var r={},a=Object.keys(e),t,o;for(o=0;o<a.length;o++)t=a[o],!(n.indexOf(t)>=0)&&(r[t]=e[t]);return r}var x=b.forwardRef(function(e,n){var r=e.color,a=r===void 0?"currentColor":r,t=e.size,o=t===void 0?24:t,p=J(e,["color","size"]);return y.createElement("svg",h({ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p),y.createElement("circle",{cx:"11",cy:"11",r:"8"}),y.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});x.propTypes={color:c.string,size:c.oneOfType([c.string,c.number])};x.displayName="Search";const Q=x,X={email:/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/,password:/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,slug:/^[a-z0-9]+(?:-[a-z0-9]+)*$/,phone:/^[+]?[(]?[0-9]{2,3}[)]?[-\s]?[0-9]{3,4}[-\s]?[0-9]{4}$/,number:/[^0-9]/g,symbols:/[^a-z0-9가-힣]/gi},Y="_searchbox_qp926_1",V={searchbox:Y,"label-row":"_label-row_qp926_4","label-column":"_label-column_qp926_4"},S=({float:e,value:n,options:r,onChange:a,selfFilter:t=!0,onlyUpdatedByParent:o,disabled:p,placeholder:w,onFocus:$,size:O,id:g,onClick:E,ref:I,label:d,validation:L,validationSpace:P,className:C,borderRadius:N,labelDirection:R="column"})=>{const[_,m]=b.useState(!1),[i,f]=M(n,o),k=b.useMemo(()=>{const l=r==null?void 0:r.map(s=>({label:s,value:s}));if(!t||!l||!i)return l;const j=s=>s.toLowerCase().replace(X.symbols,""),A=i.split(" ").map(s=>j(s));return l.filter(({value:s})=>{const B=j(s);return A.every(F=>B.includes(F))})},[t,i,r]),{validationMessage:T,checkValidation:v}=Z(i,L,d||g),q=l=>{f==null||f(l),a==null||a(l),v==null||v(l)};return u.jsxs(H,{onClick:()=>m(!1),focused:_,className:W(`${V.searchbox} ${V[`label-${R}`]} ${C}`),bodyScroll:!0,children:[d?u.jsx(U,{htmlFor:d,children:d}):null,u.jsxs(z,{validationMessage:T,validationSpace:P,children:[u.jsxs(z.Interaction,{onClick:E,size:O,borderRadius:N,children:[u.jsx(G,{name:d,ref:I,onChange:l=>{m(!0),q(l)},onClick:()=>{m(!0)},onFocus:$,id:g,value:i,disabled:p,placeholder:w}),u.jsx(Q,{})]}),u.jsx(D,{opened:_,options:k,value:i?{label:i,value:i}:void 0,onSelect:l=>{m(!1),q(l==null?void 0:l.value)},float:e})]})]})};try{S.displayName="Searchbox",S.__docgenInfo={description:"",displayName:"Searchbox",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:'boolean | "read-only"'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},validationSpace:{defaultValue:null,description:"",name:"validationSpace",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},float:{defaultValue:null,description:"",name:"float",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'}]}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"4"'},{value:'"8"'}]}},selfFilter:{defaultValue:{value:"true"},description:"",name:"selfFilter",required:!1,type:{name:"boolean"}},onlyUpdatedByParent:{defaultValue:null,description:"",name:"onlyUpdatedByParent",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"string[]"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"Validation<string>"}},labelDirection:{defaultValue:{value:"column"},description:"",name:"labelDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}}}}}catch{}export{S};
//# sourceMappingURL=index-2acb6897.js.map
