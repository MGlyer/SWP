const express = require('express')
let server = express()
const parser = require('body-parser')
const router = require('./routes')
const session = require('express-session')

//Install Middleware
server.use(parser.json())
server.use(express.static(__dirname + '/../client/dist'))
server.use('/pets', router)
server.use(session({
    secret: 'I can haz pet?'
}))

//Method Section


//Server Boot Up
let port = process.env.PORT || 8080
server.listen(8080, () => console.log('now listening on port ', port))