let ApiPreguntas = {

    obtener_preguntas_cobre() {
        return fetch('file:///home/leo/Escritorio/Millonario/Data/Cobre.json')
            .then(data => data.json())
            .then(result => result)
    },

    obtener_preguntas_domotica() {
        return fetch('../Data/Domótica.json')
            .then(data => data.json())
            .then(result => result)
    },

    obtener_preguntas_robotica() {
        return fetch('../Data/Robótica.json')
            .then(data => data.json())
            .then(result => result)
    },

}
