"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[8714],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85633:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={},s="BeeMos bee counter module (BCM) documentation",c={unversionedId:"beemos/bee-counter/README",id:"beemos/bee-counter/README",isDocsHomePage:!1,title:"BeeMos bee counter module (BCM) documentation",description:"BCM PCB soldering and debug instructions",source:"@site/docs/15_beemos/bee-counter/README.md",sourceDirName:"15_beemos/bee-counter",slug:"/beemos/bee-counter/README",permalink:"/docs/beemos/bee-counter/README",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/15_beemos/bee-counter/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Beemos",permalink:"/docs/beemos"},next:{title:"README",permalink:"/docs/beemos/bee-counter/rj12-hacking/README"}},u=[{value:"BCM PCB soldering and debug instructions",id:"bcm-pcb-soldering-and-debug-instructions",children:[{value:"1. Soldering (part 1)",id:"1-soldering-part-1",children:[]},{value:"2. Power",id:"2-power",children:[]},{value:"3. Initial test",id:"3-initial-test",children:[]},{value:"4. Soldering (part 2)",id:"4-soldering-part-2",children:[]},{value:"5. IR LED emission test",id:"5-ir-led-emission-test",children:[]},{value:"6. Final soldering and IR checks",id:"6-final-soldering-and-ir-checks",children:[]},{value:"7. Final test",id:"7-final-test",children:[]},{value:"10. Install the PCB in its laser cut box",id:"10-install-the-pcb-in-its-laser-cut-box",children:[]},{value:"11. Test in the field",id:"11-test-in-the-field",children:[]}]}],d={toc:u};function p(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"beemos-bee-counter-module-bcm-documentation"},"BeeMos bee counter module (BCM) documentation"),(0,i.kt)("h2",{id:"bcm-pcb-soldering-and-debug-instructions"},"BCM PCB soldering and debug instructions"),(0,i.kt)("p",null,"(",(0,i.kt)("em",{parentName:"p"},"UNDER CONSTRUCTION"),")"),(0,i.kt)("p",null,"![PCBsoldering]","(images/PCBsoldering.jpg"),(0,i.kt)("h3",{id:"1-soldering-part-1"},"1. Soldering (part 1)"),(0,i.kt)("p",null,"Solder the basic elements to make the microcontroller work as shown in the picture above in red (starting with the hardest/riskiest to solder):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Microcontroller"),(0,i.kt)("li",{parentName:"ul"},"Mini USB port"),(0,i.kt)("li",{parentName:"ul"},"Voltage regulator"),(0,i.kt)("li",{parentName:"ul"},"2x 22 Ohm resistors"),(0,i.kt)("li",{parentName:"ul"},"3x 10 uF capacitors"),(0,i.kt)("li",{parentName:"ul"},"3x Shottky diodes (direction matters)"),(0,i.kt)("li",{parentName:"ul"},"4x 10k Ohm resistors"),(0,i.kt)("li",{parentName:"ul"},"3x 100 nF capacitors"),(0,i.kt)("li",{parentName:"ul"},"1M F capacitor"),(0,i.kt)("li",{parentName:"ul"},"2x 22 pF capacitors"),(0,i.kt)("li",{parentName:"ul"},"8 Mhz cristal"),(0,i.kt)("li",{parentName:"ul"},"Blank/white LED (direction matters)"),(0,i.kt)("li",{parentName:"ul"},"Red LED (direction matters)")),(0,i.kt)("h3",{id:"2-power"},"2. Power"),(0,i.kt)("p",null,"Power the board by connecting the USB cable (one LED should turn on), check immediately that the USB port or the microcontroller are not overheating by touching them with your fingers (a few seconds are usually enough to know)"),(0,i.kt)("h3",{id:"3-initial-test"},"3. Initial test"),(0,i.kt)("h4",{id:"bootloader"},"Bootloader"),(0,i.kt)("p",null,'Choose "Lilipad USB" as board in the Arduino IDE, then burn bootloader with USBtiny in-circuit programmer and JTAG cable in contact with the ISP pins of the board until the bootloader has finished to burn'),(0,i.kt)("h4",{id:"uploading-test"},"Uploading test"),(0,i.kt)("p",null,'Connect the board to computer with USB cable, upload a simple "blink" sketch, confirm that the sketch was indeed uploaded (i.e. confirm that the LED is indeed blinking)'),(0,i.kt)("h3",{id:"4-soldering-part-2"},"4. Soldering (part 2)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:"),' in PCB version 1.0, the two resistors are labelled "220" and "1k", DO NOT USE THESE VALUES.Use 100 Ohm instead of 1 kOhm and 1 kOhm instead of 220 Ohm and do not solder the 10 nF capacitor.'),(0,i.kt)("p",null,"Disconnect the USB cable and solder the demultiplexer, the multiplexer and 1 IR emitter/receptor (QRE1113) as shown in blue in the above picture. Try not to spend to much time while soldering to avoid overheating of the component. Solder the two associated resistors (see note below before doing so)."),(0,i.kt)("h3",{id:"5-ir-led-emission-test"},"5. IR LED emission test"),(0,i.kt)("h4",{id:"upload-sketch"},"Upload sketch"),(0,i.kt)("p",null,"Reconnect the USB cable, choose the Lilipad USB as board (",(0,i.kt)("inlineCode",{parentName:"p"},"Tools")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Board")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Lilipad USB"),"), select the port where it is connected (this should appear under ",(0,i.kt)("inlineCode",{parentName:"p"},"Tools")," > ",(0,i.kt)("inlineCode",{parentName:"p"},"Ports")," as ttyACM0 (Lilipad USB) ) and upload the Arduino sketch in ",(0,i.kt)("inlineCode",{parentName:"p"},"counter-i2c/arduino"),"."),(0,i.kt)("h4",{id:"led-check"},"LED check"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Option A: Check that the IR LED is emitting either using an oscilloscope between ",(0,i.kt)("del",{parentName:"p"},"pins X and Y"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Option B: Use the camera of your phone (you should see a purple beam, although this works more or less depending on your phone/camera, you can try to go in a dark place and change the angle between the camera and the board to better see the IR beam, see picture below)."))),(0,i.kt)("p",null,"In case you see no signal from the IR LED, make sure soldering is appropriate and if fiddling with soldering doesn't work, try replacing the QRE1113 sensor (some have failed during our test perhaps due to overheating during soldering or manufacture issues)"),(0,i.kt)("h3",{id:"6-final-soldering-and-ir-checks"},"6. Final soldering and IR checks"),(0,i.kt)("p",null,"Disconnect USB cable and solder the 15 other QRE1113s, their associated resistors and the RJ12 connector as indicated in yellow in the above image."),(0,i.kt)("p",null,"Repeat the IR LED emission test (from step 5) on all other QRE1113s until all work"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"IRbeams",src:n(81628).Z})),(0,i.kt)("h3",{id:"7-final-test"},"7. Final test"),(0,i.kt)("h4",{id:"opening-the-serial-monitor"},"Opening the serial monitor"),(0,i.kt)("p",null,'To test the board, connect the USB cable, open the serial monitor in Arduino IDE and make sure to choose the "Both NL & CR" option at the bottom right of the serial monitor (needed to have access to the menu).'),(0,i.kt)("h4",{id:"interacting-with-the-board"},"Interacting with the board"),(0,i.kt)("p",null,"You can use the serial monitor to send different instructions to the BCM. Below is a list of the instructions avaiable."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"h + ENTER: Help menu that will show you the different menus you can enter by typing the first letter + ENTER."),(0,i.kt)("li",{parentName:"ul"},"c + ENTER: Show the hexadecimal values of the IR values read from the sensors. When passing your finger or a pencil over a sensor, you should see its corresponding value change."),(0,i.kt)("li",{parentName:"ul"},"s + ENTER: Display the current values of settings A to Z.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"A: Log ID"),(0,i.kt)("li",{parentName:"ul"},"B: Number of seconds since the card was started (uptime)"),(0,i.kt)("li",{parentName:"ul"},"C: number of exiting bees through gate 1"),(0,i.kt)("li",{parentName:"ul"},"D: Number of entering bees through gate 1"),(0,i.kt)("li",{parentName:"ul"},"E: Number of exiting bee through gate 2"),(0,i.kt)("li",{parentName:"ul"},"F: Number of entering bees through gate 2"),(0,i.kt)("li",{parentName:"ul"},"etc...")))),(0,i.kt)("p",null,"You can move a pencil over a gate in both direction and retype 's'+ENTER to update the values on the serial monitor screen."),(0,i.kt)("h3",{id:"10-install-the-pcb-in-its-laser-cut-box"},"10. Install the PCB in its laser cut box"),(0,i.kt)("h3",{id:"11-test-in-the-field"},"11. Test in the field"))}p.isMDXComponent=!0},81628:function(e,t,n){t.Z=n.p+"assets/images/IRbeams-2995be48a8e45720f82222b2ed70997e.jpg"}}]);