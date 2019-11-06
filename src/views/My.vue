<template>
  <div class="my">
    <div class="user">
      <van-row>
        <van-col span="8" offset='2'>
          <div class="portrait">
              <img class="user-portrait" :src="date.portrait" alt="">
          </div>
        </van-col>
        <van-col span='14'>
          <van-row class="div">
            <van-col span="4">
              <van-icon name="contact" color='#FFD700' />
            </van-col>
            <van-col span="12">
              {{date.username}}
            </van-col>
          </van-row>
          <van-row class="div2">
            <van-col span="3">
              <van-icon name="location-o" color='#FFD700' />
            </van-col>
            <van-col span="12">
              {{date.region}}
            </van-col>
          </van-row>
          <van-col span="15">
              {{date.sentence}}
            </van-col>
        </van-col>
      </van-row>
    </div>
    <van-row class="label">
      <van-col  span='22' offset='1'>
          <van-tag round type="warning" v-for='item in date.userlabel'>{{item}}</van-tag>
      </van-col>
    </van-row>
    <div class="content">
      <List :dynamiclist='date.dynamiclist' :type='type'></List>
        <!-- <van-row v-for='(item,index) in date.dynamiclist' :class="index == date.dynamiclist.length-1?'last' : '' " :key='index'>
            <van-col span='4' >
              {{item.Creationtime}}
            </van-col>
            <van-col span='18' >
              <div class="heading"><van-icon color='#C0FF3E' name="flower-o" />{{item.title}}</div>
              <div class="dynamic">{{item.content}}</div>
              <span>21天前</span>
            </van-col>
        </van-row> -->
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import List from '@/components/List.vue'
import video from '@/components/video.vue'
import Footer from "@/components/Footer.vue"
export default {
  components:{
    List,
    Footer,
    video
  },
  data(){
      return {
        type:'time',
        date:{
          userid: '34342',
          username:'绵马贯众',
          usergendeer:'1',
          sentence:'一个铁憨憨!',
          userlabel:['标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签','标签',],
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
              title:'',
              content:'枯燥是生活的本质!',
              photolist:[
                "http://img2.imgtn.bdimg.com/it/u=1349705944,1369794646&fm=26&gp=0.jpg",
                "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg"  
              ]
            },
            {
              Creationtime:'9月4号',
              title:'',
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
              title:'',
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
              title:'',
              content:'枯燥是生活的本质!',
              photolist:[
                "https://wxt.sinaimg.cn/thumb300/7a1d7e79gy1g741gr6pctj20u01fskjm.jpg?tags=%5B%5D",
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
                "https://wxt.sinaimg.cn/thumb300/7a1d7e79gy1g741gr6pctj20u01fskjm.jpg?tags=%5B%5D"
              ]
            },
            {
              Creationtime:'9月4号',
              title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
              content:'枯燥是生活的本质!',
              photolist:[
                "https://wxt.sinaimg.cn/thumb300/7a1d7e79gy1g741gr6pctj20u01fskjm.jpg?tags=%5B%5D"
              ]
            },
            {
              Creationtime:'9月4号',
              title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
              content:'枯燥是生活的本质!',
              photolist:[]
            },
            {
              Creationtime:'9月4号',
              title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
              content:'这个样子呀！',
              photolist:[]
            },
            {
              Creationtime:'9月4号',
              title:'',
              content:'该怎么讲呢！',
              photolist:[]
            },
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
          .portrait
            width 7rem
            height 7rem
            margin-top 2.5rem
            .user-portrait 
              width 100%
              height 100%
              border-radius:50%
          .van-col--14
            margin-top 2.5rem
            .div
              line-height 22px
              margin 5px 0
              .van-col--4
                font-size 22px
                text-align left
              .van-col--12
                margin-top 2px
                font-size 24px
            .div2
              line-height 20px
              margin 5px 0
              .van-col--3
                font-size 20px
                text-align left
              .van-col--12
                margin-top 2px
                font-size 20px
            .van-col--15  
              font-size 16px
              margin-top 5px
        .last 
          border none 
      .label
        min-height 2rem
        padding 0
        // overflow hidden
        // white-space nowrap
        // text-overflow ellipsis
        .van-tag
          font-size 14px
          margin 6px
          line-height 16px
        
      
</style>