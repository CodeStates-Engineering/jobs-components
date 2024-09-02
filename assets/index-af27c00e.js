import{j as l}from"./jsx-runtime-4ca860c5.js";import"./index-775a2672.js";import"./index-61bf1805.js";import"./Compatibility-d1e3055b.js";import{u as C}from"./useValidate-983984d3.js";import{u as M}from"./useSubscribedState-9e613bb6.js";import{L}from"./index-43870500.js";import{I as p}from"./index-1715ee98.js";const H="_unit_1do9p_461",y={unit:H,"fade-in":"_fade-in_1do9p_1","fade-out":"_fade-out_1do9p_1","shake-horizontal":"_shake-horizontal_1do9p_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1do9p_1","slide-in-fwd-center":"_slide-in-fwd-center_1do9p_1","scale-in-center":"_scale-in-center_1do9p_1","slide-in-right":"_slide-in-right_1do9p_1","slide-in-left":"_slide-in-left_1do9p_1","slide-out-right":"_slide-out-right_1do9p_1","slide-out-left":"_slide-out-left_1do9p_1","scale-in-top":"_scale-in-top_1do9p_1","scale-out-top":"_scale-out-top_1do9p_1","swing-in-top-fwd":"_swing-in-top-fwd_1do9p_1","fade-in-top":"_fade-in-top_1do9p_1","fade-out-top":"_fade-out-top_1do9p_1","fade-in-bottom":"_fade-in-bottom_1do9p_1","fade-out-bottom":"_fade-out-bottom_1do9p_1","scale-out-horizontal":"_scale-out-horizontal_1do9p_1"},_=({value:u,unit:r,onChange:o,type:c="text",placeholder:g,disabled:v,onFocus:b,id:h,onClick:x,ref:q,label:n,validation:V,className:w,onBlur:i,labelStyle:T,inputStyle:e,validationTrigger:z,description:R,readOnly:m,requireMessage:W,maxLength:j,minLength:k,...I})=>{const[f,t]=M(u),{validationMessage:N,validateOnChange:s,validateOnBlur:d,isRequried:P}=C({validateHandler:V,key:n,value:f,validationTrigger:z,requireMessage:W});return l.jsx(L.WithInput,{className:w,inputStyle:e,labelStyle:T,label:n,required:P,children:l.jsxs(p.Wrap,{validationMessage:N,size:e==null?void 0:e.size,borderRadius:e==null?void 0:e.borderRadius,width:e==null?void 0:e.width,description:R,fontColor:e==null?void 0:e.fontColor,readOnly:m,children:[l.jsx(p,{...I,fontSize:e==null?void 0:e.fontSize,fontWeight:e==null?void 0:e.fontWeight,onClick:x,onBlur:a=>{d==null||d(),i==null||i(a)},ref:q,name:n,disabled:v,placeholder:g,onFocus:b,value:f,id:h,onChange:a=>{t==null||t(a),s==null||s(a),o==null||o(a)},type:c,readOnly:m,maxLength:j,minLength:k}),typeof r=="string"?l.jsx("div",{className:y.unit,children:r}):r]})})};try{_.displayName="Textbox",_.__docgenInfo={description:"",displayName:"Textbox",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"ReactNode"}},validation:{defaultValue:null,description:"",name:"validation",required:!1,type:{name:'ValidateHandler<(T extends "number" | "large-number" ? number : string)>'}},labelStyle:{defaultValue:null,description:"",name:"labelStyle",required:!1,type:{name:'(Pick<LabelContainerProps, "direction"> & UseTypographyClassNameParams)'}},inputStyle:{defaultValue:null,description:"",name:"inputStyle",required:!1,type:{name:'(Pick<InputWrapProps, "width" | "size" | "borderRadius"> & UseTypographyClassNameParams & { fontColor?: string; })'}},validationTrigger:{defaultValue:null,description:"",name:"validationTrigger",required:!1,type:{name:"enum",value:[{value:'"onChange"'},{value:'"onBlur"'}]}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string | null"}},requireMessage:{defaultValue:null,description:"",name:"requireMessage",required:!1,type:{name:"string"}},type:{defaultValue:{value:"'text' as T"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"large-number"'},{value:'"phone-number"'},{value:'"business-number"'},{value:'"password"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:'((value: (T extends "number" | "large-number" ? number : string)) => void)'}},ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null` (or call the ref with `null` if you passed a callback ref).",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small3x"'},{value:'"small2x"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"large4x"'},{value:'"large3x"'},{value:'"large2x"'},{value:'"normal"'},{value:'"small4x"'}]}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:"700"},{value:"600"},{value:"500"},{value:"400"}]}}}}}catch{}export{_ as T};
//# sourceMappingURL=index-af27c00e.js.map
