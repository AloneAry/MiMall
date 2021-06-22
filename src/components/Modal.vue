<template>
  <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span>标题</span>
        <a href="javascript:;" class="icon-close"></a>
      </div>
      <div class="modal-body">
        <slot name='body'></slot>
      </div>
      <div class="modal-footer">
        <a href="javascript:;" class="btn">确定</a>
        <a href="javascript:;" class="btn">取消</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  props:{
    modalType:{
      // 弹框类型
      type: Sting,
      default:'from'
    },
    // 弹框标题
    title: String,
    // 按钮类型： 1.确定按钮 2：取消按钮 3：确定取消
    btnType:String,
    sureText:{
      type:String,
      default:'确定'
    },
    Text:{
      type:String,
      default:'取消'
    }
  }
}
</script>

<style>

</style>