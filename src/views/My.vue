<template>
  <div class="my">
    <div class="user">
      <van-row>
        <van-col span="6" offset='2'>
          <div class="portrait">
              <img class="user-portrait" :src="date.portrait" alt="">
          </div>
        </van-col>
        <van-col span="6" offset='1'>
          {{date.username}}
        </van-col>
        <van-col span="5">
          <van-icon name="contact" color='#FFD700' />
        </van-col>
        <van-col span="15">
          {{date.sentence}}
        </van-col>
      </van-row>
    </div>
    <van-row class="label">
      <van-col  span='22' offset='1'>
          <van-tag round type="warning" v-for='item in date.userlabel'>{{item}}</van-tag>
      </van-col>
    </van-row>
    <div class="content">
        <van-row v-for='(item,index) in date.dynamiclist' :class="index == date.dynamiclist.length-1?'last' : '' " :key='index'>
            <van-col span='4' >
              {{item.Creationtime}}
            </van-col>
            <van-col span='18' >
              <div class="heading"><van-icon color='#C0FF3E' name="flower-o" />{{item.title}}</div>
              <div class="dynamic">{{item.content}}</div>
              <Photo :photolist='item.photolist'></Photo>
              <span>21天前</span>
            </van-col>
        </van-row>
    </div>
  </div>
</template>

<script>
import Photo from '@/components/Photo.vue'
export default {
  components:{
    Photo
  },
  data(){
      return {
        userlist:{
          username : '绵马贯众',
          gendeer : 1,
          sentence : '一个铁憨憨!'
        },
        images:[
          'https://img.yzcdn.cn/2.jpg',
          'https://img.yzcdn.cn/2.jpg',
          'https://img.yzcdn.cn/2.jpg',
          'https://img.yzcdn.cn/2.jpg'
        ],
        date:{
          userid: '34342',
          username:'绵马贯众',
          usergendeer:'1',
          sentence:'一个铁憨憨!',
          userlabel:['标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签',],
          portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
          region:'北京',
          dynamiclist:[
            {
              Creationtime:'9月4号',
              title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
              content:'枯燥是生活的本质!',
              photolist:[
                "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg"  
              ]
            },
            {
              Creationtime:'9月4号',
              title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
              content:'枯燥是生活的本质!',
              photolist:[
                "http://img2.imgtn.bdimg.com/it/u=1349705944,1369794646&fm=26&gp=0.jpg",
                "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg"  
              ]
            },
            {
              Creationtime:'9月4号',
              title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
              content:'枯燥是生活的本质!',
              photolist:[
                "http://img5.imgtn.bdimg.com/it/u=4096944214,1677787421&fm=26&gp=0.jpg",
                "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                "http://img2.imgtn.bdimg.com/it/u=1349705944,1369794646&fm=26&gp=0.jpg"  
              ]
            },
            {
              Creationtime:'9月4号',
              title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
              content:'枯燥是生活的本质!',
              photolist:[
                "http://img5.imgtn.bdimg.com/it/u=2062687559,2599915666&fm=26&gp=0.jpg",
                "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                "http://img5.imgtn.bdimg.com/it/u=4096944214,1677787421&fm=26&gp=0.jpg",
                'http://img3.imgtn.bdimg.com/it/u=3367720527,1598876434&fm=26&gp=0.jpg' 
              ]
            },
            {
              Creationtime:'9月4号',
              title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
              content:'枯燥是生活的本质!',
              photolist:[
                "http://img3.imgtn.bdimg.com/it/u=3367720527,1598876434&fm=26&gp=0.jpg",
                "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                "http://img5.imgtn.bdimg.com/it/u=4096944214,1677787421&fm=26&gp=0.jpg",
                'http://img3.imgtn.bdimg.com/it/u=3367720527,1598876434&fm=26&gp=0.jpg' 
              ]
            },
            {
              Creationtime:'9月4号',
              title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
              content:'枯燥是生活的本质!',
              photolist:[
                "http://img5.imgtn.bdimg.com/it/u=1649441756,1405685721&fm=26&gp=0.jpg",
                "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                "http://img5.imgtn.bdimg.com/it/u=4096944214,1677787421&fm=26&gp=0.jpg",
                'http://img3.imgtn.bdimg.com/it/u=3367720527,1598876434&fm=26&gp=0.jpg' 
              ]
            },
            {
              Creationtime:'9月4号',
              title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
              content:'枯燥是生活的本质!',
              photolist:[
                "https://wxt.sinaimg.cn/thumb300/7a1d7e79gy1g6za4pgsn2j23402c0u0x.jpg?tags=%5B%5D",
                "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                "http://img5.imgtn.bdimg.com/it/u=4096944214,1677787421&fm=26&gp=0.jpg",
                'http://img3.imgtn.bdimg.com/it/u=3367720527,1598876434&fm=26&gp=0.jpg' 
              ]
            },
            {
              Creationtime:'9月4号',
              title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
              content:'枯燥是生活的本质!',
              photolist:[
                "https://wxt.sinaimg.cn/thumb300/7a1d7e79gy1g741gr6pctj20u01fskjm.jpg?tags=%5B%5D",
                "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                "http://img5.imgtn.bdimg.com/it/u=4096944214,1677787421&fm=26&gp=0.jpg",
                'http://img3.imgtn.bdimg.com/it/u=3367720527,1598876434&fm=26&gp=0.jpg' 
              ]
            }
          ]


        }
      }
  },
  methods:{
    
  }
};
</script>
<style lang="stylus" scoped> 
    .my 
      .user
        color white
        // background-color rgba(0,0,0,.3)
        .van-row
          width 100%
          margin-top 3.5rem
          .portrait
            width 7rem
            height 7rem
            .user-portrait 
              width 100%
              height 100%
              border-radius:50%
          .van-col--6
            font-size 22px
            text-align left
          .van-col--5
            margin-top 2px
            font-size 24px
          .van-col--15
            font-size 14px
            margin-top 5px
        .last 
          border none 
      .label
        height:8rem
        margin-top 10px
        // overflow hidden
        // white-space nowrap
        // text-overflow ellipsis
        .van-tag
          font-size 14px
          margin 6px
          line-height 16px
      .content
        height 100%
        margin-top 10px
        color white
        .van-row
          margin-bottom 20px
          min-height 9rem 
          border-bottom 1px solid rgba(124,205,124,.4)
          .van-col--4
            text-align center
            font-size 14px
            color rgba(102,250,170,.4)
          .van-col--18
            .heading
              width 100%
              min-height 3rem
              // padding 5px
              font-size 16px
              line-height 20px
              border-radius 8px
              letter-spacing 2px
              padding 10px
              border 1px solid rgba(144,238,144,.6)
              .van-icon
                font-size 18px
            .dynamic
              margin 5px 0 10px 0 
              line-height  24px
            photo 
              width 100%
              height 150px
            span 
              display inline-block
              margin 10px 0
              font-size 12px
              color rgba(190,190,190,.4)
      
</style>