
const com_btn=document.getElementById('btn-comenzar')
const cont_turnos=document.getElementById('turnos')
const show_hab =document.getElementById('hab-player')
const enemy_div=document.getElementById('Enemy')
const playerhp=document.getElementById('hp-bar')
const enemyhp=document.getElementById('enemy-bar')
const onom_enem=document.createElement('div') 
const onom_player=document.createElement('div') 


let acu =0
let hab_cont=0
let enemyhab_cont=0
com_btn.addEventListener('mouseover',()=>{
    com_btn.style.cursor='pointer'
})


    


com_btn.addEventListener('click',()=>{
    acu++
    cont_turnos.innerText=`Tu turno!`
    if(comprobador==1){
        document.querySelectorAll('hab-group').remove()        
        comprobador--
    }
    
    hab_disp()
    hab_enem_disp()
    comprobador++
    document.getElementById("comenzar").className="animate__animated animate__fadeOut"
    
    
    setTimeout(() => {
        document.getElementById("comenzar").remove()
    }, 1000);
        
})

const pepe=new Mago('Adrian',valorAleatorio(1,5),valorAleatorio(5,10),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(1,8))
const enemyofpepe=new Esqueleto (valorAleatorio(1,4),valorAleatorio(1,2),valorAleatorio(1,10))

const hab_disp=()=>{    
pepe.habilidades.forEach(habilidad=>{
    hab_cont++    
    const habs=document.createElement('div')
    habs.id='hab'
    habs.className="animate__animated animate__fadeIn"
    habs.innerHTML=`<h3 class='hab-group' id='hab${hab_cont}'><a >${habilidad.Nombre}</a></h3>`
    document.getElementById('hab-player').appendChild(habs)  
    
})


    
const fire1=document.getElementById('hab1')
fire1.addEventListener('mouseover',()=>{
    fire1.style.cursor='pointer'
})

function usehab(number){    
    
    onom_enem.innerHTML=`<img src="/Gameproject/static/assets/dmgono.png"  id="onodmg">
                    <h2 id='dmg'>${pepe.danioHabilidad(number)}</h2>`
    onom_enem.className="animate__animated animate__heartBeat"   
    document.getElementById('Enemy').appendChild(onom_enem)
    GiveDmg(pepe.danioHabilidad(number),enemyofpepe,enemyhp)

    enemy_div.className="animate__animated animate__shakeX"

    setTimeout(() =>{
    cont_turnos.innerText=`Turno enemigo`  
    },400)
    setTimeout(() =>{         
        onom.className="animate__animated animate__zoomOut"
      }, 2000);
    
    setTimeout(() =>{         
        onom.remove()  
      }, 3000);
    setTimeout(() =>{ 
        turno_enemigo()  
      }, 1200);
   }

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
    enemyofpepe.habilidades.forEach(habilidad=>{
        enemyhab_cont++
        variableUsada=valorAleatorio(0,2)
        const enemyhabs=document.createElement('div')
        enemyhabs.id='enemyhabs'
        enemyhabs.className="animate__animated animate__fadeIn"
        enemyhabs.innerHTML=`<h3 class='hab-enem_group' id='enemyhab${enemyhab_cont}'><a >${habilidad.Nombre}</a></h3>`
        document.getElementById('hab-enem').appendChild(enemyhabs)  
    
    })
}

playerhp.innerText=`${pepe.vida}`
enemyhp.innerText=`${enemyofpepe.vida}`

console.log(enemyofpepe.vida)




function GiveDmg (param1,who,change){   
   
    who.vida-=param1
    
    if (pepe.vida<=0){
        pepe.vida=0
        Swal.fire({            
            width:400,
            html:'<img src="/Gameproject/static/assets/baby.gif" id="loser"><br>'+
            'Has sido derrotado!! ,haz clic en inicio para volver a empezar',
            confirmButtonText:'Demonios!'
    })
    }
    if (enemyofpepe.vida<=0 ){
        enemyofpepe.vida=0       
        Swal.fire("Derrotaste a tu enemigo!, la aventura continua!")
        cont_turnos.innerText=`Ganaste!`
        setTimeout(()=>{
        enemy_div.className="animate__animated animate__fadeOutUp"
        },700)
    }      
    change.innerText=`${who.vida}`
    change.className="hpbars animate__animated animate__flipInX" 
}

setTimeout(() =>{ 
  console.log("wachin")  
}, 4000);
// document.getElementById('Enemy').style.backgroundImage=`${enemyofpepe.portrait}`
// document.getElementById('Player').style.backgroundImage=`${encontre.clase.portrait}`

const turno_enemigo = ()=>{

    if(enemyofpepe.vida>0){
    variableUsada=valorAleatorio(0,2)
     
    onom_player.innerHTML=`<img src="/Gameproject/static/assets/dmgono.png"  id="onodmg">
                    <h2 id='dmg'>${enemyofpepe.danioHabilidad(variableUsada)}</h2>`
    onom_player.className="animate__animate animate__heartBeat"   
    document.getElementById('Player').appendChild(onom_player)
    GiveDmg(enemyofpepe.danioHabilidad(variableUsada),pepe,playerhp)
    document.getElementById('Player').className="animate__animated animate__shakeX"    
    variableUsada++
    en_as=document.getElementById(`enemyhab${variableUsada}`)
    en_as.style.color='rgb(154, 63, 154)'    
    console.log(en_as)
    setTimeout(() =>{ 
        cont_turnos.innerText=`Tu turno!`
        en_as.style.color='white'
        
      }, 1500)
    }
}

