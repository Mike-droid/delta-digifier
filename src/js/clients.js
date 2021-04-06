const express = require('express');
const Router = express.Router()
const mySqlConnection = require('../config/connection');

Router.get('/', (req, res) => {
    mySqlConnection.query('SELECT * FROM clients', (err, rows) => {
        (!err) ? res.send(rows) : console.log(err)
    })
})

module.exports = Router