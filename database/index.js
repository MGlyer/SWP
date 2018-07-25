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
    let petToAdd = {[pet.id.$t]: pet}
    let check = await db.ref('/users/' + username + '/swipes').once('value')
    if (!check.exists()) {
        db.ref('/users/' + username).set({swipes: petToAdd})
        cb(null)
    } else {
        db.ref('/users/' + username + '/swipes/').set(petToAdd)
        cb(null)
    }
}


module.exports = {
    saveNewUser,
    userLogin
}