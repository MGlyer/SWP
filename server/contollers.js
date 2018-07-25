const { API_KEY, API_SECRET } = require('./../config.js')
const axios = require('axios')
const { saveNewUser } = require('./../database/index.js')

module.exports = {
    //write out GETS and POSTS here
    signup: {
        post: (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            saveNewUser(username, password, (err, unique) => {
                if (err) console.log('something went wrong querying the db: ', err)
                if (null, !unique) res.send('that username is already taken')
                else res.send('successfully added to the database!')
            })
        }
    },

    login: {
        get: (req, res) => {
            let username = req.query.username
            let password = req.query.password

            console.log('in the server, logging in with: ', username, password)
        }
    },

    more: {
        get: async (req, res) => {
            console.log('in the server controllers.')
            let pet1 = await axios.get(`http://api.petfinder.com/pet.getRandom?key=${API_KEY}&output=basic&format=json`)
            // let pet2 = await axios.get(`http://api.petfinder.com/pet.getRandom?key=${API_KEY}&output=basic&format=json`)
            // let pet3 = await axios.get(`http://api.petfinder.com/pet.getRandom?key=${API_KEY}&output=basic&format=json`)
            // let pet4 = await axios.get(`http://api.petfinder.com/pet.getRandom?key=${API_KEY}&output=basic&format=json`)
            // let pet5 = await axios.get(`http://api.petfinder.com/pet.getRandom?key=${API_KEY}&output=basic&format=json`)
            // res.send([pet1.data, pet2.data, pet3.data, pet4.data, pet5.data])
            res.send(pet1.data)
        }
    },

    swipeRight: {
        post: (req, res) => {}
    }
}