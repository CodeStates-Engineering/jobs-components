import{j as a}from"./jsx-runtime-94f6e698.js";import{r}from"./index-8db94870.js";import{c as _}from"./index-64131664.js";const c="_error_qboxg_464",e={"input-interaction-wrap":"_input-interaction-wrap_qboxg_413","input-container":"_input-container_qboxg_419","input-wrap":"_input-wrap_qboxg_424","size-none":"_size-none_qboxg_439","size-small":"_size-small_qboxg_443","size-medium":"_size-medium_qboxg_447","size-large":"_size-large_qboxg_451",error:c,"validation-message":"_validation-message_qboxg_483","shake-horizontal":"_shake-horizontal_qboxg_1","validation-space":"_validation-space_qboxg_492","fade-in":"_fade-in_qboxg_1","fade-out":"_fade-out_qboxg_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_qboxg_1","slide-in-fwd-center":"_slide-in-fwd-center_qboxg_1","scale-in-center":"_scale-in-center_qboxg_1","slide-in-right":"_slide-in-right_qboxg_1","slide-out-right":"_slide-out-right_qboxg_1","scale-in-top":"_scale-in-top_qboxg_1","scale-out-top":"_scale-out-top_qboxg_1","swing-in-top-fwd":"_swing-in-top-fwd_qboxg_1","fade-in-top":"_fade-in-top_qboxg_1","fade-out-top":"_fade-out-top_qboxg_1","fade-in-bottom":"_fade-in-bottom_qboxg_1","fade-out-bottom":"_fade-out-bottom_qboxg_1","scale-out-horizontal":"_scale-out-horizontal_qboxg_1"},l=r.createContext(void 0),p=({children:o,className:n,validationMessage:t,validationSpace:i})=>a.jsxs("div",{className:_(`${e["input-container"]} ${n}`),children:[a.jsx(l.Provider,{value:t,children:a.jsx("div",{className:e["input-interaction-wrap"],children:o})}),t?a.jsx("p",{className:e["validation-message"],children:t}):i&&a.jsx("div",{className:e["validation-space"]})]}),u=({children:o,onClick:n,size:t="large",className:i})=>{const d=r.useContext(l);return a.jsx("div",{className:_(`${e["input-wrap"]} ${d&&e.error} ${t!=="none"&&e[`size-${t}`]} ${i}`),onClick:n,children:o})},s=Object.assign(p,{Interaction:u});try{s.displayName="InputContainer",s.__docgenInfo={description:"",displayName:"InputContainer",props:{validationMessage:{defaultValue:null,description:"",name:"validationMessage",required:!1,type:{name:"string | null"}},validationSpace:{defaultValue:null,description:"",name:"validationSpace",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{s as I};
//# sourceMappingURL=index-61379bb2.js.map
