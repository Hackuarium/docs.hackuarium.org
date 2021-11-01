"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[6057],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=i,h=m["".concat(u,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9757:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={},u="Starting a new bioreactor",c={unversionedId:"bioreactor/using/gettingStarted",id:"bioreactor/using/gettingStarted",isDocsHomePage:!1,title:"Starting a new bioreactor",description:"When you have a new bioreactor you should start by configuring it. You may connect using a",source:"@site/docs/20_bioreactor/30_using/gettingStarted.md",sourceDirName:"20_bioreactor/30_using",slug:"/bioreactor/using/gettingStarted",permalink:"/docs/bioreactor/using/gettingStarted",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/website/docs/20_bioreactor/30_using/gettingStarted.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Frequently asked question (FAQ)",permalink:"/docs/bioreactor/using/faq"},next:{title:"List of qualifiers",permalink:"/docs/bioreactor/using/qualifiers"}},p=[{value:"Initializing parameters",id:"initializing-parameters",children:[]},{value:"Setup the weight",id:"setup-the-weight",children:[]},{value:"The main parameters",id:"the-main-parameters",children:[]}],s={toc:p};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"starting-a-new-bioreactor"},"Starting a new bioreactor"),(0,a.kt)("p",null,"When you have a new bioreactor you should start by configuring it. You may connect using a\nterminal through the serial port."),(0,a.kt)("p",null,"You may as well use the arduino application to directly connect to the bioreactor through serial.\nThe menu is accessible using the ",(0,a.kt)("inlineCode",{parentName:"p"},"h")," instruction but you should not forget to add a CR + LF after each\ninstruction."),(0,a.kt)("h2",{id:"initializing-parameters"},"Initializing parameters"),(0,a.kt)("p",null,"Connect via the terminal and reset all the parameters to the default parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"r1234")),(0,a.kt)("p",null,"It is also important to set a unique qualifier for the bioreactor. You should fill the ",(0,a.kt)("a",{parentName:"p",href:"/docs/bioreactor/using/qualifiers"},"list")," with a free\ncode."),(0,a.kt)("h2",{id:"setup-the-weight"},"Setup the weight"),(0,a.kt)("p",null,"There is now a special menu for the weight calibration ",(0,a.kt)("inlineCode",{parentName:"p"},"w"),"."),(0,a.kt)("p",null,"You should do the following step in order to callibrate the weight:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Empty bioreactor : ",(0,a.kt)("inlineCode",{parentName:"li"},"we")),(0,a.kt)("li",{parentName:"ol"},"Empty bioreactor + 1kg : ",(0,a.kt)("inlineCode",{parentName:"li"},"wk")),(0,a.kt)("li",{parentName:"ol"},"Bioreactor filled at low level : ",(0,a.kt)("inlineCode",{parentName:"li"},"wl")),(0,a.kt)("li",{parentName:"ol"},"Bioreactor filled at high level : ",(0,a.kt)("inlineCode",{parentName:"li"},"wh"))),(0,a.kt)("p",null,"You may now check the reproducibility and the weight in g of any object using ",(0,a.kt)("inlineCode",{parentName:"p"},"wt")),(0,a.kt)("p",null,"It is important to note that an error (stored in ",(0,a.kt)("a",{parentName:"p",href:"/docs/bioreactor/platformio/parameters#PARAM_ERROR"},"PARAM_ERROR")," will be generated if\nthe weight is either 20% under the minimal value or 20% over the maximal value and this should stop all the functions."),(0,a.kt)("h2",{id:"the-main-parameters"},"The main parameters"),(0,a.kt)("p",null,"In order to activate the bioreactor you need to enable functions. Currently there are 3 functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"agitation (value 1)"),(0,a.kt)("li",{parentName:"ul"},"food contorl (value 2)"),(0,a.kt)("li",{parentName:"ul"},"temperature control (value 3)")),(0,a.kt)("p",null,"You may enable the functionnablities by setting the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"AZ"),". To activate all the functionnalities\nenter ",(0,a.kt)("inlineCode",{parentName:"p"},"AZ7"),"."))}m.isMDXComponent=!0}}]);