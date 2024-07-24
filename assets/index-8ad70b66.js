import{j as d}from"./jsx-runtime-4ca860c5.js";import{r as n}from"./index-61bf1805.js";import{C as w}from"./Compatibility-d1e3055b.js";import{a as D}from"./useValidate-983984d3.js";import{c as B}from"./cleanClassName-cdc1ff81.js";const C="_button_gjoyu_461",S="_padding_gjoyu_479",T="_delaying_gjoyu_572",e={button:C,"delayed-button":"_delayed-button_gjoyu_462",padding:S,"children-type-text":"_children-type-text_gjoyu_479","children-type-icon":"_children-type-icon_gjoyu_483","children-type-both":"_children-type-both_gjoyu_487","size-small3x":"_size-small3x_gjoyu_491","size-small2x":"_size-small2x_gjoyu_499","size-small":"_size-small_gjoyu_491","size-medium":"_size-medium_gjoyu_515","size-large":"_size-large_gjoyu_523","shape-4":"_shape-4_gjoyu_531","shape-8":"_shape-8_gjoyu_535","shape-pill":"_shape-pill_gjoyu_539","icon-direction-left":"_icon-direction-left_gjoyu_543","icon-direction-right":"_icon-direction-right_gjoyu_547","text-align-left":"_text-align-left_gjoyu_551","text-align-center":"_text-align-center_gjoyu_555","text-align-right":"_text-align-right_gjoyu_559","delay-bar":"_delay-bar_gjoyu_564",delaying:T,"contained-purple550":"_contained-purple550_gjoyu_576","contained-purple600":"_contained-purple600_gjoyu_603","contained-bluishGray600":"_contained-bluishGray600_gjoyu_630","contained-bluishGray700":"_contained-bluishGray700_gjoyu_657","contained-bluishGray800":"_contained-bluishGray800_gjoyu_684","ghost-purple600":"_ghost-purple600_gjoyu_711","ghost-bluishGray300":"_ghost-bluishGray300_gjoyu_743","ghost-bluishGray400":"_ghost-bluishGray400_gjoyu_775","ghost-bluishGray500":"_ghost-bluishGray500_gjoyu_807","ghost-bluishGray600":"_ghost-bluishGray600_gjoyu_839","ghost-bluishGray700":"_ghost-bluishGray700_gjoyu_871","ghost-bluishGray800":"_ghost-bluishGray800_gjoyu_903","outlined-bluishGray400":"_outlined-bluishGray400_gjoyu_935","outlined-bluishGray500":"_outlined-bluishGray500_gjoyu_962","outlined-bluishGray600":"_outlined-bluishGray600_gjoyu_989","outlined-bluishGray700":"_outlined-bluishGray700_gjoyu_1016","outlined-bluishGray800":"_outlined-bluishGray800_gjoyu_1043","fade-in":"_fade-in_gjoyu_1","fade-out":"_fade-out_gjoyu_1","shake-horizontal":"_shake-horizontal_gjoyu_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_gjoyu_1","slide-in-fwd-center":"_slide-in-fwd-center_gjoyu_1","scale-in-center":"_scale-in-center_gjoyu_1","slide-in-right":"_slide-in-right_gjoyu_1","slide-in-left":"_slide-in-left_gjoyu_1","slide-out-right":"_slide-out-right_gjoyu_1","slide-out-left":"_slide-out-left_gjoyu_1","scale-in-top":"_scale-in-top_gjoyu_1","scale-out-top":"_scale-out-top_gjoyu_1","swing-in-top-fwd":"_swing-in-top-fwd_gjoyu_1","fade-in-top":"_fade-in-top_gjoyu_1","fade-out-top":"_fade-out-top_gjoyu_1","fade-in-bottom":"_fade-in-bottom_gjoyu_1","fade-out-bottom":"_fade-out-bottom_gjoyu_1","scale-out-horizontal":"_scale-out-horizontal_gjoyu_1"},g=({delay:a,type:p="button",children:t,size:c="large",color:h="purple600",variant:m="contained",onClick:f,disabled:u=!1,shape:j="8",iconDirection:b="left",icon:l,padding:v=!0,fontSize:G="normal",fontWeight:x=700,className:$,width:s,textAlign:z="center"})=>{const[r,i]=n.useState("after"),_=n.useMemo(()=>l&&t?"both":l?"icon":"text",[l,t]);w.useLayoutEffect(()=>{!u&&a&&(i("before"),setTimeout(()=>i("delaying")),setTimeout(()=>i("after"),a))},[a,u]);const y=r==="delaying",o=r==="before"||y,q=u||o,{typographyClassName:V}=D({fontSize:G,fontWeight:x}),N=n.useMemo(()=>({width:s}),[s]);return d.jsxs("button",{type:p,className:B(`${o?e["delayed-button"]:e.button} ${V} ${e[`shape-${j}`]} ${e[`size-${c}`]} ${e[`icon-direction-${b}`]} ${e[`children-type-${_}`]} ${e[`${m}-${h}`]} ${v&&e.padding} ${$}
        ${_!=="icon"&&e[`text-align-${z}`]}
        `),onClick:f,disabled:q,style:N,children:[a&&o?d.jsx("div",{className:`${e["delay-bar"]} ${y&&e.delaying}`,style:{transition:`transform ${a/1e3}s linear`}}):null,t,l&&l]})};try{g.displayName="Button",g.__docgenInfo={description:"",displayName:"Button",props:{delay:{defaultValue:null,description:"",name:"delay",required:!1,type:{name:"number"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small3x"'},{value:'"small2x"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},variant:{defaultValue:{value:"contained"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"contained"'},{value:'"ghost"'},{value:'"outlined"'}]}},color:{defaultValue:{value:"purple600"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"purple550"'},{value:'"purple600"'},{value:'"bluishGray300"'},{value:'"bluishGray400"'},{value:'"bluishGray500"'},{value:'"bluishGray600"'},{value:'"bluishGray700"'},{value:'"bluishGray800"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconDirection:{defaultValue:{value:"left"},description:"",name:"iconDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},shape:{defaultValue:{value:"8"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"pill"'},{value:'"8"'},{value:'"4"'}]}},padding:{defaultValue:{value:"true"},description:"",name:"padding",required:!1,type:{name:"boolean"}},textAlign:{defaultValue:{value:"center"},description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},fontSize:{defaultValue:{value:"normal"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small3x"'},{value:'"small2x"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"large4x"'},{value:'"large3x"'},{value:'"large2x"'},{value:'"normal"'},{value:'"small4x"'}]}},fontWeight:{defaultValue:{value:"700"},description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:"700"},{value:"600"},{value:"500"},{value:"400"}]}}}}}catch{}export{g as B};
//# sourceMappingURL=index-8ad70b66.js.map
