const JWT = require('../utils/jwt')
const userService = require('../service/user-service')
const axios = require('axios')

const APPSECRET = '37c816505e8f563873a47d75772332de'
const APPID = 'wx8ff1b46b9108493c'

const userController = {
  users: async (req,res,next) => {
    try {
      const {code,userName} = req.query
      const wxres = await axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${APPSECRET}&js_code=${code}&grant_type=authorization_code`)
      if(wxres.status == 200) {
        const { data } = wxres
        const updateInfo = await userService.users(data.openid,data.session_key,userName)
        if(updateInfo) {
          const token = JWT.encrypt({userName},'1h')
          res.header('Authorization',token)
          res.send({ok:1,token})
        }
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = userController