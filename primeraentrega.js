// D&D , simulador de creacion de personaje //



let nombre=prompt('que nombre tendra el personaje? (minimo 3 caracteres)')
let confirmaPersonaje=false
let cantidadDeRounds=valorAleatorio(1,6)
let iniciativaJugador=0
let iniciativaEnemigo=0
let golpeTuyo=0
let golpeEnemigo=0
let dañoTotalTuyo=0
let dañoTotalEnemigo=0
let eleccion=''


  
if ((nombre.length >= 3) &&(nombre.length <=12 ) ) {
    
    do {
    let eleccion=prompt('que clase vas a elegir?? (Bardo,Mago,Guerrero)') // <-- que clase vas a elegir?

    

 
    // -- asignacion de estadisticas -- //
    switch (eleccion) {   
        case 'Bardo':
            
           
            clase=new Bardo(nombre,valorAleatorio(1,5),valorAleatorio(1,8),valorAleatorio(5,10),valorAleatorio(1,8),valorAleatorio(5,10))
            
            break 
        case 'Guerrero':
            
           
            clase=new Guerrero(nombre,valorAleatorio(5,10),valorAleatorio(1,5),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))

            break
        case 'Mago':
            
             
            clase=new Mago(nombre,valorAleatorio(1,5),valorAleatorio(5,10),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))
            break
        default:
            alert('hubo un error entra otra vez')
            break
    }

   
    confirmaPersonaje= confirm('Tu nombre es '+clase.nombre+' y la clase elegida es '+eleccion+' y los stats son:'+'\nFuerza: '+clase.fuerza+'\nCarisma: '+clase.carisma+'\nInteligencia: '+clase.inteligencia+'\nDestreza: '+clase.destreza+'\nConstitucion: '+clase.constitucion+'\nVida: '+clase.vida()+'\nEstas de acuerdo o volvemos a empezar?')
    } while (confirmaPersonaje==false)
   
}
else{
alert('hubo un error ingresando el nombre , volve a empezar')
}



alert('te encuentras con un enemigo que esta dispuesto a pelear! la pelea durara '+cantidadDeRounds+' encuentros')


for (let i=1; i<=cantidadDeRounds; i++ ){
    
    alert("evento numero: "+i)
    if (Hit()===false) {
        // golpeTuyo=valorAleatorio(1,15)
        usoDeHabilidad=valorAleatorio(0,2)
        danioHabilidad=clase.daniohabilidad(usoDeHabilidad)
        habilidadUsada=clase.habilidadUsada(usoDeHabilidad)
        alert('Aciertas!\nUtilizas '+habilidadUsada+'!!\nTu daño es de: '+danioHabilidad)
        vidaenemigo-=danioHabilidad
    }
    else {
        golpeEnemigo=valorAleatorio(1,15)
        vida-=golpeEnemigo
        alert('Te golpean!!!\nRecibes la siguiente cantidad  de daño:  '+golpeEnemigo+' tu vida ahora es de: '+vida)
        }
    }
    