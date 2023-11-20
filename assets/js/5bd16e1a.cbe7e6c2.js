"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[2453],{54109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(11527),i=t(11683);const r={},l="How to use it ?",o={id:"spectro/use/README",title:"How to use it ?",description:"The control of the spectrometer is done using a rotary push button. To scroll in the menu, turn",source:"@site/docs/01-spectro/05-use/README.md",sourceDirName:"01-spectro/05-use",slug:"/spectro/use/",permalink:"/docs/spectro/use/",draft:!1,unlisted:!1,editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/01-spectro/05-use/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The end",permalink:"/docs/spectro/assembling/end/"},next:{title:"Accessing the spectro through USB",permalink:"/docs/spectro/use/serial/"}},c={},d=[{value:"The menu",id:"the-menu",level:2},{value:"1. Acquire",id:"1-acquire",level:3},{value:"2. Acquisition sequence",id:"2-acquisition-sequence",level:3},{value:"3. Acquisition kinetic",id:"3-acquisition-kinetic",level:3},{value:"4. Results",id:"4-results",level:3},{value:"5. Settings",id:"5-settings",level:3},{value:"6. Status",id:"6-status",level:3},{value:"7. Utilities",id:"7-utilities",level:3},{value:"7.1 Sleep",id:"71-sleep",level:4},{value:"7.2 Test LED",id:"72-test-led",level:4},{value:"7.3 Reset",id:"73-reset",level:4},{value:"7.4 Boot",id:"74-boot",level:4},{value:"7.5 Main menu",id:"75-main-menu",level:4},{value:"In case of crash",id:"in-case-of-crash",level:2},{value:"Accessing from serial port",id:"accessing-from-serial-port",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"how-to-use-it-",children:"How to use it ?"}),"\n",(0,s.jsx)(n.p,{children:"The control of the spectrometer is done using a rotary push button. To scroll in the menu, turn\nthe button, to validate an entry, press the button."}),"\n",(0,s.jsx)(n.p,{children:"The simple-spectro is self-contained. The battery lasts around 3 months in sleep and around 2 days in acquisition mode.\nThe spectro switches to sleep mode after 100s (if there is no acquisition running). To wake it up simply turn the rotary push button."}),"\n",(0,s.jsx)(n.p,{children:"3 acquisition modes are available:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"One acquisition (Blank + Sample)"}),"\n",(0,s.jsx)(n.li,{children:"Sequence of experiments (Blank + many samples, press button for next experiment)"}),"\n",(0,s.jsx)(n.li,{children:"Kinetic (Blank + Sample x times)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For one acquisition, you may specify the time before the first experiment (Before delay) as well as the time between the 2 experiments (First delay). Those parameters are accessible from the ",(0,s.jsx)(n.code,{children:"Settings"})," menu. You may turn the rotary push button to select ",(0,s.jsx)(n.code,{children:"Settings"})," and then press the button to enter the menu."]}),"\n",(0,s.jsx)(n.p,{children:"To change a value, press the button and turn to set the new value. Once the right value is selected, press the button again to validate."}),"\n",(0,s.jsx)(n.h2,{id:"the-menu",children:"The menu"}),"\n",(0,s.jsx)(n.h3,{id:"1-acquire",children:"1. Acquire"}),"\n",(0,s.jsxs)(n.p,{children:["This option will start an acquisition (Blank + Sample). Before acquiring the blank the spectro will\nwait ",(0,s.jsx)(n.code,{children:"Before delay"})," seconds (see ",(0,s.jsx)(n.code,{children:"Settings"}),") and between the Blank and the Sample the spectro will wait\n",(0,s.jsx)(n.code,{children:"First delay"})," seconds (see ",(0,s.jsx)(n.code,{children:"Settings"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:["The acquisition will take all the selected colors as defined in ",(0,s.jsx)(n.code,{children:"Settings -> Active leds"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If you need to stop the acquisition press the rotary-push button twice."}),"\n",(0,s.jsx)(n.p,{children:"After the acquisition the display will show the absorbance for all the selected colors.\nIn order to see all the values, turn the rotary-push button."}),"\n",(0,s.jsx)(n.h3,{id:"2-acquisition-sequence",children:"2. Acquisition sequence"}),"\n",(0,s.jsx)(n.p,{children:"This mode allows to acquire the absorbance of a sequence of samples. For example, if you want to check the Beer-Lambert\nlaw, you would first put a blank, then all the known concentration samples and finally the unknown concentration\nsample."}),"\n",(0,s.jsxs)(n.p,{children:["Between each sample, press the button to go to the next experiment. The spectro will expect the number\nof experiments defined in ",(0,s.jsx)(n.code,{children:"Settings"})," ",(0,s.jsx)(n.code,{children:"Number exp"}),". In order to stop the acquisition before the end, you need to\nturn the rotary push button and press ",(0,s.jsx)(n.code,{children:"Stop acquis."}),". You will then directly see the results."]}),"\n",(0,s.jsxs)(n.p,{children:["To check the results you need to go in the ",(0,s.jsx)(n.code,{children:"Results"})," menu (see below)."]}),"\n",(0,s.jsx)(n.h3,{id:"3-acquisition-kinetic",children:"3. Acquisition kinetic"}),"\n",(0,s.jsxs)(n.p,{children:["The spectro is able to acquire automatically a sequence of experiments. They are many ",(0,s.jsx)(n.code,{children:"settings"})," that will\ndefine this behaviour:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Before delay"}),": Time in seconds to wait before acquiring the blank"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"First delay"})," : Time in seconds to wait before the first experiment"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-results",children:"4. Results"}),"\n",(0,s.jsx)(n.p,{children:"Shows the acquired results in 3 columns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Time (in seconds) since the acquisition of the blank"}),"\n",(0,s.jsx)(n.li,{children:"Absorbance"}),"\n",(0,s.jsx)(n.li,{children:"Light intensity as measured by the sensor"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The results are shown for the colors specified in ",(0,s.jsx)(n.code,{children:"Settings -> Result color"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"5-settings",children:"5. Settings"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Setting"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Before delay"}),(0,s.jsx)(n.td,{children:"Delay before blank."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"First delay"}),(0,s.jsx)(n.td,{children:"Delay before first experiment (for kinetics)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Inter experiment delay"}),(0,s.jsx)(n.td,{children:"Delay between experiments (for kinetics)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Number of experiments"}),(0,s.jsx)(n.td,{children:"Number of experiments that are going to be made during a kinetic."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result color"}),(0,s.jsx)(n.td,{children:"What data is shown in the results. You can choose to show the absorbance in R, G, B or UV (combination of these). The values shown are defined by a number between 0 and 63."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Rotary mode"}),(0,s.jsx)(n.td,{children:"Invert the rotation of the button."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Active leds"}),(0,s.jsx)(n.td,{children:"What LEDs are going to blink when doing the experiments."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Main menu"}),(0,s.jsx)(n.td,{children:"Go back to main menu."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"6-status",children:"6. Status"}),"\n",(0,s.jsx)(n.p,{children:"Show general information about the spectro:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Current temperature"}),"\n",(0,s.jsxs)(n.li,{children:["Battery level (between 3.7 and 4.2 volts) and a sign telling if it is charging ",(0,s.jsx)(n.code,{children:"+"}),", decharging ",(0,s.jsx)(n.code,{children:"-"})," or fully charged ",(0,s.jsx)(n.code,{children:"\u2192"})]}),"\n",(0,s.jsx)(n.li,{children:"Uptime"}),"\n",(0,s.jsx)(n.li,{children:"Version of the firmware"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"7-utilities",children:"7. Utilities"}),"\n",(0,s.jsx)(n.h4,{id:"71-sleep",children:"7.1 Sleep"}),"\n",(0,s.jsx)(n.p,{children:"Put the spectro in sleep mode (reducing the power consumption to around 100\xb5A)."}),"\n",(0,s.jsx)(n.h4,{id:"72-test-led",children:"7.2 Test LED"}),"\n",(0,s.jsx)(n.p,{children:"Allows to check that all the LEDs are working correctly. With a blank you should obtain\nvalues in the following ranges:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"R: between 100000 and 450000"}),"\n",(0,s.jsx)(n.li,{children:"G: between 100000 and 450000"}),"\n",(0,s.jsx)(n.li,{children:"B: between 100000 and 450000"}),"\n",(0,s.jsx)(n.li,{children:"UV: between 0 and 2000"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To stop the test mode press the button twice."}),"\n",(0,s.jsx)(n.h4,{id:"73-reset",children:"7.3 Reset"}),"\n",(0,s.jsx)(n.p,{children:"Reset all the parameters to the default values:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Before delay: 2s"}),"\n",(0,s.jsx)(n.li,{children:"First delay: 10s"}),"\n",(0,s.jsx)(n.li,{children:"Inter experiment delay: 20s"}),"\n",(0,s.jsx)(n.li,{children:"Number experiments: 60"}),"\n",(0,s.jsx)(n.li,{children:"Result color: red"}),"\n",(0,s.jsx)(n.li,{children:"Rotary mode: normal"}),"\n",(0,s.jsx)(n.li,{children:"Active leds: R G B UV"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"74-boot",children:"7.4 Boot"}),"\n",(0,s.jsx)(n.h4,{id:"75-main-menu",children:"7.5 Main menu"}),"\n",(0,s.jsx)(n.p,{children:"Return to the main menu."}),"\n",(0,s.jsx)(n.h2,{id:"in-case-of-crash",children:"In case of crash"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure that the battery is not completely flat and connect the spectro to USB."}),"\n",(0,s.jsx)(n.li,{children:"Press the button during 10s and release."}),"\n",(0,s.jsx)(n.li,{children:"If this still does not work you need to open the spectro, unplug the battery and plug it in again."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"accessing-from-serial-port",children:"Accessing from serial port"}),"\n",(0,s.jsx)(n.p,{children:"It is possible to access the data directly from the serial port."}),"\n",(0,s.jsxs)(n.p,{children:["Please check ",(0,s.jsx)(n.a,{href:"/docs/spectro/use/serial/",children:"this page"})," for more information."]})]})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11683:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var s=t(50959);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);