import{j as r}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{P as o}from"./index-47f02e2d.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-64131664.js";import"./index-d3d8bcd6.js";import"./index-b17e5302.js";import"./index-e3b5ba34.js";import"./useTypography-0e7bc425.js";import"./index-2393d075.js";import"./index-61379bb2.js";import"./index-1fc0ca9a.js";import"./index-82c4d97d.js";import"./index-fc2f7366.js";import"./index-9ed5f40c.js";import"./index-dfb347d1.js";import"./index-bb6046a9.js";import"./index-f809112e.js";import"./index-71e7a600.js";import"./isObject-3c28966c.js";import"./index-1b82c0cc.js";const R={title:"molecules/Pagination",component:o,decorators:[t=>r.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:r.jsx(t,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503,displayedCount:9}},e={render:t=>{const[s,p]=m.useState(t.currentPage);return r.jsxs(r.Fragment,{children:[r.jsx(o,{...t,currentPage:s,onChange:p}),r.jsx(o,{displayedCount:t.displayedCount,loading:!0})]})}};var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <Pagination displayedCount={args.displayedCount} loading />
      </>;
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,R as default};
//# sourceMappingURL=index.stories-1a15c3db.js.map
