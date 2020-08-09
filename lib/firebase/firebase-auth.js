import { 
    pushState,
} from '../../view-controller/router.js'

 // La configuración de Firebase de tu aplicación web
var firebaseConfig = {
    apiKey: "AIzaSyB2NOy-yPmvToNnFt40cJ5rhDkurd4NCsg",
    authDomain: "laboratoria-social-netwo-6f988.firebaseapp.com",
    databaseURL: "https://laboratoria-social-netwo-6f988.firebaseio.com",
    projectId: "laboratoria-social-netwo-6f988",
    storageBucket: "laboratoria-social-netwo-6f988.appspot.com",
    messagingSenderId: "372381618571",
    appId: "1:372381618571:web:8a248b1ace03e0403c5f8e",
    measurementId: "G-ZJK8FW1LCY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 


const authGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
            // Esto te da un token de acceso de Google. Puede usarlo para acceder a la API de Google
            var token = result.credential.accessToken;
            // La información de usuario registrada.
            var user = result.user;
            console.log('el usuario se logueo con google');
            console.log(user);
            localStorage.setItem('user', JSON.stringify({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            }));

            pushState('#/wall');

        }).catch(function(error) {
            // Manejar errores aquí.
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            // El correo electrónico de la cuenta del usuario utilizado.
            var email = error.email;
            console.log(email);
            // El tipo firebase.auth.AuthCredential que se utilizó.
            var credential = error.credential;
            console.log(credential);
            // ...
        });
};


const createUser = (email, password) => {
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(function(data) {
            console.log('despues de la llamada createUserWithEmailAnd');
            console.log(data.user);
            if (data.user.emailVerified === false) {
                data.user.sendEmailVerification();
                firebase.auth().signOut();
            }
            document.querySelector('#activa-registro').classList.remove('hide');
            setTimeout(function(){ document.getElementById('myModal').style.display = "none" }, 3000);                       
        })
        .catch(function(error) {
            // Manejar errores aquí.
            document.querySelector('#msgRegister-error').classList.remove('hide');
            document.querySelector('#myModal').style.display = "block";
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
            // ...
        });
}

const signIn = (email, password) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function(data) {
            if (data.user.emailVerified !== false) {
                localStorage.setItem('user', JSON.stringify({
                    name: data.user.displayName,
                    email: data.user.email,
                    photo: data.user.photoURL,
                }));
                pushState('#/wall');
            } else {
               alert('Debes verificar tu correo antes de ingresar');
            console.log(data.user);
            console.log('el usuario se logueo');
            }
        })
        .catch(function(error) {
            // Manejar errores aquí.
            document.querySelector('#msg-error').classList.remove('hide');
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error);
            // ...
        });
}


// cerrar sesion
const signOut = () => {
    firebase
        .auth()
        .signOut()
        .then(function() {
            localStorage.removeItem('user');
            pushState('#/');
            console.log('Sign-out successful');
            console.log(user);
        }).catch(function(error) {

            // An error happened.
        });
}

export {
    createUser,
    signOut,
    signIn,
    authGoogle,
}