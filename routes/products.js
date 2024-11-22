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
        console.log('Products Connected to Database Successfully.');
    } else {
        console.log('Connecting Products to Database Failed.');
    }
})

const staticCwdPath = process.cwd() + '/routes/products.js'

router.get('/', function (req, res, next) {
    console.log('Loading Data from Products...')
    DB.query('SELECT * FROM products;', (err, data, fields) => {
        if (!err) {
            if (data[0] === undefined) {
                const errMsg = 'No Data Found from Products.\n' + `Having issue in loading data. Check DataBase or get method request in ${staticCwdPath}`
                res.send(errMsg);
                console.log(errMsg)
            } else {
                res.json(data);
                console.log('Loading Data from Products was SUCCESS.\n'
                    + `type: ${typeof (data)}`);
            }
        } else {
            throw err
        }
    })
});

//should change the whole search option in the future.
router.get('/search=:id', function (req, res, next) {
    const id = req.params.id;

    DB.query("SELECT * FROM products WHERE name LIKE ?;", [id], (err, data, fields) => {
        res.json(data);
    })
});

router.post('/', function (req, res, next) {
    const {name, price, category_id, subset_id} = req.body;
    DB.query("INSERT INTO products (name,price,category_id,subset_id) VALUES (?,?,?,?); ", [name, price, category_id, subset_id], (err, data, fields) => {
        res.json({message: "SUCCESS"});
    })
});

router.delete('/', function (req, res, next) {
    const {name} = req.body;
    console.log(`Deleting ${name}`);
    DB.query("DELETE FROM products WHERE name = ?", [name], (err, data, fields) => {
        res.json({message: "SUCCESS"});
    })
})

module.exports = router;
