import{j as e}from"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import{C as v}from"./Compatibility-ff615e1c.js";import{u as y}from"./useValidate-1adf1d19.js";import{c as g}from"./ValidationContext-e5b2e92a.js";const k="_link_3cis0_461",a={link:k,"hover-type-underline":"_hover-type-underline_3cis0_467","hover-type-color-change":"_hover-type-color-change_3cis0_470","color-puple-550":"_color-puple-550_3cis0_473","color-puple-600":"_color-puple-600_3cis0_479","color-bluish-gray-600":"_color-bluish-gray-600_3cis0_485","color-bluish-gray-700":"_color-bluish-gray-700_3cis0_491","color-bluish-gray-800":"_color-bluish-gray-800_3cis0_497","fade-in":"_fade-in_3cis0_1","fade-out":"_fade-out_3cis0_1","shake-horizontal":"_shake-horizontal_3cis0_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_3cis0_1","slide-in-fwd-center":"_slide-in-fwd-center_3cis0_1","scale-in-center":"_scale-in-center_3cis0_1","slide-in-right":"_slide-in-right_3cis0_1","slide-in-left":"_slide-in-left_3cis0_1","slide-out-right":"_slide-out-right_3cis0_1","slide-out-left":"_slide-out-left_3cis0_1","scale-in-top":"_scale-in-top_3cis0_1","scale-out-top":"_scale-out-top_3cis0_1","swing-in-top-fwd":"_swing-in-top-fwd_3cis0_1","fade-in-top":"_fade-in-top_3cis0_1","fade-out-top":"_fade-out-top_3cis0_1","fade-in-bottom":"_fade-in-bottom_3cis0_1","fade-out-bottom":"_fade-out-bottom_3cis0_1","scale-out-horizontal":"_scale-out-horizontal_3cis0_1"},r=({color:n="puple-550",hoverType:t="underline",fontSize:s,fontWeight:u,to:i,replace:c,type:d="link",className:p,children:_=e.jsx(e.Fragment,{}),target:m,...f})=>{const{typographyClassName:h}=y({fontSize:s,fontWeight:u}),l={...f,children:_,className:g(`${a.link} ${a[`color-${n}`]} ${t!=="none"&&a[`hover-type-${t}`]} ${h} ${p}`)};switch(d){case"button":return e.jsx("button",{...l});case"span":return e.jsx("span",{...l});default:{const o={...l,target:m};return i?e.jsx(v.Link,{...o,to:i,replace:c}):e.jsx("a",{...o})}}};try{r.displayName="Link",r.__docgenInfo={description:"",displayName:"Link",props:{onClick:{defaultValue:null,description:"Optional event handler for when Link is clicked.",name:"onClick",required:!1,type:{name:"(MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<LinkTypeElement>)"}},onMouseEnter:{defaultValue:null,description:"Optional event handler for when the mouse pointer is moved onto Link",name:"onMouseEnter",required:!1,type:{name:"(MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<LinkTypeElement>)"}},onTouchStart:{defaultValue:null,description:"Optional event handler for when Link is touched.",name:"onTouchStart",required:!1,type:{name:"(TouchEventHandler<HTMLAnchorElement> & TouchEventHandler<LinkTypeElement>)"}},replace:{defaultValue:null,description:"Replace the current `history` state instead of adding a new url into the stack.\n@defaultValue `false`",name:"replace",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"puple-550"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"puple-550"'},{value:'"puple-600"'},{value:'"bluish-gray-600"'},{value:'"bluish-gray-700"'},{value:'"bluish-gray-800"'}]}},hoverType:{defaultValue:{value:"underline"},description:"",name:"hoverType",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"underline"'},{value:'"color-change"'}]}},type:{defaultValue:{value:"link"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"link"'},{value:'"span"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},to:{defaultValue:null,description:"",name:"to",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"HTMLAttributeAnchorTarget"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small3x"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"large4x"'},{value:'"large3x"'},{value:'"large2x"'},{value:'"normal"'},{value:'"small2x"'}]}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:"700"},{value:"500"},{value:"400"}]}}}}}catch{}export{r as L};
//# sourceMappingURL=index-fc1ebfc2.js.map
