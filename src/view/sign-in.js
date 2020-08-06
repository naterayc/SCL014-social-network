import {
    wallView
} from './wall.js';

import { 
    changeRoute 
} from '../view-controller/router.js';

import {
    authGoogle,
    createUser,
    signIn,
} from '../lib/firebase/firebase-auth.js';

import {
    validator,
    validatorRegister,
} from '../view-controller/input-validator.js';

export const signInView = () => {
    const divSignIn = document.createElement('div');
    const viewSignIn = `
    <!-- Página de login -->
        <section id="login">
            <img src="img/logo.png" alt="logo" class="logo-inicio">
            <h5> Conoce Descubre Comparte </h5>

            <form id="dataregistro">
                <input type="email" id="mail" placeholder="Correo electrónico" autocomplete="email" required>
                <input type="password" id="password" placeholder="Contraseña" autocomplete="current-password" required>
                <div id="msg-error" class="hide"><span >El correo o contraseña ingresados no son válidos</span></div>
            </form>

            <button id="ingreso" class="buttonWhite" type="button" disabled="true"><a href="#/wall">Ingresar</a></button>

            <h4 id="signInGoogle"><i class="fab fa-google"></i> Ingresar con Google</h4>
            <h4 id="btn-open-modal-register">Registrar usuario</h4>
            <p class="copyright">©2020 HexaKey Group</p>
        </section>

        <!-- Modal de registro -->
        <section id="myModal" class="modal">
            <span class="close-modal">&times;</span>
            <section class="modal-content">
                <section>
                    <img src="img/islandia.jpg" id="picture-perfil-register" alt="Foto perfil" class="imgRedonda">
                </section>
                <section>
                    <form>
                        <h2>Datos Personales:</h2>
                        <fieldset>
                            <input type="text" id="user-register" placeholder="Usuario:" autocomplete="Usuario" required><br><br>
                            <input type="text" id="fname-register" placeholder="Nombres:" autocomplete="Nombres" required><br><br>
                            <input type="text" id="lname-register" placeholder="Apellidos:" autocomplete="Apellidos:" required><br><br>
                            <input type="date" id="birthday-register" placeholder="Fecha de nacimiento:" autocomplete="Fecha de nacimiento:" required><br><br>
                            <input type="text" id="country-register" placeholder="Pais:" autocomplete="Pais" required><br><br>
                        </fieldset>
                    </form>

                    <section>
                        <form action="/action_page.php">
                            <h2>Cuenta:</h2>
                            <fieldset>
                                <input type="email" id="email-register" placeholder="Correo electrónico" autocomplete="email" required><br><br>
                                <input type="password" id="password-register" placeholder="Contraseña" autocomplete="current-password" require><br><br>
                            </fieldset>
                            <div id="msgRegister-error" class="hide"><span>Datos inválidos</span></div>
                            <div id="activa-registro" class="hide"><span>Ve a tu correo para activar cuenta</span></div>
                        </form>
                    </section>
                    <button id="btn-register" type="button" disabled="true">Registrar</button>
                </section>
            </section>
        </section>
`
    setTimeout(function () {
        // declarando variables
        const signInWithGoogle = divSignIn.querySelector('#signInGoogle');
        console.log(signInWithGoogle);
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
        email.addEventListener('input', validatorRegister);
        password.addEventListener('input', validatorRegister);

        const btnRegister = document.getElementById('btn-register');
        btnRegister.addEventListener('click', () => {
            const valueEmail = email.value;
            console.log(valueEmail);
            const valuePassword = password.value;
            console.log(valuePassword);
            createUser(valueEmail, valuePassword);
            /*divSignIn.getElementById('containerViews').innerHTML(wallView());*/
        });
    }, 1000);
    divSignIn.innerHTML = viewSignIn; return divSignIn;

}



