import{j as e}from"./jsx-runtime-94f6e698.js";import{r as p,R as u}from"./index-8db94870.js";import"./index-e3b5ba34.js";import"./index-64131664.js";import{u as q,F}from"./index-21cc8640.js";import"./index-7de20644.js";import"./index-01206015.js";import{T as c}from"./index-3b2aa613.js";import{C as R}from"./index-4ea2d728.js";import{P as f}from"./index-1fc0ca9a.js";import{B as d}from"./index-1f9ff373.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-fff92b81.js";import"./useTypography-0e7bc425.js";import"./index-8c4fe83c.js";import"./index-e5314f3d.js";import"./index-b3577b86.js";import"./index-a622c86c.js";import"./index-3e179838.js";import"./index-47d8ffac.js";import"./index-2bfb62af.js";import"./isObject-3c28966c.js";import"./index-a0964943.js";import"./index-e8ed409c.js";import"./useComponentSelfState-dbdc13dc.js";import"./useValidation-c7011735.js";import"./chevron-down-735b3f0e.js";import"./index-593abce4.js";import"./index-3233e711.js";import"./index-66071242.js";import"./index-18252df3.js";import"./index-d48365f7.js";import"./index-3ac12258.js";import"./_nodeUtil-14e51ba2.js";import"./isNumber-3648e59b.js";import"./index-4c0e71f5.js";import"./index-1acf8cdf.js";import"./PartnerAccordion-da4dce26.js";import"./index-79f5aedd.js";import"./x-59731629.js";import"./index-1f3975f6.js";function x(){return x=Object.assign||function(r){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a])}return r},x.apply(this,arguments)}function $(r,n){if(r==null)return{};var o=H(r,n),a,t;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(t=0;t<s.length;t++)a=s[t],!(n.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(r,a)&&(o[a]=r[a])}return o}function H(r,n){if(r==null)return{};var o={},a=Object.keys(r),t,s;for(s=0;s<a.length;s++)t=a[s],!(n.indexOf(t)>=0)&&(o[t]=r[t]);return o}var y=p.forwardRef(function(r,n){var o=r.color,a=o===void 0?"currentColor":o,t=r.size,s=t===void 0?24:t,l=$(r,["color","size"]);return u.createElement("svg",x({ref:n,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),u.createElement("circle",{cx:"12",cy:"12",r:"1"}),u.createElement("circle",{cx:"19",cy:"12",r:"1"}),u.createElement("circle",{cx:"5",cy:"12",r:"1"}))});y.propTypes={color:f.string,size:f.oneOfType([f.string,f.number])};y.displayName="MoreHorizontal";const U=y,A="_closing_mqitk_473",m={"drawer-modal-container-right":"_drawer-modal-container-right_mqitk_461","slide-in-right":"_slide-in-right_mqitk_1",closing:A,"slide-out-right":"_slide-out-right_mqitk_1","drawer-modal-container-left":"_drawer-modal-container-left_mqitk_478","slide-in-left":"_slide-in-left_mqitk_1","slide-out-left":"_slide-out-left_mqitk_1","drawer-modal-header":"_drawer-modal-header_mqitk_495","drawer-modal-body":"_drawer-modal-body_mqitk_502","drawer-modal-footer":"_drawer-modal-footer_mqitk_508","fade-in":"_fade-in_mqitk_1","fade-out":"_fade-out_mqitk_1","shake-horizontal":"_shake-horizontal_mqitk_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_mqitk_1","slide-in-fwd-center":"_slide-in-fwd-center_mqitk_1","scale-in-center":"_scale-in-center_mqitk_1","scale-in-top":"_scale-in-top_mqitk_1","scale-out-top":"_scale-out-top_mqitk_1","swing-in-top-fwd":"_swing-in-top-fwd_mqitk_1","fade-in-top":"_fade-in-top_mqitk_1","fade-out-top":"_fade-out-top_mqitk_1","fade-in-bottom":"_fade-in-bottom_mqitk_1","fade-out-bottom":"_fade-out-bottom_mqitk_1","scale-out-horizontal":"_scale-out-horizontal_mqitk_1"},P=p.createContext(void 0),z=({children:r,className:n,opened:o=!1,onClose:a,direction:t="right"})=>{const[s]=q(o,250),l=s==="closing";return e.jsx(F,{onClick:()=>{a==null||a()},focused:o,priority:1,children:s?e.jsx("article",{className:`${m[`drawer-modal-container-${t}`]}
          ${l&&m.closing} ${n}`,children:e.jsx(P.Provider,{value:a,children:r})}):null})},S=({children:r,className:n})=>e.jsx("header",{className:`${m["drawer-modal-header"]} ${n}`,children:r}),Y=({children:r,className:n})=>e.jsx("section",{className:`${m["drawer-modal-body"]} ${n}`,children:r}),I=({children:r,className:n})=>e.jsx("footer",{className:`${m["drawer-modal-footer"]} ${n}`,children:r}),i=Object.assign(z,{Header:S,Body:Y,Footer:I});try{i.displayName="DrawerModal",i.__docgenInfo={description:"",displayName:"DrawerModal",props:{opened:{defaultValue:{value:"false"},description:"",name:"opened",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},direction:{defaultValue:{value:"right"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const C=3,g=5,_=1,X=30,j=10,G=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
consectetur vulputate ultrices. Proin vestibulum velit et ornare lacinia.
Sed consequat, enim quis mollis ultrices, sem diam pulvinar ligula,
suscipit laoreet leo tellus et urna. Aliquam cursus justo vitae
scelerisque egestas. Praesent hendrerit pharetra purus, at elementum
tortor facilisis a. Ut placerat, ex eu iaculis scelerisque, odio ante
rutrum lorem, id tincidunt enim augue sed felis. In ante metus, dignissim
non est nec, ultrices pulvinar est. Fusce ac accumsan turpis, eget
fermentum augue.`,Re={title:"organisms/DrawerModal",component:i,decorators:[r=>e.jsx("div",{style:{transform:"scale(1)",display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem",height:"90vh",width:"100%"},children:e.jsx(r,{})})]},h={render:r=>{const[n,o]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>{o(!0)},children:"Open"}),e.jsxs(i,{...r,opened:n,onClose:()=>{o(!1)},children:[e.jsx(i.Header,{children:"HEADER"}),e.jsx(i.Body,{children:"BODY"}),e.jsx(i.Footer,{children:"FOOTER"})]})]})}},w={render:r=>{const[n,o]=p.useState(!1),[a,t]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>{o(!0)},children:"From Left"}),e.jsx(d,{onClick:()=>{t(!0)},children:"From Right"}),e.jsxs(i,{...r,opened:n,onClose:()=>{o(!1)},direction:"left",children:[e.jsx(i.Header,{children:"HEADER"}),e.jsx(i.Body,{children:"BODY"}),e.jsx(i.Footer,{children:"FOOTER"})]}),e.jsxs(i,{...r,opened:a,onClose:()=>{t(!1)},direction:"right",children:[e.jsx(i.Header,{children:"HEADER"}),e.jsx(i.Body,{children:"BODY"}),e.jsx(i.Footer,{children:"FOOTER"})]})]})}},W=()=>e.jsxs("header",{style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",padding:"2px 24px",boxSizing:"border-box"},children:[e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",marginRight:"auto"},children:[e.jsx(d,{size:"small",theme:"bluish-gray700/0",icon:e.jsx(R,{})}),e.jsx("h2",{children:"코드스테이츠 / 심기용"})]}),e.jsx(d,{size:"small",theme:"bluish-gray700/0",icon:e.jsx(U,{})})]}),O={render:r=>{const[n,o]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:()=>{o(!0)},children:"Open"}),e.jsxs(i,{...r,opened:n,onClose:()=>{o(!1)},children:[e.jsx(i.Header,{children:e.jsx(W,{})}),e.jsx(i.Body,{children:e.jsxs(c,{fixedTitleCount:3,children:[e.jsx(c.Header,{children:new Array(j).fill(0).map((a,t)=>e.jsx(c.Title,{width:(()=>{switch(t){case g:case _:return 100}})(),children:(()=>{switch(t){case C:return"Copyable";case g:return"Long text";case _:return"Long text copyable";default:return`Title ${t}`}})()},`key-${t}`))}),e.jsx(c.Body,{children:new Array(X).fill(0).map((a,t)=>e.jsx(c.Row,{children:new Array(j).fill(0).map((s,l)=>e.jsx(c.Cell,{onCopy:(()=>{switch(l){case C:case _:return N=>window.alert(`${N} Copied!`)}})(),children:(()=>{switch(l){case g:case _:return G;default:return`Cell ${l}-${t}`}})()},`Cell ${l}-${t}`))},`row${t}`))})]})}),e.jsx(i.Footer,{children:e.jsx("div",{style:{display:"flex",height:"100%",alignItems:"center",justifyContent:"flex-end",padding:"2px 24px"},children:e.jsx(d,{size:"medium",children:"파트너 승인"})})})]})]})}};var M,D,T;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(T=(D=h.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var L,b,k;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(k=(b=w.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var E,B,v;O.parameters={...O.parameters,docs:{...(E=O.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
                {new Array(COLUMN_COUNT).fill(0).map((_, index) => <Table.Title key={\`key-\${index}\`} width={(() => {
                switch (index) {
                  case LONG_TEXT_COLUMN:
                  case LONG_TEXT_COPYABLE_COLUMN:
                    return 100;
                  default:
                }
              })()}>
                    {(() => {
                  switch (index) {
                    case COPYABLE_COLUMN:
                      return 'Copyable';
                    case LONG_TEXT_COLUMN:
                      return 'Long text';
                    case LONG_TEXT_COPYABLE_COLUMN:
                      return 'Long text copyable';
                    default:
                      return \`Title \${index}\`;
                  }
                })()}
                  </Table.Title>)}
              </Table.Header>
              <Table.Body>
                {new Array(ROW_COUNT).fill(0).map((_, rowIndex) => <Table.Row key={\`row\${rowIndex}\`}>
                    {new Array(COLUMN_COUNT).fill(0).map((_, cellIndex) => <Table.Cell key={\`Cell \${cellIndex}-\${rowIndex}\`} onCopy={(() => {
                  switch (cellIndex) {
                    case COPYABLE_COLUMN:
                    case LONG_TEXT_COPYABLE_COLUMN:
                      return value =>
                      // eslint-disable-next-line no-alert
                      window.alert(\`\${value} Copied!\`);
                    default:
                  }
                })()}>
                        {(() => {
                    switch (cellIndex) {
                      case LONG_TEXT_COLUMN:
                      case LONG_TEXT_COPYABLE_COLUMN:
                        return DUMMY_TEXT;
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
}`,...(v=(B=O.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};const $e=["Default","Direction","WithContents"];export{h as Default,w as Direction,O as WithContents,$e as __namedExportsOrder,Re as default};
//# sourceMappingURL=index.stories-c754cb51.js.map
