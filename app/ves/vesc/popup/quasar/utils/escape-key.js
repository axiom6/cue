import Platform from '../plugins/platform'

let handlers = []

export default {
  __installed: false,
  __install () {
    this.__installed = true
    window.addEventListener('keyup', evt => {
      if(evt === false ) {}
      if (handlers.length === 0) {
      }

      //if (evt.which === 27 || evt.keyCode === 27) {
      //  handlers[handlers.length - 1]() }
    })
  },

  register (handler) {
    if (Platform.is.desktop) {
      if (!this.__installed) {
        this.__install()
      }

      handlers.push(handler)
    }
  },

  pop () {
    if (Platform.is.desktop) {
      handlers.pop()
    }
  },
}
