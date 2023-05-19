import{j as t}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{T as i}from"./index-00a688cd.js";import"./index-61e499c3.js";import{B as d}from"./index-85fe2785.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-64131664.js";import"./index-6f0f2d7c.js";import"./index-6c3eb542.js";import"./index-8f534833.js";import"./index-e3b5ba34.js";import"./index-1fc0ca9a.js";import"./index-f1d4be6e.js";import"./index-bc98936d.js";import"./index-31028963.js";import"./useTypography-0e7bc425.js";import"./index-f799b55c.js";import"./index-636e19d2.js";import"./index-300c5525.js";import"./isObject-3c28966c.js";import"./index-2a531a4b.js";import"./index-fb8131f8.js";const F={title:"molecules/ToastContainer",component:i,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%",padding:"20px"},children:t.jsx(e,{})})]},o={render:e=>{const[s,p]=c.useState(0);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>p(m=>m+1),children:"Toast Up"}),t.jsx(i,{...e,toastOption:{message:s?`Toast test text ${s}`:null,type:s%2===0?"success":"fail"}})]})}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const R=["Default"];export{o as Default,R as __namedExportsOrder,F as default};
//# sourceMappingURL=index.stories-dcd93408.js.map
