import request from '@/utils/request'
const $fetch = request

class UserApi {
  signIn (args, options) {
    options = options || {}
    let loginParams = { username: args.username, password: args.password }
    options.skipToken = true
    return $fetch.postForm('/uac/auth/yform', loginParams, options).then(rst => {
      return { errcode: 0, data: rst }
    })
  }

  socialSignIn (args, options) {
    options = options || { showLoading: true }
    options.skipToken = true
    return $fetch.postForm('/nsp/api/social-login', args, options).then(rst => {
      return { errcode: 0, data: rst }
    })
  }

  signOut () {
    return Promise.resolve({ errcode: 0, data: 'success' })
  }

  getUser (args, options) {
    return $fetch.get('/api/uac/user/read/fullinfo', { app: 110 })
  }

  getUserInfo (params, options) {
    return $fetch.get('/api/user/info', params)
  }
}

export default new UserApi()
