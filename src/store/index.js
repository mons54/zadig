import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products.js'

Vue.use(Vuex)

Vue.filter('price', (value) => new Intl.NumberFormat('fr-Fr', {
  style: 'currency',
  currency: 'EUR'
}).format(value))

export default new Vuex.Store({
  modules: {
    products,
  },
})
