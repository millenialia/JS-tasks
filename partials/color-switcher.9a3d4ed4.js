!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body"),a=null;t.addEventListener("click",(function(d){t.disabled=!0,e.disabled=!1,a=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(n){t.disabled=!1,e.disabled=!0,clearInterval(a)})),e.disabled=!0}();
//# sourceMappingURL=color-switcher.9a3d4ed4.js.map
