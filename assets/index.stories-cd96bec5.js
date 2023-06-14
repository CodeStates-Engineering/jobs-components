import{j as e}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{P as o}from"./index-6447393a.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-64131664.js";import"./index-67680543.js";import"./index-18098115.js";import"./index-e3b5ba34.js";import"./useTypography-0e7bc425.js";import"./index-de8f99a9.js";import"./index-910210ef.js";import"./index-1fc0ca9a.js";import"./index-f4a71daf.js";import"./index-8ce4a492.js";import"./index-dd89b1a3.js";import"./index-b3577b86.js";import"./index-a622c86c.js";import"./index-47d8ffac.js";import"./index-d2f8bd0f.js";import"./isObject-9c705d90.js";import"./index-02f95d9c.js";const R={title:"molecules/Pagination",component:o,decorators:[r=>e.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:e.jsx(r,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503,displayedCount:9}},t={render:r=>{const[s,p]=m.useState(r.currentPage);return e.jsxs(e.Fragment,{children:[e.jsx(o,{...r,currentPage:s,onChange:p}),e.jsx(o,{...r,displayedCount:r.displayedCount,currentPage:void 0,loading:!0})]})}};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <Pagination {...args} displayedCount={args.displayedCount} currentPage={undefined} loading />
      </>;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,R as default};
//# sourceMappingURL=index.stories-cd96bec5.js.map
