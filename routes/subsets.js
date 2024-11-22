var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
const {static} = require("express");

const DB = mysql.createConnection({
    host: 'localhost',
    user: 'root', //Use your own username, I'm using root, the default one.
    password: '12345678',
    database: 'fake_shop'
})

const staticCwdPath = process.cwd()+'/routes/subsets.js'

DB.connect((err) => {
    if (!err) {
        console.log('Connected to database');
    } else {
        console.log('Connecting to database Failed');
    }
})


router.get('/', function(req, res, next) {
    DB.query('SELECT * FROM subsets WHERE name="stoary";',(err,data,fields)=>{
        console.log('Loading Data from Categories was SUCCESS.\n'
            + `type: ${typeof(data)} \n`);
        if(data[0]===undefined)
        {
            res.send('No Data Found from Categories. \n'
            +`Having issue in loading data. Check DataBase or get method request in ${staticCwdPath}`);
        }
        else{
        res.json(data);
        }
    })
});

router.post('/', function(req, res, next) {
    const {name,subset_id,category_id} = req.body;
    DB.query("INSERT INTO subsets (name,subset_id,category_id) VALUES (?,?,?); ",[name,subset_id,category_id],(err,data,fields)=>{
        res.json({message:"SUCCESS"});
    })
});

router.delete('/', function(req,res,next) {
    const {name} = req.body;
    console.log(`Deleting ${name}`);
    DB.query("DELETE FROM subsets WHERE name = ?" , [name],(err,data,fields)=>{
        res.json({message:"SUCCESS"});
    })
})

module.exports = router;
