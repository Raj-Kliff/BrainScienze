/*! For license information please see 753.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[753],{74753:(n,e,i)=>{i.r(e),i.d(e,{mdTransitionAnimation:()=>a});var t=i(35980),o=i(31779);const a=(n,e)=>{var i,a,r;const l="40px",s="back"===e.direction,d=e.enteringEl,c=e.leavingEl,u=(0,o.g)(d),m=u.querySelector("ion-toolbar"),b=(0,t.c)();if(b.addElement(u).fill("both").beforeRemoveClass("ion-page-invisible"),s?b.duration((null!==(i=e.duration)&&void 0!==i?i:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):b.duration((null!==(a=e.duration)&&void 0!==a?a:0)||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform",`translateY(${l})`,"translateY(0px)").fromTo("opacity",.01,1),m){const n=(0,t.c)();n.addElement(m),b.addAnimation(n)}if(c&&s){b.duration((null!==(r=e.duration)&&void 0!==r?r:0)||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const n=(0,t.c)();n.addElement((0,o.g)(c)).onFinish((e=>{1===e&&n.elements.length>0&&n.elements[0].style.setProperty("display","none")})).fromTo("transform","translateY(0px)",`translateY(${l})`).fromTo("opacity",1,0),b.addAnimation(n)}return b}}}]);