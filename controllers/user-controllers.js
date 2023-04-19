const JWT = require('../utils/jwt')
const userService = require('../service/user-service')


const userController = {
  users:async (req,res,next) => {
    try {
      const data = await userService.users()
      res.send({ok:1,data})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = userController