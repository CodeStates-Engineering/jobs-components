import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as m}from"./index-61bf1805.js";import{P as o}from"./index-4e3c27fe.js";import"./_commonjsHelpers-de833af9.js";import"./index-75de0a99.js";import"./index-7d9c85fd.js";import"./index-e695366f.js";import"./Compatibility-d1e3055b.js";import"./useValidate-6435b2ea.js";import"./cleanClassName-cdc1ff81.js";import"./index-32ecbb2f.js";import"./index-dfe29350.js";import"./index-8d47fad6.js";import"./index-c939f33c.js";import"./index-2801d3c9.js";import"./index-3310871d.js";import"./index-15c354e5.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-f18d081a.js";import"./index-e6fc3cfe.js";const O={title:"molecules/Pagination",component:o,decorators:[r=>e.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:e.jsx(r,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503,displayedCount:9,size:"medium"}},t={render:r=>{const[s,p]=m.useState(r.currentPage);return e.jsxs(e.Fragment,{children:[e.jsx(o,{...r,currentPage:s,onChange:p}),e.jsx(o,{...r,displayedCount:r.displayedCount,currentPage:void 0,loading:!0})]})}};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <Pagination {...args} displayedCount={args.displayedCount} currentPage={undefined} loading />
      </>;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,O as default};
//# sourceMappingURL=index.stories-ce9a17ef.js.map
