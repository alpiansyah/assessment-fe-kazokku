import Vue from 'vue'
import Vuex from 'vuex'

import form from './form'
// import payment from './payment'
// import shipment from './shipment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    form,
    // payment,
    // shipment
  }
})

// export default store
