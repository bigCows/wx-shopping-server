const model = require("../model")

const userService = {
  users: () => {
    return model.userModel.find()
  }
}

module.exports = userService