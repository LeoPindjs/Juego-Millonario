import React from 'react'
import PanelComodines from '../PanelComodines'
import PanelPreguntas from '../PanelPreguntas'
import PanelAyudaPublico from '../PanelAyudaPublico'
import PanelLlamada from '../PanelLlamada'
import PanelAciertos from '../PanelAciertos'

const PanelBaseJuego = () => (
    <div>
        <PanelComodines/>
        <PanelPreguntas/>
        <PanelAyudaPublico />   
        <PanelLlamada />
        <PanelAciertos />   
    </div>
)

export default PanelBaseJuego