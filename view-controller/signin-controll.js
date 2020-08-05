/* import {
    authGoogle,
    createUser,
    signIn,
} from './lib/firebase/firebase-auth.js';

import {
    validator,
    validatorRegister,
} from './view-controller/input-validator.js';

import { signInView} from '.view/sign-in.js';

//declarando variables
const emailSignIn = document.querySelector('#mail');
const passwordSignIn = document.querySelector('#password');
const signInWithGoogle = document.querySelector('#signInGoogle');

// evento para validar inicio de sesion con correo y contraseña
emailSignIn.addEventListener('input', validator);
passwordSignIn.querySelector('#password').addEventListener('input', validator);

// ingresar con correo y contraseña
const btnSignin = document.querySelector('#ingreso')
btnSignin.addEventListener('click', () => {
    const email = document.querySelector('#mail').value;
    const password = document.querySelector('#password').value;
 
    console.log(email, password);
    signIn(email, password);
});

// iniciar sesion con google
signInWithGoogle.addEventListener('click', () => {
    authGoogle();
});

// Mostrar modal para registro de usuario
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

//evento para validar
const email = document.getElementById('email-register');
const password = document.getElementById('password-register');
email.addEventListener('input', validatorRegister);
password.addEventListener('input', validatorRegister);

const btnRegister = document.getElementById('btn-register');
btnRegister.addEventListener('click', () => {
    const valueEmail = email.value;
    console.log(valueEmail);
    const valuePassword = password.value;
    console.log(valuePassword);
    createUser(valueEmail, valuePassword);
    
});  

 */