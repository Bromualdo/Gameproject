
// const clicsEncuenta = () =>{
//     document.querySelector(".confirmar").onclick=()=>
//     {contador+=1}
    
// }

const Inicio = () =>{
    document.querySelector('.selector').remove()
    document.getElementById('classDesc').remove()
    document.getElementById('welcome').remove()
    
    

    document.getElementById('select-screen').innerHTML=`<p id='beggining'>Al entrar en el bullicioso pueblo de Millfield,un hombre con aspecto desesperado se acerca a ti. 
    Se presenta como Cedric, el anciano del pueblo, y explica que la ciudad ha sido víctima de una serie de misteriosas desapariciones. 
    La gente ha estado desapareciendo de sus hogares en medio de la noche sin dejar rastro, y las autoridades locales están desconcertadas.
    Cedric te suplica que lo ayudes a resolver el misterio y a encontrar a los habitantes desaparecidos. Ofrece una modesta cantidad de oro como recompensa por tu
     ayuda, pero también advierte que la situación es peligrosa y que debes tener cuidado.Aceptas ayudar y Cedric te entrega una lista de las personas desaparecidas 
     junto con un mapa de la zona circundante. También te aconseja que hables con los lugareños y recojas cualquier información que puedas sobre las desapariciones.Con un sentido de propósito, te dispones a investigar el misterio,listo para enfrentar cualquier peligro que se interponga en tu camino.`
}

const Iniciox2 = () =>{
    enemigo=GeneradorEnemigo()  
    Combate(clase,enemigo)
    
    document.getElementById('select-screen').innerHTML=`<p id='beggining'>Al aceptar la tarea de Cedric, el anciano del pueblo, decides comenzar tu investigación hablando con los habitantes de Millfield. 
Empiezas a hacer preguntas y pronto te enteras de que las personas desaparecidas tenían poco en común, 
excepto que todas vivían cerca del bosque al sur del pueblo.
Decides dirigirte al bosque para investigar más a fondo. Al entrar en el bosque, te encuentras con una cabaña aislada en medio de los árboles. 
Al acercarte, te das cuenta de que hay una extraña energía que emana de la cabaña.
Con cautela, te acercas a la puerta y la abres. Dentro, encuentras a un anciano sentado frente a un libro enorme.
Te presenta como un mago y te explica que ha estado investigando un antiguo hechizo que ha sido despertado en el bosque.</p>`
    
}