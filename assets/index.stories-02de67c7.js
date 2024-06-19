import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as f}from"./index-61bf1805.js";import"./index-3b36b887.js";import"./index-054d31bc.js";import{F as l}from"./index-5178f79d.js";import{X as u}from"./x-06d309c3.js";import{B as c}from"./index-fee50081.js";import"./_commonjsHelpers-de833af9.js";import"./index-bbb79b91.js";import"./Compatibility-d1e3055b.js";import"./useValidate-983984d3.js";import"./cleanClassName-cdc1ff81.js";import"./index-868581da.js";import"./index-8d47fad6.js";import"./index-749ab209.js";import"./index-2801d3c9.js";import"./index-43870500.js";import"./index-23c7aa51.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-cde9edb5.js";import"./index-e6fc3cfe.js";import"./index-76cc602d.js";import"./useSubscribedState-9e613bb6.js";import"./_Uint8Array-c13c238b.js";import"./chevron-down-2f1d20ed.js";import"./index-81bfed03.js";import"./index-29c028bb.js";import"./index-65f55c9d.js";import"./index-392ff62b.js";import"./index-50ba2094.js";import"./index-7c894775.js";import"./index-c7f1c83e.js";import"./index-f56bded7.js";import"./index-4c73471c.js";import"./index-89790364.js";import"./index-3ac2f928.js";import"./DUMMY-096d32b1.js";import"./index-0c72020f.js";import"./index-2477eec1.js";import"./index-6b0752c0.js";import"./index-00ce3ca1.js";import"./index-101f66d2.js";const i={"action-floating-modal-container":"_action-floating-modal-container_extnz_461","action-count":"_action-count_extnz_467","action-count-circle":"_action-count-circle_extnz_475","action-count-text":"_action-count-text_extnz_487","fade-in":"_fade-in_extnz_1","fade-out":"_fade-out_extnz_1","shake-horizontal":"_shake-horizontal_extnz_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_extnz_1","slide-in-fwd-center":"_slide-in-fwd-center_extnz_1","scale-in-center":"_scale-in-center_extnz_1","slide-in-right":"_slide-in-right_extnz_1","slide-in-left":"_slide-in-left_extnz_1","slide-out-right":"_slide-out-right_extnz_1","slide-out-left":"_slide-out-left_extnz_1","scale-in-top":"_scale-in-top_extnz_1","scale-out-top":"_scale-out-top_extnz_1","swing-in-top-fwd":"_swing-in-top-fwd_extnz_1","fade-in-top":"_fade-in-top_extnz_1","fade-out-top":"_fade-out-top_extnz_1","fade-in-bottom":"_fade-in-bottom_extnz_1","fade-out-bottom":"_fade-out-bottom_extnz_1","scale-out-horizontal":"_scale-out-horizontal_extnz_1"},a=({count:t=0,opened:r,onClose:n,children:m,className:_,priority:x=3})=>e.jsxs(l,{opened:r,className:_,priority:x,children:[e.jsx(l.Body,{children:e.jsxs("div",{className:i["action-floating-modal-container"],children:[e.jsxs("div",{className:i["action-count"],children:[e.jsx("span",{className:i["action-count-circle"],children:t})," ",e.jsx("span",{className:i["action-count-text"],children:"선택됨"})]}),m]})}),e.jsx(l.Tail,{children:e.jsx("div",{style:{display:"flex",alignSelf:"center"},children:e.jsx(c,{icon:e.jsx(u,{}),variant:"ghost",color:"bluishGray700",size:"small3x",onClick:n})})})]});try{a.displayName="FloatingActionModal",a.__docgenInfo={description:"",displayName:"FloatingActionModal",props:{count:{defaultValue:{value:"0"},description:"",name:"count",required:!1,type:{name:"number"}},opened:{defaultValue:null,description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},priority:{defaultValue:{value:"3"},description:"",name:"priority",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}}}catch{}const re={title:"organisms/FloatingActionModal",component:a,decorators:[t=>e.jsx("div",{style:{height:"100vh",width:"100%"},children:e.jsx(t,{})})]},o={render:t=>{const[r,n]=f.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>{n(!0)},children:"open floating modal"}),e.jsx(a,{...t,opened:r,onClose:()=>n(!1),children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"16px",padding:"0 24px"},children:[e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트2"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트3"})]})})]})}};var s,d,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const le=["Default"];export{o as Default,le as __namedExportsOrder,re as default};
//# sourceMappingURL=index.stories-02de67c7.js.map
