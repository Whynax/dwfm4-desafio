function footerComponent(el){
    const footerEl = document.createElement("div")

    footerEl.innerHTML = `
    <div class="footer">
        <img src="imgs/ANVORGUESA.png" alt="logo" class="logo-footer">
        <div class="redes">
            <div class="instagram">
                <p class="nombre-redes">Instagram</p>
                <img src="imgs/instagram.png" alt="" class="ig">
            </div>
            <div class="linkedin">
                <p class="nombre-redes">Linkedin</p>
                <img src="imgs/linkedin.png" alt="">
            </div>
            <div class="github">
                <p class="nombre-redes">Github</p>
                <img src="imgs/git.png" alt="">
            </div>
        </div>
    </div>
    `

    el.appendChild(footerEl)
}

function footer(){

    const footerContainer = document.querySelector(".footer-container")
    footerComponent(footerContainer);
}
footer();
