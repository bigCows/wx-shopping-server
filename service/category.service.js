var model = require('../model')

const categoryService = {
  category: () => {
    return model.categoryModel.find()
  }
}

module.exports = categoryService