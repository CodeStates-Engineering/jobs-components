import{j as o}from"./jsx-runtime-94f6e698.js";import{M as t}from"./index-3f2d4a1e.js";import"./index-64131664.js";import"./index-7de20644.js";import{a as M,b}from"./index-11ff5a16.js";import{B as u}from"./index-1f9ff373.js";import{D as h}from"./dummy-d4c113ac.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-55cabe27.js";import"./index-e8ed409c.js";import"./useComponentSelfState-dbdc13dc.js";import"./index-e3b5ba34.js";import"./useValidation-c7011735.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./index-21cc8640.js";import"./index-fff92b81.js";import"./useTypography-0e7bc425.js";import"./index-e5314f3d.js";import"./index-8c4fe83c.js";import"./index-593abce4.js";import"./index-3233e711.js";import"./index-a622c86c.js";import"./index-66071242.js";import"./index-18252df3.js";import"./index-d48365f7.js";import"./index-3ac12258.js";import"./isObject-3c28966c.js";import"./_nodeUtil-14e51ba2.js";import"./isNumber-3648e59b.js";import"./index-3e179838.js";import"./index-4c0e71f5.js";import"./index-47d8ffac.js";import"./index-4ea2d728.js";import"./index-a0964943.js";import"./index-1acf8cdf.js";import"./PartnerAccordion-da4dce26.js";import"./index-7832614d.js";import"./x-59731629.js";import"./index-536397c8.js";import"./index-1f3975f6.js";import"./index-b3577b86.js";import"./index-2bfb62af.js";const so={title:"organisms/Modal",component:t,decorators:[e=>o.jsx("div",{style:{height:"100vh",width:"100%"},children:o.jsx(e,{})})]},r={render:e=>{const n=M(),{search:i}=b();return o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.Header,{}),o.jsx(t.Body,{children:o.jsx("p",{children:h.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}},a={render:e=>{const n=M(),{search:i}=b();return o.jsxs(o.Fragment,{children:[o.jsx(u,{onClick:()=>{n("/?tab=1")},children:"Open"}),o.jsxs(t,{...e,opened:i.includes("?tab="),onClose:()=>n("/"),children:[o.jsx(t.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),o.jsx(t.Body,{children:o.jsx("p",{children:h.COMMON.TEXT_MIDDLE})}),o.jsx(t.Footer,{children:"footer children"})]})]})}};var s,p,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
//# sourceMappingURL=index.stories-3a6dcc0b.js.map
