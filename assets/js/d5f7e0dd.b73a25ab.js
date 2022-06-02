"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[3716],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3909:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},u="Connecting the plate",p={unversionedId:"bioreactor/making/pid/index",id:"bioreactor/making/pid/index",isDocsHomePage:!1,title:"Connecting the plate",description:"The heating plate is a standard MK3 plate used in 3D printers. It is a square of 214mm of side.",source:"@site/docs/20_bioreactor/20_making/pid/index.md",sourceDirName:"20_bioreactor/20_making/pid",slug:"/bioreactor/making/pid/index",permalink:"/docs/bioreactor/making/pid/index",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/20_bioreactor/20_making/pid/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Internal probe",permalink:"/docs/bioreactor/making/onewire/index"},next:{title:"Pin mapping",permalink:"/docs/bioreactor/making/pinMapping"}},s=[],c={toc:s};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connecting-the-plate"},"Connecting the plate"),(0,o.kt)("p",null,"The heating plate is a standard MK3 plate used in 3D printers. It is a square of 214mm of side."),(0,o.kt)("p",null,"It is composed on 2 resistors of 2.4\u2126 and there are 2 ways to connect them:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"in serie : you have a resistor of 4.8\u2126 and this will be used to power in 24v"),(0,o.kt)("li",{parentName:"ul"},"in parallel : you have a resistor of 1.2\u2126 and this will be used when powerred in 12v")),(0,o.kt)("p",null,"In our case we will power the plate in 12v and we will connect them in parallel. See the picture for more information."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"connection.jpg",src:n(4920).Z})),(0,o.kt)("p",null,"It is also important to put 2 leds (just to be sure one of them turn on even if you power the plate in the opposite way)\nand a resistor of 1k\u2126 (10k\u2126 would give a much less bright light)."),(0,o.kt)("p",null,"This will allow to see when the plate is turned on. Nice to debug !"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"leds.jpg",src:n(5719).Z})),(0,o.kt)("p",null,"With a resistance of 1.2\u2126 in 12v we will need 10A. This is the limit of the powersuppy and it would be nice if\nwe don't use permanently full power."),(0,o.kt)("p",null,"Note that the Board is operating at 3V3 and the PID is powered in 12V. Thus the PowerFET used to deliver the required\ncurrent must be picked up carefully to have a low threshold voltage Vgs and a low Rds channel resistance at this\noperating 3v3 voltage. Good matches are provided ",(0,o.kt)("a",{parentName:"p",href:"http://www.mouser.ch/Semiconductors/Discrete-Semiconductors/Transistors/MOSFET/_/N-ax1sf?P=1z0yra8Z1z0y182Z1z0z7ptZ1yzxnagZ1yw76g4Z1yw76ckZ1yw76gb&Rl=ax1sfZgjdhsdZ1yjepp1Z1yjenlnSGTax1sfZgjdhp3Z1yw78huZ1y9kq41SGT&Keyword=MOSFET&OrgTerm=mosfet&FS=True&Ns=Pricing%7C0"},"here on Mouser"),"."),(0,o.kt)("p",null,"We have chosen the IPB80N03S4L-03 for its steady Rds (3.4 mOhm max.) at low Vgs (Vgs(th) 1.6 V typ.) even for high currents (up to 80A)."),(0,o.kt)("h1",{id:"limit-values"},"Limit values"),(0,o.kt)("p",null,"In order to be able to heat the following conditions have to be met:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PCB temperature probe (one-wire) must be working and the temperature must be between 10 and 70\xb0C"),(0,o.kt)("li",{parentName:"ul"},"Liquid temperature probe (one-wire) must be connected and the temperature must be between 10 and 60\xb0C")),(0,o.kt)("p",null,"The maximal power is 80% of full power that corresponds to around 8A."),(0,o.kt)("p",null,"The following parameters are define in PID.ino"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SAFETY_MAX_PCB_TEMP 7000"),(0,o.kt)("li",{parentName:"ul"},"SAFETY_MIN_PCB_TEMP 1000"),(0,o.kt)("li",{parentName:"ul"},"SAFETY_MAX_LIQ_TEMP 6000"),(0,o.kt)("li",{parentName:"ul"},"SAFETY_MIN_LIQ_TEMP 1000"),(0,o.kt)("li",{parentName:"ul"},"PID_OUTPUT_LIMIT 200")),(0,o.kt)("h1",{id:"enabling-heating"},"Enabling heating"),(0,o.kt)("p",null,"In order to turn on the heating you should check the following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A - The liquid temperature. It should be between 1000 and 6000 (10\xb0C to 60\xb0C)"),(0,o.kt)("li",{parentName:"ul"},"B - The temperature of the PCB (Printed Circuit Board). It should be between 1000 and 7000"),(0,o.kt)("li",{parentName:"ul"},"AA - The target temperature. It should be between 1000 and 6000 (10 to 60\xb0C)"),(0,o.kt)("li",{parentName:"ul"},"FLAG_PID_CONTROL - The PARAM_STATUS bit FLAG_PID_CONTROL should be 1")),(0,o.kt)("p",null,"The heating will also depend of the status of the weight."),(0,o.kt)("h1",{id:"disabling-heating"},"Disabling heating"),(0,o.kt)("p",null,"Here are the important parameters:"),(0,o.kt)("p",null,"| PARAM_TEMP_LIQ | 0 | A | temperature of the solution |\n| PARAM_TEMP_PCB | 1 | B | temperature of the heating plate |\n| PARAM_TEMP_TARGET | 26 | AA | target temperature of the liquid |"),(0,o.kt)("p",null,"In order to disable heating just put at target temperature for the board of 0.\n",(0,o.kt)("inlineCode",{parentName:"p"},"AA0")))}d.isMDXComponent=!0},4920:function(e,t,n){t.Z=n.p+"assets/images/connection-33567ef0c6de0405f3968a1ceb261e53.jpg"},5719:function(e,t,n){t.Z=n.p+"assets/images/leds-0f1cf89d376e0253361674e078fe89bd.jpg"}}]);