<template>
  <div class="product">
    <product-param title="小米 MIX2s">
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </product-param>
  </div>
</template>

<script>
import ProductParam from './../components/ProductParam.vue';
export default {
  mame: "product",
  components:{
    ProductParam,
  }

}
</script>

<style lang='scss'>
  .product{
    button{
      margin-left: 10px;
    }
  }
</style>