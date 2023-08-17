import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as m}from"./index-61bf1805.js";import{P as n}from"./index-6c472052.js";import"./_commonjsHelpers-de833af9.js";import"./cleanClassName-cdc1ff81.js";import"./index-034c377f.js";import"./index-a11dec0e.js";import"./Compatibility-d1e3055b.js";import"./useValidate-97d6a306.js";import"./index-0ef24ebe.js";import"./index-4057f8c3.js";import"./index-8d47fad6.js";import"./index-4f2f1158.js";import"./index-2801d3c9.js";import"./index-16d53deb.js";import"./index-3c77c95b.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-33f0815a.js";import"./index-e6fc3cfe.js";const O={title:"molecules/Pagination",component:n,decorators:[r=>e.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:e.jsx(r,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503,displayedCount:9}},t={render:r=>{const[s,p]=m.useState(r.currentPage);return e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,currentPage:s,onChange:p}),e.jsx(n,{...r,displayedCount:r.displayedCount,currentPage:void 0,loading:!0})]})}};var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <Pagination {...args} displayedCount={args.displayedCount} currentPage={undefined} loading />
      </>;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,O as default};
//# sourceMappingURL=index.stories-71a2a74c.js.map
