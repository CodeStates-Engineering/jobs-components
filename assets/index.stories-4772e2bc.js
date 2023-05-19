import{j as e}from"./jsx-runtime-94f6e698.js";import{M as i}from"./index-c4865b04.js";import"./index-61e499c3.js";import{a as p,b}from"./index-11ff5a16.js";import{B as g}from"./index-85fe2785.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-64131664.js";import"./index-d643bacd.js";import"./index-286864ce.js";import"./useComponentSelfState-dbdc13dc.js";import"./index-e3b5ba34.js";import"./useValidation-c7011735.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./index-f1d4be6e.js";import"./index-bc98936d.js";import"./index-8f534833.js";import"./index-6c3eb542.js";import"./index-4a261836.js";import"./index-70b819a0.js";import"./index-f799b55c.js";import"./index-29a98016.js";import"./index-580d02ad.js";import"./index-00a688cd.js";import"./index-6f0f2d7c.js";import"./index-42cb8a3c.js";import"./index-2a531a4b.js";import"./index-df6a1cd5.js";import"./PartnerAccordion-3f1092a3.js";import"./index-d39c59a7.js";import"./index-fb8131f8.js";import"./index-31028963.js";import"./useTypography-0e7bc425.js";import"./index-636e19d2.js";import"./index-300c5525.js";import"./isObject-3c28966c.js";const h=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
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
enim molestie, in condimentum eros aliquet.`,ee={title:"organisms/Modal",component:i,decorators:[t=>e.jsx("div",{style:{height:"100vh",width:"100%"},children:e.jsx(t,{})})]},n={render:t=>{const a=p(),{search:o}=b();return e.jsxs(e.Fragment,{children:[e.jsx(g,{onClick:()=>{a("/?tab=1")},children:"Open"}),e.jsxs(i,{...t,opened:o.includes("?tab="),onClose:()=>a("/"),children:[e.jsx(i.Header,{}),e.jsx(i.Body,{children:e.jsx("p",{children:h})}),e.jsx(i.Footer,{children:"footer children"})]})]})}},s={render:t=>{const a=p(),{search:o}=b();return e.jsxs(e.Fragment,{children:[e.jsx(g,{onClick:()=>{a("/?tab=1")},children:"Open"}),e.jsxs(i,{...t,opened:o.includes("?tab="),onClose:()=>a("/"),children:[e.jsx(i.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),e.jsx(i.Body,{children:e.jsx("p",{children:h})}),e.jsx(i.Footer,{children:"footer children"})]})]})}};var r,u,l;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const ie=["Default","WithTabMenu"];export{n as Default,s as WithTabMenu,ie as __namedExportsOrder,ee as default};
//# sourceMappingURL=index.stories-4772e2bc.js.map
