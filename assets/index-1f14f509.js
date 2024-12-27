import{j as d}from"./jsx-runtime-9bc08dc0.js";import{c as W}from"./index-cefa53ee.js";import{r as _,R as C}from"./index-29a85313.js";import{u as A}from"./useTypographyClassName-e8640df1.js";import"./ValidationContext-b0a2edd5.js";import{c as w}from"./cleanClassName-cdc1ff81.js";import{P as b}from"./index-1f0ffab8.js";function j(){return j=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t])}return a},j.apply(this,arguments)}function M(a,e){if(a==null)return{};var n=F(a,e),t,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(s=0;s<i.length;s++)t=i[s],!(e.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}function F(a,e){if(a==null)return{};var n={},t=Object.keys(a),s,i;for(i=0;i<t.length;i++)s=t[i],!(e.indexOf(s)>=0)&&(n[s]=a[s]);return n}var T=_.forwardRef(function(a,e){var n=a.color,t=n===void 0?"currentColor":n,s=a.size,i=s===void 0?24:s,x=M(a,["color","size"]);return C.createElement("svg",j({ref:e,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},x),C.createElement("polyline",{points:"20 6 9 17 4 12"}))});T.propTypes={color:b.string,size:b.oneOfType([b.string,b.number])};T.displayName="Check";const U=T,I="_options_e9maz_461",B="_closing_e9maz_473",D="_opening_e9maz_473",G="_top_e9maz_484",J="_bottom_e9maz_488",Q="_selected_e9maz_534",X="_hovered_e9maz_539",Y="_show_e9maz_548",m={options:I,closing:B,opening:D,"fade-in":"_fade-in_e9maz_1","fade-out":"_fade-out_e9maz_1",top:G,bottom:J,"option-container":"_option-container_e9maz_493","option-wrap":"_option-wrap_e9maz_508","option-item":"_option-item_e9maz_513",selected:Q,hovered:X,"icon-wrap":"_icon-wrap_e9maz_544",show:Y,"text-ellipsis":"_text-ellipsis_e9maz_552","shake-horizontal":"_shake-horizontal_e9maz_1","tilt-in-fwd-tr":"_tilt-in-fwd-tr_e9maz_1","slide-in-fwd-center":"_slide-in-fwd-center_e9maz_1","scale-in-center":"_scale-in-center_e9maz_1","slide-in-right":"_slide-in-right_e9maz_1","slide-in-left":"_slide-in-left_e9maz_1","slide-out-right":"_slide-out-right_e9maz_1","slide-out-left":"_slide-out-left_e9maz_1","scale-in-top":"_scale-in-top_e9maz_1","scale-out-top":"_scale-out-top_e9maz_1","swing-in-top-fwd":"_swing-in-top-fwd_e9maz_1","fade-in-top":"_fade-in-top_e9maz_1","fade-out-top":"_fade-out-top_e9maz_1","fade-in-bottom":"_fade-in-bottom_e9maz_1","fade-out-bottom":"_fade-out-bottom_e9maz_1","scale-out-horizontal":"_scale-out-horizontal_e9maz_1"},Z=({opened:a=!1,options:e,multiple:n=!1,value:t,onChange:s,onKeyDown:i,float:x="bottom",className:N,optionStyle:r,cancelable:E=!0,textEllipsis:q=!1})=>{const[p,P]=_.useState(a);_.useEffect(()=>{P(c=>c!==a?a?"opening":"closing":c)},[a]);const y=typeof p=="string",[$,h]=_.useState(-1),[R,H]=_.useMemo(()=>[{width:r==null?void 0:r.width},{maxHeight:r==null?void 0:r.maxHeight}],[r==null?void 0:r.maxHeight,r==null?void 0:r.width]);_.useEffect(()=>{if(y){const c=p==="opening";h((e==null?void 0:e.findIndex(({value:o})=>o===t))??-1);const l=setTimeout(()=>P(c),250);return()=>clearTimeout(l)}},[y,p,e,t]);const v=_.useRef([]);_.useEffect(()=>{if(p===!0&&e){const c=l=>{switch(i==null||i(l),l.key){case"ArrowUp":return l.preventDefault(),h(o=>{var u;if(o>0){const g=o-1;return(u=v.current[g])==null||u.focus(),g}return o});case"ArrowDown":return l.preventDefault(),h(o=>{var u;if(o<e.length-1){const g=o+1;return(u=v.current[g])==null||u.focus(),g}return o});case"Enter":return l.preventDefault(),h(o=>{var u;return o>=0&&((u=v.current[o])==null||u.click()),o})}};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)}},[p,e,i]);const{typographyClassName:V}=A({fontSize:r==null?void 0:r.fontSize,fontWeight:r==null?void 0:r.fontWeight});return p&&(e!=null&&e.length)?d.jsx("section",{style:R,className:w(`${m.options} ${m[x]} ${y&&m[p]} ${N}`),children:d.jsx("ul",{className:w(m["option-container"]),style:H,children:e==null?void 0:e.map(({label:c,value:l,disabled:o=!1},u)=>{const g=u===$,z=(()=>t===void 0?!1:n&&t instanceof Array?t.includes(l):t===l)();return d.jsx("li",{className:W(m["option-wrap"],{[m.disabled]:o}),children:d.jsxs("button",{type:"button",ref:f=>{v.current[u]=f},className:w(`${m["option-item"]} ${V} ${g&&m.hovered} ${z&&m.selected}`),onClick:()=>{if(n){const f=t??[],k=s;let O=f;z?E&&(O=f.filter(L=>L!==l)):O=[...f,l],k==null||k(O)}else{const f=s;f==null||f(z&&E?void 0:l)}},onMouseEnter:()=>{h(u)},children:[d.jsx("div",{className:w(q?`${m["text-ellipsis"]}`:void 0),children:c}),n?d.jsx("div",{className:w(`${m["icon-wrap"]} ${z&&m.show}`),children:d.jsx(U,{size:"1em"})}):null]})},u)})})}):d.jsx(d.Fragment,{})};Z.__docgenInfo={description:"",methods:[],displayName:"Options",props:{opened:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: OptionValue;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"OptionValue",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:`{
  label: string;
  value: OptionValue;
  disabled?: boolean;
}[]`},description:""},multiple:{required:!1,tsType:{name:"Multiple"},description:"",defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"unknown"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value?: Multiple extends true ? OptionValue[] : OptionValue,
) => void`,signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:""},float:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},optionStyle:{required:!1,tsType:{name:"intersection",raw:`UseTypographyClassNameParams &
Pick<React.CSSProperties, 'width' | 'maxHeight'>`,elements:[{name:"UseTypographyClassNameParams"},{name:"Pick",elements:[{name:"ReactCSSProperties",raw:"React.CSSProperties"},{name:"union",raw:"'width' | 'maxHeight'",elements:[{name:"literal",value:"'width'"},{name:"literal",value:"'maxHeight'"}]}],raw:"Pick<React.CSSProperties, 'width' | 'maxHeight'>"}]},description:""},cancelable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},textEllipsis:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{U as C,Z as O};
