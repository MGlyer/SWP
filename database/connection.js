const {FIREBASE_API_KEY} = require('./../config')
var config = {
    apiKey: FIREBASE_API_KEY,
    // authDomain: "swp-petadoption.firebaseapp.com",
    authDomain: "localhost:8080",
    databaseURL: "https://swp-petadoption.firebaseio.com",
    projectId: "swp-petadoption",
    storageBucket: "",
    messagingSenderId: "189802972639"
};

const firebase = require('firebase')

firebase.initializeApp(config);


const database = firebase.database()
const auth = firebase.auth()
const googleAuth = new firebase.auth.GoogleAuthProvider()

// const authentication = firebase.auth().signInWithEmailAndPassword(provider).then(function(result) {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = result.credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
//   }).catch(function(error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     var email = error.email;
//     var credential = error.credential;
//     // ...
//   });

module.exports = {
    database,
    auth,
    googleAuth
}


