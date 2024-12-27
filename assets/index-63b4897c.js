import{j as r}from"./jsx-runtime-9bc08dc0.js";import"./index-0df07bff.js";import{I as u}from"./index-8146761d.js";import"./index-1f14f509.js";import"./index-92545bc7.js";import{L as j}from"./index-15456ba4.js";import"./index-cf6925de.js";import"./index-26cd43b5.js";import"./index-1accccac.js";import"./index-20667a64.js";import"./index-84868488.js";import"./index-29a85313.js";import"./ValidationContext-b0a2edd5.js";import{u as L}from"./useValidationMessage-243d7212.js";import{u as M}from"./useSubscribedState-3b03a615.js";const U="_unit_1do9p_461",V={unit:U,"fade-in":"_fade-in_1do9p_1","fade-out":"_fade-out_1do9p_1","shake-horizontal":"_shake-horizontal_1do9p_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1do9p_1","slide-in-fwd-center":"_slide-in-fwd-center_1do9p_1","scale-in-center":"_scale-in-center_1do9p_1","slide-in-right":"_slide-in-right_1do9p_1","slide-in-left":"_slide-in-left_1do9p_1","slide-out-right":"_slide-out-right_1do9p_1","slide-out-left":"_slide-out-left_1do9p_1","scale-in-top":"_scale-in-top_1do9p_1","scale-out-top":"_scale-out-top_1do9p_1","swing-in-top-fwd":"_swing-in-top-fwd_1do9p_1","fade-in-top":"_fade-in-top_1do9p_1","fade-out-top":"_fade-out-top_1do9p_1","fade-in-bottom":"_fade-in-bottom_1do9p_1","fade-out-bottom":"_fade-out-bottom_1do9p_1","scale-out-horizontal":"_scale-out-horizontal_1do9p_1"},y=({value:f,unit:i,onChange:n,type:c="text",placeholder:_,disabled:g,onFocus:v,id:w,onClick:T,ref:h,label:o,validation:x,className:P,onBlur:s,labelStyle:b,inputStyle:e,validationTrigger:q,description:R,readOnly:m,requireMessage:I,maxLength:z,minLength:k,...C})=>{const[p,t]=M(f),{validationMessage:W,validateOnChange:l,validateOnBlur:d,isRequried:N}=L({validateHandler:x,key:o,value:p,validationTrigger:q,requireMessage:I});return r.jsx(j.WithInput,{className:P,inputStyle:e,labelStyle:b,label:o,required:N,children:r.jsxs(u.Wrap,{validationMessage:W,size:e==null?void 0:e.size,borderRadius:e==null?void 0:e.borderRadius,width:e==null?void 0:e.width,description:R,fontColor:e==null?void 0:e.fontColor,readOnly:m,children:[r.jsx(u,{...C,fontSize:e==null?void 0:e.fontSize,fontWeight:e==null?void 0:e.fontWeight,onClick:T,onBlur:a=>{d==null||d(),s==null||s(a)},ref:h,name:o,disabled:g,placeholder:_,onFocus:v,value:p,id:w,onChange:a=>{t==null||t(a),l==null||l(a),n==null||n(a)},type:c,readOnly:m,maxLength:z,minLength:k}),typeof i=="string"?r.jsx("div",{className:V.unit,children:i}):i]})})};y.__docgenInfo={description:"",methods:[],displayName:"Textbox",props:{fontSize:{required:!1,tsType:{name:"union",raw:`| 'large4x'
| 'large3x'
| 'large2x'
| 'large'
| 'medium'
| 'normal'
| 'small'
| 'small2x'
| 'small3x'
| 'small4x'`,elements:[{name:"literal",value:"'large4x'"},{name:"literal",value:"'large3x'"},{name:"literal",value:"'large2x'"},{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'small'"},{name:"literal",value:"'small2x'"},{name:"literal",value:"'small3x'"},{name:"literal",value:"'small4x'"}]},description:""},fontWeight:{required:!1,tsType:{name:"union",raw:"700 | 600 | 500 | 400",elements:[{name:"literal",value:"700"},{name:"literal",value:"600"},{name:"literal",value:"500"},{name:"literal",value:"400"}]},description:""},type:{required:!1,tsType:{name:"T"},description:"",defaultValue:{value:"'text'",computed:!1}},value:{required:!1,tsType:{name:"unknown"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: InputProps<T>['value']) => void",signature:{arguments:[{type:{name:"InputProps['value']",raw:"InputProps<T>['value']"},name:"value"}],return:{name:"void"}}},description:""},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:""},label:{required:!1,tsType:{name:"string"},description:""},unit:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},validation:{required:!1,tsType:{name:"union",raw:`| ((value: TValue) => ValidationResult | Promise<ValidationResult>)
| undefined`,elements:[{name:"unknown"},{name:"undefined"}]},description:""},labelStyle:{required:!1,tsType:{name:"intersection",raw:`Pick<LabelContainerProps, 'direction'> &
UseTypographyClassNameParams`,elements:[{name:"Pick",elements:[{name:"LabelContainerProps"},{name:"literal",value:"'direction'"}],raw:"Pick<LabelContainerProps, 'direction'>"},{name:"UseTypographyClassNameParams"}]},description:""},inputStyle:{required:!1,tsType:{name:"intersection",raw:`Pick<InputWrapProps, 'borderRadius' | 'width' | 'size'> &
UseTypographyClassNameParams & {
  fontColor?: string;
}`,elements:[{name:"Pick",elements:[{name:"InputWrapProps"},{name:"union",raw:"'borderRadius' | 'width' | 'size'",elements:[{name:"literal",value:"'borderRadius'"},{name:"literal",value:"'width'"},{name:"literal",value:"'size'"}]}],raw:"Pick<InputWrapProps, 'borderRadius' | 'width' | 'size'>"},{name:"UseTypographyClassNameParams"},{name:"signature",type:"object",raw:`{
  fontColor?: string;
}`,signature:{properties:[{key:"fontColor",value:{name:"string",required:!1}}]}}]},description:""},validationTrigger:{required:!1,tsType:{name:"union",raw:"'onChange' | 'onBlur'",elements:[{name:"literal",value:"'onChange'"},{name:"literal",value:"'onBlur'"}]},description:""},description:{required:!1,tsType:{name:"InputWrapProps['description']",raw:"InputWrapProps['description']"},description:""},requireMessage:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};export{y as T};