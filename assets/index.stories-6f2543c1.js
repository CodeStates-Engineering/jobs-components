import{j as o}from"./jsx-runtime-4ca860c5.js";import"./index-1b26f05c.js";import{V as b}from"./DUMMY-096d32b1.js";import{M as t}from"./index-b6155961.js";import{u,a as h}from"./index-dd447244.js";import{B as M}from"./index-8ad70b66.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-bbb79b91.js";import"./Compatibility-d1e3055b.js";import"./useValidate-983984d3.js";import"./cleanClassName-cdc1ff81.js";import"./index-868581da.js";import"./index-8d47fad6.js";import"./index-be44e53b.js";import"./index-2801d3c9.js";import"./index-43870500.js";import"./index-23c7aa51.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-cde9edb5.js";import"./index-e6fc3cfe.js";import"./index-28cb73bf.js";import"./index-cb010156.js";import"./useSubscribedState-9e613bb6.js";import"./_Uint8Array-c13c238b.js";import"./chevron-down-2f1d20ed.js";import"./index-46f58f0d.js";import"./index-22622c04.js";import"./index-a8e1b73c.js";import"./index-9a1c45d7.js";import"./index-7b112883.js";import"./index-8c6a3505.js";import"./x-06d309c3.js";import"./index-b695dd3b.js";import"./index-267e26a5.js";import"./index-0b29d02a.js";import"./index-2c0a5f72.js";import"./index-16aecc28.js";import"./index-0c72020f.js";import"./index-47dd3607.js";import"./index-89a61cc1.js";import"./index-77b53edd.js";import"./index-fe941abf.js";import"./index-f390a560.js";const po={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},n={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-6f2543c1.js.map
