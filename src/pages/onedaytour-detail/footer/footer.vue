<template>
    <div>
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
 div{
     background: red;
 }

</style>