<script>
export default {
  name:'MenuItem',
  props: [
    'addToShoppingCart',
    'image',
    'inStock',
    'name',
    'quantity'
  ]
}
</script>

<template>
  <div class="menu-item">
    <img class="menu-item__image" :src="image.source" :alt="image.alt" />

    <div>
      <h3>{{ name }}</h3>

      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>

      <div>
        <label for="add-item-quantity">Quantity: {{ quantity }}</label>
        <input id="add-item-quantity" v-model.number="quantity" type="number">
        <button @click="addToShoppingCart(name, quantity)">
          Add to Shopping Cart
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>