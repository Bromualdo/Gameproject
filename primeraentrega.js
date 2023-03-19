// D&D , simulador de creacion de personaje //

class Mago{
    constructor(nombre,fuerza,inteligencia,carisma){
    this.nombre=nombre
    this.fuerza=parseInt(fuerza)
    this.inteligencia=parseInt(inteligencia)
    this.carisma=parseInt(carisma)
       
    let habilidades =[ {
        Nombre:"Misil Magico",
        Danio:10}
    ,{Nombre:"Bola de Fuego",
    Danio:20},
    {Nombre:"Saeta de hielo"
    ,Danio:15}]

    this.daniohabilidad= function(number){
        
        let daniototal=habilidades[number].Danio*inteligencia/5
        return daniototal
    }
    this.habilidadUsada = function(number) {
        return habilidades[number].Nombre
    }
    this.aprenderHabilidad= function(ob){
        return habilidades.push(ob)
    }
    this.showhabilidades=function(){
        return habilidades
    }
}

}

class Guerrero{
    constructor(nombre,fuerza,inteligencia,carisma){
    this.nombre=nombre
    this.fuerza=parseInt(fuerza)
    this.inteligencia=parseInt(inteligencia)
    this.carisma=parseInt(carisma)
    
    let habilidades =[ {
        Nombre:"Golpe Brutal",
        Danio:20}
    ,{Nombre:"Golpe Desafiante",
    Danio:20},
    {Nombre:"Cien Filos"
    ,Danio:15}]

    this.daniohabilidad= function(number){
        
        let daniototal=habilidades[number].Danio*fuerza/5
        return daniototal
    }
    this.habilidadUsada = function(number) {
        return habilidades[number].Nombre
    }
    this.aprenderHabilidad= function(ob){
        return habilidades.push(ob)
    }
    this.showhabilidades=function(){
        return habilidades
    }
}

}

class Bardo{
    constructor(nombre,fuerza,inteligencia,carisma){
    this.nombre=nombre
    this.fuerza=parseInt(fuerza)
    this.inteligencia=parseInt(inteligencia)
    this.carisma=parseInt(carisma)
    
    let habilidades =[ {
        Nombre:"La llamada del viajero",
        Danio:10}
    ,{Nombre:"Notas Punzantes",
    Danio:20},
    {Nombre:"Instrumento desafinado"
    ,Danio:15}]

    this.daniohabilidad= function(number){
        
        let daniototal=habilidades[number].Danio*carisma/5
        return daniototal
    }
    this.habilidadUsada = function(number) {
        return habilidades[number].Nombre
    }
    this.aprenderHabilidad= function(ob){
        return habilidades.push(ob)
    }
    this.showhabilidades=function(){
        return habilidades
    }
}

}

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
let vida=100
let vidaenemigo=100
let confirmaPersonaje=false
let cantidadDeRounds=valorAleatorio(1,6)
let iniciativaJugador=0
let iniciativaEnemigo=0
let golpeTuyo=0
let golpeEnemigo=0
let dañoTotalTuyo=0
let dañoTotalEnemigo=0
let eleccion=''



const Hit = () =>{
    let Acerto =false
    
    if (valorAleatorio(0,10) >5){
        
        return Acerto=true
    }
    else{
        return Acerto=false
    }
    
    
}
  
if ((nombre.length >= 3) &&(nombre.length <=12 ) ) {
    
    do {
    let eleccion=prompt('que clase vas a elegir?? (Bardo,Mago,Guerrero)') // <-- que clase vas a elegir?

    

 
    // -- asignacion de estadisticas -- //
    switch (eleccion) {   
        case 'Bardo':
            
            // fuerza=valorAleatorio(1,5)
            // carisma=valorAleatorio(5,10)
            // inteligencia=valorAleatorio(1,8)
            clase=new Bardo(nombre,valorAleatorio(1,5),valorAleatorio(1,8),valorAleatorio(5,10))
            
            break 
        case 'Guerrero':
            
            // fuerza=valorAleatorio(5,10)
            // carisma=valorAleatorio(1,8)
            // inteligencia=valorAleatorio(1,5)
            clase=new Guerrero(nombre,valorAleatorio(5,10),valorAleatorio(1,5),valorAleatorio(1,8))

            break
        case 'Mago':
            
            // fuerza=valorAleatorio(1,5)
            // carisma=valorAleatorio(1,8)
            // inteligencia=valorAleatorio(5,10)      
            clase=new Mago(nombre,valorAleatorio(1,5),valorAleatorio(5,10),valorAleatorio(1,8))
            break
        default:
            alert('hubo un error entra otra vez')
            break
    }

   
    confirmaPersonaje= confirm('Tu nombre es '+clase.nombre+' y la clase elegida es '+eleccion+' y los stats son:'+'\nFuerza: '+clase.fuerza+'\nCarisma: '+clase.carisma+'\nInteligencia: '+clase.inteligencia+'\nEstas de acuerdo o volvemos a empezar?')
    } while (confirmaPersonaje==false)
   
}
else{
alert('hubo un error ingresando el nombre , volve a empezar')
}

alert('te encuentras con un enemigo que esta dispuesto a pelear! la pelea durara '+cantidadDeRounds+' encuentros')


for (let i=1; i<=cantidadDeRounds; i++ ){
    iniciativaJugador=valorAleatorio(0,10)
    iniciativaEnemigo=valorAleatorio(0,10)
   
    if (Hit()===false) {
        // golpeTuyo=valorAleatorio(1,15)
        usoDeHabilidad=valorAleatorio(0,2)
        danioHabilidad=clase.daniohabilidad(1)
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
    