var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'root', //Use your own username, I'm using root, the default one.
    password: 'your-db-password',
    database: 'your-db-name'
})

DB.connect((err) => {
    if (!err) {
        console.log('Connected to database');
    } else {
        console.log('Connecting to database Failed');
    }
})


router.get('/', function(req, res, next) {
    DB.query('SELECT * FROM subsets;',(err,data,fields)=>{
        console.log('Loading Data from Categories was SUCCESS.');
        res.json(data);
    })
});

router.post('/', function(req, res, next) {
    const {name,subset_id,category_id} = req.body;
    DB.query("INSERT INTO subsets (name,subset_id,category_id) VALUES (?,?,?); ",[name,subset_id,category_id],(err,data,fields)=>{
        res.json({message:"SUCCESS"});
    })
});

module.exports = router;
