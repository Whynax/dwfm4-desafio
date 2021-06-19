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

function addPortfolioCard(params = {}){
    const template = document.querySelector("#portfolio-template")
    const container = document.querySelector(".portfolio-card")

    template.content.querySelector(".portfolio__title").textContent = params.title;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getDataPortfolio(){
    return fetch("https://cdn.contentful.com/spaces/u2j9rniq45id/environments/master/entries?access_token=4mdOMRoLGl6Gtsxw5x2Zqkg7hqVkih6jPwrYzRr7-5Y&content_type=portfolio"
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
    getDataPortfolio().then(function(data){
        for(const d of data){
            addPortfolioCard(d);
        }
    });
})();