<template>
  <div id="app" class="app">
    <h1>{{ restaurantName }} </h1>

    <p class="description">
      Welcome to {{ restaurantName }}! We are known for our freshly baked bread
      and french pastries! Give you morning a warm start or treat yourself in
      the middle of the day. Our butter is imported from local farmers in
      France. Once you take your first bite, you will see why everyone can't get
      enough!
    </p>

    <section class="menu">
      <h2>Menu</h2>

      <MenuItem
        v-for="item in simpleMenu"
        @add-items-to-cart="addToShoppingCart"
        :name="item.name"
        :image="item.image"
        :quantity="item.quantity"
        :price="item.price"
        :inStock="item.inStock"
        :key="item.name"

      />
    </section>

    <aside class="shopping-cart">
      <h2>Shopping Cart: {{ shoppingCart }} items</h2>
    </aside>

    <footer class="footer">
      <p>{{ copyright }}</p>
    </footer>
  </div>
</template>

<script>
import MenuItem from '../components/MenuItem'
export default {
  name: 'Home',
  components: {
    MenuItem
  },
  data() {
    return {
      restaurantName: 'Cafe with A Vue',
      shoppingCart: 0,
      simpleMenu: [
        {
          name: 'Croissant',
          image: {
            source: '/img/croissant.jpg',
            alt: 'A croissant'
          },
          inStock: true,
          quantity: 1,
          price: 2.99
        },
        {
          name: 'French Baguette',
          image: {
            source: '/img/french-baguette.jpeg',
            alt: 'Four French Baguettes'
          },
          inStock: true,
          quantity: 1,
          price: 1.49
        },
        {
          name: 'Éclair',
          image: {
            source: '/img/eclair.jpg',
            alt: 'Chocolate Éclair'
          },
          inStock: false,
          quantity: 1,
          price: 3.19
        }
      ]
    }
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear()
      return `Copyright ${this.restaurantName} ${currentYear}`
    }
  },
  methods: {
    addToShoppingCart(amount) {
      this.shoppingCart += amount;
    }
  }
}
</script>

<style scoped lang="scss">
.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}

.footer {
  text-align: center;
  font-style: italic;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.shopping-cart {
  position: absolute;
  right: 30px;
  top: 0;
}
</style>