var categoryService = require('../service/category.service')
var commonMethod = require('../common/return-data')

const categoryController = {
  category: async (req,res,next) => {
    try {
      const data = await categoryService.category()
      res.send(commonMethod.returnData(0,'success',data))
    } catch (error) {
      next(error)
    }
  }
}

module.exports = categoryController