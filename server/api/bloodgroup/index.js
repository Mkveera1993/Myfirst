var express = require('express');
var router = express.Router();
var controller = require('./bloodgroupCtrl');

router.post('/', controller.create);
router.get('/:bloodgroup', controller.show);
router.put('/update/:id', controller.update);
router.get('/mobile/:mobile', controller.mobileshow);
router.get('/currentaddress/:currentaddress', controller.currentaddressshow);
router.get('/location/:location', controller.locationshow);

module.exports = router;

