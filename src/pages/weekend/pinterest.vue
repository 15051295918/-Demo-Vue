<template>
   <div class="pinterest-wrap border-top">
   	 <h2 class="pinterest-title"><span class="pinterest-titleicon"></span>精选玩法</h2>
   	 <ul class="pinterest-conter" >
   	 	<li class="pinterest-item" v-for="(item,index) in list">
   	 		<div class="pinterest-list-wrap">
   	 			<div class="img-wrapper">
   	 				
   	 				<img  class="item-img" v-lazy="item.src"/>
   	 			
   	 			</div>
   	 		    <div class="price price-suggest">
   	 		    	<span class="current-price">￥{{item.price}}/份<span class="yprice" v-if=done(item)>￥{{item.yprice}}</span></span>
   	 		    </div>
   	 		</div>
   	 		<div class="list-title">
   	 			<h5 class="weekendsuggest-name">{{item.title}}</h5>
   	 			<p class="weekendsuggest-name-position">{{item.position}}</p>
   	 		</div>
   	 	</li>
   	 </ul>
   </div>
</template>

<script>
 
export default {
   props:["list"],
    methods:{
     done:function(item){
     	if(item.yprice){     		
     		return true;
     	}else{
     		return false;
     	}
  	 }
 
  }
}
 
</script>

<style scoped>
	.pinterest-wrap{
		margin-top: .2rem; 
		background: #fff;
	}
	.pinterest-title{
		line-height: .88rem;
		text-indent: .15rem;
		font-size: .28rem;
	}
	.pinterest-titleicon{
		display: inline-block;
		width: .06rem;
		height: .25rem;
		background: #1ba9ba;
		margin-right: .1rem;		
	}
	.img-wrapper{
		overflow: hidden;
		height:0;
		padding-bottom:43.749%;
		width: 100%;
	}
	.item-img{
		width: 100%;
	}
	.pinterest-list-wrap{
		position:relative;
	}
	.price{
		position: absolute;
		bottom: .3rem;
		left: 0;
		height: .45rem;
		line-height: .45rem;
		background: #ff9800;
		color: #FFFFFF;
	}
	.current-price{
		font-size:.28rem;
	}
	.yprice{
		margin-left: .15rem;
		padding-right: .15rem;
		font-size:.20rem;
		text-decoration: line-through;
	}
	.price-suggest::after {
	    content: "";
	    overflow: hidden;
	    position: absolute;
	    top: 0;
	    width: 0;
	    height: 0;
	    border-top: .45rem solid #ff9800;
	    border-right: .14rem solid transparent;
    }
    .list-title{
    	padding: 0.2rem;
    }
    .weekendsuggest-name{
    	font-size: .32rem; 
    	line-height: .46rem;   	
    	color:##212121;
    	margin-bottom: .2rem;
    }
    .weekendsuggest-name-position{
	    color: #9e9e9e;
        font-size: .24rem;
	}
</style>
