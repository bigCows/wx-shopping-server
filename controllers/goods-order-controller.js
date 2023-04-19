var goodsOrderService = require('../service/goods-order-service')

const goodsOrderController = {
  goodsOrder: async (req,res,next) => {
    const {id} = req.query
    const data = await goodsOrderService.getGoodsOrder(id)
    res.send({ok:1,data})
  }
}

module.exports = goodsOrderController