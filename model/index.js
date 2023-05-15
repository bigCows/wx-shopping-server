const mongoose = require('mongoose')

// 要实现联表查询，以下代码需要修改哪里?  1.在LISTTYPE中添加categoryId: {type: String,ref:'categories'} 2.在getListService中添加populate('categoryId') 3.在getListController中添加populate('categoryId')

const Schema =  mongoose.Schema

const createModel = (modelName,type={}) => {
  return mongoose.model(modelName,new Schema(type,{versionKey:false}))
}

const USERTYPE = {
  openId: String,
  session_key: String,
  username: String
}

const LISTTYPE = { 
  id: String,
  categoryId: {type: Schema.Types.ObjectId,ref:'category'},
  characteristic: String,
  minPrice: Number,
  name: String,
  originalPrice: Number,
  pic: String,
  statusStr: String,
  pics: [String],
}

const CATEGORYTYPE = { 
  id: String,
  name: String,
  icons: String,
  isUse:  Boolean,
}

const model = {
  userModel: createModel('user',USERTYPE),
  listModel: createModel('list',LISTTYPE),
  goodsOrderModel: createModel('goodsOrder'),
  categoryModel: createModel('category',CATEGORYTYPE),
}


module.exports = model