import{j as a}from"./jsx-runtime-94f6e698.js";import{r as i}from"./index-8db94870.js";import{O as n}from"./index-2e847129.js";import"./_commonjsHelpers-042e6b4d.js";import"./Compatibility-ff615e1c.js";import"./useValidate-395f5a50.js";import"./cleanClassName-cdc1ff81.js";import"./index-1fc0ca9a.js";const y={title:"atoms/Options",component:n,argTypes:{opened:{control:"boolean"},float:{options:["top","bottom"],control:"radio",defaultValue:"bottom"},options:{control:"object"},multiple:{control:"boolean",description:"옵션을 여러개 선택할 수 있다.",defaultValue:!1}},args:{opened:!0,float:"top",multiple:!1,options:Array.from({length:100},(t,e)=>({label:`Test label ${e}${e%7===0?" is long text: aurora sunrise eunoia vanilla iris adorable kitten laptop lucid sunrise shine banana adorable moonlight melody haze sunrise vanilla girlish blossom":""}`,value:`${e}번 옵션이 선택`})),textEllipsis:!1},decorators:[t=>a.jsx("article",{style:{position:"relative",height:650,padding:"10px 0"},children:a.jsx("div",{style:{margin:"500px auto",position:"relative",width:"400px"},children:a.jsx(t,{})})})]},o={render:t=>{const[e,r]=i.useState();return a.jsx(n,{...t,value:e,onChange:r})}},s={args:{multiple:!0},render:t=>{const[e,r]=i.useState();return a.jsx(n,{...t,value:e,onChange:r})}},l={args:{textEllipsis:!0},render:t=>{const[e,r]=i.useState();return a.jsx(n,{...t,value:e,onChange:r})}};var p,u,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = createState<ValidOptionValue | ValidOptionValue[]>();
    return <Options {...props} value={value} onChange={setValue} />;
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,m,V;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    multiple: true
  },
  render: props => {
    const [value, setValue] = createState<ValidOptionValue | ValidOptionValue[]>();
    return <Options {...props} value={value} onChange={setValue} />;
  }
}`,...(V=(m=s.parameters)==null?void 0:m.docs)==null?void 0:V.source}}};var g,v,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    textEllipsis: true
  },
  render: props => {
    const [value, setValue] = createState<ValidOptionValue | ValidOptionValue[]>();
    return <Options {...props} value={value} onChange={setValue} />;
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const T=["Default","Multiple","TextEllipsis"];export{o as Default,s as Multiple,l as TextEllipsis,T as __namedExportsOrder,y as default};
//# sourceMappingURL=index.stories-612de53f.js.map
