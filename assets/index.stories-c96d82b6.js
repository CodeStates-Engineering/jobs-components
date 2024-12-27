import{j as e}from"./jsx-runtime-9bc08dc0.js";import{r as u,R as _}from"./index-29a85313.js";import{u as R,F as v}from"./index-92545bc7.js";import"./ValidationContext-b0a2edd5.js";import{B as c}from"./index-0df07bff.js";import"./index-8146761d.js";import"./index-1f14f509.js";import"./index-15456ba4.js";import"./index-cf6925de.js";import"./index-26cd43b5.js";import"./index-1accccac.js";import"./index-20667a64.js";import"./index-84868488.js";import{D as F}from"./dummy-d4c113ac.js";import"./index-16c5f01a.js";import"./index-63b4897c.js";import"./index-259baffc.js";import"./index-673a817b.js";import"./index-01c78001.js";import"./index-9d7f2b4c.js";import"./index-bea0b9dd.js";import{C as U}from"./index-0f73428f.js";import"./index-2527f996.js";import"./index-26b5651c.js";import{T as p}from"./index-c5e25c0c.js";import"./index-0e3039e4.js";import"./index-ed7350e6.js";import"./index-95f72cee.js";import"./index-d0637553.js";import"./index-38a24daf.js";import"./index-ae973a17.js";import{P as f}from"./index-1f0ffab8.js";import"./index-e644ce29.js";import"./Compatibility-31c3a9ab.js";import"./cleanClassName-cdc1ff81.js";import"./useTypographyClassName-e8640df1.js";import"./index-cefa53ee.js";import"./isObject-9c705d90.js";import"./useValidationMessage-243d7212.js";import"./useSubscribedState-3b03a615.js";import"./_Uint8Array-ad07ee63.js";import"./chevron-down-5b615074.js";import"./x-a4e0184a.js";import"./DUMMY-096d32b1.js";import"./index-eb294396.js";function L(){return L=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a])}return r},L.apply(this,arguments)}function $(r,t){if(r==null)return{};var o=H(r,t),a,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);for(n=0;n<l.length;n++)a=l[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(o[a]=r[a])}return o}function H(r,t){if(r==null)return{};var o={},a=Object.keys(r),n,l;for(l=0;l<a.length;l++)n=a[l],!(t.indexOf(n)>=0)&&(o[n]=r[n]);return o}var C=u.forwardRef(function(r,t){var o=r.color,a=o===void 0?"currentColor":o,n=r.size,l=n===void 0?24:n,i=$(r,["color","size"]);return _.createElement("svg",L({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),_.createElement("circle",{cx:"12",cy:"12",r:"1"}),_.createElement("circle",{cx:"19",cy:"12",r:"1"}),_.createElement("circle",{cx:"5",cy:"12",r:"1"}))});C.propTypes={color:f.string,size:f.oneOfType([f.string,f.number])};C.displayName="MoreHorizontal";const I=C,Y="_closing_dxb8u_473",m={"drawer-modal-container-right":"_drawer-modal-container-right_dxb8u_461","slide-in-right":"_slide-in-right_dxb8u_1",closing:Y,"slide-out-right":"_slide-out-right_dxb8u_1","drawer-modal-container-left":"_drawer-modal-container-left_dxb8u_478","slide-in-left":"_slide-in-left_dxb8u_1","slide-out-left":"_slide-out-left_dxb8u_1","drawer-modal-header":"_drawer-modal-header_dxb8u_495","drawer-modal-body":"_drawer-modal-body_dxb8u_501","drawer-modal-footer":"_drawer-modal-footer_dxb8u_508","fade-in":"_fade-in_dxb8u_1","fade-out":"_fade-out_dxb8u_1","shake-horizontal":"_shake-horizontal_dxb8u_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_dxb8u_1","slide-in-fwd-center":"_slide-in-fwd-center_dxb8u_1","scale-in-center":"_scale-in-center_dxb8u_1","scale-in-top":"_scale-in-top_dxb8u_1","scale-out-top":"_scale-out-top_dxb8u_1","swing-in-top-fwd":"_swing-in-top-fwd_dxb8u_1","fade-in-top":"_fade-in-top_dxb8u_1","fade-out-top":"_fade-out-top_dxb8u_1","fade-in-bottom":"_fade-in-bottom_dxb8u_1","fade-out-bottom":"_fade-out-bottom_dxb8u_1","scale-out-horizontal":"_scale-out-horizontal_dxb8u_1"},A=({children:r,className:t,opened:o=!1,onClose:a,direction:n="right",priority:l=1})=>{const[i]=R(o,250),T=i==="closing";return e.jsx(v,{onBlur:a,focused:o,priority:l,children:i?e.jsx("article",{className:`${m[`drawer-modal-container-${n}`]}
          ${T&&m.closing} ${t}`,children:r}):null})},P=({children:r,className:t})=>e.jsx("header",{className:`${m["drawer-modal-header"]} ${t}`,children:r}),k=({children:r,className:t})=>e.jsx("section",{className:`${m["drawer-modal-body"]} ${t}`,children:r}),z=({children:r,className:t})=>e.jsx("footer",{className:`${m["drawer-modal-footer"]} ${t}`,children:r}),s=Object.assign(A,{Header:P,Body:k,Footer:z});A.__docgenInfo={description:"",methods:[],displayName:"DrawerModalMain",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},opened:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"FocusLayerProps['onBlur']",raw:"FocusLayerProps['onBlur']"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'right'",computed:!1}},priority:{defaultValue:{value:"1",computed:!1},required:!1}},composes:["Pick"]};const{TABLE_TITLE:d,TABLE_BODY:w,COMMON:G}=F,$e={title:"organisms/DrawerModal",component:s,decorators:[r=>e.jsx("div",{style:{transform:"scale(1)",display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",height:"90vh",width:"100%"},children:e.jsx(r,{})})]},O={render:r=>{const[t,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>{o(!0)},children:"Open"}),e.jsxs(s,{...r,opened:t,onClose:()=>{o(!1)},children:[e.jsx(s.Header,{children:"HEADER"}),e.jsx(s.Body,{children:"BODY"}),e.jsx(s.Footer,{children:"FOOTER"})]})]})}},h={render:r=>{const[t,o]=u.useState(!1),[a,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>{o(!0)},children:"From Left"}),e.jsx(c,{onClick:()=>{n(!0)},children:"From Right"}),e.jsxs(s,{...r,opened:t,onClose:()=>{o(!1)},direction:"left",children:[e.jsx(s.Header,{children:"HEADER"}),e.jsx(s.Body,{children:"BODY"}),e.jsx(s.Footer,{children:"FOOTER"})]}),e.jsxs(s,{...r,opened:a,onClose:()=>{n(!1)},direction:"right",children:[e.jsx(s.Header,{children:"HEADER"}),e.jsx(s.Body,{children:"BODY"}),e.jsx(s.Footer,{children:"FOOTER"})]})]})}},X=()=>e.jsxs("header",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"2px 24px",boxSizing:"border-box"},children:[e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",marginRight:"auto"},children:[e.jsx(c,{size:"small",variant:"ghost",color:"bluishGray700",icon:e.jsx(U,{})}),e.jsx("h2",{children:"코드스테이츠 / 심기용"})]}),e.jsx(c,{size:"small",variant:"ghost",color:"bluishGray700",icon:e.jsx(I,{})})]}),x={render:r=>{const[t,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>{o(!0)},children:"Open"}),e.jsxs(s,{...r,opened:t,onClose:()=>{o(!1)},children:[e.jsx(s.Header,{children:e.jsx(X,{})}),e.jsx(s.Body,{children:e.jsxs(p,{fixedColumnCount:3,children:[e.jsx(p.Header,{children:new Array(w.COLUMN_COUNT).fill(0).map((a,n)=>e.jsx(p.Title,{maxWidth:(()=>{switch(n){case d.LONG_TEXT_COLUMN:case d.LONG_TEXT_COPYABLE_COLUMN:return 100}})(),children:(()=>{switch(n){case d.COPYABLE_COLUMN:return"Copyable";case d.LONG_TEXT_COLUMN:return"Long text";case d.LONG_TEXT_COPYABLE_COLUMN:return"Long text copyable";default:return`Title ${n}`}})()},`key-${n}`))}),e.jsx(p.Body,{children:new Array(w.ROW_COUNT).fill(0).map((a,n)=>e.jsx(p.Row,{children:new Array(w.COLUMN_COUNT).fill(0).map((l,i)=>e.jsx(p.Cell,{onCopy:(()=>{switch(i){case d.COPYABLE_COLUMN:case d.LONG_TEXT_COPYABLE_COLUMN:return T=>window.alert(`${T} Copied!`)}})(),children:(()=>{switch(i){case d.LONG_TEXT_COLUMN:case d.LONG_TEXT_COPYABLE_COLUMN:return G.TEXT_MIDDLE;default:return`Cell ${i}-${n}`}})()},`Cell ${i}-${n}`))},`row${n}`))})]})}),e.jsx(s.Footer,{children:e.jsx("div",{style:{display:"flex",height:"100%",alignItems:"center",justifyContent:"flex-end",padding:"2px 24px"},children:e.jsx(c,{size:"medium",children:"파트너 승인"})})})]})]})}};var g,y,E;O.parameters={...O.parameters,docs:{...(g=O.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(E=(y=O.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var M,B,b;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(b=(B=h.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var D,j,N;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
            <Table fixedColumnCount={3}>
              <Table.Header>
                {new Array(TABLE_BODY.COLUMN_COUNT).fill(0).map((_, index) => <Table.Title key={\`key-\${index}\`} maxWidth={(() => {
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
}`,...(N=(j=x.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const He=["Default","Direction","WithContents"];export{O as Default,h as Direction,x as WithContents,He as __namedExportsOrder,$e as default};
