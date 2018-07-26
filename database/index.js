const db = require('./connection')

const saveNewUser = async (username, password, cb) => {
    let uniqueTest = await db.ref('/users/').child(username).once('value')
    if (uniqueTest.exists()) cb(null, null)
    else {
        db.ref('/users/' + username).set({
            username: username,
            password: password
        }, (error) => {
            if (error) cb(error)
            else cb(null, true)
        })
    }
}

const userLogin = async (username, cb) => {
    let userDocs = await db.ref('/users/').child(username).once('value')
    if (!userDocs.exists()) cb(null, null)
    else {
        let savedPassword = await db.ref('/users/' + username + '/password').once('value')
        cb(null, true, savedPassword.val())
    }
}

const swipeRight = async (username, pet, cb) => {
    let petToAdd = {[pet.id]: pet}

    // console.log(petToAdd)
    let check = await db.ref('/users/' + username + '/swipes').once('value')
    console.log(check.val())
    if (!check.exists()) {
        db.ref('/users/' + username + '/swipes/').set(petToAdd)
        cb(null)
    } else {
        db.ref('/users/' + username + '/swipes/' + pet.id).set(pet)
        cb(null)
    }
}

const fetchFaves = async (username) => {
    let data = await db.ref('/users/' + username + '/swipes/').once('value')
    return data.val()
}


module.exports = {
    saveNewUser,
    userLogin,
    swipeRight,
    fetchFaves
}