"use strict";(self.webpackChunkrevista_gatsby_starter=self.webpackChunkrevista_gatsby_starter||[]).push([[230],{6372:function(e,t,a){var r=a(7294),l=a(2788),n=a(6639),i=a(330),o=a(2302);const c=l.default.aside.withConfig({displayName:"indexWide__SidebarStyles",componentId:"sc-bkr2vj-0"})(["display:grid;grid-template-columns:200px;justify-content:center;row-gap:1rem;margin-top:3.4rem;@media (min-width:576px){&{grid-template-columns:repeat(auto-fit,92%);column-gap:3rem;}}@media screen and (max-width:767px){grid-template-columns:calc(100vw - 30px);margin-bottom:3rem;}"]);t.Z=e=>{let{postTitle:t}=e;return r.createElement("div",{className:"col-lg-4 col-12"},r.createElement(c,null,r.createElement(n.Z,{postTitle:t}),r.createElement(i.Z,null),r.createElement(o.Z,null)))}},9346:function(e,t,a){a.r(t),a.d(t,{default:function(){return L}});var r=a(7294),l=a(2788),n=a(1883),i=a(1304),o=a.n(i),c=a(8227);const s=l.default.header.withConfig({displayName:"Hero__HeroStyles",componentId:"sc-1mvigjo-0"})(["border-bottom:1px solid var(--primary-1);.hero{display:flex;padding:6rem 0;align-items:center;justify-content:center;max-width:83vw;margin:0 auto;}@media only screen and (min-width:1600px){.hero{max-width:75vw;}}.row{align-items:center;}.hero-text{padding-right:3rem;}.hero h1{line-height:5rem;}.hero h1 span{display:inline-block;position:relative;font-size:110%;}.hero h1 span::after{position:absolute;content:'';background-color:#ace7ff;width:100%;height:15px;left:0;bottom:11px;z-index:-1;}.hero h4{color:var(--grey-8);margin-bottom:1.5rem;text-transform:uppercase;font-size:17px;}.hero p{font-size:20px;}.hero-categories{}.category-text-color{color:var(--grey-6);}.hero-category{padding:0rem 2rem;line-height:60px;margin:25px 25px 0 0;border-radius:10px;color:#3a3838;min-width:80px;display:inline-block;transition:all 0.1s linear;&:hover{filter:brightness(103%);transition:all 0.1s linear;}}.hero-category:hover > .overlay{width:100%;height:100%;opacity:0.95;transition-duration:0.2s;}@media only screen and (max-width:460px){.hero-categories{text-align:center;}}@media only screen and (max-width:1147px){.hero-category{font-size:90%;}}@media only screen and (max-width:1092px){.hero-category{padding:0 1.2rem;}}@media only screen and (max-width:991px){.hero-categories{text-align:center;}}@media only screen and (max-width:502px){.hero-category,h4,h1,p{text-align:center;}.hero-text{padding:0;}}@media only screen and (max-width:358px){h1{font-size:2.6rem;}}"]);var m=()=>r.createElement(s,null,r.createElement("div",{className:"hero"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-7 col-12 hero-text"},r.createElement("h4",null,"Balanced News. Finally."),r.createElement("h1",null,r.createElement("span",null,"Our Mantra"),r.createElement("br",null)," Journalism You Can Trust"),r.createElement("p",null,"Delve into the truth today.")),r.createElement("div",{className:"col-lg-5 col-12"},r.createElement("div",{className:"hero-categories"},c.b.map(((e,t,a)=>{if(a.length-1===t){const a={boxShadow:"0 0 40px",backgroundColor:e.color,color:e.color};return r.createElement(n.rU,{style:a,className:"hero-category",key:t,to:"/categories"},r.createElement("div",{className:"overlay"},r.createElement("div",{className:"category-text-color"},e.category)))}{const a={boxShadow:"0 0 40px",backgroundColor:e.color,color:e.color};return r.createElement(n.rU,{style:a,className:"hero-category",key:t,to:"/"+o()(e.category).toLowerCase()},r.createElement("div",{className:"overlay"},r.createElement("div",{className:"category-text-color"},e.category)))}}))))))),d=a(3097),p=a(3723),g=a(8193),E=a(6653),h=a(6372);const u="650329473";var x=()=>{const e=(0,n.K2)(u),{allMdx:{nodes:t}}=e;return r.createElement("section",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-lg-8 col-12"},r.createElement("h2",{className:"section-title"},"Recent Articles"),t.map((e=>{const{title:t,category:a,date:l,slug:i,image:s}=e.frontmatter;return r.createElement("article",{key:e.id,className:"card card-bg card-shadow recent-article-mb"},r.createElement(n.rU,{to:"/"+a.toLowerCase()+"/"+(i||o()(t,{lower:!0}))},r.createElement(p.G,{image:(0,p.c)(s),alt:t,className:"img"})),r.createElement("div",{className:"card-body"},r.createElement(n.rU,{to:"/"+a.toLowerCase()+"/"+(i||o()(t,{lower:!0}))},r.createElement("h3",{className:"recent-articles-heading"},t)),r.createElement("ul",{className:"card-meta list-inline"},r.createElement("li",{className:"list-inline-item"},r.createElement(g.cjn,null),Math.ceil(e.fields.timeToRead.words/275)," Min Read"),r.createElement("li",{className:"list-inline-item"},r.createElement(E.bgj,null)," ",l),r.createElement("li",{className:"list-inline-item"},r.createElement("ul",{className:"card-meta-tag list-inline"},r.createElement("li",{className:"list-inline-item"},r.createElement(n.rU,{to:"/"+a.toLowerCase(),className:"category-link",style:{color:(0,c.L)(a),backgroundColor:(0,c.L)(a)}},r.createElement("div",{className:"category-text-color"},a)))))),r.createElement(n.rU,{to:"/"+a.toLowerCase()+"/"+(i||o()(t,{lower:!0}))},r.createElement("p",{className:"excerpt"},e.excerpt)),r.createElement("a",{className:"btn btn-outline-primary",href:"/"+a.toLowerCase()+"/"+o()(t,{lower:!0})},"Read More")))}))),r.createElement(h.Z,null)))};var f=()=>{const e=(0,n.K2)("994729871"),{allMdx:{nodes:t}}=e;return r.createElement("div",{className:"col-md-4 col-12"},r.createElement("h2",{className:"section-title"},"Top Article"),t.map((e=>{const{title:t,category:a,date:l,image:i}=e.frontmatter;return r.createElement("article",{key:e.id,className:"card card-bg card-shadow"},r.createElement(n.rU,{to:"/"+a.toLowerCase()+"/"+o()(t,{lower:!0})},r.createElement(p.G,{image:(0,p.c)(i),alt:t,className:"img"})),r.createElement("div",{className:"card-body"},r.createElement(n.rU,{to:"/"+a.toLowerCase()+"/"+o()(t,{lower:!0})},r.createElement("h3",null,t)),r.createElement("ul",{className:"card-meta list-inline"},r.createElement("li",{className:"list-inline-item"},r.createElement(g.cjn,null),Math.ceil(e.fields.timeToRead.words/275)," Min Read"),r.createElement("li",{className:"list-inline-item"},r.createElement(E.bgj,null)," ",l),r.createElement("li",{className:"list-inline-item"},r.createElement("ul",{className:"card-meta-tag list-inline"},r.createElement("li",{className:"list-inline-item"},r.createElement(n.rU,{to:"/"+a.toLowerCase(),className:"category-link",style:{color:(0,c.L)(a),backgroundColor:(0,c.L)(a)}},r.createElement("div",{className:"category-text-color"},a)))))),r.createElement(n.rU,{to:"/"+a.toLowerCase()+"/"+o()(t,{lower:!0})},r.createElement("p",{className:"excerpt"},e.excerpt)),r.createElement("a",{className:"btn btn-outline-primary",href:"/"+a.toLowerCase()+"/"+o()(t,{lower:!0})},"Read More")))})))};var w=()=>{const e=(0,n.K2)("3342517651"),{allMdx:{nodes:t}}=e;return r.createElement("div",{className:"col-md-4 col-12"},r.createElement("h2",{className:"section-title trending-title"},"Trending"),t.map((e=>{const{title:t,category:a,date:l,image:i}=e.frontmatter;return r.createElement("article",{key:e.id,className:"card card-body card-bg card-shadow trending-card"},r.createElement(n.rU,{to:"/"+a.toLowerCase()+"/"+o()(t,{lower:!0})},r.createElement(p.G,{image:(0,p.c)(i),alt:t,className:"trending-img"})),r.createElement("div",{className:"trending-meta"},r.createElement(n.rU,{to:"/"+a.toLowerCase()+"/"+o()(t,{lower:!0})},r.createElement("h3",null,t)),r.createElement("ul",{className:"card-meta list-inline"},r.createElement("li",{className:"list-inline-item"},r.createElement(g.cjn,null),Math.ceil(e.fields.timeToRead.words/275)," Min Read"),r.createElement("li",{className:"list-inline-item"},r.createElement(E.bgj,null)," ",l))))})))};var y=()=>{const e=(0,n.K2)("2963264423"),{allMdx:{nodes:t}}=e;return r.createElement("div",{className:"col-md-4 col-12"},r.createElement("h2",{className:"section-title"},"Popular"),t.map((e=>{const{title:t,category:a,date:l,image:i}=e.frontmatter;return r.createElement("article",{key:e.id,className:"card card-bg card-shadow"},r.createElement(n.rU,{to:"/"+a.toLowerCase()+"/"+o()(t,{lower:!0})},r.createElement(p.G,{image:(0,p.c)(i),alt:t,className:"img"})),r.createElement("div",{className:"card-body"},r.createElement(n.rU,{to:"/"+a.toLowerCase()+"/"+o()(t,{lower:!0})},r.createElement("h3",null,t)),r.createElement("ul",{className:"card-meta list-inline"},r.createElement("li",{className:"list-inline-item"},r.createElement(g.cjn,null),Math.ceil(e.fields.timeToRead.words/275)," Min Read"),r.createElement("li",{className:"list-inline-item"},r.createElement(E.bgj,null)," ",l),r.createElement("li",{className:"list-inline-item"},r.createElement("ul",{className:"card-meta-tag list-inline"},r.createElement("li",{className:"list-inline-item"},r.createElement(n.rU,{to:"/"+a.toLowerCase(),className:"category-link",style:{color:(0,c.L)(a),backgroundColor:(0,c.L)(a)}},r.createElement("div",{className:"category-text-color"},a)))))),r.createElement(n.rU,{to:"/"+a.toLowerCase()+"/"+o()(t,{lower:!0})},r.createElement("p",{className:"excerpt"},e.excerpt)),r.createElement("a",{className:"btn btn-outline-primary",href:"/"+a.toLowerCase()+"/"+o()(t,{lower:!0})},"Read More")))})))};const N=l.default.section.withConfig({displayName:"Featured__FeaturedStyles",componentId:"sc-1xsaiaz-0"})(["border-bottom:1px solid var(--primary-1);.featured-section{padding:5rem 0;}@media screen and (max-width:767px){.featured-section{padding:0 0 5rem 0;}}@media screen and (max-width:576px){.featured-section{padding:0 15px 0 15px;}}"]);var b=()=>r.createElement(N,null,r.createElement("div",{className:"featured-section container"},r.createElement("div",{className:"row"},r.createElement(f,null),r.createElement(w,null),r.createElement(y,null)))),v=a(9389);const C=l.default.div.withConfig({displayName:"Notification__NotificationStyles",componentId:"sc-p54su2-0"})(["border-bottom:1px solid var(--primary-1);padding:5rem 0;margin-bottom:5rem;.notification-top-bar{box-shadow:0 0 34px var(--primary-6);height:50px;line-height:50px;width:100%;background:linear-gradient( 90deg,var(--primary-5) 0%,var(--primary-6) 100% );text-align:center;color:#ffffff;font-family:sans-serif;font-weight:lighter;font-size:14px;width:50%;margin:0 auto;border-radius:5px;}.notification-top-bar p{padding:0;margin:0;color:#ffffff;display:inline;font-size:130%;}.notification-top-bar a{padding:5px 12px;border-radius:3px;background:#fff;color:var(--primary-7);font-weight:500;text-decoration:none;margin-left:1rem;font-size:130%;font-weight:500;transition:all 0.2s linear;&:hover{background-color:#f4f4f4;color:var(--primary-8);}}@media screen and (max-width:815px){.notification-top-bar{height:100%;line-height:40px;padding:1rem;}.notification-top-bar p{display:block;}.notification-top-bar a{margin-left:0;}}@media screen and (max-width:979px){.notification-top-bar{width:90vw;}}@media screen and (max-width:351px){.notification-top-bar p{font-size:120%;}}@media screen and (max-width:335px){.notification-top-bar{padding:1rem 0;}}"]);var k=()=>r.createElement(C,null,r.createElement("div",{className:"notification-top-bar"},r.createElement("p",null,"InsightDC is looking for citizen Journalists!"),r.createElement(n.rU,{to:"/support-us"},"Support Us")));var L=e=>{let{data:t}=e;const{allMdx:{nodes:a}}=t,{site:{siteMetadata:l}}=t;return r.createElement(d.Z,null,r.createElement(v.Z,{title:l.title+" | Free Unbiased News for Everyone",description:l.description.substr(0,160)}),r.createElement(m,null),r.createElement(b,null),r.createElement(k,null),r.createElement(x,{posts:a}))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-7bc2ba5709af54e327d9.js.map