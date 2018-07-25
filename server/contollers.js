const { API_KEY, API_SECRET } = require('./../config.js')
const axios = require('axios')
const { saveNewUser, userLogin, swipeRight } = require('./../database/index.js')

module.exports = {
    //write out GETS and POSTS here
    signup: {
        post: (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            saveNewUser(username, password, (err, unique) => {
                if (err) console.log('something went wrong querying the db: ', err)
                if (null, !unique) res.send(false)
                else res.send(false)
            })
        }
    },

    login: {
        get: (req, res) => {
            let username = req.query.username
            let password = req.query.password
            userLogin(username, (error, validUsername, docs) => {
                if (error) console.log(error)
                if (null, !validUsername) res.send(false)
                else {
                    if (password === docs) res.send(true)
                    else res.send(false)
                }
            })
        }
    },

    more: {
        get: async (req, res) => {
            let searchZip = req.query.zipcode
            console.log('in the server controllers.', searchZip)
            let pet1 = await axios.get(`http://api.petfinder.com/pet.getRandom?key=${API_KEY}&location=${searchZip}&output=basic&format=json`)
            let pet2 = await axios.get(`http://api.petfinder.com/pet.getRandom?key=${API_KEY}&location=${searchZip}&output=basic&format=json`)
            // let pet3 = await axios.get(`http://api.petfinder.com/pet.getRandom?key=${API_KEY}&output=basic&format=json`)
            // let pet4 = await axios.get(`http://api.petfinder.com/pet.getRandom?key=${API_KEY}&output=basic&format=json`)
            // let pet5 = await axios.get(`http://api.petfinder.com/pet.getRandom?key=${API_KEY}&output=basic&format=json`)
            // res.send([pet1.data, pet2.data, pet3.data, pet4.data, pet5.data])
            res.send([pet1.data, pet2.data])
        }
    },

    swipeRight: {
        post: (req, res) => {
            let pet = req.body.pet;
            let username = req.body.user;
            swipeRight(username, pet, (error) => {
                if (error) console.log(error)
                else res.send('saved to your profile!')
            })
        }
    }
}