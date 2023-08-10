import{j as o}from"./jsx-runtime-94f6e698.js";import"./index-9cbe1128.js";import{V as b}from"./DUMMY-096d32b1.js";import{M as t}from"./index-c12002ba.js";import{a as u,b as h}from"./index-11ff5a16.js";import{B as M}from"./index-c720573b.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-bc6a96dd.js";import"./Compatibility-ff615e1c.js";import"./useValidate-8b7306c6.js";import"./cleanClassName-cdc1ff81.js";import"./index-1b42ff34.js";import"./index-1fc0ca9a.js";import"./index-d42fc47d.js";import"./index-8ce4a492.js";import"./index-55bd2212.js";import"./index-a7447f35.js";import"./index-e29dd81e.js";import"./index-a7ebed86.js";import"./index-950b02d3.js";import"./isObject-5520b7e1.js";import"./index-0aca656c.js";import"./index-b28b0fba.js";import"./index-dcc3b39b.js";import"./useSubscribedState-bcd4053f.js";import"./_Uint8Array-d55c0654.js";import"./chevron-down-735b3f0e.js";import"./index-bb5ab155.js";import"./index-5f65641d.js";import"./index-e3883016.js";import"./index-38a7d0e7.js";import"./index-428e6c4e.js";import"./index-6ebaee9f.js";import"./x-59731629.js";import"./index-88dd9fda.js";import"./index-baee6fea.js";import"./index-198785a7.js";import"./index-61e14d4e.js";import"./index-f2bd5f78.js";import"./index-d384cd4d.js";import"./index-e6156603.js";import"./index-4b479980.js";import"./index-976351c5.js";import"./index-0591c350.js";import"./index-99dbbb31.js";const lo={title:"organisms/Modal",component:t,decorators:[r=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(r,{})})]},n={render:r=>{const e=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{e("/?tab=1")},children:"Open"}),o.jsxs(t,{...r,opened:i.includes("?tab="),onClose:()=>e("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:r=>{const e=u(),{search:i}=h();return o.jsxs(o.Fragment,{children:[o.jsx(M,{onClick:()=>{e("/?tab=1")},children:"Open"}),o.jsxs(t,{...r,opened:i.includes("?tab="),onClose:()=>e("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:b})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var m,d,c;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const mo=["Default","WithTabMenu"];export{n as Default,a as WithTabMenu,mo as __namedExportsOrder,lo as default};
//# sourceMappingURL=index.stories-c1874ab3.js.map
