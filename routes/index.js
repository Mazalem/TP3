var express = require('express');
var router = express.Router();
var controllerIndex = require("../controller/controllerIndex");

router.get('/', controllerIndex.listar);

router.get('/sobre', function(req, res) {
  res.render('sobre', {title: "Sobre"})
});

module.exports = router;
