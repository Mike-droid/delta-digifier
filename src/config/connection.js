const mysql = require('mysql')
var mysqlConnection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    port: 3306,
    password: 'mDpyAtSQk7Gua9e',
    database: 'delta',
    multipleStatements: true
})

mysqlConnection.connect((err) => {
    (err) ? console.log(`There was a problem: ${err}`) : console.log('Connected!')
})

module.exports = mysqlConnection