let text = document.querySelector("#typewrite").textContent;
const el = document.querySelector("#typewrite");

el.innerHTML = "";

let i = 0;
let contador = 0; 

function addChar() {
  el.innerHTML += text.charAt(i);
  i++;

  if (i <= text.length) {
    setTimeout(addChar,50); //Velocidad del typewriter
  }
}

addChar();

const btn_continuar=document.getElementById("btncontinuar")

btn_continuar.addEventListener('mouseover',()=>{
    btn_continuar.style.cursor='pointer'
})

btn_continuar.addEventListener('click',eventos)

function eventos(){
    switch (contador) {
        case 0:            
            el.innerHTML = ""
            i = 0;
            text="Al adentrarte en las calles de Xyron, te diste cuenta de que la situación era peor de lo que pensabas. Había cadáveres en las calles, enfermos que pedían ayuda, y el miedo y la desesperación se palpaban en el ambiente. Decidiste comenzar tu búsqueda del medallón de oro robado, siguiendo las pistas que habías obtenido antes de llegar a la ciudad.Mientras caminabas por las calles, te encontraste con un hombre que te detuvo y te pidió ayuda. Su hija estaba enferma y necesitaba un remedio que solo se encontraba en el bosque cercano. A pesar de tus objetivos principales, no pudiste ignorar su sufrimiento y te ofreciste a ayudarlo.Juntos, salieron de la ciudad y te guió hasta el bosque. Mientras caminaban, el hombre comenzó a contarte sobre la historia de la ciudad, sobre cómo había sido próspera en el pasado, pero que todo cambió cuando apareció la plaga.Finalmente, llegaron a la ubicación donde se encontraba la hierba necesaria para la medicina."
           
            addChar();
            contador++;
            break;
    
        case 1:
            el.innerHTML = ""
            i = 0;
            text='Mientras caminabas con el hombre hacia la ubicación donde se encontraba la hierba, comenzaste a notar algunos signos extraños en el bosque. Ramas rotas, huellas grandes y profundos gruñidos eran algunos de ellos. Sin embargo, decidiste continuar y ayudar al hombre a encontrar la hierba necesaria para su hija.Finalmente, llegaron al lugar donde crecía la hierba, pero también se encontraron con un hombre lobo. La criatura estaba sentada sobre un tronco, mirándolos fijamente con sus ojos brillantes y afilados dientes. El hombre que te acompañaba comenzó a temblar de miedo y te pidió que corrieras, pero tu valentía te impidió huir'
            addChar()
           
            break;
        
        case 2:
          
            break;
    }
}

const logo=document.getElementById('logo')
logo.addEventListener('mouseover',()=>{
    logo.style.cursor='pointer'
    logo.className="animate__animated animate__headShake"
})
logo.addEventListener('mouseleave',()=>{
    logo.className='useless'
})
logo.addEventListener('click',()=>{
        
        Swal.fire({
            title: 'Este juego ha sido realizado por',          
            preConfirm: (login) => {
          return fetch(`//api.github.com/users/bromualdo`)
            .then(response => {                        
                return response.json()
                
            })
        
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            
            imageUrl: result.value.avatar_url,
            html:'<h1 id="wololo">Adrian Emmanuel Pozzi</h1>',
            confirmButtonText:'Gracias por jugar!'
            
        })
        }
      })

})
