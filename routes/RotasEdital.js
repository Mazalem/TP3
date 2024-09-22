var express = require('express');
var router = express.Router();
var controllerEdital = require("../controller/controllerEdital");

router.get('/cria', controllerEdital.cria_get);
router.post('/cria', controllerEdital.cria_post);

module.exports = router;