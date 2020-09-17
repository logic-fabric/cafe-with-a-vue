import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
        price: 3.99
      },
      {
        name: 'Éclair',
        image: {
          source: '/img/eclair.jpg',
          alt: 'Chocolate Éclair'
        },
        inStock: false,
        quantity: 1,
        price: 4.99
      }
    ]
  },
  getters: {
    copyright: state => {
      const currentYear = new Date().getFullYear()

      return `Copyright ${state.restaurantName} ${currentYear}`
    }
  },
  mutations: {},
  actions: {},
  modules: {}
})