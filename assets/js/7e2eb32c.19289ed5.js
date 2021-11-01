"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[661],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return k}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),N=o(a),k=r,g=N["".concat(m,".").concat(k)]||N[k]||u[k]||l;return a?n.createElement(g,i(i({ref:e},d),{},{components:a})):n.createElement(g,i({ref:e},d))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},7373:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return o},toc:function(){return d},default:function(){return N}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={},m="Parameters",o={unversionedId:"bioreactor/platformio/parameters",id:"bioreactor/platformio/parameters",isDocsHomePage:!1,title:"Parameters",description:"All the functionalities and the communication between processes is ensured by a common list of parameters.",source:"@site/docs/20_bioreactor/10_platformio/parameters.md",sourceDirName:"20_bioreactor/10_platformio",slug:"/bioreactor/platformio/parameters",permalink:"/docs/bioreactor/platformio/parameters",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/website/docs/20_bioreactor/10_platformio/parameters.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/bioreactor/platformio/platformio"},next:{title:"Assembling the bioreactor",permalink:"/docs/bioreactor/making/assembling/index"}},d=[{value:"Other planned parameters",id:"other-planned-parameters",children:[]},{value:"PARAM_STATUS",id:"param_status",children:[]},{value:"PARAM_ENABLED",id:"param_enabled",children:[]},{value:"PARAM_ERROR",id:"param_error",children:[]}],u={toc:d};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"All the functionalities and the communication between processes is ensured by a common list of parameters.\nThe first 26 parameters (A -> Z) will be saved regularly in the log. These values will be recovered when the bioreactor reboots."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"p"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"A"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_TEMP_LIQ"),(0,l.kt)("td",{parentName:"tr",align:null},"temperature of the solution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_TEMP_PCB"),(0,l.kt)("td",{parentName:"tr",align:null},"temperature of the PCB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"C"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_TEMP_PID"),(0,l.kt)("td",{parentName:"tr",align:null},"current heating power")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_TEMP_TARGET"),(0,l.kt)("td",{parentName:"tr",align:null},"target temperature of the liquid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"E"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_WEIGHT"),(0,l.kt)("td",{parentName:"tr",align:null},"in unit of the balance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_WEIGHT_G"),(0,l.kt)("td",{parentName:"tr",align:null},"in unit of the balance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"G"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_WEIGHT_SINCE_LAST_EVENT"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"H"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_WEIGHT_MIN"),(0,l.kt)("td",{parentName:"tr",align:null},"weight value for low level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"I"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_WEIGHT_MAX"),(0,l.kt)("td",{parentName:"tr",align:null},"weight value for high level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"24"),(0,l.kt)("td",{parentName:"tr",align:null},"Y"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"25"),(0,l.kt)("td",{parentName:"tr",align:null},"Z"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_STATUS"),(0,l.kt)("td",{parentName:"tr",align:null},"currently active service")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"26"),(0,l.kt)("td",{parentName:"tr",align:null},"AA"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_STEPPER_SPEED"),(0,l.kt)("td",{parentName:"tr",align:null},"motor speed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"27"),(0,l.kt)("td",{parentName:"tr",align:null},"AB"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_STEPPER_STEPS"),(0,l.kt)("td",{parentName:"tr",align:null},"number of steps before changing the direction of the motor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"31"),(0,l.kt)("td",{parentName:"tr",align:null},"AF"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_SEDIMENTATION_TIME"),(0,l.kt)("td",{parentName:"tr",align:null},"number of minutes to wait without rotation before emptying")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"32"),(0,l.kt)("td",{parentName:"tr",align:null},"AG"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_FILLED_TIME"),(0,l.kt)("td",{parentName:"tr",align:null},"number of minutes to stay in the filled state")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"33"),(0,l.kt)("td",{parentName:"tr",align:null},"AH"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_WEIGHT_FACTOR"),(0,l.kt)("td",{parentName:"tr",align:null},"weight calibration: conversion factor digital -> gr")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"34"),(0,l.kt)("td",{parentName:"tr",align:null},"AI"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_WEIGHT_OFFSET"),(0,l.kt)("td",{parentName:"tr",align:null},"weight calibration: digital offset value when bioreactor is empty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"51"),(0,l.kt)("td",{parentName:"tr",align:null},"AZ"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ENABLED"),(0,l.kt)("td",{parentName:"tr",align:null},"enabled service (set by user)")))),(0,l.kt)("h2",{id:"other-planned-parameters"},"Other planned parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"id"),(0,l.kt)("th",{parentName:"tr",align:null},"p"),(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH"),(0,l.kt)("td",{parentName:"tr",align:null},"current pH"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH_STATE"),(0,l.kt)("td",{parentName:"tr",align:null},"0: Pause 1 : normal acquisition, 2 : purge of pipes,  4: calibration pH=4, 7: calibration pH=7, 10: calibration pH=10"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_FLUX_GAS1"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_FLUX_GAS2"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_FLUX_GAS3"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_FLUX_GAS4"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_CONDUCTIVITY"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"35"),(0,l.kt)("td",{parentName:"tr",align:null},"AJ"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_TARGET_PH"),(0,l.kt)("td",{parentName:"tr",align:null},"desired pH")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"36"),(0,l.kt)("td",{parentName:"tr",align:null},"AK"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH_FACTOR_A"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"37"),(0,l.kt)("td",{parentName:"tr",align:null},"AL"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_PH_FACTOR_B"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"39"),(0,l.kt)("td",{parentName:"tr",align:null},"AN"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_DESIRED_FLUX_GAS1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"40"),(0,l.kt)("td",{parentName:"tr",align:null},"AO"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_DESIRED_FLUX_GAS2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"41"),(0,l.kt)("td",{parentName:"tr",align:null},"AP"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_DESIRED_FLUX_GAS3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"42"),(0,l.kt)("td",{parentName:"tr",align:null},"AQ"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_DESIRED_FLUX_GAS4"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"43"),(0,l.kt)("td",{parentName:"tr",align:null},"AR"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_OFFSET1"),(0,l.kt)("td",{parentName:"tr",align:null},"anemometer calibration: offset of the digital value (digital value when no gas is flowing)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"44"),(0,l.kt)("td",{parentName:"tr",align:null},"AS"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_OFFSET2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"45"),(0,l.kt)("td",{parentName:"tr",align:null},"AT"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_OFFSET3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"46"),(0,l.kt)("td",{parentName:"tr",align:null},"AU"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_OFFSET4"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"47"),(0,l.kt)("td",{parentName:"tr",align:null},"AV"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_FACTOR1"),(0,l.kt)("td",{parentName:"tr",align:null},"anemometer calibration factor: conversion between gas flux (of air) and digital unit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"48"),(0,l.kt)("td",{parentName:"tr",align:null},"AW"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_FACTOR2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"49"),(0,l.kt)("td",{parentName:"tr",align:null},"AX"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_FACTOR3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null},"AY"),(0,l.kt)("td",{parentName:"tr",align:null},"PARAM_ANEMO_FACTOR4"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h1",{id:"state-machine"},"State machine"),(0,l.kt)("p",null,"There are 3 important variables that will manage the state of the bioreactor"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PARAM_STATUS : the current status of the bioreactor"),(0,l.kt)("li",{parentName:"ul"},"PARAM_ERROR : if there is any error in one of the processes"),(0,l.kt)("li",{parentName:"ul"},"PARAM_ENABLED : the functions that are currently enabled")),(0,l.kt)("p",null,"The PARAM_ENABLED will allow to activate or deactivate some function of the bioreactor. It is for example possible to disable heating while keeping all the other functionalities active."),(0,l.kt)("h2",{id:"param_status"},"PARAM_STATUS"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PARAM_STATUS")," will display the currently active functionalities. It is composed of different bits that can\nbe enabled or disabled using the method ",(0,l.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"stop"),". You may also check the status of one of the functions using ",(0,l.kt)("inlineCode",{parentName:"p"},"getStatus"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Bit"),(0,l.kt)("th",{parentName:"tr",align:null},"PARAM_STATUS"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_STEPPER_CONTROL"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable agitation control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_FOOD_CONTROL"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable food control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_PID_CONTROL"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable heating")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_PH_CONTROL"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable pH control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_GAS_CONTROL"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable gas control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_SEDIMENTATION"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable sedimentation (one of the phases of food control)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_RELAY_FILLING"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable filling pump (one of the phases of food control)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_RELAY_EMPTYING"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable emptying pump (one of the phases of food control)")))),(0,l.kt)("p",null,"11   | FLAG_PH_CALIBRATE    | enable/disable pH calibration\n12   | FLAG_RELAY_ACID      | enable/disable acid addition\n13   | FLAG_RELAY_BASE      | enable/disable base addition"),(0,l.kt)("p",null,"The status is currently the ",(0,l.kt)("inlineCode",{parentName:"p"},"Z")," parameter. You can change the status by changing this value. For example\nif you want to force the bioreactor to go in the emptying state you should ensure that the bits ",(0,l.kt)("inlineCode",{parentName:"p"},"FLAG_FOOD_CONTROL")," & ",(0,l.kt)("inlineCode",{parentName:"p"},"FLAG_RELAY_EMPTYING")," are set. In other words, you may have to add 2^1 (2) + 2^9 (512) = 514 to your value of the parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"Z")," (in the case it was not yet enabled). Same procedure is to be implemented for filling."),(0,l.kt)("h2",{id:"param_enabled"},"PARAM_ENABLED"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PARAM_ENABLED")," allows to enable or disable some functionalities of the bioreactor. Currently, it can control heating, food control and agitation."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Bit"),(0,l.kt)("th",{parentName:"tr",align:null},"PARAM_STATUS"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_STEPPER_CONTROL"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable agitation control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_FOOD_CONTROL"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable food control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_PID_CONTROL"),(0,l.kt)("td",{parentName:"tr",align:null},"enable/disable heating")))),(0,l.kt)("p",null,"If you want to control everything the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"PARAM_ENABLED")," should be 7."),(0,l.kt)("h2",{id:"param_error"},"PARAM_ERROR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Bit"),(0,l.kt)("th",{parentName:"tr",align:null},"PARAM_ERROR"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_PCB_PROBE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"pcb probe failed (one wire not answering)1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_LIQ_PROBE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"liquid probe failed (one wire not answering)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_PCB_RANGE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"temperature of pcb is outside range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_LIQ_RANGE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"temperature of liquid is outside range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_TEMP_TARGET_RANGE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"target temperature is outside range")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"FLAG_WEIGHT_RANGE_ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"weight is outside range")))))}N.isMDXComponent=!0}}]);