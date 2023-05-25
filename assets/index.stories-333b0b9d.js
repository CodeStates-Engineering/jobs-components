import{j as t}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{T as i}from"./index-279d0c78.js";import"./index-079ad32f.js";import{B as d}from"./index-6d56ed8f.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-64131664.js";import"./index-47d8ffac.js";import"./index-fff92b81.js";import"./index-e3b5ba34.js";import"./useTypography-0e7bc425.js";import"./index-8c4fe83c.js";import"./index-1fc0ca9a.js";import"./index-21cc8640.js";import"./index-e5314f3d.js";import"./index-7be5fe8c.js";import"./index-a622c86c.js";import"./index-3e179838.js";import"./index-2bfb62af.js";import"./isObject-3c28966c.js";import"./index-a0964943.js";const w={title:"molecules/ToastContainer",component:i,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%",padding:"20px"},children:t.jsx(e,{})})]},o={render:e=>{const[s,p]=c.useState(0);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>p(m=>m+1),children:"Toast Up"}),t.jsx(i,{...e,toastOption:{message:s?`Toast test text ${s}`:null,type:s%2===0?"success":"fail"}})]})}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-333b0b9d.js.map
