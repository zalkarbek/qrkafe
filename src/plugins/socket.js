import socketHandler from '@/sockets/io'
import socketConfig from '@/config/socket'

const io = socketHandler(socketConfig)

export default {
    install(Vue) {
        Object.defineProperties(Vue.prototype, {
            socket: {
                get() {
                    return io;
                },
            },
            $socket: {
                get() {
                    return io;
                },
            },
        });
    },
}
