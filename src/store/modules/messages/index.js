import getters from "./getters"

const module = {
  namespaced: true,
  state() {
    return{
      messages: [
        { id: 1, author: 1, message: 'Hola 👀', timestamp: new Date().toLocaleTimeString(), read: false, channelId: 1 },
        { id: 2, author: 2, message: 'Hola desde el canal 2 👀', timestamp: new Date().toLocaleTimeString(), read: false, channelId: 2 },
        { id: 3, author: 2, message: 'Hola tuu en el canal 2', timestamp: new Date().toLocaleTimeString(), read: false, channelId: 2 },
        { id: 4, author: 1, message: 'Soy Daniel', timestamp: new Date().toLocaleTimeString(), read: false, channelId: 2 },
      ]
    }
  },
  getters
}

export default module