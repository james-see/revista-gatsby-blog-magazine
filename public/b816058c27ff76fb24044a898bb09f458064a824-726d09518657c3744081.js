(self.webpackChunkrevista_gatsby_starter=self.webpackChunkrevista_gatsby_starter||[]).push([[284],{9996:function(t){"use strict";var e=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===n}(t)}(t)};var n="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function r(t,e){return!1!==e.clone&&e.isMergeableObject(t)?s((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function o(t,e,n){return t.concat(e).map((function(t){return r(t,n)}))}function i(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(e){return t.propertyIsEnumerable(e)})):[]}(t))}function a(t,e){try{return e in t}catch(n){return!1}}function u(t,e,n){var o={};return n.isMergeableObject(t)&&i(t).forEach((function(e){o[e]=r(t[e],n)})),i(e).forEach((function(i){(function(t,e){return a(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,i)||(a(t,i)&&n.isMergeableObject(e[i])?o[i]=function(t,e){if(!e.customMerge)return s;var n=e.customMerge(t);return"function"==typeof n?n:s}(i,n)(t[i],e[i],n):o[i]=r(e[i],n))})),o}function s(t,n,i){(i=i||{}).arrayMerge=i.arrayMerge||o,i.isMergeableObject=i.isMergeableObject||e,i.cloneUnlessOtherwiseSpecified=r;var a=Array.isArray(n);return a===Array.isArray(t)?a?i.arrayMerge(t,n,i):u(t,n,i):r(n,i)}s.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,n){return s(t,n,e)}),{})};var c=s;t.exports=c},3307:function(t){function e(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}e.keys=function(){return[]},e.resolve=e,e.id=3307,t.exports=e},2593:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cachedImport=async function(t){if(r.has(t))return r.get(t);return await n(3307)(t)},e.createFileToMdxCacheKey=function(t){return"fileToMdx-"+t};const r=new Map},7891:function(t,e,n){"use strict";var r=n(4836);Object.defineProperty(e,"__esModule",{value:!0}),e.compileMDX=s,e.compileMDXWithCustomOptions=void 0;var o=r(n(9996)),i=n(4077),a=n(7488),u=n(2593);async function s(t,e,n,r){let{absolutePath:o,source:i}=t;try{const{createProcessor:t}=await(0,u.cachedImport)("@mdx-js/mdx"),{VFile:r}=await(0,u.cachedImport)("vfile"),a=t(e);a.data("mdxNodeId",await n.get((0,u.createFileToMdxCacheKey)(o))),a.data("mdxMetadata",{});const s=await a.process(new r({value:i,path:o})),c=Object.assign({},a.data("mdxMetadata"));return{processedMDX:s.toString(),metadata:c}}catch(s){return r.panicOnBuild({id:a.ERROR_CODES.MdxCompilation,context:{absolutePath:o,errorMeta:s}}),null}}e.compileMDXWithCustomOptions=async(t,e)=>{let{absolutePath:n,source:r}=t,{pluginOptions:a,customOptions:u,getNode:c,getNodesByType:l,pathPrefix:f,reporter:p,cache:d,store:m}=e;const h=(0,o.default)(Object.assign({},a),u);return s({source:r,absolutePath:n},await(0,i.enhanceMdxOptions)(h,{getNode:c,getNodesByType:l,pathPrefix:f,reporter:p,cache:d,store:m}),d,p)}},7488:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.ERROR_MAP=e.ERROR_CODES=void 0;const n={MdxCompilation:"10001",NonExistentFileNode:"10002",InvalidAcornAST:"10003",NonDeterminableExportName:"10004",AcornCompilation:"10005"};e.ERROR_CODES=n;const r={[n.MdxCompilation]:{text:t=>'Failed to compile the file "'+t.absolutePath+'". Original error message:\n\n'+t.errorMeta.message,level:"ERROR",type:"PLUGIN",category:"USER"},[n.NonExistentFileNode]:{text:t=>"Unable to locate the GraphQL File node for "+t.resourcePath+(t.mdxPath?"\nFile: "+t.mdxPath:""),level:"ERROR",type:"PLUGIN"},[n.InvalidAcornAST]:{text:t=>"Invalid AST. Parsed source code did not return valid output.\n\nTemplate:\n"+t.resourcePath+(t.mdxPath?"\nFile: "+t.mdxPath:""),level:"ERROR",type:"PLUGIN",category:"USER"},[n.NonDeterminableExportName]:{text:t=>"Unable to determine default export name for file:\n"+t.resourcePath,level:"ERROR",type:"PLUGIN"},[n.AcornCompilation]:{text:t=>"Unable to inject MDX into JS template:\n"+t.resourcePath,level:"ERROR",type:"PLUGIN"}};e.ERROR_MAP=r},8786:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getSourcePluginsAsRemarkPlugins=async function(t){let{gatsbyRemarkPlugins:e,getNode:n,getNodesByType:r,reporter:o,cache:i,pathPrefix:a}=t;const u=e?e.filter((t=>"function"==typeof t.module)):[];if(!u.length)return[];return u.map((t=>{const e=t.module;return function(){const u=n(this.data("mdxNodeId"));return async function(s){await e({markdownAST:s,markdownNode:u,getNode:n,getNodesByType:r,get files(){return r("File")},pathPrefix:a,reporter:o,cache:i},t.pluginOptions||{})}}}))}},2506:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(7891);Object.keys(r).forEach((function(t){"default"!==t&&"__esModule"!==t&&(t in e&&e[t]===r[t]||Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}}))}))},4077:function(t,e,n){"use strict";var r=n(861),o=n(4836);Object.defineProperty(e,"__esModule",{value:!0}),e.enhanceMdxOptions=e.defaultOptions=void 0;var i=o(n(9996)),a=n(2593),u=n(8786),s=o(n(247)),c=n(2855),l=n(1598);const f=t=>{const e={extensions:[".mdx"],mdxOptions:{format:"mdx",useDynamicImport:!0,providerImportSource:"@mdx-js/react"}};return(0,i.default)(e,t)};e.defaultOptions=f;e.enhanceMdxOptions=async(t,e)=>{const n=f(t),{default:o}=await(0,a.cachedImport)("remark-unwrap-images"),{config:i}=e.store.getState(),{jsxRuntime:p,jsxImportSource:d}=i;if(n.mdxOptions.jsxRuntime=p||"classic",n.mdxOptions.jsxImportSource=d||"react",n.mdxOptions.remarkPlugins||(n.mdxOptions.remarkPlugins=[]),n.mdxOptions.remarkPlugins.push(o),e.pathPrefix&&n.mdxOptions.remarkPlugins.push([l.remarkPathPlugin,{pathPrefix:e.pathPrefix}]),n.gatsbyRemarkPlugins&&Object.keys(n.gatsbyRemarkPlugins).length){n.mdxOptions.remarkPlugins||(n.mdxOptions.remarkPlugins=[]);for(const e of n.gatsbyRemarkPlugins){const t=e.module;if("function"==typeof t.setParserPlugins)for(const r of t.setParserPlugins(e.pluginOptions||{}))if(Array.isArray(r)){const[t,e]=r;n.mdxOptions.remarkPlugins.push([t,e])}else n.mdxOptions.remarkPlugins.push(r)}const t=await(0,u.getSourcePluginsAsRemarkPlugins)({gatsbyRemarkPlugins:n.gatsbyRemarkPlugins,...e});var m;if(t)(m=n.mdxOptions.remarkPlugins).push.apply(m,r(t))}n.mdxOptions.remarkPlugins.push(c.remarkMdxHtmlPlugin),n.mdxOptions.rehypePlugins||(n.mdxOptions.rehypePlugins=[]);return n.mdxOptions.remarkRehypeOptions||(n.mdxOptions.remarkRehypeOptions={}),n.mdxOptions.remarkRehypeOptions.passThrough=["element"],n.mdxOptions.rehypePlugins.push(s.default),n.mdxOptions}},247:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){const t={};return this.data("mdxMetadata",t),(e,n)=>{Object.assign(t,n.data.meta)}};e.default=n},2855:function(t,e,n){"use strict";var r=n(4836);Object.defineProperty(e,"__esModule",{value:!0}),e.remarkMdxHtmlPlugin=void 0;var o=r(n(5288)),i=n(2593);e.remarkMdxHtmlPlugin=()=>async function(t){const{visit:e}=await(0,i.cachedImport)("unist-util-visit");return e(t,(t=>{if(t.data&&Object.keys(t.data).includes("hChildren")){const e=(0,o.default)(t,{allowDangerousHtml:!0});e&&Object.assign(t,e)}})),e(t,(t=>{if(!["html","raw"].includes(t.type))return;const e=t;e.type="mdxJsxFlowElement",e.name="div",e.attributes=[{type:"mdxJsxAttribute",name:"dangerouslySetInnerHTML",value:{type:"mdxJsxAttributeValueExpression",data:{estree:{type:"Program",body:[{type:"ExpressionStatement",expression:{type:"ObjectExpression",properties:[{type:"Property",method:!1,shorthand:!1,computed:!1,key:{type:"Identifier",name:"__html"},value:{type:"Literal",value:t.value},kind:"init"}]}}],sourceType:"module"}}}}]})),t}},1598:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.remarkPathPlugin=void 0;var r=n(2593);e.remarkPathPlugin=t=>{let{pathPrefix:e}=t;return async function(t){if(!e)return t;const{visit:n}=await(0,r.cachedImport)("unist-util-visit");return n(t,["link","definition"],(t=>{const n=t;n.url&&"string"==typeof n.url&&n.url.startsWith("/")&&!n.url.startsWith("//")&&(n.url=((t,e)=>(e+t).replace(/\/\//,"/"))(n.url,e))})),t}}},4397:function(t,e,n){"use strict";var r=n(7294),o=n(2788),i=n(6639),a=n(330),u=n(2302);const s=o.default.aside.withConfig({displayName:"Sidebar__SidebarStyles",componentId:"sc-1133mlp-0"})(["display:grid;grid-template-columns:200px;justify-content:center;row-gap:1rem;margin-top:3.4rem;@media (min-width:576px){&{grid-template-columns:repeat(auto-fit,92%);column-gap:3rem;}}@media screen and (max-width:767px){grid-template-columns:calc(100vw - 30px);margin-bottom:3rem;}"]);e.Z=()=>r.createElement("div",{className:"col-xl-3 col-12"},r.createElement(s,null,r.createElement(i.Z,null),r.createElement(a.Z,null),r.createElement(u.Z,null)))},6630:function(t,e,n){"use strict";var r=n(959);t.exports=function(t,e){return function(t){return e;function e(e){var n=e&&i(e);return n&&o.call(t,n)?t[n]:null}}(function(t){var e={};if(!t||!t.type)throw new Error("mdast-util-definitions expected node");return r(t,"definition",n),e;function n(t){var n=i(t.identifier);o.call(e,n)||(e[n]=t)}}(t))};var o={}.hasOwnProperty;function i(t){return t.toUpperCase()}},959:function(t,e,n){"use strict";t.exports=u;var r=n(9294),o=r.CONTINUE,i=r.SKIP,a=r.EXIT;function u(t,e,n,o){"function"==typeof e&&"function"!=typeof n&&(o=n,n=e,e=null),r(t,e,(function(t,e){var r=e[e.length-1],o=r?r.children.indexOf(t):null;return n(t,o,r)}),o)}u.CONTINUE=o,u.SKIP=i,u.EXIT=a},5288:function(t,e,n){"use strict";t.exports=n(1601)},5426:function(t,e,n){"use strict";t.exports=function(t,e){var n,o,i=e.children||[],a=i.length,u=[],s=-1;for(;++s<a;)(n=r(t,i[s],e))&&(s&&"break"===i[s-1].type&&(n.value&&(n.value=n.value.replace(/^\s+/,"")),(o=n.children&&n.children[0])&&o.value&&(o.value=o.value.replace(/^\s+/,""))),u=u.concat(n));return u};var r=n(719)},1696:function(t,e,n){"use strict";t.exports=function(t){var e,n,a,u,s=t.footnoteById,c=t.footnoteOrder,l=c.length,f=-1,p=[];for(;++f<l;)(e=s[c[f].toUpperCase()])&&(u=(a=e.children.concat())[a.length-1],n={type:"link",url:"#fnref-"+e.identifier,data:{hProperties:{className:["footnote-backref"]}},children:[{type:"text",value:"↩"}]},u&&"paragraph"===u.type||(u={type:"paragraph",children:[]},a.push(u)),u.children.push(n),p.push({type:"listItem",data:{hProperties:{id:"fn-"+e.identifier}},children:a,position:e.position}));if(0===p.length)return null;return t(null,"div",{className:["footnotes"]},i([r(t),o(t,{type:"list",ordered:!0,children:p})],!0))};var r=n(7552),o=n(7888),i=n(2931)},4590:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"blockquote",r(o(t,e),!0))};var r=n(2931),o=n(5426)},3562:function(t,e,n){"use strict";t.exports=function(t,e){return[t(e,"br"),r("text","\n")]};var r=n(914)},2087:function(t,e,n){"use strict";t.exports=function(t,e){var n,o=e.value?e.value+"\n":"",i=e.lang&&e.lang.match(/^[^ \t]+(?=[ \t]|$)/),a={};i&&(a.className=["language-"+i]);n=t(e,"code",a,[r("text",o)]),e.meta&&(n.data={meta:e.meta});return t(e.position,"pre",[n])};var r=n(914)},9381:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"del",r(t,e))};var r=n(5426)},790:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"em",r(t,e))};var r=n(5426)},8235:function(t,e,n){"use strict";t.exports=function(t,e){var n=t.footnoteOrder,o=String(e.identifier);-1===n.indexOf(o)&&n.push(o);return t(e.position,"sup",{id:"fnref-"+o},[t(e,"a",{href:"#fn-"+o,className:["footnote-ref"]},[r("text",e.label||o)])])};var r=n(914)},5758:function(t,e,n){"use strict";t.exports=function(t,e){var n=t.footnoteById,o=t.footnoteOrder,i=1;for(;i in n;)i++;return i=String(i),o.push(i),n[i]={type:"footnoteDefinition",identifier:i,children:[{type:"paragraph",children:e.children}],position:e.position},r(t,{type:"footnoteReference",identifier:i,position:e.position})};var r=n(8235)},4890:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"h"+e.depth,r(t,e))};var r=n(5426)},2202:function(t,e,n){"use strict";t.exports=function(t,e){return t.dangerous?t.augment(e,r("raw",e.value)):null};var r=n(914)},1454:function(t,e,n){"use strict";t.exports=function(t,e){var n,i=t.definition(e.identifier);if(!i)return o(t,e);n={src:r(i.url||""),alt:e.alt},null!==i.title&&void 0!==i.title&&(n.title=i.title);return t(e,"img",n)};var r=n(729),o=n(713)},5037:function(t,e,n){"use strict";var r=n(729);t.exports=function(t,e){var n={src:r(e.url),alt:e.alt};null!==e.title&&void 0!==e.title&&(n.title=e.title);return t(e,"img",n)}},4617:function(t,e,n){"use strict";function r(){return null}t.exports={blockquote:n(4590),break:n(3562),code:n(2087),delete:n(9381),emphasis:n(790),footnoteReference:n(8235),footnote:n(5758),heading:n(4890),html:n(2202),imageReference:n(1454),image:n(5037),inlineCode:n(8409),linkReference:n(9266),link:n(404),listItem:n(4463),list:n(7888),paragraph:n(8346),root:n(8100),strong:n(4970),table:n(2605),text:n(989),thematicBreak:n(7552),toml:r,yaml:r,definition:r,footnoteDefinition:r}},8409:function(t,e,n){"use strict";t.exports=function(t,e){var n=e.value.replace(/\r?\n|\r/g," ");return t(e,"code",[r("text",n)])};var r=n(914)},9266:function(t,e,n){"use strict";t.exports=function(t,e){var n,a=t.definition(e.identifier);if(!a)return o(t,e);n={href:r(a.url||"")},null!==a.title&&void 0!==a.title&&(n.title=a.title);return t(e,"a",n,i(t,e))};var r=n(729),o=n(713),i=n(5426)},404:function(t,e,n){"use strict";var r=n(729),o=n(5426);t.exports=function(t,e){var n={href:r(e.url)};null!==e.title&&void 0!==e.title&&(n.title=e.title);return t(e,"a",n,o(t,e))}},4463:function(t,e,n){"use strict";t.exports=function(t,e,n){var a,u,s,c=o(t,e),l=c[0],f=n?function(t){var e=t.spread,n=t.children,r=n.length,o=-1;for(;!e&&++o<r;)e=i(n[o]);return e}(n):i(e),p={},d=[];"boolean"==typeof e.checked&&(l&&"p"===l.tagName||(l=t(null,"p",[]),c.unshift(l)),l.children.length>0&&l.children.unshift(r("text"," ")),l.children.unshift(t(null,"input",{type:"checkbox",checked:e.checked,disabled:!0})),p.className=["task-list-item"]);a=c.length,u=-1;for(;++u<a;)s=c[u],(f||0!==u||"p"!==s.tagName)&&d.push(r("text","\n")),"p"!==s.tagName||f?d.push(s):d=d.concat(s.children);a&&(f||"p"!==s.tagName)&&d.push(r("text","\n"));return t(e,"li",p,d)};var r=n(914),o=n(5426);function i(t){var e=t.spread;return null==e?t.children.length>1:e}},7888:function(t,e,n){"use strict";t.exports=function(t,e){var n,i,a={},u=e.ordered?"ol":"ul",s=-1;"number"==typeof e.start&&1!==e.start&&(a.start=e.start);n=o(t,e),i=n.length;for(;++s<i;)if(n[s].properties.className&&-1!==n[s].properties.className.indexOf("task-list-item")){a.className=["contains-task-list"];break}return t(e,u,a,r(n,!0))};var r=n(2931),o=n(5426)},8346:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"p",r(t,e))};var r=n(5426)},8100:function(t,e,n){"use strict";t.exports=function(t,e){return t.augment(e,r("root",o(i(t,e))))};var r=n(914),o=n(2931),i=n(5426)},4970:function(t,e,n){"use strict";t.exports=function(t,e){return t(e,"strong",r(t,e))};var r=n(5426)},2605:function(t,e,n){"use strict";t.exports=function(t,e){var n,a,u,s,c,l=e.children,f=l.length,p=e.align||[],d=p.length,m=[];for(;f--;){for(a=l[f].children,s=0===f?"th":"td",n=d||a.length,u=[];n--;)c=a[n],u[n]=t(c,s,{align:p[n]},c?i(t,c):[]);m[f]=t(l[f],"tr",o(u,!0))}return t(e,"table",o([t(m[0].position,"thead",o([m[0]],!0))].concat(m[1]?t({start:r.start(m[1]),end:r.end(m[m.length-1])},"tbody",o(m.slice(1),!0)):[]),!0))};var r=n(7361),o=n(2931),i=n(5426)},989:function(t,e,n){"use strict";t.exports=function(t,e){return t.augment(e,r("text",String(e.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g,"$1")))};var r=n(914)},7552:function(t){"use strict";t.exports=function(t,e){return t(e,"hr")}},1601:function(t,e,n){"use strict";t.exports=function(t,e){var n=function(t,e){var n=e||{};void 0===n.allowDangerousHTML||p||(p=!0,console.warn("mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead"));var r=n.allowDangerousHtml||n.allowDangerousHTML,s={};return d.dangerous=r,d.definition=u(t),d.footnoteById=s,d.footnoteOrder=[],d.augment=c,d.handlers=Object.assign({},l,n.handlers),d.unknownHandler=n.unknownHandler,d.passThrough=n.passThrough,o(t,"footnoteDefinition",m),d;function c(t,e){var n,r;return t&&t.data&&((n=t.data).hName&&("element"!==e.type&&(e={type:"element",tagName:"",properties:{},children:[]}),e.tagName=n.hName),"element"===e.type&&n.hProperties&&(e.properties=Object.assign({},e.properties,n.hProperties)),e.children&&n.hChildren&&(e.children=n.hChildren)),r=t&&t.position?t:{position:t},a(r)||(e.position={start:i.start(r),end:i.end(r)}),e}function d(t,e,n,r){return null==r&&"object"==typeof n&&"length"in n&&(r=n,n={}),c(t,{type:"element",tagName:e,properties:n||{},children:r||[]})}function m(t){var e=String(t.identifier).toUpperCase();f.call(s,e)||(s[e]=t)}}(t,e),d=s(n,t),m=c(n);m&&(d.children=d.children.concat(r("text","\n"),m));return d};var r=n(914),o=n(8681),i=n(7361),a=n(1744),u=n(6630),s=n(719),c=n(1696),l=n(4617),f={}.hasOwnProperty,p=!1},719:function(t,e,n){"use strict";t.exports=function(t,e,n){var r,o=e&&e.type;if(!o)throw new Error("Expected node, got `"+e+"`");r=i.call(t.handlers,o)?t.handlers[o]:t.passThrough&&t.passThrough.indexOf(o)>-1?u:t.unknownHandler;return("function"==typeof r?r:a)(t,e,n)};var r=n(914),o=n(5426),i={}.hasOwnProperty;function a(t,e){return function(t){var e=t.data||{};if(i.call(e,"hName")||i.call(e,"hProperties")||i.call(e,"hChildren"))return!1;return"value"in t}(e)?t.augment(e,r("text",e.value)):t(e,"div",o(t,e))}function u(t,e){var n;return e.children?((n=Object.assign({},e)).children=o(t,e),n):e}},713:function(t,e,n){"use strict";t.exports=function(t,e){var n,i,a,u=e.referenceType,s="]";"collapsed"===u?s+="[]":"full"===u&&(s+="["+(e.label||e.identifier)+"]");if("imageReference"===e.type)return r("text","!["+e.alt+s);n=o(t,e),(i=n[0])&&"text"===i.type?i.value="["+i.value:n.unshift(r("text","["));(a=n[n.length-1])&&"text"===a.type?a.value+=s:n.push(r("text",s));return n};var r=n(914),o=n(5426)},2931:function(t,e,n){"use strict";t.exports=function(t,e){var n=[],o=-1,i=t.length;e&&n.push(r("text","\n"));for(;++o<i;)o&&n.push(r("text","\n")),n.push(t[o]);e&&t.length>0&&n.push(r("text","\n"));return n};var r=n(914)},8681:function(t,e,n){"use strict";t.exports=u;var r=n(9294),o=r.CONTINUE,i=r.SKIP,a=r.EXIT;function u(t,e,n,o){"function"==typeof e&&"function"!=typeof n&&(o=n,n=e,e=null),r(t,e,(function(t,e){var r=e[e.length-1],o=r?r.children.indexOf(t):null;return n(t,o,r)}),o)}u.CONTINUE=o,u.SKIP=i,u.EXIT=a},729:function(t){"use strict";var e={};function n(t,r,o){var i,a,u,s,c,l="";for("string"!=typeof r&&(o=r,r=n.defaultChars),void 0===o&&(o=!0),c=function(t){var n,r,o=e[t];if(o)return o;for(o=e[t]=[],n=0;n<128;n++)r=String.fromCharCode(n),/^[0-9a-z]$/i.test(r)?o.push(r):o.push("%"+("0"+n.toString(16).toUpperCase()).slice(-2));for(n=0;n<t.length;n++)o[t.charCodeAt(n)]=t[n];return o}(r),i=0,a=t.length;i<a;i++)if(u=t.charCodeAt(i),o&&37===u&&i+2<a&&/^[0-9a-f]{2}$/i.test(t.slice(i+1,i+3)))l+=t.slice(i,i+3),i+=2;else if(u<128)l+=c[u];else if(u>=55296&&u<=57343){if(u>=55296&&u<=56319&&i+1<a&&(s=t.charCodeAt(i+1))>=56320&&s<=57343){l+=encodeURIComponent(t[i]+t[i+1]),i++;continue}l+="%EF%BF%BD"}else l+=encodeURIComponent(t[i]);return l}n.defaultChars=";/?:@&=+$,-_.!~*'()#",n.componentChars="-_.!~*'()",t.exports=n},914:function(t){"use strict";t.exports=function(t,e,n){var r;null!=n||"object"==typeof e&&!Array.isArray(e)||(n=e,e={});r=Object.assign({type:String(t)},e),Array.isArray(n)?r.children=n:null!=n&&(r.value=String(n));return r}},1744:function(t){"use strict";t.exports=function(t){return!(t&&t.position&&t.position.start&&t.position.start.line&&t.position.start.column&&t.position.end&&t.position.end.line&&t.position.end.column)}},8145:function(t){"use strict";function e(t){if(null==t)return n;if("string"==typeof t)return function(t){return e;function e(e){return Boolean(e&&e.type===t)}}(t);if("object"==typeof t)return"length"in t?function(t){var n=[],r=-1;for(;++r<t.length;)n[r]=e(t[r]);return o;function o(){for(var t=-1;++t<n.length;)if(n[t].apply(this,arguments))return!0;return!1}}(t):function(t){return e;function e(e){var n;for(n in t)if(e[n]!==t[n])return!1;return!0}}(t);if("function"==typeof t)return t;throw new Error("Expected function, string, or object as test")}function n(){return!0}t.exports=e},7361:function(t){"use strict";var e=o("start"),n=o("end");function r(t){return{start:e(t),end:n(t)}}function o(t){return e.displayName=t,e;function e(e){var n=e&&e.position&&e.position[t]||{};return{line:n.line||null,column:n.column||null,offset:isNaN(n.offset)?null:n.offset}}}t.exports=r,r.start=e,r.end=n},6750:function(t){t.exports=function(t){return t}},9294:function(t,e,n){"use strict";t.exports=s;var r=n(8145),o=n(6750),i=!0,a="skip",u=!1;function s(t,e,n,s){var c,l;"function"==typeof e&&"function"!=typeof n&&(s=n,n=e,e=null),l=r(e),c=s?-1:1,function t(r,f,p){var d,m="object"==typeof r&&null!==r?r:{};"string"==typeof m.type&&(d="string"==typeof m.tagName?m.tagName:"string"==typeof m.name?m.name:void 0,h.displayName="node ("+o(m.type+(d?"<"+d+">":""))+")");return h;function h(){var o,d,m=p.concat(r),h=[];if((!e||l(r,f,p[p.length-1]||null))&&(h=function(t){if(null!==t&&"object"==typeof t&&"length"in t)return t;if("number"==typeof t)return[i,t];return[t]}(n(r,p)),h[0]===u))return h;if(r.children&&h[0]!==a)for(d=(s?r.children.length:-1)+c;d>-1&&d<r.children.length;){if((o=t(r.children[d],d,m)())[0]===u)return o;d="number"==typeof o[1]?o[1]:d+c}return h}}(t,null,[])()}s.CONTINUE=true,s.SKIP=a,s.EXIT=u},3897:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r},t.exports.__esModule=!0,t.exports.default=t.exports},3405:function(t,e,n){var r=n(3897);t.exports=function(t){if(Array.isArray(t))return r(t)},t.exports.__esModule=!0,t.exports.default=t.exports},9498:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},2281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,n){var r=n(3405),o=n(9498),i=n(6116),a=n(2281);t.exports=function(t){return r(t)||o(t)||i(t)||a()},t.exports.__esModule=!0,t.exports.default=t.exports},6116:function(t,e,n){var r=n(3897);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},1151:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},ah:function(){return i}});var r=n(7294);const o=r.createContext({});function i(t){const e=r.useContext(o);return r.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}const a={};function u({components:t,children:e,disableParentContext:n}){let u=i(t);return n&&(u=t||a),r.createElement(o.Provider,{value:u},e)}}}]);
//# sourceMappingURL=b816058c27ff76fb24044a898bb09f458064a824-726d09518657c3744081.js.map