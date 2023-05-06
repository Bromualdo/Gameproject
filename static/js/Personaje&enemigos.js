
class Mago{
    constructor(fuerza,inteligencia,carisma,destreza,constitucion){
    this.nombre='Mago'
    this.fuerza=parseInt(fuerza)
    this.inteligencia=parseInt(inteligencia)
    this.carisma=parseInt(carisma)
    this.destreza=parseInt(destreza)
    this.constitucion=parseInt(constitucion)
    this.vida=parseInt(40*(constitucion/5))
    this.portrait="url(/Gameproject/static/assets/wizard2.jpg)"
    this.habilidades =[ {
        Nombre:'Misil Magico',
        Danio:10,
       }
    ,{Nombre:'Bola de Fuego',
    Danio:20,
   },
    {Nombre:'Saeta de hielo',
    Danio:15,
    }]
     
    this.danioHabilidad= function(number){
        
        let daniototal=this.habilidades[number].Danio*inteligencia/5
        return daniototal
    }
    this.habilidadUsada = function(number) {
        return this.habilidades[number].Nombre
    }
    this.aprenderHabilidad= function(ob){
        return this.habilidades.push(ob)
    }
   
}

}




class Guerrero{
    constructor(fuerza,inteligencia,carisma,destreza,constitucion){
    this.nombre='Guerrero'
    this.fuerza=parseInt(fuerza)
    this.inteligencia=parseInt(inteligencia)
    this.carisma=parseInt(carisma)
    this.destreza=parseInt(destreza)
    this.constitucion=parseInt(constitucion)
    this.vida=parseInt(60*(constitucion/5))
    this.portrait="url(/Gameproject/static/assets/wizard3.jpg)"
    this.habilidades =[ {
        Nombre:"Golpe Brutal",
        Danio:20}
    ,{Nombre:"Golpe Desafiante",
    Danio:20},
    {Nombre:"Cien Filos"
    ,Danio:15}]
    

    this.danioHabilidad= function(number){
        
        let daniototal=this.habilidades[number].Danio*fuerza/5
        return daniototal
    }
    this.habilidadUsada = function(number) {
        return this.habilidades[number].Nombre
    }
    this.aprenderHabilidad= function(ob){
        return this.habilidades.push(ob)
    }
    this.showhabilidades=function(){
        return habilidades
    }
}

}

class Bardo{
    constructor(fuerza,inteligencia,carisma,destreza,constitucion){
   this.nombre='Bardo'
    this.fuerza=parseInt(fuerza)
    this.inteligencia=parseInt(inteligencia)
    this.carisma=parseInt(carisma)
    this.destreza=parseInt(destreza)
    this.constitucion=parseInt(constitucion)
    this.vida=parseInt(50*(constitucion/5)) 
    this.portrait="url(/Gameproject/static/assets/bard3.jpg)"
    this.habilidades =[ {
        Nombre:"Cancion violenta",
        Danio:20}
    ,{Nombre:"Notas Punzantes",
    Danio:15},
    {Nombre:"Desafinacion"
    ,Danio:10}]

 

    this.danioHabilidad= function(number){
        
        let daniototal=this.habilidades[number].Danio*carisma/5
        return daniototal
    }
    this.habilidadUsada = function(number) {
        return this.habilidades[number].Nombre
    }
    this.aprenderHabilidad= function(ob){
        return this.habilidades.push(ob)
    }
    this.showhabilidades=function(){
        return habilidades
    }
}

}

class Esqueleto{
    constructor(fuerza,destreza,constitucion){
    this.nombre="Esqueleto"
    this.fuerza=parseInt(fuerza)
    this.destreza=parseInt(destreza)
    this.constitucion=parseInt(constitucion)
    this.vida=parseInt(20*(constitucion/4))
    this.portrait="url(/Gameproject/static/assets/skeletal_enemy.jpg)"
    this.habilidades =[ {
        Nombre:"Carga",
        Danio:30}
    ,{Nombre:"Golpe",
    Danio:15},
    {Nombre:"Salto oseo"
    ,Danio:15}]

  

    this.danioHabilidad= function(number){
        
        let daniototal=this.habilidades[number].Danio*fuerza/5
        return daniototal
    }
    this.habilidadUsada = function(number) {
        return this.habilidades[number].Nombre
    }
    
    this.showhabilidades=function(){
        return habilidades
    }
}

}

class ArañaG{
    constructor(fuerza,destreza,constitucion){
    this.nombre="Araña Grande"
    this.fuerza=parseInt(fuerza)
    this.destreza=parseInt(destreza)
    this.constitucion=parseInt(constitucion)
    this.vida=parseInt(20*(constitucion/4))
    this.portrait="url(/Gameproject/static/assets/spider.jpg)"
    this.habilidades =[{
        Nombre:"Mordida",
        Danio:15},
        {Nombre:"Veneno",
        Danio:10,
        },{
        Nombre:"Enredar",
        Danio:15   
        }
    ]
   
   

    this.danioHabilidad= function(number){
        
        let daniototal=this.habilidades[number].Danio*fuerza/5
        return daniototal
    }
    this.habilidadUsada = function(number) {
        return habilidades[number].Nombre
    }
    
    this.showhabilidades=function(){
        return habilidades
    }
}

}
class Hlobo{
    constructor(fuerza,destreza,constitucion){
    this.nombre="Hombre Lobo"
    this.fuerza=parseInt(fuerza)
    this.destreza=parseInt(destreza)
    this.constitucion=parseInt(constitucion)
    this.vida=parseInt(50*(constitucion/7))
    this.portrait="url(/Gameproject/static/assets/werewolf.jpg)"
    this.habilidades =[ {
        Nombre:"Mordida",
        Danio:15
    }
    ,{
        Nombre:"Ataque bestial",
        Danio:30
},
    {
        Nombre:"Arañazo",
        Danio:20
    }
]
  
   
    this.danioHabilidad= function(number){
        
        let daniototal=this.habilidades[number].Danio*fuerza/5
        return daniototal
    }
    this.habilidadUsada = function(number) {
        return habilidades[number].Nombre
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

function posicionamientoImg(espacio,transicion,imagen,posicion )
{
    espacio.style.backgroundImage=`url(/Gameproject/static/assets/${imagen}.jpg)`
    espacio.style.backgroundPosition=`${posicion}`
    transicion.style.backgroundImage=`url(/Gameproject/static/assets/${imagen}sm.jpg)`
    transicion.style.backgroundPosition=`${posicion}`
}       

function restarhab() {
    document.getElementById('habilidades').remove()
    comprobador--
}

const GeneradorEnemigo = () =>{
    enemigos=[]
    EsqueletoVar=new Esqueleto(valorAleatorio(1,4),valorAleatorio(1,2),valorAleatorio(5,20))
    ArañaVar=new ArañaG(valorAleatorio(2,5),valorAleatorio(3,4),valorAleatorio(6,15))
    HloboVar=new Hlobo(valorAleatorio(5,10),valorAleatorio(3,8),valorAleatorio(5,25))
    enemigos.push(EsqueletoVar,ArañaVar,HloboVar)

    return enemigos[valorAleatorio(0,2)]
}

function relocalizacion() {
    const reloc= continue_user.retrato.slice(32)
 
    switch (reloc) {
     case 'wizard2.jpg")':
         document.getElementById('Player').style.backgroundPosition='right center'
         break;
     case 'warrior3.jpg")':
         document.getElementById('Player').style.backgroundPosition='top'
     break;
     case 'bard3.jpg")':
         document.getElementById('Player').style.backgroundPosition='bottom'
     break;
     default:
     case 'fwizard.jpg")':
         document.getElementById('Player').style.backgroundPosition='center'
     break;    
     case 'fwarrior.jpg")':
         document.getElementById('Player').style.backgroundPosition='right bottom'
     break;
     case 'fbard.jpg")':
         document.getElementById('Player').style.backgroundPosition='top left'
     break;
    }
 }
 
