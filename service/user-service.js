const model = require("../model")

const userService = {
  users: async (openId,session_key,username) => {
    const isExist = await model.userModel.find({openId})
    if(!isExist.length) {
      return model.userModel.create({openId:openId,session_key:session_key,username:username})
    } else {
      return true
    }
  }
}

module.exports = userService