import{j as s}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{r as b}from"./index-8ce4a492.js";import{C as m}from"./index-e3b5ba34.js";import{c as p}from"./index-64131664.js";const g=(o=!1,a=300)=>{const r=u.useState(o),[c,n]=r;m.useLayoutEffect(()=>n(o?!0:e=>e?"closing":!1),[o]);const i=c==="closing";return m.useLayoutEffect(()=>{if(i){const e=setTimeout(()=>{n(!1)},a);return()=>clearTimeout(e)}},[i]),r},h="_blur_1q4ts_474",v="_closing_1q4ts_478",t={"fixed-body":"_fixed-body_1q4ts_461","background-layer":"_background-layer_1q4ts_465","fade-in":"_fade-in_1q4ts_1",blur:h,closing:v,"fade-out":"_fade-out_1q4ts_1","priority-1":"_priority-1_1q4ts_482","priority-2":"_priority-2_1q4ts_485","priority-3":"_priority-3_1q4ts_488","focus-layer":"_focus-layer_1q4ts_493","shake-horizontal":"_shake-horizontal_1q4ts_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1q4ts_1","slide-in-fwd-center":"_slide-in-fwd-center_1q4ts_1","scale-in-center":"_scale-in-center_1q4ts_1","slide-in-right":"_slide-in-right_1q4ts_1","slide-in-left":"_slide-in-left_1q4ts_1","slide-out-right":"_slide-out-right_1q4ts_1","slide-out-left":"_slide-out-left_1q4ts_1","scale-in-top":"_scale-in-top_1q4ts_1","scale-out-top":"_scale-out-top_1q4ts_1","swing-in-top-fwd":"_swing-in-top-fwd_1q4ts_1","fade-in-top":"_fade-in-top_1q4ts_1","fade-out-top":"_fade-out-top_1q4ts_1","fade-in-bottom":"_fade-in-bottom_1q4ts_1","fade-out-bottom":"_fade-out-bottom_1q4ts_1","scale-out-horizontal":"_scale-out-horizontal_1q4ts_1"},y=({children:o,onBlur:a,focused:r,blur:c,className:n,bodyScroll:i=!1,priority:e})=>{const[_]=g(r),q=_==="closing";u.useEffect(()=>{if(!i){const{classList:l}=document.body;return r&&l.add(t["fixed-body"]),()=>l.remove(t["fixed-body"])}},[r,i]);const d=u.useRef();u.useEffect(()=>{if(a){const l=()=>{d.current===!1&&a()};return document.addEventListener("click",l),()=>document.removeEventListener("click",l)}},[a,_]);const f={className:p(`${t["focus-layer"]} ${e&&t[`priority-${e}`]} ${n}`),children:o};return e?b.createPortal(s.jsx(s.Fragment,{children:_?s.jsxs(s.Fragment,{children:[s.jsx("div",{onClick:a,className:p(`${t["background-layer"]} ${t[`priority-${e}`]} ${q&&t.closing} ${c&&t.blur}`)}),s.jsx("div",{...f})]}):null}),document.body):s.jsx("div",{...f,onMouseEnter:()=>{d.current=!0},onMouseLeave:()=>{d.current=!1}})};try{y.displayName="FocusLayer",y.__docgenInfo={description:"",displayName:"FocusLayer",props:{onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},focused:{defaultValue:null,description:"",name:"focused",required:!1,type:{name:"boolean"}},blur:{defaultValue:null,description:"",name:"blur",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},bodyScroll:{defaultValue:{value:"false"},description:"",name:"bodyScroll",required:!1,type:{name:"boolean"}},priority:{defaultValue:null,description:"",name:"priority",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}}}catch{}export{y as F,g as u};
//# sourceMappingURL=index-8bb2bd6b.js.map
