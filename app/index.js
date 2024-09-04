const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Gabriela')`

app.get('/',  (req, res) => {
    connection.query("CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key(id))", () => {
        connection.query(sql, () => {
            connection.query("SELECT name FROM people", (err, result, fields) => {
                if (err) throw err;
                
                res.send(`<h1>Full Cycle Rocks!<h1>${result.map(element => {
                    return `<li>${element.name}</li>`}).join('')}`
                )
            });
        })
    })                                                                                  
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})