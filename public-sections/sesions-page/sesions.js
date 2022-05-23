// CLASE USUARIO
class Player {
    constructor(user, pass, genero) {
        this.user = user;
        this.pass = pass;
        this.genero = genero;
    }
}

// ACCESO AL DOM

let saludo = document.querySelector('.inicio_de_sesion')

let formulario = document.getElementById('formulario');
let botonRegistrarse = document.querySelector('.btn_registrarse');
let mensajeDelregistro =  document.querySelector('.solo_para_el_registro');
let botonIniciarSesion = document.querySelector('.btn_iniciar_sesion');




// BOTONES DE LLAMADA INICIO/REGISTRO

function btnInicio() {

    document.getElementById('formulario').style.visibility = "visible"
    document.querySelector('.btn_iniciar_sesion').style.visibility = "visible"
    document.querySelector('.btn_registrarse').style.visibility = "hidden"

}


function btnRegistrarse() {

    document.getElementById('formulario').style.visibility = "visible"
    document.querySelector('.btn_registrarse').style.visibility = "visible"
    document.querySelector('.solo_para_el_registro').style.visibility = "visible"
    document.querySelector('.btn_iniciar_sesion').style.visibility = "hidden"

}




// BOTONES DE ACCION


// ************ INICIAR SESION ***********

function iniciarSesion(user, pass, genero) {

    botonIniciarSesion.style.visibility = "hidden"
   
    var guardado = localStorage.getItem('datos2');

    let userGenero = JSON.parse(guardado).genero
    let userNombre = JSON.parse(guardado).user

    if (userNombre === user) {

        if (pass == JSON.parse(guardado).pass) {

            document.getElementById('formulario').style.visibility = "hidden"
            document.querySelector('.btn_iniciar_sesion').style.visibility = "hidden"

            if (userGenero == 'hombre') {
                saludo.innerHTML = `
              <h2>Bienvenido ${userNombre}</h2>
              `
            } else if (userGenero == 'mujer') {
                saludo.innerHTML = `
            <h2>Bienvenida ${userNombre}</h2>
            `
            }

        } else {
            saludo.innerHTML = `
            <h2 class='error'>La contraseña no es correcta!</h2>
    
            <div class="btn" onclick="location.reload()">reintentar</div>
            `
            document.getElementById('formulario').style.visibility = "hidden"
        document.querySelector('.btn_iniciar_sesion').style.visibility = "hidden"
        }

    }else{
        saludo.innerHTML = `
        <h2 class='error'>Nombre de usuario incorrecto!</h2>

        <div class="btn" onclick="location.reload()">reintentar</div>
        `
        document.getElementById('formulario').style.visibility = "hidden"
        document.querySelector('.btn_iniciar_sesion').style.visibility = "hidden"
    }

}




// ******** REGISTRARSE **********  

function registrarse(user, pass, genero) {

    formulario.style.visibility = "hidden";
    botonRegistrarse.style.visibility = "hidden";
    mensajeDelregistro.style.visibility = "hidden";
    

    var nuevoUsuario = new Player(user, pass, genero)
    console.log(nuevoUsuario)

    localStorage.setItem('datos2', JSON.stringify(nuevoUsuario));

}