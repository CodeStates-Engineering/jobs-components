import{j as o}from"./jsx-runtime-4ca860c5.js";import"./DUMMY-096d32b1.js";import{I as r}from"./index-05c6675e.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./Compatibility-d1e3055b.js";import"./useValidate-6330b2cf.js";import"./cleanClassName-cdc1ff81.js";const a={table:{disable:!0}},I={options:["small","medium","large"],control:"radio",description:"컴포넌트의 크기를 설정합니다."},t={INPUT:{table:{category:"Input"}},WRAP:{table:{category:"Input.Wrap"}}},y={title:"atoms/Input",component:r,args:{placeholder:"placeholder",type:"text",value:"",size:"large",width:"250px"},argTypes:{ref:a,onChange:a,type:t.INPUT,disabled:t.INPUT,size:{...I,...t.WRAP},borderRadius:{...t.WRAP,options:["4","8"],control:"radio"},description:{...t.WRAP,control:"text"},width:{...t.WRAP,control:"text"},fontSize:t.INPUT,fontWeight:t.INPUT,value:{...t.INPUT,control:{type:"text"}},placeholder:{...t.INPUT},validationMessage:{...t.WRAP,control:{type:"text"}},readOnly:{...t.WRAP,control:"text"}}},e={render:({size:p,borderRadius:d,width:l,validationMessage:c,description:m,...u})=>o.jsx(r.Wrap,{size:p,borderRadius:d,width:l,validationMessage:c,description:m,children:o.jsx(r,{...u})})};var n,s,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const N=["Default"];export{e as Default,N as __namedExportsOrder,y as default};
//# sourceMappingURL=index.stories-32bf43df.js.map
