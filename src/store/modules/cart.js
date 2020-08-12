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
    total: (state, getters) => getters.products.reduce((total, product) => total + product.price * product.quantity, 0)
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

      if (product.stock + product.quantity < quantity)
        return

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
    deleteProductCart ({ state, commit }, product) {

      const item = state.items.find(item => item.id === product.id)

      if (!item)
        return

      commit('deleteItem', item.id)

      commit('products/setStock', {
        id: product.id,
        quantity: -product.quantity,
      }, { root: true })
    },
  },
  mutations: {
    addItem (state, item) {
      state.items.push(item)
    },
    deleteItem (state, id) {
      const index = state.items.findIndex(item => item.id === id)
      if (index > -1)
        state.items.splice(index, 1)
    },
    setQuantity (state, { item, quantity }) {
      item.quantity = quantity
    },
    incrementQuantity (state, item) {
      item.quantity++
    },
  }
}
