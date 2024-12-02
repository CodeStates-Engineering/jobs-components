import{j as o}from"./jsx-runtime-4ca860c5.js";import{c as s}from"./cleanClassName-cdc1ff81.js";import"./index-2850307c.js";import{M as n}from"./index-f992276b.js";import{B as c}from"./index-e695366f.js";import{D as _}from"./dummy-d4c113ac.js";import{u as f,a as q}from"./index-dd447244.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-158dd3c7.js";import"./Compatibility-d1e3055b.js";import"./useValidate-6435b2ea.js";import"./index-75de0a99.js";import"./index-64ecc42f.js";import"./index-8d47fad6.js";import"./index-c939f33c.js";import"./index-2801d3c9.js";import"./index-3310871d.js";import"./index-15c354e5.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-f18d081a.js";import"./index-e6fc3cfe.js";import"./index-55891013.js";import"./index-5f1e8dec.js";import"./useSubscribedState-72aff943.js";import"./_Uint8Array-3a160173.js";import"./chevron-down-2f1d20ed.js";import"./index-1cf7fe34.js";import"./index-a81212ba.js";import"./index-ee047980.js";import"./index-b5bc63a4.js";import"./index-6a35fb3a.js";import"./index-66176fde.js";import"./x-06d309c3.js";import"./index-65b06dd1.js";import"./index-a596fea8.js";import"./index-6b8303b9.js";import"./index-0f1d64a3.js";import"./index-2d400bf2.js";import"./DUMMY-096d32b1.js";import"./index-0c72020f.js";import"./index-2a5c9f36.js";import"./index-991179d5.js";import"./index-5bff52db.js";import"./index-ed9ba498.js";import"./index-f365e597.js";const b="_footer_12qo5_473",t={"confirm-modal":"_confirm-modal_12qo5_461","confirm-body":"_confirm-body_12qo5_465","confirm-button":"_confirm-button_12qo5_469",footer:b,"confirm-header":"_confirm-header_12qo5_479","fade-in":"_fade-in_12qo5_1","fade-out":"_fade-out_12qo5_1","shake-horizontal":"_shake-horizontal_12qo5_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_12qo5_1","slide-in-fwd-center":"_slide-in-fwd-center_12qo5_1","scale-in-center":"_scale-in-center_12qo5_1","slide-in-right":"_slide-in-right_12qo5_1","slide-in-left":"_slide-in-left_12qo5_1","slide-out-right":"_slide-out-right_12qo5_1","slide-out-left":"_slide-out-left_12qo5_1","scale-in-top":"_scale-in-top_12qo5_1","scale-out-top":"_scale-out-top_12qo5_1","swing-in-top-fwd":"_swing-in-top-fwd_12qo5_1","fade-in-top":"_fade-in-top_12qo5_1","fade-out-top":"_fade-out-top_12qo5_1","fade-in-bottom":"_fade-in-bottom_12qo5_1","fade-out-bottom":"_fade-out-bottom_12qo5_1","scale-out-horizontal":"_scale-out-horizontal_12qo5_1"},l=({children:r,className:i,confirmButtonProps:e,...u})=>o.jsxs(n,{...u,className:s(`${t["confirm-modal"]} ${i}`),children:[o.jsx(n.Header,{className:t["confirm-header"]}),o.jsx(n.Body,{className:t["confirm-body"],children:r}),o.jsx(n.Footer,{border:!1,className:t.footer,children:o.jsx(c,{...e,className:s(`${t["confirm-button"]} ${e==null?void 0:e.className}`)})})]});try{l.displayName="ConfirmModal",l.__docgenInfo={description:"",displayName:"ConfirmModal",props:{confirmButtonProps:{defaultValue:null,description:"",name:"confirmButtonProps",required:!1,type:{name:"ButtonProps"}},opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},outsideClickClose:{defaultValue:null,description:"",name:"outsideClickClose",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"section"'},{value:'"form"'}]}},bodyScroll:{defaultValue:null,description:"",name:"bodyScroll",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},priority:{defaultValue:null,description:"",name:"priority",required:!1,type:{name:"number"}},blur:{defaultValue:null,description:"",name:"blur",required:!1,type:{name:"boolean"}}}}}catch{}const co={title:"organisms/ConfirmModal",component:l},a={render:r=>{const i=f(),{search:e}=q();return o.jsxs(o.Fragment,{children:[o.jsx(c,{onClick:()=>{i("/?tab=1")},children:"Open"}),o.jsx(l,{...r,opened:e.includes("?tab="),onClose:()=>i("/"),confirmButtonProps:{children:"Confirm"},children:_.COMMON.TEXT_MIDDLE})]})}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
          {DUMMY.COMMON.TEXT_MIDDLE}
        </ConfirmModal>
      </>;
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const uo=["Default"];export{a as Default,uo as __namedExportsOrder,co as default};
//# sourceMappingURL=index.stories-a9857bea.js.map