import{j as t}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{T as i}from"./index-8edad335.js";import"./index-aba45698.js";import{B as d}from"./index-d031e8f5.js";import"./_commonjsHelpers-042e6b4d.js";import"./cleanClassName-cdc1ff81.js";import"./index-a7ebed86.js";import"./index-2227ea27.js";import"./Compatibility-ff615e1c.js";import"./useValidate-395f5a50.js";import"./index-2e847129.js";import"./index-1fc0ca9a.js";import"./index-57b7e407.js";import"./index-8ce4a492.js";import"./index-ba37fc5c.js";import"./index-af309d3e.js";import"./index-e29dd81e.js";import"./index-b4d668c6.js";import"./isObject-5520b7e1.js";import"./index-0aca656c.js";const w={title:"molecules/ToastContainer",component:i,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%",padding:"20px"},children:t.jsx(e,{})})]},o={render:e=>{const[s,p]=c.useState(0);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>p(m=>m+1),children:"Toast Up"}),t.jsx(i,{...e,toastOption:{message:s?`Toast test text ${s}`:null,type:s%2===0?"success":"fail"}})]})}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [toastIndex, setToastIndex] = useState(0);
    return <>
        <Button onClick={() => setToastIndex(prev => prev + 1)}>
          Toast Up
        </Button>
        <ToastContainer {...args} toastOption={{
        message: toastIndex ? \`Toast test text \${toastIndex}\` : null,
        type: toastIndex % 2 === 0 ? 'success' : 'fail'
      }} />
      </>;
  }
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const F=["Default"];export{o as Default,F as __namedExportsOrder,w as default};
//# sourceMappingURL=index.stories-d0fdfa20.js.map
