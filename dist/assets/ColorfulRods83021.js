import{_,r as F,o as f,n as p,w as v,a as A,b as E,c as a,d as l,e as h,F as R,f as y,g as D,h as B,i as k}from"./index83021.js";const w={id:"rods-container"},b={__name:"ColorfulRods",setup(x){const c=[["#22577A","#38A3A5","#57CC99","#80ED99","#C7F9CC"],["#03045E","#0077B6","#00B4D8","#90E0EF","#CAF0F8"],["#3C096C","#5A189A","#7B2CBF","#9D4EDD","#C77DFF"],["#800F2F","#A4133C","#C9184A","#FF4D6D","#FF758F"],["#FF0A54","#FF477E","#FF5C8A","#FF99AC","#F7CAD0"],["#FFF75E","#FFF056","#FFE94E","#FECF3E","#FDB833"]],d=F([]),t=F(null);let r=0;const u=()=>{const o=c[r];return k(o)},n=o=>{const s=u();o.target.style.backgroundColor=s},i=()=>{const{containerWidth:o}=D(t);return Math.floor((o-24)/11)},e=()=>{i()<1||(d.value=Array(i()).fill(null))};let C;return f(async()=>{await p(),e(),window.addEventListener("resize",e),C=v(()=>B.sidebarToggled,e),setInterval(()=>{r=(r+1)%c.length},3e3)}),A(()=>{t.value=null,C()}),E(()=>{window.removeEventListener("resize",e)}),(o,s)=>(a(),l("div",{id:"main-container",ref_key:"mainRodsContainer",ref:t},[h("div",w,[(a(!0),l(R,null,y(d.value,(m,g)=>(a(),l("div",{key:g,class:"rod-activity bg-gray-200 dark:bg-slate-800",onMouseover:n,onTouchstart:n,onTouchmove:n},null,32))),128))])],512))}},N=_(b,[["__scopeId","data-v-b6a1c8f5"]]);export{N as default};
