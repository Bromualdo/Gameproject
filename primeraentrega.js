// D&D , simulador de creacion de personaje //

const valorAleatorio = (min,max) =>
{
min = Math.ceil(min)
max = Math.floor(max)
 
return Math.floor(Math.random() * (max - min + 1) + min)
}
let Nombre=prompt('que nombre tendra el personaje? (minimo 3 caracteres)')
let Fuerza=parseInt(0)
let Carisma=parseInt(0)
let Inteligencia=parseInt(0)
let Vida=100
let Vidaenemigo=100
let ConfirmaPersonaje=false
let cantidadDeRounds=valorAleatorio(1,6)
let IniciativaJugador=0
let IniciativaEnemigo=0
let golpeTuyo=0
let golpeEnemigo=0
let DañoTotalTuyo=0
let DañoTotalEnemigo=0



const Hit = () =>{
    let Acerto =false
    
    if (valorAleatorio(0,10) >5){
        
        return Acerto=true
    }
    else{
        return Acerto=false
    }
    
    
}
  
if ((Nombre.length >= 3) &&(Nombre.length <=12 ) ) {
    
    do {
    let Clase=prompt('que clase vas a elegir?? (Bardo,Mago,Guerrero)') // <-- que clase vas a elegir?

    

 
    // -- asignacion de estadisticas -- //
    switch (Clase) {   
        case 'Bardo':
            Fuerza=valorAleatorio(1,5)
            Carisma=valorAleatorio(5,10)
            Inteligencia=valorAleatorio(1,8)
            
            break 
        case 'Guerrero':
            Fuerza=valorAleatorio(5,10)
            Carisma=valorAleatorio(1,8)
            Inteligencia=valorAleatorio(1,5)
            
            break
        case 'Mago':
            Fuerza=valorAleatorio(1,5)
            Carisma=valorAleatorio(1,8)
            Inteligencia=valorAleatorio(5,10)      
            
            break
        default:
            alert('hubo un error entra otra vez')
            break
    }

    
    ConfirmaPersonaje= confirm('Tu nombre es '+Nombre+' y la clase elegida es '+Clase+' y los stats son:'+'\nFuerza: '+Fuerza+'\nCarisma: '+Carisma+'\nInteligencia: '+Inteligencia+'\nEstas de acuerdo o volvemos a empezar?')
    } while (ConfirmaPersonaje==false)
}
else{
alert('hubo un error ingresando el nombre , volve a empezar')
}

alert('te encuentras con un enemigo que esta dispuesto a pelear! la pelea durara '+cantidadDeRounds+' encuentros')


for (let i=1; i<=cantidadDeRounds; i++ ){
    IniciativaJugador=valorAleatorio(0,10)
    IniciativaEnemigo=valorAleatorio(0,10)
   
    if (Hit()===false) {
        golpeTuyo=valorAleatorio(1,15)
        alert('Aciertas!\nTu daño es de: '+golpeTuyo)
        Vidaenemigo-=golpeTuyo
    }
    else {
        golpeEnemigo=valorAleatorio(1,15)
        Vida-=golpeEnemigo
        alert('Te golpean!!!\nRecibes la siguiente cantidad  de daño:  '+golpeEnemigo+' tu vida ahora es de: '+Vida)
        }
    }
    