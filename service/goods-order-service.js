var model = require('../model')

const goodsOrderService = {
  getGoodsOrder: () => {
    return model.goodsOrderModel.find()
  }
}

module.exports = goodsOrderService