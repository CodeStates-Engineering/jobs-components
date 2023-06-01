import{j as o}from"./jsx-runtime-94f6e698.js";import{M as t}from"./index-e903dbb5.js";import"./index-64131664.js";import"./index-65913334.js";import{a as M,b}from"./index-11ff5a16.js";import{B as u}from"./index-1f9ff373.js";import{D as h}from"./dummy-d4c113ac.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-ab03ff63.js";import"./index-86ec8a1c.js";import"./useSubscribedState-9b53482c.js";import"./index-d2f8bd0f.js";import"./index-e3b5ba34.js";import"./isObject-9c705d90.js";import"./_Uint8Array-6bb687c3.js";import"./useValidation-c7011735.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./index-21cc8640.js";import"./index-fff92b81.js";import"./useTypography-0e7bc425.js";import"./index-e5314f3d.js";import"./index-d0a38a37.js";import"./index-dfb5bbb1.js";import"./index-69aa6a4a.js";import"./index-a622c86c.js";import"./index-3d208847.js";import"./index-8a8059f1.js";import"./index-8c327aaf.js";import"./index-481e6ec7.js";import"./isNumber-c8e399a1.js";import"./index-3f2066df.js";import"./index-b03561de.js";import"./index-47d8ffac.js";import"./index-b451a18a.js";import"./index-a0964943.js";import"./index-8d769426.js";import"./PartnerAccordion-f6bf0359.js";import"./index-3ab5e72a.js";import"./x-59731629.js";import"./index-e1d19c9c.js";import"./index-1f3975f6.js";import"./index-5148f4df.js";import"./index-b3577b86.js";const po={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},n={render:e=>{const r=M(),{search:i}=b();return o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:h.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const r=M(),{search:i}=b();return o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:h.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
            <p>{DUMMY.COMMON.TEXT_MIDDLE}</p>
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
            <p>{DUMMY.COMMON.TEXT_MIDDLE}</p>
          </Modal.Body>
          <Modal.Footer>footer children</Modal.Footer>
        </Modal>
      </>;
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const lo=["Default","WithTabMenu"];export{n as Default,a as WithTabMenu,lo as __namedExportsOrder,po as default};
//# sourceMappingURL=index.stories-2a4bffb3.js.map
