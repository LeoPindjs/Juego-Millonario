
let Graficas = {

    crear_contexto(){
        let elemento_dom = 'panel__grafico'
        return document.getElementById(elemento_dom).getContext('2d')
    },

    configurar_data_grafico(comodin_ayuda=[20,20,20,20]){
        return {
            labels   : ['A','B','C','D'],
            datasets : [
                {   label : 'Votos',
                    data  : comodin_ayuda,
                    backgroundColor :['#00bcd4','#76ff03','#00e676','#ff1744'],
                },
            ],
        }
    },

    configurar_opciones_grafico(){
        return {
            title : {
                display:true,
                text:'RESPUESTAS SUGERIDA POR EL PÚBLICO',
                fontSize:25,
                fontColor:'white'
            },
            legend:{
                display:true,
                responsive:true,
                labels:{
                    fontColor:'#fff',
                },
            },
        }
    },

    graficar_resultados(comodin_ayuda=[20,20,20,20]){
        
        let contexto = this.crear_contexto()
        let obj = {
            type    : 'bar',
            data    : this.configurar_data_grafico(comodin_ayuda),
            options : this.configurar_opciones_grafico(),
        }
        Chart.defaults.global.defaultFontColor = '#fff';
        Chart.defaults.global.defaultFontSize = 18;
        let mi_grafico = new Chart(contexto,obj) 
    
    },
}