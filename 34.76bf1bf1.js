(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{100:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;var a=i(n(0)),c=n(98),s=n(99),l=n(91),f=u(n(117));function d(e){var t=e.pluginIds,n=e.versionPersistence,r=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=f.default.read(e,n);return r[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(f.default.clear(e,n),{preferredVersionName:null})}(e)})),o}function v(){var e=l.useAllDocsData(),t=c.useThemeConfig().docs.versionPersistence,n=a.useMemo((function(){return Object.keys(e)}),[e]),r=a.useState((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(n)})),o=r[0],i=r[1];return a.useEffect((function(){i(d({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]),[o,a.useMemo((function(){return{savePreferredVersion:function(e,n){f.default.save(e,t,n),i((function(t){var r;return Object.assign(Object.assign({},t),((r={})[e]={preferredVersionName:n},r))}))}}}),[i])]}var m=a.createContext(null);function g(e){var t=e.children,n=v();return a.default.createElement(m.Provider,{value:n},t)}t.DocsPreferredVersionContextProvider=function(e){var t=e.children;return s.isDocsPluginEnabled?a.default.createElement(g,null,t):a.default.createElement(a.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){var e=a.useContext(m);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(98);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var o=n(111);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return o.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return o.DEFAULT_SEARCH_TAG}});var i=n(99);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return i.isDocsPluginEnabled}});var u=n(114);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return u.isSamePath}});var a=n(115);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return a.useTitleFormatter}});var c=n(116);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return c.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return c.useDocsPreferredVersionByPluginId}});var s=n(100);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return s.DocsPreferredVersionContextProvider}})},111:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return"docs-"+e+"-"+t}},112:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return u}));var r=n(20);function o(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function u(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(89);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var o,i,u=t.getActiveVersion(e,n),a=null==u?void 0:u.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:u,activeDoc:a,alternateDocVersions:a?(o=a.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),i=o.activeVersion!==r;return{latestDocSuggestion:i?null==o?void 0:o.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:i?r:void 0}}},114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=function(e,t){var n=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return n(e)===n(t)}},115:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;var o=r(n(20));t.useTitleFormatter=function(e){var t=o.default().siteConfig,n=void 0===t?{}:t,r=n.title,i=n.titleDelimiter,u=void 0===i?"|":i;return e&&e.trim().length?e.trim()+" "+u+" "+r:r}},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;var r=n(0),o=n(100),i=n(91),u=n(118);t.useDocsPreferredVersion=function(e){void 0===e&&(e=u.DEFAULT_PLUGIN_ID);var t=i.useDocsData(e),n=o.useDocsPreferredVersionContext(),a=n[0],c=n[1],s=a[e].preferredVersionName;return{preferredVersion:s?t.versions.find((function(e){return e.name===s})):null,savePreferredVersionName:r.useCallback((function(t){c.savePreferredVersion(e,t)}),[c])}},t.useDocsPreferredVersionByPluginId=function(){var e=i.useAllDocsData(),t=o.useDocsPreferredVersionContext()[0],n=Object.keys(e),r={};return n.forEach((function(n){r[n]=function(n){var r=e[n],o=t[n].preferredVersionName;return o?r.versions.find((function(e){return e.name===o})):null}(n)})),r}},117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return"docs-preferred-version-"+e},o={save:function(e,t,n){"none"===t||window.localStorage.setItem(r(e),n)},read:function(e,t){return"none"===t?null:window.localStorage.getItem(r(e))},clear:function(e,t){"none"===t||window.localStorage.removeItem(r(e))}};t.default=o},118:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));var r="default"},78:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(83),u=n(23),a=n(82);var c=function(e){var t=e.metadata,n=t.previous,r=t.next;return o.a.createElement("nav",{"aria-label":"Doc list page navigation",className:"my-5 p-0"},o.a.createElement("ul",{className:"pagination justify-content-between"},o.a.createElement("li",{className:"page-item mr-2"},n&&o.a.createElement(a.a,{className:"page-link",to:n.permalink},"\xab ",n.title)),o.a.createElement("li",{className:"page-item ml-2"},r&&o.a.createElement(a.a,{className:"page-link",to:r.permalink},r.title," \xbb"))))},s=n(110),l=n(20),f=n(84);t.default=function(e){var t=Object(l.default)().siteConfig,n=(void 0===t?{}:t).url,r=e.content,a=r.metadata,d=a.description,v=a.title,m=a.permalink,g=r.frontMatter,p=g.image,b=g.keywords,D=Object(s.useTitleFormatter)(v),h=n+Object(f.a)(p);return Object(i.a)(p)||(h=p),o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null,o.a.createElement("title",null,D),o.a.createElement("meta",{property:"og:title",content:D}),d&&o.a.createElement("meta",{name:"description",content:d}),d&&o.a.createElement("meta",{property:"og:description",content:d}),b&&b.length&&o.a.createElement("meta",{name:"keywords",content:b.join(",")}),p&&o.a.createElement("meta",{property:"og:image",content:h}),p&&o.a.createElement("meta",{name:"twitter:image",content:h}),p&&o.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+v}),m&&o.a.createElement("meta",{property:"og:url",content:n+m})),o.a.createElement("main",{className:"col col-md-8 p-0"},o.a.createElement(r,null),o.a.createElement(c,{metadata:a})))}},82:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(9),u=n(83),a=n(22),c=Object(r.createContext)({collectLink:function(){}}),s=n(84),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,f,d=e.isNavLink,v=e.to,m=e.href,g=e.activeClassName,p=e.isActive,b=e["data-noBrokenLinkCheck"],D=e.autoAddBaseUrl,h=void 0===D||D,P=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),V=Object(s.b)().withBaseUrl,O=Object(r.useContext)(c),E=v||m,_=Object(u.a)(E),j=null==E?void 0:E.replace("pathname://",""),y=void 0!==j?(n=j,h&&function(e){return e.startsWith("/")}(n)?V(n):n):void 0,A=Object(r.useRef)(!1),w=d?i.e:i.c,C=a.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!C&&_&&window.docusaurus.prefetch(y),function(){C&&f&&f.disconnect()}}),[y,C,_]);var L=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,x=!y||!_||L;return y&&_&&!L&&!b&&O.collectLink(y),x?o.a.createElement("a",Object.assign({href:y},E&&!_&&{target:"_blank",rel:"noopener noreferrer"},P)):o.a.createElement(w,Object.assign({},P,{onMouseEnter:function(){A.current||(window.docusaurus.preload(y),A.current=!0)},innerRef:function(e){var t,n;C&&e&&_&&(t=e,n=function(){window.docusaurus.prefetch(y)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:y||""},d&&{isActive:p,activeClassName:g}))}},83:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},84:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return u}));var r=n(20),o=n(83);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,u=i.forcePrependBaseUrl,a=void 0!==u&&u,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(a)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},89:function(e,t,n){"use strict";n.r(t);var r=n(9);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},91:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(89),o=n(112),i=n(113);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),o=r.useLocation().pathname;return i.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),o=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:i.getActiveVersion(n.pluginData,o)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return i.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getActiveVersion(n,o)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getActiveDocContext(n,o)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),o=r.useLocation().pathname;return i.getDocVersionSuggestions(n,o)}},98:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;var o=r(n(20));t.useThemeConfig=function(){return o.default().siteConfig.themeConfig}},99:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;var r=n(91);t.isDocsPluginEnabled=!!r.useAllDocsData}}]);