

const arr_usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

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
    for (found of UserJSON) {        
        
        
        if (found.usuario===gimme_usuario && found.password===gimme_password){
            sesion_usuario=localStorage.setItem('sesion',found.usuario)           
            
            window.location ="/Gameproject/template/index.html"
            bienvenida()
            
            
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
    let usuario_existente = arr_usuarios.find(usuario => usuario.usuario === give_usuario)

    if (usuario_existente) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El nombre de usuario ya existe intenta con otro',
        })
    } else if (give_usuario && give_password && give_usuario.length > 3 && give_password.length>5){
        usuario_com={"usuario":give_usuario,"password":give_password,'clase':'','eleccion':''}    
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
            text: 'Hubo un error, intenta crearlo otra vez!',
        })
    } 
}


