import React from 'react'
import PanelBaseJuego from '../PanelBaseJuego'

/*const PanelPrincipal = () => (
    <div className="container">
        <PanelBaseJuego/>
    </div>
)*/

/*const PanelBaseJuego = () => (
    <div>
        <PanelComodines/>
        <PanelPreguntas/>
        <PanelAyudaPublico />   
        <PanelLlamada />
        <PanelAciertos />   
    </div>
)*/

/*const PanelComodines = () => (
    <div>
        <BotonesComodines/>
        <BotonContinuar/>
    </div>
)*/

/*const BotonesComodines = () => (
    <div>
        <BotonCincuenta />
        <BotonPublico />
        <BotonLlamada />
    </div>
)*/

/*const BotonCincuenta = () => (
    <button id="btn__cincuenta" class="btn__comodin">
        50/50
    </button>
)*/

/*const BotonLlamada = () => (
    <button id="btn__llamada" class="btn__comodin">
        <i class="fa fa-phone fa-3x" aria-hidden="true"></i>
    </button>
)*/

/*const BotonContinuar = () => (
    <div class="panel__continuar">
        <button class="btn__siguiente"> 
            <i class="fa fa-angle-double-right fa-3x" aria-hidden="true"></i>
        </button>
    </div>
)*/

const PanelPreguntas = () => (
    <div class="panel__preguntas">
        <EncabezadoPregunta/>                
        <OcionesPregunta/>                 
    </div>
)

const EncabezadoPregunta = () => (
    <div class="panel__encabezado"></div>
)

const OcionesPregunta = () => (
    <div class="panel__opciones">
        <OpcionesIzquierda/>
        <OpcionesDerecha/>
    </div> 
)

const OpcionesIzquierda = () => (
    <ul class="item__opciones__izquierda"></ul>
)

const OpcionesDerecha = () => (
    <ul class="item__opciones__derecha"></ul>
)

const PanelAyudaPublico = () => (
    <div class="ayuda__publico">
        <canvas id="panel__grafico" height="400"></canvas> 
    </div>
)

const PanelLlamada = () => (
    <div class="panel__llamada">
        <div class="respuesta__llamada"></div>
    </div>
)

const PanelAciertos = () => (
    <div class="msg__end">
        Felicidades Ganaste...! Acertaste todas las preguntas...
    </div>
)


export default Principal