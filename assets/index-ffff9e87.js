import{j as i}from"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import"./Compatibility-ff615e1c.js";import{u as d}from"./useValidate-2a0eec53.js";import{c as g}from"./ValidationContext-e5b2e92a.js";const m="_label_ggbaw_461",p="_row_ggbaw_486",f="_column_ggbaw_490",t={label:m,"space-small":"_space-small_ggbaw_466","space-medium":"_space-medium_ggbaw_471","space-large":"_space-large_ggbaw_476","label-container":"_label-container_ggbaw_482",row:p,column:f,"fade-in":"_fade-in_ggbaw_1","fade-out":"_fade-out_ggbaw_1","shake-horizontal":"_shake-horizontal_ggbaw_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_ggbaw_1","slide-in-fwd-center":"_slide-in-fwd-center_ggbaw_1","scale-in-center":"_scale-in-center_ggbaw_1","slide-in-right":"_slide-in-right_ggbaw_1","slide-in-left":"_slide-in-left_ggbaw_1","slide-out-right":"_slide-out-right_ggbaw_1","slide-out-left":"_slide-out-left_ggbaw_1","scale-in-top":"_scale-in-top_ggbaw_1","scale-out-top":"_scale-out-top_ggbaw_1","swing-in-top-fwd":"_swing-in-top-fwd_ggbaw_1","fade-in-top":"_fade-in-top_ggbaw_1","fade-out-top":"_fade-out-top_ggbaw_1","fade-in-bottom":"_fade-in-bottom_ggbaw_1","fade-out-bottom":"_fade-out-bottom_ggbaw_1","scale-out-horizontal":"_scale-out-horizontal_ggbaw_1"},r=({children:o,htmlFor:e,className:a,fontSize:n="small",space:s="none",fontWeight:u=500})=>{const{typographyClassName:c}=d({fontSize:n,fontWeight:u});return i.jsx("label",{htmlFor:e,className:g(`${t.label} ${t[`space-${s}`]} ${c} ${a}`),children:o})},l=({children:o,className:e,direction:a="column"})=>i.jsx("div",{className:g(`${t["label-container"]} ${t[a]} ${e}`),children:o}),w=({className:o,label:e,labelStyle:a,inputStyle:n,children:s})=>i.jsxs(l,{direction:a==null?void 0:a.direction,className:o,children:[e?i.jsx(r,{fontSize:a==null?void 0:a.fontSize,fontWeight:a==null?void 0:a.fontWeight,space:(a==null?void 0:a.direction)==="row"?(n==null?void 0:n.size)??"large":"none",htmlFor:e,children:e}):null,s]}),_=Object.assign(r,{Container:l,WithInput:w});try{_.displayName="Label",_.__docgenInfo={description:"",displayName:"Label",props:{space:{defaultValue:{value:"none"},description:"",name:"space",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"none"'}]}},fontSize:{defaultValue:{value:"small"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small3x"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"large4x"'},{value:'"large3x"'},{value:'"large2x"'},{value:'"normal"'},{value:'"small2x"'}]}},fontWeight:{defaultValue:{value:"500"},description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:"700"},{value:"500"},{value:"400"}]}}}}}catch{}export{_ as L};
//# sourceMappingURL=index-ffff9e87.js.map