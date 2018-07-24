const db = require('./connection')

const saveNewUser = async (username, password, cb) => {
    let uniqueTest = await db.ref('/users' + username)
    if (uniqueTest) {
        cd(null, false)
    } else {
        db.ref('/users' + username).set({
            username: username,
            password, password
        }, (error) => {
            if (error) cb(error)
            else cb(null, true)
        })
    }
}


module.exports = {
    saveNewUser
}