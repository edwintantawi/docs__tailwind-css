_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[122],{"5xSE":function(t,e,n){"use strict";t.exports=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)}},"8C7G":function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var s=n("rePB"),a=n("q1tI"),i=n.n(a),r=n("98BF"),o=n("Zb5r"),c=n("AOjV"),l=i.a.createElement;function p(t){var e=t.plugin,n=t.name,a=r.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(function(t,e,n){return"".concat(e," ").concat(n.toLowerCase())}));var i=["responsive","hover","focus","active","group-hover"].filter((function(t){return!a.includes(t)})).slice(0,2),p="By default, ".concat(a.length?"only ".concat(Object(o.a)(a).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:p}}),l("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",l("code",null,e)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",a.length>0?"also ":"","generate"," ",Object(o.a)(i)," variants:"),l(c.a,{path:"variants.extend",before:"...",add:Object(s.a)({},e,i)}))}},AOjV:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var s=n("q1tI"),a=n.n(s),i=(n("Btb4"),n("AI3G")),r=n("iuhU"),o=a.a.createElement;function c(t){var e=t.value;return"string"===typeof e?o("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?o(a.a.Fragment,null,o("span",{className:"token punctuation"},"["),e.map((function(t,n){return o(s.Fragment,{key:n},o(c,{value:t}),n===e.length-1?null:o("span",{className:"token punctuation"},", "))})),o("span",{className:"token punctuation"},"]")):"boolean"===typeof e?o("span",{className:"token boolean"},e.toString()):e.toString()}function l(t){var e=t.edits,n=t.indent,a=void 0===n?"":n,i=t.type,l=void 0===i?"inserted":i;return o("span",{className:Object(r.a)("token",{"inserted-sign inserted":"inserted"===l,"deleted-sign deleted":"inserted"!==l})},Object.keys(e).map((function(t,n){return o(s.Fragment,{key:n},o("span",{className:Object(r.a)("token prefix",{inserted:"inserted"===l,deleted:"inserted"!==l})},"inserted"===l?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(i=t)?i:"'".concat(i,"'"),o("span",{className:"token operator"},":")," ",o(c,{value:e[t]}),o("span",{className:"token punctuation"},","),"\n");var i})))}function p(t){var e=t.path,n=t.add,a=t.remove,r=t.before,c=t.after;return e="string"===typeof e?e.split("."):e,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",e.map((function(t,e){return o(s.Fragment,{key:e},"  ","  ".repeat(e+1),t,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n")})),r&&Object(i.a)(r).map((function(t,n){return o(s.Fragment,{key:n},"  ".repeat(e.length+2),o("span",{className:"token comment"},"// ".concat(t)),"\n")}))),a&&o(l,{edits:a,type:"deleted",indent:"  ".repeat(e.length+1)}),n&&o(l,{edits:n,type:"inserted",indent:"  ".repeat(e.length+1)}),o("span",{className:"token unchanged"},c&&Object(i.a)(c).map((function(t){return"".concat("  ".repeat(e.length+2)).concat(t,"\n")})),e.map((function(t,n){return o(s.Fragment,{key:n},"  ","  ".repeat(e.length-n),"}\n")})),"  }")))))}},Btb4:function(t,e,n){"use strict";const s=n("5xSE"),a=n("p+I8"),i=n("GAX2").default;t.exports=(t,e,n)=>{const r=[];return function t(e,n,o){let c;(n=n||{}).indent=n.indent||"\t",o=o||"",c=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=t=>{if(void 0===n.inlineCharacterLimit)return t;const e=t.replace(new RegExp(c.newLine,"g"),"").replace(new RegExp(c.newLineOrSpace,"g")," ").replace(new RegExp(c.pad+"|"+c.indent,"g"),"");return e.length<=n.inlineCharacterLimit?e:t.replace(new RegExp(c.newLine+"|"+c.newLineOrSpace,"g"),"\n").replace(new RegExp(c.pad,"g"),o).replace(new RegExp(c.indent,"g"),o+n.indent)};if(-1!==r.indexOf(e))return'"[Circular]"';if(null===e||void 0===e||"number"===typeof e||"boolean"===typeof e||"function"===typeof e||"symbol"===typeof e||s(e))return String(e);if(e instanceof Date)return`new Date('${e.toISOString()}')`;if(Array.isArray(e)){if(0===e.length)return"[]";r.push(e);const s="["+c.newLine+e.map((s,a)=>{const i=e.length-1===a?c.newLine:","+c.newLineOrSpace;let r=t(s,n,o+n.indent);return n.transform&&(r=n.transform(e,a,r)),c.indent+r+i}).join("")+c.pad+"]";return r.pop(),l(s)}if(a(e)){let s=Object.keys(e).concat(i(e));if(n.filter&&(s=s.filter(t=>n.filter(e,t))),0===s.length)return"{}";r.push(e);const a="{"+c.newLine+s.map((a,i)=>{const r=s.length-1===i?c.newLine:","+c.newLineOrSpace,l="symbol"===typeof a,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(a),u=l||p?a:t(a,n);let d=t(e[a],n,o+n.indent);return n.transform&&(d=n.transform(e,a,d)),c.indent+String(u)+": "+d+r}).join("")+c.pad+"}";return r.pop(),l(a)}return e=String(e).replace(/[\r\n]/g,t=>"\n"===t?"\\n":"\\r"),!1===n.singleQuotes?`"${e=e.replace(/"/g,'\\"')}"`:`'${e=e.replace(/\\?'/g,"\\'")}'`}(t,e,n)}},GAX2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=t=>Object.getOwnPropertySymbols(t).filter(e=>Object.prototype.propertyIsEnumerable.call(t,e))},"GR+v":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:t,variants:e}){t({".justify-self-auto":{"justify-self":"auto"},".justify-self-start":{"justify-self":"start"},".justify-self-end":{"justify-self":"end"},".justify-self-center":{"justify-self":"center"},".justify-self-stretch":{"justify-self":"stretch"}},e("justifySelf"))}}},"Ju+c":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var s=n("wx14"),a=n("Ff2n"),i=n("q1tI"),r=n.n(i),o=n("7ljp"),c=n("YFqc"),l=n.n(c),p=n("tc9R"),u=n("pOT7"),d=n("vRWG"),f=n("I6Nb"),g=n("GR+v"),m=n.n(g),b=n("8C7G"),x=n("wH44"),v=(r.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:m.a},meta:{title:"Justify Self",description:"Utilities for controlling how an individual grid item is aligned along its inline axis."},tableOfContents:[{title:"Auto",slug:"auto",children:[]},{title:"Start",slug:"start",children:[]},{title:"Center",slug:"center",children:[]},{title:"End",slug:"end",children:[]},{title:"Stretch",slug:"stretch",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),y=f.ContentsLayout;function h(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(o.a)(y,Object(s.a)({},v,n,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:2,id:"auto",toc:!0},"Auto"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"justify-self-auto")," to align an item based on the value of the grid's ",Object(o.a)("inlineCode",{parentName:"p"},"justify-items")," property:")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32">\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-purple-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="justify-self-auto text-white text-2xl font-extrabold bg-purple-500 rounded-md flex justify-center items-center px-4 py-2">1</div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-purple-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-purple-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-purple-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-purple-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid justify-items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">justify-self-auto</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"purple",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:2,id:"start",toc:!0},"Start"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"justify-self-start")," to align a grid item to the start its inline axis:")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32">\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-emerald-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="justify-self-start text-white text-2xl font-extrabold bg-emerald-500 rounded-md flex justify-center items-center px-4 py-2">1</div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-emerald-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-emerald-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-emerald-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-emerald-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid justify-items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">justify-self-start</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"emerald",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:2,id:"center",toc:!0},"Center"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"justify-self-center")," to align a grid item along the center its inline axis:")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32">\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-amber-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="justify-self-center text-white text-2xl font-extrabold bg-amber-500 rounded-md flex justify-center items-center px-4 py-2">1</div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-amber-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-amber-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-amber-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-amber-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid justify-items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">justify-self-center</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"amber",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:2,id:"end",toc:!0},"End"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"justify-self-end")," to align a grid item to the end its inline axis:")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32">\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-rose-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="justify-self-end text-white text-2xl font-extrabold bg-rose-500 rounded-md flex justify-center items-center px-4 py-2">1</div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-rose-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-rose-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-rose-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-rose-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid justify-items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">justify-self-end</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"rose",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:2,id:"stretch",toc:!0},"Stretch"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"justify-self-stretch")," to stretch a grid item to fill the grid area on its inline axis:")),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4 justify-items-start auto-rows-fr h-32">\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="justify-self-stretch text-white text-2xl font-extrabold bg-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2">1</div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>grid justify-items-start ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">justify-self-stretch</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"fuchsia",min:!1}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the alignment of a grid item inside its grid area at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing utility class. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:justify-self-end")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"justify-self-end")," utility at only medium screen sizes and above."),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(p.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(b.a,{plugin:"justifySelf",name:"justify-self",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(x.a,{plugin:"justifySelf",name:"justify-self",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=v},Zb5r:function(t,e,n){"use strict";function s(t){return t.reduce((function(e,n,s){return 0===s?n:s===t.length-1?"".concat(e," and ").concat(n):"".concat(e,", ").concat(n)}),"")}n.d(e,"a",(function(){return s}))},ap0H:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var s=n("q1tI"),a=n.n(s),i=n("8Kt/"),r=n.n(i),o=a.a.createElement;function c(t){var e=t.suffix,n=t.children+(e?" - ".concat(e):"");return o(r.a,null,o("title",{key:"title"},n),o("meta",{key:"twitter:title",name:"twitter:title",content:n}),o("meta",{key:"og:title",property:"og:title",content:n}))}},fEWL:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/justify-self",function(){return n("Ju+c")}])},"p+I8":function(t,e,n){"use strict";t.exports=function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}},pOT7:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return b}));var s=n("wx14"),a=n("q1tI"),i=n.n(a),r=n("iuhU"),o=n("ZMKu"),c=i.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function f(t){var e=Object(a.useRef)(),n=Object(a.useState)(!1),i=n[0],r=n[1],o=Object(a.useState)({}),l=o[0],p=o[1];return Object(a.useEffect)((function(){if(i){var t=new window.ResizeObserver(n);return n(),t.observe(e.current.contentDocument.body),function(){t.disconnect()}}function n(){p({height:e.current.contentDocument.body.scrollHeight})}}),[i]),c("iframe",Object(s.a)({},t,{ref:e,onLoad:function(){return r(!0)},style:l}))}function g(t){var e=t.color,n=t.snippet;return c("div",{className:Object(r.a)("overflow-hidden rounded-b-xl",l[e],{"bg-gray-800":!l[e]})},c("pre",{className:Object(r.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[e]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function m(t){var e=t.preview,n=t.src,s=t.snippet,a=t.previewClassName,i=t.color,o=void 0===i?"gray":i;return c("div",{className:"relative overflow-hidden mb-8"},e?c("div",{className:Object(r.a)("rounded-t-xl overflow-hidden",p[o],a,{"p-10":!a}),dangerouslySetInnerHTML:{__html:e}}):c(f,{src:n,className:Object(r.a)("w-full rounded-t-xl",p[o])}),c(g,{color:o,snippet:s}))}function b(t){var e=t.preview,n=t.src,s=t.previewClassName,i=t.snippet,l=t.color,m=void 0===l?"gray":l,b=t.min,x=void 0!==b&&b,v=Object(a.useRef)(),y=Object(o.h)(0),h=Object(a.useRef)(),k=Object(a.useState)(!1),j=k[0],w=k[1];return Object(a.useEffect)((function(){var t=new window.ResizeObserver((function(){y.set(0)}));return t.observe(v.current),function(){t.disconnect()}}),[]),c("div",{className:"relative mb-8"},c("div",{ref:v,className:"relative rounded-t-xl ".concat(u[m])},c("div",{className:x?"md:w-88":void 0},c(o.d.div,{className:"relative",style:{marginRight:Object(o.i)(y,(function(t){return-t}))}},e?c("div",{className:Object(r.a)("rounded-t-xl",s,p[m],{"p-10":!s}),dangerouslySetInnerHTML:{__html:e}}):c(f,{src:n,className:Object(r.a)("w-full rounded-t-xl",p[m],{"pointer-events-none":j})}))),c("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},c(o.d.div,{drag:"x",_dragX:y,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(x?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:y},onDragStart:function(){document.body.classList.add("cursor-grabbing"),w(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),w(!1)}},c("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},c("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[m]),style:{width:"0.4375rem"}},c("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),c(g,{color:m,snippet:i}))}},vRWG:function(t,e,n){"use strict";n.r(e),n.d(e,"DocumentationLayout",(function(){return f}));var s=n("wx14"),a=n("q1tI"),i=n.n(a),r=n("ekQu"),o=n("8Kt/"),c=n.n(o),l=n("nOHt"),p=n("ap0H"),u=n("1Q1k"),d=i.a.createElement;function f(t){var e=Object(l.useRouter)();return d(i.a.Fragment,null,d(p.a,{suffix:"/"===e.pathname?void 0:"Tailwind CSS"},t.layoutProps.meta.metaTitle||t.layoutProps.meta.title),d(c.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(r.b,Object(s.a)({nav:u.a},t)))}},wH44:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var s=n("rePB"),a=n("q1tI"),i=n.n(a),r=n("AOjV"),o=n("AI3G"),c=n("Zb5r"),l=i.a.createElement;function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){Object(s.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t){var e=t.plugin,n=t.name,a=Object(o.a)(e);return n=n||e.replace(/([a-z])([A-Z])/g,(function(t,e,n){return"".concat(e," ").concat(n.toLowerCase())})),l("div",{className:"prose"},l("p",null,"If you don't plan to use the ",n," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(a.map((function(t){return"<code>".concat(t,"</code>")})))}})," ",a.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(r.a,{path:"corePlugins",before:"...",add:a.reduce((function(t,e){return u(u({},t),{},Object(s.a)({},e,!1))}),{})}))}}},[["fEWL",0,2,6,1,3,4,5,7]]]);