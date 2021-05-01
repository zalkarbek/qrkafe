import BaseApi from '@/api/BaseApi'

class AuthApi extends BaseApi {
  login (payload) {
    return this.ctx.$axios.post(`api/v1/${this.apiUrl}/login`, payload)
  }

  revokeCurrentToken () {
    return this.ctx.$axios.delete('api/v1/auth/token/current/revoke')
  }

  logout () {
    return this.ctx.$axios.get(`api/v1/${this.apiUrl}/logout`)
  }
}
export default AuthApi
