<template>
  <div class="hello">
        <div class="album">
            <van-image
                @click='photo()'
                @load='load()'
                :show-error="iferror"
                :show-loading="ifloading"
                fit="cover"
                :src="photolist[0]"
            >
            </van-image>
            <van-image-preview
                v-model="none"
                :images="photolist"
                @change="onChange"
                >
            <template v-slot:index>{{ index}}/{{photolist.length}}</template>
            </van-image-preview>
        </div>
        <svg t="1570872974311" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4464" width="16" height="16"><path d="M808.727273 613.003636a23.272727 23.272727 0 0 1-2.094546 32.814546l-212.945454 186.181818a23.272727 23.272727 0 0 1-27.461818 2.327273l-210.85091-130.56-200.145454 174.778182a23.272727 23.272727 0 0 1-30.72-35.141819l212.945454-186.181818a23.272727 23.272727 0 0 1 27.461819-2.327273l210.850909 130.56 200.145454-174.778181a23.272727 23.272727 0 0 1 32.814546 2.327272zM930.909091 162.909091v791.272727a69.818182 69.818182 0 0 1-69.818182 69.818182H69.818182a69.818182 69.818182 0 0 1-69.818182-69.818182V162.909091a69.818182 69.818182 0 0 1 69.818182-69.818182h791.272727a69.818182 69.818182 0 0 1 69.818182 69.818182z m-46.545455 0a23.272727 23.272727 0 0 0-23.272727-23.272727H69.818182a23.272727 23.272727 0 0 0-23.272727 23.272727v791.272727a23.272727 23.272727 0 0 0 23.272727 23.272727h791.272727a23.272727 23.272727 0 0 0 23.272727-23.272727z m69.818182-162.909091H162.909091a23.272727 23.272727 0 0 0 0 46.545455h791.272727a23.272727 23.272727 0 0 1 23.272727 23.272727v791.272727a23.272727 23.272727 0 0 0 46.545455 0V69.818182a69.818182 69.818182 0 0 0-69.818182-69.818182zM256 535.272727a46.545455 46.545455 0 1 0-46.545455-46.545454 46.545455 46.545455 0 0 0 46.545455 46.545454z" p-id="4465" fill="#cdcdcd"></path></svg>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  props:{
    photolist:{
      type:Array,
      default:() => []
    }
  },
  data(){
    return{
        iferror:true,
        ifloading:true,
        show: false,
        index: 0,
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
  },
  created(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.hello
    min-width 180px
    max-width 210px
    heigth 150px
    position relative 
    .album
        width 100%
        border 1px solid rgba(230,230,230,.5)
        border-radius 8px
        .van-image
            margin-top 5px
    .icon
        display inline-block
        position: absolute!important;
        bottom: 5%;
        right: 5%
        
</style>
