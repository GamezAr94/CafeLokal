var express = require('express');
var router = express.Router();
const event_details = require('../details.json').events;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('events', { title: event_details.title, event_details});
}); 

module.exports = router;