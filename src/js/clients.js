import { Router as _Router } from 'express'
const Router = _Router()
import { query } from '../config/connection'

Router.get('/', (req, res) => {
    query('SELECT * FROM clients', (err, rows) => {
        (!err) ? res.send(rows) : console.log(err)
    })
})

export default Router