const getListService = require('../service/list-service')
const commonMethod = require('../common/return-data')


const listController = {
  getList:async (req,res,next) => {
    try {
      const {id} = req.query
      const data = await getListService.getList(id)
      res.send(commonMethod.returnData(0,'success',data))
    } catch (error) {
      next(error)
    }
  }
}

module.exports = listController