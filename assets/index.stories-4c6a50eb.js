import{j as t}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{T as i}from"./index-35a93fb4.js";import"./index-57988c64.js";import{B as d}from"./index-18098115.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-64131664.js";import"./index-47d8ffac.js";import"./index-985a9732.js";import"./index-e3b5ba34.js";import"./useTypography-0e7bc425.js";import"./index-e468d445.js";import"./index-1fc0ca9a.js";import"./index-6d64437b.js";import"./index-8ce4a492.js";import"./index-dd89b1a3.js";import"./index-b3577b86.js";import"./index-a622c86c.js";import"./index-d2f8bd0f.js";import"./isObject-9c705d90.js";import"./index-02f95d9c.js";const w={title:"molecules/ToastContainer",component:i,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%",padding:"20px"},children:t.jsx(e,{})})]},o={render:e=>{const[s,p]=c.useState(0);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>p(m=>m+1),children:"Toast Up"}),t.jsx(i,{...e,toastOption:{message:s?`Toast test text ${s}`:null,type:s%2===0?"success":"fail"}})]})}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-4c6a50eb.js.map
