import{j as t}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{P as o}from"./index-8115c590.js";import"./_commonjsHelpers-042e6b4d.js";import"./createValidationStore-9cc55e44.js";import"./index-280a7a6b.js";import"./index-20ef493e.js";import"./Compatibility-ff615e1c.js";import"./useTypography-0e7bc425.js";import"./useValidationMessageDynamicHeight-c093b2ff.js";import"./index-18979c30.js";import"./index-ec85f418.js";import"./index-1fc0ca9a.js";import"./index-c9ff944a.js";import"./index-8ce4a492.js";import"./index-7ef333bc.js";import"./index-2af0e2c6.js";import"./index-ec911853.js";import"./index-0e910321.js";import"./index-95587434.js";import"./isObject-9c705d90.js";import"./index-38ade355.js";const b={title:"molecules/Pagination",component:o,decorators:[r=>t.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:t.jsx(r,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503,displayedCount:9}},e={render:r=>{const[s,p]=m.useState(r.currentPage);return t.jsxs(t.Fragment,{children:[t.jsx(o,{...r,currentPage:s,onChange:p}),t.jsx(o,{...r,displayedCount:r.displayedCount,currentPage:void 0,loading:!0})]})}};var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <Pagination {...args} displayedCount={args.displayedCount} currentPage={undefined} loading />
      </>;
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const k=["Default"];export{e as Default,k as __namedExportsOrder,b as default};
//# sourceMappingURL=index.stories-12f59de8.js.map
