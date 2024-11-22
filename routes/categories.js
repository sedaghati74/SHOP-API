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
    DB.query('SELECT * FROM categories;',(err,data,fields)=>{
        console.log('Loading Data from Categories was SUCCESS.');
        res.json(data);
    })
});

router.post('/', function(req, res, next) {
    const {name,category_id} = req.body;
    DB.query("INSERT INTO categories (name,category_id) VALUES (?,?); ",[name,category_id],(err,data,fields)=>{
        res.json({message:"SUCCESS"});
    })
});

router.put('/:id', function(req, res, next) {
    const id = req.params.id;
    console.log(id);
    const {new_name} = req.body;
    DB.query("UPDATE categories SET name=? WHERE name=?",[new_name,id],(err,data,fields)=>{
        res.json({message:"SUCCESS"});
    })
});

router.delete('/', function(req,res,next) {
    const {name} = req.body;
    console.log(`Deleting ${name}`);
    DB.query("DELETE FROM categories WHERE name = ?" , [name],(err,data,fields)=>{
        res.json({message:"SUCCESS"});
    })
})

module.exports = router;
