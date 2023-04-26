
const com_btn=document.getElementById('btn-comenzar')
const cont_turnos=document.getElementById('turnos')
const show_hab =document.getElementById('hab-player')
const enemy_div=document.getElementById('Enemy')
const playerhp=document.getElementById('hp-bar')
const enemyhp=document.getElementById('enemy-bar')


let acu =0
let hab_cont=0
let enemyhab_cont=0
com_btn.addEventListener('mouseover',()=>{
    com_btn.style.cursor='pointer'
})

const actualizar =()=>{
    cont_turnos.innerText=`Tu turno!`
}

com_btn.addEventListener('click',()=>{
    acu++
    actualizar()
    if(comprobador==1){
        document.querySelectorAll('hab-group').remove()        
        comprobador--
    }
    
    hab_disp()
    hab_enem_disp()
    comprobador++
  
})

const pepe=new Mago('Adrian',valorAleatorio(1,5),valorAleatorio(5,10),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))
const enemyofpepe=new Esqueleto (valorAleatorio(1,4),valorAleatorio(1,2),valorAleatorio(1,10))

const hab_disp=()=>{    
pepe.habilidades.forEach(habilidad=>{
    hab_cont++

    // variableUsada=valorAleatorio(0,2)
    const habs=document.createElement('div')
    habs.id='hab'
    habs.innerHTML=`<h3 class='hab-group' id='hab${hab_cont}'><a >${habilidad.Nombre}</a></h3>`
    document.getElementById('hab-player').appendChild(habs)  
    
})



const fire1=document.getElementById('hab1')
fire1.addEventListener('mouseover',()=>{
    fire1.style.cursor='pointer'
})

function usehab(number){
    if (comprobador==1)
    {
        onom.remove()
        comprobador--
    }
    const onom=document.createElement('div')
    onom.innerHTML=`<img src="/Gameproject/static/assets/dmgono.png"  id="onodmg">
                    <h2 id='dmg'>${pepe.danioHabilidad(number)}</h2>`
    onom.className="animate__animate animate__heartBeat"   
    document.getElementById('Enemy').appendChild(onom)
    GiveDmg(pepe.danioHabilidad(number),enemyofpepe,enemyhp)
    
    
}

fire1.addEventListener('click',()=>{
    usehab(0)
    setTimeout(() =>{ 
        turno_enemigo()  
        
      }, 1000);
})  
    

const fire2=document.getElementById('hab2')
fire2.addEventListener('mouseover',()=>{
    fire2.style.cursor='pointer'
})

fire2.addEventListener('click',()=>{
    usehab(1)
    setTimeout(() =>{ 
        turno_enemigo()  
      }, 1000);
 
})
const fire3=document.getElementById('hab3')
fire3.addEventListener('mouseover',()=>{
    fire3.style.cursor='pointer'
})


fire3.addEventListener('click',()=>{    
    usehab(2)
    setTimeout(() =>{ 
        turno_enemigo()  
      }, 1000);
   
})
}

const hab_enem_disp=()=>{    
    enemyofpepe.habilidades.forEach(habilidad=>{
        enemyhab_cont++
        variableUsada=valorAleatorio(0,2)
        const enemyhabs=document.createElement('div')
        enemyhabs.id='enemyhabs'
        enemyhabs.innerHTML=`<h3 class='hab-enem_group' id='enemyhab${enemyhab_cont}'><a >${habilidad.Nombre}</a></h3>`
        document.getElementById('hab-enem').appendChild(enemyhabs)  
    
    })
}

playerhp.innerText=`${pepe.vida}`
enemyhp.innerText=`${enemyofpepe.vida}`

console.log(enemyofpepe.vida)




function GiveDmg (param1,who,change){
   
   
    who.vida-=param1
    if (who.vida<=0){
        who.vida=0
        Swal.fire("Derrotaste a tu enemigo!, la aventura continua!")
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
    variableUsada=valorAleatorio(0,2)
    cont_turnos.innerText=`Turno enemigo`
    const onom=document.createElement('div')
    onom.innerHTML=`<img src="/Gameproject/static/assets/dmgono.png"  id="onodmg">
                    <h2 id='dmg'>${enemyofpepe.danioHabilidad(variableUsada)}</h2>`
    onom.className="animate__animate animate__heartBeat"   
    document.getElementById('Player').appendChild(onom)
    GiveDmg(enemyofpepe.danioHabilidad(variableUsada),pepe,playerhp)
    console.log(enemyofpepe.habilidades[variableUsada].Nombre)
    setTimeout(() =>{ 
        cont_turnos.innerText=`Tu turno!`
        
      }, 1500);
}