import io from 'socket.io-client'

class Io {
    constructor(host) {
        // socket сервер
        this.host = host
        // Список пространство имен событии которым должен отвечать клиент
        this.socketManifest = {}
        // массив хранить подключенные соединения io
        this.sockets = {}
        // массив хранить подключенные комнаты io
        this.joinedRooms = []
        // обработчики socket соединения
        this.namespaceHandlers = {
            GUEST: {},
            REGISTERED: {},
        }
    }
    open({ namespace, options = {}, context = {}, socketManifest }) {
        const socket = io(`${this.host}/${namespace}`, options)
        this.socketManifest = socketManifest
        this.lastNamespace = namespace
        this.sockets[namespace] = socket
        if (this.namespaceHandlers[namespace]) {
            this.namespaceHandlers[namespace]({ socket, context, socketManifest })
        }
    }

    close(namespace) {
        this.sockets[namespace].close()
    }

    closeLastOpen() {
        this.sockets[this.lastNamespace].close()
    }

    // закрыть все namespaces
    closeAll() {
        let closed = 0
        const namespaces = Object.keys(this.sockets)
        if (Array.isArray(namespaces) && namespaces.length >= 1) {
            namespaces.forEach((namespace) => {
                this.sockets[namespace].close()
                closed = closed + 1
            })
        }
        return closed
    }

    // закрыть все namespace кроме переданных
    closeAllExcept(exceptSocketNames = []) {
        let closed = 0
        const namespaces = Object.keys(this.sockets)
        if (Array.isArray(namespaces) && namespaces.length >= 1) {
            namespaces.forEach((namespace) => {
                if (!exceptSocketNames.includes(namespace)) {
                    this.sockets[namespace].close()
                    closed = closed + 1
                }
            })
        }
        return closed
    }

    // Дать namespace открытых соединений сокета
    getOpenedNamespaces() {
        return Object.keys(this.sockets)
    }

    // подключенные комнаты список
    getJoinedRooms() {
        return this.joinedRooms
    }

    // получить manifest файл данных сокета
    getSocketManifest() {
        return this.socketManifest
    }

    // получить ивенты сокета
    getSocketEvents() {
        return this.getSocketManifest().EVENTS
    }

    // получаем сокета по namespace у
    getSocket(namespace = 'REGISTERED') {
        return this.sockets[namespace]
    }

    getRegisteredSocket() {
        return this.getSocket('REGISTERED')
    }

    getGuestSocket() {
        return this.getSocket('GUEST')
    }
}

export default ({ host }) => {
    return new Io(host)
}
