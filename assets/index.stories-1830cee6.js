import{j as o}from"./jsx-runtime-94f6e698.js";import{M as t}from"./index-c97e78e8.js";import"./index-64131664.js";import"./index-e17f63f7.js";import{a as M,b}from"./index-11ff5a16.js";import{B as u}from"./index-f062656d.js";import{D as h}from"./dummy-d4c113ac.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-be544d0a.js";import"./index-fdae86ba.js";import"./index-a1ddcb1d.js";import"./index-e3b5ba34.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./useSubscribedState-bb41ec23.js";import"./index-2ef5c3bc.js";import"./isObject-9c705d90.js";import"./_Uint8Array-6bb687c3.js";import"./useValidation-c7011735.js";import"./index-451d21b4.js";import"./index-8ce4a492.js";import"./index-52ce7348.js";import"./useTypography-0e7bc425.js";import"./getLabelSpace-93dbff15.js";import"./index-8e918fe9.js";import"./index-61b68f43.js";import"./index-5578ffa0.js";import"./index-f9c9acdd.js";import"./index-a622c86c.js";import"./index-fad85d3a.js";import"./index-b3d93ab1.js";import"./index-a133ddb2.js";import"./index-81f88399.js";import"./x-59731629.js";import"./index-d6a1844c.js";import"./index-47d8ffac.js";import"./index-dee1c1e3.js";import"./index-40aa4d00.js";import"./index-71ef373e.js";import"./index-2063f6c3.js";import"./index-2458afaf.js";import"./index-d384cd4d.js";import"./index-140557ef.js";import"./index-4ae0e288.js";import"./index-cd554a09.js";import"./index-847bd6e1.js";const lo={title:"organisms/Modal",component:t,decorators:[r=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(r,{})})]},n={render:r=>{const e=M(),{search:i}=b();return o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:()=>{e("/?tab=1")},children:"Open"}),o.jsxs(t,{...r,opened:i.includes("?tab="),onClose:()=>e("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:h.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:r=>{const e=M(),{search:i}=b();return o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:()=>{e("/?tab=1")},children:"Open"}),o.jsxs(t,{...r,opened:i.includes("?tab="),onClose:()=>e("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:h.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,m;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,d,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const co=["Default","WithTabMenu"];export{n as Default,a as WithTabMenu,co as __namedExportsOrder,lo as default};
//# sourceMappingURL=index.stories-1830cee6.js.map
