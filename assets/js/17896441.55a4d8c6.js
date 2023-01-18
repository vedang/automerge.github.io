"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[918],{9960:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7294),l=a(3727),r=a(2263),i=a(3919),s=a(412);const o=(0,n.createContext)({collectLink:()=>{}});var c=a(4996),d=a(8780);const m=function(e){let{isNavLink:t,to:a,href:m,activeClassName:u,isActive:v,"data-noBrokenLinkCheck":p,autoAddBaseUrl:h=!0,...g}=e;var f;const{siteConfig:{trailingSlash:b,baseUrl:E}}=(0,r.Z)(),{withBaseUrl:k}=(0,c.C)(),_=(0,n.useContext)(o),N=a||m,Z=(0,i.Z)(N),L=null==N?void 0:N.replace("pathname://","");let U=void 0!==L?(w=L,h&&(e=>e.startsWith("/"))(w)?k(w):w):void 0;var w;U&&Z&&(U=(0,d.applyTrailingSlash)(U,{trailingSlash:b,baseUrl:E}));const y=(0,n.useRef)(!1),C=t?l.OL:l.rU,T=s.Z.canUseIntersectionObserver,M=(0,n.useRef)();(0,n.useEffect)((()=>(!T&&Z&&null!=U&&window.docusaurus.prefetch(U),()=>{T&&M.current&&M.current.disconnect()})),[M,U,T,Z]);const A=null!==(f=null==U?void 0:U.startsWith("#"))&&void 0!==f&&f,S=!U||!Z||A;return U&&Z&&!A&&!p&&_.collectLink(U),S?n.createElement("a",{href:U,...N&&!Z&&{target:"_blank",rel:"noopener noreferrer"},...g}):n.createElement(C,{...g,onMouseEnter:()=>{y.current||null==U||(window.docusaurus.preload(U),y.current=!0)},innerRef:e=>{var t,a;T&&e&&Z&&(t=e,a=()=>{null!=U&&window.docusaurus.prefetch(U)},M.current=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.current.unobserve(t),M.current.disconnect(),a())}))})),M.current.observe(t))},to:U||"",...t&&{isActive:v,activeClassName:u}})}},3919:(e,t,a)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function l(e){return void 0!==e&&!n(e)}a.d(t,{Z:()=>l,b:()=>n})},4996:(e,t,a)=>{a.d(t,{C:()=>r,Z:()=>i});var n=a(2263),l=a(3919);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.Z)();return{withBaseUrl:(a,n)=>function(e,t,a,n){let{forcePrependBaseUrl:r=!1,absolute:i=!1}=void 0===n?{}:n;if(!a)return a;if(a.startsWith("#"))return a;if((0,l.b)(a))return a;if(r)return t+a;const s=a.startsWith(t)?a:t+a.replace(/^\//,"");return i?e+s:s}(t,e,a,n)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:a}=r();return a(e,t)}},8943:(e,t,a)=>{a.r(t),a.d(t,{default:()=>D});var n=a(7294),l=a(6010),r=a(3783),i=a(9960),s=a(5999);const o=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var c=a(2263),d=a(907),m=a(9521);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){let{versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,c.Z)(),{pluginId:r}=(0,d.gA)({failfast:!0}),{savePreferredVersionName:i}=(0,m.J)(r),{latestDocSuggestion:s,latestVersionSuggestion:o}=(0,d.Jo)(r),u=s??(h=o).docs.find((e=>e.id===h.mainDocId));var h;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:o.label,to:u.path,onClick:()=>i(o.name)})))}const g=function(e){let{versionMetadata:t}=e;return t.banner?n.createElement(h,{versionMetadata:t}):n.createElement(n.Fragment,null)};var f=a(1217);function b(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function E(e){let{lastUpdatedBy:t}=e;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(E,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(6753),N=a(62);const Z="lastUpdated_mt2f";function L(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(N.Z,e)))}function U(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:i}=e;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(_.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",Z)},(a||r)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:r})))}function w(e){const{content:t}=e,{metadata:a}=t,{editUrl:r,lastUpdatedAt:i,formattedLastUpdatedAt:s,lastUpdatedBy:o,tags:c}=a,d=c.length>0,u=!!(r||i||o);return d||u?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(L,{tags:c}),u&&n.createElement(U,{editUrl:r,lastUpdatedAt:i,lastUpdatedBy:o,formattedLastUpdatedAt:s})):n.createElement(n.Fragment,null)}var y=a(1575);const C="tocCollapsible_aw-L",T="tocCollapsibleButton_zr6a",M="tocCollapsibleContent_0dom",A="tocCollapsibleExpanded_FSiv";var S=a(5002);function x(e){let{toc:t,className:a,minHeadingLevel:r,maxHeadingLevel:i}=e;const{collapsed:o,toggleCollapsed:c}=(0,m.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(C,{[A]:!o},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",T),onClick:c},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:M,collapsed:o},n.createElement(S.Z,{toc:t,minHeadingLevel:r,maxHeadingLevel:i})))}var B=a(9649);const H="docItemContainer_oiyr",O="docItemCol_zHA2",F="tocMobile_Tx6Y";function D(e){const{content:t,versionMetadata:a}=e,{metadata:i,frontMatter:s}=t,{image:c,keywords:d,hide_title:u,hide_table_of_contents:v,toc_min_heading_level:p,toc_max_heading_level:h}=s,{description:b,title:E}=i,k=!u&&void 0===t.contentTitle,_=(0,r.Z)(),N=!v&&t.toc&&t.toc.length>0,Z=N&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:E,description:b,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[O]:!v})},n.createElement(g,{versionMetadata:a}),n.createElement("div",{className:H},n.createElement("article",null,a.badge&&n.createElement("span",{className:(0,l.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label),N&&n.createElement(x,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:h,className:(0,l.Z)(m.kM.docs.docTocMobile,F)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},k&&n.createElement(B.N,null,E),n.createElement(t,null)),n.createElement(w,e)),n.createElement(o,{metadata:i}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(y.Z,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:h,className:m.kM.docs.docTocDesktop}))))}},6753:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),l=a(5999),r=a(7462),i=a(6010);const s="iconEdit_mS5F",o=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var c=a(9521);function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},n.createElement(o,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9649:(e,t,a)=>{a.d(t,{N:()=>d,Z:()=>m});var n=a(7462),l=a(7294),r=a(6010),i=a(5999),s=a(9521);const o="anchorWithStickyNavbar_y2LR",c="anchorWithHideOnScrollNavbar_3ly5",d=function(e){let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,function(e){let{id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,s.LU)();return a?l.createElement(t,(0,n.Z)({},d,{className:(0,r.Z)("anchor",{[c]:m,[o]:!m}),id:a}),d.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:`#${a}`,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,d)});var t}},1217:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(2859),r=a(9521),i=a(4996);function s(e){let{title:t,description:a,keywords:s,image:o,children:c}=e;const d=(0,r.pe)(t),{withBaseUrl:m}=(0,i.C)(),u=o?m(o,{absolute:!0}):void 0;return n.createElement(l.Z,null,t&&n.createElement("title",null,d),t&&n.createElement("meta",{property:"og:title",content:d}),a&&n.createElement("meta",{name:"description",content:a}),a&&n.createElement("meta",{property:"og:description",content:a}),s&&n.createElement("meta",{name:"keywords",content:Array.isArray(s)?s.join(","):s}),u&&n.createElement("meta",{property:"og:image",content:u}),u&&n.createElement("meta",{name:"twitter:image",content:u}),c)}},1575:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7462),l=a(7294),r=a(6010),i=a(5002);const s="tableOfContents_vrFS";const o=function(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.Z)(s,"thin-scrollbar",t)},l.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7462),l=a(7294),r=a(9521);function i(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function s(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:d,...m}=e;const u=(0,r.LU)(),v=c??u.tableOfContents.minHeadingLevel,p=d??u.tableOfContents.maxHeadingLevel,h=(0,r.DA)({toc:t,minHeadingLevel:v,maxHeadingLevel:p}),g=(0,l.useMemo)((()=>{if(s&&o)return{linkClassName:s,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:p}}),[s,o,v,p]);return(0,r.Si)(g),l.createElement(i,(0,n.Z)({toc:h,className:a,linkClassName:s},m))}},7774:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),r=a(9960);const i="tag_WK-t",s="tagRegular_LXbV",o="tagWithCount_S5Zl";const c=function(e){const{permalink:t,name:a,count:c}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(i,{[s]:!c,[o]:c})},a,c&&n.createElement("span",null,c))}},62:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),r=a(5999),i=a(7774);const s="tags_NBRY",o="tag_F03v";function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:o},n.createElement(i.Z,{name:t,permalink:a}))}))))}},3783:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(412);const r="desktop",i="mobile",s="ssr";function o(){return l.Z.canUseDOM?window.innerWidth>996?r:i:s}const c=function(){const[e,t]=(0,n.useState)((()=>o()));return(0,n.useEffect)((()=>{function e(){t(o())}return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),e}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:a,baseUrl:n}=t;if(e.startsWith("#"))return e;if(void 0===a)return e;const[l]=e.split(/[#?]/),r="/"===l||l===n?l:(i=l,a?function(e){return e.endsWith("/")?e:`${e}/`}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));var i;return e.replace(l,r)}},8780:function(e,t,a){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var l=a(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(l).default}});var r=a(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(r).default}})},9964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);