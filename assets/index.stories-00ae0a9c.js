import{j as o}from"./jsx-runtime-94f6e698.js";import{M as t}from"./index-677c610a.js";import{D as M}from"./dummy-d4c113ac.js";import"./ValidationContext-e5b2e92a.js";import"./index-629e7167.js";import{a as b,b as u}from"./index-11ff5a16.js";import{B as h}from"./index-ab5429b3.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-04852394.js";import"./index-20468868.js";import"./Compatibility-ff615e1c.js";import"./useValidate-13adb089.js";import"./useSubscribedState-8b5f348b.js";import"./index-a69bdd6e.js";import"./isObject-9c705d90.js";import"./_Uint8Array-6bb687c3.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./index-5e7999a0.js";import"./index-94754336.js";import"./index-8ce4a492.js";import"./index-89f77939.js";import"./index-463ea9f6.js";import"./index-252688a6.js";import"./index-91fc00ef.js";import"./index-f159dff6.js";import"./index-c44de603.js";import"./index-92f14907.js";import"./index-e74ec9ed.js";import"./index-d120f86d.js";import"./x-59731629.js";import"./index-eb6ccbdf.js";import"./index-72bf1363.js";import"./index-cbe1c8a2.js";import"./index-1116b26a.js";import"./index-27d569ba.js";import"./index-93e6bd05.js";import"./index-b49fe767.js";import"./index-d384cd4d.js";import"./index-610984a8.js";import"./index-880076ee.js";import"./index-bda9ad87.js";import"./index-5840dfbe.js";const so={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},r={render:e=>{const n=b(),{search:i}=u();return o.jsxs(o.Fragment,{children:[o.jsx(h,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:M.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const n=b(),{search:i}=u();return o.jsxs(o.Fragment,{children:[o.jsx(h,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:M.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const po=["Default","WithTabMenu"];export{r as Default,a as WithTabMenu,po as __namedExportsOrder,so as default};
//# sourceMappingURL=index.stories-00ae0a9c.js.map
