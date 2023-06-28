import{j as o}from"./jsx-runtime-94f6e698.js";import{M as t}from"./index-2c5fda0d.js";import{D as M}from"./dummy-d4c113ac.js";import"./ValidationContext-e5b2e92a.js";import"./index-673237c3.js";import{a as b,b as u}from"./index-11ff5a16.js";import{B as h}from"./index-16894b48.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-f5bde326.js";import"./index-6af4fdd7.js";import"./Compatibility-ff615e1c.js";import"./useValidationMessage-20be1c63.js";import"./useSubscribedState-c6f4ee9b.js";import"./index-636d64e1.js";import"./isObject-9c705d90.js";import"./_Uint8Array-6bb687c3.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./index-2489ea6f.js";import"./index-e3f83235.js";import"./index-8ce4a492.js";import"./index-4a400540.js";import"./index-19ea5d71.js";import"./index-46498d9c.js";import"./index-aced0f5a.js";import"./index-f159dff6.js";import"./index-03cbd459.js";import"./index-f93cf48f.js";import"./index-1e23ea4a.js";import"./index-d036588f.js";import"./x-59731629.js";import"./index-4b9440e4.js";import"./index-72bf1363.js";import"./index-94e6dc8c.js";import"./index-1116b26a.js";import"./index-8b6e1477.js";import"./index-dc07d1df.js";import"./index-6c5e95fc.js";import"./index-d384cd4d.js";import"./index-e40c1e4a.js";import"./index-f9704b53.js";import"./index-297df758.js";import"./index-00fef108.js";const so={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},r={render:e=>{const n=b(),{search:i}=u();return o.jsxs(o.Fragment,{children:[o.jsx(h,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:M.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const n=b(),{search:i}=u();return o.jsxs(o.Fragment,{children:[o.jsx(h,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:M.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-bdd83d11.js.map
