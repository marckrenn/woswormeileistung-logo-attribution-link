import{S as e,i as t,n as r,e as o,c as n,a as l,b as a,d as s,f as c,g as i,m as h,l as f,h as u,t as d,j as m,k as $,r as g,o as p,p as v,u as E,q as C,s as k,v as y,w as I,x as w,y as b,z as L,A as N,B as R,C as S,D as F,E as D,F as T,G as A,H as B,I as x,J as O,K as j,L as z,M as H,N as P,O as _,P as U}from"./61b97c49.js";import{I as V}from"./9dfe3a43.js";import{L as W}from"./92569f4a.js";import{H as M}from"./3247f028.js";import{d as G,a as J}from"./c80bfaaf.js";import{p as K}from"./63e54d4e.js";function q(e){let t,r,p,v,E;return r=new V({props:{color:e[1],size:e[0],type:e[3],title:""}}),{c(){t=o("button"),n(r.$$.fragment)},l(e){t=l(e,"BUTTON",{});var o=a(t);s(r.$$.fragment,o),o.forEach(c)},m(o,n){i(o,t,n),h(r,t,null),p=!0,v||(E=[f(t,"click",(function(){u(e[2])&&e[2].apply(this,arguments)})),f(t,"mouseout",e[5]),f(t,"mouseover",e[4]),f(t,"blur",X),f(t,"focus",Q)],v=!0)},p(t,[o]){e=t;const n={};2&o&&(n.color=e[1]),1&o&&(n.size=e[0]),8&o&&(n.type=e[3]),r.$set(n)},i(e){p||(d(r.$$.fragment,e),p=!0)},o(e){m(r.$$.fragment,e),p=!1},d(e){e&&c(t),$(r),v=!1,g(E)}}}const X=()=>{},Q=()=>{};function Y(e,t,r){let{type:o}=t,{hoverType:n}=t,{size:l}=t,{color:a}=t,{onClick:s}=t,c=o;return e.$$set=e=>{"type"in e&&r(6,o=e.type),"hoverType"in e&&r(7,n=e.hoverType),"size"in e&&r(0,l=e.size),"color"in e&&r(1,a=e.color),"onClick"in e&&r(2,s=e.onClick)},[l,a,s,c,function(){n&&r(3,c=n)},function(){n&&r(3,c=o)},o,n]}class Z extends e{constructor(e){super(),t(this,e,Y,q,r,{type:6,hoverType:7,size:0,color:1,onClick:2})}}function ee(e,t,r){const o=e.slice();return o[10]=t[r],o[12]=r,o}const te=e=>({item:1&e}),re=e=>({item:e[10]});function oe(e,t){let r,u,v,E,C,T,A,B,x,O,j,z,H,P,_,U,W,M,G,J,K=t[10].name+"";C=new V({props:{type:"GRIP_LINES",title:"Reihenfolge verändern"}});const q=t[6]["buttons-end"],X=k(q,t,t[5],re);function Q(...e){return t[8](t[12],...e)}function Y(...e){return t[9](t[12],...e)}return{key:e,first:null,c(){r=o("li"),u=o("div"),v=o("div"),E=o("span"),n(C.$$.fragment),T=y(),A=o("a"),B=I(K),P=y(),_=o("div"),U=o("span"),X&&X.c(),W=y(),this.h()},l(e){r=l(e,"LI",{draggable:!0,class:!0});var t=a(r);u=l(t,"DIV",{class:!0});var o=a(u);v=l(o,"DIV",{class:!0});var n=a(v);E=l(n,"SPAN",{class:!0});var i=a(E);s(C.$$.fragment,i),i.forEach(c),T=w(n),A=l(n,"A",{class:!0,id:!0,href:!0,target:!0,title:!0});var h=a(A);B=b(h,K),h.forEach(c),n.forEach(c),P=w(o),_=l(o,"DIV",{class:!0});var f=a(_);U=l(f,"SPAN",{class:!0});var d=a(U);X&&X.l(d),d.forEach(c),f.forEach(c),o.forEach(c),W=w(t),t.forEach(c),this.h()},h(){p(E,"class","grab svelte-5gwuvl"),p(A,"class",x="leaf color-"+t[2]+" hover-color-"+t[3]+" hover-background-color-"+t[4]+" svelte-5gwuvl"),p(A,"id",O=t[10].id),p(A,"href",j=t[10].url),p(A,"target",z=t[10].target??(t[10].url?.startsWith("javascript:chromeless")?"":"_blank")),p(A,"title",H=t[10].nameShort),p(v,"class","start"),p(U,"class","buttons svelte-5gwuvl"),p(_,"class","end"),p(u,"class","container svelte-5gwuvl"),p(r,"draggable","true"),p(r,"class","svelte-5gwuvl"),this.first=r},m(e,o){i(e,r,o),L(r,u),L(u,v),L(v,E),h(C,E,null),L(v,T),L(v,A),L(A,B),L(u,P),L(u,_),L(_,U),X&&X.m(U,null),L(r,W),M=!0,G||(J=[f(r,"drop",N(Q)),f(r,"dragover",N(t[7])),f(r,"dragstart",Y)],G=!0)},p(e,r){t=e,(!M||1&r)&&K!==(K=t[10].name+"")&&R(B,K),(!M||28&r&&x!==(x="leaf color-"+t[2]+" hover-color-"+t[3]+" hover-background-color-"+t[4]+" svelte-5gwuvl"))&&p(A,"class",x),(!M||1&r&&O!==(O=t[10].id))&&p(A,"id",O),(!M||1&r&&j!==(j=t[10].url))&&p(A,"href",j),(!M||1&r&&z!==(z=t[10].target??(t[10].url?.startsWith("javascript:chromeless")?"":"_blank")))&&p(A,"target",z),(!M||1&r&&H!==(H=t[10].nameShort))&&p(A,"title",H),X&&X.p&&(!M||33&r)&&S(X,q,t,t[5],M?D(q,t[5],r,te):F(t[5]),re)},i(e){M||(d(C.$$.fragment,e),d(X,e),M=!0)},o(e){m(C.$$.fragment,e),m(X,e),M=!1},d(e){e&&c(r),$(C),X&&X.d(e),G=!1,g(J)}}}function ne(e){let t,r,n=[],s=new Map,h=e[0];const f=e=>e[10];for(let t=0;t<h.length;t+=1){let r=ee(e,h,t),o=f(r);s.set(o,n[t]=oe(o,r))}return{c(){t=o("ul");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=l(e,"UL",{class:!0});var r=a(t);for(let e=0;e<n.length;e+=1)n[e].l(r);r.forEach(c),this.h()},h(){p(t,"class","svelte-5gwuvl")},m(e,o){i(e,t,o);for(let e=0;e<n.length;e+=1)n[e].m(t,null);r=!0},p(e,[r]){63&r&&(h=e[0],v(),n=E(n,r,f,1,e,h,s,t,T,oe,null,ee),C())},i(e){if(!r){for(let e=0;e<h.length;e+=1)d(n[e]);r=!0}},o(e){for(let e=0;e<n.length;e+=1)m(n[e]);r=!1},d(e){e&&c(t);for(let e=0;e<n.length;e+=1)n[e].d()}}}function le(e,t,r){let{$$slots:o={},$$scope:n}=t,{data:l=[]}=t,{stopDrag:a}=t,{color:s="text-color"}=t,{hoverColor:c="grey"}=t,{hoverBackgroundColor:i="blue"}=t;return e.$$set=e=>{"data"in e&&r(0,l=e.data),"stopDrag"in e&&r(1,a=e.stopDrag),"color"in e&&r(2,s=e.color),"hoverColor"in e&&r(3,c=e.hoverColor),"hoverBackgroundColor"in e&&r(4,i=e.hoverBackgroundColor),"$$scope"in e&&r(5,n=e.$$scope)},[l,a,s,c,i,n,o,function(t){A.call(this,e,t)},async(e,t)=>await a(t,e,l),(e,t)=>G(t,e)]}class ae extends e{constructor(e){super(),t(this,e,le,ne,r,{data:0,stopDrag:1,color:2,hoverColor:3,hoverBackgroundColor:4})}}function se(e,t,r){const o=e.slice();return o[22]=t[r],o}function ce(e,t,r){const o=e.slice();return o[25]=t[r],o[26]=t,o[27]=r,o}const ie=e=>({}),he=e=>({}),fe=e=>({}),ue=e=>({slot:"leaf-icon"});function de(e){let t,r,n,s;const h=[$e,me],f=[];function u(e,t){return e[25].children&&e[25].children.length>0?0:1}return r=u(e),n=f[r]=h[r](e),{c(){t=o("li"),n.c(),this.h()},l(e){t=l(e,"LI",{class:!0});var r=a(t);n.l(r),r.forEach(c),this.h()},h(){p(t,"class","svelte-1bao88o")},m(e,o){i(e,t,o),f[r].m(t,null),s=!0},p(e,o){let l=r;r=u(e),r===l?f[r].p(e,o):(v(),m(f[l],1,1,(()=>{f[l]=null})),C(),n=f[r],n?n.p(e,o):(n=f[r]=h[r](e),n.c()),d(n,1),n.m(t,null))},i(e){s||(d(n),s=!0)},o(e){m(n),s=!1},d(e){e&&c(t),f[r].d()}}}function me(e){let t,r,n,s,h,f,u,$,g,E,N,T,A,B,x,O,j=e[25].name+"",z=!e[13]["leaf-icon"]&&ge();const H=e[14]["leaf-icon"],P=k(H,e,e[20],he),_=[ve,pe],U=[];function V(e,t){return e[25]?.isFavorite?0:e[25]?1:-1}return~(B=V(e))&&(x=U[B]=_[B](e)),{c(){t=o("div"),r=o("span"),z&&z.c(),n=y(),s=o("a"),P&&P.c(),h=y(),f=I(j),T=y(),A=o("span"),x&&x.c(),this.h()},l(e){t=l(e,"DIV",{class:!0});var o=a(t);r=l(o,"SPAN",{});var i=a(r);z&&z.l(i),n=w(i),s=l(i,"A",{class:!0,id:!0,href:!0,target:!0,title:!0});var u=a(s);P&&P.l(u),h=w(u),f=b(u,j),u.forEach(c),i.forEach(c),T=w(o),A=l(o,"SPAN",{class:!0});var d=a(A);x&&x.l(d),d.forEach(c),o.forEach(c),this.h()},h(){p(s,"class",u="leaf color-"+e[2]+" hover-color-"+e[3]+" hover-background-color-"+e[4]+" svelte-1bao88o"),p(s,"id",$=e[25].id),p(s,"href",g=e[25].url),p(s,"target",E=e[25].target??(e[25].url?.startsWith("javascript:chromeless")?"":"_blank")),p(s,"title",N=e[25].nameShort),p(A,"class","buttons svelte-1bao88o"),p(t,"class","leaf-container svelte-1bao88o")},m(e,o){i(e,t,o),L(t,r),z&&z.m(r,null),L(r,n),L(r,s),P&&P.m(s,null),L(s,h),L(s,f),L(t,T),L(t,A),~B&&U[B].m(A,null),O=!0},p(e,t){e[13]["leaf-icon"]?z&&(z.d(1),z=null):z||(z=ge(),z.c(),z.m(r,n)),P&&P.p&&(!O||1048576&t)&&S(P,H,e,e[20],O?D(H,e[20],t,ie):F(e[20]),he),(!O||1024&t)&&j!==(j=e[25].name+"")&&R(f,j),(!O||28&t&&u!==(u="leaf color-"+e[2]+" hover-color-"+e[3]+" hover-background-color-"+e[4]+" svelte-1bao88o"))&&p(s,"class",u),(!O||1024&t&&$!==($=e[25].id))&&p(s,"id",$),(!O||1024&t&&g!==(g=e[25].url))&&p(s,"href",g),(!O||1024&t&&E!==(E=e[25].target??(e[25].url?.startsWith("javascript:chromeless")?"":"_blank")))&&p(s,"target",E),(!O||1024&t&&N!==(N=e[25].nameShort))&&p(s,"title",N);let o=B;B=V(e),B===o?~B&&U[B].p(e,t):(x&&(v(),m(U[o],1,1,(()=>{U[o]=null})),C()),~B?(x=U[B],x?x.p(e,t):(x=U[B]=_[B](e),x.c()),d(x,1),x.m(A,null)):x=null)},i(e){O||(d(P,e),d(x),O=!0)},o(e){m(P,e),m(x),O=!1},d(e){e&&c(t),z&&z.d(),P&&P.d(e),~B&&U[B].d()}}}function $e(e){let t,r,n,s,h,u,$,g,E;const L=e[14].default,N=k(L,e,e[20],null),T=N||function(e){let t,r,o,n,l,a=e[25].name+"";const s=[Ce,Ee],h=[];function f(e,t){return e[25].expanded?0:1}return t=f(e),r=h[t]=s[t](e),{c(){r.c(),o=y(),n=I(a)},l(e){r.l(e),o=w(e),n=b(e,a)},m(e,r){h[t].m(e,r),i(e,o,r),i(e,n,r),l=!0},p(e,c){let i=t;t=f(e),t!==i&&(v(),m(h[i],1,1,(()=>{h[i]=null})),C(),r=h[t],r||(r=h[t]=s[t](e),r.c()),d(r,1),r.m(o.parentNode,o)),(!l||1024&c)&&a!==(a=e[25].name+"")&&R(n,a)},i(e){l||(d(r),l=!0)},o(e){m(r),l=!1},d(e){h[t].d(e),e&&c(o),e&&c(n)}}}(e);function A(){return e[15](e[25],e[26],e[27])}let B=e[25].expanded&&ke(e);return{c(){t=o("a"),T&&T.c(),h=y(),B&&B.c(),u=z(),this.h()},l(e){t=l(e,"A",{class:!0,id:!0,title:!0});var r=a(t);T&&T.l(r),r.forEach(c),h=w(e),B&&B.l(e),u=z(),this.h()},h(){p(t,"class",r="container color-"+e[2]+" hover-color-"+e[3]+" hover-background-color-"+e[4]+" svelte-1bao88o"),p(t,"id",n=e[25].id),p(t,"title",s=e[25].nameShort)},m(e,r){i(e,t,r),T&&T.m(t,null),i(e,h,r),B&&B.m(e,r),i(e,u,r),$=!0,g||(E=f(t,"click",A),g=!0)},p(o,l){e=o,N?N.p&&(!$||1048576&l)&&S(N,L,e,e[20],$?D(L,e[20],l,null):F(e[20]),null):T&&T.p&&(!$||1024&l)&&T.p(e,$?l:-1),(!$||28&l&&r!==(r="container color-"+e[2]+" hover-color-"+e[3]+" hover-background-color-"+e[4]+" svelte-1bao88o"))&&p(t,"class",r),(!$||1024&l&&n!==(n=e[25].id))&&p(t,"id",n),(!$||1024&l&&s!==(s=e[25].nameShort))&&p(t,"title",s),e[25].expanded?B?(B.p(e,l),1024&l&&d(B,1)):(B=ke(e),B.c(),d(B,1),B.m(u.parentNode,u)):B&&(v(),m(B,1,1,(()=>{B=null})),C())},i(e){$||(d(T,e),d(B),$=!0)},o(e){m(T,e),m(B),$=!1},d(e){e&&c(t),T&&T.d(e),e&&c(h),B&&B.d(e),e&&c(u),g=!1,E()}}}function ge(e){let t;return{c(){t=o("span"),this.h()},l(e){t=l(e,"SPAN",{class:!0}),a(t).forEach(c),this.h()},h(){p(t,"class","button-dummy svelte-1bao88o")},m(e,r){i(e,t,r)},d(e){e&&c(t)}}}function pe(e){let t,r;function o(){return e[19](e[25])}return t=new Z({props:{color:"gold",hoverType:"STAR_FILLED",onClick:o,size:"",type:"STAR"}}),{c(){n(t.$$.fragment)},l(e){s(t.$$.fragment,e)},m(e,o){h(t,e,o),r=!0},p(r,n){e=r;const l={};1088&n&&(l.onClick=o),t.$set(l)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){m(t.$$.fragment,e),r=!1},d(e){$(t,e)}}}function ve(e){let t,r;function o(){return e[18](e[25])}return t=new Z({props:{color:"gold",hoverType:"STAR",onClick:o,size:"",type:"STAR_FILLED"}}),{c(){n(t.$$.fragment)},l(e){s(t.$$.fragment,e)},m(e,o){h(t,e,o),r=!0},p(r,n){e=r;const l={};1152&n&&(l.onClick=o),t.$set(l)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){m(t.$$.fragment,e),r=!1},d(e){$(t,e)}}}function Ee(e){let t,r;return t=new V({props:{type:"CARET_CIRCLE_RIGHT",title:"Element einklappen"}}),{c(){n(t.$$.fragment)},l(e){s(t.$$.fragment,e)},m(e,o){h(t,e,o),r=!0},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){m(t.$$.fragment,e),r=!1},d(e){$(t,e)}}}function Ce(e){let t,r;return t=new V({props:{type:"CARET_CIRCLE_DOWN",title:"Element ausklappen"}}),{c(){n(t.$$.fragment)},l(e){s(t.$$.fragment,e)},m(e,o){h(t,e,o),r=!0},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){m(t.$$.fragment,e),r=!1},d(e){$(t,e)}}}function ke(e){let t,r;return t=new Ne({props:{items:e[25].children,clickItem:e[16],contextMenu:e[17],showBorderLeft:e[1],color:e[2],hoverColor:e[3],hoverBackgroundColor:e[4],addFav:e[6],delFav:e[7],$$slots:{"leaf-icon":[ye]},$$scope:{ctx:e}}}),{c(){n(t.$$.fragment)},l(e){s(t.$$.fragment,e)},m(e,o){h(t,e,o),r=!0},p(e,r){const o={};1024&r&&(o.items=e[25].children),256&r&&(o.clickItem=e[16]),512&r&&(o.contextMenu=e[17]),2&r&&(o.showBorderLeft=e[1]),4&r&&(o.color=e[2]),8&r&&(o.hoverColor=e[3]),16&r&&(o.hoverBackgroundColor=e[4]),64&r&&(o.addFav=e[6]),128&r&&(o.delFav=e[7]),1048576&r&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){m(t.$$.fragment,e),r=!1},d(e){$(t,e)}}}function ye(e){let t;const r=e[14]["leaf-icon"],o=k(r,e,e[20],ue);return{c(){o&&o.c()},l(e){o&&o.l(e)},m(e,r){o&&o.m(e,r),t=!0},p(e,n){o&&o.p&&(!t||1048576&n)&&S(o,r,e,e[20],t?D(r,e[20],n,fe):F(e[20]),ue)},i(e){t||(d(o,e),t=!0)},o(e){m(o,e),t=!1},d(e){o&&o.d(e)}}}function Ie(e){let t,r,o=(null==e[25].hidden||!1===e[25].hidden)&&de(e);return{c(){o&&o.c(),t=z()},l(e){o&&o.l(e),t=z()},m(e,n){o&&o.m(e,n),i(e,t,n),r=!0},p(e,r){null==e[25].hidden||!1===e[25].hidden?o?(o.p(e,r),1024&r&&d(o,1)):(o=de(e),o.c(),d(o,1),o.m(t.parentNode,t)):o&&(v(),m(o,1,1,(()=>{o=null})),C())},i(e){r||(d(o),r=!0)},o(e){m(o),r=!1},d(e){o&&o.d(e),e&&c(t)}}}function we(e){let t,r,n,s=e[22],h=[];for(let t=0;t<s.length;t+=1)h[t]=Ie(ce(e,s,t));const f=e=>m(h[e],1,1,(()=>{h[e]=null}));return{c(){t=o("ul");for(let e=0;e<h.length;e+=1)h[e].c();r=y(),this.h()},l(e){t=l(e,"UL",{class:!0});var o=a(t);for(let e=0;e<h.length;e+=1)h[e].l(o);r=w(o),o.forEach(c),this.h()},h(){p(t,"class","svelte-1bao88o"),x(t,"border-left",e[1])},m(e,o){i(e,t,o);for(let e=0;e<h.length;e+=1)h[e].m(t,null);L(t,r),n=!0},p(e,o){if(1062879&o){let n;for(s=e[22],n=0;n<s.length;n+=1){const l=ce(e,s,n);h[n]?(h[n].p(l,o),d(h[n],1)):(h[n]=Ie(l),h[n].c(),d(h[n],1),h[n].m(t,r))}for(v(),n=s.length;n<h.length;n+=1)f(n);C()}(!n||2&o)&&x(t,"border-left",e[1])},i(e){if(!n){for(let e=0;e<s.length;e+=1)d(h[e]);n=!0}},o(e){h=h.filter(Boolean);for(let e=0;e<h.length;e+=1)m(h[e]);n=!1},d(e){e&&c(t),O(h,e)}}}function be(e){let t,r,n=e[10],s=[];for(let t=0;t<n.length;t+=1)s[t]=we(se(e,n,t));const h=e=>m(s[e],1,1,(()=>{s[e]=null}));return{c(){t=o("div");for(let e=0;e<s.length;e+=1)s[e].c();this.h()},l(e){t=l(e,"DIV",{style:!0,class:!0});var r=a(t);for(let e=0;e<s.length;e+=1)s[e].l(r);r.forEach(c),this.h()},h(){B(t,"--columns-template",e[11]),p(t,"class","svelte-1bao88o"),x(t,"columns",e[5]>1)},m(e,o){i(e,t,o);for(let e=0;e<s.length;e+=1)s[e].m(t,null);r=!0},p(e,[o]){if(1062879&o){let r;for(n=e[10],r=0;r<n.length;r+=1){const l=se(e,n,r);s[r]?(s[r].p(l,o),d(s[r],1)):(s[r]=we(l),s[r].c(),d(s[r],1),s[r].m(t,null))}for(v(),r=n.length;r<s.length;r+=1)h(r);C()}(!r||2048&o)&&B(t,"--columns-template",e[11]),(!r||32&o)&&x(t,"columns",e[5]>1)},i(e){if(!r){for(let e=0;e<n.length;e+=1)d(s[e]);r=!0}},o(e){s=s.filter(Boolean);for(let e=0;e<s.length;e+=1)m(s[e]);r=!1},d(e){e&&c(t),O(s,e)}}}function Le(e,t,r){let o,{$$slots:n={},$$scope:l}=t;const a=j(n);let s,{items:c=[]}=t,{showBorderLeft:i=!0}=t,{color:h="text-color"}=t,{hoverColor:f="grey"}=t,{hoverBackgroundColor:u="blue"}=t,{columns:d=1}=t,{addFav:m}=t,{delFav:$}=t,{onClick:g=(e=>{})}=t,{onRightClick:p=((e,t)=>{})}=t,v=null;function E(e){v?.classList.remove("active"),v=document.getElementById(`${e.id}`),v?.classList.add("active")}return e.$$set=e=>{"items"in e&&r(0,c=e.items),"showBorderLeft"in e&&r(1,i=e.showBorderLeft),"color"in e&&r(2,h=e.color),"hoverColor"in e&&r(3,f=e.hoverColor),"hoverBackgroundColor"in e&&r(4,u=e.hoverBackgroundColor),"columns"in e&&r(5,d=e.columns),"addFav"in e&&r(6,m=e.addFav),"delFav"in e&&r(7,$=e.delFav),"onClick"in e&&r(8,g=e.onClick),"onRightClick"in e&&r(9,p=e.onRightClick),"$$scope"in e&&r(20,l=e.$$scope)},e.$$.update=()=>{if(32&e.$$.dirty&&r(11,o=Array.apply(null,Array(d)).map((e=>"minmax(0, 1fr)")).join(" ")),33&e.$$.dirty)if(r(10,s=[]),c&&c.length>0&&d>1){let e=0;for(let t=0;t<d;t++){let o=Math.ceil((c.length-e)/(d-t));r(10,s[t]=c.slice(e,e+o),s),e+=o}}else r(10,s[0]=c,s)},[c,i,h,f,u,d,m,$,g,p,s,o,E,a,n,(e,t,o)=>{r(10,t[o].expanded=!e.expanded,s),r(0,c=c.map((e=>e)))},e=>{E(e),g(e)},(e,t,r)=>p(e,t,r),e=>$(e),e=>m(e),l]}class Ne extends e{constructor(e){super(),t(this,e,Le,be,r,{items:0,showBorderLeft:1,color:2,hoverColor:3,hoverBackgroundColor:4,columns:5,addFav:6,delFav:7,onClick:8,onRightClick:9})}}const Re=(e,t,r=[])=>{if(e.length<=0)return r;{let[o,...n]=e;o.CHILDREN&&(o={...o,CHILDREN:Re(o.CHILDREN,t)});const l=[...r,t(o)];return Re(n,t,l)}},Se=(e,t,r=[])=>{if(e.length<=0)return r;{let[o,...n]=e;o.children&&(o={...o,children:Se(o.children,t)});const l=[...r,t(o)];return Se(n,t,l)}},Fe=(e,t,r)=>{if(t(e))return r(e),!0;if(e.children&&e.children.length>0)for(const o of e.children)if(Fe(o,t,r))return!0;return!1},De=(e,t)=>{let r=[];return e.forEach((e=>{t(e)&&r.push(e),e.children?.length>0&&(r=[...r,...De(e.children,t)])})),r},Te=(e,t)=>{if(t(e),e.children&&e.children.length>0)for(const r of e.children)Te(r,t);else if(e.CHILDREN&&e.CHILDREN.length>0)for(const r of e.CHILDREN)Te(r,t)};function Ae(e){let t,r;return t=new W({}),{c(){n(t.$$.fragment)},l(e){s(t.$$.fragment,e)},m(e,o){h(t,e,o),r=!0},p:_,i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){m(t.$$.fragment,e),r=!1},d(e){$(t,e)}}}function Be(e){let t,r,u,g,E,k,I,b,N,R,S,F,D=e[2]&&e[2].length>0&&xe();return r=new ae({props:{color:"gold",data:e[2],hoverBackgroundColor:"gold",hoverColor:"grey",stopDrag:e[5],$$slots:{"buttons-end":[Oe,({item:e})=>({13:e}),({item:e})=>e?8192:0]},$$scope:{ctx:e}}}),g=new M({props:{data:{title:"Alle meine Werkzeuge",ebene:3}}}),N=new Ne({props:{items:e[1],showBorderLeft:!1,columns:e[0]?1:2,addFav:e[3],delFav:e[4],$$slots:{"leaf-icon":[je]},$$scope:{ctx:e}}}),{c(){D&&D.c(),t=y(),n(r.$$.fragment),u=y(),n(g.$$.fragment),E=y(),k=o("div"),I=o("input"),b=y(),n(N.$$.fragment),this.h()},l(e){D&&D.l(e),t=w(e),s(r.$$.fragment,e),u=w(e),s(g.$$.fragment,e),E=w(e),k=l(e,"DIV",{class:!0});var o=a(k);I=l(o,"INPUT",{placeholder:!0,class:!0}),o.forEach(c),b=w(e),s(N.$$.fragment,e),this.h()},h(){p(I,"placeholder","Werkzeuge durchsuchen"),p(I,"class","svelte-3kvtye"),p(k,"class","formItem svelte-3kvtye")},m(o,n){D&&D.m(o,n),i(o,t,n),h(r,o,n),i(o,u,n),h(g,o,n),i(o,E,n),i(o,k,n),L(k,I),U(I,e[0]),i(o,b,n),h(N,o,n),R=!0,S||(F=f(I,"input",e[9]),S=!0)},p(e,o){e[2]&&e[2].length>0?D?4&o&&d(D,1):(D=xe(),D.c(),d(D,1),D.m(t.parentNode,t)):D&&(v(),m(D,1,1,(()=>{D=null})),C());const n={};4&o&&(n.data=e[2]),24576&o&&(n.$$scope={dirty:o,ctx:e}),r.$set(n),1&o&&I.value!==e[0]&&U(I,e[0]);const l={};2&o&&(l.items=e[1]),1&o&&(l.columns=e[0]?1:2),16384&o&&(l.$$scope={dirty:o,ctx:e}),N.$set(l)},i(e){R||(d(D),d(r.$$.fragment,e),d(g.$$.fragment,e),d(N.$$.fragment,e),R=!0)},o(e){m(D),m(r.$$.fragment,e),m(g.$$.fragment,e),m(N.$$.fragment,e),R=!1},d(e){D&&D.d(e),e&&c(t),$(r,e),e&&c(u),$(g,e),e&&c(E),e&&c(k),e&&c(b),$(N,e),S=!1,F()}}}function xe(e){let t,r;return t=new M({props:{data:{title:"Meine favorisierten Werkzeuge",ebene:3}}}),{c(){n(t.$$.fragment)},l(e){s(t.$$.fragment,e)},m(e,o){h(t,e,o),r=!0},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){m(t.$$.fragment,e),r=!1},d(e){$(t,e)}}}function Oe(e){let t,r;function o(){return e[8](e[13])}return t=new Z({props:{color:"gold",hoverType:"STAR",item:e[13],onClick:o,size:"",slot:"buttons-end",type:"STAR_FILLED"}}),{c(){n(t.$$.fragment)},l(e){s(t.$$.fragment,e)},m(e,o){h(t,e,o),r=!0},p(r,n){e=r;const l={};8192&n&&(l.item=e[13]),8192&n&&(l.onClick=o),t.$set(l)},i(e){r||(d(t.$$.fragment,e),r=!0)},o(e){m(t.$$.fragment,e),r=!1},d(e){$(t,e)}}}function je(e){let t,r,f;return r=new V({props:{type:"LINK"}}),{c(){t=o("span"),n(r.$$.fragment),this.h()},l(e){t=l(e,"SPAN",{slot:!0});var o=a(t);s(r.$$.fragment,o),o.forEach(c),this.h()},h(){p(t,"slot","leaf-icon")},m(e,o){i(e,t,o),h(r,t,null),f=!0},p:_,i(e){f||(d(r.$$.fragment,e),f=!0)},o(e){m(r.$$.fragment,e),f=!1},d(e){e&&c(t),$(r)}}}function ze(e){let t,r,n,s,h,f,u,$,g,E,k;const I=[Be,Ae],b=[];function N(e,t){return e[1]?0:1}return g=N(e),E=b[g]=I[g](e),{c(){t=o("main"),r=o("script"),s=y(),h=o("div"),f=o("div"),u=o("section"),$=o("div"),E.c(),this.h()},l(e){t=l(e,"MAIN",{class:!0});var o=a(t);r=l(o,"SCRIPT",{src:!0}),a(r).forEach(c),s=w(o),h=l(o,"DIV",{class:!0});var n=a(h);f=l(n,"DIV",{class:!0});var i=a(f);u=l(i,"SECTION",{class:!0});var d=a(u);$=l(d,"DIV",{class:!0});var m=a($);E.l(m),m.forEach(c),d.forEach(c),i.forEach(c),n.forEach(c),o.forEach(c),this.h()},h(){H(r.src,n="/static/js/chromeless.js?v=202")||p(r,"src","/static/js/chromeless.js?v=202"),p($,"class","main-column"),p(u,"class","columns content svelte-3kvtye"),p(f,"class","content-wrapper svelte-3kvtye"),p(h,"class","main-content svelte-3kvtye"),p(t,"class","container")},m(e,o){i(e,t,o),L(t,r),L(t,s),L(t,h),L(h,f),L(f,u),L(u,$),b[g].m($,null),k=!0},p(e,[t]){let r=g;g=N(e),g===r?b[g].p(e,t):(v(),m(b[r],1,1,(()=>{b[r]=null})),C(),E=b[g],E?E.p(e,t):(E=b[g]=I[g](e),E.c()),d(E,1),E.m($,null))},i(e){k||(d(E),k=!0)},o(e){m(E),k=!1},d(e){e&&c(t),b[g].d()}}}const He="/PtWeb/api/mypt/meinewerkzeuge";function Pe(e,t,r){let o,n="",{dataUrl:l="/PtWeb/api/mypt/werkzeuge"}=t,a=[],s=[];const c=e=>({id:e.REIHENFOLGE,name:e.FUNBESCHREIBUNG,nameShort:e.FUNNAME,url:e.WOHIN,target:e.FUNTARGET,expanded:!1,isFavorite:e.INFAVORITES_JN,favoriteOrder:e.FAVORITES_RNR,children:e.CHILDREN}),i=async e=>{await K("DELETE",He+"/"+e.nameShort).then((async()=>{e.isFavorite=!1,r(1,s=Se(s,(e=>e))),await h()}))},h=async()=>{let e=[];o.forEach(((t,r)=>{t.isFavorite&&(t.favoriteOrder=r,e.push({name:t.nameShort,rnr:r}))})),await K("POST",He+"/order",JSON.stringify({meineWerkzeuge:e}))};P((async()=>{await(async()=>{r(7,a=await K("GET",l))})()}));return e.$$set=e=>{"dataUrl"in e&&r(6,l=e.dataUrl)},e.$$.update=()=>{if(129&e.$$.dirty){let e=[];a.length>0&&(e=a[0].CHILDREN[0].CHILDREN,e=Re(e.filter((e=>e.LEVELX>2)),c));const t=e=>{if(null==e.hidden||null==e.hidden)if(n){const t=Fe(e,(e=>e.name&&e.name.toLowerCase().includes(n.toLowerCase())),(e=>Te(e,(e=>e.hidden=!1))));e.hidden=!t,e.expanded=t}else e.hidden=!1};for(let r of e)t(r),r.children&&r.children.length>0&&Te(r,t);r(1,s=e)}2&e.$$.dirty&&r(2,o=De(s,(e=>e.isFavorite)).sort(((e,t)=>e.favoriteOrder>t.favoriteOrder?1:t.favoriteOrder>e.favoriteOrder?-1:0)))},[n,s,o,async e=>{await K("POST",He,JSON.stringify({name:e.nameShort})).then((t=>{e.isFavorite=!0,e.favoriteOrder=t,r(1,s=Se(s,(e=>e)))}))},i,async(e,t,n)=>{r(2,o=[...J(e,t,n)]),await h()},l,a,e=>i(e),function(){n=this.value,r(0,n)}]}class _e extends e{constructor(e){super(),t(this,e,Pe,ze,r,{dataUrl:6})}}export{_e as default};