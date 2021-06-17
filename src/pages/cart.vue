<template>
  <div>
    
    <order-Header></order-Header>
    cart
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import OrderHeader from "./../components/OrderHeader.vue"
import NavFooter from "./../components/NavFooter.vue"

export default {
  name: "cart",
  components:{
    OrderHeader,
    NavFooter
  }
}
</script>

<style>

</style>