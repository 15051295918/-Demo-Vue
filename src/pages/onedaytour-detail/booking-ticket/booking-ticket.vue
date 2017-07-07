<template>
   <div class="booking-fliter">
    	 <div class="booking-predetermine">
    	 	<booking-header></booking-header>
    	 	<booking-content></booking-content>
    	 	<booking-footer></booking-footer>
    	 </div>
    </div>
</template>

<script>

import header from './booking-header'
import content from './booking-content'
import footer from './booking-footer'

export default {
   
    data () {
        return {
             
        }
    },
    components: {
    "booking-header": header,
    "booking-content": content,
    "booking-footer": footer
       }
}
</script>


<style scoped>
.booking-fliter{
	position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
    background:rgba(127,127,127,0.5);
    z-index:-1;    
	}
.booking-predetermine{
	position:fixed;
	bottom:0;
	left:0;
    width: 100%;
    min-height:10.72rem;
    background:#fff;
}

</style>