"use strict";(self.webpackChunkdocs_hackuarium_org=self.webpackChunkdocs_hackuarium_org||[]).push([[7033],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return s}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var A=n.createContext({}),a=function(e){var t=n.useContext(A),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(A.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,A=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=a(r),s=o,f=m["".concat(A,".").concat(s)]||m[s]||u[s]||i;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var l={};for(var A in t)hasOwnProperty.call(t,A)&&(l[A]=t[A]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var a=2;a<i;a++)c[a]=r[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6659:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return A},metadata:function(){return a},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),c=["components"],l={},A="Stepper",a={unversionedId:"bioreactor/making/stepper/README",id:"bioreactor/making/stepper/README",isDocsHomePage:!1,title:"Stepper",description:"DRV8811",source:"@site/docs/20_bioreactor/20_making/50_stepper/README.md",sourceDirName:"20_bioreactor/20_making/50_stepper",slug:"/bioreactor/making/stepper/README",permalink:"/docs/bioreactor/making/stepper/README",editUrl:"https://github.com/hackuarium/docs.hackuarium.org/edit/main/docs/20_bioreactor/20_making/50_stepper/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Connecting the plate",permalink:"/docs/bioreactor/making/pid/index"},next:{title:"Load cell",permalink:"/docs/bioreactor/making/weight/index"}},p=[{value:"DRV8811",id:"drv8811",children:[]}],u={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stepper"},"Stepper"),(0,i.kt)("h2",{id:"drv8811"},"DRV8811"),(0,i.kt)("p",null,"The PWM chopping current is set by a comparator, which compares the voltage across a current-sense resistor,\nmultiplied by a factor of 8, with a reference voltage. The reference voltage is input from the VREF pin. The fullscale (100%) chopping current is calculated as follows:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"formula.png",src:r(9939).Z})),(0,i.kt)("p",null,"If a 0.22-\u2126 sense resistor is used and the VREF pin is 3.3 V, the full-scale (100%) chopping current is\n3.3 V / (8 \xd7 0.22 \u2126) = 1.875 A."),(0,i.kt)("p",null,"We need to define Rlim. That will decide the reference voltage."),(0,i.kt)("p",null,"Ichop = 0.4A\nRsense = 0.2\u2126\nVref should be around 0.64V"),(0,i.kt)("p",null,"U = R ","*"," I"),(0,i.kt)("p",null,"U1 / R1 = U2 / R2\nU1 + U2 = 3.3v"),(0,i.kt)("p",null,"R1 = 3k3"),(0,i.kt)("p",null,"R2 = R1 ","*"," U2 / (3.3 - U2)"),(0,i.kt)("p",null,"R2 = 3300 ","*"," 0.64 / (3.3 - 0.64)"),(0,i.kt)("p",null,"R2 = 640\u2126"),(0,i.kt)("p",null,"Stepper ",(0,i.kt)("a",{parentName:"p",href:"https://www.omc-stepperonline.com/download/17HS13-0404S1.pdf"},"17hs13-0404s1"),": 0.4A, 12V"),(0,i.kt)("p",null,"For 0.2A to keep it really cold:"),(0,i.kt)("p",null,"R2 = 150\u2126 (see ticket ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Hackuarium/bioreactor/issues/27"},"#27")," (finally set is Rsense = 0.1 Ohm and Rlim = 180 Ohm)"))}m.isMDXComponent=!0},9939:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAABmCAYAAABhqeIXAAABQGlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGDiSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAyCDMwMEgx6CWmFxc4BgQ4ANUwgCjUcG3a0DVQHBZF2TWz5PpucrptSfWOwsatPwJ1sRUjwK4UlKLk4H0HyBOSC4oKmFgYIwBspXLSwpA7AYgW6QI6CggewqInQ5hrwCxkyDsPWA1IUHOQPYFIFsgOSMxBch+AGTrJCGJpyOxofaCAJtvhJG5JQGHkgpKUitKQLRzfkFlUWZ6RomCIzB0UhU885L1dBSMDIwMGBhAYQ1R/fkGOAwZxTgQYjmVDAwWSxgYmKYjxJIeMjBs3cbAwB+FEFOvYWAQXMbAcNCmILEoEe4Axm8sxWnGRhA293YGBtZp//9/DmdgYAfGyd/r////3v7//1+gPuZbDAwHvgEAZq9eKkAEvtgAAAGdaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjM0NTwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMDI8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KwOZb6gAAI2dJREFUeAHtnQfYHVXRx08IdhEFBQQpIdgVsKFiQ0TFLs2GigoSBEnAQoKiYkUUO4oFFBuiFCEhlIgiKmoSNLGjASuJjWBFlAT3m9/wzXJ279ly7917vS/vzPO87+6evv+7OztnzsycGZlQcHIEHAFHwBEYCQIbjKRVb9QRcAQcAUdAEXAm6w+CI+AIOAIjRMCZ7AjB9aYdAUfAEXAm68+AI+AIOAIjRMCZ7AjB9aYdAUfAEXAm68+AI+AIOAIjRMCZ7AjB9aYdAUfAEXAm68+AI+AIOAIjRMCZ7AjB9aYdAUfAEXAm68+AI+AIOAIjRMCZ7AjB9aYdAUfAEXAm68+AI+AIOAIjRMCZ7AjB9aYdAUfAEXAm68+AI+AIOAIjRMCZ7AjB9aYdAUfAEXAm68+AI+AIOAIjRMCZ7AjB9ab/dwhccMEF4aUvfan+nXTSSX0N5BOf+ERe95vf/GZfdW/phQ844ICwxRZbhAULFuitEvP/sMMOy/H64x//2BqCa9dem9d77WtfW6j3+c9/Xvt5whOeEKb8vgLsjODkCNzSELjwwgvZ8UP/Nt9882z9uvWtbpFyd7/73bXehhtumP3mN79pVW86FDr33HMVl4033jhbffXq/JYf8YhH5Fi/853vzNObTk444YS83otf/OJC8euvvz7beuutNf+9731vIW+qXfCVcHIEbnEI/Pe//81mzZqVv8Rf/vKXW93j2WefndfZY489WtWZDoX+/ve/Z9tss41ic/TRRxdu+WMf+1iO2YMe9KBCXt3FzjvvnNf79re/3VP0lFNO0fy73OUu2a9//eue/KmS4Ex2qvxSPs6+EXj961+fv8R77713q/rPfOYz8zqnn356qzrTodDhhx+uuNztbnfLYLgxXXfddRmM0GYOP/vZz+Ls5PkPf/jDvPz973//ZBk+lPe5z3203DOe8YxkmamQ6DrZgibIL25JCMyZMyfIlF9v6eKLLw7//Oc/a2/vL3/5S6AchN5RGHNt+emSCS6f/exn9XbRc2+00UaFW7/97W8f5OOUp33qU5/Kz6tO0HsboedN0YwZM8K8efM0a/HixeGKK65IFZv4NGeyE/8T+QAHRUB0emG33XbT6iJ9BZFMa5s69dRTw7/+9S8t85znPCfc6la3qi0/XTLf//73h7/+9a96uy984QuTt80HzeiMM86w0+RRJNRw1llnad4d7nCHcNBBByXLkfi85z0v3O52twvUede73lVZbqIzpoK47WN0BAZFgCm/vID69/jHP762mQc/+MFaTiSorM2Ut7axW0jmDTfckC8E3ve+9629K6b9hrVYZVSWPeecc/JybdQ4T3ziE7X8He94x2ztNWsr253UDJdkJ/oT6IMbFgGm/GJdoM1861vfCn/4wx+STf7kJz8J3//+9zVPVsuD6AKT5aZboixIhd///vd628961rNqb18sBPJ8ZgVVFOfFEnBV+X333VezUPect/i8qmITm+5MdmJ/Gh9YFwgw5d9vv/20qXXr1oX4BY/bj3WEL3vZy+KsaX3+la98Jb//3XffPT9PnRx04EEB/Sy0aNGicOP6G3uKoXawNrfffvvwpCc9qadMOSEuYzrzcplJvnYmO8m/jo+tEwRe8YpX5O188YtfzM/tBH3fmWeeqZebbrpp2H///S1r2h9jZ4ztZ21fi8cmm24SnvzkJ2uZP/3pT2HhooU95T/96U8HsUbQ9Cr9brmSmI7l+vHvfOc75eyJv3YmO/E/kQ9wWATud7/7hV122UWbWblyZRB9a6FJVq5Xr16taUyJWWhxugkBUxVssMEGYetttm6E5eUvf3lexiwS8gQ5+dznPqeXt771rcOcg29eLIvLlM/pG2sPyMZTLjPJ185kJ/nX8bF1hgCmR0ZlE6NYhRBLvVZ+Oh/NqgC9Noyxifbcc8+w3XbbabGvfvWr4R//+EdehY/b5ZdfrteyCBm23GrLPK/pxJgsUnDcZlO9Sci/yYhwEkbiY3AERogAU9PXve51AZtPVANmDvS3v/0tLFmyRHveaaedwkMf+lA9R4WAVCur6+HQQw/V87rhoWK45pprtI9dd901PP3pT08Wx/ZTVslVMnva054WnvKUpxTKoRs21UUho3RBO3wsxAVYc7BT/c9//lMqVbyESYprbEAybEOyWh/Wrl2rRW3xsKke43rBC14Q3vGOdwQzmzPpNtZ7W1pTe5a/5ZY3M2QWL8u2ulZuIo+Tavbg43IEukbgRS96UW469I1vfEOb/+AHP5inve997yt0KUxQ8yRISSG9fIFLqLzcmagZMtFFZsLs8jZJr/ubP39+oTkxvq8tH7e1YsWKvK7Ym7aqx9j6IVnI0nb7cZcl3gNxHxir2Clrd/LRymMRbLXVVtmNN97YzzCyZz/72fn9TbV4Ei7JypPgND0QOOSQQ3LPJRZgHvOYxwSiPUF3utOdNCJUjARG8uhrWfwhulSVNCc+9lpN7DmDuJ2q9GvtXHTRRQGnCCMkY2ES4aMf/WggUtjxxx8fHvWoRwVxG7UiekSH/MY3vrGQVr6YPXt2OSm85z3vCfe+97170i2hXwcLFgJx0DC1gbVTd2Sh6nGPe1xAXXDZZZep2Ry68N/97ndaDQeDttK09WMSNfW22nIrS54ax74+J17YEZjiCGBQL29mJtPPTF76TF5avX7uc5/bc2dIW/e4xz00X9QLPfkkIBne9a531TLnnXeelokl2arAJhj5W9vC/PO2TZLdZ5998rQ2JybJfve7321TvHUZJFjwIjZBPyQfL61HXfEYy17ykpfoNXhfuerKfprSsg94wAO0vnzo+q77v67QTjkzNb4XPkpHoBEBM5hfs2ZNeNWrXqXumlRCyi0TUhNSF1Tlkov+FF3stttuG5761KeWm6i8RqJk8QfCEWJSSab2OjR02fLBaD1MbJNN8seFFokeQmqfvUOvBF7XMPbN1rfpoOvKT1qeM9lJ+0V8PCNFABWAGcybj/0973nPILrDZL+HzDlEp7Z4g/385z/vKWOWCSz2sOjTlghYjQcalJr2t21n1OVQgRh97Wtfs9PGIx8R89RC3WKmVwceeGBj3XKBpUuX5sF9COI91ahRJws4rMpC2BuWI5hPtRse93iJMMRXXKZLQQIaN3Z/xBFHBFa8IVmoCU1eNtYgq+JXX311+OQnP9mXRGX1p8tRpvYBxsEqu5FJt3YdH5G6kL5gFKzmx78hq9yXXnqpRvpKScK0s3DhwrDZZpvlTV577bXhV7/6VYDBI53d5ja3CfzmZZJQgKHOnAydbWyWZvUlEHZAJ1omArG85S1vKSc3XuOWzPhkyq0Y9OMNh8vshz/84bwPsLeZQZ7Y4uTrX/96XmpKRkZr0lfEcR9Fmd1U3PMjBKoiyUdFCqeySJDrseSpyvrBWxY8tO52222XEd/TqRoBdKfgy58wuUyYZXVhyRHmqmVF4iyUe/vb367pZeuDWCdr/aSOBKSRxaFCm6aTTZWP02Q6XqhnOtm4THyO5cOgJKZtep/sVICVQD/0sIc9TOsyFmG6/VTNy9rOC+jRpyI1SrICjtMACGAwLYGOtSZ2lm0MryXCfKEnMTPSKWrdarFVmDd3XqD+L37xi/Ca17wmfOQjH7EsP5YQwD5VXtZSavXl85//fJ3BXXXVVbpajmQLnXbaaXqsC9XHlBm7WKwKkE5//OMfax32xTrxxBP1PPXvIQ95iM5+UnmkVQWwQfo1PWpcd+bMmfFlX+cHH3yw7uOFdQAxCeLYsU0NLVu2rKlIbT4ODKgLoKq4s7UNTEJm05fBJdkmhNL5dZHkUzXi6PK2zYc8H5m8jKniyTQxS1KpARvF733ve8kynjgYAmI8r9hyhJYvX67X4omUYSkQUyzJikogzspe/epXaz3R32bidlrI48Ik2UmxLmBM3J/ttyVOFiSNjebOnat4Yd0gqpax9dtlR77wNYIvXVMk+VSX2GtSD8I+Ev0V9KUvfanRk0cLyj90uKxyr1+/Phx33HGW7McOEDCdKzpWokudfPLJ2mq/wb3RmYphvUrSSJ0mpXUwxJE1wSKWMDttnwhaV1151cj6ihvGY+wLX/iCJqE3F0YbZ0+Zc2eyI/ip2kSSL3drq9SYDTEdM+P0P//5z7kBfblO+ZrVbZvKMa377W9/Wy7i1wMiIPrTIBv/qVPCRUsu0mkzeNctTlV1dcrJp+iUnvioMA+RfKuKTkw6TFaCcutYj5p/1FjG9da3vjXw/KP+OPbYY8fS5yg6cSbbMarY9JmPthi+hwc+8IGNPWAaZCHceJnxGopXjj/+8Y83tmEFMCWCeHFlK2VL9mMHCJhOcMGCBQE720GDexMSUNx5dUTo0Js8uzoY+tBNEPcALzmsIWTn37B82fKh26xrYM3qNfl7hO76zne+c13xic5zJtvxz9NPJHnrmgUr0QHppTFJXD6x34RE/5dH7deEmn+8+GJhoCVw23TqDgE+fLjf/uhHP9JG+zFnKo8CUySbdXzgAx8IP/jBDwpFUEvAWOr+xLqhUGfUFyzGoYYiZuzSZTctRo2qzxUrV4RHPvKRQWI7qHplVP2Mpd0mBa8vfDUhVMyPt6GW6E7FzMQVrpuYpsiPnWGGEyv33/SmN2k6eWJnm6idThJbxLwerqNO3SEgOljFdpNNNsnEpz/ZcN3CV1xh9dWrM9rh9xWGolnihZb/dqTX/cXBZcyEq2u32ni8fj4YAjOoJj9kJfHV3nHHHTVf7DZDbBhcWWkaZ4ARpleQ+Gg3uhAy9TIDaxZEuDbCuYAtOlBBINGgY20T4o2vv4XywzkhVj1Y23bE8cG2A7G0Nke22ma8To6AI1CPgNvJ1uPTd665D7KA1SaSvK1S01GZGUoAkfDYxz5WoxkRBYmyRx55ZOOYsDAwwquojn75y1/me2DVlSvnbbzxxn1FZirX92tHYLog4Ey241/aQsIRHKMpkjzh8wgHB2GwjutjeaaAXtbKDMJkWZ2tI4za2feqYULT0wSSrJMj4Ag0I9DZm0LMyc985jNq18m0FvMUIuagahA9ZbjXve5VGA3TWF5uFniOOeaYQp5dMJXFDhHCXhTpKSYYA3E5YUw//elPNW4l9qWs6mPXGO9yafXwxLLAFZbGEXMc9nZiWk5UexYl+o29yXgs7qVFIIr7KJ/DNM18B7z22GOPcpHCNfeIKgLpto5s4YsyTUyWezaM69ocJI/fBW8hJ0dgqiPAzPSKK64Y6DY6YbLiXaQvKlPPmJDUCNaLQTFG2GbQTBnc5dj2g5e8imBAtjWIMSMrS5ANthRhNT8mws4BBrpNtrgomz+tu2Fd3mZcLz7HZpXISJhVYU7VlmDUt73tbTXIMedNZJvKNZWL8z/0oQ81Mtm47yZpOm6763P2ZarahqXrvrw9R2CUCMBkB6WhmSxR3pEYiS7EIo0EP1ZDeqa5GMSzY+Ull1yiukR0jLbIM+iAqceUHP9x9J94gRAlDMmTfYBYxLF+sVeFSVaZuhBVyZgoezr9+9//1qhKmFThpw4TtziYbcfbNpI8Ye7sy0hsgtRW1dbnlVdemUvf559/vkqnNm4rEx/ZjtmoKf4mXjXgwP33Q9hLEpOhjlBFuK1uHUKeNy0QkCluLTWZcMkUV81M8C1ORTzHRElCy2kZovkYSRATTZPN6iyp5yiSsJaRHyLj3EimoJqO6ZOoJiy5cJSQdHndk046Kc9be83aPF0MyvP0+IQo+PTJ/kaY4/RDbSPJCwPPx4GpVhOJU0NeXkLW1RYXhp2XJTpXHUmc1Lws99z2T9Qqdc16niPgCPw/AkNJskixFshXNqFLmishZhODE30icS6RQtF7DkqoJJC8oLe97W2F/ZPiNjFjIuI8kvS73/3uZOT7uHx8jlR81FFH6bQfEzaMsNsSLoCywZ3GIWBlP9aPWhvoX9k7CgKfNkbtuF9aLF/UGeixY7WAtc0xNmyfNWtWnNVzzozj4osv7klvSpiqfuRN9+X5jkDnCDR9buokWZkKquQjC1JNzfTkDyrJ2t5BMg3uabOcIKqDXDJDYoPaSLLxDqaxBF1uP3Ut3jt5n7LBXqpIJot1eZlHP/rRyTLlRMZtBufyEGS2n1S5HNeyrYm2T3lZ6EsV8TRHwBEYEwKDa3PlTbfdJ1PSWtuvAYtLuIKm/lJ7JtkWIOh3m0gCBufS3qpVq5qKaz4LdSwuQUh5cVR7TWz4h87ZJEyi6afIJHHy0Pu2IfzdcWc0iiPOWxpHdKvcAwSmmIY5OQKOwP8OgUZ1AQscVWTmSm0YXlUbLNLECzVV5SzdLBhSgYmtjB0x+WJsfAzMScDyOGI+ZmZaojvWKT7WCRB2oETT6pfoD7M1puzYt8rHMme6tMVYLJAxfvAWq6BNP1hLnH322VqUKX5K9cLCn4VM9JX9Nqh6GUdgtAg0MlnsW2EUKULSg4hINCgRBIK94lMEsyCKfUxmSlE26YrLxOfoP6GUHhgLgjJhZyvbD6sel32zBqG6SPIS/LjvlXwbw5577ln5W1gZM1kTn/geDzIr40dHwBEYHwKNTLZuKEzHIRZ4mkgCV+iWGWVmx3QcRpuilIRrm8SZRJuqZ2nUN6kO5lYmzKhMHbDBjA3C5lts3sn0GomTxT6kVszILNpSuf+ur9kB1UzOWEwrO2903d+g7WE/jXMJJmzMMFic48PGNi/YGY+LiAnRxlkCTzyeW9yV2S0VU0Wn0SPAojOCBVvnrFyxMqAyGxURNF92rdCYucwSTeXXSX/D6H6FgWUyGF1kkZX8yqZYtGEjN7ZFEScBLTfowpc4H2h/tNW0xcrxxx+vZTEvu/7667XfNgtflTfSR4ZYNGjfbNSXMm3ro6nWRSUuqfbJQqR8YFrXG2dB0SVnYkus45QHuHAU5pXJR2Jsw+GZKI+h6ZrnnShn9jyNbbDTrCM2bLRNGNtswUT0OvGGzMTGPYO3EA2PZ43F7/Xr1jeix+9pW+ywoN8lMf0cimSbcH1QRQ9ZGfrNwrfxcll4uEGZLIO13TNlYady90yYjEz9dWzYpBqNi8liXyuR5LV/WQyz7kd2FPfZjI8JTEIiyo+sn2Eaju13GSfPjqiDMpFkddykiZ46k80Gh+mmdd2YyfIxZBzlP5FeC1YdxoTH8Zu2vpFbYEGzVecdjsN/lm8VQYswkfa7IMxhUx7vk0cbsjVTJjPLcvXCNdZAtMN7JLPzQt4wF0MzWSRTu0FeGNFz5uNhAzZeeJN2xc4zzxuGyeKAYF+dXXfdNRMX27xdTsRnPuPlYFxsdBdv+TwuJss4Lr/8ct1ymvtftnQZSSMj2QZF71f0yBkOIJNI/Bb2rMTSApKGOZiQL958Yxl+zGRh+HUkdt4ZjjM2fo4eu7UOscHzRIWUMRsD4ypHHfHOzGSX4EwWrrUcz9ZZZ51VcB5C0ELAk3UcLQPzlF2cKweG9CxeilpWtn+qLNdvxtBMlg7FcF8HZg/gDjvsoLaaFoyadNGtFF7+YZgsfaKeENdS7RegJShMtvvuuytzNaaOLS1TiJjGyWTpF2bCvYtZWDyMzs/FSkH7GZcU2O8NiLVF/oyIG3ZPdRgtzw3PCp525R1geyp0kNAPk6U7XkIJzpPfxxFHHNHBKLyJMgLGG2C04vZdztZrCQua/w6yZVNW5b1J4QsvvDBn2vAGCWSVbJNEvEN5BmHMEl+lslw/GZ0wWTrESUA8o/IbN4YLo8W1s/zSGJB1066YIXJeJl5c6jPVs/44Mj1AMkoBL2ZPedlUfrkPv+4GgXPOOSfHXWIeJBtlu2n7HWXvq2SZLhP7ZbL0HTuqSNDyLofjbQkCOM+Ymk8WjJOYyF5j+XMiAZBaqZdiQRAnnSp3fNaZUDnwHMLIu6DOmKwNBiaGd9Wll16aIfaPg5g6MJ1DTYC6oo2iexzj8j5uRoCHlxeChzfl5RZLshImslLXfnOLw58NwmSRXu1DIK7Oww/CWyggYAvGYCxR6gp5dsECqf0GEtLUkmuPSMSxuqpuFmKxVsSRRz1Eaxtukdk5k23RpxeZpgjAXO3lwBLCdMd8JNnDzPJYva+jyy67TBc2yqqgch1WmsXOO2MvrRT1y2TR/ccLKjAEp24RMHUMqoLrrruup3GJl5I/JzwvTc9A3IDtz0a9bWXNpop4buxZRGoelpzJDoug12+NACvBSKn2ALN4ycpwnIbZjthA17Z5xhln6IIHCxlVLxnxIdCr0ba4Yifbi5mshJvUSG/Eqoj/mCGde+65GeaAtgbA+NH3I507dYcAFjlYl4AvC9opkkD3+fNDuZQaMVWPtKOPPjqviwloWYVp9fiY2jOKVcKw5Ex2WAS9fl8IxLpZe5DtiPSClNqGJLqaqh/ESUBVU3EdFi+MwUochzircB4zWRtDmyPjhPE6dYsA6j7Df7/99ks2LrGh8zLobvuhMoOuMulihmVWCyzGDktDBYgRQJwcgVYIELiGbW5sh1tiQ+AxSHwFtguC2G5IVAqtAn0TWIctjNj2SEyrNNg6bQiDDWK8HuQFDLKqHMSmmuROSJhrEFWG7sYxLi++TgY+RRoRCTIfacpDk0yZ5udliDfSD/HMGYkFiwb5t+v4KB/oIPpbTUrFPInLtjm/udc2pb2MIzAgAmKfGGSar7UJ7sOWRAToMTrttNOUORL0BvdGGHCcb+Xi4/7776/uj+zyC6OFAeLGzO4UF1xwQdh5553j4rXn7CBhOz3wQWAvONogJjEkpj+6ldGo9kOrHdw0yYz3o6tisuLgk6Mh6hr9yMIw25DYy+fFYNYw0yqCyeIWL3phfRY22mijqqLN6cOKwl7fEWiDAHbM8jSqY0qV62wcixdzrrYkDDufQqKnXb58eauqsbqgyhnBvBUZOyoI9MFOo0EgNrOSaHPJTrBCia0LzE0/WbiUiLknvyN/r3zlK0u5xcvY8WRYc0KXZAVxp9EiII9vYBcNiNjDqV2EyTvs0MOCLE6odGL7n5HeRLEEhBQqzLOpSut8IsQhzbDvG22Ll5FusinbDNW2wRgIEsQmo2waSl32ciMMprzguktI3AAS+JlnnhknJc+RqIlHjOSN1M+eehA7eRC8JkXs6MzGogTgESuOQhF2NmFDT3FiUcmNWQbSIjsny6JPoSwBddqGz9xtt930tyw00HARb/rJfaZo5oYzdVcQ200E3EwFlSpvaUi9tgMIEerEk8yykse4/7pwr8nK5cQi//YrR6B7BJAY5aFVCQKJto4kHq+Wa7uogfRL2xJNLcMsDMcUpFnstJuojSRLG6x6E5tD3h39w4wLe/AqwprB4lZYnfiIvSaLPDHNmzcvbz8umzqX7Y20Knboli8fr8pdMAiwQrmy9HbsscfmCzzWTnwUdUyGeZ0ROMT5dee42PdLBHSxNiVkZ2V1+WBl++67b14WS5I6wopAmH5evo33paiqtDyzl2Ht7t26oO7X8bzOELAgMDgkVLlKYhLFQ82LhilXE0lQdWWwmGkZ45EQisposTooM7Jye22ZLPVo3zyBGB92vVVkxuwSb1mtEDAz4p5h/BbMBFOl2A7UmOwuu+yiWwuxvVDVn+EXM1nGJNJdckgpJkvcBWNoc+fOzZgSw1CxQz3uuOPUtZl8pvBGMZOFCVaNj3TidvRLcRwU2b+vtjqM9vDDD9ffnw8r56kPH/dpnqh8wLGBbUMSelPx4dkalpzJDoug12+FQKzjqmIGeFDZi98U3o6YEEiwvARlMy30pjBEGO0ll1xSOb5+mCyNLFiwIB8ffcvOFz1twzjxFOI+Fi5c2JNPdCdzA0eXbGRMdp999rGkxmOZyTIm/PTLlGKypv8koFCKzDkk1lXHTLbK9jjVVts0fkf7/ascUmCUcRhP9iAkyh7xLmC0ZcKtH3ts2ei1IJVjCobrfYqQfO03lMXTVJG+0qqX1+RunRyBrhBAP4kJFITpFSZYBE2XB1pX8IW5BAncofli9B+Eoel56p+EpFMLBAKuL1mypMdMS6aSukuxMAXV17F7cBf05je/Wfd9oy15y3QHZPqIScLyBduNI7VFEqvaIjkG2exSV63juoOeY5rEfniMac6cOa3aNdMkTN1S9IY3vEGD6aNDl49RqkjnaZjbGWayeJlsn7E8/OEPV92yMMogHzLdDIBg/sJ8e+qwRRZ6cPTqJ5xwQhAVSeBZ4xzzvxQtXbo0/w2r9NypepVpfbFkL+wIDIEAU0yT4uSBzKWW+BwJompl2bom0pgsPGUECKojQt/hypuaRlKvX0mWOrJ4ohK0jZlAR2WycHnon08//fSCWqBc1q6HkWTxXkKqNY+0siojJcnizME9UBcJEM+2Jhq1JEv/8WwmDlFqY6sK+M69EIUvpjjAlP1e8RGdc4oIz2rl2jrHpNqxNFcXGBJ+HAsCTAkJtm66V3uYednRZY5rFwluFqZhnj3xtLgJCKanNm4+GmJEX6iCiZqsYOdlUF3A7EU6zNjZA31imYzJoscl6EnVn8wC8qqmLgA76NRTT9U+URuIjW9eLsVk0b8SRczugyMLejAe/PUJAl+mmMmKpULlGBl7qn65vdQ1H0YbExHPyoR6yPLLx7Ien2epXCa+PuCAA8rN6zXPJ+VQNXRBzmS7QNHb6BsBdJeyHXzGbgnENIhXsftubAIroCuULdyTuyoQJ6EshRuTjZlA6jx2Ny0zWWBgVZ96MEzxoFNkUkyWDJg9UpstSsb9sUBJkP34gxAz2bhs6nzQjyUr+VhK0CYLVuMmJHo+UvRPrIMuyO1kBU2n8SOAl45IDPo3/t5H36NsgaJuvej9cO9le3ixLlD9sywaBYk2FeQDE4QRFwYjjEX1jYXE6EJUEdFV76n456sOUuKlqu5XpNveQv+fIsxEbU6POeYYteVdtGhRkIA76jaMXalEGQsy81C9d7kR7Eyr9LmU3WzzzcpVWl1jBythCPUPG2P5GPXo3Fs1NGAhbIqFsQYxAwzykRmwlVK1Lji1t+EIOAI3I4D0V2VbiRkXKgF5DVXStVomyQ5iXWDqAmvLglojkS1evDirkmSrolCxDx96WlPpmAddLMmOwrrAxs+sxnZVqdKbWtkuj0j+ptfm9+iK3Lqg9NHxS0dgGATwCGNb8/kL5iebQYI98cQTNU9sONUTLFlwiERZPFLPLGESagFh1g7WpJiRBbye+CNGQ5lEhxxEH6qr+OSJ3Wu5yEivRc8dxFZX+2DreLYGHweJ6iTgPYiFA1YIXZEz2a6Q9HYcAUGAwDaYpeHGKpJfEhNLh8mJtJgsM2wiagNM4QhyIpJtoTnMssQZQs2UxMqgkBdf4EYLiW1qnDyWcz4URDpjDLgMj5rWrF6jwYXoh4+g2Fh31uVofuHOhucNOQJTC4G99toryPQ9SOBxlQQtipfdhZgEBZmK6qVssGnJnR9lFV5tQasatvgRRx55pEqNMkXPi/IRIL4COlHiCey919553jhPiEtgsRLK0njX41ixcoXaBc+fP79VLIS++u9K7+DtOAKOwE0IsKmoRfiXl1H1fLhpxntMYecbb+RpOllMyggKXvdnLqcp64Lyb8DW1oyBvzh2AS7MsT8//c6ePVu3xDb3YSwMYjOqWCdLXt0YiSXhdBMCbl3Q1yfJCzsCzQjI9uxB9hYLSImrVq0Ksp2N6vqoSZxUvIgILo7u1mjmzJl6yvSY4OV1ZHpUq2PHVB2kQTyeyt5QTIexeGAF/fzzzw9i6xtkE1JtQhxCAlYOwsxDlbSNSoS/KhqVGqSqv0lOnwGvneQB+tgcgamOAExWArBoqENcgSeRYO6oNsQyIuy0404BUyqnbhBwJtsNjt6KI+AIOAJJBHzhKwmLJzoCjoAj0A0CzmS7wdFbcQQcAUcgiYAz2SQsnugIOAKOQDcIOJPtBkdvxRFwBByBJALOZJOweKIj4Ag4At0g4Ey2Gxy9FUfAEXAEkgg4k03C4omOgCPgCHSDgDPZbnD0VhwBR8ARSCLgTDYJiyc6Ao6AI9ANAs5ku8HRW3EEHAFHIImAM9kkLJ7oCDgCjkA3CDiT7QZHb8URcAQcgSQCzmSTsHiiI+AIOALdIOBMthscvRVHwBFwBJIIOJNNwuKJjoAj4Ah0g4Az2W5w9FYcAUfAEUgi8H9+QY///aHpbgAAAABJRU5ErkJggg=="}}]);