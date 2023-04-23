
const com_btn=document.getElementById('btn-comenzar')
const cont_turnos=document.getElementById('turnos')
let acu =0


com_btn.addEventListener('mouseover',()=>{
    com_btn.style.cursor='pointer'
})

const actualizar =()=>{
    cont_turnos.innerText=`Turno° n°${acu}`
}

com_btn.addEventListener('click',()=>{
    acu++
    actualizar()
  
})

const pepe=new Mago('Adrian',valorAleatorio(1,5),valorAleatorio(5,10),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))


