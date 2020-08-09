import {
    authGoogle,
    createUser,
    signIn,
} from '../lib/firebase/firebase-auth.js';

import {
    validator,
    validatorRegister,
} from '../view-controller/input-validator.js';
import { viewSignIn } from './sign-in-view.js';

import { registerUser } from '../lib/firebase/firebase-firestore.js';


export const signInView = () => {
   
    const divSignIn = document.createElement('div');
    divSignIn.setAttribute('id', 'contenedor');
    divSignIn.innerHTML = viewSignIn;
    document.getElementById('containerViews').appendChild(divSignIn);

    // declarando variables
    const signInWithGoogle = divSignIn.querySelector('#signInGoogle');
    // iniciar sesion con google
    signInWithGoogle.addEventListener('click', () => {
        authGoogle();
    });
    // evento para validar
    divSignIn.querySelector('#mail').addEventListener('input', validator);
    document.querySelector('#password').addEventListener('input', validator);
    // ingresar
    document.querySelector('#ingreso').addEventListener('click', () => {
        const email = document.querySelector('#mail').value;
        const password = document.querySelector('#password').value;

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

    //evento para validar
    const email = document.getElementById('email-register');
    const password = document.getElementById('password-register');
    const user = document.getElementById('user-register');
    const firstName = document.getElementById('fname-register');
    const lastName = document.getElementById('lname-register');
    const birthday = document.getElementById('birthday-register');
    const country = document.getElementById('country-register');

    email.addEventListener('input', validatorRegister);
    password.addEventListener('input', validatorRegister);

    const btnRegister = document.getElementById('btn-register');
    btnRegister.addEventListener('click', () => {
        const valueEmail = email.value;
        const valuePassword = password.value;        
        createUser(valueEmail, valuePassword);
        registerUser({
            user: user.value,
            firstName: firstName.value,
            lastName: lastName.value,
            birthday: birthday.value,
            country: country.value,
        })
    });

}



