//Selecciono las etiquetas <a> del header
const navegacion = document.querySelectorAll('#barraNavegacion a')

//Agrego el evento a los links de la barra navegadora
navegacion.forEach(valor => {        

    //Cambio el color cuando pisa el mouse
    valor.addEventListener('mouseenter', () => {
        valor.style.color = '#66CCCC'
    })

    //Vuelve al color original cuando sale el mouse
    valor.addEventListener('mouseout', () => {
        valor.style.color = '#009999'
    })
})

const luna = document.querySelector('.fila .colPresentacion p')
console.log(luna.style.width)