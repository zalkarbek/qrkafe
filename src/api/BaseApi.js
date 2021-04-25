class BaseApi {
  constructor (ctx, { apiUrl }) {
    this.ctx = ctx
    this.apiUrl = apiUrl
  }

  index (config = {}) {
    return this.ctx.$axios.get(`api/v1/${this.apiUrl}`, config)
  }

  get (data, config = {}) {
    return this.ctx.$axios.post(`api/v1/${this.apiUrl}/get`, data, config)
  }

  id (id, config = {}) {
    return this.ctx.$axios.get(`api/v1/${this.apiUrl}/${id}`, config)
  }

  create (data = {}, config = {}) {
    return this.ctx.$axios.post(`api/v1/${this.apiUrl}`, data, config)
  }

  update (data, config = {}) {
    return this.ctx.$axios.put(`api/v1/${this.apiUrl}/${data.id}`, data, config)
  }

  delete (data = {}, config = {}) {
    return this.ctx.$axios.delete(`api/v1/${this.apiUrl}/${data.id}`, {
      data,
      ...config
    })
  }
}
export default BaseApi
