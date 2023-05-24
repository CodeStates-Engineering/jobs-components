import{j as e}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import"./index-e3b5ba34.js";import"./index-64131664.js";import{u as D,F as O}from"./index-21cc8640.js";import"./index-3b10708e.js";import{B as p}from"./index-6d56ed8f.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-a5f25849.js";import"./index-1efc3ca3.js";import"./index-1fc0ca9a.js";import"./index-692d7ac3.js";import"./index-b3577b86.js";import"./useTypography-0e7bc425.js";import"./index-a622c86c.js";import"./index-3e179838.js";import"./index-47d8ffac.js";import"./index-2bfb62af.js";import"./isObject-3c28966c.js";import"./index-a0964943.js";const M="_closing_1gjb3_473",d={"drawer-modal-container-right":"_drawer-modal-container-right_1gjb3_461","slide-in-right":"_slide-in-right_1gjb3_1",closing:M,"slide-out-right":"_slide-out-right_1gjb3_1","drawer-modal-container-left":"_drawer-modal-container-left_1gjb3_478","slide-in-left":"_slide-in-left_1gjb3_1","slide-out-left":"_slide-out-left_1gjb3_1","drawer-modal-header":"_drawer-modal-header_1gjb3_495","drawer-modal-body":"_drawer-modal-body_1gjb3_501","drawer-modal-footer":"_drawer-modal-footer_1gjb3_506","fade-in":"_fade-in_1gjb3_1","fade-out":"_fade-out_1gjb3_1","shake-horizontal":"_shake-horizontal_1gjb3_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1gjb3_1","slide-in-fwd-center":"_slide-in-fwd-center_1gjb3_1","scale-in-center":"_scale-in-center_1gjb3_1","scale-in-top":"_scale-in-top_1gjb3_1","scale-out-top":"_scale-out-top_1gjb3_1","swing-in-top-fwd":"_swing-in-top-fwd_1gjb3_1","fade-in-top":"_fade-in-top_1gjb3_1","fade-out-top":"_fade-out-top_1gjb3_1","fade-in-bottom":"_fade-in-bottom_1gjb3_1","fade-out-bottom":"_fade-out-bottom_1gjb3_1","scale-out-horizontal":"_scale-out-horizontal_1gjb3_1"},b=c.createContext(void 0),x=({children:r,className:t,opened:a=!1,onClose:n,direction:s="right"})=>{const[_]=D(a,250),j=_==="closing";return e.jsx(O,{onClick:()=>{n==null||n()},focused:a,priority:1,children:_?e.jsx("article",{className:`${d[`drawer-modal-container-${s}`]}
          ${j&&d.closing} ${t}`,children:e.jsx(b.Provider,{value:n,children:r})}):null})},y=({children:r,className:t})=>e.jsx("header",{className:`${d["drawer-modal-header"]} ${t}`,children:r}),B=({children:r,className:t})=>e.jsx("section",{className:`${d["drawer-modal-body"]} ${t}`,children:r}),F=({children:r,className:t})=>e.jsx("footer",{className:`${d["drawer-modal-footer"]} ${t}`,children:r}),o=Object.assign(x,{Header:y,Body:B,Footer:F});try{o.displayName="DrawerModal",o.__docgenInfo={description:"",displayName:"DrawerModal",props:{opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},direction:{defaultValue:{value:"right"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const K={title:"organisms/DrawerModal",component:o,decorators:[r=>e.jsx("div",{style:{transform:"scale(1)",display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",height:"100vh",width:"100%"},children:e.jsx(r,{})})]},l={render:r=>{const[t,a]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>{a(!0)},children:"Open"}),e.jsxs(o,{...r,opened:t,onClose:()=>{a(!1)},children:[e.jsx(o.Header,{children:"HEADER"}),e.jsx(o.Body,{children:"BODY"}),e.jsx(o.Footer,{children:"FOOTER"})]})]})}},i={render:r=>{const[t,a]=c.useState(!1),[n,s]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>{a(!0)},children:"From Left"}),e.jsx(p,{onClick:()=>{s(!0)},children:"From Right"}),e.jsxs(o,{...r,opened:t,onClose:()=>{a(!1)},direction:"left",children:[e.jsx(o.Header,{children:"HEADER"}),e.jsx(o.Body,{children:"BODY"}),e.jsx(o.Footer,{children:"FOOTER"})]}),e.jsxs(o,{...r,opened:n,onClose:()=>{s(!1)},direction:"right",children:[e.jsx(o.Header,{children:"HEADER"}),e.jsx(o.Body,{children:"BODY"}),e.jsx(o.Footer,{children:"FOOTER"})]})]})}};var m,u,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [opened, setOpened] = useState(false);
    return <>
        <Button onClick={() => {
        setOpened(true);
      }}>
          Open
        </Button>
        <DrawerModal {...args} opened={opened} onClose={() => {
        setOpened(false);
      }}>
          <DrawerModal.Header>HEADER</DrawerModal.Header>
          <DrawerModal.Body>BODY</DrawerModal.Body>
          <DrawerModal.Footer>FOOTER</DrawerModal.Footer>
        </DrawerModal>
      </>;
  }
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var g,w,h;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [leftOpened, setLeftOpened] = useState(false);
    const [rightOpened, setRightOpened] = useState(false);
    return <>
        <Button onClick={() => {
        setLeftOpened(true);
      }}>
          From Left
        </Button>
        <Button onClick={() => {
        setRightOpened(true);
      }}>
          From Right
        </Button>
        <DrawerModal {...args} opened={leftOpened} onClose={() => {
        setLeftOpened(false);
      }} direction="left">
          <DrawerModal.Header>HEADER</DrawerModal.Header>
          <DrawerModal.Body>BODY</DrawerModal.Body>
          <DrawerModal.Footer>FOOTER</DrawerModal.Footer>
        </DrawerModal>
        <DrawerModal {...args} opened={rightOpened} onClose={() => {
        setRightOpened(false);
      }} direction="right">
          <DrawerModal.Header>HEADER</DrawerModal.Header>
          <DrawerModal.Body>BODY</DrawerModal.Body>
          <DrawerModal.Footer>FOOTER</DrawerModal.Footer>
        </DrawerModal>
      </>;
  }
}`,...(h=(w=i.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const Q=["Default","Direction"];export{l as Default,i as Direction,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=index.stories-6de526ff.js.map
