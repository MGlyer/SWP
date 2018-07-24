const express = require('express')
let server = express()
const parser = require('body-parser')
const router = require('./routes')

//Install Middleware
server.use(parser.json())
server.use(express.static(__dirname + '/../client/dist'))
server.use('/pets', router)

//Method Section


//Server Boot Up
let port = process.env.PORT || 8080
server.listen(8080, () => console.log('now listening on port ', port))