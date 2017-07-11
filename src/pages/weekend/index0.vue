<template>
	<div class="main">
		<weekend-header></weekend-header>

		<div class="product" >
	  		<div class="product-item" v-for="(list,index) in productInfo" :key="index+'product'" v-model="index"  @click="getModel">
	  			  <div class="product-wrapper" v-on:click="show = !show">
  	  				<img class="product-img" :src="list.imgUrl"/>
  	  			</div>
  	  			
            <div class="product-info">
  	  				<h2 class="product-name">{{list.title}}</h2>
  	  				<p class="product-detail">{{list.content}}</p>
  	  			</div>
        

          <div class="model" v-if="show">
              <div class="model_con" >
                <div class="model_hidden" v-on:click="show = !show">X</div>
                <div class="model_img_wrap"><img :src="list.s_imgUrl"></div>
                <div class="model_detail_wrap"><p class="model_detail">{{list.detail}}</p></div>
              </div>
         </div>

       </div>
   </div>

</div>
</template>

<script>
import header from './header'
  export default {
     created:function(){
       	this.$http.get('/static/weekend.json').then(response => {
              this.productInfo = response.body.data[1];
              }, response => {
                  console.log("get index data error");
              });
     },

    data () {
        return {
             show:false,
             index:"",
             productInfo:[]
             
        }
      },

    methods:{
        getModel(){
             console.log("13")
        }
      },

    components:{
      	"weekend-header": header
      }
  }
</script>

 
<style scoped>
	.main {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      min-height: 100%;
      background: #f5f5f5;
  }

  .product-item {
      position: relative;
      background-color: #fff;
	  	margin-bottom: .2rem;
  }

  .product-wrapper {
  		overflow: hidden;
  		height: 0;
  		width: 100%;
  		padding-bottom:43.37288%;


  }

  .product-img {
      width:100%;
  }

  .product-info {
    	padding:.14rem .2rem .24rem .2rem;
    	background-color: #fff;
  }

  .product-name {
  		color: #212121;
  		font-size:.36rem;
  		line-height: .54rem;
  	
  }

  .product-detail {
  		color: #616161;
  		font-size: .26rem;
  		line-height: .45rem;
  }

  .model {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    
  }

  .model_con {
    position: fixed;
    top: 20%;
    left: 5%;
    width: 90%;
    height: 60%;
    background-color: #fefefe;
    border-radius: 0.2rem;
  }

    .model_hidden{
    position: absolute;
    top: 5px;
    right: 10px;
    color: #fefefe;

  }
  .model_img_wrap {
    width: 100%;
    height: 40%;
    overflow: hidden;
    border-radius: 0.2rem 0.2rem 0 0;
    border-bottom: 1px solid #ccc;
  }

  .model_img_wrap>img{
    width: 100%;
  }

  .model_detail_wrap {
    width: 92%;
    height: 56%;
    padding:4%;
    overflow: hidden; 
  }

  .model_detail {
    text-indent: 30px;
    overflow: hidden;
    line-height: 0.5rem;
  }

</style>
