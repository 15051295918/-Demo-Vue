<template>
  <div class="main">
      <index-header></index-header>
      <img-swiper></img-swiper>
      <icon-swiper></icon-swiper>
      <list-item></list-item>
  </div>
</template>

<script>
import header from './header'
import imgswiper from './imgswiper'
import iconswiper from './cionswiper'
import listitem from './listitem'
export default {
  name: 'hello',
  data () {
    return {
      }
  },
  components: {
      'index-header': header,
      'img-swiper': imgswiper,
      'icon-swiper': iconswiper,
      'list-item': listitem,
  }
}
</script>

</style>
