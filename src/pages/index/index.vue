<template>
    <div class="main">
        <index-header></index-header>
        <imgs-swiper></imgs-swiper>
        <icon-swiper></icon-swiper>
    </div>
</template>

<script>
//引入统计文件夹的header 下面进行引用
import header from './header'
import imgswiper from './imgswiper'
import iconswiper from './iconswiper'

export default {
    data () {
        return {
          
        }
    },
    components: {
        //引入 header 上面要定义标签
        "index-header": header,
        "imgs-swiper": imgswiper,
        "icon-swiper": iconswiper
    }

}
</script>


<style scoped>

</style>
