import{j as l}from"./jsx-runtime-9bc08dc0.js";import{r as c}from"./index-29a85313.js";import{r as h}from"./index-e644ce29.js";import{C as m}from"./Compatibility-31c3a9ab.js";import{c as f}from"./cleanClassName-cdc1ff81.js";import"./ValidationContext-b0a2edd5.js";const y=(s=!1,n=300)=>{const o=c.useState(s),[u,a]=o;m.useLayoutEffect(()=>a(s?!0:t=>t?"closing":!1),[s]);const i=u==="closing";return m.useLayoutEffect(()=>{if(i){const t=setTimeout(()=>{a(!1)},n);return()=>clearTimeout(t)}},[i]),o},g="_blur_nh245_475",b="_closing_nh245_479",x="_global_nh245_492",e={"fixed-body":"_fixed-body_nh245_461","background-layer":"_background-layer_nh245_466","fade-in":"_fade-in_nh245_1",blur:g,closing:b,"fade-out":"_fade-out_nh245_1","focus-layer":"_focus-layer_nh245_485",global:x,"shake-horizontal":"_shake-horizontal_nh245_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_nh245_1","slide-in-fwd-center":"_slide-in-fwd-center_nh245_1","scale-in-center":"_scale-in-center_nh245_1","slide-in-right":"_slide-in-right_nh245_1","slide-in-left":"_slide-in-left_nh245_1","slide-out-right":"_slide-out-right_nh245_1","slide-out-left":"_slide-out-left_nh245_1","scale-in-top":"_scale-in-top_nh245_1","scale-out-top":"_scale-out-top_nh245_1","swing-in-top-fwd":"_swing-in-top-fwd_nh245_1","fade-in-top":"_fade-in-top_nh245_1","fade-out-top":"_fade-out-top_nh245_1","fade-in-bottom":"_fade-in-bottom_nh245_1","fade-out-bottom":"_fade-out-bottom_nh245_1","scale-out-horizontal":"_scale-out-horizontal_nh245_1"},w=({children:s,onBlur:n,focused:o,blur:u,className:a,bodyScroll:i=!1,priority:t})=>{const[d]=y(o),p=d==="closing";c.useEffect(()=>{if(!i){const{classList:r}=document.body;return o&&r.add(e["fixed-body"]),()=>r.remove(e["fixed-body"])}},[o,i]);const _=c.useRef();return c.useEffect(()=>{if(n){const r=()=>{_.current===!1&&n()};return document.addEventListener("click",r),()=>document.removeEventListener("click",r)}},[n,d]),typeof window>"u"?null:t?h.createPortal(d?l.jsxs(l.Fragment,{children:[l.jsx("div",{onClick:n,style:{zIndex:999999-t*10},className:f(`${e["background-layer"]} 
              ${p&&e.closing} ${u&&e.blur}`)}),l.jsx("div",{style:{zIndex:1e6-t*10},className:f(`${e["focus-layer"]} ${e.global} ${a}`),children:s})]}):null,document.body):l.jsx("div",{onMouseEnter:()=>{_.current=!0},onMouseLeave:()=>{_.current=!1},className:f(`${e["focus-layer"]} ${a}`),children:s})};w.__docgenInfo={description:"",methods:[],displayName:"FocusLayer",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},focused:{required:!1,tsType:{name:"boolean"},description:""},blur:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},bodyScroll:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},priority:{required:!1,tsType:{name:"number"},description:""}}};export{w as F,y as u};