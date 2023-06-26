import{j as o}from"./jsx-runtime-94f6e698.js";import{M as t}from"./index-1885ce2e.js";import{D as M}from"./dummy-d4c113ac.js";import"./createValidationStore-9cc55e44.js";import"./index-280a7a6b.js";import{a as b,b as u}from"./index-11ff5a16.js";import{B as h}from"./index-20ef493e.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-cb87f10b.js";import"./index-08cff8ad.js";import"./Compatibility-ff615e1c.js";import"./useValidationMessageDynamicHeight-c093b2ff.js";import"./useSubscribedState-d224731e.js";import"./index-95587434.js";import"./isObject-9c705d90.js";import"./_Uint8Array-6bb687c3.js";import"./useValidation-758ab0b6.js";import"./getLabelSpace-93dbff15.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./index-c9ff944a.js";import"./index-8ce4a492.js";import"./index-7ef333bc.js";import"./useTypography-0e7bc425.js";import"./index-18979c30.js";import"./index-ec85f418.js";import"./index-1b5e49c4.js";import"./index-70d3af3e.js";import"./index-ec911853.js";import"./index-05f4c517.js";import"./index-0283c955.js";import"./index-988828b4.js";import"./index-a010493c.js";import"./x-59731629.js";import"./index-4793fcb4.js";import"./index-0e910321.js";import"./index-8115c590.js";import"./index-38ade355.js";import"./index-60f2ecbb.js";import"./index-2f46e3c6.js";import"./index-6aa160c5.js";import"./index-d384cd4d.js";import"./index-ecb19415.js";import"./index-e3ccd798.js";import"./index-8bb7776d.js";import"./index-2af0e2c6.js";const lo={title:"organisms/Modal",component:t,decorators:[r=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(r,{})})]},n={render:r=>{const e=b(),{search:i}=u();return o.jsxs(o.Fragment,{children:[o.jsx(h,{onClick:()=>{e("/?tab=1")},children:"Open"}),o.jsxs(t,{...r,opened:i.includes("?tab="),onClose:()=>e("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:M.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:r=>{const e=b(),{search:i}=u();return o.jsxs(o.Fragment,{children:[o.jsx(h,{onClick:()=>{e("/?tab=1")},children:"Open"}),o.jsxs(t,{...r,opened:i.includes("?tab="),onClose:()=>e("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:M.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,m;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-876447d7.js.map
