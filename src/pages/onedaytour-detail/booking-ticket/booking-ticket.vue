<template>
   <div class="booking-fliter">
    	 <div class="booking-predetermine">
    	 	<booking-header></booking-header>
    	 	<booking-content></booking-content>
    	 	<booking-footer></booking-footer>
    	 </div>
         <div class="booking-button">
             <div  class="booking-consult">咨询</div>
             <div  class="booking-promplt">立即预定</div>
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
	}
.booking-predetermine{
    display: none;
	position:fixed;
	bottom:0;
	left:0;
    width: 100%;
    min-height:10.72rem;
    background:#fff;
}
.booking-button{
    	position:fixed;
	bottom:0;
	left:0;
	display: block;
    width: 100%;
    border: 0 none;
    background: #ff9800;
    color: #fff;
}
.booking-consult{
    float: left;
    padding: 0.36rem 0;
    width: 1.02rem;
    text-align: center;
    background: #fff;
    color: #616161;
}
.booking-promplt{
    overflow: hidden;
    height: .98rem;
    background: #ff9800;
    color: #fff;
    font-size: .4rem;
    text-align: center;
    line-height: .98rem;
}

</style>