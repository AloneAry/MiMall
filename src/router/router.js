import Vue from "vue"
import Router from "vue-router"

import Home from "../pages/home"
import Index from "../pages/index"
import Product from "../pages/product"
import Detail from "../pages/detail"
import Cart from "../pages/cart"
import Order from "../pages/order"




Vue.use(Router)

export default  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      computed: Home,
      children:[
        {
          path: '/index',
          name: 'index',
          computed: Index,
        },{
          path: '/product',
          name: 'product',
          computed: Product,
        },{
          path: '/detail',
          name: 'detail',
          computed: Detail,
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      computed: Cart,
    },
    {
      path: '/order',
      name: 'order',
      computed: Order,
    }
  ]
})