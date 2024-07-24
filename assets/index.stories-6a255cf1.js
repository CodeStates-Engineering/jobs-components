import{j as t}from"./jsx-runtime-4ca860c5.js";import{r as c}from"./index-61bf1805.js";import{T as i}from"./index-b695dd3b.js";import"./index-1b26f05c.js";import{B as d}from"./index-8ad70b66.js";import"./_commonjsHelpers-de833af9.js";import"./cleanClassName-cdc1ff81.js";import"./index-5240e4a2.js";import"./index-bbb79b91.js";import"./Compatibility-d1e3055b.js";import"./useValidate-983984d3.js";import"./index-868581da.js";import"./index-8d47fad6.js";import"./index-be44e53b.js";import"./index-2801d3c9.js";import"./index-43870500.js";import"./index-23c7aa51.js";import"./index-576e98e6.js";import"./index-cde9edb5.js";import"./index-e6fc3cfe.js";const $={title:"molecules/ToastContainer",component:i,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%",padding:"20px"},children:t.jsx(e,{})})]},o={render:e=>{const[s,p]=c.useState(0);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>p(m=>m+1),children:"Toast Up"}),t.jsx(i,{...e,toastOption:{message:s?`Toast test text ${s}`:null,type:s%2===0?"success":"fail"}})]})}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(n=o.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const w=["Default"];export{o as Default,w as __namedExportsOrder,$ as default};
//# sourceMappingURL=index.stories-6a255cf1.js.map
