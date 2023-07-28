import{j as o}from"./jsx-runtime-94f6e698.js";import"./index-9851e8f3.js";import{V as b}from"./DUMMY-096d32b1.js";import{M as t}from"./index-edd26e03.js";import{a as u,b as h}from"./index-11ff5a16.js";import{B as M}from"./index-1e85bc29.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-65c2fdd0.js";import"./Compatibility-ff615e1c.js";import"./useValidate-fe71e470.js";import"./ValidationContext-e5b2e92a.js";import"./index-0e2caba4.js";import"./index-1fc0ca9a.js";import"./index-9c1733cd.js";import"./index-8ce4a492.js";import"./index-284d58f2.js";import"./index-51f28030.js";import"./index-f159dff6.js";import"./index-72bf1363.js";import"./index-38f6503f.js";import"./isObject-5520b7e1.js";import"./index-1116b26a.js";import"./index-d074f0f7.js";import"./index-7b231103.js";import"./useSubscribedState-8bf166ac.js";import"./_Uint8Array-d55c0654.js";import"./chevron-down-735b3f0e.js";import"./index-424b2814.js";import"./index-787edf6b.js";import"./index-f94ced38.js";import"./index-23db0fab.js";import"./index-d6acb62c.js";import"./index-6930b795.js";import"./x-59731629.js";import"./index-3fbaa545.js";import"./index-3b5501a8.js";import"./index-9a000c49.js";import"./index-14557613.js";import"./index-31c695f5.js";import"./index-d384cd4d.js";import"./index-28f57622.js";import"./index-1ea0abbd.js";import"./index-7881001d.js";import"./index-c6ecb558.js";const po={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},n={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-08c12e1e.js.map
