let d = document
let l = (data) => console.log(data)
let $ = (el)   => d.querySelector(el)

let __$extend = {

    css(attr){
        let{display} = attr
        this.style.display = display 
    },

    addClass(attr){
        this.classList.add(...attr)
    },
    
}