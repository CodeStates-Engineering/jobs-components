import{j as e}from"./jsx-runtime-94f6e698.js";import{I as c}from"./index-6c3eb542.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-64131664.js";const g={title:"atoms/Input",component:c,args:{placeholder:"placeholder",value:""},argTypes:{value:{control:{type:"text"}}},decorators:[n=>e.jsx("article",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:e.jsx(n,{})})]},r={},t={render:n=>e.jsx(e.Fragment,{children:[{type:"text",value:"text"},{type:"number",value:1234567890},{type:"large-number",value:1234567890},{type:"phone-number",value:"01012345678"},{type:"business-number",value:"1234567890"}].map(({type:a,value:i})=>e.jsxs("label",{children:[a,e.jsx(c,{...n,type:a,value:i})]},a))})};var s,p,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,o,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <>
      {([{
      type: 'text',
      value: 'text'
    }, {
      type: 'number',
      value: 1234567890
    }, {
      type: 'large-number',
      value: 1234567890
    }, {
      type: 'phone-number',
      value: '01012345678'
    }, {
      type: 'business-number',
      value: '1234567890'
    }] satisfies {
      type: InputType;
      value: string | number;
    }[]).map(({
      type,
      value
    }) => <label key={type}>
          {type}
          <Input {...args} type={type} value={value} />
        </label>)}
    </>
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const f=["Default","Type"];export{r as Default,t as Type,f as __namedExportsOrder,g as default};
//# sourceMappingURL=index.stories-b61a1c16.js.map