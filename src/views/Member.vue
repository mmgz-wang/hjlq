<template>
    <div class="member">
        <Header></Header>
        <div class="content">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh()" :success-duration='10'>
                <van-list
                    v-model="loading"
                    :finished="finished"
                    :finished-text="text"
                    @load="onLoad()"
                    >
                    <List :dynamiclist='list' :type='type'></List>
                </van-list>
            </van-pull-refresh>
        </div>
        <van-icon class="add"  @click='add()' name="free-postage" color='white' size='60px'/>
    </div>
</template>
<script>
import List from '@/components/List.vue'
import Header from "@/components/Header.vue"
export default {
    components:{
        List,
        Header
    },
    data(){
        return {
            type:'portrait',
            lists:[],
            list:[
                {
                    userid: '34342',
                    username:'绵马贯众',
                    portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
                    Creationtime:'9月4号',
                    timestamp:'1571281962219',
                    title:'',
                    content:'枯燥是生活的本质!',
                    photolist:[
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg"  
                    ]
                },
                {
                    userid: '34342',
                    username:'绵马贯众',
                    portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
                    Creationtime:'9月4号',
                    timestamp:'1571281962219',
                    title:'想康康大家手机里的人间！',
                    content:'枯燥是生活的本质!',
                    photolist:[
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg"  
                    ]
                },
                {
                    userid: '34342',
                    username:'绵马贯众',
                    portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
                    Creationtime:'9月4号',
                    timestamp:'1571281962219',
                    title:'康康大家最近的生活照！',
                    content:'枯燥是生活的本质!',
                    photolist:[
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg"  
                    ]
                },
                {
                    userid: '34342',
                    username:'绵马贯众',
                    portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
                    Creationtime:'9月4号',
                    timestamp:'1571281962219',
                    title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
                    content:'枯燥是生活的本质!',
                    photolist:[]
                },
                {
                    userid: '34342',
                    username:'绵马贯众',
                    portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
                    Creationtime:'9月4号',
                    timestamp:'1571281962219',
                    title:'',
                    content:'枯燥是生活的本质!',
                    photolist:[
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg"  
                    ]
                },
                {
                    userid: '34342',
                    username:'绵马贯众',
                    portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
                    Creationtime:'9月4号',
                    timestamp:'1571281962219',
                    title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
                    content:'枯燥是生活的本质!',
                    photolist:[
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg"  
                    ]
                },
                {
                    userid: '34342',
                    username:'绵马贯众',
                    portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
                    Creationtime:'9月4号',
                    timestamp:'1571281962219',
                    title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
                    content:'枯燥是生活的本质!',
                    photolist:[]
                },
                {
                    userid: '34342',
                    username:'绵马贯众',
                    portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
                    Creationtime:'9月4号',
                    timestamp:'1571281962219',
                    title:'',
                    content:'枯燥是生活的本质!',
                    photolist:[
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg"  
                    ]
                },
                {
                    userid: '34342',
                    username:'绵马贯众',
                    portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
                    Creationtime:'9月4号',
                    timestamp:'1571281962219',
                    title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
                    content:'枯燥是生活的本质!',
                    photolist:[
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg",
                    "http://img3.imgtn.bdimg.com/it/u=1239957118,2147373077&fm=26&gp=0.jpg"  
                    ]
                },
                {
                    userid: '34342',
                    username:'绵马贯众',
                    portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
                    Creationtime:'9月4号',
                    timestamp:'1571281962219',
                    title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
                    content:'枯燥是生活的本质!',
                    photolist:[]
                },
                {
                    userid: '34342',
                    username:'绵马贯众',
                    portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
                    Creationtime:'9月4号',
                    timestamp:'1571281962219',
                    title:'混水摸鱼',
                    content:'干啥啥不行，吃啥啥没够!',
                    photolist:[]
                }
            ],
            loading: false,
            finished: false,
            isLoading: false,
            text:'没有更多了！'
        }   
    },
    methods:{
        add(){
            this.$router.push('/add')
        },
        onLoad() {
            // 异步更新数据
              setTimeout(() => {
                  // for (let i = 0; i < 10; i++) {
                  //   this.list.push(this.list.length + 1);
                  // }
                  // 加载状态结束
                  this.loading = false;
  
                  // 数据全部加载完成
                  if (this.list.length >= 11) {
                    this.finished = true;
                  }
              }, 500);
        },
        onRefresh(){
            setTimeout(() => {
                this.$toast('刷新成功');
                this.isLoading = false;
            }, 500);
        }
    },
    mounted(){
      console.log(this.list)
    }
}
</script>
<style lang="stylus">
.member
    position relative
    .add
        position fixed
        right 30px
        bottom 70px   
</style>