import{j as o}from"./jsx-runtime-4ca860c5.js";import"./DUMMY-096d32b1.js";import{I as r}from"./index-05b4ea30.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./Compatibility-d1e3055b.js";import"./useValidate-6435b2ea.js";import"./cleanClassName-cdc1ff81.js";import"./index-75de0a99.js";const a={table:{disable:!0}},I={options:["small","medium","large"],control:"radio",description:"컴포넌트의 크기를 설정합니다."},t={INPUT:{table:{category:"Input"}},WRAP:{table:{category:"Input.Wrap"}}},N={title:"atoms/Input",component:r,args:{placeholder:"placeholder",type:"text",value:"",size:"large",width:"250px"},argTypes:{ref:a,onChange:a,type:t.INPUT,disabled:t.INPUT,size:{...I,...t.WRAP},borderRadius:{...t.WRAP,options:["4","8"],control:"radio"},description:{...t.WRAP,control:"text"},width:{...t.WRAP,control:"text"},fontSize:t.INPUT,fontWeight:t.INPUT,value:{...t.INPUT,control:{type:"text"}},placeholder:{...t.INPUT},validationMessage:{...t.WRAP,control:{type:"text"}},readOnly:{...t.WRAP,control:"text"}}},e={render:({size:p,borderRadius:d,width:l,validationMessage:c,description:m,...u})=>o.jsx(r.Wrap,{size:p,borderRadius:d,width:l,validationMessage:c,description:m,children:o.jsx(r,{...u})})};var i,n,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,N as default};
//# sourceMappingURL=index.stories-ca930e86.js.map
