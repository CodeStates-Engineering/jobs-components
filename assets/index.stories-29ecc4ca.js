import{j as o}from"./jsx-runtime-94f6e698.js";import"./DUMMY-096d32b1.js";import{I as r}from"./index-65c2fdd0.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./Compatibility-ff615e1c.js";import"./useValidate-fe71e470.js";import"./ValidationContext-e5b2e92a.js";const a={table:{disable:!0}},I={options:["small","medium","large"],control:"radio",description:"컴포넌트의 크기를 설정합니다."},t={INPUT:{table:{category:"Input"}},WRAP:{table:{category:"Input.Wrap"}}},N={title:"atoms/Input",component:r,args:{placeholder:"placeholder",type:"text",value:"",size:"large",width:"250px"},argTypes:{ref:a,onChange:a,type:t.INPUT,disabled:t.INPUT,size:{...I,...t.WRAP},borderRadius:{...t.WRAP,options:["4","8"],control:"radio"},description:{...t.WRAP,control:"text"},width:{...t.WRAP,control:"text"},fontSize:t.INPUT,fontWeight:t.INPUT,value:{...t.INPUT,control:{type:"text"}},placeholder:{...t.INPUT},validationMessage:{...t.WRAP,control:{type:"text"}}}},e={render:({size:p,borderRadius:d,width:l,validationMessage:c,description:m,...u})=>o.jsx(r.Wrap,{size:p,borderRadius:d,width:l,validationMessage:c,description:m,children:o.jsx(r,{...u})})};var s,i,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,N as default};
//# sourceMappingURL=index.stories-29ecc4ca.js.map
