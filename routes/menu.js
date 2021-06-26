var express = require('express');
var router = express.Router();
const menu_builder = require('../menu.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('menu', { title: menu_builder.menu.title, menu_builder });
}); 

module.exports = router;