var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('<div><a href="categories">CATEGORIES</a></div>')
});

module.exports = router;
