import{j as o}from"./jsx-runtime-94f6e698.js";import{r as f}from"./index-8db94870.js";import{O as i}from"./index-61e499c3.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-85fe2785.js";import"./index-e3b5ba34.js";import"./index-64131664.js";import"./useTypography-0e7bc425.js";import"./index-6c3eb542.js";import"./index-8f534833.js";import"./index-1fc0ca9a.js";import"./index-f1d4be6e.js";import"./index-bc98936d.js";import"./index-31028963.js";import"./index-f799b55c.js";import"./index-636e19d2.js";import"./index-6f0f2d7c.js";import"./index-300c5525.js";import"./isObject-3c28966c.js";import"./index-2a531a4b.js";import"./index-fb8131f8.js";const q={title:"atoms/Options",component:i,argTypes:{opened:{control:"boolean"},float:{options:["top","bottom"],control:"radio",defaultValue:"bottom"},options:{control:"object"},multiple:{control:"boolean",description:"옵션을 여러개 선택할 수 있다.",defaultValue:!1}},args:{opened:!0,float:"top",multiple:!1,options:Array.from({length:100},(e,t)=>({label:`Test label ${t}${t%7===0?" is long text: aurora sunrise eunoia vanilla iris adorable kitten laptop lucid sunrise shine banana adorable moonlight melody haze sunrise vanilla girlish blossom":""}`,value:`${t}번 옵션이 선택`}))},decorators:[e=>o.jsx("article",{style:{position:"relative",height:650,padding:"10px 0"},children:o.jsx("div",{style:{margin:"300px auto",position:"relative",width:"400px"},children:o.jsx(e,{})})})]},r={render:e=>{const[t,n]=f.useState();return o.jsx(i,{...e,value:t,onSelect:s=>{n(s)}})}},a={args:{multiple:!0},render:e=>{const[t,n]=f.useState();return o.jsx(i,{...e,value:t,onSelect:s=>{n(s)}})}};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = createState<Option | Option[]>();
    return <Options {...props} value={value} onSelect={option => {
      setValue((option as Option | Option[] | undefined));
    }} />;
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,c,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [value, setValue] = createState<Option | Option[]>();
    return <Options {...props} value={value} onSelect={option => {
      setValue((option as Option | Option[] | undefined));
    }} />;
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const B=["Default","Multiple"];export{r as Default,a as Multiple,B as __namedExportsOrder,q as default};
//# sourceMappingURL=index.stories-7531f49d.js.map
