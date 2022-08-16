!function(){const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.body;let d;t.addEventListener("click",(()=>{d=setInterval((()=>{a.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.disabled=!0})),e.addEventListener("click",(()=>{clearInterval(d),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.81ffe3e8.js.map
