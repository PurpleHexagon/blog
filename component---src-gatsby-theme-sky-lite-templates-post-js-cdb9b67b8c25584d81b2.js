(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"11tF":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),o=a.n(r),n=a("Wbzz"),c=a("RD7I"),l=a("9eSz"),i=a.n(l),p=a("A2+M"),s=a("wkRo"),d=a("wd/R"),u=a.n(d),m=a("hlFM"),f=a("wx14"),b=a("Ff2n"),y=(a("17x9"),a("iuhU")),g=a("H2TA"),h=a("NqtD"),v=o.a.forwardRef((function(e,t){var a=e.children,r=e.classes,n=e.className,c=e.color,l=void 0===c?"inherit":c,i=e.component,p=void 0===i?"svg":i,s=e.fontSize,d=void 0===s?"default":s,u=e.htmlColor,m=e.titleAccess,g=e.viewBox,v=void 0===g?"0 0 24 24":g,O=Object(b.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return o.a.createElement(p,Object(f.a)({className:Object(y.a)(r.root,n,"inherit"!==l&&r["color".concat(Object(h.a)(l))],"default"!==d&&r["fontSize".concat(Object(h.a)(d))]),focusable:"false",viewBox:v,color:u,"aria-hidden":m?"false":"true",role:m?"img":"presentation",ref:t},O),a,m?o.a.createElement("title",null,m):null)}));v.muiName="SvgIcon";var O=Object(g.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(v);var S,j,k=(S=o.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),(j=o.a.memo(o.a.forwardRef((function(e,t){return o.a.createElement(O,Object(f.a)({},e,{ref:t}),S)})))).muiName=O.muiName,j),w=a("ye/S"),x=a("bfFb"),C=a("VD++"),E=o.a.forwardRef((function(e,t){var a=e.avatar,r=e.classes,n=e.className,c=e.clickable,l=e.color,i=void 0===l?"default":l,p=e.component,s=e.deleteIcon,d=e.disabled,u=void 0!==d&&d,m=e.icon,g=e.label,v=e.onClick,O=e.onDelete,S=e.onKeyUp,j=e.size,w=void 0===j?"medium":j,E=e.variant,R=void 0===E?"default":E,I=Object(b.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyUp","size","variant"]),z=o.a.useRef(null),P=Object(x.a)(z,t),T=function(e){e.stopPropagation(),O&&O(e)},L=!(!1===c||!v)||c,N="small"===w,$=p||(L?C.a:"div"),D=$===C.a?{component:"div"}:{},F=null;if(O){var M=Object(y.a)("default"!==i&&("default"===R?r["deleteIconColor".concat(Object(h.a)(i))]:r["deleteIconOutlinedColor".concat(Object(h.a)(i))]),N&&r.deleteIconSmall);F=s&&o.a.isValidElement(s)?o.a.cloneElement(s,{className:Object(y.a)(s.props.className,r.deleteIcon,M),onClick:T}):o.a.createElement(k,{className:Object(y.a)(r.deleteIcon,M),onClick:T})}var A=null;a&&o.a.isValidElement(a)&&(A=o.a.cloneElement(a,{className:Object(y.a)(r.avatar,a.props.className,N&&r.avatarSmall,"default"!==i&&r["avatarColor".concat(Object(h.a)(i))])}));var X=null;return m&&o.a.isValidElement(m)&&(X=o.a.cloneElement(m,{className:Object(y.a)(r.icon,m.props.className,N&&r.iconSmall,"default"!==i&&r["iconColor".concat(Object(h.a)(i))])})),o.a.createElement($,Object(f.a)({role:L||O?"button":void 0,className:Object(y.a)(r.root,n,"default"!==i&&[r["color".concat(Object(h.a)(i))],L&&r["clickableColor".concat(Object(h.a)(i))],O&&r["deletableColor".concat(Object(h.a)(i))]],"default"!==R&&[r.outlined,{primary:r.outlinedPrimary,secondary:r.outlinedSecondary}[i]],u&&r.disabled,N&&r.sizeSmall,L&&r.clickable,O&&r.deletable),"aria-disabled":!!u||void 0,tabIndex:L||O?0:void 0,onClick:v,onKeyUp:function(e){if(S&&S(e),e.currentTarget===e.target){var t=e.key;!O||"Backspace"!==t&&"Delete"!==t?"Escape"===t&&z.current&&z.current.blur():O(e)}},ref:P},D,I),A||X,o.a.createElement("span",{className:Object(y.a)(r.label,N&&r.labelSmall)},g),F)})),R=Object(g.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(w.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(w.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(w.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(w.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(w.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(w.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(w.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(w.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(w.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(w.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{display:"flex",alignItems:"center",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(w.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(w.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(w.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(w.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(w.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(E),I=a("ofer"),z=a("Z3vd"),P=a("ma3e");a.d(t,"default",(function(){return N})),a.d(t,"pageQuery",(function(){return $}));var T=Object(c.a)((function(){return{article:{lineHeight:1.6,fontFamily:"Merriweather, Georgia, serif",fontSize:"1.1rem","& blockquote":{borderLeft:"3px solid #303032",marginLeft:-16,paddingLeft:13,fontStyle:"italic"}},chip:{marginRight:4}}})),L=function(e){var t=e.tags,a=T();return o.a.createElement(m.a,{marginY:1},t.map((function(e){return o.a.createElement(R,{color:"primary",variant:"outlined",classes:{root:a.chip},label:e,key:e,component:n.Link,to:"/tag/"+e,onClick:function(){}})})))};function N(e){var t=e.data,a=e.pageContext,r=T(),c=t.mdx,l=c.frontmatter,d=l.featuredImage,f=l.title,b=l.tags,y=c.body,g=a.previousPath,h=a.nextPath,v=a.postDate;return o.a.createElement(s.a,null,o.a.createElement(m.a,{flexGrow:1,width:"100%",maxWidth:960,marginX:"auto"},o.a.createElement(m.a,{padding:2},o.a.createElement(m.a,{marginBottom:1},o.a.createElement(I.a,{variant:"h4",style:{fontFamily:"Work Sans, -apple-system, BlinkMacSystemFont, Roboto, sans-serif"}},f),o.a.createElement(I.a,{variant:"body2"},u()(v).format("LL")),o.a.createElement(L,{tags:b})),o.a.createElement(i.a,{fluid:d.childImageSharp.fluid,style:{borderRadius:2}}),o.a.createElement("article",{className:r.article},o.a.createElement(p.MDXRenderer,null,y)),o.a.createElement(m.a,{display:"flex"},o.a.createElement(m.a,{flexGrow:1},g&&o.a.createElement(z.a,{component:n.Link,to:g,variant:"outlined",color:"secondary"},o.a.createElement(P.a,{size:8}),o.a.createElement(m.a,{marginLeft:.5},"Previous"))),h&&o.a.createElement(z.a,{component:n.Link,to:h,variant:"outlined",color:"secondary"},o.a.createElement(m.a,{marginRight:.5},"Next"),o.a.createElement(P.b,{size:8}))))))}var $="634790653"},"A2+M":function(e,t,a){var r=a("X8hv");e.exports={MDXRenderer:r}},I5cv:function(e,t,a){var r=a("XKFU"),o=a("Kuth"),n=a("2OiF"),c=a("y3w9"),l=a("0/R4"),i=a("eeVq"),p=a("8MEG"),s=(a("dyZX").Reflect||{}).construct,d=i((function(){function e(){}return!(s((function(){}),[],e)instanceof e)})),u=!i((function(){s((function(){}))}));r(r.S+r.F*(d||u),"Reflect",{construct:function(e,t){n(e),c(t);var a=arguments.length<3?e:n(arguments[2]);if(u&&!d)return s(e,t,a);if(e==a){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(p.apply(e,r))}var i=a.prototype,m=o(l(i)?i:Object.prototype),f=Function.apply.call(e,m,t);return l(f)?f:m}})},X8hv:function(e,t,a){function r(e,t,a){return(r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,a){var r=[null];r.push.apply(r,t);var n=new(Function.bind.apply(e,r));return a&&o(n,a.prototype),n}).apply(null,arguments)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a("jm62"),a("yt8O"),a("RW0V"),a("XfO3"),a("HEwt"),a("rE2o"),a("ioFf"),a("rGqo"),a("/SS/"),a("a1Th"),a("Btvt"),a("I5cv"),a("jm62"),a("yt8O"),a("RW0V"),a("XfO3"),a("HEwt"),a("rE2o"),a("ioFf"),a("rGqo"),a("/SS/"),a("a1Th"),a("Btvt"),a("I5cv"),a("I5cv"),a("/SS/"),a("XfO3"),a("HEwt"),a("a1Th"),a("rE2o"),a("jm62"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");var p=a("q1tI"),s=a("E/Ix"),d=s.useMDXComponents,u=s.mdx,m=a("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,a=e.components,o=e.children,c=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["scope","components","children"]),i=d(a),s=m(t),f=p.useMemo((function(){if(!o)return null;var e=l({React:p,mdx:u},s),t=Object.keys(e),a=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(n(t),[""+o])).apply(void 0,[{}].concat(n(a)))}),[o,t]);return p.createElement(f,l({components:i},c))}}}]);
//# sourceMappingURL=component---src-gatsby-theme-sky-lite-templates-post-js-cdb9b67b8c25584d81b2.js.map