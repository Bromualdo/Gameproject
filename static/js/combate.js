
const com_btn=document.getElementById('btn-comenzar')
const cont_turnos=document.getElementById('turnos')
const show_hab =document.getElementById('hab-player')
const enemy_div=document.getElementById('Enemy')
const playerhp=document.getElementById('hp-bar')
const enemyhp=document.getElementById('enemy-bar')
const onom_enem=document.createElement('div') 
const onom_player=document.createElement('div')

const continue_sesion=localStorage.getItem('sesion')
const continue_user=arr_usuarios.find(encontrado=>encontrado.usuario==continue_sesion)

console.log(continue_user.clase)





logo=document.getElementById('logo')
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

function quien_es(element){
    eleccion=''
switch (element.nombre) {
   
    case 'Mago': 
              
            eleccion= new Mago(element.fuerza,element.inteligencia,element.carisma,element.destreza,element.constitucion)
        break;
    case 'Guerrero':
            eleccion= new Guerrero(element.fuerza,element.inteligencia,element.carisma,element.destreza,element.constitucion)
        break;            
    case 'Bardo':
            eleccion=new Bardo(element.fuerza,element.inteligencia,element.carisma,element.destreza,element.constitucion)
        break;
    case 'Esqueleto':
            eleccion= new Esqueleto(element.fuerza,element.destreza,element.constitucion)
        break;
    case 'Hombre Lobo':
            eleccion= new Hlobo(element.fuerza,element.destreza,element.constitucion)
        break;
        case 'Araña Grande':
            eleccion= new ArañaG(element.fuerza,element.destreza,element.constitucion)
        break;
    
}
return eleccion


}


let comprobeta= 0
let acu =0
let hab_cont=0
let enemyhab_cont=0
com_btn.addEventListener('mouseover',()=>{
    com_btn.style.cursor='pointer'
})


    


com_btn.addEventListener('click',()=>{
    acu++
    cont_turnos.innerText=`Tu turno!`
    if(comprobeta==1){
        document.querySelectorAll('hab-group').remove()        
        comprobeta--
    }
    
    hab_disp()
    hab_enem_disp()
    comprobeta++
    document.getElementById("comenzar").className="animate__animated animate__fadeOut"
    
    
    setTimeout(() => {
        document.getElementById("comenzar").remove()
    }, 1000);
        
})

const player=quien_es(continue_user.clase)

const enemyofplayerJSON=JSON.parse(localStorage.getItem('enemigo'))

const enemyofplayer=quien_es(enemyofplayerJSON)
console.log(enemyofplayer)


const hab_disp=()=>{    
player.habilidades.forEach(habilidad=>{
    hab_cont++    
    const habs=document.createElement('div')
    habs.id='hab'
    habs.className="animate__animated animate__fadeIn"
    habs.innerHTML=`<h3 class='hab-group' id='hab${hab_cont}'><a >${habilidad.Nombre}</a></h3>`
    document.getElementById('hab-player').appendChild(habs)  
    
})



function usehab(number){    
    
    onom_enem.innerHTML=`<img src="/Gameproject/static/assets/dmgono.png"  id="onodmg">
                    <h2 id='dmg'>${player.danioHabilidad(number)}</h2>`
    onom_enem.className="animate__animated animate__heartBeat"   
    document.getElementById('Enemy').appendChild(onom_enem)
    GiveDmg(player.danioHabilidad(number),enemyofplayer,enemyhp)

    enemy_div.className="animate__animated animate__shakeX"

    setTimeout(() =>{
    cont_turnos.innerText=`Turno enemigo`  
    },400)
  
    setTimeout(() =>{ 
        turno_enemigo()  
      }, 1200);
   }

    
const fire1=document.getElementById('hab1')
fire1.addEventListener('mouseover',()=>{
    fire1.style.cursor='pointer'
})
fire1.addEventListener('click',()=>{
    usehab(0)
    })  
    

const fire2=document.getElementById('hab2')
fire2.addEventListener('mouseover',()=>{
    fire2.style.cursor='pointer'
})

fire2.addEventListener('click',()=>{
    usehab(1)   
})
const fire3=document.getElementById('hab3')
fire3.addEventListener('mouseover',()=>{
    fire3.style.cursor='pointer'
})


fire3.addEventListener('click',()=>{    
    usehab(2)     
})
}


const hab_enem_disp=()=>{    
    enemyofplayer.habilidades.forEach(habilidad=>{
        enemyhab_cont++
        variableUsada=valorAleatorio(0,2)
        const enemyhabs=document.createElement('div')
        enemyhabs.id='enemyhabs'
        enemyhabs.className="animate__animated animate__fadeIn"
        enemyhabs.innerHTML=`<h3 class='hab-enem_group' id='enemyhab${enemyhab_cont}'><a >${habilidad.Nombre}</a></h3>`
        document.getElementById('hab-enem').appendChild(enemyhabs)  
    
    })
}

playerhp.innerText=`${player.vida}`
enemyhp.innerText=`${enemyofplayer.vida}`



function GiveDmg (param1,who,change){   
   
    who.vida-=param1
    
    if (player.vida<=0){
        player.vida=0
        Swal.fire({            
            width:400,
            html:'<img src="/Gameproject/static/assets/baby.gif" id="loser"><br>'+
            'Has sido derrotado!! ,haz clic en inicio para volver a empezar',
            confirmButtonText:'Presiona f5 para volver a pelear!'
            
    })
    }
    if (enemyofplayer.vida<=0 ){
        enemyofplayer.vida=0       
        Swal.fire("Derrotaste a tu enemigo!, la aventura continua!")
        cont_turnos.innerText=`Ganaste!`
        setTimeout(()=>{
        enemy_div.className="animate__animated animate__fadeOutUp"
        },700)
    }      
    change.innerText=`${who.vida}`
    change.className="hpbars animate__animated animate__flipInX" 
}

document.getElementById('Enemy').style.backgroundImage=`${enemyofplayer.portrait}`
document.getElementById('Player').style.backgroundImage=`${continue_user.retrato}`
relocalizacion()

console.log(continue_user.retrato.slice(32))


const turno_enemigo = ()=>{

    if(enemyofplayer.vida>0){
    variableUsada=valorAleatorio(0,2)
     
    onom_player.innerHTML=`<img src="/Gameproject/static/assets/dmgono.png"  id="onodmg">
                    <h2 id='dmg'>${enemyofplayer.danioHabilidad(variableUsada)}</h2>`
    onom_player.className="animate__animate animate__heartBeat"   
    document.getElementById('Player').appendChild(onom_player)
    GiveDmg(enemyofplayer.danioHabilidad(variableUsada),player,playerhp)
    document.getElementById('Player').className="animate__animated animate__shakeX"    
    variableUsada++
    en_as=document.getElementById(`enemyhab${variableUsada}`)
    en_as.style.color='rgb(154, 63, 154)'    
    
    setTimeout(() =>{ 
        cont_turnos.innerText=`Tu turno!`
        en_as.style.color='white'
        
      }, 1500)
    }
}

