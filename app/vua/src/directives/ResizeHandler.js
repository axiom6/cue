
import store from '../../pub/js/lib/vuex.esm.js'

export default {
  inserted (el) {
    const checkIsDesktop = () => {
      return true; //window.matchMedia(store.getters.config.windowMatchSizeLg).matches
    }

    let prevMatchlg = checkIsDesktop()
    let sidebar = el.querySelector('.vuestic-sidebar')

    el.addEventListener('transitionend', function () {
      store.dispatch('isToggleWithoutAnimation', false)
    })

    window.addEventListener('resize', function () {
      if (checkIsDesktop() && !prevMatchlg) {
        sidebar.classList.remove('sidebar-hidden')
      } else if (!checkIsDesktop() && prevMatchlg) {
        store.dispatch('isToggleWithoutAnimation', true)
        sidebar.classList.add('sidebar-hidden')
      }
      prevMatchlg = checkIsDesktop()
    })
  },
}
