<template>
    <div>
        <demoBusHeader>
        </demoBusHeader>

        <demoBusFooter>
        </demoBusFooter>

    </div>

</template>

<script>
    import demoBusHeader from "./demoBusHeader";
    import demoBusFooter from "./demoBusFooter";
    import { dataObj } from './constData'

    export default {
        name: "demoBus",
        components:{
            demoBusHeader,
            demoBusFooter
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>