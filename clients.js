const express = require('express')
const Router = express.Router()
const mysqlConnection = require('./connection')

Router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM clients', (err, rows) => {
        (!err) ? res.send(rows) : console.log(err)
    })
})

module.exports = Router