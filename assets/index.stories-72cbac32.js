import{j as t}from"./jsx-runtime-9bc08dc0.js";import{r as f}from"./index-29a85313.js";import{B as c}from"./index-0df07bff.js";import"./index-8146761d.js";import"./index-1f14f509.js";import"./index-92545bc7.js";import"./index-15456ba4.js";import"./index-cf6925de.js";import"./index-26cd43b5.js";import"./index-1accccac.js";import"./index-20667a64.js";import"./index-84868488.js";import"./index-16c5f01a.js";import"./index-63b4897c.js";import"./index-259baffc.js";import"./index-673a817b.js";import"./index-01c78001.js";import"./index-9d7f2b4c.js";import"./index-bea0b9dd.js";import"./index-0f73428f.js";import"./index-2527f996.js";import"./index-26b5651c.js";import"./index-c5e25c0c.js";import"./index-0e3039e4.js";import"./index-ed7350e6.js";import"./index-95f72cee.js";import"./index-d0637553.js";import"./index-38a24daf.js";import{F as a}from"./index-ae973a17.js";import{X as u}from"./x-a4e0184a.js";import"./Compatibility-31c3a9ab.js";import"./useTypographyClassName-e8640df1.js";import"./cleanClassName-cdc1ff81.js";import"./ValidationContext-b0a2edd5.js";import"./index-cefa53ee.js";import"./index-1f0ffab8.js";import"./index-e644ce29.js";import"./isObject-9c705d90.js";import"./useValidationMessage-243d7212.js";import"./useSubscribedState-3b03a615.js";import"./_Uint8Array-ad07ee63.js";import"./chevron-down-5b615074.js";import"./DUMMY-096d32b1.js";import"./index-eb294396.js";const i={"action-floating-modal-container":"_action-floating-modal-container_extnz_461","action-count":"_action-count_extnz_467","action-count-circle":"_action-count-circle_extnz_475","action-count-text":"_action-count-text_extnz_487","fade-in":"_fade-in_extnz_1","fade-out":"_fade-out_extnz_1","shake-horizontal":"_shake-horizontal_extnz_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_extnz_1","slide-in-fwd-center":"_slide-in-fwd-center_extnz_1","scale-in-center":"_scale-in-center_extnz_1","slide-in-right":"_slide-in-right_extnz_1","slide-in-left":"_slide-in-left_extnz_1","slide-out-right":"_slide-out-right_extnz_1","slide-out-left":"_slide-out-left_extnz_1","scale-in-top":"_scale-in-top_extnz_1","scale-out-top":"_scale-out-top_extnz_1","swing-in-top-fwd":"_swing-in-top-fwd_extnz_1","fade-in-top":"_fade-in-top_extnz_1","fade-out-top":"_fade-out-top_extnz_1","fade-in-bottom":"_fade-in-bottom_extnz_1","fade-out-bottom":"_fade-out-bottom_extnz_1","scale-out-horizontal":"_scale-out-horizontal_extnz_1"},s=({count:e=0,opened:r,onClose:n,children:m,className:x,priority:_=3})=>t.jsxs(a,{opened:r,className:x,priority:_,children:[t.jsx(a.Body,{children:t.jsxs("div",{className:i["action-floating-modal-container"],children:[t.jsxs("div",{className:i["action-count"],children:[t.jsx("span",{className:i["action-count-circle"],children:e})," ",t.jsx("span",{className:i["action-count-text"],children:"선택됨"})]}),m]})}),t.jsx(a.Tail,{children:t.jsx("div",{style:{display:"flex",alignSelf:"center"},children:t.jsx(c,{icon:t.jsx(u,{}),variant:"ghost",color:"bluishGray700",size:"small3x",onClick:n})})})]});s.__docgenInfo={description:"",methods:[],displayName:"FloatingActionModal",props:{children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},count:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},opened:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},priority:{defaultValue:{value:"3",computed:!1},required:!1}},composes:["Pick"]};const st={title:"organisms/FloatingActionModal",component:s,decorators:[e=>t.jsx("div",{style:{height:"100vh",width:"100%"},children:t.jsx(e,{})})]},o={render:e=>{const[r,n]=f.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx(c,{onClick:()=>{n(!0)},children:"open floating modal"}),t.jsx(s,{...e,opened:r,onClose:()=>n(!1),children:t.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"16px",padding:"0 24px"},children:[t.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트2"}),t.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트3"})]})})]})}};var l,d,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const lt=["Default"];export{o as Default,lt as __namedExportsOrder,st as default};
