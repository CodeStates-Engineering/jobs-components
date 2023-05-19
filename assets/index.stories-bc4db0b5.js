import{j as r}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{P as o}from"./index-42cb8a3c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-64131664.js";import"./index-61e499c3.js";import"./index-85fe2785.js";import"./index-e3b5ba34.js";import"./useTypography-0e7bc425.js";import"./index-6c3eb542.js";import"./index-8f534833.js";import"./index-1fc0ca9a.js";import"./index-f1d4be6e.js";import"./index-bc98936d.js";import"./index-31028963.js";import"./index-f799b55c.js";import"./index-636e19d2.js";import"./index-6f0f2d7c.js";import"./index-300c5525.js";import"./isObject-3c28966c.js";import"./index-2a531a4b.js";import"./index-fb8131f8.js";const b={title:"molecules/Pagination",component:o,decorators:[t=>r.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:r.jsx(t,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503,displayedCount:9}},e={render:t=>{const[s,p]=m.useState(t.currentPage);return r.jsxs(r.Fragment,{children:[r.jsx(o,{...t,currentPage:s,onChange:p}),r.jsx(o,{displayedCount:t.displayedCount,loading:!0})]})}};var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <Pagination displayedCount={args.displayedCount} loading />
      </>;
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,b as default};
//# sourceMappingURL=index.stories-bc4db0b5.js.map
