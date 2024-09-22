var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Editais Compilados' });
});
router.get('/sobre', function(req, res) {
  res.render('sobre', {title: "Sobre"})
});

module.exports = router;
