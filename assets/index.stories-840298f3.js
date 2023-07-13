import{j as o}from"./jsx-runtime-94f6e698.js";import"./index-65174503.js";import{V as b}from"./DUMMY-fece25f5.js";import{M as t}from"./index-26d13afb.js";import{a as u,b as h}from"./index-11ff5a16.js";import{B as M}from"./index-0bac5a3e.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-891f3c19.js";import"./Compatibility-ff615e1c.js";import"./useValidate-2a0eec53.js";import"./ValidationContext-e5b2e92a.js";import"./index-e856c314.js";import"./index-1fc0ca9a.js";import"./index-e397bd09.js";import"./index-8ce4a492.js";import"./index-5416f22b.js";import"./index-08771f2c.js";import"./index-f159dff6.js";import"./index-72bf1363.js";import"./index-ff2a1a8c.js";import"./isObject-9c705d90.js";import"./index-1116b26a.js";import"./index-42247f48.js";import"./index-b007d6d1.js";import"./useSubscribedState-ac5c7d33.js";import"./_Uint8Array-6bb687c3.js";import"./chevron-down-735b3f0e.js";import"./index-c8561dda.js";import"./index-793546fd.js";import"./index-e27c761f.js";import"./index-1ef2cd47.js";import"./index-980c0de6.js";import"./index-05f8ff22.js";import"./x-59731629.js";import"./index-6864c64a.js";import"./index-4a3870f5.js";import"./index-db11363b.js";import"./index-7373a8c0.js";import"./index-0a8f3023.js";import"./index-d384cd4d.js";import"./index-8f3bc574.js";import"./index-f40285f8.js";import"./index-20ba7fa1.js";const so={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},r={render:e=>{const n=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const n=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
            <p>{DUMMY.VERY_LONG_TEXT}</p>
          </Modal.Body>
          <Modal.Footer>footer children</Modal.Footer>
        </Modal>
      </>;
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const po=["Default","WithTabMenu"];export{r as Default,a as WithTabMenu,po as __namedExportsOrder,so as default};
//# sourceMappingURL=index.stories-840298f3.js.map
