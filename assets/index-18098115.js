import{j as l}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{C as S}from"./index-e3b5ba34.js";import{c as B}from"./index-64131664.js";import{u as C}from"./useTypography-0e7bc425.js";const T="_button_vrnvx_461",A="_padding_vrnvx_529",E="_icon_vrnvx_581",W="_delaying_vrnvx_622",k="_white_purple600_vrnvx_626",M="_purple600_0_vrnvx_680",e={button:T,"delayed-button":"_delayed-button_vrnvx_462","font-size-large4x":"_font-size-large4x_vrnvx_481","font-size-large3x":"_font-size-large3x_vrnvx_485","font-size-large2x":"_font-size-large2x_vrnvx_489","font-size-large":"_font-size-large_vrnvx_481","font-size-medium":"_font-size-medium_vrnvx_497","font-size-normal":"_font-size-normal_vrnvx_501","font-size-small":"_font-size-small_vrnvx_505","font-size-small2x":"_font-size-small2x_vrnvx_509","font-size-small3x":"_font-size-small3x_vrnvx_513","font-weight-700":"_font-weight-700_vrnvx_517","font-weight-500":"_font-weight-500_vrnvx_521","font-weight-400":"_font-weight-400_vrnvx_525",padding:A,"children-type-text":"_children-type-text_vrnvx_529","children-type-icon":"_children-type-icon_vrnvx_533","children-type-both":"_children-type-both_vrnvx_537","size-small3x":"_size-small3x_vrnvx_541","size-small":"_size-small_vrnvx_541","size-medium":"_size-medium_vrnvx_557","size-large":"_size-large_vrnvx_565","shape-default":"_shape-default_vrnvx_573","shape-round":"_shape-round_vrnvx_577","icon-direction-left":"_icon-direction-left_vrnvx_581","icon-direction-right":"_icon-direction-right_vrnvx_585","text-align-left":"_text-align-left_vrnvx_589","text-align-center":"_text-align-center_vrnvx_593","text-align-right":"_text-align-right_vrnvx_597","button-content":"_button-content_vrnvx_602",icon:E,"delay-bar":"_delay-bar_vrnvx_614",delaying:W,white_purple600:k,"white_bluish-gray800":"_white_bluish-gray800_vrnvx_653",purple600_0:M,"bluish-gray700_0":"_bluish-gray700_0_vrnvx_712","bluish-gray300_0":"_bluish-gray300_0_vrnvx_744","bluish-gray500_0":"_bluish-gray500_0_vrnvx_776","bluish-gray400_0_bluish-gray200":"_bluish-gray400_0_bluish-gray200_vrnvx_808","bluish-gray700_0_bluish-gray200":"_bluish-gray700_0_bluish-gray200_vrnvx_835","bluish-gray400_bluish-gray10_bluish-gray200":"_bluish-gray400_bluish-gray10_bluish-gray200_vrnvx_862","fade-in":"_fade-in_vrnvx_1","fade-out":"_fade-out_vrnvx_1","shake-horizontal":"_shake-horizontal_vrnvx_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_vrnvx_1","slide-in-fwd-center":"_slide-in-fwd-center_vrnvx_1","scale-in-center":"_scale-in-center_vrnvx_1","slide-in-right":"_slide-in-right_vrnvx_1","slide-in-left":"_slide-in-left_vrnvx_1","slide-out-right":"_slide-out-right_vrnvx_1","slide-out-left":"_slide-out-left_vrnvx_1","scale-in-top":"_scale-in-top_vrnvx_1","scale-out-top":"_scale-out-top_vrnvx_1","swing-in-top-fwd":"_swing-in-top-fwd_vrnvx_1","fade-in-top":"_fade-in-top_vrnvx_1","fade-out-top":"_fade-out-top_vrnvx_1","fade-in-bottom":"_fade-in-bottom_vrnvx_1","fade-out-bottom":"_fade-out-bottom_vrnvx_1","scale-out-horizontal":"_scale-out-horizontal_vrnvx_1"},f=({delay:t,type:x="button",children:n,size:g="large",theme:c="white/purple600",onClick:m,disabled:i=!1,shape:p="default",iconDirection:h="left",icon:a,padding:y=!0,fontSize:b="normal",fontWeight:z=700,focusOutline:w=!0,className:$,width:s,textAlign:q="center"})=>{const[o,r]=u.useState("after"),v=u.useMemo(()=>a&&n?"both":a?"icon":"text",[a,n]);S.useLayoutEffect(()=>{!i&&t&&(r("before"),setTimeout(()=>r("delaying")),setTimeout(()=>r("after"),t))},[t,i]);const d=o==="delaying",_=o==="before"||d,V=i||_,{fontSizeClassName:N,fontWeightClassName:j}=C(b,z),D=u.useMemo(()=>({width:s}),[s]);return l.jsxs("button",{type:x,className:B(`${_?e["delayed-button"]:e.button} ${e[N]} ${e[j]} ${w&&e["focus-outline"]} ${e[`shape-${p}`]} ${e[`size-${g}`]} ${e[`icon-direction-${h}`]} ${e[`children-type-${v}`]} ${e[c.replaceAll("/","_")]} ${y&&e.padding} ${$}
        ${v!=="icon"&&e[`text-align-${q}`]}
        `),onClick:m,disabled:V,style:D,children:[t&&_?l.jsx("div",{className:`${e["delay-bar"]} ${d&&e.delaying}`,style:{transition:`transform ${t/1e3}s linear`}}):null,n&&l.jsx("div",{className:e["button-content"],children:n}),a?l.jsx("div",{className:`${e["button-content"]} ${e.icon}`,children:a}):null]})};try{f.displayName="Button",f.__docgenInfo={description:"",displayName:"Button",props:{delay:{defaultValue:null,description:"",name:"delay",required:!1,type:{name:"number"}},size:{defaultValue:{value:"large"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small3x"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},theme:{defaultValue:{value:"white/purple600"},description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"white/purple600"'},{value:'"white/bluish-gray800"'},{value:'"purple600/0"'},{value:'"bluish-gray700/0"'},{value:'"bluish-gray300/0"'},{value:'"bluish-gray500/0"'},{value:'"bluish-gray400/0/bluish-gray200"'},{value:'"bluish-gray700/0/bluish-gray200"'},{value:'"bluish-gray400/bluish-gray10/bluish-gray200"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},iconDirection:{defaultValue:{value:"left"},description:"",name:"iconDirection",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},shape:{defaultValue:{value:"default"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"round"'},{value:'"default"'}]}},padding:{defaultValue:{value:"true"},description:"",name:"padding",required:!1,type:{name:"boolean"}},focusOutline:{defaultValue:{value:"true"},description:"",name:"focusOutline",required:!1,type:{name:"boolean"}},textAlign:{defaultValue:{value:"center"},description:"",name:"textAlign",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},fontSize:{defaultValue:{value:"normal"},description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"small3x"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"large4x"'},{value:'"large3x"'},{value:'"large2x"'},{value:'"normal"'},{value:'"small2x"'}]}},fontWeight:{defaultValue:{value:"700"},description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:"700"},{value:"500"},{value:"400"}]}}}}}catch{}export{f as B};
//# sourceMappingURL=index-18098115.js.map