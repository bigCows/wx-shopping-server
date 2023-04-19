var model = require('../model')

const goodsOrderService = {
  getGoodsOrder: async (id) => {
    return await model.goodsOrderModel.find({_id:id})
  }
}

module.exports = goodsOrderService