var express = require('express');
var router = express.Router();
const mysql = require('mysql2');

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'root', //Use your own username, I'm using root, the default one.
    password: '12345678',
    database: 'fake_shop'
})

DB.connect((err) => {
    if (!err) {
        console.log('Connected to database');
    } else {
        console.log('Connecting to database Failed');
    }
})


router.get('/', function(req, res, next) {
    DB.query('SELECT * FROM products;',(err,data,fields)=>{
        res.json(data);
    })
});
router.get('/search=:id', function(req, res, next) {
    const id = req.params.id;

    DB.query("SELECT * FROM products WHERE name LIKE ?;",[id],(err,data,fields)=>{
        res.json(data);
    })
});

router.post('/', function(req, res, next) {
    const {name,price,category_id,subset_id} = req.body;
    DB.query("INSERT INTO products (name,price,category_id,subset_id) VALUES (?,?,?,?); ",[name,price,category_id,subset_id],(err,data,fields)=>{
        res.json({message:"SUCCESS"});
    })
});

router.delete('/', function(req,res,next) {
    const {name} = req.body;
    console.log(`Deleting ${name}`);
    DB.query("DELETE FROM products WHERE name = ?" , [name],(err,data,fields)=>{
        res.json({message:"SUCCESS"});
    })
})

module.exports = router;
