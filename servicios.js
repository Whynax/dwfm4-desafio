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

function addServiciosCard(params = {}){
    const template = document.querySelector("#servicios-template")
    const container = document.querySelector(".servicios-card")

    template.content.querySelector(".servicios__title").textContent = params.title;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getDataServicios(){
    return fetch("https://cdn.contentful.com/spaces/u2j9rniq45id/environments/master/entries?access_token=4mdOMRoLGl6Gtsxw5x2Zqkg7hqVkih6jPwrYzRr7-5Y&content_type=services"
    ).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        const fieldsCollection = data.items.map((item)=>{
            return {
                title: item.fields.title
            }
        });
        return fieldsCollection;
    })
}

(function data(){
    getDataServicios().then(function(data){
        for(const d of data){
            addServiciosCard(d);
        }
    });
})();