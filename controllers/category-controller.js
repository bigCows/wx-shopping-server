var categoryService = require('../service/category.service')

const categoryController = {
  category: async (req,res,next) => {
    try {
      const data = await categoryService.category()
      res.send({ok:1,data})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = categoryController