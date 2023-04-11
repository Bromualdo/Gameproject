// D&D , simulador de creacion de personaje //
let clase=''
let confirmaPersonaje=false
let iniciativaJugador=0
let iniciativaEnemigo=0
let golpeTuyo=0
let golpeEnemigo=0
let dañoTotalTuyo=0
let dañoTotalEnemigo=0
let eleccion=''
let contador=0
let comprobador= 0

const logo=document.getElementById('logo')
logo.addEventListener('mouseover',()=>{
    logo.style.cursor='pointer'
})
logo.addEventListener('click',()=>{
    alert('me clickeaste wachin')

})

const generarNombre=()=>{   
    nombre=prompt('Ingresa el nombre del aventurero')

        while (nombre.length  <4 || !isNaN(nombre))
        {   nombre=prompt('El nombre es muy corto o contiene numeros!! intenta uno mas largo y sin numeros')    }
        return nombre
    }

const radios = document.getElementsByName('genre')
for (let i=0; i < radios.length;i++)
{
    if (radios[i]==1 && radios[i].checked)
        alert("cheque checka")
}

const GenerarClassdesc=()=>{
    document.getElementById("classDesc").innerText=`Tu nombre es ${clase.nombre} y la clase elegida es ${eleccion} ,
    los stats son:\nFuerza: ${clase.fuerza}\nCarisma: ${clase.carisma}\nInteligencia: ${clase.inteligencia}\nDestreza: ${clase.destreza}
    Constitucion: ${clase.constitucion}\nVida: ${clase.vida}`
    
}
const mostrarHabilidades=()=>{
    
    if(comprobador==1){
        document.getElementById('habilidades').remove()
        
        comprobador--
    }
    const elemento =document.createElement('div')
    elemento.id='habilidades'
    elemento.innerHTML=`<h2>Habilidades: </h2>`
    document.body.appendChild(elemento)
    clase.habilidades.forEach(habilidad => {      
        const cantidad =document.createElement('div')        
        cantidad.innerHTML=`<h3><a href='3'>${habilidad.Nombre}</a></h3>
                            <p>Daño: ${habilidad.Danio}</p>`
       document.getElementById('habilidades').appendChild(cantidad)      
       })
    comprobador++
    console.log(comprobador)
}


const botonMago= document.getElementById("smago")
botonMago.addEventListener('click',()=>{
    botonMago.style.borderBlockColor= 'blue'   
    generarNombre()
    clase=new Mago(nombre,valorAleatorio(1,5),valorAleatorio(5,10),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))
    eleccion="mago"
    mostrarHabilidades()   
    GenerarClassdesc()
})
const  botonGuerrero=document.getElementById("sguerrero")
botonGuerrero.addEventListener('click',()=>{
    botonGuerrero.style.borderBlockColor= 'blue'
    
    generarNombre()
    clase=new Guerrero(nombre,valorAleatorio(5,10),valorAleatorio(1,5),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))
    eleccion="guerrero"
    mostrarHabilidades()
    GenerarClassdesc()         
})
const botonBardo=document.getElementById("sbardo")
botonBardo.addEventListener('click',()=>{
    botonBardo.style.borderBlockColor= 'blue'
     
    generarNombre()
    clase=new Bardo(nombre,valorAleatorio(1,5),valorAleatorio(1,8),valorAleatorio(5,10),valorAleatorio(1,8),valorAleatorio(5,10))
    eleccion="bardo"
    mostrarHabilidades()
    GenerarClassdesc()
    
})

const finSeleccion=document.querySelector(".gameFlow")

finSeleccion.addEventListener('click',()=>{
    
    switch (contador) {
        case 0:
            if (clase!=''){
                let confirma=confirm(`${clase.nombre} quieres quedarte con estos valores?`)
                if (confirma){
                Inicio()}
                contador++
                } else{Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Por favor selecciona un retrato!'                    
                  })}                      
                  
            break;
        case 1:
            Iniciox2()
            contador++
            break;
        case 2:
            Acto1()
            contador++
            break;
        default:
            break;
    }    
     
}
)


// //Combate(clase,enemigo)

// // Combate(clase,enemigo)