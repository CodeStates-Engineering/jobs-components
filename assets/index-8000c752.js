import{j as t}from"./jsx-runtime-94f6e698.js";import{r as l}from"./index-8db94870.js";import"./Compatibility-ff615e1c.js";import"./useValidate-1adf1d19.js";import{u as d}from"./useSubscribedState-aad59d56.js";import{c}from"./ValidationContext-e5b2e92a.js";import"./index-12b9ef81.js";import{C as u}from"./chevron-down-735b3f0e.js";import{H as p}from"./index-f159dff6.js";const f="_opened_16luv_503",e={"accordian-container":"_accordian-container_16luv_461","title-contaienr":"_title-contaienr_16luv_468","accordian-title-wrap":"_accordian-title-wrap_16luv_472","accordian-title":"_accordian-title_16luv_472","title-contents":"_title-contents_16luv_483","accordian-contents-wrap":"_accordian-contents-wrap_16luv_489","accordian-contents":"_accordian-contents_16luv_489","fade-out-top":"_fade-out-top_16luv_1",opened:f,"fade-in-top":"_fade-in-top_16luv_1","chevron-down-icon":"_chevron-down-icon_16luv_508","fade-in":"_fade-in_16luv_1","fade-out":"_fade-out_16luv_1","shake-horizontal":"_shake-horizontal_16luv_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_16luv_1","slide-in-fwd-center":"_slide-in-fwd-center_16luv_1","scale-in-center":"_scale-in-center_16luv_1","slide-in-right":"_slide-in-right_16luv_1","slide-in-left":"_slide-in-left_16luv_1","slide-out-right":"_slide-out-right_16luv_1","slide-out-left":"_slide-out-left_16luv_1","scale-in-top":"_scale-in-top_16luv_1","scale-out-top":"_scale-out-top_16luv_1","swing-in-top-fwd":"_swing-in-top-fwd_16luv_1","fade-in-bottom":"_fade-in-bottom_16luv_1","fade-out-bottom":"_fade-out-bottom_16luv_1","scale-out-horizontal":"_scale-out-horizontal_16luv_1"},s=l.createContext([!1,void 0]),m=({children:a,className:i,opened:n=!1})=>{const o=d(n);return t.jsx("dl",{className:c(`${e["accordian-container"]} ${i}`),children:t.jsx(s.Provider,{value:o,children:a})})},v=({children:a,className:i})=>{const[n,o]=l.useContext(s);return t.jsx("dt",{className:e["accordian-title-wrap"],children:t.jsxs("button",{type:"button",className:c(`${e["accordian-title"]} ${i}`),onClick:()=>o==null?void 0:o(()=>!n),children:[t.jsx("div",{className:e["title-contents"],children:a}),t.jsx(u,{className:c(`${e["chevron-down-icon"]} ${n&&e.opened}`)})]})})},h=({children:a,className:i})=>{var r;const[n]=l.useContext(s),o=l.useRef(null);return t.jsxs("dd",{className:c(`${e["accordian-contents-wrap"]}`),style:{height:n?((r=o.current)==null?void 0:r.scrollHeight)??0:0},children:[t.jsx(p,{}),t.jsx("article",{ref:o,className:c(`${e["accordian-contents"]} ${n&&e.opened} ${i}`),children:a})]})},_=Object.assign(m,{Title:v,Contents:h});try{_.displayName="Accordion",_.__docgenInfo={description:"",displayName:"Accordion",props:{opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{_ as A};
//# sourceMappingURL=index-8000c752.js.map
