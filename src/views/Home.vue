<template>
  <div class="content">
    <router-view></router-view>
    <Header></Header>
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
  }
}
</script>
<style lang="stylus">
.content
  width  100%
  height 100%
  background-color black  

</style>