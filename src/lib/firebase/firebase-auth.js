import { pushState } from '../../view-controller/router.js';

// La configuración de Firebase de tu aplicación web
const firebaseConfig = {
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

// Ingresa con cuenta google
const authGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
            // La información de usuario registrada.
            return result.user;
           
        }).catch(function(error) {
            // Manejar errores aquí.
            const errorCode = error.code;
            console.log(errorCode);
            const errorMessage = error.message;
            console.log(errorMessage);
            // El correo electrónico de la cuenta del usuario utilizado.
            var email = error.email;
            console.log(email);
            // El tipo firebase.auth.AuthCredential que se utilizó.
            var credential = error.credential;
            console.log(credential);
        });
};

// Crea usuario con email y password
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
            setTimeout(function(){ document.querySelector('#myModal').style.display = "none" }, 3000);                       
        })
        .catch(function(error) {
            // Manejar errores aquí.
            document.querySelector('#myModal').style.display = "block";
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
                document.querySelector('#weak-password').classList.remove('hide');
            }
            console.log(error);
        });
}

// ingresa con email y password
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
                    uid: data.user.uid,
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
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/wrong-password')
            {
                document.querySelector('#sign-wrong-password').classList.remove('hide');
            } else {
                document.querySelector('#sign-wrong-password').classList.add('hide');
            }
            if (errorCode === 'auth/user-not-found') {
                document.querySelector('#sign-email-not-found').classList.remove('hide');
            } else {
                document.querySelector('#sign-email-not-found').classList.add('hide');
            }
            console.log(error);
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