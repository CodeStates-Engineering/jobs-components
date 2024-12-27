import{j as e}from"./jsx-runtime-9bc08dc0.js";import{r as m}from"./index-29a85313.js";import{P as o}from"./index-0f73428f.js";import"./index-cefa53ee.js";import"./index-0df07bff.js";import"./Compatibility-31c3a9ab.js";import"./useTypographyClassName-e8640df1.js";import"./cleanClassName-cdc1ff81.js";import"./ValidationContext-b0a2edd5.js";import"./index-8146761d.js";import"./index-1f14f509.js";import"./index-1f0ffab8.js";import"./index-92545bc7.js";import"./index-e644ce29.js";import"./index-15456ba4.js";import"./index-cf6925de.js";import"./index-26cd43b5.js";import"./index-1accccac.js";import"./index-20667a64.js";import"./isObject-9c705d90.js";import"./index-84868488.js";const O={title:"molecules/Pagination",component:o,decorators:[r=>e.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:e.jsx(r,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503,displayedCount:9,size:"medium"}},t={render:r=>{const[s,p]=m.useState(r.currentPage);return e.jsxs(e.Fragment,{children:[e.jsx(o,{...r,currentPage:s,onChange:p}),e.jsx(o,{...r,displayedCount:r.displayedCount,currentPage:void 0,loading:!0})]})}};var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <Pagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <Pagination {...args} displayedCount={args.displayedCount} currentPage={undefined} loading />
      </>;
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,O as default};
