export default {
  namespaced: true,
  state: () => ({
    items: []
  }),
  getters: {
    products: (state, getters, rootState) => {
      return state.items.map(({ id, quantity }) => {
        const product = rootState.products.data.find(product => product.id === id)
        return {
          ...product,
          quantity,
        }
      })
    },
  },
  actions: {
    addProductCart ({ state, commit }, product) {
      if (!product.stock)
        return

      const item = state.items.find(item => item.id === product.id)

      if (item) {
        commit('incrementQuantity', item)
      } else {
        commit('addItem', { id: product.id, quantity: 1 })
      }

      commit('products/decrementStock', product, { root: true })
    },
    setProductCart ({ state, commit }, { product, quantity }) {

      const item = state.items.find(item => item.id === product.id)

      if (item) {
        commit('setQuantity', { item, quantity })
      } else {
        commit('addItem', { id: product.id, quantity })
      }

      commit('products/setStock', {
        id: product.id,
        quantity: quantity - product.quantity,
      }, { root: true })
    },
  },
  mutations: {
    addItem (state, item) {
      state.items.push(item)
    },
    setQuantity (state, { item, quantity }) {
      item.quantity = quantity
    },
    incrementQuantity (state, item) {
      item.quantity++
    },
  }
}
