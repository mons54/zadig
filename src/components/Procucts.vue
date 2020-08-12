<template>
  <div class="products">
    <div
      v-for="product in products"
      :key="product.id"
      class="product">
      <img :src="product.image|image"/>
      <h3>{{ product.title }}</h3>
      <div>{{ product.stock|article }} - {{ product.price|price }}</div>
      <button
        v-on:click="addProductCart(product)"
        :disabled="!product.stock">
        Ajouter au panier
      </button>
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
    ...mapActions('cart', [
      'addProductCart'
    ]),
    ...mapActions('products', [
      'getProducts'
    ]),
  },
  created () {
    this.getProducts()
  }
}
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
}

.product {
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
}

.product > img {
  width: 100%;
}

.product > h3 {
  text-transform: uppercase;
}

.product > button {
  margin-top: 16px;
  width: 100%;
  border: none;
  background-color: #000;
  color: #fff;
  border-radius: 0;
  padding: 12px 20px;
  text-transform: uppercase;
  font-size: 20px;
  cursor: pointer;
}

.product button[disabled] {
  background-color: #9E9E9E;
}

@media (max-width: 640px) {
  .products {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
  }
}
</style>
