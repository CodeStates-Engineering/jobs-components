import{j as e}from"./jsx-runtime-94f6e698.js";import{r as m}from"./index-8db94870.js";import{P as o}from"./index-24573a42.js";import"./_commonjsHelpers-042e6b4d.js";import"./ValidationContext-e5b2e92a.js";import"./index-da69c834.js";import"./index-298b594d.js";import"./Compatibility-ff615e1c.js";import"./useValidate-c0172170.js";import"./index-d355d1b9.js";import"./index-c4a0b449.js";import"./index-1fc0ca9a.js";import"./index-deda4382.js";import"./index-8ce4a492.js";import"./index-72406ddc.js";import"./index-673633f1.js";import"./index-f159dff6.js";import"./index-72bf1363.js";import"./index-20d446cd.js";import"./isObject-9c705d90.js";import"./index-1116b26a.js";const R={title:"molecules/Pagination",component:o,decorators:[r=>e.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:e.jsx(r,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503,displayedCount:9}},t={render:r=>{const[s,p]=m.useState(r.currentPage);return e.jsxs(e.Fragment,{children:[e.jsx(o,{...r,currentPage:s,onChange:p}),e.jsx(o,{...r,displayedCount:r.displayedCount,currentPage:void 0,loading:!0})]})}};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <Pagination {...args} displayedCount={args.displayedCount} currentPage={undefined} loading />
      </>;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,R as default};
//# sourceMappingURL=index.stories-32897f17.js.map
