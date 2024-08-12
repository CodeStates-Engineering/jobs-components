import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as m}from"./index-61bf1805.js";import{P as n}from"./index-fb358ecc.js";import"./_commonjsHelpers-de833af9.js";import"./cleanClassName-cdc1ff81.js";import"./index-2a562976.js";import"./index-02ad315e.js";import"./Compatibility-d1e3055b.js";import"./useValidate-f9eb9d2a.js";import"./index-8ad9169b.js";import"./index-1fa4b92a.js";import"./index-8d47fad6.js";import"./index-83d45a88.js";import"./index-2801d3c9.js";import"./index-80d1ff56.js";import"./index-4e494c8c.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-6978bea8.js";import"./index-e6fc3cfe.js";const O={title:"molecules/Pagination",component:n,decorators:[r=>e.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:e.jsx(r,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503,displayedCount:9}},t={render:r=>{const[s,p]=m.useState(r.currentPage);return e.jsxs(e.Fragment,{children:[e.jsx(n,{...r,currentPage:s,onChange:p}),e.jsx(n,{...r,displayedCount:r.displayedCount,currentPage:void 0,loading:!0})]})}};var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <Pagination {...args} displayedCount={args.displayedCount} currentPage={undefined} loading />
      </>;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,O as default};
//# sourceMappingURL=index.stories-9e9f7b59.js.map
