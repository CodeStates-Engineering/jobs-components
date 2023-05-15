import{j as e}from"./jsx-runtime-94f6e698.js";import{M as n}from"./index-1582ae27.js";import{c as m}from"./index-64131664.js";import"./index-adb8cc3f.js";import{B as u}from"./index-85fe2785.js";import{a as _,b as f}from"./index-11ff5a16.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-4d4f4826.js";import"./index-9e0a9982.js";import"./useComponentSelfState-dbdc13dc.js";import"./index-e3b5ba34.js";import"./useValidation-c7011735.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./index-f1d4be6e.js";import"./index-bc98936d.js";import"./index-8f534833.js";import"./index-6c3eb542.js";import"./index-1642b0aa.js";import"./index-7ea9d3df.js";import"./index-f799b55c.js";import"./index-ed6f2eb8.js";import"./index-03496273.js";import"./index-fc6ba388.js";import"./index-6f0f2d7c.js";import"./index-04bc15ff.js";import"./index-2a531a4b.js";import"./index-46e92ba7.js";import"./PartnerAccordion-87e57a82.js";import"./index-c1f58e43.js";import"./index-31028963.js";import"./useTypography-0e7bc425.js";import"./index-636e19d2.js";import"./index-300c5525.js";import"./isObject-3c28966c.js";const k="_footer_1k6k3_401",o={"confirm-modal":"_confirm-modal_1k6k3_389","confirm-body":"_confirm-body_1k6k3_393","confirm-button":"_confirm-button_1k6k3_397",footer:k,"confirm-header":"_confirm-header_1k6k3_407","fade-in":"_fade-in_1k6k3_1","fade-out":"_fade-out_1k6k3_1","shake-horizontal":"_shake-horizontal_1k6k3_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1k6k3_1","slide-in-fwd-center":"_slide-in-fwd-center_1k6k3_1","scale-in-center":"_scale-in-center_1k6k3_1","slide-in-right":"_slide-in-right_1k6k3_1","slide-out-right":"_slide-out-right_1k6k3_1","scale-in-top":"_scale-in-top_1k6k3_1","scale-out-top":"_scale-out-top_1k6k3_1","swing-in-top-fwd":"_swing-in-top-fwd_1k6k3_1","fade-in-top":"_fade-in-top_1k6k3_1","fade-out-top":"_fade-out-top_1k6k3_1","fade-in-bottom":"_fade-in-bottom_1k6k3_1","fade-out-bottom":"_fade-out-bottom_1k6k3_1"},s=({children:r,className:i,confirmButtonProps:t,...p})=>e.jsxs(n,{...p,className:m(`${o["confirm-modal"]} ${i}`),children:[e.jsx(n.Header,{className:o["confirm-header"]}),e.jsx(n.Body,{className:o["confirm-body"],children:r}),e.jsx(n.Footer,{border:!1,className:o.footer,children:e.jsx(u,{...t,className:m(`${o["confirm-button"]} ${t==null?void 0:t.className}`)})})]});try{s.displayName="ConfirmModal",s.__docgenInfo={description:"",displayName:"ConfirmModal",props:{confirmButtonProps:{defaultValue:null,description:"",name:"confirmButtonProps",required:!1,type:{name:"ButtonProps"}},opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const g=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
consectetur vulputate ultrices. Proin vestibulum velit et ornare lacinia.
Sed consequat, enim quis mollis ultrices, sem diam pulvinar ligula,
suscipit laoreet leo tellus et urna. Aliquam cursus justo vitae
scelerisque egestas. Praesent hendrerit pharetra purus, at elementum
tortor facilisis a. Ut placerat, ex eu iaculis scelerisque, odio ante
rutrum lorem, id tincidunt enim augue sed felis. In ante metus, dignissim
non est nec, ultrices pulvinar est. Fusce ac accumsan turpis, eget
fermentum augue.`,ee={title:"organisms/Modal/ConfirmModal",component:s},a={render:r=>{const i=_(),{search:t}=f();return e.jsxs(e.Fragment,{children:[e.jsx(u,{onClick:()=>{i("/?tab=1")},children:"Open"}),e.jsx(s,{...r,opened:t.includes("?tab="),onClose:()=>i("/"),confirmButtonProps:{children:"Confirm"},children:g})]})}};var l,c,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const navigate = useNavigate();
    const {
      search
    } = useLocation();
    return <>
        <Button onClick={() => {
        navigate('/?tab=1');
      }}>
          Open
        </Button>
        <ConfirmModal {...args} opened={search.includes('?tab=')} onClose={() => navigate('/')} confirmButtonProps={{
        children: 'Confirm'
      }}>
          {DUMMY_TEXT}
        </ConfirmModal>
      </>;
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const te=["Default"];export{a as Default,te as __namedExportsOrder,ee as default};
//# sourceMappingURL=ConfirmModal.stories-4e27e8d6.js.map
