import{j as e}from"./jsx-runtime-94f6e698.js";import{M as i}from"./index-8ac59aab.js";import"./index-a52c3ec3.js";import{a as b,b as v}from"./index-11ff5a16.js";import{B as h}from"./index-85fe2785.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-64131664.js";import"./index-8d79b17c.js";import"./useComponentSelfState-dbdc13dc.js";import"./index-e3b5ba34.js";import"./useValidation-c7011735.js";import"./chevron-down-735b3f0e.js";import"./index-1fc0ca9a.js";import"./index-f1d4be6e.js";import"./index-bc98936d.js";import"./index-58c7faf8.js";import"./index-6c3eb542.js";import"./index-1580e1df.js";import"./index-48cc5343.js";import"./index-8b42daac.js";import"./index-f799b55c.js";import"./index-84ce3a3c.js";import"./index-e3427287.js";import"./index-628080d2.js";import"./index-dd6302b2.js";import"./index-6f0f2d7c.js";import"./index-40c7080e.js";import"./index-2a531a4b.js";import"./index-00eb5d5e.js";import"./PartnerAccordion-a5ea7529.js";import"./index-388aeb87.js";import"./index-31028963.js";import"./useTypography-0e7bc425.js";import"./index-636e19d2.js";import"./index-300c5525.js";import"./isObject-3c28966c.js";const te={title:"organisms/Modal",component:i},c=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
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
enim molestie, in condimentum eros aliquet.`,d=p=>{const n=b(),{search:g}=v();return e.jsxs("div",{style:{height:"100vh",width:"100%"},children:[e.jsx(h,{onClick:()=>{n("/?tab=1")},children:"Open"}),e.jsx(i,{...p,opened:g.includes("?tab="),onClose:()=>n("/")})]})},t=d.bind({}),f={children:e.jsxs(e.Fragment,{children:[e.jsx(i.Header,{}),e.jsx(i.Body,{children:e.jsx("p",{children:c})}),e.jsx(i.Footer,{children:"footer children"})]})};t.args=f;const a=d.bind({});a.args={children:e.jsxs(e.Fragment,{children:[e.jsx(i.TabMenuHeader,{items:[{label:"Tab 1",to:"/?tab=1"},{label:"Tab 2",to:"/?tab=2"},{label:"Tab 3",to:"/?tab=3"},{label:"Tab 4",to:"/?tab=4"}]}),e.jsx(i.Body,{children:e.jsx("p",{children:c})}),e.jsx(i.Footer,{children:"footer children"})]})};var s,r,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const navigate = useNavigate();
  const {
    search
  } = useLocation();
  return <div style={{
    height: '100vh',
    width: '100%'
  }}>
      <Button onClick={() => {
      navigate('/?tab=1');
    }}>
        Open
      </Button>
      <Modal {...args} opened={search.includes('?tab=')} onClose={() => navigate('/')} />
    </div>;
}`,...(u=(r=t.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};var o,l,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  const navigate = useNavigate();
  const {
    search
  } = useLocation();
  return <div style={{
    height: '100vh',
    width: '100%'
  }}>
      <Button onClick={() => {
      navigate('/?tab=1');
    }}>
        Open
      </Button>
      <Modal {...args} opened={search.includes('?tab=')} onClose={() => navigate('/')} />
    </div>;
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const ae=["Default","WithTabMenu"];export{t as Default,a as WithTabMenu,ae as __namedExportsOrder,te as default};
//# sourceMappingURL=index.stories-d3592009.js.map
