let Comodines = {

    items : ['A','B','C','D'],

    cincuenta_cincuenta(pregunta){
        
        let nuevas_opciones   = [] 
        let respuesta         = pregunta.respuesta
        let encabezado        = pregunta.encabezado
        let opciones_pregunta = pregunta.opciones
            
        let correcta          = opciones_pregunta.splice(respuesta,1)[0]
        let incorrectas       = opciones_pregunta
       
        let i                 = Aleatorio.generar_indice(0,(incorrectas.length-1))
        let opcion_incorrecta = incorrectas[i]
        
        let nueva_respuesta   = Aleatorio.generar_indice(0,1)

        if(nueva_respuesta) {
             nuevas_opciones = [opcion_incorrecta,correcta]
        }else{
            nuevas_opciones = [correcta,opcion_incorrecta]
        }
        return nuevas_opciones

    },

    ayuda_publico(pregunta){
        
        let index             = pregunta.respuesta
        let opciones_pregunta = pregunta.opciones
        let[min,max]          = [10,100]
        
        let data              = [
            Aleatorio.generar_indice(min,max),
            Aleatorio.generar_indice(min,max),
            Aleatorio.generar_indice(min,max),
            Aleatorio.generar_indice(min,max)
        ]
        let new_data            = []
        let mayor               = Math.max(...data)
        let lugar               = data.indexOf(mayor)  
        let correcta            = this.items[index]
        data.splice(lugar,1)
        new_data = [...data]
        new_data.splice(index,1,mayor)
        return new_data
    },

    llamada_computadora(pregunta){
        Object.assign($('.panel__llamada'), __$extend)
        $('.panel__llamada').css({display:'block'}) 
        let template =`<i class="fa fa-commenting" aria-hidden="true"></i> ... <b>LA RESPUESTA CORRECTA ES LA ${this.items[pregunta.respuesta]}</b>`
        $('.respuesta__llamada').innerHTML = template

        //l(`la rspuesta correcta es la ${this.items[pregunta.respuesta]}`)
    },

}