<template>

    <header class="header">
        <a class="header-left" ></a>
        <a class="header-linkarea" href="#" />
            
                <span class="header-single">
                    输入城市/景点/游玩主题
                </span>
          
        </a>
        <a href="#" class="header-right">
            <span class="header-nav-city">
                北京
                <i class="header-corner"></i>
            </span>
        </a>
    </header>
 
</template>

<script>
export default {
  data () {
  	return {
  		
  	}
  }
}
</script>

<style scoped>
	.header{height:.88rem;width:100%;background: #00bcd4;position: relative;text-align: center;font-size: .28rem;}
	.header-left{
        float: left;
        transform: rotateZ(45deg);
        width:.24rem;
        height:.24rem;
        border-left:0.05rem solid #fff;
        border-bottom: 0.05rem solid #fff;
        margin:.25rem .3rem;
    }
	.header-linkarea{height: 100%;text-decoration: none;background:#fff;display: block;position: absolute;height: .6rem;width: 5.4rem;border-radius: 5px;top:.14rem;left: .8rem;}
	.header-single{display: inline-block;overflow: hidden;position: absolute;left: .77rem;top: .3rem;width: 3.6rem;white-space: nowrap;text-overflow: ellipsis;color: #e4e7ea;font-size: .28rem;}
	.header-nav-city{padding: 0 .22rem;color: #fff;text-align: center;}
	.header-right{display: inline-block;line-height: .88rem;margin-right: .04rem;color: #fff;height: 100%;text-decoration: none;font-size: .28rem;position: absolute;right: 0;}
	.header-corner{  width:0;height:0;border-width:6px 6px 0;border-style:solid;border-color:#fff transparent transparent;display: inline-block;margin-top: -5px;} 

</style>