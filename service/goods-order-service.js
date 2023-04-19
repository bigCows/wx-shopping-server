var model = require('../model')

const goodsOrderService = {
  getGoodsOrder: (id) => {
    return model.goodsOrderModel.find({_id:id})
  }
}

module.exports = goodsOrderService