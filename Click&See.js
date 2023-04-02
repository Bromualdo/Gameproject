// D&D , simulador de creacion de personaje //

let confirmaPersonaje=false
let iniciativaJugador=0
let iniciativaEnemigo=0
let golpeTuyo=0
let golpeEnemigo=0
let dañoTotalTuyo=0
let dañoTotalEnemigo=0
let eleccion=''
let contador=0

const generarNombre=()=>{
    nombre=prompt('Ingresa el nombre del aventurero')

    

        while (nombre.length  <4 || !isNaN(nombre))
        {   nombre=prompt('El nombre es muy corto o contiene numeros!! intenta uno mas largo y sin numeros')    }
        return nombre
        }
    


const GenerarClassdesc=()=>{
    document.getElementById("classDesc").innerText=`Tu nombre es ${clase.nombre} y la clase elegida es ${eleccion} ,
    los stats son:\nFuerza: ${clase.fuerza}\nCarisma: ${clase.carisma}\nInteligencia: ${clase.inteligencia}\nDestreza: ${clase.destreza}
    Constitucion: ${clase.constitucion}\nVida: ${clase.vidatotal()}`
    
}

const botonMago= document.getElementById("smago")
botonMago.addEventListener('click',()=>{
    botonMago.style.borderBlockColor= 'blue'
    
    generarNombre()
    clase=new Mago(nombre,valorAleatorio(1,5),valorAleatorio(5,10),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))
    eleccion="mago"
    GenerarClassdesc()
})
const  botonGuerrero=document.getElementById("sguerrero")
botonGuerrero.addEventListener('click',()=>{
    botonGuerrero.style.borderBlockColor= 'blue'
    
    generarNombre()
    clase=new Guerrero(nombre,valorAleatorio(5,10),valorAleatorio(1,5),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))
    eleccion="guerrero" 
    GenerarClassdesc()         
})
const botonBardo=document.getElementById("sbardo")
botonBardo.addEventListener('click',()=>{
    botonBardo.style.borderBlockColor= 'blue'
     
    generarNombre()
    clase=new Bardo(nombre,valorAleatorio(1,5),valorAleatorio(1,8),valorAleatorio(5,10),valorAleatorio(1,8),valorAleatorio(5,10))
    eleccion="bardo"
    GenerarClassdesc()
    
})

const finSeleccion=document.querySelector(".gameFlow")

finSeleccion.addEventListener('click',()=>{
    
    switch (contador) {
        case 0:
            let confirma=confirm(`${clase.nombre} quieres quedarte con estos valores?`)
            if (confirma){
            Inicio()}
            contador++
            break;
        case 1:
            Iniciox2()
            contador++
            break;
        default:
            break;
    }
    // if (contador==0){
    // let confirma=confirm(`${clase.nombre} quieres quedarte con estos valores?`)
    // if (confirma){
    // Inicio()
    
    // }  
    
     
}
)




// //Combate(clase,enemigo)

// // Combate(clase,enemigo)