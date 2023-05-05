
let derecho = document.getElementById('habitantes2')
let izquierdo = document.getElementById('habitantes1')
let text = document.querySelector("#typewrite").textContent
const el = document.querySelector("#typewrite")




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

let enemigo=GeneradorEnemigo(valorAleatorio(0,2))
console.log(enemigo)
enemigo_json=JSON.stringify(enemigo)
localStorage.setItem("enemigo",enemigo_json)
function plotTwist(val1){
  switch (val1.nombre) {
    case 'Esqueleto':
            fetch('/Gameproject/static/assets/JSON/Argumento.json')
            .then((response) => response.json())
            .then((data) => {
                text=data[2].argumento               
            })
            
      break;  
     case 'Araña Grande':
            fetch('/Gameproject/static/assets/JSON/Argumento.json')
            .then((response) => response.json())
            .then((data) => {
            text=data[3].argumento               
          })
      break;
      case 'Hombre Lobo':
            fetch('/Gameproject/static/assets/JSON/Argumento.json')
            .then((response) => response.json())
            .then((data) => {
              text=data[4].argumento               
            })
      break;
      }


}




el.innerHTML = "";

let i = 0;
let acc = 0; 

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
    switch (acc) {
        case 0:    
              btn_continuar.className='animate__animated animate__fadeOut' 
              apdesboton(500,'none')                           
              
              
              diapositivas(6000,'streets.jpg','4s','fadeInRight',izquierdo,'fadeOut','5s',0,3500)                
              diapositivas(10000,'streets2.jpg','4s','fadeInLeft',derecho,'fadeOut','5s',0,3500)  
              diapositivas(15500,'sick.jpg','0.5s','fadeInRight',izquierdo,'fadeOut','0.5s',0,500)                
              diapositivas(17500,'sick2.jpg','0.5s','fadeInLeft',derecho,'fadeOut','0.5s',0,500)  
              diapositivas(19500,'sick3.jpg','0.5s','fadeInRight',izquierdo,'fadeOut','0.5s',0,500)                
              diapositivas(21500,'sick4.jpg','0.5s','fadeInLeft',derecho,'fadeOut','0.5s',0,500)  
              diapositivas(23500,'sick5.jpg','0.5s','fadeInRight',izquierdo,'bounceIn','1s',1,500)                
              diapositivas(25500,'sick6.jpg','0.5s','fadeInLeft',derecho,'bounceIn','1s',1,500)             

             

              el.innerHTML = ""
              i = -1;
              fetch('/Gameproject/static/assets/JSON/Argumento.json')
              .then((response) => response.json())
              .then((data) => {
              text=data[1].argumento   
              
              
              apdesboton(55000,'block')      
              btn_continuar.className=` animate__animated animate__fadeIn`     
            })

            addChar();
            acc++;
            break;
    
        case 1:
            el.innerHTML = ""
            i = -1;
            plotTwist(enemigo)
            addChar()
            acc++
            break;
        
        case 2:
          window.location ="/Gameproject/template/combate.html"            
          
          break;
          
    }
}


diapositivas(2000,'letter.jpg','5s','fadeInRight',izquierdo,'fadeOut','5s',0,5000)

diapositivas(20500,'leaving_home.jpg','5s','fadeInLeft',derecho,'fadeOut','4s',0,4000)

diapositivas(28500,'plaga2.jpg','5s','fadeInRight',izquierdo,'fadeOut','5s',0,5000)  

diapositivas(40500,'plaga.jpg','5s','fadeInLeft',derecho,'fadeOut','4s',0,4000)

apdesboton(61000,'block')

btn_continuar.className=` animate__animated animate__fadeIn`

function apdesboton(num,display)
{
  setTimeout(() => {
    btn_continuar.style.display=`${display}`    
  }, num);

}

function diapositivas(aparece,var1,tiempo,animacion,lado,animacion2,tiempo2,opacidad,trigger)
{
  setTimeout(() => {
    
  
  lado.style.backgroundImage=`url(/Gameproject/static/assets/${var1})` 



  setTimeout(()=>{
    lado.style.animation=`${animacion2}`
    lado.style.animationDuration=`${tiempo2}`
    lado.style.opacity=opacidad

  },trigger)

  lado.style.animation=`${animacion}`
  lado.style.animationDuration=`${tiempo}`
}, aparece);

}




