const model = require('../model')

const getListService = {
  getList: async(id) => {
    try {
      let data = null
    id === '0' ? data = model.listModel.find({}) : data = model.listModel.find({_id:id}) 
    const user = await model.listModel.find().populate('categoryId').exec()
    console.log(user);
    return data
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = getListService

