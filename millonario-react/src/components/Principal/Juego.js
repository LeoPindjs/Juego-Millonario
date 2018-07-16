let PreguntasCobre = [
    {
        id: uuid.v1(),
        index : 0,
        encabezado : 'De qué color es el cobre?',
        opciones : [
            'Dorado',
            'Rogizo',
            'Plateado',
            'Negro',
        ],
        respuesta : 1,
        seleccionada : false,
    },
    {   
        id: uuid.v1(),
        index : 1,
        encabezado : 'Que permite conducir el cobre más fácilmente?',
        opciones : [
            'Sonido',
            'Vibraciones',
            'Electricidad',
            'Luz',
        ],
        respuesta : 2,
        seleccionada : false,
    },
    {
        id: uuid.v1(),
        index : 2,
        encabezado : 'Cómo se llama el proceso mediante el cual se reduce las rocas  a un tamaño de 1,5 pulgadas?',
        opciones : [
            'Changado',
            'Pulverización',
            'Sedimentación',
            'Compresión',
        ],
        respuesta: 0,
        seleccionada : false,
    },
    {
        id: uuid.v1(),
        index : 3,
        encabezado : 'Cómo se llama  el proceso mediante el cual a las rocas se le agrega una solución de agua y ácido sulfúrico? ',
        opciones : [
            'Flotación',
            'Fundición',
            'Lixiviación',
            'Ninguna de las anteriores',
        ],
        respuesta: 2,
        seleccionada : false,
    },
	{
        id: uuid.v1(),
        index : 4,
        encabezado : 'La etapa donde se genera espuma y cuyas burbujas atrapan el cobre y otros minerales se llama?  ',
        opciones : [
            'Fundición',
            'Flotación',
            'Destilación',
            'Exfoliación',
        ],
        respuesta: 1,
        seleccionada : false,
    },
	{
        id: uuid.v1(),
        index : 5,
        encabezado : 'Cuando el cobre concentrado seco se trata a grandes temperaturas se llama?  ',
        opciones : [
            'Fundición',
            'Ebullición',
            'Calorificación',
            'Proceso isotérmico',
        ],
        respuesta: 0,
        seleccionada : false,
    },
	{
        id: uuid.v1(),
        index : 6,
        encabezado : 'El proceso donde se reducen las partículas hasta obtener un tamaño máximo de 180 micrones se llama?  ',
        opciones : [
            'Pulverización',
            'Petrificación',
            'Reducción',
            'Molienda',
        ],
        respuesta: 3,
        seleccionada : false,
    },
	{
        id: uuid.v1(),
        index : 7,
        encabezado : 'Por ser maleable y dúctil, el cobre se usa en la fabricación de?  ',
        opciones : [
            'Fibra óptica',
            'Collares',
            'Alambres',
            'Antenas de TV',
        ],
        respuesta: 2,
        seleccionada : false,
    },
	{
        id: uuid.v1(),
        index : 8,
        encabezado : 'El sulfato de cobre se usa para eliminar el?',
        opciones : [
            'Moho',
            'Óxido',
            'Termitas',
            'Corrosión',
        ],
        respuesta: 0,
        seleccionada : false,
    },
	{
        id: uuid.v1(),
        index : 9,
        encabezado : 'El cobre se utiliza para acuñar?',
        opciones : [
            'Anillos',
            'Tuercas',
            'Collares',
            'Monedas',
        ],
        respuesta: 3,
        seleccionada : false,
    },
	{
        id: uuid.v1(),
        index : 10,
        encabezado : 'Con que mineral se combina el cobre para  hacer un material resistente a la corrosión?',
        opciones : [
            'Cromo',
            'Níquel',
            'Acero',
            'Plata',
        ],
        respuesta: 1,
        seleccionada : false,
    },
	{
        id: uuid.v1(),
        index : 11,
        encabezado : 'El cobre se utiliza en la agricultura como?',
        opciones : [
            'Abono',
            'Fertilizante',
            'Fingicida',
            'Ninguna de las anteriores',
        ],
        respuesta: 2,
        seleccionada : false,
    },
	{
        id: uuid.v1(),
        index : 12,
        encabezado : 'El cobre como bactericida elimina las?',
        opciones : [
            'Bacterias',
            'Manchas',
            'Plagas',
            'Ninguna de las anteriores',
        ],
        respuesta: 0,
        seleccionada : false,
    },
	{
        id: uuid.v1(),
        index : 13,
        encabezado : 'Cuál es el primer país productor de cobre  en el mundo?',
        opciones : [
            'Ecuador',
            'Japón',
            'Perú',
            'Chile',
        ],
        respuesta: 3,
        seleccionada : false,
    },
	{
        id: uuid.v1(),
        index : 14,
        encabezado : 'En donde se encuentra la mina de cobre más grande a cielo abierto?',
        opciones : [
            'Talca',
            'Temuco',
            'Antofagasta',
            'Pascua',
        ],
        respuesta: 2,
        seleccionada : false,
    }	
]

let Juego = {

    clicks: 0,
    aciertos: 0,
    flag: 0,
    total:PreguntasCobre.length,//array de totales
    cobre: PreguntasCobre, //array de preguntas
    
    ok(){
       Object.assign($('.panel__aciertos'), __$extend)
       $('.panel__aciertos').css({display:'block'}) 
        let template =`<i class="fa fa-thumbs-up" aria-hidden="true"></i><b>  GENIAL TIENES ${++this.aciertos} ACIERTO/(S) </b>`
        $('.total__aciertos').innerHTML = template
        //l(this.aciertos)
    },

    puntos(){
        return (this.aciertos / Preguntas.length)*100
    },

    termino(){
        Object.assign($('.container'), __$extend)
        Object.assign($('.msg__end'), __$extend)
        //d.body.style.backgroundImage = 'url("../img/millonario_2.jpg")'
        $('.container').css({display:'none'})
        $('.msg__end').css({display:'block'})
    },

    crear_audio(attr){
        let {tipo,id,src} = attr
        let el = d.createElement(tipo)
        el.setAttribute("id",id)
        el.setAttribute("src",src)
        d.body.appendChild(el)
        d.getElementById(id).play()
    },

    detener_audio(attr){
        let {tipo,id,src} = attr
        let el = d.createElement(tipo)
        el.setAttribute("id",id)
        el.setAttribute("src",src)
        d.body.appendChild(el)
        d.getElementById(id).pause()
    },

    validar_opcion(label, o, pregunta) {

        Object.assign(label, __$extend)
        Object.assign($('.btn__siguiente'), __$extend)
        Object.assign($('.ayuda__publico'), __$extend)
        Object.assign($('.panel__llamada'), __$extend)
        Object.assign($('.panel__aciertos'), __$extend)

        if (pregunta.respuesta === o) {
            this.ok()
            this.detener_audio({
                tipo:'Audio',
                id:'reloj',
                src:'../audios/reloj.mp3',
            })
            this.crear_audio({
                tipo:'Audio',
                id:'ok',
                src:'../audios/correcta.mp3',
            })
            label.addClass(['ok'])
            $('.panel__llamada').css({display: 'none'})
            //$('.panel__aciertos').css({display:'none'})
            $('.btn__siguiente').css({display: 'block'})

            if (this.flag === 0) {
                $('.btn__siguiente').addEventListener('click', () => {
                    $('.ayuda__publico').css({ display: 'none' })
                    $('.panel__aciertos').css({display:'none'})
                    this.crear_audio({
                        tipo:'Audio',
                        id:'siguiente',
                        src:'../audios/siguiente.mp3',
                    })
                    this.clicks = 0
                    this.rutina(this.generador)
                    this.flag++
                    $('.btn__siguiente').css({display: 'none'})
                })
            }

        }else{
             this.crear_audio({
                tipo:'Audio',
                id:'nok',
                src:'../audios/incorrecta.mp3',
            })
            label.addClass(['nok'])
            setTimeout(() => Rutas.ir('inicio'), 5000)
        }
    },

    eventos_click_por_opciones(label_opciones, pregunta) {
        label_opciones.forEach(label => {
            label.addEventListener('click', () => {
                let o = parseInt(label.dataset.o)
                while (this.clicks === 0) {
                    this.validar_opcion(label, o, pregunta)
                    this.clicks++
                }
            })
        })
    },

    *generador() {

        //let this.preguntas = Preguntas
        let seleccionadas = []
        let restantes = []

        while (this.cobre.length > 0) {

            let index = Aleatorio.generar_indice(0, (this.cobre.length) - 1)
            let pregunta = this.cobre[index]
            //l(this.cobre)
            seleccionadas.push(pregunta)
            this.cobre.splice(index, 1)
            restantes = [...this.cobre]
            yield pregunta

        }

    },

    handler_cincuenta() {
        Juego.crear_audio({
            tipo: 'Audio',
            id: 'reloj',
            src: '../audios/reloj.mp3',
        })
        let comodin_cincuenta = Comodines.cincuenta_cincuenta(preg)
        Pintar.ocultar_opciones(comodin_cincuenta)
        $('#btn__cincuenta').classList.toggle('usado')
        $('#btn__cincuenta').setAttribute('disabled', true)
    },

    handler_ayuda(){
        Juego.crear_audio({
            tipo: 'Audio',
            id: 'reloj',
            src: '../audios/reloj.mp3',
        })
        Object.assign($('.ayuda__publico'), __$extend)

        $('.ayuda__publico').css({ display: 'block' })
        $('#btn__publico').classList.toggle('usado')
        $('#btn__publico').setAttribute('disabled', true)

        let comodin_publico = Comodines.ayuda_publico(preg)
        Graficas.graficar_resultados(comodin_publico)

    },

    handler_llamada(){
        Juego.crear_audio({
            tipo: 'Audio',
            id: 'reloj',
            src: '../audios/reloj.mp3',
        })
        $('#btn__llamada').classList.toggle('usado')
        $('#btn__llamada').setAttribute('disabled', true)
        let comodin_llamada = Comodines.llamada_computadora(preg)
        //Object.assign($('.ayuda__publico'), __$extend)
        //$('#btn__cincuenta').setAttribute('disabled', false)
        //let comodin_publico = Comodines.ayuda_publico(value)
        //Graficas.graficar_resultados(/*comodin_publico*/)

    },

    ejecutar_comodines(value){
        preg = value    
        $('#btn__cincuenta').addEventListener('click',this.handler_cincuenta) 
        $('#btn__publico').addEventListener('click',this.handler_ayuda)
        $('#btn__llamada').addEventListener('click',this.handler_llamada)
    },

    rutina(generador) {
        let gen = this.generador() //generador  
        let { value, done } = gen.next()

        //l(value)
        //let activo = $('#btn__cincuenta').disabled 

        if (done){
            this.termino()
        }else{
            value.seleccionada  = true
            Pintar.pintar_pregunta(value)
            this.ejecutar_comodines(value)
            let label_opciones = [...d.querySelectorAll('.item__pregunta')]
            this.eventos_click_por_opciones(label_opciones, value)
        }
    },

}

