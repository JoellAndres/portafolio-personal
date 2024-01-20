const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
           entry.target.style.opacity = '1'
        }
    })
}, {

    threshold: 0.4
})




const secciones = document.querySelectorAll('.sec')
secciones.forEach(valor => {
    observador.observe(valor)
    
});
