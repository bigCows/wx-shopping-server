const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const createModel = (modelName) => {
  return mongoose.model(modelName,new Schema({},{versionKey:false}))
}

const model = {
  userModel: createModel('user'),
  listModel: createModel('list'),
  goodsOrderModel: createModel('goodsOrder'),
  categoryModel: createModel('category'),
}


module.exports = model