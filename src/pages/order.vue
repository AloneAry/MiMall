<template>
  <div>
    Order
    <order-Header></order-Header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader.vue"
import NavFooter from "./../components/NavFooter.vue"
export default {
  name: "nav-order",
  components:{
    OrderHeader,
    NavFooter
  }
}
</script>

<style>

</style>