const model = require('../model')

const getListService = {
  getList: (id) => {
    let data = null
    id === '0' ? data = model.listModel.find({}) : data = model.listModel.find({_id:id}) 
    return data
  }
}

module.exports = getListService