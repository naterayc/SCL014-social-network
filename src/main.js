// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';

myFunction();

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
firebase.analytics();