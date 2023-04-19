var express = require('express');
var router = express.Router();
var userController = require('../controllers/user-controllers')

/* GET users listing. */
router.get('/', userController.users);

module.exports = router;
