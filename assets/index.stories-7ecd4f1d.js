import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as m}from"./index-61bf1805.js";import{P as n}from"./index-8cbdbd53.js";import"./_commonjsHelpers-de833af9.js";import"./cleanClassName-cdc1ff81.js";import"./index-775a2672.js";import"./index-12a8a271.js";import"./Compatibility-d1e3055b.js";import"./useValidate-983984d3.js";import"./index-1715ee98.js";import"./index-868581da.js";import"./index-8d47fad6.js";import"./index-be44e53b.js";import"./index-2801d3c9.js";import"./index-43870500.js";import"./index-23c7aa51.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-cde9edb5.js";import"./index-e6fc3cfe.js";const O={title:"molecules/Pagination",component:n,decorators:[r=>e.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:e.jsx(r,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503,displayedCount:9}},t={render:r=>{const[s,p]=m.useState(r.currentPage);return e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,currentPage:s,onChange:p}),e.jsx(n,{...r,displayedCount:r.displayedCount,currentPage:void 0,loading:!0})]})}};var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <Pagination {...args} displayedCount={args.displayedCount} currentPage={undefined} loading />
      </>;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,O as default};
//# sourceMappingURL=index.stories-7ecd4f1d.js.map
