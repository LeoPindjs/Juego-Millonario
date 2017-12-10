let Aleatorio = {

    generar_indice(m=0,n=10){
        let[min,max] = [m,n]
        return Math.round(Math.random() * (max-min) + min)
    },
}
