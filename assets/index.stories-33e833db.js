import{j as o}from"./jsx-runtime-4ca860c5.js";import"./index-0089b7b6.js";import{V as b}from"./DUMMY-096d32b1.js";import{M as t}from"./index-5f167ae4.js";import{u,a as h}from"./index-dd447244.js";import{B as M}from"./index-3a2203de.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-09ca0d32.js";import"./Compatibility-d1e3055b.js";import"./useValidate-f9eb9d2a.js";import"./cleanClassName-cdc1ff81.js";import"./index-1fa4b92a.js";import"./index-8d47fad6.js";import"./index-8cf49931.js";import"./index-2801d3c9.js";import"./index-80d1ff56.js";import"./index-4e494c8c.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-6978bea8.js";import"./index-e6fc3cfe.js";import"./index-17c8a5aa.js";import"./index-e86850cd.js";import"./useSubscribedState-0dbf1252.js";import"./_Uint8Array-cdcc5ff5.js";import"./chevron-down-2f1d20ed.js";import"./index-3c05db33.js";import"./index-431e9252.js";import"./index-f6cb8cc3.js";import"./index-015d0aaa.js";import"./index-c994083a.js";import"./index-bd9bb822.js";import"./x-06d309c3.js";import"./index-2f41ae32.js";import"./index-1c39914c.js";import"./index-5e84d376.js";import"./index-8668a1e1.js";import"./index-895c9561.js";import"./index-0c72020f.js";import"./index-0d2935f2.js";import"./index-4dde1dcc.js";import"./index-6410485a.js";import"./index-2bcee120.js";import"./index-c640185f.js";const po={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},n={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-33e833db.js.map
