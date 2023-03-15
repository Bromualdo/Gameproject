// D&D , simulador de creacion de personaje //

const valorAleatorio = (min,max) =>
{
min = Math.ceil(min)
max = Math.floor(max)
 
return Math.floor(Math.random() * (max - min + 1) + min)
}
let nombre=prompt('que nombre tendra el personaje? (minimo 3 caracteres)')
let fuerza=parseInt(0)
let carisma=parseInt(0)
let inteligencia=parseInt(0)
let vida=parseInt(100)
let vidaenemigo=parseInt(100)
let confirmaPersonaje=false
let cantidadDeRounds=parseInt(valorAleatorio(1,6))
let iniciativaJugador=parseInt(0)
let iniciativaEnemigo=parseInt(0)
let golpeTuyo=parseInt(0)
let golpeEnemigo=parseInt(0)
let dañoTotalTuyo=parseInt(0)
let dañoTotalEnemigo=parseInt(0)



const Hit = () =>{
    let acerto =false
    
    if (valorAleatorio(0,10) >5){
        
        return acerto=true
    }
    else{
        return acerto=false
    }
    
    
}
  
if ((nombre.length >= 3) &&(nombre.length <=12 ) ) {
    
    do {
    let clase=prompt('que clase vas a elegir?? (Bardo,Mago,Guerrero)') // <-- que clase vas a elegir?

    

 
    // -- asignacion de estadisticas -- //
    switch (clase) {   
        case 'Bardo':
            fuerza=valorAleatorio(1,5)
            carisma=valorAleatorio(5,10)
            inteligencia=valorAleatorio(1,8)
            
            break 
        case 'Guerrero':
            fuerza=valorAleatorio(5,10)
            carisma=valorAleatorio(1,8)
            inteligencia=valorAleatorio(1,5)
            
            break
        case 'Mago':
            fuerza=valorAleatorio(1,5)
            carisma=valorAleatorio(1,8)
            inteligencia=valorAleatorio(5,10)      
            
            break
        default:
            alert('hubo un error entra otra vez')
            break
    }

    
    confirmaPersonaje= confirm('Tu nombre es '+nombre+' y la clase elegida es '+Clase+' y los stats son:'+'\nFuerza: '+Fuerza+'\nCarisma: '+Carisma+'\nInteligencia: '+Inteligencia+'\nEstas de acuerdo o volvemos a empezar?')
    } while (confirmaPersonaje==false)
}
else{
alert('hubo un error ingresando el nombre , volve a empezar')
}

alert('te encuentras con un enemigo que esta dispuesto a pelear! la pelea durara '+cantidadDeRounds+' encuentros')


for (let i=1; i<=cantidadDeRounds; i++ ){
    // iniciativaJugador=valorAleatorio(0,10)
    // iniciativaEnemigo=valorAleatorio(0,10)
   
    if (Hit()===false) {
        golpeTuyo=valorAleatorio(1,15)
        alert('Aciertas!\nTu daño es de: '+golpeTuyo)
        vidaenemigo-=golpeTuyo
    }
    else {
        golpeEnemigo=valorAleatorio(1,15)
        vida-=golpeEnemigo
        alert('Te golpean!!!\nRecibes la siguiente cantidad  de daño:  '+golpeEnemigo+' tu vida ahora es de: '+vida)
        }
    }
    