(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"11tF":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),o=a.n(r),n=a("Wbzz"),c=a("RD7I"),l=(a("9eSz"),a("A2+M")),i=a("wkRo"),p=a("wd/R"),s=a.n(p),u=a("hlFM"),d=a("wx14"),m=a("Ff2n"),f=(a("17x9"),a("iuhU")),b=a("H2TA"),y=a("NqtD"),g=o.a.forwardRef((function(e,t){var a=e.children,r=e.classes,n=e.className,c=e.color,l=void 0===c?"inherit":c,i=e.component,p=void 0===i?"svg":i,s=e.fontSize,u=void 0===s?"default":s,b=e.htmlColor,g=e.titleAccess,h=e.viewBox,v=void 0===h?"0 0 24 24":h,O=Object(m.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return o.a.createElement(p,Object(d.a)({className:Object(f.a)(r.root,n,"inherit"!==l&&r["color".concat(Object(y.a)(l))],"default"!==u&&r["fontSize".concat(Object(y.a)(u))]),focusable:"false",viewBox:v,color:b,"aria-hidden":g?"false":"true",role:g?"img":"presentation",ref:t},O),a,g?o.a.createElement("title",null,g):null)}));g.muiName="SvgIcon";var h=Object(b.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(g);var v,O,S=(v=o.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),(O=o.a.memo(o.a.forwardRef((function(e,t){return o.a.createElement(h,Object(d.a)({},e,{ref:t}),v)})))).muiName=h.muiName,O),j=a("ye/S"),k=a("bfFb"),w=a("VD++"),x=o.a.forwardRef((function(e,t){var a=e.avatar,r=e.classes,n=e.className,c=e.clickable,l=e.color,i=void 0===l?"default":l,p=e.component,s=e.deleteIcon,u=e.disabled,b=void 0!==u&&u,g=e.icon,h=e.label,v=e.onClick,O=e.onDelete,j=e.onKeyUp,x=e.size,C=void 0===x?"medium":x,E=e.variant,R=void 0===E?"default":E,I=Object(m.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyUp","size","variant"]),z=o.a.useRef(null),P=Object(k.a)(z,t),L=function(e){e.stopPropagation(),O&&O(e)},T=!(!1===c||!v)||c,N="small"===C,$=p||(T?w.a:"div"),D=$===w.a?{component:"div"}:{},F=null;if(O){var M=Object(f.a)("default"!==i&&("default"===R?r["deleteIconColor".concat(Object(y.a)(i))]:r["deleteIconOutlinedColor".concat(Object(y.a)(i))]),N&&r.deleteIconSmall);F=s&&o.a.isValidElement(s)?o.a.cloneElement(s,{className:Object(f.a)(s.props.className,r.deleteIcon,M),onClick:L}):o.a.createElement(S,{className:Object(f.a)(r.deleteIcon,M),onClick:L})}var A=null;a&&o.a.isValidElement(a)&&(A=o.a.cloneElement(a,{className:Object(f.a)(r.avatar,a.props.className,N&&r.avatarSmall,"default"!==i&&r["avatarColor".concat(Object(y.a)(i))])}));var X=null;return g&&o.a.isValidElement(g)&&(X=o.a.cloneElement(g,{className:Object(f.a)(r.icon,g.props.className,N&&r.iconSmall,"default"!==i&&r["iconColor".concat(Object(y.a)(i))])})),o.a.createElement($,Object(d.a)({role:T||O?"button":void 0,className:Object(f.a)(r.root,n,"default"!==i&&[r["color".concat(Object(y.a)(i))],T&&r["clickableColor".concat(Object(y.a)(i))],O&&r["deletableColor".concat(Object(y.a)(i))]],"default"!==R&&[r.outlined,{primary:r.outlinedPrimary,secondary:r.outlinedSecondary}[i]],b&&r.disabled,N&&r.sizeSmall,T&&r.clickable,O&&r.deletable),"aria-disabled":!!b||void 0,tabIndex:T||O?0:void 0,onClick:v,onKeyUp:function(e){if(j&&j(e),e.currentTarget===e.target){var t=e.key;!O||"Backspace"!==t&&"Delete"!==t?"Escape"===t&&z.current&&z.current.blur():O(e)}},ref:P},D,I),A||X,o.a.createElement("span",{className:Object(f.a)(r.label,N&&r.labelSmall)},h),F)})),C=Object(b.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(j.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(j.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(j.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(j.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(j.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(j.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(j.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(j.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(j.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(j.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{display:"flex",alignItems:"center",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(j.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(j.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(j.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(j.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(j.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(x),E=a("ofer"),R=a("Z3vd"),I=a("ma3e");a.d(t,"default",(function(){return L})),a.d(t,"pageQuery",(function(){return T}));var z=Object(c.a)((function(){return{article:{lineHeight:1.6,fontFamily:"Merriweather, Georgia, serif",fontSize:"1.1rem","& blockquote":{borderLeft:"3px solid #303032",marginLeft:-16,paddingLeft:13,fontStyle:"italic"}},chip:{marginRight:4}}})),P=function(e){var t=e.tags,a=z();return o.a.createElement(u.a,{marginY:1},t.map((function(e){return o.a.createElement(C,{color:"primary",variant:"outlined",classes:{root:a.chip},label:e,key:e,component:n.Link,to:"/tag/"+e,onClick:function(){}})})))};function L(e){var t=e.data,a=e.pageContext,r=z(),c=t.mdx,p=c.frontmatter,d=(p.featuredImage,p.title),m=p.tags,f=c.body,b=a.previousPath,y=a.nextPath,g=a.postDate;return o.a.createElement(i.a,null,o.a.createElement(u.a,{flexGrow:1,width:"100%",maxWidth:960,marginX:"auto"},o.a.createElement(u.a,{padding:2},o.a.createElement(u.a,{marginBottom:1},o.a.createElement(E.a,{variant:"h4",style:{fontFamily:"Work Sans, -apple-system, BlinkMacSystemFont, Roboto, sans-serif"}},d),o.a.createElement(E.a,{variant:"body2"},s()(g).format("LL")),o.a.createElement(P,{tags:m})),o.a.createElement("article",{className:r.article},o.a.createElement(l.MDXRenderer,null,f)),o.a.createElement(u.a,{display:"flex"},o.a.createElement(u.a,{flexGrow:1},b&&o.a.createElement(R.a,{component:n.Link,to:b,variant:"outlined",color:"secondary"},o.a.createElement(I.a,{size:8}),o.a.createElement(u.a,{marginLeft:.5},"Previous"))),y&&o.a.createElement(R.a,{component:n.Link,to:y,variant:"outlined",color:"secondary"},o.a.createElement(u.a,{marginRight:.5},"Next"),o.a.createElement(I.b,{size:8}))))))}var T="634790653"},"A2+M":function(e,t,a){var r=a("X8hv");e.exports={MDXRenderer:r}},I5cv:function(e,t,a){var r=a("XKFU"),o=a("Kuth"),n=a("2OiF"),c=a("y3w9"),l=a("0/R4"),i=a("eeVq"),p=a("8MEG"),s=(a("dyZX").Reflect||{}).construct,u=i((function(){function e(){}return!(s((function(){}),[],e)instanceof e)})),d=!i((function(){s((function(){}))}));r(r.S+r.F*(u||d),"Reflect",{construct:function(e,t){n(e),c(t);var a=arguments.length<3?e:n(arguments[2]);if(d&&!u)return s(e,t,a);if(e==a){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(p.apply(e,r))}var i=a.prototype,m=o(l(i)?i:Object.prototype),f=Function.apply.call(e,m,t);return l(f)?f:m}})},X8hv:function(e,t,a){function r(e,t,a){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,a){var r=[null];r.push.apply(r,t);var n=new(Function.bind.apply(e,r));return a&&o(n,a.prototype),n}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a("jm62"),a("yt8O"),a("RW0V"),a("XfO3"),a("HEwt"),a("rE2o"),a("ioFf"),a("rGqo"),a("/SS/"),a("a1Th"),a("Btvt"),a("I5cv"),a("I5cv"),a("/SS/"),a("XfO3"),a("HEwt"),a("a1Th"),a("rE2o"),a("jm62"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");var p=a("q1tI"),s=a("E/Ix"),u=s.useMDXComponents,d=s.mdx,m=a("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,a=e.components,o=e.children,c=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["scope","components","children"]),i=u(a),s=m(t),f=p.useMemo((function(){if(!o)return null;var e=l({React:p,mdx:d},s),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(n(t),[""+o])).apply(void 0,[{}].concat(n(a)))}),[o,t]);return p.createElement(f,l({components:i},c))}}}]);
//# sourceMappingURL=component---src-gatsby-theme-sky-lite-templates-post-js-5f7acfaf06ef1ba03459.js.map