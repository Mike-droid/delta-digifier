const express = require('express')
const bodyParser = require('body-parser')
const mysqlConnection = require('./config/connection')
const clients = require('./js/clients')

var app = express()

app.use(bodyParser.json())

app.use('/clients', clients)

app.listen(3000)

