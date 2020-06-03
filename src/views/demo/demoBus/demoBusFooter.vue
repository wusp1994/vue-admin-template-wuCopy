<template>
    <div class="demoBusGet">
        <div class="detail">
            兄弟组件拿到的id:{{id}}
        </div>
    </div>
</template>

<script>

    export default {
        name: "demoBusGet",
        data() {
            return {
                id: '',//兄弟组件拿到的id
            }
        },
        created() {
            this.$bus.$on('getHeaderParams', (params) => {
                //todo something
                this.id = params.id
            })
        },
        // 清除事件监听,最好在组件销毁前
        beforeDestroy() {
            this.$bus.$off('getHeaderParams');
        },
    }
</script>

<style scoped>

</style>