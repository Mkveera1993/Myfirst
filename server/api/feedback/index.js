var express = require('express');
var router = express.Router();
var controller = require('./feedbackCtrl');

router.post('/', controller.create);


module.exports = router;

