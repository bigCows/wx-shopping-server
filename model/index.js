const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const createModel = (modelName,type={}) => {
  return mongoose.model(modelName,new Schema(type,{versionKey:false}))
}

const USERTYPE = {
  openId: String,
  session_key: String,
  username: String
}
const model = {
  userModel: createModel('user',USERTYPE),
  listModel: createModel('list'),
  goodsOrderModel: createModel('goodsOrder'),
  categoryModel: createModel('category'),
}


module.exports = model