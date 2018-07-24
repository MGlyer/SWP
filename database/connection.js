var config = {
    apiKey: "AIzaSyDkcbRVYG6dYNXxzYjWV4p6xwTmKce7a-4",
    authDomain: "swp-petadoption.firebaseapp.com",
    databaseURL: "https://swp-petadoption.firebaseio.com",
    projectId: "swp-petadoption",
    storageBucket: "",
    messagingSenderId: "189802972639"
};
firebase.initializeApp(config);

const database = firebase.database()

module.exports = database