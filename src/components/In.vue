<template>
    <div class="In">
        <p>请选择你的兴趣爱好</p>
        <input type="checkbox" value="阅读" v-model="like">阅读
        <input type="checkbox" value="游泳" v-model="like">游泳
        <input type="checkbox" value="跑步" v-model="like">跑步
        <input type="checkbox" value="乒乓球" v-model="like">乒乓球
        <input type="checkbox" value="看电影" v-model="like">看电影
        <input type="checkbox" value="动漫" v-model="like">动漫<br>
        <input type="button" value="下一步" @click="doClick">
        <input type="button" value="上一步" style="margin-left: 10px" @click="Click1">
        <input type="button" value="重置" style="margin-left: 10px" @click="ddoClike">
        {{this.$store.state.user}}
    </div>
</template>

<script>
    export default {
        name: "In",
        data(){
           return{
               like:[]
           }
        },
        methods:{
            doClick(){
                this.$store.commit("addLike",this.like);
                this.$router.push('/last');
            },
            ddoClike(){
                this.like=[]
            },
            Click1(){
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>