<template>
    <div>
        <header-oneDay></header-oneDay>
        <prdcard-com></prdcard-com>
    </div>
</template>

<script>

import headerOneDay from "./headerOneDay";
import prdcardCom from "./prdcardCom";

export default {

    data() {
        return {

        }
    },
    components: {
        "header-oneDay": headerOneDay,
        "prdcard-com": prdcardCom
    }
}
</script>


<style scoped>

</style>