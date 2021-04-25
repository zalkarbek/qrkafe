import AuthApi from '@/api/AuthApi'

class ApiFactory {
  constructor (ctx) {
    this.ctx = ctx
    this.apiServices = {
      authApi: new AuthApi(ctx, {
        apiUrl: 'auth'
      }),
    }
  }

  getApi (name) {
    return this.apiServices[name]
  }

  req (req, { params, data }) {
    return this.ctx.$axios({
      method: req.method,
      url: req.url,
      params,
      data
    })
  }

  get (url, config) {
    return this.ctx.$axios.get(url, config)
  }

  post (url, config) {
    return this.ctx.$axios.post(url, config)
  }

  put (url, config) {
    return this.ctx.$axios.put(url, config)
  }

  delete (url, config) {
    return this.ctx.$axios.delete(url, config)
  }

  setHeader (name, value) {
    this.ctx.$axios.defaults.headers.common[name] = value
  }

  setToken (
      token,
      type = 'Bearer',
      scopes = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
  ) {
    this._tokenConfig = { token, type, scopes }
    this._token = token
    this.setHeader('Authorization', `Bearer ${token}`)
  }
}

export default (ctx) => {
  return new ApiFactory(ctx)
}
