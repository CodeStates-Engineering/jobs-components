import{j as e}from"./jsx-runtime-94f6e698.js";import{r}from"./index-8db94870.js";import"./index-aba45698.js";import{F as t}from"./index-1393e9cf.js";import{X as x}from"./x-59731629.js";import{B as o}from"./index-d031e8f5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-2227ea27.js";import"./Compatibility-ff615e1c.js";import"./useValidate-395f5a50.js";import"./cleanClassName-cdc1ff81.js";import"./index-2e847129.js";import"./index-1fc0ca9a.js";import"./index-57b7e407.js";import"./index-8ce4a492.js";import"./index-ba37fc5c.js";import"./index-af309d3e.js";import"./index-e29dd81e.js";import"./index-a7ebed86.js";import"./index-b4d668c6.js";import"./isObject-5520b7e1.js";import"./index-0aca656c.js";const R={title:"organisms/FloatingModal",component:t,decorators:[n=>e.jsx("div",{style:{height:"600px",width:"100%"},children:e.jsx(n,{})})]},i={render:n=>{const[a,l]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>{l(!0)},children:"open floating modal"}),e.jsxs(t,{...n,opened:a,onClose:()=>l(!1),children:[e.jsx(t.Body,{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{padding:"3px",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center",paddingRight:"24px"},children:"리스트1"}),e.jsxs("div",{style:{display:"flex",flexDirection:"row",gap:"16px",padding:"0 24px"},children:[e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트2"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트3"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트4"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트5"}),e.jsx("div",{style:{padding:"3px 0",height:"10px",fontSize:"14px",fontWeight:"600",display:"flex",alignItems:"center"},children:"리스트6"})]})]})}),e.jsx(t.Tail,{children:e.jsx("div",{style:{display:"flex",alignSelf:"center"},children:e.jsx(o,{icon:e.jsx(x,{}),theme:"bluish-gray700/0",size:"small3x",onClick:()=>{l(!1)}})})})]})]})}};var p,s,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(s=i.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const T=["Default"];export{i as Default,T as __namedExportsOrder,R as default};
//# sourceMappingURL=index.stories-3c125873.js.map
