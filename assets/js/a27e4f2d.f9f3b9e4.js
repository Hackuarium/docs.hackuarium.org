"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[8410],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4350:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},p="Set environment",s={unversionedId:"programming/esp32/README",id:"programming/esp32/README",isDocsHomePage:!1,title:"Set environment",description:"Install platform IO cli",source:"@site/docs/60_programming/esp32/README.md",sourceDirName:"60_programming/esp32",slug:"/programming/esp32/README",permalink:"/docs/programming/esp32/README",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/60_programming/esp32/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Communication and settings",permalink:"/docs/programming/communication/README"},next:{title:"Led pins",permalink:"/docs/programming/esp32/blink"}},u=[{value:"Install platform IO cli",id:"install-platform-io-cli",children:[]},{value:"Mac OS - OsX",id:"mac-os---osx",children:[]},{value:"FS",id:"fs",children:[]},{value:"Alternative web server",id:"alternative-web-server",children:[]},{value:"Searching libraries",id:"searching-libraries",children:[]},{value:"OTA",id:"ota",children:[]}],c={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-environment"},"Set environment"),(0,o.kt)("h2",{id:"install-platform-io-cli"},"Install platform IO cli"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"export PATH=$PATH:~/.platformio/penv/bin")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'printf("Restarting now.\\n");\nfflush(stdout);\nesp_restart();\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IDF_PATH=~/.platformio/packages/framework-espidf/")),(0,o.kt)("p",null,"You may have to add pyserial:\n",(0,o.kt)("inlineCode",{parentName:"p"},"sudo pip3 install pyserial")),(0,o.kt)("p",null,"Read device info:\n",(0,o.kt)("inlineCode",{parentName:"p"},"python3 $IDF_PATH/components/esptool_py/esptool/esptool.py --port /dev/cu.usbserial-A5XK3RJT flash_id")),(0,o.kt)("p",null,"Read partition table"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"python3 $IDF_PATH/components/esptool_py/esptool/esptool.py --port /dev/cu.usbserial-A5XK3RJT read_flash 0x8000 0xc00 ptable.img")),(0,o.kt)("p",null,"We can now check the content of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ptable.img")," file\n",(0,o.kt)("inlineCode",{parentName:"p"},"python3 $IDF_PATH/components/partition_table/gen_esp32part.py ptable.img")),(0,o.kt)("p",null,"Here is an example of the result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Espressif ESP32 Partition Table\n# Name, Type, SubType, Offset, Size, Flags\nnvs,data,nvs,0x9000,20K,\notadata,data,ota,0xe000,8K,\napp0,app,ota_0,0x10000,1280K,\napp1,app,ota_1,0x150000,1280K,\nspiffs,data,spiffs,0x290000,1472K,\n")),(0,o.kt)("h2",{id:"mac-os---osx"},"Mac OS - OsX"),(0,o.kt)("p",null,"You may encounter a problem uploading the file to ESP32 that uses the new chip USB/UART CH9102x."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"A fatal error occurred: Failed to write to target RAM (result was 01070000)")),(0,o.kt)("p",null,"You may find more information about solving this problem at:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.squix.org/2021/08/ch9102-driver-issues-failed-to-write-to-target-ram.html"},"https://blog.squix.org/2021/08/ch9102-driver-issues-failed-to-write-to-target-ram.html")),(0,o.kt)("p",null,"It is related to those issues:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/espressif/esptool/issues/280"},"https://github.com/espressif/esptool/issues/280")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Xinyuan-LilyGO/LilyGo-T-Call-SIM800/issues/139"},"https://github.com/Xinyuan-LilyGO/LilyGo-T-Call-SIM800/issues/139"))),(0,o.kt)("p",null,"This driver may help on Big Sur b tu fails for the last Monterey version ",(0,o.kt)("a",{target:"_blank",href:r(4770).Z},"CH9102_Mac_Driver.zip")),(0,o.kt)("p",null,"Code: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/WCHSoftGroup/ch34xser_macos"},"https://github.com/WCHSoftGroup/ch34xser_macos")),(0,o.kt)("p",null,"On M1 we may have to explicitely accept kext (kernel extensions): ",(0,o.kt)("a",{parentName:"p",href:"https://support.apple.com/guide/security/kernel-extensions-sec8e454101b/1/web/1#sec8697bc589"},"https://support.apple.com/guide/security/kernel-extensions-sec8e454101b/1/web/1#sec8697bc589")),(0,o.kt)("h2",{id:"fs"},"FS"),(0,o.kt)("p",null,"Create a folder at the first level called ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,o.kt)("p",null,"To upload the data"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pio run --target uploadfs")),(0,o.kt)("h2",{id:"alternative-web-server"},"Alternative web server"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/me-no-dev/ESPAsyncWebServer#using-platformio"},"https://github.com/me-no-dev/ESPAsyncWebServer#using-platformio")),(0,o.kt)("h2",{id:"searching-libraries"},"Searching libraries"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://platformio.org/lib/search?query=si7021"},"https://platformio.org/lib/search?query=si7021")),(0,o.kt)("h2",{id:"ota"},"OTA"),(0,o.kt)("p",null,"pio run -t upload --upload-port square.local\npio run -t uploadfs --upload-port square.local"))}m.isMDXComponent=!0},4770:function(e,t,r){t.Z=r.p+"assets/files/CH9102_Mac_Driver-70221bdd0d0e25a4925b9de133d36a1d.zip"}}]);