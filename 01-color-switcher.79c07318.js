const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),a=document.body;let d;e.addEventListener("click",(()=>{d=setInterval((()=>{a.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),e.disabled=!0})),t.addEventListener("click",(()=>{clearInterval(d),e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.79c07318.js.map
