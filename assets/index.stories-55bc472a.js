import{j as e}from"./jsx-runtime-94f6e698.js";import{r as y}from"./index-8db94870.js";import"./index-9cbe1128.js";import{F as s}from"./index-2fa22923.js";import{X as m}from"./x-59731629.js";import{B as p}from"./index-c720573b.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-bc6a96dd.js";import"./Compatibility-ff615e1c.js";import"./useValidate-8b7306c6.js";import"./cleanClassName-cdc1ff81.js";import"./index-1b42ff34.js";import"./index-1fc0ca9a.js";import"./index-d42fc47d.js";import"./index-8ce4a492.js";import"./index-55bd2212.js";import"./index-a7447f35.js";import"./index-e29dd81e.js";import"./index-a7ebed86.js";import"./index-950b02d3.js";import"./isObject-5520b7e1.js";import"./index-0aca656c.js";const o={"action-floating-modal-container":"_action-floating-modal-container_ywg5y_461","action-count":"_action-count_ywg5y_467","action-count-circle":"_action-count-circle_ywg5y_475","action-count-text":"_action-count-text_ywg5y_487","fade-in":"_fade-in_ywg5y_1","fade-out":"_fade-out_ywg5y_1","shake-horizontal":"_shake-horizontal_ywg5y_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_ywg5y_1","slide-in-fwd-center":"_slide-in-fwd-center_ywg5y_1","scale-in-center":"_scale-in-center_ywg5y_1","slide-in-right":"_slide-in-right_ywg5y_1","slide-in-left":"_slide-in-left_ywg5y_1","slide-out-right":"_slide-out-right_ywg5y_1","slide-out-left":"_slide-out-left_ywg5y_1","scale-in-top":"_scale-in-top_ywg5y_1","scale-out-top":"_scale-out-top_ywg5y_1","swing-in-top-fwd":"_swing-in-top-fwd_ywg5y_1","fade-in-top":"_fade-in-top_ywg5y_1","fade-out-top":"_fade-out-top_ywg5y_1","fade-in-bottom":"_fade-in-bottom_ywg5y_1","fade-out-bottom":"_fade-out-bottom_ywg5y_1","scale-out-horizontal":"_scale-out-horizontal_ywg5y_1"},a=({count:t=3,opened:l,onClose:n,children:_,className:g})=>e.jsxs(s,{opened:l,className:g,children:[e.jsx(s.Body,{children:e.jsxs("div",{className:o["action-floating-modal-container"],children:[e.jsxs("div",{className:o["action-count"],children:[e.jsx("span",{className:o["action-count-circle"],children:t})," ",e.jsx("span",{className:o["action-count-text"],children:"선택됨"})]}),_]})}),e.jsx(s.Tail,{children:e.jsx("div",{style:{display:"flex",alignSelf:"center"},children:e.jsx(p,{icon:e.jsx(m,{}),theme:"bluish-gray700/0",size:"small3x",onClick:n})})})]});try{a.displayName="FloatingActionModal",a.__docgenInfo={description:"",displayName:"FloatingActionModal",props:{count:{defaultValue:{value:"3"},description:"",name:"count",required:!1,type:{name:"number"}},opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const W={title:"organisms/FloatingActionModal",component:a,decorators:[t=>e.jsx("div",{style:{height:"100vh",width:"100%"},children:e.jsx(t,{})})]},i={render:t=>{const[l,n]=y.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(p,{onClick:()=>{n(!0)},children:"open floating modal"}),e.jsx(a,{...t,opened:l,onClose:()=>n(!1),children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"16px",padding:"0 24px"},children:[e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트2"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트3"})]})})]})}};var r,d,c;i.parameters={...i.parameters,docs:{...(r=i.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const E=["Default"];export{i as Default,E as __namedExportsOrder,W as default};
//# sourceMappingURL=index.stories-55bc472a.js.map
