import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as u,R as _}from"./index-61bf1805.js";import{u as A,F as v}from"./index-ed5f2129.js";import"./useValidate-6330b2cf.js";import"./Compatibility-d1e3055b.js";import"./index-b30f4c1b.js";import{D as F}from"./dummy-d4c113ac.js";import"./index-581da2c9.js";import{T as p}from"./index-6253bac8.js";import{C as R}from"./index-4a2b6551.js";import{P as f}from"./index-8d47fad6.js";import{B as c}from"./index-128d96a6.js";import"./_commonjsHelpers-de833af9.js";import"./index-2801d3c9.js";import"./cleanClassName-cdc1ff81.js";import"./index-05c6675e.js";import"./index-ebeece86.js";import"./index-fda07ac9.js";import"./index-d784f5eb.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-32639c0b.js";import"./index-e6fc3cfe.js";import"./index-a60ecce2.js";import"./useSubscribedState-051eec4a.js";import"./_Uint8Array-c628aaac.js";import"./chevron-down-2f1d20ed.js";import"./index-aac74364.js";import"./index-d2111771.js";import"./index-6fabd83d.js";import"./index-9a56ed73.js";import"./index-7b9ba057.js";import"./index-5317c557.js";import"./x-06d309c3.js";import"./index-494e5f80.js";import"./index-b2b42a55.js";import"./index-18553846.js";import"./index-6728aff9.js";import"./index-f5cb2103.js";import"./index-f703236c.js";import"./index-0c72020f.js";import"./index-7a14204e.js";import"./index-21d619e4.js";import"./DUMMY-096d32b1.js";function C(){return C=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a])}return r},C.apply(this,arguments)}function U(r,t){if(r==null)return{};var o=$(r,t),a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(n=0;n<i.length;n++)a=i[n],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(o[a]=r[a])}return o}function $(r,t){if(r==null)return{};var o={},a=Object.keys(r),n,i;for(i=0;i<a.length;i++)n=a[i],!(t.indexOf(n)>=0)&&(o[n]=r[n]);return o}var L=u.forwardRef(function(r,t){var o=r.color,a=o===void 0?"currentColor":o,n=r.size,i=n===void 0?24:n,d=U(r,["color","size"]);return _.createElement("svg",C({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),_.createElement("circle",{cx:"12",cy:"12",r:"1"}),_.createElement("circle",{cx:"19",cy:"12",r:"1"}),_.createElement("circle",{cx:"5",cy:"12",r:"1"}))});L.propTypes={color:f.string,size:f.oneOfType([f.string,f.number])};L.displayName="MoreHorizontal";const H=L,I="_closing_dxb8u_473",m={"drawer-modal-container-right":"_drawer-modal-container-right_dxb8u_461","slide-in-right":"_slide-in-right_dxb8u_1",closing:I,"slide-out-right":"_slide-out-right_dxb8u_1","drawer-modal-container-left":"_drawer-modal-container-left_dxb8u_478","slide-in-left":"_slide-in-left_dxb8u_1","slide-out-left":"_slide-out-left_dxb8u_1","drawer-modal-header":"_drawer-modal-header_dxb8u_495","drawer-modal-body":"_drawer-modal-body_dxb8u_501","drawer-modal-footer":"_drawer-modal-footer_dxb8u_508","fade-in":"_fade-in_dxb8u_1","fade-out":"_fade-out_dxb8u_1","shake-horizontal":"_shake-horizontal_dxb8u_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_dxb8u_1","slide-in-fwd-center":"_slide-in-fwd-center_dxb8u_1","scale-in-center":"_scale-in-center_dxb8u_1","scale-in-top":"_scale-in-top_dxb8u_1","scale-out-top":"_scale-out-top_dxb8u_1","swing-in-top-fwd":"_swing-in-top-fwd_dxb8u_1","fade-in-top":"_fade-in-top_dxb8u_1","fade-out-top":"_fade-out-top_dxb8u_1","fade-in-bottom":"_fade-in-bottom_dxb8u_1","fade-out-bottom":"_fade-out-bottom_dxb8u_1","scale-out-horizontal":"_scale-out-horizontal_dxb8u_1"},Y=({children:r,className:t,opened:o=!1,onClose:a,direction:n="right",priority:i=1})=>{const[d]=A(o,250),w=d==="closing";return e.jsx(v,{onBlur:a,focused:o,priority:i,children:d?e.jsx("article",{className:`${m[`drawer-modal-container-${n}`]}
          ${w&&m.closing} ${t}`,children:r}):null})},k=({children:r,className:t})=>e.jsx("header",{className:`${m["drawer-modal-header"]} ${t}`,children:r}),P=({children:r,className:t})=>e.jsx("section",{className:`${m["drawer-modal-body"]} ${t}`,children:r}),z=({children:r,className:t})=>e.jsx("footer",{className:`${m["drawer-modal-footer"]} ${t}`,children:r}),l=Object.assign(Y,{Header:k,Body:P,Footer:z});try{l.displayName="DrawerModal",l.__docgenInfo={description:"",displayName:"DrawerModal",props:{opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},direction:{defaultValue:{value:"right"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},priority:{defaultValue:{value:"1"},description:"",name:"priority",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}}}}}catch{}const{TABLE_TITLE:s,TABLE_BODY:T,COMMON:X}=F,Ue={title:"organisms/DrawerModal",component:l,decorators:[r=>e.jsx("div",{style:{transform:"scale(1)",display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",height:"90vh",width:"100%"},children:e.jsx(r,{})})]},O={render:r=>{const[t,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>{o(!0)},children:"Open"}),e.jsxs(l,{...r,opened:t,onClose:()=>{o(!1)},children:[e.jsx(l.Header,{children:"HEADER"}),e.jsx(l.Body,{children:"BODY"}),e.jsx(l.Footer,{children:"FOOTER"})]})]})}},x={render:r=>{const[t,o]=u.useState(!1),[a,n]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>{o(!0)},children:"From Left"}),e.jsx(c,{onClick:()=>{n(!0)},children:"From Right"}),e.jsxs(l,{...r,opened:t,onClose:()=>{o(!1)},direction:"left",children:[e.jsx(l.Header,{children:"HEADER"}),e.jsx(l.Body,{children:"BODY"}),e.jsx(l.Footer,{children:"FOOTER"})]}),e.jsxs(l,{...r,opened:a,onClose:()=>{n(!1)},direction:"right",children:[e.jsx(l.Header,{children:"HEADER"}),e.jsx(l.Body,{children:"BODY"}),e.jsx(l.Footer,{children:"FOOTER"})]})]})}},S=()=>e.jsxs("header",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"2px 24px",boxSizing:"border-box"},children:[e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",marginRight:"auto"},children:[e.jsx(c,{size:"small",theme:"bluish-gray700/0",icon:e.jsx(R,{})}),e.jsx("h2",{children:"코드스테이츠 / 심기용"})]}),e.jsx(c,{size:"small",theme:"bluish-gray700/0",icon:e.jsx(H,{})})]}),h={render:r=>{const[t,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>{o(!0)},children:"Open"}),e.jsxs(l,{...r,opened:t,onClose:()=>{o(!1)},children:[e.jsx(l.Header,{children:e.jsx(S,{})}),e.jsx(l.Body,{children:e.jsxs(p,{fixedColumnCount:3,children:[e.jsx(p.Header,{children:new Array(T.COLUMN_COUNT).fill(0).map((a,n)=>e.jsx(p.Title,{maxWidth:(()=>{switch(n){case s.LONG_TEXT_COLUMN:case s.LONG_TEXT_COPYABLE_COLUMN:return 100}})(),children:(()=>{switch(n){case s.COPYABLE_COLUMN:return"Copyable";case s.LONG_TEXT_COLUMN:return"Long text";case s.LONG_TEXT_COPYABLE_COLUMN:return"Long text copyable";default:return`Title ${n}`}})()},`key-${n}`))}),e.jsx(p.Body,{children:new Array(T.ROW_COUNT).fill(0).map((a,n)=>e.jsx(p.Row,{children:new Array(T.COLUMN_COUNT).fill(0).map((i,d)=>e.jsx(p.Cell,{onCopy:(()=>{switch(d){case s.COPYABLE_COLUMN:case s.LONG_TEXT_COPYABLE_COLUMN:return w=>window.alert(`${w} Copied!`)}})(),children:(()=>{switch(d){case s.LONG_TEXT_COLUMN:case s.LONG_TEXT_COPYABLE_COLUMN:return X.TEXT_MIDDLE;default:return`Cell ${d}-${n}`}})()},`Cell ${d}-${n}`))},`row${n}`))})]})}),e.jsx(l.Footer,{children:e.jsx("div",{style:{display:"flex",height:"100%",alignItems:"center",justifyContent:"flex-end",padding:"2px 24px"},children:e.jsx(c,{size:"medium",children:"파트너 승인"})})})]})]})}};var g,y,E;O.parameters={...O.parameters,docs:{...(g=O.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(E=(y=O.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var M,b,B;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(B=(b=x.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var D,j,N;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(j=h.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const $e=["Default","Direction","WithContents"];export{O as Default,x as Direction,h as WithContents,$e as __namedExportsOrder,Ue as default};
//# sourceMappingURL=index.stories-f775d59e.js.map
