var goodsOrderService = require('../service/goods-order-service')
var commonMethod = require('../common/return-data')

const goodsOrderController = {
  goodsOrder: async (req,res,next) => {
    var {key} = req.query
    const data = await goodsOrderService.getGoodsOrder()
    if(key === '1') {
      res.send({ok:1,data:data})
    } else {
      let resArr = []
      data.forEach(item => {
        if(item._doc.name.includes(key)) {
          resArr.push(item)
        }
      })
      res.send(commonMethod.returnData(0,'success',resArr))
    }
  }
}

module.exports = goodsOrderController