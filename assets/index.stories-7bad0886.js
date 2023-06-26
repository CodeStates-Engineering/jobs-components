import{j as t}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{T as i}from"./index-4793fcb4.js";import"./index-280a7a6b.js";import{B as d}from"./index-20ef493e.js";import"./_commonjsHelpers-042e6b4d.js";import"./createValidationStore-9cc55e44.js";import"./index-0e910321.js";import"./index-18979c30.js";import"./Compatibility-ff615e1c.js";import"./useValidationMessageDynamicHeight-c093b2ff.js";import"./index-ec85f418.js";import"./useTypography-0e7bc425.js";import"./index-1fc0ca9a.js";import"./index-c9ff944a.js";import"./index-8ce4a492.js";import"./index-7ef333bc.js";import"./index-2af0e2c6.js";import"./index-ec911853.js";import"./index-95587434.js";import"./isObject-9c705d90.js";import"./index-38ade355.js";const F={title:"molecules/ToastContainer",component:i,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%",padding:"20px"},children:t.jsx(e,{})})]},o={render:e=>{const[s,p]=c.useState(0);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>p(m=>m+1),children:"Toast Up"}),t.jsx(i,{...e,toastOption:{message:s?`Toast test text ${s}`:null,type:s%2===0?"success":"fail"}})]})}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-7bad0886.js.map
