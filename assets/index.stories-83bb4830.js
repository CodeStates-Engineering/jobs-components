import{j as o}from"./jsx-runtime-94f6e698.js";import{I as r}from"./index-06a2e329.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Compatibility-ff615e1c.js";import"./useValidate-6cc225ca.js";import"./ValidationContext-e5b2e92a.js";const a={table:{disable:!0}},I={options:["small","medium","large"],control:"radio",description:"컴포넌트의 크기를 설정합니다."},e={INPUT:{table:{category:"Input"}},WRAP:{table:{category:"Input.Wrap"}}},f={title:"atoms/Input",component:r,args:{placeholder:"placeholder",type:"text",value:"",size:"large",width:"250px"},argTypes:{ref:a,onChange:a,type:e.INPUT,disabled:e.INPUT,size:{...I,...e.WRAP},borderRadius:{...e.WRAP,options:["4","8"],control:"radio"},description:{...e.WRAP,control:"text"},width:{...e.WRAP,control:"text"},fontSize:e.INPUT,fontWeight:e.INPUT,value:{...e.INPUT,control:{type:"text"}},placeholder:{...e.INPUT},validationMessage:{...e.WRAP,control:{type:"text"}}}},t={render:({size:p,borderRadius:d,width:l,validationMessage:c,description:u,...m})=>o.jsx(r.Wrap,{size:p,borderRadius:d,width:l,validationMessage:c,description:u,children:o.jsx(r,{...m})})};var s,i,n;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ({
    size,
    borderRadius,
    width,
    validationMessage,
    description,
    ...args
  }) => <Input.Wrap size={size} borderRadius={borderRadius} width={width} validationMessage={validationMessage} description={description}>
      <Input {...args} />
    </Input.Wrap>
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,f as default};
//# sourceMappingURL=index.stories-83bb4830.js.map
