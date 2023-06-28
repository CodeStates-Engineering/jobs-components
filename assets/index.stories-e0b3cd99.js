import{j as e}from"./jsx-runtime-94f6e698.js";import{r as u,R as m}from"./index-8db94870.js";import{u as A,F as v}from"./index-e3f83235.js";import"./useValidationMessage-20be1c63.js";import"./Compatibility-ff615e1c.js";import"./ValidationContext-e5b2e92a.js";import"./index-673237c3.js";import{D as F}from"./dummy-d4c113ac.js";import"./index-e6e29b33.js";import{T as p}from"./index-6c5e95fc.js";import{C as R}from"./index-94e6dc8c.js";import{P as f}from"./index-1fc0ca9a.js";import{B as c}from"./index-16894b48.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./index-4a400540.js";import"./index-19ea5d71.js";import"./index-2489ea6f.js";import"./index-00fef108.js";import"./index-f159dff6.js";import"./index-72bf1363.js";import"./index-636d64e1.js";import"./isObject-9c705d90.js";import"./index-1116b26a.js";import"./index-6af4fdd7.js";import"./useSubscribedState-c6f4ee9b.js";import"./_Uint8Array-6bb687c3.js";import"./chevron-down-735b3f0e.js";import"./index-46498d9c.js";import"./index-aced0f5a.js";import"./index-03cbd459.js";import"./index-f93cf48f.js";import"./index-6f40d121.js";import"./index-4e8e380e.js";import"./x-59731629.js";import"./index-4b9440e4.js";import"./index-8b6e1477.js";import"./index-dc07d1df.js";import"./index-e40c1e4a.js";import"./index-f9704b53.js";import"./index-297df758.js";import"./index-d384cd4d.js";function L(){return L=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a])}return r},L.apply(this,arguments)}function U(r,t){if(r==null)return{};var o=$(r,t),a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(o[a]=r[a])}return o}function $(r,t){if(r==null)return{};var o={},a=Object.keys(r),n,i;for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&(o[n]=r[n]);return o}var g=u.forwardRef(function(r,t){var o=r.color,a=o===void 0?"currentColor":o,n=r.size,i=n===void 0?24:n,d=U(r,["color","size"]);return m.createElement("svg",L({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),m.createElement("circle",{cx:"12",cy:"12",r:"1"}),m.createElement("circle",{cx:"19",cy:"12",r:"1"}),m.createElement("circle",{cx:"5",cy:"12",r:"1"}))});g.propTypes={color:f.string,size:f.oneOfType([f.string,f.number])};g.displayName="MoreHorizontal";const H=g,I="_closing_dxb8u_473",_={"drawer-modal-container-right":"_drawer-modal-container-right_dxb8u_461","slide-in-right":"_slide-in-right_dxb8u_1",closing:I,"slide-out-right":"_slide-out-right_dxb8u_1","drawer-modal-container-left":"_drawer-modal-container-left_dxb8u_478","slide-in-left":"_slide-in-left_dxb8u_1","slide-out-left":"_slide-out-left_dxb8u_1","drawer-modal-header":"_drawer-modal-header_dxb8u_495","drawer-modal-body":"_drawer-modal-body_dxb8u_501","drawer-modal-footer":"_drawer-modal-footer_dxb8u_508","fade-in":"_fade-in_dxb8u_1","fade-out":"_fade-out_dxb8u_1","shake-horizontal":"_shake-horizontal_dxb8u_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_dxb8u_1","slide-in-fwd-center":"_slide-in-fwd-center_dxb8u_1","scale-in-center":"_scale-in-center_dxb8u_1","scale-in-top":"_scale-in-top_dxb8u_1","scale-out-top":"_scale-out-top_dxb8u_1","swing-in-top-fwd":"_swing-in-top-fwd_dxb8u_1","fade-in-top":"_fade-in-top_dxb8u_1","fade-out-top":"_fade-out-top_dxb8u_1","fade-in-bottom":"_fade-in-bottom_dxb8u_1","fade-out-bottom":"_fade-out-bottom_dxb8u_1","scale-out-horizontal":"_scale-out-horizontal_dxb8u_1"},Y=({children:r,className:t,opened:o=!1,onClose:a,direction:n="right",priority:i=1})=>{const[d]=A(o,250),w=d==="closing";return e.jsx(v,{onBlur:a,focused:o,priority:i,children:d?e.jsx("article",{className:`${_[`drawer-modal-container-${n}`]}
          ${w&&_.closing} ${t}`,children:r}):null})},k=({children:r,className:t})=>e.jsx("header",{className:`${_["drawer-modal-header"]} ${t}`,children:r}),P=({children:r,className:t})=>e.jsx("section",{className:`${_["drawer-modal-body"]} ${t}`,children:r}),z=({children:r,className:t})=>e.jsx("footer",{className:`${_["drawer-modal-footer"]} ${t}`,children:r}),l=Object.assign(Y,{Header:k,Body:P,Footer:z});try{l.displayName="DrawerModal",l.__docgenInfo={description:"",displayName:"DrawerModal",props:{opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},direction:{defaultValue:{value:"right"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},priority:{defaultValue:{value:"1"},description:"",name:"priority",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}}}catch{}const{TABLE_TITLE:s,TABLE_BODY:T,COMMON:X}=F,Fe={title:"organisms/DrawerModal",component:l,decorators:[r=>e.jsx("div",{style:{transform:"scale(1)",display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",height:"90vh",width:"100%"},children:e.jsx(r,{})})]},O={render:r=>{const[t,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>{o(!0)},children:"Open"}),e.jsxs(l,{...r,opened:t,onClose:()=>{o(!1)},children:[e.jsx(l.Header,{children:"HEADER"}),e.jsx(l.Body,{children:"BODY"}),e.jsx(l.Footer,{children:"FOOTER"})]})]})}},h={render:r=>{const[t,o]=u.useState(!1),[a,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>{o(!0)},children:"From Left"}),e.jsx(c,{onClick:()=>{n(!0)},children:"From Right"}),e.jsxs(l,{...r,opened:t,onClose:()=>{o(!1)},direction:"left",children:[e.jsx(l.Header,{children:"HEADER"}),e.jsx(l.Body,{children:"BODY"}),e.jsx(l.Footer,{children:"FOOTER"})]}),e.jsxs(l,{...r,opened:a,onClose:()=>{n(!1)},direction:"right",children:[e.jsx(l.Header,{children:"HEADER"}),e.jsx(l.Body,{children:"BODY"}),e.jsx(l.Footer,{children:"FOOTER"})]})]})}},S=()=>e.jsxs("header",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"2px 24px",boxSizing:"border-box"},children:[e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",marginRight:"auto"},children:[e.jsx(c,{size:"small",theme:"bluish-gray700/0",icon:e.jsx(R,{})}),e.jsx("h2",{children:"코드스테이츠 / 심기용"})]}),e.jsx(c,{size:"small",theme:"bluish-gray700/0",icon:e.jsx(H,{})})]}),x={render:r=>{const[t,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>{o(!0)},children:"Open"}),e.jsxs(l,{...r,opened:t,onClose:()=>{o(!1)},children:[e.jsx(l.Header,{children:e.jsx(S,{})}),e.jsx(l.Body,{children:e.jsxs(p,{fixedTitleCount:3,children:[e.jsx(p.Header,{children:new Array(T.COLUMN_COUNT).fill(0).map((a,n)=>e.jsx(p.Title,{width:(()=>{switch(n){case s.LONG_TEXT_COLUMN:case s.LONG_TEXT_COPYABLE_COLUMN:return 100}})(),children:(()=>{switch(n){case s.COPYABLE_COLUMN:return"Copyable";case s.LONG_TEXT_COLUMN:return"Long text";case s.LONG_TEXT_COPYABLE_COLUMN:return"Long text copyable";default:return`Title ${n}`}})()},`key-${n}`))}),e.jsx(p.Body,{children:new Array(T.ROW_COUNT).fill(0).map((a,n)=>e.jsx(p.Row,{children:new Array(T.COLUMN_COUNT).fill(0).map((i,d)=>e.jsx(p.Cell,{onCopy:(()=>{switch(d){case s.COPYABLE_COLUMN:case s.LONG_TEXT_COPYABLE_COLUMN:return w=>window.alert(`${w} Copied!`)}})(),children:(()=>{switch(d){case s.LONG_TEXT_COLUMN:case s.LONG_TEXT_COPYABLE_COLUMN:return X.TEXT_MIDDLE;default:return`Cell ${d}-${n}`}})()},`Cell ${d}-${n}`))},`row${n}`))})]})}),e.jsx(l.Footer,{children:e.jsx("div",{style:{display:"flex",height:"100%",alignItems:"center",justifyContent:"flex-end",padding:"2px 24px"},children:e.jsx(c,{size:"medium",children:"파트너 승인"})})})]})]})}};var C,y,E;O.parameters={...O.parameters,docs:{...(C=O.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const [opened, setOpened] = useState(false);
    return <>
        <Button onClick={() => {
        setOpened(true);
      }}>
          Open
        </Button>
        <DrawerModal {...args} opened={opened} onClose={() => {
        setOpened(false);
      }}>
          <DrawerModal.Header>HEADER</DrawerModal.Header>
          <DrawerModal.Body>BODY</DrawerModal.Body>
          <DrawerModal.Footer>FOOTER</DrawerModal.Footer>
        </DrawerModal>
      </>;
  }
}`,...(E=(y=O.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var M,b,B;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => {
    const [leftOpened, setLeftOpened] = useState(false);
    const [rightOpened, setRightOpened] = useState(false);
    return <>
        <Button onClick={() => {
        setLeftOpened(true);
      }}>
          From Left
        </Button>
        <Button onClick={() => {
        setRightOpened(true);
      }}>
          From Right
        </Button>
        <DrawerModal {...args} opened={leftOpened} onClose={() => {
        setLeftOpened(false);
      }} direction="left">
          <DrawerModal.Header>HEADER</DrawerModal.Header>
          <DrawerModal.Body>BODY</DrawerModal.Body>
          <DrawerModal.Footer>FOOTER</DrawerModal.Footer>
        </DrawerModal>
        <DrawerModal {...args} opened={rightOpened} onClose={() => {
        setRightOpened(false);
      }} direction="right">
          <DrawerModal.Header>HEADER</DrawerModal.Header>
          <DrawerModal.Body>BODY</DrawerModal.Body>
          <DrawerModal.Footer>FOOTER</DrawerModal.Footer>
        </DrawerModal>
      </>;
  }
}`,...(B=(b=h.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var D,j,N;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => {
    const [opened, setOpened] = useState(false);
    return <>
        <Button onClick={() => {
        setOpened(true);
      }}>
          Open
        </Button>
        <DrawerModal {...args} opened={opened} onClose={() => {
        setOpened(false);
      }}>
          <DrawerModal.Header>
            <Header />
          </DrawerModal.Header>
          <DrawerModal.Body>
            <Table fixedTitleCount={3}>
              <Table.Header>
                {new Array(TABLE_BODY.COLUMN_COUNT).fill(0).map((_, index) => <Table.Title key={\`key-\${index}\`} width={(() => {
                switch (index) {
                  case TABLE_TITLE.LONG_TEXT_COLUMN:
                  case TABLE_TITLE.LONG_TEXT_COPYABLE_COLUMN:
                    return 100;
                  default:
                }
              })()}>
                    {(() => {
                  switch (index) {
                    case TABLE_TITLE.COPYABLE_COLUMN:
                      return 'Copyable';
                    case TABLE_TITLE.LONG_TEXT_COLUMN:
                      return 'Long text';
                    case TABLE_TITLE.LONG_TEXT_COPYABLE_COLUMN:
                      return 'Long text copyable';
                    default:
                      return \`Title \${index}\`;
                  }
                })()}
                  </Table.Title>)}
              </Table.Header>
              <Table.Body>
                {new Array(TABLE_BODY.ROW_COUNT).fill(0).map((_, rowIndex) => <Table.Row key={\`row\${rowIndex}\`}>
                    {new Array(TABLE_BODY.COLUMN_COUNT).fill(0).map((_, cellIndex) => <Table.Cell key={\`Cell \${cellIndex}-\${rowIndex}\`} onCopy={(() => {
                  switch (cellIndex) {
                    case TABLE_TITLE.COPYABLE_COLUMN:
                    case TABLE_TITLE.LONG_TEXT_COPYABLE_COLUMN:
                      return value =>
                      // eslint-disable-next-line no-alert
                      window.alert(\`\${value} Copied!\`);
                    default:
                  }
                })()}>
                          {(() => {
                    switch (cellIndex) {
                      case TABLE_TITLE.LONG_TEXT_COLUMN:
                      case TABLE_TITLE.LONG_TEXT_COPYABLE_COLUMN:
                        return COMMON.TEXT_MIDDLE;
                      default:
                        return \`Cell \${cellIndex}-\${rowIndex}\`;
                    }
                  })()}
                        </Table.Cell>)}
                  </Table.Row>)}
              </Table.Body>
            </Table>
          </DrawerModal.Body>
          <DrawerModal.Footer>
            <div style={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '2px 24px'
          }}>
              <Button size="medium">파트너 승인</Button>
            </div>
          </DrawerModal.Footer>
        </DrawerModal>
      </>;
  }
}`,...(N=(j=x.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const Re=["Default","Direction","WithContents"];export{O as Default,h as Direction,x as WithContents,Re as __namedExportsOrder,Fe as default};
//# sourceMappingURL=index.stories-e0b3cd99.js.map
