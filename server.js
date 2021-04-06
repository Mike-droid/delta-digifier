const express = require('express')
const bodyParser = require('body-parser')
const mysqlConnection = require('./connection')
const clients = require('./clients')

var app = express()

app.use(bodyParser.json())

app.use('/clients', clients)

app.listen(3000)

