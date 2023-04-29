const Inicio = () =>{
    document.querySelector('.selector').remove()
    document.getElementById('classDesc').remove()           
    document.getElementById('habilidades').remove() 
    document.getElementById('cartelHab').remove()    
    
    
    introduccion()
}

function Yaexiste(){
    if (!encontre.clase==''){
        document.querySelector('.selector').remove()
        document.getElementById('classDesc').remove()
        introduccion()       

    }
}




const introduccion =()=>{
    document.body.style.backgroundImage='url(/Gameproject/static/assets/background3_1.jpg)'
    
   switch (encontre.eleccion) {
        case 'mago':
            document.getElementById('showscreen').innerHTML=`<p id='beggining'>En las vastas tierras de Faerûn, existe un poderoso mago conocido como ${encontre.clase.nombre}, quien ha viajado por todo el continente en busca de nuevos conocimientos y aventuras. Con su sabiduría y habilidades mágicas, ha ayudado a innumerables personas a lo largo de su camino, ganando así una gran reputación como un poderoso hechicero.
            ${encontre.clase.nombre} comenzó su carrera en la Academia Arcana de Waterdeep, donde estudió bajo la tutela de algunos de los magos más renombrados del mundo. Después de graduarse con honores, ${clase.nombre} decidió viajar por el mundo para ganar experiencia y conocimiento, y pronto se convirtió en un aventurero errante.
            Ahora, después de años de viajar, ${encontre.clase.nombre} ha llegado a un pequeño pueblo en el borde de la frontera de la civilización conocida. Allí, descubre una antigua profecía que dice que un gran mal se acerca y que sólo un poderoso mago será capaz de detenerlo. Creyendo que él es el elegido, ${encontre.clase.nombre} decide emprender una nueva aventura para proteger el mundo de la oscuridad que se avecina.
            Armado con sus habilidades mágicas y una determinación inquebrantable, ${encontre.clase.nombre} se adentra en lo desconocido, enfrentándose a peligrosas criaturas y desafíos inimaginables. Pero a medida que se acerca al final de su búsqueda, se da cuenta de que hay más en juego de lo que nunca imaginó, y que su verdadera prueba aún está por venir. ¿Será ${encontre.clase.nombre} lo suficientemente poderoso para cumplir su destino y salvar al mundo de la destrucción total?</p>`
            break;
        
        case 'guerrero':
            document.getElementById('showscreen').innerHTML=`<p id='beggining'>En las peligrosas tierras de Faerûn, existe un poderoso guerrero conocido como ${encontre.clase.nombre}, quien ha pasado gran parte de su vida en el campo de batalla. Con su coraje y habilidades en la lucha, ha ganado una gran reputación como uno de los guerreros más valientes y temidos del continente.
            ${encontre.clase.nombre} comenzó su carrera como soldado en el ejército de la ciudad de Baldur's Gate, donde se destacó rápidamente por su valentía y habilidades en la lucha. Después de varias victorias y hazañas, ${encontre.clase.nombre} decidió dejar el ejército y aventurarse por cuenta propia como un mercenario.
            Ahora, después de años de luchar en innumerables batallas y aventuras, ${encontre.clase.nombre} ha llegado a un pequeño pueblo en el borde de la frontera de la civilización conocida. Allí, descubre que una peligrosa banda de bandidos está aterrorizando a la población local y saqueando las aldeas cercanas. Dispuesto a ayudar, ${encontre.clase.nombre} decide unirse a un grupo de aventureros para enfrentar a los bandidos y proteger a los inocentes.
            Con su espada y su escudo en mano, ${encontre.clase.nombre} se adentra en el territorio enemigo, enfrentándose a peligrosas trampas y desafíos mortales. Pero a medida que avanza, se da cuenta de que la banda de bandidos no es sólo una simple organización delictiva, sino que están vinculados a una trama mucho más siniestra que podría amenazar a todo el reino.  
            Determinado a descubrir la verdad y proteger a los inocentes, ${encontre.clase.nombre} lidera a su grupo de aventureros hacia el corazón del territorio enemigo, donde enfrentarán su mayor desafío hasta el momento. ¿Será ${encontre.clase.nombre} lo suficientemente valiente y astuto para enfrentar a los bandidos y descubrir la verdad detrás de su malvado plan? La aventura apenas comienza.</p>`
            break; 

        case 'bardo':
            document.getElementById('showscreen').innerHTML=`<p id='beggining'>En las fascinantes tierras de Faerûn, existe un talentoso bardo conocido como ${clase.nombre}, quien ha viajado por todo el continente en busca de inspiración para sus canciones y relatos. Con su habilidad para la música y la narración, ha ganado una gran reputación como uno de los bardos más versátiles y aclamados del mundo.
            ${encontre.clase.nombre} comenzó su carrera en la Universidad Barda de Silverymoon, donde estudió bajo la tutela de algunos de los mejores bardos del mundo. Después de graduarse con honores, ${clase.nombre} decidió viajar por el mundo para ganar experiencia y encontrar nuevas historias para contar. Pronto se convirtió en un aventurero errante, participando en todo tipo de misiones y ayudando a los necesitados.
            Ahora, después de años de viajar y recolectar historias, ${encontre.clase.nombre} ha llegado a un pequeño pueblo en el borde de la civilización conocida. Allí, descubre que un antiguo tesoro ha sido robado y se encuentra en manos de una peligrosa banda de ladrones. Conmovido por la historia detrás del tesoro y el sufrimiento que ha causado su pérdida, ${encontre.clase.nombre} decide emprender una nueva aventura para recuperarlo y devolverlo a su legítimo dueño.
            Armado con su laúd y su ingenio, ${encontre.clase.nombre} se adentra en territorio enemigo, enfrentando desafíos musicales y peligros mortales. Pero a medida que avanza en su búsqueda, descubre que hay más en juego de lo que nunca imaginó, y que sus habilidades como bardo pueden ser la clave para desentrañar la verdad detrás del robo del tesoro y la trama más grande detrás de él.
            Con su música y sus relatos, ${encontre.clase.nombre} lidera a su grupo de aventureros en una emocionante búsqueda para recuperar el tesoro y descubrir la verdad detrás del misterio que lo rodea. ¿Será ${clase.nombre} lo suficientemente astuto y talentoso para enfrentar a los ladrones y resolver el enigma que se esconde detrás del tesoro? La aventura apenas comienza.</p>`
            break;
            }
        }
        

        


const Iniciox2 = () =>{
    console.log("antes ",clase.vida)
    enemigo=GeneradorEnemigo()  
}
    


const Acto1 = () =>{
    if (eleccion == 'mago')
    {alert('como mago la sobas')
    
}   else if (eleccion =='guerrero') {
    alert('como guerrero la sobas')
}   else
    {alert('como bardo la sobas')}
}