
let Rutas = {
    
    url : {
        inicio : '../Inicio/inicio.html',
        principal : '../Principal/principal.html',
    
    },

    ir(url){
        let{inicio,principal} = this.url
        url = (url === 'principal')
            ? window.location.replace(principal)
            : window.location.replace(inicio) 
        return url    
    },
}