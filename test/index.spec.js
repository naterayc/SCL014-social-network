
import { registerUser } from "../src/lib/firebase/firebase-firestore.js";

const firebase = jest.genMockFromModule('firebase');

    firebase.initializeApp = jest.fn();

describe('registerUser', () => {
  it('debería ser una función', () => {

    
    registerUser()
  });
});




/* Pantalla de inicio
Si el User / Passwodd = ""  O alguno de los dos campos esta vacio => Muestra mensaje  e inhabilitar boton de iniciar Sesion.
Si el User / Password = poseen un valor registrado  => Cambia la vista al muro.
Si el User / Password = No poseen un valor registrado  => Muestra mensaje de invalido.


/* Pantalla de  Registro
Si el Usuario completa el formulario con  email y contrasena valida => debe mostrar mensaje de  debe validar link desde correo electronico
y cambia vista.
Si el correo o contrasena son invalidad => debe mostrar mensaje de alerta para corregir.
Si los campos estan vacios debe mostrar mensaje de error  e invalidad boton de registar.
*/