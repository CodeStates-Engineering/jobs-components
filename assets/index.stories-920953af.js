import{j as e}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{P as o}from"./index-53e59ef0.js";import"./_commonjsHelpers-042e6b4d.js";import"./ValidationContext-e5b2e92a.js";import"./index-12b9ef81.js";import"./index-e4e7b397.js";import"./Compatibility-ff615e1c.js";import"./useValidate-1adf1d19.js";import"./index-5ffe1939.js";import"./index-cdc30b05.js";import"./index-1fc0ca9a.js";import"./index-536b847a.js";import"./index-8ce4a492.js";import"./index-76987ea9.js";import"./index-fc1ebfc2.js";import"./index-f159dff6.js";import"./index-72bf1363.js";import"./index-7e43b948.js";import"./isObject-9c705d90.js";import"./index-1116b26a.js";const R={title:"molecules/Pagination",component:o,decorators:[r=>e.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:e.jsx(r,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503,displayedCount:9}},t={render:r=>{const[s,p]=m.useState(r.currentPage);return e.jsxs(e.Fragment,{children:[e.jsx(o,{...r,currentPage:s,onChange:p}),e.jsx(o,{...r,displayedCount:r.displayedCount,currentPage:void 0,loading:!0})]})}};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <Pagination {...args} displayedCount={args.displayedCount} currentPage={undefined} loading />
      </>;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,R as default};
//# sourceMappingURL=index.stories-920953af.js.map
