import{j as o}from"./jsx-runtime-4ca860c5.js";import"./index-732a1215.js";import{V as b}from"./DUMMY-096d32b1.js";import{M as t}from"./index-f144845e.js";import{u,a as h}from"./index-dd447244.js";import{B as M}from"./index-3932a994.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-bbb79b91.js";import"./Compatibility-d1e3055b.js";import"./useValidate-983984d3.js";import"./cleanClassName-cdc1ff81.js";import"./index-868581da.js";import"./index-8d47fad6.js";import"./index-749ab209.js";import"./index-2801d3c9.js";import"./index-43870500.js";import"./index-23c7aa51.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-cde9edb5.js";import"./index-e6fc3cfe.js";import"./index-a1ce3fdf.js";import"./index-ff6f2272.js";import"./useSubscribedState-9e613bb6.js";import"./_Uint8Array-c13c238b.js";import"./chevron-down-2f1d20ed.js";import"./index-4f2f106d.js";import"./index-ce700bb4.js";import"./index-511b8257.js";import"./index-5562ae1a.js";import"./index-5b1e2537.js";import"./index-adcc01c8.js";import"./x-06d309c3.js";import"./index-4e19a1a5.js";import"./index-10489e5f.js";import"./index-1387ff29.js";import"./index-e1c7c5d1.js";import"./index-7d75fa03.js";import"./index-0c72020f.js";import"./index-b30d0f33.js";import"./index-480023b6.js";import"./index-295723b2.js";import"./index-90a69654.js";import"./index-5178f79d.js";const po={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},n={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-2c9e6fb1.js.map
