function headerComponent(el){
    const headerEl = document.createElement("div")

    headerEl.innerHTML = `
    <header class="header">
            <a href="./index.html">
                <img class="header__logo" src="./imgs/ANVORGUESA.png">
            </a>
            <button class="abre-ventana">
                <i class="fas fa-bars"></i>
            </button>
            <div class="ventana">
                <div class="ventana__button-container">
                    <button class="ventana__cierra-ventana">
                    <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="ventana__contenido">
                    <a href="portfolio.html" class="nav">Portfolio</a>
                    <a href="servicios.html" class="nav">Servicios</a>
                    <a href="contacto.html" class="nav">Contacto</a>
                </div>
            </div>
            <div class="nav-ul">
                <a href="portfolio.html" class="nav">Portfolio</a>
                <a href="servicios.html" class="nav">Servicios</a>
                <a href="contacto.html" class="nav">Contacto</a>
            </div>
        </header>
    `
    el.appendChild(headerEl)
}
function header(){

    const headerContainer = document.querySelector(".header-container")
    headerComponent(headerContainer);
}
header();
