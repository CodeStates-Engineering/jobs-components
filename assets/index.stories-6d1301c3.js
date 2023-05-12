import{j as i}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{O as p}from"./index-1580e1df.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-e3b5ba34.js";import"./index-64131664.js";import"./index-1fc0ca9a.js";const h={title:"atoms/Options",component:p},n=[];for(let t=0;t<100;t+=1)n.push({label:`Test label ${t}${t%7===0?" is long text: aurora sunrise eunoia vanilla iris adorable kitten laptop lucid sunrise shine banana adorable moonlight melody haze sunrise vanilla girlish blossom":""}`,value:`${t}번 옵션이 선택`});const d=t=>{const[s,l]=u.useState();return i.jsx("div",{children:i.jsxs("div",{style:{position:"relative",width:300},children:[JSON.stringify(s),i.jsx(p,{...t,value:s,options:n,onSelect:m=>{l(m)}})]})})},o=d.bind({});o.args={opened:!0,options:n};var e,r,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`args => {
  const [option, setOption] = useState<DummyOption | DummyOption[]>();
  return <div>
      <div style={{
      position: 'relative',
      width: 300
    }}>
        {JSON.stringify(option)}
        <Options {...args} value={option} options={dummyOptions} onSelect={option => {
        setOption(option);
      }} />
      </div>
    </div>;
}`,...(a=(r=o.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const S=["Default"];export{o as Default,S as __namedExportsOrder,h as default};
//# sourceMappingURL=index.stories-6d1301c3.js.map
