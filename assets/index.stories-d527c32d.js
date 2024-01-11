import{j as o}from"./jsx-runtime-4ca860c5.js";import"./index-b30f4c1b.js";import{V as b}from"./DUMMY-096d32b1.js";import{M as t}from"./index-652925a0.js";import{u,a as h}from"./index-dd447244.js";import{B as M}from"./index-128d96a6.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-05c6675e.js";import"./Compatibility-d1e3055b.js";import"./useValidate-6330b2cf.js";import"./cleanClassName-cdc1ff81.js";import"./index-ebeece86.js";import"./index-8d47fad6.js";import"./index-ed5f2129.js";import"./index-2801d3c9.js";import"./index-fda07ac9.js";import"./index-d784f5eb.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-32639c0b.js";import"./index-e6fc3cfe.js";import"./index-581da2c9.js";import"./index-a60ecce2.js";import"./useSubscribedState-051eec4a.js";import"./_Uint8Array-c628aaac.js";import"./chevron-down-2f1d20ed.js";import"./index-aac74364.js";import"./index-d2111771.js";import"./index-6fabd83d.js";import"./index-9a56ed73.js";import"./index-7b9ba057.js";import"./index-5317c557.js";import"./x-06d309c3.js";import"./index-494e5f80.js";import"./index-4a2b6551.js";import"./index-b2b42a55.js";import"./index-18553846.js";import"./index-6253bac8.js";import"./index-0c72020f.js";import"./index-6728aff9.js";import"./index-f5cb2103.js";import"./index-f703236c.js";import"./index-7a14204e.js";import"./index-21d619e4.js";const po={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},n={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-d527c32d.js.map
