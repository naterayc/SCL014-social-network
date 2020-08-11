const viewSignIn = `
    <!-- Página de login -->
        <section id="login">
            <img src="img/logo.png" alt="logo" class="logo-inicio">
            <h5> Conoce Descubre Comparte </h5>
            <div class= "login-container">
            <form id="dataregistro">
                <input type="email" id="mail" placeholder="Correo electrónico" autocomplete="email" required>
                <input type="password" id="password" placeholder="Contraseña" autocomplete="current-password" required>
                <div id="sign-wrong-password" class="hide"><span>Contraseña invalida</span></div>
                <div id="sign-email-not-found" class="hide"><span>El correo ingresado no existe</span></div>
            </form>

            <button id="ingreso" class="buttonWhite disabled" type="button" disabled="true">Ingresar</button>

            <h4 id="signInGoogle"><i class="fab fa-google"></i> Ingresar con Google</h4>
            <h4 id="btn-open-modal-register">Registrar usuario</h4>
            </div>
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
                        <form action="#">
                            <h2>Cuenta:</h2>
                            <fieldset>
                                <input type="email" id="email-register" placeholder="Correo electrónico" autocomplete="email" required><br><br>
                                <input type="password" id="password-register" placeholder="Contraseña" autocomplete="current-password" required><br><br>
                            </fieldset>
                            <div id="weak-password" class="hide"><span>La contraseña es muy débil. Debe contener al menos 6 caracteres.</span></div>
                            <div id="activa-registro" class="hide"><span>Ve a tu correo para activar cuenta</span></div>
                        </form>
                    </section>
                    <button id="btn-register" type="button" class="disabled" disabled="true">Registrar</button>
                </section>
            </section>
        </section>
` ;

export { viewSignIn }