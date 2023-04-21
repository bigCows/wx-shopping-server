const JWT = require('../utils/jwt')
const userService = require('../service/user-service')
const axios = require('axios')
const commonMethod = require('../common/return-data')


const APPSECRET = '37c816505e8f563873a47d75772332de'
const APPID = 'wx8ff1b46b9108493c'

const userController = {
  /**
   * 
   * @method: users
   * @description: 此方法获取用户openid,session_key,并保存至数据库
   */
  users: async (req,res,next) => {
    try {
      const {code,userName} = req.query
      // 请求微信API，获取用户openid，session_key,
      const wxres = await axios.get(`https://api.weixin.qq.com/sns/jscode2session?appid=${APPID}&secret=${APPSECRET}&js_code=${code}&grant_type=authorization_code`)
      if(wxres.status == 200) {
        const { data } = wxres
        const updateInfo = await userService.users(data.openid,data.session_key,userName)
        // 如果用户信息保存成功，生成token并返回前端
        if(updateInfo) {
          const token = JWT.encrypt({userName},'1h')
          res.header('Authorization',token)
          res.send(commonMethod.returnData(0,'登陆成功',token))
        }
      }
    } catch (error) {
      next(error)
    }
  },

  /**
   * @method: getUserPhone 
   * @description: 此方法用作演示获取用户手机号流程，未真正获取手机号
   */
  getUserPhone: async(req,res,next) => {
    // 此处code只是获取手机号的凭证,和wx.login()的code是不同的
    const {code} = req.query
    // 获取手机号接口必要参数：access_token
    const userPhone = await axios.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${APPSECRET}`)
    console.log(userPhone,'phone');
  },
  
}

module.exports = userController