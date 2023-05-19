import{j as e}from"./jsx-runtime-94f6e698.js";import{M as i}from"./index-19196741.js";import"./index-6341e715.js";import{a as p,b}from"./index-11ff5a16.js";import{B as g}from"./index-b17e5302.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-64131664.js";import"./index-be0484c4.js";import"./index-3e4e37f5.js";import"./useComponentSelfState-dbdc13dc.js";import"./index-e3b5ba34.js";import"./useValidation-c7011735.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./index-82c4d97d.js";import"./index-fc2f7366.js";import"./index-61379bb2.js";import"./index-2393d075.js";import"./index-691f5940.js";import"./index-204571b2.js";import"./index-dfb347d1.js";import"./index-ef0f85a2.js";import"./index-00ebdd1d.js";import"./index-36549e96.js";import"./index-f809112e.js";import"./index-88025800.js";import"./index-1b82c0cc.js";import"./index-61119cb6.js";import"./PartnerAccordion-af525165.js";import"./index-8a85531b.js";import"./index-a8660a1c.js";import"./index-70f483cc.js";import"./isObject-3c28966c.js";import"./index-9ed5f40c.js";import"./useTypography-0e7bc425.js";import"./index-bb6046a9.js";import"./index-71e7a600.js";const h=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
consectetur vulputate ultrices. Proin vestibulum velit et ornare lacinia.
Sed consequat, enim quis mollis ultrices, sem diam pulvinar ligula,
suscipit laoreet leo tellus et urna. Aliquam cursus justo vitae
scelerisque egestas. Praesent hendrerit pharetra purus, at elementum
tortor facilisis a. Ut placerat, ex eu iaculis scelerisque, odio ante
rutrum lorem, id tincidunt enim augue sed felis. In ante metus, dignissim
non est nec, ultrices pulvinar est. Fusce ac accumsan turpis, eget
fermentum augue. Curabitur odio massa, tincidunt vitae condimentum nec,
iaculis et augue. Nunc sapien eros, congue sit amet enim sed, malesuada
elementum felis. Curabitur auctor, magna egestas tincidunt tristique, nisl
enim malesuada felis, eu laoreet ligula urna in sapien. Vestibulum commodo
tincidunt felis, eget euismod sapien lacinia nec. Sed a quam diam.
Maecenas in tortor dolor. Mauris eros tortor, tincidunt quis blandit
vitae, finibus ut augue. Nunc ac facilisis sem. Suspendisse maximus eros
aliquet blandit volutpat. Aenean ac tortor rhoncus, venenatis diam sit
amet, porta tortor. Sed sit amet ante sit amet lectus sollicitudin
pretium. Sed a odio ligula. Curabitur porta ex sit amet mauris condimentum
finibus. Nam in augue dolor. Vivamus at purus sed augue iaculis lacinia.
Duis congue sem nisi, non cursus tortor porttitor non. Morbi commodo
consectetur erat et aliquet. Quisque ullamcorper faucibus neque a luctus.
Aliquam semper tortor lorem. Nunc ac ante eu velit porta dapibus et
maximus libero. Donec non magna eu dolor ullamcorper pulvinar eget sed
urna. Ut condimentum velit non nibh sagittis, ac pharetra nisi
sollicitudin. Mauris blandit suscipit sapien. Etiam at turpis quis mauris
lacinia semper quis ac tellus. Curabitur ut pretium odio. Sed nunc eros,
faucibus id ipsum et, ultricies iaculis nisl. Nunc pretium, enim a ornare
malesuada, enim sapien venenatis risus, in facilisis nibh dolor nec mi.
Etiam ut lorem dictum lorem vehicula dapibus ac in dui. Nunc dignissim a
quam egestas pharetra. Nunc rutrum ipsum nec quam ultrices ultrices. Donec
sed justo vel nunc tempor accumsan. Mauris maximus sodales bibendum.
Aliquam non odio convallis, efficitur velit non, convallis augue. Sed id
arcu sem. Donec interdum leo nunc, id condimentum ligula fringilla non.
Nullam eros sapien, ultricies nec felis ac, mattis ullamcorper quam.
Quisque at aliquam neque, mollis pellentesque turpis. Cras at arcu vitae
quam fermentum volutpat. Nunc eu sapien nisi. Orci varius natoque
penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean
tincidunt libero vitae ante bibendum pellentesque. Mauris tempus bibendum
orci, non mattis nisi. Phasellus fringilla ut nisi ultrices convallis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus est ut
enim molestie, in condimentum eros aliquet.`,ie={title:"organisms/Modal",component:i,decorators:[t=>e.jsx("div",{style:{height:"100vh",width:"100%"},children:e.jsx(t,{})})]},n={render:t=>{const a=p(),{search:o}=b();return e.jsxs(e.Fragment,{children:[e.jsx(g,{onClick:()=>{a("/?tab=1")},children:"Open"}),e.jsxs(i,{...t,opened:o.includes("?tab="),onClose:()=>a("/"),children:[e.jsx(i.Header,{}),e.jsx(i.Body,{children:e.jsx("p",{children:h})}),e.jsx(i.Footer,{children:"footer children"})]})]})}},s={render:t=>{const a=p(),{search:o}=b();return e.jsxs(e.Fragment,{children:[e.jsx(g,{onClick:()=>{a("/?tab=1")},children:"Open"}),e.jsxs(i,{...t,opened:o.includes("?tab="),onClose:()=>a("/"),children:[e.jsx(i.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),e.jsx(i.Body,{children:e.jsx("p",{children:h})}),e.jsx(i.Footer,{children:"footer children"})]})]})}};var r,u,l;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
            <p>{DUMMY_TEXT}</p>
          </Modal.Body>
          <Modal.Footer>footer children</Modal.Footer>
        </Modal>
      </>;
  }
}`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
            <p>{DUMMY_TEXT}</p>
          </Modal.Body>
          <Modal.Footer>footer children</Modal.Footer>
        </Modal>
      </>;
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const te=["Default","WithTabMenu"];export{n as Default,s as WithTabMenu,te as __namedExportsOrder,ie as default};
//# sourceMappingURL=index.stories-70801148.js.map
