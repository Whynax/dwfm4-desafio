function contactoComponent(el){
    const componentEl = document.createElement("div")

    componentEl.innerHTML = `
    <div class="form">
            <h2 class="form__title">Contacto</h2>
            <div class="form-content">
                <label class="form__label" for="Nombre">NOMBRE</label>
                <input class="form__input" id="Nombre" type="text">
                <label class="form__label" for="Email">EMAIL</label>
                <input class="form__input" id="Email" type="text">
                <label class="form__label" for="message">MENSAJE</label>
                <textarea class="form__textarea" id="message"></textarea>
                <div class="button-section">
                    <button class="button-form">Enviar</button>
                </div>
            </div>
        </div>
    `
    el.appendChild(componentEl)
}
function form(){

    const container = document.querySelector(".form-container")
    contactoComponent(container);
}
form();
