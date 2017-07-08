<template>
    <div>
        <user-comment></uer-comment>
        <more-quotation></more-quotation>
    </div>
</template>
        
<script>
    import user-comment from './user-comment';
    import more-quotation from './more-quotation';

export default {
   
    data () {
        return {
             
        }
    },
    components: {
        "user-comment": uer-comment,
        "more-quotation": more-quotation
    }
}
</script>


<style scoped>
 div{
     background: red;
 }

</style>