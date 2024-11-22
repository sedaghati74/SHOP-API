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
        console.log('Subsets Connected to Database Successfully.');
    } else {
        console.log('Connecting Subsets to Database Failed.');
    }
})

const staticCwdPath = process.cwd()+'/routes/subsets.js'

router.get('/', function(req, res, next) {
    console.log('Loading Data from Subsets...')
    DB.query('SELECT * FROM subsets;',(err,data,fields)=>{
        if(data[0]===undefined)
        {
            const errMsg = 'No Data Found from Subsets.\n' + `Having issue in loading data. Check DataBase or get method request in ${staticCwdPath}`
            res.send(errMsg);
            console.log(errMsg)
        }
        else{
        res.json(data);
            console.log('Loading Data from Subsets was SUCCESS.\n'
                + `type: ${typeof(data)}`);
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
