import{r as t}from"./index-8db94870.js";const i=()=>{const n=t.useState(!1),[s,c]=n,o=t.useRef(!1);return t.useEffect(()=>{if(s){const e=()=>{o.current&&c(!1)};return window.addEventListener("click",e),()=>window.removeEventListener("click",e)}},[s,c]),{openingState:n,setClosableOnClick:e=>{o.current=e}}};export{i as u};
//# sourceMappingURL=useClosableOnClickOpeningState-30ed2d87.js.map
