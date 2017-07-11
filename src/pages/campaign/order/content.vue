<template>
	<div class="cam-order-content">
            <div class="cam-order-info-outer">
                <div class="cam-order-info-main">
                    <h2 class="cam-order-info-title">【休闲轻食】小苏州千禧福团 320g*2盒（包邮）</h2>
                </div>    
                <div class="cam-order-info-sub">
                    <p>
                        每次参与人数越多，夺取宝贝几率越大
                    </p>
                </div>             
            </div>

            <div class="cam-order-focus-outer">
                <div class="cam-order-row">
                    <label class="cam-order-row-field">购买数量</label>
                    <div class="cam-order-number-outer">
                        <div class="cam-order-input">
                        	<input type="tel" max="33" min="1" value="0" class="cam-order-input-con">
                        </div>
                        <input type="number" min="1" max="" class="cam-order-textinput" name="count" value="1" id="count" style="display: none;">
                        <div class="cam-order-shortcuts-list">
	                        <div class="cam-order-shortcuts-item">
	                        	<span class="cam-order-shortcuts-number">5</span>
	                        </div>
	                        <div class="cam-order-shortcuts-item">
	                        	<span class="cam-order-shortcuts-number">10</span>
	                        </div>
	                        <div class="cam-order-shortcuts-item">
	                        	<span class="cam-order-shortcuts-number">15</span>
	                        </div>
	                        <div class="cam-order-shortcuts-item">
	                        	<span class="cam-order-shortcuts-number">20</span>
	                        </div>
                        </div>
                    </div>
                </div>
            </div>


	</div>
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
	.cam-order-info-outer {
	    margin: .2rem .2rem -.06rem;
	}

	.cam-order-content {
	    position: relative;
	}

	.cam-order-info-title {
	    color: #333;
	    font-size: .32rem;
	    line-height: .42rem;
	}

	.cam-order-info-sub {
	    position: relative;
	    margin-top: .05rem;
	    color: #888;
	    font-size: .28rem;
	    line-height: .46rem;
	}

	.cam-order-focus-outer {
	    border-top: 1px dashed #dadada;
	    position: relative;
	    margin: .2rem 0;
	    background-color: #fff;
	}

	.cam-order-focus-outer::before{
	    content: "\0020";
	    position: absolute;
	    z-index: 2;
	    top: -.12rem;
	    width: .2rem;
	    height: .2rem;
	    border: 1px solid #dadada;
	    background: #fff;
	    -webkit-border-radius: .24rem;
	    -moz-border-radius: .24rem;
	    border-radius: .24rem;
	    left: -.12rem;
	}


</style>
