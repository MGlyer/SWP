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
            res.send('all is quiet on the western front')
        }
    },

    swipeRight: {
        post: (req, res) => {}
    }
}