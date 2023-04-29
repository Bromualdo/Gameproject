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
let nombre=document.getElementById('nombreform').value   
let comprobador= 0
const botonMago= document.getElementById("smago")
const  botonGuerrero=document.getElementById("sguerrero")
const botonBardo=document.getElementById("sbardo")
const sesion_activa=localStorage.getItem('sesion')
const botonMagoTrans=document.createElement('div')
const botonGuerreroTrans=document.createElement('div')
const botonBardoTrans=document.createElement('div')  
const Magopop=document.createElement('div')
const Guerreropop=document.createElement('div')
const Bardopop=document.createElement('div')
const encontre=arr_usuarios.find(encontrado=>encontrado.usuario==sesion_activa)
console.log(encontre)




const logo=document.getElementById('logo')
logo.addEventListener('mouseover',()=>{
    logo.style.cursor='pointer'
    logo.className="animate__animated animate__headShake"
})
logo.addEventListener('mouseleave',()=>{
    logo.className='useless'
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



    
        const aparecenombre=document.getElementById("generarnombre")
        aparecenombre.className="animate__animated animate__fadeInUp"
        aparecenombre.style.opacity=1
        const okbutton=document.getElementById("nameconfirm")
        okbutton.addEventListener('mouseover',()=>{
            okbutton.style.cursor='pointer'
        })
        okbutton.addEventListener('click',()=>{
        nombre=document.getElementById('nombreform').value        
       
        if (nombre.length>4 && isNaN(nombre)){
            okbutton.className="animate__animated animate__fadeOut"
            return nombre
        }else{
        
        Swal.fire("Has ingresado un nombre que es muy corto o son solo numeros prueba con uno mas largo")
  
        }})
       
        




const radios = document.querySelectorAll('input[type=radio][name="gener0"]');
    radios[0].addEventListener('click',()=>{      
        
        botonMago.style.backgroundImage= "url('/Gameproject/static/assets/wizard2.jpg')"
        botonMagoTrans.style.backgroundImage="url('/Gameproject/static/assets/wizard2sm.jpg')"
        botonMago.style.backgroundPosition="right center"
        botonMagoTrans.style.backgroundPosition="right center"
        botonGuerrero.style.backgroundImage= "url('/Gameproject/static/assets/warrior3.jpg')"
        botonGuerreroTrans.style.backgroundImage="url('/Gameproject/static/assets/warrior3sm.jpg')"
        botonGuerrero.style.backgroundPosition="top"
        botonGuerreroTrans.style.backgroundPosition="top"
        botonBardo.style.backgroundImage= "url('/Gameproject/static/assets/bard3.jpg')"
        botonBardoTrans.style.backgroundImage="url('/Gameproject/static/assets/bard3sm.jpg')"
        botonBardo.style.backgroundPosition="bottom"
        botonBardoTrans.style.backgroundPosition="bottom"
    })
    radios[1].addEventListener('click',()=>{        
        botonMago.style.backgroundImage= "url('/Gameproject/static/assets/fwizard.jpg')"         
        botonMagoTrans.style.backgroundImage="url('/Gameproject/static/assets/fwizardsm.jpg')"  
        botonMago.style.backgroundPosition="center"
        botonMagoTrans.style.backgroundPosition="center"
        botonGuerrero.style.backgroundImage= "url('/Gameproject/static/assets/fwarrior.jpg')"
        botonGuerreroTrans.style.backgroundImage="url('/Gameproject/static/assets/fwarriorsm.jpg')"
        botonGuerrero.style.backgroundPosition="right bottom"
        botonGuerreroTrans.style.backgroundPosition="right bottom"
        botonBardo.style.backgroundImage= "url(/Gameproject/static/assets/fbard.jpg)"
        botonBardoTrans.style.backgroundImage= "url(/Gameproject/static/assets/fbardsm.jpg)"
        botonBardo.style.backgroundPosition="top left"
        botonBardoTrans.style.backgroundPosition="top left"
    })

const GenerarClassdesc=()=>{
        switch (eleccion) {
            case "mago":               
                document.getElementById("classDesc").style.left='44.5%'
                document.getElementById("classDesc").className="animate__animated animate__fadeInDown"
                break;
            case "guerrero":
                document.getElementById("classDesc").style.left='72%'
                document.getElementById("classDesc").className="animate__animated animate__fadeInDown"
                break;
            case "bardo":
                document.getElementById("classDesc").style.left='99.5%' 
                document.getElementById("classDesc").className="animate__animated animate__fadeInDown"
                break;           
        }
    
    document.getElementById("classDesc").style.opacity=1  
        document.getElementById("classDesc").innerText=`Fuerza: ${clase.fuerza}\nCarisma: ${clase.carisma}\nInteligencia: ${clase.inteligencia}\nDestreza: ${clase.destreza}
    Constitucion: ${clase.constitucion}\nVida: ${clase.vida}`
    
   
}
const mostrarHabilidades=()=>{
    
    if(comprobador==1){
        document.getElementById('habilidades').remove()        
        comprobador--
    }
    const elemento =document.createElement('div')
    const cartelhab=document.createElement('div')  
    elemento.id='habilidades'  
    cartelhab.id="cartelHab"   
    elemento.innerHTML=`<h2>Habilidades: </h2>`
    document.body.append(cartelhab,elemento)
    clase.habilidades.forEach(habilidad => {      
        const cantidad =document.createElement('div')        
        cantidad.innerHTML=`<h3 id='habnom'>${habilidad.Nombre}</h3>
                            <p>Daño: ${habilidad.Danio}</p>`
       document.getElementById('habilidades').appendChild(cantidad)      
       })
    comprobador++ 
}

if (encontre.clase==''){
    
    
    botonMago.addEventListener('click',()=>{          
       
        
        clase=new Mago(nombre,valorAleatorio(1,5),valorAleatorio(5,10),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))
        eleccion="mago"
        encontre.eleccion=eleccion
        encontre.clase=clase
        mostrarHabilidades()   
        GenerarClassdesc()
    
    })
    
    botonGuerrero.addEventListener('click',()=>{
       
        
        clase=new Guerrero(nombre,valorAleatorio(5,10),valorAleatorio(1,5),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))
        eleccion="guerrero"
        encontre.eleccion=eleccion
        encontre.clase=clase
        mostrarHabilidades()
        GenerarClassdesc()         
    
    })
    
    botonBardo.addEventListener('click',()=>{
            
       
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
        if (eleccion != '' && nombre!=''){
            Swal.fire({
                title: `${clase.nombre} deseas guardar estos valores?`,
                showDenyButton: true,                
                confirmButtonText: 'Confirmar',
                denyButtonText: `Cancelar`,
              }).then((result) => {
                
                if (result.isConfirmed) {
                  Swal.fire('Saved!', '', 'success')
                  console.log('entro')
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
                    text: 'Por favor vuelve a  seleccionar un retrato y elige un nombre!'                    
                  })
                  
                }
              })
                      
                  
                } else{
                    Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Por favor selecciona un retrato y elige un nombre!'                    
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
    Magopop.id="cartelmago"
    botonMagoTrans.className="animate__animated animate__fadeIn"
    Magopop.className="animate__animated animate__fadeInLeft"
    Magopop.innerHTML="Mago"
    botonMago.append(botonMagoTrans,Magopop)
    botonMago.style.cursor='pointer'
   
    
})
botonMago.addEventListener('mouseleave',()=>{
        botonMagoTrans.className="animate__animated animate__fadeOut"
        Magopop.className="animate__animated animate__fadeOutLeft"
})

botonGuerrero.addEventListener('mouseover',()=>{
    botonGuerreroTrans.id="GuerreroTrans"   
    Guerreropop.id="cartelguerrero"
    botonGuerreroTrans.className="animate__animated animate__fadeIn"   
    Guerreropop.className="animate__animated animate__fadeInLeft"
    Guerreropop.innerHTML="Guerrero"
    
    botonGuerrero.append(botonGuerreroTrans,Guerreropop)
    botonGuerrero.style.cursor='pointer'
   
})
botonGuerrero.addEventListener('mouseleave',()=>{
        botonGuerreroTrans.className="animate__animated animate__fadeOut"
        Guerreropop.className="animate__animated animate__fadeOutLeft"
})

botonBardo.addEventListener('mouseenter',()=>{
    botonBardoTrans.id="BardoTrans"
    Bardopop.id="cartelbardo"
    botonBardoTrans.className="animate__animated animate__fadeIn"   
    Bardopop.className="animate__animated animate__fadeInLeft"
    Bardopop.innerHTML="Bardo"
    botonBardo.append(botonBardoTrans,Bardopop)
    botonBardo.style.cursor='pointer'
   
    
})
botonBardo.addEventListener('mouseleave',()=>{
    botonBardoTrans.className="animate__animated animate__fadeOut"
    Bardopop.className="animate__animated animate__fadeOutLeft"
})

