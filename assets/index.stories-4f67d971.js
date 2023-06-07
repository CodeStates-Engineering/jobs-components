import{j as o}from"./jsx-runtime-94f6e698.js";import{M as t}from"./index-56062230.js";import"./index-64131664.js";import"./index-c2e71db2.js";import{a as M,b}from"./index-11ff5a16.js";import{B as u}from"./index-18098115.js";import{D as h}from"./dummy-d4c113ac.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-fe05dc12.js";import"./index-2fc39dc5.js";import"./useSubscribedState-9b53482c.js";import"./index-d2f8bd0f.js";import"./index-e3b5ba34.js";import"./isObject-9c705d90.js";import"./_Uint8Array-6bb687c3.js";import"./useValidation-c7011735.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./index-5e1f5eec.js";import"./index-8ce4a492.js";import"./index-fff92b81.js";import"./useTypography-0e7bc425.js";import"./index-3b9d5ed1.js";import"./index-d0a38a37.js";import"./index-37b1a6b6.js";import"./index-080e330d.js";import"./index-a622c86c.js";import"./index-cca0deb5.js";import"./index-d97f642f.js";import"./index-36172e0a.js";import"./index-acec1f88.js";import"./index-47d8ffac.js";import"./index-25878e1e.js";import"./index-02f95d9c.js";import"./index-34458b41.js";import"./index-e2c49f6f.js";import"./x-59731629.js";import"./index-b8657fea.js";import"./index-76af0b7f.js";import"./index-e38efeef.js";import"./index-e7ab3fb1.js";import"./index-b3577b86.js";const io={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},r={render:e=>{const n=M(),{search:i}=b();return o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:h.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const n=M(),{search:i}=b();return o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:h.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,m,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const so=["Default","WithTabMenu"];export{r as Default,a as WithTabMenu,so as __namedExportsOrder,io as default};
//# sourceMappingURL=index.stories-4f67d971.js.map
