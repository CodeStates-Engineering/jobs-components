import{j as o}from"./jsx-runtime-4ca860c5.js";import"./index-2850307c.js";import{V as b}from"./DUMMY-096d32b1.js";import{M as t}from"./index-f992276b.js";import{u,a as h}from"./index-dd447244.js";import{B as M}from"./index-e695366f.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-158dd3c7.js";import"./Compatibility-d1e3055b.js";import"./useValidate-6435b2ea.js";import"./cleanClassName-cdc1ff81.js";import"./index-75de0a99.js";import"./index-64ecc42f.js";import"./index-8d47fad6.js";import"./index-c939f33c.js";import"./index-2801d3c9.js";import"./index-3310871d.js";import"./index-15c354e5.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-f18d081a.js";import"./index-e6fc3cfe.js";import"./index-55891013.js";import"./index-5f1e8dec.js";import"./useSubscribedState-72aff943.js";import"./_Uint8Array-3a160173.js";import"./chevron-down-2f1d20ed.js";import"./index-1cf7fe34.js";import"./index-a81212ba.js";import"./index-ee047980.js";import"./index-b5bc63a4.js";import"./index-6a35fb3a.js";import"./index-66176fde.js";import"./x-06d309c3.js";import"./index-65b06dd1.js";import"./index-a596fea8.js";import"./index-6b8303b9.js";import"./index-0f1d64a3.js";import"./index-2d400bf2.js";import"./index-0c72020f.js";import"./index-2a5c9f36.js";import"./index-991179d5.js";import"./index-5bff52db.js";import"./index-ed9ba498.js";import"./index-f365e597.js";const lo={title:"organisms/Modal",component:t,decorators:[r=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(r,{})})]},n={render:r=>{const e=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{e("/?tab=1")},children:"Open"}),o.jsxs(t,{...r,opened:i.includes("?tab="),onClose:()=>e("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:r=>{const e=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{e("/?tab=1")},children:"Open"}),o.jsxs(t,{...r,opened:i.includes("?tab="),onClose:()=>e("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-19c6ae60.js.map
