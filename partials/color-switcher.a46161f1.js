const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.querySelector("body");let a=null;t.addEventListener("click",(function(n){t.disabled=!0,e.disabled=!1,a=setInterval((()=>{d.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),e.addEventListener("click",(function(d){t.disabled=!1,e.disabled=!0,clearInterval(a)})),e.disabled=!0;
//# sourceMappingURL=color-switcher.a46161f1.js.map
