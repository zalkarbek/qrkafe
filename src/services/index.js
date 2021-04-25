class ServiceFactory {
    constructor (ctx) {
        this.ctx = ctx
        this._services = {}
    }

    getService (name) {
        return this._services[name]
    }
}

export default (ctx) => {
    return new ServiceFactory(ctx)
}
