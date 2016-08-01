var express = require('express');
var router = express.Router();
var controller = require('./gcmkeysCtrl');

router.post('/', controller.create);

module.exports = router;

