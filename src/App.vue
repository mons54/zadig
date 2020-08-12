<template>
  <div id="app">
    <Procucts/>
    <hr>
    <Cart/>
  </div>
</template>

<script>
import Procucts from './components/Procucts.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'App',
  components: {
    Procucts,
    Cart,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 20px;
}
</style>
