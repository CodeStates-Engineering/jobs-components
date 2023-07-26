import{j as o}from"./jsx-runtime-94f6e698.js";import"./index-216bf4c2.js";import{V as b}from"./DUMMY-fece25f5.js";import{M as t}from"./index-99bc2676.js";import{a as u,b as h}from"./index-11ff5a16.js";import{B as M}from"./index-e3731ac8.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-06a2e329.js";import"./Compatibility-ff615e1c.js";import"./useValidate-6cc225ca.js";import"./ValidationContext-e5b2e92a.js";import"./index-7f1fcdd9.js";import"./index-1fc0ca9a.js";import"./index-851c569c.js";import"./index-8ce4a492.js";import"./index-e9ec05a9.js";import"./index-e36f99ae.js";import"./index-f159dff6.js";import"./index-72bf1363.js";import"./index-fe180ce9.js";import"./isObject-5520b7e1.js";import"./index-1116b26a.js";import"./index-e69db63a.js";import"./index-f0cc4bdd.js";import"./useSubscribedState-84debe19.js";import"./_Uint8Array-d55c0654.js";import"./chevron-down-735b3f0e.js";import"./index-0a6dbe97.js";import"./index-70945df5.js";import"./index-121b10c3.js";import"./index-978d0ef2.js";import"./index-e9cc86d9.js";import"./index-1fd67f10.js";import"./x-59731629.js";import"./index-c5548d33.js";import"./index-8be90ea8.js";import"./index-a8d615c2.js";import"./index-d73f93f1.js";import"./index-6d358975.js";import"./index-d384cd4d.js";import"./index-74ad8939.js";import"./index-94e3c84d.js";import"./index-f77cc5dd.js";const so={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},r={render:e=>{const n=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const n=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-d7bb43d7.js.map
