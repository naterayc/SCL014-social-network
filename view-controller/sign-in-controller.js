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

import { registerUser, getUserByEmail } from '../lib/firebase/firebase-firestore.js';

import { pushState } from './router.js';


export const signInView = () => {

    const divSignIn = document.createElement('div');
    divSignIn.setAttribute('id', 'contenedor');
    divSignIn.innerHTML = viewSignIn;
    document.querySelector('#containerViews').appendChild(divSignIn);

    // declarando variables
    const signInWithGoogle = divSignIn.querySelector('#signInGoogle');
    // iniciar sesion con google
    signInWithGoogle.addEventListener('click', () => {
        authGoogle()
            .then((user) => {
                // Guardamos la informacion del usuario en el local storage
                localStorage.setItem('user', JSON.stringify({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    uid: user.uid,
                }));
                getUserByEmail(user.email)
                .then((userFound) => {
                    if(userFound === undefined){
                        registerUser({
                            user: user.displayName,
                            firstName: '',
                            lastName: '',
                            birthday: '',
                            country: '',
                            email: user.email,
                        })
                    }
                    pushState('#/wall');
                })                
                
            })
    });
    // evento para validar
    const validateEmailAndPassword = () => {
        const btnSignIn = document.querySelector('#ingreso')
        const emailSignIn = document.querySelector('#mail');
        const passwordSignIn = document.querySelector('#password');
        const result = validator(emailSignIn.value, passwordSignIn.value);
        btnSignIn.disabled = result;
        if (result === false) {
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

        signIn(email, password);
    });

    // Mostrar modal de registro
    const modal = document.querySelector('#myModal');
    const btnOpenModal = document.querySelector('#btn-open-modal-register');
    const btncloseModal = document.querySelector('.close-modal');

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
    const email = document.querySelector('#email-register');
    const password = document.querySelector('#password-register');
    const user = document.querySelector('#user-register');
    const firstName = document.querySelector('#fname-register');
    const lastName = document.querySelector('#lname-register');
    const birthday = document.querySelector('#birthday-register');
    const country = document.querySelector('#country-register');
    const btnRegister = document.querySelector('#btn-register');

    //condicionamiento dependiendo de la validacion de los inputs
    const validateInputsRegister = () => {
        const emailValid = email.validity.valid;
        const passwordValid = password.validity.valid;
        const result = validatorRegister(
            email.value,
            password.value,
            user.value,
            firstName.value,
            lastName.value,
            birthday.value,
            country.value,
            emailValid,
            passwordValid,
        );
        btnRegister.disabled = result;
        if (result === false) {
            btnRegister.classList.remove('disabled');
        } else {
            btnRegister.classList.add('disabled');
        }
    };

    //evento para validar inputs de registro
    email.addEventListener('input', validateInputsRegister);
    password.addEventListener('input', validateInputsRegister);
    user.addEventListener('input', validateInputsRegister);
    firstName.addEventListener('input', validateInputsRegister);
    lastName.addEventListener('input', validateInputsRegister);
    birthday.addEventListener('input', validateInputsRegister);
    country.addEventListener('input', validateInputsRegister);

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
            email: email.value,
        })
    });

}
