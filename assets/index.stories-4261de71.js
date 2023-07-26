import{j as t}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{T as i}from"./index-c5548d33.js";import"./index-216bf4c2.js";import{B as d}from"./index-e3731ac8.js";import"./_commonjsHelpers-042e6b4d.js";import"./ValidationContext-e5b2e92a.js";import"./index-72bf1363.js";import"./index-06a2e329.js";import"./Compatibility-ff615e1c.js";import"./useValidate-6cc225ca.js";import"./index-7f1fcdd9.js";import"./index-1fc0ca9a.js";import"./index-851c569c.js";import"./index-8ce4a492.js";import"./index-e9ec05a9.js";import"./index-e36f99ae.js";import"./index-f159dff6.js";import"./index-fe180ce9.js";import"./isObject-5520b7e1.js";import"./index-1116b26a.js";const w={title:"molecules/ToastContainer",component:i,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%",padding:"20px"},children:t.jsx(e,{})})]},o={render:e=>{const[s,p]=c.useState(0);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>p(m=>m+1),children:"Toast Up"}),t.jsx(i,{...e,toastOption:{message:s?`Toast test text ${s}`:null,type:s%2===0?"success":"fail"}})]})}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-4261de71.js.map
