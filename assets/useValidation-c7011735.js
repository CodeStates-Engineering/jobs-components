import{r}from"./index-8db94870.js";import{V as u}from"./index-64131664.js";const l=(a,t,s)=>{if(!t)return{};const[c,n]=r.useState(),i=r.useCallback(e=>n(t(e)),[t]);if(s){const e=r.useContext(u);e&&r.useEffect(()=>(e.set(s,()=>{const o=t(a);return n(o),o}),()=>{e.delete(s)}),[t,a,s])}return{validationMessage:c,checkValidation:i}};export{l as u};
//# sourceMappingURL=useValidation-c7011735.js.map
