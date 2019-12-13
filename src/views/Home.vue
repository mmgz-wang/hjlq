<template>
  <div class="content">
    <Header></Header>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// @ is an alias to /src'
import Header from '@/components/Header.vue'
export default {
  components: {
    Header
  },
  data(){
    return {
      
    }
  },
  mounted(){
    
  }
}
</script>
<style lang="stylus">
.content
  width  100%
  height 100%
  background-color black  

</style>