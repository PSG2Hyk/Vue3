<template>
    <div class="myindex">
        <p>1,请问您的性别是</p>
        <input type="radio" name="sex" value="男♂" v-model="sex">男
        <input type="radio" name="sex" value="女♀" v-model="sex">女
        <input type="radio" name="sex" value="保密" v-model="sex">保密<br>
        <input type="button" value="下一步" @click="doClick">
        <input type="button" value="重置" style="margin-left: 10px" @click="ddoClike">
    </div>
</template>

<script>
    export default {
        name: "Myindex",
        data(){
            return{
                sex:'保密'
            }
        },
        methods:{
            doClick(){
                this.$store.commit("addUser",this.sex)
                this.$router.push('/In');
            },
            ddoClike(){
                this.sex='保密'
            }
        }
    }
</script>

<style scoped>

</style>