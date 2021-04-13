(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[118],{"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),c=a.n(n),s=a("98BF"),o=a("Zb5r"),i=a("AOjV"),r=c.a.createElement;function l(e){var{plugin:t,name:a}=e,n=s.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(e,t,a)=>"".concat(t," ").concat(a.toLowerCase()));var c=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2),l="By default, ".concat(n.length?"only ".concat(Object(o.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(a," utilities.");return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:l}}),r("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",r("code",null,t)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(o.a)(c)," variants:"),r(i.a,{path:"variants.extend",before:"...",add:{[t]:c}}))}},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),c=a.n(n),s=(a("Btb4"),a("AI3G")),o=a("iuhU"),i=c.a.createElement;function r(e){var{value:t}=e;return"string"===typeof t?i("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?i(c.a.Fragment,null,i("span",{className:"token punctuation"},"["),t.map((e,a)=>i(n.Fragment,{key:a},i(r,{value:e}),a===t.length-1?null:i("span",{className:"token punctuation"},", "))),i("span",{className:"token punctuation"},"]")):"boolean"===typeof t?i("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var{edits:t,indent:a="",type:c="inserted"}=e;return i("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===c,"deleted-sign deleted":"inserted"!==c})},Object.keys(t).map((e,s)=>{return i(n.Fragment,{key:s},i("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===c,deleted:"inserted"!==c})},"inserted"===c?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(l=e)?l:"'".concat(l,"'"),i("span",{className:"token operator"},":")," ",i(r,{value:t[e]}),i("span",{className:"token punctuation"},","),"\n");var l}))}function p(e){var{path:t,add:a,remove:c,before:o,after:r}=e;return t="string"===typeof t?t.split("."):t,i("div",{className:"prose"},i("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  ",i("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",i("span",{className:"token punctuation"},"."),i("span",{className:"token property-access"},"exports")," ",i("span",{className:"token operator"},"=")," ",i("span",{className:"token punctuation"},"{"),"\n",t.map((e,t)=>i(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,i("span",{className:"token operator"},":")," ",i("span",{className:"token punctuation"},"{"),"\n")),o&&Object(s.a)(o).map((e,a)=>i(n.Fragment,{key:a},"  ".repeat(t.length+2),i("span",{className:"token comment"},"// ".concat(e)),"\n"))),c&&i(l,{edits:c,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&i(l,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),i("span",{className:"token unchanged"},r&&Object(s.a)(r).map(e=>"".concat("  ".repeat(t.length+2)).concat(e,"\n")),t.map((e,a)=>i(n.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),c=a("p+I8"),s=a("GAX2").default;e.exports=(e,t,a)=>{const o=[];return function e(t,a,i){let r;(a=a||{}).indent=a.indent||"\t",i=i||"",r=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),i).replace(new RegExp(r.indent,"g"),i+a.indent)};if(-1!==o.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";o.push(t);const n="["+r.newLine+t.map((n,c)=>{const s=t.length-1===c?r.newLine:","+r.newLineOrSpace;let o=e(n,a,i+a.indent);return a.transform&&(o=a.transform(t,c,o)),r.indent+o+s}).join("")+r.pad+"]";return o.pop(),l(n)}if(c(t)){let n=Object.keys(t).concat(s(t));if(a.filter&&(n=n.filter(e=>a.filter(t,e))),0===n.length)return"{}";o.push(t);const c="{"+r.newLine+n.map((c,s)=>{const o=n.length-1===s?r.newLine:","+r.newLineOrSpace,l="symbol"===typeof c,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(c),u=l||p?c:e(c,a);let m=e(t[c],a,i+a.indent);return a.transform&&(m=a.transform(t,c,m)),r.indent+String(u)+": "+m+o}).join("")+r.pad+"}";return o.pop(),l(c)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},DXsU:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".isolate":{isolation:"isolate"},".isolation-auto":{isolation:"auto"}},t("isolation"))}}},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},LESp:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return N}));var n=a("wx14"),c=a("Ff2n"),s=a("q1tI"),o=a.n(s),i=a("7ljp"),r=a("YFqc"),l=a.n(r),p=a("tc9R"),u=a("vRWG"),m=a("I6Nb"),d=a("DXsU"),b=a.n(d),g=a("8C7G"),O=a("wH44"),j=(o.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:b()},meta:{title:"Isolation",description:"Utilities for controlling whether an element should explicitly create a new stacking context.",featureVersion:"v2.1+"},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),f=m.ContentsLayout;function N(e){var{components:t}=e,a=Object(c.a)(e,["components"]);return Object(i.a)(f,Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"usage",toc:!0},"Usage"),Object(i.a)("p",null,"Use the ",Object(i.a)("inlineCode",{parentName:"p"},"isolate")," and ",Object(i.a)("inlineCode",{parentName:"p"},"isolation-auto")," utilities to control whether an element should explicitly create a new stacking context."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"isolate ...",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control the isolation property at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing isolation utility. For example, use ",Object(i.a)("inlineCode",{parentName:"p"},"md:isolation-auto")," to apply the ",Object(i.a)("inlineCode",{parentName:"p"},"isolation-auto")," utility at only medium screen sizes and above."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"isolate ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:isolation-auto")," ...",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(p.a,{level:3,id:"variants",toc:!0},"Variants")),Object(i.a)(g.a,{plugin:"isolation",name:"isolation",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(i.a)(O.a,{plugin:"isolation",name:"isolation",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=j},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce((t,a,n)=>0===n?a:n===e.length-1?"".concat(t," and ").concat(a):"".concat(t,", ").concat(a),"")}a.d(t,"a",(function(){return n}))},ap0H:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),c=a.n(n),s=a("8Kt/"),o=a.n(s),i=c.a.createElement;function r(e){var{suffix:t,children:a}=e,n=a+(t?" - ".concat(t):"");return i(o.a,null,i("title",{key:"title"},n),i("meta",{key:"twitter:title",name:"twitter:title",content:n}),i("meta",{key:"og:title",property:"og:title",content:n}))}},luBB:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/isolation",function(){return a("LESp")}])},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},vRWG:function(e,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return d}));var n=a("wx14"),c=a("q1tI"),s=a.n(c),o=a("ekQu"),i=a("8Kt/"),r=a.n(i),l=a("nOHt"),p=a("ap0H"),u=a("1Q1k"),m=s.a.createElement;function d(e){var t=Object(l.useRouter)();return m(s.a.Fragment,null,m(p.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),m(r.a,null,m("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),m("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),m(o.b,Object(n.a)({nav:u.a},e)))}},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("rePB"),c=a("q1tI"),s=a.n(c),o=a("AOjV"),i=a("AI3G"),r=a("Zb5r"),l=s.a.createElement;function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e){var{plugin:t,name:a}=e,n=Object(i.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(e,t,a)=>"".concat(t," ").concat(a.toLowerCase())),l("div",{className:"prose"},l("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(n.map(e=>"<code>".concat(e,"</code>")))}})," ",n.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(o.a,{path:"corePlugins",before:"...",add:n.reduce((e,t)=>u(u({},e),{},{[t]:!1}),{})}))}}},[["luBB",0,2,1,3,4,5]]]);