var express = require('express');
var router = express.Router();
var controller = require('./bloodcampdetailsCtrl');

router.post('/', controller.create);
router.get('/', controller.show);


module.exports = router;

