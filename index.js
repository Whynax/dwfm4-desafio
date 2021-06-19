function addServiceCard(params = {}){
    const template = document.querySelector("#service-template")
    const container = document.querySelector(".service-card")

    template.content.querySelector(".content__title").textContent = params.title;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getData(){
    return fetch("https://cdn.contentful.com/spaces/zxvqqeqs8j3l/environments/master/entries?access_token=3NGwvvOOY4pldIFKNErMi5ykmhnbGbWxGiKBGSipBTo"
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
    getData().then(function(data){
        for(const d of data){
            addServiceCard(d);
        }
    });
})();

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

(function contacto(){
    const formEl = document.querySelector(".form")
    formEl.addEventListener("submit",(e)=>{
        e.preventDefault();
        console.log("se envio");

        async function postData(url = 'https://apx-api.vercel.app/api/utils/dwf',data = {
            to:"aguustinsalazar@gmail.com",
            message:"hola"
       }) {
            const respuesta = await fetch('https://apx-api.vercel.app/api/utils/dwf', {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
            return respuesta.json();
          }
          
          postData('https://apx-api.vercel.app/api/utils/dwf')
            .then(data => {
              console.log(data);
            });
    })
})();
