import{j as e}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{P as o}from"./index-8be90ea8.js";import"./_commonjsHelpers-042e6b4d.js";import"./ValidationContext-e5b2e92a.js";import"./index-216bf4c2.js";import"./index-e3731ac8.js";import"./Compatibility-ff615e1c.js";import"./useValidate-6cc225ca.js";import"./index-06a2e329.js";import"./index-7f1fcdd9.js";import"./index-1fc0ca9a.js";import"./index-851c569c.js";import"./index-8ce4a492.js";import"./index-e9ec05a9.js";import"./index-e36f99ae.js";import"./index-f159dff6.js";import"./index-72bf1363.js";import"./index-fe180ce9.js";import"./isObject-5520b7e1.js";import"./index-1116b26a.js";const R={title:"molecules/Pagination",component:o,decorators:[r=>e.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:e.jsx(r,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503,displayedCount:9}},t={render:r=>{const[s,p]=m.useState(r.currentPage);return e.jsxs(e.Fragment,{children:[e.jsx(o,{...r,currentPage:s,onChange:p}),e.jsx(o,{...r,displayedCount:r.displayedCount,currentPage:void 0,loading:!0})]})}};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <Pagination {...args} displayedCount={args.displayedCount} currentPage={undefined} loading />
      </>;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,R as default};
//# sourceMappingURL=index.stories-49871bd6.js.map
