import{w as e,g as t}from"./63e54d4e.js";import{ab as n,S as s,i as o,n as l,e as a,v as i,a as c,b as r,x as u,f as d,o as m,I as p,g as f,z as y,l as h,h as $,p as g,j as v,q as b,t as S,w,y as E,B as C,c as I,d as N,m as x,k as F,L as k,N as A,R as D,s as L,a7 as T,C as O,D as M,E as z,a8 as B,ac as R,ad as V,r as j,O as q,Q as J}from"./61b97c49.js";import{I as U}from"./9dfe3a43.js";function Y(e){const t=e-1;return t*t*t+1}function K(e,{delay:t=0,duration:s=400,easing:o=n}={}){const l=+getComputedStyle(e).opacity;return{delay:t,duration:s,easing:o,css:e=>"opacity: "+e*l}}function P(e,{delay:t=0,duration:n=400,easing:s=Y,x:o=0,y:l=0,opacity:a=0}={}){const i=getComputedStyle(e),c=+i.opacity,r="none"===i.transform?"":i.transform,u=c*(1-a);return{delay:t,duration:n,easing:s,css:(e,t)=>`\n\t\t\ttransform: ${r} translate(${(1-e)*o}px, ${(1-e)*l}px);\n\t\t\topacity: ${c-u*t}`}}const Q=e=>{const t=t=>{e.contains(t.target)||e.dispatchEvent(new CustomEvent("outclick",{detail:{event:t}}))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}},G="undefined"!=typeof window;let H,W;const X=()=>{if(!H&&G){let t={};try{sessionStorage.pers&&(t=sessionStorage.pers?JSON.parse(sessionStorage.pers):{})}catch(e){t={}}H=e(t),W=H.subscribe((e=>{if(G){if(!e)return void sessionStorage.removeItem("pers");const t=JSON.stringify(e);sessionStorage.pers=t}}))}return H},Z=e=>{H.set({...e,lastLoaded:(new Date).getTime()})};function _(e){let t,n=oe(e[2])+"";return{c(){t=w(n)},l(e){t=E(e,n)},m(e,n){f(e,t,n)},p(e,s){4&s&&n!==(n=oe(e[2])+"")&&C(t,n)},d(e){e&&d(t)}}}function ee(e){let t,n;return t=new U({props:{type:e[10],title:""}}),{c(){I(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,s){x(t,e,s),n=!0},p(e,n){const s={};1024&n&&(s.type=e[10]),t.$set(s)},i(e){n||(S(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function te(e){let t,n;return t=new U({props:{type:e[10],color:e[11],title:""}}),{c(){I(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,s){x(t,e,s),n=!0},p(e,n){const s={};1024&n&&(s.type=e[10]),2048&n&&(s.color=e[11]),t.$set(s)},i(e){n||(S(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function ne(e){let t,n;return t=new U({props:{type:e[10],color:e[11],title:""}}),{c(){I(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,s){x(t,e,s),n=!0},p(e,n){const s={};1024&n&&(s.type=e[10]),2048&n&&(s.color=e[11]),t.$set(s)},i(e){n||(S(t.$$.fragment,e),n=!0)},o(e){v(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function se(e){let t,n,s,o,l,w,E,C,I,N=!e[12]&&_(e);const x=[ne,te,ee],F=[];function k(e,t){return"white"==e[11]?0:"gold"==e[11]?1:2}return s=k(e),o=F[s]=x[s](e),{c(){t=a("button"),N&&N.c(),n=i(),o.c(),this.h()},l(e){t=c(e,"BUTTON",{id:!0,type:!0,class:!0,title:!0,"aria-disabled":!0});var s=r(t);N&&N.l(s),n=u(s),o.l(s),s.forEach(d),this.h()},h(){m(t,"id",l=e[0]||null),m(t,"type",e[8]),m(t,"class",w="main-button scaleable "+e[1]+" svelte-705exm"),t.disabled=e[13],m(t,"title",e[15]),m(t,"aria-disabled",e[13]),p(t,"secondary","SECONDARY"==e[3]),p(t,"gold",e[7]),p(t,"inverse","INVERSE"==e[3]),p(t,"small","SMALL"==e[4]),p(t,"small-font","SMALL"==e[5]),p(t,"icon-only",e[12]),p(t,"no-icon",e[6]),p(t,"uppercase",e[14])},m(o,l){f(o,t,l),N&&N.m(t,null),y(t,n),F[s].m(t,null),E=!0,C||(I=h(t,"click",(function(){$(e[9])&&e[9].apply(this,arguments)})),C=!0)},p(a,[i]){(e=a)[12]?N&&(N.d(1),N=null):N?N.p(e,i):(N=_(e),N.c(),N.m(t,n));let c=s;s=k(e),s===c?F[s].p(e,i):(g(),v(F[c],1,1,(()=>{F[c]=null})),b(),o=F[s],o?o.p(e,i):(o=F[s]=x[s](e),o.c()),S(o,1),o.m(t,null)),(!E||1&i&&l!==(l=e[0]||null))&&m(t,"id",l),(!E||256&i)&&m(t,"type",e[8]),(!E||2&i&&w!==(w="main-button scaleable "+e[1]+" svelte-705exm"))&&m(t,"class",w),(!E||8192&i)&&(t.disabled=e[13]),(!E||32768&i)&&m(t,"title",e[15]),(!E||8192&i)&&m(t,"aria-disabled",e[13]),(!E||10&i)&&p(t,"secondary","SECONDARY"==e[3]),(!E||130&i)&&p(t,"gold",e[7]),(!E||10&i)&&p(t,"inverse","INVERSE"==e[3]),(!E||18&i)&&p(t,"small","SMALL"==e[4]),(!E||34&i)&&p(t,"small-font","SMALL"==e[5]),(!E||4098&i)&&p(t,"icon-only",e[12]),(!E||66&i)&&p(t,"no-icon",e[6]),(!E||16386&i)&&p(t,"uppercase",e[14])},i(e){E||(S(o),E=!0)},o(e){v(o),E=!1},d(e){e&&d(t),N&&N.d(),F[s].d(),C=!1,I()}}}function oe(e){return e&&e.length>0?e:"Senden"}function le(e,n,s){let{id:o=null}=n,{className:l=""}=n,{label:a=t("button.default")}=n,{type:i="STANDARD"}=n,{size:c="STANDARD"}=n,{fontsize:r="STANDARD"}=n,{noIcon:u=!1}=n,{gold:d=!1}=n,{role:m=""}=n,{htmlType:p="submit"}=n,{onClickFn:f=(()=>{})}=n,{customIcon:y=""}=n,{customIconColor:h=""}=n,{iconOnly:$=!1}=n,{disabled:g=!1}=n,{uppercase:v=!0}=n,{title:b=null}=n;return e.$$set=e=>{"id"in e&&s(0,o=e.id),"className"in e&&s(1,l=e.className),"label"in e&&s(2,a=e.label),"type"in e&&s(3,i=e.type),"size"in e&&s(4,c=e.size),"fontsize"in e&&s(5,r=e.fontsize),"noIcon"in e&&s(6,u=e.noIcon),"gold"in e&&s(7,d=e.gold),"role"in e&&s(16,m=e.role),"htmlType"in e&&s(8,p=e.htmlType),"onClickFn"in e&&s(9,f=e.onClickFn),"customIcon"in e&&s(10,y=e.customIcon),"customIconColor"in e&&s(11,h=e.customIconColor),"iconOnly"in e&&s(12,$=e.iconOnly),"disabled"in e&&s(13,g=e.disabled),"uppercase"in e&&s(14,v=e.uppercase),"title"in e&&s(15,b=e.title)},[o,l,a,i,c,r,u,d,p,f,y,h,$,g,v,b,m]}class ae extends s{constructor(e){super(),o(this,e,le,se,l,{id:0,className:1,label:2,type:3,size:4,fontsize:5,noIcon:6,gold:7,role:16,htmlType:8,onClickFn:9,customIcon:10,customIconColor:11,iconOnly:12,disabled:13,uppercase:14,title:15})}}function ie(e){let t,n,s,o,l,p,$,w,E,C=e[1]&&ce(e);const I=e[8].default,N=L(I,e,e[7],null);return{c(){t=a("div"),n=a("div"),C&&C.c(),s=i(),o=a("section"),N&&N.c(),this.h()},l(e){t=c(e,"DIV",{class:!0,"aria-live":!0});var l=r(t);n=c(l,"DIV",{class:!0});var a=r(n);C&&C.l(a),s=u(a),o=c(a,"SECTION",{class:!0});var i=r(o);N&&N.l(i),i.forEach(d),a.forEach(d),l.forEach(d),this.h()},h(){m(o,"class","modal-content svelte-uo7olx"),m(n,"class","modal-inner svelte-uo7olx"),m(t,"class","modal svelte-uo7olx"),m(t,"aria-live","assertive")},m(l,a){f(l,t,a),y(t,n),C&&C.m(n,null),y(n,s),y(n,o),N&&N.m(o,null),e[11](t),$=!0,w||(E=[T(Q.call(null,n)),h(n,"outclick",e[10])],w=!0)},p(t,o){(e=t)[1]?C?(C.p(e,o),2&o&&S(C,1)):(C=ce(e),C.c(),S(C,1),C.m(n,s)):C&&(g(),v(C,1,1,(()=>{C=null})),b()),N&&N.p&&(!$||128&o)&&O(N,I,e,e[7],$?z(I,e[7],o,null):M(e[7]),null)},i(t){$||(S(C),S(N,t),B((()=>{p&&p.end(1),l=R(n,P,e[2]),l.start()})),$=!0)},o(t){v(C),v(N,t),l&&l.invalidate(),p=V(n,P,e[3]),$=!1},d(n){n&&d(t),C&&C.d(),N&&N.d(n),n&&p&&p.end(),e[11](null),w=!1,j(E)}}}function ce(e){let t,n,s,o,l,p,$,g,b;return s=new U({props:{type:"CLOSE",size:"big",title:"schließen"}}),{c(){t=a("div"),n=a("button"),I(s.$$.fragment),o=i(),l=a("span"),p=w("Modaldialog schließen"),this.h()},l(e){t=c(e,"DIV",{class:!0});var a=r(t);n=c(a,"BUTTON",{"aria-label":!0,class:!0});var i=r(n);N(s.$$.fragment,i),o=u(i),l=c(i,"SPAN",{class:!0});var m=r(l);p=E(m,"Modaldialog schließen"),m.forEach(d),i.forEach(d),a.forEach(d),this.h()},h(){m(l,"class","sr-only"),m(n,"aria-label","Modal schließen"),m(n,"class","modal-close-button svelte-uo7olx"),m(t,"class","modal-controls svelte-uo7olx")},m(a,i){f(a,t,i),y(t,n),x(s,n,null),y(n,o),y(n,l),y(l,p),$=!0,g||(b=h(n,"click",e[9]),g=!0)},p:q,i(e){$||(S(s.$$.fragment,e),$=!0)},o(e){v(s.$$.fragment,e),$=!1},d(e){e&&d(t),F(s),g=!1,b()}}}function re(e){let t,n,s=e[0]&&ie(e);return{c(){s&&s.c(),t=k()},l(e){s&&s.l(e),t=k()},m(e,o){s&&s.m(e,o),f(e,t,o),n=!0},p(e,[n]){e[0]?s?(s.p(e,n),1&n&&S(s,1)):(s=ie(e),s.c(),S(s,1),s.m(t.parentNode,t)):s&&(g(),v(s,1,1,(()=>{s=null})),b())},i(e){n||(S(s),n=!0)},o(e){v(s),n=!1},d(e){s&&s.d(e),e&&d(t)}}}let ue='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';function de(e,t,n){let s,o,l,a,{$$slots:i={},$$scope:c}=t,{show:r=!1}=t,{showCloseButton:u=!0}=t,{inFly:d={y:-50,duration:400}}=t,{outFly:m={y:-50,duration:300}}=t;const p=()=>{s&&(o=s.querySelectorAll(ue)[0],l=s.querySelectorAll(ue),a=l[l.length-1])};A((async()=>{window.addEventListener("keydown",f),await D(),p(),o&&o.focus()}));const f=e=>{r&&("Escape"===e.key?(n(0,r=!1),y&&y()):"Tab"===e.key&&(p(),e.shiftKey?document.activeElement===o&&(a.focus(),e.preventDefault()):document.activeElement===a&&(o.focus(),e.preventDefault())))};let{customCloseFn:y=(()=>null)}=t,{closeModal:h=(()=>{n(0,r=!1),y&&y(),window.removeEventListener("keydown",f)})}=t;return e.$$set=e=>{"show"in e&&n(0,r=e.show),"showCloseButton"in e&&n(1,u=e.showCloseButton),"inFly"in e&&n(2,d=e.inFly),"outFly"in e&&n(3,m=e.outFly),"customCloseFn"in e&&n(6,y=e.customCloseFn),"closeModal"in e&&n(4,h=e.closeModal),"$$scope"in e&&n(7,c=e.$$scope)},[r,u,d,m,h,s,y,c,i,()=>h(),()=>h(),function(e){J[e?"unshift":"push"]((()=>{s=e,n(5,s)}))}]}class me extends s{constructor(e){super(),o(this,e,de,re,l,{show:0,showCloseButton:1,inFly:2,outFly:3,customCloseFn:6,closeModal:4})}}export{ae as B,me as M,P as a,Y as b,Q as c,K as f,X as g,Z as s,W as u};