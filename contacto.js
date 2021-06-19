(function hamburger(){
    const elAbreVentana = document.querySelector(".abre-ventana")
    const elCierraVentana = document.querySelector(".ventana__cierra-ventana")
    const ventana = document.querySelector(".ventana")
    
    elAbreVentana.addEventListener("click", ()=>{
        ventana.style.display = "inherit"
    });
    elCierraVentana.addEventListener("click", ()=>{
        ventana.style.display = "none"
    });
})();