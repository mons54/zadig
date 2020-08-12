import products from '@/api/products.js'

export default {
  namespaced: true,
  state: () => ({
    data: []
  }),
  actions: {
    getProducts ({ commit }) {
      commit('setProducts', products.getProducts())
    }
  },
  mutations: {
    setProducts (state, products) {
      state.data = products
    },
  }
}
