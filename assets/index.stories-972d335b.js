import{j as t}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{T as i}from"./index-d6a1844c.js";import"./index-e17f63f7.js";import{B as d}from"./index-f062656d.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-64131664.js";import"./index-47d8ffac.js";import"./index-8e918fe9.js";import"./index-a1ddcb1d.js";import"./index-e3b5ba34.js";import"./index-61b68f43.js";import"./index-1fc0ca9a.js";import"./useTypography-0e7bc425.js";import"./index-451d21b4.js";import"./index-8ce4a492.js";import"./index-52ce7348.js";import"./index-847bd6e1.js";import"./index-a622c86c.js";import"./index-2ef5c3bc.js";import"./isObject-9c705d90.js";import"./index-40aa4d00.js";const F={title:"molecules/ToastContainer",component:i,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%",padding:"20px"},children:t.jsx(e,{})})]},o={render:e=>{const[s,p]=c.useState(0);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>p(m=>m+1),children:"Toast Up"}),t.jsx(i,{...e,toastOption:{message:s?`Toast test text ${s}`:null,type:s%2===0?"success":"fail"}})]})}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-972d335b.js.map
