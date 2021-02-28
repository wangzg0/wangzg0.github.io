(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),l=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},p=function(e){var t=l(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,u=p["".concat(o,".").concat(d)]||p[d]||s[d]||c;return n?r.a.createElement(u,m(m({ref:t},i),{},{components:n})):r.a.createElement(u,m({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var m={};for(var b in t)hasOwnProperty.call(t,b)&&(m[b]=t[b]);m.originalType=e,m.mdxType="string"==typeof e?e:a,o[1]=m;for(var i=2;i<c;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return m})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),c=(n(0),n(116)),o={id:"moment",title:"\u4f7f\u7528moment\u683c\u5f0f\u5316\u65f6\u95f4"},m={unversionedId:"javascript/moment",id:"javascript/moment",isDocsHomePage:!1,title:"\u4f7f\u7528moment\u683c\u5f0f\u5316\u65f6\u95f4",description:"\u4e2d\u6587\u683c\u5f0f\u5316",source:"@site/docs\\javascript\\moment.md",slug:"/javascript/moment",permalink:"/docs/javascript/moment",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/javascript/moment.md",version:"current",sidebar:"someSidebar",previous:{title:"\u6d4f\u89c8\u5668 V8 \u5f15\u64ce GC \u7b97\u6cd5\u539f\u7406",permalink:"/docs/javascript/v8"},next:{title:"\u4f7f\u7528webpack",permalink:"/docs/javascript/webpack"}},b=[],i={toc:b};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h4",{id:"\u4e2d\u6587\u683c\u5f0f\u5316"},"\u4e2d\u6587\u683c\u5f0f\u5316"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'import moment from "docs/javascript/moment";\nimport "moment/locale/zh-cn";\nmoment.locale("zh-cn");\n')),Object(c.b)("h4",{id:"\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\u683c\u5f0f"},"\u8f6c\u5316\u4e3a\u5b57\u7b26\u4e32\u683c\u5f0f"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const Date = moment().format("YYYY-MM-DD HH:mm");\n')),Object(c.b)("h4",{id:"\u83b7\u53d6\u5f53\u5929\u7684\u524d\u4e00\u4e2a\u6708\u65f6\u95f4"},"\u83b7\u53d6\u5f53\u5929\u7684\u524d\u4e00\u4e2a\u6708\u65f6\u95f4"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const preMonthDay = moment().subtract(1, "months");\n')),Object(c.b)("h4",{id:"\u83b7\u53d6\u5f53\u5929\u7684\u540e\u4e00\u4e2a\u6708\u65f6\u95f4"},"\u83b7\u53d6\u5f53\u5929\u7684\u540e\u4e00\u4e2a\u6708\u65f6\u95f4"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const preMonthDay = moment().add(1, "months");\n')),Object(c.b)("h4",{id:"\u83b7\u53d6\u5f53\u5929\u7684000000"},"\u83b7\u53d6\u5f53\u5929\u7684",Object(c.b)("inlineCode",{parentName:"h4"},"00:00:00")),Object(c.b)("p",null,"\u4f8b\u5982 ",Object(c.b)("inlineCode",{parentName:"p"},"2020-07-17 00:00:00")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const initToday = moment().startOf("day");\n')),Object(c.b)("h4",{id:"\u83b7\u53d6\u5f53\u5929\u7684235959"},"\u83b7\u53d6\u5f53\u5929\u7684",Object(c.b)("inlineCode",{parentName:"h4"},"23:59:59")),Object(c.b)("p",null,"\u4f8b\u5982 ",Object(c.b)("inlineCode",{parentName:"p"},"2020-07-17 23:59:59")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const initToday = moment().endOf("day");\n')),Object(c.b)("h4",{id:"\u83b7\u53d6\u5f53\u5929\u7684\u524d\u4e00\u5929"},"\u83b7\u53d6\u5f53\u5929\u7684\u524d\u4e00\u5929"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const initToday = moment().subtract(1, "days");\n')),Object(c.b)("h4",{id:"\u83b7\u53d6\u5f53\u5929\u7684\u540e\u4e00\u5929"},"\u83b7\u53d6\u5f53\u5929\u7684\u540e\u4e00\u5929"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const initToday = moment().add(1, "days");\n')),Object(c.b)("h4",{id:"\u5f53\u524d\u65f6\u95f4\u7684\u524d-15-\u5929\u81f3\u540e-15-\u5929"},"\u5f53\u524d\u65f6\u95f4\u7684\u524d 15 \u5929\u81f3\u540e 15 \u5929"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const timeValue = [moment().subtract(15, "days"), moment().add(15, "days")];\n')),Object(c.b)("h4",{id:"\u83b7\u53d6\u5f53\u5929\u7684\u524d\u4e00\u4e2a\u6708\u65f6\u95f4\u81f3\u5f53\u5929\u7684\u524d\u4e00\u5929\u4e14\u5747\u4e3a\u5f53\u5929\u7684000000"},"\u83b7\u53d6\u5f53\u5929\u7684\u524d\u4e00\u4e2a\u6708\u65f6\u95f4\u81f3\u5f53\u5929\u7684\u524d\u4e00\u5929,\u4e14\u5747\u4e3a\u5f53\u5929\u7684",Object(c.b)("inlineCode",{parentName:"h4"},"00:00:00")),Object(c.b)("p",null,"\u5f53\u5929\u662f 7 \u6708 17 \u65e5\uff1b\u5982",Object(c.b)("inlineCode",{parentName:"p"},"2020-06-17 00:00"),"-",Object(c.b)("inlineCode",{parentName:"p"},"2020-07-16 00:00")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const timeValue = [\n  moment()\n    .subtract(1, "months")\n    .startOf("day"),\n  moment()\n    .subtract(1, "days")\n    .startOf("day"),\n];\n')),Object(c.b)("h4",{id:"\u83b7\u53d6\u5f53\u524d\u6708\u521d\u548c\u6708\u5c3e"},"\u83b7\u53d6\u5f53\u524d\u6708\u521d\u548c\u6708\u5c3e"),Object(c.b)("p",null,"\u5982",Object(c.b)("inlineCode",{parentName:"p"},"2020-07-01 00:00"),"-",Object(c.b)("inlineCode",{parentName:"p"},"2020-07-31 23:59")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const monthStart = moment()\n  .startOf("month")\n  .format("YYYY-MM-DD HH:mm");\nconst monthEnd = moment()\n  .endOf("month")\n  .endOf("month")\n  .format("YYYY-MM-DD HH:mm");\n')),Object(c.b)("h4",{id:"\u83b7\u53d6\u5f53\u524d\u5929\u5f00\u59cb\u548c\u7ed3\u675f"},"\u83b7\u53d6\u5f53\u524d\u5929\u5f00\u59cb\u548c\u7ed3\u675f"),Object(c.b)("p",null,"\u5982",Object(c.b)("inlineCode",{parentName:"p"},"2020-07-17 00:00"),"-",Object(c.b)("inlineCode",{parentName:"p"},"2020-07-17 23:59")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const dayStart = moment()\n  .startOf("day")\n  .format("YYYY-MM-DD HH:mm");\nconst dayEnd = moment()\n  .endOf("day")\n  .format("YYYY-MM-DD HH:mm");\n')),Object(c.b)("h4",{id:"\u83b7\u53d6\u5f53\u6708\u6708\u521d\u81f3\u5f53\u5929\u7684\u7ed3\u675f"},"\u83b7\u53d6\u5f53\u6708\u6708\u521d\u81f3\u5f53\u5929\u7684\u7ed3\u675f"),Object(c.b)("p",null,"\u5982",Object(c.b)("inlineCode",{parentName:"p"},"2020-07-01 00:00"),"-",Object(c.b)("inlineCode",{parentName:"p"},"2020-07-17 23:59")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},'const start = moment().startOf("month");\nconst end = moment().endOf("day");\n')),Object(c.b)("h4",{id:"\u9009\u62e9\u65f6\u95f4\u4e0d\u80fd\u8d85\u8fc7\u5f53\u5929"},"\u9009\u62e9\u65f6\u95f4\u4e0d\u80fd\u8d85\u8fc7\u5f53\u5929"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"const disabledDate = (time) => {\n  if (!time) {\n    return false;\n  }\n  return time.valueOf() <= moment().valueOf();\n}\n\n...\n<DatePicker disabledDate={disabledDate} />\n")))}l.isMDXComponent=!0}}]);