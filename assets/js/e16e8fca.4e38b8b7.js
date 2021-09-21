"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[9277],{3905:function(t,n,a){a.d(n,{Zo:function(){return d},kt:function(){return g}});var e=a(7294);function r(t,n,a){return n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function l(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function i(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function p(t,n){if(null==t)return{};var a,e,r=function(t,n){if(null==t)return{};var a,e,r={},l=Object.keys(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||(r[a]=t[a]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(e=0;e<l.length;e++)a=l[e],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=e.createContext({}),u=function(t){var n=e.useContext(m),a=n;return t&&(a="function"==typeof t?t(n):i(i({},n),t)),a},d=function(t){var n=u(t.components);return e.createElement(m.Provider,{value:n},t.children)},k={inlineCode:"code",wrapper:function(t){var n=t.children;return e.createElement(e.Fragment,{},n)}},N=e.forwardRef((function(t,n){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),N=u(a),g=r,o=N["".concat(m,".").concat(g)]||N[g]||k[g]||l;return a?e.createElement(o,i(i({ref:n},d),{},{components:a})):e.createElement(o,i({ref:n},d))}));function g(t,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return e.createElement.apply(null,i)}return e.createElement.apply(null,a)}N.displayName="MDXCreateElement"},5136:function(t,n,a){a.r(n),a.d(n,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return u},toc:function(){return d},default:function(){return N}});var e=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={},m="Pin mapping",u={unversionedId:"bioreactor/making/pinMapping",id:"bioreactor/making/pinMapping",isDocsHomePage:!1,title:"Pin mapping",description:"Port | Pin | Arduino Mask     |                         | Bertha V4.4",source:"@site/docs/bioreactor/making/pinMapping.md",sourceDirName:"bioreactor/making",slug:"/bioreactor/making/pinMapping",permalink:"/docs/bioreactor/making/pinMapping",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/bioreactor/making/pinMapping.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connecting the plate",permalink:"/docs/bioreactor/making/pid/index"},next:{title:"README",permalink:"/docs/bioreactor/making/stepper/README"}},d=[],k={toc:d};function N(t){var n=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,e.Z)({},k,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pin-mapping"},"Pin mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Port"),(0,l.kt)("th",{parentName:"tr",align:null},"Pin"),(0,l.kt)("th",{parentName:"tr",align:null},"Arduino Mask"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Bertha V4.4"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"D0 / RX"),(0,l.kt)("td",{parentName:"tr",align:null},"RX D1/AIN1/INT2"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"D1 / TX"),(0,l.kt)("td",{parentName:"tr",align:null},"TXD1/INT3"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory CS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"D2 / SDA"),(0,l.kt)("td",{parentName:"tr",align:null},"SDA/INT1"),(0,l.kt)("td",{parentName:"tr",align:null},"I2C SDA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"D3 / SCL"),(0,l.kt)("td",{parentName:"tr",align:null},"OC0B/SCL/INT0"),(0,l.kt)("td",{parentName:"tr",align:null},"I2C SCL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"D4 / A6"),(0,l.kt)("td",{parentName:"tr",align:null},"ICP1/ADC8"),(0,l.kt)("td",{parentName:"tr",align:null},"IO3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"D5 (PWM)"),(0,l.kt)("td",{parentName:"tr",align:null},"OC3A/#0C4A"),(0,l.kt)("td",{parentName:"tr",align:null},"IO2 / PWM food OUT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"D6 (PWM)"),(0,l.kt)("td",{parentName:"tr",align:null},"T0/OC4D/ADC10"),(0,l.kt)("td",{parentName:"tr",align:null},"PID on PWM")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"D7"),(0,l.kt)("td",{parentName:"tr",align:null},"PE6 (INT.6/AIN0)"),(0,l.kt)("td",{parentName:"tr",align:null},"Ext. OneWire 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"D8 / A8"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC11/PCINT4"),(0,l.kt)("td",{parentName:"tr",align:null},"Stepper direction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"D9 / A9"),(0,l.kt)("td",{parentName:"tr",align:null},"PCINT5/OC1A/#OC4B/ADC12"),(0,l.kt)("td",{parentName:"tr",align:null},"Stepper step")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"D10 / A10"),(0,l.kt)("td",{parentName:"tr",align:null},"PCINT6/OC1B/OC4B/ADC13"),(0,l.kt)("td",{parentName:"tr",align:null},"IO1 / PWM food IN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"D11 (PWM)"),(0,l.kt)("td",{parentName:"tr",align:null},"PCINT7/OC0A/OC1C/#RTS"),(0,l.kt)("td",{parentName:"tr",align:null},"FAN control")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"D12 / A11"),(0,l.kt)("td",{parentName:"tr",align:null},"T1/#OC4D/ADC9"),(0,l.kt)("td",{parentName:"tr",align:null},"IO4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"C"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"D13 (PWM)"),(0,l.kt)("td",{parentName:"tr",align:null},"ICP3/CLK0/)0C4A"),(0,l.kt)("td",{parentName:"tr",align:null},"Blink Led")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"MISO / D14"),(0,l.kt)("td",{parentName:"tr",align:null},"PDO/PCINT3/MISO"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory MISO")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"SCK / D15"),(0,l.kt)("td",{parentName:"tr",align:null},"PCINT1/SCLK"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory SCK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"MOSI / D16"),(0,l.kt)("td",{parentName:"tr",align:null},"PDI/PCINT2/MOSI"),(0,l.kt)("td",{parentName:"tr",align:null},"Memory MOSI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"B"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"RXLED / SS / D17"),(0,l.kt)("td",{parentName:"tr",align:null},"SS/PCINT0"),(0,l.kt)("td",{parentName:"tr",align:null},"RXLED")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"A0 / D18"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC7/TDI"),(0,l.kt)("td",{parentName:"tr",align:null},"CLK HX711")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"A1 / D19"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC6/TDO"),(0,l.kt)("td",{parentName:"tr",align:null},"Data HX711")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"A2 / D20"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC5/TMS"),(0,l.kt)("td",{parentName:"tr",align:null},"OneWire PCB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"A3 / D21"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC4/TCK"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"A4 / D22"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC1"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"F"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"A5 / D23"),(0,l.kt)("td",{parentName:"tr",align:null},"ADC0"),(0,l.kt)("td",{parentName:"tr",align:null},"Ext. OneWire 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"D"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"TXLED / D30"),(0,l.kt)("td",{parentName:"tr",align:null},"XCK1/#CTS"),(0,l.kt)("td",{parentName:"tr",align:null},"TXLED")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"E"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"HWB"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"HWB")))))}N.isMDXComponent=!0}}]);