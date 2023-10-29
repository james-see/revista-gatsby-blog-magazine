"use strict";(self.webpackChunkrevista_gatsby_starter=self.webpackChunkrevista_gatsby_starter||[]).push([[661],{6793:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),i=a(3097),r=a(9389),o=a(4578),l=a(2788),s=a(1562);let c=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleChange=e=>{a.setState({[e.target.name]:e.target.value})},a.handleSubmit=e=>{e.preventDefault();const t=e.target;var n;fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(n={"form-name":t.getAttribute("name"),...a.state},Object.keys(n).map((e=>encodeURIComponent(e)+"="+encodeURIComponent(n[e]))).join("&"))}).then((()=>(0,s.c4)(t.getAttribute("action")))).catch((e=>alert(e)))},a.state={isValidated:!1},a}return(0,o.Z)(t,e),t.prototype.render=function(){return n.createElement(m,null,n.createElement("div",null,n.createElement("section",{className:"get-in-touch"},n.createElement("h1",{className:"title"},"Get in touch"),n.createElement("p",{className:"note subtitle"},"Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible."),n.createElement("div",{className:"column  is-two-thirds"},this.state.feedbackMsg&&n.createElement("p",null,this.state.feedbackMsg)),n.createElement("form",{name:"contact",className:"contact-form-styles contact-row",method:"post",action:"/success","data-netlify-honeypot":"bot-field",onSubmit:this.handleSubmit},n.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),n.createElement("div",{hidden:!0},n.createElement("label",null,"Don’t fill this out:"," ",n.createElement("input",{name:"bot-field",onChange:this.handleChange}))),n.createElement("div",{className:"field"},n.createElement("div",{className:"form-field col x-50"},n.createElement("input",{className:"input-text js-input",type:"text",name:"name",onChange:this.handleChange,id:"name",required:!0,placeholder:"Name"}))),n.createElement("div",{className:"field"},n.createElement("div",{className:"form-field col x-50"},n.createElement("input",{className:"input-text js-input",type:"email",name:"email",onChange:this.handleChange,id:"email",required:!0,placeholder:"Email"}))),n.createElement("div",{className:"field"},n.createElement("div",{className:"form-field col x-100"},n.createElement("textarea",{className:"input-text js-input",name:"message",onChange:this.handleChange,id:"message",required:!0,placeholder:"Message"}))),n.createElement("div",{className:"form-field submit col x-100 align-center"},n.createElement("button",{className:"btn btn-outline-primary contact-btn",type:"submit"},"Send"))),n.createElement("p",{className:"note"},"Powered by"," ",n.createElement("a",{className:"link",href:"https://www.netlify.com/products/forms/",target:"_blank"},"Netlify Forms"),"."," "))))},t}(n.Component);const m=l.default.div.withConfig({displayName:"ContactForm__Wrapper",componentId:"sc-1d0zh1y-0"})([".align-center{text-align:center;}.subtitle{padding:1.5rem 0 2.5rem;}input:focus label{color:transparent;}.notification p{line-height:0;margin-bottom:0;}.contact-row{margin:-20px 0;.col{padding:0 20px;float:left;box-sizing:border-box;&.x-50{width:50%;}&.x-100{width:100%;}}}@media only screen and (max-width:576px){.contact-row .col.x-50{width:100%;}}@media only screen and (max-width:398px){.contact-row{padding:0 5vw;display:block;}}.content-wrapper{min-height:100%;position:relative;}.get-in-touch{max-width:650px;margin:5rem auto;position:relative;display:block;font-family:var(--ff-primary),sans-serif;.title{text-align:center;font-family:var(--ff-primary),sans-serif;text-transform:uppercase;letter-spacing:3px;font-size:36px;line-height:48px;}}.contact-form-styles{.form-field{position:relative;margin:32px 0;}.input-text{display:block;width:100%;height:36px;border-width:0 0 2px 0;border-radius:0px;border-color:var(--primary-6);font-family:var(--ff-primary),sans-serif;font-size:18px;line-height:26px;font-weight:400;background-color:transparent;&:focus{outline:none;}&:focus,&.not-empty{+ .label{transform:translateY(-24px);}}}.label{position:absolute;left:20px;bottom:11px;font-size:18px;line-height:26px;font-weight:400;color:#7e7e7e;cursor:text;transition:transform 0.2s ease-in-out;}}.note{width:100%;text-align:center;line-height:21px;font-size:1.125em;}@media only screen and (max-width:690px){.note{padding:0 5vw;}.subtitle{margin:1rem auto 1.3rem;}}.contact-btn{padding:1rem 2rem;}@media only screen and (max-width:767px){.submit{margin-bottom:3rem !important;}}.is-hidden{display:none !important;}.is-danger{background-color:#f14668;border-color:transparent;p{color:#fff !important;}}.is-primary{background-color:#48c78e;border-color:transparent;p{color:#fff !important;}}.notification{padding:1.5rem 2rem;border-radius:5px;display:inline-block;margin-bottom:0.5rem;}"]);var d=()=>n.createElement(i.Z,null,n.createElement(r.Z,{title:"Contact Us | Revista",description:"Reach out for any inquiries, or find out how you can help our mission!"}),n.createElement(c,null))}}]);
//# sourceMappingURL=component---src-pages-contact-jsx-26cbfd13b3e8b2ae7e66.js.map