"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[489],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},s),{},{components:n})):o.createElement(h,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2686:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},p="Installation",d={unversionedId:"phmeter/platformio/platformio",id:"phmeter/platformio/platformio",isDocsHomePage:!1,title:"Installation",description:"Cloning the project",source:"@site/docs/40_phmeter/10_platformio/10_platformio.md",sourceDirName:"40_phmeter/10_platformio",slug:"/phmeter/platformio/platformio",permalink:"/docs/phmeter/platformio/platformio",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/40_phmeter/10_platformio/10_platformio.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Goal of the project",permalink:"/docs/phmeter"},next:{title:"Parameters",permalink:"/docs/phmeter/platformio/parameters"}},s=[{value:"Cloning the project",id:"cloning-the-project",children:[{value:"Requirements",id:"requirements",children:[]}]},{value:"Installing the PlatformIO plugin",id:"installing-the-platformio-plugin",children:[]},{value:"Hardware support for Leonardo 8MHz = LilyPad Arduino USB",id:"hardware-support-for-leonardo-8mhz--lilypad-arduino-usb",children:[]},{value:"Using USBtiny",id:"using-usbtiny",children:[]},{value:"That&#39;s it",id:"thats-it",children:[{value:"Burning bootloader",id:"burning-bootloader",children:[]},{value:"Upload the code",id:"upload-the-code",children:[]}]}],u={toc:s};function c(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"cloning-the-project"},"Cloning the project"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Git (^2.25.1)"),(0,a.kt)("li",{parentName:"ol"},"Visual Studio Code (^1.61.2)")),(0,a.kt)("p",null,"You know with age we take some habits and it would be easier if you follow the same ones..."),(0,a.kt)("p",null,"All our github projects are always in a folder called ",(0,a.kt)("inlineCode",{parentName:"p"},"git"),"\nwhich is at the first level of the ",(0,a.kt)("inlineCode",{parentName:"p"},"home")," directory. It is followed by the\nname of the github user/organization and finally the project name."),(0,a.kt)("p",null,"So, go to the project from bash:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/git/hackuarium/phmeter\n")),(0,a.kt)("p",null,"The possibility to clone the project will require that you validate your public key\nin github!"),(0,a.kt)("h2",{id:"installing-the-platformio-plugin"},"Installing the PlatformIO plugin"),(0,a.kt)("p",null,"In VSCode you need to open ",(0,a.kt)("inlineCode",{parentName:"p"},"Extensions")," tab or press ",(0,a.kt)("inlineCode",{parentName:"p"},"(CTRL+Shift+X)"),", and search \xb4PlatformIO IDE\xb4 to install it:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PlatformIO IDE",src:n(5767).Z})),(0,a.kt)("h2",{id:"hardware-support-for-leonardo-8mhz--lilypad-arduino-usb"},"Hardware support for Leonardo 8MHz = LilyPad Arduino USB"),(0,a.kt)("p",null,"The pHMeter is operating at 8MHz/3V3 instead of the standard 16MHz/5V."),(0,a.kt)("p",null,"If you do any mistake and try flashing the pHMeter board as if it was a normal Leonardo, you will be able to flash the program but the USB port will not be recognized anymore afterwards. You will have to reflash the bootloader!!!"),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"In case that you need to burn the firmware for the pHMeter from factory, you must to use the Lilypad Arduino USB bootloader like first step before upload the code. (Go to ",(0,a.kt)("a",{parentName:"p",href:"#burning-bootloader"},"Burning bootloader")," section for solve it)."))),(0,a.kt)("h2",{id:"using-usbtiny"},"Using USBtiny"),(0,a.kt)("p",null,"By default some Linux versions will only give you a USB readonly access and will prevent you from burning the bootloader."),(0,a.kt)("p",null,"In order for the USBTiny to have r/w access you should add a USB rule:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# UDEV rule for Arduino ISP R3 programmer board,\n# to prevent having to run Arduino IDE as root to get it to program.\n# Copy this file to /etc/udev/rules.d so\n\nSUBSYSTEMS=="usb", ATTRS{idVendor}=="1781", ATTRS{idProduct}=="0c9f", GROUP="plugdev", MODE="0666"\n')),(0,a.kt)("h2",{id:"thats-it"},"That's it"),(0,a.kt)("p",null,"You should now be able to compile the project from PlatformIO IDE."),(0,a.kt)("h3",{id:"burning-bootloader"},"Burning bootloader"),(0,a.kt)("p",null,"You can now proceed with burning the bootloader using the ",(0,a.kt)("inlineCode",{parentName:"p"},"program_via_USBtinyISP")," environment created in ",(0,a.kt)("inlineCode",{parentName:"p"},"platformio.ini")," file. Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"platformIO Terminal")," and type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$: pio run -e program_via_USBtinyISP --target bootloader\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"PlatformIO: New Terminal",src:n(8960).Z})),(0,a.kt)("h3",{id:"upload-the-code"},"Upload the code"),(0,a.kt)("p",null,"Once you have the bootloader, you can upload your code with ",(0,a.kt)("inlineCode",{parentName:"p"},"PlatformIO: Upload")," button or press ",(0,a.kt)("kbd",null,"Ctrl")," + ",(0,a.kt)("kbd",null,"Alt")," + ",(0,a.kt)("kbd",null,"U"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Upload option",src:n(9977).Z})),(0,a.kt)("p",null,"You can check upload success in the same terminal:"),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\xa1UPDATE!"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Upload success",src:n(5068).Z})),(0,a.kt)("h1",{id:"the-parameters"},"The parameters"),(0,a.kt)("p",null,"In order to control the bioreactor you should have a look at the description of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/phmeter/platformio/parameters"},"Parameters")," (Go Next)."))}c.isMDXComponent=!0},5767:function(e,t,n){t.Z=n.p+"assets/images/platformio-5aeb75216f723a042fde6f4b6cd43094.png"},8960:function(e,t,n){t.Z=n.p+"assets/images/terminal-825da6e832df51eff130b4bdf9017976.png"},5068:function(e,t,n){t.Z=n.p+"assets/images/upload-success-2442a1697a2b84db3b25f375c3d4fc13.png"},9977:function(e,t,n){t.Z=n.p+"assets/images/upload-b377666afcae228db0186a26c3957976.png"}}]);