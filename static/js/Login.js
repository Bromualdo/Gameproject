

const arr_usuarios=[]
const botonLogin=document.getElementById('login')   
botonLogin.addEventListener('mouseover',()=>{
    botonLogin.style.cursor='pointer'
})


const allow = ()=>{
        let gimme_usuario=document.getElementById('in-user').value
        let gimme_password=document.getElementById('in-pass').value
        botonLogin.style.cursor='pointer'
    

    logrequest=localStorage.getItem('usuarios')
    const UserJSON=JSON.parse(logrequest)
    if (UserJSON){
    for (let i of UserJSON) {        
        
        console.log(i)
        if (i.usuario===gimme_usuario && i.password===gimme_password){
        alert('bienvenido')
        window.location ="/Gameproject/template/index.html"
        break
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Usuario incorrecto!',
               
              })
            }
    }
}else{
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Usuario incorrecto!',
      })
}
}
botonLogin.addEventListener('click',allow)
const botonRegistrarse=document.getElementById('registrarse')
botonRegistrarse.addEventListener('mouseover',()=>{
    botonRegistrarse.style.cursor='pointer'
})
function save_usuario(){
    botonRegistrarse.style.cursor='pointer'
    let give_usuario=document.getElementById('in-user').value
    let give_password=document.getElementById('in-pass').value


    if (give_usuario && give_password && give_usuario.length > 3 && give_password.length>5){

        usuario_com={"usuario":give_usuario,"password":give_password}
        arr_usuarios.push(usuario_com)
        arr_usuarios_json=JSON.stringify(arr_usuarios)
        localStorage.setItem("usuarios",arr_usuarios_json)
        Swal.fire({
            position: 'top-right',
            icon: 'success',
            title: 'Usuario creado con exito!!!',
            showConfirmButton: false,
            timer: 1500
          })
        
        } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario o contraseña muy cortos! intenta hacerlos mas largos',
           
          })
          
    }
}

botonRegistrarse.addEventListener('click',save_usuario)



