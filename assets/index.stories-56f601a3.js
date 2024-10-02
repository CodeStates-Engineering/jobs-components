import{j as o}from"./jsx-runtime-4ca860c5.js";import"./index-573b861b.js";import{V as b}from"./DUMMY-096d32b1.js";import{M as t}from"./index-27c45cdb.js";import{u,a as h}from"./index-dd447244.js";import{B as M}from"./index-e0536556.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-13e72dae.js";import"./Compatibility-d1e3055b.js";import"./useValidate-106f24a1.js";import"./cleanClassName-cdc1ff81.js";import"./index-3892311a.js";import"./index-8d47fad6.js";import"./index-6ccb5d89.js";import"./index-2801d3c9.js";import"./index-4946e466.js";import"./index-83dd4a0f.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-ea965280.js";import"./index-e6fc3cfe.js";import"./index-ac2169d1.js";import"./index-15aa8408.js";import"./useSubscribedState-4f2285a3.js";import"./_Uint8Array-82a62ed0.js";import"./chevron-down-2f1d20ed.js";import"./index-be15368d.js";import"./index-dfefffea.js";import"./index-63d59855.js";import"./index-74f07507.js";import"./index-8098daf3.js";import"./index-ccc451ac.js";import"./x-06d309c3.js";import"./index-85a25178.js";import"./index-fa2e5ec7.js";import"./index-50940825.js";import"./index-9be1a8d1.js";import"./index-5195e759.js";import"./index-0c72020f.js";import"./index-70f26fee.js";import"./index-0f4227b8.js";import"./index-e0879bfc.js";import"./index-89d22c00.js";import"./index-48b47564.js";const po={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},n={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-56f601a3.js.map
