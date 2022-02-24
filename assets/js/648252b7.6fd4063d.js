"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1843],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1446:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={sidebar_position:2},u="Values",p={unversionedId:"types/values",id:"types/values",isDocsHomePage:!1,title:"Values",description:"All JSON primitive datatypes are supported in an Automerge document. In addition, JavaScript Date objects are supported.",source:"@site/docs/types/values.md",sourceDirName:"types",slug:"/types/values",permalink:"/docs/types/values",editUrl:"https://github.com/automerge/automerge.github.io/edit/main/docs/types/values.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Extra Credit",permalink:"/docs/tutorial/extra-credit"},next:{title:"Counters",permalink:"/docs/types/counters"}},l=[],s={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"values"},"Values"),(0,a.kt)("p",null,"All JSON primitive datatypes are supported in an Automerge document. In addition, JavaScript ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"},"Date objects")," are supported."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Remember, never modify ",(0,a.kt)("inlineCode",{parentName:"em"},"currentDoc")," directly, only ever change ",(0,a.kt)("inlineCode",{parentName:"em"},"doc")," inside the callback to ",(0,a.kt)("inlineCode",{parentName:"em"},"Automerge.change"),"!")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"newDoc = Automerge.change(currentDoc, doc => {\n  doc.property = 'value' // assigns a string value to a property\n  doc['property'] = 'value' // equivalent to the previous line\n  delete doc['property'] // removes a property\n\n  doc.stringValue = 'value'\n  doc.numberValue = 1\n  doc.boolValue = true\n  doc.nullValue = null\n  doc.nestedObject = {} // creates a nested object\n  doc.nestedObject.property = 'value'\n  // you can also assign an object that already has some properties\n  doc.otherObject = { key: 'value', number: 42 }\n})\n")))}d.isMDXComponent=!0}}]);