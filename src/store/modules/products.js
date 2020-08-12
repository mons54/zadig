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
    setStock (state, { id, quantity }) {
      const product = state.data.find(product => product.id === id)
      product.stock -= quantity
    },
    decrementStock (state, product) {
      product.stock--
    },
    incrementStock (state, product) {
      product.stock--
    },
  }
}
