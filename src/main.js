import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

Vue.filter('article', (value) => {
  if (!value)
    return 'Non disponible'
  return `${value} article${value > 1 ? 's' : ''}`
})

Vue.filter('image', (image) => `https://zadig-et-voltaire.imgix.net/${image}`)

Vue.filter('price', (price) => new Intl.NumberFormat('fr-Fr', {
  style: 'currency',
  currency: 'EUR'
}).format(price))

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
