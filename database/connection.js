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

module.exports = database

