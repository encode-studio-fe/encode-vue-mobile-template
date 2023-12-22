import store from 'store'
import expirePlugin from 'store/plugins/expire'

store.addPlugin(expirePlugin)

export { store as localStorage }

export default store
