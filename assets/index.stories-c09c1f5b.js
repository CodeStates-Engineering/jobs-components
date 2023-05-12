import{j as s}from"./jsx-runtime-94f6e698.js";import{r as d}from"./index-8db94870.js";import{T as a}from"./index-dd6302b2.js";import"./index-a52c3ec3.js";import{B as c}from"./index-85fe2785.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-64131664.js";import"./index-6f0f2d7c.js";import"./index-6c3eb542.js";import"./index-58c7faf8.js";import"./index-1580e1df.js";import"./index-e3b5ba34.js";import"./index-1fc0ca9a.js";import"./index-f1d4be6e.js";import"./index-bc98936d.js";import"./index-31028963.js";import"./useTypography-0e7bc425.js";import"./index-f799b55c.js";import"./index-636e19d2.js";import"./index-300c5525.js";import"./isObject-3c28966c.js";import"./index-2a531a4b.js";const R={title:"molecules/ToastContainer",component:a},x=i=>{const[o,p]=d.useState(0);return s.jsxs("div",{style:{height:"100vh",width:"100%",padding:"20px"},children:[s.jsx(c,{onClick:()=>p(m=>m+1),children:"Toast Up"}),s.jsx(a,{...i,toastOption:{message:o?`Toast test text ${o}`:null,type:o%2===0?"success":"fail"}})]})},t=x.bind({}),l={};t.args=l;var e,r,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const [toastIndex, setToastIndex] = useState(0);
  return <div style={{
    height: '100vh',
    width: '100%',
    padding: '20px'
  }}>
      <Button onClick={() => setToastIndex(prev => prev + 1)}>
        Toast Up
      </Button>
      <ToastContainer {...args} toastOption={{
      message: toastIndex ? \`Toast test text \${toastIndex}\` : null,
      type: toastIndex % 2 === 0 ? 'success' : 'fail'
    }} />
    </div>;
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const q=["Default"];export{t as Default,q as __namedExportsOrder,R as default};
//# sourceMappingURL=index.stories-c09c1f5b.js.map
