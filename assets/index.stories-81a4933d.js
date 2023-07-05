import{j as o}from"./jsx-runtime-94f6e698.js";import{M as t}from"./index-17611b22.js";import{D as M}from"./dummy-d4c113ac.js";import"./ValidationContext-e5b2e92a.js";import"./index-12b9ef81.js";import{a as b,b as u}from"./index-11ff5a16.js";import{B as h}from"./index-e4e7b397.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-37624db2.js";import"./index-e7e43b5b.js";import"./Compatibility-ff615e1c.js";import"./useValidate-1adf1d19.js";import"./useSubscribedState-aad59d56.js";import"./index-7e43b948.js";import"./isObject-9c705d90.js";import"./_Uint8Array-6bb687c3.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./index-76987ea9.js";import"./index-536b847a.js";import"./index-8ce4a492.js";import"./index-5ffe1939.js";import"./index-cdc30b05.js";import"./index-ccc5771f.js";import"./index-aab8a23c.js";import"./index-f159dff6.js";import"./index-bedfff83.js";import"./index-7df9dac5.js";import"./index-64541078.js";import"./index-049ced10.js";import"./x-59731629.js";import"./index-938851cc.js";import"./index-72bf1363.js";import"./index-53e59ef0.js";import"./index-1116b26a.js";import"./index-8000c752.js";import"./index-f93982ff.js";import"./index-eb322f61.js";import"./index-d384cd4d.js";import"./index-87e2fca6.js";import"./index-578a328a.js";import"./index-5414c6ba.js";import"./index-fc1ebfc2.js";const so={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},r={render:e=>{const n=b(),{search:i}=u();return o.jsxs(o.Fragment,{children:[o.jsx(h,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:M.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const n=b(),{search:i}=u();return o.jsxs(o.Fragment,{children:[o.jsx(h,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:M.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-81a4933d.js.map
