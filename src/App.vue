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
  max-width: 1400px;
  margin: 20px auto;
}
</style>
<style scoped>
hr {
  margin: 12px 0;
}
</style>
