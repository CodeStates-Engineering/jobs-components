import{j as o}from"./jsx-runtime-94f6e698.js";import{M as t}from"./index-a2c7b305.js";import{D as M}from"./dummy-d4c113ac.js";import"./ValidationContext-e5b2e92a.js";import"./index-da69c834.js";import{a as b,b as u}from"./index-11ff5a16.js";import{B as h}from"./index-298b594d.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-83cdcd61.js";import"./index-a5e610a6.js";import"./Compatibility-ff615e1c.js";import"./useValidate-c0172170.js";import"./useSubscribedState-7383d0ac.js";import"./index-20d446cd.js";import"./isObject-9c705d90.js";import"./_Uint8Array-6bb687c3.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./index-72406ddc.js";import"./index-deda4382.js";import"./index-8ce4a492.js";import"./index-d355d1b9.js";import"./index-c4a0b449.js";import"./index-96aa7df4.js";import"./index-385bd19a.js";import"./index-f159dff6.js";import"./index-1eb4d110.js";import"./index-9a223840.js";import"./index-4e63b199.js";import"./index-c18279d4.js";import"./x-59731629.js";import"./index-7149aad2.js";import"./index-72bf1363.js";import"./index-24573a42.js";import"./index-1116b26a.js";import"./index-50f2a328.js";import"./index-374cb818.js";import"./index-fd357284.js";import"./index-d384cd4d.js";import"./index-094012aa.js";import"./index-c0da1d9e.js";import"./index-c1ef5c58.js";import"./index-673633f1.js";const so={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},r={render:e=>{const n=b(),{search:i}=u();return o.jsxs(o.Fragment,{children:[o.jsx(h,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:M.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const n=b(),{search:i}=u();return o.jsxs(o.Fragment,{children:[o.jsx(h,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:M.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-d3e58d2e.js.map
