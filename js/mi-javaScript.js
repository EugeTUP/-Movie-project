document.addEventListener('DOMContentLoaded', inicializarBoton)

function inicializarBoton() {
    document.getElementById('btn-regis').addEventListener('click', function () {
        manchaGrande();
    });

    document.getElementById('btn-volver').addEventListener('click', function () {
        manchaGrande2();
    })

    document.getElementById('btn-crear').addEventListener('click', function () {
        validar();
    })  
}



// ---------------------| BOTON REGISTRARSE |-------------------------------------------

function cuadroGrande()
{
    var cuadro = document.grtById('cuadrado');
    cuadro.style.transition = ('height 1s');
    cuadro.style.height = '90%';
}


function manchaGrande() {
    var mancha = document.getElementById('man');

    
    mancha.style.transition = 'width 1s, height 1s';
    mancha.style.width = '100%';
    mancha.style.height = '100%';


    mancha.addEventListener('transitionend', function () {
        moverMancha();
    });
}

function moverMancha() {
    var mancha = document.getElementById('man');

    mancha.style.transition = 'top 1s, left 1s, width 1s, height 1s';
    mancha.style.top = '0';
    mancha.style.left = '0';
    mancha.style.borderRadius = '2px 2px 30px 2px';
    mancha.style.width = '30px';
    mancha.style.height = '30px';


    mancha.addEventListener('transitionend', function () {
        esconderLogin();
    });
}

function esconderLogin() {
    var form = document.getElementById('f-login');
    var titulo = document.getElementById('titulo');
    var signUp = document.getElementById('f-signUp');

    form.style.display = 'none';
    titulo.textContent = 'Sign Up';
    signUp.style.display = 'block';
}




// ---------------| BOTON VOLVER |-----------------------------------------------------------





function manchaGrande2() {
    var mancha = document.getElementById('man');

    mancha.style.transition = 'width 1s, height 1s';
    mancha.style.width = '100%';
    mancha.style.height = '100%';


    mancha.addEventListener('transitionend', function () {
        volverMancha();
    });
}

function volverMancha() {
    var mancha = document.getElementById('man');

    mancha.style.transition = 'revert-layer 2s, width 1s, height 1s';
    mancha.style.bottom = '0';
    mancha.style.right = '0';
    mancha.style.inset = 'revert-layer';
    mancha.style.borderRadius = '30px 2px 2px 2px';
    mancha.style.width = '30px';
    mancha.style.height = '30px';

    mancha.addEventListener('transitionend', function () {
        esconderSignUp();
    });
}


function esconderSignUp() {
    var formu = document.getElementById('f-signUp');
    var titulo = document.getElementById('titulo');
    var login = document.getElementById('f-login');

    formu.style.display = 'none';
    titulo.textContent = 'Log-In';
    login.style.display = 'block';
}


// ------------| VALIDACIONES |-------------------------------------------------------


function validar() {
    var nom = document.getElementById('txtNombre');
    var ape = document.getElementById('txtApellido');
    var mail = document.getElementById('txtmail');
    var pass = document.getElementById('txtpas');
    var conPass = document.getElementById('txtConfirmPass');


    if (nom.value === ''){
        swal("Campo requerido!", "...debe ingresar su nombre!");
        return false;
    }
    if (ape.value === ''){
        swal("Campo requerido!", "...debe ingresar su apellido!");
        return false;
    }
    if (mail.value === ''){
        swal("Campo requerido!", "...debe ingresar su mail!");
        return false;
    }
    if (pass.value.length < 8){
        swal("Campo requerido!", "...la contraseña debe tener mas de 8 caracteres!");
        return false;
    }
    if (conPass.value !== pass.value){
        swal("Campo requerido!", "...las contraseñas no coinciden!");
        return false;
    }

    return true;
    
}
