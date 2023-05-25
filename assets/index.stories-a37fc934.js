import{j as e}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import"./index-e3b5ba34.js";import"./index-64131664.js";import{u as O,F as M}from"./index-21cc8640.js";import"./index-7de20644.js";import{B as m}from"./index-1f9ff373.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-fff92b81.js";import"./useTypography-0e7bc425.js";import"./index-8c4fe83c.js";import"./index-1fc0ca9a.js";import"./index-e5314f3d.js";import"./index-b3577b86.js";import"./index-a622c86c.js";import"./index-3e179838.js";import"./index-47d8ffac.js";import"./index-2bfb62af.js";import"./isObject-3c28966c.js";import"./index-a0964943.js";const k="_closing_mqitk_473",d={"drawer-modal-container-right":"_drawer-modal-container-right_mqitk_461","slide-in-right":"_slide-in-right_mqitk_1",closing:k,"slide-out-right":"_slide-out-right_mqitk_1","drawer-modal-container-left":"_drawer-modal-container-left_mqitk_478","slide-in-left":"_slide-in-left_mqitk_1","slide-out-left":"_slide-out-left_mqitk_1","drawer-modal-header":"_drawer-modal-header_mqitk_495","drawer-modal-body":"_drawer-modal-body_mqitk_502","drawer-modal-footer":"_drawer-modal-footer_mqitk_508","fade-in":"_fade-in_mqitk_1","fade-out":"_fade-out_mqitk_1","shake-horizontal":"_shake-horizontal_mqitk_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_mqitk_1","slide-in-fwd-center":"_slide-in-fwd-center_mqitk_1","scale-in-center":"_scale-in-center_mqitk_1","scale-in-top":"_scale-in-top_mqitk_1","scale-out-top":"_scale-out-top_mqitk_1","swing-in-top-fwd":"_swing-in-top-fwd_mqitk_1","fade-in-top":"_fade-in-top_mqitk_1","fade-out-top":"_fade-out-top_mqitk_1","fade-in-bottom":"_fade-in-bottom_mqitk_1","fade-out-bottom":"_fade-out-bottom_mqitk_1","scale-out-horizontal":"_scale-out-horizontal_mqitk_1"},x=c.createContext(void 0),j=({children:r,className:o,opened:a=!1,onClose:n,direction:i="right"})=>{const[p]=O(a,250),g=p==="closing";return e.jsx(M,{onClick:()=>{n==null||n()},focused:a,priority:1,children:p?e.jsx("article",{className:`${d[`drawer-modal-container-${i}`]}
          ${g&&d.closing} ${o}`,children:e.jsx(x.Provider,{value:n,children:r})}):null})},q=({children:r,className:o})=>e.jsx("header",{className:`${d["drawer-modal-header"]} ${o}`,children:r}),y=({children:r,className:o})=>e.jsx("section",{className:`${d["drawer-modal-body"]} ${o}`,children:r}),B=({children:r,className:o})=>e.jsx("footer",{className:`${d["drawer-modal-footer"]} ${o}`,children:r}),t=Object.assign(j,{Header:q,Body:y,Footer:B});try{t.displayName="DrawerModal",t.__docgenInfo={description:"",displayName:"DrawerModal",props:{opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},direction:{defaultValue:{value:"right"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const K={title:"organisms/DrawerModal",component:t,decorators:[r=>e.jsx("div",{style:{transform:"scale(1)",display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",height:"100vh",width:"100%"},children:e.jsx(r,{})})]},s={render:r=>{const[o,a]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:()=>{a(!0)},children:"Open"}),e.jsxs(t,{...r,opened:o,onClose:()=>{a(!1)},children:[e.jsx(t.Header,{children:"HEADER"}),e.jsx(t.Body,{children:"BODY"}),e.jsx(t.Footer,{children:"FOOTER"})]})]})}},l={render:r=>{const[o,a]=c.useState(!1),[n,i]=c.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(m,{onClick:()=>{a(!0)},children:"From Left"}),e.jsx(m,{onClick:()=>{i(!0)},children:"From Right"}),e.jsxs(t,{...r,opened:o,onClose:()=>{a(!1)},direction:"left",children:[e.jsx(t.Header,{children:"HEADER"}),e.jsx(t.Body,{children:"BODY"}),e.jsx(t.Footer,{children:"FOOTER"})]}),e.jsxs(t,{...r,opened:n,onClose:()=>{i(!1)},direction:"right",children:[e.jsx(t.Header,{children:"HEADER"}),e.jsx(t.Body,{children:"BODY"}),e.jsx(t.Footer,{children:"FOOTER"})]})]})}};var _,u,f;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var w,h,D;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(h=l.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};const Q=["Default","Direction"];export{s as Default,l as Direction,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=index.stories-a37fc934.js.map
