// Your web app's Firebase configuration
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
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('el usuario se logueo con google');
            console.log(user);
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            var email = error.email;
            console.log(email);
            // The firebase.auth.AuthCredential type that was used.
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
        })
        .catch(function(error) {
            // Handle Errors here.
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
            console.log(data.user);
            console.log('el usuario se logueo');
        })
        .catch(function(error) {
            // Handle Errors here.
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
            // Sign-out successful.
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