const { API_KEY, API_SECRET } = require('./../config.js')
const axios = require('axios')

module.exports = {
    //write out GETS and POSTS here
    signup: {
        post: (req, res) => {}
    },

    login: {
        get: (req, res) => {}
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