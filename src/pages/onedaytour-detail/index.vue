<template>
    <div class="main">
        <index-header></index-header>
        <user-reviews></user-reviews>

        <index-tabs></index-tabs>

        <index-footer></index-footer>

        <booking-ticket></booking-ticket>
    </div>
</template>

<script>
import Header from './header';
import UserReviews from './user-reviews';
import Tabs from './tabs';
import Footer from './footer';
import BookingTicket from './booking-ticket';

export default {
   
    data () {
        return {
              
        }
    },
    components: {
        "index-header": Header,
        "user-reviews": UserReviews,
        "index-tabs": Tabs,
        "index-footer": Footer,
        "booking-ticket": BookingTicket
    }
}
</script>


<style scoped>


</style>