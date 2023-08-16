import{j as o}from"./jsx-runtime-4ca860c5.js";import"./index-cd606f41.js";import{V as b}from"./DUMMY-096d32b1.js";import{M as t}from"./index-54176af3.js";import{u,a as h}from"./index-dd447244.js";import{B as M}from"./index-ff9907f0.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-f746e559.js";import"./Compatibility-d1e3055b.js";import"./useValidate-151d9b0b.js";import"./cleanClassName-cdc1ff81.js";import"./index-f9399702.js";import"./index-8d47fad6.js";import"./index-5ac2aed5.js";import"./index-2801d3c9.js";import"./index-2f6fdfd7.js";import"./index-6767a2d5.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-ad039625.js";import"./index-e6fc3cfe.js";import"./index-3b874023.js";import"./index-de9c7388.js";import"./useSubscribedState-dbc08c5d.js";import"./_Uint8Array-416ed47b.js";import"./chevron-down-2f1d20ed.js";import"./index-ac366c56.js";import"./index-751f0006.js";import"./index-4c4270e7.js";import"./index-33edcd0f.js";import"./index-3b9a45ba.js";import"./index-719b0226.js";import"./x-06d309c3.js";import"./index-22199ab1.js";import"./index-80889af2.js";import"./index-4b0375af.js";import"./index-4725194c.js";import"./index-60af0cbf.js";import"./index-0c72020f.js";import"./index-1a80ed02.js";import"./index-6142e748.js";import"./index-93775688.js";import"./index-834e33dc.js";import"./index-285c8742.js";const po={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},n={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-08f0038f.js.map
