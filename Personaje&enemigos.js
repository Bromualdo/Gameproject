const Clases=[]
class Mago{
    constructor(nombre,fuerza,inteligencia,carisma,destreza,constitucion){
    this.nombre=nombre
    this.fuerza=parseInt(fuerza)
    this.inteligencia=parseInt(inteligencia)
    this.carisma=parseInt(carisma)
    this.destreza=parseInt(destreza)
    this.constitucion=parseInt(constitucion)
       
    let habilidades =[ {
        Nombre:"Misil Magico",
        Danio:10}
    ,{Nombre:"Bola de Fuego",
    Danio:20},
    {Nombre:"Saeta de hielo"
    ,Danio:15}]

    this.vida=function(){
        let vidatotal=40*(constitucion/5)
        return vidatotal
    } 

    this.danioHabilidad= function(number){
        
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
    constructor(nombre,fuerza,inteligencia,carisma,destreza,constitucion){
    this.nombre=nombre
    this.fuerza=parseInt(fuerza)
    this.inteligencia=parseInt(inteligencia)
    this.carisma=parseInt(carisma)
    this.destreza=parseInt(destreza)
    this.constitucion=parseInt(constitucion)

    let habilidades =[ {
        Nombre:"Golpe Brutal",
        Danio:20}
    ,{Nombre:"Golpe Desafiante",
    Danio:20},
    {Nombre:"Cien Filos"
    ,Danio:15}]
    
    this.vida=function(){
        let vidatotal=60*(constitucion/5)
        return vidatotal
    } 

    this.danioHabilidad= function(number){
        
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
    constructor(nombre,fuerza,inteligencia,carisma,destreza,constitucion){
    this.nombre=nombre
    this.fuerza=parseInt(fuerza)
    this.inteligencia=parseInt(inteligencia)
    this.carisma=parseInt(carisma)
    this.destreza=parseInt(destreza)
    this.constitucion=parseInt(constitucion)
    
    let habilidades =[ {
        Nombre:"La llamada del viajero",
        Danio:20}
    ,{Nombre:"Notas Punzantes",
    Danio:15},
    {Nombre:"Instrumento desafinado"
    ,Danio:10}]

    this.vida=function(){
        let vidatotal=50*(constitucion/5)
        return vidatotal
    } 

    this.danioHabilidad= function(number){
        
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


// console.log(Clase.getHabilidades(0))

// a=Clase.showhabilidades()
// danioHabilidad=Clase.daniohabilidad(1)
// habilidadUsada=Clase.habilidadUsada(1)
// console.log("casteas "+habilidadUsada+" por "+danioHabilidad)
// ob={
//     Nombre:"Oda a los caidos",
//     Danio:10}
// habilidadAprendida=Clase.aprenderHabilidad(ob)
// habilidadUsada=Clase.habilidadUsada(3)
// console.log(habilidadUsada)



// const MagoVar=new Mago("adrian",20,20,20)
// const GuerreroVar= new Guerrero("pedro",20,20,20)

// Clases.push(MagoVar)
// Clases.push(GuerreroVar)

// console.log(Clases[0].habilidadUsada(1))


class Esqueleto{
    constructor(fuerza,destreza,constitucion){
    this.nombre="Esqueleto"
    this.fuerza=parseInt(fuerza)
    this.destreza=parseInt(destreza)
    this.constitucion=parseInt(constitucion)
    
    let habilidades =[ {
        Nombre:"Carga osea",
        Danio:30}
    ,{Nombre:"Ataque con espada",
    Danio:15},
    {Nombre:"Salto oseo"
    ,Danio:15}]

    this.vida=function(){
        let vidatotal=20*(constitucion/5)
        return vidatotal
    } 

    this.danioHabilidad= function(number){
        
        let daniototal=habilidades[number].Danio*fuerza/5
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

class ArañaG{
    constructor(fuerza,destreza,constitucion){
    this.nombre="Araña Grande"
    this.fuerza=parseInt(fuerza)
    this.destreza=parseInt(destreza)
    this.constitucion=parseInt(constitucion)
    
    let habilidades =[ {
        Nombre:"Ataque ponzoñoso",
        Danio:15}
    ,{Nombre:"Mordida entumecedora",
    Danio:10}]
   
    this.vida=function(){
        let vidatotal=50
        return vidatotal
    } 

    this.danioHabilidad= function(number){
        
        let daniototal=habilidades[number].Danio*fuerza/5
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
    
    let habilidades =[ {
        Nombre:"Garras y colmillos",
        Danio:15}
    ,{Nombre:"Ataque bestial",
    Danio:30}]

    this.vida=function(){
        let vidatotal=60
        return vidatotal
    } 
   
    this.danioHabilidad= function(number){
        
        let daniototal=habilidades[number].Danio*fuerza/5
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


const GeneradorEnemigo = () =>{
    enemigos=[]
    EsqueletoVar=new Esqueleto(valorAleatorio(1,4),valorAleatorio(1,2),valorAleatorio(1,3))
    ArañaVar=new ArañaG(valorAleatorio(1,3),valorAleatorio(1,5),valorAleatorio(1,2))
    HloboVar=new Hlobo(valorAleatorio(1,5),valorAleatorio(1,2),valorAleatorio(1,4))
    enemigos.push(EsqueletoVar,ArañaVar,HloboVar)
    return enemigos[valorAleatorio(0,2)]
}

enemigo=GeneradorEnemigo()
const clase=new Guerrero("adrian",valorAleatorio(5,10),valorAleatorio(1,5),valorAleatorio(1,8),valorAleatorio(1,8),valorAleatorio(5,10))


const Hit = (numero1,numero2) =>{
    let acerto =false
    let variable=valorAleatorio(0,18)
    resultado=variable+numero1-numero2 
    if (resultado >9){
        
        return acerto=true 
    }
    else{
        
        return acerto=false
    }  
   
    
}

const Combate =(var1,var2) =>{
    vidaPlayer=var1.vida()
    vidaEnem=var2.vida()
    console.log(vidaPlayer,vidaEnem,enemigo.nombre)
    i=1

    while (vidaPlayer>0 && vidaEnem > 0) {
        alert("Round "+i)
        variableUsada=valorAleatorio(0,2)
        usoHabilidad=var1.habilidadUsada(variableUsada)
        habilidadDmg=var1.danioHabilidad(variableUsada)
                variableUsadaEnem=valorAleatorio(0,1)
        usoHabilidadEnem=var2.habilidadUsada(variableUsadaEnem)
        habilidadDmgEnem=var2.danioHabilidad(variableUsadaEnem)*3
        
          
            alert("Tu Turno")
            if (Hit(clase.destreza,enemigo.destreza)==true){
                if (variableUsada <3){
                    alert('Aciertas!\nUtilizas '+usoHabilidad+'!!\nTu daño es de: '+habilidadDmg)
                    vidaEnem-=habilidadDmg
                    alert('su vida es de '+vidaEnem)    
                }
                }
                else {
                    alert("Tu enemigo esquiva tu ataque!!")
                }
        if (vidaEnem >0){
            alert("Turno Enemigo")
            if (Hit(enemigo.destreza,clase.destreza)==true){
            if (variableUsadaEnem <2){
                    alert(var2.nombre+ ' te Acierta!\nUso la habilidad '+usoHabilidadEnem+'!!\nSu daño es de: '+habilidadDmgEnem)
                    vidaPlayer-=habilidadDmgEnem
                    alert('tu vida es de '+vidaPlayer)
            } 
        }
            else {
                alert("Esquivas el ataque de tu enemigo!!")
            }
        
        }
        i++  
    }
if (vidaEnem <=0){
    alert("Derrotaste a tu enemigo!, la aventura continua")
    return vidaPlayer   
}   else{
    alert("Las fuerzas del mal te han superado ! intentalo otra vez!")
    
    }
}

    

Combate(clase,enemigo)
alert(vidaPlayer)