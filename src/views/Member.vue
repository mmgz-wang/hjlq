<template>
    <div class="member">
        <div class="content">
            <List :dynamiclist='list' :type='type'></List>
        </div>
    </div>
</template>
<script>
import List from '@/components/List.vue'
export default {
    components:{
        List
    },
    data(){
        return {
            type:'portrait',
            list:[
                {
                    userid: '34342',
                    username:'绵马贯众',
                    portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
                    Creationtime:'9月4号',
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
                    title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
                    content:'枯燥是生活的本质!',
                    photolist:[]
                },
                {
                    userid: '34342',
                    username:'绵马贯众',
                    portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
                    Creationtime:'9月4号',
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
                    title:'想康康大家最近拍的一张天空照达拉斯即可将尽快尽快',
                    content:'枯燥是生活的本质!',
                    photolist:[]
                },
                {
                    userid: '34342',
                    username:'绵马贯众',
                    portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
                    Creationtime:'9月4号',
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
                    title:'',
                    content:'干啥啥不行，吃啥啥没够!',
                    photolist:[]
                },
                {
                    userid: '34342',
                    username:'绵马贯众',
                    portrait:'http://img3.imgtn.bdimg.com/it/u=1535148441,4230194458&fm=26&gp=0.jpg',
                    Creationtime:'9月4号',
                    title:'混水摸鱼',
                    content:'',
                    photolist:[]
                }
            ],
        }   
    }
}
</script>
<style lang="stylus">

</style>