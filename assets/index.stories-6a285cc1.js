import{j as t}from"./jsx-runtime-4ca860c5.js";import{r as g}from"./index-61bf1805.js";import"./index-74145f2a.js";import"./index-67c79c47.js";import{F as l}from"./index-4f31e023.js";import{X as y}from"./x-06d309c3.js";import{B as c}from"./index-d2ec6a27.js";import"./_commonjsHelpers-de833af9.js";import"./index-ea5f1602.js";import"./Compatibility-d1e3055b.js";import"./useValidate-d7ad1bb5.js";import"./cleanClassName-cdc1ff81.js";import"./index-4c710db6.js";import"./index-8d47fad6.js";import"./index-686a01cd.js";import"./index-2801d3c9.js";import"./index-6d48dfed.js";import"./index-98e9e194.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-6b889a79.js";import"./index-e6fc3cfe.js";import"./index-c6df60b2.js";import"./useSubscribedState-69931769.js";import"./_Uint8Array-2fa34c3f.js";import"./chevron-down-2f1d20ed.js";import"./index-915bd99e.js";import"./index-3677834b.js";import"./index-d59d9fb9.js";import"./index-fd87ba56.js";import"./index-643e4463.js";import"./index-72c9eae5.js";import"./index-005c2451.js";import"./index-a03a44f7.js";import"./index-32f42b09.js";import"./index-e9b52bf2.js";import"./index-58d9275d.js";import"./DUMMY-096d32b1.js";import"./index-0c72020f.js";import"./index-83e2ad0b.js";import"./index-68d20dde.js";import"./index-b3638642.js";import"./index-c31d0e0d.js";const o={"action-floating-modal-container":"_action-floating-modal-container_ywg5y_461","action-count":"_action-count_ywg5y_467","action-count-circle":"_action-count-circle_ywg5y_475","action-count-text":"_action-count-text_ywg5y_487","fade-in":"_fade-in_ywg5y_1","fade-out":"_fade-out_ywg5y_1","shake-horizontal":"_shake-horizontal_ywg5y_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_ywg5y_1","slide-in-fwd-center":"_slide-in-fwd-center_ywg5y_1","scale-in-center":"_scale-in-center_ywg5y_1","slide-in-right":"_slide-in-right_ywg5y_1","slide-in-left":"_slide-in-left_ywg5y_1","slide-out-right":"_slide-out-right_ywg5y_1","slide-out-left":"_slide-out-left_ywg5y_1","scale-in-top":"_scale-in-top_ywg5y_1","scale-out-top":"_scale-out-top_ywg5y_1","swing-in-top-fwd":"_swing-in-top-fwd_ywg5y_1","fade-in-top":"_fade-in-top_ywg5y_1","fade-out-top":"_fade-out-top_ywg5y_1","fade-in-bottom":"_fade-in-bottom_ywg5y_1","fade-out-bottom":"_fade-out-bottom_ywg5y_1","scale-out-horizontal":"_scale-out-horizontal_ywg5y_1"},a=({count:e=0,opened:r,onClose:n,children:m,className:_})=>t.jsxs(l,{opened:r,className:_,children:[t.jsx(l.Body,{children:t.jsxs("div",{className:o["action-floating-modal-container"],children:[t.jsxs("div",{className:o["action-count"],children:[t.jsx("span",{className:o["action-count-circle"],children:e})," ",t.jsx("span",{className:o["action-count-text"],children:"선택됨"})]}),m]})}),t.jsx(l.Tail,{children:t.jsx("div",{style:{display:"flex",alignSelf:"center"},children:t.jsx(c,{icon:t.jsx(y,{}),theme:"bluish-gray700/0",size:"small3x",onClick:n})})})]});try{a.displayName="FloatingActionModal",a.__docgenInfo={description:"",displayName:"FloatingActionModal",props:{count:{defaultValue:{value:"0"},description:"",name:"count",required:!1,type:{name:"number"}},opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const at={title:"organisms/FloatingActionModal",component:a,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%"},children:t.jsx(e,{})})]},i={render:e=>{const[r,n]=g.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>{n(!0)},children:"open floating modal"}),t.jsx(a,{...e,opened:r,onClose:()=>n(!1),children:t.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"16px",padding:"0 24px"},children:[t.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트2"}),t.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트3"})]})})]})}};var s,d,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [opened, setOpened] = useState(false);
    return <>
        <Button onClick={() => {
        setOpened(true);
      }}>
          open floating modal
        </Button>

        <FloatingActionModal {...args} opened={opened} onClose={() => setOpened(false)}>
          <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '16px',
          padding: '0 24px'
        }}>
            <div style={{
            padding: '3px 0',
            height: '10px',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center'
          }}>
              리스트2
            </div>
            <div style={{
            padding: '3px 0',
            height: '10px',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center'
          }}>
              리스트3
            </div>
          </div>
        </FloatingActionModal>
      </>;
  }
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const rt=["Default"];export{i as Default,rt as __namedExportsOrder,at as default};
//# sourceMappingURL=index.stories-6a285cc1.js.map
