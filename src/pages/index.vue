<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, i) in item" :key="i">
                    <a :href="sub.id? '/product/'+sub.id : ''">
                      <img :src="sub.img || '/imgs/item-box-1.png'" alt="">
                      {{sub.name || '小米9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children">
                <!-- <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="sub.id? '/product/'+sub.id : ''">
                      <img :src="sub.img || '/imgs/item-box-1.png'" alt="">
                      {{sun.name || '小米9'}}
                    </a>
                  </li>
                </ul> -->
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>

        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/'+item.id"><img :src="item.img" alt=""></a>
          </swiper-slide>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
          
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    
    
      </div>
      <div class="ads-box">
        <a :href="'/product/'+item.id" v-for="(item, index) in adsList" :key="index">
          <img :src="item.img" alt="">
        </a>
      </div>
      <div class="banner">
        <a href="'/product/30'">
        <img src="/imgs/banner-1.png" alt=""></a>
      </div>
    </div>
    <div class="product-box">
        <div class="container">
          <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/product/35">
              <img src="/imgs/mix-alpha.jpg" alt="">
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(item, i) in phoneList" :key="i">
              <div class="item" v-for="(item,j) in item" :key="j">
                <span :class="{'new-pro' : j%2==0}">新品</span>
                <div class="item-img">
                  <img :src="item.mainImage" alt="">
                </div>
                <div class="item-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price">{{item.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "../components/ServiceBar.vue";
import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'
export default {
  name: 'index',
  data() {
    return{
      swiperOption: {
        autoplay: true,
        loop: true,
        effect:"cube",
        cubeEffect: {
          // slideShadows: true,
          // shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          // hideOnClick :true, 
          clickable:true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList:[
        {
          id:'42',
          img:'/imgs/slider/slide-1.jpg'
        },
        {
          id:'45',
          img:'/imgs/slider/slide-2.jpg'
        },
        {
          id:'46',
          img:'/imgs/slider/slide-3.jpg'
        },
        {
          id:'',
          img:'/imgs/slider/slide-4.jpg'
        },
        {
          id:'',
          img:'/imgs/slider/slide-5.jpg'
        }
      
      ],
      menuList:[
        [
          {
            id: 30,
            img: '/imgs/item-box-1.png',
            name: '小米cc9'
          },{
            id: 31,
            img: '/imgs/item-box-2.png',
            name: '小米青春版'
          },{
            id: 32,
            img: '/imgs/item-box-3.jpg',
            name: '小米Ridmi k20 Pro'
          },{
            id: 33,
            img: '/imgs/item-box-4.jpg',
            name: '移动4G专区'
          }
        ],
        [1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]
      ],
      adsList:[
        {
          id: 33,
          img: '/imgs/ads/ads-1.png'
        },{
          id: 48,
          img: '/imgs/ads/ads-1.png'
        },{
          id: 45,
          img: '/imgs/ads/ads-1.png'
        },{
          id: 47,
          img: '/imgs/ads/ads-1.png'
        }
      ],
      phoneList:[]
    }
  },
  mounted() {
    this.init();
  },
  methods:{
    init() {
      this.axios.get('/products',{
        params:{
          categroyId: 100012,
          pageSize: 18
        }
      }).then((res)=>{
        res.list = res.list.slice(10, 18);
        this.phoneList = [res.list.slice(0, 4),res.list.slice(4, 8)]
      })
    }
  },
  components:{
    ServiceBar,
    Swiper,
    SwiperSlide
  }
}
</script>

<style lang="scss">
  @import "../assets/scss/mixin.scss";
  @import "../assets/scss/config.scss";
  @import "../assets/scss/base.scss";
  .index{
    .swiper-box{
      .nav-menu{
        position: absolute;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: 26px 0;
        box-sizing: border-box;
        background-color: #55585A4A;
        .menu-wrap{
          .menu-item{
            height: 50px;
            line-height: 50px;
            a{
              display: block;
              position: relative;
              font-size: 16px;
              color: #FFFFFF;
              padding-left: 30px;
              &:after{
                position: absolute;
                right: 30px;
                top: 17.5px;
                content: ' ';
                @include bgImg(10px,15px,'/imgs/icon-arrow.png')
              }
            }
            &:hover{
              background-color: $colorA;
              .children{
                display: block;
              }
            }
            .children{
              display: none;
              width: 964px;
              height: 451px;
              background-color: $colorG;
              box-sizing: border-box;
              position: absolute;
              top: 0;
              left: 264px;
              border: 1px solid $colorH;
              ul{
                height: 75px;
                display: flex;
                justify-content: space-between;
                li{
                  height: 75px;
                  line-height: 75px;
                  flex: 1;
                  a{
                    color: $colorB;
                    font-size: 14px;
                  }
                  img{
                    width: 35px;
                    height: 42px;
                    vertical-align: middle;
                    margin-right: 15px;
                  }
                }
              }
            }
          }
        }
      }
      .swiper-container{
        height: 451px;
        .swiper-button-prev{
          margin-left: 267px;
        }
      }
    }
    .ads-box{
      @include flex();
      margin-top: 14px;
      margin-bottom: 31px;
      a{
        width: 296px;
        height: 127px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .banner{
      margin-bottom: 50px;
    }
    .product-box{
      background-color: $colorJ;
      padding: 30px 0 50px;
      h2{
        font-size: 22px;
        height: 21px;
        line-height: 21px;
        color: $colorB;
      }
      .wrapper{
        display: flex;
        .banner-left{
          margin-right: 16px;
          img{
            width: 224px;
            height: 619px;
          }
        }
        .list-box{
          .list{
            @include flex();
            width: 986px;
            margin-bottom: 14px;
            &:last-child{
              margin-bottom: 0;
            }
            .item{
              width: 236px;
              height: 302px;
              background-color: $colorG;
              text-align: center;
              span{
                display: inline-block;
                width: 67px;
                height: 24px;
                line-height: 24px;
                font-size: 14px;
                color: $colorG;
                // margin: 0 auto;
                &.new-pro{
                  background-color: #7ECF68;
                }
                &.kill-pro{
                  background-color: #E82626;
                }
              }
              .item-img{
                img{
                  width: 100%;
                  height: 195px;
                }
              }
              .item-info{
                h3{
                  font-size: $fontJ;
                  color: $colorB;
                  line-height: $fontJ;
                  font-weight: bold;
                }
                p{
                  color: $colorD;
                  line-height: 13px;
                  margin: 6px auto 13px; 
                }
                .price{
                  font-size: 14px;
                  color: #F20A0A;
                  font-weight: bold;
                  cursor: pointer;
                  &:after{
                    @include bgImg(20px,20px,'/imgs/icon-cart-hover.png');
                    content: '';
                    margin-left: 5px;
                    vertical-align: middle;
                  }
                }
              }
            }

          }
        }
      }
    }
  }
</style>