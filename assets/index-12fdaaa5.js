import{j as n}from"./jsx-runtime-94f6e698.js";import{r as f}from"./index-8db94870.js";import{u as N}from"./useComponentSelfState-dbdc13dc.js";import"./index-e3b5ba34.js";import{u as j}from"./useValidation-c7011735.js";import{c as C}from"./index-64131664.js";import"./index-582f0e0a.js";import{L as x}from"./index-e5314f3d.js";import{C as $}from"./index-8c4fe83c.js";const P="_invalid_ubxv4_486",W="_checked_ubxv4_500",L="_unchecked_ubxv4_508",M="_checkbox_ubxv4_461",B="_description_ubxv4_536",a={"checkbox-container":"_checkbox-container_ubxv4_461","size-small":"_size-small_ubxv4_472","size-medium":"_size-medium_ubxv4_477",invalid:P,checked:W,unchecked:L,checkbox:M,"check-icon-wrap":"_check-icon-wrap_ubxv4_525","checkbox-container-wrap":"_checkbox-container-wrap_ubxv4_529",description:B,"fade-in":"_fade-in_ubxv4_1","fade-out":"_fade-out_ubxv4_1","shake-horizontal":"_shake-horizontal_ubxv4_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_ubxv4_1","slide-in-fwd-center":"_slide-in-fwd-center_ubxv4_1","scale-in-center":"_scale-in-center_ubxv4_1","slide-in-right":"_slide-in-right_ubxv4_1","slide-in-left":"_slide-in-left_ubxv4_1","slide-out-right":"_slide-out-right_ubxv4_1","slide-out-left":"_slide-out-left_ubxv4_1","scale-in-top":"_scale-in-top_ubxv4_1","scale-out-top":"_scale-out-top_ubxv4_1","swing-in-top-fwd":"_swing-in-top-fwd_ubxv4_1","fade-in-top":"_fade-in-top_ubxv4_1","fade-out-top":"_fade-out-top_ubxv4_1","fade-in-bottom":"_fade-in-bottom_ubxv4_1","fade-out-bottom":"_fade-out-bottom_ubxv4_1","scale-out-horizontal":"_scale-out-horizontal_ubxv4_1"},h=({value:u=!1,onChange:t,disabled:v,onlyUpdatedByParent:b,id:_,essential:l,label:o,description:m,className:k,labelStyle:e,inputStyle:i})=>{const[d,c]=N(u,b),p=(i==null?void 0:i.size)??"medium",g=f.useMemo(()=>({width:i==null?void 0:i.width}),[i==null?void 0:i.width]),w={small:{size:"10px",strokeWidth:"4px"},medium:{size:"17px",strokeWidth:"3px"}}[p],z=f.useMemo(()=>l?s=>s?void 0:"invalid":void 0,[l]),{validationMessage:V,checkValidation:r}=j(d,z,o||_),q=!V;return n.jsxs(x.Container,{direction:e==null?void 0:e.direction,className:k,children:[o?n.jsx(x,{htmlFor:o,fontSize:e==null?void 0:e.fontSize,fontWeight:e==null?void 0:e.fontWeight,children:o}):null,n.jsxs("div",{className:a["checkbox-container-wrap"],style:g,children:[n.jsxs("div",{className:C(`${a["checkbox-container"]} ${a[`size-${p}`]} ${q||a.invalid}`),children:[n.jsx($,{...w,className:`${d?a.checked:a.unchecked}`}),n.jsx("input",{id:_,type:"checkbox",className:a.checkbox,name:o,checked:d,disabled:v,onChange:({target:{checked:s}})=>{c==null||c(s),r==null||r(s),t==null||t(s)}})]}),m&&n.jsx("div",{className:a.description,children:m})]})]})};try{h.displayName="Checkbox",h.__docgenInfo={description:"",displayName:"Checkbox",props:{value:{defaultValue:{value:"false"},description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onlyUpdatedByParent:{defaultValue:null,description:"",name:"onlyUpdatedByParent",required:!1,type:{name:"boolean"}},essential:{defaultValue:null,description:"",name:"essential",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:'(Typography & Pick<LabelContainerProps, "direction">)'}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:'{ size?: "small" | "medium"; width?: string; } | undefined'}}}}}catch{}export{h as C};
//# sourceMappingURL=index-12fdaaa5.js.map
