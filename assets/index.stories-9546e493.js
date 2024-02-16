import{j as t}from"./jsx-runtime-4ca860c5.js";import{r as c}from"./index-61bf1805.js";import{T as i}from"./index-6e4ec3b6.js";import"./index-33462664.js";import{B as d}from"./index-3a2203de.js";import"./_commonjsHelpers-de833af9.js";import"./cleanClassName-cdc1ff81.js";import"./index-5240e4a2.js";import"./index-09ca0d32.js";import"./Compatibility-d1e3055b.js";import"./useValidate-f9eb9d2a.js";import"./index-1fa4b92a.js";import"./index-8d47fad6.js";import"./index-b4923067.js";import"./index-2801d3c9.js";import"./index-80d1ff56.js";import"./index-4e494c8c.js";import"./index-576e98e6.js";import"./index-6978bea8.js";import"./index-e6fc3cfe.js";const $={title:"molecules/ToastContainer",component:i,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%",padding:"20px"},children:t.jsx(e,{})})]},o={render:e=>{const[s,p]=c.useState(0);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>p(m=>m+1),children:"Toast Up"}),t.jsx(i,{...e,toastOption:{message:s?`Toast test text ${s}`:null,type:s%2===0?"success":"fail"}})]})}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-9546e493.js.map
