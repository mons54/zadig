<template>
  <div>
    <div
      v-for="product in products"
      :key="product.id">
      {{ product.title }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: mapState({
    products: state => state.products.data
  }),
  methods: {
    ...mapActions('products', [
      'getProducts'
    ]),
  },
  created () {
    this.getProducts()
  }
}
</script>
