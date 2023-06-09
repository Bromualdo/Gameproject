let clase=''
let eleccion=''
let contador=1
let comprobador= 0
let portrait=''
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
       
const radios = document.querySelectorAll('input[type=radio][name="gener0"]');
    radios[0].addEventListener('click',()=>{      
        posicionamientoImg(botonMago,botonMagoTrans,'wizard2','right center')
        posicionamientoImg(botonGuerrero,botonGuerreroTrans,'warrior3','top')
        posicionamientoImg(botonBardo,botonBardoTrans,'bard3','bottom')
        
    })
    radios[1].addEventListener('click',()=>{    
        posicionamientoImg(botonMago,botonMagoTrans,'fwizard','center')
        posicionamientoImg(botonGuerrero,botonGuerreroTrans,'fwarrior','right bottom')
        posicionamientoImg(botonBardo,botonBardoTrans,'fbard','top left')    
    
    })

const GenerarClassdesc=()=>{
        switch (eleccion) {
            case "mago":               
                document.getElementById("classDesc").style.left='44.5%'
                document.getElementById("classDesc").className="animate__animated animate__fadeInDown"
                break;
            case "guerrero":
                document.getElementById("classDesc").style.left='78%'
                document.getElementById("classDesc").className="animate__animated animate__fadeInDown"
                break;
            case "bardo":
                document.getElementById("classDesc").style.left='111%' 
                document.getElementById("classDesc").className="animate__animated animate__fadeInDown"
                break;           
        }
    
    document.getElementById("classDesc").style.opacity=1  
    document.getElementById("classDesc").innerText=`Fuerza: ${clase.fuerza}\nCarisma: ${clase.carisma}\nInteligencia: ${clase.inteligencia}\nDestreza: ${clase.destreza}
    Constitucion: ${clase.constitucion}\nVida: ${clase.vida}`
    
   
}



const mostrarHabilidades=()=>{    
    
    comprobador===1 && restarhab();

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
       
        
        clase=new Mago(valorAleatorio(1,5),valorAleatorio(5,10),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))
        eleccion="mago"    
        botonMago.style.backgroundImage==='' && posicionamientoImg(botonMago,botonMagoTrans,'wizard2','right center' )
        encontre.retrato=botonMago.style.backgroundImage
        encontre.eleccion=eleccion
        encontre.clase=clase
        mostrarHabilidades()   
        GenerarClassdesc()
       
    
    })
    
    botonGuerrero.addEventListener('click',()=>{
       
        
        clase=new Guerrero(valorAleatorio(5,10),valorAleatorio(1,5),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))
        eleccion="guerrero"
        
        botonGuerrero.style.backgroundImage==='' && posicionamientoImg(botonGuerrero,botonGuerreroTrans,'warrior3','top')
        encontre.retrato=botonGuerrero.style.backgroundImage
        encontre.eleccion=eleccion
        encontre.clase=clase
        mostrarHabilidades()
        GenerarClassdesc()         
    
    })
    
    botonBardo.addEventListener('click',()=>{
            
       
        clase=new Bardo(valorAleatorio(1,5),valorAleatorio(1,8),valorAleatorio(5,10),valorAleatorio(1,8),valorAleatorio(5,10))
        eleccion="bardo"
       
        botonBardo.style.backgroundImage==='' && posicionamientoImg(botonBardo,botonBardoTrans,'bard3','bottom')        
        encontre.retrato=botonBardo.style.backgroundImage
        encontre.eleccion=eleccion
        encontre.clase=clase
        mostrarHabilidades()
        GenerarClassdesc()
    
})
}
else{
    window.location ="/Gameproject/template/introduccion.html"
}


const finSeleccion=document.querySelector(".gameFlow")
finSeleccion.addEventListener('mouseover',()=>{
    finSeleccion.style.cursor='pointer'
})

finSeleccion.addEventListener('click',()=>{    
    
        if (eleccion != ''){
            Swal.fire({
                title: `${clase.nombre} deseas guardar estos valores?`,
                showDenyButton: true,                
                confirmButtonText: 'Confirmar',
                denyButtonText: `Cancelar`,
              }).then((result) => {
                
                if (result.isConfirmed) {
                  Swal.fire('Saved!', '', 'success')
                  console.log('entro')
                  window.location ="/Gameproject/template/introduccion.html"
                console.log(encontre)               
                for (item in arr_usuarios){
                    if (encontre.usuario === item.usuario){
                        item.clase=encontre.clase
                        item.eleccion=encontre.eleccion                        
                        item.nombre=encontre.nombre
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
          
                }})



