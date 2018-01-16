const express = require('express')
const bodyParser = require('body-parser')

const counter = require('./routes/countRoute')

const server = express()

server.use(bodyParser.json())
server.use(express.static(`${__dirname}/public`))
server.use('/api/v1/', counter)

module.exports = server
