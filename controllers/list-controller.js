const getListService = require('../service/list-service')


const listController = {
  getList:async (req,res,next) => {
    try {
      const {id} = req.query
      const data = await getListService.getList(id)
      res.send({ok:1,data})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = listController