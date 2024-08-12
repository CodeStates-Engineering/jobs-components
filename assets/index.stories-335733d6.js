import{j as t}from"./jsx-runtime-4ca860c5.js";import{r as f}from"./index-61bf1805.js";import"./index-2a562976.js";import"./index-941b702b.js";import{F as l}from"./index-1048daa9.js";import{X as u}from"./x-06d309c3.js";import{B as c}from"./index-02ad315e.js";import"./_commonjsHelpers-de833af9.js";import"./index-8ad9169b.js";import"./Compatibility-d1e3055b.js";import"./useValidate-f9eb9d2a.js";import"./cleanClassName-cdc1ff81.js";import"./index-1fa4b92a.js";import"./index-8d47fad6.js";import"./index-83d45a88.js";import"./index-2801d3c9.js";import"./index-80d1ff56.js";import"./index-4e494c8c.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-6978bea8.js";import"./index-e6fc3cfe.js";import"./index-671d789a.js";import"./useSubscribedState-0dbf1252.js";import"./_Uint8Array-cdcc5ff5.js";import"./chevron-down-2f1d20ed.js";import"./index-46493dae.js";import"./index-efbed658.js";import"./index-a63578b4.js";import"./index-d520e172.js";import"./index-d2254c29.js";import"./index-dc8ab0c9.js";import"./index-1d8ce43d.js";import"./index-fb358ecc.js";import"./index-f4efe803.js";import"./index-78c461ab.js";import"./index-7c98488d.js";import"./DUMMY-096d32b1.js";import"./index-0c72020f.js";import"./index-d6333064.js";import"./index-de342465.js";import"./index-ba596846.js";import"./index-e0a22f08.js";const i={"action-floating-modal-container":"_action-floating-modal-container_extnz_461","action-count":"_action-count_extnz_467","action-count-circle":"_action-count-circle_extnz_475","action-count-text":"_action-count-text_extnz_487","fade-in":"_fade-in_extnz_1","fade-out":"_fade-out_extnz_1","shake-horizontal":"_shake-horizontal_extnz_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_extnz_1","slide-in-fwd-center":"_slide-in-fwd-center_extnz_1","scale-in-center":"_scale-in-center_extnz_1","slide-in-right":"_slide-in-right_extnz_1","slide-in-left":"_slide-in-left_extnz_1","slide-out-right":"_slide-out-right_extnz_1","slide-out-left":"_slide-out-left_extnz_1","scale-in-top":"_scale-in-top_extnz_1","scale-out-top":"_scale-out-top_extnz_1","swing-in-top-fwd":"_swing-in-top-fwd_extnz_1","fade-in-top":"_fade-in-top_extnz_1","fade-out-top":"_fade-out-top_extnz_1","fade-in-bottom":"_fade-in-bottom_extnz_1","fade-out-bottom":"_fade-out-bottom_extnz_1","scale-out-horizontal":"_scale-out-horizontal_extnz_1"},a=({count:e=0,opened:r,onClose:n,children:m,className:_,priority:x=3})=>t.jsxs(l,{opened:r,className:_,priority:x,children:[t.jsx(l.Body,{children:t.jsxs("div",{className:i["action-floating-modal-container"],children:[t.jsxs("div",{className:i["action-count"],children:[t.jsx("span",{className:i["action-count-circle"],children:e})," ",t.jsx("span",{className:i["action-count-text"],children:"선택됨"})]}),m]})}),t.jsx(l.Tail,{children:t.jsx("div",{style:{display:"flex",alignSelf:"center"},children:t.jsx(c,{icon:t.jsx(u,{}),variant:"ghost",color:"bluishGray700",size:"small3x",onClick:n})})})]});try{a.displayName="FloatingActionModal",a.__docgenInfo={description:"",displayName:"FloatingActionModal",props:{count:{defaultValue:{value:"0"},description:"",name:"count",required:!1,type:{name:"number"}},opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},priority:{defaultValue:{value:"3"},description:"",name:"priority",required:!1,type:{name:"number"}}}}}catch{}const rt={title:"organisms/FloatingActionModal",component:a,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%"},children:t.jsx(e,{})})]},o={render:e=>{const[r,n]=f.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>{n(!0)},children:"open floating modal"}),t.jsx(a,{...e,opened:r,onClose:()=>n(!1),children:t.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"16px",padding:"0 24px"},children:[t.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트2"}),t.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트3"})]})})]})}};var s,d,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const lt=["Default"];export{o as Default,lt as __namedExportsOrder,rt as default};
//# sourceMappingURL=index.stories-335733d6.js.map
