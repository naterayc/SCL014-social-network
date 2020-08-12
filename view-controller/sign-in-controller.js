import {
    authGoogle,
    createUser,
    signIn,
} from '../lib/firebase/firebase-auth.js';

import {
    validator,
    validatorRegister,
} from './input-validator.js';
import { viewSignIn } from '../view/sign-in-view.js';

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
    const validateEmailAndPassword = () => {
        const btnSignIn = document.getElementById('ingreso')
        const emailSignIn = document.querySelector('#mail');
        const passwordSignIn = document.querySelector('#password');
        const result = validator(emailSignIn.value, passwordSignIn.value);
        btnSignIn.disabled = result;
        if(result === false) {
            btnSignIn.classList.remove('disabled');
        } else {
            btnSignIn.classList.add('disabled');
        }
    };

    divSignIn.querySelector('#mail').addEventListener('input', validateEmailAndPassword);
    document.querySelector('#password').addEventListener('input', validateEmailAndPassword);

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

    // Cuando el usuario haga clic en el botón, abra el modal
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

   //declarando variables
    const email = document.getElementById('email-register');
    const password = document.getElementById('password-register');
    const user = document.getElementById('user-register');
    const firstName = document.getElementById('fname-register');
    const lastName = document.getElementById('lname-register');
    const birthday = document.getElementById('birthday-register');
    const country = document.getElementById('country-register');
    const btnRegister = document.getElementById('btn-register');

    //condicionamiento dependiendo de la validacion de los inputs
    const validateInputsRegister = () => {
        const emailValid = email.validity.valid;
        const passwordValid = password.validity.valid;
        const result = validatorRegister(email.value, password.value, emailValid, passwordValid);
        btnRegister.disabled = result;
        if(result === false) {
            btnRegister.classList.remove('disabled');
        } else {
            btnRegister.classList.add('disabled');
        }
    };

    //evento para validar inputs de registro
    email.addEventListener('input', validateInputsRegister);
    password.addEventListener('input', validateInputsRegister);

    //crea y registra al usuario
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



