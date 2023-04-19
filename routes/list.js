var express = require('express');
var router = express.Router();
var listController = require('../controllers/list-controller')

/* GET list listing. */
router.get('/', listController.getList);

module.exports = router;
