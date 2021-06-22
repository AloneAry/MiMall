<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <!-- 小米商城 | MIUI | 米家 | 米聊 | 多看 | 游戏 | 政企服务 | 小米天猫店 | 小米集团隐私政策 | 小米公司儿童信息保护规则 | 小米商城隐私政策 | 小米商城用户协议 | 问题反馈 | Select Location -->
      <a href="">MIUI</a><span>|</span>
      <a href="">米家</a><span>|</span>
      <a href="">米聊</a><span>|</span>
      <a href="">政企服务</a><span>|</span>
      <a href="">小米天猫店</a>
      <div class="copyright">
        Copyright ©2020<span>mi.futurefe.com</span>All Rights Reserved.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer"
}
</script>

<style lang="scss">
  @import "../assets/scss/config.scss";
  .footer{
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    font-size: 16px;
    text-align: center;
    color: $colorD;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }
    .footer-link{
      margin: 0 auto;
      margin-top: 31px;
      width: 731px;
      height: 46px;
      font-size: 15.99px;
      a{
        color: $colorD;
        // display: inline-block;
         &:hover{
            color: $colorL;
          }
      }
      span{ 
        margin: 0 10px;
      }
    }
    .copyright{
      margin-top: 13px;
      span{
        color: $colorA;
      }
    }
  }
</style>