import{c as o,d as r,e as _,_ as p,r as m,o as v,b as f,F,f as g,q as x,i as k,k as y}from"./index-kASZgJRw.js";const w={class:"z-50 text-sm font-medium text-gray-400 dark:text-gray-600 bg-white dark:bg-slate-800 p-3 hover:bg-teal-500 hover:text-white rounded-full transition duration-150 ease-in-out cursor-pointer flex items-center justify-center border border-gray-400 dark:border-gray-600 hover:border-white"},b={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.3",stroke:"currentColor",class:"size-6"},M=["d"],C={__name:"ButtonRounded",props:{svgPath:{String,required:!0}},setup(c){const a=c;return(n,d)=>(o(),r("button",w,[(o(),r("svg",b,[_("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:a.svgPath},null,8,M)]))]))}},S={class:"mondrian-container"},$={__name:"MondrianFrames",setup(c){const a=m(null),n=m([]),d=["#FF0000","#FFFF00","#0000FF","#FFFFFF","#000000"],s=(l=2)=>{n.value=[];for(let t=0;t<5;t++){const e=k(d),i=Math.floor(Math.random()*l+1),h=Math.floor(Math.random()*l+1);n.value.push({colSpan:h,rowSpan:i,delay:t,color:e})}};let u;return v(()=>{s(2),u=setInterval(()=>{s(2)},4e3)}),f(()=>{n.value=[],a.value=null,clearInterval(u)}),(l,t)=>(o(),r("div",{id:"main-container",ref_key:"mainFrameContainer",ref:a,class:"min-h-full max-h-full flex justify-center flex-col items-center"},[_("div",S,[(o(!0),r(F,null,g(n.value,(e,i)=>(o(),r("div",{key:i,class:"mondrian__frame",style:y({gridRow:`span ${e.rowSpan}`,gridColumn:`span ${e.colSpan}`,backgroundColor:e.color,AnimationDelay:`${e.delay*.1}s`})},null,4))),128))]),x(C,{onClick:t[0]||(t[0]=e=>s(2)),svgPath:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99",class:"flex mx-auto my-5"})],512))}},I=p($,[["__scopeId","data-v-ff238e2d"]]);export{I as default};
