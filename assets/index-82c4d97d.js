import{j as r}from"./jsx-runtime-94f6e698.js";import{r as y}from"./index-8db94870.js";import{C as _}from"./index-e3b5ba34.js";import{c as f}from"./index-64131664.js";const w=(t=!1,l=300)=>{const o=y.useState(t),[n,s]=o;_.useLayoutEffect(()=>s(t?!0:i=>i?"closing":!1),[t]);const a=n==="closing";return _.useLayoutEffect(()=>{if(a){const i=setTimeout(()=>{s(!1)},l);return()=>clearTimeout(i)}},[a]),o},j="_blur_1dj2w_426",b="_closing_1dj2w_430",e={"fixed-body":"_fixed-body_1dj2w_413","background-layer":"_background-layer_1dj2w_417","fade-in":"_fade-in_1dj2w_1",blur:j,closing:b,"fade-out":"_fade-out_1dj2w_1","priority-1":"_priority-1_1dj2w_434","priority-2":"_priority-2_1dj2w_437","priority-3":"_priority-3_1dj2w_440","focus-layer":"_focus-layer_1dj2w_444","shake-horizontal":"_shake-horizontal_1dj2w_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1dj2w_1","slide-in-fwd-center":"_slide-in-fwd-center_1dj2w_1","scale-in-center":"_scale-in-center_1dj2w_1","slide-in-right":"_slide-in-right_1dj2w_1","slide-out-right":"_slide-out-right_1dj2w_1","scale-in-top":"_scale-in-top_1dj2w_1","scale-out-top":"_scale-out-top_1dj2w_1","swing-in-top-fwd":"_swing-in-top-fwd_1dj2w_1","fade-in-top":"_fade-in-top_1dj2w_1","fade-out-top":"_fade-out-top_1dj2w_1","fade-in-bottom":"_fade-in-bottom_1dj2w_1","fade-out-bottom":"_fade-out-bottom_1dj2w_1","scale-out-horizontal":"_scale-out-horizontal_1dj2w_1"},p=({children:t,onClick:l,focused:o,blur:n,className:s,bodyScroll:a=!1,priority:i=3})=>{const[d]=w(o),m=d==="closing";_.useLayoutEffect(()=>{if(!a){const{classList:c}=document.body;return o&&c.add(e["fixed-body"]),()=>c.remove(e["fixed-body"])}},[o,a]);const u=e[`priority-${i}`];return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:f(`${e["focus-layer"]} ${d&&u} ${s}`),children:t}),d?r.jsx("div",{onClick:l,className:f(`${e["background-layer"]} ${m&&e.closing} ${u} ${n&&e.blur}`)}):null]})};try{p.displayName="FocusLayer",p.__docgenInfo={description:"",displayName:"FocusLayer",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},focused:{defaultValue:null,description:"",name:"focused",required:!1,type:{name:"boolean"}},blur:{defaultValue:null,description:"",name:"blur",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},bodyScroll:{defaultValue:{value:"false"},description:"",name:"bodyScroll",required:!1,type:{name:"boolean"}},priority:{defaultValue:{value:"3"},description:"",name:"priority",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}}}catch{}export{p as F};
//# sourceMappingURL=index-82c4d97d.js.map
