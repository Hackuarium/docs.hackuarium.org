"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[4401],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=r,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5559:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return h}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={slug:"/spectro"},c="Goal of the project",l={unversionedId:"simple-spectro/intro/README",id:"simple-spectro/intro/README",isDocsHomePage:!1,title:"Goal of the project",description:"This project was done at the Hackuarium association, a DIY biology hacking-space and open laboratory located in Ecublens (Switzerland). Feel free to contact us if you would like additional information or would like to buy a fully built and tested spectrophotometer.",source:"@site/docs/10_simple-spectro/10_intro/README.md",sourceDirName:"10_simple-spectro/10_intro",slug:"/spectro",permalink:"/docs/spectro",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/10_simple-spectro/10_intro/README.md",tags:[],version:"current",frontMatter:{slug:"/spectro"},sidebar:"tutorialSidebar",previous:{title:"Hackuarium documentation",permalink:"/docs/intro"},next:{title:"Introduction",permalink:"/docs/simple-spectro/assembling/intro/README"}},u=[{value:"What about wavelengths ?",id:"what-about-wavelengths-",children:[]},{value:"Patent blue V",id:"patent-blue-v",children:[]},{value:"Escherichia coli",id:"escherichia-coli",children:[]}],p={toc:u};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"goal-of-the-project"},"Goal of the project"),(0,a.kt)("p",null,"This project was done at the ",(0,a.kt)("a",{parentName:"p",href:"http://www.hackuarium.ch/en/"},"Hackuarium")," association, a DIY biology hacking-space and open laboratory located in Ecublens (Switzerland). Feel free to ",(0,a.kt)("a",{parentName:"p",href:"https://form.jotformeu.com/71600609780354"},"contact us")," if you would like additional information or would like to buy a fully built and tested spectrophotometer."),(0,a.kt)("p",null,"Recently, the open-source and open-hardware community has been involved in the creation of open scientific tools. In this context, a few spectrophotometer projects emerged. However, none of them was sufficiently evolved to be casually used in a laboratory. It is for this reason that we started this project.\nOur goal was to create a simple spectrophotometer that measures the\nabsorbance of a sample for 3 different light colors (red, green, blue), that is\nself-contained (battery powered) and displays the result on a LCD screen. In addition, the tool had to be reliable, precise and cheap."),(0,a.kt)("p",null,"The initial idea was that you could teach spectrophotometry without\nhaving to buy an expensive instrument, since you can find experiments\nthat do not require a specific light wavelength. This includes\noptical density for bacteria culture, determination of a pigment's concentration in\na solution, determination of the kinetic of a reaction and many others."),(0,a.kt)("p",null,"The device is rather cheap, for you can buy all the components on AliExpress\n(but one) and either 3D print or laser cut the case (MDF or acrylic glass). When constructing 10, the price\nper spectrophotometer is around $30. However if you want to have a final\nproduct with an aluminium case and PCBs already assembled, the cost would rather be $90 each if you order 20 of them."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"spectro.jpg",src:n(1305).Z})),(0,a.kt)("h1",{id:"can-we-do-science-with-this-"},"Can we do science with this ?"),(0,a.kt)("p",null,"Before trying to explain how it is done in detail we should first answer this first question: can we do science with this tool? When thinking about the design of the spectro, we found a light sensor that converts the light energy to frequency that is linear on a range of nearly 10^6. This means that the luminosity range that we can measure precisely is really large. The experiments we did show that we can obtain reliable and reproducible results."),(0,a.kt)("h2",{id:"what-about-wavelengths-"},"What about wavelengths ?"),(0,a.kt)("p",null,"We only use a RGB led so this means that we observe only 3 wavelengths and in fact 3 ranges of wavelengths because the bands are quite broad."),(0,a.kt)("p",null,"To have an idea here is a representative spectrum of RGB LEDs."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"wavelength.png",src:n(5050).Z})),(0,a.kt)("p",null,"Concerning OD",(0,a.kt)("sub",null,"600")," often used in biology to monitor bacteria growth, the red led is very close (max at around 630 nm). Because we observe light scattering and not absorbance the exact wavelength is not that important. We should just take care to avoid absorbance by the growing media."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.researchgate.net/post/why_is_600nm_wavelength_recommended_for_optical_density_check_of_bacteria_culture_and_is_there_any_literature_to_back_it"},"Why is 600nm wavelength recommended for optical density check of bacteria culture, Hassan, Hosni. (2016)"),"."),(0,a.kt)("h2",{id:"patent-blue-v"},"Patent blue V"),(0,a.kt)("p",null,"When checking the Beer-Lambert law with the food pigment Patent blue V (E131) we obtain the following results:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"E131.png",src:n(5894).Z})),(0,a.kt)("p",null,"The result is rather good knowing that the solutions were simply prepared by adding various volumes (0 to 2 mL) of a concentrated pigmented solution with a 1mL seringe to 100mL of water which is not the most accurate method."),(0,a.kt)("h2",{id:"escherichia-coli"},"Escherichia coli"),(0,a.kt)("p",null,"Another feature of the simple-spectrophotometer is that it works on a rechargeable battery (autonomy of 48 hours). Consequently, you can measure a kinetic by placing the device directly inside an incubator, which is not feasible with a regular commercial spectrophotometer."),(0,a.kt)("p",null,"Optical density (OD) at 600nm is often used in biology to determine the biomass increase versus time. In this experiment we have placed Escherichia coli with cell growing media directly in the spectrophotometer cuvette and placed the spectrophotometer itself on a shaker in the incubator. We can then program it to measure the absorbance every X seconds. In our case we measured the absorbance every 30 minutes (up to 40 measures). The following curve was obtained."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"bacteria-growing.png",src:n(2113).Z})),(0,a.kt)("h1",{id:"cloning-the-project"},"Cloning the project"),(0,a.kt)("p",null,"All the code since the first day is open-source and you may get the code on ",(0,a.kt)("inlineCode",{parentName:"p"},"https://github.com/hackuarium/simple-spectro"),"."),(0,a.kt)("p",null,"This project uses SUBMODULES."),(0,a.kt)("p",null,"In order to clone it use:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git clone --recurse-submodules https://github.com/hackuarium/simple-spectro")),(0,a.kt)("p",null,"To update the submodules:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"git submodule update --recursive --remote")))}h.isMDXComponent=!0},5894:function(e,t,n){t.Z=n.p+"assets/images/E131-fd2752403b59047a2e381746bce441be.png"},2113:function(e,t,n){t.Z=n.p+"assets/images/bacteria-growing-f8ecef3e2a4afe2003c195b2087c1e16.png"},1305:function(e,t,n){t.Z=n.p+"assets/images/spectro-2290f2829c47c3614f2630170b3bb7d6.jpg"},5050:function(e,t,n){t.Z=n.p+"assets/images/wavelength-92a79d7ffb7aff31cc0bf1e1c013272a.png"}}]);