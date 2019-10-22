<template>
    <div class="Over">
        <p>您的性别是：{{ this.$store.state.user }}</p>
        <p>您的爱好是：{{this.$store.state.like.join(",")}}</p>
        <p>个人简介:{{this.$store.state.myself}}</p>
    </div>
</template>

<script>
    export default {
        name: "Over",
        methods:{
        }
    }
</script>

<style scoped>

</style>