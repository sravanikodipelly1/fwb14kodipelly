var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addmods.pug', { title: 'Add Mods' });
});

module.exports = router;
