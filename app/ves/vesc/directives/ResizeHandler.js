
import { Store } from '../../vuex/store/Store.js'

export default {
  inserted (el) {
    const checkIsDesktop = () => {
      return true; //window.matchMedia(store.getters.config.windowMatchSizeLg).matches
    }

    let prevMatchlg = checkIsDesktop()
    let sidebar = el.querySelector('.vuestic-sidebar')

    el.addEventListener('transitionend', function () {
      Store.dispatch('isToggleWithoutAnimation', false)
    })

    window.addEventListener('resize', function () {
      if (checkIsDesktop() && !prevMatchlg) {
        sidebar.classList.remove('sidebar-hidden')
      } else if (!checkIsDesktop() && prevMatchlg) {
        Store.dispatch('isToggleWithoutAnimation', true)
        sidebar.classList.add('sidebar-hidden')
      }
      prevMatchlg = checkIsDesktop()
    })
  },
}
