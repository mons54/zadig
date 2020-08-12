<template>
  <div class="products">
    <div
      v-for="product in products"
      :key="product.id"
      class="product">
      <img :src="`https://zadig-et-voltaire.imgix.net/${product.image}`"/>
      <h3>{{ product.title }}</h3>
      <div>{{ product.price|price }}</div>
      <button>Ajouter au panier</button>
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

.product img {
  width: 100%;
}

.product h3 {
  text-transform: uppercase;
}

.product button {
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
</style>
