const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bestday13',
    database: 'hos_health'
});

// Connect
db.connect((err) => {
    if(err) {
        throw err;
    } 
    console.log("MySQL Connected ...")
})

const app = express();


app.post('/update_health_data', (req, res) => {
    let id = Math.floor(Math.random() * 10000)
    let date = new Date().toISOString().slice(0, 10)
    let data = {user_id: id, vs_date: date, vs_data: 12}
    let sql = "INSERT INTO hos_health.weekly_health SET ?" 
    db.query(sql, data, (err, result) => {
        if(err) throw err;
        res.json({status: "Success"})
    })
})

app.listen('3000', () => {
    console.log('Server started on port 3000');
});