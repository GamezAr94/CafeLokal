var express = require('express');
var router = express.Router();
const menu_builder = require('../menu.json').drinks;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('menu', { title: menu_builder.title, menu_builder });
}); 

module.exports = router;