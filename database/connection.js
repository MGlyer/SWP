var config = {
    apiKey: "AIzaSyDkcbRVYG6dYNXxzYjWV4p6xwTmKce7a-4",
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


/*
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}
*/