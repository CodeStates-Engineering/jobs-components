import{j as a}from"./jsx-runtime-94f6e698.js";import{r as l}from"./index-8db94870.js";import{c as s}from"./index-64131664.js";const c="_error_1xl6m_469",e={"input-interaction-wrap":"_input-interaction-wrap_1xl6m_413","input-container":"_input-container_1xl6m_419","input-wrap":"_input-wrap_1xl6m_424","border-radius-4":"_border-radius-4_1xl6m_438","border-radius-8":"_border-radius-8_1xl6m_441","size-none":"_size-none_1xl6m_444","size-small":"_size-small_1xl6m_448","size-medium":"_size-medium_1xl6m_452","size-large":"_size-large_1xl6m_456",error:c,"validation-message":"_validation-message_1xl6m_488","shake-horizontal":"_shake-horizontal_1xl6m_1","validation-space":"_validation-space_1xl6m_497","fade-in":"_fade-in_1xl6m_1","fade-out":"_fade-out_1xl6m_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1xl6m_1","slide-in-fwd-center":"_slide-in-fwd-center_1xl6m_1","scale-in-center":"_scale-in-center_1xl6m_1","slide-in-right":"_slide-in-right_1xl6m_1","slide-out-right":"_slide-out-right_1xl6m_1","scale-in-top":"_scale-in-top_1xl6m_1","scale-out-top":"_scale-out-top_1xl6m_1","swing-in-top-fwd":"_swing-in-top-fwd_1xl6m_1","fade-in-top":"_fade-in-top_1xl6m_1","fade-out-top":"_fade-out-top_1xl6m_1","fade-in-bottom":"_fade-in-bottom_1xl6m_1","fade-out-bottom":"_fade-out-bottom_1xl6m_1","scale-out-horizontal":"_scale-out-horizontal_1xl6m_1"},_=l.createContext(void 0),p=({children:i,className:n,validationMessage:t,validationSpace:o})=>a.jsxs("div",{className:s(`${e["input-container"]} ${n}`),children:[a.jsx(_.Provider,{value:t,children:a.jsx("div",{className:e["input-interaction-wrap"],children:i})}),t?a.jsx("p",{className:e["validation-message"],children:t}):o&&a.jsx("div",{className:e["validation-space"]})]}),u=({children:i,onClick:n,size:t="large",className:o,borderRadius:d="8"})=>{const m=l.useContext(_);return a.jsx("div",{className:s(`${e["input-wrap"]} ${e[`border-radius-${d}`]} ${m&&e.error} ${t!=="none"&&e[`size-${t}`]} ${o}`),onClick:n,children:i})},r=Object.assign(p,{Interaction:u});try{r.displayName="InputContainer",r.__docgenInfo={description:"",displayName:"InputContainer",props:{validationMessage:{defaultValue:null,description:"",name:"validationMessage",required:!1,type:{name:"string | null"}},validationSpace:{defaultValue:null,description:"",name:"validationSpace",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{r as I};
//# sourceMappingURL=index-e06e8374.js.map
