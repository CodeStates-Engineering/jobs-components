import{j as o}from"./jsx-runtime-9bc08dc0.js";import"./DUMMY-096d32b1.js";import{I as r}from"./index-8146761d.js";import"./index-29a85313.js";import"./useTypographyClassName-e8640df1.js";import"./cleanClassName-cdc1ff81.js";import"./ValidationContext-b0a2edd5.js";import"./index-cefa53ee.js";const a={table:{disable:!0}},t={INPUT:{table:{category:"Input"}},WRAP:{table:{category:"Input.Wrap"}}},f={title:"atoms/Input",component:r,args:{placeholder:"placeholder",type:"text",value:"",size:"large",width:"250px"},argTypes:{ref:a,onChange:a,type:t.INPUT,disabled:t.INPUT,size:{options:["small","medium","large"],control:"radio",description:"컴포넌트의 크기를 설정합니다.",...t.WRAP},borderRadius:{...t.WRAP,options:["4","8"],control:"radio"},description:{...t.WRAP,control:"text"},width:{...t.WRAP,control:"text"},fontSize:t.INPUT,fontWeight:t.INPUT,value:{...t.INPUT,control:{type:"text"}},placeholder:{...t.INPUT},validationMessage:{...t.WRAP,control:{type:"text"}},readOnly:{...t.WRAP,control:"text"}}},e={render:({size:p,borderRadius:d,width:l,validationMessage:c,description:m,...u})=>o.jsx(r.Wrap,{size:p,borderRadius:d,width:l,validationMessage:c,description:m,children:o.jsx(r,{...u})})};var i,n,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,f as default};
