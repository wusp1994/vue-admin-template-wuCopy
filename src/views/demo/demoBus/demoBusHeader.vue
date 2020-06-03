<template>
    <div class="demoBus">
        <ul>
            <li v-for="(item,index) in testArr" :key="index">
                {{item.name}}
                <el-button @click="sendParams(item)">bus传参</el-button>
            </li>
        </ul>
    </div>
</template>

<script>
    //分发事件的组件,  dispatch：分发； broadcast：广播。

    export default {
        name: "demoBus",
        data(){
            return {
                testArr: [
                    { name:'小明',id:'1' },
                    { name:'小明明',id:'2' },
                    { name:'小明白',id:'3' },
                ]
            }
        },
        methods:{
            sendParams(data){
                // this.$router.push({name:'demoBusGet'})
                this.$bus.$emit('getHeaderParams', data);  //params是传递的参数
            }
        }
    }
</script>

<style scoped>

</style>