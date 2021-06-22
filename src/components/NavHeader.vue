<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-left">
          <a href="javascript:">小米商城</a>
          <a href="javascript:">MIUI</a>
          <a href="javascript:">云服务</a>
          <a href="javascript:">协议规则</a>
        </div>
        <div class="topbar-right">
          <a href="javascript:" v-if="username">{{username}}</a>
          <a href="javascript:" v-if="!username" @click="login">登录</a>
          <a href="javascript:">注册</a>
          <a href="javascript:" class="cart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/login"></a>
        </div>
        <div class="header-menu">
          <a class="item-menu">
            <span href="">小米手机</span>
            <div class="children">
              <ul>
                 <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </a>
          <a class="item-menu">
            <span href="">RedMi红米</span>
            <div class="children"></div>
          </a>
          <a class="item-menu">
            <span href="">电视</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a :href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </a>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" id="">
            <a href=""></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header" ,
  data() {
    return{
      username: '',
      phoneList:[],
    }
  },
  filters:{
    currency(val) {
      if(!val) return "0.00";
      return '￥' + val.toFixed(2) + '元'
    }
  },
  mounted() {
    this.getProductList();
  },
  methods:{
    login() {
      this.$router.push('/login')
    },
    getProductList() {
      this.axios.get('/products',{
        params:{
          catgoryId: '100012',
          pageSize: 15
        }
      }).then((res) => {
        if(res.list.length >= 15) {
          this.phoneList = res.list.slice(5,11)
        }
      })
    }
  },
//   gotoCart() {
//     this.$router.push('/cart')
//   }
}
</script>

<style lang="scss">
  @import '../assets/scss/base.scss';
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/config.scss';

  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      background-color: $colorB;
      color: #B0B0B0;
      .container{
        @include flex();
        a{
          display: inline-block;
          text-align: center;
          color: #B0B0B0;
          margin-right: 17px;
          height: 39px;
          font-size: 14px;
          &:last-child{
            margin-right: 0;
          }
        }
        .cart{
            width: 110px;
            background-color: #FF6600;
            color: #FFFFFF;
            .icon-cart{
              @include bgImg(16px,12px,'/imgs/icon-cart.png');
              margin-right: 4px;
            }
        }
      }
    }
    .nav-header{
      .container{
        position: relative;
        height: 112px;
        @include flex();
        .header-menu{
          display: inline-block;
          padding-left: 209px;
          width: 643px;
          .item-menu{
            display: inline-block;
            font-size: 16px;
            font-weight: bold;
            color: $colorB;
            &:not(:last-child){
            margin-right: 20px;
            };
            span{
              cursor: pointer;
            }
            &:hover{
              color: $colorA;
              .children{
                height: 220px;
                opacity: 1;
                border-top: 1px solid #E0E0E0;
                transition: all .3s;
              }
            }
            .children{
              position: absolute;
              top: 112px;
              left: 0;
              width: 1226px;
              opacity: 0;
              overflow: hidden;
              height: 0;
              z-index: 100;
              transition: all .5s;
              background-color: #FFFFFF;
              border-top: 1px solid #E5E5E5;
              box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
              .product{
                position: relative;
                float: left;
                width: 16.6%;
                text-align: center;
                font-size: 12px;
                height: 220px;
                a{
                  display: inline-block;
                  img{
                  height: 111px;
                  width: auto;
                  margin-top: 26px;
                  }
                  .pro-img{
                    height: 137px;
                  }
                  .pro-name{
                    font-weight: bold;
                    margin-top: 19px;
                    margin-bottom: 8px;
                    color: $colorB;
                  }
                  .pro-price{
                    color: $colorA;
                  }
                  &::before{
                    content: ' ';                      
                    position: absolute;
                    border-right: 1px solid $colorF;
                    top: 38px;
                    right: 0;
                    height: 88px;
                    width: 1px;
                  }
                //   &:last-child::before{
                //   display: none;
                // }
                }
              }
            }
          }
        }
        .header-search{
          width: 319px;
          .wrapper{
            height: 50px;
            border: 1px solid #E0E0E0;
            display: flex;
            align-items: center;
            input{
              border: none;
              border-right: 1px solid #E0E0E0;
              width: 264px;
              height: 50px;
              padding-left: 14px;
            }
            a{
              @include bgImg(18px,18px,'/imgs/icon-search.png');
              margin-left: 17px;
            }
          }
        }
      }
    }
  }
</style>