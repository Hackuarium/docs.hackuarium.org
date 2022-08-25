"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[6813],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return N}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),m=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),k=m(a),N=r,s=k["".concat(p,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(s,i(i({ref:e},d),{},{components:a})):n.createElement(s,i({ref:e},d))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},84325:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={},p="Parameters",m={unversionedId:"phmeter/platformio/parameters",id:"phmeter/platformio/parameters",isDocsHomePage:!1,title:"Parameters",description:"All the functionalities and the communication between processes are ensured by a common list of parameters.",source:"@site/docs/40_phmeter/10_platformio/20_parameters.md",sourceDirName:"40_phmeter/10_platformio",slug:"/phmeter/platformio/parameters",permalink:"/docs/phmeter/platformio/parameters",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/40_phmeter/10_platformio/20_parameters.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/phmeter/platformio/platformio"},next:{title:"Components",permalink:"/docs/phmeter/making/assembling/index"}},d=[{value:"Other planned parameters",id:"other-planned-parameters",children:[]},{value:"State machine",id:"state-machine",children:[{value:"PARAM_ENABLED",id:"param_enabled",children:[]}]},{value:"PARAM_STATUS",id:"param_status",children:[]},{value:"PARAM_ERROR",id:"param_error",children:[]}],u={toc:d};function k(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"All the functionalities and the communication between processes are ensured by a common list of parameters."),(0,l.kt)("p",null,"The first 26 parameters (",(0,l.kt)("inlineCode",{parentName:"p"},"A")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"Z"),") will be saved regularly in the log. These values will be recovered when the pHMeter reboots."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"PARAM"),(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_TEMP_EXT1"),(0,l.kt)("td",{parentName:"tr",align:null},"Temperature of the solution (top)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_TEMP_EXT2"),(0,l.kt)("td",{parentName:"tr",align:null},"Temperature of the solution (bottom)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"C"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH"),(0,l.kt)("td",{parentName:"tr",align:null},"pH (raw values)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH_H"),(0,l.kt)("td",{parentName:"tr",align:null},"pH in unit of potential of hydrogen")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"E"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH_TARGET"),(0,l.kt)("td",{parentName:"tr",align:null},"Desired pH")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_EC"),(0,l.kt)("td",{parentName:"tr",align:null},"Electrolytic Conductivity (raw values)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"G"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_EC_US"),(0,l.kt)("td",{parentName:"tr",align:null},"Electrolytic Conductivity in unit of ","\u03bc","Siemens/cm")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"Q"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_NUMBER_ACQ"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of acquisition of 100 ms that will be taken")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"17"),(0,l.kt)("td",{parentName:"tr",align:null},"R"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ACTIVE_PROBES"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of reading values")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null},"S"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_BATTERY"),(0,l.kt)("td",{parentName:"tr",align:null},"Battery voltage (hundredths of volt)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"24"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Error in the system")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"25"),(0,l.kt)("td",{parentName:"tr",align:null},"Z"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ENABLED"),(0,l.kt)("td",{parentName:"tr",align:null},"Currently active service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"26"),(0,l.kt)("td",{parentName:"tr",align:null},"AA"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH_FACTOR"),(0,l.kt)("td",{parentName:"tr",align:null},"PH calibration: conversion factor digital -> H")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"27"),(0,l.kt)("td",{parentName:"tr",align:null},"AB"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH_NEUTRAL"),(0,l.kt)("td",{parentName:"tr",align:null},"PH calibration: digital offset value when pHMeter is full of pure water")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"28"),(0,l.kt)("td",{parentName:"tr",align:null},"AC"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_EC_FACTOR"),(0,l.kt)("td",{parentName:"tr",align:null},"EC calibration: conversion factor digital -> uS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"29"),(0,l.kt)("td",{parentName:"tr",align:null},"AD"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_EC_NEUTRAL"),(0,l.kt)("td",{parentName:"tr",align:null},"EC calibration: digital offset value when pHMeter is full of pure water")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"51"),(0,l.kt)("td",{parentName:"tr",align:null},"AZ"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_STATUS"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled service (set by user)")))),(0,l.kt)("h2",{id:"other-planned-parameters"},"Other planned parameters"),(0,l.kt)("p",null,"Others variables are consider with aditional modules that you can connect to the pHMeter via RJ12 port."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"PARAM"),(0,l.kt)("th",{parentName:"tr",align:null},"PARAM NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH_STATE"),(0,l.kt)("td",{parentName:"tr",align:null},"0: Pause 1 : normal acquisition, 2 : purge of pipes, 4: calibration pH=4, 7: calibration pH=7, 10: calibration pH=10")))),(0,l.kt)("h2",{id:"state-machine"},"State machine"),(0,l.kt)("p",null,"There are 3 important variables that will manage the state of the pHMeter:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PARAM_ENABLED"),": the functions that are currently enabled."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PARAM_STATUS"),": the current status of the pHMeter."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PARAM_ERROR"),": if there is any error in one of the processes.")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The ",(0,l.kt)("inlineCode",{parentName:"p"},"PARAM_ENABLED")," ",(0,l.kt)("kbd",null,"Z")," will allow to activate or deactivate some function of the pHMeter. It is for example possible to disable EC while keeping all the other functionalities active."))),(0,l.kt)("h3",{id:"param_enabled"},"PARAM_ENABLED"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PARAM_ENABLED")," ",(0,l.kt)("kbd",null,"Z")," allows to enable or disable some functionalities of the pHMeter. Currently, it can control alkaline/acid food."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"BIT"),(0,l.kt)("th",{parentName:"tr",align:null},"PARAM_ENABLED"),(0,l.kt)("th",{parentName:"tr",align:null},"COMMENT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_1"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable alkaline control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_2"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable acid control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_3"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable alkaline/acid aux. control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_4"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable alkaline/acid aux. control")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you want to control everything the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"PARAM_ENABLED")," should be 15."))),(0,l.kt)("h2",{id:"param_status"},"PARAM_STATUS"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PARAM_STATUS")," ",(0,l.kt)("kbd",null,"AZ")," will display the currently active functionalities. It is composed of different bits that can be enabled or disabled using the method ",(0,l.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stop"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"BIT"),(0,l.kt)("th",{parentName:"tr",align:null},"PARAM_STATUS"),(0,l.kt)("th",{parentName:"tr",align:null},"COMMENT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_1"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable alkaline control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_2"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable acid control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_3"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable alkaline/acid aux. control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_OUTPUT_4"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable alkaline/acid aux. control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_EC_READING"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable EC reading")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_PH_CONTROL"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable pH control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_PH_CALIBRATE"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable pH calibration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_RELAY_ACID"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable acid addition")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_RELAY_BASE"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable base addition")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_STATUS_TEST_PROBES"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable/disable test probes")))),(0,l.kt)("p",null,"The status is currently the ",(0,l.kt)("kbd",null,"AZ")," parameter. You can change the status by changing this value. For example, if you want to force the pHMeter to go in the alkaline state you should ensure that the bits for the outputs, let's say ",(0,l.kt)("inlineCode",{parentName:"p"},"FLAG_OUTPUT_1")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"FLAG_PH_CONTROL")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"FLAG_RELAY_BASE")," are set. In other words, you may have to add ",(0,l.kt)("inlineCode",{parentName:"p"},"2^0 (1) + 2^5 (32) + 2^8 (256) = 289")," to your value of the parameter ",(0,l.kt)("kbd",null,"AZ")," (in the case it was not yet enabled). Same procedure is to be implemented for acidification and all commands."),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The param ",(0,l.kt)("inlineCode",{parentName:"p"},"PARAM_STATUS")," is the main control when you are running the pHMeter protocol, be sure that those manual changes do not affect your actual test."))),(0,l.kt)("h2",{id:"param_error"},"PARAM_ERROR"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PARAM_ERROR")," ",(0,l.kt)("kbd",null,"Y")," will display any error in the pHMeter, you can check the code of the error with this table:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"BIT"),(0,l.kt)("th",{parentName:"tr",align:null},"PARAM_ERROR"),(0,l.kt)("th",{parentName:"tr",align:null},"COMMENT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_EXT1_PROBE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Liquid probe in the top failed (one wire not answering)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_EXT2_PROBE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Liquid probe in the bottom failed (one wire not answering)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_EXT2_RANGE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Temperature of liquid in the top is outside range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_EXT2_RANGE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Temperature of liquid in the bottom is outside range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_PH_RANGE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"pH is outside range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_EC_RANGE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"EC is outside range")))),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Always have this information at hand, you never know when it can be very helpful."))))}k.isMDXComponent=!0}}]);