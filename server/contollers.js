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
        get: (req, res) => {
            console.log('in the server controllers.')
            axios.get(`http://api.petfinder.com/pet.getRandom?key=${API_KEY}&output=basic&format=json`)
                 .then((response) => {
                     console.log(response.data)
                     res.send(response.data)
                 })
                 .catch((err) => console.log(err))
        }
    },

    swipeRight: {
        post: (req, res) => {}
    }
}