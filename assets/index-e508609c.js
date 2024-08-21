import{j as o}from"./jsx-runtime-4ca860c5.js";import"./index-775a2672.js";import"./index-61bf1805.js";import"./Compatibility-d1e3055b.js";import{u as C}from"./useValidate-983984d3.js";import{u as M}from"./useSubscribedState-9e613bb6.js";import{L as W}from"./index-43870500.js";import{I as p}from"./index-1715ee98.js";const L="_unit_1do9p_461",H={unit:L,"fade-in":"_fade-in_1do9p_1","fade-out":"_fade-out_1do9p_1","shake-horizontal":"_shake-horizontal_1do9p_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1do9p_1","slide-in-fwd-center":"_slide-in-fwd-center_1do9p_1","scale-in-center":"_scale-in-center_1do9p_1","slide-in-right":"_slide-in-right_1do9p_1","slide-in-left":"_slide-in-left_1do9p_1","slide-out-right":"_slide-out-right_1do9p_1","slide-out-left":"_slide-out-left_1do9p_1","scale-in-top":"_scale-in-top_1do9p_1","scale-out-top":"_scale-out-top_1do9p_1","swing-in-top-fwd":"_swing-in-top-fwd_1do9p_1","fade-in-top":"_fade-in-top_1do9p_1","fade-out-top":"_fade-out-top_1do9p_1","fade-in-bottom":"_fade-in-bottom_1do9p_1","fade-out-bottom":"_fade-out-bottom_1do9p_1","scale-out-horizontal":"_scale-out-horizontal_1do9p_1"},_=({value:u,unit:r,onChange:i,type:c="text",placeholder:b,disabled:g,onFocus:h,id:v,onClick:x,ref:q,label:t,validation:w,className:V,onBlur:n,labelStyle:T,inputStyle:e,validationTrigger:z,description:R,readOnly:f,requireMessage:j,maxLength:k,minLength:I})=>{const[m,d]=M(u),{validationMessage:N,validateOnChange:s,validateOnBlur:l,isRequried:P}=C({validateHandler:w,key:t,value:m,validationTrigger:z,requireMessage:j});return o.jsx(W.WithInput,{className:V,inputStyle:e,labelStyle:T,label:t,required:P,children:o.jsxs(p.Wrap,{validationMessage:N,size:e==null?void 0:e.size,borderRadius:e==null?void 0:e.borderRadius,width:e==null?void 0:e.width,description:R,fontColor:e==null?void 0:e.fontColor,readOnly:f,children:[o.jsx(p,{fontSize:e==null?void 0:e.fontSize,fontWeight:e==null?void 0:e.fontWeight,onClick:x,onBlur:a=>{l==null||l(),n==null||n(a)},ref:q,name:t,disabled:g,placeholder:b,onFocus:h,value:m,id:v,onChange:a=>{d==null||d(a),s==null||s(a),i==null||i(a)},type:c,readOnly:f,maxLength:k,minLength:I}),typeof r=="string"?o.jsx("div",{className:H.unit,children:r}):r]})})};try{_.displayName="Textbox",_.__docgenInfo={description:"",displayName:"Textbox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"ReactNode"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:'ValidateHandler<(T extends "number" | "large-number" ? number : string)>'}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:'(Pick<LabelContainerProps, "direction"> & UseTypographyClassNameParams)'}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:'(Pick<InputWrapProps, "width" | "borderRadius" | "size"> & UseTypographyClassNameParams & { fontColor?: string; })'}},validationTrigger:{defaultValue:null,description:"",name:"validationTrigger",required:!1,type:{name:"enum",value:[{value:'"onChange"'},{value:'"onBlur"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | null"}},requireMessage:{defaultValue:null,description:"",name:"requireMessage",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'((value: (T extends "number" | "large-number" ? number : string)) => void)'}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"'text' as T"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"large-number"'},{value:'"phone-number"'},{value:'"business-number"'},{value:'"password"'}]}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}}}}}catch{}export{_ as T};
//# sourceMappingURL=index-e508609c.js.map
