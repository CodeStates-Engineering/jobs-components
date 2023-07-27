import{j as o}from"./jsx-runtime-94f6e698.js";import"./index-01176f47.js";import{V as b}from"./DUMMY-fece25f5.js";import{M as t}from"./index-991c2c66.js";import{a as u,b as h}from"./index-11ff5a16.js";import{B as M}from"./index-be4b3035.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-deafe901.js";import"./Compatibility-ff615e1c.js";import"./useValidate-35dacfe7.js";import"./ValidationContext-e5b2e92a.js";import"./index-4638bb2d.js";import"./index-1fc0ca9a.js";import"./index-f8b3a911.js";import"./index-8ce4a492.js";import"./index-2ace6af6.js";import"./index-0f9d52b5.js";import"./index-f159dff6.js";import"./index-72bf1363.js";import"./index-61f800a8.js";import"./isObject-5520b7e1.js";import"./index-1116b26a.js";import"./index-f061eb3c.js";import"./index-d9746f38.js";import"./useSubscribedState-de42f63a.js";import"./_Uint8Array-d55c0654.js";import"./chevron-down-735b3f0e.js";import"./index-0ea470b7.js";import"./index-6ef46971.js";import"./index-d2ca3f69.js";import"./index-b39a803f.js";import"./index-47722a4b.js";import"./index-44b05abd.js";import"./x-59731629.js";import"./index-231a2c00.js";import"./index-cd3107ed.js";import"./index-8dac5067.js";import"./index-53a590ef.js";import"./index-5f12f9a5.js";import"./index-d384cd4d.js";import"./index-570c5d9b.js";import"./index-fa1f8391.js";import"./index-73c0b0be.js";import"./index-b6a80f68.js";const po={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},n={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const r=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{r("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>r("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-f4b04abe.js.map
