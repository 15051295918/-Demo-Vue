<template>
    <div class="main-footer border-leftright">
        <user-comment></user-comment>
        <more-quotation></more-quotation>
    </div>
</template>
        
<script>
    import userComment from './user-comment';
    import moreQuotation from './more-quotation';

export default {
   
    data () {
        return {
             
        }
    },
    components: {
        "user-comment": userComment,
        "more-quotation": moreQuotation
    }
}
</script>


<style scoped>
    .main-footer::after{
       border-color: #e3e3e4;
    }

</style>