import{j as o}from"./jsx-runtime-4ca860c5.js";import"./index-31470334.js";import{V as b}from"./DUMMY-096d32b1.js";import{M as t}from"./index-207fb18f.js";import{u,a as h}from"./index-dd447244.js";import{B as M}from"./index-ed3f2df1.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-32ecbb2f.js";import"./Compatibility-d1e3055b.js";import"./useValidate-6435b2ea.js";import"./cleanClassName-cdc1ff81.js";import"./index-dfe29350.js";import"./index-8d47fad6.js";import"./index-c4363634.js";import"./index-2801d3c9.js";import"./index-3310871d.js";import"./index-15c354e5.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-f18d081a.js";import"./index-e6fc3cfe.js";import"./index-295b3e13.js";import"./index-77904fc4.js";import"./useSubscribedState-72aff943.js";import"./_Uint8Array-3a160173.js";import"./chevron-down-2f1d20ed.js";import"./index-c27e2610.js";import"./index-41601980.js";import"./index-da4b0796.js";import"./index-9e936fe7.js";import"./index-1f0e01fa.js";import"./index-5f9841de.js";import"./x-06d309c3.js";import"./index-3a3aba19.js";import"./index-dd90c49c.js";import"./index-22d7c183.js";import"./index-fae1957c.js";import"./index-5e39c384.js";import"./index-0c72020f.js";import"./index-d0cd9f04.js";import"./index-a4b3940b.js";import"./index-40867ad1.js";import"./index-506cd2b6.js";import"./index-f365e597.js";const po={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},n={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const lo=["Default","WithTabMenu"];export{n as Default,a as WithTabMenu,lo as __namedExportsOrder,po as default};
//# sourceMappingURL=index.stories-ab367dfb.js.map
