import{j as t}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{P as o}from"./index-dee1c1e3.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-64131664.js";import"./index-e17f63f7.js";import"./index-f062656d.js";import"./index-a1ddcb1d.js";import"./index-e3b5ba34.js";import"./useTypography-0e7bc425.js";import"./index-8e918fe9.js";import"./index-61b68f43.js";import"./index-1fc0ca9a.js";import"./index-451d21b4.js";import"./index-8ce4a492.js";import"./index-52ce7348.js";import"./index-847bd6e1.js";import"./index-a622c86c.js";import"./index-47d8ffac.js";import"./index-2ef5c3bc.js";import"./isObject-9c705d90.js";import"./index-40aa4d00.js";const b={title:"molecules/Pagination",component:o,decorators:[r=>t.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:t.jsx(r,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503,displayedCount:9}},e={render:r=>{const[s,p]=m.useState(r.currentPage);return t.jsxs(t.Fragment,{children:[t.jsx(o,{...r,currentPage:s,onChange:p}),t.jsx(o,{...r,displayedCount:r.displayedCount,currentPage:void 0,loading:!0})]})}};var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <Pagination {...args} displayedCount={args.displayedCount} currentPage={undefined} loading />
      </>;
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,b as default};
//# sourceMappingURL=index.stories-030e564f.js.map
