import{j as o}from"./jsx-runtime-94f6e698.js";import{I as r}from"./index-4a400540.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Compatibility-ff615e1c.js";import"./useValidationMessage-20be1c63.js";import"./ValidationContext-e5b2e92a.js";const a={table:{disable:!0}},m={options:["small","medium","large"],control:"radio",description:"컴포넌트의 크기를 설정합니다."},e={INPUT:{table:{category:"Input"}},WRAP:{table:{category:"Input.Wrap"}}},b={title:"atoms/Input",component:r,args:{placeholder:"placeholder",type:"text",value:"",size:"large",width:"250px"},argTypes:{ref:a,onChange:a,type:e.INPUT,disabled:e.INPUT,size:{...m,...e.WRAP},borderRadius:{...e.WRAP,options:["4","8"],control:"radio"},width:{...e.WRAP,control:"text"},fontSize:e.INPUT,fontWeight:e.INPUT,value:{...e.INPUT,control:{type:"text"}},placeholder:{...e.INPUT},validationMessage:{...e.WRAP,control:{type:"text"}}}},t={render:({size:p,borderRadius:d,width:l,validationMessage:c,...u})=>o.jsx(r.Wrap,{size:p,borderRadius:d,width:l,validationMessage:c,children:o.jsx(r,{...u})})};var s,n,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ({
    size,
    borderRadius,
    width,
    validationMessage,
    ...args
  }) => <Input.Wrap size={size} borderRadius={borderRadius} width={width} validationMessage={validationMessage}>
      <Input {...args} />
    </Input.Wrap>
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,b as default};
//# sourceMappingURL=index.stories-55c02c0c.js.map
