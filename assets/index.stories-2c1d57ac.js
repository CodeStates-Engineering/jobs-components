import{j as t}from"./jsx-runtime-94f6e698.js";import{r as g}from"./index-8db94870.js";import"./index-aba45698.js";import"./index-027025cc.js";import{F as l}from"./index-1393e9cf.js";import{X as y}from"./x-59731629.js";import{B as c}from"./index-d031e8f5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-2227ea27.js";import"./Compatibility-ff615e1c.js";import"./useValidate-395f5a50.js";import"./cleanClassName-cdc1ff81.js";import"./index-2e847129.js";import"./index-1fc0ca9a.js";import"./index-57b7e407.js";import"./index-8ce4a492.js";import"./index-ba37fc5c.js";import"./index-af309d3e.js";import"./index-e29dd81e.js";import"./index-a7ebed86.js";import"./index-b4d668c6.js";import"./isObject-5520b7e1.js";import"./index-0aca656c.js";import"./index-62f0d789.js";import"./useSubscribedState-2a2df46b.js";import"./_Uint8Array-d55c0654.js";import"./chevron-down-735b3f0e.js";import"./index-6cdda059.js";import"./index-c2d6c21b.js";import"./index-ecd7c790.js";import"./index-01487e3d.js";import"./index-8f440caa.js";import"./index-5a9664e2.js";import"./index-8edad335.js";import"./index-07290542.js";import"./index-a7db9f82.js";import"./index-a5e818db.js";import"./index-ee167643.js";import"./DUMMY-096d32b1.js";import"./index-d384cd4d.js";import"./index-15f2aee2.js";import"./index-1999eeb3.js";import"./index-35941e36.js";import"./index-ed6dd368.js";const o={"action-floating-modal-container":"_action-floating-modal-container_ywg5y_461","action-count":"_action-count_ywg5y_467","action-count-circle":"_action-count-circle_ywg5y_475","action-count-text":"_action-count-text_ywg5y_487","fade-in":"_fade-in_ywg5y_1","fade-out":"_fade-out_ywg5y_1","shake-horizontal":"_shake-horizontal_ywg5y_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_ywg5y_1","slide-in-fwd-center":"_slide-in-fwd-center_ywg5y_1","scale-in-center":"_scale-in-center_ywg5y_1","slide-in-right":"_slide-in-right_ywg5y_1","slide-in-left":"_slide-in-left_ywg5y_1","slide-out-right":"_slide-out-right_ywg5y_1","slide-out-left":"_slide-out-left_ywg5y_1","scale-in-top":"_scale-in-top_ywg5y_1","scale-out-top":"_scale-out-top_ywg5y_1","swing-in-top-fwd":"_swing-in-top-fwd_ywg5y_1","fade-in-top":"_fade-in-top_ywg5y_1","fade-out-top":"_fade-out-top_ywg5y_1","fade-in-bottom":"_fade-in-bottom_ywg5y_1","fade-out-bottom":"_fade-out-bottom_ywg5y_1","scale-out-horizontal":"_scale-out-horizontal_ywg5y_1"},a=({count:e=0,opened:r,onClose:n,children:m,className:_})=>t.jsxs(l,{opened:r,className:_,children:[t.jsx(l.Body,{children:t.jsxs("div",{className:o["action-floating-modal-container"],children:[t.jsxs("div",{className:o["action-count"],children:[t.jsx("span",{className:o["action-count-circle"],children:e})," ",t.jsx("span",{className:o["action-count-text"],children:"선택됨"})]}),m]})}),t.jsx(l.Tail,{children:t.jsx("div",{style:{display:"flex",alignSelf:"center"},children:t.jsx(c,{icon:t.jsx(y,{}),theme:"bluish-gray700/0",size:"small3x",onClick:n})})})]});try{a.displayName="FloatingActionModal",a.__docgenInfo={description:"",displayName:"FloatingActionModal",props:{count:{defaultValue:{value:"0"},description:"",name:"count",required:!1,type:{name:"number"}},opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const rt={title:"organisms/FloatingActionModal",component:a,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%"},children:t.jsx(e,{})})]},i={render:e=>{const[r,n]=g.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>{n(!0)},children:"open floating modal"}),t.jsx(a,{...e,opened:r,onClose:()=>n(!1),children:t.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"16px",padding:"0 24px"},children:[t.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트2"}),t.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트3"})]})})]})}};var s,d,p;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const lt=["Default"];export{i as Default,lt as __namedExportsOrder,rt as default};
//# sourceMappingURL=index.stories-2c1d57ac.js.map
