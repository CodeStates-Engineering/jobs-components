import{j as r}from"./jsx-runtime-4ca860c5.js";import{r as u}from"./index-61bf1805.js";import{r as y}from"./index-2801d3c9.js";import{C as m}from"./Compatibility-d1e3055b.js";import"./useValidate-6435b2ea.js";import{c as f}from"./cleanClassName-cdc1ff81.js";const b=(t=!1,o=300)=>{const s=u.useState(t),[c,a]=s;m.useLayoutEffect(()=>a(t?!0:n=>n?"closing":!1),[t]);const l=c==="closing";return m.useLayoutEffect(()=>{if(l){const n=setTimeout(()=>{a(!1)},o);return()=>clearTimeout(n)}},[l]),s},g="_blur_nh245_475",x="_closing_nh245_479",v="_global_nh245_492",e={"fixed-body":"_fixed-body_nh245_461","background-layer":"_background-layer_nh245_466","fade-in":"_fade-in_nh245_1",blur:g,closing:x,"fade-out":"_fade-out_nh245_1","focus-layer":"_focus-layer_nh245_485",global:v,"shake-horizontal":"_shake-horizontal_nh245_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_nh245_1","slide-in-fwd-center":"_slide-in-fwd-center_nh245_1","scale-in-center":"_scale-in-center_nh245_1","slide-in-right":"_slide-in-right_nh245_1","slide-in-left":"_slide-in-left_nh245_1","slide-out-right":"_slide-out-right_nh245_1","slide-out-left":"_slide-out-left_nh245_1","scale-in-top":"_scale-in-top_nh245_1","scale-out-top":"_scale-out-top_nh245_1","swing-in-top-fwd":"_swing-in-top-fwd_nh245_1","fade-in-top":"_fade-in-top_nh245_1","fade-out-top":"_fade-out-top_nh245_1","fade-in-bottom":"_fade-in-bottom_nh245_1","fade-out-bottom":"_fade-out-bottom_nh245_1","scale-out-horizontal":"_scale-out-horizontal_nh245_1"},p=({children:t,onBlur:o,focused:s,blur:c,className:a,bodyScroll:l=!1,priority:n})=>{const[d]=b(s),h=d==="closing";u.useEffect(()=>{if(!l){const{classList:i}=document.body;return s&&i.add(e["fixed-body"]),()=>i.remove(e["fixed-body"])}},[s,l]);const _=u.useRef();return u.useEffect(()=>{if(o){const i=()=>{_.current===!1&&o()};return document.addEventListener("click",i),()=>document.removeEventListener("click",i)}},[o,d]),typeof window>"u"?null:n?y.createPortal(d?r.jsxs(r.Fragment,{children:[r.jsx("div",{onClick:o,style:{zIndex:999999-n*10},className:f(`${e["background-layer"]} 
              ${h&&e.closing} ${c&&e.blur}`)}),r.jsx("div",{style:{zIndex:1e6-n*10},className:f(`${e["focus-layer"]} ${e.global} ${a}`),children:t})]}):null,document.body):r.jsx("div",{onMouseEnter:()=>{_.current=!0},onMouseLeave:()=>{_.current=!1},className:f(`${e["focus-layer"]} ${a}`),children:t})};try{p.displayName="FocusLayer",p.__docgenInfo={description:"",displayName:"FocusLayer",props:{onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},focused:{defaultValue:null,description:"",name:"focused",required:!1,type:{name:"boolean"}},blur:{defaultValue:null,description:"",name:"blur",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},bodyScroll:{defaultValue:{value:"false"},description:"",name:"bodyScroll",required:!1,type:{name:"boolean"}},priority:{defaultValue:null,description:"",name:"priority",required:!1,type:{name:"number"}}}}}catch{}export{p as F,b as u};
//# sourceMappingURL=index-c939f33c.js.map