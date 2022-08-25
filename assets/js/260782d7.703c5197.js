"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[3834],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},s),{},{components:n})):r.createElement(h,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98474:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={sidebar_position:1},u="Starting a new bioreactor",c={unversionedId:"bioreactor/using/gettingStarted",id:"bioreactor/using/gettingStarted",isDocsHomePage:!1,title:"Starting a new bioreactor",description:"When you have a new bioreactor you should start by configuring it. You may connect using a terminal through the serial port.",source:"@site/docs/20_bioreactor/30_using/10_gettingStarted.md",sourceDirName:"20_bioreactor/30_using",slug:"/bioreactor/using/gettingStarted",permalink:"/docs/bioreactor/using/gettingStarted",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/20_bioreactor/30_using/10_gettingStarted.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Pin mapping",permalink:"/docs/bioreactor/making/pinMapping"},next:{title:"Steps",permalink:"/docs/bioreactor/using/steps"}},s=[{value:"Initializing parameters",id:"initializing-parameters",children:[]},{value:"Setup the weight",id:"setup-the-weight",children:[]},{value:"The main parameters",id:"the-main-parameters",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"starting-a-new-bioreactor"},"Starting a new bioreactor"),(0,i.kt)("p",null,"When you have a new bioreactor you should start by configuring it. You may connect using a terminal through the serial port."),(0,i.kt)("p",null,"You may as well use the Visual Studio Code (with PlatformIO extension) application to directly connect to the bioreactor through serial (press (Mac) ",(0,i.kt)("kbd",null,"\u2318"),"+",(0,i.kt)("kbd",null,"\u21e7"),"+",(0,i.kt)("kbd",null,"P")," or (PC/Linux) ",(0,i.kt)("kbd",null,"Ctrl"),"+",(0,i.kt)("kbd",null,"\u21e7"),"+",(0,i.kt)("kbd",null,"P")," and search for ",(0,i.kt)("inlineCode",{parentName:"p"},"serial"),")."),(0,i.kt)("p",null,"The menu is accessible using the ",(0,i.kt)("inlineCode",{parentName:"p"},"h")," instruction."),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you can't open the serial monitor in VSCode with PlatformIO extension, please make sure that you have opened the project."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You should not forget to add a ",(0,i.kt)("inlineCode",{parentName:"p"},"CR + LF")," after each instruction, this is automatically in VScode Serial Monitor but you need to consider it if you don't have an answer in the serial monitor)."))),(0,i.kt)("h2",{id:"initializing-parameters"},"Initializing parameters"),(0,i.kt)("p",null,"Connect via the terminal and reset all the parameters to the default parameters:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ur1234")),(0,i.kt)("p",null,"It is also important to set a unique qualifier for the bioreactor. You should fill the ",(0,i.kt)("a",{parentName:"p",href:"/docs/bioreactor/using/qualifiers"},"list")," with a free code."),(0,i.kt)("h2",{id:"setup-the-weight"},"Setup the weight"),(0,i.kt)("p",null,"There is now a special menu for the weight calibration ",(0,i.kt)("inlineCode",{parentName:"p"},"w"),"."),(0,i.kt)("p",null,"You should do the following step in order to callibrate the weight:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Empty bioreactor : ",(0,i.kt)("inlineCode",{parentName:"li"},"we")),(0,i.kt)("li",{parentName:"ol"},"Empty bioreactor + 1kg : ",(0,i.kt)("inlineCode",{parentName:"li"},"wk")),(0,i.kt)("li",{parentName:"ol"},"Bioreactor filled at high level : ",(0,i.kt)("inlineCode",{parentName:"li"},"wh"))),(0,i.kt)("p",null,"You may now check the reproducibility and the weight in g of any object using ",(0,i.kt)("inlineCode",{parentName:"p"},"wt")),(0,i.kt)("p",null,"It is important to note that an error (stored in ",(0,i.kt)("a",{parentName:"p",href:"/docs/bioreactor/platformio/parameters#param_error"},"PARAM_ERROR"),") will be generated if\nthe weight is either 20% under the minimal value or 20% over the maximal value and this should stop all the functions."),(0,i.kt)("h2",{id:"the-main-parameters"},"The main parameters"),(0,i.kt)("p",null,"In order to activate the bioreactor you need to enable functions. Currently there are 3 functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Agitation (value 1)"),(0,i.kt)("li",{parentName:"ul"},"Food control (value 2)"),(0,i.kt)("li",{parentName:"ul"},"Temperature control (value 3)")),(0,i.kt)("p",null,"You may enable the functionnablities by setting the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"AZ"),". To activate all the functionnalities\nenter ",(0,i.kt)("inlineCode",{parentName:"p"},"AZ7"),"."))}m.isMDXComponent=!0}}]);