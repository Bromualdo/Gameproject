
const com_btn=document.getElementById('btn-comenzar')
const cont_turnos=document.getElementById('turnos')
const show_hab =document.getElementById('hab-player')
const enemy_div=document.getElementById('Enemy')

let acu =0
let hab_cont=0

com_btn.addEventListener('mouseover',()=>{
    com_btn.style.cursor='pointer'
})

const actualizar =()=>{
    cont_turnos.innerText=`Tu turno!${acu}`
}

com_btn.addEventListener('click',()=>{
    acu++
    actualizar()
    hab_disp()
  
})

const pepe=new Mago('Adrian',valorAleatorio(1,5),valorAleatorio(5,10),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))


const hab_disp=()=>{    
pepe.habilidades.forEach(habilidad=>{
    hab_cont++
    variableUsada=valorAleatorio(0,2)
    const habs=document.createElement('div')
    habs.innerHTML=`<h3 class='hab-group' id='hab${hab_cont}'><a >${habilidad.Nombre} ${hab_cont}</a></h3>`
    document.getElementById('hab-player').appendChild(habs)  

})
const fire1=document.getElementById('hab1')
fire1.addEventListener('mouseover',()=>{
    fire1.style.cursor='pointer'
})

fire1.addEventListener('click',()=>{
    const onom=document.createElement('div')
    onom.innerHTML=`<img src="/Gameproject/static/assets/dmgono.png"  id="onodmg">
                    <h2 id='dmg'>${pepe.danioHabilidad(0)}</h2>`   
    document.getElementById('Enemy').appendChild(onom) 
    
})
const fire2=document.getElementById('hab2')
fire2.addEventListener('mouseover',()=>{
    fire2.style.cursor='pointer'
})

fire2.addEventListener('click',()=>{
    const onom=document.createElement('div')
    onom.innerHTML=`<img src="/Gameproject/static/assets/dmgono.png"  id="onodmg">
                    <h2 id='dmg'>${pepe.danioHabilidad(1)}</h2>`   
    document.getElementById('Enemy').appendChild(onom)   
 
})
const fire3=document.getElementById('hab3')
fire3.addEventListener('mouseover',()=>{
    fire3.style.cursor='pointer'
})


fire3.addEventListener('click',()=>{
    
    const onom=document.createElement('div')
    onom.innerHTML=`<img src="/Gameproject/static/assets/dmgono.png"  id="onodmg">
                    <h2 id='dmg'>${pepe.danioHabilidad(2)}</h2>`   
    document.getElementById('Enemy').appendChild(onom) 
    
    // alert('daño :'+pepe.habilidades[2].Danio)
})
}





// function fire (){
       

// }

// let informa=valorAleatorio(0,2)

