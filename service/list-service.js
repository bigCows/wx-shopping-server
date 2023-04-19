const model = require('../model')

const getListService = {
  getList: async (id) => {
  console.log('  id', id)
    let data = null
    id === '0' ? data = await model.listModel.find({}) : data = await model.listModel.find({_id:id}) 
    console.log(data,'data');
    return data
  }
}

module.exports = getListService