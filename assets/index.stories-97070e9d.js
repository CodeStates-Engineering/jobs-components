import{j as e}from"./jsx-runtime-94f6e698.js";import{r as _}from"./index-8db94870.js";import{u as g}from"./useComponentSelfState-dbdc13dc.js";import"./index-e3b5ba34.js";import"./index-64131664.js";import"./index-7baa624f.js";import{P as b}from"./index-ba50ebc8.js";import{S as k}from"./index-0f14026e.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-24aede51.js";import"./useValidation-c7011735.js";import"./index-30e7e290.js";import"./index-0a3bc302.js";import"./useTypography-0e7bc425.js";import"./index-d7ffa274.js";import"./index-e06e8374.js";import"./index-1fc0ca9a.js";import"./index-2cc1c834.js";import"./index-bee25875.js";import"./index-4cc6ae76.js";import"./index-dfb347d1.js";import"./index-bb6046a9.js";import"./index-f809112e.js";import"./index-71e7a600.js";import"./isObject-3c28966c.js";import"./index-1b82c0cc.js";import"./index-58f9d34a.js";import"./index-3657791e.js";import"./index-f1fdfbda.js";import"./index-30e81e69.js";import"./_nodeUtil-14e51ba2.js";import"./isNumber-3648e59b.js";import"./index-75f14641.js";import"./index-f529e35b.js";import"./chevron-down-735b3f0e.js";import"./PartnerAccordion-de30d585.js";import"./index-93856918.js";import"./x-59731629.js";import"./index-ca255d5e.js";import"./index-c96a337d.js";const m={"back-office-pagination":"_back-office-pagination_1bpuk_413","back-office-per-page":"_back-office-per-page_1bpuk_417","fade-in":"_fade-in_1bpuk_1","fade-out":"_fade-out_1bpuk_1","shake-horizontal":"_shake-horizontal_1bpuk_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1bpuk_1","slide-in-fwd-center":"_slide-in-fwd-center_1bpuk_1","scale-in-center":"_scale-in-center_1bpuk_1","slide-in-right":"_slide-in-right_1bpuk_1","slide-out-right":"_slide-out-right_1bpuk_1","scale-in-top":"_scale-in-top_1bpuk_1","scale-out-top":"_scale-out-top_1bpuk_1","swing-in-top-fwd":"_swing-in-top-fwd_1bpuk_1","fade-in-top":"_fade-in-top_1bpuk_1","fade-out-top":"_fade-out-top_1bpuk_1","fade-in-bottom":"_fade-in-bottom_1bpuk_1","fade-out-bottom":"_fade-out-bottom_1bpuk_1","scale-out-horizontal":"_scale-out-horizontal_1bpuk_1"},i=({itemsPerPage:t,onChangeItemsPerPage:r,itemPerPageOptions:n=[10,20,30,40,50],...f})=>{const[s,p]=g(t);return e.jsxs("div",{className:m["back-office-pagination"],children:[e.jsx(b,{type:"simple",...f,itemsPerPage:s}),e.jsx(k,{size:"small",className:m["back-office-per-page"],value:s,options:n.map(a=>({label:`${a}개씩 보기`,value:a})),onChange:a=>{const u=a==null?void 0:a.value;r==null||r(u),p==null||p(u)}})]})};try{i.displayName="BackOfficePagination",i.__docgenInfo={description:"",displayName:"BackOfficePagination",props:{onChangeItemsPerPage:{defaultValue:null,description:"",name:"onChangeItemsPerPage",required:!1,type:{name:"((itemsPerPage?: number) => void)"}},itemPerPageOptions:{defaultValue:{value:"[10, 20, 30, 40, 50]"},description:"",name:"itemPerPageOptions",required:!1,type:{name:"number[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((page: number) => void)"}},itemsPerPage:{defaultValue:null,description:"",name:"itemsPerPage",required:!1,type:{name:"number"}},totalItems:{defaultValue:null,description:"",name:"totalItems",required:!1,type:{name:"number"}},currentPage:{defaultValue:null,description:"",name:"currentPage",required:!1,type:{name:"number"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}}}catch{}const oe={title:"organisms/BackOfficePagination",component:i,decorators:[t=>e.jsx("div",{style:{height:"50vh",width:"100%",padding:"20px",display:"flex",flexDirection:"column",gap:"20px"},children:e.jsx(t,{})})],args:{currentPage:1,itemsPerPage:10,totalItems:503}},o={render:t=>{const[r,n]=_.useState(t.currentPage);return e.jsxs(e.Fragment,{children:[e.jsx(i,{...t,currentPage:r,onChange:n}),e.jsx(i,{...t,currentPage:void 0,loading:!0})]})}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);
    return <>
        <BackOfficePagination {...args} currentPage={currentPage} onChange={setCurrentPage} />
        <BackOfficePagination {...args} currentPage={undefined} loading />
      </>;
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const ne=["Default"];export{o as Default,ne as __namedExportsOrder,oe as default};
//# sourceMappingURL=index.stories-97070e9d.js.map
