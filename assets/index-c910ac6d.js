import{j as e}from"./jsx-runtime-9bc08dc0.js";import{r as n}from"./index-29a85313.js";import{c as i}from"./cleanClassName-cdc1ff81.js";import{B as c}from"./index-0df07bff.js";import"./index-8146761d.js";import"./index-1f14f509.js";import{F as x}from"./index-92545bc7.js";import"./index-15456ba4.js";import"./index-cf6925de.js";import"./index-26cd43b5.js";import"./index-1accccac.js";import"./index-20667a64.js";import"./index-84868488.js";import"./index-16c5f01a.js";import"./index-63b4897c.js";import{T as g}from"./index-259baffc.js";import"./index-673a817b.js";import"./index-01c78001.js";import"./index-9d7f2b4c.js";import"./index-bea0b9dd.js";import"./index-0f73428f.js";import"./index-2527f996.js";import"./index-26b5651c.js";import"./index-c5e25c0c.js";import"./index-0e3039e4.js";import"./index-ed7350e6.js";import"./index-95f72cee.js";import"./index-d0637553.js";import"./index-38a24daf.js";import"./index-ae973a17.js";import{X as m}from"./x-a4e0184a.js";const w="_closing_1soqc_479",o={"modal-container":"_modal-container_1soqc_461","fade-in":"_fade-in_1soqc_1",closing:w,"fade-out":"_fade-out_1soqc_1","modal-body":"_modal-body_1soqc_484","modal-footer":"_modal-footer_1soqc_490","with-border":"_with-border_1soqc_493","tab-menu":"_tab-menu_1soqc_497","modal-header":"_modal-header_1soqc_501","with-tab":"_with-tab_1soqc_507","shake-horizontal":"_shake-horizontal_1soqc_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1soqc_1","slide-in-fwd-center":"_slide-in-fwd-center_1soqc_1","scale-in-center":"_scale-in-center_1soqc_1","slide-in-right":"_slide-in-right_1soqc_1","slide-in-left":"_slide-in-left_1soqc_1","slide-out-right":"_slide-out-right_1soqc_1","slide-out-left":"_slide-out-left_1soqc_1","scale-in-top":"_scale-in-top_1soqc_1","scale-out-top":"_scale-out-top_1soqc_1","swing-in-top-fwd":"_swing-in-top-fwd_1soqc_1","fade-in-top":"_fade-in-top_1soqc_1","fade-out-top":"_fade-out-top_1soqc_1","fade-in-bottom":"_fade-in-bottom_1soqc_1","fade-out-bottom":"_fade-out-bottom_1soqc_1","scale-out-horizontal":"_scale-out-horizontal_1soqc_1"},l=n.createContext(void 0),u=({children:t,className:s,opened:a,onClose:r,outsideClickClose:_=!0,priority:f=1,blur:h=!0,type:q="section",bodyScroll:b,onSubmit:y})=>{const d={className:i(`${o["modal-container"]} ${s}`),children:e.jsx(l.Provider,{value:r,children:t})};return e.jsx(x,{focused:a,onBlur:()=>_?r==null?void 0:r():null,blur:h,priority:f,bodyScroll:b,children:a?{section:e.jsx("section",{...d}),form:e.jsx("form",{...d,onSubmit:y})}[q]:null})},p=({children:t,className:s,border:a=!1})=>{const r=n.useContext(l);return e.jsxs("header",{className:i(`${o["modal-header"]} ${a&&o["with-border"]} ${s}`),children:[e.jsx("div",{children:t}),e.jsx(c,{icon:e.jsx(m,{}),variant:"ghost",color:"bluishGray700",size:"small",onClick:r})]})},j=({className:t,items:s,border:a=!0})=>{const r=n.useContext(l);return e.jsxs("header",{className:i(`${o["modal-header"]} ${o["with-tab"]} ${a&&o["with-border"]} ${t}`),children:[e.jsx(g,{items:s,className:o["tab-menu"],fontSize:"medium",fontWeight:700,bottomLineWeight:"none"}),e.jsx(c,{icon:e.jsx(m,{}),variant:"ghost",color:"bluishGray700",size:"small",onClick:r})]})},v=({children:t,className:s})=>e.jsx("section",{className:i(`${o["modal-body"]} ${s}`),children:t}),M=({children:t,className:s,border:a=!0})=>e.jsx("footer",{className:`${o["modal-footer"]} ${a&&o["with-border"]} ${s}`,children:t}),se=Object.assign(u,{Header:p,TabMenuHeader:j,Body:v,Footer:M});p.__docgenInfo={description:"",methods:[],displayName:"ModalHeader",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"ModalMain",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},opened:{required:!1,tsType:{name:"boolean"},description:""},outsideClickClose:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},type:{required:!1,tsType:{name:"union",raw:"'section' | 'form'",elements:[{name:"literal",value:"'section'"},{name:"literal",value:"'form'"}]},description:"",defaultValue:{value:"'section'",computed:!1}},bodyScroll:{required:!1,tsType:{name:"boolean"},description:""},priority:{defaultValue:{value:"1",computed:!1},required:!1},blur:{defaultValue:{value:"true",computed:!1},required:!1}},composes:["Pick"]};export{se as M};