import{j as o}from"./jsx-runtime-9bc08dc0.js";import{B as b}from"./index-0df07bff.js";import"./index-8146761d.js";import"./index-1f14f509.js";import"./index-92545bc7.js";import"./index-15456ba4.js";import"./index-cf6925de.js";import"./index-26cd43b5.js";import"./index-1accccac.js";import"./index-20667a64.js";import"./index-84868488.js";import{V as u}from"./DUMMY-096d32b1.js";import{M as t}from"./index-c910ac6d.js";import{u as h,a as M}from"./index-bdaa4d27.js";import"./index-29a85313.js";import"./Compatibility-31c3a9ab.js";import"./useTypographyClassName-e8640df1.js";import"./cleanClassName-cdc1ff81.js";import"./ValidationContext-b0a2edd5.js";import"./index-cefa53ee.js";import"./index-1f0ffab8.js";import"./index-e644ce29.js";import"./isObject-9c705d90.js";import"./index-16c5f01a.js";import"./useValidationMessage-243d7212.js";import"./useSubscribedState-3b03a615.js";import"./_Uint8Array-ad07ee63.js";import"./chevron-down-5b615074.js";import"./index-63b4897c.js";import"./index-259baffc.js";import"./index-673a817b.js";import"./index-01c78001.js";import"./index-9d7f2b4c.js";import"./index-0e3039e4.js";import"./x-a4e0184a.js";import"./index-bea0b9dd.js";import"./index-0f73428f.js";import"./index-2527f996.js";import"./index-26b5651c.js";import"./index-c5e25c0c.js";import"./index-eb294396.js";import"./index-ed7350e6.js";import"./index-95f72cee.js";import"./index-d0637553.js";import"./index-38a24daf.js";import"./index-ae973a17.js";const lo={title:"organisms/Modal",component:t,decorators:[r=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(r,{})})]},n={render:r=>{const e=h(),{search:i}=M();return o.jsxs(o.Fragment,{children:[o.jsx(b,{onClick:()=>{e("/?tab=1")},children:"Open"}),o.jsxs(t,{...r,opened:i.includes("?tab="),onClose:()=>e("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:u})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:r=>{const e=h(),{search:i}=M();return o.jsxs(o.Fragment,{children:[o.jsx(b,{onClick:()=>{e("/?tab=1")},children:"Open"}),o.jsxs(t,{...r,opened:i.includes("?tab="),onClose:()=>e("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:u})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
