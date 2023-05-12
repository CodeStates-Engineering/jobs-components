import{j as e}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{P as n}from"./index-40c7080e.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-64131664.js";import"./index-a52c3ec3.js";import"./index-85fe2785.js";import"./index-e3b5ba34.js";import"./useTypography-0e7bc425.js";import"./index-6c3eb542.js";import"./index-58c7faf8.js";import"./index-1580e1df.js";import"./index-1fc0ca9a.js";import"./index-f1d4be6e.js";import"./index-bc98936d.js";import"./index-31028963.js";import"./index-f799b55c.js";import"./index-636e19d2.js";import"./index-6f0f2d7c.js";import"./index-300c5525.js";import"./isObject-3c28966c.js";import"./index-2a531a4b.js";const q={title:"molecules/Pagination",component:n},d=r=>{const[s,p]=m.useState(r.currentPage);return e.jsxs("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(n,{...r,currentPage:s,onChange:p}),e.jsx(n,{displayedCount:r.displayedCount,loading:!0})]})},t=d.bind({}),g={currentPage:1,itemsPerPage:10,totalItems:503,displayedCount:9};t.args=g;var o,i,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  return <div style={{
    height: '50vh',
    width: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
      <Pagination displayedCount={args.displayedCount} loading />
    </div>;
}`,...(a=(i=t.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const z=["Default"];export{t as Default,z as __namedExportsOrder,q as default};
//# sourceMappingURL=index.stories-3c098c0c.js.map
