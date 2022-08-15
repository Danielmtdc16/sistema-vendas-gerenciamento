const width = window.innerWidth

function menu(Estado){
    const Lista = document.createElement('ul')

    const linha1 = document.createElement('li')
    const linha2 = document.createElement('li')

    const link1 = document.createElement('a')
    const link2 = document.createElement('a')

    const div = document.createElement('div');

    const nav = document.querySelector('nav')

    if(Estado === true){
        div.classList.add('active')

        nav.prepend(div)

        div.prepend(Lista)
        Lista.prepend(linha1)
        linha1.append(link1)
        link1.append("CARDÁPIO")
        Lista.append(linha2)
        link2.append("PROMOÇÕES")
        linha2.append(link2)

    }else if(Estado === false){
        console.log("tela maior que 850 px")
    }

}


if(width > 850){
    menu(false)
}else if(width <= 850){
    menu(true)
}


