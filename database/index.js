const db = require('./connection')

const saveNewUser = async (username, password, cb) => {
    let uniqueTest = await db.ref('/users' + username)
    if (uniqueTest) {
        //send back fail info
    } else {
        db.ref('/users' + username).set({
            username: username,
            password, password
        }, (error) => {
            if (error) cb(error)
            else cb(null)
        })
    }
}


module.exports = {
    saveNewUser
}