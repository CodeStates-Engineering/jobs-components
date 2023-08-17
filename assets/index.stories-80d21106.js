import{j as t}from"./jsx-runtime-4ca860c5.js";import{r as f}from"./index-61bf1805.js";import"./index-74145f2a.js";import{c as i}from"./cleanClassName-cdc1ff81.js";import{B as q}from"./index-d2ec6a27.js";import{O as N}from"./index-4c710db6.js";import"./_commonjsHelpers-de833af9.js";import"./index-ea5f1602.js";import"./Compatibility-d1e3055b.js";import"./useValidate-d7ad1bb5.js";import"./index-686a01cd.js";import"./index-2801d3c9.js";import"./index-6d48dfed.js";import"./index-98e9e194.js";import"./index-576e98e6.js";import"./index-5240e4a2.js";import"./index-6b889a79.js";import"./index-e6fc3cfe.js";import"./index-8d47fad6.js";const B="_options_13qa0_1",p={"options-button-container":"_options-button-container_13qa0_1",options:B},l=({value:e,onChange:a,options:o,optionStyle:r,float:y="bottom",textEllipsis:g,className:v,buttonStyle:b,buttonContent:x})=>{const[h,u]=f.useState(!1),{className:_,...S}=b;return t.jsxs("div",{className:i(`${p["options-button-container"]} ${v}`),children:[t.jsx(q,{className:i(_),onClick:()=>u(n=>!n),...S,children:x}),t.jsx(N,{opened:h,className:i(`${p.options}`),options:o==null?void 0:o.map(({label:n,value:V})=>({label:n,value:V})),value:e,onChange:n=>{u(!1),a==null||a(n)},textEllipsis:g,optionStyle:r,float:y})]})};try{l.displayName="OptionsButton",l.__docgenInfo={description:"",displayName:"OptionsButton",props:{options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"{ label: string; value: string; }[]"}},buttonStyle:{defaultValue:null,description:"",name:"buttonStyle",required:!0,type:{name:"ButtonProps"}},buttonContent:{defaultValue:null,description:"",name:"buttonContent",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value?: string) => void)"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},textEllipsis:{defaultValue:null,description:"",name:"textEllipsis",required:!1,type:{name:"boolean"}},float:{defaultValue:{value:"bottom"},description:"",name:"float",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},optionStyle:{defaultValue:null,description:"",name:"optionStyle",required:!1,type:{name:'(UseTypographyClassNameParams & Pick<CSSProperties, "width" | "maxHeight">)'}}}}}catch{}const J={title:"organisms/OptionsButton",component:l,args:{buttonStyle:{fontSize:"small",size:"small",theme:"bluish-gray700/0"},buttonContent:"공개 설정하기",optionStyle:{fontSize:"small2x",fontWeight:500},options:[{label:"공개",value:"공개"},{label:"비공개",value:"비공개"}],textEllipsis:!0,float:"top"},decorators:[e=>t.jsx("div",{style:{height:"600px",width:"100%",padding:"300px"},children:t.jsx(e,{})})]},s={render:e=>{const[a,o]=f.useState("");return t.jsx(l,{...e,value:a,onChange:r=>{o(r)}})}};var m,d,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string | undefined>('');
    return <OptionsButton {...args} value={value} onChange={value => {
      setValue(value);
    }} />;
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const K=["Default"];export{s as Default,K as __namedExportsOrder,J as default};
//# sourceMappingURL=index.stories-80d21106.js.map
