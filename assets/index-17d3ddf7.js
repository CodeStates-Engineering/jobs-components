import{j as a}from"./jsx-runtime-4ca860c5.js";import{r}from"./index-61bf1805.js";import"./Compatibility-d1e3055b.js";import"./useValidate-f9eb9d2a.js";import{u}from"./index-6978bea8.js";import{c as _}from"./cleanClassName-cdc1ff81.js";const b="_open_1tbaf_487",g="_closing_1tbaf_491",e={"floating-modal-container":"_floating-modal-container_1tbaf_461","priority-1":"_priority-1_1tbaf_478","priority-2":"_priority-2_1tbaf_481","priority-3":"_priority-3_1tbaf_484",open:b,"fade-in-bottom":"_fade-in-bottom_1tbaf_1",closing:g,"fade-out-bottom":"_fade-out-bottom_1tbaf_1","floating-modal-items":"_floating-modal-items_1tbaf_495","floating-modal-tail":"_floating-modal-tail_1tbaf_500","with-border":"_with-border_1tbaf_500","fade-in":"_fade-in_1tbaf_1","fade-out":"_fade-out_1tbaf_1","shake-horizontal":"_shake-horizontal_1tbaf_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1tbaf_1","slide-in-fwd-center":"_slide-in-fwd-center_1tbaf_1","scale-in-center":"_scale-in-center_1tbaf_1","slide-in-right":"_slide-in-right_1tbaf_1","slide-in-left":"_slide-in-left_1tbaf_1","slide-out-right":"_slide-out-right_1tbaf_1","slide-out-left":"_slide-out-left_1tbaf_1","scale-in-top":"_scale-in-top_1tbaf_1","scale-out-top":"_scale-out-top_1tbaf_1","swing-in-top-fwd":"_swing-in-top-fwd_1tbaf_1","fade-in-top":"_fade-in-top_1tbaf_1","fade-out-top":"_fade-out-top_1tbaf_1","scale-out-horizontal":"_scale-out-horizontal_1tbaf_1"},y=r.createContext(void 0),d=({children:t,className:o})=>a.jsx("section",{className:_(`${e["floating-modal-items"]} ${o}`),children:t}),h=({children:t,className:o,border:i=!0})=>a.jsx("div",{className:`${e["floating-modal-tail"]} ${i&&e["with-border"]} ${o}`,children:t}),w=({children:t,className:o,opened:i,onClose:f,priority:c=3})=>{const[n,l]=r.useState("closed"),m={className:_(`${e["floating-modal-container"]} ${e[n]} ${e[`priority-${c}`]} ${o}`),children:a.jsx(y.Provider,{value:f,children:t})};return u(()=>{if(i)l("open");else{l("closing");const p=setTimeout(()=>l("closed"),500);return()=>clearTimeout(p)}},[i]),a.jsx(a.Fragment,{children:n==="closed"?null:a.jsx(d,{...m})})},s=Object.assign(w,{Body:d,Tail:h});try{s.displayName="FloatingModal",s.__docgenInfo={description:"",displayName:"FloatingModal",props:{opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},priority:{defaultValue:{value:"3"},description:"",name:"priority",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}}}catch{}export{s as F};
//# sourceMappingURL=index-17d3ddf7.js.map
