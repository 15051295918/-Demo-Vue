<template>
    <div class="calendar">
        <div class="calendar-choose">
            <h1 class="calendar-choose-time">选择时间</h1>
        <div class="single-big">
		 <span class="header-city">x</span>
		</div>
        </div>
       
        
    </div>
</template>

<script>


export default {
   
    data () {
        return {
             
        }
    },
    components: {
        
    }
}
</script>


<style scoped>
.calendar{
    z-index: 3000;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 10.72rem;
    background: #fff;
}

.calendar-choose{
    line-height: 1rem;
    font-size: .34rem;
    text-align: center;
    color: #212121;
}
.single-big{
	 z-index: 2;
    right: 0;
	position: absolute;
    top: 0;
    width: .88rem;
    height: 1rem;
    color: #9e9e9e;
    font-size: .4rem;
    line-height: 1rem;
    text-align: center;

}


</style>