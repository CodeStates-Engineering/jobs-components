import{j as e}from"./jsx-runtime-9bc08dc0.js";import{r}from"./index-29a85313.js";import{B as o}from"./index-0df07bff.js";import"./index-8146761d.js";import"./index-1f14f509.js";import"./index-92545bc7.js";import"./index-15456ba4.js";import"./index-cf6925de.js";import"./index-26cd43b5.js";import"./index-1accccac.js";import"./index-20667a64.js";import"./index-84868488.js";import{F as t}from"./index-ae973a17.js";import{X as x}from"./x-a4e0184a.js";import"./Compatibility-31c3a9ab.js";import"./useTypographyClassName-e8640df1.js";import"./cleanClassName-cdc1ff81.js";import"./ValidationContext-b0a2edd5.js";import"./index-cefa53ee.js";import"./index-1f0ffab8.js";import"./index-e644ce29.js";import"./isObject-9c705d90.js";const R={title:"organisms/FloatingModal",component:t,decorators:[n=>e.jsx("div",{style:{height:"600px",width:"100%"},children:e.jsx(n,{})})]},i={render:n=>{const[d,l]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>{l(!0)},children:"open floating modal"}),e.jsxs(t,{...n,opened:d,onClose:()=>l(!1),children:[e.jsx(t.Body,{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"3px",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center",paddingRight:"24px"},children:"리스트1"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"16px",padding:"0 24px"},children:[e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트2"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트3"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트4"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트5"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트6"})]})]})}),e.jsx(t.Tail,{children:e.jsx("div",{style:{display:"flex",alignSelf:"center"},children:e.jsx(o,{icon:e.jsx(x,{}),variant:"ghost",color:"bluishGray700",size:"small3x",onClick:()=>{l(!1)}})})})]})]})}};var p,s,a;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => {
        setOpen(true);
      }}>
          open floating modal
        </Button>

        <FloatingModal {...args} opened={open} onClose={() => setOpen(false)}>
          <FloatingModal.Body>
            <>
              <div style={{
              padding: '3px',
              height: '10px',
              fontSize: '14px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              paddingRight: '24px'
            }}>
                리스트1
              </div>
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
                <div style={{
                padding: '3px 0',
                height: '10px',
                fontSize: '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center'
              }}>
                  리스트4
                </div>
                <div style={{
                padding: '3px 0',
                height: '10px',
                fontSize: '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center'
              }}>
                  리스트5
                </div>

                <div style={{
                padding: '3px 0',
                height: '10px',
                fontSize: '14px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center'
              }}>
                  리스트6
                </div>
              </div>
            </>
          </FloatingModal.Body>
          <FloatingModal.Tail>
            <div style={{
            display: 'flex',
            alignSelf: 'center'
          }}>
              <Button icon={<X />} variant="ghost" color="bluishGray700" size="small3x" onClick={() => {
              setOpen(false);
            }} />
            </div>
          </FloatingModal.Tail>
        </FloatingModal>
      </>;
  }
}`,...(a=(s=i.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const T=["Default"];export{i as Default,T as __namedExportsOrder,R as default};
