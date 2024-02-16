import{j as o}from"./jsx-runtime-4ca860c5.js";import"./index-33462664.js";import{V as b}from"./DUMMY-096d32b1.js";import{M as t}from"./index-319fa614.js";import{u,a as h}from"./index-dd447244.js";import{B as M}from"./index-3a2203de.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-09ca0d32.js";import"./Compatibility-d1e3055b.js";import"./useValidate-f9eb9d2a.js";import"./cleanClassName-cdc1ff81.js";import"./index-1fa4b92a.js";import"./index-8d47fad6.js";import"./index-b4923067.js";import"./index-2801d3c9.js";import"./index-80d1ff56.js";import"./index-4e494c8c.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-6978bea8.js";import"./index-e6fc3cfe.js";import"./index-f1c702a9.js";import"./index-7f7c29ce.js";import"./useSubscribedState-0dbf1252.js";import"./_Uint8Array-cdcc5ff5.js";import"./chevron-down-2f1d20ed.js";import"./index-571ef054.js";import"./index-554bb27d.js";import"./index-6875babf.js";import"./index-136236a3.js";import"./index-7be9d218.js";import"./index-bd9bb822.js";import"./x-06d309c3.js";import"./index-6e4ec3b6.js";import"./index-0ca97243.js";import"./index-d6084549.js";import"./index-4b9440ac.js";import"./index-4805d8d0.js";import"./index-0c72020f.js";import"./index-7725a481.js";import"./index-63f01f85.js";import"./index-435a2711.js";import"./index-032b26ed.js";import"./index-17d3ddf7.js";const po={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},n={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-fb4f07fb.js.map
