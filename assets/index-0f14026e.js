import{j as e}from"./jsx-runtime-94f6e698.js";import{r as L}from"./index-8db94870.js";import{u as B}from"./useComponentSelfState-dbdc13dc.js";import"./index-e3b5ba34.js";import{u as R}from"./useValidation-c7011735.js";import{c as y}from"./index-64131664.js";import{O as D}from"./index-30e7e290.js";import{C as F}from"./chevron-down-735b3f0e.js";import{F as M}from"./index-2cc1c834.js";import{L as z}from"./index-bee25875.js";import{I as b}from"./index-e06e8374.js";import{I as H}from"./index-d7ffa274.js";const P="_selectbox_g8a8y_1",t={selectbox:P,"label-row":"_label-row_g8a8y_4","label-column":"_label-column_g8a8y_4"},x=({value:s,options:r,onChange:i,float:_,onlyUpdatedByParent:V,disabled:q,placeholder:j,size:S,id:f,ref:I,onClick:d,label:l,validation:N,validationSpace:g,className:w,borderRadius:E,labelDirection:O="column"})=>{const[u,m]=L.useState(!1),[$,p]=B(s,V),n=r==null?void 0:r.find(({value:a})=>a===$),{validationMessage:h,checkValidation:c}=R(s,N,l||f);return e.jsxs(M,{onClick:()=>m(!1),focused:u,className:y(`${t.selectbox} ${t[`label-${O}`]} ${w}`),bodyScroll:!0,children:[l?e.jsx(z,{htmlFor:l,children:l}):null,e.jsxs(b,{validationMessage:h,validationSpace:g,children:[e.jsxs(b.Interaction,{size:S,borderRadius:E,onClick:a=>{m(!u),d==null||d(a)},children:[e.jsx(H,{id:f,name:l,type:"button",ref:I,value:n==null?void 0:n.label,disabled:q,placeholder:j}),e.jsx(F,{className:y(`${t.arrow} ${u&&t["opened-arrow"]}`)})]}),e.jsx(D,{opened:u,options:r,value:n,float:_,className:t["select-box-default-width"],onSelect:a=>{const o=a===n?void 0:a,v=o==null?void 0:o.value;p==null||p(v),c==null||c(v),i==null||i(o),m(!1)}})]})]})};try{x.displayName="Selectbox",x.__docgenInfo={description:"",displayName:"Selectbox",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:'boolean | "read-only"'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},validationSpace:{defaultValue:null,description:"",name:"validationSpace",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"_Option[]"}},float:{defaultValue:null,description:"",name:"float",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'}]}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"enum",value:[{value:'"4"'},{value:'"8"'}]}},onlyUpdatedByParent:{defaultValue:null,description:"",name:"onlyUpdatedByParent",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((option?: _Option) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"ValidOptionValue"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:'Validation<Exclude<_Option, undefined>["value"]>'}},labelDirection:{defaultValue:{value:"column"},description:"",name:"labelDirection",required:!1,type:{name:"enum",value:[{value:'"column"'},{value:'"row"'}]}}}}}catch{}export{x as S};
//# sourceMappingURL=index-0f14026e.js.map