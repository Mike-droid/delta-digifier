import express from 'express'
import { json } from 'body-parser'
import mysqlConnection from './config/connection'
import clients from './js/clients'

var app = express()

app.use(json())

app.use('/clients', clients)

app.listen(3000)

