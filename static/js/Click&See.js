let clase=''
let confirmaPersonaje=false
let iniciativaJugador=0
let iniciativaEnemigo=0
let golpeTuyo=0
let golpeEnemigo=0
let dañoTotalTuyo=0
let dañoTotalEnemigo=0
let eleccion=''
let contador=1
let comprobador= 0
let nombre=''
const botonMago= document.getElementById("smago")
const  botonGuerrero=document.getElementById("sguerrero")
const botonBardo=document.getElementById("sbardo")
const sesion_activa=localStorage.getItem('sesion')
const botonMagoTrans=document.createElement('div')
const botonGuerreroTrans=document.createElement('div')
const botonBardoTrans=document.createElement('div')  
const encontre=arr_usuarios.find(encontrado=>encontrado.usuario==sesion_activa)
console.log(encontre)




const logo=document.getElementById('logo')
logo.addEventListener('mouseover',()=>{
    logo.style.cursor='pointer'
})
logo.addEventListener('click',()=>{
        
        Swal.fire({
            title: 'Este juego ha sido realizado por',          
            preConfirm: (login) => {
          return fetch(`//api.github.com/users/bromualdo`)
            .then(response => {                        
                return response.json()
                
            })
        
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            
            imageUrl: result.value.avatar_url,
            html:'<h1 id="wololo">Adrian Emmanuel Pozzi</h1>',
            confirmButtonText:'Gracias por jugar!'
            
        })
        }
      })

})


function generarNombre(){
   
    
    
    nombre=prompt('Ingresa el nombre del aventurero')

        while (nombre.length  <4 || !isNaN(nombre))
        {   nombre=prompt('El nombre es muy corto o contiene numeros!! intenta uno mas largo y sin numeros')    }
        return nombre
}

const radios = document.querySelectorAll('input[type=radio][name="gener0"]');
    radios[0].addEventListener('click',()=>{        
        
        botonMago.style.backgroundImage= "url('/Gameproject/static/assets/wizard2.jpg')"
        botonGuerrero.style.backgroundImage= "url('/Gameproject/static/assets/warrior3.jpg')"
        botonBardo.style.backgroundImage= "url('/Gameproject/static/assets/bard3.jpg')"       
    })
    radios[1].addEventListener('click',()=>{        
        botonMago.style.backgroundImage= "url('/Gameproject/static/assets/shewizz.jpg')"
        botonGuerrero.style.backgroundImage= "url('/Gameproject/static/assets/shewarrior.jpg')"
        botonBardo.style.backgroundImage= "url(/Gameproject/static/assets/shebard.jpg)"
    })

const GenerarClassdesc=()=>{   
    const cartelDesc=document.createElement('div')
    cartelDesc.innerHTML=`<img src="/Gameproject/static/assets/post2.png"  id="cartelDesc">`

    document.getElementById("classDesc").innerText=`Nombre: ${clase.nombre} Clase: ${eleccion} 
    Stats:\nFuerza: ${clase.fuerza}\nCarisma: ${clase.carisma}\nInteligencia: ${clase.inteligencia}\nDestreza: ${clase.destreza}
    Constitucion: ${clase.constitucion}\nVida: ${clase.vida}`
    document.body.append(cartelDesc)
   
}
const mostrarHabilidades=()=>{
    
    if(comprobador==1){
        document.getElementById('habilidades').remove()        
        comprobador--
    }
    const elemento =document.createElement('div')
    const cartelhab=document.createElement('div')  
    elemento.id='habilidades'  
    cartelhab.innerHTML=`<img src="/Gameproject/static/assets/post1.png"  id="cartelHab">`   
    elemento.innerHTML=`<h2>Habilidades: </h2>`
    document.body.append(cartelhab,elemento)
    clase.habilidades.forEach(habilidad => {      
        const cantidad =document.createElement('div')        
        cantidad.innerHTML=`<h3><a href='3'>${habilidad.Nombre}</a></h3>
                            <p>Daño: ${habilidad.Danio}</p>`
       document.getElementById('habilidades').appendChild(cantidad)      
       })
    comprobador++ 
}

if (encontre.clase==''){
    
    
    botonMago.addEventListener('click',()=>{      
       
      
        const elnombre= generarNombre()
        clase=new Mago(nombre,valorAleatorio(1,5),valorAleatorio(5,10),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))
        eleccion="mago"
        encontre.eleccion=eleccion
        encontre.clase=clase
        mostrarHabilidades()   
        GenerarClassdesc()
    
    })
    
    botonGuerrero.addEventListener('click',()=>{
       
        generarNombre()
        clase=new Guerrero(nombre,valorAleatorio(5,10),valorAleatorio(1,5),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))
        eleccion="guerrero"
        encontre.eleccion=eleccion
        encontre.clase=clase
        mostrarHabilidades()
        GenerarClassdesc()         
    
    })
    
    botonBardo.addEventListener('click',()=>{
            
        generarNombre()
        clase=new Bardo(nombre,valorAleatorio(1,5),valorAleatorio(1,8),valorAleatorio(5,10),valorAleatorio(1,8),valorAleatorio(5,10))
        eleccion="bardo"
        encontre.eleccion=eleccion
        encontre.clase=clase
        mostrarHabilidades()
        GenerarClassdesc()
    
})
}
const finSeleccion=document.querySelector(".gameFlow")
finSeleccion.addEventListener('mouseover',()=>{
    finSeleccion.style.cursor='pointer'
})

finSeleccion.addEventListener('click',()=>{
    
    switch (contador) {
        case 1: 
        if (eleccion != ''){
            Swal.fire({
                title: `${encontre.clase.nombre} deseas guardar estos valores?`,
                showDenyButton: true,                
                confirmButtonText: 'Confirmar',
                denyButtonText: `Cancelar`,
              }).then((result) => {
                
                if (result.isConfirmed) {
                  Swal.fire('Saved!', '', 'success')
                  Inicio()
                console.log(encontre)               
                for (item in arr_usuarios){
                    if (encontre.usuario === item.usuario){
                        item.clase=encontre.clase
                        item.eleccion=encontre.eleccion                        
                    }
                }
                arr_usuarios_json=JSON.stringify(arr_usuarios)
                localStorage.setItem("usuarios",arr_usuarios_json)                
                
                contador++      
                } else if (result.isDenied) {
                  
                  Swal.fire({
                    icon: 'error',                    
                    text: 'Por favor vuelve a  seleccionar un retrato!'                    
                  })
                  
                }
              })
                      
                  
                } else{
                    Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Por favor selecciona un retrato!'                    
                  })      
            break;}
        case 2:
            Iniciox2()
            contador++
            break;
        case 3:
            Acto1()
            contador++
            break;
        default:
            break;
    }    
     

}
)

Yaexiste()


botonMago.addEventListener('mouseover',()=>{
    botonMagoTrans.id="MagoTrans"    
    botonMagoTrans.className="animate__animated animate__fadeIn"   
    botonMago.appendChild(botonMagoTrans)
    botonMago.style.cursor='pointer'
    
})
botonMago.addEventListener('mouseleave',()=>{
        botonMagoTrans.className="animate__animated animate__fadeOut"
})

botonGuerrero.addEventListener('mouseover',()=>{
    botonGuerreroTrans.id="GuerreroTrans"   
    botonGuerreroTrans.className="animate__animated animate__fadeIn"   
    botonGuerrero.appendChild(botonGuerreroTrans)
    botonGuerrero.style.cursor='pointer'
    
})
botonGuerrero.addEventListener('mouseleave',()=>{
        botonGuerreroTrans.className="animate__animated animate__fadeOut"
})

botonBardo.addEventListener('mouseenter',()=>{
    botonBardoTrans.id="BardoTrans"
    botonBardoTrans.style.opacity=1
    botonBardoTrans.className="animate__animated animate__fadeIn"   
    botonBardo.appendChild(botonBardoTrans)
    botonBardo.style.cursor='pointer'
    
})
botonBardo.addEventListener('mouseleave',()=>{
    botonBardoTrans.className="animate__animated animate__fadeOut"
})

