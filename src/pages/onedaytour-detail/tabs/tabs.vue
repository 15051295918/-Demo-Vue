<template>
    <div>
        <ul :class='{tab:true, "tab-fixed":tabFixed, "border-bottom":true}'>
            <li v-for="(item, index) in tabs" :class="{tabs, active: index==activeIndex}" @click="hadleTabItemClick(index)">{{item.title}}</li>
        </ul>
        <tour-itinerary></tour-itinerary>
        <expense-explanation></expense-explanation>
        <instructions></instructions>
    </div>
</template>

<script>
    import TourItinerary from './tour-itinerary';
    import ExpenseExplanation from './expense-explanation';
    import Instructions from './instructions';


    export default {

        data() {
            return {
                tabs: [{
                    "title": "行程介绍"
                }, {
                    "title": "费用说明"
                }, {
                    "title": "使用说明"
                }],
                activeIndex: 0
            }
        },
        props:[
            "scrollTop"
        ],
        components: {
            "tour-itinerary": TourItinerary,
            "expense-explanation": ExpenseExplanation,
            "instructions": Instructions
        },
        methods:{
            hadleTabItemClick: function(index) {
                this.activeIndex = index;
            }
        },
        computed:{
            tabFixed: function(){
                return this.scrollTop>400;
            }
        }
    }

</script>


<style scoped>
    .tab {
        position: relative;
        display: flex;
        margin-top: .2rem;
        height: .84rem;
        font-size: .28rem;
        background: #fff;
        z-index: 100;
    }

    .tab-fixed{
        position: fixed;
        left:0;
        right:0;
        top:.66rem;
    }

    .tabs {
        flex: 1;
        text-align: center;
        width: 30%;
        height: .84rem;
        line-height: .84rem;
        color: #616161;
    }

    .active {
        box-sizing: border-box;
        color: #00afc7;
        border-bottom: .04rem solid #00afc7;
    }
</style>