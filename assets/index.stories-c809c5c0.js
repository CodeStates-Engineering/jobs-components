import{j as o}from"./jsx-runtime-4ca860c5.js";import"./index-cd7d90f5.js";import{V as b}from"./DUMMY-096d32b1.js";import{M as t}from"./index-7bba64aa.js";import{u,a as h}from"./index-dd447244.js";import{B as M}from"./index-a349bf6d.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-4b7032fd.js";import"./Compatibility-d1e3055b.js";import"./useValidate-96c4a95a.js";import"./cleanClassName-cdc1ff81.js";import"./index-e2c25b74.js";import"./index-8d47fad6.js";import"./index-3bb59990.js";import"./index-2801d3c9.js";import"./index-8410397f.js";import"./index-a0ef5c92.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-dab0b7e2.js";import"./index-e6fc3cfe.js";import"./index-899c3475.js";import"./index-1cd12c21.js";import"./useSubscribedState-1ac03868.js";import"./_Uint8Array-52e685c3.js";import"./chevron-down-2f1d20ed.js";import"./index-154a2fe9.js";import"./index-74b711b8.js";import"./index-398d46b6.js";import"./index-3b067cd6.js";import"./index-402ff15f.js";import"./index-81d43009.js";import"./x-06d309c3.js";import"./index-407b842b.js";import"./index-735f223d.js";import"./index-fa468441.js";import"./index-ed382d44.js";import"./index-42fbf396.js";import"./index-0c72020f.js";import"./index-6c175e73.js";import"./index-233d32b7.js";import"./index-170a8f17.js";import"./index-61ae6e20.js";import"./index-bdfb1b85.js";const po={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},n={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-c809c5c0.js.map
