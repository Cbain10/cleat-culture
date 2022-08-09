const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "CleatsDB"
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {});

app.post('/api/insert', (req, res) => {

    const cleatName = req.body.cleatName;
    const brand = req.body.brand;
    const releaseYear = req.body.releaseYear;
    const rating = req.body.rating;
    const imageURL = req.body.imageURL;

    const sqlInsert = "INSERT INTO cleats (cleatName, brand, releaseYear, rating, imageURL) VALUE (?,?,?,?,?)"

    db.query(sqlInsert, [cleatName, brand, releaseYear, rating, imageURL], (err, result) => {
        console.log(err);
    });
})

app.listen(3001, () => {
    console.log('running on port 3001...');
})