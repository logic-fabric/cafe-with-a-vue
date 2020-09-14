<template>
  <div id="app" class="app">

    <h1>{{ restaurantName }}</h1>

    <p class="description">
      Welcome to {{ restaurantName }}! We are known for our freshly baked
      bread and french pastries! Give you morning a warm start or treat
      yourself in the middle of the day. Our butter is imported from local
      farmers in France. Once you take your first bite, you will see why
      everyone can't get enough!
    </p>

    <section class="menu">
      <h2>Menu</h2>

      <MenuItem 
        v-for="item in simpleMenu"
        :addToShoppingCart="addToShoppingCart"
        :name="item.name"
        :image="item.image"
        :quantity="item.quantity"
        :inStock="item.inStock"
        :key="item.name"
      />
    </section>

    <aside class="shopping-cart">
      <h2>Shopping Cart: {{ shoppingCart.totalItems }} item<span v-if="shoppingCart.totalItems > 1">s</span></h2>
    </aside>

    <h2>Contact Us</h2>

    <p>Address: {{ address }}</p>
    <p>Phone: {{ phone }}</p>
    <p>Email: {{ email }}</p>
    <p>Hours:</p>

    <ul>
      <li>M-F: 06:00 to 16:00</li>
      <li>Saturday: 07:00 to 14:00</li>
      <li>Sunday: 07:00 to 12:00</li>
    </ul>

    <footer class="footer">
      <p>Copyright {{ restaurantName }} 2020</p>
    </footer>

  </div>
</template>

<script>
import MenuItem from './components/MenuItem'

export default {
  name: 'App',
  components: {
    MenuItem
  },
  data() {
    return {
      address: '9274 Beurre Ave, Paris, France',
      email: 'hello@cafewithavue.bakery',
      phone: '+08 88 88 88 88 88',
      restaurantName: 'Cafe with A Vue',
      simpleMenu: [
        {
          name: 'Croissant',
          image: {
            source: '/img/croissant.jpg',
            alt: 'A croissant'
          },
          inStock: true,
          quantity: 1
        },
        {
          name: 'French Baguette',
          image: {
            source: '/img/french-baguette.jpeg',
            alt: 'Four French Baguettes'
          },
          inStock: true,
          quantity: 1
        },
        {
          name: 'Éclair',
          image: {
            source: '/img/eclair.jpg',
            alt: 'Chocolate Éclair'
          },
          inStock: false,
          quantity: 1
        }
      ],
      shoppingCart: {
        totalItems: 0
      }
    }
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear()

      return `Copyright ${this.restaurantName} ${currentYear}`
    }
  },
  methods: {
    addToShoppingCart(itemName, quantity) {
      alert(`${quantity} ${itemName} added to your Shopping Cart`);
      this.shoppingCart.totalItems += parseInt(quantity);
    }
  }
}
</script>

<style lang="scss">

</style>
