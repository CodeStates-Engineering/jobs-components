import{j as t}from"./jsx-runtime-9bc08dc0.js";import{r as c}from"./index-29a85313.js";import{T as i}from"./index-bea0b9dd.js";import{B as d}from"./index-0df07bff.js";import"./index-8146761d.js";import"./index-1f14f509.js";import"./index-92545bc7.js";import"./index-15456ba4.js";import"./index-cf6925de.js";import"./index-26cd43b5.js";import"./index-1accccac.js";import"./index-20667a64.js";import"./index-84868488.js";import"./cleanClassName-cdc1ff81.js";import"./Compatibility-31c3a9ab.js";import"./useTypographyClassName-e8640df1.js";import"./ValidationContext-b0a2edd5.js";import"./index-cefa53ee.js";import"./index-1f0ffab8.js";import"./index-e644ce29.js";import"./isObject-9c705d90.js";const w={title:"molecules/ToastContainer",component:i,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%",padding:"20px"},children:t.jsx(e,{})})]},o={render:e=>{const[s,p]=c.useState(0);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>p(m=>m+1),children:"Toast Up"}),t.jsx(i,{...e,toastOption:{message:s?`Toast test text ${s}`:null,type:s%2===0?"success":"fail"}})]})}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
