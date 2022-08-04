let ligado = false

function syncDelay(milliseconds){
    let start = new Date().getTime();
    let end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
   }

function Menu(){
    const Mobile = document.getElementById("Mobile")
    if(ligado === false){
        Mobile.style.animation = "mostrar 1s"
        Mobile.style.display = "flex"
        Mobile.style.marginLeft = "-5%"

        
        ligado = true
    }else if(ligado === true){
        Mobile.style.animation = "esconder 1s"
        Mobile.style.marginLeft = "-55%"

        ligado = false 
    }

}


function acessar(){
    window.location.replace("pagamento.html")
}