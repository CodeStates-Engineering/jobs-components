import{j as o}from"./jsx-runtime-94f6e698.js";import{r as d}from"./index-8db94870.js";import{O as l}from"./index-e468d445.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-e3b5ba34.js";import"./index-64131664.js";import"./useTypography-0e7bc425.js";import"./index-1fc0ca9a.js";const j={title:"atoms/Options",component:l,argTypes:{opened:{control:"boolean"},float:{options:["top","bottom"],control:"radio",defaultValue:"bottom"},options:{control:"object"},multiple:{control:"boolean",description:"옵션을 여러개 선택할 수 있다.",defaultValue:!1}},args:{opened:!0,float:"top",multiple:!1,options:Array.from({length:100},(t,e)=>({label:`Test label ${e}${e%7===0?" is long text: aurora sunrise eunoia vanilla iris adorable kitten laptop lucid sunrise shine banana adorable moonlight melody haze sunrise vanilla girlish blossom":""}`,value:`${e}번 옵션이 선택`}))},decorators:[t=>o.jsx("article",{style:{position:"relative",height:650,padding:"10px 0"},children:o.jsx("div",{style:{margin:"500px auto",position:"relative",width:"400px"},children:o.jsx(t,{})})})]},a={render:t=>{const[e,s]=d.useState();return o.jsx(l,{...t,value:e,onChange:s})}},r={args:{multiple:!0},render:t=>{const[e,s]=d.useState();return o.jsx(l,{...t,value:e,onChange:s})}};var n,i,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = createState<ValidOptionValue | ValidOptionValue[]>();
    return <Options {...props} value={value} onChange={setValue} />;
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,c,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [value, setValue] = createState<ValidOptionValue | ValidOptionValue[]>();
    return <Options {...props} value={value} onChange={setValue} />;
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const S=["Default","Multiple"];export{a as Default,r as Multiple,S as __namedExportsOrder,j as default};
//# sourceMappingURL=index.stories-62011c68.js.map
