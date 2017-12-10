
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

let Pintar = {
    pintar(el,template,data={}){
        el.innerHTML = template
    },
}


function crear_audio(attr){
    let d = document
    let {tipo,id,src} = attr
    let intro = d.createElement(tipo)
    intro.setAttribute("id",id)
    intro.setAttribute("src",src)
    d.body.appendChild(intro)
    d.getElementById(id).play()
}

function main(){  
    let d = document
    crear_audio({
        tipo: 'Audio',
        id:'intro',
        src:'../audios/intro.mp3',
    })
    let el = d.createElement('div')
    el.setAttribute('class','panel__inicio')
    d.body.appendChild(el) 

    let template = 
    `<div class="panel__botones">
        <a class="btn__ir" href="#">
            Inicio
        </a>
    </div>`
    
    Pintar.pintar(el,template)

    let btn_ir = d.querySelector('.btn__ir')
    btn_ir.addEventListener(
        'click',
        () => Rutas.ir('principal')
    )


}

main()

