import{j as o}from"./jsx-runtime-94f6e698.js";import"./index-aba45698.js";import{V as b}from"./DUMMY-096d32b1.js";import{M as t}from"./index-2fb0e7e0.js";import{a as u,b as h}from"./index-11ff5a16.js";import{B as M}from"./index-d031e8f5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-2227ea27.js";import"./Compatibility-ff615e1c.js";import"./useValidate-395f5a50.js";import"./cleanClassName-cdc1ff81.js";import"./index-2e847129.js";import"./index-1fc0ca9a.js";import"./index-57b7e407.js";import"./index-8ce4a492.js";import"./index-ba37fc5c.js";import"./index-af309d3e.js";import"./index-e29dd81e.js";import"./index-a7ebed86.js";import"./index-b4d668c6.js";import"./isObject-5520b7e1.js";import"./index-0aca656c.js";import"./index-027025cc.js";import"./index-62f0d789.js";import"./useSubscribedState-2a2df46b.js";import"./_Uint8Array-d55c0654.js";import"./chevron-down-735b3f0e.js";import"./index-6cdda059.js";import"./index-c2d6c21b.js";import"./index-ecd7c790.js";import"./index-01487e3d.js";import"./index-8f440caa.js";import"./index-5a9664e2.js";import"./x-59731629.js";import"./index-8edad335.js";import"./index-07290542.js";import"./index-a7db9f82.js";import"./index-a5e818db.js";import"./index-ee167643.js";import"./index-d384cd4d.js";import"./index-15f2aee2.js";import"./index-1999eeb3.js";import"./index-35941e36.js";import"./index-ed6dd368.js";import"./index-1393e9cf.js";const lo={title:"organisms/Modal",component:t,decorators:[r=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(r,{})})]},n={render:r=>{const e=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{e("/?tab=1")},children:"Open"}),o.jsxs(t,{...r,opened:i.includes("?tab="),onClose:()=>e("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:r=>{const e=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{e("/?tab=1")},children:"Open"}),o.jsxs(t,{...r,opened:i.includes("?tab="),onClose:()=>e("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const navigate = useNavigate();
    const {
      search
    } = useLocation();
    return <>
        <Button onClick={() => {
        navigate('/?tab=1');
      }}>
          Open
        </Button>
        <Modal {...args} opened={search.includes('?tab=')} onClose={() => navigate('/')}>
          <Modal.Header />
          <Modal.Body>
            <p>{DUMMY.VERY_LONG_TEXT}</p>
          </Modal.Body>
          <Modal.Footer>footer children</Modal.Footer>
        </Modal>
      </>;
  }
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,d,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const navigate = useNavigate();
    const {
      search
    } = useLocation();
    return <>
        <Button onClick={() => {
        navigate('/?tab=1');
      }}>
          Open
        </Button>
        <Modal {...args} opened={search.includes('?tab=')} onClose={() => navigate('/')}>
          <Modal.TabMenuHeader items={[{
          label: 'Tab 1',
          to: '/?tab=1'
        }, {
          label: 'Tab 2',
          to: '/?tab=2'
        }, {
          label: 'Tab 3',
          to: '/?tab=3'
        }, {
          label: 'Tab 4',
          to: '/?tab=4'
        }]} />
          <Modal.Body>
            <p>{DUMMY.VERY_LONG_TEXT}</p>
          </Modal.Body>
          <Modal.Footer>footer children</Modal.Footer>
        </Modal>
      </>;
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const mo=["Default","WithTabMenu"];export{n as Default,a as WithTabMenu,mo as __namedExportsOrder,lo as default};
//# sourceMappingURL=index.stories-4b19b8ec.js.map
