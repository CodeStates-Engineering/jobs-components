import{j as e}from"./jsx-runtime-94f6e698.js";import{M as n}from"./index-362c0515.js";import{c as m}from"./index-64131664.js";import"./index-30e7e290.js";import{B as d}from"./index-0a3bc302.js";import{a as _,b as f}from"./index-11ff5a16.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-6fd79508.js";import"./index-0f14026e.js";import"./useComponentSelfState-dbdc13dc.js";import"./index-e3b5ba34.js";import"./useValidation-c7011735.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./index-2cc1c834.js";import"./index-bee25875.js";import"./index-e06e8374.js";import"./index-d7ffa274.js";import"./index-24aede51.js";import"./index-58f9d34a.js";import"./index-dfb347d1.js";import"./index-3657791e.js";import"./index-f1fdfbda.js";import"./index-30e81e69.js";import"./isObject-3c28966c.js";import"./_nodeUtil-14e51ba2.js";import"./isNumber-3648e59b.js";import"./index-bb6046a9.js";import"./index-75f14641.js";import"./index-f809112e.js";import"./index-ba50ebc8.js";import"./index-1b82c0cc.js";import"./index-f529e35b.js";import"./PartnerAccordion-de30d585.js";import"./index-93856918.js";import"./x-59731629.js";import"./index-a05caf7d.js";import"./index-c96a337d.js";import"./index-4cc6ae76.js";import"./useTypography-0e7bc425.js";import"./index-71e7a600.js";const h="_footer_1uhzz_425",o={"confirm-modal":"_confirm-modal_1uhzz_413","confirm-body":"_confirm-body_1uhzz_417","confirm-button":"_confirm-button_1uhzz_421",footer:h,"confirm-header":"_confirm-header_1uhzz_431","fade-in":"_fade-in_1uhzz_1","fade-out":"_fade-out_1uhzz_1","shake-horizontal":"_shake-horizontal_1uhzz_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_1uhzz_1","slide-in-fwd-center":"_slide-in-fwd-center_1uhzz_1","scale-in-center":"_scale-in-center_1uhzz_1","slide-in-right":"_slide-in-right_1uhzz_1","slide-out-right":"_slide-out-right_1uhzz_1","scale-in-top":"_scale-in-top_1uhzz_1","scale-out-top":"_scale-out-top_1uhzz_1","swing-in-top-fwd":"_swing-in-top-fwd_1uhzz_1","fade-in-top":"_fade-in-top_1uhzz_1","fade-out-top":"_fade-out-top_1uhzz_1","fade-in-bottom":"_fade-in-bottom_1uhzz_1","fade-out-bottom":"_fade-out-bottom_1uhzz_1","scale-out-horizontal":"_scale-out-horizontal_1uhzz_1"},s=({children:r,className:i,confirmButtonProps:t,...p})=>e.jsxs(n,{...p,className:m(`${o["confirm-modal"]} ${i}`),children:[e.jsx(n.Header,{className:o["confirm-header"]}),e.jsx(n.Body,{className:o["confirm-body"],children:r}),e.jsx(n.Footer,{border:!1,className:o.footer,children:e.jsx(d,{...t,className:m(`${o["confirm-button"]} ${t==null?void 0:t.className}`)})})]});try{s.displayName="ConfirmModal",s.__docgenInfo={description:"",displayName:"ConfirmModal",props:{confirmButtonProps:{defaultValue:null,description:"",name:"confirmButtonProps",required:!1,type:{name:"ButtonProps"}},opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const z=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
consectetur vulputate ultrices. Proin vestibulum velit et ornare lacinia.
Sed consequat, enim quis mollis ultrices, sem diam pulvinar ligula,
suscipit laoreet leo tellus et urna. Aliquam cursus justo vitae
scelerisque egestas. Praesent hendrerit pharetra purus, at elementum
tortor facilisis a. Ut placerat, ex eu iaculis scelerisque, odio ante
rutrum lorem, id tincidunt enim augue sed felis. In ante metus, dignissim
non est nec, ultrices pulvinar est. Fusce ac accumsan turpis, eget
fermentum augue.`,ae={title:"organisms/Modal/ConfirmModal",component:s},a={render:r=>{const i=_(),{search:t}=f();return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>{i("/?tab=1")},children:"Open"}),e.jsx(s,{...r,opened:t.includes("?tab="),onClose:()=>i("/"),confirmButtonProps:{children:"Confirm"},children:z})]})}};var l,u,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const se=["Default"];export{a as Default,se as __namedExportsOrder,ae as default};
//# sourceMappingURL=ConfirmModal.stories-c686a685.js.map
