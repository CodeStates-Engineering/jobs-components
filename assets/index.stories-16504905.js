import{j as e}from"./jsx-runtime-4ca860c5.js";import{r}from"./index-61bf1805.js";import"./index-1d18391c.js";import{F as t}from"./index-48b47564.js";import{X as x}from"./x-06d309c3.js";import{B as o}from"./index-e0536556.js";import"./_commonjsHelpers-de833af9.js";import"./index-13e72dae.js";import"./Compatibility-d1e3055b.js";import"./useValidate-106f24a1.js";import"./cleanClassName-cdc1ff81.js";import"./index-3892311a.js";import"./index-8d47fad6.js";import"./index-e3c86386.js";import"./index-2801d3c9.js";import"./index-4946e466.js";import"./index-83dd4a0f.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-ea965280.js";import"./index-e6fc3cfe.js";const E={title:"organisms/FloatingModal",component:t,decorators:[n=>e.jsx("div",{style:{height:"600px",width:"100%"},children:e.jsx(n,{})})]},i={render:n=>{const[d,l]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>{l(!0)},children:"open floating modal"}),e.jsxs(t,{...n,opened:d,onClose:()=>l(!1),children:[e.jsx(t.Body,{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"3px",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center",paddingRight:"24px"},children:"리스트1"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"16px",padding:"0 24px"},children:[e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트2"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트3"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트4"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트5"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트6"})]})]})}),e.jsx(t.Tail,{children:e.jsx("div",{style:{display:"flex",alignSelf:"center"},children:e.jsx(o,{icon:e.jsx(x,{}),variant:"ghost",color:"bluishGray700",size:"small3x",onClick:()=>{l(!1)}})})})]})]})}};var p,s,a;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(a=(s=i.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const R=["Default"];export{i as Default,R as __namedExportsOrder,E as default};
//# sourceMappingURL=index.stories-16504905.js.map