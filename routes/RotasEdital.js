var express = require('express');
var router = express.Router();
var controllerEdital = require("../controller/controllerEdital");

router.get('/cria', controllerEdital.cria_get);
router.post('/cria', controllerEdital.cria_post);
router.get('/altera/:id', controllerEdital.altera_get);
router.post('/altera/:id', controllerEdital.altera_post);
router.get('/deleta/:id', controllerEdital.deleta);

module.exports = router;