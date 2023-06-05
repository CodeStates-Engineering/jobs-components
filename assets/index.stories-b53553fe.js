import{j as o}from"./jsx-runtime-94f6e698.js";import{M as t}from"./index-6ab46157.js";import"./index-64131664.js";import"./index-2406ede6.js";import{a as M,b}from"./index-11ff5a16.js";import{B as u}from"./index-18098115.js";import{D as h}from"./dummy-d4c113ac.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-e9320d47.js";import"./index-e9c9d675.js";import"./useSubscribedState-9b53482c.js";import"./index-d2f8bd0f.js";import"./index-e3b5ba34.js";import"./isObject-9c705d90.js";import"./_Uint8Array-6bb687c3.js";import"./useValidation-c7011735.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./index-5f720287.js";import"./index-fff92b81.js";import"./useTypography-0e7bc425.js";import"./index-e5314f3d.js";import"./index-d0a38a37.js";import"./index-ef1ab8ea.js";import"./index-a0e73f40.js";import"./index-a622c86c.js";import"./index-5cff29ba.js";import"./index-f9cfeadd.js";import"./index-f937665d.js";import"./index-abb67bb0.js";import"./index-47d8ffac.js";import"./index-010de2b8.js";import"./index-02f95d9c.js";import"./index-267c7a8b.js";import"./index-11b5aae5.js";import"./x-59731629.js";import"./index-348d1bfe.js";import"./index-76af0b7f.js";import"./index-cfe2db80.js";import"./index-ff4d7abb.js";import"./index-b3577b86.js";const ao={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},r={render:e=>{const n=M(),{search:i}=b();return o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:h.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const n=M(),{search:i}=b();return o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:h.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,l,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const io=["Default","WithTabMenu"];export{r as Default,a as WithTabMenu,io as __namedExportsOrder,ao as default};
//# sourceMappingURL=index.stories-b53553fe.js.map
