<template>
    <div class="last">
        <p>请介绍一下自己</p>
        <textarea v-model="myself"></textarea><br>
        <input type="button" value="下一步" @click="doClick">
        <input type="button" value="上一步" style="margin-left: 10px" @click="Click1">
        <input type="button" value="重置" style="margin-left: 10px" @click="ddoClike">
        {{this.$store.state.like}}
    </div>
</template>

<script>
    export default {
        name: "last",
        data(){
            return{
                myself:''
            }
        },
        methods:{
            doClick(){
                this.$store.commit("addMyself",this.myself)
                this.$router.push('/Over')
            },
            ddoClike(){
                this.myself=''
            },
            Click1(){
                this.$router.push('/In')

            }
        }
    }
</script>

<style scoped>

</style>