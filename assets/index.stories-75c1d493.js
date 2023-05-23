import{j as o}from"./jsx-runtime-94f6e698.js";import{r as f}from"./index-8db94870.js";import{O as i}from"./index-30e7e290.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-0a3bc302.js";import"./index-e3b5ba34.js";import"./index-64131664.js";import"./useTypography-0e7bc425.js";import"./index-d7ffa274.js";import"./index-e06e8374.js";import"./index-1fc0ca9a.js";import"./index-2cc1c834.js";import"./index-bee25875.js";import"./index-4cc6ae76.js";import"./index-dfb347d1.js";import"./index-bb6046a9.js";import"./index-f809112e.js";import"./index-71e7a600.js";import"./isObject-3c28966c.js";import"./index-1b82c0cc.js";const R={title:"atoms/Options",component:i,argTypes:{opened:{control:"boolean"},float:{options:["top","bottom"],control:"radio",defaultValue:"bottom"},options:{control:"object"},multiple:{control:"boolean",description:"옵션을 여러개 선택할 수 있다.",defaultValue:!1}},args:{opened:!0,float:"top",multiple:!1,options:Array.from({length:100},(e,t)=>({label:`Test label ${t}${t%7===0?" is long text: aurora sunrise eunoia vanilla iris adorable kitten laptop lucid sunrise shine banana adorable moonlight melody haze sunrise vanilla girlish blossom":""}`,value:`${t}번 옵션이 선택`}))},decorators:[e=>o.jsx("article",{style:{position:"relative",height:650,padding:"10px 0"},children:o.jsx("div",{style:{margin:"300px auto",position:"relative",width:"400px"},children:o.jsx(e,{})})})]},r={render:e=>{const[t,n]=f.useState();return o.jsx(i,{...e,value:t,onSelect:s=>{n(s)}})}},a={args:{multiple:!0},render:e=>{const[t,n]=f.useState();return o.jsx(i,{...e,value:t,onSelect:s=>{n(s)}})}};var p,l,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const q=["Default","Multiple"];export{r as Default,a as Multiple,q as __namedExportsOrder,R as default};
//# sourceMappingURL=index.stories-75c1d493.js.map