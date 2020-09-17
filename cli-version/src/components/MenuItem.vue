<script>
import BaseButton from './BaseButton.vue'
export default {
  name: 'MenuItem',
  components: {
    BaseButton
  },
  props: {
    image: {
      type: Object,
      required: true
    },
    inStock: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      defaut: 1
    }
  },
  data() {
    return {
      onSale: false
    }
  },
  computed: {
    generatedPrice() {
      if (this.onSale) {
        return (this.price * 0.9).toFixed(2)
      } else {
        return this.price
      }
    }
  },
  methods: {
    updateShoppingCart(quantity) {
      this.$emit('add-items-to-cart', quantity)
    }
  },
  beforeMount() {
    const today = new Date().getDate()
    if (today % 2 === 0) {
      this.onSale = true
    }
  }
}
</script>

<template>
  <div class="menu-item">
    <img class="menu-item__image" :src="image.source" :alt="image.alt" />
    <div>
      <h3>{{ name }}</h3>
      <p>Price: {{ generatedPrice }} <span v-if="onSale">(10% off!)</span></p>
      <p v-if="inStock">In Stock</p>
      <p v-else>Out of Stock</p>
      <div>
        <label for="add-item-quantity">Quantity: {{ quantity }}</label>
        <input v-model.number="quantity" id="add-item-quantity" type="number" />
        <BaseButton @click="updateShoppingCart(quantity)">
          Add to shopping cart
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-item {
  display: flex;
  width: 532px;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 16px 32px;
  border-radius: 8px;
  background: #f5f0f0;

  &__image {
    width: 250px;
    height: 155px;
    margin: 0 16px 0 0;
    border-radius: 8px;
  }

  #add-item-quantity {
    margin: 8px;
    border: 0;
    border-radius: 4px;
    font-size: 18px;
    text-align: center;
  }
}</style>