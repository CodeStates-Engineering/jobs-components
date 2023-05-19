import{j as e}from"./jsx-runtime-94f6e698.js";import{M as n}from"./index-a5a2e318.js";import{c as m}from"./index-64131664.js";import"./index-bf1e8e0b.js";import{B as d}from"./index-12b19a9d.js";import{a as _,b as f}from"./index-11ff5a16.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-3da40caf.js";import"./index-0f7f7253.js";import"./useComponentSelfState-dbdc13dc.js";import"./index-e3b5ba34.js";import"./useValidation-c7011735.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./index-82c4d97d.js";import"./index-fc2f7366.js";import"./index-61379bb2.js";import"./index-2393d075.js";import"./index-9b80c96d.js";import"./index-6fa10709.js";import"./index-dfb347d1.js";import"./index-3adb89db.js";import"./index-470cb247.js";import"./index-80e714bc.js";import"./index-f809112e.js";import"./index-4a0c3ef8.js";import"./index-1b82c0cc.js";import"./index-894d9d39.js";import"./PartnerAccordion-a8821b82.js";import"./index-84b059b4.js";import"./index-a8660a1c.js";import"./index-1c2958d4.js";import"./isObject-3c28966c.js";import"./index-734cfbd1.js";import"./useTypography-0e7bc425.js";import"./index-bb6046a9.js";import"./index-71e7a600.js";const h="_footer_1uhzz_425",o={"confirm-modal":"_confirm-modal_1uhzz_413","confirm-body":"_confirm-body_1uhzz_417","confirm-button":"_confirm-button_1uhzz_421",footer:h,"confirm-header":"_confirm-header_1uhzz_431","fade-in":"_fade-in_1uhzz_1","fade-out":"_fade-out_1uhzz_1","shake-horizontal":"_shake-horizontal_1uhzz_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1uhzz_1","slide-in-fwd-center":"_slide-in-fwd-center_1uhzz_1","scale-in-center":"_scale-in-center_1uhzz_1","slide-in-right":"_slide-in-right_1uhzz_1","slide-out-right":"_slide-out-right_1uhzz_1","scale-in-top":"_scale-in-top_1uhzz_1","scale-out-top":"_scale-out-top_1uhzz_1","swing-in-top-fwd":"_swing-in-top-fwd_1uhzz_1","fade-in-top":"_fade-in-top_1uhzz_1","fade-out-top":"_fade-out-top_1uhzz_1","fade-in-bottom":"_fade-in-bottom_1uhzz_1","fade-out-bottom":"_fade-out-bottom_1uhzz_1","scale-out-horizontal":"_scale-out-horizontal_1uhzz_1"},s=({children:r,className:i,confirmButtonProps:t,...p})=>e.jsxs(n,{...p,className:m(`${o["confirm-modal"]} ${i}`),children:[e.jsx(n.Header,{className:o["confirm-header"]}),e.jsx(n.Body,{className:o["confirm-body"],children:r}),e.jsx(n.Footer,{border:!1,className:o.footer,children:e.jsx(d,{...t,className:m(`${o["confirm-button"]} ${t==null?void 0:t.className}`)})})]});try{s.displayName="ConfirmModal",s.__docgenInfo={description:"",displayName:"ConfirmModal",props:{confirmButtonProps:{defaultValue:null,description:"",name:"confirmButtonProps",required:!1,type:{name:"ButtonProps"}},opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const z=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
consectetur vulputate ultrices. Proin vestibulum velit et ornare lacinia.
Sed consequat, enim quis mollis ultrices, sem diam pulvinar ligula,
suscipit laoreet leo tellus et urna. Aliquam cursus justo vitae
scelerisque egestas. Praesent hendrerit pharetra purus, at elementum
tortor facilisis a. Ut placerat, ex eu iaculis scelerisque, odio ante
rutrum lorem, id tincidunt enim augue sed felis. In ante metus, dignissim
non est nec, ultrices pulvinar est. Fusce ac accumsan turpis, eget
fermentum augue.`,oe={title:"organisms/Modal/ConfirmModal",component:s},a={render:r=>{const i=_(),{search:t}=f();return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>{i("/?tab=1")},children:"Open"}),e.jsx(s,{...r,opened:t.includes("?tab="),onClose:()=>i("/"),confirmButtonProps:{children:"Confirm"},children:z})]})}};var l,u,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const re=["Default"];export{a as Default,re as __namedExportsOrder,oe as default};
//# sourceMappingURL=ConfirmModal.stories-92557fa7.js.map
