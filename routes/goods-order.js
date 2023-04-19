
var express = require('express');
var router = express.Router();
var goodsOrderController = require('../controllers/goods-order-controller')

router.get('/', goodsOrderController.goodsOrder);

module.exports = router;