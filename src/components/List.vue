<template>
  <div class="hello">
      <van-row v-for='(item,index) in dynamiclist' :class="index == 0?'first' : '' " :key='index'>
          <van-col span='4' offset='1'>
            <div v-if="type == 'time'?true:false">
              {{item.Creationtime}}
            </div>
            <van-image v-if="type == 'portrait'?true:false" round width="50px" height="50px" :src="item.portrait"/>            
          </van-col>
          <van-col span='16' offset='1'>
            <div class="heading" v-if="item.title == ''?false:true"><van-icon color='#C0FF3E' name="flower-o" />{{item.title}}</div>
            <div class="dynamic">{{item.content}}</div>
            <Photo :photolist='item.photolist' v-if="item.photolist == ''?false:true"></Photo>
            <span>21天前</span>
          </van-col>
      </van-row>
  </div>
</template>

<script>
import Photo from '@/components/Photo.vue'
export default {
  name: 'List',
  components:{
    Photo
  },
  props:{
    dynamiclist:{
      type:Array,
      default:() => []
    },
    type:{
      type:String,
      default:null
    }
  },
  data(){
    return{
        iferror:true,
        ifloading:true,
        show: false,
        index: 0,
        hide:false,
    }
  },
  methods:{
    photo(event){
        this.show = true
    },
    onChange(index){
        this.index = index
    },
    load(){
        
    }
  },
  mounted(){
    console.log(this.type)
  },
  created(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.hello
  margin-top 10px
  color white
  position relative 
  .van-row
    padding-top 20px
    border-top 1px solid rgba(124,205,124,.4)
    .van-col--4
      line-height 30px
      text-align center
      font-size 14px
      color rgba(102,250,170,.4)
    .van-col--16
      .heading
        width 100%
        min-height 1rem
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
