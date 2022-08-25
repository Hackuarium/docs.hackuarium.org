"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[4623],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},87448:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={},u="Threadino",l={unversionedId:"threadino/introduction/README",id:"threadino/introduction/README",isDocsHomePage:!1,title:"Threadino",description:"Threadino consists of a common code base for all our projects: the idea is that once you have made and assembled a custom PCB using a micro-controller from the AtMega serie, you can really easily and quickly program it for your custom application.",source:"@site/docs/70_threadino/10_introduction/README.md",sourceDirName:"70_threadino/10_introduction",slug:"/threadino/introduction/README",permalink:"/docs/threadino/introduction/README",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/70_threadino/10_introduction/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Led pins",permalink:"/docs/programming/esp32/blink"},next:{title:"Programming from Platformio",permalink:"/docs/threadino/platformio-install/README"}},s=[],m={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"threadino"},"Threadino"),(0,a.kt)("p",null,"Threadino consists of a common code base for all our projects: the idea is that once you have made and assembled a custom PCB using a micro-controller from the AtMega serie, you can really easily and quickly program it for your custom application."),(0,a.kt)("p",null,"The code base has a ",(0,a.kt)("inlineCode",{parentName:"p"},"lib")," folder with all the code common to all the projects- For instance, you already have facilitated I2C programming and access to various utilities, like our serial parameters system ADD LINK! Moreover, we set up an enironment that allows you to have many threads running at the same time on the micro-controller, which allows you to write pretty complex code on a really elementary micro-controller."))}p.isMDXComponent=!0}}]);