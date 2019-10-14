<template>
    <div class="member">
        <!-- <div class="swiper">
            <van-swipe :autoplay="3000" :width='414'>
                <van-swipe-item v-for="(image, index) in images" :key="index">
                <img :src="image" />
                </van-swipe-item>
            </van-swipe>
        </div> -->
    </div>
</template>
<script>
export default {
    data(){
        return {
            images:[
                'http://img4.imgtn.bdimg.com/it/u=3343688793,1861394261&fm=26&gp=0.jpg',
                'http://img0.imgtn.bdimg.com/it/u=1844529182,1345819342&fm=15&gp=0.jpg',
                'http://img2.imgtn.bdimg.com/it/u=4261813980,2905778844&fm=26&gp=0.jpg',
                'http://img1.imgtn.bdimg.com/it/u=274329004,4029770503&fm=26&gp=0.jpg' ,
                'http://img4.imgtn.bdimg.com/it/u=3343688793,1861394261&fm=26&gp=0.jpg',
            ]
        }   
    }
}
</script>
<style lang="stylus">

</style>