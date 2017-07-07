<template>
    <div class="main">

        <!--老纪-->
        <index-header></index-header>
        <user-reviews></user-reviews>

        <!--武鹤-->
        <index-tabs></index-tabs>

        <!--国辉-->
        <index-footer></index-footer>

        <!--坤勇-->
        <booking-ticket></booking-ticket>

    </div>
</template>

<script>
    import Header from './header/header';
    import UserReviews from './header/user-reviews';
    import Tabs from './tabs/tabs';
    import Footer from './footer/footer';
    import BookingTicket from './booking-ticket/booking-ticket';

    export default {

        data() {
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