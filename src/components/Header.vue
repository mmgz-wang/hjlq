<template>
    <!-- <div class="header">
        <van-nav-bar title="邮件" left-arrow  :fixed='true' @click-left='left()' @click-right='right()' color='black'>
            <van-icon name="search" slot="right" />
            <van-icon name="arrow-left" slot="lift" />
        </van-nav-bar>
    </div> -->
    <div class="header">  
      <van-tabs v-model="active" 
                :swipeable='true'
                :sticky='true'
                @click='tab()'
                @scroll='scroll()'
                background='black' 
                title-active-color='#ccc' 
                color='#ccc' 
                line-height='1px'>
        <van-tab v-for="item in list" :to='{path:item.path}'>
            <!-- <dl slot="title">
              <dd></dd>
              <dt><van-icon :name="item.name" /></dt>
            </dl> -->
          <div slot='title' class="solt" >
            <van-icon :name="item.name" size='20px' />
          </div>
          <div slot='default' >
            <!-- //<router-link ></router-link> -->
            <router-view></router-view>

          </div>
        </van-tab>
      </van-tabs>
    </div>
</template>
<script>
export default {
    name:'Header',
    props:{
      name:{
        type:String,
        defaule:'home'
      }
    },
    data(){
        return{
          active:'',
          list:[
            {
              name:'home-o',
              path:'/home'
            },
            {
              name:'bulb-o',
              path:'/Member'
            },
            {
              name:'comment-o',
              path:'/Game'
            },
            {
              name:'contact',
              path:'/My'
            }
          ]
        }
    },
    methods:{
        left(){
          console.log(this.name)
          console.log('左')
          this.$router.push('/home')
        },
        right(){
            console.log('右')
        },
        click(){
          console.log(event)
        },
        scroll(){

        }
    },
    mounted(){
      
    }
}
</script>
<style lang="stylus" scoped>
.header
    height 50px
    .van-tabs--line
      height 50px
      .solt
        line-height 50px
        .slot i 
          font-size 18px

</style>