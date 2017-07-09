<template>
    <div>
        <header-oneDay :scrollTop="scrollTop"></header-oneDay>
        <prdcard-com></prdcard-com>
    </div>
</template>

<script>
    import headerOneDay from "./header-one-day";
    import prdcardCom from "./prdcard-com";

    export default {

        data() {
            return {

            }
        },
        components: {
            "header-oneDay": headerOneDay,
            "prdcard-com": prdcardCom
        },
        props: ["scrollTop"]
    }
</script>


<style scoped>

</style>