import{_ as w,r as u,o as _,j as b,a as x,b as y,c as g,d as W,e as h,k,l as E,g as v,p as H,m as C}from"./index83021.js";const A=i=>(H("data-v-423171ae"),i=i(),C(),i),M=A(()=>h("span",null,"Contactez-moi !",-1)),B=[M],I={__name:"ElusiveView",setup(i){const l=u({x:0,y:0}),r=u(null),t=u(null),m=u(!1),p=()=>{if(!t.value)return{buttonWidth:0,buttonHeight:0};const e=t.value.offsetWidth||0,n=t.value.offsetHeight||0;return{buttonWidth:e,buttonHeight:n}},f=()=>{const{buttonWidth:e,buttonHeight:n}=p(),{containerWidth:c,containerHeight:d}=v(r),a=(c-e)/2,s=(d-n)/2;return{x:a,y:s}},o=()=>{const{containerWidth:e,containerHeight:n}=v(r),{buttonWidth:c,buttonHeight:d}=p();let a=Math.random()*(e-c)+1,s=Math.random()*(n-d)+1;a<=0&&(a=1),s<=0&&(s=1),t.value.style=`transform: translate(${a}px, ${s}px);`,t.value.innerText="Nope. No way, Jose! 😏 "};return _(()=>{m.value=b().viewportWidth<768,l.value=f(),window.addEventListener("mousemove",o),window.addEventListener("touchmove",o)}),x(()=>{r.value=null,t.value=null}),y(()=>{window.removeEventListener("mousemove",o),window.addEventListener("touchmove",o)}),(e,n)=>(g(),W("div",{id:"main-container",class:E(["md:p-4",{"mobile-margin-top":m.value}]),ref_key:"mainContainerToRunAway",ref:r,onMousemove:o},[h("button",{ref_key:"buttonRunAway",ref:t,style:k({left:`${l.value.x}px`,top:`${l.value.y}px`}),class:"absolute text-base font-medium py-4 px-6 bg-teal-500 dark:bg-emerald-400 text-white dark:text-slate-800 rounded-md cursor-pointer transition ease-in-out"},B,4)],34))}},R=w(I,[["__scopeId","data-v-423171ae"]]);export{R as default};
