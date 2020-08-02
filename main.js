import {
    authGoogle,
    createUser,
    signIn,
} from './lib/firebase-auth.js'


//declarando variables
const signInWithGoogle = document.getElementById('signInGoogle');

// iniciar sesion con google
signInWithGoogle.addEventListener('click', () => {
    authGoogle();
});


// ingresar
document.getElementById('ingreso').addEventListener('click', () => {
    const email = document.getElementById('mail').value;
    const password = document.getElementById('password').value;

    /*    document.getElementById('body').classList.remove('body');
       document.getElementById('body').classList.add('body2');
        document.getElementById('header').classList.add('head');
        document.getElementById('wall').classList.remove('hide');
        document.getElementById('login').classList.add('hide');
        document.getElementById('barra-inferior').classList.remove('hide'); */
    console.log(email, password);
    signIn(email, password);
});

// Mostrar modal
const modal = document.getElementById('myModal');
const btnOpenModal = document.getElementById('btn-open-modal-register');
const btncloseModal = document.getElementsByClassName('close-modal')[0];

// Cuando el usuario haga clic en el botón, abra la modal
btnOpenModal.addEventListener('click', () => {
    modal.style.display = "block";
});
// Cuando el usuario hace clic en <span> (x), cierre el modal
btncloseModal.addEventListener('click', () => {
    modal.style.display = "none";
});
// Cuando el usuario hace clic en cualquier lugar fuera del modal, ciérrelo
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

const email = document.getElementById('email-register');
const password = document.getElementById('password-register');
const btnRegister = document.getElementById('btn-register');
btnRegister.addEventListener('click', () => {
    const valueEmail = email.value;
    console.log(valueEmail);
    const valuePassword = password.value;
    console.log(valuePassword);
    createUser(valueEmail, valuePassword);
    modal.style.display = "none";

});