const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "CleatsDB"
});


app.get('/', (req, res) => {

});

app.listen(3001, () => {
    console.log('running on port 3001...');
})