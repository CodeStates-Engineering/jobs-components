var R=Object.defineProperty;var g=(c,e,t)=>e in c?R(c,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[e]=t;var r=(c,e,t)=>(g(c,typeof e!="symbol"?e+"":e,t),t);import{j as k}from"./jsx-runtime-9bc08dc0.js";import{r as x}from"./index-29a85313.js";const s=class s{};r(s,"Link"),r(s,"useLocation"),r(s,"useLayoutEffect",x.useLayoutEffect),r(s,"injectDependencies",(e,{location:t,link:f})=>{switch(e){case"next":{const a=f,o=t;s.Link=function({to:n,...L}){return k.jsx(a,{...L,href:n})},s.useLocation=()=>{const u=o(),{asPath:n,query:L}=u,[E,h]=n.split("?");return{...u,pathname:E,search:h&&Object.keys(L).length?`?${h}`:""}},s.useLayoutEffect=x.useEffect;break}case"react":{const a=f,o=t;s.Link=function(n){return k.jsx(a,{...n})},s.useLocation=o;break}}});let j=s;export{j as C};