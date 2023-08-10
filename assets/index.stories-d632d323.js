import{j as e}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{P as o}from"./index-07290542.js";import"./_commonjsHelpers-042e6b4d.js";import"./cleanClassName-cdc1ff81.js";import"./index-aba45698.js";import"./index-d031e8f5.js";import"./Compatibility-ff615e1c.js";import"./useValidate-395f5a50.js";import"./index-2227ea27.js";import"./index-2e847129.js";import"./index-1fc0ca9a.js";import"./index-57b7e407.js";import"./index-8ce4a492.js";import"./index-ba37fc5c.js";import"./index-af309d3e.js";import"./index-e29dd81e.js";import"./index-a7ebed86.js";import"./index-b4d668c6.js";import"./isObject-5520b7e1.js";import"./index-0aca656c.js";const R={title:"molecules/Pagination",component:o,decorators:[r=>e.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:e.jsx(r,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503,displayedCount:9}},t={render:r=>{const[s,p]=m.useState(r.currentPage);return e.jsxs(e.Fragment,{children:[e.jsx(o,{...r,currentPage:s,onChange:p}),e.jsx(o,{...r,displayedCount:r.displayedCount,currentPage:void 0,loading:!0})]})}};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <Pagination {...args} displayedCount={args.displayedCount} currentPage={undefined} loading />
      </>;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,R as default};
//# sourceMappingURL=index.stories-d632d323.js.map
