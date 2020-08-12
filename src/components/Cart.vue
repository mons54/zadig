<template>
  <div class="cart">
    <div
      v-for="product in products"
      :key="product.id"
      class="product">
      <img :src="product.image|image"/>
      <div>
        <h3>{{ product.title }}</h3>
        <div>{{ product.price|price }}</div>
        <div class="quantity">
          <label id="quantity">Quantité</label>
          <select
            v-on:change="setProductCart({ product, quantity: +$event.target.value })"
            name="quantity">
            <option
              v-for="i in productAvailable(product)"
              :key="i"
              :selected="i === product.quantity">
              {{ i }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters('cart', {
    products: 'products'
  }),
  methods: {
    ...mapActions('cart', [
      'setProductCart'
    ]),
    productAvailable (product) {
      return product.stock + product.quantity
    },
  }
}
</script>

<style scoped>
.cart {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
}

.product {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
}

.product > img {
  width: 100%;
}

.product > div {

}

.product > div > h3 {
  margin-top: 0;
}

.product > div > .quantity {
  margin-top: 16px;
}

.quantity > label {
  font-size: 14px;
  display: block;
  margin-bottom: 8px;
}

.quantity > select {
  padding: 8px;
  border-color: black;
}
</style>
