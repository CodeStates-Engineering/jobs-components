import{j as u}from"./jsx-runtime-94f6e698.js";import{r as b,R as x}from"./index-8db94870.js";import{u as Z}from"./useSubscribedState-9b53482c.js";import"./index-e3b5ba34.js";import{u as M}from"./useValidation-c7011735.js";import{c as B}from"./index-64131664.js";import"./index-9188d0db.js";import{P as m}from"./index-1fc0ca9a.js";import{O as H}from"./index-d0a38a37.js";import{F as D}from"./index-5f720287.js";import{I as z}from"./index-fff92b81.js";import{L as P}from"./index-dd89b1a3.js";function y(){return y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},y.apply(this,arguments)}function G(e,n){if(e==null)return{};var a=J(e,n),r,o;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)r=t[o],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function J(e,n){if(e==null)return{};var a={},r=Object.keys(e),o,t;for(t=0;t<r.length;t++)o=r[t],!(n.indexOf(o)>=0)&&(a[o]=e[o]);return a}var j=b.forwardRef(function(e,n){var a=e.color,r=a===void 0?"currentColor":a,o=e.size,t=o===void 0?24:o,h=G(e,["color","size"]);return x.createElement("svg",y({ref:n,xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},h),x.createElement("circle",{cx:"11",cy:"11",r:"8"}),x.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))});j.propTypes={color:m.string,size:m.oneOfType([m.string,m.number])};j.displayName="Search";const K=j,Q={email:/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$/,password:/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,slug:/^[a-z0-9]+(?:-[a-z0-9]+)*$/,phone:/^[+]?[(]?[0-9]{2,3}[)]?[-\s]?[0-9]{3,4}[-\s]?[0-9]{4}$/,number:/[^0-9]/g,symbols:/[^a-z0-9가-힣]/gi},U="_searchbox_s6soz_1",X={searchbox:U},O=({float:e,value:n,options:a,onChange:r,selfFilter:o=!0,disabled:t,placeholder:h,onFocus:$,id:_,onClick:C,ref:L,label:p,validation:W,validationSpace:k,className:R,inputStyle:i,labelStyle:l,optionStyle:T})=>{const[V,f]=b.useState(!1),[c,g]=Z(n),E=b.useMemo(()=>{const s=a==null?void 0:a.map(d=>({label:d,value:d}));if(!o||!s||!c)return s;const w=d=>d.toLowerCase().replace(Q.symbols,""),I=c.split(" ").map(d=>w(d));return s.filter(({value:d})=>{const A=w(d);return I.every(F=>A.includes(F))})},[o,c,a]),{validationMessage:N,checkValidation:v}=M(c,W,p||_),q=s=>{g==null||g(s),r==null||r(s),v==null||v(s)};return u.jsx(D,{onBlur:()=>f(!1),focused:V,className:B(`${X.searchbox} ${R}`),bodyScroll:!0,children:u.jsxs(z.Container,{validationMessage:N,validationSpace:k,children:[u.jsxs(P.Container,{direction:l==null?void 0:l.direction,children:[p?u.jsx(P,{fontSize:l==null?void 0:l.fontSize,fontWeight:l==null?void 0:l.fontWeight,htmlFor:p,children:p}):null,u.jsxs(z.Wrap,{onClick:C,size:i==null?void 0:i.size,borderRadius:i==null?void 0:i.borderRadius,children:[u.jsx(z,{name:p,ref:L,onChange:s=>{f(!0),q(s)},fontSize:i==null?void 0:i.fontSize,fontWeight:i==null?void 0:i.fontWeight,onClick:()=>f(!0),onFocus:$,id:_,value:c,disabled:t,placeholder:h}),u.jsx(K,{})]})]}),u.jsx(H,{optionStyle:T,opened:V,options:E,value:c,onChange:s=>{f(!1),q(s)},float:e})]})})};try{O.displayName="Searchbox",O.__docgenInfo={description:"",displayName:"Searchbox",props:{selfFilter:{defaultValue:{value:"true"},description:"",name:"selfFilter",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"string[]"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"Validation<string>"}},validationSpace:{defaultValue:null,description:"",name:"validationSpace",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:'(Pick<InputWrapProps, "width" | "size" | "borderRadius"> & Typography)'}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:'(Pick<LabelContainerProps, "direction"> & Typography)'}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:'boolean | "read-only"'}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},float:{defaultValue:null,description:"",name:"float",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},optionStyle:{defaultValue:null,description:"",name:"optionStyle",required:!1,type:{name:'(Typography & Pick<CSSProperties, "width" | "maxHeight">)'}}}}}catch{}export{O as S};
//# sourceMappingURL=index-bf82f6ff.js.map