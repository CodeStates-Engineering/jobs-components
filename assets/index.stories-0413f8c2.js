import{j as t}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{T as i}from"./index-7149aad2.js";import"./index-da69c834.js";import{B as d}from"./index-298b594d.js";import"./_commonjsHelpers-042e6b4d.js";import"./ValidationContext-e5b2e92a.js";import"./index-72bf1363.js";import"./index-d355d1b9.js";import"./Compatibility-ff615e1c.js";import"./useValidate-c0172170.js";import"./index-c4a0b449.js";import"./index-1fc0ca9a.js";import"./index-deda4382.js";import"./index-8ce4a492.js";import"./index-72406ddc.js";import"./index-673633f1.js";import"./index-f159dff6.js";import"./index-20d446cd.js";import"./isObject-9c705d90.js";import"./index-1116b26a.js";const w={title:"molecules/ToastContainer",component:i,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%",padding:"20px"},children:t.jsx(e,{})})]},o={render:e=>{const[s,p]=c.useState(0);return t.jsxs(t.Fragment,{children:[t.jsx(d,{onClick:()=>p(m=>m+1),children:"Toast Up"}),t.jsx(i,{...e,toastOption:{message:s?`Toast test text ${s}`:null,type:s%2===0?"success":"fail"}})]})}};var r,n,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-0413f8c2.js.map
