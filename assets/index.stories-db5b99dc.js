import{j as e}from"./jsx-runtime-4ca860c5.js";import{r}from"./index-61bf1805.js";import"./index-cd7d90f5.js";import{F as t}from"./index-bdfb1b85.js";import{X as x}from"./x-06d309c3.js";import{B as o}from"./index-a349bf6d.js";import"./_commonjsHelpers-de833af9.js";import"./index-4b7032fd.js";import"./Compatibility-d1e3055b.js";import"./useValidate-96c4a95a.js";import"./cleanClassName-cdc1ff81.js";import"./index-e2c25b74.js";import"./index-8d47fad6.js";import"./index-3bb59990.js";import"./index-2801d3c9.js";import"./index-8410397f.js";import"./index-a0ef5c92.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-dab0b7e2.js";import"./index-e6fc3cfe.js";const E={title:"organisms/FloatingModal",component:t,decorators:[n=>e.jsx("div",{style:{height:"600px",width:"100%"},children:e.jsx(n,{})})]},i={render:n=>{const[a,l]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>{l(!0)},children:"open floating modal"}),e.jsxs(t,{...n,opened:a,onClose:()=>l(!1),children:[e.jsx(t.Body,{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"3px",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center",paddingRight:"24px"},children:"리스트1"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"16px",padding:"0 24px"},children:[e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트2"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트3"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트4"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트5"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트6"})]})]})}),e.jsx(t.Tail,{children:e.jsx("div",{style:{display:"flex",alignSelf:"center"},children:e.jsx(o,{icon:e.jsx(x,{}),theme:"bluish-gray700/0",size:"small3x",onClick:()=>{l(!1)}})})})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
              <Button icon={<X />} theme="bluish-gray700/0" size="small3x" onClick={() => {
              setOpen(false);
            }} />
            </div>
          </FloatingModal.Tail>
        </FloatingModal>
      </>;
  }
}`,...(d=(s=i.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const R=["Default"];export{i as Default,R as __namedExportsOrder,E as default};
//# sourceMappingURL=index.stories-db5b99dc.js.map
