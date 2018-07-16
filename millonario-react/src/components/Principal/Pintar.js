
let Pintar = {

    ocultar_opciones(nuevas_opciones){
        let items = [...d.querySelectorAll('li.item__pregunta')]
        let op1 = nuevas_opciones[0]
        let op2 = nuevas_opciones[1]
        for(let i = 0 ; i < items.length ; i++){
            let item = items[i]
            if (item.dataset.e !== op1 && item.dataset.e !== op2 ){
                item.style.visibility = 'hidden'
                item.setAttribute('disabled',true) 
            }
        }
    },   

    pintar_encabezado(encabezado_pregunta = 'encabezado de la pregunta'){
        let encabezado        = $('.panel__encabezado')
        encabezado.innerHTML  = `<h2>${encabezado_pregunta}</h2>` 
    },

    pintar_opciones(opciones_pregunta = ['A','B','C','D']){
        
        let i             = 0
        let items         = ['A','B','C','D']
        let plantilla_1   = ''
        let plantilla_2   = ''
        let item_opciones_izquierda = $('.item__opciones__izquierda')
        let item_opciones_derecha   = $('.item__opciones__derecha')
        
        for(opcion of opciones_pregunta){

            if(i<=1){
                plantilla_1 +=`<li 
                class = 'item__pregunta'
                data-o = '${i}'
                data-e = '${opcion}'><i>${items[i]} - ${opcion}</i></li>` 
                item_opciones_izquierda.innerHTML= plantilla_1
            }else{
                plantilla_2 +=`<li 
                class = 'item__pregunta'
                data-o = '${i}'
                data-e = '${opcion}'><i>${items[i]} - ${opcion}</i></li>` 
                item_opciones_derecha.innerHTML = plantilla_2  
            }
                 
            i++ 
        }
    },

    pintar_pregunta(pregunta){
        
        let encabezado_pregunta = pregunta.encabezado
        let opciones_pregunta   = pregunta.opciones

        //let opciones_pregunta   = cincuenta

        this.pintar_encabezado(encabezado_pregunta)
        this.pintar_opciones(opciones_pregunta)   
    },

}