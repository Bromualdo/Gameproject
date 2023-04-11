
const introduccion =()=>{
   switch (eleccion) {
    case 'mago':
        document.getElementById('select-screen').innerHTML=`<p id='beggining'>En las vastas tierras de Faerûn, existe un poderoso mago conocido como ${clase.nombre}, quien ha viajado por todo el continente en busca de nuevos conocimientos y aventuras. Con su sabiduría y habilidades mágicas, ha ayudado a innumerables personas a lo largo de su camino, ganando así una gran reputación como un poderoso hechicero.

        ${clase.nombre} comenzó su carrera en la Academia Arcana de Waterdeep, donde estudió bajo la tutela de algunos de los magos más renombrados del mundo. Después de graduarse con honores, ${clase.nombre} decidió viajar por el mundo para ganar experiencia y conocimiento, y pronto se convirtió en un aventurero errante.
        
        Ahora, después de años de viajar, ${clase.nombre} ha llegado a un pequeño pueblo en el borde de la frontera de la civilización conocida. Allí, descubre una antigua profecía que dice que un gran mal se acerca y que sólo un poderoso mago será capaz de detenerlo. Creyendo que él es el elegido, ${clase.nombre} decide emprender una nueva aventura para proteger el mundo de la oscuridad que se avecina.
        
        Armado con sus habilidades mágicas y una determinación inquebrantable, ${clase.nombre} se adentra en lo desconocido, enfrentándose a peligrosas criaturas y desafíos inimaginables. Pero a medida que se acerca al final de su búsqueda, se da cuenta de que hay más en juego de lo que nunca imaginó, y que su verdadera prueba aún está por venir. ¿Será ${clase.nombre} lo suficientemente poderoso para cumplir su destino y salvar al mundo de la destrucción total?</p>`
        
        break;
    case 'guerrero':
        document.getElementById('select-screen').innerHTML=`<p id='beggining'>En las peligrosas tierras de Faerûn, existe un poderoso guerrero conocido como ${clase.nombre}, quien ha pasado gran parte de su vida en el campo de batalla. Con su coraje y habilidades en la lucha, ha ganado una gran reputación como uno de los guerreros más valientes y temidos del continente.

        ${clase.nombre} comenzó su carrera como soldado en el ejército de la ciudad de Baldur's Gate, donde se destacó rápidamente por su valentía y habilidades en la lucha. Después de varias victorias y hazañas, ${clase.nombre} decidió dejar el ejército y aventurarse por cuenta propia como un mercenario.

        Ahora, después de años de luchar en innumerables batallas y aventuras, ${clase.nombre} ha llegado a un pequeño pueblo en el borde de la frontera de la civilización conocida. Allí, descubre que una peligrosa banda de bandidos está aterrorizando a la población local y saqueando las aldeas cercanas. Dispuesto a ayudar, ${clase.nombre} decide unirse a un grupo de aventureros para enfrentar a los bandidos y proteger a los inocentes.

        Con su espada y su escudo en mano, ${clase.nombre} se adentra en el territorio enemigo, enfrentándose a peligrosas trampas y desafíos mortales. Pero a medida que avanza, se da cuenta de que la banda de bandidos no es sólo una simple organización delictiva, sino que están vinculados a una trama mucho más siniestra que podría amenazar a todo el reino.

        Determinado a descubrir la verdad y proteger a los inocentes, ${clase.nombre} lidera a su grupo de aventureros hacia el corazón del territorio enemigo, donde enfrentarán su mayor desafío hasta el momento. ¿Será ${clase.nombre} lo suficientemente valiente y astuto para enfrentar a los bandidos y descubrir la verdad detrás de su malvado plan? La aventura apenas comienza.</p>`
    default:
    case 'bardo':
        document.getElementById('select-screen').innerHTML=document.getElementById('select-screen').innerHTML=`<p id='beggining'>En las fascinantes tierras de Faerûn, existe un talentoso bardo conocido como ${clase.nombre}, quien ha viajado por todo el continente en busca de inspiración para sus canciones y relatos. Con su habilidad para la música y la narración, ha ganado una gran reputación como uno de los bardos más versátiles y aclamados del mundo.

        ${clase.nombre} comenzó su carrera en la Universidad Barda de Silverymoon, donde estudió bajo la tutela de algunos de los mejores bardos del mundo. Después de graduarse con honores, ${clase.nombre} decidió viajar por el mundo para ganar experiencia y encontrar nuevas historias para contar. Pronto se convirtió en un aventurero errante, participando en todo tipo de misiones y ayudando a los necesitados.
        
        Ahora, después de años de viajar y recolectar historias, ${clase.nombre} ha llegado a un pequeño pueblo en el borde de la civilización conocida. Allí, descubre que un antiguo tesoro ha sido robado y se encuentra en manos de una peligrosa banda de ladrones. Conmovido por la historia detrás del tesoro y el sufrimiento que ha causado su pérdida, ${clase.nombre} decide emprender una nueva aventura para recuperarlo y devolverlo a su legítimo dueño.
        
        Armado con su laúd y su ingenio, ${clase.nombre} se adentra en territorio enemigo, enfrentando desafíos musicales y peligros mortales. Pero a medida que avanza en su búsqueda, descubre que hay más en juego de lo que nunca imaginó, y que sus habilidades como bardo pueden ser la clave para desentrañar la verdad detrás del robo del tesoro y la trama más grande detrás de él.
        
        Con su música y sus relatos, ${clase.nombre} lidera a su grupo de aventureros en una emocionante búsqueda para recuperar el tesoro y descubrir la verdad detrás del misterio que lo rodea. ¿Será ${clase.nombre} lo suficientemente astuto y talentoso para enfrentar a los ladrones y resolver el enigma que se esconde detrás del tesoro? La aventura apenas comienza.</p>`
        break;
   }
}
const Inicio = () =>{
    document.querySelector('.selector').remove()
    document.getElementById('classDesc').remove()
    document.getElementById('welcome').remove()
    document.getElementById('habilidades').remove()   

    introduccion()
}

const Iniciox2 = () =>{
    console.log("antes ",clase.vida)
    enemigo=GeneradorEnemigo()  
    Combate(clase,enemigo)
    
    document.getElementById('select-screen').innerHTML=`<p id='beggining'>Al aceptar la tarea de Cedric, el anciano del pueblo, decides comenzar tu investigación hablando con los habitantes de Millfield. 
Empiezas a hacer preguntas y pronto te enteras de que las personas desaparecidas tenían poco en común, 
excepto que todas vivían cerca del bosque al sur del pueblo.
Decides dirigirte al bosque para investigar más a fondo. Al entrar en el bosque, te encuentras con una cabaña aislada en medio de los árboles. 
Al acercarte, te das cuenta de que hay una extraña energía que emana de la cabaña.
Con cautela, te acercas a la puerta y la abres. Dentro, encuentras a un anciano sentado frente a un libro enorme.
Te presenta como un mago y te explica que ha estado investigando un antiguo hechizo que ha sido despertado en el bosque.</p>`
    console.log(clase.vida)
}

const Acto1 = () =>{
    if (eleccion == 'mago')
    {alert('como mago la sobas')
    
}   else if (eleccion =='guerrero') {
    alert('como guerrero la sobas')
}   else
    {alert('como bardo la sobas')}
}