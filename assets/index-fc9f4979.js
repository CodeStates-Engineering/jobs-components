import{j as r}from"./jsx-runtime-94f6e698.js";import{r as C}from"./index-8db94870.js";import{u as E}from"./useSubscribedState-9b53482c.js";import"./index-e3b5ba34.js";import{u as I}from"./useValidation-c7011735.js";import{c as _}from"./index-64131664.js";import"./index-9188d0db.js";import{C as M}from"./chevron-down-735b3f0e.js";import{F as R}from"./index-5f720287.js";import{I as V}from"./index-fff92b81.js";import{L as v}from"./index-dd89b1a3.js";import{O as T}from"./index-d0a38a37.js";const H="_selectbox_16gfr_1",d={selectbox:H},q=({value:l,options:s,onChange:t,float:g,disabled:b,placeholder:j,id:x,ref:O,onClick:u,label:i,validation:w,validationSpace:N,className:z,inputStyle:e,labelStyle:a,multiple:L,optionStyle:P})=>{const[n,m]=C.useState(!1),[h,f]=E(l),p=s==null?void 0:s.find(({value:o})=>o===h),{validationMessage:W,checkValidation:c}=I(l,w,i||x);return r.jsx(R,{onBlur:()=>m(!1),focused:n,className:_(`${d.selectbox} ${z}`),bodyScroll:!0,children:r.jsxs(V.Container,{validationMessage:W,validationSpace:N,children:[r.jsxs(v.Container,{direction:a==null?void 0:a.direction,children:[i?r.jsx(v,{htmlFor:i,fontSize:a==null?void 0:a.fontSize,fontWeight:a==null?void 0:a.fontWeight,children:i}):null,r.jsxs(V.Wrap,{size:e==null?void 0:e.size,borderRadius:e==null?void 0:e.borderRadius,width:e==null?void 0:e.width,onClick:o=>{m(!n),u==null||u(o)},children:[r.jsx(V,{id:x,name:i,type:"button",ref:O,value:p==null?void 0:p.label,disabled:b,placeholder:j,fontSize:e==null?void 0:e.fontSize,fontWeight:e==null?void 0:e.fontWeight}),r.jsx(M,{className:_(`${d.arrow} ${n&&d["opened-arrow"]}`)})]})]}),r.jsx(T,{opened:n,options:s,multiple:L,value:h,float:g,className:d["select-box-default-width"],optionStyle:P,onChange:o=>{f==null||f(o),c==null||c(o),t==null||t(o),m(!1)}})]})})};try{q.displayName="Selectbox",q.__docgenInfo={description:"",displayName:"Selectbox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:"Validation<_ValidOptionValue | _ValidOptionValue[]>"}},validationSpace:{defaultValue:null,description:"",name:"validationSpace",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:'(Pick<InputWrapProps, "width" | "size" | "borderRadius"> & Typography)'}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:'(Pick<LabelContainerProps, "direction"> & Typography)'}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"ValidOptionValue | _ValidOptionValue[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: (_Multiple extends true ? _ValidOptionValue[] : _ValidOptionValue)) => void)"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: _ValidOptionValue; }[]"}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},float:{defaultValue:null,description:"",name:"float",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},optionStyle:{defaultValue:null,description:"",name:"optionStyle",required:!1,type:{name:'(Typography & Pick<CSSProperties, "width" | "maxHeight">)'}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:'boolean | "read-only"'}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}}}}}catch{}export{q as S};
//# sourceMappingURL=index-fc9f4979.js.map